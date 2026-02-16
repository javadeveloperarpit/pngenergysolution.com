google.maps.__gjsload__('stats', function(_) {
    var UVa = function(a, b) {
            return new _.jBa(a, b)
        },
        VVa = function(a, b, c, d) {
            const e = {};
            e.host = document.location && document.location.host || window.location.host;
            e.v = a.split(".")[1] || a;
            e.fv = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        ET = function(a, b) {
            this.Gg = {};
            this.Fg = [];
            this.Hg = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof ET)
                    for (c = a.Po(), d = 0; d < c.length; d++) this.set(c[d],
                        a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        WVa = function(a, b) {
            return a === b
        },
        GT = function(a) {
            if (a.size != a.Fg.length) {
                for (var b = 0, c = 0; b < a.Fg.length;) {
                    var d = a.Fg[b];
                    FT(a.Gg, d) && (a.Fg[c++] = d);
                    b++
                }
                a.Fg.length = c
            }
            if (a.size != a.Fg.length) {
                b = {};
                for (d = c = 0; c < a.Fg.length;) {
                    const e = a.Fg[c];
                    FT(b, e) || (a.Fg[d++] = e, b[e] = 1);
                    c++
                }
                a.Fg.length = d
            }
        },
        FT = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        YVa = function(a) {
            const b = {};
            _.Zh(a, (c, d) => {
                b[encodeURIComponent(d)] = encodeURIComponent(c).replace(/%7C/g, "|")
            });
            return XVa(b, ":", ",")
        },
        XVa = function(a, b, c) {
            const d = [];
            _.Zh(a, (e, f) => {
                d.push(f + b + e)
            });
            return d.join(c)
        },
        ZVa = function(a, b, c) {
            c = c || {};
            const d = Date.now().toString(36);
            c.src = "apiv3";
            c.token = a.token;
            c.ts = d.substring(d.length - 6);
            b.cad = YVa(c);
            b = XVa(b, "=", "&");
            b = a.Fg + "?target=api&" + b;
            (new _.Ck(a.document)).createElement("IMG").src = b;
            (a = _.sa.__gm_captureCSI) && a(b)
        };
    _.z = ET.prototype;
    _.z.Oj = function() {
        return this.size
    };
    _.z.xl = function() {
        GT(this);
        const a = [];
        for (let b = 0; b < this.Fg.length; b++) a.push(this.Gg[this.Fg[b]]);
        return a
    };
    _.z.Po = function() {
        GT(this);
        return this.Fg.concat()
    };
    _.z.has = function(a) {
        return FT(this.Gg, a)
    };
    _.z.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.Oj()) return !1;
        b = b || WVa;
        GT(this);
        let c;
        for (let d = 0; c = this.Fg[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    _.z.isEmpty = function() {
        return this.size == 0
    };
    _.z.clear = function() {
        this.Gg = {};
        this.Hg = this.size = this.Fg.length = 0
    };
    _.z.remove = function(a) {
        return this.delete(a)
    };
    _.z.delete = function(a) {
        return FT(this.Gg, a) ? (delete this.Gg[a], --this.size, this.Hg++, this.Fg.length > 2 * this.size && GT(this), !0) : !1
    };
    _.z.get = function(a, b) {
        return FT(this.Gg, a) ? this.Gg[a] : b
    };
    _.z.set = function(a, b) {
        FT(this.Gg, a) || (this.size += 1, this.Fg.push(a), this.Hg++);
        this.Gg[a] = b
    };
    _.z.forEach = function(a, b) {
        const c = this.Po();
        for (let d = 0; d < c.length; d++) {
            const e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    _.z.clone = function() {
        return new ET(this)
    };
    _.z.keys = function() {
        return _.cl(this.mq(!0)).Fg()
    };
    _.z.values = function() {
        return _.cl(this.mq(!1)).Fg()
    };
    _.z.entries = function() {
        const a = this;
        return UVa(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    _.z.mq = function(a) {
        GT(this);
        let b = 0;
        const c = this.Hg,
            d = this,
            e = new _.Yk;
        e.next = function() {
            if (c != d.Hg) throw Error("The map has changed since the iterator was created");
            if (b >= d.Fg.length) return _.kt;
            const f = d.Fg[b++];
            return _.Zk(a ? f : d.Gg[f])
        };
        return e
    };
    var $Va = class {
        constructor(a, b, c, d, e) {
            this.Jg = a;
            this.version = b;
            this.Ig = c;
            this.client = d;
            this.key = e;
            this.Fg = new ET;
            this.startTime = Date.now()
        }
        Hg(a) {
            this.Fg.size === 0 && window.setTimeout(() => {
                this.Gg()
            }, 500);
            const b = this.Fg.get(a, 0) + 1;
            this.Fg.set(a, b)
        }
        Gg() {
            const a = VVa(this.version, this.Ig, this.client, this.key);
            a.t = Date.now() - this.startTime;
            var b = Object,
                c = b.assign,
                d = this.Fg;
            const e = {};
            for (const f of d.keys()) e[f] = d.get(f);
            c.call(b, a, e);
            this.Fg.clear();
            ZVa(this.Jg, {
                ev: "api_maprft"
            }, a)
        }
    };
    var aWa = class {
        constructor(a, b, c, d, e) {
            this.Kg = a;
            this.version = b;
            this.Jg = c;
            this.client = d;
            this.key = e;
            this.Ig = {};
            this.Fg = []
        }
        Hg(a) {
            this.Ig[a] || (this.Ig[a] = !0, this.Fg.push(a), this.Fg.length < 2 && _.kJ(this, this.Gg, 500))
        }
        Gg() {
            const a = VVa(this.version, this.Jg, this.client, this.key);
            for (let b = 0, c; c = this.Fg[b]; ++b) a[c] = "1";
            a.hybrid = +_.jz();
            this.Fg.length = 0;
            ZVa(this.Kg, {
                ev: "api_mapft"
            }, a)
        }
    };
    var bWa = Math.round(Math.random() * 1E15).toString(36),
        cWa = class {
            constructor(a) {
                this.document = document;
                this.token = bWa;
                this.Fg = a + "/maps/gen_204"
            }
        };
    _.Ok("stats", new class {
        constructor() {
            this.Gg = {};
            this.Fg = {};
            this.client = _.kk.Jg();
            this.key = _.kk.Ig();
            if (_.eq[35]) {
                var a = _.kk.Gg();
                a = _.G(a, 12)
            } else a = _.ED;
            this.Hg = new cWa(a);
            this.version = _.qk(_.kk).Gg();
            this.Ig = _.eg(_.kk, 1, 1)
        }
        SE(a) {
            a = _.Pm(a);
            let b = this.Gg[a];
            b || (b = new aWa(this.Hg, this.version, this.Ig, this.client, this.key), this.Gg[a] = b);
            return b
        }
        Jg(a) {
            a = _.Pm(a);
            this.Fg[a] || (this.Fg[a] = new $Va(this.Hg, this.version, _.eg(_.kk, 1, 1), this.client, this.key));
            return this.Fg[a]
        }
    });
});