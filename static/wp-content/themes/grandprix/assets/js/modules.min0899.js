(!(function (e) {
  "use strict";
  function a() {
    ((mkdf.scroll = e(window).scrollTop()),
      (function () {
        var e =
            /Chrome/.test(navigator.userAgent) &&
            /Google Inc/.test(navigator.vendor),
          a =
            /Safari/.test(navigator.userAgent) &&
            /Apple Computer/.test(navigator.vendor),
          t = -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
          n = window.navigator.userAgent.indexOf("MSIE ");
        e && mkdf.body.addClass("mkdf-chrome");
        a && mkdf.body.addClass("mkdf-safari");
        t && mkdf.body.addClass("mkdf-firefox");
        (0 < n || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
          mkdf.body.addClass("mkdf-ms-explorer");
        /Edge\/\d./i.test(navigator.userAgent) &&
          mkdf.body.addClass("mkdf-edge");
      })(),
      mkdf.body.hasClass("mkdf-dark-header") &&
        (mkdf.defaultHeaderStyle = "mkdf-dark-header"),
      mkdf.body.hasClass("mkdf-light-header") &&
        (mkdf.defaultHeaderStyle = "mkdf-light-header"));
  }
  function t() {}
  function n() {
    ((mkdf.windowWidth = e(window).width()),
      (mkdf.windowHeight = e(window).height()));
  }
  function d() {
    mkdf.scroll = e(window).scrollTop();
  }
  switch (
    ((window.mkdf = {}),
    (mkdf.modules = {}),
    (mkdf.scroll = 0),
    (mkdf.window = e(window)),
    (mkdf.document = e(document)),
    (mkdf.windowWidth = e(window).width()),
    (mkdf.windowHeight = e(window).height()),
    (mkdf.body = e("body")),
    (mkdf.html = e("html, body")),
    (mkdf.htmlEl = e("html")),
    (mkdf.menuDropdownHeightSet = !1),
    (mkdf.defaultHeaderStyle = ""),
    (mkdf.minVideoWidth = 1500),
    (mkdf.videoWidthOriginal = 1280),
    (mkdf.videoHeightOriginal = 720),
    (mkdf.videoRatio = 1.61),
    (mkdf.mkdfOnDocumentReady = a),
    (mkdf.mkdfOnWindowLoad = t),
    (mkdf.mkdfOnWindowResize = n),
    (mkdf.mkdfOnWindowScroll = d),
    e(document).ready(a),
    e(window).on("load", t),
    e(window).resize(n),
    e(window).scroll(d),
    !0)
  ) {
    case mkdf.body.hasClass("mkdf-grid-1300"):
      mkdf.boxedLayoutWidth = 1350;
      break;
    case mkdf.body.hasClass("mkdf-grid-1200"):
      mkdf.boxedLayoutWidth = 1250;
      break;
    case mkdf.body.hasClass("mkdf-grid-1000"):
      mkdf.boxedLayoutWidth = 1050;
      break;
    case mkdf.body.hasClass("mkdf-grid-800"):
      mkdf.boxedLayoutWidth = 850;
      break;
    default:
      mkdf.boxedLayoutWidth = 1150;
  }
  ((mkdf.gridWidth = function () {
    var e = 1100;
    switch (!0) {
      case mkdf.body.hasClass("mkdf-grid-1300") && 1400 < mkdf.windowWidth:
        e = 1300;
        break;
      case mkdf.body.hasClass("mkdf-grid-1200") && 1300 < mkdf.windowWidth:
      case mkdf.body.hasClass("mkdf-grid-1000") && 1200 < mkdf.windowWidth:
        e = 1200;
        break;
      case mkdf.body.hasClass("mkdf-grid-800") && 1024 < mkdf.windowWidth:
        e = 800;
    }
    return e;
  }),
    (mkdf.transitionEnd = (function () {
      var e = document.createElement("transitionDetector"),
        a = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          transition: "transitionend",
        };
      for (var t in a) if (void 0 !== e.style[t]) return a[t];
    })()),
    (mkdf.animationEnd = (function () {
      var e = document.createElement("animationDetector"),
        a = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "animationend",
          WebkitAnimation: "webkitAnimationEnd",
        };
      for (var t in a) if (void 0 !== e.style[t]) return a[t];
    })()));
})(jQuery),
  (function (D) {
    "use strict";
    var e = {};
    function a() {
      var e, a, t, n;
      (u().init(),
        -1 < navigator.appVersion.toLowerCase().indexOf("mac") &&
          mkdf.body.hasClass("mkdf-smooth-scroll") &&
          mkdf.body.removeClass("mkdf-smooth-scroll"),
        s().init(),
        D("#mkdf-back-to-top").on("click", function (e) {
          (e.preventDefault(),
            mkdf.html.animate(
              { scrollTop: 0 },
              mkdf.window.scrollTop() / 4,
              "easeInOutCubic",
            ));
        }),
        mkdf.window.scroll(function () {
          var e = D(this).scrollTop(),
            a = D(this).height(),
            t = 0 < e ? e + a / 2 : 1;
          r(t < 1e3 ? "off" : "on");
        }),
        l(),
        P(),
        A(),
        h(),
        (e = D(".mkdf-preload-background")).length &&
          e.each(function () {
            var e,
              a,
              t = D(this);
            "" !== t.css("background-image") &&
            "none" !== t.css("background-image")
              ? (a = (a = (a = t.attr("style")).match(
                  /url\(["']?([^'")]+)['"]?\)/,
                ))
                  ? a[1]
                  : "") &&
                (((e = new Image()).src = a),
                D(e).on("load", function () {
                  t.removeClass("mkdf-preload-background");
                }))
              : D(window).on("load", function () {
                  t.removeClass("mkdf-preload-background");
                });
          }),
        m(),
        (a = D(".mkdf-search-post-type")).length &&
          a.each(function () {
            var e = D(this),
              a = e.find(".mkdf-post-type-search-field"),
              n = e.siblings(".mkdf-post-type-search-results"),
              d = e.find(".mkdf-search-loading"),
              o = e.find(".mkdf-search-icon");
            d.addClass("mkdf-hidden");
            var i,
              s = e.data("post-type");
            (a.on("keyup paste", function () {
              var t = D(this);
              (t.attr("autocomplete", "off"),
                d.removeClass("mkdf-hidden"),
                o.addClass("mkdf-hidden"),
                clearTimeout(i),
                (i = setTimeout(function () {
                  var e,
                    a = t.val();
                  a.length < 3
                    ? (n.html(""),
                      n.fadeOut(),
                      d.addClass("mkdf-hidden"),
                      o.removeClass("mkdf-hidden"))
                    : ((e = {
                        action: "grandprix_mikado_search_post_types",
                        term: a,
                        postType: s,
                        search_post_types_nonce: D(
                          'input[name="mkdf_search_post_types_nonce"]',
                        ).val(),
                      }),
                      D.ajax({
                        type: "POST",
                        data: e,
                        url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                        success: function (e) {
                          var a = JSON.parse(e);
                          "success" === a.status &&
                            (d.addClass("mkdf-hidden"),
                            o.removeClass("mkdf-hidden"),
                            n.html(a.data.html),
                            n.fadeIn());
                        },
                        error: function (e, a, t) {
                          (console.log("Status: " + a),
                            console.log("Error: " + t),
                            d.addClass("mkdf-hidden"),
                            o.removeClass("mkdf-hidden"),
                            n.fadeOut());
                        },
                      }));
                }, 500)));
            }),
              a.on("focusout", function () {
                (d.addClass("mkdf-hidden"),
                  o.removeClass("mkdf-hidden"),
                  n.fadeOut());
              }));
          }),
        (t = D(".mkdf-dashboard-form")).length &&
          t.each(function () {
            var e = D(this),
              d = e.find("button.mkdf-dashboard-form-button"),
              o = d.data("updating-text"),
              i = d.data("updated-text"),
              s = e.data("action");
            e.on("submit", function (e) {
              e.preventDefault();
              var t = d.html(),
                a = D(this).find(".mkdf-dashboard-gallery-upload-hidden"),
                l = [];
              d.html(o);
              var m = new FormData();
              (a.each(function () {
                var e,
                  a,
                  t,
                  n = D(this),
                  d = n.attr("name"),
                  o = n.attr("id"),
                  i = n[0].files,
                  s =
                    -1 < d.indexOf("[")
                      ? ((s =
                          d.substring(0, d.indexOf("[")) + "_mkdf_regarray_"),
                        (e = o.indexOf("[")),
                        (a = o.indexOf("]")),
                        (t = o.substring(e + 1, a)),
                        l.push(s),
                        s + t + "_")
                      : d + "_mkdf_reg_";
                0 === i.length &&
                  m.append(
                    s,
                    new File([""], "mkdf-dummy-file.txt", {
                      type: "text/plain",
                    }),
                  );
                for (var r = 0; r < i.length; r++) {
                  1 === i[r].name.match(/\./g).length &&
                    -1 !==
                      D.inArray(i[r].type, [
                        "image/png",
                        "image/jpg",
                        "image/jpeg",
                        "application/pdf",
                      ]) &&
                    m.append(s + r, i[r]);
                }
              }),
                m.append("action", s));
              var n = D(this).serialize();
              return (
                m.append("data", n),
                D.ajax({
                  type: "POST",
                  data: m,
                  contentType: !1,
                  processData: !1,
                  url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                  success: function (e) {
                    var a = JSON.parse(e);
                    (mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(a),
                      "success" === a.status
                        ? (d.html(i), (window.location = a.redirect))
                        : d.html(t));
                  },
                }),
                !1
              );
            });
          }),
        f(),
        (function () {
          {
            var n, e, a, t, d, o, i, s, r;
            mkdf.body.hasClass("mkdf-smooth-page-transitions") &&
              (mkdf.body.hasClass("mkdf-smooth-page-transitions-preloader") &&
                ((n = D(
                  "body > .mkdf-smooth-transition-loader.mkdf-mimic-ajax",
                )),
                (e = D("#mkdf-main-rev-holder")),
                (a = D(".mkdf-grandprix-spinner")),
                (t = a.find(".mkdf-grandprix-spinner-text-inner")),
                (d = a.find(".mkdf-grandprix-spinner-logo")),
                (o = d.find(".mkdf-separator-line")),
                (i = d.find(".mkdf-flag")),
                a.length &&
                  ((s = t.text().split(" ")),
                  t.empty(),
                  s.forEach(function (e, a) {
                    t.append("<span>" + e + " </span>");
                  }),
                  setTimeout(function () {
                    (t.css({ opacity: "1" }),
                      setTimeout(function () {
                        s.forEach(function (e, a) {
                          t.find("span")
                            .eq(a)
                            .css({
                              opacity: "1",
                              transform: "translateX(0)",
                              transition: ".22s " + 0.15 * a + "s",
                            });
                        });
                      }, 300),
                      setTimeout(function () {
                        d.css({ opacity: "1" });
                      }, 10),
                      setTimeout(function () {
                        i.css({ opacity: "1", transform: "translateX(0)" });
                      }, 20),
                      setTimeout(function () {
                        o.css({
                          opacity: "1",
                          "animation-play-state": "running",
                        });
                      }, 300));
                  }, 100)),
                (r = function (a, e, t) {
                  ((a = a || 600),
                    (e = e || 0),
                    (t = t || "easeOutSine"),
                    n.delay(e).fadeOut(a, t),
                    D(window).on("bind", "pageshow", function (e) {
                      e.originalEvent.persisted && n.fadeOut(a, t);
                    }));
                }),
                D(window).on("load", function () {
                  a.length
                    ? (r(600, 2450, "easeOutSine"),
                      e.length &&
                        setTimeout(function () {
                          e.find("rs-module").revstart();
                        }, 2450))
                    : r();
                })),
              window.addEventListener("pageshow", function (e) {
                (e.persisted ||
                  (void 0 !== window.performance &&
                    2 === window.performance.navigation.type)) &&
                  D(".mkdf-wrapper-inner").show();
              }),
              mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") &&
                D("a").on("click", function (e) {
                  var a = D(this);
                  ((a.parents(".mkdf-shopping-cart-dropdown").length ||
                    a.parent(".product-remove").length) &&
                    a.hasClass("remove")) ||
                    a.parents(".woocommerce-product-gallery__image").length ||
                    (1 === e.which &&
                      0 <= a.attr("href").indexOf(window.location.host) &&
                      void 0 === a.data("rel") &&
                      void 0 === a.attr("rel") &&
                      !a.hasClass("lightbox-active") &&
                      (void 0 === a.attr("target") ||
                        "_self" === a.attr("target")) &&
                      a.attr("href").split("#")[0] !==
                        window.location.href.split("#")[0] &&
                      (e.preventDefault(),
                      D(".mkdf-wrapper-inner").fadeOut(
                        600,
                        "easeOutSine",
                        function () {
                          window.location = a.attr("href");
                        },
                      )));
                }));
          }
        })(),
        (n = D(".mkdf-has-appear-animation, .mkdf-banner-holder")).length &&
          n.each(function () {
            D(this).appear(
              function () {
                D(this).addClass("mkdf-item-appear");
              },
              { accX: 0, accY: 50 },
            );
          }));
    }
    function t() {
      var e, a;
      (z(),
        p().init(),
        (e = D(".mkdf-animated-background-svg")).length &&
          e.each(function () {
            var e = D(this).find("svg");
            (e.find("path").each(function () {
              var e = D(this),
                a = Math.round(this.getTotalLength());
              e.css({ "stroke-dasharray": a, "stroke-dashoffset": a });
            }),
              e.appear(
                function () {
                  var e = D(this);
                  (e.addClass("mkdf-appear"),
                    setTimeout(function () {
                      e.find("path").css({ "stroke-dashoffset": 0 });
                    }, 300));
                },
                { accX: 0, accY: 50 },
              ));
          }),
        (a = D(".mkdf-ig-carousel-custom-type, .mkdf-bs-carousel-custom"))
          .length &&
          a.each(function () {
            function e(e) {
              i.css({ left: parseInt(e) });
            }
            var a = D(this),
              t = a.find(".mkdf-owl-slider"),
              n = a.find(".mkdf-custom-pagination-container").find(".owl-dot"),
              d = n.first().width(),
              o = 0,
              i = a.find(".mkdf-pagination-line");
            (i.width(d),
              t.on("changed.owl.carousel", function () {
                (n.each(function () {
                  D(this).hasClass("active") && (o = D(this).position().left);
                }),
                  e(o));
              }),
              n.mouseenter(function () {
                ((o = D(this).position().left),
                  setTimeout(function () {
                    e(o);
                  }, 100));
              }),
              n.mouseleave(function () {
                (n.each(function () {
                  D(this).hasClass("active") && (o = D(this).position().left);
                }),
                  setTimeout(function () {
                    e(o);
                  }, 100));
              }));
          }));
    }
    function n() {
      (f(), P());
    }
    function d(e) {
      i(e);
    }
    function o(e) {
      for (var a = [37, 38, 39, 40], t = a.length; t--; )
        if (e.keyCode === a[t]) return void i(e);
    }
    function i(e) {
      ((e = e || window.event).preventDefault && e.preventDefault(),
        (e.returnValue = !1));
    }
    (((mkdf.modules.common = e).mkdfFluidVideo = A),
      (e.mkdfEnableScroll = function () {
        window.removeEventListener &&
          window.removeEventListener("wheel", d, { passive: !1 });
        window.onmousewheel = document.onmousewheel = document.onkeydown = null;
      }),
      (e.mkdfDisableScroll = function () {
        window.addEventListener &&
          window.addEventListener("wheel", d, { passive: !1 });
        document.onkeydown = o;
      }),
      (e.mkdfOwlSlider = h),
      (e.mkdfInitParallax = z),
      (e.mkdfInitSelfHostedVideoPlayer = l),
      (e.mkdfSelfHostedVideoSize = P),
      (e.mkdfPrettyPhoto = m),
      (e.mkdfStickySidebarWidget = p),
      (e.getLoadMoreData = function (e) {
        var a = e.data(),
          t = {};
        for (var n in a)
          a.hasOwnProperty(n) &&
            void 0 !== a[n] &&
            !1 !== a[n] &&
            (t[n] = a[n]);
        return t;
      }),
      (e.setLoadMoreAjaxData = function (e, a) {
        var t = { action: a };
        for (var n in e)
          e.hasOwnProperty(n) &&
            void 0 !== e[n] &&
            !1 !== e[n] &&
            (t[n] = e[n]);
        return t;
      }),
      (e.setFixedImageProportionSize = c),
      (e.mkdfInitPerfectScrollbar = function () {
        var t = { wheelSpeed: 0.6, suppressScrollX: !0 };
        return {
          init: function (e) {
            // var a;
            // e.length &&
            //   ((a = new PerfectScrollbar(e.selector, t)),
            //   D(window).resize(function () {
            //     a.update();
            //   }));
          },
        };
      }),
      (e.mkdfOnDocumentReady = a),
      (e.mkdfOnWindowLoad = t),
      (e.mkdfOnWindowResize = n),
      D(document).ready(a),
      D(window).on("load", t),
      D(window).resize(n));
    var s = function () {
      function i(a) {
        D(
          ".mkdf-main-menu, .mkdf-mobile-nav, .mkdf-fullscreen-menu, .mkdf-vertical-menu",
        ).each(function () {
          var e = D(this);
          a.parents(e).length &&
            (e.find(".mkdf-active-item").removeClass("mkdf-active-item"),
            a.parent().addClass("mkdf-active-item"),
            e.find("a").removeClass("current"),
            a.addClass("current"));
        });
      }
      var n = function (e) {
          var a = D(
              ".mkdf-main-menu a, .mkdf-mobile-nav a, .mkdf-fullscreen-menu a, .mkdf-vertical-menu a",
            ),
            t = e,
            n = "" !== t ? D('[data-mkdf-anchor="' + t + '"]') : "";
          if ("" !== t && 0 < n.length) {
            var d = n.offset().top,
              o = d - s(d) - mkdfGlobalVars.vars.mkdfAddForAdminBar;
            return (
              a.length &&
                a.each(function () {
                  var e = D(this);
                  -1 < e.attr("href").indexOf(t) && i(e);
                }),
              mkdf.html
                .stop()
                .animate({ scrollTop: Math.round(o) }, 1e3, function () {
                  history.pushState && history.pushState(null, "", "#" + t);
                }),
              !1
            );
          }
        },
        s = function (e) {
          ("mkdf-sticky-header-on-scroll-down-up" ===
            mkdf.modules.stickyHeader.behaviour &&
            (mkdf.modules.stickyHeader.isStickyVisible =
              e > mkdf.modules.header.stickyAppearAmount),
            "mkdf-sticky-header-on-scroll-up" ===
              mkdf.modules.stickyHeader.behaviour &&
              e > mkdf.scroll &&
              (mkdf.modules.stickyHeader.isStickyVisible = !1));
          var a = mkdf.modules.stickyHeader.isStickyVisible
            ? mkdfGlobalVars.vars.mkdfStickyHeaderTransparencyHeight
            : mkdfPerPageVars.vars.mkdfHeaderTransparencyHeight;
          return (mkdf.windowWidth < 1025 && (a = 0), a);
        };
      return {
        init: function () {
          var a, e, t;
          D("[data-mkdf-anchor]").length &&
            (mkdf.document.on(
              "click",
              ".mkdf-main-menu a, .mkdf-fullscreen-menu a, a.mkdf-btn, .mkdf-anchor, .mkdf-mobile-nav a, .mkdf-vertical-menu a",
              function () {
                var e = D(this),
                  a = e.prop("hash").split("#")[1],
                  t = "" !== a ? D('[data-mkdf-anchor="' + a + '"]') : "";
                if ("" !== a && 0 < t.length) {
                  var n = t.offset().top,
                    d = n - s(n) - mkdfGlobalVars.vars.mkdfAddForAdminBar;
                  return (
                    i(e),
                    mkdf.html
                      .stop()
                      .animate({ scrollTop: Math.round(d) }, 1e3, function () {
                        history.pushState &&
                          history.pushState(null, "", "#" + a);
                      }),
                    !1
                  );
                }
              },
            ),
            (e = D("[data-mkdf-anchor]")),
            "/" !== (t = window.location.href.split("#")[0]).substr(-1) &&
              (t += "/"),
            e.waypoint(
              function (e) {
                "down" === e &&
                  ((a =
                    0 < D(this.element).length
                      ? D(this.element).data("mkdf-anchor")
                      : D(this).data("mkdf-anchor")),
                  i(D("a[href='" + t + "#" + a + "']")));
              },
              { offset: "50%" },
            ),
            e.waypoint(
              function (e) {
                "up" === e &&
                  ((a =
                    0 < D(this.element).length
                      ? D(this.element).data("mkdf-anchor")
                      : D(this).data("mkdf-anchor")),
                  i(D("a[href='" + t + "#" + a + "']")));
              },
              {
                offset: function () {
                  return -(D(this.element).outerHeight() - 150);
                },
              },
            ),
            D(window).on("load", function () {
              var e;
              "" !== (e = window.location.hash.split("#")[1]) &&
                0 < D('[data-mkdf-anchor="' + e + '"]').length &&
                n(e);
            }));
        },
      };
    };
    function r(e) {
      var a = D("#mkdf-back-to-top");
      (a.removeClass("off on"),
        "on" === e ? a.addClass("on") : a.addClass("off"));
    }
    function l() {
      var e = D(".mkdf-self-hosted-video");
      e.length && e.mediaelementplayer({ audioWidth: "100%" });
    }
    function P() {
      var e = D(".mkdf-self-hosted-video-holder .mkdf-video-wrap");
      e.length &&
        e.each(function () {
          var e = D(this),
            a = e.closest(".mkdf-self-hosted-video-holder").outerWidth(),
            t = a / mkdf.videoRatio;
          (navigator.userAgent.match(
            /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/,
          ) && (e.parent().width(a), e.parent().height(t)),
            e.width(a),
            e.height(t),
            e.find("video, .mejs-overlay, .mejs-poster").width(a),
            e.find("video, .mejs-overlay, .mejs-poster").height(t));
        });
    }
    function A() {
      fluidvids.init({
        selector: ["iframe"],
        players: ["www.youtube.com", "player.vimeo.com"],
      });
    }
    function m() {
      var e =
        '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="' +
        mkdfGlobalVars.vars.ppExpand +
        '">' +
        mkdfGlobalVars.vars.ppExpand +
        '</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">' +
        mkdfGlobalVars.vars.ppPrev +
        '</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">' +
        mkdfGlobalVars.vars.ppNext +
        '</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">' +
        mkdfGlobalVars.vars.ppClose +
        '</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
      D("a[data-rel^='prettyPhoto']").prettyPhoto({
        hook: "data-rel",
        animation_speed: "normal",
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: 0.25,
        show_title: !0,
        allow_resize: !0,
        horizontal_padding: 0,
        default_width: 960,
        default_height: 540,
        counter_separator_label: "/",
        theme: "pp_default",
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        custom_markup: "",
        social_tools: !1,
        markup: e,
      });
    }
    function f() {
      var e = D(".mkdf-grid-masonry-list");
      e.length &&
        e.each(function () {
          var e = D(this),
            a = e.find(".mkdf-masonry-list-wrapper"),
            t = e.find(".mkdf-masonry-grid-sizer").width();
          a.waitForImages(function () {
            (a.isotope({
              layoutMode: "packery",
              itemSelector: ".mkdf-item-space",
              percentPosition: !0,
              masonry: {
                columnWidth: ".mkdf-masonry-grid-sizer",
                gutter: ".mkdf-masonry-grid-gutter",
              },
            }),
              (e.find(".mkdf-fixed-masonry-item").length ||
                e.hasClass("mkdf-fixed-masonry-items")) &&
                c(a, a.find(".mkdf-item-space"), t, !0),
              setTimeout(function () {
                z();
              }, 600),
              a.isotope("layout").css("opacity", 1));
          });
        });
    }
    function c(e, a, t, n) {
      var d, o, i, s, r, l;
      (!e.hasClass("mkdf-masonry-images-fixed") && !0 !== n) ||
        ((o = t - 2 * (d = parseInt(a.css("paddingLeft"), 10))),
        (i = e.find(".mkdf-masonry-size-small")),
        (s = e.find(".mkdf-masonry-size-large-width")),
        (r = e.find(".mkdf-masonry-size-large-height")),
        (l = e.find(".mkdf-masonry-size-large-width-height")),
        i.css("height", o),
        r.css("height", Math.round(2 * (o + d))),
        680 < mkdf.windowWidth
          ? (s.css("height", o), l.css("height", Math.round(2 * (o + d))))
          : (s.css("height", Math.round(o / 2)), l.css("height", o)));
    }
    var u = function () {
      var e = D(".mkdf-icon-has-hover");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e, a, t, n;
              void 0 !== (e = D(this)).data("hover-color") &&
                ((a = function (e) {
                  e.data.icon.css("color", e.data.color);
                }),
                (t = e.data("hover-color")),
                (n = e.css("color")),
                "" !== t &&
                  (e.on("mouseenter", { icon: e, color: t }, a),
                  e.on("mouseleave", { icon: e, color: n }, a)));
            });
        },
      };
    };
    function z() {
      var e = D(".mkdf-parallax-row-holder");
      e.length &&
        e.each(function () {
          var e = D(this),
            a = e.data("parallax-bg-image"),
            t = 0.4 * e.data("parallax-bg-speed"),
            n = 0;
          (void 0 !== e.data("parallax-bg-height") &&
            !1 !== e.data("parallax-bg-height") &&
            (n = parseInt(e.data("parallax-bg-height"))),
            e.css({ "background-image": "url(" + a + ")" }),
            0 < n && e.css({ "min-height": n + "px", height: n + "px" }),
            e.parallax("50%", t));
        });
    }
    function p() {
      var i,
        s,
        e = D(".mkdf-widget-sticky-sidebar"),
        a = D(".mkdf-page-header"),
        c = a.length ? a.outerHeight() : 0,
        r = 0,
        l = 0,
        u = [];
      function t() {
        u.length &&
          D.each(u, function (e) {
            u[e].object;
            var a,
              t,
              n,
              d,
              o,
              i = u[e].offset,
              s = u[e].position,
              r = u[e].height,
              l = u[e].width,
              m = u[e].sidebarHolder,
              f = u[e].sidebarHolderHeight;
            (mkdf.body.hasClass("mkdf-fixed-on-scroll")
              ? (a = D(".mkdf-fixed-wrapper.fixed")).length &&
                (c = a.outerHeight() + mkdfGlobalVars.vars.mkdfAddForAdminBar)
              : mkdf.body.hasClass("mkdf-no-behavior") &&
                (c = mkdfGlobalVars.vars.mkdfAddForAdminBar),
              1024 < mkdf.windowWidth && m.length
                ? ((t = -(s - c)),
                  (n = r - s - 40),
                  (d = f + i - c - s - mkdfGlobalVars.vars.mkdfTopBarHeight),
                  mkdf.scroll >= i - c && r < f
                    ? (m.hasClass("mkdf-sticky-sidebar-appeared")
                        ? m.css({ top: t + "px" })
                        : m
                            .addClass("mkdf-sticky-sidebar-appeared")
                            .css({
                              position: "fixed",
                              top: t + "px",
                              width: l,
                              "margin-top": "-10px",
                            })
                            .animate({ "margin-top": "0" }, 200),
                      mkdf.scroll + n >= d
                        ? ((o = f - n + t - c),
                          m.css({ position: "absolute", top: o + "px" }))
                        : m.hasClass("mkdf-sticky-sidebar-appeared") &&
                          m.css({ position: "fixed", top: t + "px" }))
                    : m
                        .removeClass("mkdf-sticky-sidebar-appeared")
                        .css({ position: "relative", top: "0", width: "auto" }))
                : m
                    .removeClass("mkdf-sticky-sidebar-appeared")
                    .css({ position: "relative", top: "0", width: "auto" }));
          });
      }
      return {
        init: function () {
          (e.length &&
            e.each(function () {
              var e,
                a = D(this),
                t = a.parents("aside.mkdf-sidebar"),
                n = a.parents(".wpb_widgetised_column"),
                d = "",
                o = 0;
              ((i = a.offset().top),
                (s = a.position().top),
                (l = r = 0),
                t.length
                  ? ((r = t.outerHeight()),
                    (l = t.outerWidth()),
                    (o = (d = t).parent().parent().outerHeight()),
                    (e = t.parent().parent().find(".mkdf-blog-holder"))
                      .length && (o -= parseInt(e.css("marginBottom"))))
                  : n.length &&
                    ((r = n.outerHeight()),
                    (l = n.outerWidth()),
                    (o = (d = n).parents(".vc_row").outerHeight())),
                u.push({
                  object: a,
                  offset: i,
                  position: s,
                  height: r,
                  width: l,
                  sidebarHolder: d,
                  sidebarHolderHeight: o,
                }));
            }),
            t(),
            D(window).scroll(function () {
              t();
            }));
        },
        reInit: t,
      };
    }
    function h() {
      var e = D(".mkdf-owl-slider");
      e.length &&
        e.each(function () {
          var e,
            t,
            a = D(this),
            n = D(this),
            d = a.children().length,
            o = 1,
            i = !0,
            s = !0,
            r = !0,
            l = 5e3,
            m = 600,
            f = 0,
            c = 0,
            u = 0,
            p = 0,
            h = !1,
            k = !1,
            g = !1,
            v = !1,
            y = !0,
            b = !1,
            w = !1,
            C = !!a.hasClass("mkdf-list-is-slider"),
            x = C ? a.parent() : a;
          if (
            (void 0 === a.data("number-of-items") ||
              !1 === a.data("number-of-items") ||
              C ||
              (o = a.data("number-of-items")),
            void 0 !== x.data("number-of-columns") &&
              !1 !== x.data("number-of-columns") &&
              C)
          )
            switch (x.data("number-of-columns")) {
              case "one":
                o = 1;
                break;
              case "two":
                o = 2;
                break;
              case "three":
                o = 3;
                break;
              case "four":
                o = 4;
                break;
              case "five":
                o = 5;
                break;
              case "six":
                o = 6;
                break;
              default:
                o = 4;
            }
          ("no" === x.data("enable-loop") && (i = !1),
            "no" === x.data("enable-autoplay") && (s = !1),
            "no" === x.data("enable-autoplay-hover-pause") && (r = !1),
            void 0 !== x.data("slider-speed") &&
              !1 !== x.data("slider-speed") &&
              (l = x.data("slider-speed")),
            void 0 !== x.data("slider-speed-animation") &&
              !1 !== x.data("slider-speed-animation") &&
              (m = x.data("slider-speed-animation")),
            void 0 !== x.data("slider-margin") && !1 !== x.data("slider-margin")
              ? (f =
                  "no" === x.data("slider-margin")
                    ? 0
                    : x.data("slider-margin"))
              : a.parent().hasClass("mkdf-huge-space")
                ? (f = 60)
                : a.parent().hasClass("mkdf-large-space")
                  ? (f = 50)
                  : a.parent().hasClass("mkdf-medium-space")
                    ? (f = 40)
                    : a.parent().hasClass("mkdf-normal-space")
                      ? (f = 30)
                      : a.parent().hasClass("mkdf-small-space")
                        ? (f = 20)
                        : a.parent().hasClass("mkdf-tiny-space") && (f = 10),
            "yes" === x.data("slider-padding") &&
              ((p = parseInt(0.28 * a.outerWidth())),
              "predefined" === x.data("stage-padding") &&
                ((e = ".mkdf-custom-pagination-container"),
                (p =
                  1440 < mkdf.windowWidth
                    ? "150"
                    : 1025 < mkdf.windowWidth
                      ? "108"
                      : 668 < mkdf.windowWidth
                        ? "120"
                        : "0"))),
            "yes" === x.data("enable-center") && (h = !0),
            "yes" === x.data("enable-auto-width") && (k = !0),
            void 0 !== x.data("slider-animate-in") &&
              !1 !== x.data("slider-animate-in") &&
              (g = x.data("slider-animate-in")),
            void 0 !== x.data("slider-animate-out") &&
              !1 !== x.data("slider-animate-out") &&
              (v = x.data("slider-animate-out")),
            "no" === x.data("enable-navigation") && (y = !1),
            "yes" === x.data("enable-pagination") && (b = !0),
            "yes" === x.data("enable-thumbnail") && (w = !0),
            w && !b && ((b = !0), n.addClass("mkdf-slider-hide-pagination")),
            y && b && a.addClass("mkdf-slider-has-both-nav"),
            d <= 1 && (b = y = s = i = !1));
          var _ = 2,
            S = 3,
            I = o,
            O = o;
          if (
            (o < 3 && (S = _ = o),
            4 < o && (I = 4),
            5 < o && (O = 5),
            0 < f && f <= 30 && (u = c = f),
            "predefined" === x.data("stage-padding") && ((_ = 1), (S = 2)),
            a.waitForImages(function () {
              n = a.owlCarousel({
                items: o,
                loop: i,
                autoplay: s,
                autoplayHoverPause: r,
                autoplayTimeout: l,
                smartSpeed: m,
                margin: f,
                stagePadding: p,
                center: h,
                autoWidth: k,
                animateIn: g,
                animateOut: v,
                dots: b,
                dotsContainer: e,
                nav: y,
                navText: [
                  '<span class="mkdf-button-mark ' +
                    mkdfGlobalVars.vars.sliderNavPrevArrow +
                    '"></span><span class="mkdf-nav-label">prev</span>',
                  '</span><span class="mkdf-nav-label">next</span><span class="mkdf-button-mark ' +
                    mkdfGlobalVars.vars.sliderNavNextArrow +
                    '">',
                ],
                responsive: {
                  0: {
                    items: 1,
                    margin: c,
                    stagePadding: 0,
                    center: !1,
                    autoWidth: !1,
                  },
                  681: { items: _, margin: u },
                  769: { items: S, margin: u },
                  1025: { items: I },
                  1281: { items: O },
                  1367: { items: o },
                },
                onInitialize: function () {
                  (a.css("visibility", "visible"),
                    z(),
                    (a.find("iframe").length || a.find("video").length) &&
                      setTimeout(function () {
                        (P(), A());
                      }, 500),
                    w &&
                      t
                        .find(".mkdf-slider-thumbnail-item:first-child")
                        .addClass("active"));
                },
                onRefreshed: function () {
                  var e;
                  !0 === k &&
                    ((e = parseInt(a.find(".owl-stage").css("width"))),
                    a.find(".owl-stage").css("width", e + 1 + "px"));
                },
                onTranslate: function (e) {
                  var a;
                  w &&
                    ((a = e.page.index + 1),
                    t
                      .find(".mkdf-slider-thumbnail-item.active")
                      .removeClass("active"),
                    t
                      .find(".mkdf-slider-thumbnail-item:nth-child(" + a + ")")
                      .addClass("active"));
                },
                onDrag: function (e) {
                  mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") &&
                    0 < e.isTrigger &&
                    a.addClass("mkdf-slider-is-moving");
                },
                onDragged: function () {
                  mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") &&
                    a.hasClass("mkdf-slider-is-moving") &&
                    setTimeout(function () {
                      a.removeClass("mkdf-slider-is-moving");
                    }, 500);
                },
              });
            }),
            w)
          ) {
            t = a.parent().find(".mkdf-slider-thumbnail");
            var T = "";
            switch (parseInt(t.data("thumbnail-count")) % 6) {
              case 2:
                T = "two";
                break;
              case 3:
                T = "three";
                break;
              case 4:
                T = "four";
                break;
              case 5:
                T = "five";
                break;
              case 0:
              default:
                T = "six";
            }
            ("" !== T && t.addClass("mkdf-slider-columns-" + T),
              t.find(".mkdf-slider-thumbnail-item").on("click", function () {
                (D(this).siblings(".active").removeClass("active"),
                  D(this).addClass("active"),
                  n.trigger("to.owl.carousel", [D(this).index(), m]));
              }));
          }
        });
    }
  })(jQuery),
  (function (m) {
    "use strict";
    var e = {};
    function a() {
      f();
    }
    function t() {
      d().init();
    }
    function n() {
      d().scroll();
    }
    function f() {
      var e = m("audio.mkdf-blog-audio");
      e.length && e.mediaelementplayer({ audioWidth: "100%" });
    }
    function d() {
      function t(e) {
        var a =
          e.outerHeight() +
          e.offset().top -
          mkdfGlobalVars.vars.mkdfAddForAdminBar;
        !e.hasClass("mkdf-blog-pagination-infinite-scroll-started") &&
          mkdf.scroll + mkdf.windowHeight > a &&
          n(e);
      }
      var e = m(".mkdf-blog-holder"),
        n = function (t) {
          var e,
            n = t.children(".mkdf-blog-holder-inner");
          (void 0 !== t.data("max-num-pages") &&
            !1 !== t.data("max-num-pages") &&
            (e = t.data("max-num-pages")),
            t.hasClass("mkdf-blog-pagination-infinite-scroll") &&
              t.addClass("mkdf-blog-pagination-infinite-scroll-started"));
          var a,
            d = mkdf.modules.common.getLoadMoreData(t),
            o = t.find(".mkdf-blog-pag-loading"),
            i = d.nextPage,
            s = t.find('input[name*="mkdf_blog_load_more_nonce_"]');
          ((d.blog_load_more_id = s
            .attr("name")
            .substring(s.attr("name").length - 4, s.attr("name").length)),
            (d.blog_load_more_nonce = s.val()),
            i <= e &&
              (o.addClass("mkdf-showing"),
              (a = mkdf.modules.common.setLoadMoreAjaxData(
                d,
                "grandprix_mikado_blog_load_more",
              )),
              m.ajax({
                type: "POST",
                data: a,
                url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                success: function (e) {
                  (i++, t.data("next-page", i));
                  var a = m.parseJSON(e).html;
                  (t.waitForImages(function () {
                    (t.hasClass("mkdf-grid-masonry-list")
                      ? (r(n, o, a),
                        mkdf.modules.common.setFixedImageProportionSize(
                          t,
                          t.find("article"),
                          n.find(".mkdf-masonry-grid-sizer").width(),
                        ))
                      : l(n, o, a),
                      setTimeout(function () {
                        (f(),
                          mkdf.modules.common.mkdfOwlSlider(),
                          mkdf.modules.common.mkdfFluidVideo(),
                          mkdf.modules.common.mkdfInitSelfHostedVideoPlayer(),
                          mkdf.modules.common.mkdfSelfHostedVideoSize(),
                          "function" ==
                            typeof mkdf.modules.common
                              .mkdfStickySidebarWidget &&
                            mkdf.modules.common
                              .mkdfStickySidebarWidget()
                              .reInit(),
                          m(document.body).trigger(
                            "blog_list_load_more_trigger",
                          ));
                      }, 400));
                  }),
                    t.hasClass(
                      "mkdf-blog-pagination-infinite-scroll-started",
                    ) &&
                      t.removeClass(
                        "mkdf-blog-pagination-infinite-scroll-started",
                      ));
                },
              })),
            i === e && t.find(".mkdf-blog-pag-load-more").hide());
        },
        r = function (e, a, t) {
          (e
            .append(t)
            .isotope("reloadItems")
            .isotope({ sortBy: "original-order" }),
            a.removeClass("mkdf-showing"),
            setTimeout(function () {
              e.isotope("layout");
            }, 600));
        },
        l = function (e, a, t) {
          (a.removeClass("mkdf-showing"), e.append(t));
        };
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var a,
                e = m(this);
              (e.hasClass("mkdf-blog-pagination-load-more") &&
                (a = e)
                  .find(".mkdf-blog-pag-load-more a")
                  .on("click", function (e) {
                    (e.preventDefault(), e.stopPropagation(), n(a));
                  }),
                e.hasClass("mkdf-blog-pagination-infinite-scroll") && t(e));
            });
        },
        scroll: function () {
          e.length &&
            e.each(function () {
              var e = m(this);
              e.hasClass("mkdf-blog-pagination-infinite-scroll") && t(e);
            });
        },
      };
    }
    (((mkdf.modules.blog = e).mkdfOnDocumentReady = a),
      (e.mkdfOnWindowLoad = t),
      (e.mkdfOnWindowScroll = n),
      m(document).ready(a),
      m(window).on("load", t),
      m(window).scroll(n));
  })(jQuery),
  (function (d) {
    "use strict";
    var e = {};
    function a() {
      !(function () {
        {
          var e, a, t, n;
          d("body:not(.error404) .mkdf-footer-uncover").length &&
            !mkdf.htmlEl.hasClass("touch") &&
            ((e = d("footer")),
            (a = e.outerHeight()),
            (t = d(".mkdf-content")),
            (n = function () {
              (t.css("margin-bottom", a), e.css("height", a));
            })(),
            d(window).resize(function () {
              ((a = e.find(".mkdf-footer-inner").outerHeight()), n());
            }));
        }
      })();
    }
    (((mkdf.modules.footer = e).mkdfOnWindowLoad = a), d(window).on("load", a));
  })(jQuery),
  (function (r) {
    "use strict";
    var e = {};
    function a() {
      (n(),
        setTimeout(function () {
          (r(".mkdf-drop-down > ul > li").each(function () {
            var i = r(this);
            i.find(".second").length &&
              i.waitForImages(function () {
                var a,
                  e,
                  t,
                  n,
                  d = i.find(".second"),
                  o = mkdf.menuDropdownHeightSet ? 0 : d.outerHeight();
                (i.hasClass("wide") &&
                  ((a = 0),
                  (e = d.find("> .inner > ul > li")).each(function () {
                    var e = r(this).outerHeight();
                    a < e && (a = e);
                  }),
                  e.css("height", "").height(a),
                  mkdf.menuDropdownHeightSet || (o = d.outerHeight())),
                  mkdf.menuDropdownHeightSet || d.height(0),
                  navigator.userAgent.match(/(iPod|iPhone|iPad)/)
                    ? i
                        .on("touchstart mouseenter", function () {
                          d.css({
                            height: o,
                            overflow: "visible",
                            visibility: "visible",
                            opacity: "1",
                          });
                        })
                        .on("mouseleave", function () {
                          d.css({
                            height: "0px",
                            overflow: "hidden",
                            visibility: "hidden",
                            opacity: "0",
                          });
                        })
                    : mkdf.body.hasClass("mkdf-dropdown-animate-height")
                      ? ((t = {
                          interval: 0,
                          over: function () {
                            setTimeout(function () {
                              (d
                                .addClass("mkdf-drop-down-start")
                                .css({
                                  visibility: "visible",
                                  height: "0",
                                  opacity: "1",
                                }),
                                d
                                  .stop()
                                  .animate(
                                    { height: o },
                                    300,
                                    "easeInOutQuint",
                                    function () {
                                      d.css("overflow", "visible");
                                    },
                                  ));
                            }, 0);
                          },
                          timeout: 0,
                          out: function () {
                            (d
                              .stop()
                              .animate(
                                { height: "0", opacity: 0 },
                                0,
                                function () {
                                  d.css({
                                    overflow: "hidden",
                                    visibility: "hidden",
                                  });
                                },
                              ),
                              d.removeClass("mkdf-drop-down-start"));
                          },
                        }),
                        i.hoverIntent(t))
                      : ((n = {
                          interval: 0,
                          over: function () {
                            setTimeout(function () {
                              d.addClass("mkdf-drop-down-start")
                                .stop()
                                .css({ height: o });
                            }, 0);
                          },
                          timeout: 0,
                          out: function () {
                            d.stop()
                              .css({ height: "0" })
                              .removeClass("mkdf-drop-down-start");
                          },
                        }),
                        i.hoverIntent(n)));
              });
          }),
            r(".mkdf-drop-down ul li.wide ul li a").on("click", function (e) {
              var a;
              1 === e.which &&
                ((a = r(this)),
                setTimeout(function () {
                  a.mouseleave();
                }, 500));
            }),
            (mkdf.menuDropdownHeightSet = !0));
        }, 100));
    }
    function t() {
      (d(),
        (function () {
          r(".mkdf-wrapper");
          var a = r(
              ".mkdf-main-menu>ul>li>a, .second, .mkdf-shopping-cart-holder",
            ),
            t = "mkdf-dropdown-menu-opened";
          r(a)
            .on("touchstart mouseenter", function (e) {
              a.hasClass("opened") ||
                (a.addClass("opened"), mkdf.body.addClass(t));
            })
            .on("mouseleave", function (e) {
              (mkdf.body.removeClass(t), a.removeClass("opened"));
            });
        })());
    }
    function n() {
      var e = r(".mkdf-drop-down > ul > li.narrow.menu-item-has-children");
      e.length &&
        e.each(function (e) {
          var a,
            t = r(this),
            n = t.offset().left,
            d = t.find(".second"),
            o = d.find(".inner ul"),
            i = o.outerWidth(),
            s = mkdf.windowWidth - n;
          (mkdf.body.hasClass("mkdf-boxed") &&
            (s =
              mkdf.boxedLayoutWidth -
              (n - (mkdf.windowWidth - mkdf.boxedLayoutWidth) / 2)),
            0 < t.find("li.sub").length && (a = s - i),
            d.removeClass("right"),
            o.removeClass("right"),
            (s < i || a < i) && (d.addClass("right"), o.addClass("right")));
        });
    }
    function d() {
      var e = r(".mkdf-drop-down > ul > li.wide");
      e.length &&
        e.each(function (e) {
          var a,
            t,
            n = r(this).find(".second");
          !n.length ||
            n.hasClass("left_position") ||
            n.hasClass("right_position") ||
            (n.css("left", 0),
            (a = n.offset().left),
            mkdf.body.hasClass("mkdf-boxed")
              ? ((t = r(
                  ".mkdf-boxed .mkdf-wrapper .mkdf-wrapper-inner",
                ).outerWidth()),
                (a -= (mkdf.windowWidth - t) / 2),
                n.css({ left: -a, width: t }))
              : mkdf.body.hasClass("mkdf-wide-dropdown-menu-in-grid")
                ? n.css({
                    left: -a + (mkdf.windowWidth - mkdf.gridWidth()) / 2,
                    width: mkdf.gridWidth(),
                  })
                : n.css({ left: -a, width: mkdf.windowWidth }));
        });
    }
    (((mkdf.modules.header = e).mkdfSetDropDownMenuPosition = n),
      (e.mkdfSetDropDownWideMenuPosition = d),
      (e.mkdfOnDocumentReady = a),
      (e.mkdfOnWindowLoad = t),
      r(document).ready(a),
      r(window).on("load", t));
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function a() {
      !(function () {
        var o,
          e = l(".mkdf-wrapper"),
          i = l(".mkdf-side-menu"),
          s = l("a.mkdf-side-menu-button-opener"),
          r = !1;
        mkdf.body.hasClass("mkdf-side-menu-slide-from-opener") &&
          (l(".mkdf-cover").remove(),
          (o = "mkdf-right-side-menu-opened"),
          e.prepend('<div class="mkdf-cover"/>'),
          (r = !0));
        (l("a.mkdf-side-menu-button-opener, a.mkdf-close-side-menu").on(
          "click",
          function (e) {
            e.preventDefault();
            var a,
              t,
              n,
              d = l(this);
            (d.hasClass("mkdf-side-menu-opener-trigger") &&
              d.parents(".mkdf-page-header").length &&
              ((a = d.offset().top),
              (t = d.outerHeight()),
              i.css({
                top: a + t - mkdf.scroll + "px",
                height:
                  "calc(100vh - " +
                  (a + t - mkdf.scroll + parseInt(i.css("right"), 10)) +
                  "px)",
              })),
              s.hasClass("opened")
                ? (s.removeClass("opened"),
                  mkdf.body.removeClass(o),
                  mkdf.modules.common.mkdfEnableScroll())
                : (s.addClass("opened"),
                  mkdf.body.addClass(o),
                  mkdf.modules.common.mkdfDisableScroll(),
                  r &&
                    l(".mkdf-wrapper .mkdf-cover").on("click", function () {
                      (mkdf.body.removeClass("mkdf-right-side-menu-opened"),
                        s.removeClass("opened"),
                        mkdf.modules.common.mkdfEnableScroll());
                    }),
                  (n = l(window).scrollTop()),
                  l(window).scroll(function () {
                    400 < Math.abs(mkdf.scroll - n) &&
                      (mkdf.body.removeClass(o), s.removeClass("opened"));
                  })));
          },
        ),
          i.length && mkdf.modules.common.mkdfInitPerfectScrollbar().init(i));
      })();
    }
    (((mkdf.modules.sidearea = e).mkdfOnDocumentReady = a),
      l(document).ready(a));
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function a() {
      !(function () {
        var e = s(".mkdf-subscribe-popup-holder"),
          a = s(".mkdf-sp-close");
        {
          var t, n, d, o, i;
          e.length &&
            ((t = e.find(".mkdf-sp-prevent")),
            (n = "no"),
            t.length &&
              ((d = e.hasClass("mkdf-sp-prevent-cookies")),
              (o = t.find(".mkdf-sp-prevent-input")),
              (i = o.data("value")),
              d
                ? ((n = localStorage.getItem("disabledPopup")),
                  sessionStorage.removeItem("disabledPopup"))
                : ((n = sessionStorage.getItem("disabledPopup")),
                  localStorage.removeItem("disabledPopup")),
              t.children().on("click", function (e) {
                ("yes" !== i
                  ? ((i = "yes"),
                    o.addClass("mkdf-sp-prevent-clicked").data("value", "yes"))
                  : ((i = "no"),
                    o
                      .removeClass("mkdf-sp-prevent-clicked")
                      .data("value", "no")),
                  "yes" === i
                    ? d
                      ? localStorage.setItem("disabledPopup", "yes")
                      : sessionStorage.setItem("disabledPopup", "yes")
                    : d
                      ? localStorage.setItem("disabledPopup", "no")
                      : sessionStorage.setItem("disabledPopup", "no"));
              })),
            "yes" !== n &&
              (mkdf.body.hasClass("mkdf-sp-opened")
                ? (mkdf.body.removeClass("mkdf-sp-opened"),
                  mkdf.modules.common.mkdfEnableScroll())
                : (mkdf.body.addClass("mkdf-sp-opened"),
                  mkdf.modules.common.mkdfDisableScroll()),
              a.on("click", function (e) {
                (e.preventDefault(),
                  mkdf.body.removeClass("mkdf-sp-opened"),
                  mkdf.modules.common.mkdfEnableScroll());
              }),
              s(document).keyup(function (e) {
                27 === e.keyCode &&
                  (mkdf.body.removeClass("mkdf-sp-opened"),
                  mkdf.modules.common.mkdfEnableScroll());
              })));
        }
      })();
    }
    (((mkdf.modules.subscribePopup = e).mkdfOnWindowLoad = a),
      s(window).on("load", a));
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function a() {
      !(function () {
        var e = s(".mkdf-title-holder.mkdf-bg-parallax");
        {
          var a, t, n, d, o, i;
          0 < e.length &&
            1024 < mkdf.windowWidth &&
            ((a = e.hasClass("mkdf-bg-parallax-zoom-out")),
            (t = parseInt(e.data("height"))),
            (n = parseInt(e.data("background-width"))),
            (d = (t / 1e4) * 7),
            (o = -mkdf.scroll * d),
            (i = mkdfGlobalVars.vars.mkdfAddForAdminBar),
            e.css({ "background-position": "center " + (o + i) + "px" }),
            a && a.css({ "background-size": n - mkdf.scroll + "px auto" }),
            s(window).scroll(function () {
              ((o = -mkdf.scroll * d),
                e.css({ "background-position": "center " + (o + i) + "px" }),
                a && a.css({ "background-size": n - mkdf.scroll + "px auto" }));
            }));
        }
      })();
    }
    (((mkdf.modules.title = e).mkdfOnDocumentReady = a), s(document).ready(a));
  })(jQuery),
  (function (r) {
    "use strict";
    var e = {};
    function a() {
      var e, a;
      ((e = r(
        ".widget.woocommerce.widget_price_filter .price_slider_amount .button",
      )).length &&
        (e.html(
          '<span class="mkdf-btn-predefined-line-holder"><span class="mkdf-btn-line-hidden"></span><span class="mkdf-btn-text">filter</span><span class="mkdf-btn-line"></span><i class="mkdf-icon-ion-icon ion-ios-play "></i></span>',
        ),
        e.addClass("mkdf-visible")),
        (a = r(".mkdf-single-product-summary .cart .single_add_to_cart_button"))
          .length &&
          (a.html(
            '<span class="mkdf-btn-predefined-line-holder"><span class="mkdf-btn-line-hidden"></span><span class="mkdf-btn-text">add to cart</span><span class="mkdf-btn-line"></span><i class="mkdf-icon-ion-icon ion-ios-play "></i></span>',
          ),
          a.addClass("mkdf-visible")));
    }
    function t() {
      var e;
      (r(document).on(
        "click",
        ".mkdf-quantity-minus, .mkdf-quantity-plus",
        function (e) {
          e.stopPropagation();
          var a,
            t = r(this),
            n = t.siblings(".mkdf-quantity-input"),
            d = parseFloat(n.data("step")),
            o = parseFloat(n.data("max")),
            i = !1,
            s = parseFloat(n.val());
          (t.hasClass("mkdf-quantity-minus") && (i = !0),
            i
              ? 10 <= (a = s - d)
                ? n.val(a)
                : 1 <= a
                  ? n.val("0" + a)
                  : n.val("00")
              : ((a = s + d),
                void 0 === o
                  ? n.val(a)
                  : o <= a
                    ? 10 <= a
                      ? n.val(o)
                      : n.val("0" + o)
                    : 10 <= a
                      ? n.val(a)
                      : n.val("0" + a)),
            n.trigger("change"));
        },
      ),
        (function () {
          var e = r(".woocommerce-ordering .orderby");
          e.length && e.select2({ minimumResultsForSearch: 1 / 0 });
          var a = r(
            ".mkdf-woocommerce-page .mkdf-content .variations td.value select",
          );
          a.length && a.select2();
          var t = r("#calc_shipping_country");
          t.length && t.select2();
          var n = r(".cart-collaterals .shipping select#calc_shipping_state");
          n.length && n.select2();
          var d = r(
            ".widget.widget_archive select, .widget.widget_categories select, .widget.widget_text select",
          );
          d.length && "function" == typeof d.select2 && d.select2();
        })(),
        (e = r(
          ".mkdf-woo-single-page.mkdf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image",
        )).length &&
          (e
            .children("a")
            .attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"),
          "function" == typeof mkdf.modules.common.mkdfPrettyPhoto &&
            mkdf.modules.common.mkdfPrettyPhoto()),
        r(
          ".mkdf-pl-main-holder, .mkdf-pl-holder , .mkdf-plc-holder, .related ul.products",
        ).length &&
          mkdf.body.on("added_to_cart", function (e, a, t, n) {
            setTimeout(function () {
              var e;
              !n.length ||
                ((e = n.siblings(".added_to_cart")).length &&
                  e
                    .empty()
                    .html(
                      '<span class="mkdf-btn-predefined-line-holder"><span class="mkdf-btn-line-hidden"></span><span class="mkdf-btn-text">' +
                        wc_add_to_cart_params.i18n_view_cart +
                        '</span><span class="mkdf-btn-line"></span><i class="mkdf-icon-ion-icon ion-ios-play "></i></span>',
                    ));
            }, 10);
          }));
    }
    (((mkdf.modules.woocommerce = e).mkdfOnWindowLoad = a),
      (e.mkdfOnDocumentReady = t),
      r(window).on("load", a),
      r(document).ready(t));
  })(jQuery),
  (function (p) {
    "use strict";
    var e = {};
    function a() {
      n().init();
    }
    function t() {
      n().scroll();
    }
    function n() {
      function d(e) {
        var a =
          e.outerHeight() +
          e.offset().top -
          mkdfGlobalVars.vars.mkdfAddForAdminBar;
        !e.hasClass("mkdf-bl-pag-infinite-scroll-started") &&
          mkdf.scroll + mkdf.windowHeight > a &&
          o(e);
      }
      var e = p(".mkdf-blog-list-holder"),
        o = function (t, e) {
          var n,
            d = t.find(".mkdf-blog-list");
          (void 0 !== t.data("max-num-pages") &&
            !1 !== t.data("max-num-pages") &&
            (n = t.data("max-num-pages")),
            t.hasClass("mkdf-bl-pag-standard-shortcodes") &&
              t.data("next-page", e),
            t.hasClass("mkdf-bl-pag-infinite-scroll") &&
              t.addClass("mkdf-bl-pag-infinite-scroll-started"));
          var a,
            o = mkdf.modules.common.getLoadMoreData(t),
            i = t.find(".mkdf-blog-pag-loading"),
            s = o.nextPage,
            r = t.find('input[name*="mkdf_blog_load_more_nonce_"]');
          ((o.blog_load_more_id = r
            .attr("name")
            .substring(r.attr("name").length - 4, r.attr("name").length)),
            (o.blog_load_more_nonce = r.val()),
            s <= n &&
              (t.hasClass("mkdf-bl-pag-standard-shortcodes")
                ? (i.addClass("mkdf-showing mkdf-standard-pag-trigger"),
                  t.addClass("mkdf-bl-pag-standard-shortcodes-animate"))
                : i.addClass("mkdf-showing"),
              (a = mkdf.modules.common.setLoadMoreAjaxData(
                o,
                "grandprix_mikado_blog_shortcode_load_more",
              )),
              p.ajax({
                type: "POST",
                data: a,
                url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                success: function (e) {
                  (t.hasClass("mkdf-bl-pag-standard-shortcodes") || s++,
                    t.data("next-page", s));
                  var a = p.parseJSON(e).html;
                  (t.hasClass("mkdf-bl-pag-standard-shortcodes")
                    ? (l(t, n, s),
                      t.waitForImages(function () {
                        t.hasClass("mkdf-bl-masonry")
                          ? m(t, d, i, a)
                          : (f(t, d, i, a),
                            "function" ==
                              typeof mkdf.modules.common
                                .mkdfStickySidebarWidget &&
                              mkdf.modules.common
                                .mkdfStickySidebarWidget()
                                .reInit());
                      }))
                    : t.waitForImages(function () {
                        t.hasClass("mkdf-bl-masonry")
                          ? c(d, i, a)
                          : (u(d, i, a),
                            "function" ==
                              typeof mkdf.modules.common
                                .mkdfStickySidebarWidget &&
                              mkdf.modules.common
                                .mkdfStickySidebarWidget()
                                .reInit());
                      }),
                    t.hasClass("mkdf-bl-pag-infinite-scroll-started") &&
                      t.removeClass("mkdf-bl-pag-infinite-scroll-started"));
                },
              })),
            s === n && t.find(".mkdf-blog-pag-load-more").hide());
        },
        l = function (e, a, t) {
          var n = e.find(".mkdf-bl-standard-pagination"),
            d = n.find("li.mkdf-pag-number"),
            o = n.find("li.mkdf-pag-prev a"),
            i = n.find("li.mkdf-pag-next a");
          (d.removeClass("mkdf-pag-active"),
            d.eq(t - 1).addClass("mkdf-pag-active"),
            o.data("paged", t - 1),
            i.data("paged", t + 1),
            1 < t ? o.css({ opacity: "1" }) : o.css({ opacity: "0" }),
            t === a ? i.css({ opacity: "0" }) : i.css({ opacity: "1" }));
        },
        m = function (e, a, t, n) {
          var d = "";
          (a.children('[class*="-grid-sizer"]').length &&
            (d += a.children('[class*="-grid-sizer"]')[0].outerHTML),
            a.children('[class*="-grid-gutter"]').length &&
              (d += a.children('[class*="-grid-gutter"]')[0].outerHTML),
            a
              .html(d + n)
              .isotope("reloadItems")
              .isotope({ sortBy: "original-order" }),
            t.removeClass("mkdf-showing mkdf-standard-pag-trigger"),
            e.removeClass("mkdf-bl-pag-standard-shortcodes-animate"),
            setTimeout(function () {
              (a.isotope("layout"),
                "function" ==
                  typeof mkdf.modules.common.mkdfStickySidebarWidget &&
                  mkdf.modules.common.mkdfStickySidebarWidget().reInit());
            }, 600));
        },
        f = function (e, a, t, n) {
          (t.removeClass("mkdf-showing mkdf-standard-pag-trigger"),
            e.removeClass("mkdf-bl-pag-standard-shortcodes-animate"),
            a.html(n));
        },
        c = function (e, a, t) {
          (e
            .append(t)
            .isotope("reloadItems")
            .isotope({ sortBy: "original-order" }),
            a.removeClass("mkdf-showing"),
            setTimeout(function () {
              (e.isotope("layout"),
                "function" ==
                  typeof mkdf.modules.common.mkdfStickySidebarWidget &&
                  mkdf.modules.common.mkdfStickySidebarWidget().reInit());
            }, 600));
        },
        u = function (e, a, t) {
          (a.removeClass("mkdf-showing"), e.append(t));
        };
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var n,
                e,
                a,
                t = p(this);
              (t.hasClass("mkdf-bl-pag-standard-shortcodes") &&
                (e = (n = t).find(".mkdf-bl-standard-pagination li")).length &&
                e.each(function () {
                  var a = p(this).children("a"),
                    t = 1;
                  a.on("click", function (e) {
                    (e.preventDefault(),
                      e.stopPropagation(),
                      void 0 !== a.data("paged") &&
                        !1 !== a.data("paged") &&
                        (t = a.data("paged")),
                      o(n, t));
                  });
                }),
                t.hasClass("mkdf-bl-pag-load-more") &&
                  (a = t)
                    .find(".mkdf-blog-pag-load-more a")
                    .on("click", function (e) {
                      (e.preventDefault(), e.stopPropagation(), o(a));
                    }),
                t.hasClass("mkdf-bl-pag-infinite-scroll") && d(t));
            });
        },
        scroll: function () {
          e.length &&
            e.each(function () {
              var e = p(this);
              e.hasClass("mkdf-bl-pag-infinite-scroll") && d(e);
            });
        },
      };
    }
    (((mkdf.modules.blogListSC = e).mkdfOnWindowLoad = a),
      (e.mkdfOnWindowScroll = t),
      p(window).on("load", a),
      p(window).scroll(t));
  })(jQuery),
  (function (m) {
    "use strict";
    var e = {};
    function a() {
      !(function () {
        var a = m("a.mkdf-fullscreen-menu-opener");
        {
          var e, t, n, d, o, i, s, r, l;
          a.length &&
            ((e = m(".mkdf-fullscreen-menu-holder-outer")),
            (d = n = !1),
            (o = m(".mkdf-fullscreen-above-menu-widget-holder")),
            (i = m(".mkdf-fullscreen-below-menu-widget-holder")),
            (s = m(".mkdf-fullscreen-menu-holder-outer nav > ul > li > a")),
            (r = m(".mkdf-fullscreen-menu > ul li.has_sub > a")),
            (l = m(".mkdf-fullscreen-menu ul li:not(.has_sub) a")),
            mkdf.modules.common.mkdfInitPerfectScrollbar().init(e),
            m(window).resize(function () {
              e.height(mkdf.windowHeight);
            }),
            mkdf.body.hasClass("mkdf-fade-push-text-right")
              ? ((t = "mkdf-push-nav-right"), (n = !0))
              : mkdf.body.hasClass("mkdf-fade-push-text-top") &&
                ((t = "mkdf-push-text-top"), (d = !0)),
            (n || d) &&
              (o.length &&
                o
                  .children()
                  .css({
                    "-webkit-animation-delay": "0ms",
                    "-moz-animation-delay": "0ms",
                    "animation-delay": "0ms",
                  }),
              s.each(function (e) {
                m(this).css({
                  "-webkit-animation-delay": 70 * (e + 1) + "ms",
                  "-moz-animation-delay": 70 * (e + 1) + "ms",
                  "animation-delay": 70 * (e + 1) + "ms",
                });
              }),
              i.length &&
                i
                  .children()
                  .css({
                    "-webkit-animation-delay": 70 * (s.length + 1) + "ms",
                    "-moz-animation-delay": 70 * (s.length + 1) + "ms",
                    "animation-delay": 70 * (s.length + 1) + "ms",
                  })),
            a.on("click", function (e) {
              (e.preventDefault(),
                a.hasClass("mkdf-fm-opened")
                  ? (a.removeClass("mkdf-fm-opened"),
                    mkdf.body
                      .removeClass(
                        "mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in",
                      )
                      .addClass("mkdf-fullscreen-fade-out"),
                    mkdf.body.addClass(t),
                    mkdf.modules.common.mkdfEnableScroll(),
                    m("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200))
                  : (a.addClass("mkdf-fm-opened"),
                    mkdf.body
                      .removeClass("mkdf-fullscreen-fade-out")
                      .addClass(
                        "mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in",
                      ),
                    mkdf.body.removeClass(t),
                    mkdf.modules.common.mkdfDisableScroll(),
                    m(document).keyup(function (e) {
                      27 === e.keyCode &&
                        (a.removeClass("mkdf-fm-opened"),
                        mkdf.body
                          .removeClass(
                            "mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in",
                          )
                          .addClass("mkdf-fullscreen-fade-out"),
                        mkdf.body.addClass(t),
                        mkdf.modules.common.mkdfEnableScroll(),
                        m("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200));
                    })));
            }),
            r.on("tap click", function (e) {
              e.preventDefault();
              var a,
                t = m(this).parent(),
                n = t.siblings(".menu-item-has-children");
              return (
                t.hasClass("has_sub") &&
                  ((a = t.find("> ul.sub_menu")).is(":visible")
                    ? (a.slideUp(450, "easeInOutQuint"),
                      t.removeClass("open_sub"))
                    : (t.addClass("open_sub"),
                      0 === n.length
                        ? a.slideDown(400, "easeInOutQuint")
                        : (t
                            .closest("li.menu-item")
                            .siblings()
                            .find(".menu-item")
                            .removeClass("open_sub"),
                          t
                            .siblings()
                            .removeClass("open_sub")
                            .find(".sub_menu")
                            .slideUp(400, "easeInOutQuint", function () {
                              a.slideDown(400, "easeInOutQuint");
                            })))),
                !1
              );
            }),
            l.on("click", function (e) {
              return (
                "http://#" !== m(this).attr("href") &&
                "#" !== m(this).attr("href") &&
                void (
                  1 === e.which &&
                  (a.removeClass("mkdf-fm-opened"),
                  mkdf.body.removeClass("mkdf-fullscreen-menu-opened"),
                  mkdf.body
                    .removeClass("mkdf-fullscreen-fade-in")
                    .addClass("mkdf-fullscreen-fade-out"),
                  mkdf.body.addClass(t),
                  m("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200),
                  mkdf.modules.common.mkdfEnableScroll())
                )
              );
            }));
        }
      })();
    }
    (((mkdf.modules.headerMinimal = e).mkdfOnDocumentReady = a),
      m(document).ready(a));
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function a() {
      (!(function () {
        var a = s(".mkdf-mobile-header .mkdf-mobile-menu-opener"),
          i = s(".mkdf-mobile-header .mkdf-mobile-nav"),
          e = s(
            ".mkdf-mobile-nav .mobile_arrow, .mkdf-mobile-nav h6, .mkdf-mobile-nav a.mkdf-mobile-no-link",
          );
        a.length &&
          i.length &&
          a.on("tap click", function (e) {
            (e.stopPropagation(),
              e.preventDefault(),
              i.is(":visible")
                ? (i.slideUp(450, "easeInOutQuint"),
                  a.removeClass("mkdf-mobile-menu-opened"))
                : (i.slideDown(450, "easeInOutQuint"),
                  a.addClass("mkdf-mobile-menu-opened")));
          });
        e.length &&
          e.each(function () {
            var d = s(this),
              o = i.outerHeight();
            d.on("tap click", function (e) {
              var a,
                t = d.parent("li"),
                n = t.siblings(".menu-item-has-children");
              t.hasClass("has_sub") &&
                ((a = t.find("> ul.sub_menu")).is(":visible")
                  ? (a.slideUp(450, "easeInOutQuint"),
                    t.removeClass("mkdf-opened"),
                    i.stop().animate({ height: o }, 300))
                  : (t.addClass("mkdf-opened"),
                    0 === n.length
                      ? t
                          .find(".sub_menu")
                          .slideUp(400, "easeInOutQuint", function () {
                            (a.slideDown(400, "easeInOutQuint"),
                              i.stop().animate({ height: o + 50 }, 300));
                          })
                      : t
                          .siblings()
                          .removeClass("mkdf-opened")
                          .find(".sub_menu")
                          .slideUp(400, "easeInOutQuint", function () {
                            (a.slideDown(400, "easeInOutQuint"),
                              i.stop().animate({ height: o + 50 }, 300));
                          })));
            });
          });
        s(".mkdf-mobile-nav a, .mkdf-mobile-logo-wrapper a").on(
          "click tap",
          function (e) {
            "http://#" !== s(this).attr("href") &&
              "#" !== s(this).attr("href") &&
              (i.slideUp(450, "easeInOutQuint"),
              a.removeClass("mkdf-mobile-menu-opened"));
          },
        );
      })(),
        n(),
        (function () {
          var a = s(".mkdf-mobile-header"),
            t = a.find(".mkdf-mobile-menu-opener"),
            e = a.length ? a.outerHeight() : 0;
          mkdf.body.hasClass("mkdf-content-is-behind-header") &&
            0 < e &&
            mkdf.windowWidth <= 1024 &&
            s(".mkdf-content").css("marginTop", -e);
          {
            var n, d, o;
            mkdf.body.hasClass("mkdf-sticky-up-mobile-header") &&
              ((d = s("#wpadminbar")),
              (o = s(document).scrollTop()),
              (n = e + mkdfGlobalVars.vars.mkdfAddForAdminBar),
              s(window).scroll(function () {
                var e = s(document).scrollTop();
                (n < e
                  ? a.addClass("mkdf-animate-mobile-header")
                  : a.removeClass("mkdf-animate-mobile-header"),
                  (o < e && n < e && !t.hasClass("mkdf-mobile-menu-opened")) ||
                  e < n
                    ? (a.removeClass("mobile-header-appear"),
                      a.css("margin-bottom", 0),
                      d.length &&
                        a.find(".mkdf-mobile-header-inner").css("top", 0))
                    : (a.addClass("mobile-header-appear"),
                      a.css("margin-bottom", n)),
                  (o = s(document).scrollTop()));
              }));
          }
        })());
    }
    function t() {
      n();
    }
    function n() {
      var e, a, t, n, d, o;
      mkdf.windowWidth <= 1024 &&
        ((a = (e = s(".mkdf-mobile-header")).length ? e.height() : 0),
        (n = (t = e.find(".mkdf-mobile-nav")).outerHeight()),
        (o = (d = mkdf.windowHeight - 100) < a + n ? d - a : n),
        t.length &&
          (t.height(o),
          mkdf.modules.common.mkdfInitPerfectScrollbar().init(t)));
    }
    (((mkdf.modules.mobileHeader = e).mkdfOnDocumentReady = a),
      (e.mkdfOnWindowResize = t),
      s(document).ready(a),
      s(window).resize(t));
  })(jQuery),
  (function (f) {
    "use strict";
    var e = {};
    function a() {
      1024 < mkdf.windowWidth &&
        (function () {
          var a,
            e,
            t = f(".mkdf-page-header"),
            n = f(".mkdf-sticky-header"),
            d = f(".mkdf-fixed-wrapper"),
            o = d.children(".mkdf-menu-area").outerHeight(),
            i = f(".mkdf-slider"),
            s = i.length ? i.outerHeight() : 0,
            r = d.length
              ? d.offset().top - mkdfGlobalVars.vars.mkdfAddForAdminBar
              : 0;
          switch (!0) {
            case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-up"):
              mkdf.modules.stickyHeader.behaviour =
                "mkdf-sticky-header-on-scroll-up";
              var l = f(document).scrollTop();
              ((a =
                parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) +
                parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) +
                parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) +
                parseInt(mkdfGlobalVars.vars.mkdfStickyHeaderHeight)),
                (e = function () {
                  var e = f(document).scrollTop();
                  ((l < e && a < e) || e < a
                    ? ((mkdf.modules.stickyHeader.isStickyVisible = !1),
                      n
                        .removeClass("header-appear")
                        .find(".mkdf-main-menu .second")
                        .removeClass("mkdf-drop-down-start"),
                      mkdf.body.removeClass("mkdf-sticky-header-appear"))
                    : ((mkdf.modules.stickyHeader.isStickyVisible = !0),
                      n.addClass("header-appear"),
                      mkdf.body.addClass("mkdf-sticky-header-appear")),
                    (l = f(document).scrollTop()));
                })(),
                f(window).scroll(function () {
                  e();
                }));
              break;
            case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-down-up"):
              ((mkdf.modules.stickyHeader.behaviour =
                "mkdf-sticky-header-on-scroll-down-up"),
                0 !== mkdfPerPageVars.vars.mkdfStickyScrollAmount
                  ? (mkdf.modules.stickyHeader.stickyAppearAmount = parseInt(
                      mkdfPerPageVars.vars.mkdfStickyScrollAmount,
                    ))
                  : (mkdf.modules.stickyHeader.stickyAppearAmount =
                      parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) +
                      parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) +
                      parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) +
                      parseInt(s)),
                (e = function () {
                  mkdf.scroll < mkdf.modules.stickyHeader.stickyAppearAmount
                    ? ((mkdf.modules.stickyHeader.isStickyVisible = !1),
                      n
                        .removeClass("header-appear")
                        .find(".mkdf-main-menu .second")
                        .removeClass("mkdf-drop-down-start"),
                      mkdf.body.removeClass("mkdf-sticky-header-appear"))
                    : ((mkdf.modules.stickyHeader.isStickyVisible = !0),
                      n.addClass("header-appear"),
                      mkdf.body.addClass("mkdf-sticky-header-appear"));
                })(),
                f(window).scroll(function () {
                  e();
                }));
              break;
            case mkdf.body.hasClass("mkdf-fixed-on-scroll"):
              mkdf.modules.stickyHeader.behaviour = "mkdf-fixed-on-scroll";
              var m = function () {
                mkdf.scroll <= r
                  ? (d.removeClass("fixed"),
                    mkdf.body.removeClass("mkdf-fixed-header-appear"),
                    t.css("margin-bottom", "0"))
                  : (d.addClass("fixed"),
                    mkdf.body.addClass("mkdf-fixed-header-appear"),
                    t.css("margin-bottom", o + "px"));
              };
              (m(),
                f(window).scroll(function () {
                  m();
                }));
          }
        })();
    }
    (((mkdf.modules.stickyHeader = e).isStickyVisible = !1),
      (e.stickyAppearAmount = 0),
      (e.behaviour = ""),
      (e.mkdfOnDocumentReady = a),
      f(document).ready(a));
  })(jQuery),
  (function (o) {
    "use strict";
    function e() {
      o(document).on("click", ".mkdf-like", function () {
        var a = o(this),
          e = a.attr("id"),
          t = a.data("post-id"),
          n = "";
        if (a.hasClass("liked")) return !1;
        void 0 !== a.data("type") && (n = a.data("type"));
        var d = {
          action: "grandprix_core_action_like",
          likes_id: e,
          type: n,
          like_nonce: o("#mkdf_like_nonce_" + t).val(),
        };
        o.post(mkdfGlobalVars.vars.mkdfAjaxUrl, d, function (e) {
          a.html(e).addClass("liked").attr("title", "You already like this!");
        });
        return !1;
      });
    }
    o(document).ready(e);
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function a() {
      function d(e, a) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          t < a ? o(n).addClass("active") : o(n).removeClass("active");
        }
      }
      o(".mkdf-comment-form-rating").each(function () {
        var e = o(this),
          a = e.find(".mkdf-rating"),
          t = a.val(),
          n = e.find(".mkdf-star-rating");
        (d(n, t),
          n.on("click", function () {
            a.val(o(this).data("value")).trigger("change");
          }),
          a.change(function () {
            ((t = a.val()), d(n, t));
          }));
      });
    }
    (((mkdf.modules.rating = e).mkdfOnDocumentReady = a), o(document).ready(a));
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function a() {
      n();
    }
    function t() {}
    function n() {
      var e = l(".mkdf-animated-text-holder");
      e.length &&
        e.each(function () {
          var e = l(this),
            a = e.find(".mkdf-animated-text"),
            t = "",
            n = "",
            d = "",
            o = "",
            i = "",
            s = "",
            r = "";
          (e.hasClass("mkdf-has-animation") &&
            a.appear(
              function () {
                setTimeout(function () {
                  e.addClass("mkdf-appear");
                }, 0);
              },
              { accX: 0, accY: 0 },
            ),
            void 0 !== a.data("item-class") &&
              !1 !== a.data("item-class") &&
              (t = a.data("item-class")),
            void 0 !== a.data("font-size-1366") &&
              !1 !== a.data("font-size-1366") &&
              (n += "font-size: " + a.data("font-size-1366") + " !important;"),
            void 0 !== a.data("font-size-1024") &&
              !1 !== a.data("font-size-1024") &&
              (d += "font-size: " + a.data("font-size-1024") + " !important;"),
            void 0 !== a.data("font-size-768") &&
              !1 !== a.data("font-size-768") &&
              (o += "font-size: " + a.data("font-size-768") + " !important;"),
            void 0 !== a.data("font-size-680") &&
              !1 !== a.data("font-size-680") &&
              (i += "font-size: " + a.data("font-size-680") + " !important;"),
            void 0 !== a.data("line-height-1366") &&
              !1 !== a.data("line-height-1366") &&
              (n +=
                "line-height: " + a.data("line-height-1366") + " !important;"),
            void 0 !== a.data("line-height-1024") &&
              !1 !== a.data("line-height-1024") &&
              (d +=
                "line-height: " + a.data("line-height-1024") + " !important;"),
            void 0 !== a.data("line-height-768") &&
              !1 !== a.data("line-height-768") &&
              (o +=
                "line-height: " + a.data("line-height-768") + " !important;"),
            void 0 !== a.data("line-height-680") &&
              !1 !== a.data("line-height-680") &&
              (i +=
                "line-height: " + a.data("line-height-680") + " !important;"),
            (n.length || d.length || o.length || i.length) &&
              (n.length &&
                (r +=
                  "@media only screen and (max-width: 1366px) {.mkdf-animated-text-holder." +
                  t +
                  " .mkdf-animated-text { " +
                  n +
                  " } }"),
              d.length &&
                (r +=
                  "@media only screen and (max-width: 1024px) {.mkdf-animated-text-holder." +
                  t +
                  " .mkdf-animated-text { " +
                  d +
                  " } }"),
              o.length &&
                (r +=
                  "@media only screen and (max-width: 768px) {.mkdf-animated-text-holder." +
                  t +
                  " .mkdf-animated-text { " +
                  o +
                  " } }"),
              i.length &&
                (r +=
                  "@media only screen and (max-width: 680px) {.mkdf-animated-text-holder." +
                  t +
                  " .mkdf-animated-text { " +
                  i +
                  " } }")),
            r.length && (s = '<style type="text/css">' + r + "</style>"),
            s.length && l("head").append(s));
        });
    }
    (((mkdf.modules.animatedText = e).mkdfanimatedTextResize = n),
      (e.mkdfOnDocumentReady = a),
      (e.mkdfOnWindowLoad = t),
      l(document).ready(a),
      l(window).on("load", t));
  })(jQuery),
  (function (d) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = d(".mkdf-accordion-holder");
      e.length &&
        e.each(function () {
          var e,
            a,
            t,
            n = d(this);
          (n.hasClass("mkdf-accordion") &&
            n.accordion({
              animate: "swing",
              collapsible: !0,
              active: 0,
              icons: "",
              heightStyle: "content",
            }),
            n.hasClass("mkdf-toggle") &&
              ((t = (a = (e = d(this)).find(".mkdf-accordion-title")).next()),
              e.addClass(
                "accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset",
              ),
              a.addClass(
                "ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom",
              ),
              t
                .addClass(
                  "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom",
                )
                .hide(),
              a.each(function () {
                var e = d(this);
                (e.on("hover", function () {
                  e.toggleClass("ui-state-hover");
                }),
                  e.on("click", function () {
                    (e.toggleClass(
                      "ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom",
                    ),
                      e
                        .next()
                        .toggleClass("ui-accordion-content-active")
                        .slideToggle(400));
                  }));
              })));
        });
    }
    (((mkdf.modules.accordions = e).mkdfInitAccordions = t),
      (e.mkdfOnDocumentReady = a),
      d(document).ready(a));
  })(jQuery),
  (function (d) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var t,
        n,
        e = d(
          ".mkdf-grow-in, .mkdf-fade-in-down, .mkdf-element-from-fade, .mkdf-element-from-left, .mkdf-element-from-right, .mkdf-element-from-top, .mkdf-element-from-bottom, .mkdf-flip-in, .mkdf-x-rotate, .mkdf-z-rotate, .mkdf-y-translate, .mkdf-fade-in, .mkdf-fade-in-left-x-rotate",
        );
      e.length &&
        e.each(function () {
          var a = d(this);
          a.appear(
            function () {
              var e;
              ((t = a.data("animation")),
                (n = parseInt(a.data("animation-delay"))),
                void 0 !== t &&
                  "" !== t &&
                  ((e = t + "-on"),
                  setTimeout(function () {
                    a.addClass(e);
                  }, n)));
            },
            { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount },
          );
        });
    }
    (((mkdf.modules.animationHolder = e).mkdfInitAnimationHolder = t),
      (e.mkdfOnDocumentReady = a),
      d(document).ready(a));
  })(jQuery),
  (function (c) {
    "use strict";
    var e = {};
    function a() {
      t().init();
    }
    (((mkdf.modules.button = e).mkdfButton = t),
      (e.mkdfOnDocumentReady = a),
      c(document).ready(a));
    var t = function () {
      var e = c(".mkdf-btn");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e, a, t, n, d, o, i, s, r, l, m, f;
              (void 0 !== (e = c(this)).data("hover-color") &&
                ((a = function (e) {
                  e.data.button.css("color", e.data.color);
                }),
                (t = e.css("color")),
                (n = e.data("hover-color")),
                e.on("mouseenter", { button: e, color: n }, a),
                e.on("mouseleave", { button: e, color: t }, a)),
                void 0 !== (d = c(this)).data("hover-bg-color") &&
                  ((o = function (e) {
                    e.data.button.css("background-color", e.data.color);
                  }),
                  (i = d.css("background-color")),
                  (s = d.data("hover-bg-color")),
                  d.on("mouseenter", { button: d, color: s }, o),
                  d.on("mouseleave", { button: d, color: i }, o)),
                void 0 !== (r = c(this)).data("hover-border-color") &&
                  ((l = function (e) {
                    e.data.button.css("border-color", e.data.color);
                  }),
                  (m = r.css("borderTopColor")),
                  (f = r.data("hover-border-color")),
                  r.on("mouseenter", { button: r, color: f }, l),
                  r.on("mouseleave", { button: r, color: m }, l)));
            });
        },
      };
    };
  })(jQuery),
  (function (n) {
    "use strict";
    var e = {};
    function a() {
      var e;
      (e = n(".mkdf-cards-gallery")).length &&
        e.each(function () {
          var a = n(this),
            t = a.find(".mkdf-cg-card");
          (t.each(function () {
            var e = n(this);
            e.on("click", function () {
              if (!t.last().is(e))
                return (
                  e
                    .addClass("mkdf-out mkdf-animating")
                    .siblings()
                    .addClass("mkdf-animating-siblings"),
                  e.detach(),
                  e.insertAfter(t.last()),
                  setTimeout(function () {
                    e.removeClass("mkdf-out");
                  }, 200),
                  setTimeout(function () {
                    e.removeClass("mkdf-animating")
                      .siblings()
                      .removeClass("mkdf-animating-siblings");
                  }, 1200),
                  (t = a.find(".mkdf-cg-card")),
                  !1
                );
            });
          }),
            a.hasClass("mkdf-bundle-animation") &&
              !mkdf.htmlEl.hasClass("touch") &&
              a.appear(
                function () {
                  (a.addClass("mkdf-appeared"),
                    a
                      .find("img")
                      .one(
                        "animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",
                        function () {
                          n(this).addClass("mkdf-animation-done");
                        },
                      ));
                },
                { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount },
              ));
        });
    }
    (((mkdf.modules.cardsGallery = e).mkdfOnWindowLoad = a),
      n(window).on("load", a));
  })(jQuery),
  (function (k) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var d,
        o,
        i,
        s,
        r,
        l,
        m,
        f,
        c,
        u,
        p,
        e = k(".mkdf-countdown"),
        h = new Date().getMonth();
      e.length &&
        e.each(function () {
          var e,
            a,
            t = k(this).attr("id"),
            n = k("#" + t);
          ((d = n.data("year")),
            (o = n.data("month")),
            (i = n.data("day")),
            (s = n.data("hour")),
            (r = n.data("minute")),
            (l = n.data("timezone")),
            (m = n.data("month-label")),
            (f = n.data("day-label")),
            (c = n.data("hour-label")),
            (u = n.data("minute-label")),
            (p = n.data("second-label")),
            (e = n.data("digit-size")),
            (a = n.data("label-size")),
            h !== o && --o,
            n.countdown({
              until: new Date(d, o, i, s, r, 44),
              labels: ["", m, "", f, c, u, p],
              format: "ODHMS",
              timezone: l,
              padZeroes: !0,
              onTick: function () {
                (n
                  .find(".countdown-amount")
                  .css({ "font-size": e + "px", "line-height": e + "px" }),
                  n.find(".countdown-period").css({ "font-size": a + "px" }));
              },
            }));
        });
    }
    (((mkdf.modules.countdown = e).mkdfInitCountdown = t),
      (e.mkdfOnDocumentReady = a),
      k(document).ready(a));
  })(jQuery),
  (function (n) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = n(".mkdf-counter-holder");
      e.length &&
        e.each(function () {
          var a = n(this),
            t = a.find(".mkdf-counter");
          a.appear(
            function () {
              var e;
              (a.css("opacity", "1"),
                t.hasClass("mkdf-zero-counter")
                  ? ((e = parseFloat(t.text())),
                    t.countTo({
                      from: 0,
                      to: e,
                      speed: 1500,
                      refreshInterval: 100,
                    }))
                  : t.absoluteCounter({ speed: 2e3, fadeInDelay: 1e3 }));
            },
            { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount },
          );
        });
    }
    (((mkdf.modules.counter = e).mkdfInitCounter = t),
      (e.mkdfOnDocumentReady = a),
      n(document).ready(a));
  })(jQuery),
  (function (r) {
    "use strict";
    var e = {};
    function a() {
      n();
    }
    function t() {
      d();
    }
    function n() {
      var e = r(".mkdf-custom-font-holder");
      e.length &&
        e.each(function () {
          var e = r(this),
            a = "",
            t = "",
            n = "",
            d = "",
            o = "",
            i = "",
            s = "";
          (void 0 !== e.data("item-class") &&
            !1 !== e.data("item-class") &&
            (a = e.data("item-class")),
            void 0 !== e.data("font-size-1366") &&
              !1 !== e.data("font-size-1366") &&
              (t += "font-size: " + e.data("font-size-1366") + " !important;"),
            void 0 !== e.data("font-size-1024") &&
              !1 !== e.data("font-size-1024") &&
              (n += "font-size: " + e.data("font-size-1024") + " !important;"),
            void 0 !== e.data("font-size-768") &&
              !1 !== e.data("font-size-768") &&
              (d += "font-size: " + e.data("font-size-768") + " !important;"),
            void 0 !== e.data("font-size-680") &&
              !1 !== e.data("font-size-680") &&
              (o += "font-size: " + e.data("font-size-680") + " !important;"),
            void 0 !== e.data("line-height-1366") &&
              !1 !== e.data("line-height-1366") &&
              (t +=
                "line-height: " + e.data("line-height-1366") + " !important;"),
            void 0 !== e.data("line-height-1024") &&
              !1 !== e.data("line-height-1024") &&
              (n +=
                "line-height: " + e.data("line-height-1024") + " !important;"),
            void 0 !== e.data("line-height-768") &&
              !1 !== e.data("line-height-768") &&
              (d +=
                "line-height: " + e.data("line-height-768") + " !important;"),
            void 0 !== e.data("line-height-680") &&
              !1 !== e.data("line-height-680") &&
              (o +=
                "line-height: " + e.data("line-height-680") + " !important;"),
            (t.length || n.length || d.length || o.length) &&
              (t.length &&
                (s +=
                  "@media only screen and (max-width: 1366px) {.mkdf-custom-font-holder." +
                  a +
                  " { " +
                  t +
                  " } }"),
              n.length &&
                (s +=
                  "@media only screen and (max-width: 1024px) {.mkdf-custom-font-holder." +
                  a +
                  " { " +
                  n +
                  " } }"),
              d.length &&
                (s +=
                  "@media only screen and (max-width: 768px) {.mkdf-custom-font-holder." +
                  a +
                  " { " +
                  d +
                  " } }"),
              o.length &&
                (s +=
                  "@media only screen and (max-width: 680px) {.mkdf-custom-font-holder." +
                  a +
                  " { " +
                  o +
                  " } }")),
            s.length && (i = '<style type="text/css">' + s + "</style>"),
            i.length && r("head").append(i));
        });
    }
    function d() {
      var e = r(".mkdf-cf-typed");
      e.length &&
        e.each(function () {
          var e = r(this),
            a = e
              .parent(".mkdf-cf-typed-wrap")
              .parent(".mkdf-custom-font-holder"),
            t = [],
            n = e.find(".mkdf-cf-typed-1").text(),
            d = e.find(".mkdf-cf-typed-2").text(),
            o = e.find(".mkdf-cf-typed-3").text(),
            i = e.find(".mkdf-cf-typed-4").text();
          (n.length && t.push(n),
            d.length && t.push(d),
            o.length && t.push(o),
            i.length && t.push(i),
            a.appear(
              function () {
                e.typed({
                  strings: t,
                  typeSpeed: 90,
                  backDelay: 700,
                  loop: !0,
                  contentType: "text",
                  loopCount: !1,
                  cursorChar: "_",
                });
              },
              { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount },
            ));
        });
    }
    (((mkdf.modules.customFont = e).mkdfCustomFontResize = n),
      (e.mkdfCustomFontTypeOut = d),
      (e.mkdfOnDocumentReady = a),
      (e.mkdfOnWindowLoad = t),
      r(document).ready(a),
      r(window).on("load", t));
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = l(".mkdf-elements-holder");
      e.length &&
        e.each(function () {
          var e = l(this).children(".mkdf-eh-item"),
            a = "",
            r = "";
          (e.each(function () {
            var e,
              a = l(this),
              t = "",
              n = "",
              d = "",
              o = "",
              i = "",
              s = "";
            (void 0 !== a.data("item-class") &&
              !1 !== a.data("item-class") &&
              (t = a.data("item-class")),
              void 0 !== a.data("1400-1600") &&
                !1 !== a.data("1400-1600") &&
                (n = a.data("1400-1600")),
              void 0 !== a.data("1025-1399") &&
                !1 !== a.data("1025-1399") &&
                (d = a.data("1025-1399")),
              void 0 !== a.data("769-1024") &&
                !1 !== a.data("769-1024") &&
                (o = a.data("769-1024")),
              void 0 !== a.data("681-768") &&
                !1 !== a.data("681-768") &&
                (i = a.data("681-768")),
              void 0 !== a.data("680") &&
                !1 !== a.data("680") &&
                (s = a.data("680")),
              (n.length ||
                d.length ||
                o.length ||
                i.length ||
                s.length ||
                "".length) &&
                (n.length &&
                  (r +=
                    "@media only screen and (min-width: 1400px) and (max-width: 1600px) {.mkdf-eh-item-content." +
                    t +
                    " { padding: " +
                    n +
                    " !important; } }"),
                d.length &&
                  (r +=
                    "@media only screen and (min-width: 1025px) and (max-width: 1399px) {.mkdf-eh-item-content." +
                    t +
                    " { padding: " +
                    d +
                    " !important; } }"),
                o.length &&
                  (r +=
                    "@media only screen and (min-width: 769px) and (max-width: 1024px) {.mkdf-eh-item-content." +
                    t +
                    " { padding: " +
                    o +
                    " !important; } }"),
                i.length &&
                  (r +=
                    "@media only screen and (min-width: 681px) and (max-width: 768px) {.mkdf-eh-item-content." +
                    t +
                    " { padding: " +
                    i +
                    " !important; } }"),
                s.length &&
                  (r +=
                    "@media only screen and (max-width: 680px) {.mkdf-eh-item-content." +
                    t +
                    " { padding: " +
                    s +
                    " !important; } }")),
              "function" != typeof mkdf.modules.common.mkdfOwlSlider ||
                ((e = a.find(".mkdf-owl-slider")).length &&
                  setTimeout(function () {
                    e.trigger("refresh.owl.carousel");
                  }, 100)));
          }),
            r.length && (a = '<style type="text/css">' + r + "</style>"),
            a.length && l("head").append(a));
        });
    }
    (((mkdf.modules.elementsHolder = e).mkdfInitElementsHolderResponsiveStyle =
      t),
      (e.mkdfOnDocumentReady = a),
      l(document).ready(a));
  })(jQuery),
  (function (h) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = h(".mkdf-google-map");
      e.length &&
        e.each(function () {
          var e,
            a,
            t,
            n,
            d,
            o,
            i,
            s,
            r,
            l,
            m,
            f,
            c = h(this),
            u = !1,
            p = "";
          (void 0 !== c.data("snazzy-map-style") &&
            "yes" === c.data("snazzy-map-style") &&
            ((u = !0),
            (a = (e = c.parent().find(".mkdf-snazzy-map")).val()),
            e.length &&
              a.length &&
              (p = JSON.parse(
                a
                  .replace(/`{`/g, "[")
                  .replace(/`}`/g, "]")
                  .replace(/``/g, '"')
                  .replace(/`/g, ""),
              ))),
            void 0 !== c.data("custom-map-style") &&
              (t = c.data("custom-map-style")),
            void 0 !== c.data("color-overlay") &&
              !1 !== c.data("color-overlay") &&
              (n = c.data("color-overlay")),
            void 0 !== c.data("saturation") &&
              !1 !== c.data("saturation") &&
              (d = c.data("saturation")),
            void 0 !== c.data("lightness") &&
              !1 !== c.data("lightness") &&
              (o = c.data("lightness")),
            void 0 !== c.data("zoom") &&
              !1 !== c.data("zoom") &&
              (i = c.data("zoom")),
            void 0 !== c.data("pin") &&
              !1 !== c.data("pin") &&
              (s = c.data("pin")),
            void 0 !== c.data("height") &&
              !1 !== c.data("height") &&
              (r = c.data("height")),
            void 0 !== c.data("unique-id") &&
              !1 !== c.data("unique-id") &&
              (l = c.data("unique-id")),
            void 0 !== c.data("scroll-wheel") && (m = c.data("scroll-wheel")),
            void 0 !== c.data("addresses") &&
              !1 !== c.data("addresses") &&
              (f = c.data("addresses")),
            (function (e, a, t, n, d, o, i, s, r, l, m, f, c, u) {
              if ("object" != typeof google) return;
              var p,
                h = [];
              h =
                e && a.length
                  ? a
                  : [
                      {
                        stylers: [
                          { hue: n },
                          { saturation: d },
                          { lightness: o },
                          { gamma: 1 },
                        ],
                      },
                    ];
              p =
                e || "yes" === t ? "mkdf-style" : google.maps.MapTypeId.ROADMAP;
              i = "yes" === i;
              var k = new google.maps.StyledMapType(h, { name: "Google Map" });
              c = new google.maps.Geocoder();
              var g = new google.maps.LatLng(-34.397, 150.644);
              isNaN(l) || (l += "px");
              var v,
                y = {
                  zoom: s,
                  scrollwheel: i,
                  center: g,
                  zoomControl: !0,
                  zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER,
                  },
                  scaleControl: !1,
                  scaleControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  streetViewControl: !1,
                  streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  panControl: !1,
                  panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  mapTypeControl: !1,
                  mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkdf-style"],
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_CENTER,
                  },
                  mapTypeId: p,
                };
              for (
                (f = new google.maps.Map(
                  document.getElementById(r),
                  y,
                )).mapTypes.set("mkdf-style", k),
                  v = 0;
                v < u.length;
                ++v
              )
                !(function (n, d, o, e) {
                  if ("" === n) return;
                  var a =
                      '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' +
                      n +
                      "</p></div></div>",
                    i = new google.maps.InfoWindow({ content: a });
                  e.geocode({ address: n }, function (e, a) {
                    var t;
                    a === google.maps.GeocoderStatus.OK &&
                      (o.setCenter(e[0].geometry.location),
                      (t = new google.maps.Marker({
                        map: o,
                        position: e[0].geometry.location,
                        icon: d,
                        title: n.store_title,
                      })),
                      google.maps.event.addListener(t, "click", function () {
                        i.open(o, t);
                      }),
                      google.maps.event.addDomListener(
                        window,
                        "resize",
                        function () {
                          o.setCenter(e[0].geometry.location);
                        },
                      ));
                  });
                })(u[v], m, f, c);
              document.getElementById(r).style.height = l;
            })(
              u,
              p,
              t,
              n,
              d,
              o,
              m,
              i,
              "mkdf-map-" + l,
              r,
              s,
              "map_" + l,
              "geocoder_" + l,
              f,
            ));
        });
    }
    (((mkdf.modules.googleMap = e).mkdfShowGoogleMap = t),
      (e.mkdfOnDocumentReady = a),
      h(document).ready(a));
  })(jQuery),
  (function (v) {
    "use strict";
    var e = {};
    function a() {
      t().init();
    }
    function t() {
      var o,
        e = v(".mkdf-horizontal-timeline");
      function a(e) {
        e.each(function () {
          var e,
            i,
            a = v(this),
            t = {};
          ((o = a.data("distance")),
            (t.timelineNavWrapper = a.find(".mkdf-ht-nav-wrapper")),
            (t.timelineNavWrapperWidth = t.timelineNavWrapper.width()),
            (t.timelineNavInner =
              t.timelineNavWrapper.find(".mkdf-ht-nav-inner")),
            (t.fillingLine = t.timelineNavInner.find(
              ".mkdf-ht-nav-filling-line",
            )),
            (t.timelineEvents = t.timelineNavInner.find("a")),
            (t.timelineDates =
              ((e = t.timelineEvents),
              (i = []),
              e.each(function () {
                var e,
                  a = v(this),
                  t = new String(a.data("date")),
                  n = ["2000", "0", "0"],
                  d = ["0", "0"];
                4 === t.length
                  ? (n = [t, "0", "0"])
                  : ((n = (e = t.split("T"))[0].split("/")),
                    1 < e.length
                      ? ((n = e[0].split("/")), (d = e[1].split(":")))
                      : 0 <= e[0].indexOf(":") && (d = e[0].split(":")));
                var o = new Date(n[2], n[1] - 1, n[0], d[0], d[1]);
                i.push(o);
              }),
              i)),
            (t.eventsMinLapse = (function (e) {
              for (var a = [], t = 1; t < e.length; t++) {
                var n = k(e[t - 1], e[t]);
                a.push(n);
              }
              return Math.min.apply(null, a);
            })(t.timelineDates)),
            (t.timelineNavigation = a.find(".mkdf-ht-nav-navigation")),
            (t.timelineEventContent = a.find(".mkdf-ht-content")),
            t.timelineEvents.first().addClass("mkdf-selected"),
            t.timelineEventContent.find("li").first().addClass("mkdf-selected"),
            (function (e, a) {
              for (var t = 0; t < e.timelineDates.length; t++) {
                var n = k(e.timelineDates[0], e.timelineDates[t]),
                  d = Math.round(n / e.eventsMinLapse) + 2;
                e.timelineEvents.eq(t).css("left", d * a + "px");
              }
            })(t, o));
          var n = (function (e, a) {
            var t = k(
                e.timelineDates[0],
                e.timelineDates[e.timelineDates.length - 1],
              ),
              n = (Math.round(t / e.eventsMinLapse) + 4) * a;
            n < e.timelineNavWrapperWidth && (n = e.timelineNavWrapperWidth);
            return (
              e.timelineNavInner.css("width", n + "px"),
              f(e.timelineNavInner.find("a.mkdf-selected"), e.fillingLine, n),
              l("next", e.timelineNavInner.find("a.mkdf-selected"), e),
              n
            );
          })(t, o);
          (a.addClass("mkdf-loaded"),
            t.timelineNavigation.on("click", ".mkdf-next", function (e) {
              (e.preventDefault(), s(t, n, "next"));
            }),
            t.timelineNavigation.on("click", ".mkdf-prev", function (e) {
              (e.preventDefault(), s(t, n, "prev"));
            }),
            t.timelineNavInner.on("click", "a", function (e) {
              e.preventDefault();
              var a = v(this);
              (t.timelineEvents.removeClass("mkdf-selected"),
                a.addClass("mkdf-selected"),
                u(a),
                f(a, t.fillingLine, n),
                c(a, t.timelineEventContent));
            }));
          var d = window
            .getComputedStyle(
              document.querySelector(".mkdf-horizontal-timeline"),
              "::before",
            )
            .getPropertyValue("content")
            .replace(/'/g, "")
            .replace(/"/g, "");
          (t.timelineEventContent.on("swipeleft", function () {
            "mobile" === d && r(t, n, "next");
          }),
            t.timelineEventContent.on("swiperight", function () {
              "mobile" === d && r(t, n, "prev");
            }),
            v(document).keyup(function (e) {
              "37" === e.which && g(a.get(0))
                ? r(t, n, "prev")
                : "39" === e.which && g(a.get(0)) && r(t, n, "next");
            }));
        });
      }
      function s(e, a, t) {
        var n = p(e.timelineNavInner),
          d = Number(e.timelineNavWrapper.css("width").replace("px", ""));
        "next" === t ? m(e, n - d + o, d - a) : m(e, n + d - o);
      }
      function r(e, a, t) {
        var n,
          d,
          o = e.timelineEventContent.find(".mkdf-selected");
        0 < ("next" === t ? o.next() : o.prev()).length &&
          ((n = e.timelineNavInner.find(".mkdf-selected")),
          f(
            (d =
              "next" === t
                ? n.parent("li").next("li").children("a")
                : n.parent("li").prev("li").children("a")),
            e.fillingLine,
            a,
          ),
          c(d, e.timelineEventContent),
          d.addClass("mkdf-selected"),
          n.removeClass("mkdf-selected"),
          u(d),
          l(t, d, e));
      }
      function l(e, a, t) {
        var n = window.getComputedStyle(a.get(0), null),
          d = Number(n.getPropertyValue("left").replace("px", "")),
          o = Number(t.timelineNavWrapper.css("width").replace("px", "")),
          i = Number(t.timelineNavInner.css("width").replace("px", "")),
          s = p(t.timelineNavInner);
        (("next" === e && o - s < d) || ("prev" === e && d < -s)) &&
          m(t, o / 2 - d, o - i);
      }
      function m(e, a, t) {
        ((a = 0 < a ? 0 : a),
          h(
            e.timelineNavInner.get(0),
            "translateX",
            (a = void 0 !== t && a < t ? t : a) + "px",
          ),
          0 === a
            ? e.timelineNavigation.find(".mkdf-prev").addClass("mkdf-inactive")
            : e.timelineNavigation
                .find(".mkdf-prev")
                .removeClass("mkdf-inactive"),
          a === t
            ? e.timelineNavigation.find(".mkdf-next").addClass("mkdf-inactive")
            : e.timelineNavigation
                .find(".mkdf-next")
                .removeClass("mkdf-inactive"));
      }
      function f(e, a, t) {
        var n = window.getComputedStyle(e.get(0), null),
          d = n.getPropertyValue("left"),
          o = n.getPropertyValue("width"),
          i =
            (d =
              Number(d.replace("px", "")) + Number(o.replace("px", "")) / 2) /
            t;
        h(a.get(0), "scaleX", i);
      }
      function c(e, a) {
        var t = e.data("date"),
          n = a.find(".mkdf-selected"),
          d = a.find('[data-date="' + t + '"]'),
          o = d.height(),
          i = "mkdf-selected mkdf-enter-left",
          s = "mkdf-leave-right";
        (d.index() > n.index() &&
          ((i = "mkdf-selected mkdf-enter-right"), (s = "mkdf-leave-left")),
          d.attr("class", i),
          n
            .attr("class", s)
            .one(
              "webkitAnimationEnd oanimationend msAnimationEnd animationend",
              function () {
                (n.removeClass("mkdf-leave-right mkdf-leave-left"),
                  d.removeClass("mkdf-enter-left mkdf-enter-right"));
              },
            ),
          a.css("height", o + "px"));
      }
      function u(e) {
        e.parent("li")
          .prevAll("li")
          .children("a")
          .addClass("mkdf-older-event")
          .end()
          .end()
          .nextAll("li")
          .children("a")
          .removeClass("mkdf-older-event");
      }
      function p(e) {
        var a = window.getComputedStyle(e.get(0), null),
          t =
            a.getPropertyValue("-webkit-transform") ||
            a.getPropertyValue("-moz-transform") ||
            a.getPropertyValue("-ms-transform") ||
            a.getPropertyValue("-o-transform") ||
            a.getPropertyValue("transform"),
          n = 0;
        return (
          0 <= t.indexOf("(") &&
            (n = (t = (t = (t = t.split("(")[1]).split(")")[0]).split(","))[4]),
          Number(n)
        );
      }
      function h(e, a, t) {
        ((e.style["-webkit-transform"] = a + "(" + t + ")"),
          (e.style["-moz-transform"] = a + "(" + t + ")"),
          (e.style["-ms-transform"] = a + "(" + t + ")"),
          (e.style["-o-transform"] = a + "(" + t + ")"),
          (e.style.transform = a + "(" + t + ")"));
      }
      function k(e, a) {
        return Math.round(a - e);
      }
      function g(e) {
        for (
          var a = e.offsetTop,
            t = e.offsetLeft,
            n = e.offsetWidth,
            d = e.offsetHeight;
          e.offsetParent;

        )
          ((a += (e = e.offsetParent).offsetTop), (t += e.offsetLeft));
        return (
          a < window.pageYOffset + window.innerHeight &&
          t < window.pageXOffset + window.innerWidth &&
          a + d > window.pageYOffset &&
          t + n > window.pageXOffset
        );
      }
      return {
        init: function () {
          0 < e.length && a(e);
        },
      };
    }
    (((mkdf.modules.timeline = e).mkdfInitHorizontalTimeline = t),
      (e.mkdfOnDocumentReady = a),
      v(document).ready(a));
  })(jQuery),
  (function (m) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = m(".swiper-container.mkdf-dual-image-carousel");
      e.length &&
        e.each(function () {
          var e = m(this),
            a =
              (e.find(".mkdf-swiper-active-slide"),
              e.find(".mkdf-swiper-all-slides"),
              new Array()),
            t = e.find(".swiper-slide"),
            n = e.data("foreground-slides-position");
          t.each(function () {
            (a.push(m(this).data("swiper-title")),
              "" !== n &&
                m(this)
                  .find(".mkdf-slide-foreground-image-holder")
                  .css("margin-top", n));
          });
          var d = new Swiper(e, {
            loop: !0,
            parallax: !0,
            speed: 1e3,
            slidesPerView: "auto",
            centeredSlides: !0,
            spaceBetween: 45,
            navigation: {
              nextEl: ".mkdf-swiper-button-next",
              prevEl: ".mkdf-swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
              clickable: !0,
            },
          });
          m(this).waitForImages(function () {
            var e = m(this).find(".mkdf-swiper-button-prev"),
              a = m(this).find(".mkdf-swiper-button-next"),
              t = m(this).find(".mkdf-slide-background-image").height();
            (e.css("top", t / 2 + "px"), a.css("top", t / 2 + "px"));
          });
          function o(e) {
            l.css({ left: parseInt(e) });
          }
          var i = m(".swiper-pagination-bullet"),
            s = i.width(),
            r = 0,
            l = e.find(".mkdf-pagination-line");
          (l.width(s),
            d.on("slideChange", function () {
              (i.each(function () {
                m(this).hasClass("swiper-pagination-bullet-active") &&
                  (r = m(this).position().left);
              }),
                o(r));
            }),
            i.mouseenter(function () {
              ((r = m(this).position().left),
                setTimeout(function () {
                  o(r);
                }, 100));
            }),
            i.mouseleave(function () {
              (i.each(function () {
                m(this).hasClass("swiper-pagination-bullet-active") &&
                  (r = m(this).position().left);
              }),
                setTimeout(function () {
                  o(r);
                }, 100));
            }));
        });
    }
    (((mkdf.modules.dualImageCarousel = e).mkdfDualImageCarousel = t),
      (e.mkdfOnDocumentReady = a),
      m(document).ready(a));
  })(jQuery),
  (function (p) {
    "use strict";
    var e = {};
    function a() {
      t().init();
    }
    (((mkdf.modules.icon = e).mkdfIcon = t),
      (e.mkdfOnDocumentReady = a),
      p(document).ready(a));
    var t = function () {
      var e = p(".mkdf-icon-shortcode");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e, a, t, n, d, o, i, s, r, l, m, f, c, u;
              ((e = p(this)).hasClass("mkdf-icon-animation") &&
                e.appear(
                  function () {
                    e.parent(".mkdf-icon-animation-holder").addClass(
                      "mkdf-icon-animation-show",
                    );
                  },
                  {
                    accX: 0,
                    accY: mkdfGlobalVars.vars.mkdfElementAppearAmount,
                  },
                ),
                void 0 !== (a = p(this)).data("hover-color") &&
                  ((t = function (e) {
                    e.data.icon.css("color", e.data.color);
                  }),
                  (n = a.find(".mkdf-icon-element")),
                  (d = a.data("hover-color")),
                  (o = n.css("color")),
                  "" !== d &&
                    (a.on("mouseenter", { icon: n, color: d }, t),
                    a.on("mouseleave", { icon: n, color: o }, t))),
                void 0 !== (i = p(this)).data("hover-background-color") &&
                  ((s = function (e) {
                    e.data.icon.css("background-color", e.data.color);
                  }),
                  (r = i.data("hover-background-color")),
                  (l = i.css("background-color")),
                  "" !== r &&
                    (i.on("mouseenter", { icon: i, color: r }, s),
                    i.on("mouseleave", { icon: i, color: l }, s))),
                void 0 !== (m = p(this)).data("hover-border-color") &&
                  ((f = function (e) {
                    e.data.icon.css("border-color", e.data.color);
                  }),
                  (c = m.data("hover-border-color")),
                  (u = m.css("borderTopColor")),
                  "" !== c &&
                    (m.on("mouseenter", { icon: m, color: c }, f),
                    m.on("mouseleave", { icon: m, color: u }, f))));
            });
        },
      };
    };
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e,
        i,
        a = s(".mkdf-anchor-menu");
      a.length &&
        1024 < mkdf.windowWidth &&
        (a.remove(),
        s(".mkdf-content-inner").append(a.addClass("mkdf-init")),
        (e = s("div[data-mkdf-anchor]")),
        (i = a.find(".mkdf-anchor")),
        e.length &&
          i.length &&
          (i.first().addClass("mkdf-active"),
          s(window).scroll(function () {
            e.each(function (e) {
              var a = s(this),
                t = a.offset().top,
                n = a.outerHeight(),
                d = mkdf.windowHeight / 5,
                o = 0;
              0 === mkdf.scroll
                ? i.removeClass("mkdf-active").first().addClass("mkdf-active")
                : t <= mkdf.scroll + d && t + n >= mkdf.scroll + d
                  ? o !== e &&
                    ((o = e),
                    i.removeClass("mkdf-active").eq(e).addClass("mkdf-active"))
                  : mkdf.scroll + mkdf.windowHeight == mkdf.document.height() &&
                    i.removeClass("mkdf-active").last().addClass("mkdf-active");
            });
          })));
    }
    (((mkdf.modules.anchorMenu = e).mkdfAnchorMenu = t),
      (e.mkdfOnDocumentReady = a),
      s(document).ready(a));
  })(jQuery),
  (function (m) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = m(
        ".mkdf-image-with-text-holder.mkdf-image-behavior-scrolling-image",
      );
      e.length &&
        e.each(function () {
          function e() {
            ((a = s.height()),
              (t = r.height()),
              (n = Math.round(t - a)),
              (d = 1.4 * Math.round(t / a)),
              a < t && (l = !0));
          }
          var a,
            t,
            n,
            d,
            o = m(this),
            i = o.find(".mkdf-iwt-image"),
            s = o.find(".mkdf-iwt-frame"),
            r = o.find(".main-image"),
            l = !1;
          (o.waitForImages(function () {
            (o.css("visibility", "visible"),
              e(),
              i.mouseenter(function () {
                (r.css("transition-duration", d + "s"),
                  r.css("transform", "translate3d(0px, -" + n + "px, 0px)"));
              }),
              i.mouseleave(function () {
                l &&
                  (r.css("transition-duration", Math.min(d / 2, 3) + "s"),
                  r.css("transform", "translate3d(0px, 0px, 0px)"));
              }));
          }),
            m(window).resize(function () {
              e();
            }));
        });
    }
    (((mkdf.modules.scrollingImage = e).mkdfScrollingImage = t),
      (e.mkdfOnDocumentReady = a),
      m(document).ready(a));
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = o(".mkdf-ils-holder");
      e.length &&
        e.each(function () {
          var t = o(this),
            n = t.find(".mkdf-ils-item-image"),
            d = t.find(".mkdf-ils-item-link");
          (n.eq(0).addClass("mkdf-active"),
            t
              .find('.mkdf-ils-item-link[data-index="0"]')
              .addClass("mkdf-active"),
            d.children().on("touchstart mouseenter", function () {
              var e = o(this).parent(),
                a = parseInt(e.data("index"), 10);
              (n.removeClass("mkdf-active").eq(a).addClass("mkdf-active"),
                d.removeClass("mkdf-active"),
                t
                  .find('.mkdf-ils-item-link[data-index="' + a + '"]')
                  .addClass("mkdf-active"));
            }));
        });
    }
    (((mkdf.modules.interactiveLinkShowcase =
      e).mkdfInitInteractiveLinkShowcase = t),
      (e.mkdfOnDocumentReady = a),
      o(document).ready(a));
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = o(".mkdf-item-showcase-holder");
      e.length &&
        e.each(function () {
          var a = o(this),
            e = a.find(".mkdf-is-left"),
            t = a.find(".mkdf-is-right"),
            n = a.find(".mkdf-is-image");
          function d(e) {
            a.find(e).each(function (e) {
              var a = o(this);
              setTimeout(function () {
                a.addClass("mkdf-appeared");
              }, 150 * e);
            });
          }
          (e.wrapAll("<div class='mkdf-is-item-holder mkdf-is-left-holder' />"),
            t.wrapAll(
              "<div class='mkdf-is-item-holder mkdf-is-right-holder' />",
            ),
            a.animate({ opacity: 1 }, 200),
            setTimeout(function () {
              a.appear(
                function () {
                  (n.addClass("mkdf-appeared"),
                    a.on(
                      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                      function (e) {
                        1200 < mkdf.windowWidth
                          ? (d(".mkdf-is-left-holder .mkdf-is-item"),
                            d(".mkdf-is-right-holder .mkdf-is-item"))
                          : d(".mkdf-is-item");
                      },
                    ));
                },
                { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount },
              );
            }, 100));
        });
    }
    (((mkdf.modules.itemShowcase = e).mkdfInitItemShowcase = t),
      (e.mkdfOnDocumentReady = a),
      o(document).ready(a));
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = a(".mkdf-pie-chart-holder");
      e.length &&
        e.each(function () {
          var t = a(this),
            n = t.children(".mkdf-pc-percentage"),
            d = "#ed1d24",
            o = !1,
            i = 176;
          (void 0 !== n.data("size") &&
            "" !== n.data("size") &&
            (i = n.data("size")),
            void 0 !== n.data("bar-color") &&
              "" !== n.data("bar-color") &&
              (d = n.data("bar-color")),
            void 0 !== n.data("track-color") &&
              "" !== n.data("track-color") &&
              (o = n.data("track-color")),
            n.appear(
              function () {
                var e, a;
                ((e = n.find(".mkdf-pc-percent")),
                  (a = parseFloat(e.text())),
                  e.countTo({
                    from: 0,
                    to: a,
                    speed: 1500,
                    refreshInterval: 50,
                  }),
                  t.css("opacity", "1"),
                  n.easyPieChart({
                    barColor: d,
                    trackColor: o,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: 5,
                    animate: 1500,
                    size: i,
                  }));
              },
              { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount },
            ));
        });
    }
    (((mkdf.modules.pieChart = e).mkdfInitPieChart = n),
      (e.mkdfOnDocumentReady = t),
      a(document).ready(t));
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = o(".mkdf-items-showcase-custom-holder");
      e.length &&
        e.each(function () {
          var t = o(this),
            e = o(this).find(".mkdf-issc-media-section"),
            n = o(this).find(".mkdf-issc-main-image-holder"),
            d = e.find(".mkdf-issc-media-image");
          (t.hasClass("mkdf-has-appear-animation")
            ? t.appear(
                function () {
                  setTimeout(function () {
                    e.find(".mkdf-issc-media-image:first-child").addClass(
                      "mkdf-active",
                    );
                  }, 500);
                },
                { accX: 0, accY: 50 },
              )
            : e
                .find(".mkdf-issc-media-image:first-child")
                .addClass("mkdf-active"),
            t
              .find(".mkdf-issc-main-image-holder:first-child")
              .addClass("mkdf-active"),
            d.on("click", function (e) {
              var a = o(this).data("index");
              (d.removeClass("mkdf-active"),
                o(this).addClass("mkdf-active"),
                n.removeClass("mkdf-active"),
                t
                  .find(".mkdf-issc-main-image-holder")
                  .eq(a)
                  .addClass("mkdf-active"));
            }));
        });
    }
    (((mkdf.modules.itemsShowcaseCustom = e).mkdfInitItemsShowcaseCustom = t),
      (e.mkdfOnDocumentReady = a),
      o(document).ready(a));
  })(jQuery),
  (function (d) {
    "use strict";
    var e = {};
    function a() {
      (t(),
        d(".mkdf-preview-slider")
          .find(".mkdf-ps-dots-holder-inner")
          .on("beforeChange", function (e, a, t) {
            var n;
            d(".mkdf-ps-dot");
            setTimeout(function () {
              var e,
                a = d(".mkdf-ps-dots-holder-inner").find(".slick-current");
              ((n = a.css("background-color")),
                (e = n),
                d(".mkdf-ps-tagline").css({ color: e }),
                d(".mkdf-background-holder").css({ "background-color": e }));
            }, 100);
          }));
    }
    function t() {
      d(".mkdf-preview-slider").each(function () {
        var e = d(this),
          a = 1800;
        (void 0 !== e.data("autoplay") && e.data("autoplay"),
          void 0 !== e.data("autoplay-speed") &&
            !1 !== e.data("autoplay-speed") &&
            (a = e.data("autoplay-speed")));
        var t = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: a,
            asNavFor: ".mkdf-ps-dots-holder-inner",
            arrows: !1,
            vertical: !0,
            easing: "easeInOutCubic",
            draggable: !1,
            infinite: !0,
            pauseOnHover: !1,
          },
          n = {
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: a,
            asNavFor:
              ".mkdf-ps-mobile-images,.mkdf-ps-laptop-images,.mkdf-ps-tablet-images",
            focusOnSelect: !0,
            variableWidth: !0,
            draggable: !1,
            infinite: !0,
            pauseOnHover: !1,
          };
        (e.find(".mkdf-ps-tablet-images").slick(t),
          e.find(".mkdf-ps-laptop-images").slick(t),
          e.find(".mkdf-ps-mobile-images").slick(t),
          e.find(".mkdf-ps-dots-holder-inner").slick(n));
        e.addClass("mkdf-preview-slider-loaded");
      });
    }
    (((mkdf.modules.previewSlider = e).mkdfInitPreviewSlider = t),
      (e.mkdfOnDocumentReady = a),
      d(document).ready(a));
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = a(".mkdf-process-holder");
      e.length &&
        e.each(function () {
          var e = a(this);
          e.appear(
            function () {
              e.addClass("mkdf-process-appeared");
            },
            { accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount },
          );
        });
    }
    (((mkdf.modules.process = e).mkdfInitProcess = n),
      (e.mkdfOnDocumentReady = t),
      a(document).ready(t));
  })(jQuery),
  (function (i) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = i(".mkdf-progress-bar");
      e.length &&
        e.each(function () {
          var t = i(this),
            n = t.find(".mkdf-pb-content"),
            d = t.find(".mkdf-pb-percent"),
            o = n.data("percentage");
          t.appear(function () {
            var e, a;
            ((e = d),
              (a = parseFloat(o)),
              e.length &&
                e.each(function () {
                  var e = i(this);
                  (e.css("opacity", "1"),
                    e.countTo({
                      from: 0,
                      to: a,
                      speed: 2e3,
                      refreshInterval: 50,
                    }));
                }),
              n.css("width", "0%").animate({ width: o + "%" }, 2e3),
              t.hasClass("mkdf-pb-percent-floating") &&
                d.css("left", "0%").animate({ left: o + "%" }, 2e3));
          });
        });
    }
    (((mkdf.modules.progressBar = e).mkdfInitProgressBars = t),
      (e.mkdfOnDocumentReady = a),
      i(document).ready(a));
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = o(".mkdf-tabs");
      e.length &&
        e.each(function () {
          var e = o(this);
          (e.children(".mkdf-tab-container").each(function (e) {
            e += 1;
            var a = o(this),
              t = a.attr("id"),
              n = a.parent().find(".mkdf-tabs-nav li:nth-child(" + e + ") a"),
              d = n.attr("href");
            -1 < (t = "#" + t).indexOf(d) && n.attr("href", t);
          }),
            e.tabs(),
            o(".mkdf-tabs a.mkdf-external-link").unbind("click"));
        });
    }
    (((mkdf.modules.tabs = e).mkdfInitTabs = t),
      (e.mkdfOnDocumentReady = a),
      o(document).ready(a));
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function a() {
      t().init();
    }
    (((mkdf.modules.portfolio = e).mkdfOnWindowLoad = a),
      l(window).on("load", a));
    var t = function () {
      var t,
        e,
        n,
        d,
        o,
        i,
        s,
        a,
        r = l(
          ".mkdf-follow-portfolio-info .mkdf-portfolio-single-holder .mkdf-ps-info-sticky-holder",
        );
      return (
        r.length &&
          ((t = r.parent().height()),
          (e = l(".mkdf-ps-image-holder")),
          (n = e.height()),
          (d = e.offset().top),
          (o = parseInt(
            e.find(".mkdf-ps-image:last-of-type").css("marginBottom"),
            10,
          )),
          (i = l(".header-appear, .mkdf-fixed-wrapper")),
          (s = i.length ? i.height() : 0),
          (a = function () {
            var e, a;
            t <= n &&
              (0 < (e = mkdf.scroll) && i.length && (s = i.height()),
              (a = s + mkdfGlobalVars.vars.mkdfAddForAdminBar),
              d - a <= e
                ? n + d - o - a <= e + t
                  ? (r.stop().animate({ marginTop: n - o - t }), (s = 0))
                  : r.stop().animate({ marginTop: e - d + a })
                : r.stop().animate({ marginTop: 0 }));
          })),
        {
          init: function () {
            r.length &&
              (a(),
              l(window).scroll(function () {
                a();
              }));
          },
        }
      );
    };
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      n().init();
    }
    (((mkdf.modules.iconListItem = e).mkdfInitIconList = n),
      (e.mkdfOnDocumentReady = t),
      a(document).ready(t));
    var n = function () {
      var e = a(".mkdf-animate-list");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e;
              ((e = a(this)),
                setTimeout(function () {
                  e.appear(
                    function () {
                      e.addClass("mkdf-appeared");
                    },
                    {
                      accX: 0,
                      accY: mkdfGlobalVars.vars.mkdfElementAppearAmount,
                    },
                  );
                }, 30));
            });
        },
      };
    };
  })(jQuery),
  (function (u) {
    "use strict";
    var e = {};
    function a() {
      var e;
      ((e = u(".mkdf-portfolio-list-holder .mkdf-pl-filter-holder")).length &&
        e.each(function () {
          var d = u(this),
            o = d.closest(".mkdf-portfolio-list-holder"),
            i = o.find(".mkdf-pl-inner"),
            s = o.hasClass("mkdf-pl-pag-load-more");
          (d.find(".mkdf-pl-filter:first").addClass("mkdf-pl-current"),
            o.hasClass("mkdf-pl-gallery") && i.isotope(),
            d.find(".mkdf-pl-filter").on("click", function () {
              var e = u(this),
                a = e.attr("data-filter"),
                t = a.length ? a.substring(1) : "",
                n = i.children().hasClass(t);
              (e
                .parent()
                .children(".mkdf-pl-filter")
                .removeClass("mkdf-pl-current"),
                e.addClass("mkdf-pl-current"),
                s && !n && a.length
                  ? (function n(e, a, t) {
                      var d = e,
                        o = d.find(".mkdf-pl-inner"),
                        i = a,
                        s = t,
                        r = 0;
                      void 0 !== d.data("max-num-pages") &&
                        !1 !== d.data("max-num-pages") &&
                        (r = d.data("max-num-pages"));
                      var l = mkdf.modules.common.getLoadMoreData(d),
                        m = l.nextPage,
                        f = mkdf.modules.common.setLoadMoreAjaxData(
                          l,
                          "grandprix_core_portfolio_ajax_load_more",
                        ),
                        c = d.find(".mkdf-pl-loading");
                      m <= r &&
                        (c.addClass("mkdf-showing mkdf-filter-trigger"),
                        o.css("opacity", "0"),
                        u.ajax({
                          type: "POST",
                          data: f,
                          url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                          success: function (e) {
                            (m++, d.data("next-page", m));
                            var a = u.parseJSON(e),
                              t = a.html;
                            d.waitForImages(function () {
                              o.append(t)
                                .isotope("reloadItems")
                                .isotope({ sortBy: "original-order" });
                              var e = !!o.children().hasClass(s);
                              e
                                ? setTimeout(function () {
                                    (mkdf.modules.common.setFixedImageProportionSize(
                                      d,
                                      o.find("article"),
                                      o
                                        .find(".mkdf-masonry-grid-sizer")
                                        .width(),
                                      !0,
                                    ),
                                      o
                                        .isotope("layout")
                                        .isotope({ filter: i }),
                                      c.removeClass(
                                        "mkdf-showing mkdf-filter-trigger",
                                      ),
                                      setTimeout(function () {
                                        (o.css("opacity", "1"),
                                          p(),
                                          mkdf.modules.common.mkdfInitParallax());
                                      }, 150));
                                  }, 400)
                                : (c.removeClass(
                                    "mkdf-showing mkdf-filter-trigger",
                                  ),
                                  n(d, i, s));
                            });
                          },
                        }));
                    })(o, a, t)
                  : ((a = 0 === a.length ? "*" : a),
                    d
                      .parent()
                      .children(".mkdf-pl-inner")
                      .isotope({ filter: a }),
                    mkdf.modules.common.mkdfInitParallax()));
            }));
        }),
        p(),
        n().init());
    }
    function t() {
      n().scroll();
    }
    function p() {
      var e = u(".mkdf-portfolio-list-holder.mkdf-pl-has-animation");
      e.length &&
        e.each(function () {
          u(this)
            .children(".mkdf-pl-inner")
            .children("article")
            .each(function (e) {
              var a = u(this);
              a.appear(
                function () {
                  (a.addClass("mkdf-item-show"),
                    setTimeout(function () {
                      a.addClass("mkdf-item-shown");
                    }, 1e3));
                },
                { accX: 0, accY: 0 },
              );
            });
        });
    }
    function n() {
      function d(e) {
        var a =
          e.outerHeight() +
          e.offset().top -
          mkdfGlobalVars.vars.mkdfAddForAdminBar;
        !e.hasClass("mkdf-pl-infinite-scroll-started") &&
          mkdf.scroll + mkdf.windowHeight > a &&
          o(e);
      }
      var e = u(".mkdf-portfolio-list-holder"),
        o = function (t, n) {
          var d,
            o = t.find(".mkdf-pl-inner");
          (void 0 !== t.data("max-num-pages") &&
            !1 !== t.data("max-num-pages") &&
            (d = t.data("max-num-pages")),
            t.hasClass("mkdf-pl-pag-standard") && t.data("next-page", n),
            t.hasClass("mkdf-pl-pag-infinite-scroll") &&
              t.addClass("mkdf-pl-infinite-scroll-started"));
          var e,
            i,
            a = mkdf.modules.common.getLoadMoreData(t),
            s = t.find(".mkdf-pl-loading");
          (((i = a.nextPage) <= d || 0 === d) &&
            (t.hasClass("mkdf-pl-pag-standard")
              ? (s.addClass("mkdf-showing mkdf-standard-pag-trigger"),
                t.addClass("mkdf-pl-pag-standard-animate"))
              : s.addClass("mkdf-showing"),
            (e = mkdf.modules.common.setLoadMoreAjaxData(
              a,
              "grandprix_core_portfolio_ajax_load_more",
            )),
            u.ajax({
              type: "POST",
              data: e,
              url: mkdfGlobalVars.vars.mkdfAjaxUrl,
              success: function (e) {
                (t.hasClass("mkdf-pl-pag-standard") || i++,
                  t.data("next-page", i));
                var a = u.parseJSON(e).html;
                (t.hasClass("mkdf-pl-pag-standard")
                  ? (r(t, d, i),
                    t.waitForImages(function () {
                      (t.hasClass("mkdf-pl-masonry") ||
                        (t.hasClass("mkdf-pl-gallery") &&
                          t.hasClass("mkdf-pl-has-filter"))
                        ? l
                        : m)(t, o, s, a);
                    }))
                  : t.waitForImages(function () {
                      t.hasClass("mkdf-pl-masonry")
                        ? (1 === n ? l : f)(t, o, s, a)
                        : t.hasClass("mkdf-pl-gallery") &&
                            t.hasClass("mkdf-pl-has-filter") &&
                            1 !== n
                          ? f(t, o, s, a)
                          : 1 === n
                            ? m(t, o, s, a)
                            : c(o, s, a);
                    }),
                  t.hasClass("mkdf-pl-infinite-scroll-started") &&
                    t.removeClass("mkdf-pl-infinite-scroll-started"));
              },
            })),
            i === d && t.find(".mkdf-pl-load-more-holder").hide());
        },
        r = function (e, a, t) {
          var n = e.find(".mkdf-pl-standard-pagination"),
            d = n.find("li.mkdf-pag-number"),
            o = n.find("li.mkdf-pag-prev a"),
            i = n.find("li.mkdf-pag-next a");
          (d.removeClass("mkdf-pag-active"),
            d.eq(t - 1).addClass("mkdf-pag-active"),
            o.data("paged", t - 1),
            i.data("paged", t + 1),
            1 < t ? o.css({ opacity: "1" }) : o.css({ opacity: "0" }),
            t === a ? i.css({ opacity: "0" }) : i.css({ opacity: "1" }));
        },
        l = function (e, a, t, n) {
          (a.find("article").remove(),
            a.append(n),
            mkdf.modules.common.setFixedImageProportionSize(
              e,
              a.find("article"),
              a.find(".mkdf-masonry-grid-sizer").width(),
              !0,
            ),
            a.isotope("reloadItems").isotope({ sortBy: "original-order" }),
            t.removeClass("mkdf-showing mkdf-standard-pag-trigger"),
            e.removeClass("mkdf-pl-pag-standard-animate"),
            setTimeout(function () {
              (a.isotope("layout"),
                p(),
                mkdf.modules.common.mkdfInitParallax(),
                mkdf.modules.common.mkdfPrettyPhoto());
            }, 600));
        },
        m = function (e, a, t, n) {
          (t.removeClass("mkdf-showing mkdf-standard-pag-trigger"),
            e.removeClass("mkdf-pl-pag-standard-animate"),
            a.html(n),
            p(),
            mkdf.modules.common.mkdfInitParallax(),
            mkdf.modules.common.mkdfPrettyPhoto());
        },
        f = function (e, a, t, n) {
          (a.append(n),
            mkdf.modules.common.setFixedImageProportionSize(
              e,
              a.find("article"),
              a.find(".mkdf-masonry-grid-sizer").width(),
              !0,
            ),
            a.isotope("reloadItems").isotope({ sortBy: "original-order" }),
            t.removeClass("mkdf-showing"),
            setTimeout(function () {
              (a.isotope("layout"),
                p(),
                mkdf.modules.common.mkdfInitParallax(),
                mkdf.modules.common.mkdfPrettyPhoto());
            }, 600));
        },
        c = function (e, a, t) {
          (a.removeClass("mkdf-showing"),
            e.append(t),
            p(),
            mkdf.modules.common.mkdfInitParallax(),
            mkdf.modules.common.mkdfPrettyPhoto());
        };
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var n,
                e,
                a,
                t = u(this);
              (t.hasClass("mkdf-pl-pag-standard") &&
                (e = (n = t).find(".mkdf-pl-standard-pagination li")).length &&
                e.each(function () {
                  var a = u(this).children("a"),
                    t = 1;
                  a.on("click", function (e) {
                    (e.preventDefault(),
                      e.stopPropagation(),
                      void 0 !== a.data("paged") &&
                        !1 !== a.data("paged") &&
                        (t = a.data("paged")),
                      o(n, t));
                  });
                }),
                t.hasClass("mkdf-pl-pag-load-more") &&
                  (a = t)
                    .find(".mkdf-pl-load-more a")
                    .on("click", function (e) {
                      (e.preventDefault(), e.stopPropagation(), o(a));
                    }),
                t.hasClass("mkdf-pl-pag-infinite-scroll") && d(t));
            });
        },
        scroll: function () {
          e.length &&
            e.each(function () {
              var e = u(this);
              e.hasClass("mkdf-pl-pag-infinite-scroll") && d(e);
            });
        },
        getMainPagFunction: function (e, a) {
          o(e, a);
        },
      };
    }
    (((mkdf.modules.portfolioList = e).mkdfOnWindowLoad = a),
      (e.mkdfOnWindowScroll = t),
      u(window).on("load", a),
      u(window).scroll(t));
  })(jQuery),
  (function (k) {
    "use strict";
    var e = {};
    function a() {
      var e;
      (e = k(".mkdf-portfolio-vertical-loop-holder")).length &&
        e.each(function () {
          var l,
            m = k(this),
            e = k(".mkdf-page-header"),
            f = k(".mkdf-mobile-header"),
            a = e.outerHeight(),
            c = mkdf.body.hasClass("mkdf-paspartu-enabled")
              ? parseInt(
                  k(".mkdf-paspartu-enabled .mkdf-wrapper").css("padding-left"),
                )
              : 0,
            u = mkdf.body.hasClass("mkdf-content-is-behind-header") ? 0 : a,
            p = !0,
            h = k(".mkdf-pvl-inner");
          (k(mkdf.body).on(
            "click",
            ".mkdf-pvli-content-holder .mkdf-pvli-content-link",
            function (e) {
              if ((e.preventDefault(), !p)) return !1;
              p = !1;
              var a = k(this);
              l = mkdf.windowWidth < 1e3 ? f.outerHeight() : u;
              var t = mkdf.window.scrollTop(),
                n = a.closest("article").offset().top - t - l - c;
              (h.find("article:eq(0)").addClass("fade-out"),
                a
                  .closest("article")
                  .addClass("move-up")
                  .removeClass("next-item")
                  .css("transform", "translateY(-" + n + "px)"),
                setTimeout(function () {
                  (mkdf.window.scrollTop(0),
                    h.find("article:eq(0)").remove(),
                    a
                      .closest("article")
                      .removeAttr("style")
                      .removeClass("move-up"));
                }, 450));
              var d,
                o,
                i,
                s = mkdf.modules.common.getLoadMoreData(m),
                r = mkdf.modules.common.setLoadMoreAjaxData(
                  s,
                  "grandprix_core_portfolio_vertical_loop_ajax_load_more",
                );
              (k.ajax({
                type: "POST",
                data: r,
                url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                success: function (e) {
                  var a = k.parseJSON(e),
                    t = a.html,
                    n = a.next_item_id;
                  m.data("next-item-id", n);
                  var d = k(t)
                    .find(".mkdf-pvl-item-inner")
                    .parent()
                    .addClass("next-item")
                    .fadeIn(400);
                  (h.append(d), (p = !0));
                },
              }),
                (d = m.find(".mkdf-pvl-navigation-holder")).find(
                  ".mkdf-pvl-navigation",
                ),
                (o = mkdf.modules.common.getLoadMoreData(d)),
                (i = mkdf.modules.common.setLoadMoreAjaxData(
                  o,
                  "grandprix_core_portfolio_vertical_loop_ajax_load_more_navigation",
                )),
                k.ajax({
                  type: "POST",
                  data: i,
                  url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                  success: function (e) {
                    var a = k.parseJSON(e),
                      t = a.html,
                      n = a.next_item_id;
                    (d.data("next-item-id", n), d.html(t));
                  },
                }));
            },
          ),
            (function (o, i) {
              var e = o.find(".mkdf-pvl-navigation-holder");
              e.find(".mkdf-pvl-navigation");
              {
                var a;
                void 0 !== e.data("id") &&
                  !1 !== e.data("id") &&
                  (a = e.data("id"));
              }
              {
                var t;
                void 0 !== e.data("next-item-id") &&
                  !1 !== e.data("next-item-id") &&
                  (t = e.data("next-item-id"));
              }
              (void 0 !== o.data("id") && !1 === o.data("id")) ||
                o.data("id", a);
              (void 0 !== o.data("next-item-id") &&
                !1 !== o.data("next-item-id")) ||
                o.data("next-item-id", t);
              var n = mkdf.modules.common.getLoadMoreData(o),
                d = mkdf.modules.common.setLoadMoreAjaxData(
                  n,
                  "grandprix_core_portfolio_vertical_loop_ajax_load_more",
                );
              k.ajax({
                type: "POST",
                data: d,
                url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                success: function (e) {
                  var a = k.parseJSON(e),
                    t = a.html,
                    n = a.next_item_id;
                  o.data("next-item-id", n);
                  var d = k(t)
                    .find(".mkdf-pvl-item-inner")
                    .parent()
                    .addClass("next-item")
                    .fadeIn(400);
                  i.append(d);
                },
              });
            })(m, h));
        });
    }
    (((mkdf.modules.portfolioVerticalLoop = e).mkdfOnDocumentReady = a),
      k(document).ready(a));
  })(jQuery),
  (function (m) {
    "use strict";
    var e = {};
    function a() {
      t();
    }
    function t() {
      var e = m(".mkdf-testimonials-holder.mkdf-testimonials-carousel");
      e.length &&
        e.each(function () {
          var d,
            o,
            e = m(this),
            a = e.find(".mkdf-testimonials-main"),
            i = e.children(".mkdf-testimonial-image-nav"),
            t = !0,
            n = !0,
            s = 5e3,
            r = 600,
            l = !1;
          ("no" === a.data("enable-loop") && (t = !1),
            "no" === a.data("enable-autoplay") && (n = !1),
            void 0 !== a.data("slider-speed") &&
              !1 !== a.data("slider-speed") &&
              (s = a.data("slider-speed")),
            void 0 !== a.data("slider-speed-animation") &&
              !1 !== a.data("slider-speed-animation") &&
              (r = a.data("slider-speed-animation")),
            mkdf.windowWidth < 680 && (l = !0),
            a.length &&
              i.length &&
              ((d = a.owlCarousel({
                items: 1,
                loop: t,
                autoplay: n,
                autoplayTimeout: s,
                smartSpeed: r,
                autoplayHoverPause: !1,
                dots: !1,
                nav: !1,
                mouseDrag: !1,
                touchDrag: l,
                onInitialize: function () {
                  a.css("visibility", "visible");
                },
              })),
              (o = i.owlCarousel({
                loop: t,
                autoplay: n,
                autoplayTimeout: s,
                smartSpeed: r,
                autoplayHoverPause: !1,
                center: !0,
                dots: !1,
                nav: !1,
                mouseDrag: !1,
                touchDrag: !1,
                responsive: { 1025: { items: 5 }, 0: { items: 3 } },
                onInitialize: function () {
                  (i.css("visibility", "visible"), e.css("opacity", "1"));
                },
              })),
              i.find(".owl-item").on("click touchpress", function (e) {
                e.preventDefault();
                var a = m(this).index(),
                  t = i.find(".owl-item.cloned").length,
                  n = 0 <= a - t / 2 ? a - t / 2 : a;
                (o.trigger("to.owl.carousel", n),
                  d.trigger("to.owl.carousel", n));
              })));
        });
    }
    (((mkdf.modules.testimonialsCarousel = e).mkdfInitTestimonials = t),
      (e.mkdfOnWindowLoad = a),
      m(window).on("load", a));
  })(jQuery),
  (function (u) {
    "use strict";
    var e = {};
    function a() {
      var e;
      (e = u(".mkdf-testimonials-image-pagination-inner")).length &&
        e.each(function () {
          var e,
            a = u(this),
            t = a.children().length,
            n = !0,
            d = !0,
            o = 3500,
            i = 500,
            s = !1,
            r = !1,
            l = !1,
            m = !0,
            f = !1,
            c = a;
          ("no" === c.data("enable-loop") && (n = !1),
            void 0 !== c.data("slider-speed") &&
              !1 !== c.data("slider-speed") &&
              (o = c.data("slider-speed")),
            void 0 !== c.data("slider-speed-animation") &&
              !1 !== c.data("slider-speed-animation") &&
              (i = c.data("slider-speed-animation")),
            "yes" === c.data("enable-auto-width") && (s = !0),
            void 0 !== c.data("slider-animate-in") &&
              !1 !== c.data("slider-animate-in") &&
              (r = c.data("slider-animate-in")),
            void 0 !== c.data("slider-animate-out") &&
              !1 !== c.data("slider-animate-out") &&
              (l = c.data("slider-animate-out")),
            "no" === c.data("enable-navigation") && (m = !1),
            "yes" === c.data("enable-pagination") && (f = !0),
            m && f && a.addClass("mkdf-slider-has-both-nav"),
            f &&
              ((e = "#mkdf-testimonial-pagination"),
              u(".mkdf-tsp-item").on("click", function () {
                a.trigger("to.owl.carousel", [u(this).index(), 300]);
              })),
            t <= 1 && (f = m = d = n = !1),
            a.waitForImages(function () {
              u(this).owlCarousel({
                items: 1,
                loop: n,
                autoplay: d,
                autoplayHoverPause: !1,
                autoplayTimeout: o,
                smartSpeed: i,
                margin: 0,
                stagePadding: 0,
                center: !1,
                autoWidth: s,
                animateIn: r,
                animateOut: l,
                dots: f,
                dotsContainer: e,
                nav: m,
                drag: !0,
                callbacks: !0,
                navText: [
                  '<span class="mkdf-prev-icon ion-chevron-left"></span>',
                  '<span class="mkdf-next-icon ion-chevron-right"></span>',
                ],
                onInitialize: function () {
                  a.css("visibility", "visible");
                },
                onDrag: function (e) {
                  mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") &&
                    0 < e.isTrigger &&
                    a.addClass("mkdf-slider-is-moving");
                },
                onDragged: function () {
                  mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") &&
                    a.hasClass("mkdf-slider-is-moving") &&
                    setTimeout(function () {
                      a.removeClass("mkdf-slider-is-moving");
                    }, 500);
                },
              });
            }));
        });
    }
    (((mkdf.modules.testimonialsImagePagination = e).mkdfOnDocumentReady = a),
      u(document).ready(a));
  })(jQuery));
