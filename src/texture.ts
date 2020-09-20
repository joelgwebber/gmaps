import {Reader} from "./reader";

var Ad: Uint16Array;
var Ed: NativeShit;

export class Texture /* Ub */ {
  bytes: Uint8Array;
  textureFormat: number;
  viewDirection: number;
  width: number;
  height: number;
  meshId: number;

  constructor() {
    this.bytes = null;
    this.textureFormat = 1;
    this.viewDirection = this.height = this.width = 0;
    this.meshId = -1
  }
}

class NativeShit {

  constructor() {
  }

  malloc(len: number): number {
    // return this.a._malloc(c)
    return 0;
  }

  lc(c: Uint8Array, d: number, e: number, h: number) {
    // this.a.HEAPU8.set(c.subarray(d, d + e), h)
  }

  Ac(c: number, d: number): number {
    // return this.a._crn_get_decompressed_size(c, d)
    return 0;
  }

  sc(c: number, d: number, e: number, h: number): number {
    // return this.a._crn_decompress(c, d, e, h)
    return 0;
  }

  mc(c: number, d: number, e: Uint8Array, h: number) {
    // e.set(this.a.HEAPU8.subarray(c, c + d), h)
  }

  free(c: number) {
    // this.a._free(c)
  }
}

export function texture(c: Reader, d: boolean) {
  for (var e = c.data(), h, k = 1, g = 0, m = 0, p = 256, v = 256, z = 0, B = -1; h = c.chunk();) {
    switch (h) {
      case 1:
        m = c.s32();
        g || (g = c.a);
        c.advance(m);
        break;
      case 3:
        p = c.packed();
        break;
      case 4:
        v = c.packed();
        break;
      case 2:
        k = c.packed();
        break;
      case 5:
        z = c.packed();
        break;
      case 6:
        B = c.packed();
        break;
      default:
        c.B();
        break;
    }
  }

  var tex = new Texture();
  switch (k) {
    case 1:
      tex.bytes = new Uint8Array(m);
      tex.bytes.set(e.subarray(g, g + m));
      break;

    case 6:
      Ed || (Ed = new NativeShit());
      h = Ed;
      var A = h.malloc(m);
      h.lc(e, g, m, A);
      var len = h.Ac(A, m);
      g = h.malloc(len);
      tex.bytes = new Uint8Array(len);
      h.sc(A, m, g, len);
      h.mc(g, len, tex.bytes, 0);
      h.free(A);
      h.free(g);

      if (!d) {
        var bs = new Uint16Array(tex.bytes.buffer);
        m = p;
        A = v;
        var arr = new Uint16Array(m * A);
        Ad || (Ad = new Uint16Array(4));
        var buf = Ad;
        h = m / 4;
        for (var G = A / 4, C = 0; C < G; C++) {
          for (var R = 0; R < h; R++) {
            A = 4 * (C * h + R);
            buf[0] = bs[A];
            buf[1] = bs[A + 1];
            var L = buf[0] & 31;
            var O = buf[0] & 2016;
            var sa = buf[0] & 63488;
            var ka = buf[1] & 31;
            var qa = buf[1] & 2016;
            var P = buf[1] & 63488;
            buf[2] = 5 * L + 3 * ka >> 3 | 5 * O + 3 * qa >> 3 & 2016 | 5 * sa + 3 * P >> 3 & 63488;
            buf[3] = 5 * ka + 3 * L >> 3 | 5 * qa + 3 * O >> 3 & 2016 | 5 * P + 3 * sa >> 3 & 63488;
            O = 4 * C * m + 4 * R;
            L = bs[A + 2];
            arr[O] = buf[L & 3];
            arr[O + 1] = buf[L >> 2 & 3];
            arr[O + 2] = buf[L >> 4 & 3];
            arr[O + 3] = buf[L >> 6 & 3];
            O += m;
            arr[O] = buf[L >> 8 & 3];
            arr[O + 1] = buf[L >> 10 & 3];
            arr[O + 2] = buf[L >> 12 & 3];
            arr[O + 3] = buf[L >> 14];
            L = bs[A + 3];
            O += m;
            arr[O] = buf[L & 3];
            arr[O + 1] = buf[L >> 2 & 3];
            arr[O + 2] = buf[L >> 4 & 3];
            arr[O + 3] = buf[L >> 6 & 3];
            O += m;
            arr[O] = buf[L >> 8 & 3];
            arr[O + 1] = buf[L >> 10 & 3];
            arr[O + 2] = buf[L >> 12 & 3];
            arr[O + 3] = buf[L >> 14]
          }
        }
        tex.bytes = new Uint8Array(arr.buffer)
      }
      break;
  }

  tex.textureFormat = k;
  tex.width = p;
  tex.height = v;
  tex.viewDirection = z;
  tex.meshId = B;
  return tex;
}
