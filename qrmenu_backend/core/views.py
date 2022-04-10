import json
import stripe

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.shortcuts import render
from django.views import View
from rest_framework import generics
from . import models, serializers, permissions
import os
from django.http import HttpResponse, HttpResponseNotFound



# Create your views here.
class PlaceList(generics.ListCreateAPIView):
  serializer_class = serializers.PlaceSerializer

  def get_queryset(self):
    return models.Place.objects.filter(owner_id=self.request.user.id)

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

class PlaceDetail(generics.RetrieveUpdateDestroyAPIView):
  permission_classes = [permissions.IsOwnerOrReadOnly]
  serializer_class = serializers.PlaceDetailSerializer
  queryset = models.Place.objects.all()

class CategoryList(generics.CreateAPIView):
  permission_classes = [permissions.PlaceOwnerOrReadOnly]
  serializer_class = serializers.CategorySerializer

class CategoryDetail(generics.UpdateAPIView, generics.DestroyAPIView):
  permission_classes = [permissions.PlaceOwnerOrReadOnly]
  serializer_class = serializers.CategorySerializer
  queryset = models.Category.objects.all()

class MenuItemList(generics.CreateAPIView):
  permission_classes = [permissions.PlaceOwnerOrReadOnly]
  serializer_class = serializers.MenuItemSerializer

class MenuItemDetail(generics.UpdateAPIView, generics.DestroyAPIView):
  permission_classes = [permissions.PlaceOwnerOrReadOnly]
  serializer_class = serializers.MenuItemSerializer
  queryset = models.MenuItem.objects.all()

def home(request):
  return render(request, 'index.html')


stripe.api_key = settings.STRIPE_API_SECRET_KEY

@csrf_exempt
def create_payment_intent(request):
  try:
    data = json.loads(request.body)
    intent = stripe.PaymentIntent.create(
      amount = data['amount'] * 100,
      currency = 'usd',
      payment_method = data['payment_method']['id'],
      off_session = True,
      confirm = True,
    )

    order = models.Order.objects.create(
      place_id = data['place'],
      table = data['table'],
      detail = json.dumps(data['detail']),
      amount = data['amount'],
      payment_intent = intent['id']
    )

    return JsonResponse({
      "success": True,
      "order": order.id,
    })
  except Exception as e:
    return JsonResponse({
      "success": False,
      "error": str(e),
    })

class OrderList(generics.ListAPIView):
  serializer_class = serializers.OrderSerializer

  def get_queryset(self):
    return models.Order.objects.filter(place__owner_id=self.request.user.id, place_id=self.request.GET.get('place'))

class OrderDetail(generics.UpdateAPIView):
  permission_classes = [permissions.PlaceOwnerOrReadOnly]
  serializer_class = serializers.OrderSerializer
  queryset = models.Order.objects.all()


class Assets(View):
  def get(self, _request, filename):
    path = os.path.join(os.path.dirname(__file__), 'static', filename)

    if os.path.isfile(path):
      with open(path, 'rb') as file:
        return HttpResponse(file.read(), content_type='application/javascript')
    else:
      return HttpResponseNotFound()
