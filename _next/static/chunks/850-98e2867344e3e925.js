"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [850],
  {
    5873: function (e, s, a) {
      a.r(s);
      var r = a(3827),
        n = a(4090);
      s.default = function () {
        function e() {
          let e = window.scrollY,
            s = document.querySelector(".navbar");
          e > 300
            ? s.classList.add("nav-scroll")
            : s.classList.remove("nav-scroll");
        }
        function s(e) {
          e.currentTarget.querySelector(".dropdown-menu").classList.add("show");
        }
        function a(e) {
          e.currentTarget
            .querySelector(".dropdown-menu")
            .classList.remove("show");
        }
        return (
          (0, n.useEffect)(
            () => (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            ),
            []
          ),
          (0, r.jsx)("nav", {
            className: "navbar navbar-expand-lg bord blur",
            children: (0, r.jsxs)("div", {
              className: "container o-hidden",
              children: [
                (0, r.jsx)("a", {
                  className: "logo icon-img-100",
                  href: "#",
                  children: (0, r.jsx)("img", {
                    src: "/assets/imgs/logo-light.png",
                    alt: "logo",
                  }),
                }),
                (0, r.jsx)("button", {
                  className: "navbar-toggler",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarSupportedContent",
                  "aria-controls": "navbarSupportedContent",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  onClick: function () {
                    document
                      .querySelector(".navbar .navbar-collapse")
                      .classList.contains("show")
                      ? document
                          .querySelector(".navbar .navbar-collapse")
                          .classList.remove("show")
                      : document
                          .querySelector(".navbar .navbar-collapse")
                          .classList.contains("show") ||
                        document
                          .querySelector(".navbar .navbar-collapse")
                          .classList.add("show");
                  },
                  children: (0, r.jsx)("span", {
                    className: "icon-bar",
                    children: (0, r.jsx)("i", { className: "fas fa-bars" }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "collapse navbar-collapse justify-content-center",
                  id: "navbarSupportedContent",
                  children: (0, r.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                      (0, r.jsx)("li", {
                        className: "nav-item",
                        children: (0, r.jsx)("a", {
                          className: "nav-link",
                          href: "/",
                          children: (0, r.jsx)("span", {
                            className: "rolling-text",
                            children: "Home",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "collapse navbar-collapse justify-content-center",
                  id: "navbarSupportedContent",
                  children: (0, r.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                      (0, r.jsx)("li", {
                        className: "nav-item",
                        children: (0, r.jsx)("a", {
                          className: "nav-link",
                          href: "/#services",
                          children: (0, r.jsx)("span", {
                            className: "rolling-text",
                            children: "Services",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "collapse navbar-collapse justify-content-center",
                  id: "navbarSupportedContent",
                  children: (0, r.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                      (0, r.jsx)("li", {
                        className: "nav-item",
                        children: (0, r.jsx)("a", {
                          className: "nav-link",
                          href: "/about-us",
                          children: (0, r.jsx)("span", {
                            className: "rolling-text",
                            children: "About Us",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "collapse navbar-collapse justify-content-center",
                  id: "navbarSupportedContent",
                  children: (0, r.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                      (0, r.jsx)("li", {
                        className: "nav-item",
                        children: (0, r.jsx)("a", {
                          className: "nav-link",
                          href: "/contact-us",
                          children: (0, r.jsx)("span", {
                            className: "rolling-text",
                            children: "Contact Us",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "contact-button",
                  children: (0, r.jsx)("a", {
                    href: "/contact-us",
                    className: "butn butn-sm butn-bg main-colorbg radius-5",
                    children: (0, r.jsx)("span", {
                      className: "text",
                      children: "Let's contact",
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    4028: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return o;
          },
        });
      var r = a(3827),
        n = a(4090),
        l = () => {
          let e = document.querySelector(".progress-wrap"),
            s = document.querySelector(".progress-wrap path"),
            a = s.getTotalLength(),
            r = () => {
              let e = window.scrollY,
                r = document.documentElement.scrollHeight - window.innerHeight;
              s.style.strokeDashoffset = a - (e * a) / r;
            };
          e &&
            ((s.style.transition = s.style.WebkitTransition = "none"),
            (s.style.strokeDasharray = a + " " + a),
            (s.style.strokeDashoffset = a),
            s.getBoundingClientRect(),
            (s.style.transition = s.style.WebkitTransition =
              "stroke-dashoffset 10ms linear"),
            r(),
            window.addEventListener("scroll", r),
            window.addEventListener("scroll", function () {
              window.pageYOffset > 150
                ? e.classList.add("active-progress")
                : document
                    .querySelector(".progress-wrap")
                    .classList.remove("active-progress");
            }),
            e.addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                window.scrollTo({ top: 0, behavior: "smooth" }),
                !1
              );
            }));
        },
        o = () => (
          (0, n.useEffect)(() => {
            l();
          }, []),
          (0, r.jsx)("div", {
            className: "progress-wrap cursor-pointer",
            children: (0, r.jsx)("svg", {
              className: "progress-circle svg-content",
              width: "100%",
              height: "100%",
              viewBox: "-1 -1 102 102",
              children: (0, r.jsx)("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
              }),
            }),
          })
        );
    },
    8529: function (e, s, a) {
      a.r(s);
      var r = a(3827),
        n = a(4090);
      s.default = function () {
        return (
          (0, n.useEffect)(() => {
            let e = document.querySelectorAll(".hover-this"),
              s = document.querySelector(".cursor"),
              a = function (e) {
                let s = this.querySelector(".hover-anim"),
                  { offsetX: a, offsetY: r } = e,
                  { offsetWidth: n, offsetHeight: l } = this;
                (s.style.transform = "translate("
                  .concat((a / n) * 50 - 25, "px, ")
                  .concat((r / l) * 50 - 25, "px)")),
                  "mouseleave" === e.type && (s.style.transform = "");
              };
            e.forEach((e) => e.addEventListener("mousemove", a)),
              e.forEach((e) => e.addEventListener("mouseleave", a)),
              window.addEventListener("mousemove", (e) => {
                let { clientX: a, clientY: r } = e;
                (s.style.left = a + "px"), (s.style.top = r + "px");
              }),
              document.querySelectorAll("a, .cursor-pointer").forEach((e) => {
                e.addEventListener("mousemove", () => {
                  s.classList.add("cursor-active");
                }),
                  e.addEventListener("mouseleave", () => {
                    s.classList.remove("cursor-active");
                  });
              });
          }, []),
          (0, r.jsx)("div", { className: "cursor" })
        );
      };
    },
    9313: function (e, s, a) {
      a.r(s);
      var r = a(3827),
        n = a(4090);
      s.default = function () {
        return (
          (0, n.useEffect)(() => {
            let e = setInterval(() => {
              if ("undefined" != typeof gsap) {
                clearInterval(e);
                let s = document.getElementById("svg"),
                  a = gsap.timeline();
                a.to(
                  ".loader-wrap-heading .load-text , .loader-wrap-heading .cont",
                  { delay: 1.5, y: -100, opacity: 0 }
                ),
                  a
                    .to(s, {
                      duration: 0.5,
                      attr: {
                        d: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
                      },
                      ease: "power2.easeIn",
                    })
                    .to(s, {
                      duration: 0.5,
                      attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
                      ease: "power2.easeOut",
                    }),
                  a.to(".loader-wrap", { y: -1500 }),
                  a.to(".loader-wrap", { zIndex: -1, display: "none" }),
                  a.from("header", { y: 200 }, "-=1.5"),
                  a.from(
                    "header .container",
                    { y: 40, opacity: 0, delay: 0.3 },
                    "-=1.5"
                  );
              }
            }, 100);
          }, []),
          (0, r.jsxs)("div", {
            className: "loader-wrap",
            children: [
              (0, r.jsx)("svg", {
                viewBox: "0 0 1000 1000",
                preserveAspectRatio: "none",
                children: (0, r.jsx)("path", {
                  id: "svg",
                  d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z",
                }),
              }),
              (0, r.jsx)("div", {
                className: "loader-wrap-heading",
                children: (0, r.jsxs)("div", {
                  className: "load-text",
                  children: [
                    (0, r.jsx)("span", { children: "L" }),
                    (0, r.jsx)("span", { children: "o" }),
                    (0, r.jsx)("span", { children: "a" }),
                    (0, r.jsx)("span", { children: "d" }),
                    (0, r.jsx)("span", { children: "i" }),
                    (0, r.jsx)("span", { children: "n" }),
                    (0, r.jsx)("span", { children: "g" }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
