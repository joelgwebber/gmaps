import {Texture, texture} from "./texture";
import {Unk} from "./unk";
import {Reader} from "./reader";

export class MeshObject {
  matrixGlobeFromMesh: Float64Array;
  matrixMeshFromGlobe: Float64Array;
  meshes: Mesh[];
  nonEmptyOctants: number;
  overlaySurfaceMeshes: Mesh[];
  copyrightIds: number[];
  waterMesh: Mesh;
  bvhTriPermutation: Uint32Array;
  bvhNodes: Uint8Array;

  constructor() {
    this.matrixMeshFromGlobe = this.matrixGlobeFromMesh = null;
    this.meshes = [];
    this.overlaySurfaceMeshes = [];
    this.copyrightIds = this.waterMesh = null;
    this.nonEmptyOctants = 0;
    this.bvhTriPermutation = this.bvhNodes = null
  }
}

export class Mesh /* Tb */ {
  // vertexAlphas = null;
  indices: Uint16Array = null;
  uvOffsetAndScale: Float32Array = null;
  layerBounds: Uint32Array = null;
  texture: Texture = null;
  vertices: Uint8Array = null;
  octantCounts: Uint32Array = null;
  normals: Uint8Array = null;
  numNonDegenerateTriangles = 0;
  meshId = -1;

  constructor() {
  }
}

export class MeshParser {
  private a: MeshObject;
  private b: Reader;
  private l: number[][] = [];
  private u: boolean;
  private h: boolean;
  private normArr: Uint8Array;

  constructor(c: Uint8Array, d: boolean, e: boolean) {
    this.b = new Reader(c);
    this.u = d;
    this.h = e;
    this.a = new MeshObject();
    this.l = [];
    this.normArr = null
  }

  parse() {
    for (var c = this.b, d: number; d = c.chunk();) {
      switch (d) {
        case 1:
          var e = c.packed() / 8;
          var h = this.a.matrixGlobeFromMesh = new Float64Array(16);
          for (d = 0; d < e; d++) {
            h[d] = c.f64();
          }
          this.a.matrixMeshFromGlobe = new Float64Array(16);
          var mfg = this.a.matrixMeshFromGlobe;
          e = h[0];
          var k = h[1], g = h[2], m = h[3], p = h[4], v = h[5], z = h[6], B = h[7], A = h[8], G = h[9], C = h[10],
            R = h[11], L = h[12], O = h[13], sa = h[14];
          var unk = h[15];
          var ka = e * v - k * p;
          var qa = e * z - g * p;
          var P = e * B - m * p;
          var la = k * z - g * v;
          var Ea = k * B - m * v;
          var J = g * B - m * z;
          var aa = A * O - G * L;
          var Ja = A * sa - C * L;
          var Ua = A * unk - R * L;
          var ab = G * sa - C * O;
          var Ya = G * unk - R * O;
          var Va = C * unk - R * sa;
          var va = ka * Va - qa * Ya + P * ab + la * Ua - Ea * Ja + J * aa;
          if (0 != va) {
            va = 1 / va;
            mfg[0] = (v * Va - z * Ya + B * ab) * va;
            mfg[1] = (-k * Va + g * Ya - m * ab) * va;
            mfg[2] = (O * J - sa * Ea + unk * la) * va;
            mfg[3] = (-G * J + C * Ea - R * la) * va;
            mfg[4] = (-p * Va + z * Ua - B * Ja) * va;
            mfg[5] = (e * Va - g * Ua + m * Ja) * va;
            mfg[6] = (-L * J + sa * P - unk * qa) * va;
            mfg[7] = (A * J - C * P + R * qa) * va;
            mfg[8] = (p * Ya - v * Ua + B * aa) * va;
            mfg[9] = (-e * Ya + k * Ua - m * aa) * va;
            mfg[10] = (L * Ea - O * P + unk * ka) * va;
            mfg[11] = (-A * Ea + G * P - R * ka) * va;
            mfg[12] = (-p * ab + v * Ja - z * aa) * va;
            mfg[13] = (e * ab - k * Ja + g * aa) * va;
            mfg[14] = (-L * la + O * qa - sa * ka) * va;
            mfg[15] = (A * la - G * qa + C * ka) * va;
          }
          break;

        case 2:
          d = c.packed();
          c.push(c.a + d);
          this.a.meshes.push(this.mesh());
          c.pop();
          break;

        case 3:
          d = c.packed();
          this.a.copyrightIds ? this.a.copyrightIds.push(d) : this.a.copyrightIds = [d];
          break;

        case 6:
          d = c.packed();
          c.push(c.a + d);
          this.a.waterMesh = this.mesh();
          c.pop();
          break;

        case 7:
          d = c.packed();
          c.push(c.a + d);
          this.a.overlaySurfaceMeshes.push(this.mesh());
          c.pop();
          break;

        case 8:
          this.h ? this.ad() : c.B();
          break;

        default:
          c.B()
      }
    }

    this.oc();
    if (this.h) {
      for (d = 0; d < this.a.meshes.length; ++d) {
        this.uc(this.a.meshes[d]);
      }
    }

    // TODO: Probably no longer necessary; accumulating buffers for transferring out of the worker.
    // var bufs: ArrayBuffer[] = [];
    // bufs.push(this.a.matrixGlobeFromMesh.buffer);
    // bufs.push(this.a.matrixMeshFromGlobe.buffer);
    // var meshes = this.a.meshes;
    // for (d = 0; d < meshes.length; d++) {
    //   bufs.push(meshes[d].vertices.buffer);
    //   bufs.push(meshes[d].uvOffsetAndScale.buffer);
    //   bufs.push(meshes[d].layerBounds.buffer);
    //   bufs.push(meshes[d].indices.buffer);
    //   if (meshes[d].normals) {
    //     bufs.push(meshes[d].normals.buffer);
    //   }
    //   if (meshes[d].texture) {
    //     var tex = meshes[d].texture;
    //     bufs.push(tex.bytes.buffer);
    //   }
    // }
    //
    // meshes = this.a.overlaySurfaceMeshes;
    // for (d = 0; d < meshes.length; d++) {
    //   bufs.push(meshes[d].vertices.buffer);
    //   bufs.push(meshes[d].layerBounds.buffer);
    //   bufs.push(meshes[d].indices.buffer);
    //   if (meshes[d].normals) {
    //     bufs.push(meshes[d].normals.buffer);
    //   }
    // }
    //
    // if (this.a.waterMesh) {
    //   var mesh = this.a.waterMesh;
    //   bufs.push(mesh.vertices.buffer);
    //   bufs.push(mesh.vertexAlphas.buffer);
    //   bufs.push(mesh.layerBounds.buffer);
    //   bufs.push(mesh.indices.buffer);
    //   if (mesh.normals) {
    //     bufs.push(mesh.normals.buffer);
    //   }
    // }
    //
    // bufs.push(this.a.bvhNodes.buffer);
    // bufs.push(this.a.bvhTriPermutation.buffer);

    return this.a;
  }

