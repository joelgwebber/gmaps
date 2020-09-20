// interface Chunk {
// }
//
// function render() {
//   var c: Chunk = []; // chunks
//   var e = 7, f = this.V, g = f.T;
//   if (!g.isContextLost()) {
//     g.depthFunc(513);
//     g.enable(2884);
//     g.cullFace(1029);
//     g.enable(2929);
//     g.disable(3042);
//     g.disable(2960);
//     g.blendFuncSeparate(32771, 32772, 1, 0);
//     g.blendEquation(32774);
//     if (renderChunks(f, c, a, e, false)) {
//       g.enable(3042);
//       renderChunks(f, c, a, e, true);
//       g.disable(3042);
//     }
//   }
// }
//
// function renderChunks(a, b, c, e, f): boolean {
//   if (0 == b.length) {
//     return false;
//   }
//
//   // var g = a.T, k = false, m = XEg(a);
//   var g /**/, k /**/ = false, m /* programInfo */;
//   // useProgram(m)
//   var q = 0;
//   // m.R.hc.set(q++);
//   // r9(a.H) && (q = HEg(a.H, m, q), iEg(a.ha) && jEg(a.ha, m), 0 < a.Ga.H.T && PEg(a.Ga, m), IEg(a.ra) && JEg(a.ra, m));
//   var r = m.attributes.H.Va(), t = m.attributes.T.Va();
//   g.enableVertexAttribArray(r);
//   g.enableVertexAttribArray(t);
//   var x = m.attributes.R.Va(), B = -1 != x;
//   B && g.enableVertexAttribArray(x);
//
//   var G = _.K8(c), I = m.R.hb.Va(), T = m.R.Xa.Va(), aa = m.R.Eb.Va(), ia = m.R.Gc.Va();
//   if (a.W.H) {
//     _.lJb(m.R.Wb, a.W.T);
//     g.activeTexture(33984 + q);
//     g.bindTexture(3553, a.W.H);
//     m.R.Ob.set(q++);
//     m.R.Fb.set(a.W.opacity);
//   }
//
//   for (var ha = b.length, sa = 0; sa < ha; sa++) {
//     var ra = b[sa], Ea = ra.V, ob = Ea.length;
//     if (-1 != ra.R && 0 != ob) {
//       for (var cb = ra.T, Xb = a.Wb, Lb = !1, kc = 0, ad = 0, Cc = 0; 8 > Cc; Cc++) {
//         // 1 === cb[Cc] ? f ? Xb[Cc] = 0 : (Lb = !0,
//         //   Xb[Cc] = 1) : 0 < cb[Cc] ? (k = true,
//         //   f ? (Xb[Cc] = cb[Cc],
//         //     Lb = !0,
//         //     kc += cb[Cc],
//         //     ad++) : Xb[Cc] = 0) : Xb[Cc] = 0;
//       }
//
//       if (Lb) {
//         g.uniform1fv(aa, Xb);
//         f && (kc /= ad, g.blendColor(0, 0, 0, kc), a.Oa.add(18, 1));
//         cb = SBg(ra.dj);
//         _.yw(G, cb, a.$);
//         _.JJ(a.R, a.$);
//         g.uniformMatrix4fv(T, !1, a.R);
//         if (-1 != I) {
//           Lb = a.R;
//           _.JJ(Lb, cb);
//           g.uniformMatrix4fv(I, !1, Lb)
//         }
//         if (a.W.H) {
//           _.yw(a.W.R, cb, a.$);
//           _.JJ(a.R, a.$);
//           _.ZJ(m.R.Ja, a.R)
//         }
//         cb = q;
//         if (r9(a.H)) {
//           if (iEg(a.ha)) {
//             cb = kEg(a.ha, m, ra, cb)
//           }
//           if (IEg(a.ra)) {
//             KEg(a.ra, m, ra, cb)
//           }
//         }
//         if (a.Ca) {
//           aFg(m, c, ra)
//         }
//
//         for (ra = 0; ra < ob; ra++) {
//           cb = Ea[ra];
//           Lb = !1;
//           kc = cb.Aa;
//           ad = kc.length - 1;
//           for (var Yb = Cc = 0, $f = cb.Ga, ri = 0, mc = 0, ui = 0; ui < ad + 1; ui++)
//             if (ui != ad && e & 1 << ui) {
//               Yb = kc[ui + 1];
//               mc = 8 * ui;
//             } else {
//               var Kn = Yb - Cc;
//               if (0 < Kn) {
//                 for (Kn = ri; Kn < mc; Kn++) {
//                   var lJ = Kn & 7;
//                   if (0 != $f[Kn]) {
//                     if (0 < Xb[lJ]) {
//                       break;
//                     }
//                     Cc += $f[Kn]
//                   }
//                 }
//                 for (Kn = mc + 7; Kn >= ri; Kn--)
//                   if (lJ = Kn & 7,
//                   0 != $f[Kn]) {
//                     if (0 < Xb[lJ])
//                       break;
//                     Yb -= $f[Kn]
//                   }
//                 Kn = Yb - Cc
//               }
//               0 < Kn && (Lb || (QEg(g, cb, B, r, t, x, ia),
//                 Lb = !0),
//                 g.drawElements(5, Kn, 5123, 2 * Cc));
//               ui != ad && (Cc = kc[ui + 1],
//                 ri = 8 * (ui + 1))
//             }
//         }
//       }
//     }
//     g.disableVertexAttribArray(r);
//     g.disableVertexAttribArray(t);
//     if (-1 != x) {
//       g.disableVertexAttribArray(x);
//     }
//     return k
//   }
