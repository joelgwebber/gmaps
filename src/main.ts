///<reference path="twgl.d.ts"/>

import {twgl} from "twgl.js";
import m4 = twgl.m4;

const canvas = document.querySelector("#c") as HTMLCanvasElement;
const gl = canvas.getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

const arrays = {
  position: [1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1],
  normal:   [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1],
  texcoord: [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  indices:  [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23],
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

const tex = twgl.createTexture(gl, {
  min: gl.NEAREST,
  mag: gl.NEAREST,
  src: [
    255, 255, 255, 255,
    192, 192, 192, 255,
    192, 192, 192, 255,
    255, 255, 255, 255,
  ],
});

const uniforms = {
  u_lightWorldPos: [1, 8, -10],
  u_lightColor: [1, 0.8, 0.8, 1],
  u_ambient: [0, 0, 0, 1],
  u_specular: [1, 1, 1, 1],
  u_shininess: 50,
  u_specularFactor: 1,
  u_diffuse: tex,

  u_viewInverse: null as m4.Mat4,
  u_world: null as m4.Mat4,
  u_worldInverseTranspose: null as m4.Mat4,
  u_worldViewProjection: null as m4.Mat4
};

function render(time: number) {
  time *= 0.001;
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const fov = 30 * Math.PI / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.5;
  const zFar = 10;
  const projection = m4.perspective(fov, aspect, zNear, zFar);
  const eye = [1, 4, -6];
  const target = [0, 0, 0];
  const up = [0, 1, 0];

  const camera = m4.lookAt(eye, target, up);
  const view = m4.inverse(camera);
  const viewProjection = m4.multiply(projection, view);
  const world = m4.rotationY(time);

  uniforms.u_viewInverse = camera;
  uniforms.u_world = world;
  uniforms.u_worldInverseTranspose = m4.transpose(m4.inverse(world));
  uniforms.u_worldViewProjection = m4.multiply(viewProjection, world);

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  gl.drawElements(gl.TRIANGLES, bufferInfo.numElements, gl.UNSIGNED_SHORT, 0);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

// import {MeshParser} from "./parser";
//
// function test(url: string) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onloadend = () => {
//     let parser = new MeshParser(new Uint8Array(xhr.response), false, true);
//     let mesh = parser.parse();
//     console.log(mesh);
//   };
//   xhr.responseType = "arraybuffer";
//   xhr.send();
// }
//
// test("https://kh.google.com/rt/earth/NodeData/pb=!1m2!1s2142605151515344015560!2u585!2e6!4b0");
