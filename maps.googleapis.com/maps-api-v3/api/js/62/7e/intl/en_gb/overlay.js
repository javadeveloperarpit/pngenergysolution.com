google.maps.__gjsload__('overlay', function(_) {
    var Sua = function() {},
        yI = function(a) {
            a.zB = a.zB || new Sua;
            return a.zB
        },
        Tua = function(a) {
            this.Fg = new _.Pp(() => {
                const b = a.zB;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Hg && a.onAdd) a.onAdd();
                        b.Hg = !0;
                        a.draw()
                    }
                } else {
                    if (b.Hg)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Hg = !1
                }
            }, 0)
        },
        Vua = function(a, b) {
            const c = yI(a);
            let d = c.Gg;
            d || (d = c.Gg = new Tua(a));
            _.Pb(c.Fg || [], _.Am);
            var e = c.Ig = c.Ig || new _.Rla;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection",
                b);
            e.bindTo("projectionTopLeft", f);
            e = c.Kg = c.Kg || new Uua(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Qp(d.Fg);
            c.Fg = [_.ym(a, "panes_changed", e), _.ym(f, "zoom_changed", e), _.ym(f, "offset_changed", e), _.ym(b, "projection_changed", e), _.ym(f, "projectioncenterq_changed", e)];
            _.Qp(d.Fg);
            b instanceof _.fn ? (_.yn(b, "Ox"), _.N(b, 148440)) : b instanceof _.Yn && (_.yn(b, "Oxs"), _.N(b, 181451))
        },
        Wua = function(a) {
            const b =
                yI(a);
            var c = b.Ig;
            c && c.unbindAll();
            (c = b.Kg) && c.unbindAll();
            a.unbindAll();
            a.set("panes", null);
            a.set("projection", null);
            b.Fg && b.Fg.forEach(d => {
                _.Am(d)
            });
            b.Fg = null;
            b.Gg && (_.Rp(b.Gg.Fg), b.Gg = null)
        },
        ava = function(a) {
            if (a) {
                var b = a.getMap();
                if (Xua(a) !== b && b && b instanceof _.fn) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Yua(b, a, c.overlayLayer) : c.Gg.then(({
                        dh: d
                    }) => {
                        const e = new Zua(b, d);
                        d.Qi(e);
                        c.overlayLayer = e;
                        $ua(a);
                        ava(a)
                    })
                }
            }
        },
        $ua = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.overlay.unbindAll(), b.overlay.set("panes",
                    null), b.overlay.set("projection", null), b.overlayLayer.fo(b), b.Fg && (b.Fg = !1, b.overlay.onRemove ? b.overlay.onRemove() : b.overlay.remove()))
            }
        },
        Xua = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        bva = function(a, b) {
            a.overlay.get("projection") !== b && (a.overlay.bindTo("panes", a.map.__gm), a.overlay.set("projection", b))
        },
        Uua = class extends _.Qm {
            constructor(a) {
                super();
                this.projection = a
            }
            changed(a) {
                a !== "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.nl(this.get("zoom"))),
                    a === !this.get("outProjection") && this.set("outProjection", a ? this.projection : null))
            }
        };
    _.Oa(Tua, _.Qm);
    var Yua = class {
            constructor(a, b, c) {
                this.map = a;
                this.overlay = b;
                this.overlayLayer = c;
                this.Fg = !1;
                _.yn(this.map, "Ox");
                _.N(this.map, 148440);
                c.Fn(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.overlay.onAdd && this.overlay.onAdd());
                this.overlay.draw && this.overlay.draw()
            }
        },
        Zua = class {
            constructor(a, b) {
                this.map = a;
                this.dh = b;
                this.Fg = null;
                this.Gg = []
            }
            dispose() {}
            Bh(a, b, c, d, e, f, g, h) {
                const l = this.Fg = this.Fg || new _.ID(this.map, this.dh, () => {});
                l.Bh(a, b, c, d, e, f, g, h);
                for (const n of this.Gg) bva(n, l), n.draw()
            }
            Fn(a) {
                this.Gg.push(a);
                this.Fg &&
                    bva(a, this.Fg);
                this.dh.refresh()
            }
            fo(a) {
                _.Vb(this.Gg, a)
            }
        };
    _.Ok("overlay", {
        zD: function(a) {
            if (a) {
                Wua(a);
                delete yI(a).Jg;
                $ua(a);
                var b = a.getMap();
                b && (b instanceof _.fn ? ava(a) : a && (b = a.getMap(), (yI(a).Jg || null) !== b && (b && Vua(a, b), yI(a).Jg = b)))
            }
        },
        preventMapHitsFrom: a => {
            _.Uz(a, {
                Xl: ({
                    event: b
                }) => {
                    _.Ly(b.Fg)
                },
                Hk: b => {
                    _.Fz(b)
                },
                Nq: b => {
                    _.Gz(b)
                },
                Dl: b => {
                    _.Gz(b)
                },
                Sk: b => {
                    _.Hz(b)
                }
            }).br(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.wm);
            a.addEventListener("contextmenu", _.wm);
            a.addEventListener("dblclick", _.wm);
            a.addEventListener("mousedown", _.wm);
            a.addEventListener("mousemove",
                _.wm);
            a.addEventListener("MSPointerDown", _.wm);
            a.addEventListener("pointerdown", _.wm);
            a.addEventListener("touchstart", _.wm);
            a.addEventListener("wheel", _.wm)
        }
    });
});