  private mesh(): Mesh {
    var c = this.b, d = new Mesh, e: number[] = [];
    this.l.push(e);
    for (var h; h = c.chunk();) {
      switch (h) {
        default:
          c.B();
          break;
        case 1:
          this.verts(d);
          break;
        case 3:
          this.indices(d);
          break;
        case 7:
          this.uvs(d);
          break;
        case 8:
          this.layers(d, e);
          break;
        case 11:
          this.h ? this.normals(d) : c.B();
          break;
        case 12:
          d.meshId = c.packed();
          break;
        case 6:
          h = c.packed();
          c.push(c.a + h);
          d.texture = texture(c, this.u);
          c.pop();
          break;

        // TODO
        case 9:
          debugger;
          // this.ed(d);
          break;
        case 10:
          debugger;
          // var k = c.packed() / 4, g = d.uvOffsetAndScale = new Float32Array(4);
          // for (h = 0; h < k; h++) {
          //   g[h] = c.$();
          // }
          break;
      }
    }

    if (d.uvOffsetAndScale) {
      d.uvOffsetAndScale[1] -= 1 / d.uvOffsetAndScale[3];
      d.uvOffsetAndScale[3] *= -1
    }

    var verts = d.vertices;
    var indices = d.indices;
    for (var m = 0, g = 0; m < e.length; m++) {
      var p = m & 7;
      0 < e[m] && (this.a.nonEmptyOctants |= 1 << p);
      for (h = 0; h < e[m]; h++) {
        var v = 8 * indices[g++] + 3;
        verts[v] = p
      }
    }
    return d
  }

  verts(c: Mesh): void {
    var d = this.b, e = d.data(), h = d.packed(), k = h / 3;
    var verts = c.vertices = new Uint8Array(8 * k);
    for (var g = d.a, m = 0; 2 >= m; m++) {
      var p = e[g++];
      verts[m] = p;
      for (var v = 1; v < k; v++) {
        p = p + e[g++] & 255;
        verts[8 * v + m] = p
      }
    }
    d.advance(h);
  }

  indices(c: Mesh) {
    var d = this.b;
    d.packed();
    for (var e = d.packed(), h = c.indices = new Uint16Array(e), k = 0, g = 0, m, p = 0, v = 0, z = 0; z < e; z++) {
      var B = d.packed();
      m = p;
      p = v;
      v = k - B;
      h[z] = v;
      m != p && p != v && m != v && g++;
      B || k++
    }
    c.numNonDegenerateTriangles = g
  }

