(this.webpackJsonpqrmenu_frontend =
  this.webpackJsonpqrmenu_frontend || []).push([
  [0],
  {
    159: function (e, t, n) {},
    284: function (e, t, n) {
      "use strict";
      n.r(t);
      n(153), n(154);
      var c = n(1),
        a = n.n(c),
        r = n(21),
        s = n.n(r),
        i = (n(159), n(26)),
        o = n(15),
        j = n(24),
        l = n(10),
        d = n.n(l),
        b = n(11),
        u = n(9);
      function O(e, t) {
        var n = t.data,
          c = void 0 === n ? null : n,
          a = t.token,
          r = void 0 === a ? null : a,
          s = t.method,
          i = void 0 === s ? "GET" : s;
        return fetch(e, {
          method: i,
          headers: {
            Authorization: r ? "Token ".concat(r) : "",
            "Content-Type": "application/json",
          },
          body: "GET" !== i && "DELETE" !== i ? JSON.stringify(c) : null,
        })
          .then(function (e) {
            return e.ok
              ? "DELETE" === i || e.json()
              : e
                  .json()
                  .then(function (t) {
                    if (400 === e.status) {
                      var n = Object.keys(t).map(function (e) {
                        return "".concat(t[e].join(" "));
                      });
                      throw new Error(n.join(" "));
                    }
                    throw new Error(JSON.stringify(t));
                  })
                  .catch(function (t) {
                    if ("SyntaxError" === t.name) throw new Error(e.statusText);
                    throw new Error(t);
                  });
          })
          .catch(function (e) {
            Object(j.b)(e.message, { type: "error" });
          });
      }
      function h(e, t) {
        return O("/auth/token/login/", {
          data: { username: e, password: t },
          method: "POST",
        });
      }
      function x(e, t) {
        return O("/auth/users/", {
          data: { username: e, password: t },
          method: "POST",
        });
      }
      function p(e, t) {
        return O("/api/places/".concat(e), { token: t });
      }
      function m(e, t, n) {
        return O("/api/places/".concat(e), {
          data: t,
          token: n,
          method: "PATCH",
        });
      }
      var f = n(2),
        v = Object(c.createContext)(),
        g = function (e) {
          var t = e.children,
            n = Object(c.useState)(localStorage.getItem("token")),
            a = Object(u.a)(n, 2),
            r = a[0],
            s = a[1],
            i = Object(c.useState)(!1),
            o = Object(u.a)(i, 2),
            j = o[0],
            l = o[1],
            O = {
              token: r,
              loading: j,
              signIn: (function () {
                var e = Object(b.a)(
                  d.a.mark(function e(t, n, c) {
                    var a;
                    return d.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return l(!0), (e.next = 3), h(t, n);
                          case 3:
                            (a = e.sent),
                              console.log("response", a),
                              a &&
                                a.auth_token &&
                                (localStorage.setItem("token", a.auth_token),
                                s(a.auth_token),
                                c()),
                              l(!1);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, c) {
                  return e.apply(this, arguments);
                };
              })(),
              signOut: function () {
                localStorage.removeItem("token"), s("");
              },
              register: (function () {
                var e = Object(b.a)(
                  d.a.mark(function e(t, n, c) {
                    var a;
                    return d.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return l(!0), (e.next = 3), x(t, n);
                          case 3:
                            (a = e.sent) && a.id && c(), l(!1);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, c) {
                  return e.apply(this, arguments);
                };
              })(),
            };
          return Object(f.jsx)(v.Provider, { value: O, children: t });
        },
        k = v,
        y = n(16),
        w = n(152);
      var C,
        N = function (e) {
          var t = e.children,
            n = Object(w.a)(e, ["children"]),
            a = Object(c.useContext)(k);
          return Object(f.jsx)(
            o.b,
            Object(y.a)(
              Object(y.a)({}, n),
              {},
              {
                render: function (e) {
                  var n = e.location;
                  return a.token
                    ? t
                    : Object(f.jsx)(o.a, {
                        to: { pathname: "/login", state: { from: n } },
                      });
                },
              }
            )
          );
        },
        S = n(291),
        E = n(290),
        _ = n(292),
        P = n(136),
        z = n(293),
        L = n(294),
        T = n(300),
        I = n(299),
        G = function (e) {
          var t = e.children,
            n = Object(o.g)(),
            a = Object(c.useContext)(k);
          return Object(f.jsxs)(f.Fragment, {
            children: [
              Object(f.jsxs)(T.a, {
                bg: "light",
                variant: "light",
                className: "mb-4",
                children: [
                  Object(f.jsx)(T.a.Brand, { href: "/", children: "QR Menu" }),
                  Object(f.jsx)(I.a, {
                    children: Object(f.jsx)(I.a.Link, {
                      onClick: function () {
                        n.push("/places");
                      },
                      children: "Places",
                    }),
                  }),
                  Object(f.jsx)(I.a, {
                    className: "flex-grow-1 justify-content-end",
                    children: a.token
                      ? Object(f.jsx)(I.a.Link, {
                          onClick: function () {
                            a.signOut(), n.push("/login");
                          },
                          children: "Logout",
                        })
                      : [
                          Object(f.jsx)(
                            I.a.Link,
                            {
                              onClick: function () {
                                n.replace("/login");
                              },
                              children: "Login",
                            },
                            1
                          ),
                          Object(f.jsx)(
                            I.a.Link,
                            {
                              onClick: function () {
                                n.replace("/register");
                              },
                              children: "Register",
                            },
                            2
                          ),
                        ],
                  }),
                ],
              }),
              Object(f.jsx)(E.a, { children: t }),
            ],
          });
        },
        D = function () {
          return Object(f.jsx)(G, {
            children: Object(f.jsx)(S.a, {
              className: "bg-light",
              children: Object(f.jsx)(E.a, {
                children: Object(f.jsxs)(_.a, {
                  children: [
                    Object(f.jsxs)(P.a, {
                      md: 6,
                      className: "my-auto",
                      children: [
                        Object(f.jsx)("h1", {
                          children: Object(f.jsx)("b", {
                            children: "QR Code Menu",
                          }),
                        }),
                        Object(f.jsx)("h5", {
                          className: "mt-4 mb-4",
                          children:
                            "A smart way to share your digital menu in a QR Code with your customers",
                        }),
                        Object(f.jsx)("br", {}),
                        Object(f.jsx)(z.a, {
                          href: "/places",
                          variant: "standard",
                          size: "lg",
                          children: "Create Your Menu",
                        }),
                      ],
                    }),
                    Object(f.jsx)(P.a, {
                      md: 6,
                      children: Object(f.jsx)(L.a, {
                        src: "https://assets.materialup.com/uploads/ae60e834-349c-4c94-8189-2450f09ad37a/preview.gif",
                        rounded: !0,
                        fluid: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        A = n(302),
        M = n(298),
        R = n(295),
        q = function () {
          var e = Object(c.useState)(""),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(c.useState)(""),
            s = Object(u.a)(r, 2),
            i = s[0],
            j = s[1],
            l = Object(o.g)(),
            d = Object(c.useContext)(k);
          Object(c.useEffect)(function () {
            d.token && l.replace("/places");
          });
          return Object(f.jsx)(G, {
            children: Object(f.jsx)(_.a, {
              className: "justify-content-center",
              children: Object(f.jsx)(P.a, {
                lg: 6,
                md: 8,
                children: Object(f.jsx)(A.a, {
                  children: Object(f.jsxs)(A.a.Body, {
                    children: [
                      Object(f.jsx)("h3", {
                        className: "text-center",
                        children: Object(f.jsx)("b", { children: "LOGIN" }),
                      }),
                      Object(f.jsxs)(M.a.Group, {
                        children: [
                          Object(f.jsx)(M.a.Label, { children: "Username" }),
                          Object(f.jsx)(M.a.Control, {
                            type: "text",
                            placeholder: "Enter Username",
                            value: n,
                            onChange: function (e) {
                              return a(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(f.jsxs)(M.a.Group, {
                        children: [
                          Object(f.jsx)(M.a.Label, { children: "Password" }),
                          Object(f.jsx)(M.a.Control, {
                            type: "password",
                            placeholder: "Enter Password",
                            value: i,
                            onChange: function (e) {
                              return j(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(f.jsx)(z.a, {
                        variant: "standard",
                        block: !0,
                        onClick: function () {
                          d.signIn(n, i, function () {
                            return l.replace("/places");
                          });
                        },
                        disabled: d.loading,
                        children: d.loading
                          ? Object(f.jsx)(R.a, {
                              variant: "standard",
                              as: "span",
                              animation: "border",
                              size: "sm",
                              role: "status",
                              "aria-hidden": "true",
                            })
                          : "Sign In",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        H = function () {
          var e = Object(c.useState)(""),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(c.useState)(""),
            s = Object(u.a)(r, 2),
            i = s[0],
            j = s[1],
            l = Object(o.g)(),
            d = Object(c.useContext)(k);
          Object(c.useEffect)(function () {
            d.token && l.replace("/places");
          });
          return Object(f.jsx)(G, {
            children: Object(f.jsx)(_.a, {
              className: "justify-content-center",
              children: Object(f.jsx)(P.a, {
                lg: 6,
                md: 8,
                children: Object(f.jsx)(A.a, {
                  children: Object(f.jsxs)(A.a.Body, {
                    children: [
                      Object(f.jsx)("h3", {
                        className: "text-center",
                        children: Object(f.jsx)("b", { children: "REGISTER" }),
                      }),
                      Object(f.jsxs)(M.a.Group, {
                        children: [
                          Object(f.jsx)(M.a.Label, { children: "Username" }),
                          Object(f.jsx)(M.a.Control, {
                            type: "text",
                            placeholder: "Enter Username",
                            value: n,
                            onChange: function (e) {
                              return a(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(f.jsxs)(M.a.Group, {
                        children: [
                          Object(f.jsx)(M.a.Label, { children: "Password" }),
                          Object(f.jsx)(M.a.Control, {
                            type: "password",
                            placeholder: "Enter Password",
                            value: i,
                            onChange: function (e) {
                              return j(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(f.jsx)(z.a, {
                        variant: "standard",
                        block: !0,
                        onClick: function () {
                          d.register(n, i, function () {
                            return l.replace("/places");
                          });
                        },
                        disabled: d.loading,
                        children: d.loading
                          ? Object(f.jsx)(R.a, {
                              variant: "standard",
                              as: "span",
                              animation: "border",
                              size: "sm",
                              role: "status",
                              "aria-hidden": "true",
                            })
                          : "Register",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        B = n(13),
        U = n(297),
        F = n(14),
        J = n(151),
        Q = F.a.div(
          C ||
            (C = Object(B.a)([
              "\n  border: 1px dashed #ced4d9;\n  border-radius: 5px;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 142px;\n  img {\n    height: 140px;\n  }\n",
            ]))
        );
      var $,
        Y,
        V,
        W,
        Z,
        X,
        K,
        ee,
        te,
        ne,
        ce,
        ae,
        re = function (e) {
          var t = e.value,
            n = e.onChange,
            a = Object(c.useState)(!1),
            r = Object(u.a)(a, 2),
            s = r[0],
            i = r[1],
            o = Object(c.useCallback)(function (e) {
              console.log(e),
                i(!0),
                (function (e) {
                  var t = new FormData();
                  return (
                    t.append("file", e),
                    t.append("upload_preset", "qrmenu_photos"),
                    fetch(
                      "https://api.cloudinary.com/v1_1/democ4s/image/upload",
                      { method: "POST", body: t }
                    ).then(function (e) {
                      return e.json();
                    })
                  );
                })(e[0])
                  .then(function (e) {
                    return n(e.url);
                  })
                  .finally(function () {
                    return i(!1);
                  });
            }, []),
            j = Object(J.a)({ onDrop: o, multiple: !1, accept: "image/*" }),
            l = j.getRootProps,
            d = j.getInputProps;
          return Object(f.jsxs)(
            Q,
            Object(y.a)(
              Object(y.a)({}, l()),
              {},
              {
                children: [
                  Object(f.jsx)("input", Object(y.a)({}, d())),
                  t
                    ? Object(f.jsx)("img", { src: t })
                    : s
                    ? Object(f.jsx)(R.a, {
                        variant: "standard",
                        animation: "border",
                        role: "staus",
                      })
                    : Object(f.jsx)("span", {
                        children:
                          "Drag & drop file here, or click to select file",
                      }),
                ],
              }
            )
          );
        },
        se = function (e) {
          var t = e.onDone,
            n = Object(c.useState)(""),
            a = Object(u.a)(n, 2),
            r = a[0],
            s = a[1],
            i = Object(c.useState)(""),
            o = Object(u.a)(i, 2),
            j = o[0],
            l = o[1],
            h = Object(c.useContext)(k),
            x = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (n = { name: r, image: j }),
                            (c = h.token),
                            O("/api/places/", {
                              data: n,
                              token: c,
                              method: "POST",
                            })
                          );
                        case 2:
                          e.sent && (s(""), l(""), t());
                        case 4:
                        case "end":
                          return e.stop();
                      }
                    var n, c;
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(f.jsxs)("div", {
            children: [
              Object(f.jsx)("h4", {
                className: "text-center",
                children: "Place",
              }),
              Object(f.jsxs)(M.a.Group, {
                children: [
                  Object(f.jsx)(M.a.Label, { children: "Name" }),
                  Object(f.jsx)(M.a.Control, {
                    type: "text",
                    placeholder: "Enter Name",
                    value: r,
                    onChange: function (e) {
                      return s(e.target.value);
                    },
                  }),
                ],
              }),
              Object(f.jsxs)(M.a.Group, {
                children: [
                  Object(f.jsx)(M.a.Label, { children: "Image" }),
                  Object(f.jsx)(re, { value: j, onChange: l }),
                ],
              }),
              Object(f.jsx)(z.a, {
                variant: "standard",
                block: !0,
                onClick: x,
                children: "Add",
              }),
            ],
          });
        },
        ie = F.a.div(
          $ ||
            ($ = Object(B.a)([
              "\n  margin-bottom: 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n  :hover {\n    transform: scale(1.05);\n  }\n  > div {\n    background-size: cover;\n    height: 200px;\n    border-radius: 5px;\n  }\n  > p {\n    margin-top: 5px;\n    font-size: 20px;\n    font-weight: bold;\n  }\n",
            ]))
        ),
        oe = F.a.div(
          Y ||
            (Y = Object(B.a)([
              "\n  border: 1px dashed gray;\n  height: 200px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  cursor: pointer;\n  background-color: white;\n  :hover {\n    background-color: #fbfbfb;\n  }\n",
            ]))
        ),
        je = function () {
          var e = Object(c.useState)([]),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(c.useState)(!1),
            s = Object(u.a)(r, 2),
            i = s[0],
            j = s[1],
            l = Object(c.useContext)(k),
            h = Object(o.g)(),
            x = function () {
              return j(!1);
            },
            p = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), O("/api/places/", { token: l.token })
                          );
                        case 2:
                          (t = e.sent) && a(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(function () {
              p();
            }, []),
            Object(f.jsxs)(G, {
              children: [
                Object(f.jsx)("h3", { children: "My Places" }),
                Object(f.jsx)(U.a, {
                  show: i,
                  onHide: x,
                  centered: !0,
                  children: Object(f.jsx)(U.a.Body, {
                    children: Object(f.jsx)(se, {
                      onDone: function () {
                        p(), x();
                      },
                    }),
                  }),
                }),
                Object(f.jsxs)(_.a, {
                  children: [
                    n.map(function (e) {
                      return Object(f.jsx)(
                        P.a,
                        {
                          lg: 4,
                          children: Object(f.jsxs)(ie, {
                            onClick: function () {
                              return h.push("/places/".concat(e.id));
                            },
                            children: [
                              Object(f.jsx)("div", {
                                style: {
                                  backgroundImage: "url(".concat(e.image, ")"),
                                },
                              }),
                              Object(f.jsx)("p", { children: e.name }),
                            ],
                          }),
                        },
                        e.id
                      );
                    }),
                    Object(f.jsx)(P.a, {
                      lg: 4,
                      children: Object(f.jsx)(oe, {
                        onClick: function () {
                          return j(!0);
                        },
                        children: "Add New Place",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        le = n(44),
        de = n(37),
        be = n(74),
        ue = n(143),
        Oe = n(296),
        he = n(301),
        xe = function (e) {
          var t,
            n = e.place,
            a = e.onDone,
            r = e.item,
            s = void 0 === r ? {} : r,
            i = Object(c.useState)(""),
            o = Object(u.a)(i, 2),
            l = o[0],
            h = o[1],
            x = Object(c.useState)(!1),
            p = Object(u.a)(x, 2),
            m = p[0],
            v = p[1],
            g = Object(c.useState)(s.category),
            y = Object(u.a)(g, 2),
            w = y[0],
            C = y[1],
            N = Object(c.useState)(s.name),
            S = Object(u.a)(N, 2),
            E = S[0],
            _ = S[1],
            P = Object(c.useState)(s.price || 0),
            L = Object(u.a)(P, 2),
            T = L[0],
            I = L[1],
            G = Object(c.useState)(s.description),
            D = Object(u.a)(G, 2),
            A = D[0],
            R = D[1],
            q = Object(c.useState)(s.image),
            H = Object(u.a)(q, 2),
            B = H[0],
            U = H[1],
            F = Object(c.useState)(
              void 0 === s.is_available || !!s.is_available
            ),
            J = Object(u.a)(F, 2),
            Q = J[0],
            $ = J[1],
            Y = Object(c.useRef)(null),
            V = Object(c.useContext)(k),
            W = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (c = { name: l, place: n.id }),
                            (r = V.token),
                            O("/api/categories/", {
                              data: c,
                              token: r,
                              method: "POST",
                            })
                          );
                        case 2:
                          (t = e.sent),
                            console.log(t),
                            t &&
                              (Object(j.b)(
                                "Category ".concat(t.name, " was created."),
                                { type: "success" }
                              ),
                              C(t.id),
                              h(""),
                              v(!1),
                              a());
                        case 5:
                        case "end":
                          return e.stop();
                      }
                    var c, r;
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Z = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (c = {
                              place: n.id,
                              category: w,
                              name: E,
                              price: T,
                              description: A,
                              image: B,
                              is_available: Q,
                            }),
                            (r = V.token),
                            O("/api/menu_items/", {
                              data: c,
                              token: r,
                              method: "POST",
                            })
                          );
                        case 2:
                          (t = e.sent),
                            console.log(t),
                            t &&
                              (Object(j.b)(
                                "Menu Item ".concat(t.name, " was created"),
                                { type: "success" }
                              ),
                              C(""),
                              _(""),
                              I(0),
                              R(""),
                              U(""),
                              $(!0),
                              a());
                        case 5:
                        case "end":
                          return e.stop();
                      }
                    var c, r;
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            X = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (c = s.id),
                            (r = {
                              place: n.id,
                              category: w,
                              name: E,
                              price: T,
                              description: A,
                              image: B,
                              is_available: Q,
                            }),
                            (i = V.token),
                            O("/api/menu_items/".concat(c), {
                              data: r,
                              token: i,
                              method: "PATCH",
                            })
                          );
                        case 2:
                          (t = e.sent) &&
                            (console.log(t),
                            Object(j.b)(
                              "Menu Item ".concat(t.name, " was updated"),
                              { type: "success" }
                            ),
                            C(""),
                            _(""),
                            I(0),
                            R(""),
                            U(""),
                            $(!1),
                            a());
                        case 4:
                        case "end":
                          return e.stop();
                      }
                    var c, r, i;
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(f.jsxs)("div", {
            children: [
              Object(f.jsxs)(M.a.Group, {
                children: [
                  Object(f.jsx)(M.a.Label, { children: "Category" }),
                  Object(f.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [
                      Object(f.jsxs)(M.a.Control, {
                        as: "select",
                        value: w,
                        onChange: function (e) {
                          return C(e.target.value);
                        },
                        children: [
                          Object(f.jsx)("option", {}),
                          null === n ||
                          void 0 === n ||
                          null === (t = n.categories) ||
                          void 0 === t
                            ? void 0
                            : t.map(function (e) {
                                return Object(f.jsx)(
                                  "option",
                                  { value: e.id, children: e.name },
                                  e.id
                                );
                              }),
                        ],
                      }),
                      Object(f.jsx)(z.a, {
                        ref: Y,
                        variant: "link",
                        onClick: function () {
                          return v(!0);
                        },
                        children: Object(f.jsx)(be.b, { size: 25 }),
                      }),
                      Object(f.jsx)(Oe.a, {
                        show: m,
                        target: Y.current,
                        placement: "bottom",
                        rootClose: !0,
                        onHide: function () {
                          return v(!1);
                        },
                        children: Object(f.jsxs)(he.a, {
                          id: "popover-contained",
                          children: [
                            Object(f.jsx)(he.a.Title, {
                              as: "h3",
                              children: "Category",
                            }),
                            Object(f.jsxs)(he.a.Content, {
                              children: [
                                Object(f.jsx)(M.a.Group, {
                                  children: Object(f.jsx)(M.a.Control, {
                                    type: "text",
                                    placeholder: "Category Name",
                                    value: l,
                                    onChange: function (e) {
                                      return h(e.target.value);
                                    },
                                  }),
                                }),
                                Object(f.jsx)(z.a, {
                                  variant: "standard",
                                  block: !0,
                                  onClick: W,
                                  children: "Add Category",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(f.jsxs)(M.a.Group, {
                children: [
                  Object(f.jsx)(M.a.Label, { children: "Name" }),
                  Object(f.jsx)(M.a.Control, {
                    type: "text",
                    placeholder: "Enter Name",
                    value: E,
                    onChange: function (e) {
                      return _(e.target.value);
                    },
                  }),
                ],
              }),
              Object(f.jsxs)(M.a.Group, {
                children: [
                  Object(f.jsx)(M.a.Label, { children: "Price" }),
                  Object(f.jsx)(M.a.Control, {
                    type: "number",
                    placeholder: "Enter Price",
                    value: T,
                    onChange: function (e) {
                      return I(e.target.value);
                    },
                  }),
                ],
              }),
              Object(f.jsxs)(M.a.Group, {
                children: [
                  Object(f.jsx)(M.a.Label, { children: "Description" }),
                  Object(f.jsx)(M.a.Control, {
                    type: "text",
                    placeholder: "Enter Description",
                    value: A,
                    onChange: function (e) {
                      return R(e.target.value);
                    },
                  }),
                ],
              }),
              Object(f.jsxs)(M.a.Group, {
                children: [
                  Object(f.jsx)(M.a.Label, { children: "Image" }),
                  Object(f.jsx)(re, { value: B, onChange: U }),
                ],
              }),
              Object(f.jsx)(M.a.Group, {
                children: Object(f.jsx)(M.a.Check, {
                  type: "checkbox",
                  label: "Is available?",
                  checked: Q,
                  onChange: function (e) {
                    return $(e.target.checked);
                  },
                }),
              }),
              Object(f.jsx)(z.a, {
                variant: "standard",
                block: !0,
                onClick: s.id ? X : Z,
                children: s.id ? "Update Menu Item" : "+ Add Menu Item",
              }),
            ],
          });
        },
        pe = n(141),
        me = F.a.div(
          V ||
            (V = Object(B.a)([
              "\n  border-radius: 5px;\n  background-color: white;\n  margin-bottom: 30px;\n  box-shadow: 1px 1px 8px rgba(0,0,0,0.1);\n  display: flex;\n  opacity: ",
              ";\n  > div:first-child {\n    width: 40%;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    background-size: cover;\n  }\n  > div:last-child {\n    padding: 15px 20px;\n    min-height: 150px;\n  }\n",
            ])),
          function (e) {
            return e.active ? 1 : 0.6;
          }
        ),
        fe = function (e) {
          var t = e.item,
            n = e.onEdit,
            c = e.onRemove,
            a = e.onOrder,
            r = e.color;
          return Object(f.jsxs)(me, {
            active: t.is_available,
            children: [
              Object(f.jsx)(P.a, {
                xs: 5,
                style: { backgroundImage: "url(".concat(t.image, ")") },
              }),
              Object(f.jsxs)(P.a, {
                xs: 7,
                className: "d-flex flex-column justify-content-between w-100",
                children: [
                  Object(f.jsxs)("div", {
                    children: [
                      Object(f.jsxs)("div", {
                        className:
                          "d-flex justify-content-between align-items-center mb-2",
                        children: [
                          Object(f.jsx)("h4", {
                            className: "mb-0",
                            children: Object(f.jsx)("b", { children: t.name }),
                          }),
                          Object(f.jsxs)("div", {
                            children: [
                              n
                                ? Object(f.jsx)(z.a, {
                                    variant: "link",
                                    onClick: n,
                                    children: Object(f.jsx)(pe.a, { size: 20 }),
                                  })
                                : null,
                              c
                                ? Object(f.jsx)(z.a, {
                                    variant: "link",
                                    onClick: c,
                                    children: Object(f.jsx)(de.a, {
                                      size: 20,
                                      color: "red",
                                    }),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsx)("p", {
                        className: "mb-4",
                        children: t.description,
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "d-flex justify-content-between align-items-end",
                    children: [
                      Object(f.jsxs)("div", {
                        children: [
                          Object(f.jsx)("h5", {
                            className: "mb-0 text-standard",
                            children: Object(f.jsxs)("b", {
                              style: { color: r },
                              children: ["$", t.price],
                            }),
                          }),
                          a
                            ? Object(f.jsx)(z.a, {
                                variant: "standard",
                                style: { backgroundColor: r },
                                className: "mt-2",
                                size: "sm",
                                onClick: function () {
                                  return a(t);
                                },
                                children: t.quantity
                                  ? "Add one more (".concat(t.quantity, ")")
                                  : "Add to shopping cart",
                              })
                            : null,
                        ],
                      }),
                      t.is_available
                        ? null
                        : Object(f.jsx)("small", {
                            className: "text-secondary",
                            children: "Not Available",
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ve = n(104),
        ge = n.n(ve),
        ke = n(142),
        ye = F.a.div(W || (W = Object(B.a)(["\n  position: relative;\n"]))),
        we = F.a.div(
          Z ||
            (Z = Object(B.a)([
              "\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.5);\n  > div {\n    margin: auto;\n  }\n",
            ]))
        ),
        Ce = F.a.div(
          X ||
            (X = Object(B.a)([
              "\n  text-align: center;\n  margin-top: 200px;\n  h1 {\n    font-size: 100px;\n    font-weight: bold;\n    margin-bottom: 50px;\n  }\n  h2 {\n    font-size: 60px;\n    margin-bottom: 100px\n  }\n",
            ]))
        ),
        Ne = function (e) {
          var t = e.table,
            n = e.placeId,
            a = Object(c.useRef)(),
            r = Object(ke.useReactToPrint)({
              content: function () {
                return a.current;
              },
            }),
            s = ""
              .concat(window.location.origin, "/menu/")
              .concat(n, "/")
              .concat(t);
          return Object(f.jsxs)(ye, {
            children: [
              Object(f.jsx)(ge.a, { value: s, size: 200 }),
              Object(f.jsx)(we, {
                children: Object(f.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    Object(f.jsx)(z.a, {
                      variant: "standard",
                      onClick: r,
                      className: "mr-2",
                      children: "Print Table ".concat(t),
                    }),
                    Object(f.jsx)(z.a, {
                      variant: "standard",
                      href: "/menu/".concat(n, "/").concat(t),
                      target: "_blank",
                      children: Object(f.jsx)(de.b, { size: 25 }),
                    }),
                  ],
                }),
              }),
              Object(f.jsx)("div", {
                style: { display: "none" },
                children: Object(f.jsxs)(Ce, {
                  ref: a,
                  children: [
                    Object(f.jsxs)("h1", { children: ["Table ", t] }),
                    Object(f.jsx)("h2", { children: "Scan for menu" }),
                    Object(f.jsx)(ge.a, { value: s, size: 500 }),
                  ],
                }),
              }),
            ],
          });
        },
        Se = Object(F.a)(z.a)(
          K ||
            (K = Object(B.a)([
              "\n  width: 30px;\n  height: 30px;\n  margin: 0 10px;\n  font-size: 20px;\n  line-height: 18px;\n",
            ]))
        ),
        Ee = function (e) {
          var t = e.show,
            n = e.onHide,
            c = e.place,
            a = e.onUpdatePlace;
          return Object(f.jsx)(U.a, {
            show: t,
            onHide: n,
            size: "lg",
            centered: !0,
            children: Object(f.jsx)(U.a.Body, {
              className: "text-center pt-4",
              children: Object(f.jsxs)(E.a, {
                children: [
                  Object(f.jsx)("h3", { children: "Tables QR Code" }),
                  Object(f.jsxs)("div", {
                    className: "d-flex align-items-center mt-4 mb-4",
                    children: [
                      Object(f.jsxs)("h5", {
                        className: "mb-0 mr-2",
                        children: [
                          "Total tables: ",
                          Object(f.jsx)("b", { children: c.number_of_tables }),
                        ],
                      }),
                      Object(f.jsx)(Se, {
                        variant: "lightgray",
                        size: "sm",
                        onClick: function () {
                          return a(c.number_of_tables - 1);
                        },
                        children: "-",
                      }),
                      Object(f.jsx)(Se, {
                        variant: "lightgray",
                        size: "sm",
                        onClick: function () {
                          return a(c.number_of_tables + 1);
                        },
                        children: "+",
                      }),
                    ],
                  }),
                  Object(f.jsx)(_.a, {
                    children: Array.from(
                      { length: c.number_of_tables },
                      function (e, t) {
                        return t + 1;
                      }
                    ).map(function (e) {
                      return Object(f.jsx)(
                        P.a,
                        {
                          lg: 4,
                          md: 6,
                          className: "mb-4",
                          children: Object(f.jsx)(Ne, {
                            table: e,
                            placeId: c.id,
                          }),
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        _e = F.a.div(
          ee ||
            (ee = Object(B.a)([
              "\n  background-color: white;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px rgba(0,0,0,0.05);\n",
            ]))
        ),
        Pe = function () {
          var e,
            t = Object(c.useState)({}),
            n = Object(u.a)(t, 2),
            a = n[0],
            r = n[1],
            s = Object(c.useState)(!1),
            i = Object(u.a)(s, 2),
            j = i[0],
            l = i[1],
            h = Object(c.useState)(null),
            x = Object(u.a)(h, 2),
            v = x[0],
            g = x[1],
            y = Object(c.useState)(!1),
            w = Object(u.a)(y, 2),
            C = w[0],
            N = w[1],
            S = function () {
              return l(!1);
            },
            E = Object(c.useContext)(k),
            L = Object(o.h)(),
            T = Object(o.g)(),
            I = function () {
              return T.push("/places");
            },
            D = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), p(L.id, E.token);
                        case 2:
                          (t = e.sent) && r(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            A = function (e) {
              window.confirm("Are you sure?") &&
                (function (e, t) {
                  return O("/api/categories/".concat(e), {
                    token: t,
                    method: "DELETE",
                  });
                })(e, E.token).then(D);
            },
            M = function (e) {
              window.confirm("Are you sure?") &&
                (function (e, t) {
                  return O("/api/menu_items/".concat(e), {
                    token: t,
                    method: "DELETE",
                  });
                })(e, E.token).then(D);
            };
          return (
            Object(c.useEffect)(function () {
              D();
            }, []),
            Object(f.jsxs)(G, {
              children: [
                Object(f.jsxs)(_.a, {
                  children: [
                    Object(f.jsx)(P.a, {
                      lg: 12,
                      children: Object(f.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          Object(f.jsxs)("div", {
                            className:
                              "d-flex justify-content-between align-items-center mb-4",
                            children: [
                              Object(f.jsx)(z.a, {
                                variant: "link",
                                onClick: I,
                                children: Object(f.jsx)(le.a, {
                                  size: 25,
                                  color: "black",
                                }),
                              }),
                              Object(f.jsx)("h3", {
                                className: "mb-0 ml-2 mr-2",
                                children: a.name,
                              }),
                              Object(f.jsx)(z.a, {
                                variant: "link",
                                onClick: function () {
                                  var e, t;
                                  window.confirm("Are you sure?") &&
                                    ((e = L.id),
                                    (t = E.token),
                                    O("/api/places/".concat(e), {
                                      token: t,
                                      method: "DELETE",
                                    })).then(I);
                                },
                                children: Object(f.jsx)(de.a, {
                                  size: 25,
                                  color: "red",
                                }),
                              }),
                            ],
                          }),
                          Object(f.jsx)(z.a, {
                            variant: "link",
                            onClick: function () {
                              return N(!0);
                            },
                            children: Object(f.jsx)(de.c, { size: 25 }),
                          }),
                          Object(f.jsx)(z.a, {
                            variant: "link",
                            href: "/places/".concat(L.id, "/orders"),
                            children: Object(f.jsx)(be.a, { size: 25 }),
                          }),
                          Object(f.jsx)(z.a, {
                            variant: "link",
                            href: "/places/".concat(L.id, "/settings"),
                            children: Object(f.jsx)(ue.a, { size: 25 }),
                          }),
                        ],
                      }),
                    }),
                    Object(f.jsx)(P.a, {
                      md: 4,
                      children: Object(f.jsx)(_e, {
                        children: Object(f.jsx)(xe, { place: a, onDone: D }),
                      }),
                    }),
                    Object(f.jsx)(P.a, {
                      md: 8,
                      children:
                        null === a ||
                        void 0 === a ||
                        null === (e = a.categories) ||
                        void 0 === e
                          ? void 0
                          : e.map(function (e) {
                              return Object(f.jsxs)(
                                "div",
                                {
                                  className: "mb-5",
                                  children: [
                                    Object(f.jsxs)("div", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        Object(f.jsx)("h4", {
                                          className: "mb-0 mr-2",
                                          children: Object(f.jsx)("b", {
                                            children: e.name,
                                          }),
                                        }),
                                        Object(f.jsx)(z.a, {
                                          variant: "link",
                                          onClick: function () {
                                            return A(e.id);
                                          },
                                          children: Object(f.jsx)(de.a, {
                                            size: 25,
                                            color: "red",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.menu_items.map(function (e) {
                                      return Object(f.jsx)(
                                        fe,
                                        {
                                          item: e,
                                          onEdit: function () {
                                            g(e), l(!0);
                                          },
                                          onRemove: function () {
                                            return M(e.id);
                                          },
                                        },
                                        e.id
                                      );
                                    }),
                                  ],
                                },
                                e.id
                              );
                            }),
                    }),
                  ],
                }),
                Object(f.jsx)(U.a, {
                  show: j,
                  onHide: S,
                  centered: !0,
                  children: Object(f.jsxs)(U.a.Body, {
                    children: [
                      Object(f.jsx)("h4", {
                        className: "text-center",
                        children: "Menu Item",
                      }),
                      Object(f.jsx)(xe, {
                        place: a,
                        onDone: function () {
                          D(), S();
                        },
                        item: v,
                      }),
                    ],
                  }),
                }),
                Object(f.jsx)(Ee, {
                  show: C,
                  onHide: function () {
                    return N(!1);
                  },
                  place: a,
                  centered: !0,
                  onUpdatePlace: function (e) {
                    m(a.id, { number_of_tables: e }, E.token).then(function (
                      e
                    ) {
                      e && r(e);
                    });
                  },
                }),
              ],
            })
          );
        },
        ze = n(50),
        Le = n(145),
        Te = F.a.div(
          te ||
            (te = Object(B.a)([
              "\n  text-align: center;\n  img {\n    border-radius: 5px;\n    margin-bottom: 20px;\n  }\n",
            ]))
        ),
        Ie = F.a.div(
          ne || (ne = Object(B.a)(["\n  b, p {\n    ", "\n  }\n"])),
          function (e) {
            var t = e.font;
            return t && "font-family: ".concat(t, ";");
          }
        ),
        Ge = function (e) {
          var t,
            n = e.place,
            c = e.shoppingCart,
            a = void 0 === c ? {} : c,
            r = e.onOrder,
            s = e.font,
            i = void 0 === s ? "" : s,
            o = e.color,
            j = void 0 === o ? "" : o;
          return Object(f.jsxs)(Ie, {
            font: i,
            children: [
              Object(f.jsxs)(Te, {
                children: [
                  Object(f.jsx)("img", {
                    src: n.image,
                    width: 100,
                    height: 100,
                  }),
                  Object(f.jsx)("h3", {
                    children: Object(f.jsx)("b", { children: n.name }),
                  }),
                ],
              }),
              null === n ||
              void 0 === n ||
              null === (t = n.categories) ||
              void 0 === t
                ? void 0
                : t
                    .filter(function (e) {
                      return e.menu_items.filter(function (e) {
                        return e.is_available;
                      }).length;
                    })
                    .map(function (e) {
                      return Object(f.jsxs)(
                        "div",
                        {
                          className: "mt-5",
                          children: [
                            Object(f.jsx)("h4", {
                              className: "mb-4",
                              children: Object(f.jsx)("b", {
                                children: e.name,
                              }),
                            }),
                            e.menu_items
                              .filter(function (e) {
                                return e.is_available;
                              })
                              .map(function (e) {
                                var t;
                                return Object(f.jsx)(
                                  fe,
                                  {
                                    item: Object(y.a)(
                                      Object(y.a)({}, e),
                                      {},
                                      {
                                        quantity:
                                          null === (t = a[e.id]) || void 0 === t
                                            ? void 0
                                            : t.quantity,
                                      }
                                    ),
                                    onOrder: r,
                                    color: j,
                                  },
                                  e.id
                                );
                              }),
                          ],
                        },
                        e.id
                      );
                    }),
            ],
          });
        },
        De = n(144),
        Ae = n(47),
        Me = function (e) {
          var t = e.amount,
            n = e.items,
            a = e.onDone,
            r = e.color,
            s = Object(c.useState)(!1),
            i = Object(u.a)(s, 2),
            l = i[0],
            h = i[1],
            x = Object(Ae.useStripe)(),
            p = Object(Ae.useElements)(),
            m = Object(c.useContext)(k),
            v = Object(o.h)(),
            g = (function () {
              var e = Object(b.a)(
                d.a.mark(function e(c) {
                  var r, s, i, o;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            c.preventDefault(),
                            (e.next = 3),
                            x.createPaymentMethod({
                              type: "card",
                              card: p.getElement(Ae.CardElement),
                            })
                          );
                        case 3:
                          if (
                            ((r = e.sent),
                            (s = r.error),
                            (i = r.paymentMethod),
                            s)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            h(!0),
                            (e.next = 10),
                            (l = {
                              payment_method: i,
                              amount: t,
                              place: v.id,
                              table: v.table,
                              detail: n,
                            }),
                            (d = m.token),
                            O("/api/create_payment_intent/", {
                              data: l,
                              token: d,
                              method: "POST",
                            })
                          );
                        case 10:
                          (
                            null === (o = e.sent) || void 0 === o
                              ? void 0
                              : o.success
                          )
                            ? (Object(j.b)(
                                "Your order #".concat(
                                  o.order,
                                  " is processing"
                                ),
                                { type: "success" }
                              ),
                              a(),
                              h(!1))
                            : (null === o || void 0 === o ? void 0 : o.error) &&
                              (Object(j.b)(o.error, { type: "error" }), h(!1));
                        case 12:
                        case "end":
                          return e.stop();
                      }
                    var l, d;
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(f.jsxs)(M.a, {
            onSubmit: g,
            children: [
              Object(f.jsx)(Ae.CardElement, {
                options: { hidePostalCode: !0 },
              }),
              Object(f.jsx)(z.a, {
                variant: "standard",
                style: { backgroundColor: r },
                className: "mt-4",
                block: !0,
                type: "submit",
                disabled: l,
                children: l ? "Processing..." : "Pay",
              }),
            ],
          });
        },
        Re = Object(De.a)(
          "pk_test_51I1mbCGi6ZyLV0th2pzGEGwGppthFwuXOjP8yfc3PAGwv7bWQicLsGsa4L8w0rjhDSlhZ3WEMl7sa0Ee2EUHHgec006b3rEyMV"
        ),
        qe = function (e) {
          return Object(f.jsx)(Ae.Elements, {
            stripe: Re,
            children: Object(f.jsx)(Me, Object(y.a)({}, e)),
          });
        },
        He = function (e) {
          var t = e.items,
            n = e.onAdd,
            a = e.onRemove,
            r = e.onPaymentDone,
            s = e.color,
            i = Object(c.useMemo)(
              function () {
                return t
                  .map(function (e) {
                    return e.quantity * e.price;
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  }, 0);
              },
              [t]
            );
          return Object(f.jsxs)(f.Fragment, {
            children: [
              Object(f.jsx)("h3", {
                className: "text-center mb-4",
                children: Object(f.jsx)("b", { children: "Your Order" }),
              }),
              Object(f.jsx)(A.a, {
                children: Object(f.jsxs)(A.a.Body, {
                  children: [
                    t.map(function (e) {
                      return Object(f.jsxs)(
                        "div",
                        {
                          className: "d-flex mb-4 align-items-center",
                          children: [
                            Object(f.jsxs)("div", {
                              className: "flex-grow-1",
                              children: [
                                Object(f.jsx)("p", {
                                  className: "mb-0",
                                  children: Object(f.jsx)("b", {
                                    children: e.name,
                                  }),
                                }),
                                Object(f.jsxs)("span", {
                                  children: ["$", e.price],
                                }),
                              ],
                            }),
                            Object(f.jsxs)("div", {
                              className: "d-flex align-items-center",
                              children: [
                                Object(f.jsx)(Se, {
                                  variant: "lightgray",
                                  size: "sm",
                                  onClick: function () {
                                    return a(e);
                                  },
                                  children: "-",
                                }),
                                Object(f.jsx)("span", { children: e.quantity }),
                                Object(f.jsx)(Se, {
                                  variant: "lightgray",
                                  size: "sm",
                                  onClick: function () {
                                    return n(e);
                                  },
                                  children: "+",
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id
                      );
                    }),
                    Object(f.jsx)("hr", {}),
                    Object(f.jsxs)("div", {
                      className: "d-flex justify-content-between",
                      children: [
                        Object(f.jsx)("h5", {
                          children: Object(f.jsx)("b", { children: "Total" }),
                        }),
                        Object(f.jsx)("h5", {
                          children: Object(f.jsxs)("b", { children: ["$", i] }),
                        }),
                      ],
                    }),
                    Object(f.jsx)("hr", { className: "mb-4" }),
                    Object(f.jsx)(qe, {
                      amount: i,
                      items: t,
                      onDone: r,
                      color: s,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Be = Object(F.a)(z.a)(
          ce ||
            (ce = Object(B.a)([
              "\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px rgba(0,0,0,0.2);\n  width: 60px;\n  height: 60px;\n",
            ]))
        ),
        Ue = function () {
          var e = Object(c.useState)({}),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(c.useState)({}),
            s = Object(u.a)(r, 2),
            i = s[0],
            j = s[1],
            l = Object(c.useState)(!1),
            O = Object(u.a)(l, 2),
            h = O[0],
            x = O[1],
            m = Object(o.h)(),
            v = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), p(m.id);
                        case 2:
                          (t = e.sent), console.log(t), t && a(t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            g = function (e) {
              var t;
              j(
                Object(y.a)(
                  Object(y.a)({}, i),
                  {},
                  Object(ze.a)(
                    {},
                    e.id,
                    Object(y.a)(
                      Object(y.a)({}, e),
                      {},
                      {
                        quantity:
                          ((null === (t = i[e.id]) || void 0 === t
                            ? void 0
                            : t.quantity) || 0) + 1,
                      }
                    )
                  )
                )
              );
            },
            k = Object(c.useMemo)(
              function () {
                return Object.keys(i)
                  .map(function (e) {
                    return i[e].quantity;
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  }, 0);
              },
              [i]
            );
          return (
            Object(c.useEffect)(function () {
              v();
            }, []),
            Object(f.jsxs)(E.a, {
              className: "mt-5 mb-5",
              children: [
                Object(f.jsx)(_.a, {
                  className: "justify-content-center",
                  children: Object(f.jsx)(P.a, {
                    lg: 8,
                    children: h
                      ? Object(f.jsx)(He, {
                          items: Object.keys(i)
                            .map(function (e) {
                              return i[e];
                            })
                            .filter(function (e) {
                              return e.quantity > 0;
                            }),
                          onAdd: g,
                          onRemove: function (e) {
                            var t;
                            1 === k && x(!1),
                              j(
                                Object(y.a)(
                                  Object(y.a)({}, i),
                                  {},
                                  Object(ze.a)(
                                    {},
                                    e.id,
                                    Object(y.a)(
                                      Object(y.a)({}, e),
                                      {},
                                      {
                                        quantity:
                                          ((null === (t = i[e.id]) ||
                                          void 0 === t
                                            ? void 0
                                            : t.quantity) || 0) - 1,
                                      }
                                    )
                                  )
                                )
                              );
                          },
                          onPaymentDone: function () {
                            j({}), x(!1);
                          },
                          color: n.color,
                        })
                      : Object(f.jsx)(Ge, {
                          place: n,
                          shoppingCart: i,
                          onOrder: g,
                          color: n.color,
                          font: n.font,
                        }),
                  }),
                }),
                k
                  ? Object(f.jsx)(Be, {
                      variant: "standard",
                      style: { backgroundColor: n.color },
                      onClick: function () {
                        return x(!h);
                      },
                      children: h ? Object(f.jsx)(Le.a, { size: 25 }) : k,
                    })
                  : null,
              ],
            })
          );
        },
        Fe = function (e) {
          var t = e.order,
            n = e.onComplete;
          return Object(f.jsxs)(A.a, {
            className: "mb-3",
            children: [
              Object(f.jsxs)(A.a.Header, {
                className: "d-flex justify-content-between",
                children: [
                  Object(f.jsx)("span", {
                    children: "Order #"
                      .concat(t.id, " - Table #")
                      .concat(t.table),
                  }),
                  Object(f.jsx)("span", {
                    children: Object(f.jsxs)("b", {
                      children: ["$", t.amount],
                    }),
                  }),
                ],
              }),
              Object(f.jsxs)(A.a.Body, {
                className: "d-flex justify-content-between",
                children: [
                  Object(f.jsx)("div", {
                    children: JSON.parse(t.detail).map(function (e) {
                      return Object(f.jsxs)("div", {
                        className: "mb-2",
                        children: [
                          Object(f.jsxs)("span", {
                            children: ["x", e.quantity],
                          }),
                          Object(f.jsx)("img", {
                            src: e.image,
                            width: 30,
                            height: 30,
                            style: { borderRadius: 3, margin: "0 10px" },
                          }),
                          Object(f.jsx)("span", { children: e.name }),
                        ],
                      });
                    }),
                  }),
                  Object(f.jsx)("div", {
                    children: n
                      ? Object(f.jsx)(z.a, {
                          variant: "standard",
                          size: "md",
                          onClick: n,
                          children: "Done",
                        })
                      : null,
                  }),
                ],
              }),
            ],
          });
        },
        Je = function () {
          var e,
            t = Object(c.useState)([]),
            n = Object(u.a)(t, 2),
            a = n[0],
            r = n[1],
            s = Object(o.h)(),
            i = Object(o.g)(),
            j = Object(c.useContext)(k),
            l = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (n = s.id),
                            (c = j.token),
                            O("/api/orders/?place=".concat(n), { token: c })
                          );
                        case 2:
                          (t = e.sent) && (console.log(t), r(t));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                    var n, c;
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            h = (function () {
              var e = Object(b.a)(
                d.a.mark(function e(t) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (n = t),
                            (c = { status: "completed" }),
                            (a = j.token),
                            O("/api/orders/".concat(n), {
                              data: c,
                              token: a,
                              method: "PATCH",
                            })
                          );
                        case 2:
                          e.sent && l();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                    var n, c, a;
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(function () {
              l();
              var e = setInterval(function () {
                l();
              }, 5e3);
              return function () {
                return clearInterval(e);
              };
            }, []),
            Object(f.jsxs)(G, {
              children: [
                Object(f.jsxs)("div", {
                  className: "d-flex align-items-center mb-4",
                  children: [
                    Object(f.jsx)(z.a, {
                      variant: "link",
                      onClick: function () {
                        return i.push("/places/".concat(s.id));
                      },
                      children: Object(f.jsx)(le.a, {
                        size: 25,
                        color: "black",
                      }),
                    }),
                    Object(f.jsx)("h3", {
                      className: "mb-0 ml-2 mr-2",
                      children: "My Orders",
                    }),
                  ],
                }),
                Object(f.jsx)(_.a, {
                  className: "justify-content-center",
                  children:
                    null === a ||
                    void 0 === a ||
                    null ===
                      (e = a.filter(function (e) {
                        return "processing" === e.status;
                      })) ||
                    void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          return Object(f.jsx)(
                            P.a,
                            {
                              lg: 8,
                              children: Object(f.jsx)(Fe, {
                                order: e,
                                onComplete: function () {
                                  return h(e.id);
                                },
                              }),
                            },
                            e.id
                          );
                        }),
                }),
              ],
            })
          );
        },
        Qe = n(150),
        $e = F.a.div(
          ae ||
            (ae = Object(B.a)([
              "\n  background-color: white;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px rgba(0,0,0,0.05);\n",
            ]))
        ),
        Ye = function () {
          var e = Object(c.useState)({}),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(c.useState)(""),
            s = Object(u.a)(r, 2),
            i = s[0],
            l = s[1],
            O = Object(c.useState)(""),
            h = Object(u.a)(O, 2),
            x = h[0],
            v = h[1],
            g = Object(c.useState)(!1),
            y = Object(u.a)(g, 2),
            w = y[0],
            C = y[1],
            N = Object(o.h)(),
            S = Object(o.g)(),
            E = Object(c.useContext)(k),
            L = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), p(N.id);
                        case 2:
                          (t = e.sent) && (a(t), l(t.font), v(t.color));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            T = (function () {
              var e = Object(b.a)(
                d.a.mark(function e() {
                  var t;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            C(!0),
                            (e.next = 3),
                            m(n.id, { font: i, color: x }, E.token)
                          );
                        case 3:
                          (t = e.sent) &&
                            (Object(j.b)("New settings is updated", {
                              type: "success",
                            }),
                            a(t),
                            C(!1));
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(function () {
              L();
            }, []),
            Object(f.jsxs)(G, {
              children: [
                Object(f.jsxs)("div", {
                  className: "d-flex align-items-center mb-4",
                  children: [
                    Object(f.jsx)(z.a, {
                      variant: "link",
                      onClick: function () {
                        return S.push("/places/".concat(N.id));
                      },
                      children: Object(f.jsx)(le.a, {
                        size: 25,
                        color: "black",
                      }),
                    }),
                    Object(f.jsx)("h3", {
                      className: "mb-0 mr-2 ml-2",
                      children: "Menu Settings",
                    }),
                  ],
                }),
                Object(f.jsxs)(_.a, {
                  children: [
                    Object(f.jsx)(P.a, {
                      md: 4,
                      children: Object(f.jsxs)($e, {
                        children: [
                          Object(f.jsxs)(M.a.Group, {
                            children: [
                              Object(f.jsx)(M.a.Label, { children: "Font" }),
                              Object(f.jsxs)(M.a.Control, {
                                as: "select",
                                value: i,
                                onChange: function (e) {
                                  return l(e.target.value);
                                },
                                children: [
                                  Object(f.jsx)("option", { children: "Lato" }),
                                  Object(f.jsx)("option", { children: "Teko" }),
                                  Object(f.jsx)("option", {
                                    children: "Lobster",
                                  }),
                                  Object(f.jsx)("option", {
                                    children: "Caveat",
                                  }),
                                  Object(f.jsx)("option", {
                                    children: "Indie Flower",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(f.jsxs)(M.a.Group, {
                            children: [
                              Object(f.jsx)(M.a.Label, { children: "Color" }),
                              Object(f.jsx)(Qe.a, {
                                color: x,
                                onChange: function (e) {
                                  return v(e.hex);
                                },
                                disableAlpha: !0,
                                width: "100%",
                              }),
                            ],
                          }),
                          Object(f.jsx)(z.a, {
                            className: "mt-4",
                            variant: "standard",
                            block: !0,
                            onClick: T,
                            disabled: w,
                            children: "Save Setings",
                          }),
                        ],
                      }),
                    }),
                    Object(f.jsx)(P.a, {
                      md: 8,
                      children: Object(f.jsx)(Ge, {
                        place: n,
                        font: i,
                        color: x,
                        onOrder: function () {
                          return [];
                        },
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var Ve = function () {
        return Object(f.jsxs)(g, {
          children: [
            Object(f.jsx)(i.a, {
              children: Object(f.jsxs)(o.d, {
                children: [
                  Object(f.jsx)(o.b, {
                    exact: !0,
                    path: "/",
                    children: Object(f.jsx)(D, {}),
                  }),
                  Object(f.jsx)(o.b, {
                    exact: !0,
                    path: "/login",
                    children: Object(f.jsx)(q, {}),
                  }),
                  Object(f.jsx)(o.b, {
                    exact: !0,
                    path: "/register",
                    children: Object(f.jsx)(H, {}),
                  }),
                  Object(f.jsx)(o.b, {
                    exact: !0,
                    path: "/menu/:id/:table",
                    children: Object(f.jsx)(Ue, {}),
                  }),
                  Object(f.jsx)(N, {
                    exact: !0,
                    path: "/places/:id",
                    children: Object(f.jsx)(Pe, {}),
                  }),
                  Object(f.jsx)(N, {
                    exact: !0,
                    path: "/places",
                    children: Object(f.jsx)(je, {}),
                  }),
                  Object(f.jsx)(N, {
                    exact: !0,
                    path: "/places/:id/orders",
                    children: Object(f.jsx)(Je, {}),
                  }),
                  Object(f.jsx)(N, {
                    exact: !0,
                    path: "/places/:id/settings",
                    children: Object(f.jsx)(Ye, {}),
                  }),
                ],
              }),
            }),
            Object(f.jsx)(j.a, {}),
          ],
        });
      };
      s.a.render(
        Object(f.jsx)(a.a.StrictMode, { children: Object(f.jsx)(Ve, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[284, 1, 2]],
]);
//# sourceMappingURL=main.393126ef.chunk.js.map
