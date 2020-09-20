export class Reader {
  u: DataView;
  b: Uint8Array;
  a: number;
  c: number;
  h: number[];
  l: number;
  o: number;

  constructor(c: Uint8Array) {
    this.u = new DataView(c.buffer);
    this.b = c;
    this.a = 0;
    this.c = c.length;
    this.h = [];
    this.l = this.o = 0
  }

  /* D() */ chunk(): number {
    if (this.a < this.c) {
      var c = this.packed();
      this.o = c & 7;
      return this.l = c >> 3
    }
    return 0
  }

  /*O*/ push(c: number) {
    this.h.push(this.c);
    this.c = c
  }

  /*N*/ pop(): boolean {
    if (!this.h.length) return !1;
    this.c = this.h.pop();
    return !0
  }

  /*sa*/ packed() {
    var c = 0, d = 1;
    do {
      var e = this.b[this.a++];
      c += (127 & e) * d;
      d *= 128
    } while (e & 128);
    return c
  }

  jd() {
    do {
      var c = this.b[this.a++];
    } while (c & 128);
  }

  hd() {
    this.a = this.packed() + this.a
  }

  B(): boolean {
    switch (this.o) {
      case 0: return this.jd(), !0;
      case 1: return this.a += 8, !0;
      case 2: return this.hd(), !0;
      case 5: return this.a += 4, !0
    }
    return !1
  }

  s32(): number {
    var c = this.packed();
    return c & 2147483648 ? (c & 2147483647) - 2147483648 : c
  }

  /*$*/ f32(): number {
    var c = this.u.getFloat32(this.a, !0);
    this.a += 4;
    return c
  }

  /*ua*/ f64(): number {
    var c = this.u.getFloat64(this.a, !0);
    this.a += 8;
    return c
  }

  /*Ia*/ u8(): number {
    return this.b[this.a++];
  }

  Ka(): number {
    var c = this.b[this.a++];
    c |= this.b[this.a++] << 8;
    return c & 32768 ? c | 4294901760 : c
  }

  /*ia*/ u16(): number {
    var c = this.b[this.a++];
    return this.b[this.a++] << 8 | c
  }

  cd() {
    var c = this.b[this.a++];
    c = this.a + c;
    for (var d = ""; this.a < c;) {
      var e = this.b[this.a++];
      if (128 > e) d += String.fromCharCode(e); else if (!(192 > e)) if (224 > e) {
        var h = this.b[this.a++];
        d += String.fromCharCode((e & 31) << 6 | h & 63)
      } else if (240 > e) {
        h = this.b[this.a++];
        var k = this.b[this.a++];
        d += String.fromCharCode((e & 15) << 12 | (h & 63) << 6 | k & 63)
      }
    }
    return d
  }

  data() {
    return this.b
  }

  Oc() {
    this.a = this.l = this.o = 0;
    this.c = this.b.length;
    this.h = []
  }

  /*U*/ advance(c: number) {
    this.a += c
  }
}