  uvs(c: Mesh) {
    for (var d = this.b, e = d.data(), h = (d.packed() - 4) / 4, k = d.u16(), g = d.u16(), m = 0, p = 0, v = d.a, z = c.vertices, B = 0; B < h; B++) {
      var A = e[v + 1 * h + B] + (e[v + 3 * h + B] << 8);
      m = (m + (e[v + 0 * h + B] + (e[v + 2 * h + B] << 8))) % (k + 1);
      p = (p + A) % (g + 1);
      A = 8 * B + 4;
      z[A + 0] = m & 255;
      z[A + 1] = m >> 8;
      z[A + 2] = p & 255;
      z[A + 3] = p >> 8
    }
    c.uvOffsetAndScale || (c.uvOffsetAndScale = new Float32Array([.5, .5, 1 / (k + 1), 1 / (g + 1)]));
    d.advance(4 * h)
  }

  layers(c: Mesh, d: number[]) {
    var e = this.b;
    e.packed();
    var h = e.packed();
    var k = 0;
    var g = c.layerBounds = new Uint32Array(10);
    var m = 0;
    var octc = c.octantCounts = new Uint32Array(72);
    for (var p = 0; p < h; p++) {
      0 == p % 8 && (g[m++] = k);
      var v = e.packed();
      d.push(v);
      octc[8 * (m - 1) + (p & 7)] = v;
      k += v
    }
    for (; 10 > m; m++) {
      g[m] = k
    }
  }

  normals(c: Mesh) {
    var d = this.b;
    var e = d.data();
    var h = d.packed();
    var k = d.a;
    c.normals = new Uint8Array(e.buffer.slice(k, k + h));
    d.advance(h)
  }

  ad() {
    var c = this.b, d = c.data(), e = c.packed(), h = c.a, k = d[h] + (d[h + 1] << 8), g = d[h + 2];
    h += 3;
    this.normArr = new Uint8Array(3 * k);
    for (var m = 0; m < e; ++m) {
      var p = d[h + m]
        , v = d[h + k + m];
      p = Gd(p, g);
      v = Gd(v, g);
      var z = p / 255
        , B = v / 255;
      var wat = this.normArr;
      p = 3 * m;
      var A = z
        , G = B
        , C = A + G
        , R = A - G
        , L = 1;
      .5 <= C && 1.5 >= C && -.5 <= R && .5 >= R || (L = -1,
        .5 >= C ? (A = .5 - B,
          G = .5 - z) : 1.5 <= C ? (A = 1.5 - B,
          G = 1.5 - z) : -.5 >= R ? (A = B - .5,
          G = z + .5) : (A = B + .5,
          G = z - .5),
        C = A + G,
        R = A - G);
      z = min(min(2 * C - 1, 3 - 2 * C), min(2 * R + 1, 1 - 2 * R)) * L;
      A = 2 * A - 1;
      G = 2 * G - 1;
      B = 127 / Math.sqrt(z * z + A * A + G * G);
      wat[p + 0] = Id(B * z + 127);
      wat[p + 1] = Id(B * A + 127);
      wat[p + 2] = Id(B * G + 127)
    }
    c.advance(e)
  }

  oc() {
    for (var c = this.a, d = c.meshes.slice(), e = 0; e < c.overlaySurfaceMeshes.length; e++) {
      d.push(c.overlaySurfaceMeshes[e]);
    }
    c.waterMesh && d.push(c.waterMesh);
    if (0 != d.length) {
      var unk = new Unk(d);
      for (var cb = unk.start(); null != cb; ) {
        cb = cb.apply(unk);
      }
      this.a.bvhNodes = unk.hc();
      this.a.bvhTriPermutation = unk.c;
    }
  }

  uc(mesh: Mesh) {
    var d = mesh.normals;
    if (d && this.normArr) {
      for (h = d.length / 2, mesh.normals = new Uint8Array(4 * h), k = 0; k < h; ++k) {
        var e = d[k] + (d[h + k] << 8);
        mesh.normals[4 * k] = this.normArr[3 * e];
        mesh.normals[4 * k + 1] = this.normArr[3 * e + 1];
        mesh.normals[4 * k + 2] = this.normArr[3 * e + 2];
        mesh.normals[4 * k + 3] = 0
      }
    } else {
      var h = mesh.vertices.length / 8;
      mesh.normals = new Uint8Array(4 * h);
      for (var k = 0; k < h; ++k) {
        mesh.normals[4 * k] = 127;
        mesh.normals[4 * k + 1] = 127;
        mesh.normals[4 * k + 2] = 127;
        mesh.normals[4 * k + 3] = 0;
      }
    }
  }
}

function Gd(c: number, d: number) {
  if (4 >= d) {
    return (c << d) + (c & (1 << d) - 1);
  }
  if (6 >= d) {
    var e = 8 - d;
    return (c << d) + (c << d >> e) + (c << d >> e >> e) + (c << d >> e >> e >> e)
  }
  return -(c & 1)
}

function min(c: number, d: number) {
  return c < d ? c : d
}

function Id(c: number) {
  c = Math.round(c);
  return min(0 > c ? 0 : c, 255)
}
