import {Mesh} from "./parser";

export class Unk {
  ba: Mesh[];
  l: Uint8Array;
  o: number;
  b: Uint32Array;
  a: number;
  h: Uint8Array[];
  L: Uint8Array;
  M: Uint32Array;
  c: Uint32Array;
  u: Uint32Array;

  constructor(c: Mesh[]) {
    this.ba = c;
    this.l = null;
    this.o = 0;
    this.b = null;
    this.h = null;
    this.L = null;
    this.M = null;
    this.c = null;
    this.u = null;
    this.a = 0
  }

  start(): Function {
    for (var c = this.ba, d = 0, e = 0; e < c.length; ++e) {
      d += c[e].numNonDegenerateTriangles;
    }
    if (0 >= d) {
      return null;
    }
    this.M = new Uint32Array(d);
    this.c = new Uint32Array(d);
    this.L = new Uint8Array(6 * d);
    this.h = Array(3);
    this.h[0] = new Uint8Array(d);
    this.h[1] = new Uint8Array(d);
    this.h[2] = new Uint8Array(d);
    for (var h = this.L, k = this.h, g, m, p, v, z, B, A = 0, G = 0, C = 0, R = 0, L = 0, O = 0, sa = 0, ka = 0, qa = 0; qa < c.length; ++qa) {
      var mesh = c[qa];
      var P = mesh.indices, la = mesh.vertices, Ea = P.length - 2;
      for (e = 0; e < Ea; ++e) {
        m = P[vc(e, 0)];
        var J = P[vc(e, 1)], aa = P[vc(e, 2)];
        if (m != J && J != aa && aa != m) {
          this.M[ka] = qa << 24 | e;
          this.c[ka] = ka;
          p = 8 * m;
          g = v = la[p++];
          m = z = la[p++];
          p = B = la[p];
          var Ja = 8 * J;
          J = la[Ja++];
          J < g ? g = J : J > v && (v = J);
          J = la[Ja++];
          J < m ? m = J : J > z && (z = J);
          J = la[Ja];
          J < p ? p = J : J > B && (B = J);
          aa *= 8;
          J = la[aa++];
          J < g ? g = J : J > v && (v = J);
          J = la[aa++];
          J < m ? m = J : J > z && (z = J);
          J = la[aa];
          J < p ? p = J : J > B && (B = J);
          h[A++] = g;
          h[A++] = m;
          h[A++] = p;
          h[A++] = v;
          h[A++] = z;
          h[A++] = B;
          g = g + v >> 1;
          m = m + z >> 1;
          p = p + B >> 1;
          k[0][ka] = g;
          k[1][ka] = m;
          k[2][ka] = p;
          0 < ka ? (g < G ? G = g : g > L && (L = g), m < C ? C = m : m > O && (O = m), p < R ? R = p : p > sa && (sa = p)) : (G = L = g, C = O = m, R = sa = p);
          ++ka
        }
      }
    }

    this.l = new Uint8Array(24 * d);
    var unk = this.l;
    this.u = new Uint32Array(unk.buffer);
    unk[0] = G;
    unk[1] = C;
    unk[2] = R;
    unk[3] = L;
    unk[4] = O;
    unk[5] = sa;
    this.b = new Uint32Array(3 * d);
    this.a = 0;
    this.b[this.a++] = 0;
    this.b[this.a++] = 0;
    this.b[this.a++] = d;
    this.o = 1;
    return this.cb
  }

  cb(): Function {
    for (var c = this.b, d = 0; 0 < this.a;) {
      var e = c[--this.a], h = c[--this.a], k = c[--this.a], g = e - h;
      if (0 == d || 1E4 > d + g) this.nc(k, h, e), d += g; else {
        this.a += 3;
        break
      }
    }
    return 0 == this.a ? this.wc : this.cb
  }

