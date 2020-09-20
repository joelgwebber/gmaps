this._ = this._ || {};
(function (_) {
    var window = this;
    try {
      var Zjc = ".widget-compass .compass-clockwise-arrow:active{background-position:-138px 0;width:16px;right:-1px}"
        , $jc = ".widget-compass .compass-clockwise-arrow:hover{background-position:-122px 0;width:16px;right:-1px}"
        ,
        akc = ".widget-compass .compass-clockwise-arrow{cursor:pointer;background-position:-109px 0;position:absolute;width:13px;height:48px;right:2px;z-index:1;-webkit-transform:scaleX(-1);transform:scaleX(-1)}"
        ,
        bkc = ".widget-compass .compass-counterclockwise-arrow:active{background-position:-138px 0;width:16px;left:-1px}"
        ,
        ckc = ".widget-compass .compass-counterclockwise-arrow:hover{background-position:-122px 0;width:16px;left:-1px}"
        ,
        dkc = ".widget-compass .compass-counterclockwise-arrow{cursor:pointer;background-position:-109px 0;position:absolute;width:13px;height:48px;left:2px;z-index:1}"
        ,
        ekc = ".widget-compass .compass-needle .compass-needle-hotspot{cursor:pointer;background-color:transparent;border-radius:50%;position:absolute;width:20px;height:20px;left:-4px;top:10px;z-index:1}"
        , fkc = ".widget-compass .compass-needle-hotspot-tip.compass-needle-hotspot-tip-north{top:-4px}"
        , gkc = ".widget-compass .compass-needle-hotspot-tip.compass-needle-hotspot-tip-south{bottom:-4px}"
        ,
        hkc = ".widget-compass .compass-needle-hotspot-tip{background-color:transparent;border-radius:50%;position:absolute;width:8px;height:8px;left:6px;z-index:1}"
        , ikc = ".widget-compass .compass-needle:active .compass-needle-hotspot{left:1px}"
        , jkc = ".widget-compass .compass-needle:active{background-position:-87px -4px;width:22px;left:13px}"
        , kkc = ".widget-compass .compass-needle:hover .compass-needle-hotspot{left:1px}"
        , lkc = ".widget-compass .compass-needle:hover{background-position:-65px -4px;width:22px;left:13px}"
        ,
        mkc = ".widget-compass .compass-needle{background-position:-48px -4px;border-radius:50%;position:absolute;width:12px;height:40px;left:18px;top:4px}"
        , nkc = ".widget-compass-tooltip-invisible{opacity:0;visibility:hidden}"
        ,
        okc = ".widget-compass-tooltip-label-wrapper{background:#262626;box-shadow:rgba(0,0,0,0.2) 1px 2px 4px 0;border-radius:2px;min-width:40px}"
        ,
        pkc = ".widget-compass-tooltip-label{cursor:pointer;padding:8px 15px;color:#fff;font-size:12px;font-weight:normal;white-space:nowrap}"
        ,
        qkc = ".widget-compass-tooltip-pointer{position:absolute;width:0;height:0;z-index:1;border:6px solid transparent;border-left:6px solid #262626;right:-11px;top:9px}"
        , rkc = ".widget-compass-tooltip-visible{opacity:1;visibility:visible}"
        ,
        skc = ".widget-compass-tooltip{position:absolute;transition:opacity 0.13s ease-out 0.109s;vertical-align:baseline;line-height:normal;top:8px;right:53px}"
        ,
        tkc = ".widget-compass{position:relative;width:48px;height:48px;left:-10px;outline:none;background-position:0 0}"
        , ukc = "compass-needle-hotspot-tip"
        , vkc = "t-DOYJwZnbznc"
        , wkc = "t-F9MwJIc_4Ls"
        , xkc = "t-acdFrLdhQwg"
        , ykc = "t-bqvQzGGvnEk"
        , zkc = "t-iby0Y13jDYE"
        , Akc = "widget-compass-sprite"
        , Bkc = function (a) {
          this.U = a || []
        };
      _.J(Bkc, _.K);
      var Okc = function (a) {
        _.px.call(this, a, Ckc);
        _.V(a, Ckc) || (_.W(a, Ckc, {
          qC: 0
        }, [_.w, , 1, 0, [" ", [_.cm, , 1, 1], " ", [_.w, , 1, 2, [" ", [_.cm, , 1, 3, [" ", [_.w, , , 8], " ", [_.w, , , 9], " "]], " "]], " ", [_.cm, , 1, 4], " ", [_.w, 576, 1, 5, [" ", [_.w, , , 10, [" ", [_.w, , , 11, [" ", [_.Cn, , , 12, [" ", [_.C, , 1, 6], " <div> <hr> ", [_.C, , 1, 7], _.da]], " "]], " "]], " ", [_.w, , , 13], " "]], " "]], [[_.n, [Dkc, _.y], _.D, Ekc, _.u, tkc, _.u, Fkc, _.u, Gkc, _.u, dkc, _.u, ckc, _.u, bkc, _.u, akc, _.u, $jc, _.u, Zjc, _.u, mkc, _.u, lkc, _.u, jkc, _.u, ekc, _.u, kkc, _.u, ikc, _.u, hkc, _.u, fkc, _.u, gkc, _.u, skc, _.u, rkc, _.u, nkc, _.u, okc, _.u, pkc, _.u, qkc]], Hkc()),
        _.V(a, Ikc) || _.W(a, Ikc, {}, [_.C, , 1, 0, [[_.sn, , , 1, _.Wjc]]], [[_.n, [Dkc, _.y], _.D, Ekc, _.u, tkc, _.u, Fkc, _.u, Gkc, _.u, dkc, _.u, ckc, _.u, bkc, _.u, akc, _.u, $jc, _.u, Zjc, _.u, mkc, _.u, lkc, _.u, jkc, _.u, ekc, _.u, kkc, _.u, ikc, _.u, hkc, _.u, fkc, _.u, gkc, _.u, skc, _.u, rkc, _.u, nkc, _.u, okc, _.u, pkc, _.u, qkc]], [[_.p, xkc], [_.Ja, Jkc]]),
        _.V(a, Kkc) || _.W(a, Kkc, {}, [_.C, , 1, 0, [[_.sn, , , 1, "Reset the view"]]], [[_.n, [Dkc, _.y], _.D, Ekc, _.u, tkc, _.u, Fkc, _.u, Gkc, _.u, dkc, _.u, ckc, _.u, bkc, _.u, akc, _.u, $jc, _.u, Zjc, _.u, mkc, _.u, lkc, _.u, jkc, _.u, ekc, _.u, kkc, _.u, ikc, _.u, hkc, _.u, fkc, _.u, gkc, _.u, skc, _.u, rkc, _.u, nkc, _.u, okc, _.u, pkc, _.u, qkc]], [[_.p, wkc], [_.Ja, Jkc]]),
        _.V(a, Lkc) || _.W(a, Lkc, {}, [_.C, , 1, 0, [[_.sn, , , 1, "Rotate the view clockwise"]]], [[_.n, [Dkc, _.y], _.D, Ekc, _.u, tkc, _.u, Fkc, _.u, Gkc, _.u, dkc, _.u, ckc, _.u, bkc, _.u, akc, _.u, $jc, _.u, Zjc, _.u, mkc, _.u, lkc, _.u, jkc, _.u, ekc, _.u, kkc, _.u, ikc, _.u, hkc, _.u, fkc, _.u, gkc, _.u, skc, _.u, rkc, _.u, nkc, _.u, okc, _.u, pkc, _.u, qkc]], [[_.p, ykc], [_.Ja, Jkc]]),
        _.V(a, Mkc) || _.W(a, Mkc, {}, [_.C, , 1, 0, [[_.sn, , , 1, "Rotate the view counterclockwise"]]], [[_.n, [Dkc, _.y], _.D, Ekc, _.u, tkc, _.u, Fkc, _.u, Gkc, _.u, dkc, _.u, ckc, _.u, bkc, _.u, akc, _.u, $jc, _.u, Zjc, _.u, mkc, _.u, lkc, _.u, jkc, _.u, ekc, _.u, kkc, _.u, ikc, _.u, hkc, _.u, fkc, _.u, gkc, _.u, skc, _.u, rkc, _.u, nkc, _.u, okc, _.u, pkc, _.u, qkc]], [[_.p, vkc], [_.Ja, Jkc]]),
        _.V(a, Nkc) || _.W(a, Nkc, {}, [_.C, , 1, 0, [[_.sn, , , 1, "Rotate the view"]]], [[_.n, [Dkc, _.y], _.D, Ekc, _.u, tkc, _.u, Fkc, _.u, Gkc, _.u, dkc, _.u, ckc, _.u, bkc, _.u, akc, _.u, $jc, _.u, Zjc, _.u, mkc, _.u, lkc, _.u, jkc, _.u, ekc, _.u, kkc, _.u, ikc, _.u, hkc, _.u, fkc, _.u, gkc, _.u, skc, _.u, rkc, _.u, nkc, _.u, okc, _.u, pkc, _.u, qkc]], [[_.p, zkc], [_.Ja, Jkc]]))
      };
      _.J(Okc, _.tx);
      Okc.prototype.fill = function (a) {
        _.qx(this, 0, _.bx(a))
      }
      ;
      var Ckc = "t-qBom0HEflxU"
        , Nkc = zkc
        , Lkc = ykc
        , Mkc = vkc
        , Kkc = wkc
        , Ikc = xkc
        , Dkc = function (a, b) {
        return a.Za = b
      }
        , Ekc = function (a) {
        return a.ka = _.S(a.Za, "", -1) + "/tactile/compass"
      }
        , Fkc = function (a) {
        return ".widget-compass-sprite{background:transparent url(" + a.ka + "/icon-sprite-1x.png) 0 0 no-repeat;background-size:154px 48px}"
      }
        , Gkc = function (a) {
        return ".highres .widget-compass-sprite{background:transparent url(" + a.ka + "/icon-sprite-2x.png) 0 0 no-repeat;background-size:154px 48px}"
      }
        , Jkc = function () {
        return !1
      }
        , Hkc = function () {
        return [[_.p, "t-qBom0HEflxU", _.d, [7, , , , , "widget-compass"], _.d, [7, , , , , Akc], _.d, [7, , , , , _.mo], _.d, [22, , , , "mouseover:compass.main;mouseout:compass.main", _.A]], [_.d, [7, , , , , "compass-counterclockwise-arrow", , 1], _.d, [7, , , , , Akc, , 1], _.La, [_.Ll, function () {
          return _.ax(vkc, {})
        }
        ], _.d, [22, , , , "compass.left", _.A, , 1]], [_.d, [7, , , , , "compass-needle", , 1], _.d, [7, , , , , Akc, , 1], _.d, [5, 5, , , function (a) {
          return a.Mb ? _.$w(_.Ua, _.ep + String(_.S(a.qC, 0, -1)) + _.hna) : _.ep + String(_.S(a.qC, 0, -1)) + _.hna
        }
          , _.Ua, , , 1], _.d, [5, 5, , , function (a) {
          return a.Mb ? _.$w(_.Xp, _.ep + String(_.S(a.qC, 0, -1)) + _.hna) : _.ep + String(_.S(a.qC, 0, -1)) + _.hna
        }
          , _.Xp, , , 1]], [_.d, [7, , , , , "compass-needle-hotspot", , 1], _.La, [_.Ll, function () {
          return _.ax(wkc, {})
        }
        ], _.d, [22, , , , "compass.needle", _.A, , 1]], [_.d, [7, , , , , "compass-clockwise-arrow", , 1], _.d, [7, , , , , Akc, , 1], _.La, [_.Ll, function () {
          return _.ax(ykc, {})
        }
        ], _.d, [22, , , , "compass.right", _.A, , 1]], [_.d, [7, , , , , "widget-compass-tooltip"], _.d, [7, , , function (a) {
          return !!_.S(a.qC, !1, -2)
        }
          , , "widget-compass-tooltip-visible"], _.d, [7, , , function (a) {
          return !_.S(a.qC, !1, -2)
        }
          , , "widget-compass-tooltip-invisible"]], [_.Na, [zkc, {}]], [_.Na, [xkc, {}]], [_.d, [7, , , , , ukc, , 1], _.d, [7, , , , , "compass-needle-hotspot-tip-north", , 1]], [_.d, [7, , , , , ukc, , 1], _.d, [7, , , , , "compass-needle-hotspot-tip-south", , 1]], [_.d, [7, , , , , "widget-compass-tooltip-label-wrapper", , 1]], [_.d, [7, , , , , "widget-compass-tooltip-label", , 1]], [_.d, [7, , , , , "widget-compass-tooltip-title", , 1]], [_.d, [7, , , , , "widget-compass-tooltip-pointer", , 1], _.d, [22, , , , "compass.left", _.A, , 1]]]
      };
      var Pkc = function () {
        _.LE.call(this);
        this.T = _.Z(void 0);
        this.R = _.Z(void 0);
        this.V = _.Z(void 0);
        this.H = new _.ly
      };
      _.F(Pkc, _.LE);
      Pkc.prototype.Ta = function (a) {
        _.LE.prototype.Ta.call(this, a);
        _.kJ([this.T, this.R, this.V], a)
      }
      ;
      Pkc.prototype.bind = function (a, b, c, e) {
        _.Y(this.T, a, e);
        _.Y(this.V, b, e);
        _.Y(this.R, c, e)
      }
      ;
      var Skc = function (a, b, c) {
        var e = a.R.get();
        if (e) {
          Qkc(a);
          var f = a.H.Ld()
            , g = -15 / 90;
          _.IF(e) ? b && (g = 1 - g) : b || (g = 1 - g);
          a.H.Fe(90 * Math.floor(f / 90 + g));
          Rkc(a, c)
        }
      }
        , Qkc = function (a) {
        var b = a.T.get();
        b && a.H.Fa(b.Tc())
      }
        , Rkc = function (a, b) {
        var c = a.V.get();
        c && (b.tick("cr0"),
          c.uD(a.H, b, function (a) {
            a.tick("cr1")
          }))
      };
      var Tkc = function (a, b, c, e) {
        _.aF.call(this, b, 6, 50);
        var f = this;
        this.V = a;
        this.W = e;
        this.T = _.Z(void 0);
        this.H = new Bkc;
        this.$ = !1;
        this.ta = this.T.T(this.i8, this);
        this.va = new _.uE(1E3, function (a) {
            f.H.U[1] = !0;
            f.R(a)
          }
          , "compass-tooltip-fuse");
        (this.ra = c.hasChildNodes()) ? _.rx(this.V, c.firstElementChild) : this.V.Jd(c);
        this.V.fill(this.H)
      };
      _.F(Tkc, _.aF);
      _.E = Tkc.prototype;
      _.E.Sa = function (a) {
        this.$ || (this.ta.Sa(),
          _.JC(this.T, a),
          this.$ = !0)
      }
      ;
      _.E.isDisposed = function () {
        return this.$
      }
      ;
      _.E.bind = function (a, b) {
        _.Y(this.T, a, b);
        this.ta.listen();
        this.i8(b)
      }
      ;
      _.E.qNa = function (a) {
        Skc(this.W, !1, a)
      }
      ;
      _.E.VNa = function (a) {
        Skc(this.W, !0, a)
      }
      ;
      _.E.DNa = function (a) {
        var b = this.W
          , c = b.R.get();
        c && (Qkc(b),
          _.ts(b.H, 0),
          _.IF(c) ? _.ts(b.H, 1) : b.H.ze(0),
          Rkc(b, a))
      }
      ;
      _.E.i8 = function (a) {
        var b = this.T.get();
        if (b) {
          var c = !1
            , e = b.Tc();
          b = _.N(this.H, 0);
          e = -Math.round(e.Ld()) - _.du(b);
          var f = Math.abs(e);
          if (0 < f && 360 !== f || !_.L(this.H, 0))
            -180 > e ? b += 360 : 180 < e && (b -= 360),
              this.H.U[0] = b + e,
              c = !0;
          c && this.R(a)
        }
      }
      ;
      _.E.uHa = function (a) {
        this.va.start(a)
      }
      ;
      _.E.vHa = function (a, b) {
        b = b.gH;
        b && _.yu(a.uc, b) || (this.H.U[1] = !1,
          this.va.stop(),
          this.R(a))
      }
      ;
      _.E.Ve = function (a) {
        if (!this.ra) {
          this.ra = !0;
          var b = a.callback(function () {
          }, "compass.template-render", void 0, "cws")
        }
        this.V.render(b)
      }
      ;
      var Ukc = function (a, b, c, e) {
        this.va = a;
        this.ra = b;
        this.Ua = c;
        this.ta = e;
        this.R = _.Z(void 0);
        this.V = _.Z(void 0);
        this.$ = _.Z(void 0);
        this.W = _.Z(void 0);
        this.ha = _.Z(void 0);
        this.H = null
      };
      Ukc.prototype.bind = function (a, b, c, e, f, g) {
        _.Y(this.V, a, g);
        _.Y(this.W, b, g);
        _.Y(this.ha, c, g);
        _.Y(this.$, e, g);
        _.Y(this.R, f, g);
        this.V.listen((0,
          _.gr)(this.T, this));
        this.W.listen((0,
          _.gr)(this.T, this));
        this.$.listen((0,
          _.gr)(this.T, this));
        this.R.listen((0,
          _.gr)(this.T, this));
        this.T(g)
      }
      ;
      Ukc.prototype.T = function (a) {
        var b;
        if (b = _.UHb([this.V, this.W, this.$, this.R]))
          b = this.R.get(),
            b = _.IF(b) || !!this.W.get() && !this.ha.get() && _.GF(b);
        b ? this.H || (this.H = new Vkc(this.va, this.ra, this.Ua, this.ta, void 0),
          this.H.bind(this.V, this.$, this.R, a),
          a.tick("cwd")) : this.H && (this.H.Sa(a),
          this.H = null)
      }
      ;
      var Vkc = function (a, b, c, e, f) {
        _.LE.call(this);
        this.Ua = c;
        this.T = new Pkc;
        this.H = new Tkc(f || new Okc(a), e, this.Ua, this.T);
        this.R = new _.VE(b);
        this.R.yb(_.qm, _.Fn, _.mm, this.H, this.H.qNa);
        this.R.yb(_.qm, _.bp, _.mm, this.H, this.H.VNa);
        this.R.yb(_.qm, "needle", _.mm, this.H, this.H.DNa);
        this.R.yb(_.qm, _.Tn, _.Oo, this.H, this.H.uHa);
        this.R.yb(_.qm, _.Tn, _.Po, this.H, this.H.vHa)
      };
      _.F(Vkc, _.LE);
      Vkc.prototype.bind = function (a, b, c, e) {
        this.T.bind(a, b, c, e);
        this.H.bind(a, e)
      }
      ;
      Vkc.prototype.Ta = function (a) {
        _.LE.prototype.Ta.call(this, a);
        this.T.Sa(a);
        this.H.Sa(a);
        this.R.Sa(a);
        _.tu(this.Ua)
      }
      ;
      var Wkc = function (a) {
        _.gw.apply(this, arguments)
      };
      _.F(Wkc, _.gw);
      Wkc.prototype.initialize = function () {
        _.yF("CPW", Xkc)
      }
      ;
      var Xkc = function (a, b, c, e, f, g) {
        f = new _.WE(f, c);
        b = new Ukc(e, f, c, g);
        a(b)
      };
      _.AF(Wkc);
    } catch (e) {
      _._DumpException(e)
    }
    try {
      var Lqg = ".app-imagery-mode .widget-tilt-button{background-color:#222}"
        , Mqg = ".widget-tilt-button .widget-tilt-button-icon-high{background-position:0 -30px}"
        , Nqg = ".widget-tilt-button .widget-tilt-button-icon-med{background-position:0 -15px}"
        , Oqg = ".widget-tilt-button-text{color:#b3b3b3;font-weight:bold;font-size:14px}"
        , Pqg = ".widget-tilt-button.widget-tilt-button-disabled .widget-tilt-button-icon{background-position:-15px 0}"
        ,
        Qqg = ".widget-tilt-button.widget-tilt-button-disabled:active,.widget-tilt-button.widget-tilt-button-disabled:hover,.widget-tilt-button.widget-tilt-button-disabled{cursor:default}"
        , Rqg = ".widget-tilt-button:active .widget-tilt-button-icon-high{background-position:-45px -30px}"
        , Sqg = ".widget-tilt-button:active .widget-tilt-button-icon-med{background-position:-45px -15px}"
        , Tqg = ".widget-tilt-button:active .widget-tilt-button-icon{background-position:-45px 0}"
        , Uqg = ".widget-tilt-button:active .widget-tilt-button-text{color:#ffffff}"
        , Vqg = ".widget-tilt-button:focus{box-shadow:none}"
        , Wqg = ".widget-tilt-button:hover .widget-tilt-button-icon-high{background-position:-30px -30px}"
        , Xqg = ".widget-tilt-button:hover .widget-tilt-button-icon-med{background-position:-30px -15px}"
        , Yqg = ".widget-tilt-button:hover .widget-tilt-button-icon{background-position:-30px 0}"
        , Zqg = ".widget-tilt-button:hover .widget-tilt-button-text{color:#e6e6e6}"
        ,
        $qg = ".widget-tilt-button{background-color:rgba(255,255,255,1);display:block;border-radius:2px;box-shadow:0px 1px 4px rgba(0,0,0,0.3);width:29px;height:29px;cursor:pointer;box-sizing:border-box;transition:background-color 0.16s ease-out}"
        , arg = ".widget-tilt-tooltip-invisible{opacity:0;visibility:hidden}"
        ,
        brg = ".widget-tilt-tooltip-label-wrapper{background:#262626;box-shadow:rgba(0,0,0,0.2) 1px 2px 4px 0;border-radius:2px;min-width:40px}"
        ,
        crg = ".widget-tilt-tooltip-label{cursor:pointer;padding:8px 15px;color:#fff;font-size:12px;font-weight:normal;white-space:nowrap}"
        ,
        drg = ".widget-tilt-tooltip-pointer{position:absolute;width:0;height:0;z-index:1;border:6px solid transparent;border-left:6px solid #262626;right:-11px;top:9px}"
        ,
        erg = ".widget-tilt-tooltip-visible,.widget-tilt-button:focus .widget-tilt-tooltip-invisible{opacity:1;visibility:visible}"
        ,
        frg = ".widget-tilt-tooltip{position:absolute;transition:opacity 0.13s ease-out 0.109s;vertical-align:baseline;line-height:normal;right:100%;top:-1px}"
        , grg = ".widget-tilt{width:29px;height:29px;cursor:pointer;position:relative}"
        , hrg = "t-P9UCcqwCi-4"
        , irg = "t-TCLsrXV3tVY"
        , jrg = "t-cphvzlMiRp8"
        , krg = "t-prp3luN4v5k"
        , lrg = function () {
          this.H = _.Z(void 0);
          this.tb = _.Z(void 0);
          this.tb.listen(this.T, this);
          this.enabled = _.LC(void 0);
          this.R = _.LC(void 0)
        };
      lrg.prototype.V = function (a) {
        _.IC(this.H) && this.enabled.get() && this.H.get().hH(a, function () {
        })
      }
      ;
      lrg.prototype.T = function (a) {
        if (_.IC(this.tb)) {
          var b = this.tb.get()
            , c = b.Tc()
            , e = b.Va();
          c && e && (c = !0,
            e = b.Va().Ac(),
          2E6 < _.pC(e, _.eu(b.qd())) && (c = !1),
          c != this.enabled.get() && this.enabled.set(c, a),
            b = this.H.get()) && (b = b.CG(a),
          b != this.R.get() && this.R.set(b, a))
        }
      }
      ;
      var mrg = function (a) {
        this.U = a || []
      };
      _.J(mrg, _.K);
      mrg.prototype.kb = function () {
        return _.O(this, 4)
      }
      ;
      mrg.prototype.Lb = function (a) {
        this.U[4] = a
      }
      ;
      var yrg = function (a) {
        _.px.call(this, a, nrg);
        _.V(a, nrg) || (_.W(a, nrg, {
          Ht: 0
        }, [_.w, 576, 1, 0, [" ", [_.cm, 576, 1, 1, [" ", [_.w, , 1, 2, [" ", [_.w, , 1, 3, [" ", [_.C, , 1, 4], " "]], " ", [_.w, , 1, 5, [" ", [_.C, , 1, 6], " "]], " "]], " ", [_.w, 576, 1, 7, " "], " "]], " ", [_.w, 576, 1, 8, [" ", [_.w, , , 15, [" ", [_.w, , , 16, [" ", [_.Cn, , , 17, [" ", [_.C, , 1, 9], " <div> <hr> ", [_.C, , 1, 10], _.da]], " "]], " "]], " ", [_.w, , , 18], " "]], " ", [_.sn, , , 19, [" ", [_.C, , 1, 11], " ", [_.C, , 1, 12], " ", [_.C, , 1, 13], " ", [_.C, , 1, 14], " "]], " "]], [[_.n, [org, _.y], _.D, prg, _.u, grg, _.u, Lqg, _.u, $qg, _.u, Vqg, _.u, Oqg, _.u, Zqg, _.u, Uqg, _.u, qrg, _.u, rrg, _.u, Yqg, _.u, Tqg, _.u, Nqg, _.u, Xqg, _.u, Sqg, _.u, Mqg, _.u, Wqg, _.u, Rqg, _.u, Qqg, _.u, Pqg, _.u, frg, _.u, erg, _.u, arg, _.u, brg, _.u, crg, _.u, drg]], srg()),
        _.V(a, trg) || _.W(a, trg, {}, [_.C, , 1, 0, [[_.sn, , , 1, _.Wjc]]], [[_.n, [org, _.y], _.D, prg, _.u, grg, _.u, Lqg, _.u, $qg, _.u, Vqg, _.u, Oqg, _.u, Zqg, _.u, Uqg, _.u, qrg, _.u, rrg, _.u, Yqg, _.u, Tqg, _.u, Nqg, _.u, Xqg, _.u, Sqg, _.u, Mqg, _.u, Wqg, _.u, Rqg, _.u, Qqg, _.u, Pqg, _.u, frg, _.u, erg, _.u, arg, _.u, brg, _.u, crg, _.u, drg]], [[_.p, krg], [_.Ja, urg]]),
        _.V(a, vrg) || _.W(a, vrg, {}, [_.C, , 1, 0, [[_.sn, , , 1, "3D"]]], [[_.n, [org, _.y], _.D, prg, _.u, grg, _.u, Lqg, _.u, $qg, _.u, Vqg, _.u, Oqg, _.u, Zqg, _.u, Uqg, _.u, qrg, _.u, rrg, _.u, Yqg, _.u, Tqg, _.u, Nqg, _.u, Xqg, _.u, Sqg, _.u, Mqg, _.u, Wqg, _.u, Rqg, _.u, Qqg, _.u, Pqg, _.u, frg, _.u, erg, _.u, arg, _.u, brg, _.u, crg, _.u, drg]], [[_.p, hrg], [_.Ja, urg]]),
        _.V(a, wrg) || _.W(a, wrg, {}, [_.C, , 1, 0, [[_.sn, , , 1, "Tilt the view"]]], [[_.n, [org, _.y], _.D, prg, _.u, grg, _.u, Lqg, _.u, $qg, _.u, Vqg, _.u, Oqg, _.u, Zqg, _.u, Uqg, _.u, qrg, _.u, rrg, _.u, Yqg, _.u, Tqg, _.u, Nqg, _.u, Xqg, _.u, Sqg, _.u, Mqg, _.u, Wqg, _.u, Rqg, _.u, Qqg, _.u, Pqg, _.u, frg, _.u, erg, _.u, arg, _.u, brg, _.u, crg, _.u, drg]], [[_.p, jrg], [_.Ja, urg]]),
        _.V(a, xrg) || _.W(a, xrg, {}, [_.C, , 1, 0, [[_.sn, , , 1, "2D"]]], [[_.n, [org, _.y], _.D, prg, _.u, grg, _.u, Lqg, _.u, $qg, _.u, Vqg, _.u, Oqg, _.u, Zqg, _.u, Uqg, _.u, qrg, _.u, rrg, _.u, Yqg, _.u, Tqg, _.u, Nqg, _.u, Xqg, _.u, Sqg, _.u, Mqg, _.u, Wqg, _.u, Rqg, _.u, Qqg, _.u, Pqg, _.u, frg, _.u, erg, _.u, arg, _.u, brg, _.u, crg, _.u, drg]], [[_.p, irg], [_.Ja, urg]]))
      };
      _.J(yrg, _.tx);
      yrg.prototype.fill = function (a) {
        _.qx(this, 0, _.bx(a))
      }
      ;
      var nrg = "t-XhBIMNk0Z7E"
        , wrg = jrg
        , trg = krg
        , vrg = hrg
        , xrg = irg
        , org = function (a, b) {
        return a.Za = b
      }
        , prg = function (a) {
        return a.ka = _.S(a.Za, "", -1)
      }
        , qrg = function (a) {
        return ".widget-tilt-button-icon,.widget-tilt-button-icon-med,.widget-tilt-button-icon-high" + (_.pra + a.ka + '/tactile/tilt/icon-sprite-v2-1x.png") 0 0 no-repeat;background-size:60px 45px;display:block;height:15px;left:7px;margin:0px;padding:0px;position:absolute;top:7px;width:15px}')
      }
        , rrg = function (a) {
        return '.highres .widget-tilt-button .widget-tilt-button-icon{background-image:url("' + a.ka + '/tactile/tilt/icon-sprite-v2-2x.png");background-size:60px 45px}'
      }
        , urg = function () {
        return !1
      }
        , srg = function () {
        return [[_.p, "t-XhBIMNk0Z7E", _.d, [7, , , , , "widget-tilt"], _.d, [7, , , , , _.mo], _.d, [0, , , function (a) {
          return _.U(a.Ht, -5)
        }
          , function (a) {
            return _.S(a.Ht, "", -5)
          }
          , _.gq, , , 1], _.d, [22, , , , "tilt.onTiltClick;mouseover:tilt.main;mouseout:tilt.main", _.A]], [_.d, [7, , , , , "widget-tilt-button"], _.d, [7, , , function (a) {
          return !_.S(a.Ht, !1, -1)
        }
          , , "widget-tilt-button-disabled"], _.La, [_.Ll, function () {
          return _.ax(jrg, {})
        }
        ]], [_.v, function (a) {
          return !_.S(a.Ht, !1, -4)
        }
          , _.d, [7, , , , , "widget-tilt-button-text", , 1]], [_.v, function (a) {
          return 0 == _.S(a.Ht, 0, -3)
        }
        ], [_.Na, [hrg, {}]], [_.v, function (a) {
          return 1 <= _.S(a.Ht, 0, -3)
        }
        ], [_.Na, [irg, {}]], [_.v, function (a) {
          return !!_.S(a.Ht, !1, -4)
        }
          , _.d, [7, , , , , "widget-tilt-button-icon"], _.d, [7, , , function (a) {
            return 1 == _.S(a.Ht, 0, -3)
          }
            , , "widget-tilt-button-icon-med"], _.d, [7, , , function (a) {
            return 2 == _.S(a.Ht, 0, -3)
          }
            , , "widget-tilt-button-icon-high"]], [_.d, [7, , , , , "widget-tilt-tooltip"], _.d, [7, , , function (a) {
          return !!_.S(a.Ht, !1, -2)
        }
          , , "widget-tilt-tooltip-visible"], _.d, [7, , , function (a) {
          return !_.S(a.Ht, !1, -2)
        }
          , , "widget-tilt-tooltip-invisible"]], [_.Na, [jrg, {}]], [_.Na, [krg, {}]], [_.Ka, jrg], [_.Ka, krg], [_.Ka, hrg], [_.Ka, irg], [_.d, [7, , , , , "widget-tilt-tooltip-label-wrapper", , 1]], [_.d, [7, , , , , "widget-tilt-tooltip-label", , 1]], [_.d, [7, , , , , "widget-tilt-tooltip-title", , 1]], [_.d, [7, , , , , "widget-tilt-tooltip-pointer", , 1]], [_.Ha, urg, _.Ja, urg]]
      };
      var zrg = function (a, b, c, e) {
        _.aF.call(this, b, 6, 52);
        var f = this;
        this.V = a;
        this.H = new mrg;
        this.ta = e;
        this.enabled = _.Z(void 0);
        this.enabled.listen(this.YMa, this);
        this.W = _.Z(void 0);
        this.W.listen(this.lOa, this);
        this.ra = new _.uE(500, function (a) {
            f.H.U[1] = !0;
            f.R(a)
          }
          , _.Xjc);
        this.$ = c.hasChildNodes();
        this.T = !1;
        this.$ ? _.rx(this.V, c.firstElementChild) : this.V.Jd(c)
      };
      _.F(zrg, _.aF);
      _.E = zrg.prototype;
      _.E.YMa = function (a) {
        if (_.IC(this.enabled)) {
          var b = !!this.enabled.get();
          _.L(this.H, 0) && b == _.M(this.H, 0) || (this.H.U[0] = b,
            this.R(a))
        }
      }
      ;
      _.E.lOa = function (a) {
        if (_.IC(this.W)) {
          var b = this.W.get();
          _.L(this.H, 2) && b == _.N(this.H, 2) || (this.H.U[2] = b,
            this.T = !0,
            this.R(a))
        }
      }
      ;
      _.E.FJa = function (a) {
        this.ra.start(a)
      }
      ;
      _.E.GJa = function (a, b) {
        b = b.gH;
        b && _.yu(a.uc, b) || (this.ra.stop(),
        _.M(this.H, 1) && (this.H.U[1] = !1,
          this.R(a)))
      }
      ;
      _.E.Ve = function (a) {
        var b = _.M(this.H, 0);
        if (!this.$ && b) {
          var c = a.callback(function () {
          }, "tilt.template-render", void 0, "tws");
          this.T = !0
        }
        this.$ = b;
        this.ta && this.T && (a = this.ta.sf.H(),
          b = a.H(_.N(this.H, 2) ? _.X.xta : _.X.yta),
          a.report(),
          this.H.Lb(b.Ib()),
          this.T = !1);
        this.V.fill(this.H);
        this.V.render(c)
      }
      ;
      var Arg = function (a, b, c, e, f, g, k) {
        _.LE.call(this);
        this.T = _.Z(void 0);
        this.Bb = _.Z(void 0);
        this.$ = _.Z(void 0);
        this.R = _.Z(void 0);
        this.V = _.Z(void 0);
        this.va = a;
        this.Ua = c;
        this.ha = b;
        this.ra = e;
        this.ta = g;
        this.wa = k;
        this.H = null
      };
      _.F(Arg, _.LE);
      Arg.prototype.bind = function (a, b, c, e, f, g) {
        _.Y(this.Bb, a, g);
        _.Y(this.R, b, g);
        _.Y(this.V, c, g);
        _.Y(this.$, e, g);
        _.Y(this.T, f, g);
        this.T.listen(this.W, this);
        this.R.listen(this.W, this);
        this.W(g)
      }
      ;
      Arg.prototype.Ta = function (a) {
        this.H && (this.H.Sa(a),
          this.H = null);
        _.JC(this.Bb, a);
        _.JC(this.T, a);
        _.JC(this.$, a);
        _.JC(this.R, a);
        _.JC(this.V, a)
      }
      ;
      Arg.prototype.W = function (a) {
        var b;
        if (b = _.IC(this.T) && _.IC(this.R))
          b = this.T.get(),
            b = !!this.R.get() && !this.V.get() && _.GF(b);
        b ? this.H || (this.H = new Brg(this.va, this.ha, this.Ua, this.ra, a, this.wa, this.ta),
          this.H.bind(this.Bb, this.$, a),
          a.tick("twd")) : this.H && (this.H.Sa(a),
          this.H = null)
      }
      ;
      var Brg = function (a, b, c, e, f, g, k) {
        _.LE.call(this);
        this.Ua = c;
        this.H = new lrg;
        this.R = new zrg(g || new yrg(a), e, this.Ua, k);
        _.Y(this.R.enabled, this.H.enabled, f);
        _.Y(this.R.W, this.H.R, f);
        this.T = new _.VE(b);
        this.T.yb(_.Mp, "onTiltClick", _.mm, this.H, this.H.V);
        this.T.yb(_.Mp, _.Tn, _.Oo, this.R, this.R.FJa);
        this.T.yb(_.Mp, _.Tn, _.Po, this.R, this.R.GJa)
      };
      _.F(Brg, _.LE);
      Brg.prototype.bind = function (a, b, c) {
        _.Y(this.H.H, b, c);
        _.Y(this.H.tb, a, c)
      }
      ;
      Brg.prototype.Ta = function (a) {
        _.JC(this.H.H, a);
        _.JC(this.H.tb, a);
        this.T.Sa(a);
        _.tu(this.Ua)
      }
      ;
      var Crg = function (a) {
        _.gw.apply(this, arguments)
      };
      _.F(Crg, _.gw);
      Crg.prototype.initialize = function () {
        _.yF("TTW", Drg)
      }
      ;
      var Drg = function (a, b, c, e, f, g, k) {
        f = new _.WE(f, c);
        k.get(function (b, k) {
          b = new Arg(e, f, c, g, k, b);
          a(b)
        }, b)
      };
      _.AF(Crg);
    } catch (e) {
      _._DumpException(e)
    }
    try {
      var h_f = "Moon of Saturn"
        , H7 = [, "Earth", "Moon", "Mars", _.mla, "Mercury", "Venus"];
      H7[12] = "Pluto";
      H7[11] = "Ceres";
      H7[18] = "Io";
      H7[19] = "Europa";
      H7[20] = "Ganymede";
      H7[21] = "Callisto";
      H7[22] = "Mimas";
      H7[23] = "Enceladus";
      H7[24] = "Tethys";
      H7[25] = "Dione";
      H7[26] = "Rhea";
      H7[27] = "Titan";
      H7[28] = "Iapetus";
      H7[29] = "Charon";
      _.I7 = [, "Third planet from the Sun", "Earth's singular natural satellite", "Fourth planet from the Sun", "Space station in low Earth orbit", "First planet from the Sun", "Second planet from the Sun"];
      _.I7[12] = "A dwarf planet in the Kuiper belt";
      _.I7[11] = "Dwarf planet between Mars and Jupiter";
      _.I7[18] = "Innermost of the four Galilean moons of Jupiter";
      _.I7[19] = "Smallest of the four Galilean moons of Jupiter";
      _.I7[20] = "Largest moon of Jupiter";
      _.I7[21] = "Second-largest moon of Jupiter";
      _.I7[22] = h_f;
      _.I7[23] = "Sixth-largest moon of Saturn";
      _.I7[24] = h_f;
      _.I7[25] = "Fourth-largest moon of Saturn";
      _.I7[26] = "Second-largest moon of Saturn";
      _.I7[27] = "Largest moon of Saturn";
      _.I7[28] = "Third-largest moon of Saturn";
      _.I7[29] = "Largest moon of Pluto";
      _.i_f = function (a) {
        a = _.sF(a);
        return (_.FLb[a.name.toLowerCase()] || _.tK).V
      }
      ;
      _.j_f = function (a) {
        var b = _.sF(a) || _.sF(1);
        return H7[a] || b.title
      }
      ;

    } catch (e) {
      _._DumpException(e)
    }
    try {
      _.Psg = function (a, b, c) {
        this.T = a;
        this.Bb = b ? b.clone() : null;
        this.R = c ? c.clone() : null;
        this.H = !0
      }
      ;
      _.E = _.Psg.prototype;
      _.E.kV = function () {
        return !0
      }
      ;
      _.E.lG = function () {
        return this.H
      }
      ;
      _.E.yt = function (a, b) {
        a && (this.Bb = a.clone());
        b && (this.R = b.clone())
      }
      ;
      _.E.Go = function (a) {
        this.H && (this.H = !1,
        this.Bb && this.T.Ok(this.Bb, a),
        this.R && this.T.ul(this.R))
      }
      ;
      _.E.cancel = function () {
        this.H = !1
      }
      ;
      _.E.p8 = function () {
        return "SimpleRenderSequence"
      }
      ;

    } catch (e) {
      _._DumpException(e)
    }
    try {
      var Vsg, gtg;
      Vsg = "sceneResolvedBranch";
      _.Wsg = function (a) {
        this.H = a;
        this.Aa = -1;
        this.R = _.ww();
        this.W = _.ww();
        this.wa = _.BJ(_.ww());
        this.ta = _.BJ(_.ww());
        this.va = _.BJ(_.ww());
        this.ha = this.$ = this.ra = !0;
        this.V = this.T = 0
      }
      ;
      _.Xsg = function () {
        this.H = Array(24);
        for (var a = 0; 24 > a; a++)
          this.H[a] = 0;
        this.H[20] = Infinity
      }
      ;
      _.Ysg = function () {
        this.H = 2;
        this.W = 1;
        this.Vm = null;
        this.va = 1;
        this.Ca = 3;
        this.R = 1;
        this.Ba = .1;
        this.wa = 4;
        this.Aa = 1.005;
        this.T = 0;
        this.Ga = .2;
        this.$ = this.ha = this.V = 0;
        var a = _.Ew();
        a[0] = -.4947524666786194;
        a[1] = .46436384320259094;
        a[2] = .7345653176307678;
        this.ra = a;
        this.Gd = null;
        this.ta = 0;
        this.Ja = 50
      }
      ;
      _.Zsg = function () {
        var a = _.mH.ab();
        return _.M(a, 6)
      }
      ;
      _.$sg = function (a, b) {
        a.ra = b.ra;
        a.ha = b.ha;
        a.W = b.W;
        a.$ = b.$;
        a.va = b.va;
        a.Ba = b.Ba;
        a.ld = b.ld;
        a.Bd = b.Bd;
        a.H = b.H;
        a.ta = b.ta;
        a.T = b.T;
        a.V = b.V;
        a.wa = b.wa;
        a.Aa = b.Aa;
        ++a.R
      }
      ;
      _.atg = function (a) {
        var b = a[0];
        a = a[1];
        return Math.sqrt(b * b + a * a)
      }
      ;
      _.K8 = function (a) {
        a.se();
        a.$ && (_.yw(a.W, a.R, a.ta),
          a.$ = !1);
        return a.ta
      }
      ;
      _.btg = function (a) {
        a.se();
        if (a.ha) {
          var b = _.K8(a);
          _.zw(b, a.va);
          a.ha = !1
        }
        return a.va
      }
      ;
      _.Wsg.prototype.se = function () {
        if (this.Aa != this.H.R) {
          this.Aa = this.H.R;
          _.uMb[0] = this.H.yc();
          _.uMb[1] = this.H.Vb();
          var a = _.uMb[2] = this.H.Ac()
            , b = this.H.Ld()
            , c = this.H.Uc()
            , e = this.H.Pb() * this.H.T / (this.H.ub() * this.H.V)
            , f = this.H.H;
          _.n5a(_.uMb, b, c, this.R);
          var g = f;
          b = this.H.Ba;
          if (0 != b) {
            g = Math.cos(b);
            var k = Math.sin(b);
            _.HK[0] = g;
            _.HK[1] = k;
            _.HK[2] = 0;
            _.HK[3] = 0;
            _.HK[4] = -k;
            _.HK[5] = g;
            _.HK[6] = 0;
            _.HK[7] = 0;
            _.HK[8] = 0;
            _.HK[9] = 0;
            _.HK[10] = 1;
            _.HK[11] = 0;
            _.HK[12] = 0;
            _.HK[13] = 0;
            _.HK[14] = 0;
            _.HK[15] = 1;
            _.yw(_.HK, this.R, this.R);
            g = this.H.Pb() * this.H.T;
            k = this.H.ub() * this.H.V;
            b = _.au(b, Math.PI);
            b > Math.PI / 2 && (b = Math.PI - b);
            g = f * Math.sqrt(g * g + k * k) / k * Math.cos(Math.atan(g / k) - b)
          }
          k = this.H.Ye();
          b = 6371010 * k.$ / k.H;
          k = 6371010 * k.W / k.H;
          this.T = _.o5a(g, c, a, 6371010, k);
          this.V = _.p5a(f, c, a, e, 6371010, b, k);
          this.T > this.V && (this.T = .95 * this.V);
          b = this.T / (Math.cos(f / 2) / Math.sin(f / 2));
          a = this.W;
          c = b * e * (-1 + this.H.wa / this.H.T * 2);
          e = b * e * (-1 + (1 + this.H.wa) / this.H.T * 2);
          f = b * (1 - (1 + this.H.Aa) / this.H.V * 2);
          b *= 1 - this.H.Aa / this.H.V * 2;
          g = this.T;
          k = this.V;
          a[0] = 2 * g / (e - c);
          a[1] = 0;
          a[2] = 0;
          a[3] = 0;
          a[4] = 0;
          a[5] = 2 * g / (b - f);
          a[6] = 0;
          a[7] = 0;
          a[8] = (e + c) / (e - c);
          a[9] = (b + f) / (b - f);
          a[10] = -(k + g) / (k - g);
          a[11] = -1;
          a[12] = 0;
          a[13] = 0;
          a[14] = -(2 * k * g) / (k - g);
          a[15] = 0;
          this.$ = this.ha = this.ra = !0
        }
      }
      ;
      _.L8 = function (a, b, c, e, f) {
        var g = a.H.Pb()
          , k = a.H.ub();
        a = _.btg(a);
        b = 2 * b / g - 1;
        c = -(2 * c / k - 1);
        _.mw(e, b, c, -1);
        _.Bw(a, e, e);
        _.mw(f, b, c, 1);
        _.Bw(a, f, f);
        _.ow(f, e, f);
        _.qw(f, f)
      }
      ;
      _.Xsg.prototype.set = function (a, b) {
        this.H[a] = b
      }
      ;
      _.Xsg.prototype.get = function (a) {
        return this.H[a]
      }
      ;
      _.Xsg.prototype.add = function (a, b) {
        this.H[a] += b
      }
      ;
      _.Xsg.prototype.Fa = function (a) {
        for (var b = 0; 24 > b; b++)
          this.H[b] = a.H[b]
      }
      ;
      _.Ysg.prototype.Fa = function (a) {
        this.H = a.H;
        this.W = a.W;
        this.Vm = a.Vm;
        this.va = a.va;
        this.Ca = a.Ca;
        this.R = a.R;
        this.Ba = a.Ba;
        this.wa = a.wa;
        this.Aa = a.Aa;
        this.T = a.T;
        this.Ga = a.Ga;
        this.V = a.V;
        this.ha = a.ha;
        this.$ = a.$;
        _.rMb(this.ra, a.ra);
        null == a.Gd ? this.Gd = null : (null == this.Gd && (this.Gd = new Date),
          this.Gd.setTime(a.Gd.getTime()));
        this.ta = a.ta;
        this.Ja = a.Ja
      }
      ;
      _.ctg = function (a, b, c, e, f, g, k) {
        _.L8(k ? k : a.H.Bb, b, c, _.LK, _.MK);
        a = a.sM(_.LK, _.MK, f, g);
        return Infinity > a ? (_.ir(e, _.MK),
          _.pw(e, a, e),
          _.nw(e, _.LK, e),
          !0) : !1
      }
      ;
      _.dtg = function (a, b, c, e, f, g) {
        var k = .125 * c;
        f += k;
        e = f - (_.Kq(g) ? g : e - k);
        _.eC(a, b, f, _.LK, c);
        _.eC(a, b, f - 1, _.MK, c);
        _.ow(_.MK, _.LK, _.MK);
        return {
          XW: f,
          qD: e
        }
      }
      ;
      _.etg = function (a, b, c, e, f) {
        var g = a.zy();
        if (Infinity == g)
          return Infinity;
        b = _.dtg(b, c, g, a.OS(), a.NS(), void 0);
        a = a.sM(_.LK, _.MK, e, f, b.qD);
        return a >= b.qD ? Infinity : b.XW - a
      }
      ;
      _.ftg = function (a, b) {
        b = _.au(b, 2 * Math.PI);
        a = _.au(a, 2 * Math.PI);
        a = b - a;
        a > Math.PI ? a -= 2 * Math.PI : a <= -Math.PI && (a = 2 * Math.PI + a);
        return a
      }
      ;
      gtg = function (a) {
        if (1 == a)
          return !0;
        a = _.sF(a);
        var b = _.FLb[a.name.toLowerCase()] || _.tK;
        return !!a && !!a.R && b.R
      }
      ;
      _.mtg = Math.PI / 12;
      _.xtg = 1.1 * Math.PI / 4;
      _.M8 = new _.Ysg;
      _.N8 = new _.Ysg;
      _.eug = _.hr();
      _.lug = new _.uG;
      _.mug = new _.HJ;
      _.O8 = _.uw();
      _.P8 = _.uw();
      _.Hug = _.uw();
      _.Jug = new _.hsa;
      new _.Gw;
      _.Q8 = _.uw();
      _.Kug = _.uw();
      _.R8 = new _.uG;
      _.Lug = _.uw();
      _.Mug = _.GJ();
      _.Nug = _.ww();
      _.Oug = _.ww();
      _.S8 = _.hr();
      _.Pug = _.hr();
      _.Qug = _.hr();
      _.Rug = _.hr();
      _.Sug = _.hr();
      _.Tug = _.hr();
      _.Uug = _.hr();
      _.Vug = _.hr();
      _.T8 = _.uw();
      _.U8 = _.uw();
      _.Wug = new _.hsa;
      _.Xug = new _.Gw;
      _.Yug = _.ww();
      _.Zug = _.ww();
      _.$ug = _.GJ();
      _.V8 = new _.uG;
      var avg = function (a, b, c, e, f, g, k) {
        this.La = c;
        this.R = e;
        this.H = c.bH();
        c.Ti(a, this.H);
        this.ra = b;
        this.ta = this.H.Ld();
        this.Ja = this.H.Uc();
        this.ha = 0 > _.nsg(b, 1)[1] ? -g : g;
        this.Oa = k;
        this.Bb = a.clone();
        a = this.Bb.Tc().Uc();
        this.va = this.R.gL(this.Bb.Va().Ac(), _.eu(this.Bb.qd()), _.eu(a));
        a = 1 / Math.cos(this.H.Vb());
        b = this.ta;
        this.W = a * Math.sin(b);
        this.V = Math.cos(b);
        this.Ba = a * Math.cos(b);
        this.Aa = -Math.sin(b);
        this.T = .75 * this.Bb.Va().Ac() * Math.tan(this.H.Uc()) / 6371010;
        this.Ga = this.H.yc() + this.T * this.W;
        this.Ca = this.H.Vb() + this.T * this.V;
        this.wa = f / 3E-4;
        this.Ma = f;
        this.$ = 3E-4 * this.mg()
      };
      avg.prototype.mg = function () {
        return this.ra.R
      }
      ;
      avg.prototype.Gg = function (a) {
        _.$sg(this.R.H, this.H);
        var b = _.nsg(this.ra, a);
        a = this.$ * b[0];
        if (this.Oa) {
          b = 2E-4 * this.mg() * b[1];
          var c = 0
        } else
          c = b[1],
            b = 0;
        if (0 === this.ha) {
          c *= this.Ma * this.mg();
          var e = c * this.W;
          c *= this.V
        } else {
          e = this.$ * c;
          c = this.wa * Math.sin(e);
          var f = this.ha * this.wa * (1 - Math.cos(e));
          e = this.W * c + this.Ba * f;
          c = this.V * c + this.Aa * f
        }
        e = this.Ga + e - this.T * (this.W * Math.cos(a) + this.Ba * Math.sin(a));
        c = this.Ca + c - this.T * (this.V * Math.cos(a) + this.Aa * Math.sin(a));
        c = _.$t(c, -this.va, this.va);
        this.R.tM(e, c);
        this.H.xd(this.R.H.Ac());
        c = this.R.H;
        c.Fe(this.ta + a);
        a = Math.min(this.Ja + b, this.R.AR());
        c.ze(a);
        this.La.iu(c, this.Bb, !0);
        return this.Bb
      }
      ;
      avg.prototype.Yh = function () {
        return null
      }
      ;
      var bvg = function (a, b, c) {
        this.V = a;
        this.W = b;
        this.T = c;
        this.H = this.R = null
      }
        , dvg = function (a, b) {
        var c = a.V.R.wa.H;
        2.1815740985145E7 < b && 1 > c && null == a.R && (a.H && (a.T.stop(a.H),
          a.H = null),
          a.R = new cvg(a, c, 1, function () {
              a.R = null
            }
          ),
          a.T.play(a.R, 2E3 * (1 - c)));
        2.1815740985145E7 > b && 0 < c && null == a.H && (a.R && (a.T.stop(a.R),
          a.R = null),
          a.H = new cvg(a, c, 0, function () {
              a.H = null
            }
          ),
          a.T.play(a.H, 2E3 * c))
      }
        , cvg = function (a, b, c, e) {
        this.R = a;
        this.V = b;
        this.H = c;
        this.T = e
      };
      cvg.prototype.On = function (a) {
        a = 0 == a ? 0 : 1 <= a ? 1 : 1 - Math.exp(a * Math.log(1E-4));
        a = _.bu(this.V, this.H, a);
        this.R.V.RV(a);
        this.R.W.Ie();
        a == this.H && this.T()
      }
      ;
      var evg = function (a, b, c, e, f, g) {
        _.hsg.call(this, b, c, e, f);
        this.wa = g;
        this.va = a;
        this.ta = _.pC(c.Va().Ac(), _.eu(c.qd()))
      };
      _.F(evg, _.hsg);
      evg.prototype.Gg = function (a) {
        a = _.hsg.prototype.Gg.call(this, a);
        a.Va().Ac();
        dvg(this.va, this.ta);
        this.wa();
        return a
      }
      ;
      var jvg = function (a, b, c, e) {
        this.H = e;
        this.V = b;
        this.W = _.hr();
        this.$ = _.hr();
        this.R = _.hr();
        _.mw(fvg, 0, 0, 1);
        b = a.Va();
        _.lC(b.yc(), b.Vb(), 0, this.R, 1);
        _.sw(fvg, this.R, gvg);
        _.sw(gvg, this.R, hvg);
        b = _.eu(a.Tc().Ld());
        e = -Math.sin(b);
        var f = Math.cos(b);
        ivg(Math.cos(b), Math.sin(b), this.W);
        ivg(e, f, this.$);
        this.ha = c;
        this.T = c.bH();
        c.Ti(a, this.T);
        this.Bb = a.clone()
      };
      jvg.prototype.mg = function () {
        return this.V.R
      }
      ;
      jvg.prototype.Gg = function (a) {
        _.$sg(this.H.H, this.T);
        var b = _.nsg(this.V, a);
        _.F8(b, this.mg(), b);
        a = b[0];
        b = Math.PI / 2 + b[1];
        var c = Math.sin(b) * Math.sin(a)
          , e = Math.cos(b);
        _.pw(this.R, Math.sin(b) * Math.cos(a), hvg);
        _.pw(this.W, c, gvg);
        _.pw(this.$, e, kvg);
        _.nw(hvg, gvg, fvg);
        _.nw(fvg, kvg, fvg);
        _.gC(fvg[0], fvg[1], fvg[2], lvg, 1);
        this.H.tM(lvg[0], lvg[1]);
        this.T.xd(this.H.H.Ac());
        this.ha.iu(this.H.H, this.Bb, !0);
        return this.Bb
      }
      ;
      jvg.prototype.Yh = function () {
        return null
      }
      ;
      var fvg = _.hr()
        , hvg = _.hr()
        , gvg = _.hr()
        , kvg = _.hr()
        , lvg = _.hr()
        , ivg = function (a, b, c) {
        var e = hvg;
        _.pw(gvg, a, kvg);
        _.pw(e, b, lvg);
        _.nw(kvg, lvg, c)
      };
      var mvg = function (a, b, c, e) {
        this.$ = c;
        this.H = e;
        this.R = c.bH();
        c.Ti(a, this.R);
        this.V = b;
        this.T = _.Hw();
        _.Iw(this.T, this.R.yc(), this.R.Vb());
        this.Bb = a.clone();
        a = this.Bb.Tc().Uc();
        this.W = this.H.gL(this.Bb.Va().Ac(), _.eu(this.Bb.qd()), _.eu(a))
      };
      mvg.prototype.mg = function () {
        return this.V.R
      }
      ;
      mvg.prototype.Gg = function (a) {
        _.$sg(this.H.H, this.R);
        var b = _.nsg(this.V, a);
        _.F8(b, this.mg(), b);
        a = this.T[0] + b[0];
        b = this.T[1] + b[1];
        b = _.$t(b, -this.W, this.W);
        this.H.tM(a, b);
        this.R.xd(this.H.H.Ac());
        this.$.iu(this.H.H, this.Bb, !0);
        return this.Bb
      }
      ;
      mvg.prototype.Yh = function () {
        return null
      }
      ;
      var nvg = function (a, b, c, e, f, g) {
        this.ta = f;
        this.R = g;
        this.H = f.bH();
        f.Ti(a, this.H);
        this.ha = a.clone();
        this.V = new _.dsg(c);
        c = this.V.H;
        this.W = _.atg(b);
        this.ra = this.W / c;
        1E-10 > c && (this.ra = 0);
        this.T = _.Hw();
        _.ZO(this.T, b);
        this.$ = e
      };
      nvg.prototype.mg = function () {
        return this.V.R
      }
      ;
      nvg.prototype.Gg = function (a) {
        _.$sg(this.R.H, this.H);
        var b = this.V.H / .004 * this.ra * (1 - Math.exp(-.004 * a * this.mg())) / this.W;
        a = this.H.yc() + this.T[0] * b;
        b = this.H.Vb() + this.T[1] * b;
        b = _.$t(b, -this.$, this.$);
        this.R.tM(a, b);
        this.H.xd(this.R.H.Ac());
        this.ta.iu(this.R.H, this.ha, !0);
        return this.ha
      }
      ;
      nvg.prototype.Yh = function () {
        return null
      }
      ;
      var qvg = function (a, b, c, e, f, g, k) {
        _.asg.call(this);
        this.Bb = a.clone();
        this.$ = 150;
        this.ta = f;
        this.va = g;
        this.W = k;
        this.H = _.Hw();
        this.W.Wba(Math.pow(2, -b), this.H, c, e);
        this.R = this.H[1];
        this.R < this.H[0] && (this.R = Math.max(this.R, Math.min(this.H[0], 50)));
        this.V = -1;
        ovg(this);
        if (a = _.pvg(this))
          this.$ *= 1.5;
        this.wa = a ? _.jMb : _.iMb;
        this.ha = -1
      }, ovg;
      _.F(qvg, _.asg);
      qvg.prototype.mg = function () {
        return this.$
      }
      ;
      qvg.prototype.Gg = function (a) {
        0 == a && (this.ta.Ti(this.Bb, this.W.H),
          this.ha = (0,
            _.Uq)());
        -1 == this.V && ovg(this);
        var b = this.W.H
          , c = -Math.log(this.R / this.H[0]) / Math.LN2;
        a = this.wa(a);
        this.W.SY(Math.pow(2, -(c * a)) * this.H[0]);
        this.ta.iu(b, this.Bb, !0);
        dvg(this.va, this.R);
        return this.Bb
      }
      ;
      qvg.prototype.Yh = function () {
        return null
      }
      ;
      ovg = function (a) {
        var b = a.W.ha();
        0 < b && (a.V = b,
          a.R = a.H[1] <= a.H[0] && a.V > a.H[0] ? a.H[0] : Math.max(a.H[1], a.V))
      }
      ;
      _.pvg = function (a) {
        return a.R <= a.V || 2.29639378791E7 <= a.R
      }
      ;
      _.rvg = function (a, b) {
        b.Cg(_.fu(a.H));
        var c = b.tc()
          , e = _.zC(_.fu(a.yc()));
        c.ud(e);
        c.Ad(_.fu(a.Vb()));
        c.xd(a.Ac());
        c = b.Qd();
        c.ze(_.fu(a.Uc()));
        c.Fe(_.fu(a.Ld()));
        b = b.we();
        _.ry(b, a.Pb());
        _.sy(b, a.ub())
      }
      ;
      var tvg = function (a, b, c) {
        this.H = a;
        this.$ = new _.HJ;
        this.R = new _.jy;
        this.R.Fa(b);
        this.T = this.H.bH();
        this.H.Ti(b, this.T);
        this.W = c;
        b = new _.jy;
        _.rvg(this.T, b);
        a = [];
        for (c = 0; 4 > c; ++c)
          a.push(new _.HJ);
        c = new _.HJ;
        _.FJ(b, c);
        var e = c.Yi();
        e.H = svg;
        c.Si(e);
        b.tc().xd(1.9634166886630498E7);
        var f = new _.HJ;
        _.FJ(b, f);
        b = c.clone();
        e.Kh = .17 * Math.PI;
        e.R += .1;
        e.T = 100;
        b.Si(e);
        a[0].Si(c.Yi());
        a[1].Si(b.Yi());
        a[2].Si(f.Yi());
        a[3].Si(f.Yi());
        this.V = new _.Efe(a, [0, 1E3, 1800, 2E3], 2)
      };
      tvg.prototype.mg = function () {
        return 1E3
      }
      ;
      tvg.prototype.Gg = function (a) {
        var b = this.R
          , c = this.$;
        this.W && a++;
        _.Cfe(this.V, this.mg() * a, c);
        _.yIb(c, b);
        return b
      }
      ;
      tvg.prototype.Yh = function () {
        return null
      }
      ;
      var svg = 60 * Math.PI / 180;
      _.uvg = function (a, b, c, e, f, g, k) {
        this.Bb = a.clone();
        this.va = g || _.iMb;
        this.ta = _.Kq(k) ? k : 500;
        this.V = _.du(a.Tc().Ld());
        this.Ca = _.du(a.Tc().Uc());
        this.Ba = a.qd();
        this.ra = _.gu(this.V, _.du(b.Ld()));
        this.Aa = _.du(b.Uc());
        this.wa = c;
        this.T = e;
        this.R = f;
        this.$ = .5 * a.xc().Pb();
        this.ha = .5 * a.xc().ub();
        this.W = !0
      }
      ;
      _.uvg.prototype.mg = function () {
        return this.ta
      }
      ;
      _.uvg.prototype.Gg = function (a, b) {
        var c = this.Bb;
        a = this.va(a);
        this.R.Ti(c, this.T.H);
        this.T.P7(_.eu(_.du(this.V + _.bu(0, this.ra, a))), _.eu(_.du(_.bu(this.Ca, this.Aa, a))), this.$, this.ha, _.eu(_.bu(this.Ba, this.wa, a)));
        this.R.iu(this.T.H, c, this.W);
        this.R.Ok(this.Bb, b);
        return c
      }
      ;
      _.uvg.prototype.Yh = function () {
        return null
      }
      ;
      var vvg = function (a) {
        this.H = a.QM();
        this.R = a
      };
      _.F(vvg, _.Bsg);
      vvg.prototype.T = function (a, b) {
        var c = this.R.PV();
        b = new _.hu(a, b);
        a = this.R.QM().IS(b, 1);
        var e = this.R.PV();
        var f = _.hr();
        _.ctg(this.R.H, b.x, b.y, f) ? (_.hC(f, 6371010, f),
          f[2] = 0,
          e.H.Lc().Oa(f, f),
          b.x = f[0],
          b.y = f[1],
          e = !0) : e = !1;
        if (!e)
          return a;
        c = c.IS(b, 2);
        c = _.Dsg(a, c, null);
        return null == c ? null : c == a ? a : c
      }
      ;
      _.wvg = _.hr();
      _.W8 = _.hr();
      _.xvg = _.hr();
      _.yvg = _.hr();
      _.zvg = new _.hsa;
      _.X8 = _.hr();
      _.Avg = new _.Wsg(new _.FK);
      _.Bvg = .25 * Math.PI;
      _.Cvg = .325 * Math.PI;
      _.Dvg = 35 * Math.PI / 180;
      _.Y8 = _.hr();
      _.Evg = _.hr();
      _.Fvg = _.hr();
      _.Gvg = new _.hsa;
      var Mvg, a9, Yvg, Qvg;
      _.Z8 = function (a, b, c, e, f, g, k, m, q) {
        _.H8.call(this, c, f);
        var r = this;
        this.Th = b;
        this.kg = q;
        this.H = a;
        this.Ze = new bvg(this.H, b, e);
        this.ra = this.Ja = null;
        this.Te = !1;
        this.va = _.Hw();
        _.Iw(this.va, 0, 0);
        this.Fb = _.Hw();
        _.Iw(this.Fb, 0, 0);
        this.R = this.H.HR();
        this.hc = 1;
        this.V = this.R.H;
        this.Ma = this.H.H;
        this.Ei = (new Date).getFullYear();
        this.wc = _.Hw();
        this.ha = null;
        this.Ig = !0;
        this.qc = !1;
        this.nb = null;
        this.Yg = 0;
        this.Pa = this.Wb = null;
        this.Kf = 0;
        this.Hg = new _.Xsg;
        this.vg = new _.uE(100, function () {
            r.H.b9()
          }
          , "overlayRefreshFuseBranch");
        this.Eg = this.wg = null;
        this.Sc = void 0;
        this.mi = g;
        this.Me = k;
        this.Oh = m;
        this.wd = !0;
        this.Oa = this;
        this.Ba = this;
        this.Eb = this;
        this.time = this;
        this.Xa = this.th = this.H.QM() ? new vvg(this.H) : null;
        this.ye = null
      }
      ;
      _.F(_.Z8, _.H8);
      _.E = _.Z8.prototype;
      _.E.sC = function () {
        var a = _.H8.prototype.sC.call(this)
          , b = this.content.get();
        b.Uf() && 1 != b.Ye() && (b = _.Poc(b.Ye()) / 6371010,
          a *= b);
        return a
      }
      ;
      _.E.bL = function () {
        if (!_.Zsg())
          return 0;
        var a = this.tb.get();
        return a ? 71.5 * Math.sin(_.eu(a.Tc().Uc())) : 0
      }
      ;
      _.E.initialize = function () {
      }
      ;
      _.E.Xj = function (a) {
        _.H8.prototype.Xj.call(this, a);
        this.Wb && this.Wb();
        this.ra && this.ra.cancel(a);
        this.Pa && (this.Pa.tick("gdd"),
          this.Pa.done(Vsg),
          this.Pa = null);
        this.Hg.Fa(this.Ma.T);
        for (var b in _.v8) {
          a = _.v8[b];
          var c = _.ME;
          c && _.Iv(_.$ra(c), a)
        }
      }
      ;
      _.E.ao = function (a, b, c) {
        var e = !1
          , f = a.xc().Pb()
          , g = a.xc().ub();
        if (f !== b.Pb() || g !== b.ub())
          e = this.bj(),
            f = this.Ml(),
            _.J5a(a, b, null == e ? void 0 : e, null == f ? void 0 : f),
            b.Pb(),
            b.ub(),
            e = !0;
        _.yob(a, !1) && (e = !0);
        if (!c)
          return e;
        c = a.Va().Ac();
        f = _.eu(a.qd());
        b = this.R.n2(c, f);
        b != f && (a.Cg(_.fu(b)),
          e = _.pC(c, f),
          a.tc().xd(_.qC(e, b)),
          e = !0);
        return e
      }
      ;
      _.E.$A = function (a) {
        _.H8.prototype.$A.call(this, a);
        var b = this.W.get();
        if (b && (this.H.Ti(b, this.V),
          $8(this),
          this.AE(a),
        !this.H.Gj() && !this.Wb)) {
          var c = this;
          this.Wb = a.callback(function () {
            c.AE(a);
            c.Wb = null
          }, "fineprintUpdateBranch");
          this.H.OV(function () {
            c.Wb && c.Wb()
          })
        }
      }
      ;
      _.E.KA = function (a) {
        _.H8.prototype.KA.call(this, a);
        this.tb.get() && (this.vg.stop(),
          this.vg.start(a),
          Hvg(this, a))
      }
      ;
      var Ivg = function (a, b, c) {
        var e;
        a.H.Ti(b, a.V);
        2.1815740985145E7 >= _.pC(a.V.Ac(), a.V.H) ? c.Uf() && 1 != c.Ye() ? e = c.Ye() : e = null : e = c.Uf() ? c.Ye() : 1;
        return e
      }
        , Hvg = function (a, b) {
        var c = a.content.get()
          , e = a.tb.get();
        c && e && (e = Ivg(a, e, c),
          null === e ? c.Uf() && (c.Rv(),
            _.HC(a.content, b)) : c.Uf() && c.Ye() === e || (c.Eh(e),
            _.HC(a.content, b)))
      };
      _.Z8.prototype.Mu = function (a) {
        var b = this;
        _.H8.prototype.Mu.call(this, a);
        var c = this.content.get();
        if (c) {
          var e = !1;
          c.getSettings().$q() != this.wd && (e = !0,
            this.wd = c.getSettings().$q());
          var f = c.Uf() && _.i_f(c.Ye()) ? c.Ye() : void 0;
          if ((e = e || f != this.Sc) && this.kg) {
            var g = this.H;
            if (f && 1 != f)
              if (this.wd) {
                if (!_.i_f(c.Ye()))
                  return;
                this.H.TA(!1);
                gtg(c.Ye()) && _.q4f(c.Ye(), !1, this.kg, function (a) {
                  g.NV(a);
                  b.H.TA(!0)
                }, a, this.mi, this.Oh)
              } else
                g.NV([]),
                  this.H.TA(!1);
            else
              f != this.Sc && (g.NV(),
                this.H.TA(this.wd));
            this.Sc = f
          }
          if (Jvg(this)) {
            c = this.tb.get();
            if (!c)
              return;
            this.H.Ti(c, this.V);
            c = c.Tc();
            45 < c.Uc() ? (a9.Fa(c),
              a9.ze(45),
              a.Wh(_.Mp),
              Kvg(this, a),
              a.tick("gt0"),
              Lvg(this, a9, a, function (a) {
                a.tick("gt1");
                $8(b);
                b.R.wX(_.eu(45))
              })) : this.R.wX(_.eu(45))
          } else
            this.R.wX(_.rNb);
          f && this.H.Eh(f)
        }
      }
      ;
      var Jvg = function (a) {
        if (_.zr(a.ye) && a.ye())
          return !1;
        a = a.content.get();
        return !(!a || !_.M(a, 6))
      };
      _.Z8.prototype.Ik = function () {
        return this.H
      }
      ;
      _.Z8.prototype.uD = function (a, b, c) {
        if (this.Ja || this.ta || this.ha)
          c(b);
        else {
          this.ra && this.ra.cancel(b);
          b.Wh(_.n4f);
          var e = this.tb.get();
          this.H.Ti(e, this.V);
          a9.Fa(a);
          _.L(a, 0) || a9.Fe(0);
          _.L(a, 1) || (a = _.fu(this.R.XU()),
            a9.ze(a));
          var f = this
            , g = e.clone()
            , k = (e = this.content.get()) ? e.mb() : null;
          Lvg(this, a9, b, function (a) {
            $8(f);
            c(a);
            k && _.PE(f, _.UN, a, {
              type: _.n4f,
              tb: g,
              contentType: k
            })
          })
        }
      }
      ;
      _.Z8.prototype.hH = function (a, b) {
        if (!(this.Ja || this.ta || this.ra || this.ha)) {
          var c = this.tb.get();
          if (c) {
            a.Wh(_.Mp);
            Kvg(this, a);
            this.H.Ti(c, this.V);
            switch (this.hc) {
              case 1:
                this.hc = 2;
                this.R.$(.5);
                break;
              case 2:
                this.hc = 1;
                this.R.$(0);
                break;
              default:
                this.hc = 1,
                  this.R.$(0)
            }
            var e = _.fu(this.R.XU())
              , f = c.Tc();
            a9.Fa(f);
            a9.ze(e);
            a.tick("gt0");
            var g = this
              , k = c.clone()
              , m = (c = this.content.get()) ? c.mb() : null;
            Lvg(this, a9, a, function (a) {
              a.tick("gt1");
              $8(g);
              b(a);
              m && _.PE(g, _.UN, a, {
                type: _.n4f,
                tb: k,
                contentType: m
              })
            })
          }
        }
      }
      ;
      _.Z8.prototype.CG = function () {
        $8(this);
        switch (this.hc) {
          case 1:
            return 0;
          case 2:
            return 1;
          case 3:
            return 2;
          default:
            return 2
        }
      }
      ;
      var Lvg = function (a, b, c, e) {
        var f = a.tb.get();
        b = new _.uvg(f, b, f.qd(), a.R, a.H);
        c.tick("rt0");
        a.Ja = _.xsg(a, b, c, function (b) {
          b.tick("rt1");
          a.Ja = null;
          e(b)
        })
      };
      _.Z8.prototype.jj = function (a, b, c, e) {
        var f = this
          , g = this.tb.get();
        c = _.$bg(g, this.Ik().Rf(), c);
        var k = _.acg(g, e);
        b.Wh(_.pq);
        Kvg(this, b);
        this.ra && this.ra.cancel(b);
        this.H.Ti(g, this.V);
        e = this.$.get();
        var m = null;
        this.ha && (m = this.ha.H);
        if (m) {
          if (0 < -Math.log(m.R / m.H[0]) / Math.LN2 * a && _.pvg(m))
            return;
          if (-1 != m.ha) {
            var q = ((0,
              _.Uq)() - m.ha) / m.mg();
            g = m.Gg(q) || g
          }
          m = -Math.log(m.R / this.R.ra()) / Math.LN2;
          a += m
        }
        a = new qvg(g, a, c, k, this.H, this.Ze, this.R);
        _.ssg(this, b);
        this.ha ? b.H() : (g = this.Ik().render(null, null, b),
          this.ha = new _.bsg(g, b, function (a, b, c) {
              f.ha = null;
              b = b.H;
              !c && b && (a.tick("gz1"),
                _.tsg(f, b, a));
              _.vsg(f);
              b = f.tb.get();
              c = f.content.get();
              b && c && (b = b.clone(),
                c = c.mb(),
                _.PE(f, _.UN, a, {
                  type: _.pq,
                  tb: b,
                  contentType: c
                }))
            }
          ),
          _.usg(this),
          b.tick("gz0"));
        _.csg(this.ha, e, a)
      }
      ;
      _.Z8.prototype.$n = function (a, b, c, e) {
        var f = this.tb.get();
        c = _.$bg(f, this.Ik().Rf(), c);
        e = _.acg(f, e);
        this.R.Wba(Math.pow(2, -a), Mvg, c, e);
        this.H.Ti(f, this.V);
        this.R.SY(Mvg[1]);
        $8(this);
        this.H.iu(this.V, f, !0);
        dvg(this.Ze, Mvg[1]);
        _.I8(this, b);
        a = f.clone();
        if (f = this.content.get())
          f = f.mb(),
            _.PE(this, _.UN, b, {
              type: _.pq,
              tb: a,
              contentType: f
            })
      }
      ;
      _.Z8.prototype.Pk = function (a, b) {
        var c = this;
        _.H8.prototype.Pk.call(this, a, b);
        a = this.tb.get();
        var e = this.content.get();
        this.H.Ok(a, b);
        this.H.Ti(a, this.V);
        $8(this);
        this.R.sY();
        this.Pa = b;
        this.Kf++;
        b.Ae("gda", "" + this.Kf);
        b.Ae("gnw", "" + this.H.nb);
        b.ie(Vsg);
        var f = this;
        this.H.OV(function () {
          if (f.Pa) {
            var a = f.Pa
              , b = f.H.R.La
              , c = _.Mw(a, _.yp) || 0;
            var e = b.H.H;
            a.tick("gsri", {
              time: e >= c ? e : c
            });
            e = b.$.H;
            a.tick("gsrm", {
              time: e >= c ? e : c
            });
            e = b.ha.H;
            a.tick("gsrn", {
              time: e >= c ? e : c
            });
            e = b.R.H;
            a.tick("gsrl", {
              time: e >= c ? e : c
            });
            e = b.ra.H;
            a.tick("gsro", {
              time: e >= c ? e : c
            });
            e = b.T.H;
            a.tick("gsrb", {
              time: e >= c ? e : c
            });
            b.W.sd() && (e = b.W.H,
              a.tick("gsrq", {
                time: e >= c ? e : c
              }));
            b.V.sd() && (e = b.V.H,
              a.tick("gsrh", {
                time: e >= c ? e : c
              }));
            f.Sc && 1 != f.Sc && a.tick("gpl1");
            e = Math.max(b.H.H, b.R.H, b.T.H);
            a.tick("gsr", {
              time: e >= c ? e : c
            });
            b = f.Ma.T;
            c = Array(24);
            c[0] = "gndb";
            c[2] = "gndnc";
            c[4] = "gndnj";
            c[8] = "gndtj";
            c[6] = "gndv";
            c[10] = "gnum";
            c[12] = "gnutc";
            c[14] = "gnutj";
            c[1] = "gtdb";
            c[3] = "gtdnc";
            c[5] = "gtdnj";
            c[9] = "gtdtj";
            c[7] = "gtdv";
            c[11] = "gtum";
            c[13] = "gtutc";
            c[15] = "gtutj";
            c[16] = "gnr";
            c[17] = "gnrr";
            c[18] = "gnur";
            c[19] = "gnvmp";
            c[20] = "gyen";
            c[21] = f.Sc;
            c[22] = "gnnsr";
            c[23] = "gnasr";
            for (e = 0; 24 > e; e++) {
              var g = b.get(e) - f.Hg.get(e);
              isFinite(g) && a.Ae(c[e], "" + g)
            }
            b.set(20, Infinity);
            f.Pa.done(Vsg);
            f.Pa = null
          }
        });
        Hvg(this, b);
        e.Uf() && 1 != e.Ye() && b.tick("gpl0");
        a = {};
        for (var g in _.v8)
          a.aJ = g,
            _.OE(_.ME, _.v8[a.aJ], function (a) {
              return function (b) {
                switch (_.v8[a.aJ]) {
                  case _.Dkg:
                    b9(c, 1, 1, !1, b);
                    break;
                  case _.zkg:
                    b9(c, 1, -1, !1, b);
                    break;
                  case _.Bkg:
                    b9(c, 0, -1, !1, b);
                    break;
                  case _.Ckg:
                    b9(c, 0, 1, !1, b);
                    break;
                  case _.Ekg:
                    Nvg(c, 1, b);
                    break;
                  case _.Akg:
                    Nvg(c, 0, b)
                }
              }
            }(a)),
            a = {
              aJ: a.aJ
            };
        this.Mu(b)
      }
      ;
      var Kvg = function (a, b) {
        a = a.Ma.T;
        b.Ae("gnr", "" + a.get(16));
        b.Ae("gnrr", "" + a.get(17));
        b.Ae("gnur", "" + a.get(18));
        var c = a.get(20);
        isFinite(c) && (b.Ae("gyen", "" + c),
          a.set(20, Infinity))
      }
        , $8 = function (a) {
        var b = a.R.ta.R
          , c = a.V.Uc();
        a.R.$(1);
        var e = a.R.XU();
        c = Math.min(c / e, 1);
        .1 > e ? a.R.$(b) : (a.R.$(c),
          a.hc = .25 > c ? 1 : .75 > c ? 2 : 3)
      };
      _.Z8.prototype.GR = function (a, b, c, e) {
        var f = this;
        return new evg(this.Ze, a, b, c, e, function () {
            $8(f)
          }
        )
      }
      ;
      _.Z8.prototype.FH = function (a, b, c) {
        if (this.ha) {
          if (a)
            return this.ha.cancel(),
              !1;
          b && (this.ha.V.yt(null, b),
            this.content.get().Fa(b),
            _.HC(this.content, c));
          return !0
        }
        this.ra && this.ra.cancel(c);
        this.Ja && this.Ja.cancel(c);
        return _.H8.prototype.FH.call(this, a, b, c)
      }
      ;
      _.Z8.prototype.r9 = function (a, b, c, e) {
        var f = this.tb.get()
          , g = this.$.get();
        a = a.clone();
        a.we().Fa(f.xc());
        g.transition(a, b, c, e)
      }
      ;
      _.Z8.prototype.FU = function (a, b, c, e, f) {
        var g = this.content.get();
        b && b.Ye() != g.Ye() ? Ovg(this, b, e, f) : _.H8.prototype.FU.call(this, a, b, c, e, f)
      }
      ;
      var Ovg = function (a, b, c, e) {
        var f = a.tb.get();
        f.Qd().ze(0);
        a.H.H.rM();
        a.H.gba(!1);
        a.H.RV(1);
        a.H.TA(!1);
        a.H.d9(!1);
        a.wg = e;
        a.Eg = new tvg(a.H, f, !0);
        a.$.get().animate(new tvg(a.H, f, !1), c, function (c) {
          a.H.H.rD();
          c.tick("gpl0");
          a.content.get().Fa(b);
          _.HC(a.content, c);
          a.H.fba(!0);
          Pvg(a, c)
        });
        _.HC(a.content, c)
      };
      _.Z8.prototype.nE = function (a, b, c) {
        b && a && null === Ivg(this, a, b) && b.Rv();
        _.H8.prototype.nE.call(this, a, b, c)
      }
      ;
      var Pvg = function (a, b) {
        var c = a.H.H
          , e = a.tb.get();
        0 < c.H.H.H.H ? (b.tick("gpl1"),
          a.H.gba(!0),
          e = a.content.get(),
          a.H.d9(!(e && _.LF(e))),
          a.$.get().animate(a.Eg, b, function (b) {
            a.wg(b)
          })) : (c = new Qvg(a.H),
        e && c.Zh(e),
          a.$.get().animate(c, b, function (b) {
            return Pvg(a, b)
          }))
      }
        , Svg = function (a, b, c) {
        return b.ctrlKey || b.metaKey || b.shiftKey || !a.nb ? !0 : (c.tick("gdr1"),
          a.Ca = !1,
          Rvg(a, c),
          !1)
      }
        , Rvg = function (a, b) {
        !a.nb || a.Ja || a.ta || a.ha || (a.Ig && 500 > (0,
          _.Uq)() - a.Yg ? (b.tick("gsb0"),
          a.uD(a.nb.Tc(), b, function (a) {
            a.tick("gsb1")
          }),
        a.Ja && (a.nb = null)) : (a.nb = null,
          a.Ig = !1))
      };
      _.Z8.prototype.No = function (a, b) {
        this.Ja || (this.ha && this.ha.cancel(),
        this.ra && this.ra.cancel(b),
        Svg(this, a, b) && (Kvg(this, b),
        this.Ca || _.usg(this),
          a.ctrlKey || a.metaKey || a.shiftKey ? (this.qc = !0,
            Tvg(this, a.x, a.y, b)) : (this.qc = !1,
            Uvg(this, a.x, a.y, b))))
      }
      ;
      var Uvg = function (a, b, c, e) {
        e.Wh(_.Ao);
        e.tick("gdp0");
        e = a.tb.get();
        a.Ca = !0;
        _.ysg(a, b, c);
        a.H.Ti(e, a.V);
        a.Ca = a.R.Pa(b, c);
        _.Iw(a.wc, 0, 0)
      };
      _.Z8.prototype.aq = function (a, b) {
        if (!this.Ja && !this.ha && Svg(this, a, b)) {
          var c = this.tb.get()
            , e = this.content.get();
          if (a.ctrlKey || a.metaKey || a.shiftKey) {
            b.tick("gdr1");
            this.Ca = !1;
            var f = _.n4f
          } else
            c && (this.H.Ti(c, this.V),
              f = this.Rc || 0,
              f = (0,
                _.Uq)() - f,
            f > 1E3 / Math.round(1E3 / this.Th.Qh().Tq.ha) && Vvg(this, a.x, a.y, f),
              Wvg(this, a.x, a.y, b),
              f = _.Ao);
          _.vsg(this);
          this.Me.Lh(_.X.Map, 30);
          f && c && e && (a = c.clone(),
            e = e.mb(),
            _.PE(this, _.UN, b, {
              type: f,
              tb: a,
              contentType: e
            }))
        }
      }
      ;
      var Vvg = function (a, b, c, e) {
        _.ZO(_.Xvg, a.wc);
        var f = a.V.yc()
          , g = a.V.Vb();
        if (b = a.R.Eb(b, c, e))
          f = _.ftg(f, a.V.yc()),
            g = _.ftg(g, a.V.Vb()),
            _.Asg(a.wc, f, g, e);
        return b
      }
        , Wvg = function (a, b, c, e) {
        if (a.Ca) {
          e.tick("gdp1");
          var f = e.callback(function () {
            var b = a.H.R.La;
            e.tick("gdpr", {
              time: Math.max(b.H.H, b.R.H, b.T.H)
            })
          }, "panSceneResolvedBranch");
          a.H.OV(f);
          _.zsg(a, b, c);
          a.Ca = !1;
          b = a.tb.get();
          c = a.Ma.zy() + a.H.QV();
          c = Yvg(a.wc[0], a.wc[1], c, a.R.ra(), b.xc().ub());
          .25 < c && !a.ha && (f = (f = b.Tc()) ? f.Uc() : 0,
            f = a.R.gL(b.Va().Ac(), _.eu(b.qd()), _.eu(f)),
            b = new nvg(b, a.wc, c, f, a.H, a.R),
            a.$.get(),
            a.ta = _.xsg(a, b, e, function () {
              a.ta = null
            }))
        }
      };
      _.Z8.prototype.Oo = function (a, b) {
        if (!this.Ja && !this.ha && Svg(this, a, b))
          if (a.ctrlKey || a.metaKey || a.shiftKey) {
            this.qc || (b.tick("gdp1"),
              this.qc = !0);
            var c = a.x;
            a = a.y;
            if (this.nb) {
              var e = this.tb.get()
                , f = this.Rc || 0;
              if (0 < (0,
                _.Uq)() - f) {
                this.H.Ti(e, this.V);
                f = 2 * (c - this.Ob[0]) * Math.PI / this.V.Pb();
                f = this.V.Ld() + f;
                var g = this.R.AR()
                  , k = 2 * -(a - this.Ob[1]) * g / this.V.ub();
                k = this.V.Uc() + k;
                k = _.$t(k, 0, g);
                g = .5 * this.V.Pb();
                var m = .5 * this.V.ub();
                this.R.P7(f, k, g, m);
                $8(this);
                this.H.iu(this.V, e, !0);
                _.I8(this, b)
              }
              _.zsg(this, c, a)
            } else
              Tvg(this, c, a, b)
          } else
            this.qc && (b.tick("gdr1"),
              Uvg(this, a.x, a.y, b),
              this.qc = !1),
              c = a.x,
              a = a.y,
              this.Ca ? (e = this.tb.get(),
                f = this.Rc || 0,
                f = (0,
                  _.Uq)() - f,
              0 < f && (this.H.Ti(e, this.V),
                f = Vvg(this, c, a, f),
                this.H.iu(this.V, e, !0),
                f ? (_.zsg(this, c, a),
                  _.I8(this, b)) : Wvg(this, c, a, b))) : (Uvg(this, c, a, b),
              this.Ca && this.ta && _.ssg(this, b))
      }
      ;
      _.Z8.prototype.Bx = function (a, b) {
        switch (a.keyCode) {
          case 38:
            var c = a.shiftKey ? -1 : 1;
            b9(this, 1, c, a.shiftKey, b);
            break;
          case 40:
            c = a.shiftKey ? 1 : -1;
            b9(this, 1, c, a.shiftKey, b);
            break;
          case 37:
            b9(this, 0, -1, a.shiftKey, b);
            break;
          case 39:
            b9(this, 0, 1, a.shiftKey, b);
            break;
          case 78:
          case 85:
          case 82:
            if ((c = this.tb.get()) && a.shiftKey && a.ctrlKey) {
              var e = new _.ly;
              78 === a.keyCode ? (e.ze(c.Tc().Uc()),
                e.Fe(0)) : 85 === a.keyCode ? (e.ze(0),
                e.Fe(c.Tc().Ld())) : (e.Fe(0),
                e.ze(0));
              Lvg(this, e, b, function () {
              });
              a.preventDefault()
            }
            break;
          case 107:
          case 187:
            this.T.jj(1, b, void 0, void 0, !0);
            this.Me.Lh(_.X.sJ, 32);
            break;
          case 109:
          case 189:
            this.T.jj(-1, b, void 0, void 0, !0),
              this.Me.Lh(_.X.tJ, 32)
        }
      }
      ;
      var b9 = function (a, b, c, e, f) {
        if (a.ra)
          if (a.va[b] != c)
            a.ra.cancel(f);
          else
            return;
        Kvg(a, f);
        _.ssg(a, f);
        _.ZO(a.Fb, a.va);
        a.va[b] = c;
        Zvg(a, e, f)
      }
        , Zvg = function (a, b, c) {
        var e = a.tb.get();
        if (e) {
          c.Wh(_.Ao);
          var f = 1 / (2 * Math.PI * a.Ma.zy())
            , g = a.R.ra();
          f = f * g * .007;
          var k = a.H;
          b || 45 < Math.abs(e.Tc().Uc()) ? (g = new _.lsg(a.Fb, a.va, 1, 5E3),
            e = new avg(e, g, k, a.R, f, a.va[0], b)) : 10 > Math.abs(e.Tc().Ld()) ? (g = new _.lsg(a.Fb, a.va, f, 1E3),
            e = new mvg(e, g, k, a.R)) : (g = new _.lsg(a.Fb, a.va, f, 1E3),
            e = new jvg(e, g, k, a.R));
          a.ra = _.wsg(a, e, c, function (b) {
            var c = a.va[0] || a.va[1];
            a.ra && !a.ra.uz() && c ? (_.ZO(a.Fb, a.va),
              Zvg(a, a.Te, b)) : a.ra = null;
            _.I8(a, b)
          });
          a.Te = b
        }
      };
      _.Z8.prototype.up = function (a, b) {
        _.ZO(this.Fb, this.va);
        var c = !1;
        switch (a.keyCode) {
          case 17:
          case 91:
          case 16:
            Rvg(this, b);
            break;
          case 38:
          case 40:
            Nvg(this, 1, b);
            c = !0;
            break;
          case 37:
          case 39:
            Nvg(this, 0, b),
              c = !0
        }
        c && _.PE(this, _.UN, b, a)
      }
      ;
      var Nvg = function (a, b, c) {
        var e = !1;
        _.ZO(a.Fb, a.va);
        1 == b && 1 == Math.abs(a.va[1]) && (a.va[1] = 0,
          e = !0);
        0 == b && 1 == Math.abs(a.va[0]) && (a.va[0] = 0,
          e = !0);
        e && a.ra && (a.ra.cancel(c),
          Zvg(a, a.Te, c))
      }
        , Tvg = function (a, b, c, e) {
        e.tick("gdr0");
        e.Wh(_.Ao);
        e = a.tb.get();
        a.nb || (a.nb = e.clone(),
          a.Yg = (0,
            _.Uq)());
        _.ysg(a, b, c);
        a.Ca = !0
      };
      _.E = _.Z8.prototype;
      _.E.Yf = function (a, b, c, e) {
        var f = this.tb.get();
        f && this.H.qY(f, !1);
        return this.H.NLa(a, b, c, e)
      }
      ;
      _.E.Fk = function (a, b) {
        b = b || new _.fw(0, 0);
        var c = this.tb.get().xc();
        var e = a.yc();
        var f = a.Vb();
        a = a.Ac();
        var g = _.etg(this.Ma, _.eu(e), _.eu(f), void 0, !0);
        isFinite(g) || (g = this.H.QV());
        _.lC(e, f, a + g, Mvg);
        e = _.K8(this.Ma.H.Bb);
        _.Bw(e, Mvg, Mvg);
        b.x = c.Pb() * (Mvg[0] + 1) / 2;
        b.y = c.ub() - c.ub() * (Mvg[1] + 1) / 2;
        return b
      }
      ;
      _.E.HC = function (a) {
        var b = a.yc()
          , c = a.Vb();
        a = _.etg(this.Ma, _.eu(b), _.eu(c), void 0, !1);
        b = _.etg(this.Ma, _.eu(b), _.eu(c), void 0, !0);
        return isFinite(a) && isFinite(b) ? a - b : 0
      }
      ;
      _.E.$p = function (a, b) {
        Svg(this, a, b) && _.H8.prototype.$p.call(this, a, b)
      }
      ;
      _.E.Ru = function (a, b) {
        Svg(this, a, b) && _.H8.prototype.Ru.call(this, a, b)
      }
      ;
      _.E.Gw = function (a, b) {
        var c = this.tb.get();
        c.we().Fa(a);
        _.I8(this, b);
        this.H.MLa();
        if (a = this.content.get())
          c = c.clone(),
            _.PE(this, _.UN, b, {
              type: _.Wo,
              tb: c,
              contentType: a.mb()
            })
      }
      ;
      _.E.c1 = function (a) {
        var b = this.Ei
          , c = [];
        this.Ma.UGa(c);
        0 < c.length && (b = "Imagery \u00a9" + (b.toString() + (" " + c.join(_.Qa))),
        0 < a.length && (b += _.Qa + a),
          a = b);
        return a
      }
      ;
      _.E.Pm = function () {
        if (!this.tb.get())
          return null;
        var a = this.tb.get();
        return a ? Math.log(this.R.eL() / a.Va().Ac()) / Math.LN2 : null
      }
      ;
      _.E.Ml = function () {
        if (!this.tb.get())
          return null;
        var a = this.tb.get();
        if (!a)
          return null;
        a = _.qC(this.R.ha(), _.eu(a.qd()));
        return Math.log(this.R.eL() / a) / Math.LN2
      }
      ;
      _.E.bj = function () {
        return this.tb.get() ? 0 : null
      }
      ;
      _.E.rl = function () {
        return !0
      }
      ;
      _.E.ZG = function () {
      }
      ;
      _.E.YG = function () {
        var a = this.tb.get();
        a && (this.H.Ti(a, this.V),
          $8(this))
      }
      ;
      _.E.Yq = function () {
        return "g"
      }
      ;
      _.E.bM = function () {
        return !0
      }
      ;
      _.E.NA = function (a, b) {
        switch (a) {
          case 1:
            b9(this, 1, 1, !1, b);
            Nvg(this, 1, b);
            break;
          case 2:
            b9(this, 1, -1, !1, b);
            Nvg(this, 1, b);
            break;
          case 3:
            b9(this, 0, -1, !1, b);
            Nvg(this, 0, b);
            break;
          case 4:
            b9(this, 0, 1, !1, b),
              Nvg(this, 0, b)
        }
      }
      ;
      _.E.Bu = function () {
        return !1
      }
      ;
      _.Xvg = _.Hw();
      Mvg = _.hr();
      a9 = new _.ly;
      Yvg = function (a, b, c, e, f) {
        if (0 == e)
          return 0;
        a = Math.sin(a);
        b = Math.sin(b);
        b = a * a + b * b;
        return 0 == b ? 0 : f / e * c * Math.sqrt(b)
      }
      ;
      Qvg = function (a) {
        this.Bb = null;
        this.H = a
      }
      ;
      _.E = Qvg.prototype;
      _.E.Zh = function (a) {
        this.Bb = a
      }
      ;
      _.E.Lc = function () {
        return this.Bb
      }
      ;
      _.E.mg = function () {
        return 200
      }
      ;
      _.E.Gg = function () {
        this.Bb && this.H && this.H.GD(this.Bb);
        return this.Bb
      }
      ;
      _.E.Yh = function () {
        return null
      }
      ;

    } catch (e) {
      _._DumpException(e)
    }
    try {
      var $vg = function (a) {
        _.gw.apply(this, arguments)
      };
      _.F($vg, _.gw);
      $vg.prototype.initialize = function () {
        _.yF("SCGI", awg)
      }
      ;
      var awg = function (a, b, c, e, f, g, k, m, q, r) {
        c.load("g", b, function (b, c) {
          a(new _.Z8(b, e, f, g, c, k, m, q, r))
        })
      };
      _.AF($vg);
    } catch (e) {
      _._DumpException(e)
    }
    try {
      var jzg, kzg, lzg, mzg, nzg, ozg, pzg, rzg, szg, tzg, uzg, vzg, wzg, xzg, zzg, Azg, Bzg, Czg, Jzg, Lzg, Mzg, Nzg,
        Pzg, Qzg, Rzg, Tzg, Vzg, Wzg, Yzg, Zzg, $zg, aAg, dAg, eAg, fAg, gAg, hAg, iAg, jAg, lAg, mAg, nAg, pAg, qAg,
        rAg, sAg, tAg, uAg, wAg, yAg, zAg, AAg, BAg, DAg, EAg, FAg, IAg, JAg, LAg, MAg, NAg, OAg, l9, PAg, QAg, RAg,
        SAg, TAg, UAg, VAg, WAg, XAg, YAg, ZAg, aBg, bBg, cBg, gBg, iBg, jBg, lBg, mBg, nBg, oBg, pBg, rBg, tBg, xBg,
        yBg, ABg, BBg, CBg, DBg, EBg, FBg, n9, o9, GBg, HBg, IBg, QEg, REg, SEg, UEg, VEg, WEg, XEg, $Eg, aFg, bFg, ZEg,
        cFg, dFg, RFg, hBg;
      jzg = "#define _a 1\n";
      kzg = "#define _b 1\n";
      lzg = "#define _c 1\n";
      mzg = "#define _d 1\n";
      nzg = "#define _e 1\n";
      ozg = "#define _f 1\n";
      pzg = "attribute vec3 a;void main(){gl_Position=vec4(a,1);}";
      rzg = function () {
        this.V = this.T = this.H = this.R = null;
        this.W = new qzg
      }
      ;
      szg = function (a, b, c) {
        this.H = a;
        this.$ = b;
        this.V = c;
        this.W = this.T = null;
        this.ra = 0;
        this.Aa = new rzg;
        this.R = _.BK();
        this.wa = "";
        this.ha = 0;
        this.va = -1;
        this.ta = 0
      }
      ;
      tzg = function (a) {
        this.H = a;
        this.wa = this.T = this.W = null;
        this.ra = 2;
        this.V = null;
        this.Aa = 0;
        this.va = this.R = null;
        this.Ba = 1;
        this.error = !1;
        this.ha = this.ta = null;
        this.$ = 0
      }
      ;
      uzg = function (a, b, c) {
        this.H = a;
        this.T = b;
        this.R = null;
        this.V = c;
        this.state = null
      }
      ;
      vzg = function () {
        this.R = "";
        this.Cu = !1;
        this.T = this.H = 0
      }
      ;
      wzg = function (a) {
        this.Ba = a;
        this.W = this.$ = this.ha = null;
        this.wa = 0;
        this.V = null;
        this.Ca = 0;
        this.T = null;
        this.va = 0;
        this.Oa = this.Aa = this.ta = this.ra = this.Ma = null;
        this.Ja = this.La = this.R = this.H = 0;
        this.Ga = null
      }
      ;
      xzg = function (a) {
        this.dj = a;
        a = this.dj.H;
        this.Ba = a.substring(0, a.length - 1);
        this.H = this.ta = this.Aa = this.V = null;
        this.wj = this.wG = this.vG = 0;
        this.$ = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]);
        this.T = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]);
        this.ra = 0;
        this.ha = this.R = -1;
        this.wa = 0;
        this.va = !0;
        this.W = 0
      }
      ;
      zzg = function (a, b, c) {
        this.R = new yzg(a, b);
        this.T = c;
        this.H = []
      }
      ;
      Azg = function (a) {
        this.T = a;
        this.R = {};
        this.H = new _.$q;
        _.lbb(this.H, 6291456)
      }
      ;
      Bzg = function () {
        this.R = this.$ = -1;
        this.W = 6371010;
        this.V = -424;
        this.T = 8846
      }
      ;
      Czg = function () {
        this.H = {}
      }
      ;
      Jzg = function (a) {
        this.H = null;
        this.T = [];
        this.V = [];
        this.R = [];
        a = new _.nMb(a);
        for (var b; b = a.next();)
          switch (b) {
            case 1:
              this.H = new Bzg;
              b = a.HA();
              Dzg(a, a.uA() + b);
              Ezg(this.H, a);
              Fzg(a);
              break;
            case 2:
              b = a.HA();
              Dzg(a, a.uA() + b);
              for (var c = a; b = c.next();)
                switch (b) {
                  case 1:
                    this.V.push(Gzg(c));
                    break;
                  case 2:
                    this.T.push(c.HA());
                    break;
                  default:
                    Hzg(c)
                }
              Fzg(a);
              break;
            case 3:
              b = a.HA();
              Dzg(a, a.uA() + b);
              c = new _.wMb;
              for (this.R.push(c); b = a.next();)
                switch (b) {
                  case 1:
                    c.Ad(Izg(a));
                    break;
                  case 2:
                    c.ud(Izg(a));
                    break;
                  case 3:
                    c.xd(Izg(a));
                    break;
                  default:
                    Hzg(a)
                }
              Fzg(a);
              break;
            default:
              Hzg(a)
          }
      }
      ;
      Lzg = function (a, b, c, e) {
        this.va = a;
        this.H = -1;
        this.Aa = b;
        this.Ja = c;
        this.R = null;
        this.ra = new Kzg;
        this.Ca = (0,
          _.gr)(this.La, this);
        this.ta = {};
        this.wa = {};
        this.W = null;
        this.T = 0;
        this.V = [];
        this.$ = {};
        this.Ba = e;
        this.Ga = this.ha = !1
      }
      ;
      Mzg = function (a) {
        this.R = new _.UJ("a", a);
        this.H = new _.XJ("e", a);
        this.Vm = new _.VJ("f", a)
      }
      ;
      Nzg = function (a) {
        this.H = new _.RJ("g", a)
      }
      ;
      Pzg = function (a, b) {
        b = b || new Ozg;
        b = (b.$ ? jzg : "") + (b.T ? kzg : "") + (b.ra ? lzg : "") + (b.V ? mzg : "") + (b.W ? nzg : "") + (b.R ? ozg : "");
        _.QJ.call(this, a, b + "#if !defined(_d)&&!defined(_e)&&!defined(_f)\n#endif\n#ifdef _d\n#endif\n#ifdef _e\n#endif\n#ifdef _f\n#endif\nattribute vec4 g;void main(){gl_Position=vec4(g.xy,0,1);}", b + "precision highp float;const float h=3.141592657;const float j=1.;\n#if !defined(_d)&&!defined(_e)&&!defined(_f)\nconst float k=6360.;const float l=6350./k;const float m=6420./k;const float o=m-j;const float p=m*m-l*l;const float q=.148657681;const float r=8./k;const vec3 s=vec3(.0058,.0135,.0331)*k;const float t=1.2/k;const vec3 u=vec3(.004)*k;const vec3 v=u/.9;const float w=.8;const vec3 x=vec3(.000209,.000476,.001385)*k;const vec3 B=vec3(.91,.99,1.6);const float C=8e2/k;\n#endif\n#ifdef _d\nconst float k=3380.;const float l=3372./k;const float m=3485./k;const float o=m-j;const float p=m*m-l*l;const float q=.260429152;const float r=11.1/k;const vec3 s=vec3(9.53e-5,.0002218,.000544)*k;const float t=14./k;const vec3 u=vec3(.02,.0159,.0118)*.33*k;const vec3 v=u/.8;const float w=.5;const vec3 x=vec3(.001326,.000739,.000374)*k;const vec3 B=vec3(1);const float C=8e2/k;\n#endif\n#ifdef _e\nconst float k=6052.;const float l=6050./k;const float m=6120./k;const float o=m-j;const float p=m*m-l*l;const float q=.1525;const float r=15.9/k;const vec3 s=vec3(.0028,.000535,7.31e-5)*k;const float t=1.2/k;const vec3 u=vec3(.04)*k;const vec3 v=u/.9;const float w=.8;const vec3 x=vec3(.00409,.00276,.002)*k;const vec3 B=vec3(1,.79,.2);const float C=8e2/k;\n#endif\n#ifdef _f\nconst float k=1187.;const float l=1186./k;const float m=1247./k;const float o=m-j;const float p=m*m-l*l;const float q=.324;const float r=45./k;const vec3 s=vec3(9.53e-6,2.218e-5,5.44e-5)*k;const float t=1./k;const vec3 u=vec3(.02,.0159,.0118)*.33*k;const vec3 v=u/.2;const float w=.5;const vec3 x=vec3(1.326e-6,7.39e-6,3.74e-5)*k;const vec3 B=vec3(1);const float C=8e2/k;\n#endif\nconst float D=l+1e-7;const float F=64.;const float G=64.;const int H=9;uniform sampler2D a;uniform vec4 e;float ja(float I){return 3./(16.*h)*(1.+I*I);}float ka(float I){float J=1.+w*w-2.*w*I;return (1.-w*w)/(4.*h)/(J*sqrt(J));}vec2 la(float I,float J){const vec2 K=vec2(8,128);const vec2 L=vec2(.5)/K;const vec2 M=(K-vec2(1))/K;const float N=.06868;const vec2 O=vec2(1./o,1./1.2);const float P=N*O.x;const vec2 Q=O*M;const vec2 R=vec2(-j,.2)*O;const vec2 S=vec2(0,N*(1.+R.x))*Q;const vec2 T=L+R*M+S;return vec2(I,I*P+J)*Q+T;}vec4 ma(float I,float J){return texture2D(a,la(I,J));}vec3 na(float I,float J,float K,float L,float M,out vec3 N){M=min(M,C);float O,P;O=M*(.5/float(H-1));P=.5/I;vec3 Q,R,U,V,W,X,Y;Q=s*ja(L);R=u*ka(L);vec4 S=ma(I,K);vec2 T=exp(vec2(min(j-I,0.))*vec2(1./r,1./t));U=Q*T.x;V=R*T.y;W=x*S.a*S.a;X=(U+V)*S.rgb+W;N=vec3(1);Y=vec3(0);for(int Z=2;Z<2*H;Z+=2){float aa,ba,ca;aa=float(Z)*O;ba=I+aa*(J+aa*P);ca=(L*aa+K*I)*(1./j);vec4 da=ma(ba,ca);vec2 ea=exp(vec2(min(j-ba,0.))*vec2(1./r,1./t));vec3 fa,ga,ha,ia;fa=Q*ea.x;ga=R*ea.y;ha=x*da.a*da.a;N*=exp((-2.*s*ea.x+-2.*v*ea.y)*O);ia=((fa+ga)*da.rgb+ha)*N;Y+=(X+ia)*O;X=ia;}return Y;}vec3 oa(vec3 I,float f){I=I*f;\n#ifdef _c\nI=vec3(1)-exp(-I);\n#else\nI=vec3(1)-exp(-(sqrt(I)+I)*(1./1.8));\n#endif\nreturn I;}float pa(float I){return 2.*I/(1.+I*I);}float qa(float I,float J,float K){return K<I?I+(1./((I-K)*(1./J)+1.)-1.)*J:K;}float ra(float I,float J){const float K=.5*G;const float L=1./(K-1.);float M,N,O,P,Q,R;M=I*I-l*l;N=sqrt(M);if(J<K){O=I-l;P=N;Q=1.-J*L;Q=clamp(Q*P,O,P*.999);R=-(M+Q*Q)/(2.*I*Q);R=min(R,-N/I-.001);}else{O=m-I;P=N+q;Q=(J-K)*L;Q=clamp(Q*P,O,P*.999);R=(p-M-Q*Q)/(2.*I*Q);}return R;}vec2 sa(float I,float J,float K,out float L){L=J+sqrt(J*J+I*I-1.);float M,N;M=qa(-.15,.1,K-L);N=max(M+1e-6,min(1.,K+L));return vec2(M,N);}vec2 ta(float I,float J,float K,float L){float M=I*(1./m);L=pa(L*(2./(F-1.))-1.);if(M<1.)return vec2(K,L);else{float N,P,Q;vec2 O=sa(M,J,M*K,N);P=(L*.5+.5)*(O.y-O.x)+O.x;Q=clamp((P-M*K)/N,-1.,1.);return vec2(P,Q);}}float ua(float I,float J){float K,L,M,N,O,P,Q;K=I*I;L=-I*J;M=L*L-K;N=M+m*m;O=sqrt(N);P=L+O;\n#if defined(_d)||defined(_e)||defined(_f)\nN=M+l*l;\n#else\nN=M+(e[3]>0.?j*j:l*l);\n#endif\nQ=N>0.?L-sqrt(N):-1.;return Q>0.?Q:P;}vec2 va(float I,float J,float K){const float L=j*j;const float M=(m+j)*.5;const float N=(m-j)*.5;const float O=N/(.05*j);const vec4 P=vec4(M,O*O,1.-O*O,N*N);const float Q=l*l;const float R=(m+l)*.5;const float S=(m-l)*.5;const float T=S/(.05*l);const vec4 U=vec4(R,T*T,1.-T*T,S*S);\n#if defined(_d)||defined(_e)||defined(_f)\nconst float V=Q;const vec4 W=U;\n#else\nfloat V=e.x>=j?L:Q;vec4 W=e.x>=j?P:U;\n#endif\nfloat X,Y,Z,aa,ba,ca,da;X=I-W.x;Y=W.y+J*J*W.z;Z=X*J;aa=X*X-W.w;ba=max((-Z+sqrt(Z*Z-Y*aa))/Y,1e-6);K=min(K,-sqrt(I*I-V)-.002);ca=K*K-I*I+V;da=-K-sqrt(ca);return ba<da?vec2(ba,da):vec2(da,ba);}vec4 wa(vec2 I,float f){vec2 J,O;J=floor(I);float K,L,M,N,P;K=max(D,e.x);L=e.y;M=min(K,m);N=ra(M,mod(J.y,G));O=ta(K,N,L,J.x);if(e.z>.5){vec2 Q=va(M,N,M*N);P=J.y<G?Q.x:Q.y;}else P=ua(M,N);vec3 Q,R;R=na(M,N,O.x,O.y,P,Q);R*=B;\n#ifdef _b\nQ.r=log(Q.r);\n#else\nR=min(oa(R,f),254./255.);\n#endif\nreturn vec4(R,Q.r);}uniform float f;void main(){gl_FragColor=wa(gl_FragCoord.xy,f);}");
        this.R = new Mzg(this);
        this.attributes = new Nzg(this)
      }
      ;
      Qzg = function (a) {
        this.La = new _.UJ("a", a);
        this.wc = new _.UJ("b", a);
        this.Pa = new _.UJ("c", a);
        this.ha = new _.XJ("e", a);
        this.Vm = new _.VJ("f", a);
        this.ta = new _.VJ("g", a);
        this.Xa = new _.YJ("s", a);
        this.Eb = new _.VJ("t", a);
        this.hb = new _.YJ("u", a);
        this.Ja = new _.YJ("v", a);
        this.Gc = new _.XJ("w", a);
        this.nb = new _.VJ("x", a);
        this.Aa = new _.VJ("A", a);
        this.qc = new _.VJ("B", a);
        this.Ca = new _.VJ("C", a);
        this.Ga = new _.VJ("D", a);
        this.wa = new _.VJ("E", a);
        this.Ma = new _.UJ("I", a);
        this.T = new _.XJ("J", a);
        this.ra = new _.VJ("K", a);
        this.H = new _.WJ("L", a);
        this.Oc = new _.VJ("M", a);
        this.Rc = new _.VJ("N", a);
        this.Ba = new _.UJ("O", a);
        this.Oa = new _.VJ("P", a);
        this.W = new _.WJ("Q", a);
        this.V = new _.WJ("R", a);
        this.$ = new _.XJ("S", a);
        this.Wb = new _.XJ("T", a);
        this.R = new _.WJ("U", a);
        this.va = new _.WJ("V", a);
        this.hc = new _.UJ("W", a);
        this.Ob = new _.UJ("X", a);
        this.Fb = new _.VJ("Y", a)
      }
      ;
      Rzg = function (a) {
        this.H = new _.RJ("F", a);
        this.T = new _.RJ("G", a);
        this.R = new _.RJ("H", a)
      }
      ;
      Tzg = function (a, b) {
        b = b || new Szg;
        b = (b.Aa ? jzg : "") + (b.Ja ? kzg : "") + (b.ra ? lzg : "") + (b.Ga ? mzg : "") + (b.Xa ? nzg : "") + (b.va ? ozg : "") + (b.La ? "#define _g 1\n" : "") + (b.nb ? "#define _h 1\n" : "") + (b.Oa ? "#define _i 1\n" : "") + (b.Pa ? "#define _j 1\n" : "") + (b.Ma ? "#define _k 1\n" : "") + (b.T ? "#define _l 1\n" : "") + (b.V ? "#define _m 1\n" : "") + (b.Ba ? "#define _n 1\n" : "") + (b.W ? "#define _o 1\n" : "") + (b.Ca ? "#define _p 1\n" : "") + (b.$ ? "#define _q 1\n" : "") + (b.ha ? "#define _r 1\n" : "") + (b.ta ? "#define _s 1\n" : "") + (b.R ? "#define _t 1\n" : "") + (b.Eb ? "#define _u 1\n" : "") + (b.Fb ? "#define _v 1\n" : "") + (b.wa ? "#define _w 1\n" : "");
        _.QJ.call(this, a, b + "#if !defined(_i)&&!defined(_j)&&!defined(_k)\n#endif\n#ifdef _i\n#endif\n#ifdef _j\n#endif\n#ifdef _k\n#endif\nvarying vec2 m;\n#ifdef _c\nvarying vec3 n;\n#endif\n#ifdef _b\nvarying float o;\n#endif\nvarying float p;\n#ifdef _a\nvarying vec3 q;\n#endif\n#ifdef _d\nvarying vec4 r;\n#endif\nuniform mat4 s;uniform float t[8];\n#if defined(_a)||defined(_c)||0\nuniform mat4 u;\n#endif\n#ifdef _d\nuniform mat4 v;\n#endif\nuniform vec4 w;\n#ifdef _b\nuniform float x,A,B,C,D,E;float Va(float sa){return sa/(x*A);}float Wa(float sa){float ta,ua,va,wa;ta=Va(sa);ua=C/ta;va=.5*ua/B;wa=.05;return va/wa;}float Xa(float sa){return E*abs(sa-D)/sa;}float Ya(float sa){float ta,ua;ta=Wa(sa);ua=Xa(sa);return clamp(max(ta,ua),0.,1.);}\n#endif\nattribute vec4 F;attribute vec2 G;\n#ifdef _c\nattribute vec3 H;const vec3 ra=vec3(127);\n#endif\nvoid main(){float sa=t[int(floor(F.w*255.+.5))];if(sa>0.){vec4 ta=vec4(floor(F.xyz*255.+.5),1);gl_Position=s*ta;m=(floor(G*65535.+.5)+w.xy)*w.zw;\n#ifdef _b\no=Ya(gl_Position.w);\n#endif\np=sa;\n#ifdef _a\nvec4 ua=u*ta;q=ua.xyz/6371010.;\n#endif\n#ifdef _c\nn=(u*vec4(floor(H*255.+.5)-ra,0)).xyz;\n#endif\n#ifdef _d\nr=v*ta;\n#endif\n}else gl_Position=vec4(0,0,0,1);}", b + "precision highp float;\n#ifdef _a\nconst float Z=3.141592657;const float ba=1.;\n#if !defined(_i)&&!defined(_j)&&!defined(_k)\nconst float ca=6360.;const float da=6350./ca;const float ea=6420./ca;const float ga=ea-ba;const float ia=.148657681;const float ja=8./ca;const vec3 ka=vec3(.0058,.0135,.0331)*ca;const float la=1.2/ca;const vec3 ma=vec3(.004)*ca;const vec3 na=ma/.9;const vec3 qa=vec3(.031586,.063477,.129883)*2.;\n#endif\n#ifdef _i\nconst float ca=3380.;const float da=3372./ca;const float ea=3485./ca;const float ga=ea-ba;const float ia=.260429152;const float ja=11.1/ca;const vec3 ka=vec3(9.53e-5,.0002218,.000544)*ca;const float la=14./ca;const vec3 ma=vec3(.02,.0159,.0118)*.33*ca;const vec3 na=ma/.8;const vec3 qa=vec3(.19873,.163208,.127075);\n#endif\n#ifdef _j\nconst float ca=6052.;const float da=6050./ca;const float ea=6120./ca;const float ga=ea-ba;const float ia=.1525;const float ja=15.9/ca;const vec3 ka=vec3(.0028,.000535,7.31e-5)*ca;const float la=1.2/ca;const vec3 ma=vec3(.04)*ca;const vec3 na=ma/.9;const vec3 qa=vec3(.29873,.163208,.127075)*2.;\n#endif\n#ifdef _k\nconst float ca=1187.;const float da=1186./ca;const float ea=1247./ca;const float ga=ea-ba;const float ia=.324;const float ja=45./ca;const vec3 ka=vec3(9.53e-6,2.218e-5,5.44e-5)*ca;const float la=1./ca;const vec3 ma=vec3(.02,.0159,.0118)*.33*ca;const vec3 na=ma/.2;const vec3 qa=vec3(.19873,.163208,.127075);\n#endif\nconst float ta=da+1e-7;const vec3 ua=(ka*ja+na*la)/(ja+la);const float va=64.;const float wa=64.;uniform sampler2D a,b,c;uniform vec4 e;vec2 pb(float La,float Ma){const vec2 Na=vec2(8,128);const vec2 Oa=vec2(.5)/Na;const vec2 Pa=(Na-vec2(1))/Na;const float Qa=.06868;const vec2 Ra=vec2(1./ga,1./1.2);const float Sa=Qa*Ra.x;const vec2 Ta=Ra*Pa;const vec2 Ua=vec2(-ba,.2)*Ra;const vec2 Va=vec2(0,Qa*(1.+Ua.x))*Ta;const vec2 Wa=Oa+Ua*Pa+Va;return vec2(La,La*Sa+Ma)*Ta+Wa;}vec4 qb(float La,float Ma){return texture2D(a,pb(La,Ma));}vec2 rb(float La,float Ma){const vec2 Na=vec2(64,16);const vec2 Oa=vec2(.5)/Na;const vec2 Pa=(Na-vec2(1))/Na;const vec2 Qa=vec2(1./1.2,1./ga);const vec2 Ra=Qa*Pa;const vec2 Sa=vec2(.2,-ba)*Qa;const vec2 Ta=Oa+Sa*Pa;return vec2(Ma,La)*Ra+Ta;}vec3 sb(float La,float Ma){vec3 Na=texture2D(b,rb(La,Ma)).rgb;return Na*Na*qa;}vec3 tb(vec3 La,float f){La=La*f;\n#ifdef _h\nLa=vec3(1)-exp(-La);\n#else\nLa=vec3(1)-exp(-(sqrt(La)+La)*(1./1.8));\n#endif\nreturn La;}vec3 ub(vec3 La,float f){float Ma=1./f;\n#ifdef _h\nreturn log(vec3(1)-La)*-Ma;\n#else\nLa=-1.*log(vec3(1)-La)*1.8;La=(vec3(1)-sqrt(vec3(1)+4.*La))*.5;return La*La*Ma;\n#endif\n}float vb(float La,float Ma,float Na){return Na<La?La+(1./((La-Na)*(1./Ma)+1.)-1.)*Ma:Na;}vec2 wb(float La,float Ma,float Na,out float Oa){Oa=Ma+sqrt(Ma*Ma+La*La-1.);float Pa,Qa;Pa=vb(-.15,.1,Na-Oa);Qa=max(Pa+1e-6,min(1.,Na+Oa));return vec2(Pa,Qa);}vec2 xb(float La,float Ma,float Na){const float Oa=ba*ba;const float Pa=(ea+ba)*.5;const float Qa=(ea-ba)*.5;const float Ra=Qa/(.05*ba);const vec4 Sa=vec4(Pa,Ra*Ra,1.-Ra*Ra,Qa*Qa);const float Ta=da*da;const float Ua=(ea+da)*.5;const float Va=(ea-da)*.5;const float Wa=Va/(.05*da);const vec4 Xa=vec4(Ua,Wa*Wa,1.-Wa*Wa,Va*Va);\n#if defined(_i)||defined(_j)||defined(_k)\nconst float Ya=Ta;const vec4 Za=Xa;\n#else\nfloat Ya=e.x>=ba?Oa:Ta;vec4 Za=e.x>=ba?Sa:Xa;\n#endif\nfloat ab,bb,cb,db,eb,fb,gb;ab=La-Za.x;bb=Za.y+Ma*Ma*Za.z;cb=ab*Ma;db=ab*ab-Za.w;eb=max((-cb+sqrt(cb*cb-bb*db))/bb,1e-6);Na=min(Na,-sqrt(La*La-Ya)-.002);fb=Na*Na-La*La+Ya;gb=-Na-sqrt(fb);return eb<gb?vec2(eb,gb):vec2(gb,eb);}float Ab(float La){return La==0.?0.:(1.-sqrt(1.-La*La))/La;}float Bb(float La,float Ma){const float Na=.5/wa;const float Oa=ia;float Pa,Qa,Ra,Sa,Ta,Va;Pa=min(La,ea);Qa=Pa*Pa-da*da;Ra=sqrt(Qa);Sa=Pa*Ma;Ta=Sa*Sa-Qa;vec2 Ua=Sa<-Ra?vec2(-1.,0):vec2(1);Va=(sqrt(Ta+Oa*Oa*Ua.y)-Sa*Ua.x)/(Ra+Oa*Ua.y);return .5+Na*Ua.x+Va*(.5-2.*Na);}float Cb(float La,float Ma,float Na,float Oa,float Pa){const float Qa=.5*(1.-1./va);const float Ra=.5/va+Qa;float Sa,Ta;Sa=Pa;Ta=La*(1./ea);if(Ta>1.){float Ua,Wa;vec2 Va=wb(Ta,Ma,Ta*Na,Ua);Wa=(Oa-Va.x)/(Va.y-Va.x);Sa=clamp(Wa*2.-1.,-1.,1.);}return Ab(Sa)*Qa+Ra;}float Db(float La,float Ma);vec3 Eb(float La,float Ma,float Na,float Oa,float f,out vec3 Pa){float Qa,Ra,Sa,Ta;Qa=max(ta,e.x);Ra=e.y;Sa=Cb(Qa,Ma,Ra,Na,Oa);Ta=Bb(Qa,Ma);vec4 Ua=texture2D(c,vec2(Sa,Ta));\n#ifdef _g\nvec4 Va=Ua;\n#else\nvec4 Va=vec4(ub(Ua.rgb,f),log(Ua.a));\n#endif\nVa*=Db(La,Ma);Pa=vec3(exp(ua/ua.r*Va.a));return Va.rgb;}vec3 Eb(float La,float Ma,float Na,float Oa,float Pa,float Qa,float f,out vec3 Ra){float Sa,Ta,Ua,Va;Sa=max(ta,e.x);Ta=e.y;Ua=Cb(Sa,Ma,Ta,Oa,Pa);Va=Bb(Sa,Ma)*.5;vec4 Wa,Xa;Wa=texture2D(c,vec2(Ua,Va));Xa=texture2D(c,vec2(Ua,Va+.5));vec2 Ya,Za;Ya=xb(La,Ma,Na);Za=vec2(Qa/Ya.x,(min(Ya.y,Qa)-Ya.x)/max(Ya.y-Ya.x,1e-6));Za=Za.x<1.?vec2(Za.x,0):vec2(1.-Za.y,Za.y);Za*=Db(La,Ma);\n#ifdef _g\nfloat ab=dot(vec2(Wa.a,Xa.a),Za);\n#else\nfloat ab=dot(log(vec2(Wa.a,Xa.a)),Za);\n#endif\nRa=vec3(exp(ua/ua.r*ab));\n#ifdef _g\nvec3 bb,cb;bb=Wa.rgb;cb=Xa.rgb;\n#else\nvec3 bb,cb;bb=ub(Wa.rgb,f);cb=ub(Xa.rgb,f);\n#endif\nreturn bb*Za.x+cb*Za.y;}void Fb(vec3 U,vec3 q,vec3 V,float f,out vec3 La,out vec3 Ma){vec3 Na,Oa,Ta;Na=q-U;Oa=normalize(Na);float Pa,Qa,Ra,Sa;Pa=e.x;Qa=dot(U,Oa);Ra=dot(U,V);Sa=dot(Oa,V);if(Pa>ea){const float Ta=ea*ea;float Ua,Va;Ua=Qa*Qa-Pa*Pa+Ta;Va=-Qa-sqrt(Ua);Pa=ea;Qa+=Va;Ra+=Va*Sa;}\n#ifdef _f\nvec3 Ua=Eb(Pa,Qa/Pa,Ra/Pa,Sa,f,Ta);\n#else\nvec3 Ua=Eb(Pa,Qa/Pa,Qa,Ra/Pa,Sa,length(Na.xyz),f,Ta);\n#endif\nLa=Ta;Ma=Ua;}vec3 Fb(vec3 La,vec3 U,vec3 q,vec3 V,float Ma,float f){vec3 Na,Oa,Pa;Fb(U,q,V,f,Na,Oa);Pa=La*Na+Oa*Ma;return tb(Pa,f);}vec3 Fb(vec3 La,vec3 U,vec3 q,vec3 V,float f){return Fb(La,U,q,V,1.,f);}vec3 Gb(vec3 La,vec3 Ma){return mix(La,Ma,e.w);}uniform float f,g;float Db(float La,float Ma){const float Na=da*da;float Oa,Pa,Qa,Ra;Oa=e[2];Pa=Oa*(1./1.45e7);Qa=(1.+Ma)/(1.-sqrt(1.-Na/(La*La)));Ra=clamp(max(Pa,Qa),0.,1.);return pow(Ra,g);}\n#ifdef _s\nconst vec3 Fa=vec3(.00392,.01568,.04705);const float Ja=.016584;float Hb(float La,float Ma){float Na=1.-La;\n#ifdef _u\nfloat Oa,Pa,Qa,Ra;Oa=sqrt(Ma);Pa=Ma*sqrt(Oa);Qa=pow(Na,5.*exp(-2.69*Oa));Ra=1.+22.7*Pa;return Qa/Ra;\n#else\nfloat Sa=Na*Na;return Sa*Sa*Na;\n#endif\n}float Ib(vec3 La,vec3 Ma,float Na,vec3 Oa,float Pa){vec3 Qa=normalize(Oa+La);float Ra,Ya;Ra=dot(Qa,Ma);\n#ifdef _t\nconst float Sa=.02/(4.*Z);float Ta=Sa*Pa;\n#else\nfloat Ua,Va,Wa,Ta;Ua=1.-dot(La,Qa);Va=Ua*Ua;Wa=.02+.98*Va*Va*Ua;const float Xa=1./(4.*Z);Ta=Wa*Xa*Pa;\n#endif\nYa=exp(-2.*Pa*(1.-Ra))*Ta;\n#ifdef _v\nfloat Za,ab;Za=max(dot(Oa,Ma),.01);ab=max(Na,.01);return Ya*sqrt(Za/ab);\n#else\nreturn Ya;\n#endif\n}void Jb(vec3 La,vec3 Ma,vec3 Na,float Oa,vec3 Pa,vec3 Qa,float Ra,out vec3 Sa,out vec3 Ta){float Ua,Va;Ua=dot(La,Ma);Va=Ib(La,Ma,Ua,Na,1./Oa)*Ra;\n#ifdef _t\nconst vec3 Wa=Fa/Z;Sa=Va*Pa;Ta=Wa*Qa;\n#else\nconst float Xa=1./Z;vec3 Ya,Za;Ya=vec3(Hb(Ua,Oa));Za=(1.-Ya)*Fa;Sa=Va*Pa;Ta=(Ya+Za)*Qa*Xa;\n#endif\n}vec3 Jb(vec3 La,vec3 Ma,vec3 Na,float Oa,vec3 Pa,vec3 Qa,float Ra){vec3 Sa,Ta;Jb(La,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta);return Sa+Ta;}\n#endif\n#ifdef _n\nuniform samplerCube I;uniform vec4 J;float Kb(vec3 q,vec3 La,out vec3 Ma){float Na,Sa;Na=J.x;\n#ifdef _w\nfloat Oa,Pa;Oa=Na-ba;Pa=Oa/dot(q,La);\n#else\nfloat Qa,Ra,Pa;Qa=dot(q,La);Ra=dot(q,q)-Na*Na;Pa=sqrt(Qa*Qa-Ra)-Qa;\n#endif\nMa=q+Pa*La;Sa=textureCube(I,Ma).g;Sa*=Sa;return Sa*J.w*J.y;}vec4 Lb(vec3 La,vec3 q,vec3 V,float Ka){vec3 Ma,Qa,Ra;float Na,Oa,Pa,Sa,Ta;Na=Kb(q,La,Ma);Oa=J.x;Pa=dot(normalize(Ma),V);Qa=qb(Oa,Pa).rgb*Ka;Ra=sb(Oa,Pa)*Ka;Ra=max(Ra,vec3(.004,.0046,.0067));Sa=J.z;Ta=.25+.75*max(Pa,0.);return vec4(Sa*(Qa*Ta+Ra),Na);}vec4 Lb(vec3 La,vec3 q,float Ma,vec3 Na,vec3 Oa){vec3 Pa;float Qa,Ra,Sa;Qa=Kb(q,La,Pa);Ra=J.z;Sa=.25+.75*max(Ma,0.);return vec4(Ra*(Na*Sa+Oa),Qa);}\n#endif\n#ifdef _p\nuniform float K;float Mb(vec3 La,vec3 Ma,vec4 Na,vec3 F){vec3 Oa=F-La;float Pa,Qa,Ra,Sa;Pa=dot(Oa,Ma);Qa=sqrt(dot(Oa,Oa)-Pa*Pa);Ra=Na.x+Pa*Na.y;Sa=Na.z+Pa*Na.w;return mix(1.,smoothstep(Ra,Sa,Qa),K);}\n#endif\n#ifdef _r\nuniform vec3 L;\n#endif\n#ifdef _s\nuniform float M,N;\n#endif\n#ifdef _m\nuniform samplerCube O;uniform float P;\n#endif\n#ifdef _p\nuniform vec3 Q,R;uniform vec4 S;float Ka;\n#endif\nvec3 Nb(vec3 La,vec3 U,vec3 q,vec3 Ma,vec3 V,float f){\n#ifdef _s\nconst vec3 Na=vec3(0,5,15)/255.;vec3 Oa=La+Na;vec2 Pa=Oa.bg-Oa.rr;bool Qa,Ra;Qa=all(greaterThan(vec2(.77,Oa.b),Oa.bg));Ra=all(greaterThan(Pa.rgr,vec3(Oa.b*.35,0,Pa.g*1.6666)));float Sa=all(bvec2(Qa,Ra))?N:0.;Sa*=step(dot(q.xz,vec2(.93,.37)),.98);\n#endif\nconst float Ta=.55/Z;vec3 Ua,Wa,ab,bb,eb,ib;Ua=La*La*Ta;\n#ifdef _s\nconst vec3 Va=1.7*Fa/Z;Ua=mix(Ua,Va,Sa);\n#endif\nWa=normalize(q);float Xa,Ya,Za,db;Xa=e[2];Ya=Xa<1e7?length(q):ba;Za=dot(Wa,V);ab=qb(Ya,Za).rgb;bb=sb(Ya,Za);\n#ifdef _p\nKa=Mb(Q,R,S,q);ab*=Ka;bb*=Ka;\n#endif\nconst float cb=.014;db=smoothstep(0.,.2,-Za);eb=max(bb,cb*db);\n#ifdef _o\nvec3 fb;float gb=Kb(q,V,fb);gb=1.-min(1.,3.*gb);\n#else\nconst float gb=1.;\n#endif\n#ifdef _q\nfloat hb=(dot(Ma,V)+Za)*.5;\n#else\nfloat hb=Za;\n#endif\nib=Ua*(max(hb,0.)*ab*gb+eb);\n#ifdef _r\n#ifdef _q\nhb=dot(Ma,L);\n#else\nhb=dot(Wa,L);\n#endif\nib+=Ua*cb*max(hb,0.);\n#endif\n#ifdef _s\nif(Sa>0.){vec3 jb,kb;jb=normalize(U-q);kb=Jb(jb,Wa,V,Ja,ab*gb,bb,1.);ib+=kb*M;}\n#endif\n#ifndef _l\nconst vec3 jb=vec3(.2126,.7152,.0722);const vec3 kb=vec3(.874,.874,2.622);float lb=dot(ib,jb);ib=mix(lb*kb,ib,1.-.75*db);\n#endif\nvec4 mb=vec4(0);\n#ifdef _n\nif(e.x>J.x){vec3 nb=normalize(U-q);\n#ifdef _w\nmb=Lb(nb,q,Za,ab,bb);\n#else\n#ifdef _p\nmb=Lb(nb,q,V,Ka);\n#else\nmb=Lb(nb,q,V,1.);\n#endif\n#endif\nib=mix(ib,mb.rgb,mb.a);}\n#endif\n#ifdef _m\nconst vec3 nb=vec3(.01,.01,.005)*6.;float ob=clamp(-Za*5.,0.,1.);ob*=max(1.-1.25*mb.a,0.);ib+=nb*textureCube(O,q).g*ob*P;\n#endif\n#ifdef _p\nreturn Fb(ib,U,q,V,Ka,f);\n#else\nreturn Fb(ib,U,q,V,1.,f);\n#endif\n}\n#endif\n#ifdef _d\nuniform vec4 T;vec3 Ob(vec4 r,sampler2D X){float La,Oa,Pa,Qa;La=3.141592653589793;vec3 Ma,Na,Sa;Ma=r.xyz/r.w;Na=normalize(Ma);Oa=atan(Na.x,Na.y)/(2.*La)+.5;Pa=acos(Na.z)/La;Qa=dot(Na,Ma);vec2 Ra=vec2(Oa,Pa);Sa=vec3(Ra*T.xy+T.zw,1)*Qa;return texture2DProj(X,Sa).rgb;}\n#endif\nvarying vec2 m;\n#ifdef _c\nvarying vec3 n;\n#endif\n#ifdef _b\nvarying float o;\n#endif\nvarying float p;\n#ifdef _a\nvarying vec3 q;\n#endif\n#ifdef _d\nvarying vec4 r;\n#endif\n#ifdef _a\nuniform vec3 U,V;\n#endif\nuniform sampler2D W;\n#ifdef _d\nuniform sampler2D X;uniform float Y;\n#endif\nvoid main(){vec3 La=texture2D(W,m).rgb;\n#ifdef _c\nvec3 H=dot(n,n)>1e-6?normalize(n):vec3(0);\n#endif\n#ifdef _a\n#ifdef _c\nvec3 Ma=dot(H,vec3(1))!=0.?H:normalize(q);\n#else\nvec3 Ma=normalize(q);\n#endif\nvec3 Na=Nb(La,U,q,Ma,V,f);La=Gb(La,Na);\n#endif\n#ifdef _d\nvec3 Oa=Ob(r,X);La=mix(La,Oa,Y);\n#endif\n#ifdef _b\ngl_FragColor=vec4(La,o);\n#else\ngl_FragColor=vec4(La,1);\n#endif\n}");
        this.R = new Qzg(this);
        this.attributes = new Rzg(this)
      }
      ;
      Vzg = function (a) {
        this.La = new _.UJ("a", a);
        this.nb = new _.UJ("b", a);
        this.Ma = new _.UJ("c", a);
        this.Eb = new _.UJ("d", a);
        this.ha = new _.XJ("e", a);
        this.Vm = new _.VJ("f", a);
        this.Aa = new _.YJ("l", a);
        this.Ca = new _.YJ("m", a);
        this.Ja = new Uzg("n", a);
        this.wa = new _.YJ("o", a);
        this.Ba = new Uzg("p", a);
        this.Ga = new _.YJ("q", a);
        this.Oa = new _.UJ("r", a);
        this.T = new _.XJ("s", a);
        this.ra = new _.VJ("t", a);
        this.hb = new _.XJ("u", a);
        this.R = new _.WJ("v", a);
        this.va = new _.WJ("w", a);
        this.hc = new _.VJ("x", a);
        this.Fb = new _.WJ("A", a);
        this.W = new _.WJ("B", a);
        this.V = new _.WJ("C", a);
        this.$ = new _.XJ("D", a);
        this.Wb = new _.UJ("E", a);
        this.Ob = new _.VJ("F", a);
        this.Xa = new _.UJ("G", a);
        this.Pa = new _.VJ("H", a)
      }
      ;
      Wzg = function (a) {
        this.H = new _.RJ("k", a)
      }
      ;
      Yzg = function (a, b) {
        b = b || new Xzg;
        b = (b.$ ? jzg : "") + (b.T ? kzg : "") + (b.R ? lzg : "") + (b.W ? mzg : "") + (b.ra ? nzg : "") + (b.V ? ozg : "") + (b.ha ? "#define _g 1\n" : "") + (b.Ba ? "#define _h 1\n" : "") + (b.ta ? "#define _i 1\n" : "") + (b.Ja ? "#define _j 1\n" : "") + (b.va ? "#define _k 1\n" : "") + (b.Aa ? "#define _l 1\n" : "") + (b.wa ? "#define _m 1\n" : "") + (b.Ca ? "#define _n 1\n" : "");
        _.QJ.call(this, a, b + "#if !defined(_k)&&!defined(_l)&&!defined(_m)\n#endif\n#ifdef _k\n#endif\n#ifdef _l\n#endif\n#ifdef _m\n#endif\nvarying vec3 g,h;\n#ifdef _d\nvarying vec3 i;\n#endif\n#ifdef _g\nvarying vec4 j;\n#endif\nattribute vec4 k;uniform mat4 l,m;uniform mat3 n;\n#ifdef _d\nuniform mat4 o;uniform mat3 p;\n#endif\n#ifdef _g\nuniform mat4 q;\n#endif\nvoid main(){\n#ifdef _d\nvec4 S=o*vec4(k.xy,0,1);S.xyz/=abs(S.w);\n#else\nvec4 S=k;\n#endif\ngl_Position=vec4(S.xy,.99999,1);vec3 T=(l*vec4(S.xyz,1)).xyz;g=(m*vec4(T,0)).xyz;h=n*g;\n#ifdef _d\ni=p*g;\n#endif\n#ifdef _g\nj=q*vec4(S.xyz,1);\n#endif\n}", b + "precision highp float;const float K=1.;\n#if !defined(_k)&&!defined(_l)&&!defined(_m)\nconst float L=6360.;const float M=6350./L;const float N=6420./L;const float O=N;const float P=N-K;const float R=.148657681;const float S=8./L;const vec3 T=vec3(.0058,.0135,.0331)*L;const float U=1.2/L;const vec3 V=vec3(.004)*L;const vec3 W=V/.9;const vec3 Z=vec3(.031586,.063477,.129883)*2.;\n#endif\n#ifdef _k\nconst float L=3380.;const float M=3372./L;const float N=3485./L;const float O=N;const float P=N-K;const float R=.260429152;const float S=11.1/L;const vec3 T=vec3(9.53e-5,.0002218,.000544)*L;const float U=14./L;const vec3 V=vec3(.02,.0159,.0118)*.33*L;const vec3 W=V/.8;const vec3 Z=vec3(.19873,.163208,.127075);\n#endif\n#ifdef _l\nconst float L=6052.;const float M=6050./L;const float N=6120./L;const float O=N;const float P=N-K;const float R=.1525;const float S=15.9/L;const vec3 T=vec3(.0028,.000535,7.31e-5)*L;const float U=1.2/L;const vec3 V=vec3(.04)*L;const vec3 W=V/.9;const vec3 Z=vec3(.29873,.163208,.127075)*2.;\n#endif\n#ifdef _m\nconst float L=1187.;const float M=1186./L;const float N=1247./L;const float O=N;const float P=N-K;const float R=.324;const float S=45./L;const vec3 T=vec3(9.53e-6,2.218e-5,5.44e-5)*L;const float U=1./L;const vec3 V=vec3(.02,.0159,.0118)*.33*L;const vec3 W=V/.2;const vec3 Z=vec3(.19873,.163208,.127075);\n#endif\nconst float ca=M+1e-7;const vec3 da=(T*S+W*U)/(S+U);const float ea=64.;const float fa=64.;uniform sampler2D a,b,c,d;uniform vec4 e;vec2 Ka(float ha,float ia){const vec2 ja=vec2(8,128);const vec2 ka=vec2(.5)/ja;const vec2 la=(ja-vec2(1))/ja;const float ma=.06868;const vec2 na=vec2(1./P,1./1.2);const float oa=ma*na.x;const vec2 pa=na*la;const vec2 qa=vec2(-K,.2)*na;const vec2 ra=vec2(0,ma*(1.+qa.x))*pa;const vec2 sa=ka+qa*la+ra;return vec2(ha,ha*oa+ia)*pa+sa;}vec4 La(float ha,float ia){return texture2D(a,Ka(ha,ia));}vec2 Ma(float ha,float ia){const vec2 ja=vec2(64,16);const vec2 ka=vec2(.5)/ja;const vec2 la=(ja-vec2(1))/ja;const vec2 ma=vec2(1./1.2,1./P);const vec2 na=ma*la;const vec2 oa=vec2(.2,-K)*ma;const vec2 pa=ka+oa*la;return vec2(ia,ha)*na+pa;}vec3 Na(float ha,float ia){vec3 ja=texture2D(b,Ma(ha,ia)).rgb;return ja*ja*Z;}vec3 Oa(vec3 h){vec3 ha=vec3(0);if(h.z>0.){vec3 ia,ja;ia=texture2D(d,vec2(.5)+h.xy*4.).rgb;ja=ia*ia;ha=ja*ja;}return ha;}vec3 Pa(vec3 ha,float f){ha=ha*f;\n#ifdef _j\nha=vec3(1)-exp(-ha);\n#else\nha=vec3(1)-exp(-(sqrt(ha)+ha)*(1./1.8));\n#endif\nreturn ha;}vec3 Qa(vec3 ha,float f){float ia=1./f;\n#ifdef _j\nreturn log(vec3(1)-ha)*-ia;\n#else\nha=-1.*log(vec3(1)-ha)*1.8;ha=(vec3(1)-sqrt(vec3(1)+4.*ha))*.5;return ha*ha*ia;\n#endif\n}float Ra(float ha,float ia,float ja){return ja<ha?ha+(1./((ha-ja)*(1./ia)+1.)-1.)*ia:ja;}vec2 Sa(float ha,float ia,float ja,out float ka){ka=ia+sqrt(ia*ia+ha*ha-1.);float la,ma;la=Ra(-.15,.1,ja-ka);ma=max(la+1e-6,min(1.,ja+ka));return vec2(la,ma);}vec2 Ta(float ha,float ia,float ja){const float ka=K*K;const float la=(N+K)*.5;const float ma=(N-K)*.5;const float na=ma/(.05*K);const vec4 oa=vec4(la,na*na,1.-na*na,ma*ma);const float pa=M*M;const float qa=(N+M)*.5;const float ra=(N-M)*.5;const float sa=ra/(.05*M);const vec4 ta=vec4(qa,sa*sa,1.-sa*sa,ra*ra);\n#if defined(_k)||defined(_l)||defined(_m)\nconst float ua=pa;const vec4 va=ta;\n#else\nfloat ua=e.x>=K?ka:pa;vec4 va=e.x>=K?oa:ta;\n#endif\nfloat wa,xa,Aa,Ba,Ca,Da,Ea;wa=ha-va.x;xa=va.y+ia*ia*va.z;Aa=wa*ia;Ba=wa*wa-va.w;Ca=max((-Aa+sqrt(Aa*Aa-xa*Ba))/xa,1e-6);ja=min(ja,-sqrt(ha*ha-ua)-.002);Da=ja*ja-ha*ha+ua;Ea=-ja-sqrt(Da);return Ca<Ea?vec2(Ca,Ea):vec2(Ea,Ca);}float Ua(float ha){return ha==0.?0.:(1.-sqrt(1.-ha*ha))/ha;}float Va(float ha,float ia){const float ja=.5/fa;const float ka=R;float la,ma,na,oa,pa,ra;la=min(ha,N);ma=la*la-M*M;na=sqrt(ma);oa=la*ia;pa=oa*oa-ma;vec2 qa=oa<-na?vec2(-1.,0):vec2(1);ra=(sqrt(pa+ka*ka*qa.y)-oa*qa.x)/(na+ka*qa.y);return .5+ja*qa.x+ra*(.5-2.*ja);}float Wa(float ha,float ia,float ja,float ka,float la){const float ma=.5*(1.-1./ea);const float na=.5/ea+ma;float oa,pa;oa=la;pa=ha*(1./N);if(pa>1.){float qa,sa;vec2 ra=Sa(pa,ia,pa*ja,qa);sa=(ka-ra.x)/(ra.y-ra.x);oa=clamp(sa*2.-1.,-1.,1.);}return Ua(oa)*ma+na;}float Xa(float ha,float ia);vec3 Ya(float ha,float ia,float ja,float ka,float f,out vec3 la){float ma,na,oa,pa;ma=max(ca,e.x);na=e.y;oa=Wa(ma,ia,na,ja,ka);pa=Va(ma,ia);vec4 qa=texture2D(c,vec2(oa,pa));\n#ifdef _i\nvec4 ra=qa;\n#else\nvec4 ra=vec4(Qa(qa.rgb,f),log(qa.a));\n#endif\nra*=Xa(ha,ia);la=vec3(exp(da/da.r*ra.a));return ra.rgb;}vec3 Ya(float ha,float ia,float ja,float ka,float la,float ma,float f,out vec3 na){float oa,pa,qa,ra;oa=max(ca,e.x);pa=e.y;qa=Wa(oa,ia,pa,ka,la);ra=Va(oa,ia)*.5;vec4 sa,ta;sa=texture2D(c,vec2(qa,ra));ta=texture2D(c,vec2(qa,ra+.5));vec2 ua,va;ua=Ta(ha,ia,ja);va=vec2(ma/ua.x,(min(ua.y,ma)-ua.x)/max(ua.y-ua.x,1e-6));va=va.x<1.?vec2(va.x,0):vec2(1.-va.y,va.y);va*=Xa(ha,ia);\n#ifdef _i\nfloat wa=dot(vec2(sa.a,ta.a),va);\n#else\nfloat wa=dot(log(vec2(sa.a,ta.a)),va);\n#endif\nna=vec3(exp(da/da.r*wa));\n#ifdef _i\nvec3 xa,Aa;xa=sa.rgb;Aa=ta.rgb;\n#else\nvec3 xa,Aa;xa=Qa(sa.rgb,f);Aa=Qa(ta.rgb,f);\n#endif\nreturn xa*va.x+Aa*va.y;}\n#ifdef _a\nuniform samplerCube r;uniform vec4 s;float Za(vec3 ha,vec3 ia,out vec3 ja){float ka,pa;ka=s.x;\n#ifdef _n\nfloat la,ma;la=ka-K;ma=la/dot(ha,ia);\n#else\nfloat na,oa,ma;na=dot(ha,ia);oa=dot(ha,ha)-ka*ka;ma=sqrt(na*na-oa)-na;\n#endif\nja=ha+ma*ia;pa=textureCube(r,ja).g;pa*=pa;return pa*s.w*s.y;}vec4 ab(vec3 g,vec3 ha,vec3 w,float ia){vec3 ja,na,oa;float ka,la,ma,pa,qa;ka=Za(ha,g,ja);la=s.x;ma=dot(normalize(ja),w);na=La(la,ma).rgb*ia;oa=Na(la,ma)*ia;oa=max(oa,vec3(.004,.0046,.0067));pa=s.z;qa=.25+.75*max(ma,0.);return vec4(pa*(na*qa+oa),ka);}vec4 ab(vec3 g,vec3 ha,float ia,vec3 ja,vec3 ka){vec3 la;float ma,na,oa;ma=Za(ha,g,la);na=s.z;oa=.25+.75*max(ia,0.);return vec4(na*(ja*oa+ka),ma);}\n#endif\n#ifdef _b\nuniform float t;float bb(vec3 ha,vec3 ia,vec4 ja,vec3 ka){vec3 la=ka-ha;float ma,na,oa,pa;ma=dot(la,ia);na=sqrt(dot(la,la)-ma*ma);oa=ja.x+ma*ja.y;pa=ja.z+ma*ja.w;return mix(1.,smoothstep(oa,pa,na),t);}\n#endif\n#ifdef _g\nuniform vec4 u;vec3 cb(vec4 j,sampler2D G){float ha,ka,la,ma;ha=3.141592653589793;vec3 ia,ja,oa;ia=j.xyz/j.w;ja=normalize(ia);ka=atan(ja.x,ja.y)/(2.*ha)+.5;la=acos(ja.z)/ha;ma=dot(ja,ia);vec2 na=vec2(ka,la);oa=vec3(na*u.xy+u.zw,1)*ma;return texture2DProj(G,oa).rgb;}\n#endif\nuniform float f,x;varying vec3 g,h;\n#ifdef _d\nvarying vec3 i;\n#endif\n#ifdef _g\nvarying vec4 j;\n#endif\nfloat Xa(float ha,float ia){return 1.;}uniform vec3 v,w;\n#ifdef _c\nuniform vec3 A;\n#endif\n#ifdef _b\nuniform vec3 B,C;uniform vec4 D;\n#endif\n#ifdef _d\nuniform samplerCube E;uniform float F;\n#endif\nfloat db(float ha,float ia,float ja){return clamp((ja-ha)/(ia-ha),0.,1.);}\n#ifdef _g\nuniform sampler2D G;uniform float H;\n#endif\nvoid main(){vec3 ha,ia,pa,Fa,Ga;ha=v;ia=normalize(g);float ja,ka,la,ma,na,oa,wa,xa,Aa,Ba;ja=dot(ha,ha);ka=-dot(ha,ia);la=ka*ka-ja+O*O;ma=sqrt(la);na=ka-ma;oa=ka+ma;pa=Oa(h)*x;\n#ifdef _d\nvec3 qa=textureCube(E,i).rgb;qa*=qa;qa*=qa;qa*=F;\n#else\nvec3 qa=vec3(0);\n#endif\n#ifdef _c\nconst float ra=1737./6371.;vec3 sa=ha-A;float ta,ua,va;ta=dot(sa,ia);ua=dot(sa,sa)-ra*ra*1.3;va=ta*ta-ua;if(va>0.){float wa=-ta-sqrt(va);if(wa>0.){vec3 xa=(sa+wa*ia)*(1./ra);float Aa,Ba;Aa=dot(xa,w);Ba=db(-.2,.2,Aa)*.1;Ba*=db(0.,ra*ra*.5,va);pa=mix(pa,vec3(Ba),x);qa*=1.-x;}}\n#endif\nif(step(la,0.)+step(oa,0.)>.5){\n#ifdef _b\npa*=bb(B,C,D,ha);\n#endif\nvec3 wa=pa+qa;gl_FragColor=vec4(Pa(wa,f),0);return;}if(na>0.){ha+=na*ia;ja=O*O;ka-=na;}wa=sqrt(ja);xa=-ka/wa;Aa=dot(ha,w)/wa;Ba=dot(ia,w);\n#ifdef _f\nvec3 Ca,Da;Da=Ya(wa,xa,Aa,Ba,f,Ca);\n#else\nvec3 Ca,Da;Ca=vec3(1);Da=vec3(0);\n#endif\n#ifdef _b\nfloat Ea=bb(B,C,D,ha);pa*=Ea;Da*=Ea;\n#endif\nFa=pa+qa;\n#ifdef _a\nif(e.x<s.x){\n#ifdef _b\nvec4 Ga=ab(ia,ha,w,Ea);\n#else\nvec4 Ga=ab(ia,ha,w,1.);\n#endif\nfloat Ha=1.-dot(ha,ia);vec3 Ia=Da*Ha;Da=mix(Da,Ia,Ga.a);Fa=mix(Fa,Ga.rgb,Ga.a);}\n#endif\nGa=Da+Ca*Fa;\n#ifdef _e\ngl_FragColor=vec4(Pa(Ga,f)*e.w,0);\n#else\ngl_FragColor=vec4(Pa(Ga,f)*e.w,1);\n#endif\n#ifdef _g\nvec3 Ha=cb(j,G);gl_FragColor.rgb=mix(gl_FragColor.rgb,Ha,H);\n#endif\n}");
        this.R = new Vzg(this);
        this.attributes = new Wzg(this)
      }
      ;
      Zzg = function (a, b) {
        this.R = a;
        this.H = b
      }
      ;
      $zg = function () {
        this.V = (0,
          _.Uq)();
        this.W = _.hr();
        this.$ = _.RLb();
        this.H = new _.S_;
        this.H.setData([-1, 0, .05, .1, .13, .2, .4, .5, .6], [80, 80, 75, 60, 35, 25, 21, 20, 20]);
        this.R = _.hr();
        this.T = _.hr();
        this.ha = _.$J()
      }
      ;
      aAg = function () {
        this.R = _.ww();
        this.H = null;
        this.opacity = 0;
        this.T = _.Fw()
      }
      ;
      dAg = function (a, b, c, e, f, g, k, m) {
        this.T = a;
        this.Sc = m;
        this.Fb = b;
        this.H = c;
        this.Bb = null;
        this.V = _.Ew();
        this.Pa = _.Ew();
        this.Ba = _.hr();
        this.W = _.$J();
        this.Eb = _.ww();
        this.va = _.hr();
        this.Xa = _.hr();
        this.$ = _.uw();
        this.wa = _.hr();
        this.qc = new $zg;
        this.La = this.Ca = this.ha = 0;
        this.ra = {
          Vm: 0,
          VW: 0,
          WV: 0,
          yS: !1
        };
        this.wc = !1;
        this.Aa = g;
        this.Ja = k;
        a = new Ozg;
        a.T != g && (a.H = !0,
          a.T = +g);
        bAg(a, !1);
        cAg(a, !1);
        0 != a.R && (a.H = !0,
          a.R = 0);
        this.ta = [];
        this.ta[1] = new Pzg(this.T, a);
        bAg(a, !0);
        this.ta[3] = new Pzg(this.T, a);
        bAg(a, !1);
        cAg(a, !0);
        this.ta[2] = new Pzg(this.T, a);
        cAg(a, !1);
        1 != a.R && (a.H = !0,
          a.R = 1);
        this.ta[4] = new Pzg(this.T, a);
        this.Oc = [];
        this.wd = new Xzg;
        this.hb = e;
        this.Wb = f;
        this.Ga = -1;
        this.Gc = !1;
        this.Ma = _.ww();
        this.Oa = _.GJ();
        this.hc = new Float32Array(9);
        this.Hd = new Float32Array(9);
        this.Rc = _.Ew();
        this.Sd = _.Ew();
        this.Yd = _.Ew();
        this.ye = _.Ew();
        this.nb = _.hr();
        this.Ob = _.hr();
        this.he = _.hr();
        this.R = 1;
        this.ad = _.VMb
      }
      ;
      eAg = function (a, b) {
        this.R = a;
        this.H = b
      }
      ;
      fAg = function (a) {
        this.H = new _.YJ("b", a);
        this.color = new _.XJ("c", a)
      }
      ;
      gAg = function (a) {
        this.H = new _.RJ("a", a)
      }
      ;
      hAg = function (a) {
        _.QJ.call(this, a, "attribute vec3 a;uniform mat4 b;void main(){gl_PointSize=5.;gl_Position=b*vec4(a,1);}", "precision highp float;uniform vec4 c;void main(){gl_FragColor=c;}");
        this.R = new fAg(this);
        this.attributes = new gAg(this)
      }
      ;
      iAg = function (a) {
        this.H = new _.VJ("c", a);
        this.ha = new _.YJ("d", a);
        this.ra = new _.YJ("e", a);
        this.V = new _.YJ("f", a);
        this.$ = new _.YJ("g", a);
        this.W = new _.YJ("h", a);
        this.R = new _.WJ("i", a);
        this.Aa = new _.WJ("j", a);
        this.va = new _.VJ("k", a);
        this.ta = new _.VJ("m", a);
        this.wa = new _.UJ("n", a);
        this.T = new _.VJ("o", a)
      }
      ;
      jAg = function (a) {
        this.H = new _.RJ("l", a)
      }
      ;
      lAg = function (a, b) {
        b = (b || new kAg).H ? jzg : "";
        _.QJ.call(this, a, b + "float B(float n){float o,p,q,r,s,t;o=0.;if(n<-1.)o=-1.5707963267948966;if(n>1.)o=1.5707963267948966;if(abs(n)>1.){n=1./n;p=-n;}else p=n;q=n*n;r=q*q;s=.9999995317750965+.6667204227839472*q+.042433158192689474*r;t=1.+1.0000211065025444*q+.17613921289228224*r;return p*(s/t)+o;}float C(float n,float o){if(o==0.)if(n>0.)return 1.5707963267948966;else return 0.-1.5707963267948966;float p,q;p=abs(n/o);q=B(p);if(step(0.,o)*step(0.,n)>.5)return q;else if(step(o,0.)*step(0.,n)>.5)return 3.141592653589793-q;else if(step(o,0.)*step(n,0.)>.5)return q-3.141592653589793;else return 0.-q;}varying vec4 a;varying float b;precision highp float;uniform float c,k,m[8];uniform mat4 d,e,f,h;uniform vec3 i;\n#ifdef _a\n#endif\nattribute vec4 l;void main(){float n=m[int(floor(l.w*255.+.5))]*c;if(n>0.){vec4 o,v,w;o=vec4(floor(l.xyz*255.+.5),1);gl_Position=d*o;float p,q,r,s,t,u,x,A;p=gl_Position.z/gl_Position.w;q=f[2][2];r=f[3][2];s=f[2][3];t=q-s*p;u=-(s*r)/(t*t);gl_Position.z+=k*gl_Position.w/u;b=smoothstep(0.,2e2,gl_Position.w)*n;v=e*o;w[0]=C(v.y,v.x);w[1]=C(v.z,length(v.xy));w[2]=0.;w[3]=1.;x=step(0.,-i[1]);A=step(0.,-i[0]);if(w[0]<=0.)w[0]+=A*(1.-x)*2.*3.141592653589793;if(w[0]>=0.)w[0]-=A*x*2.*3.141592653589793;a=h*w;}else gl_Position=vec4(0,0,0,1);}", b + "precision highp float;varying vec4 a;varying float b;uniform sampler2D n;uniform float o;void main(){vec2 p,r,s;p=a.xy/a.w;float q,t;q=o;r=clamp(p*q,0.,1.);s=clamp((vec2(1)-p)*q,0.,1.);t=r.x*r.y*s.x*s.y*b;vec4 u=texture2D(n,p);gl_FragColor=u*u.w*t;}");
        this.R = new iAg(this);
        this.attributes = new jAg(this)
      }
      ;
      mAg = function (a) {
        this.H = new _.VJ("e", a);
        this.ha = new _.YJ("f", a);
        this.$ = new _.YJ("g", a);
        this.ra = new _.YJ("h", a);
        this.W = new _.YJ("i", a);
        this.V = new _.YJ("j", a);
        this.R = new _.WJ("k", a);
        this.Aa = new _.WJ("l", a);
        this.Ba = new _.VJ("m", a);
        this.ta = new _.VJ("o", a);
        this.wa = new _.UJ("p", a);
        this.Ca = new _.UJ("q", a);
        this.T = new _.VJ("r", a)
      }
      ;
      nAg = function (a) {
        this.H = new _.RJ("n", a)
      }
      ;
      pAg = function (a, b) {
        b = b || new oAg;
        b = (b.T ? jzg : "") + (b.V ? kzg : "") + (b.R ? lzg : "");
        _.QJ.call(this, a, b + "float K(float p){float q,r,s,t,u,v;q=0.;if(p<-1.)q=-1.5707963267948966;if(p>1.)q=1.5707963267948966;if(abs(p)>1.){p=1./p;r=-p;}else r=p;s=p*p;t=s*s;u=.9999995317750965+.6667204227839472*s+.042433158192689474*t;v=1.+1.0000211065025444*s+.17613921289228224*t;return r*(u/v)+q;}float L(float p,float q){if(q==0.)if(p>0.)return 1.5707963267948966;else return 0.-1.5707963267948966;float r,s;r=abs(p/q);s=K(r);if(step(0.,q)*step(0.,p)>.5)return s;else if(step(q,0.)*step(0.,p)>.5)return 3.141592653589793-s;else if(step(q,0.)*step(p,0.)>.5)return s-3.141592653589793;else return 0.-s;}varying vec2 a;varying float b;\n#ifdef _a\nvarying float c;\n#endif\n#ifdef _c\nvarying float d;\n#endif\n#if defined(_a)&&defined(_b)\n#error Unsupported options in node-overlay-shader.glsl\n#endif\nprecision highp float;uniform float e,o[8];uniform mat4 f,j;\n#ifdef _b\nuniform mat4 g;\n#else\nuniform mat4 h,i;\n#endif\nuniform vec3 k;\n#ifdef _a\nuniform vec3 l;\n#endif\n#ifdef _c\nuniform float m;\n#endif\nattribute vec4 n;void main(){float p,q;p=o[int(floor(n.w*255.+.5))];q=p*e;bool r=q>0.;\n#ifdef _c\nfloat s=p*m;r=r||s>0.;\n#endif\nif(r){vec4 t,D;t=vec4(floor(n.xyz*255.+.5),1);gl_Position=f*t;float u,v,w,x,A,B,C;u=gl_Position.z/gl_Position.w;v=j[2][2];w=j[3][2];x=j[2][3];A=v-x*u;B=-(x*w)/(A*A);gl_Position.z+=50.*gl_Position.w/B;C=smoothstep(0.,2e2,gl_Position.w);b=C*q;\n#ifdef _c\nd=C*s;\n#endif\n#ifdef _b\nD=g*t;\n#else\nvec4 E,H;E=h*t;vec3 F=E.xyz/length(E.xyz);float G,I,J;G=F.z;H[0]=L(E.y,E.x);H[1]=.5*log((1.+G)/(1.-G));H[2]=0.;H[3]=1.;I=step(0.,-k[1]);J=step(0.,-k[0]);if(H[0]<=0.)H[0]+=J*(1.-I)*2.*3.141592653589793;if(H[0]>=0.)H[0]-=J*I*2.*3.141592653589793;D=i*H;\n#endif\na=D.xy/D.w;\n#ifdef _a\nc=dot(F,l);\n#endif\n}else gl_Position=vec4(0,0,0,1);}", b + "precision highp float;varying vec2 a;varying float b;\n#ifdef _a\nvarying float c;\n#endif\n#ifdef _c\nvarying float d;\n#endif\n#if defined(_a)&&defined(_b)\n#error Unsupported options in node-overlay-shader.glsl\n#endif\nuniform sampler2D p;\n#ifdef _c\nuniform sampler2D q;\n#endif\nuniform float r;void main(){float s,v;s=r;vec2 t,u;t=clamp(a*s,0.,1.);u=clamp((vec2(1)-a)*s,0.,1.);v=t.x*t.y*u.x*u.y;\n#ifdef _a\nv*=clamp(c,.1,1.);\n#endif\ngl_FragColor=texture2D(p,a)*v*b;\n#ifdef _c\ngl_FragColor+=texture2D(q,a)*v*d;\n#endif\n}");
        this.R = new mAg(this);
        this.attributes = new nAg(this)
      }
      ;
      qAg = function (a) {
        this.H = a
      }
      ;
      rAg = function (a) {
        this.H = new _.YJ("d", a);
        this.R = new _.VJ("e", a)
      }
      ;
      sAg = function (a) {
        this.H = new _.RJ("b", a);
        this.alpha = new _.RJ("c", a)
      }
      ;
      tAg = function (a) {
        _.QJ.call(this, a, "varying float a;attribute vec4 b;attribute float c;uniform mat4 d;uniform float e[8];void main(){float f=e[int(floor(b.w*255.+.5))];if(f>0.){a=c;gl_Position=d*vec4(floor(b.xyz*255.+.5),1);}else gl_Position=vec4(0);}", "precision highp float;varying float a;void main(){gl_FragColor=vec4(a,1.-a,0,1);}");
        this.R = new rAg(this);
        this.attributes = new sAg(this)
      }
      ;
      uAg = function (a, b, c, e, f, g, k) {
        this.T = a;
        this.Oa = k;
        this.wc = _.uw();
        this.R = _.GJ();
        this.$ = _.ww();
        this.Ja = !1;
        a.Yz() && (this.Ja = !0);
        var m = new _.qMb(a, b, c, e, f, {
          CRa: "//mw1.google.com/mw-weather/clouds-cubemap/root.json",
          DRa: 600
        }, 6409)
          , q = new _.qMb(a, b, c, e, f, "//mw1.google.com/mw-weather/static/city-lights-cubemap/", 6409, -1);
        b = new _.qMb(a, b, c, e, f, "//mw1.google.com/mw-weather/static/stars-cubemap-v2/", 6407);
        this.V = g;
        this.hb = a.x3();
        this.W = new aAg;
        this.H = new dAg(a, e, this.V, m, b, this.hb, this.W, k);
        this.ha = new Zzg(this.V, m);
        this.Ga = new qAg(this.V);
        this.ra = new eAg(this.V, q);
        this.La = _.ww();
        _.BJ(this.La);
        this.Ba = this.Aa = this.nb = null;
        this.ta = new hAg(a);
        this.Fb = [];
        this.qc = new Szg;
        this.Eb = [];
        this.hc = new oAg;
        this.wa = [];
        this.Gc = new tAg(a);
        new lAg(a);
        this.Ma = 1;
        this.va = [1];
        this.Ca = this.Pa = this.Ob = !1;
        this.Wb = new Float32Array(8);
        this.Xa = !0
      }
      ;
      wAg = function (a, b) {
        var c = this;
        this.W = a;
        this.V = b;
        this.H = [];
        this.R = [];
        this.T = function (a, b, g) {
          _.lC(a, b, 0, _.fNb);
          _.pw(_.fNb, 1.2, _.fNb);
          _.gNb[0] = -_.fNb[0];
          _.gNb[1] = -_.fNb[1];
          _.gNb[2] = -_.fNb[2];
          a = vAg(c.W, _.fNb, _.gNb, _.hNb || void 0, !0, 1);
          return 1 < a || 0 > a || _.hNb.H < g ? Infinity : 7645212 * (1 - a) - 6371010
        }
      }
      ;
      yAg = function (a, b) {
        this.R = a;
        this.T = b;
        this.H = new xAg
      }
      ;
      zAg = function (a) {
        this.R = Infinity;
        this.V = _.hr();
        this.T = _.hr();
        this.$ = null;
        this.ha = 0;
        this.W = 14;
        this.H = a ? new Uint8Array(50) : null
      }
      ;
      AAg = function () {
        this.R = [];
        this.H = 0
      }
      ;
      BAg = function (a, b, c, e, f, g) {
        this.T = a;
        a.T.push(this);
        this.Ba = b;
        this.ha = c;
        this.va = e;
        this.wa = e.H;
        this.Aa = f;
        this.W = {};
        this.H = {};
        this.$ = [];
        this.ta = [];
        this.R = [];
        this.R[1] = 0;
        this.R[2] = 0;
        this.V = g;
        this.ra = 0
      }
      ;
      DAg = function () {
        this.T = [];
        this.V = _.hr();
        this.R = _.Hw();
        this.H = _.Hw();
        _.Kq(void 0) && CAg(this, void 0)
      }
      ;
      EAg = function (a, b, c, e, f, g) {
        this.ha = b;
        this.bn = c;
        this.Ut = e;
        this.Jc = a;
        this.Pr = null;
        this.H = this.wj = 0;
        this.nH = f;
        this.Vo = this.hk = null;
        this.W = g;
        this.$ = this.V = this.iy = this.T = this.R = 0;
        a && (this.Vo = a.hk,
          a.hk = this)
      }
      ;
      FAg = function () {
        this.H = []
      }
      ;
      IAg = function (a, b, c) {
        this.V = a;
        this.ha = b;
        this.La = c;
        this.$ = new DAg;
        this.Ja = _.RLb();
        this.Oa = this.ra = this.Ba = 0;
        this.R = null;
        this.Aa = new GAg;
        this.ta = !1;
        this.T = new AAg;
        this.hb = new FAg;
        this.Ga = this.Ca = this.wa = this.va = 0;
        this.H = new HAg;
        this.W = 0;
        this.Xa = !1;
        this.Bb = null;
        this.Ma = this.Pa = !1
      }
      ;
      JAg = function (a, b, c, e, f, g, k) {
        this.Bb = new _.Wsg(new _.FK);
        this.V = c;
        this.Ga = g;
        this.ra = new wAg(this, f);
        this.T = a;
        this.Aa = new yAg(this.T, b);
        this.ta = new zAg(!0);
        this.ha = [];
        this.Ba = 0;
        a = e.Yz();
        this.R = new BAg(b, g, f, e, a, k);
        this.H = new IAg(this.R, this.T, k);
        this.Ca = e.H;
        this.va = 1;
        this.$ = new AAg;
        this.W = 0;
        this.wa = []
      }
      ;
      LAg = function (a, b, c, e, f, g) {
        this.W = .8;
        this.Ba = 0;
        this.T = new _.Xsg;
        this.ra = _.rOb(KAg, g);
        this.Ja = new Azg(c);
        this.V = new Lzg(f, c, this.ra, this.T);
        this.ha = new _.oMb(f, c, this.ra, this.T);
        this.va = f;
        this.wa = new _.Ysg;
        this.ta = c;
        this.R = new uAg(a, b, c, e, this.Ja, this.wa, this.T);
        this.ha.$ = this.R.Ja;
        this.H = new JAg(this.V, this.ha, this.R, a, b, e, this.T);
        this.$ = a.H;
        this.Aa = e;
        this.V.V.push({
          V: e
        });
        this.Ga = b;
        this.Ca = a
      }
      ;
      MAg = function (a) {
        this.R = a
      }
      ;
      NAg = function (a, b) {
        this.R = a;
        this.V = _.Kq(b) ? b : .2
      }
      ;
      OAg = function (a) {
        this.V = new MAg(_.Dvg);
        this.W = a;
        this.R = 0
      }
      ;
      l9 = function (a, b) {
        this.H = a.H;
        this.R = a;
        this.La = new NAg(_.Dvg);
        this.ta = new OAg(this.La);
        this.ta.R = 0;
        this.wa = this.ta;
        this.Aa = b;
        this.T = _.hr();
        this.Ca = _.Hw();
        this.W = _.Hw();
        this.V = _.hr();
        this.Ba = this.va = 0;
        this.hb = _.Hw();
        this.Ga = _.hr();
        this.Xa = -1;
        this.Ja = this.nb = this.Ma = 0;
        this.Oa = _.rNb
      }
      ;
      PAg = function () {
        this.H = new m9;
        this.$ = new m9;
        this.ha = new m9;
        this.R = new m9;
        this.ra = new m9;
        this.T = new m9;
        this.W = new m9;
        this.V = new m9
      }
      ;
      QAg = function () {
        this.T = new _.Ysg;
        this.H = new NAg(0, -.05)
      }
      ;
      RAg = function (a, b) {
        this.T = a;
        this.V = b;
        this.H = 0
      }
      ;
      SAg = function (a) {
        this.H = a
      }
      ;
      TAg = function (a) {
        this.R = new _.UJ("b", a);
        this.H = new _.kJb("c", a)
      }
      ;
      UAg = function (a) {
        this.H = new _.RJ("a", a)
      }
      ;
      VAg = function (a) {
        _.QJ.call(this, a, pzg, "precision highp float;uniform sampler2D b;uniform vec2 c;void main(){vec2 d=gl_FragCoord.xy*c;gl_FragColor=texture2D(b,d);}");
        this.R = new TAg(this);
        this.attributes = new UAg(this)
      }
      ;
      WAg = function (a) {
        this.T = new _.kJb("c", a);
        this.R = new _.YJ("d", a);
        this.H = new _.YJ("e", a);
        this.alpha = new _.VJ("f", a)
      }
      ;
      XAg = function (a) {
        this.H = new _.RJ("a", a)
      }
      ;
      YAg = function (a) {
        _.QJ.call(this, a, pzg, "precision highp float;uniform sampler2D b;uniform vec2 c;uniform mat4 d,e;uniform float f;void main(){vec2 g=gl_FragCoord.xy*c;float h=-(e[0][2]*g.x+e[1][2]*g.y+e[3][2])/e[2][2];vec4 i,j;i=d*vec4(g.x,g.y,h,1);i/=i.w;j=vec4(0);if(step(0.,i.x)*step(i.x,1.)*step(0.,i.y)*step(i.y,1.)>.5)j=texture2D(b,i.xy)*f;gl_FragColor=j;}");
        this.R = new WAg(this);
        this.attributes = new XAg(this)
      }
      ;
      ZAg = function (a, b, c, e, f, g) {
        _.Erg.call(this, a);
        this.ha = (this.va = b) || !f;
        this.format = g ? 6407 : 6408;
        this.wa = c;
        this.V = null;
        this.H = this.ra = -1;
        this.$ = null;
        this.W = -1;
        this.scale = e || 1;
        this.ta = !1
      }
      ;
      aBg = function (a) {
        var b = this;
        _.Erg.call(this, a);
        this.W = a;
        this.V = this.H = null;
        $Ag(this);
        this.W.T.addEventListener(_.jq, function () {
          $Ag(b)
        })
      }
      ;
      bBg = function (a, b) {
        this.H = a;
        this.R = b
      }
      ;
      cBg = function (a, b, c, e, f, g, k, m) {
        this.R = a;
        this.va = m ? m : 1;
        this.H = new _.FK;
        this.Bb = new _.Wsg(this.H);
        this.T = b;
        this.V = c;
        this.$ = e;
        this.W = f;
        this.ta = g;
        this.ra = k;
        this.ha = new _.Mxc(1)
      }
      ;
      gBg = function (a, b, c, e) {
        this.ta = a.R.$;
        this.H = a;
        this.Ga = c;
        this.Ca = e;
        this.T = b;
        a = void 0;
        b = dBg(this.H, !1);
        b.Fb = !0;
        b.va = 0;
        b.Ja = !1;
        b = eBg(this.H, b, !1, this.T);
        b.xda(17664);
        c = b.H;
        c.bz(this.Ca);
        c.tX(!0);
        this.Ga || (a = []);
        c.ta(fBg(this.H, 1, b.T.Kx() || void 0, b.T.Jx() || void 0, a));
        this.R = b;
        this.va = _.ww();
        this.Aa = _.ww();
        this.V = new _.FK;
        this.ha = -1;
        this.Ba = new _.Yq;
        this.ra = 0
      }
      ;
      iBg = function (a, b, c, e, f) {
        var g = this;
        this.Ca = a;
        this.Ga = a.R;
        this.ha = c;
        this.La = function () {
          f()
        }
        ;
        this.V = this.H = this.T = this.ta = null;
        this.Ba = b;
        this.Aa = _.ww();
        this.Ja = _.ww();
        this.ra = e;
        this.va = this.R = 0;
        hBg(this);
        this.ha.T.addEventListener(_.jq, function () {
          hBg(g)
        })
      }
      ;
      jBg = function (a) {
        this.T = a;
        this.V = this.H = this.R = null;
        a = [.5, .5, .5];
        var b = this.T;
        this.R = b.createBuffer();
        this.H = new _.QJ(b, "attribute vec3 vtx;\nattribute vec2 texCoord;\nvarying vec2 vTexCoord;\nvoid main() {\n gl_Position = vec4(vtx, 1.0);\n vTexCoord = texCoord;\n}", "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D texSampler;\nvoid main() {\n gl_FragColor = texture2D(texSampler, vTexCoord);\n}");
        var c = _.jJb(this.H);
        c.FG();
        b.uniform1i(c.getUniformLocation("texSampler"), 0);
        b.bindBuffer(34962, this.R);
        b.bufferData(34962, new Float32Array([a[0] - .5, a[1] - .5, a[2] - .5, 0, 0, a[0] + .5, a[1] - .5, a[2] - .5, 1, 0, a[0] - .5, a[1] + .5, a[2] - .5, 0, 1, a[0] + .5, a[1] + .5, a[2] - .5, 1, 1]), 35044)
      }
      ;
      lBg = function (a, b) {
        this.R = a;
        a = this.R.$;
        var c = dBg(this.R, !0);
        c.W = !1;
        c.Xv = b;
        b = eBg(this.R, c, !0, void 0, a);
        b.xda(1280);
        this.H = b;
        kBg(this, void 0);
        this.W = -1;
        this.T = null;
        this.V = !1
      }
      ;
      mBg = function (a) {
        this.H = a;
        this.R = null
      }
      ;
      nBg = function (a) {
        this.R = a;
        this.H = [];
        this.V = 5E3;
        this.T = !0
      }
      ;
      oBg = function (a) {
        this.H = new _.UJ("d", a);
        this.R = new _.kJb("e", a)
      }
      ;
      pBg = function (a) {
        this.H = new _.RJ("b", a);
        this.R = new _.RJ("c", a)
      }
      ;
      rBg = function (a, b) {
        b = b || new qBg;
        b = (b.$ ? jzg : "") + (b.W ? kzg : "") + (b.T ? lzg : "") + (b.V ? mzg : "") + (b.R ? nzg : "");
        _.QJ.call(this, a, b + "varying vec2 a;attribute vec3 b;attribute vec2 c;void main(){gl_Position=vec4(b,1);a=c;}", b + "precision highp float;varying vec2 a;uniform sampler2D d;uniform vec2 e;vec4 G(vec2 f){return texture2D(d,clamp(a+f,0.,1.));}float H(){vec2 f=gl_FragCoord.xy/541.;return fract(sin(dot(f.xy,vec2(12.9898,78.233)))*43758.5453);}vec2 I(){vec2 f=gl_FragCoord.xy/541.;float g=sin(dot(f.xy,vec2(12.9898,78.233)));return vec2(fract(g*43758.5453)-.5,fract(g*17133.513)-.5);}vec4 J(vec2 f,sampler2D g){float h,i,j,r,s,t,u,v,w,x,B,C,F;h=1./128.;i=1./8.;j=8.;vec2 k,A;k=vec2(1./e.x,1./e.y);vec3 l,m,n,o,p,q,D,E;l=texture2D(g,f+vec2(-1.)*k).xyz;m=texture2D(g,f+vec2(1,-1.)*k).xyz;n=texture2D(g,f+vec2(-1.,1)*k).xyz;o=texture2D(g,f+vec2(1)*k).xyz;p=texture2D(g,f).xyz;q=vec3(.299,.587,.114);r=dot(l,q);s=dot(m,q);t=dot(n,q);u=dot(o,q);v=dot(p,q);w=min(v,min(min(r,s),min(t,u)));x=max(v,max(max(r,s),max(t,u)));A.x=-(r+s-(t+u));A.y=r+t-(s+u);B=max((r+s+t+u)*.25*i,h);C=1./(min(abs(A.x),abs(A.y))+B);A=min(vec2(j),max(vec2(-j),A*C))*k;D=.5*(texture2D(g,f+A*(1./3.-.5)).xyz+texture2D(g,f+A*(2./3.-.5)).xyz);E=D*.5+.25*(texture2D(g,f+A*-.5).xyz+texture2D(g,f+A*.5).xyz);F=dot(E,q);if(F<w||F>x)return vec4(D,1);return vec4(E,1);}void main(){\n#if defined(_b)&&!defined(_c)&&!defined(_d)&&!defined(_e)\ngl_FragColor=J(a,d);\n#else\nvec4 f=texture2D(d,a);\n#ifdef _b\nif(f.a<=.01){gl_FragColor=J(a,d);return;}\n#endif\nfloat g,h;g=.05;h=f.a*g;\n#ifdef _c\ngl_FragColor=G(2.*h*I());\n#else\nfloat i,j,k;i=3.141592*2.*H();j=cos(i);k=sin(i);mat2 l=mat2(j,-k,k,j);l*=2.*h;\n#endif\n#ifdef _d\nvec4 m=G(l*vec2(.156690874223,-.430387948337))+G(l*vec2(-.188444540088,.0229685835972))+G(l*vec2(.111622020673,.46784654196))+G(l*vec2(.461558496719,.171863462335))+G(l*vec2(-.281918042866,-.406753273425));gl_FragColor=clamp(m/5.,0.,1.);\n#endif\n#ifdef _e\nvec4 m=G(l*vec2(.494047687793,-.00802689939305))+G(l*vec2(-.152767652131,-.072328470439))+G(l*vec2(-.374515197476,-.0266523604573))+G(l*vec2(-.164373526025,.281236540093))+G(l*vec2(.359808290387,.206123325918))+G(l*vec2(-.422679283624,-.251065092478))+G(l*vec2(.122775179074,-.122026399948))+G(l*vec2(-.0388651687936,.0708784905369))+G(l*vec2(-.169693677224,-.310533597191))+G(l*vec2(.217802761043,.40057953535))+G(l*vec2(-.422014456989,.117637765081))+G(l*vec2(-.0357558085784,.351021012289))+G(l*vec2(.122778350365,.25516003691))+G(l*vec2(.245568570265,-.268646290045))+G(l*vec2(-.0609782553801,-.438592699503))+G(l*vec2(.293229229447,-.0710773314834))+G(l*vec2(.0549068730029,-.289930727944))+G(l*vec2(-.300364865622,.387703871351))+G(l*vec2(.41132869342,-.272557940523))+G(l*vec2(-.00296425252815,.497868761919))+G(l*vec2(-.147261979558,.451595852008))+G(l*vec2(-.226534965194,.0974004046798))+G(l*vec2(-.0408873152608,-.181094911072))+G(l*vec2(-.293401122442,-.383564478434))+G(l*vec2(.3647974482,.054160926394))+G(l*vec2(-.403992830331,.290913420299))+G(l*vec2(.16604219934,-.448065194108))+G(l*vec2(-.260095164599,-.170779776681))+G(l*vec2(.176550475625,.0701827900168));gl_FragColor=clamp(m/29.,0.,1.);\n#endif\n#endif\n}");
        this.R = new oBg(this);
        this.attributes = new pBg(this)
      }
      ;
      tBg = function (a, b) {
        this.V = b;
        this.ra = a;
        this.R = this.H = this.ha = null;
        this.W = new ZAg(b, !1, 9728, 1, !0, !b.getContextAttributes().alpha);
        this.W.bindTexture(0);
        this.ta = new _.Frg(b);
        this.T = 0;
        this.$ = !1;
        sBg(this);
        var c = this;
        this.V.T.addEventListener(_.jq, function () {
          sBg(c)
        })
      }
      ;
      xBg = function (a, b, c, e, f, g, k, m, q, r) {
        var t = _.fr.devicePixelRatio || 1;
        this.W = b;
        this.R = a;
        this.Pa = new Date((0,
          _.Uq)());
        this.Ma = new QAg;
        a = new _.Ysg;
        a.Ca = 0;
        a.T = 1;
        a.Ga = 1;
        a.Ba = 1;
        a.wa = .8;
        a.Aa = 1.0015;
        a.V = 1;
        a.ha = 1;
        a.$ = 1;
        a.ta = 1;
        a.Gd = this.Pa;
        this.Ja = new SAg(a);
        this.wa = new RAg(this.Ma, this.Ja);
        this.V = new cBg(this.R, b, c, e, m, q, r, t);
        this.Aa = new mBg(this.V);
        this.T = new nBg(this.V);
        this.ra = null;
        this.Ga = 0;
        this.va = null;
        this.H = g ? new lBg(this.V, !!k) : null;
        this.$ = [];
        this.ha = null;
        this.nb = f;
        this.hb = g;
        this.Ca = !0;
        this.Ba = [];
        this.Cc = new _.Mv(0, 0, 0, 0);
        this.ta = null;
        this.Xa = new _.Frg(b);
        this.La = new PAg;
        this.Oa = !1;
        if (f || g)
          this.ta || (this.ta = uBg(this.T, this.nb, this.hb),
            this.$.push(this.ta.R)),
            vBg(this, this.ha),
          this.H && this.$.push(this.H.H);
        vBg(this, this.ha);
        this.ra = null;
        wBg(this, this.Ga)
      }
      ;
      yBg = function (a) {
        var b = _.tNb
          , c = _.PK
          , e = _.OK;
        _.vG[0] = _.rw(e, e);
        _.vG[1] = _.rw(c, e) - _.rw(e, b.Gh);
        _.vG[2] = _.rw(c, c) - 2 * _.rw(c, b.Gh) + _.rw(b.Gh, b.Gh) - b.H * b.H;
        _.vG[3] = _.vG[1] * _.vG[1] - _.vG[0] * _.vG[2];
        if (0 > _.vG[3])
          return 0;
        if (0 == _.vG[3])
          return a[0] = -_.vG[1] / _.vG[0],
            1;
        _.vG[3] = Math.sqrt(_.vG[3]);
        _.vG[0] = 1 / _.vG[0];
        a[0] = (-_.vG[1] - _.vG[3]) * _.vG[0];
        a[1] = (-_.vG[1] + _.vG[3]) * _.vG[0];
        return 2
      }
      ;
      _.zBg = function (a) {
        a.R = null
      }
      ;
      ABg = function (a) {
        0 == a.V && (a.T || _.iJb(a),
          a.H.getProgramParameter(a.T, 35714) ? a.V = 1 : a.V = -1);
        return 1 == a.V
      }
      ;
      BBg = function (a, b, c) {
        var e = a[0]
          , f = a[1]
          , g = a[2];
        a = a[3];
        c[0] = .5 * (b[0] - e) + e;
        c[1] = .5 * (b[1] - f) + f;
        c[2] = .5 * (b[2] - g) + g;
        c[3] = .5 * (b[3] - a) + a
      }
      ;
      CBg = null;
      DBg = null;
      EBg = function (a) {
        var b = new Uint16Array(65536);
        DBg || (DBg = new Uint16Array(4));
        for (var c = DBg, e, f, g, k, m, q, r, t = 0; 64 > t; t++)
          for (var x = 0; 64 > x; x++)
            f = 4 * (64 * t + x),
              c[0] = a[f],
              c[1] = a[f + 1],
              e = c[0] & 31,
              g = c[0] & 2016,
              k = c[0] & 63488,
              m = c[1] & 31,
              q = c[1] & 2016,
              r = c[1] & 63488,
              c[2] = 5 * e + 3 * m >> 3 | 5 * g + 3 * q >> 3 & 2016 | 5 * k + 3 * r >> 3 & 63488,
              c[3] = 5 * m + 3 * e >> 3 | 5 * q + 3 * g >> 3 & 2016 | 5 * r + 3 * k >> 3 & 63488,
              g = 1024 * t + 4 * x,
              e = a[f + 2],
              b[g] = c[e & 3],
              b[g + 1] = c[e >> 2 & 3],
              b[g + 2] = c[e >> 4 & 3],
              b[g + 3] = c[e >> 6 & 3],
              g += 256,
              b[g] = c[e >> 8 & 3],
              b[g + 1] = c[e >> 10 & 3],
              b[g + 2] = c[e >> 12 & 3],
              b[g + 3] = c[e >> 14],
              e = a[f + 3],
              g += 256,
              b[g] = c[e & 3],
              b[g + 1] = c[e >> 2 & 3],
              b[g + 2] = c[e >> 4 & 3],
              b[g + 3] = c[e >> 6 & 3],
              g += 256,
              b[g] = c[e >> 8 & 3],
              b[g + 1] = c[e >> 10 & 3],
              b[g + 2] = c[e >> 12 & 3],
              b[g + 3] = c[e >> 14];
        return b
      }
      ;
      FBg = function (a, b, c, e, f) {
        var g = c[0] * (a[0] - b[0])
          , k = c[0] * (a[3] - b[0]);
        0 > c[0] ? (f[0] = k,
          f[1] = g) : (f[0] = g,
          f[1] = k);
        f[1] > e && (f[1] = e);
        if (0 > f[1] || f[0] > f[1])
          return !1;
        g = c[1] * (a[1] - b[1]);
        k = c[1] * (a[4] - b[1]);
        0 > c[1] ? e = k : (e = g,
          g = k);
        e > f[0] && (f[0] = e);
        g < f[1] && (f[1] = g);
        if (f[0] > f[1] || 0 > f[1])
          return !1;
        g = c[2] * (a[2] - b[2]);
        k = c[2] * (a[5] - b[2]);
        0 > c[2] ? e = k : (e = g,
          g = k);
        e > f[0] && (f[0] = e);
        g < f[1] && (f[1] = g);
        return f[0] <= f[1] && 0 <= f[1]
      }
      ;
      n9 = function (a, b) {
        return a.ld * b.T.H
      }
      ;
      o9 = function (a, b) {
        return a.Bd * b.T.H
      }
      ;
      GBg = function (a, b) {
        b = _.$t(b, .01745329251, 3.12413936107);
        b != a.H && (a.H = b,
          ++a.R)
      }
      ;
      IBg = function (a) {
        this.U = a || []
      }
      ;
      _.J(IBg, _.K);
      IBg.prototype.Cj = function () {
        return _.N(this, 1)
      }
      ;
      var JBg, KBg = function () {
        var a = _.OMb
          , b = _.nB;
        HBg || (HBg = {
          Da: "meubiib",
          Ra: ["su"]
        });
        var c = HBg;
        return b.Ne(a.ve(), c)
      }, LBg = function (a, b) {
        a.U[0] = b
      }, MBg = function (a, b) {
        a.U[1] = b
      }, NBg = function () {
        var a = _.PMb
          , b = _.nB;
        JBg || (JBg = {
          Da: "meeu",
          Ra: ["su"]
        });
        var c = JBg;
        return b.Ne(a.ve(), c)
      }, OBg = function () {
        this.textures = [];
        this.transformInfo = [];
        this.projectionOrigin = null
      }, PBg = function (a, b) {
        return 0 == b ? a + 1 & -2 : 1 == b ? a | 1 : a + 2
      }, QBg = function (a, b, c) {
        var e = _.FMb
          , f = _.GMb
          , g = _.HMb;
        _.zMb[0] = f[0] - e[0];
        _.zMb[1] = f[1] - e[1];
        _.zMb[2] = f[2] - e[2];
        _.AMb[0] = g[0] - e[0];
        _.AMb[1] = g[1] - e[1];
        _.AMb[2] = g[2] - e[2];
        _.sw(_.zMb, _.AMb, _.BMb);
        f = b[0] * _.BMb[0] + b[1] * _.BMb[1] + b[2] * _.BMb[2];
        if (0 <= f)
          return c;
        f = 1 / f;
        _.DMb[0] = a[0] - e[0];
        _.DMb[1] = a[1] - e[1];
        _.DMb[2] = a[2] - e[2];
        _.sw(b, _.DMb, _.CMb);
        a = (_.AMb[0] * _.CMb[0] + _.AMb[1] * _.CMb[1] + _.AMb[2] * _.CMb[2]) * f;
        if (0 > a || 1 < a)
          return c;
        b = -(_.zMb[0] * _.CMb[0] + _.zMb[1] * _.CMb[1] + _.zMb[2] * _.CMb[2]) * f;
        if (0 > b || 1 < a + b)
          return c;
        a = -(_.DMb[0] * _.BMb[0] + _.DMb[1] * _.BMb[1] + _.DMb[2] * _.BMb[2]) * f;
        return a < c ? a : c
      }, qzg = function () {
        this.H = {}
      };
      rzg.prototype.init = function (a, b, c) {
        this.R = a;
        this.T = b;
        this.V = c;
        this.H = new Uint32Array(a.buffer)
      }
      ;
      rzg.prototype.zB = function (a, b, c, e, f, g, k, m) {
        var q = this.R
          , r = this.H
          , t = this.T
          , x = 0;
        for (_.IK[x] = 0; 0 <= x;) {
          var B = 12 * _.IK[x]
            , G = B;
          _.EMb[0] = q[G];
          _.EMb[1] = q[G + 1];
          _.EMb[2] = q[G + 2];
          _.EMb[3] = q[G + 3];
          _.EMb[4] = q[G + 4];
          _.EMb[5] = q[G + 5];
          if (FBg(_.EMb, a, c, e, f))
            if (q[B + 6]) {
              G = q[B + 7];
              B = r[B + 8 >> 2];
              for (var I = 0; I < G; ++I,
                ++B) {
                var T = this.V[B]
                  , aa = T >> 24;
                T &= 16777215;
                var ia = t[aa]
                  , ha = PBg(T, 0);
                a: {
                  var sa = this.W;
                  var ra = ha;
                  var Ea = ia.layerBounds
                    , ob = sa.H[k];
                  if (!ob) {
                    ob = sa.H;
                    sa = k;
                    for (var cb = 0, Xb = 0, Lb = [], kc = 0; 10 > kc; kc++)
                      9 != kc && sa & 1 << kc ? Xb = kc + 1 : (Xb > cb && Lb.push({
                        rTa: cb,
                        dAa: Xb
                      }),
                      9 != kc && (cb = kc + 1));
                    ob = ob[k] = Lb
                  }
                  for (sa = 0; sa < ob.length; ++sa)
                    if (cb = Ea[ob[sa].rTa],
                    ra < Ea[ob[sa].dAa] && ra >= cb) {
                      ra = !0;
                      break a
                    }
                  ra = !1
                }
                ra && (ra = ia.indices,
                  ia = ia.vertices,
                  ha = 8 * ra[ha],
                g & 1 << ia[ha + 3] && (Ea = 8 * ra[PBg(T, 1)],
                  ra = 8 * ra[PBg(T, 2)],
                  _.FMb[0] = ia[ha++],
                  _.FMb[1] = ia[ha++],
                  _.FMb[2] = ia[ha],
                  _.GMb[0] = ia[Ea++],
                  _.GMb[1] = ia[Ea++],
                  _.GMb[2] = ia[Ea],
                  _.HMb[0] = ia[ra++],
                  _.HMb[1] = ia[ra++],
                  _.HMb[2] = ia[ra],
                  ha = QBg(a, b, e),
                ha < e && (e = ha,
                m && (m.T = aa,
                  m.ra = T))))
              }
              --x
            } else
              G = r[B + 8 >> 2],
                I = G + 1,
                B = q[B + 7],
              x >= _.IK.length - 2 && (_.IK = new Uint32Array(2 * _.IK.length)),
                0 < b[B] ? (_.IK[x++] = I,
                  _.IK[x] = G) : (_.IK[x++] = G,
                  _.IK[x] = I);
          else
            --x
        }
        return e
      }
      ;
      var RBg = function (a) {
        if (!a)
          return 0;
        if (_.Kq(a.byteLength))
          return a ? a.byteLength : 0;
        var b = _.yr(a);
        if (b == _.oo || b == _.yma) {
          b = 0;
          for (var c in a)
            b += RBg(a[c]);
          return b
        }
        return 0
      }
        , SBg = function (a) {
        return a.T.matrixGlobeFromMesh
      };
      _.E = szg.prototype;
      _.E.init = function (a, b, c) {
        this.T = a;
        this.W = b;
        this.ra = c;
        b = a.meshes.slice();
        for (c = 0; c < a.overlaySurfaceMeshes.length; c++)
          b.push(a.overlaySurfaceMeshes[c]);
        a.waterMesh && b.push(a.waterMesh);
        this.Aa.init(a.bvhNodes, b, a.bvhTriPermutation);
        a = this.H;
        b = this.R;
        b[0] = -Math.PI;
        b[1] = -Math.PI;
        b[2] = -6371010;
        b[3] = Math.PI;
        b[4] = Math.PI;
        b[5] = 31855050;
        for (c = 0; c < a.length; c++) {
          a[c] & 2 ? b[1] = .5 * (b[4] + b[1]) : b[4] = .5 * (b[4] + b[1]);
          if (2 > c || !(b[1] <= -.5 * Math.PI || b[4] >= .5 * Math.PI))
            a[c] & 1 ? b[0] = .5 * (b[3] + b[0]) : b[3] = .5 * (b[3] + b[0]);
          a[c] & 4 ? b[2] = .5 * (b[5] + b[2]) : b[5] = .5 * (b[5] + b[2])
        }
        b[1] < -.5 * Math.PI && (b[1] = -.5 * Math.PI);
        b[4] > .5 * Math.PI && (b[4] = .5 * Math.PI);
        this.R[0] = _.fu(this.R[0]);
        this.R[1] = _.fu(this.R[1]);
        this.R[3] = _.fu(this.R[3]);
        this.R[4] = _.fu(this.R[4])
      }
      ;
      _.E.to = function () {
        return this.$
      }
      ;
      _.E.QC = function () {
        return this.T.nonEmptyOctants
      }
      ;
      _.E.zB = function (a, b, c, e, f, g, k) {
        _.IJ(this.T.matrixMeshFromGlobe, a, _.LMb);
        _.Aw(this.T.matrixMeshFromGlobe, b, _.MMb);
        _.NMb[0] = 1 / _.MMb[0];
        _.NMb[1] = 1 / _.MMb[1];
        _.NMb[2] = 1 / _.MMb[2];
        a = this.Aa.zB(_.LMb, _.MMb, _.NMb, c, e, f, g, k);
        k && a < c && (k.R = this.H,
          k.V = this.wa);
        return a
      }
      ;
      _.E.Cu = function () {
        return !!(this.$.flags[this.V] & 4)
      }
      ;
      _.E.Cj = function () {
        return this.$.epoch[this.V]
      }
      ;
      var TBg = function (a) {
        var b = _.$Mb
          , c = a.$;
        a = a.V;
        for (var e = 0; 3 > e; e++)
          b.Gh()[e] = c.obbCenters[3 * a + e],
            b.H[e] = c.obbExtents[3 * a + e];
        for (e = 0; 9 > e; e++)
          b.rotation()[e] = c.obbRotations[9 * a + e]
      }
        , UBg = function (a) {
        if (0 == a.ta) {
          var b = RBg(a.T);
          b += RBg(a.W);
          b += RBg(null);
          var c = a.R;
          b += c ? c.byteLength : 0;
          a.ta = b
        }
        return a.ta
      }
        , Dzg = function (a, b) {
        a.V.push(a.T);
        a.T = b
      }
        , Fzg = function (a) {
        a.V.length && (a.T = a.V.pop())
      }
        , Hzg = function (a) {
        switch (a.Dc) {
          case 0:
            do
              var b = a.R[a.H++];
            while (b & 128);
            break;
          case 1:
            a.H += 8;
            break;
          case 2:
            a.H = a.iN() + a.H;
            break;
          case 5:
            a.H += 4
        }
      }
        , VBg = function (a) {
        var b = a.$.getFloat32(a.H, !0);
        a.H += 4;
        return b
      }
        , Izg = function (a) {
        var b = a.$.getFloat64(a.H, !0);
        a.H += 8;
        return b
      }
        , Gzg = function (a) {
        var b = a.R[a.H++];
        b = a.H + b;
        for (var c = ""; a.H < b;) {
          var e = a.R[a.H++];
          if (128 > e)
            c += String.fromCharCode(e);
          else if (!(192 > e))
            if (224 > e) {
              var f = a.R[a.H++];
              c += String.fromCharCode((e & 31) << 6 | f & 63)
            } else if (240 > e) {
              f = a.R[a.H++];
              var g = a.R[a.H++];
              c += String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
            }
        }
        return c
      }
        , WBg = function (a) {
        var b = a.H.to();
        a = a.H.V;
        return 1 < (b.availableViewDirectionsArray ? b.availableViewDirectionsArray[a] : b.defaultAvailableViewDirections)
      }
        , XBg = function (a) {
        var b = a.H.to();
        a = a.H.V;
        return b.flags[a] & 16 ? b.imageryEpochArray ? b.imageryEpochArray[a] : b.defaultImageryEpoch : -1
      }
        , YBg = function (a) {
        var b = a.H.to()
          , c = a.H.V;
        if (0 != a.$) {
          if (b.viewDependentTextureFormatArray && (a = b.viewDependentTextureFormatArray[c]))
            return a;
          if (b.defaultViewDependentTextureFormat)
            return b.defaultViewDependentTextureFormat
        }
        return b.textureFormatArray ? b.textureFormatArray[c] : b.defaultTextureFormat
      }
        , ZBg = function (a, b, c, e, f, g, k, m, q) {
        this.V = a;
        this.$ = b;
        this.W = c;
        this.ha = e;
        this.T = f;
        this.va = g;
        this.R = k;
        this.H = null;
        this.ra = m;
        this.ta = q;
        this.state = null
      };
      ZBg.prototype.start = function (a) {
        var b = this;
        if (!this.H) {
          LBg(new IBg(_.P(_.PMb, 0)), this.$);
          MBg(new IBg(_.P(_.PMb, 0)), this.W);
          _.PMb.U[1] = this.va;
          _.PMb.U[2] = this.ha;
          0 < this.T ? _.PMb.U[3] = this.T : _.ts(_.PMb, 3);
          var c = NBg();
          c = this.V + encodeURIComponent(c);
          this.H = new _.EK(c, function (a) {
              b.ra(b.R, a)
            }
            , function (a) {
              b.ta(b.R, a)
            }
            , !0)
        }
        this.H.start(a)
      }
      ;
      ZBg.prototype.cancel = function () {
        return this.H ? this.H.cancel() : !0
      }
      ;
      var $Bg = function (a, b) {
          for (var c = 0, e = 0, f = 0; f < b.length; ++f) {
            var g = b[f]
              , k = a.V[g];
            k && 0 == --k.Ba && (k.W && (a.H.remove(k.W),
              k.W = null,
              c++),
            k.T && (a.H.remove(k.T),
              k.T = null,
              c++),
            k.wa && (a.H.remove(k.wa),
              k.wa = null,
              c++),
            k.V && (k.V.cancel(),
              k.V = null,
              e++),
            k.R && (k.R.cancel(),
              k.R = null,
              e++),
            k.va && (k.va.cancel(),
              k.va = null,
              e++),
              delete a.V[g])
          }
        }
        , aCg = function (a, b) {
          ++b.ha;
          if (1 == b.ha) {
            UBg(b);
            var c = b.va;
            -1 != c && (a.ha.remove(c),
              b.va = -1)
          }
        }
        , bCg = function (a, b) {
          --b.ha;
          if (0 == b.ha) {
            var c = UBg(b);
            a = a.ha.add(b.H, a.va, c);
            b.va = a
          }
        }
        , cCg = function (a, b) {
          aCg(a, b);
          for (var c = 0; c < a.T.length; ++c)
            a.T[c].Ga(b) && aCg(a, b);
          bCg(a, b)
        }
        , dCg = function (a, b) {
          var c = b.H
            , e = c.H
            , f = c.to();
          f.nodes || (f.nodes = Array(f.flags.length));
          f.nodes[c.V] = c;
          delete a.V[e];
          c.init(b.ta, b.ha, b.$);
          b.ta = b.ha = null;
          0 < c.W.textures.length && 6 == c.W.textures[0].textureFormat ? (a.W.add(2, 1),
            a.W.add(3, b.Aa)) : (a.W.add(4, 1),
            a.W.add(5, b.Aa));
          a.R[e] = c;
          cCg(a, c)
        }

        // TODO: Receives mesh data from XHR.
        , eCg = function (a, b, c) {
          b.W = null;
          b.V = new _.Irg(a.$ ? 3 : 2, c, [c], function (c) {
              b.Aa = b.V.H;
              b.V = null;
              b.ta = c;
              b.ha && dCg(a, b);
              if (!WBg(b)) {
                b.ha = new OBg;
                for (var e = 0; e < c.meshes.length; ++e)
                  b.ha.textures.push(c.meshes[e].texture);
                dCg(a, b)
              }
            }
          );
          _.Jrg(a.ra, b.V, 2)
        };

      uzg.prototype.start = function (a) {
        if (!this.R) {
          var b = this.H.H.to()
            , c = this.H.H.V;
          LBg(new IBg(_.P(_.OMb, 0)), this.H.H.H);
          MBg(new IBg(_.P(_.OMb, 0)), b.epoch[c]);
          _.OMb.U[1] = b.textureFormatArray ? b.textureFormatArray[c] : b.defaultTextureFormat;
          _.OMb.U[3] = WBg(this.H);
          b.flags[c] & 16 ? _.OMb.U[2] = b.imageryEpochArray ? b.imageryEpochArray[c] : b.defaultImageryEpoch : _.ts(_.OMb, 2);
          b = KBg();
          c = this.V + encodeURIComponent(b);
          this.H.H.wa = b;
          var e = this;
          this.R = new _.EK(c, function (a) {
              eCg(e.T, e.H, a)
            }
            , function (a) {
              e.T.Aa(e.H, a)
            }
            , !0)
        }
        this.R.start(a)
      }
      ;
      uzg.prototype.cancel = function () {
        return this.R ? this.R.cancel() : !0
      }
      ;
      var fCg = function (a, b, c) {
        b.T = null;
        b.R = new _.Irg(a.$ ? 4 : 5, c, [c], function (c) {
            0 != b.$ && (a.W.add(6, 1),
              a.W.add(7, b.R.H));
            b.R = null;
            var e = b.H.H
              , g = a.R[e];
            if (g) {
              var k = b.$;
              g.W = c;
              g.ra = k;
              delete a.V[e];
              cCg(a, g)
            } else
              b.ha = c,
              b.ta && dCg(a, b)
          }
        );
        _.Jrg(a.ra, b.R, 2)
      }
        , gCg = function (a, b) {
        var c = 0 == b.$;
        c = new ZBg(a.Ba, b.H.H, b.H.Cj(), b.$, c ? XBg(b) : -1, YBg(b), b, function (b, c) {
            fCg(a, b, c)
          }
          , function (b, c) {
            a.ta(b, c)
          }
        );
        b.T = c;
        _.RE(a.H, c, b.ra)
      }
        , hCg = function (a, b, c, e, f, g) {
        (e.availableViewDirectionsArray ? e.availableViewDirectionsArray[f] : e.defaultAvailableViewDirections) & 1 << c || (c = 0);
        var k = a.V[b];
        k ? k.error || (k.$ != c && (k.T && (a.H.remove(k.T),
          k.T = null),
        k.R && (k.R.cancel(),
          k.R = null),
          k.$ = c,
          gCg(a, k)),
          ++k.Ba,
        g > k.ra && (k.ra = g,
        k.W && _.RE(a.H, k.W, g),
        k.T && _.RE(a.H, k.T, g))) : (k = a.R[b]) && k.ra == c ? cCg(a, k) : (k = new szg(b, e, f),
          k = new tzg(k),
          k.ra = g,
          k.$ = c,
          b = a.V[b] = k,
        a.R[b.H.H] || (c = new uzg(b, a, a.wa),
          b.W = c,
          _.RE(a.H, c, b.ra)),
        WBg(b) && gCg(a, b))
      }
        , iCg = function (a, b, c) {
        a.Ja(b, c);
        null != a.R && (iCg(a.R, b, a.R.T),
          _.nw(a.R.T, c, c))
      }
        , jCg = function (a, b, c) {
        var e = a.Ma;
        a.va(b, e);
        _.mJb(c, e[0], e[1], e[2], e[4], e[5], e[6], e[8], e[9], e[10]);
        _.nJb(_.RMb, c, c);
        _.nJb(_.SMb, c, c)
      }
        , kCg = function (a, b, c, e) {
        iCg(c, b, c.T);
        iCg(a, b, a.T);
        _.ow(c.T, a.T, e);
        c = a.Ma;
        a.va(b, c);
        if (c == c) {
          a = c[1];
          b = c[2];
          var f = c[3]
            , g = c[6]
            , k = c[7]
            , m = c[11];
          c[1] = c[4];
          c[2] = c[8];
          c[3] = c[12];
          c[4] = a;
          c[6] = c[9];
          c[7] = c[13];
          c[8] = b;
          c[9] = g;
          c[11] = c[14];
          c[12] = f;
          c[13] = k;
          c[14] = m
        } else
          c[0] = c[0],
            c[1] = c[4],
            c[2] = c[8],
            c[3] = c[12],
            c[4] = c[1],
            c[5] = c[5],
            c[6] = c[9],
            c[7] = c[13],
            c[8] = c[2],
            c[9] = c[6],
            c[10] = c[10],
            c[11] = c[14],
            c[12] = c[3],
            c[13] = c[7],
            c[14] = c[11],
            c[15] = c[15];
        _.Dw(c, e[0], e[1], e[2]);
        _.mw(e, 0, 0, 0);
        _.IJ(c, e, e)
      }
        , lCg = function (a, b, c, e) {
        for (var f = _.VMb, g = _.WMb, k = f; null != k.R;)
          k = k.R;
        var m = f.Pa;
        kCg(f, a, k, m);
        var q = f.Xa;
        kCg(f, a, g, q);
        _.ow(m, q, c);
        _.qw(c, c);
        a = -_.rw(q, c);
        _.pw(c, a, b);
        _.nw(q, b, b);
        0 <= a ? _.vw(e, -1, 0, -1, 0) : (_.ow(m, b, m),
          c = _.yJ(m),
          _.ow(q, b, q),
          b = _.yJ(q),
          q = (k.H - g.H) / (c - b),
          k = -(k.H + g.H) / (c - b),
          _.vw(e, g.H - b * q, q, g.H - b * k, k))
      }
        , mCg = function (a, b) {
        if (a.R[1] > b[4] || a.R[4] < b[1])
          return !1;
        if (a.R[3] <= a.R[0]) {
          if (b[0] > a.R[3] && b[3] < a.R[0])
            return !1
        } else if (a.R[0] > b[3] || a.R[3] < b[0])
          return !1;
        return !0
      }
        , nCg = function (a, b) {
        var c = 1 / (1 << a.zoom)
          , e = (2 * a.x + 1) * c - 1
          , f = (2 * a.y + 1) * c - 1;
        switch (a.T) {
          case 0:
            _.xw(b, 0, -c, -c, 0, 0, 1, -f, -e, 0);
            break;
          case 1:
            _.xw(b, 0, c, -c, 0, 0, -1, -f, e, 0);
            break;
          case 2:
            _.xw(b, c, 0, 0, c, 0, e, 1, f, 0);
            break;
          case 3:
            _.xw(b, c, 0, 0, -c, 0, e, -1, -f, 0);
            break;
          case 4:
            _.xw(b, c, 0, -c, 0, 0, e, -f, 1, 0);
            break;
          default:
            _.xw(b, -c, 0, -c, 0, 0, -e, -f, -1, 0)
        }
      }
        , p9 = function (a) {
        var b = 1 / Math.abs(a[3])
          , c = a[0] * b
          , e = a[1] * b;
        a = a[2] * b;
        return (-1 > c ? 1 : 1 < c ? 2 : 0) + (-1 > e ? 4 : 1 < e ? 8 : 0) + (-1 > a ? 16 : 1 < a ? 32 : 0)
      }
        , oCg = function (a, b, c) {
        var e = b[0]
          , f = b[1];
        b = b[2];
        c[0] = e * a[0] + f * a[4] + b * a[8];
        c[1] = e * a[1] + f * a[5] + b * a[9];
        c[2] = e * a[2] + f * a[6] + b * a[10];
        c[3] = e * a[3] + f * a[7] + b * a[11]
      }
        , pCg = function (a) {
        if (!a.La) {
          a.La = !0;
          for (var b = a.W.getParameter(34076), c = 2; 256 << c > b;)
            --c;
          if (!(0 > c)) {
            b = 5 * c + 4;
            a.$ = c;
            a.ra = 0;
            a.H = Array(6);
            a.T = Array(c + 1);
            a.ha = Array(c + 1);
            a.R = Array(b);
            a.Ba = !0;
            for (var e = 0; 6 > e; ++e)
              a.H[e] = new _.YMb(e, 0, 0, 0, c);
            for (e = 0; e <= c; ++e)
              a.ra += 6 * (1 << e) * (1 << e),
                a.T[e] = null,
                a.ha[e] = -1;
            for (c = 0; c < b; ++c)
              a.R[c] = _.uw()
          }
        }
      }
        , qCg = function (a) {
        var b = a.W
          , c = a.wa;
        if (!c) {
          c = b.createTexture();
          b.bindTexture(34067, c);
          b.texParameteri(34067, 10241, 9728);
          b.texParameteri(34067, 10240, 9728);
          b.texParameteri(34067, 10242, 33071);
          b.texParameteri(34067, 10243, 33071);
          for (var e = new Uint8Array(4), f = 34069; 34074 >= f; ++f)
            b.Tl(f, 0, 1, 1, 6409, 5121, e);
          a.wa = c;
          a.Ca = b.H.Cw(c, function () {
            a.W.deleteTexture(a.wa);
            a.wa = null;
            a.Ca = -1
          }, 4, 1)
        }
        b.H.sj(a.Ca);
        return c
      }
        , rCg = function (a, b, c) {
        if (b.zoom < (-1 == c ? a.$ : c))
          for (var e = 0; 4 > e; ++e)
            rCg(a, b.H[e], c);
        if (-1 == c || c == b.zoom)
          b.ha && --a.va,
          b.W && --a.ta,
          b.$ && (b.$.R = null),
            b.ha = !1,
            b.W = !1,
            b.$ = null,
            b.V = null
      }
        , sCg = function (a, b) {
        var c = a.W
          , e = a.T[b];
        if (!e) {
          var f = 256 << b
            , g = a.Aa ? 33776 : a.Ja;
          e = c.createTexture();
          c.bindTexture(34067, e);
          c.texParameteri(34067, 10241, 9729);
          c.texParameteri(34067, 10240, 9729);
          c.texParameteri(34067, 10242, 33071);
          c.texParameteri(34067, 10243, 33071);
          var k = f * f;
          if (a.Aa) {
            k /= 2;
            for (var m = new Uint8Array(k), q = 34069; 34074 >= q; ++q)
              c.compressedTexImage2D(q, 0, g, f, f, 0, m)
          } else
            for (6407 == a.Ja ? (k *= 2,
              m = 33635) : m = 5121,
                   q = 34069; 34074 >= q; ++q)
              c.Tl(q, 0, f, f, g, m, null);
          a.T[b] = e;
          a.ha[b] = c.H.Cw(e, function () {
            a.W.deleteTexture(a.T[b]);
            a.T[b] = null;
            a.ha[b] = -1;
            for (var c = 0; 6 > c; ++c)
              rCg(a, a.H[c], b)
          }, k, 1)
        }
        c.H.sj(a.ha[b]);
        return e
      }
        , tCg = function (a) {
        if (a.La && a.Ba) {
          for (var b = 0; 6 > b; ++b)
            if (!a.H[b].W)
              return !1;
          return !0
        }
        return !1
      }
        , uCg = function (a) {
        pCg(a);
        return a.Ba ? tCg(a) ? sCg(a, a.$) : qCg(a) : null
      }
        , vCg = function (a) {
        pCg(a);
        return a.Ba
      }
        , wCg = function (a) {
        var b = (0,
          _.Uq)();
        if (a.Oa && 0 == a.Ga || b - a.Ga > 1E3 * a.Xa)
          _.RE(a.nb, new _.o4f(String(a.Oa), function (b) {
              (b = b.baseUrl) && (b = b.replace(/^http(s)?:/, ""));
              if (a.V && a.V != b)
                for (var c = 0; 6 > c; ++c)
                  rCg(a, a.H[c], -1);
              a.V = b;
              a.Pa()
            }
            , _.nr, !1), 3),
            a.Ga = b
      }
        , xCg = function (a, b) {
        b = b.dj.R;
        return Math.max(Math.min(Math.round(Math.log(90 / (b[4] - b[1])) / Math.LN2 + a.Ma), a.$), 0)
      }
        , yCg = function (a, b) {
        b = b.ub() / (256 * Math.tan(b.H / 2));
        return Math.max(Math.min(Math.round(Math.log(b) / Math.LN2 + a.Ma), a.$), 0)
      }
        , zCg = function (a, b, c) {
        b.$ = new _.aL(2, 1, function () {
            b.$ = null;
            if (a.T[b.zoom] && b.V && !(32896 > b.V.byteLength)) {
              var c = new Uint16Array(b.V, 128, 16384)
                , f = a.W;
              f.activeTexture(33984);
              var g = f.V.Rx(f.state.Gn() - 33984);
              f.bindTexture(34067, a.T[b.zoom]);
              var k = 34069 + b.T;
              if (a.Aa)
                f.compressedTexSubImage2D(k, 0, 256 * b.x, 256 * b.y, 256, 256, 33776, c);
              else if (6409 == a.Ja) {
                var m = new Uint8Array(65536);
                CBg || (CBg = new Uint8Array(4));
                for (var q = CBg, r, t, x, B = 0; 64 > B; B++)
                  for (var G = 0; 64 > G; G++)
                    t = 4 * (64 * B + G),
                      r = (c[t] & 2016) >> 3,
                      x = (c[t + 1] & 2016) >> 3,
                      q[0] = r,
                      q[1] = x,
                      q[2] = 5 * r + 3 * x >> 3 & 252,
                      q[3] = 5 * x + 3 * r >> 3 & 252,
                      x = 1024 * B + 4 * G,
                      r = c[t + 2],
                      m[x] = q[r & 3],
                      m[x + 1] = q[r >> 2 & 3],
                      m[x + 2] = q[r >> 4 & 3],
                      m[x + 3] = q[r >> 6 & 3],
                      x += 256,
                      m[x] = q[r >> 8 & 3],
                      m[x + 1] = q[r >> 10 & 3],
                      m[x + 2] = q[r >> 12 & 3],
                      m[x + 3] = q[r >> 14],
                      r = c[t + 3],
                      x += 256,
                      m[x] = q[r & 3],
                      m[x + 1] = q[r >> 2 & 3],
                      m[x + 2] = q[r >> 4 & 3],
                      m[x + 3] = q[r >> 6 & 3],
                      x += 256,
                      m[x] = q[r >> 8 & 3],
                      m[x + 1] = q[r >> 10 & 3],
                      m[x + 2] = q[r >> 12 & 3],
                      m[x + 3] = q[r >> 14];
                f.rE(k, 0, 256 * b.x, 256 * b.y, 256, 256, 6409, 5121, m)
              } else
                c = EBg(c),
                  f.rE(k, 0, 256 * b.x, 256 * b.y, 256, 256, 6407, 33635, c);
              f.bindTexture(34067, g);
              b.V = null;
              b.W = !0;
              a.ta += 1;
              a.Pa()
            }
          }
        );
        b.V = c;
        _.yG(a.hb, b.$, 2)
      }
        , ACg = function (a, b) {
        sCg(a, b.zoom) && (a.Eb.V(a.V + b.T + "_" + b.zoom + "_" + b.x + "_" + b.y + ".dds", function (c) {
          zCg(a, b, c)
        }),
          b.ha = !0,
          a.va += 1)
      }
        , BCg = function (a, b, c, e, f, g, k, m, q, r, t, x) {
        0 == t && (k &= 31,
          m &= 31,
          q &= 31,
          r &= 31,
          0 == k && 0 == m && 0 == q && 0 == r ? t = 1 : 0 != (k & m & q & r) && (t = 2));
        b.visibility = t;
        if (0 == b.zoom || 2 != t)
          if (b.ha || ACg(a, b),
          b.zoom < Math.min(x, a.$)) {
            var B = a.R[4 + 5 * b.zoom]
              , G = a.R[5 + 5 * b.zoom]
              , I = a.R[6 + 5 * b.zoom]
              , T = a.R[7 + 5 * b.zoom]
              , aa = a.R[8 + 5 * b.zoom];
            BBg(c, e, B);
            BBg(c, f, G);
            BBg(e, g, I);
            BBg(f, g, T);
            BBg(G, I, aa);
            var ia = p9(B)
              , ha = p9(G)
              , sa = p9(I)
              , ra = p9(T)
              , Ea = p9(aa);
            BCg(a, b.H[0], c, B, G, aa, k, ia, ha, Ea, t, x);
            BCg(a, b.H[1], B, e, aa, I, ia, m, Ea, sa, t, x);
            BCg(a, b.H[2], G, aa, f, T, ha, Ea, q, ra, t, x);
            BCg(a, b.H[3], aa, I, T, g, Ea, sa, ra, r, t, x)
          }
      }
        , CCg = function (a, b, c) {
        pCg(a);
        wCg(a);
        if (a.H && a.V) {
          b = yCg(a, b);
          for (var e = 0; 6 > e; ++e) {
            var f = a.R[0]
              , g = a.R[1]
              , k = a.R[2]
              , m = a.R[3];
            _.ZMb(e, -1, -1, f);
            _.ZMb(e, 1, -1, g);
            _.ZMb(e, -1, 1, k);
            _.ZMb(e, 1, 1, m);
            oCg(c, f, f);
            oCg(c, g, g);
            oCg(c, k, k);
            oCg(c, m, m);
            BCg(a, a.H[e], f, g, k, m, p9(f), p9(g), p9(k), p9(m), 0, b)
          }
        }
      }
        , DCg = function (a, b, c, e) {
        if (0 == b.zoom || mCg(b, c))
          if (b.ha || ACg(a, b),
          b.zoom < e)
            for (var f = 0; 4 > f; ++f)
              DCg(a, b.H[f], c, e)
      }
        , ECg = function (a, b) {
        pCg(a);
        wCg(a);
        if (a.H && a.V && a.va < a.ra)
          for (var c = 0; c < b.length; c++)
            for (var e = b[c].dj.R, f = xCg(a, b[c]), g = 0; 6 > g; ++g)
              DCg(a, a.H[g], e, f)
      }
        , FCg = function (a, b, c, e) {
        if (!mCg(b, c))
          return e;
        if (!b.W)
          return 0;
        for (var f = e, g = 0; 4 > g && f > b.zoom; ++g)
          f = Math.min(f, FCg(a, b.H[g], c, e));
        return Math.max(b.zoom, f)
      }
        , GCg = function (a, b, c, e) {
        pCg(a);
        var f = xCg(a, c);
        if (a.ta < a.ra) {
          c = c.dj.R;
          for (var g = 0; 6 > g; ++g)
            f = Math.min(f, FCg(a, a.H[g], c, f))
        }
        c = a.W;
        c.activeTexture(33984 + e);
        tCg(a) ? c.bindTexture(34067, sCg(a, f)) : c.bindTexture(34067, qCg(a));
        b.set(e)
      }
        , HCg = function (a, b, c, e) {
        if (2 == b.visibility)
          return !0;
        var f = a.Fb
          , g = tCg(a) ? sCg(a, b.zoom) : qCg(a);
        if (!b.W)
          return 0 == b.zoom && (nCg(b, f),
            c(f, g)),
            !1;
        if (b.zoom < e)
          for (var k = 0; 4 > k; ++k)
            HCg(a, b.H[k], c, e) || (nCg(b.H[k], f),
              c(f, g));
        else
          nCg(b, f),
            c(f, g);
        return !0
      }
        , ICg = function (a, b, c) {
        pCg(a);
        b = yCg(a, b);
        for (var e = 0; 6 > e; ++e)
          HCg(a, a.H[e], c, b)
      }
        , JCg = function (a) {
        return a.va === a.ta
      }
        , KCg = function (a, b) {
        var c = a[0]
          , e = a[1];
        a = a[2];
        var f = 1 / Math.sqrt(c * c + e * e + a * a);
        b[0] = c * f;
        b[1] = e * f;
        b[2] = a * f
      }
        , LCg = function (a) {
        a.se();
        return a.W
      }
        , MCg = function (a) {
        a.se();
        a.ra && (_.zw(a.R, a.wa),
          a.ra = !1);
        return a.wa
      }
        , q9 = function (a, b) {
        a.se();
        _.xIa(MCg(a), b)
      }
        , NCg = function (a, b, c) {
        a = MCg(a);
        _.xIa(a, b);
        _.zIb(a, 2, _.vMb);
        _.mw(c, -_.vMb[0], -_.vMb[1], -_.vMb[2]);
        _.qw(c, c)
      }
        , OCg = function (a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        return a
      }
        , PCg = function (a, b, c, e, f, g) {
        b *= 4;
        a[b] = c;
        a[b + 1] = e;
        a[b + 2] = f;
        a[b + 3] = g
      }
        , QCg = function (a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2]
      }
        , RCg = function (a, b, c) {
        var e = a[0]
          , f = a[1];
        a = a[2];
        var g = b[0]
          , k = b[1];
        b = b[2];
        c[0] = f * b - a * k;
        c[1] = a * g - e * b;
        c[2] = e * k - f * g;
        return c
      }
        , Uzg = function (a, b) {
        _.SJ.call(this, a, b)
      };
      _.J(Uzg, _.SJ);
      var SCg = function (a, b, c) {
        a[b] = c[0];
        a[b + 3] = c[1];
        a[b + 6] = c[2]
      }, TCg = function (a) {
        var b = _.RK[0]
          , c = _.RK[1]
          , e = _.RK[2]
          , f = Math.cos(a)
          , g = 1 - f;
        a = Math.sin(a);
        _.UK[0] = b * b * g + f;
        _.UK[1] = b * c * g + e * a;
        _.UK[2] = b * e * g - c * a;
        _.UK[3] = b * c * g - e * a;
        _.UK[4] = c * c * g + f;
        _.UK[5] = c * e * g + b * a;
        _.UK[6] = b * e * g + c * a;
        _.UK[7] = c * e * g - b * a;
        _.UK[8] = e * e * g + f
      }, UCg = {
        NONE: 0,
        UYa: 1,
        Q6d: 2,
        dnd: 3,
        DMd: 4,
        gVd: 5
      }, VCg = function (a, b, c) {
        for (var e = 0; 6 > e; ++e)
          if (0 != (c & 1 << e) && 0 < _.rw(a[e], b) + a[e][3])
            return !1;
        return !0
      }, WCg, KAg = function () {
        WCg || (WCg = _.KAa(_.pOb([/* TODO: sets up worker with maps4.js */])));
        return WCg
      }, XCg, Kzg = function (a) {
        this.U = a || []
      };
      _.J(Kzg, _.K);
      var YCg = function (a) {
        var b = _.nB;
        XCg || (XCg = {
          Da: "m",
          Ra: ["su"]
        });
        var c = XCg;
        return b.Ne(a.ve(), c)
      }
        , ZCg = function (a) {
        this.U = a || []
      };
      _.J(ZCg, _.K);
      ZCg.prototype.Cj = function () {
        return _.N(this, 0)
      }
      ;
      var $Cg = function () {
        this.headNodePath = "";
        this.obbRotations = this.obbExtents = this.obbCenters = this.metersPerTexel = this.flags = this.bulkMetadataEpoch = this.epoch = this.childIndices = null;
        this.defaultImageryEpoch = 0;
        this.imageryEpochArray = null;
        this.defaultTextureFormat = 0;
        this.textureFormatArray = null;
        this.defaultAvailableViewDirections = 0;
        this.childBulkMetadata = this.nodes = this.viewDependentTextureFormatArray = this.availableViewDirectionsArray = null
      }
        , aDg = function (a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8]
      }
        , bDg = function (a, b, c) {
        var e = a[0]
          , f = a[1]
          , g = a[2]
          , k = a[3]
          , m = a[4]
          , q = a[5]
          , r = a[6]
          , t = a[7];
        a = a[8];
        var x = b[0]
          , B = b[1]
          , G = b[2]
          , I = b[3]
          , T = b[4]
          , aa = b[5]
          , ia = b[6]
          , ha = b[7];
        b = b[8];
        c[0] = e * x + k * B + r * G;
        c[1] = f * x + m * B + t * G;
        c[2] = g * x + q * B + a * G;
        c[3] = e * I + k * T + r * aa;
        c[4] = f * I + m * T + t * aa;
        c[5] = g * I + q * T + a * aa;
        c[6] = e * ia + k * ha + r * b;
        c[7] = f * ia + m * ha + t * b;
        c[8] = g * ia + q * ha + a * b
      }
        , cDg = function (a, b, c, e) {
        var f = Math.cos(b)
          , g = 1 - f;
        b = Math.sin(b);
        a[0] = 0 * g + f;
        a[1] = 0 * c * g + e * b;
        a[2] = 0 * e * g - c * b;
        a[3] = 0 * c * g - e * b;
        a[4] = c * c * g + f;
        a[5] = c * e * g + 0 * b;
        a[6] = 0 * e * g + c * b;
        a[7] = c * e * g - 0 * b;
        a[8] = e * e * g + f
      }
        , dDg = function (a, b, c, e, f, g, k, m) {
        var q = 3 * e
          , r = 9 * e;
        e = b[q];
        var t = b[q + 1];
        b = b[q + 2];
        var x = c[r]
          , B = c[r + 1]
          , G = c[r + 2]
          , I = c[r + 3]
          , T = c[r + 4]
          , aa = c[r + 5]
          , ia = c[r + 6]
          , ha = c[r + 7];
        c = c[r + 8];
        r = f[0] - a[q];
        var sa = f[1] - a[q + 1];
        a = f[2] - a[q + 2];
        _.JMb[0] = r * x + sa * I + a * ia;
        _.JMb[1] = r * B + sa * T + a * ha;
        _.JMb[2] = r * G + sa * aa + a * c;
        _.JK[0] = g[0] * x + g[1] * I + g[2] * ia;
        _.JK[1] = g[0] * B + g[1] * T + g[2] * ha;
        _.JK[2] = g[0] * G + g[1] * aa + g[2] * c;
        _.IMb[0] = -e;
        _.IMb[1] = -t;
        _.IMb[2] = -b;
        _.IMb[3] = e;
        _.IMb[4] = t;
        _.IMb[5] = b;
        g = k || Infinity;
        f = m || _.KMb;
        m = _.JK[0];
        k = _.JK[1];
        a = _.JK[2];
        _.mw(_.JK, 1 / m, 1 / k, 1 / a);
        g = FBg(_.IMb, _.JMb, _.JK, g, f);
        _.mw(_.JK, m, k, a);
        return g
      }
        , eDg = function (a, b) {
        this.buffer = a;
        this.H = b
      }
        , fDg = function (a, b) {
        this.R = a;
        this.H = b
      }
        , gDg = function (a, b) {
        var c = a.createBuffer();
        a.bindBuffer(34962, c);
        a.bufferData(34962, b, 35044);
        return new eDg(c, b.byteLength)
      }
        , hDg = function (a, b, c, e) {
        var f = a.Ba;
        a.T && f.deleteBuffer(a.T);
        a.V && f.deleteTexture(a.V);
        a.R -= a.Ca;
        a.H -= a.va;
        a.V = b ? b.R : null;
        a.T = c ? c.buffer : null;
        a.Ma = e;
        a.Ca = b ? b.H : 0;
        a.va = c ? c.H : 0;
        a.R += a.Ca;
        a.H += a.va
      };
      xzg.prototype.init = function (a, b, c, e) {
        this.dj = a;
        this.V = b;
        this.Aa = 0 < c.length ? c : b;
        this.ta = e;
        this.H = b.concat(c);
        e && this.H.push(e);
        iDg(this)
      }
      ;
      var iDg = function (a) {
        for (var b = a.vG = a.wG = 0; b < a.H.length; b++)
          a.vG += a.H[b].H,
            a.wG += a.H[b].R
      };
      xzg.prototype.QC = function () {
        return this.dj.QC()
      }
      ;
      var jDg = function (a) {
        return a.vG + a.wG
      };
      xzg.prototype.Cu = function () {
        return this.dj.Cu()
      }
      ;
      var yzg = function (a, b) {
        this.H = a.length / 2;
        this.T = a;
        this.V = new Float64Array(4);
        this.W = b;
        this.R = new Float64Array(this.H)
      }
        , kDg = function (a, b, c) {
        _.YE.call(this, 8, 1);
        this.H = a;
        this.V = b;
        this.T = c
      };
      _.F(kDg, _.YE);
      kDg.prototype.start = function () {
        var a = this.H.H
          , b = this.H.T
          , c = this.H.R
          , e = this.H.V;
        e[0] = e[1] = Infinity;
        e[2] = e[3] = -Infinity;
        for (var f = this.V, g = 0, k = this.T, m = 0; m < a; m++) {
          var q = b[2 * m]
            , r = b[2 * m + 1];
          e[0] = q < e[0] ? q : e[0];
          e[1] = r < e[1] ? r : e[1];
          e[2] = q > e[2] ? q : e[2];
          e[3] = r > e[3] ? r : e[3];
          q = f(q, r, k);
          isFinite(q) && g++;
          c[m] = q
        }
        0 < g && this.H.W(c);
        return _.ZE
      }
      ;
      var lDg = function (a, b, c, e) {
        _.YE.call(this, 9, 1);
        this.T = a;
        this.V = b;
        this.H = c;
        this.W = e
      };
      _.F(lDg, _.YE);
      lDg.prototype.start = function () {
        for (var a = this.T.H, b = this.T.T, c = this.T.R, e = 0, f = 0; f < a; f++) {
          var g = b[2 * f]
            , k = b[2 * f + 1];
          g >= this.H[0] && g <= this.H[3] && k >= this.H[1] && k <= this.H[4] && !isFinite(c[f]) && (c[f] = this.V(g, k, this.W),
          isFinite(c[f]) && e++)
        }
        0 < e && this.T.W(c);
        return _.ZE
      }
      ;
      zzg.prototype.init = function (a, b) {
        a = new kDg(this.R, a, b);
        _.yG(this.T, a, 1);
        this.H.push(a)
      }
      ;
      zzg.prototype.stop = function () {
        for (var a = 0; a != this.H.length; ++a)
          this.H[a].R = null
      }
      ;
      Azg.prototype.V = function (a, b) {
        var c = this.R[a];
        if (c)
          _.mbb(this.H, c),
            c = this.H.get(c),
            b(c);
        else {
          var e = this;
          _.RE(this.T, new _.EK(a, function (c) {
              mDg(e, a, b, c)
            }
            , _.nr, !1), 2)
        }
      }
      ;
      var mDg = function (a, b, c, e) {
        var f = a.H.add(e, function () {
          delete a.R[b]
        }, e.byteLength);
        a.R[b] = f;
        c(e)
      }
        , Ezg = function (a, b) {
        for (var c; c = b.next();)
          switch (c) {
            case 1:
              c = b.HA();
              for (Dzg(b, b.uA() + c); c = b.next();)
                switch (c) {
                  case 2:
                    a.$ = b.Q7();
                    break;
                  case 5:
                    a.R = b.Q7();
                    break;
                  default:
                    Hzg(b)
                }
              Fzg(b);
              break;
            case 2:
              a.W = VBg(b);
              break;
            case 3:
              a.V = VBg(b);
              break;
            case 4:
              a.T = VBg(b);
              break;
            default:
              Hzg(b)
          }
        -1 == a.R && (a.R = a.$)
      };
      Bzg.prototype.H = function () {
        return this.W
      }
      ;
      Jzg.prototype.ku = function () {
        return this.T
      }
      ;
      Lzg.prototype.to = function (a) {
        return this.wa[a] || null
      }
      ;
      var oDg = function (a) {
        if (-1 == a.H)
          return null;
        var b = a.to("");
        b || nDg(a, "", a.H, 3);
        return b
      }
        , pDg = function (a) {
        var b = new ZCg;
        b.U[0] = a.H;
        b = _.nB.Ne(b.ve(), "u");
        b = a.va + "/Copyrights/pb=" + encodeURIComponent(b);
        _.RE(a.Aa, new _.EK(b, function (b) {
            var c = a.W;
            b = new Uint8Array(b);
            b = new _.nMb(b);
            for (var f; f = b.next();)
              switch (f) {
                case 1:
                  f = b.HA();
                  Dzg(b, b.uA() + f);
                  for (var g = void 0, k = void 0, m = void 0; f = b.next();)
                    switch (f) {
                      case 1:
                        g = b.HA();
                        break;
                      case 2:
                        k = Gzg(b);
                        break;
                      case 3:
                        m = Gzg(b);
                        break;
                      default:
                        Hzg(b)
                    }
                  Fzg(b);
                  _.Kq(m) && (k = m);
                  "" == k && (k = _.ila);
                  _.Kq(g) && _.Kq(k) && (c.H[g] = k);
                  break;
                default:
                  Hzg(b)
              }
            a.Ga = !0
          }
          , a.Ca, !0), 1)
      };
      Lzg.prototype.init = function () {
        this.ha = !0;
        oDg(this);
        var a = this;
        _.RE(this.Aa, new _.EK(this.va + "/PlanetoidMetadata", function (b) {
            a.R = new Bzg;
            var c = a.R;
            b = new Uint8Array(b);
            b = new _.nMb(b);
            Ezg(c, b);
            -1 == a.H && (a.H = a.R.R);
            oDg(a);
            --a.T
          }
          , this.Ca, !0), 3);
        ++this.T
      }
      ;
      var nDg = function (a, b, c, e) {
        a.ha && !a.ta[b] && (a.ta[b] = 1,
          LBg(new IBg(_.P(a.ra, 0)), b),
          MBg(new IBg(_.P(a.ra, 0)), c),
          b = YCg(a.ra),
          b = a.va + "/BulkMetadata/pb=" + encodeURIComponent(b),
          _.RE(a.Aa, new _.EK(b, function (b) {
              qDg(a, b)
            }
            , a.Ca, !0), e),
          ++a.T)
      }
        , qDg = function (a, b) {
        var c = new _.Irg(0, b, [b], function (b) {
            var e = c
              , g = b.headNodePath;
            a.ta[g] = 2;
            a.wa[g] = b;
            g = b.headNodePath;
            if (g.length) {
              var k = g.substr(0, g.length - 4)
                , m = a.wa[k];
              m ? rDg(b, m) : (a.$[k] || (a.$[k] = []),
                a.$[k].push(b))
            }
            if (k = a.$[g]) {
              for (m = 0; m < k.length; ++m)
                rDg(k[m], b);
              delete a.$[g]
            }
            a.Ba.add(0, 1);
            a.Ba.add(1, e.H);
            --a.T;
            for (e = 0; e < a.V.length; ++e)
              a.V[e].V(b)
          }
        );
        _.Jrg(a.Ja, c, 2)
      }
        , rDg = function (a, b) {
        b.childBulkMetadata || (b.childBulkMetadata = Array(b.flags.length));
        for (var c = -1, e = a.headNodePath, f = e.length - 4; f < e.length; ++f)
          c = b.childIndices[8 * (c + 1) + (e.charCodeAt(f) - 48)];
        b.childBulkMetadata[c] = a
      };
      Lzg.prototype.La = function () {
        --this.T
      }
      ;
      var sDg = [0, 1]
        , tDg = [0, 1]
        , uDg = [0, 1]
        , vDg = [0, 1]
        , wDg = [0, 1]
        , xDg = [0, 1]
        , Ozg = function () {
        this.$ = sDg[0];
        this.T = tDg[0];
        this.ra = uDg[0];
        this.V = vDg[0];
        this.W = wDg[0];
        this.R = xDg[0];
        this.ha = -1;
        this.H = !0
      }
        , bAg = function (a, b) {
        a.V != b && (a.H = !0,
          a.V = +b)
      }
        , cAg = function (a, b) {
        a.W != b && (a.H = !0,
          a.W = +b)
      };
      Ozg.prototype.Dd = function () {
        if (this.H) {
          var a = 1;
          var b = a * sDg.indexOf(this.$);
          a *= sDg.length;
          b += a * tDg.indexOf(this.T);
          a *= tDg.length;
          b += a * uDg.indexOf(this.ra);
          a *= uDg.length;
          b += a * vDg.indexOf(this.V);
          a *= vDg.length;
          b += a * wDg.indexOf(this.W);
          a *= wDg.length;
          this.ha = b += a * xDg.indexOf(this.R);
          this.H = !1
        }
        return this.ha
      }
      ;
      _.J(Pzg, _.QJ);
      var yDg = [0, 1]
        , zDg = [0, 1]
        , ADg = [0, 1]
        , BDg = [0, 1]
        , CDg = [0, 1]
        , DDg = [0, 1]
        , EDg = [0, 1]
        , FDg = [0, 1]
        , GDg = [0, 1]
        , HDg = [0, 1]
        , IDg = [0, 1]
        , JDg = [0, 1]
        , KDg = [0, 1]
        , LDg = [0, 1]
        , MDg = [0, 1]
        , NDg = [0, 1]
        , ODg = [0, 1]
        , PDg = [0, 1]
        , QDg = [0, 1]
        , RDg = [0, 1]
        , SDg = [0, 1]
        , TDg = [0, 1]
        , UDg = [0, 1]
        , Szg = function () {
        this.Aa = yDg[0];
        this.Ja = zDg[0];
        this.ra = ADg[0];
        this.Ga = BDg[0];
        this.Xa = CDg[0];
        this.va = DDg[0];
        this.La = EDg[0];
        this.nb = FDg[0];
        this.Oa = GDg[0];
        this.Pa = HDg[0];
        this.Ma = IDg[0];
        this.T = JDg[0];
        this.V = KDg[0];
        this.Ba = LDg[0];
        this.W = MDg[0];
        this.Ca = NDg[0];
        this.$ = ODg[0];
        this.ha = PDg[0];
        this.ta = QDg[0];
        this.R = RDg[0];
        this.Eb = SDg[0];
        this.Fb = TDg[0];
        this.wa = UDg[0];
        this.hb = -1;
        this.H = !0
      };
      Szg.prototype.Dd = function () {
        if (this.H) {
          var a = 1;
          var b = a * yDg.indexOf(this.Aa);
          a *= yDg.length;
          b += a * zDg.indexOf(this.Ja);
          a *= zDg.length;
          b += a * ADg.indexOf(this.ra);
          a *= ADg.length;
          b += a * BDg.indexOf(this.Ga);
          a *= BDg.length;
          b += a * CDg.indexOf(this.Xa);
          a *= CDg.length;
          b += a * DDg.indexOf(this.va);
          a *= DDg.length;
          b += a * EDg.indexOf(this.La);
          a *= EDg.length;
          b += a * FDg.indexOf(this.nb);
          a *= FDg.length;
          b += a * GDg.indexOf(this.Oa);
          a *= GDg.length;
          b += a * HDg.indexOf(this.Pa);
          a *= HDg.length;
          b += a * IDg.indexOf(this.Ma);
          a *= IDg.length;
          b += a * JDg.indexOf(this.T);
          a *= JDg.length;
          b += a * KDg.indexOf(this.V);
          a *= KDg.length;
          b += a * LDg.indexOf(this.Ba);
          a *= LDg.length;
          b += a * MDg.indexOf(this.W);
          a *= MDg.length;
          b += a * NDg.indexOf(this.Ca);
          a *= NDg.length;
          b += a * ODg.indexOf(this.$);
          a *= ODg.length;
          b += a * PDg.indexOf(this.ha);
          a *= PDg.length;
          b += a * QDg.indexOf(this.ta);
          a *= QDg.length;
          b += a * RDg.indexOf(this.R);
          a *= RDg.length;
          b += a * SDg.indexOf(this.Eb);
          a *= SDg.length;
          b += a * TDg.indexOf(this.Fb);
          a *= TDg.length;
          this.hb = b += a * UDg.indexOf(this.wa);
          this.H = !1
        }
        return this.hb
      }
      ;
      _.J(Tzg, _.QJ);
      var VDg = [0, 1]
        , WDg = [0, 1]
        , XDg = [0, 1]
        , YDg = [0, 1]
        , ZDg = [0, 1]
        , $Dg = [0, 1]
        , aEg = [0, 1]
        , bEg = [0, 1]
        , cEg = [0, 1]
        , dEg = [0, 1]
        , eEg = [0, 1]
        , fEg = [0, 1]
        , gEg = [0, 1]
        , hEg = [0, 1]
        , Xzg = function () {
        this.$ = VDg[0];
        this.T = WDg[0];
        this.R = XDg[0];
        this.W = YDg[0];
        this.ra = ZDg[0];
        this.V = $Dg[0];
        this.ha = aEg[0];
        this.Ba = bEg[0];
        this.ta = cEg[0];
        this.Ja = dEg[0];
        this.va = eEg[0];
        this.Aa = fEg[0];
        this.wa = gEg[0];
        this.Ca = hEg[0];
        this.Ga = -1;
        this.H = !0
      };
      Xzg.prototype.Dd = function () {
        if (this.H) {
          var a = 1;
          var b = a * VDg.indexOf(this.$);
          a *= VDg.length;
          b += a * WDg.indexOf(this.T);
          a *= WDg.length;
          b += a * XDg.indexOf(this.R);
          a *= XDg.length;
          b += a * YDg.indexOf(this.W);
          a *= YDg.length;
          b += a * ZDg.indexOf(this.ra);
          a *= ZDg.length;
          b += a * $Dg.indexOf(this.V);
          a *= $Dg.length;
          b += a * aEg.indexOf(this.ha);
          a *= aEg.length;
          b += a * bEg.indexOf(this.Ba);
          a *= bEg.length;
          b += a * cEg.indexOf(this.ta);
          a *= cEg.length;
          b += a * dEg.indexOf(this.Ja);
          a *= dEg.length;
          b += a * eEg.indexOf(this.va);
          a *= eEg.length;
          b += a * fEg.indexOf(this.Aa);
          a *= fEg.length;
          b += a * gEg.indexOf(this.wa);
          a *= gEg.length;
          this.Ga = b += a * hEg.indexOf(this.Ca);
          this.H = !1
        }
        return this.Ga
      }
      ;
      _.J(Yzg, _.QJ);
      var iEg = function (a) {
        return 0 < a.R.R && vCg(a.H)
      }
        , jEg = function (a, b) {
        b.R.T.set(a.R.Aa, a.R.Ba, a.R.wa / Math.PI, a.R.R)
      }
        , kEg = function (a, b, c, e) {
        GCg(a.H, b.R.Ma, c, e);
        return e + 1
      }
        , lEg = function (a, b, c) {
        var e = -a[3];
        if (1 <= Math.abs(e))
          return !1;
        _.sw(a, b, c);
        1E-6 > _.pIa(c) ? (_.mw(c, 0, 0, 1),
          _.sw(a, c, c)) : _.sw(c, a, c);
        _.qw(c, c);
        b = Math.sqrt(1 - e * e);
        c[0] = a[0] * e + c[0] * b;
        c[1] = a[1] * e + c[1] * b;
        c[2] = a[2] * e + c[2] * b;
        return !0
      }
        , mEg = function (a, b, c, e, f) {
        if (1 <= Math.abs(b[3]) || 1 <= Math.abs(c[3]))
          return !1;
        _.sw(b, c, e);
        _.qw(e, e);
        a = a.ha;
        SCg(a, 0, b);
        SCg(a, 1, c);
        SCg(a, 2, e);
        _.oJb(a, a);
        _.mw(f, -b[3], -c[3], 0);
        _.pJb(a, f, f);
        c = _.rw(e, f);
        b = c * c - (_.rw(f, f) - 1);
        if (0 > b)
          return !1;
        b = Math.sqrt(b);
        c = -c - b;
        _.mw(f, f[0] + c * e[0], f[1] + c * e[1], f[2] + c * e[2]);
        b *= 2;
        _.mw(e, f[0] + b * e[0], f[1] + b * e[1], f[2] + b * e[2]);
        return !0
      }
        , nEg = function (a, b, c) {
        if (0 == b)
          return c;
        var e = (0,
          _.Uq)()
          , f = e - a.V;
        a.V = e;
        a = _.bu(b, c, 1 - Math.exp(-f / 400));
        return .01 > Math.abs(a / c - 1) ? c : a
      }
        , oEg = function (a, b, c) {
        a = nEg(a, b, 20);
        20 != a && c();
        return a
      }
        , pEg = function (a, b, c, e, f) {
        var g = b.H;
        1 == g.T && 1 == g.V ? g = b : (b = new _.FK,
          b.Fa(g),
          b.T = 1,
          b.V = 1,
          b.wa = 0,
          b.Aa = 0,
          ++b.R,
          g = new _.Wsg(b));
        b = a.W;
        q9(g, b);
        var k = 1 / 6371010;
        _.pw(b, k, b);
        var m = _.yJ(b);
        1.0001 > m && (_.pw(b, 1.0001 / m, b),
          m = 1.0001);
        var q = a.$;
        _.ULb(q, _.K8(g));
        for (var r = 0; 6 > r; ++r)
          q[r][3] *= k;
        _.vw(q[5], -b[0], -b[1], -b[2], 1);
        _.ILb(q[5], 1 / m, q[5]);
        if (VCg(q, c, 63))
          c = _.rw(c, c) + .1;
        else {
          k = -1;
          var t = a.R;
          if (lEg(q[5], c, t))
            if (VCg(q, t, 31))
              k = Math.max(k, _.rw(t, c) + .1);
            else {
              var x = a.T;
              for (r = 0; 4 > r; ++r)
                mEg(a, q[r], q[5], t, x) && (VCg(q, t, 31 & ~(1 << r)) && (k = Math.max(k, _.rw(t, c) + .1)),
                VCg(q, x, 31 & ~(1 << r)) && (k = Math.max(k, _.rw(x, c) + .1)))
            }
          for (r = 0; 4 > r; ++r)
            lEg(q[r], c, t) && VCg(q, t, 63 & ~(1 << r)) && (k = Math.max(k, _.rw(t, c) + .1));
          for (r = 0; 4 > r; ++r) {
            x = 0 != (r & 1) ? g.H.Pb() : 0;
            var B = 0 != r >> 1 ? g.H.ub() : 0;
            q = a.T;
            _.L8(g, x, B, a.R, q);
            x = _.rw(b, q);
            B = x * x - (m * m - 1);
            0 <= B && (x = -x - Math.sqrt(B),
            0 < x && (_.pw(q, x, q),
              _.nw(b, q, t),
              k = Math.max(k, _.rw(t, c) + .1)))
          }
          c = k
        }
        c = _.$t(a.H.H(c), 20, 80);
        a = nEg(a, e, c);
        a != c && f();
        return a
      }
        , qEg = function () {
        this.uG = null;
        this.xs = [];
        this.$w = [];
        this.gG = this.fG = this.hG = this.iD = this.iH = this.mE = null;
        this.H = [];
        this.R = !1
      }
        , rEg = function (a, b, c, e, f) {
        var g = a.wd
          , k = 3 == a.R;
        g.va != k && (g.H = !0,
          g.va = +k);
        k = 2 == a.R;
        g.Aa != k && (g.H = !0,
          g.Aa = +k);
        k = 4 == a.R;
        g.wa != k && (g.H = !0,
          g.wa = +k);
        g.$ != b && (g.H = !0,
          g.$ = +b);
        g.W != c && (g.H = !0,
          g.W = +c);
        1 == a.R ? (g.R != c && (g.H = !0,
          g.R = +c),
        g.T != e && (g.H = !0,
          g.T = +e)) : (0 != g.R && (g.H = !0,
          g.R = 0),
        0 != g.T && (g.H = !0,
          g.T = 0));
        b = 0 != a.R;
        g.V != b && (g.H = !0,
          g.V = +b);
        b = a.Aa;
        g.ta != b && (g.H = !0,
          g.ta = +b);
        b = a.Gc;
        g.ra != b && (g.H = !0,
          g.ra = +b);
        g.ha != f && (g.H = !0,
          g.ha = +f);
        f = g.Dd();
        (b = a.Oc[f]) || (a.Oc[f] = b = new Yzg(a.T, g));
        return b
      }
        , uEg = function (a) {
        var b = a.T;
        a.ra = {
          Vm: 0,
          VW: 0,
          WV: 0,
          yS: !1
        };
        var c = new qEg;
        for (k in UCg) {
          var e = UCg[k];
          c.xs[e] = sEg(a);
          b.Tl(3553, 0, 1, 1, 6408, 5121, new Uint8Array([255, 255, 255, 255]));
          a: {
            switch (e) {
              case 3:
              case 4:
                var f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAACACAYAAAA27Cg+AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90MFA0WNToMaj8AAAOxSURBVFjD3VdLsuNEEEy15fGbNy94A1fgBESwYM3JuA434AacghXBYt7XP1ndqk+y0MeyrJYJYEFghzfuVGVVVla5jZ9/+ZW//f7lp31V/9iIfmtm37j7vbuv3b0IIEkAIGZfgWT2sAPMfs8zACTRvudAbYRlCi6dI/RFTLlHOQDnSpgpM/s8MAiVy7UTisWSUFyswm9L3avIBR2ILE+4wdAryawUbQ78C70gUOSrWEgk+NBOLnkyDwkkF30bvFcyI2agL3su8FaSzt74ectxyfrBfXLK2Qh5RwSnL453oHeTudgLLswFLxDXsOB0DC3PlMlFR3mHWChz1M0ZwUcRmHG1L493cPeJJS5RwdxJb33JXDeXFtmZIi/UoFQx8HOuzMwKCOZO99EqnjrKrbNMzg99mblFFNysqyKjZJuDd2Ve78vg5n45PJMfFDPrImQpbCjzHIMjgI1zwJXkwczcOrXnlexycM47IpgazRz0+Y52FJ5vt5rS7OyJKS6YmpsbWmeB1540dbM2ybmWB1WljtS86qapuqnBMzs7qKqrGaYzyjFA1GjWe4KTXqi6qg394FlOdhHERRTWyT3NI6iIiyrVzv2Y9EJMRGDWi8ULMYKKeNMoz3lceiKYijXSUHSIcEETVMWbJBS1UaJn1YNJY6lpKDLqar+O2FGklNiIQAfjDDIgmDYWY/LUCNVammHaQQRX0RgjYxK0eXBYByBQmonFuvY6JjZtHvDRMLcR6pp1TEiNYEoTaKKxPnl1qkc0zrb7ZKCLxvpkx+OJPY2ao5+Vkm4ST5UfjhWPp4iYBCIGXTtCUSCQKqmubL8/8HA88RQTkrS5qDtK0KSpK9vvdr7dH3GoIusovPuwBlC0AEmV7bZbvr3vuDtUOD4+4G6zBgGUABpNJ91t3/zl5Y0vbzt+/fiAzYeSaoYSQHKNety++dPTM788v+HzVw9clyvcpw1WAH4gipeivHu/+/R4/PjpIW42GytCwZgEKwDfg3hlsdqG8mNVfrhLYbVSc3J/qLAC8B2AVzp3jtWJWCV1Wh0bf359RwkgAmxo0er9sz/9saY0Ca8vz3DzHoAGNNW45/GVaGLF96d7qDYjAGjw5BqdJifEUILWAlL3EYAONqTK8CPZRxAAdh7s82CE7ukGgALw62vz+bAHcApIk8MrgIwAV6CewubC9wCdAGYpbkbw3AUhdE+PRLqmyB6OAZ67q4Vc/VMAb0XIXrXC8t+wfysCbgH+eYT/EoD/iyr+HuBPulC7NI9WqdwAAAAASUVORK5CYII=";
                break a
            }
            f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAACACAYAAAA27Cg+AAADY0lEQVR4XpxVy04cMRDseEEgRCAKEoec8gP5lnxa/ii/kXOUA0jAAruzM2P3o5JZW/JgeTwRK++pS1XV1e0xvf7+yaG7+6Hcfzflb2b6xcyuzezczE4cEWE6Sz+HWMQigBJiGUCgNUDykKVKiVWGEoI5kysK1Tan02oTa22umwRy2lWJNYaVqIGcZGsWaJqM5WYOeHcOcMhJorUPwPq40Uiy1QXeIID3bvXKwoCaHtZyACj9mznUqiiH1fbQ7KIYBRaWdtGkIRXRWNpUBGEhSdD7ljZLLN8NR0gmsWTyP+9FhixJLGk4rH9hDDNQTrVy/dHwQGgHNZ1WF4U0agxoeWhPE7A8rEUPmT2SFQyW9Bc8WGIAlj1kDVQBuU3UTVr76kUPxRSLLgCbC6BkaG81oJVHDXOGKJGDQBmUxiSBeRWFhC0HZVGiljWSBzVCmheqbcYulibmoBolKvpZImdRM5kZUJcQi2tXDQrOjh40zgqodSGaR15JMjFEmWqSIkqmuYgSoGIwAZLRshOnIroqARUkwFwHiYEVJmkvkYtziQkwYyg8sIgpIy5OquMNgBXKBmhkQMEgzBODkqmh8sA5CSKQkBgsFfJNc+yZVfwxrNlUc5scREx88mEob5hjL6zBK4xBUKBo1fmRWXlQ02AwTTKgGUCC+kEw+cDRB2EWhhsHDTwOajIamQDFE+X6CTD0otzbJBMlLNkAub7XEPoDqz8o1CPKzHLoBvO+O4j4vU0yiHNJGJDb9/DD/sDcv6qFDrAAiqniKPEywHcvBw77rYrfmclAMCYyI4KRex7J77ZDGF4flfutWejMdMQEApTcNtD4/OS5e3xQv7s3GbewcADUH5ncLyb/8MTh5f5B+sc/CLs7/AORcgeTnjZEdPvV4XB7hfH65pzPLz/qydkF3OaEiHAEfP5k1N+cqr+6NDm72NjmdEMfHNEk87f9MkhBGAYC4CRNq1a0oBevetSDID7Dj/gJwZd6FUEEpUmtMdGUgiBSP9C5z+wedyNgiKNIrbv3RGkTaZzEeJ7GW32uCoPcU4gHpdDWea2dzS/vXU7cjgcCk1BJoTNXyE0G26lgt1Ls1zGBMdAHYgliBMwkLGNYKCoyoAtEgOCb2k6abuxgq592bbl/L4RqykcAzYXP7JaWF1TA7HyvvlB1AAAAAElFTkSuQmCC"
          }
          tEg(a, c.xs[e], f, (0,
            _.gr)(function (a) {
            c.H[a] = !0
          }, a, e));
          f = 4096;
          c.$w[e] = sEg(a);
          b.Tl(3553, 0, 1, 1, 6408, 5121, new Uint8Array(4));
          a: {
            switch (e) {
              case 3:
              case 4:
                var g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAIAAAAphe5+AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90MFA0WLF5nwv8AAAItSURBVEjHtZbbdusgDEQ1ukD6/99b0wcJEBif5nS1ToIjVmLPZgYloD84kF5/ffR7AIhhVD+91nr6DXHH60WtvUI/zurxnrLbR/BTiXgTT33Bg4DBKwHwwP4M8ybDd2rf+FYAeHgo1h7M7KpjvGnBSR2+FY//Csa78okUkSAK+U4w8pQYtoU/lOl01Iu1WLXhH1rxPKu+1qAwAMwszJPiYAb6aQrd5/fheWafPMvEc4SGxLHqzCIiwtkKyo8Bg00zTiDYjdksuYXooQM+zOtc36GfWURVAyIFaifJRMg3uffjpTGkfG076lAek5raaIR/GMCeIlE1tUkxOKJNzWFGDOvvydw8e3l7s0/cvUtWYWujcccFgllYVK0UM6cQ4RGq1RXKWz5DrVgY7fpgXA4f6GbamrQ1SxrQ/ZQoRMTUaqnFzEwjVG5IwHSULWcbUu4GneGextXJvXoykLTLjwu6IUQAmCAQE6tWX7WWUqyoHyLCvtFHwGKMx24THx3LXIG1mjgzuSdxmKLDi5YC2IhaTDNBWYvYR6m1vmoppZgVU1U1FVHxhLk5vmM6VQfrOJFBnjyP1mH8u9k3WzKRiKBtUd1aI39erfnz86LPCw3SuEA/pLzsVUutjuLxsuBR7Tw9b+4Ve/Q6HjgTYnKil2Ea48HG+Z8tHGgtEIgoEFq7rnZdCaPhatygxAYp0CpWpRZzjGKmatYxOkznGTDdK+8UnUNmDhPViCKDBwAvMF9AjUImnlcl6QAAAABJRU5ErkJggg==";
                break a
            }
            g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAIAAAAphe5+AAAB90lEQVR4XtXU0Y7bIBCF4fnPDDZOstve9P2fdE3lIiMcI60VZS+KhWYUJKwvB4ydB/+e/2QcAGBCW+Ei4HUnbwLEUQNCkqHGe3XwOpeXAZgwSdQcxgDelQ3viCSe2ICE5M8hMAbwGoW3Hf04LzjIhXxDQc/gQPrRs21wIbkBAJMIlzwMGeKwGVfe0Kg/eZHhGYBRE8BSyFNCQbsMcPrAngF8d665iLm+Q5xXhSVXmlwx7QZB1TU5T3McMYN6zcDFeOLkA0huefKYp82gdDCAGV0UjG4Hg8DHSoaA62vR8Bh7Y4HlIOfwOStmlJB3DLUc4AhorAOJk6V5Lq2c9xwn0HaWWXZ7ZM33KeabUsYTCnCjSgDtcKiZtzToQmBMGrYdl0E23wK6NCxRHsked98M+eZpIebGADcJk1XM1tACORyzOg9BNUxj9EDGDk5nkWdAMWNviqwsKr+n8vhQfqS0LD5tUagytEvkhkBG9QA9BqNK2BVds3NHJI7YVvrJIAE2hpXtKV7Wh77+zF+fH+X2qfmeUl58Xjxljyyf5AkPKVAgrx6qRwKx5wMYguYBVCVUHtBIQFPt1jaPf8QzoLRaSrGyhq031l9p/czrcrf5Rlo8phTT5GneDLExpCQP5FUiHAkchGRUDFD7Gk5tekz9ncbqtGZd6fu/SJ8jCB43ZzgAAAAASUVORK5CYII="
          }
          tEg(a, c.$w[e], g);
          f += 4096
        }
        c.mE = sEg(a);
        c.mE.CE(null, 1, 1);
        f += 65536;
        c.uG = b.createBuffer();
        b.bindBuffer(34962, c.uG);
        b.bufferData(34962, new Float32Array([-1, -1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1]), 35044);
        var k = a.Aa ? 5126 : 5121;
        e = a.Aa ? new Float32Array(32768) : new Uint8Array(32768);
        c.iH = sEg(a);
        b.Tl(3553, 0, 1, 1, 6408, 5121, new Uint8Array(4));
        c.iH.CE(new Uint8Array([0, 0, 0, a.Aa ? 0 : 255]), 1, 1);
        f += 4;
        c.iD = sEg(a);
        b.Tl(3553, 0, 64, 64, 6408, k, e);
        f += 16384 * (a.Aa ? 4 : 1);
        c.fG = b.createFramebuffer();
        b.bindFramebuffer(36160, c.fG);
        b.framebufferTexture2D(36160, 36064, 3553, c.iD, 0);
        b.bindFramebuffer(36160, null);
        c.hG = sEg(a);
        b.Tl(3553, 0, 64, 128, 6408, k, e);
        f += 32768 * (a.Aa ? 4 : 1);
        c.gG = b.createFramebuffer();
        b.bindFramebuffer(36160, c.gG);
        b.framebufferTexture2D(36160, 36064, 3553, c.hG, 0);
        b.bindFramebuffer(36160, null);
        a.Ga = b.H.Cw(c, function (b, c) {
          b = a.T;
          for (var e = 0; e < c.xs.length; e++)
            c.xs[e] && b.deleteTexture(c.xs[e]);
          for (e = 0; e < c.$w.length; e++)
            c.$w[e] && b.deleteTexture(c.$w[e]);
          c.mE && b.deleteTexture(c.mE);
          c.uG && b.deleteBuffer(c.uG);
          c.iH && b.deleteTexture(c.iH);
          c.iD && b.deleteTexture(c.iD);
          c.hG && b.deleteTexture(c.hG);
          c.fG && b.deleteFramebuffer(c.fG);
          c.gG && b.deleteFramebuffer(c.gG);
          a.Ga = -1
        }, f, 5)
      }
        , vEg = function (a) {
        var b = a.he;
        _.pw(a.wa, 1.0017134918378796, b);
        var c = _.pIa(b);
        c = 1 >= c ? 0 : Math.sqrt(c - 1);
        var e = a.Bb.H.Pb()
          , f = a.Bb.H.ub()
          , g = a.nb
          , k = a.Ob;
        _.L8(a.Bb, 0, 0, g, k);
        if (_.rw(b, k) > -c)
          return !0;
        _.L8(a.Bb, e, 0, g, k);
        if (_.rw(b, k) > -c)
          return !0;
        _.L8(a.Bb, 0, f, g, k);
        if (_.rw(b, k) > -c)
          return !0;
        _.L8(a.Bb, e, f, g, k);
        return _.rw(b, k) > -c ? !0 : !1
      }
        , yEg = function (a, b) {
        a.Bb = b;
        var c = a.nb
          , e = a.Rc
          , f = 1 / 6371010;
        q9(b, c);
        QCg(e, c);
        _.pw(c, f, a.wa);
        c = a.Sd;
        var g = a.Yd
          , k = a.ye;
        KCg(e, k);
        e = a.Rc;
        e[0] = 0;
        e[1] = 0;
        e[2] = 1;
        KCg(RCg(e, k, c), c);
        RCg(k, c, g);
        e = a.H.ra;
        a.V[0] = e[0] * c[0] + e[1] * g[0] + e[2] * k[0];
        a.V[1] = e[0] * c[1] + e[1] * g[1] + e[2] * k[1];
        a.V[2] = e[0] * c[2] + e[1] * g[2] + e[2] * k[2];
        _.rMb(a.Pa, a.V);
        c = a.nb;
        null != a.H.Gd ? (g = a.H.Gd,
          k = a.ad,
          kCg(k, g, _.KK, c),
          _.qw(c, c),
          QCg(a.Pa, c),
          _.Voc(OCg(a.Ob, a.V), c, a.H.ta, c),
          _.qw(c, c),
          QCg(a.V, c),
          jCg(k, g, a.W),
        1 == a.R && (kCg(_.VMb, g, _.WMb, a.Ba),
          _.pw(a.Ba, f, a.Ba),
          lCg(g, a.va, a.Xa, a.$),
          _.pw(a.va, f, a.va),
          a.$[0] *= f,
          a.$[2] *= f),
          a.ha = pEg(a.qc, a.Bb, c, a.ha, a.Fb)) : (OCg(c, a.V),
          a.ha = oEg(a.qc, a.ha, a.Fb));
        null != a.H.Vm && (a.ha = a.H.Vm);
        a.Ca = _.yJ(a.wa);
        a.La = _.rw(a.wa, c) / a.Ca;
        a.wc = vEg(a);
        wEg(a);
        xEg(a) && (f = a.Ma,
          f[0] = a.W[0],
          f[1] = a.W[3],
          f[2] = a.W[6],
          f[3] = 0,
          f[4] = a.W[1],
          f[5] = a.W[4],
          f[6] = a.W[7],
          f[7] = 0,
          f[8] = a.W[2],
          f[9] = a.W[5],
          f[10] = a.W[8],
          f[11] = 0,
          f[12] = 0,
          f[13] = 0,
          f[14] = 0,
          f[15] = 1,
          _.yw(_.K8(b), f, a.Eb),
          CCg(a.Wb, a.Bb.H, a.Eb))
      }
        , zEg = function (a) {
        if (-1 == a.Ga && (uEg(a),
        -1 == a.Ga))
          return null;
        var b = a.T.H.tHa(a.Ga);
        a.T.H.sj(a.Ga);
        return b
      }
        , AEg = function (a, b, c) {
        a = a.T;
        a.enableVertexAttribArray(b.attributes.H.Va());
        a.bindBuffer(34962, c.uG);
        a.vertexAttribPointer(b.attributes.H.Va(), 4, 5126, !1, 0, 0);
        a.drawArrays(5, 0, 4);
        a.disableVertexAttribArray(b.attributes.H.Va())
      }
        , CEg = function (a, b) {
        var c = a.T;
        c.uniform1f(b.R.Vm.Va(), a.ha * a.H.va);
        b.R.ta && c.uniform1f(b.R.ta.Va(), a.H.Ca);
        var e = _.pC(a.Bb.H.Ac(), a.Bb.H.H)
          , f = a.H.W;
        c.uniform4f(b.R.ha.Va(), a.Ca, a.La, e, f);
        c.uniform3f(b.R.R.Va(), a.wa[0], a.wa[1], a.wa[2]);
        c.uniform3f(b.R.va.Va(), a.V[0], a.V[1], a.V[2]);
        b.R.H && (null != a.H.Gd ? (e = a.nb,
          f = a.Ob,
          _.qw(a.Ba, e),
          OCg(f, a.V),
          _.pw(e, (1 - _.rw(e, f)) / 2, e),
          c.uniform3f(b.R.H.Va(), e[0], e[1], e[2])) : b.R.H.set(0, 0, 0));
        BEg(a) && (c.uniform3f(b.R.W.Va(), a.va[0], a.va[1], a.va[2]),
          c.uniform3f(b.R.V.Va(), a.Xa[0], a.Xa[1], a.Xa[2]),
          c.uniform4f(b.R.$.Va(), a.$[0], a.$[1], a.$[2], a.$[3]),
          c.uniform1f(b.R.ra.Va(), a.H.$))
      }
        , r9 = function (a) {
        var b;
        if (b = 0 < a.H.W) {
          b = zEg(a);
          var c = a.ta[a.R] || a.ta[1]
            , e = b.H[a.R] || b.H[1];
          b = !!c && ABg(c) && ABg(rEg(a, !1, !1, !1, !1)) && null != b && e
        }
        return b
      }
        , DEg = function (a) {
        return r9(a) && a.wc
      }
        , xEg = function (a) {
        return null != a.H.Gd && 0 < a.H.ha && DEg(a)
      }
        , BEg = function (a) {
        if (1 == a.R && null != a.H.Gd && 0 < a.H.$ && r9(a)) {
          var b = a.$[2];
          a = _.yJ(a.va);
          return 0 < b && a < 1 + b
        }
        return !1
      }
        , wEg = function (a) {
        var b = a.T
          , c = zEg(a);
        if (null != c && (c.H[a.R] || c.H[1])) {
          var e = a.Aa ? 0 : a.ha * a.H.va
            , f = 2 == a.H.H;
          if (!(.001 > Math.abs(e - a.ra.Vm) && 1E-6 > Math.abs(a.Ca - a.ra.VW) && .001 > Math.abs(a.La - a.ra.WV) && f == a.ra.yS)) {
            var g = b.isEnabled(3089);
            g && b.disable(3089);
            b.disable(3042);
            b.activeTexture(33984);
            b.bindTexture(3553, c.xs[a.R] || c.xs[1]);
            var k = a.ta[a.R] || a.ta[1];
            _.TJ(k);
            k.R.R.set(0);
            k.R.Vm.set(a.ha * a.H.va);
            b.viewport(0, 0, 64, 64);
            b.bindFramebuffer(36160, c.fG);
            k.R.H.set(a.Ca, a.La, 0, f ? 1 : 0);
            AEg(a, k, c);
            2 != a.H.H && (b.viewport(0, 0, 64, 128),
              b.bindFramebuffer(36160, c.gG),
              k.R.H.set(a.Ca, a.La, 1, 0),
              AEg(a, k, c));
            b.bindFramebuffer(36160, null);
            b.viewport(0, 0, n9(a.Bb.H, b), o9(a.Bb.H, b));
            g && b.enable(3089);
            a.ra.Vm = e;
            a.ra.VW = a.Ca;
            a.ra.WV = a.La;
            a.ra.yS = f
          }
        }
      }
        , EEg = function (a) {
        var b = 0;
        do {
          var c = rEg(a, 0 < a.H.R && vCg(a.hb), xEg(a), BEg(a), !!a.Ja.H);
          if (!ABg(c))
            if (b++,
            0 < a.H.$)
              a.H.$ = 0;
            else if (0 < a.H.ha)
              a.H.ha = 0;
            else if (0 < a.H.R)
              a.H.R = 0;
            else
              break
        } while (!ABg(c));
        a.Sc.set(23, b);
        return c
      }
        , FEg = function (a) {
        var b = _.pC(a.Bb.H.Ac(), a.Bb.H.H);
        return .265 * _.bu(Math.pow(a.ha / 80, 3), 1, _.$t((b - 35E3) / 35E3, 0, 1))
      }
        , GEg = function (a, b) {
        var c = a.T
          , e = zEg(a);
        if (null != e) {
          var f = 0 < a.H.R && vCg(a.hb)
            , g = xEg(a);
          c.activeTexture(33984);
          c.bindTexture(3553, e.mE);
          c.activeTexture(33985);
          c.bindTexture(3553, e.iD);
          if (f) {
            var k = e.xs[a.R] || e.xs[1]
              , m = e.$w[a.R] || e.$w[1];
            c.activeTexture(33986);
            c.bindTexture(3553, k);
            c.activeTexture(33987);
            c.bindTexture(3553, m);
            c.activeTexture(33988);
            c.bindTexture(34067, uCg(a.hb))
          }
          k = EEg(a);
          _.TJ(k);
          k.R.Eb.set(0);
          k.R.Ma.set(1);
          f ? (k.R.La.set(2),
            k.R.nb.set(3),
            k.R.Oa.set(4),
            jEg(b, k)) : a.Ja.H && (_.lJb(k.R.hb, a.Ja.T),
            c.activeTexture(33988),
            c.bindTexture(3553, a.Ja.H),
            k.R.Xa.set(4),
            k.R.Pa.set(a.Ja.opacity),
            _.yw(a.Ja.R, _.btg(a.Bb), a.Ma),
            _.JJ(a.Oa, a.Ma),
            _.ZJ(k.R.Ga, a.Oa));
          g && (k.R.Wb.set(5),
            k.R.Ob.set(FEg(a) * a.H.ha));
          b = a.Ma;
          _.zw(LCg(a.Bb), b);
          f = a.Oa;
          _.JJ(f, b);
          c.uniformMatrix4fv(k.R.Aa.Va(), !1, f);
          b = a.Oa;
          _.JJ(b, MCg(a.Bb));
          c.uniformMatrix4fv(k.R.Ca.Va(), !1, b);
          g && (k.R.Fb.set(a.Ba[0], a.Ba[1], a.Ba[2]),
            f = a.hc,
            aDg(f, a.W),
            c.uniformMatrix3fv(k.R.Ba.Va(), !1, f));
          !e.R && 0 > a.V[0] * b[8] + a.V[1] * b[9] + a.V[2] * b[10] && (tEg(a, e.mE, "//mw1.google.com/mw-weather/static/sun.png"),
            e.R = !0);
          b = Math.acos(a.Pa[2]);
          f = a.hc;
          m = a.Hd;
          var q = a.hc;
          cDg(f, -Math.atan2(a.Pa[1], a.Pa[0]), 0, 1);
          cDg(m, -b, 1, 0);
          bDg(m, f, q);
          c.uniformMatrix3fv(k.R.Ja.Va(), !1, q);
          c.uniform1f(k.R.hc.Va(), a.H.ta);
          CEg(a, k);
          g ? ICg(a.Wb, a.Bb.H, function (b, c) {
            var e = a.T
              , f = zEg(a)
              , g = EEg(a);
            e.activeTexture(33989);
            e.bindTexture(34067, c);
            c = a.Ma;
            var k = a.Oa;
            _.yw(a.Eb, b, c);
            _.JJ(k, c);
            e.uniformMatrix4fv(g.R.wa.Va(), !1, k);
            AEg(a, g, f)
          }) : AEg(a, k, e)
        }
      }
        , HEg = function (a, b, c) {
        var e = a.T
          , f = zEg(a);
        if (null == f)
          return c;
        var g = c++
          , k = c++
          , m = c++
          , q = f.xs[a.R] || f.xs[1]
          , r = f.$w[a.R] || f.$w[1];
        e.activeTexture(33984 + g);
        e.bindTexture(3553, q);
        e.activeTexture(33984 + k);
        e.bindTexture(3553, r);
        e.activeTexture(33984 + m);
        0 == a.R ? e.bindTexture(3553, f.iH) : 2 == a.H.H ? e.bindTexture(3553, f.iD) : e.bindTexture(3553, f.hG);
        b.R.La.set(g);
        b.R.wc.set(k);
        b.R.Pa.set(m);
        CEg(a, b);
        return c
      }
        , sEg = function (a) {
        a = a.T;
        var b = a.createTexture();
        a.bindTexture(3553, b);
        a.texParameteri(3553, 10241, 9729);
        a.texParameteri(3553, 10240, 9729);
        a.texParameteri(3553, 10242, 33071);
        a.texParameteri(3553, 10243, 33071);
        return b
      }
        , tEg = function (a, b, c, e) {
        (new _.rIb(c, function (c) {
            var f = _.Kq(e) ? e : null
              , k = a.T
              , m = k.V.mu(k.state.Gn() - 33984)
              , q = _.IE(k.state, 37440);
            k.bindTexture(3553, b);
            k.pixelStorei(37440, 1);
            k.qE(3553, 0, 6408, 5121, c);
            k.pixelStorei(37440, q);
            k.bindTexture(3553, m);
            null != f && f();
            a.Fb()
          }
        )).start(_.nr);
        0 == b.Pb() && b.CE(null, 1, 1)
      }
        , IEg = function (a) {
        return 0 < a.R.V && vCg(a.H)
      }
        , JEg = function (a, b) {
        b.R.Oa.set(a.R.V)
      }
        , KEg = function (a, b, c, e) {
        GCg(a.H, b.R.Ba, c, e)
      };
      _.J(hAg, _.QJ);
      var LEg = [0, 1]
        , kAg = function () {
        this.H = LEg[0];
        this.T = -1;
        this.R = !0
      };
      kAg.prototype.Dd = function () {
        this.R && (this.T = LEg.indexOf(this.H),
          this.R = !1);
        return this.T
      }
      ;
      _.J(lAg, _.QJ);
      var MEg = [0, 1]
        , NEg = [0, 1]
        , OEg = [0, 1]
        , oAg = function () {
        this.T = MEg[0];
        this.V = NEg[0];
        this.R = OEg[0];
        this.W = -1;
        this.H = !0
      };
      oAg.prototype.Dd = function () {
        if (this.H) {
          var a = 1;
          var b = a * MEg.indexOf(this.T);
          a *= MEg.length;
          b += a * NEg.indexOf(this.V);
          a *= NEg.length;
          this.W = b += a * OEg.indexOf(this.R);
          this.H = !1
        }
        return this.W
      }
      ;
      _.J(pAg, _.QJ);
      var PEg = function (a, b) {
        var c = a.H.T;
        b.R.Oc.set(a.H.Ga * c);
        b.R.Rc.set(.9 * c)
      };
      _.J(tAg, _.QJ);
      QEg = function (a, b, c, e, f, g, k) {
        var m = b.V ? b.V : b.W;
        a.activeTexture(33984);
        a.bindTexture(3553, m);
        a.bindBuffer(34962, b.ha);
        a.vertexAttribPointer(e, 4, 5121, !0, 8, 0);
        b.T ? (a.bindBuffer(34962, b.T),
          a.vertexAttribPointer(f, 2, 5123, !0, 4, 0),
          a.uniform4fv(k, b.Ma)) : (a.vertexAttribPointer(f, 2, 5123, !0, 8, 4),
          a.uniform4fv(k, b.Oa));
        c && (a.bindBuffer(34962, b.ta),
          a.vertexAttribPointer(g, 3, 5121, !0, 4, 0));
        a.bindBuffer(34963, b.$)
      }
      ;
      REg = [];
      SEg = [];
      _.TEg = function (a, b, c, e, f, g, k, m, q) {
        0 != m || 0 == b ? g = f = e = c = 0 : 2 == b ? (2 == c && (c = 1),
          g = f = 0) : 1 != b ? g = f = 0 : 1 == b && 2 == c && (c = 1);
        var r = a.qc
          , t = a.hb;
        r.La != t && (r.H = !0,
          r.La = +t);
        t = 0 != b;
        r.Aa != t && (r.H = !0,
          r.Aa = +t);
        t = 3 == b;
        r.va != t && (r.H = !0,
          r.va = +t);
        t = 1 == b;
        r.$ != t && (r.H = !0,
          r.$ = +t);
        t = 1 == b;
        r.ha != t && (r.H = !0,
          r.ha = +t);
        t = 2 == b || 3 == b;
        r.T != t && (r.H = !0,
          r.T = +t);
        t = 0 != c;
        r.ta != t && (r.H = !0,
          r.ta = +t);
        c = 2 == c;
        r.R != c && (r.H = !0,
          r.R = +c);
        c = 0 != e;
        r.Ba != c && (r.H = !0,
          r.Ba = +c);
        c = 0 != e;
        r.W != c && (r.H = !0,
          r.W = +c);
        e = 0 != e && 1 != b;
        r.wa != e && (r.H = !0,
          r.wa = +e);
        f = 0 != f;
        r.V != f && (r.H = !0,
          r.V = +f);
        g = 0 != g;
        r.Ca != g && (r.H = !0,
          r.Ca = +g);
        b = 1 == b;
        r.ra != b && (r.H = !0,
          r.ra = +b);
        b = 1 == m;
        r.Oa != b && (r.H = !0,
          r.Oa = +b);
        b = 2 == m;
        r.Pa != b && (r.H = !0,
          r.Pa = +b);
        m = 3 == m;
        r.Ma != m && (r.H = !0,
          r.Ma = +m);
        r.Ga != q && (r.H = !0,
          r.Ga = +q);
        q = a.Pa;
        r.Xa != q && (r.H = !0,
          r.Xa = +q);
        k = 0 != k;
        r.Ja != k && (r.H = !0,
          r.Ja = +k);
        k = r.Dd();
        (q = a.Fb[k]) || (a.Fb[k] = q = new Tzg(a.T, r));
        return q
      }
      ;
      UEg = function (a) {
        a.va[0] = 1
      }
      ;
      VEg = function (a) {
        for (var b = a.T, c = new Float32Array(24), e = 0; 8 > e; e++)
          c[3 * e] = e & 1 ? -1 : 1,
            c[3 * e + 1] = e & 2 ? -1 : 1,
            c[3 * e + 2] = e & 4 ? -1 : 1;
        a.Aa = b.createBuffer();
        b.bindBuffer(34962, a.Aa);
        b.bufferData(34962, c, 35044);
        e = new Uint16Array([0, 1, 0, 2, 1, 3, 2, 3, 0, 4, 1, 5, 2, 6, 3, 7, 4, 5, 4, 6, 5, 7, 6, 7]);
        a.Ba = b.createBuffer();
        b.bindBuffer(34963, a.Ba);
        b.bufferData(34963, e, 35044);
        b.H.Cw(a, function () {
          a.Aa = null;
          a.Ba = null
        }, c.byteLength + e.byteLength)
      }
      ;
      uAg.prototype.clearDepth = function () {
        this.T.clearDepth(1);
        this.T.clear(256)
      }
      ;
      WEg = function (a, b, c) {
        var e = _.$Mb;
        a.Aa || VEg(a);
        var f = e.Gh()
          , g = e.H
          , k = e.rotation();
        e = a.$;
        _.BJ(e);
        for (var m = 0; 3 > m; m++)
          for (var q = 0; 3 > q; q++)
            e[q + 4 * m] = k[m + 3 * q];
        _.CJ(e, g[0], g[1], g[2]);
        PCg(e, 3, f[0], f[1], f[2], 1);
        b = _.K8(b);
        _.yw(b, e, e);
        _.JJ(a.R, e);
        a.Aa && a.Ba && (b = a.Aa,
          f = a.Ba,
          g = a.R,
          e = a.T,
          _.TJ(a.ta),
          e.enable(3042),
          e.blendFunc(770, 771),
          e.blendEquation(32774),
          e.enable(2929),
          e.depthFunc(513),
          e.enableVertexAttribArray(a.ta.attributes.H.Va()),
          e.uniform4f(a.ta.R.color.Va(), c[0], c[1], c[2], c[3]),
          e.lineWidth(2),
          e.bindBuffer(34962, b),
          e.vertexAttribPointer(a.ta.attributes.H.Va(), 3, 5126, !1, 0, 0),
          e.bindBuffer(34963, f),
          e.uniformMatrix4fv(a.ta.R.H.Va(), !1, g),
          e.drawElements(1, 24, 5123, 0),
          e.disableVertexAttribArray(a.ta.attributes.H.Va()))
      }
      ;
      XEg = function (a) {
        var b = 0;
        do {
          var c = 0
            , e = 0
            , f = 0
            , g = 0
            , k = 0;
          r9(a.H) && (c = 0 != a.H.H.H ? 2 == a.H.H.H ? 3 : 2 : 1);
          0 != a.H.R && (0 < a.Ga.H.T && (e = a.Ga,
            e = null == e.H.Gd && .7 < e.H.ra[2] ? 2 : 1),
          iEg(a.ha) && (f = 1),
          IEg(a.ra) && (g = 1),
          BEg(a.H) && (k = 1));
          c = _.TEg(a, c, e, f, g, k, a.Ca ? 1 : 0, 3 == a.H.R ? 1 : 2 == a.H.R ? 2 : 4 == a.H.R ? 3 : 0, a.W.H && a.W.opacity ? 1 : 0);
          if (!ABg(c))
            if (b++,
              BEg(a.H))
              a.V.$ = 0;
            else if (0 < a.V.V)
              a.V.V = 0;
            else if (0 < a.V.T)
              a.V.T = 0;
            else if (0 < a.V.R)
              a.V.R = 0;
            else if (0 < a.V.W)
              a.V.W = 0;
            else
              break
        } while (!ABg(c));
        a.Oa.set(22, b);
        return c
      }
      ;
      _.YEg = function (a, b, c) {
        var e = a.hc;
        e.V != b && (e.H = !0,
          e.V = +b);
        e.T != c && (e.H = !0,
          e.T = +c);
        b = null != a.wa[1];
        e.R != b && (e.H = !0,
          e.R = +b);
        b = e.Dd();
        (c = a.Eb[b]) || (a.Eb[b] = c = new pAg(a.T, e));
        return c
      }
      ;
      $Eg = function (a, b, c) {
        var e = a.T;
        if (!e.isContextLost()) {
          var f = a.Ma
            , g = a.wa;
          var k = a.Pa ? _.YEg(a, !0, !1) : r9(a.H) ? _.YEg(a, !1, !0) : _.YEg(a, !1, !1);
          var m = a.La;
          e.enable(2929);
          e.enable(3042);
          e.blendFuncSeparate(1, 771, 0, 1);
          e.blendEquation(32774);
          e.clearStencil(0);
          e.clear(1024);
          e.stencilFunc(516, 1, 255);
          e.stencilOp(7681, 7681, 7681);
          e.enable(2960);
          for (var q = !1, r = 0; r < g.length; r++)
            if (null != g[r]) {
              q = !0;
              break
            }
          q && (a.Xa && (q = 1 - (b.H.Uc() - _.cNb) / (_.dNb - _.cNb),
            f *= q),
          0 < f && ZEg(a, c, b, Math.min(f, 1), k, g, m));
          e.disable(2960)
        }
      }
      ;
      aFg = function (a, b, c) {
        c = c.dj;
        a.R.nb.set(c.$.metersPerTexel[c.V]);
        c = b.H.Pb();
        b = .5 * c * LCg(b)[0];
        a.R.Aa.set(b);
        a.R.qc.set(c);
        a.R.Ca.set(.8);
        a.R.wa.set(0);
        a.R.Ga.set(1)
      }
      ;

      // TODO: Moar rendering.
      bFg = function (a, b, c, e, f) {
        if (0 == b.length)
          return !1;
        var g = a.T, k = !1, m = XEg(a);
        _.TJ(m);
        var q = 0;
        m.R.hc.set(q++);
        r9(a.H) && (q = HEg(a.H, m, q),
        iEg(a.ha) && jEg(a.ha, m),
        0 < a.Ga.H.T && PEg(a.Ga, m),
        IEg(a.ra) && JEg(a.ra, m));
        var r = m.attributes.H.Va()
          , t = m.attributes.T.Va();
        g.enableVertexAttribArray(r);
        g.enableVertexAttribArray(t);
        var x = m.attributes.R.Va()
          , B = -1 != x;
        B && g.enableVertexAttribArray(x);
        var G = _.K8(c)
          , I = m.R.hb.Va()
          , T = m.R.Xa.Va()
          , aa = m.R.Eb.Va()
          , ia = m.R.Gc.Va();
        a.W.H && (_.lJb(m.R.Wb, a.W.T),
          g.activeTexture(33984 + q),
          g.bindTexture(3553, a.W.H),
          m.R.Ob.set(q++),
          m.R.Fb.set(a.W.opacity));
        for (var ha = b.length, sa = 0; sa < ha; sa++) {
          var ra = b[sa], Ea = ra.V, ob = Ea.length;
          if (-1 != ra.R && 0 != ob) {
            for (var cb = ra.T, Xb = a.Wb, Lb = !1, kc = 0, ad = 0, Cc = 0; 8 > Cc; Cc++)
              1 === cb[Cc] ? f ? Xb[Cc] = 0 : (Lb = !0,
                Xb[Cc] = 1) : 0 < cb[Cc] ? (k = !0,
                f ? (Xb[Cc] = cb[Cc],
                  Lb = !0,
                  kc += cb[Cc],
                  ad++) : Xb[Cc] = 0) : Xb[Cc] = 0;
            if (Lb)
              for (g.uniform1fv(aa, Xb),
                   f && (kc /= ad,
                     g.blendColor(0, 0, 0, kc),
                     a.Oa.add(18, 1)),
                     cb = SBg(ra.dj),
                     _.yw(G, cb, a.$),
                     _.JJ(a.R, a.$),
                     g.uniformMatrix4fv(T, !1, a.R),
                   -1 != I && (Lb = a.R,
                     _.JJ(Lb, cb),
                     g.uniformMatrix4fv(I, !1, Lb)),
                   a.W.H && (_.yw(a.W.R, cb, a.$),
                     _.JJ(a.R, a.$),
                     _.ZJ(m.R.Ja, a.R)),
                     cb = q,
                   r9(a.H) && (iEg(a.ha) && (cb = kEg(a.ha, m, ra, cb)),
                   IEg(a.ra) && KEg(a.ra, m, ra, cb)),
                   a.Ca && aFg(m, c, ra),
                     ra = 0; ra < ob; ra++) {
                cb = Ea[ra];
                Lb = !1;
                kc = cb.Aa;
                ad = kc.length - 1;
                for (var Yb = Cc = 0, $f = cb.Ga, ri = 0, mc = 0, ui = 0; ui < ad + 1; ui++)
                  if (ui != ad && e & 1 << ui)
                    Yb = kc[ui + 1],
                      mc = 8 * ui;
                  else {
                    var Kn = Yb - Cc;
                    if (0 < Kn) {
                      for (Kn = ri; Kn < mc; Kn++) {
                        var lJ = Kn & 7;
                        if (0 != $f[Kn]) {
                          if (0 < Xb[lJ])
                            break;
                          Cc += $f[Kn]
                        }
                      }
                      for (Kn = mc + 7; Kn >= ri; Kn--)
                        if (lJ = Kn & 7,
                        0 != $f[Kn]) {
                          if (0 < Xb[lJ])
                            break;
                          Yb -= $f[Kn]
                        }
                      Kn = Yb - Cc
                    }
                    0 < Kn && (Lb || (QEg(g, cb, B, r, t, x, ia),
                      Lb = !0),
                      g.drawElements(5, Kn, 5123, 2 * Cc));
                    ui != ad && (Cc = kc[ui + 1],
                      ri = 8 * (ui + 1))
                  }
              }
          }
        }
        g.disableVertexAttribArray(r);
        g.disableVertexAttribArray(t);
        -1 != x && g.disableVertexAttribArray(x);
        return k
      };

      ZEg = function (a, b, c, e, f, g, k) {
        var m = a.T;
        m.depthMask(!1);
        m.enableVertexAttribArray(f.attributes.H.Va());
        _.TJ(f);
        var q = f.R.W.Va();
        -1 != q && (_.JJ(a.R, k),
          m.uniformMatrix4fv(q, !1, a.R));
        REg[0] = f.R.wa.Va();
        SEg[0] = f.R.H.Va();
        1 < g.length && (REg[1] = f.R.Ca.Va(),
          SEg[1] = f.R.Ba.Va());
        for (k = 0; k < g.length; k++)
          m.uniform1i(REg[k], k),
            m.uniform1f(SEg[k], null != g[k] ? e * a.va[k] : 0),
            m.activeTexture(33984 + k),
            m.bindTexture(3553, g[k]);
        _.JJ(a.R, LCg(c));
        m.uniformMatrix4fv(f.R.V.Va(), !1, a.R);
        r9(a.H) && (e = a.H.V,
          m.uniform3f(f.R.Aa.Va(), e[0] * _.eNb, e[1] * _.eNb, e[2] * _.eNb));
        e = _.K8(c);
        g = f.attributes.H.Va();
        k = f.R.ra.Va();
        q = -1 != k;
        var r = f.R.ha.Va()
          , t = f.R.$.Va()
          , x = -1 != t
          , B = f.R.R.Va()
          , G = f.R.ta.Va()
          , I = a.wc;
        q9(c, I);
        m.uniform3f(B, I[0], I[1], I[2]);
        a.Ob ? m.depthFunc(515) : m.depthFunc(519);
        f.R.va && (c = f.R.va.Va(),
        -1 != c && m.uniform1f(c, a.V.Ja));
        c = f.R.T.Va();
        -1 != c && m.uniform1f(c, 30);
        c = b.length;
        for (B = 0; B < c; B++) {
          I = b[B];
          var T = I.Aa
            , aa = T.length
            , ia = I.wj;
          if (-1 != I.R && 0 != aa && ia) {
            for (var ha = a.Wb, sa = 0; 8 > sa; sa++)
              ha[sa] = ia & 1 << sa ? 1 : 0;
            var ra = !1;
            for (ia = 0; ia < aa; ia++) {
              sa = T[ia];
              var Ea = sa.Ja;
              if (0 < Ea) {
                if (!ra) {
                  ra = SBg(I.dj);
                  _.yw(e, ra, a.$);
                  _.JJ(a.R, a.$);
                  m.uniformMatrix4fv(r, !1, a.R);
                  if (q) {
                    var ob = a.R;
                    _.JJ(ob, ra);
                    m.uniformMatrix4fv(k, !1, ob)
                  }
                  x && (_.yw(a.nb, ra, a.$),
                    _.JJ(a.R, a.$),
                    m.uniformMatrix4fv(t, !1, a.R));
                  m.uniform1fv(G, ha);
                  ra = !0
                }
                m.bindBuffer(34962, sa.ha);
                m.vertexAttribPointer(g, 4, 5121, !0, 8, 0);
                m.bindBuffer(34963, sa.$);
                m.drawElements(5, Ea, 5123, 2 * sa.La)
              }
            }
          }
        }
        m.depthMask(!0);
        m.depthFunc(513);
        m.disableVertexAttribArray(f.attributes.H.Va())
      }
      ;
      cFg = function (a, b, c) {
        var e = a.T;
        e.enable(2884);
        e.enable(3042);
        var f = a.Gc;
        _.TJ(f);
        var g = f.attributes.H.Va()
          , k = f.attributes.alpha.Va();
        e.enableVertexAttribArray(g);
        e.enableVertexAttribArray(k);
        c = _.K8(c);
        var m = f.R.H.Va();
        f = f.R.R.Va();
        for (var q = b.length, r = 0; r < q; r++) {
          var t = b[r]
            , x = b[r].ta;
          -1 != t.R && x && (_.yw(c, SBg(t.dj), a.$),
            _.JJ(a.R, a.$),
            e.uniformMatrix4fv(m, !1, a.R),
            e.uniform1fv(f, t.T),
            e.bindBuffer(34962, x.ha),
            e.vertexAttribPointer(g, 4, 5121, !0, 8, 0),
            e.bindBuffer(34962, x.ra),
            e.vertexAttribPointer(k, 1, 5121, !0, 1, 0),
            e.bindBuffer(34963, x.$),
            t = x.Aa,
            e.drawElements(5, t[t.length - 1], 5123, 0))
        }
        e.disableVertexAttribArray(g);
        e.disableVertexAttribArray(k)
      }
      ;
      dFg = function (a, b, c, e) {
        this.R = a;
        this.T = b;
        this.td = c;
        this.H = {
          Hj: {},
          jH: {}
        };
        this.W = e;
        this.R.T.T.push(this);
        this.R.R.V.push(this)
      }
      ;
      dFg.prototype.V = function (a) {
        var b = a.headNodePath;
        this.H.Hj[b] && (delete this.H.Hj[b],
        this.T && eFg(this.R, this.T, !1, this.W, b, a, -1, this.H),
          fFg(this))
      }
      ;
      dFg.prototype.Ga = function (a) {
        var b = a.H;
        this.H.jH[b] && (delete this.H.jH[b],
          gFg(this.T, a),
          fFg(this));
        return !1
      }
      ;
      dFg.prototype.Ca = _.nr;
      var fFg = function (a) {
        _.fs(a.H.jH) && _.fs(a.H.Hj) && (a.td && a.td(),
          hFg(a))
      };
      dFg.prototype.cancel = function () {
        hFg(this);
        this.td = _.nr;
        this.T = this.R = null;
        this.H = {
          Hj: {},
          jH: {}
        }
      }
      ;
      var hFg = function (a) {
        a.R && (_.Or(a.R.R.V, a),
          _.Or(a.R.T.T, a))
      }
        , iFg = function () {
        this.H = null;
        this.T = this.R = this.$ = this.ha = 0;
        this.V = this.path = this.W = null
      }
        , xAg = function () {
        this.R = [];
        for (var a = this.H = 0; 100 > a; ++a)
          this.R.push(new iFg)
      };
      xAg.prototype.push = function (a, b, c) {
        if (this.H >= this.R.length) {
          var e = new iFg;
          this.R.push(e)
        } else
          e = this.R[this.H];
        e.path = a;
        e.H = b;
        e.ha = c;
        e.R = -1;
        e.$ = 8 * (c + 1);
        ++this.H;
        return e
      }
      ;
      xAg.prototype.pop = function () {
        return 0 < this.H ? (--this.H,
          this.R[this.H]) : null
      }
      ;
      xAg.prototype.size = function () {
        return this.H
      }
      ;
      var jFg = function (a, b, c, e) {
        var f = new dFg(a, b, e, c);
        eFg(a, b, !1, c, void 0, void 0, void 0, f.H);
        fFg(f);
        return function () {
          return f.cancel()
        }
      }
        , eFg = function (a, b, c, e, f, g, k, m) {
        if (f && g && _.Kq(k)) {
          var q = g;
          g = f;
          var r = k
        } else {
          g = "";
          q = a.R.to(g);
          if (!q) {
            m && (nDg(a.R, g, a.R.H, 3),
              m.Hj[g] = !0);
            return
          }
          r = -1
        }
        k = a.H.size();
        f = g.length - k;
        for (a.H.push(g, q, r); a.H.size() > k;) {
          g = a.H;
          g = 0 < g.H ? g.R[g.H - 1] : null;
          r = a.H.size() + f;
          if (c && 0 <= g.R) {
            q = b;
            var t = g.W
              , x = r
              , B = g.R;
            q.H && (0 != q.H[x] ? t && (gFg(q, t),
              t = x - 1,
              q.H[t] &= ~(1 << B)) : (t = x - 1,
              q.H[t] &= ~(1 << B)))
          }
          q = g;
          B = !!m;
          t = q.R + 1;
          for (x = -1; 0 > x && 8 > t; ++t)
            x = q.H.childIndices[q.$ + t];
          0 <= x ? (q.R = t - 1,
            q.T = x,
            q.H.nodes && q.H.nodes[x] ? q.W = q.H.nodes[x] : q.W = null,
          B && (q.V = q.path + q.R),
            q = !0) : q = !1;
          if (q) {
            q = b;
            B = g.H;
            t = g.T;
            x = g.W;
            var G = r
              , I = g.R
              , T = G - 1
              , aa = null != q.H;
            aa && 255 == q.H[T] && (q.H[T] = 0);
            B.flags[t] & 8 || dDg(B.obbCenters, B.obbExtents, B.obbRotations, t, q.V, q.T, q.R) ? (aa && (q.H[T] |= 1 << I,
              q.H[G] = 255,
            49 <= G && kFg(q)),
              I = B.metersPerTexel[t],
              B.flags[t] & 4 || I <= q.ha && 2 <= G ? x ? (aa || gFg(q, x),
                q = 1) : q = 2 : q = 0) : (aa && (q.H[G] = 0),
              q = 1);
            0 != q && 2 != q || g.W || !m || g.H.flags[g.T] & 8 || (hCg(a.T, g.V, e, g.H, g.T, 3),
            2 == q && (m.jH[g.V] = !0));
            0 == q && (q = g.H,
              B = g.T,
            0 <= g.ha && 0 == r % 4 && ((q = q.childBulkMetadata ? q.childBulkMetadata[B] : void 0) ? B = -1 : m && (r = g.V,
              nDg(a.R, r, g.H.bulkMetadataEpoch[g.T], 3),
              m.Hj[r] = !0)),
            q && a.H.push(g.V, q, B))
          } else
            g.W = g.H = g.path = g.V = null,
              a.H.pop()
        }
      };
      zAg.prototype.init = function (a, b, c, e, f, g) {
        _.ir(this.V, a);
        _.ir(this.T, b);
        this.W = f ? 14 : 7;
        this.$ = e;
        this.ha = c;
        this.R = g
      }
      ;
      var kFg = function (a) {
        for (var b = new Uint8Array(2 * a.H.length), c = 0; c < a.H.length; ++c)
          b[c] = a.H[c];
        a.H = b
      }
        , gFg = function (a, b) {
        _.iNb[0] = 0;
        _.iNb[1] = a.R;
        b = b.zB(a.V, a.T, a.R, _.iNb, -1, a.W, a.$ || void 0);
        b < a.R && (a.R = b)
      };
      AAg.prototype.insert = function (a) {
        this.R[this.H++] = a;
        a = this.H - 1;
        for (var b = this.R, c = b[a]; 0 < a;) {
          var e = a - 1 >> 1;
          if (b[e].Kg() > c.Kg())
            b[a] = b[e],
              a = e;
          else
            break
        }
        b[a] = c
      }
      ;
      AAg.prototype.remove = function () {
        var a = this.R
          , b = this.H
          , c = a[0];
        if (0 >= b)
          return null;
        --this.H;
        a[0] = a[this.H];
        a[this.H] = null;
        if (1 < b) {
          a = 0;
          b = this.R;
          for (var e = this.H, f = b[a]; a < e >> 1;) {
            var g = 2 * a + 1
              , k = 2 * a + 2;
            g = k < e && b[k].Kg() < b[g].Kg() ? k : g;
            if (b[g].Kg() > f.Kg())
              break;
            b[a] = b[g];
            a = g
          }
          b[a] = f
        }
        return c
      }
      ;
      AAg.prototype.rd = function () {
        return 0 == this.H
      }
      ;
      AAg.prototype.clear = function () {
        for (var a = 0; a < this.H; ++a)
          this.R[a] = null;
        this.H = 0
      }
      ;
      var lFg = function (a, b, c, e) {
        _.YE.call(this, 5, 1);
        this.H = a;
        this.va = b;
        this.T = c;
        this.ta = e;
        this.$ = "";
        this.wa = this.V = 0
      };
      _.F(lFg, _.YE);
      lFg.prototype.start = function () {
        return this.H.textures.length ? this.W : _.ZE
      }
      ;
      lFg.prototype.W = function () {
        var a = (0,
          _.Uq)()
          , b = this.H.textures[this.V].bytes
          , c = null;
        _.fr.BlobBuilder ? c = new _.fr.BlobBuilder : _.fr.WebKitBlobBuilder && (c = new _.fr.WebKitBlobBuilder);
        c ? (c.append(b.buffer),
          b = c.getBlob(_.Hrg)) : b = new _.fr.Blob([b], {
          type: _.Hrg
        });
        this.$ = (_.fr.URL ? _.fr.URL.createObjectURL : _.fr.webkitURL.createObjectURL)(b);
        this.T.add(8, 1);
        this.T.add(9, (0,
          _.Uq)() - a);
        return this.ra
      }
      ;
      lFg.prototype.ra = function () {
        var a = this
          , b = (0,
          _.Uq)()
          , c = this.V
          , e = function (b) {
          var e = b.src;
          _.JAa().revokeObjectURL(e);
          a.va[c] = b;
          ++a.wa == a.H.textures.length && a.ta()
        };
        (new _.rIb(this.$, e, e)).start(_.nr);
        this.T.add(9, (0,
          _.Uq)() - b);
        return ++this.V < this.H.textures.length ? this.W : _.ZE
      }
      ;
      var mFg = function (a, b, c, e) {
        _.YE.call(this, 7, 1);
        this.Pr = a;
        this.T = a.dj;
        this.H = b;
        this.ra = c;
        this.ta = e;
        this.V = [];
        this.W = [];
        this.$ = null
      };
      _.F(mFg, _.YE);
      mFg.prototype.start = function () {
        return nFg(this)
      }
      ;
      mFg.prototype.va = function () {
        this.V.push(oFg(this, this.T.T.meshes[this.V.length]));
        return nFg(this)
      }
      ;
      mFg.prototype.wa = function () {
        this.W.push(oFg(this, this.T.T.overlaySurfaceMeshes[this.W.length]));
        return nFg(this)
      }
      ;
      mFg.prototype.Aa = function () {
        this.$ = oFg(this, this.T.T.waterMesh);
        return nFg(this)
      }
      ;
      var oFg = function (a, b) {
        var c = (0,
          _.Uq)()
          , e = gDg(a.H, b.vertices);
        var f = a.H;
        var g = b.indices
          , k = f.createBuffer();
        f.bindBuffer(34963, k);
        f.bufferData(34963, g, 35044);
        f = new eDg(k, g.byteLength);
        var m = null;
        b.vertexAlphas && (m = gDg(a.H, b.vertexAlphas));
        var q = null;
        b.normals && (q = gDg(a.H, b.normals));
        a.ra.add(10, 1);
        a.ra.add(11, (0,
          _.Uq)() - c);
        k = b.layerBounds;
        0 < k[8] - k[7] ? (c = k[7],
          g = k[8] - k[7]) : (c = k[1],
          g = k[4] - k[1]);
        a = new wzg(a.H);
        var r = b.uvOffsetAndScale;
        b = b.octantCounts;
        a.ha = e.buffer;
        a.$ = f.buffer;
        a.ra = m ? m.buffer : null;
        a.ta = q ? q.buffer : null;
        a.Aa = k;
        a.Oa = r;
        a.H += e.H + f.H;
        m && (a.H += m.H);
        q && (a.H += q.H);
        a.H += a.va;
        a.La = c;
        a.Ja = g;
        a.Ga = b;
        return a
      }
        , nFg = function (a) {
        var b = a.T.T;
        if (b.meshes.length > a.V.length)
          return a.va;
        if (b.overlaySurfaceMeshes.length > a.W.length)
          return a.wa;
        if (b.waterMesh && !a.$)
          return a.Aa;
        a.Pr.init(a.T, a.V, a.W, a.$);
        a.ta();
        return _.ZE
      }
        , pFg = function (a, b, c, e, f, g) {
        _.YE.call(this, 12, 1);
        this.Pr = a;
        this.T = a.dj;
        this.$ = b;
        this.H = c;
        this.ta = e;
        this.V = f;
        this.ra = g;
        this.W = this.T.T.meshes.length - 1
      };
      _.F(pFg, _.YE);
      pFg.prototype.start = function () {
        return qFg(this)
      }
      ;
      pFg.prototype.va = function () {
        var a = this.T.W
          , b = this.W
          , c = this.T.T.meshes[b]
          , e = null;
        this.$ && (e = this.$[b]);
        var f = e
          , g = a.textures[b];
        a = a.transformInfo[b];
        b = this.Pr.V[b];
        var k = null
          , m = e = null;
        if (g) {
          if (1 == g.textureFormat) {
            g = (0,
              _.Uq)();
            var q = _.IE(this.H.state, 37440);
            this.H.pixelStorei(37440, 1);
            k = this.H;
            var r = k.createTexture();
            k.bindTexture(3553, r);
            k.qE(3553, 0, 6407, 33635, f);
            k.texParameteri(3553, 10240, 9729);
            k.texParameteri(3553, 10241, 9729);
            k.texParameteri(3553, 10242, 33071);
            k.texParameteri(3553, 10243, 33071);
            k = new fDg(r, f.width * f.height * 2);
            this.H.pixelStorei(37440, q);
            this.V.add(14, 1);
            this.V.add(15, (0,
              _.Uq)() - g)
          } else {
            q = g.bytes;
            k = g.width;
            g = g.height;
            f = (0,
              _.Uq)();
            if (this.ta) {
              r = this.H;
              var t = r.createTexture();
              r.bindTexture(3553, t);
              r.compressedTexImage2D(3553, 0, 33776, k, g, 0, q);
              r.texParameteri(3553, 10240, 9729);
              r.texParameteri(3553, 10241, 9729);
              r.texParameteri(3553, 10242, 33071);
              r.texParameteri(3553, 10243, 33071);
              k = new fDg(t, k * g * .5)
            } else
              r = this.H,
                q = new Uint16Array(q.buffer),
                t = r.createTexture(),
                r.bindTexture(3553, t),
                r.Tl(3553, 0, k, g, 6407, 33635, q),
                r.texParameteri(3553, 10240, 9729),
                r.texParameteri(3553, 10241, 9729),
                r.texParameteri(3553, 10242, 33071),
                r.texParameteri(3553, 10243, 33071),
                k = new fDg(t, k * g * 2);
            this.V.add(12, 1);
            this.V.add(13, (0,
              _.Uq)() - f)
          }
          if (a) {
            e = c.vertices.length / 8;
            c = new Uint16Array(c.vertices.buffer);
            m = new Uint16Array(2 * e);
            for (f = 0; f < e; ++f) {
              g = c[4 * f + 2];
              q = c[4 * f + 3];
              r = a.vertexTransformMap[f];
              t = a.transformTable[5 * r + 1];
              var x = a.transformTable[5 * r + 2]
                , B = a.transformTable[5 * r + 4];
              m[2 * f] = a.transformTable[5 * r] * g + t * q + a.transformTable[5 * r + 3] + .5;
              m[2 * f + 1] = t * g + x * q + B + .5
            }
            e = gDg(this.H, m);
            m = a.uvOffsetAndScale
          }
        }
        0 == this.T.ra ? (a = k,
          c = b.Ba,
        b.W && c.deleteTexture(b.W),
          b.W = a ? a.R : null,
          b.R -= b.wa,
          b.wa = a ? a.H : 0,
          b.R += b.wa,
          hDg(b, null, null, null)) : hDg(b, k, e, m);
        this.W--;
        return qFg(this)
      }
      ;
      var qFg = function (a) {
        if (0 <= a.W)
          return a.va;
        iDg(a.Pr);
        a.ra();
        return _.ZE
      }
        , rFg = function (a, b, c, e, f) {
        this.path = a;
        this.W = b;
        this.ra = c;
        this.ha = e;
        this.priority = f;
        this.$ = 0;
        this.R = this.H = this.T = this.V = null;
        this.error = !1
      }
        , sFg = function (a, b) {
        return (a = a.W[b]) ? a : null
      }
        , tFg = function (a, b, c, e, f, g) {
        (e.availableViewDirectionsArray ? e.availableViewDirectionsArray[f] : e.defaultAvailableViewDirections) & 1 << c || (c = 0);
        var k = a.H[b]
          , m = g ? 1 : 2;
        if (k && k.W != c) {
          if (k.T || k.H)
            k.R = null,
            k.T && _.zBg(k.T),
            k.H && _.zBg(k.H),
              k.V = null,
              k.T = null,
              k.H = null;
          delete a.H[k.path];
          --a.R[k.priority];
          $Bg(a.T, [k.path]);
          k = null
        }
        k ? (!k.error && k.priority < m && (--a.R[k.priority],
          ++a.R[m],
          k.priority = m,
        null == k.R && null == k.T && null == k.H && a.$.push(k)),
          k.$ = 0) : (k = new rFg(b, c, e, f, m),
          a.H[b] = k,
          _.Kq(g) && g ? a.ta.unshift(k) : a.$.push(k),
          ++a.R[m])
      };
      BAg.prototype.Ga = function (a) {
        var b = this.H[a.H];
        if (!b || b.T || b.H)
          return !1;
        var c = this.W[b.path];
        if (c)
          return b.R = c,
            b.W != c.W ? (uFg(this, b),
              !0) : !1;
        b.R = new xzg(a);
        c = a.W;
        a = a.T;
        if (0 == a.meshes.length)
          vFg(this, b);
        else
          switch (c.textures[0].textureFormat) {
            case 1:
              var e = this;
              b.V = Array(a.meshes.length);
              b.T = new lFg(c, b.V, this.V, function () {
                  b.R && (b.T = null,
                    vFg(e, b))
                }
              );
              _.yG(this.ha, b.T, 2);
              break;
            case 6:
              vFg(this, b)
          }
        return !0
      }
      ;
      BAg.prototype.Ca = function (a) {
        var b = this.H[a];
        b ? --this.R[b.priority] : (b = new rFg(a, 0, new $Cg, 0, 1),
          this.H[a] = b);
        b.error = !0
      }
      ;
      var vFg = function (a, b) {
        b.H = new mFg(b.R, a.va, a.V, function () {
            wFg(a, b)
          }
        );
        _.yG(a.ha, b.H, 2)
      }
        , wFg = function (a, b) {
        b.H = new pFg(b.R, b.V, a.va, a.Aa, a.V, function () {
            b.R && xFg(a, b)
          }
        );
        _.yG(a.ha, b.H, 2)
      }
        , xFg = function (a, b) {
        var c = b.R
          , e = b.path;
        a.W[e] = c;
        b.V = null;
        b.H = null;
        delete a.H[e];
        --a.R[b.priority];
        e = a.wa.Cw(e, function (b, c) {
          if (b = a.H[c])
            b.V = null,
            b.H && (_.zBg(b.H),
              b.H = null),
              delete a.H[c],
              --a.R[b.priority];
          if (b = a.W[c]) {
            delete a.W[c];
            for (c = 0; c < b.H.length; c++) {
              var e = b.H[c]
                , f = e.Ba;
              e.ha && f.deleteBuffer(e.ha);
              e.$ && f.deleteBuffer(e.$);
              e.T && f.deleteBuffer(e.T);
              e.V && f.deleteTexture(e.V);
              e.W && f.deleteTexture(e.W);
              e.ra && f.deleteBuffer(e.ra);
              e.ta && f.deleteBuffer(e.ta)
            }
            b.R = -1;
            c = a.ra - b.ha;
            e = a.V.get(20);
            c < e && a.V.set(20, c);
            bCg(a.T, b.dj)
          }
        }, jDg(c), c.V.length);
        c.R = e;
        c.W = b.W;
        a.Ba()
      }
        , uFg = function (a, b) {
        var c = b.R.dj;
        b.H = new pFg(b.R, b.V, a.va, a.Aa, a.V, function () {
            b.R.W = b.W;
            a.Ba();
            bCg(a.T, c);
            b.H = null
          }
        );
        _.yG(a.ha, b.H, 2)
      }
        , yFg = function (a, b, c) {
        return a & ~(3 << 2 * b) | c << 2 * b
      }
        , CAg = function (a, b) {
        for (var c = 0; 4 > c; ++c)
          a.T[c] = b[c];
        for (c = 0; 3 > c; ++c)
          a.V[c] = b[4][c];
        a.R[0] = b[4][3];
        a.R[1] = -b[5][3]
      }
        , zFg = function (a, b, c, e, f, g) {
        var k = 3 * f
          , m = 9 * f;
        f = b[k];
        var q = b[k + 1];
        b = b[k + 2];
        var r = c[k]
          , t = c[k + 1];
        c = c[k + 2];
        k = e[m];
        var x = e[m + 1]
          , B = e[m + 2]
          , G = e[m + 3]
          , I = e[m + 4]
          , T = e[m + 5]
          , aa = e[m + 6]
          , ia = e[m + 7];
        e = e[m + 8];
        m = a.V;
        var ha = m[0]
          , sa = m[1]
          , ra = m[2]
          , Ea = ha * k + sa * G + ra * aa
          , ob = ha * x + sa * I + ra * ia
          , cb = ha * B + sa * T + ra * e;
        Ea = r * (0 <= Ea ? Ea : -Ea) + t * (0 <= ob ? ob : -ob) + c * (0 <= cb ? cb : -cb);
        m = f * ha + q * sa + b * ra;
        for (sa = 0; 2 > sa; ++sa)
          ha = m + a.R[sa],
            a.H[sa] = ha > Ea ? ha - Ea : ha < -Ea ? ha + Ea : 0;
        if (0 < a.H[0])
          return yFg(g, 4, 2);
        m = 0 == a.H[0] ? 0 : 1;
        g = yFg(g, 4, m);
        if (0 > a.H[1])
          return yFg(g, 5, 2);
        m = 0 == a.H[1] ? 0 : 1;
        g = yFg(g, 5, m);
        for (m = 0; 4 > m && (ha = g >> 2 * m & 3,
        2 != ha); ++m)
          if (1 != ha) {
            var Xb = a.T[m];
            ha = Xb[0];
            sa = Xb[1];
            ra = Xb[2];
            Xb = Xb[3];
            Ea = ha * k + sa * G + ra * aa;
            ob = ha * x + sa * I + ra * ia;
            cb = ha * B + sa * T + ra * e;
            Ea = 0 <= Ea ? Ea : -Ea;
            ob = 0 <= ob ? ob : -ob;
            cb = 0 <= cb ? cb : -cb;
            Ea = r * Ea + t * ob + c * cb;
            ha = f * ha + q * sa + b * ra + Xb;
            if (ha > Ea)
              return yFg(g, m, 2);
            ha < -Ea && (g = yFg(g, m, 1))
          }
        return g
      };
      EAg.prototype.Cu = function () {
        return !!this.bn && !!(this.bn.flags[this.Ut] & 4)
      }
      ;
      var AFg = function (a) {
        return !!a.bn && !(a.bn.flags[a.Ut] & 8)
      };
      EAg.prototype.to = function () {
        return this.bn
      }
      ;
      EAg.prototype.Kg = function () {
        return this.iy
      }
      ;
      EAg.prototype.removeChild = function (a) {
        var b = this.hk
          , c = null;
        if (a)
          for (; b && b != a;)
            c = b,
              b = b.Vo;
        b && (c ? c.Vo = b.Vo : this.hk = b.Vo)
      }
      ;
      var BFg = function (a) {
        a.Pr = null;
        a.Jc = null;
        a.hk = null;
        a.Vo = null;
        a.bn = null
      };
      EAg.prototype.zB = function (a, b, c, e) {
        var f = Infinity;
        _.jNb[0] = 0;
        _.jNb[1] = Infinity;
        var g = [];
        for (g.push(this); 0 < g.length;) {
          var k = g.pop(), m;
          (m = !k.hk) || (m = !k.bn || -1 == k.Ut || k.bn.flags[k.Ut] & 8 ? !0 : dDg(k.bn.obbCenters, k.bn.obbExtents, k.bn.obbRotations, k.Ut, a, b, f, void 0));
          if (m) {
            if ((m = k.Pr) && k.wj && k.wj & m.QC()) {
              var q = m.dj;
              if (q) {
                var r = q.zB(a, b, f, _.jNb, k.wj, c, e);
                r < f && (f = r,
                e && (e.H = q.Cu() ? 1 : k.iy,
                  e.W = q.Cj(),
                  e.ha = m.wG,
                  e.$ = m.vG))
              }
            }
            for (m = k.hk; m; m = m.Vo)
              k.wj & 1 << m.nH || g.push(m)
          }
        }
        return f
      }
      ;
      var GAg = function () {
        this.R = [];
        for (var a = this.T = this.H = 0; 500 > a; ++a)
          this.create(null, null, null, 0, 0, 0);
        this.T = this.H = 0
      };
      GAg.prototype.create = function (a, b, c, e, f, g) {
        if (this.H == this.R.length) {
          var k = new EAg(a, b, c, e, f, g);
          this.R.push(k)
        } else
          k = this.R[this.H],
            k.Jc = a,
            k.ha = b,
            k.bn = c,
            k.Ut = e,
            k.wj = 0,
            k.H = 0,
            k.nH = f,
            k.W = g,
            k.R = 0,
            k.T = 0,
            k.Pr = null,
            a ? (k.Vo = a.hk,
              a.hk = k) : k.Vo = null,
            k.hk = null;
        ++this.H;
        return k
      }
      ;
      var HAg = function () {
        this.R = [];
        this.ra = [];
        this.ha = !1;
        this.$ = this.H = this.V = this.T = this.W = 0
      };
      IAg.prototype.update = function (a, b, c, e) {
        this.ra = b;
        this.Oa = c;
        this.W = e;
        _.ULb(this.Ja, _.K8(a));
        CAg(this.$, this.Ja);
        this.Ba = .5 * a.H.Pb() * LCg(a)[0];
        this.Bb = a;
        if (oDg(this.ha)) {
          a = this.Aa;
          for (b = a.H; b < a.T; ++b)
            BFg(a.R[b]);
          a.T = a.H;
          a.H = 0;
          this.R = this.Aa.create(null, "", null, -1, 0, 0);
          this.R.iy = 0;
          this.T.insert(this.R);
          a = this.V.wa;
          this.Ca = .5 * a.Y3();
          this.Ga = .75 * a.wCa();
          this.wa = this.va = 0;
          for (a = !1; !this.T.rd() && !a;)
            a = this.T.remove(),
              a = CFg(this, a);
          if (!this.T.rd()) {
            a = this.T.H;
            b = this.T.R;
            for (c = 0; c < a; ++c)
              DFg(b[c]);
            this.T.clear()
          }
        } else
          this.R = null;
        this.R && (this.Pa = !!(EFg(this, this.R) & 2));
        this.R && FFg(this, this.R);
        this.H.R = [];
        this.H.ra = [];
        this.H.W = 0;
        this.H.T = 0;
        this.H.V = 0;
        this.H.H = Infinity;
        this.H.$ = this.ra;
        this.H.ha = this.Ma;
        a = this.hb;
        e = this.R;
        b = this.H;
        if (e)
          for (c = a.H.length,
                 a.H.push(e); a.H.length > c;) {
            e = a.H.pop();
            var f = b;
            var g = e
              , k = g.Jc;
            if (k && k.wj & 1 << g.nH)
              f = !0;
            else {
              k = g.wj;
              var m = g.Pr;
              if (AFg(g)) {
                var q = !1;
                f.ha ? (f.ra.push(g),
                  q = !0) : m && k & m.QC() && (m.va = !1,
                  k &= m.QC(),
                  m.wj = k,
                  m.ra = g.V,
                  f.R.push(m),
                  m = m.dj,
                m.$.flags[m.V] & 2 || f.W++,
                  q = !0);
                q && (m = g.iy,
                  f.T += m,
                m < f.$ && k == g.H && (m = f.$),
                  f.V = m > f.V ? m : f.V,
                  f.H = m < f.H ? m : f.H)
              }
              f = !1
            }
            if (!f)
              for (e = e.hk; null != e;)
                a.H.push(e),
                  e = e.Vo
          }
        a = this.H.R;
        this.Pa && a.length ? this.H.T /= a.length : this.H.H = 0;
        this.La.set(16, a.length);
        this.La.set(17, this.H.W)
      }
      ;
      var GFg = function (a, b, c) {
        var e = 1;
        1 < b ? e = b : 1 > c && (e = c);
        a = a.Bb.H.Pb();
        e = 0 * (e - 1) / e;
        e = (1 > e ? e : 1) * a * .05;
        return 1 > e ? 1 : e
      }
        , CFg = function (a, b) {
        var c = AFg(b)
          , e = 0
          , f = 0
          , g = null
          , k = b.ha;
        if (c)
          if (g = sFg(a.V, k))
            g.wa = b.iy,
              e = jDg(g),
              f = g.V.length,
              b.Pr = g;
          else {
            var m = b.Jc;
            m && (e = .5 * m.R,
              f = .5 * m.T)
          }
        b.R = e;
        b.T = f;
        e = a.va + e;
        f = a.wa + f;
        if (e > a.Ca || f > a.Ga)
          return DFg(b),
            !0;
        a.va = e;
        a.wa = f;
        e = a.Xa ? GFg(a, b.V, b.$) : 1;
        f = b.Cu();
        e = !f && (b.iy < a.ra / e || !c && 2 > k.length);
        var q = b.to()
          , r = b.Ut
          , t = b.iy >= a.Oa;
        m = (m = b.Jc) ? m.wj : 0;
        c && (a.ta || g && g.W == (b.bn && (b.bn.availableViewDirectionsArray ? b.bn.availableViewDirectionsArray[b.Ut] : b.bn.defaultAvailableViewDirections) & 1 << a.W ? a.W : 0) ? g && a.V.wa.sj(g.R) : t || f || m ? tFg(a.V, k, a.W, q, b.Ut) : tFg(a.V, k, a.W, q, b.Ut, !0));
        c = t || f || g && !g.va || m ? 255 : 0;
        g = f ? 255 : 0;
        if (e && (f = q,
          e = 0,
          0 == k.length % 4 ? 0 == k.length ? f = oDg(a.ha) : (q = q.bulkMetadataEpoch[r],
          (f = a.ha.to(k)) || a.ta || nDg(a.ha, k, q, 2)) : e = 8 * (r + 1),
          f))
          for (q = a.Bb,
                 q.se(),
                 q = q.T,
                 r = a.Bb,
                 r.se(),
                 r = r.V,
                 m = b.W,
                 t = 0; 8 > t; t++) {
            var x = f.childIndices[e + t];
            if (0 > x)
              g |= 1 << t;
            else {
              var B = zFg(a.$, f.obbCenters, f.obbExtents, f.obbRotations, x, m)
                , G = B & 4095;
              if (~G & G >> 1 & 1365)
                c &= ~(1 << t);
              else {
                G = q + -a.$.H[0];
                var I = r - a.$.H[1]
                  , T = B = a.Aa.create(b, k + t, f, x, t, B);
                T.V = G;
                T.$ = I;
                B.iy = G / (f.metersPerTexel[x] * a.Ba);
                a.T.insert(B)
              }
            }
          }
        b.wj = c;
        b.H = g;
        return !1
      }
        , DFg = function (a) {
        var b = a.Jc;
        b && (b.wj |= 1 << a.nH,
          b.removeChild(a),
          BFg(a))
      }
        , EFg = function (a, b) {
        for (var c = b.hk, e = b.wj, f = b.Pr, g = !0; c;) {
          var k = EFg(a, c)
            , m = !!(k & 1);
          g = g && !!(k & 2);
          m && (e &= ~(1 << c.nH));
          c = c.Vo
        }
        b.wj = e;
        c = !(e && AFg(b) && !f);
        c |= a.Ma;
        b.hk ? g = g || f && e : g = c;
        return (c ? 1 : 0) | (g ? 2 : 0)
      }
        , FFg = function (a, b) {
        var c = b.Pr;
        if (AFg(b) && !c)
          return !1;
        for (b = b.hk; b;) {
          if (!FFg(a, b))
            return !1;
          b = b.Vo
        }
        c && (c.va = !1);
        return !0
      }
        , HFg = [2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0]
        , IFg = function () {
        this.R = this.H = null;
        this.t = 0
      };
      IFg.prototype.set = function (a, b, c) {
        this.H = a;
        this.R = b;
        this.t = c
      }
      ;
      IFg.prototype.Kg = function () {
        return -Math.abs(this.t - .5)
      }
      ;
      var JFg = function (a) {
        var b = 0;
        a.H.wj || (b += jDg(a.H));
        a.R.wj || (b += jDg(a.H));
        return b
      }
        , KFg = function (a, b) {
        return a.ra - b.ra
      };
      JAg.prototype.Lc = function () {
        return this.Bb
      }
      ;
      JAg.prototype.update = function (a, b, c, e) {
        this.Bb.H.Fa(a.H);
        if (!e || e.ha) {
          a = a.H;
          e = HFg.length;
          var f = Math.PI / e;
          this.va = Math.abs(a.Uc()) < f ? 1 : HFg[Math.round(e * a.Ld() / (2 * Math.PI)) % e];
          for (a = 0; a < this.ha.length; ++a)
            this.ha[a].wj = 0;
          this.H.update(this.Bb, b, c, this.va);
          c = this.R;
          for (a = 0; a < c.$.length; a++)
            e = c.$[a],
              hCg(c.T, e.path, e.W, e.ra, e.ha, e.priority);
          c.$ = [];
          for (a = 0; a < c.ta.length; a++)
            e = c.ta[a],
              hCg(c.T, e.path, e.W, e.ra, e.ha, e.priority);
          c.ta = [];
          c = this.H.H.R;
          a = this.ra;
          0 < a.H.length - a.R.length && LFg(this, c, .25 * b);
          for (a = 0; a < c.length; ++a)
            c[a].ha = this.R.ra;
          for (b = 0; b < this.ha.length; ++b)
            a = this.ha[b],
            0 === a.wj && c.push(a);
          a = (0,
            _.Uq)();
          b = (a - this.Ba) / 500;
          this.Ba = a;
          for (a = 0; a < c.length; ++a) {
            var g = c[a];
            e = g.$;
            f = g.T;
            g = g.wj;
            for (var k = 0; 8 > k; ++k)
              e[k] = g & 1 << k ? Math.min(e[k] + b, 1) : Math.max(e[k] - b, 0),
                f[k] = -1
          }
          b = !1;
          this.$.rd() || (this.$.clear(),
            this.W = 0);
          for (a = 0; a < c.length; a++)
            if (e = c[a],
              f = sFg(this.R, e.Ba))
              if (g = e.dj.H,
                g = g.charAt(g.length - 1),
              e.wj || f.wj & 1 << g)
                if (g = f.$[+g],
                .01 < g) {
                  k = e.$;
                  for (var m = 0, q = 0, r = 0; 8 > r; r++)
                    m += k[r],
                      q++;
                  .01 < m && (k = m / q,
                    b = f,
                    g = k / (k + g),
                    this.W >= .1 * this.Ca.Y3() ? (f = this.$.remove(),
                      this.W -= JFg(f)) : f = 0 < this.wa.length ? this.wa.pop() : new IFg,
                    f.set(b, e, g),
                    this.$.insert(f),
                    this.W += JFg(f),
                    b = !0)
                }
          for (; a = this.$.remove();) {
            e = 1 - a.t;
            f = a.R.T;
            for (g = 0; 8 > g; g++)
              f[g] = Math.min(2 * a.t, 1);
            f = a.R.dj.H;
            a.H.T[Number(f.charAt(f.length - 1))] = Math.min(2 * e, 1);
            this.wa.push(a)
          }
          this.W = 0;
          MFg(c);
          this.ha = c;
          b && this.Ga();
          this.R.ra++
        }
      }
      ;
      var MFg = function (a) {
        for (var b = 0, c = 0; c < a.length; c++) {
          var e = a[c]
            , f = e.wj & e.QC()
            , g = e.T;
          e = e.$;
          for (var k = !1, m = 0; 8 > m; ++m)
            0 > g[m] ? f & 1 << m ? (g[m] = 1,
              k = !0) : (g[m] = 0,
              e[m] = 0) : k = !0;
          k && (a[b] = a[c],
            b++)
        }
        a.length = b
      }
        , NFg = function (a, b) {
        if (b && b.H.length) {
          var c = [];
          for (var e = 0; e < b.H.length; ++e) {
            var f = sFg(a.R, b.H[e]);
            f && c.push(f)
          }
        } else
          c = a.H.H.R;
        return c
      };

      // TODO: Near top of rendering.
      JAg.prototype.Af = function (a, b) {
        a = a ? a : this.Bb;
        var c = NFg(this, b);
        c.sort(KFg);
        var e = b ? b.$ : 7
          , f = this.V
          , g = f.T;
        if (!g.isContextLost()) {
          g.depthFunc(513);
          f.Oa.set(18, 0);
          if (r9(f.H)) {
            yEg(f.H, a);
            if (iEg(f.ha))
              if (0 == c.length) {
                var k = _.K8(a);
                CCg(f.ha.H, a.H, k)
              } else
                ECg(f.ha.H, c);
            IEg(f.ra) && ECg(f.ra.H, c)
          }
          g.enable(2884);
          g.cullFace(1029);
          g.enable(2929);
          g.disable(3042);
          g.disable(2960);
          g.blendFuncSeparate(32771, 32772, 1, 0);
          g.blendEquation(32774);
          k = 0 | bFg(f, c, a, e, !1);
          r9(f.H) && DEg(f.H) && (f.H.Gc = f.Ca,
            GEg(f.H, f.ha));
          k && (g.enable(3042),
            bFg(f, c, a, e, !0),
            g.disable(3042))
        }
        f = this.V;
        if (!f.T.isContextLost() && e & 16) {
          e = !1;
          for (g = 0; g < c.length; ++g)
            e = e || !!c[g].ta;
          e && cFg(f, c, a)
        }
        if (!b || !b.W) {
          b = this.R;
          c = a = 0;
          e = [];
          for (var m in b.H)
            if (f = b.H[m],
            1 < ++f.$ && !f.error) {
              e.push(m);
              if (f.T || f.H)
                bCg(b.T, f.R.dj),
                  f.R = null,
                f.T && (_.zBg(f.T),
                  a++),
                f.H && (_.zBg(f.H),
                  c++),
                  f.V = null,
                  f.T = null,
                  f.H = null;
              delete b.H[m];
              --b.R[f.priority]
            }
          $Bg(b.T, e)
        }
      };

      var vAg = function (a, b, c, e, f, g) {
        g = _.Kq(g) ? g : Infinity;
        var k = Infinity;
        if (a = a.H.R)
          k = a.zB(b, c, f ? 14 : 7, e),
          k >= g && (k = Infinity);
        return k
      }
        , OFg = function (a, b, c, e, f, g) {
        var k = _.Kq(g) ? g : Infinity
          , m = new zAg(!1);
        m.init(_.LK, _.MK, b, e ? e : null, !!f, k);
        return jFg(a.Aa, m, a.va, function () {
          var a = m.R;
          m.R >= k && (a = Infinity);
          c(a, e)
        })
      }
        , LFg = function (a, b, c) {
        for (var e = 0; e < b.length; ++e) {
          var f = b[e]
            , g = f.Cu() ? 1 : f.wa;
          if (a.R.ra > f.ha + 1 && g >= c) {
            g = a.ra;
            f = f.dj.R;
            for (var k = c, m = 0; m < g.H.length; m++) {
              var q = g.H[m];
              if (q) {
                var r = q.R.V;
                r[2] >= f[0] && r[0] <= f[3] && r[3] >= f[1] && r[1] <= f[4] && (r = new lDg(q.R, g.T, f, k),
                  _.yG(q.T, r, 1),
                  q.H.push(r))
              }
            }
          }
        }
      }
        , PFg = function (a, b, c, e, f, g, k) {
        if (!dDg(f.obbCenters, f.obbExtents, f.obbRotations, g, b, c))
          return !1;
        var m = !!(f.flags[g] & 4)
          , q = !1
          , r = f;
        if (!m) {
          if (0 == e.length % 4) {
            r = a.T.to(e);
            var t = 0
          } else
            t = 8 * (g + 1);
          if (r)
            for (var x = 0; 8 > x; x++) {
              var B = e + x
                , G = r.childIndices[t + x];
              0 <= G && (B = PFg(a, b, c, B, r, G, k),
                q = q || B)
            }
        }
        e.length > k.R.length && (k.R = e,
          k.H = f.metersPerTexel[g],
          k.Cu = m || !!r && !q);
        return !0
      };
      _.E = LAg.prototype;
      _.E.lA = function () {
        return this.ta
      }
      ;
      _.E.update = function (a, b) {
        this.H.update(a, this.W, this.W * this.Ba, b)
      }
      ;

      // TODO: Top of rendering?
      _.E.render = function (a, b) {
        var c = this.R;
        c.T.clearDepth(1);
        c.T.clearColor(0, 0, 0, 1);
        c.T.clear(16640);
        this.H.Af(a || void 0, b || void 0)
      };

      _.E.rM = function () {
        this.H.H.ta = !0
      }
      ;
      _.E.rD = function () {
        this.H.H.ta = !1
      }
      ;
      _.E.UGa = function (a) {
        for (var b = this.H, c = b.H.H.R, e = {}, f = 0; f < c.length; f++) {
          var g = c[f].dj.T;
          if (g.copyrightIds)
            for (var k = 0; k < g.copyrightIds.length; k++) {
              var m = g.copyrightIds[k];
              if (!e[m]) {
                e[m] = !0;
                var q = b.T;
                q.W || -1 == q.H || (q.W = new Czg,
                  pDg(q));
                q = q.W && q.Ga ? q.W.H[m] : void 0;
                q && a.push(q)
              }
            }
        }
        b = b.V;
        xEg(b.H) && a.push("ESO/S. Brunier");
        IEg(b.ra) && a.push("NOAA-NGDC")
      }
      ;
      _.E.sM = function (a, b, c, e, f) {
        return vAg(this.H, a, b, c || void 0, e, f)
      }
      ;
      var QFg = function (a, b, c, e, f, g) {
        return OFg(a.H, b, c, e || void 0, f, g)
      };
      LAg.prototype.Oa = function () {
        this.W = .15
      }
      ;
      LAg.prototype.La = function () {
        this.W = .8
      }
      ;
      RFg = function (a) {
        var b = a.R, c;
        if (c = JCg(b.ha.H) && JCg(b.ra.H))
          b = b.H,
            c = JCg(b.hb) && JCg(b.Wb);
        if (b = c)
          a = a.H,
            b = !(0 < a.T.T || 0 < a.R.R[2]);
        return b
      }
      ;
      _.SFg = function (a, b, c) {
        a: {
          var e = a.H
            , f = e.Bb;
          a = new vzg;
          q9(f, _.nNb);
          _.L8(f, b, c, _.kNb, _.lNb);
          if (b = e.H.R)
            if (b = b.zB(_.nNb, _.lNb, 7, _.mNb),
            Infinity != b) {
              c = sFg(e.R, _.mNb.R);
              if (!c) {
                a = null;
                break a
              }
              c = c.dj;
              a.R = "";
              PFg(e, _.kNb, _.lNb, c.H, c.to(), c.V, a);
              f = f.H;
              e = f.H;
              f = f.ub();
              a.T = _.pC(b, e) / f / a.H;
              break a
            }
          a = null
        }
        return a
      }
      ;
      _.E = LAg.prototype;
      _.E.zy = function () {
        var a = this.H.T.R;
        return a ? a.H() : Infinity
      }
      ;
      _.E.OS = function () {
        var a = this.H.T.R;
        return a ? a.V : Infinity
      }
      ;
      _.E.NS = function () {
        var a = this.H.T.R;
        return a ? a.T : Infinity
      }
      ;
      _.E.init = function () {
        this.V.init()
      }
      ;
      _.E.sSa = function (a, b, c) {
        _.AJ(this.R.W.R, b);
        b = this.R;
        b.W.H = a;
        b.W.T = c
      }
      ;
      _.E.O7 = function (a) {
        this.R.W.opacity = a
      }
      ;
      MAg.prototype.H = function () {
        return 0
      }
      ;
      MAg.prototype.T = function (a) {
        return _.bu(this.R, _.oNb, _.$t((a - 6E6) / 14E6, 0, 1))
      }
      ;
      _.J(NAg, MAg);
      NAg.prototype.H = function (a, b) {
        var c = _.pC(a, b);
        if (13E6 <= c)
          return 0;
        a = Math.asin(Math.min(6371010 / (a + 6371010), 1)) - (.5 - this.V) * b;
        1E4 < c && (c = 1 - (c - 1E4) / 1299E4,
          a = _.bu(0, a, c * c));
        return a
      }
      ;
      OAg.prototype.H = function (a, b) {
        return 0 == this.R ? this.V.H(a, b) : 1 == this.R ? this.W.H(a, b) : _.bu(this.V.H(a, b), this.W.H(a, b), this.R)
      }
      ;
      OAg.prototype.T = function (a) {
        return 0 == this.R ? this.V.T(a) : 1 == this.R ? this.W.T(a) : _.bu(this.V.T(a), this.W.T(a), this.R)
      }
      ;
      var TFg = function (a, b, c, e, f, g) {
        var k = a.zy();
        if (Infinity == k)
          return Infinity;
        b = _.dtg(b, c, k, a.OS(), a.NS(), g);
        a = a.H;
        c = b.qD;
        c = _.Kq(c) ? c : Infinity;
        a.ta.init(_.LK, _.MK, e, null, !!f, c);
        eFg(a.Aa, a.ta, !0, a.va, void 0, void 0, void 0);
        e = a.ta.R < c ? a.ta.R : Infinity;
        return e >= b.qD ? Infinity : b.XW - e
      }
        , UFg = function (a, b, c, e, f, g, k, m) {
        var q = a.zy();
        if (Infinity == q) {
          var r = _.nr
            , t = _.Vq(function () {
            r = UFg(a, b, c, e, f, g, k, m)
          }, 50);
          return function () {
            clearTimeout(t);
            r()
          }
        }
        q = _.dtg(b, c, q, a.OS(), a.NS(), m);
        var x = q.XW
          , B = q.qD;
        return QFg(a, e, function (a, b) {
          a = a < B ? x - a : Infinity;
          b ? f(a, b) : f(a)
        }, g, k, q.qD)
      };
      l9.prototype.Lc = function () {
        return this.R
      }
      ;
      l9.prototype.$ = function (a) {
        this.wa = this.ta;
        this.ta.R = a
      }
      ;
      var WFg = function (a) {
        VFg(a);
        return a.hb
      }
        , XFg = function (a) {
        VFg(a);
        return a.Ga
      };
      l9.prototype.ra = function () {
        VFg(this);
        return this.Ma
      }
      ;
      var VFg = function (a) {
        if (a.Xa != a.H.R) {
          var b = a.R
            , c = a.H
            , e = a.hb;
          e[0] = .5 * c.Pb();
          var f = c.ub()
            , g = c.Uc()
            , k = .5 * c.H;
          e[1] = Math.abs(g) < k ? .5 * f * (1 + Math.tan(g) / Math.tan(k)) : g >= k ? f : 0;
          YFg(a, e[0], e[1], !0, a.Ga);
          a.Ja = _.yJ(a.Ga) - 6371010;
          q9(b, _.VK);
          a.Ma = _.pC(_.tw(_.VK, a.Ga), c.H);
          a.nb = _.pC(c.Ac() - a.Ja, c.H);
          a.Xa = c.R
        }
      };
      l9.prototype.Pa = function (a, b) {
        _.ZFg(this);
        if (!YFg(this, a, b, !1, this.T) || .001 > $Fg(this, this.T))
          return _.mw(this.T, 0, 0, 0),
            !1;
        _.Iw(this.Ca, a, b);
        return !0
      }
      ;
      l9.prototype.Eb = function (a, b, c) {
        var e = _.Xvg;
        if (_.rIa(this.T, _.pNb))
          return this.Pa(a, b);
        a: {
          var f = _.yJ(this.T);
          var g = this.T;
          _.L8(this.R, a, b, _.PK, _.OK);
          _.tNb.H = f;
          f = yBg(_.yNb);
          if (0 == f || 2 == f && 0 > _.yNb[1] || 1 == f && 0 > _.yNb[0])
            g = !1;
          else {
            var k = _.yNb[0];
            if (0 > k)
              k = _.yNb[1];
            else if (2 == f) {
              _.pw(_.OK, k, _.NK);
              _.nw(_.PK, _.NK, _.NK);
              _.pw(_.OK, _.yNb[1], _.QK);
              _.nw(_.PK, _.QK, _.QK);
              _.tw(_.QK, g) < _.tw(_.NK, g) && _.ir(_.NK, _.QK);
              g = !0;
              break a
            }
            _.pw(_.OK, k, _.NK);
            _.nw(_.PK, _.NK, _.NK);
            g = !0
          }
        }
        if (!g || .001 > $Fg(this, _.NK))
          return _.mw(this.T, 0, 0, 0),
            !1;
        if (this.Ca[0] != a || this.Ca[1] != b)
          g = this.R,
            g.se(),
            _.IJ(g.R, _.NK, _.sNb),
            aGg(this, this.T, _.NK, c, e),
            bGg(this),
            _.ZFg(this),
            _.IJ(MCg(this.R), _.sNb, this.T),
            _.Iw(this.Ca, a, b);
        return !0
      }
      ;
      var $Fg = function (a, b) {
        q9(a.R, _.VK);
        _.ow(_.VK, b, _.VK);
        return _.rw(_.VK, b) / (_.yJ(_.VK) * _.yJ(b))
      }
        , bGg = function (a) {
        if (a.ra() < a.va) {
          var b = _.qC(a.va, a.H.H)
            , c = XFg(a)
            , e = WFg(a);
          b = cGg(a, b, a.H.Uc(), c, e[1]);
          a.H.xd(b)
        }
      }
        , dGg = function (a, b, c, e, f) {
        _.L8(a.R, b, c, _.PK, _.OK);
        _.tNb.H = e;
        return _.wG(_.tNb, _.PK, _.OK, f)
      }
        , YFg = function (a, b, c, e, f) {
        return _.ctg(a.Aa, b, c, f, void 0, e, a.R) ? !0 : dGg(a, b, c, a.Ja + 6371010, f)
      }
        , eGg = function (a, b, c, e) {
        _.L8(a.R, b, c, _.PK, _.OK);
        _.tNb.H = e;
        return 0 < yBg(_.SK)
      }
        , aGg = function (a, b, c, e, f) {
        var g = _.uNb
          , k = g
          , m = a.gL(a.H.Ac(), a.H.H, a.H.Uc());
        k[0] = a.H.yc();
        k[1] = a.H.Vb();
        k[1] = _.$t(k[1], -m, m);
        _.ir(_.SK, b);
        _.ir(_.TK, c);
        q9(a.R, _.VK);
        _.sw(_.qNb, _.VK, _.QK);
        _.sw(_.QK, _.qNb, _.RK);
        b = (_.RK[0] * _.SK[0] + _.RK[1] * _.SK[1]) / (_.atg(_.RK) * _.atg(_.SK));
        0 > (_.RK[0] * _.TK[0] + _.RK[1] * _.TK[1]) / (_.atg(_.RK) * _.atg(_.TK)) * b || (b = .5 * (-b + 1),
          c = _.yJ(_.SK),
          _.ow(_.SK, _.TK, _.RK),
          _.pw(_.RK, b, _.RK),
          _.pw(_.QK, _.rw(_.RK, _.QK) / _.pIa(_.QK), _.RK),
          _.nw(_.TK, _.RK, _.TK),
          _.ow(_.SK, _.RK, _.SK),
          _.pw(_.SK, c / _.yJ(_.SK), _.SK),
          _.pw(_.TK, c / _.yJ(_.TK), _.TK),
          _.sw(_.SK, _.TK, _.RK),
          b = _.yJ(_.RK),
        1E-12 > b || (c = b / (_.yJ(_.SK) * _.yJ(_.TK)),
        1E-12 > c || (_.pw(_.RK, 1 / b, _.RK),
          TCg(-Math.asin(c)),
          _.pJb(_.UK, _.VK, _.VK),
          _.gC(_.VK[0], _.VK[1], _.VK[2], _.RK),
          k[0] = _.RK[0],
          k[1] = _.RK[1],
          k[1] = _.$t(k[1], -m, m))));
        e ? (g[0] = _.ftg(a.H.yc(), g[0]) / e,
          g[1] = _.ftg(a.H.Vb(), g[1]) / e,
        f && e && (k = (g[0] - f[0]) / e,
          g = (g[1] - f[1]) / e,
          k = _.$t(k, -1.8E-4, 1.8E-4),
          g = _.$t(g, -1.8E-4, 1.8E-4),
          f[0] += k * e,
          f[1] += g * e,
          g = f),
          f = g,
          a.H.ud(a.H.yc() + f[0] * e),
          a.H.Ad(a.H.Vb() + f[1] * e)) : (a.H.ud(g[0]),
          a.H.Ad(g[1]))
      };
      _.E = l9.prototype;
      _.E.XU = function () {
        return this.wa.H(this.H.Ac(), this.H.H)
      }
      ;
      _.E.n2 = function (a, b) {
        a = _.Kq(a) ? a : this.H.Ac();
        return this.wa.T(_.pC(a, _.Kq(b) ? b : this.H.H))
      }
      ;
      _.E.Wba = function (a, b, c, e) {
        this.sY();
        var f = XFg(this)
          , g = this.ra();
        this.Ba = _.yJ(f);
        b[0] = g;
        b[1] = a * g;
        b[1] < this.va && b[1] < b[0] ? b[1] = b[0] < this.va ? b[0] : this.va : 2.29639378791E7 < b[1] && b[1] > b[0] && (b[1] = 2.29639378791E7 < b[0] ? b[0] : 2.29639378791E7);
        a = !0;
        _.Kq(c) && _.Kq(e) && eGg(this, c, e, this.Ba) && (_.vNb.Fa(this.H),
          this.SY(b[1]),
        eGg(this, c, e, this.Ba) && (a = !1),
          this.H.Fa(_.vNb));
        this.W[0] = .5 * this.H.Pb();
        this.W[1] = .5 * this.H.ub();
        a || (_.Kq(c) && (this.W[0] = c),
        _.Kq(e) && (this.W[1] = e))
      }
      ;
      _.E.SY = function (a) {
        a = Math.min(a, 2.29639378791E7);
        YFg(this, this.W[0], this.W[1], !0, this.V);
        var b = WFg(this);
        VFg(this);
        dGg(this, b[0], b[1], this.Ba, _.xNb);
        var c = this.wa.T(a);
        GBg(this.H, c);
        a = cGg(this, _.qC(a, c), this.H.Uc(), _.xNb, b[1]);
        this.H.xd(a);
        this.H.ze(this.wa.H(a, c));
        dGg(this, this.W[0], this.W[1], _.yJ(this.V), _.wNb);
        aGg(this, this.V, _.wNb);
        _.ZFg(this);
        this.sY()
      }
      ;
      _.E.sY = function () {
        var a = this.ha()
          , b = this.ra();
        this.va = Math.min(b, a)
      }
      ;
      _.E.P7 = function (a, b, c, e, f) {
        b = _.$t(b, 0, this.AR());
        f = _.Kq(f) ? f : this.H.H;
        var g = a - this.H.Ld()
          , k = b - this.H.Uc();
        k = 1E-6 < Math.abs(k);
        var m = 1E-6 < Math.abs(g);
        g = 1E-6 < Math.abs(f - this.H.H);
        if (k || m || g)
          (m = YFg(this, c, e, !0, this.V)) && (k || g) && (q9(this.R, _.VK),
            k = _.yJ(_.ow(this.V, _.VK, _.VK)),
          g && (k = _.qC(_.pC(k, this.H.H), f)),
            k = cGg(this, k, b, this.V, e),
            this.H.xd(k)),
            this.H.Fe(a),
            this.H.ze(b),
            GBg(this.H, f),
          m && (dGg(this, c, e, _.yJ(this.V), _.wNb),
            aGg(this, this.V, _.wNb)),
            _.ZFg(this)
      }
      ;
      var cGg = function (a, b, c, e, f) {
        var g = a.H.ub();
        e = _.yJ(e);
        a = b * Math.cos(c - Math.atan(Math.tan(a.H.H / 2) * (2 * f / g - 1)));
        b = Math.sqrt(a * a - (b * b - e * e));
        return a + b - 6371010
      };
      _.E = l9.prototype;
      _.E.tM = function (a, b) {
        this.H.ud(a);
        this.H.Ad(b);
        bGg(this);
        _.ZFg(this)
      }
      ;
      _.E.eL = function () {
        return _.qC(2.29639378791E7, this.H.H)
      }
      ;
      _.E.wX = function (a) {
        this.Oa = a
      }
      ;
      _.E.AR = function () {
        var a = this.La.H(this.H.Ac(), this.H.H);
        return _.$t(a, 0, this.Oa)
      }
      ;
      _.E.gL = function (a, b, c) {
        var e = this.Aa.zy();
        a = Math.max((a + e) / e, 1);
        b = .5 * b + c;
        e = Math.asin(1 / a);
        c = _.bu(c, b < e ? b : e, .8);
        return Math.PI / 2 - Math.asin(Math.min(1, a * Math.sin(c))) + c
      }
      ;
      _.ZFg = function (a) {
        for (var b = -Infinity, c = 0; 4 > c; ++c) {
          _.mw(_.PK, c & 1 ? -1 : 1, c & 2 ? -1 : 1, -1);
          var e = _.btg(a.R);
          _.Bw(e, _.PK, _.PK);
          _.gC(_.PK[0], _.PK[1], _.PK[2], _.PK, a.Aa.zy());
          e = _.PK[2] - 10;
          var f = TFg(a.Aa, _.PK[0], _.PK[1], 0, !1, e);
          isFinite(f) && f > e && f > b && (b = f)
        }
        isFinite(b) && a.H.xd(a.H.Ac() + b - e)
      }
      ;
      l9.prototype.ha = function () {
        var a = 0
          , b = WFg(this);
        (b = _.SFg(this.Aa, b[0], b[1])) && b.Cu && (a = b.H * this.H.ub(),
          a = Math.min(a, 2E3));
        return Math.max(a, 0)
      }
      ;
      var m9 = function () {
        this.R = !1;
        this.H = 0
      };
      m9.prototype.sd = function () {
        return this.R
      }
      ;
      m9.prototype.set = function (a, b) {
        !this.R && a && (this.H = b);
        this.R = a
      }
      ;
      var fGg = function (a, b, c) {
        a = (c - a) / (b - a);
        return 0 > a ? 0 : 1 < a ? 1 : a
      };
      QAg.prototype.R = function (a, b, c, e) {
        c = Math.abs(c);
        var f = _.pC(a, b);
        e.Fa(this.T);
        var g = fGg(73900, 221700, f);
        a = this.H.H(a, b);
        a = fGg(a - _.mtg, a, c);
        e.H = c < _.xtg ? 2 : 1;
        e.W *= Math.max(a, g);
        e.T *= g;
        e.R *= fGg(294E4, 72E5, f);
        e.V *= fGg(103E4, 3384E3, f)
      }
      ;
      RAg.prototype.R = function (a, b, c, e) {
        if (0 == this.H)
          this.T.R(a, b, c, e);
        else if (1 == this.H)
          this.V.R(a, b, c, e);
        else {
          this.T.R(a, b, c, _.M8);
          this.V.R(a, b, c, _.N8);
          a = this.H;
          e.H = 0 == a ? _.M8.H : 1 == a ? _.N8.H : 0 == _.M8.H || 0 == _.N8.H ? 0 : _.N8.H;
          e.W = _.bu(_.M8.W, _.N8.W, a);
          e.Vm = 1 > a ? _.M8.Vm : _.N8.Vm;
          e.va = _.bu(_.M8.va, _.N8.va, a);
          e.Ca = _.bu(_.M8.Ca, _.N8.Ca, a);
          e.R = _.bu(_.M8.R, _.N8.R, a);
          e.Ba = _.bu(_.M8.Ba, _.N8.Ba, a);
          e.wa = _.bu(_.M8.wa, _.N8.wa, a);
          e.Aa = _.bu(_.M8.Aa, _.N8.Aa, a);
          e.T = _.bu(_.M8.T, _.N8.T, a);
          e.Ga = _.bu(_.M8.Ga, _.N8.Ga, a);
          e.V = _.bu(_.M8.V, _.N8.V, a);
          e.ha = _.bu(_.M8.ha, _.N8.ha, a);
          e.$ = _.bu(_.M8.$, _.N8.$, a);
          b = e.ra;
          var f = _.M8.ra;
          c = _.N8.ra;
          var g = f[0]
            , k = f[1];
          f = f[2];
          b[0] = (c[0] - g) * a + g;
          b[1] = (c[1] - k) * a + k;
          b[2] = (c[2] - f) * a + f;
          KCg(e.ra, e.ra);
          null == _.M8.Gd ? e.Gd = _.N8.Gd : null == _.N8.Gd ? e.Gd = _.M8.Gd : (null == e.Gd && (e.Gd = new Date),
            e.Gd.setTime(_.bu(_.M8.Gd.getTime(), _.N8.Gd.getTime(), a)));
          e.ta = _.bu(_.M8.ta, _.N8.ta, a);
          e.Ja = _.bu(_.M8.Ja, _.N8.Ja, a)
        }
      }
      ;
      var gGg = function (a, b, c) {
        a = (c - a) / (b - a);
        return 0 > a ? 0 : 1 < a ? 1 : a
      };
      SAg.prototype.R = function (a, b, c, e) {
        a = _.pC(a, b);
        e.Fa(this.H);
        e.H = 0;
        e.T *= gGg(73900, 221700, a);
        e.V *= gGg(103E4, 3384E3, a)
      }
      ;
      _.J(VAg, _.QJ);
      _.J(YAg, _.QJ);
      _.J(ZAg, _.Erg);
      _.E = ZAg.prototype;
      _.E.en = function (a, b) {
        if (!this.Hf(a, b))
          return !1;
        this.context.H.sj(this.ra);
        this.context.bindFramebuffer(36160, this.V);
        this.context.viewport(0, 0, this.T, this.R);
        this.context.H.sj(this.H);
        this.ha && this.context.H.sj(this.W);
        return !0
      }
      ;
      _.E.AM = function (a, b) {
        var c = 4;
        this.ha && (c += 4);
        return 83886080 < c * a * b ? !1 : !!this.V && this.context.H.contains(this.ra) && this.context.H.contains(this.H) && !(this.ha && !this.context.H.contains(this.W)) && this.T == a && this.R == b
      }
      ;
      _.E.Hf = function (a, b) {
        a = Math.ceil(a * this.scale);
        b = Math.ceil(b * this.scale);
        this.AM(a, b) || (this.V && this.context.H.contains(this.ra) || (this.V = this.context.createFramebuffer(),
          this.ra = this.context.H.Cw(this.V, (0,
            _.gr)(this.context.deleteFramebuffer, this.context, this.V), 0)),
        this.ha && (this.context.H.contains(this.W) ? this.$ = this.context.H.YBa(this.W) || null : (this.$ = this.context.createRenderbuffer(),
          this.W = this.context.H.Zva(this.$, a * b * 4)),
          this.context.H.e8(this.W, a * b * 4)),
        this.context.H.contains(this.H) || (this.H = this.context.H.createTexture(this.wa)),
          this.context.H.e8(this.H, a * b * 4),
          this.context.bindTexture(3553, this.context.H.Qp(this.H) || null),
          this.context.Tl(3553, 0, a, b, this.format, 5121, null),
        this.ha && (this.context.bindRenderbuffer(36161, this.$),
          this.context.renderbufferStorage(36161, this.va ? 34041 : 33189, a, b)),
          this.ta = !1);
        if (!this.ta) {
          this.context.bindFramebuffer(36160, this.V);
          var c = this.context.H.Qp(this.H);
          c && this.context.framebufferTexture2D(36160, 36064, 3553, c, 0);
          this.ha && this.$ && this.context.framebufferRenderbuffer(36160, this.va ? 33306 : 36096, 36161, this.$);
          c = this.context.checkFramebufferStatus(36160);
          this.context.bindFramebuffer(36160, null);
          this.context.bindRenderbuffer(36161, null);
          this.ta = 36053 != c ? !1 : !0;
          if (!this.ta)
            return !1
        }
        this.T = a;
        this.R = b;
        return !0
      }
      ;
      _.E.Tb = function () {
        this.V = null;
        this.W = this.H = this.ra = -1;
        this.ta = !1
      }
      ;
      _.E.bindTexture = function (a) {
        var b = this.context.H.Qp(this.H);
        if (!b)
          return !1;
        this.context.activeTexture(33984 + a);
        this.context.bindTexture(3553, b);
        this.context.H.sj(this.H);
        return !0
      }
      ;
      _.E.Pb = function () {
        return this.T
      }
      ;
      _.E.ub = function () {
        return this.R
      }
      ;
      _.E.Fa = function (a) {
        var b = a.Pb()
          , c = a.ub();
        this.Hf(b, c) && a.en(b, c) && (this.bindTexture(0),
          this.context.copyTexImage2D(3553, 0, this.format, 0, 0, b, c, 0))
      }
      ;
      _.J(aBg, _.Erg);
      var $Ag = function (a) {
        a.H = new ZAg(a.W, !0, 9729, 1);
        a.V = new _.Frg(a.W)
      };
      _.E = aBg.prototype;
      _.E.Tb = function () {
        this.H.Tb()
      }
      ;
      _.E.en = function (a, b) {
        return this.H.en(a, b)
      }
      ;
      _.E.AM = function (a, b) {
        return this.H.AM(a, b)
      }
      ;
      _.E.bindTexture = function (a) {
        return this.H.bindTexture(a)
      }
      ;
      _.E.Pb = function () {
        return this.H.Pb()
      }
      ;
      _.E.ub = function () {
        return this.H.ub()
      }
      ;
      bBg.prototype.V = function (a, b) {
        var c = this.H.H
          , e = c.ra;
        c = .25 * c.H.ra;
        a = new zzg(a, b, e.V);
        a.init(e.T, c);
        0 < e.R.length ? (b = e.R.pop(),
          e.H[b] = a) : (b = e.H.length,
          e.H.push(a));
        return b
      }
      ;
      bBg.prototype.W = function (a) {
        var b = this.H.H.ra;
        b.H[a] && (b.H[a].stop(),
          b.H[a] = null,
          b.R.push(a))
      }
      ;
      bBg.prototype.T = function () {
        return this.R ? this.R() : 0
      }
      ;
      bBg.prototype.Ac = function (a, b) {
        return _.etg(this.H, _.eu(a), _.eu(b))
      }
      ;
      var hGg = function (a, b) {
        this.R = new _.Trg(a);
        this.V = b
      };
      hGg.prototype.H = function (a, b) {
        iGg(this, a);
        return _.Zrg(this.R, _.mug, b)
      }
      ;
      hGg.prototype.T = function (a, b) {
        iGg(this, a);
        return _.Urg(this.R, _.mug, b)
      }
      ;
      var iGg = function (a, b) {
        a = a.V();
        _.jC(b.R, b.T, b.H, _.eug);
        a *= _.kC(_.eug[1]);
        b.Yi(_.lug);
        _.lug.T -= a;
        _.lug.ra -= a;
        _.mug.Si(_.lug)
      };
      cBg.prototype.Lc = function () {
        return this.Bb
      }
      ;
      cBg.prototype.ag = function () {
        return "hybrid"
      }
      ;
      var dBg = function (a, b) {
        var c = a.W.clone();
        c.qc = _.Ala;
        c.Hd = !1;
        c.va = 0;
        c.V = b;
        c.hj = a.va;
        return c
      }
        , eBg = function (a, b, c, e, f) {
        var g = _.Fsg(_.Hsg(), 1);
        b.viewport = new hGg(a.W, f || _.FAa(0));
        c && (b.wa = new bBg(a.R, f || null));
        c = g.H(b, a.V.Qh(), a.R.lA());
        a = _.Fsg(_.Hsg(), 3).H().Cb(b, new _.nbb(a.T, null, null), a.T.T, a.V, c, e);
        b = a.H;
        b.ON(!1);
        b.ZH([0]);
        b.hba([0, 1]);
        return a
      }
        , fBg = function (a, b, c, e, f) {
        var g = new _.bH;
        if (f)
          for (b = 0; b < f.length; ++b)
            _.cH(g, f[b]);
        else {
          f = new _.CB;
          _.EB(f, "m");
          _.DB(f, 0);
          _.FB(f, a.W.$);
          var k = _.IB(f);
          _.JB(k, "gm");
          _.KB(k, b + "");
          _.Kq(1.1) && (k = _.IB(f),
            _.JB(k, "gs"),
            _.KB(k, "1.1"));
          _.cH(g, f);
          e && e.QD(f, 0, 1E6 * _.Xde(a.W.$), 1E6 * _.Xde(a.W.$) + 999999)
        }
        b = new _.LB;
        _.MB(b, 68);
        e = _.NB(b);
        e.U[0] = _.qp;
        e.U[1] = _.Ala;
        b = new _.dH([b]);
        return new _.eH(b, g, a.ta, a.ra, c)
      }
        , jGg = function (a) {
        for (var b = 0; 8 > b; ++b)
          a.T.disableVertexAttribArray(b)
      }
        , kGg = function (a, b, c, e) {
        NCg(b, _.O8, _.P8);
        _.Jug.H = c;
        _.wG(_.Jug, _.O8, _.P8, e) || (a = a.R.sM(_.O8, _.P8),
        Infinity != a && (_.pw(_.P8, a, _.P8),
          _.nw(_.O8, _.P8, e)))
      }
        , lGg = function (a) {
        a = a.H.Uc();
        return a <= Math.PI / 2 && 0 <= a
      }
        , mGg = function (a, b, c, e) {
        var f = Math.sqrt(b * b + c * c + e * e);
        _.hC(a, 6371010, _.Q8);
        _.mw(_.Lug, a[0] + b, a[1] + c, a[2] + e);
        _.hC(_.Lug, 6371010, _.Kug);
        _.S8[0] = (_.Kug[0] - _.Q8[0]) / f;
        _.S8[1] = (_.Kug[1] - _.Q8[1]) / f;
        _.S8[2] = (_.Kug[2] - _.Q8[2]) / f
      }
        , nGg = function (a) {
        var b = _.ww()
          , c = 1 / a.ta;
        _.BIb(b, c, c, c);
        _.Dw(b, -a.V, -a.W, -a.ha);
        _.KJ(a.nb(), a.Pa(), _.Mug);
        _.sIa(_.Nug, _.Mug);
        _.yw(_.Nug, b, _.Oug);
        b = _.ww();
        c = 1 / a.Pb();
        a = 1 / a.ub();
        _.wIb(_.Nug, 0, 1, 0);
        _.CJ(_.Nug, c, -a, 1);
        _.yw(_.Nug, _.Oug, b);
        return b
      }
        , oGg = function () {
        var a = _.hr();
        _.fC(_.Q8, a);
        var b = _.ww();
        _.wIb(b, -a[0], -a[1], -a[2]);
        var c = _.BJ(_.ww());
        mGg(a, .001, 0, 0);
        PCg(c, 0, _.S8[0], _.S8[1], 0, 0);
        mGg(a, 0, .001, 0);
        PCg(c, 1, _.S8[0], _.S8[1], 0, 0);
        mGg(a, 0, 0, .001);
        PCg(c, 2, _.S8[0], _.S8[1], 0, 0);
        _.yw(c, b, _.Nug);
        a = _.ww();
        _.wIb(a, _.Q8[0], _.Q8[1], _.Q8[2]);
        b = _.ww();
        _.yw(a, _.Nug, b);
        return b
      }
        , pGg = function (a, b) {
        _.gC(b[0], b[1], b[2], _.Q8);
        _.Q8[1] > a ? (_.Q8[1] = a,
          _.eC(_.Q8[0], _.Q8[1], _.Q8[2], b)) : _.Q8[1] < -a && (_.Q8[1] = -a,
          _.eC(_.Q8[0], _.Q8[1], _.Q8[2], b))
      };
      gBg.prototype.$ = function () {
        return this.ta.Qp(this.T.H.H) || null
      }
      ;
      var qGg = function (a) {
        return a.ta.contains(a.T.H.H)
      }
        , rGg = function (a, b) {
        a.V.Fa(a.H.H);
        var c = a.H.T;
        a.T.H.Hf(n9(a.V, c), o9(a.V, c));
        c = a.R;
        var e = c.H
          , f = e.Lc()
          , g = e.R
          , k = a.H.H
          , m = a.H.Lc()
          , q = (0,
          a.H.$)() + 6371010;
        q9(m, _.Pug);
        var r = k.Pb() / 2;
        var t = k.ub() / 2;
        _.Wug.H = q;
        _.L8(m, r, t, _.Uug, _.Vug);
        _.wG(_.Wug, _.Uug, _.Vug, _.Qug);
        r = k.Pb();
        _.Wug.H = q;
        _.L8(m, r, 0, _.Uug, _.Vug);
        _.wG(_.Wug, _.Uug, _.Vug, _.Rug);
        r = _.yJ(_.Qug);
        _.vw(_.U8, _.Qug[0] / r, _.Qug[1] / r, _.Qug[2] / r, -r);
        _.ow(_.Rug, _.Pug, _.Tug);
        _.nIa(_.Xug.origin, _.Pug);
        _.nIa(_.Xug.dir, _.Tug);
        t = _.rw(_.U8, _.Xug.dir);
        t = 1E-6 > Math.abs(t) ? Infinity : -(_.rw(_.U8, _.Xug.origin) + _.U8[3]) / t;
        !isFinite(t) || 0 > t || (_.pw(_.Xug.dir, t, _.Sug),
          _.nw(_.Xug.origin, _.Sug, _.Sug));
        r = q * Math.acos(_.rw(_.Qug, _.Rug) / (r * _.yJ(_.Rug))) / _.tw(_.Sug, _.Qug);
        kGg(a.H, m, q, _.T8);
        q9(m, _.U8);
        m = Math.PI / 2 - (_.yJ(_.U8) - q) * Math.tan(k.H / 2) / q;
        pGg(m, _.U8);
        pGg(m, _.T8);
        _.hC(_.T8, q, _.T8);
        _.hC(_.U8, q, _.U8);
        _.U8[0] -= _.T8[0];
        _.U8[1] -= _.T8[1];
        _.U8[2] -= _.T8[2];
        _.R8.ta = _.T8[0];
        _.R8.va = _.T8[1];
        _.R8.ra = _.T8[2];
        _.R8.ha = r * _.yJ(_.U8);
        _.R8.Kh = k.Uc();
        _.R8.$ = -k.Ld();
        _.R8.H = k.H;
        _.R8.width = k.Pb();
        _.R8.height = k.ub();
        f.Si(_.R8);
        c.R.ra(f, g, c.H.Gf(), c.H.V, e.H, a.H.ha).wait(b)
      };
      gBg.prototype.vd = function () {
        var a = this.R
          , b = this.H.T;
        this.Ba.apply(b.state);
        var c = this.T.V
          , e = this.H.H
          , f = n9(e, b);
        e = o9(e, b);
        this.T.H.en(f, e);
        a.vd();
        c.en(f, e);
        this.ha = this.R.T.HF();
        jGg(this.H);
        b.state.apply(this.Ba)
      }
      ;
      gBg.prototype.W = function () {
        return this.Aa
      }
      ;
      gBg.prototype.wa = function () {
        return this.va
      }
      ;
      _.sGg = null;
      _.tGg = null;
      hBg = function (a) {
        var b = a.ha;
        a.V = new ZAg(b, !1, 9729, 1, !0);
        _.sGg || (_.sGg = new VAg(b),
          _.tGg = new YAg(b));
        a.T = _.sGg;
        a.H = _.tGg;
        a.ta = b.createBuffer();
        b.bindBuffer(34962, a.ta);
        b.bufferData(34962, new Float32Array([-1, -1, -1, 1, -1, -1, -1, 1, -1, 1, 1, -1]), 35044)
      }
      ;
      iBg.prototype.$ = function () {
        return this.Ga.$.Qp(this.V.H) || null
      }
      ;
      iBg.prototype.W = function () {
        return this.Aa
      }
      ;
      iBg.prototype.wa = function () {
        return this.Ja
      }
      ;
      iBg.prototype.vd = function () {
        if (0 != this.R) {
          var a = this.ha
            , b = this.Ca.H
            , c = n9(b, a);
          b = o9(b, a);
          this.V.en(c, b);
          a.enable(3042);
          var e = (0,
            _.Uq)();
          300 <= e - this.R ? (a.blendColor(0, 0, 0, 1),
            this.R = 0) : (e = (e - this.R) / 300,
            a.blendColor(0, 0, 0, (e - this.va) / (1 - this.va)),
            this.La(),
            this.va = e);
          a.blendFunc(32771, 32772);
          a.disable(2884);
          a.disable(2929);
          _.TJ(this.T);
          this.T.R.R.set(0);
          this.T.R.H.set(1 / c, 1 / b);
          e = this.T.attributes.H.Va();
          a.activeTexture(33984);
          a.enableVertexAttribArray(e);
          a.bindBuffer(34962, this.ta);
          this.T.attributes.H.vertexAttribPointer(3, 5126, !1, 12, 0);
          var f = this.ra.$();
          a.bindTexture(3553, f);
          a.drawArrays(5, 0, 4);
          a.disableVertexAttribArray(e);
          this.Ba.V.en(c, b)
        }
      }
      ;
      var uGg = function (a) {
        a.R = (0,
          _.Uq)();
        a.va = 0;
        var b = a.ha
          , c = a.Ca.H
          , e = n9(c, b);
        c = o9(c, b);
        a.V.Hf(e, c);
        a.Ba.H.en(e, c);
        var f = a.Aa;
        _.zw(a.ra.W(), _.Yug);
        _.yw(f, _.Yug, _.Zug);
        b.disable(2884);
        b.disable(2929);
        b.disable(3042);
        b.disable(3089);
        _.TJ(a.H);
        a.H.R.T.set(1 / e, 1 / c);
        _.JJ(_.$ug, _.Zug);
        _.ZJ(a.H.R.R, _.$ug);
        _.JJ(_.$ug, _.Yug);
        _.ZJ(a.H.R.H, _.$ug);
        a.H.R.alpha.set(a.Ga.R.Ma);
        f = a.H.attributes.H.Va();
        b.enableVertexAttribArray(f);
        b.bindBuffer(34962, a.ta);
        a.H.attributes.H.vertexAttribPointer(3, 5126, !1, 12, 0);
        a.V.bindTexture(0);
        b.drawArrays(5, 0, 4);
        b.disableVertexAttribArray(f);
        b.copyTexSubImage2D(3553, 0, 0, 0, 0, 0, e, c);
        _.AJ(a.Aa, a.ra.W());
        _.AJ(a.Ja, a.ra.wa());
        a.Ba.V.en(e, c)
      };
      jBg.prototype.vd = function () {
        var a = this.T;
        a.disable(2884);
        a.disable(2929);
        var b = _.jJb(this.H);
        b.FG();
        var c = b.getAttribLocation("vtx");
        b = b.getAttribLocation("texCoord");
        a.activeTexture(33984);
        a.enableVertexAttribArray(c);
        a.bindBuffer(34962, this.R);
        a.vertexAttribPointer(c, 3, 5126, !1, 20, 0);
        a.enableVertexAttribArray(b);
        a.vertexAttribPointer(b, 2, 5126, !1, 20, 12);
        a.bindTexture(3553, this.V);
        a.drawArrays(5, 0, 4);
        a.disableVertexAttribArray(c);
        a.disableVertexAttribArray(b)
      }
      ;
      var kBg = function (a, b) {
        var c = a.H.H;
        c.ta(fBg(a.R, 2, a.H.T.Kx() || void 0, a.H.T.Jx() || void 0, b));
        c.bz(!0);
        c.tX(!1)
      }
        , vGg = function (a) {
        var b = a.R.H.R;
        if (a.W != b) {
          a.W = b;
          b = a.H.H.Lc();
          var c = a.R
            , e = c.Lc()
            , f = c.H;
          q9(e, _.O8);
          kGg(c, e, 6371010, _.P8);
          _.hC(_.P8, 6371010, _.Hug);
          _.hC(_.O8, 6371010, _.P8);
          _.O8[0] = _.P8[0] - _.Hug[0];
          _.O8[1] = _.P8[1] - _.Hug[1];
          _.O8[2] = _.P8[2] - _.Hug[2];
          _.V8.R = _.P8[0];
          _.V8.V = _.P8[1];
          _.V8.T = _.P8[2];
          _.V8.ha = _.yJ(_.O8);
          _.V8.Kh = f.Uc();
          _.V8.$ = -f.Ld();
          _.V8.H = f.H;
          _.V8.width = f.Pb();
          _.V8.height = f.ub();
          _.V8.wa = 1E-4;
          b.Si(_.V8);
          c = a.H.H;
          a.H.R.ra(b, c.R, c.Gf(), [0], c.H, a.R.ha).wait(a.$, a)
        }
      };
      lBg.prototype.$ = function (a) {
        a.H() || (this.T && (this.T(),
          this.T = null),
          this.R.V.Ie(),
          this.H.R.T(!0))
      }
      ;
      lBg.prototype.vd = function () {
        this.H.H.W && lGg(this.R) && (vGg(this),
        this.V || (this.H.vd(),
          jGg(this.R)))
      }
      ;
      var wGg = function (a) {
        return a.H.H.W && lGg(a.R) ? a.H.uda() && !a.H.R.ta() : !0
      }
        , xGg = function (a) {
        a.V = !0;
        a.T = (0,
          _.gr)(function () {
          this.V = !1
        }, a);
        vGg(a)
      };
      lBg.prototype.vf = function (a, b, c, e) {
        this.H.H.vf(a, b, c, e)
      }
      ;
      mBg.prototype.vd = function () {
        var a = this.H.T
          , b = this.H.H;
        a.viewport(0, 0, n9(b, a), o9(b, a));
        jGg(this.H);
        this.H.R.render(this.H.Lc(), this.R)
      }
      ;
      var yGg = function (a, b, c) {
        this.target = a;
        this.Io = b;
        this.H = c;
        this.status = 0;
        this.R = this.enabled = !0
      }
        , zGg = function (a) {
        for (var b = 0; b < a.H.length; b++)
          a.H[b].R = !0
      };
      nBg.prototype.Tb = function () {
        for (var a = 0; a < this.H.length; a++)
          this.R.R.$.remove(this.H[a].target.H.H)
      }
      ;
      nBg.prototype.je = function (a, b) {
        for (var c = 0; c < this.H.length; c++)
          if (0 == a) {
            this.H[c].enabled = b;
            break
          }
      }
      ;
      nBg.prototype.isEnabled = function (a) {
        for (var b = 0; b < this.H.length; b++)
          if (0 == a)
            return this.H[b].enabled;
        return !1
      }
      ;
      var AGg = function (a) {
        for (var b = 0; b < a.H.length; b++) {
          var c = a.H[b];
          if (c.enabled && lGg(c.Io.H) && (0 != c.status || !qGg(c.Io)))
            return !1
        }
        return !0
      }
        , BGg = function (a) {
        for (var b = 0; b < a.H.length; b++)
          if (0 != a.H[b].H.R)
            return !1;
        return !0
      }
        , uBg = function (a, b, c) {
        var e = a.R.T
          , f = new aBg(e)
          , g = null;
        g = new gBg(a.R, f, b, c);
        var k = a.R.V;
        b = new iBg(a.R, f, e, g, function () {
            k.Ie()
          }
        );
        a.H.push(new yGg(f, g, b));
        return g
      }
        , CGg = function (a) {
        return lGg(a.Io.H) ? a.R || !qGg(a.Io) : !1
      }
        , DGg = function (a) {
        for (var b = !1, c = 0; c < a.H.length; c++)
          if (a.H[c].enabled && CGg(a.H[c])) {
            b = !0;
            break
          }
        b && a.H.forEach(function (b) {
          b.status = 1;
          rGg(b.Io, function (c) {
            c.H() || (b.status = 2,
              a.R.V.Ie())
          });
          b.R = !1
        })
      };
      nBg.prototype.update = function () {
        DGg(this);
        var a = this.R.R
          , b = this.R.H
          , c = (0,
          this.R.$)();
        b = _.pC(b.Ac() - c, b.H);
        a.R.Ob = b < this.V;
        a.R.Pa = 15E3 > b;
        c = a.R;
        for (var e = 0; e < c.wa.length; e++)
          c.wa[e] = null;
        a: if (0 == this.H.length || .5 > this.R.R.H.H.H.V)
          c = !1;
        else {
          for (c = 0; c < this.H.length; c++)
            if (!qGg(this.H[c].Io)) {
              c = !1;
              break a
            }
          c = !0
        }
        if (c) {
          e = !1;
          for (c = 0; c < this.H.length; c++) {
            var f;
            if (f = this.H[c].enabled)
              if (f = this.H[c],
              1 == f.status)
                f = !1;
              else {
                var g = f.Io;
                g = g.ha != g.R.T.HF();
                f = 2 == f.status || g
              }
            if (f) {
              e = !0;
              break
            }
          }
          if (e) {
            for (c = 0; c < this.H.length; c++) {
              e = this.H[c];
              2 == e.status && (e.status = 0);
              f = e.Io;
              g = f.V;
              var k = (0,
                f.H.$)();
              f.ra = _.pC(g.Ac() - k, g.H);
              k = f.R.H.Lc();
              g = nGg(k);
              _.AJ(f.Aa, g);
              _.Q8[0] = k.V;
              _.Q8[1] = k.W;
              _.Q8[2] = k.ha;
              k = oGg();
              _.yw(g, k, f.va);
              uGg(e.H);
              e.Io.vd()
            }
            this.R.V.Ie()
          }
          b /= this.H[0].Io.ra;
          1 > b && (b = 1 / b);
          a.R.Ma = _.$t(2 * (1 - b / 4), 0, 1);
          for (b = 0; b < this.H.length; b++)
            c = this.H[b],
              c.enabled ? (c.H.vd(),
                c = this.T ? c.H : c.Io,
                e = c.$(),
                f = a.R,
                f.wa[0] = e,
              _.Kq(f.va[0]) || (f.va[0] = 1),
                a.R.nb = c.wa(),
                a.R.La = c.W()) : (c = a.R,
                c.wa[0] = null,
              _.Kq(c.va[0]) || (c.va[0] = 1))
        }
      }
      ;
      var EGg = [0, 1]
        , FGg = [0, 1]
        , GGg = [0, 1]
        , HGg = [0, 1]
        , IGg = [0, 1]
        , qBg = function () {
        this.$ = EGg[0];
        this.W = FGg[0];
        this.T = GGg[0];
        this.V = HGg[0];
        this.R = IGg[0];
        this.ha = -1;
        this.H = !0
      };
      qBg.prototype.Dd = function () {
        if (this.H) {
          var a = 1;
          var b = a * EGg.indexOf(this.$);
          a *= EGg.length;
          b += a * FGg.indexOf(this.W);
          a *= FGg.length;
          b += a * GGg.indexOf(this.T);
          a *= GGg.length;
          b += a * HGg.indexOf(this.V);
          a *= HGg.length;
          this.ha = b += a * IGg.indexOf(this.R);
          this.H = !1
        }
        return this.ha
      }
      ;
      _.J(rBg, _.QJ);
      var sBg = function (a) {
        var b = a.V;
        a.ha = b.createBuffer();
        a.R = new qBg;
        var c = a.T;
        a.H && c == a.T || (a.T = c,
          JGg(a));
        b.bindBuffer(34962, a.ha);
        b.bufferData(34962, new Float32Array([-1, -1, 0, 0, 0, 1, -1, 0, 1, 0, -1, 1, 0, 0, 1, 1, 1, 0, 1, 1]), 35044)
      }
        , JGg = function (a) {
        var b = a.R
          , c = a.$;
        b.W != c && (b.H = !0,
          b.W = +c);
        b = a.R;
        0 != b.T && (b.H = !0,
          b.T = 0);
        b = a.R;
        0 != b.V && (b.H = !0,
          b.V = 0);
        b = a.R;
        0 != b.R && (b.H = !0,
          b.R = 0);
        switch (a.T) {
          case 1:
            b = a.R;
            1 != b.T && (b.H = !0,
              b.T = 1);
            break;
          case 2:
            b = a.R;
            1 != b.V && (b.H = !0,
              b.V = 1);
            break;
          case 3:
            b = a.R,
            1 != b.R && (b.H = !0,
              b.R = 1)
        }
        a.H = new rBg(a.V, a.R);
        _.TJ(a.H);
        a.H.R.H.set(0)
      };
      tBg.prototype.vd = function () {
        var a = this.V
          , b = this.ra.H
          , c = n9(b, a);
        b = o9(b, a);
        this.W.Hf(c, b);
        this.ta.en(c, b);
        var e = this.ra.R.$.Qp(this.W.H) || null;
        a.bindTexture(3553, e);
        a.copyTexSubImage2D(3553, 0, 0, 0, 0, 0, c, b);
        a.disable(2884);
        a.disable(2929);
        _.TJ(this.H);
        this.H.R.R.set(c, b);
        c = this.H.attributes.H.Va();
        b = this.H.attributes.R.Va();
        a.activeTexture(33984);
        a.enableVertexAttribArray(c);
        a.bindBuffer(34962, this.ha);
        a.vertexAttribPointer(c, 3, 5126, !1, 20, 0);
        a.enableVertexAttribArray(b);
        a.vertexAttribPointer(b, 2, 5126, !1, 20, 12);
        this.W.bindTexture(0);
        a.drawArrays(5, 0, 4);
        a.disableVertexAttribArray(c);
        a.disableVertexAttribArray(b)
      }
      ;
      var wBg = function (a, b) {
        var c = a.R
          , e = 0 !== b;
        c.R.Ca = e;
        c.H.H.Xa = e;
        a.ra || 0 == b || (a.ra = new tBg(a.V, a.W));
        a.ra && (c = a.ra,
        c.H && b == c.T || (c.T = b,
          JGg(c)));
        a.Ga = b
      }
        , KGg = function (a, b) {
        !a.ra && b && (a.ra = new tBg(a.V, a.W));
        if (a.ra) {
          var c = a.ra;
          c.H && b == c.$ || (c.$ = b,
            JGg(c))
        }
        a.Oa = b
      };
      xBg.prototype.vf = function (a, b, c, e) {
        if (this.Cc.top != a || this.Cc.right != b || this.Cc.bottom != c || this.Cc.left != e)
          this.Cc.top = a,
            this.Cc.right = b,
            this.Cc.bottom = c,
            this.Cc.left = e,
            zGg(this.T)
      }
      ;
      xBg.prototype.Rf = function () {
        return this.Cc
      }
      ;
      var vBg = function (a, b) {
        a.ha = b;
        a.ha && a.ha.V && a.ta ? a.va || (a.va = new jBg(a.W)) : a.va = null
      }
        , MGg = function (a) {
        a.W.isContextLost() || (a.R.update(a.V.Lc(), a.ha),
          DGg(a.T),
        a.Ca && a.H && vGg(a.H),
          LGg(a))
      };
      xBg.prototype.vd = function () {
        if (!this.W.isContextLost()) {
          this.Ja.H.Gd.getTime();
          var a = this.V.H;
          this.Xa.en(n9(a, this.W), o9(a, this.W));
          var b = this.W.T.H
            , c = Math.floor(this.Cc.top * b)
            , e = Math.floor(this.Cc.right * b)
            , f = Math.floor(this.Cc.bottom * b);
          b = Math.floor(this.Cc.left * b);
          if (0 < c || 0 < e || 0 < f || 0 < b) {
            var g = _.Grg(this.W.state);
            e = Math.max(0, g[2] - b - e);
            c = Math.max(0, g[3] - c - f);
            this.W.enable(3089);
            this.W.scissor(b, f, e, c)
          } else
            this.W.disable(3089);
          this.wa.R(a.Ac(), a.H, a.Uc(), this.R.wa);
          this.R.update(this.V.Lc(), this.ha);
          this.T.update();
          this.Aa.R = this.ha;
          this.Aa.vd();
          (0 != this.Ga || this.Oa) && this.ra.vd();
          f = this.Aa;
          a = f.H.T;
          c = f.H.H;
          a.viewport(0, 0, n9(c, a), o9(c, a));
          c = f.H.Lc();
          a = f.H.R.H;
          c = c || void 0;
          f = f.R || void 0;
          a.V.Xa = !0;
          UEg(a.V);
          c = c ? c : a.Bb;
          f = NFg(a, f);
          f.length && $Eg(a.V, c, f);
          a = this.Aa.H.R.R.T;
          a.disable(2884);
          a.disable(3042);
          a.disable(2929);
          if (this.ha)
            for (f = this.V.Lc(),
                   b = this.R.H,
                   a = this.ha,
                   f = (f = f || void 0) ? f : b.Bb,
                   c = NFg(b, a),
                   b = b.V,
                   e = 0; e < c.length; e++) {
              var k = c[e];
              g = k.dj;
              k = k.dj.H;
              TBg(g);
              if (0 == a.R || g.Cj() == a.R)
                g = k == a.T ? _.bNb : _.aNb,
                  WEg(b, f, g)
            }
          this.va && this.T.isEnabled(0) && (a = this.ta.$(),
            this.va.V = a,
            this.va.vd());
          this.Ca && this.H && (this.H.vf(this.Cc.top, this.Cc.right, this.Cc.bottom, this.Cc.left),
            this.H.vd());
          LGg(this);
          if (0 != this.Ba.length && NGg(this))
            for (a = this.Ba,
                   this.Ba = [],
                   f = 0; f < a.length; ++f)
              a[f]()
        }
      }
      ;
      var NGg = function (a) {
        if (a.wa.H)
          return RFg(a.R);
        var b = RFg(a.R)
          , c = a.H ? wGg(a.H) : !0
          , e = AGg(a.T);
        a = BGg(a.T);
        return b && c && e && a
      }
        , LGg = function (a) {
        var b = (0,
          _.Uq)()
          , c = a.La;
        c.H.set(RFg(a.R), b);
        c.$.set(!(0 < a.R.H.T.T), b);
        c.ha.set(!(0 < a.R.H.R.R[2]), b);
        c.R.set(a.H ? wGg(a.H) : !0, b);
        c.ra.set(AGg(a.T), b);
        c.T.set(BGg(a.T), b);
        var e = a.R.W;
        a = a.R.H.H.H.H;
        c.W.set(a >= e / 4, b);
        c.V.set(a >= e / 2, b)
      }
        , OGg = function (a, b) {
        GBg(b, _.eu(a.qd()));
        var c = a.Va();
        b.ud(_.eu(c.yc()));
        b.Ad(_.eu(c.Vb()));
        b.xd(c.Ac());
        c = a.Tc();
        b.ze(_.eu(c.Uc()));
        b.Fe(_.eu(c.Ld()));
        a = a.xc();
        c = a.Pb();
        c != b.ld && (b.ld = c,
          ++b.R);
        a = a.ub();
        a != b.Bd && (b.Bd = a,
          ++b.R)
      }
        , PGg = function (a) {
        return (a = _.sF(a)) ? _.FLb[a.name.toLowerCase()] || _.tK || _.tK : _.tK
      }
        , QGg = function (a, b, c) {
        return _.pC(a, b) / c * Math.tan(Math.PI / 2 - b / 2)
      }
        , RGg = function (a) {
        var b = _.Avg.H.Uc();
        b <= _.Cvg && (NCg(_.Avg, _.xvg, _.yvg),
          _.zvg.H = 6371010 + a,
          _.wG(_.zvg, _.xvg, _.yvg, _.wvg));
        b >= _.Bvg && (_.mw(_.W8, 0, -1, -1),
          _.Bw(_.btg(_.Avg), _.W8, _.W8));
        b < _.Bvg ? _.ir(_.X8, _.wvg) : b < _.Cvg ? (a = _.$t((b - _.Bvg) / (_.Cvg - _.Bvg), 0, 1),
          _.pw(_.wvg, 1 - a, _.wvg),
          _.pw(_.W8, a, _.W8),
          _.nw(_.wvg, _.W8, _.X8)) : _.ir(_.X8, _.W8);
        _.gC(_.X8[0], _.X8[1], _.X8[2], _.X8)
      }
        , SGg = function (a) {
        this.W = a;
        this.H = Infinity;
        this.R = new _.jy;
        this.T = !1;
        this.V = function () {
        }
        ;
        this.$ = 0
      }
        , TGg = function (a) {
        return isFinite(a.H) ? a.H : 0
      }
        , VGg = function (a, b, c) {
        var e = a.R;
        var f = e.Va()
          , g = b.Va()
          , k = f.Ac()
          , m = g.Ac();
        k = Math.max(k, 1);
        m = Math.max(m, 1);
        k = _.pC(k, _.eu(e.qd()));
        _.cu(k / _.pC(m, _.eu(b.qd())), 1, .01) ? (_.lC(f.yc(), f.Vb(), 0, _.wvg),
          _.lC(g.yc(), g.Vb(), 0, _.W8),
          e = _.tw(_.wvg, _.W8) > k / e.xc().ub() ? !0 : !1) : e = !0;
        a.T ? e && (a.V(),
          UGg(a, b, c)) : e ? UGg(a, b, c) : c()
      }
        , UGg = function (a, b, c) {
        a.R.Fa(b);
        OGg(b, _.Avg.H);
        RGg(0);
        var e = QGg(b.Va().Ac(), _.eu(b.qd()), b.xc().ub());
        a.T = !0;
        a.V = UFg(a.W, _.X8[0], _.X8[1], e, function (e) {
          a.H = e;
          a.R.Fa(b);
          a.T = !1;
          c()
        }, void 0, !0)
      }
        , WGg = function () {
        if (_.M(_.MG.ab(), 70))
          return 12;
        var a = _.MG.ab();
        a = _.N(a, 149);
        a = Math.max(a, Math.floor((_.wr("navigator.hardwareConcurrency") || 0) / 2) - 1);
        a = Math.min(a, 12);
        return a = Math.max(a, 1)
      }
        , XGg = function (a, b) {
        var c = this;
        this.H = a;
        this.R = b;
        this.T = null;
        this.V = function () {
          if (1 == c.R.wa.H) {
            var a = c.R
              , b = (0,
              _.Uq)();
            a.Ja.H.Gd.setTime(b);
            c.H.Aa.Ie()
          } else
            clearInterval(c.T),
              c.T = null
        }
      };
      XGg.prototype.vd = function () {
        var a = this.H.La;
        if (0 > a || 1 < a)
          a = this.H.V,
            a = 2.1815740985145E7 > _.pC(a.Ac(), a.H) ? 0 : 1;
        this.R.wa.H = a;
        this.R.T.je(0, 1 > a && this.H.Ca && 0 == this.H.W);
        for (var b = YGg(this.H), c = 0; c < this.R.$.length; ++c)
          this.R.$[c].H.bz(b);
        this.R.Ca = b;
        1 == a && this.H.Oa && null == this.T && (this.T = setInterval(this.V, 6E4));
        this.H.Ba && (0 == this.H.H.H.H.H.H ? MGg(this.R) : this.H.fba(!1));
        this.H.Ba || this.R.vd();
        this.H.Oa && (this.H.La = -1)
      }
      ;
      var ZGg = function (a, b) {
        for (var c = [], e = 0; e < a.length; e++)
          c.push(new _.Ksg(a[e].H.Gf(), b, a[e].T.Kx(), a[e].T.Jx(), 3));
        return c
      }
        , $Gg = function (a, b, c) {
        this.T = a;
        this.H = b;
        this.R = c
      };
      _.E = $Gg.prototype;
      _.E.ag = function () {
        return this.R
      }
      ;
      _.E.Qi = function () {
        return this.H
      }
      ;
      _.E.Q4 = function () {
        return this.H
      }
      ;
      _.E.Dw = function () {
        return this.H.W
      }
      ;
      _.E.YK = function () {
        return this.H.va
      }
      ;
      _.E.h8 = function (a) {
        return this.H.IB(a)
      }
      ;
      _.E.hB = function (a) {
        this.H.T.FN(a)
      }
      ;
      _.E.EB = function (a) {
        this.H.T.zE(a)
      }
      ;
      _.E.qB = function (a) {
        this.T.R.T.T = !a
      }
      ;
      var aHg = function (a) {
        a && (a = _.pu(_.Toc, a)) && _.Vv(a, !1)
      }
        , bHg = function (a, b, c, e, f, g, k) {
        this.Ja = [];
        var m = this;
        this.Pa = _.Usg(g, b, e, f, k);
        e = _.M(g, 39);
        f = _.zJ(g);
        this.Aa = a;
        this.Xa = a.Qh();
        this.Ga = b.Mh;
        this.Ma = _.L(g, 30) ? _.O(g, 30) : _.ELb;
        this.nb = WGg();
        this.H = new LAg(this.Ga, a.Qh(), c, function () {
            return a.Ie()
          }
          , this.Ma, this.nb);
        this.H.Ba = .125;
        _.M(_.MG.ab(), 70) && this.H.$.$Ra();
        this.W = 0;
        this.La = -1;
        this.Oa = !0;
        this.T = new SGg(this.H);
        this.Ca = !0;
        this.wa = !e;
        this.hb = !0;
        this.R = new xBg(this.H, this.Ga, a, function () {
            return TGg(m.T)
          }
          , !e, this.wa, _.Zsg(), this.Pa, f.Fg(), _.O(f, 1));
        KGg(this.R, !0);
        wBg(this.R, _.Rmb());
        this.Fb = new XGg(this, this.R);
        this.V = new _.FK;
        this.Eb = new _.Wsg(this.V);
        this.ra = _.M(g, 39) ? [] : ZGg(this.R.$, g);
        this.ha = this.va = null;
        this.ta = [];
        (c = this.QM()) && this.ta.push(new $Gg(this, c, 2));
        (c = this.PV()) && this.ta.push(new $Gg(this, c, 1));
        this.Ba = !1;
        this.$ = _.tK;
        aHg(b.Mh.T.zj.parentElement)
      };
      _.F(bHg, _.Isg);
      _.E = bHg.prototype;
      _.E.NV = function (a) {
        var b = this.R;
        a ? (kBg(b.H, a),
          b.$ = [b.ta.R]) : (kBg(b.H),
          b.$ = [b.ta.R, b.H.H]);
        xGg(b.H)
      }
      ;
      _.E.c9 = function (a) {
        KGg(this.R, a);
        wBg(this.R, a ? _.Rmb() : 0)
      }
      ;
      _.E.wo = function () {
        return this.Fb
      }
      ;
      _.E.Gj = function () {
        return NGg(this.R)
      }
      ;
      _.E.LA = function () {
        return .0625 < this.H.H.H.H.H
      }
      ;
      _.E.render = function (a, b) {
        this.va && this.va.cancel();
        return this.va = new _.Psg(this, a, b)
      }
      ;
      _.E.ul = function (a) {
        if (_.GF(a)) {
          this.hb = a.getSettings().$q();
          a: {
            if (_.L(a, 3)) {
              var b = _.nE(a);
              for (var c = _.PB(b), e = 0; e < c; e++) {
                var f = _.QB(b, e);
                if (2 == f.mb() && (_.Vr(f.getId(), "vdb:") || _.Vr(f.getId(), "ml:"))) {
                  b = !0;
                  break a
                }
              }
            }
            b = !1
          }
          this.R.T.V = b ? 0 : 5E3;
          b = this.R.$;
          for (c = 0; c < b.length; c++) {
            e = b[c].H;
            f = this.ra[c];
            var g = a.getSettings().$q() ? null : [];
            f = _.Nsg(f, a, g);
            e.ta(f);
            0 === this.W && e.bz(YGg(this))
          }
          a.Uf() && _.i_f(a.Ye()) ? (this.$ = PGg(a.Ye()),
            this.Ca = this.$.ra,
            this.wa = this.$.R) : (this.$ = _.tK,
            this.Ca = !0);
          a = this.$.name == _.tK.name ? this.Ma : this.$.ha;
          a != this.H.va && (this.Ba = !0,
            this.H.R.H.R = this.$.T,
            b = this.H,
            b.V = new Lzg(a, b.ta, b.ra, b.T),
            b.V.init(),
            b.ha = new _.oMb(a, b.ta, b.ra, b.T),
            b.ha.$ = b.R.Ja,
            b.va = a,
            b.V.V.push({
              V: b.Aa
            }),
            b.H = new JAg(b.V, b.ha, b.R, b.Ca, b.Ga, b.Aa, b.T));
          this.b9()
        }
      }
      ;
      _.E.fba = function (a) {
        this.Ba = a
      }
      ;
      _.E.Ok = function (a) {
        this.qY(a, !0)
      }
      ;
      _.E.GD = function (a) {
        isFinite(this.T.H) && (this.Ti(a, this.V),
          this.R.V.H.Fa(this.V),
          MGg(this.R));
        this.qY(a, !1)
      }
      ;
      _.E.qY = function (a, b) {
        var c = this;
        0 !== this.W && isFinite(this.T.H) ? cHg(this, a, b) : (b ? (this.Ti(a, this.V),
          this.R.V.H.Fa(this.V),
          this.Aa.Ie()) : OGg(a, this.V),
          VGg(this.T, a, function () {
            return cHg(c, a, b)
          }))
      }
      ;
      var cHg = function (a, b, c) {
        a.Ti(b, a.V);
        a.R.V.H.Fa(a.V);
        c && a.Aa.Ie()
      }
        , YGg = function (a) {
        return a.wa && a.hb && 0 == a.W && !a.R.wa.H
      };
      _.E = bHg.prototype;
      _.E.Hf = function (a, b, c, e, f, g, k) {
        if (isFinite(this.T.H))
          this.GD(a);
        else {
          var m = this;
          VGg(this.T, a, function () {
            m.GD(a)
          })
        }
        k && k(!1, g);
        return new _.yI
      }
      ;
      _.E.Kz = function () {
        this.W += 1;
        if (1 === this.W) {
          this.H.rM();
          for (var a = this.R.$, b = 0; b < a.length; b++) {
            var c = a[b].R;
            c && c.T(!1)
          }
        }
      }
      ;
      _.E.Jz = function () {
        --this.W;
        if (0 === this.W) {
          this.H.rD();
          for (var a = this.R.$, b = 0; b < a.length; b++) {
            var c = a[b].R;
            c && c.T(!0)
          }
        }
      }
      ;
      _.E.QM = function () {
        var a = this.R;
        return a.H ? a.H.H : null
      }
      ;
      _.E.PV = function () {
        var a = this.R;
        return a.ta ? a.ta.R : null
      }
      ;
      _.E.b9 = function () {
        var a = this.R;
        zGg(a.T);
        a.V.V.Ie()
      }
      ;
      _.E.MLa = function () {
        this.R.T.Tb()
      }
      ;
      _.E.bH = function () {
        return new _.FK
      }
      ;
      _.E.HR = function () {
        var a = new _.Wsg(new _.FK);
        return new l9(a, this.H)
      }
      ;
      _.E.Ti = function (a, b) {
        OGg(a, b);
        b.Eh(this.$);
        b.xd(b.Ac() + TGg(this.T))
      }
      ;
      _.E.iu = function (a, b, c) {
        if (c) {
          c = this.T;
          _.$sg(_.Avg.H, a);
          var e = isFinite(c.H) ? c.H : 0;
          RGg(e);
          e = a.Ac() - e;
          e = QGg(e, a.H, a.ub());
          e = TFg(c.W, _.X8[0], _.X8[1], e, !0);
          isFinite(e) ? (c.H = e,
            _.rvg(a, c.R),
            e = c.R.tc(),
            e.xd(e.Ac() - c.H),
            c.$ = 0) : 3 < ++c.$ && _.ts(c.R, 0)
        }
        _.rvg(a, b);
        a = b.tc();
        b = TGg(this.T);
        a.xd(a.Ac() - b);
        a.Ac()
      }
      ;
      _.E.QV = function () {
        return TGg(this.T)
      }
      ;
      _.E.RV = function (a) {
        this.La = a
      }
      ;
      _.E.gba = function (a) {
        this.Oa = a
      }
      ;
      _.E.$G = function (a) {
        for (var b = 0; b < this.ra.length; ++b) {
          var c = this.ra[b];
          c.T = a;
          _.Osg(c)
        }
      }
      ;
      _.E.aH = function (a) {
        for (var b = 0; b < this.ra.length; ++b) {
          var c = this.ra[b];
          c.R = a;
          _.Osg(c)
        }
      }
      ;
      _.E.NLa = function (a, b, c, e) {
        _.L8(this.Eb, a, b, _.Evg, _.Fvg);
        a = this.H.sM(_.Evg, _.Fvg, void 0, !e || !e.lR);
        if (isFinite(a))
          _.pw(_.Fvg, a, _.Y8),
            _.nw(_.Evg, _.Y8, _.Y8);
        else if (_.Gvg.H = this.H.zy() + TGg(this.T),
          !_.wG(_.Gvg, _.Evg, _.Fvg, _.Y8))
          return null;
        _.OLb(_.Y8[0], _.Y8[1], _.Y8[2], _.Y8);
        a = _.etg(this.H, _.eu(_.Y8[0]), _.eu(_.Y8[1]), void 0, !0);
        isFinite(a) || (a = TGg(this.T));
        a = _.Y8[2] - a;
        c = c || new _.ky;
        c.ud(_.Y8[0]);
        c.Ad(_.Y8[1]);
        c.xd(a);
        return c
      }
      ;
      _.E.vf = function (a, b, c, e, f) {
        c = f ? c : 0;
        f = this.R.Rf();
        (a < f.top || b < f.right || c < f.bottom || e < f.left) && this.Aa.Ie();
        this.R.vf(a, b, c, e)
      }
      ;
      _.E.Rf = function () {
        return this.R.Rf()
      }
      ;
      _.E.DG = function () {
        return ""
      }
      ;
      _.E.d9 = function (a) {
        this.Ca = a
      }
      ;
      _.E.TA = function (a) {
        this.wa = a
      }
      ;
      _.E.OV = function (a) {
        this.R.Ba.push(a)
      }
      ;
      _.E.init = function () {
        this.H.init()
      }
      ;
      _.E.LLa = function (a, b) {
        var c = this.H.V;
        if (c.ha)
          c = NaN;
        else {
          c.ha = !0;
          a = new Jzg(new Uint8Array(a));
          a.H && (c.R = a.H,
          -1 == c.H && (c.H = c.R.R));
          var e = a.V
            , f = a.ku();
          c.Ba.set(19, e.length);
          for (var g = 0; g < e.length; g++)
            nDg(c, e[g], f[g], 2);
          c = 1 != a.R.length ? NaN : a.R[0].Ac()
        }
        isNaN(c) || (a = this.T,
          a.H = c,
          a.R.Fa(b),
          a.T = !1,
          a.V())
      }
      ;
      _.E.Vp = function () {
        return this
      }
      ;
      _.E.Fl = function () {
        return 3
      }
      ;
      _.E.El = function () {
        return 0 == this.ta.length ? null : this.ta[0]
      }
      ;
      _.E.Bp = function () {
        return this.ta
      }
      ;
      _.E.YS = function () {
        return this.Pa
      }
      ;
      _.E.Eh = function (a) {
        this.V.Eh(PGg(a))
      }
      ;
      var dHg = function (a) {
        _.gw.apply(this, arguments)
      };
      _.F(dHg, _.gw);
      dHg.prototype.initialize = function () {
        _.yF("SCGR", eHg)
      }
      ;
      var eHg = function (a, b, c, e, f, g, k, m, q) {
        e.getContext(function (b) {
          c.Qh().ha(2);
          a(new bHg(c, b, f, g, k, m, q))
        }, b)
      };
      _.AF(dHg);

    } catch (e) {
      _._DumpException(e)
    }
  }
)(this._);
// Google Inc.