  nc(c: number, d: number, e: number) {
    var h = e - d;
    if (4 >= h) this.ob(c, d, e); else {
      var k = this.l, g = 12 * c, m = k[g + 3] - k[g + 0], p = k[g + 4] - k[g + 1], v = k[g + 5] - k[g + 2];
      if (m > p && m > v) var z = 0; else p > v ? (z = 1, m = p) : (z = 2, m = v);
      var unk6 = k[g + z] + (m >> 1);
      var unk4 = d;
      v = e;
      var unk2: Uint8Array = this.h[z];
      for (var unk = this.c; ;) {
        for (; unk4 < v && !(unk2[unk[unk4]] >= unk5);) unk4++;
        for (; unk4 < v && !(unk2[unk[v - 1]] < unk5);) v--;
        if (unk4 == v) {
          unk4 = v;
          break
        }
        var B = unk[unk4];
        unk[unk4] = unk[v - 1];
        unk[v - 1] = B
      }
      if (unk4 == d || unk4 == e) {
        if (255 > h) {
          this.ob(c, d, e);
          return
        }
        unk4 = (d + e) / 2;
        unk5 = unk2[unk[unk4]]
      }
      var unk5 = this.o++;
      var unk3 = this.o++;
      this.Fc(c, unk5, z, unk5, d, unk4, e);
      this.b[this.a++] = unk3;
      this.b[this.a++] = unk4;
      this.b[this.a++] = e;
      this.b[this.a++] = unk5;
      this.b[this.a++] = d;
      this.b[this.a++] = unk4
    }
  }

  Fc(c: number, d: number, e: number, h: number, k: number, g: number, m: number) {
    var unk = this.l;
    c *= 12;
    unk[c + 6] = 0;
    unk[c + 7] = e;
    this.u[c + 8 >> 2] = d;
    var unk2 = this.h[0];
    var unk3 = this.h[1];
    for (var p = this.h[2], v = 0; 2 > v; v++) {
      var z = 0 == v ? k : g, B = 0 == v ? g : m;
      if (!(4 >= B - z)) {
        var A = this.c[z], G = unk2[A], C = unk3[A];
        A = p[A];
        var R = G, L = G, O = C, sa = C, ka = A, qa = A;
        for (z += 1; z < B; z++) A = this.c[z], G = unk2[A], C = unk3[A], A = p[A], G < R ? R = G : G > L && (L = G), C < O ? O = C : C > sa && (sa = C), A < ka ? ka = A : A > qa && (qa = A);
        B = 12 * (0 == v ? d : d + 1);
        unk[B++] = R;
        unk[B++] = O;
        unk[B++] = ka;
        unk[B++] = L;
        unk[B++] = sa;
        unk[B] = qa
      }
    }
  }

  ob(c: number, d: number, e: number) {
    var h = this.L, k = this.c, g, m, p, v;
    var z = g = m = 255;
    var B = p = v = 0;
    for (var A = d; A < e; ++A) {
      var G = 6 * k[A], C = h[G++];
      z = z < C ? z : C;
      C = h[G++];
      g = g < C ? g : C;
      C = h[G++];
      m = m < C ? m : C;
      C = h[G++];
      B = B > C ? B : C;
      C = h[G++];
      p = p > C ? p : C;
      C = h[G++];
      v = v > C ? v : C
    }
    h = this.l;
    c *= 12;
    var unk = c + 0;
    h[unk++] = z;
    h[unk++] = g;
    h[unk++] = m;
    h[unk++] = B;
    h[unk++] = p;
    h[unk] = v;
    h[c + 6] = 1;
    h[c + 7] = e - d;
    this.u[c + 8 >> 2] = d
  }

  wc() {
    for (var c = this.l, d = this.u, e = this.o - 1; 0 <= e; e--) {
      var h = 12 * e;
      if (0 == c[h + 6]) {
        var k = h + 0;
        h = 12 * d[h + 8 >> 2];
        for (var g = h + 12, m = 0; 3 > m; m++, k++, h++, g++) {
          var p = c[h], v = c[g];
          c[k] = p <= v ? p : v;
          p = c[3 + h];
          v = c[3 + g];
          c[3 + k] = p >= v ? p : v
        }
      }
    }
    for (e = 0; e < this.c.length; ++e) this.c[e] = this.M[this.c[e]];
    this.l = c.subarray(0, 12 * this.o);
  }

  hc(): Uint8Array {
    return this.l;
  }
}

function vc(c: number, d: number): number {
  return 0 == d ? c + 1 & -2 : 1 == d ? c | 1 : c + 2
}

