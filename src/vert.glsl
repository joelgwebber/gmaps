#define _b 1
#define _e 1
#if !defined(_i)&&!defined(_j)&&!defined(_k)
#endif
#ifdef _i
#endif
#ifdef _j
#endif
#ifdef _k
#endif
varying vec2 m;
#ifdef _c
varying vec3 n;
#endif
#ifdef _b
varying float o;
#endif
varying float p;
#ifdef _a
varying vec3 q;
#endif
#ifdef _d
varying vec4 r;
#endif
uniform mat4 s;
uniform float t[8];
#if defined(_a)||defined(_c)||0
uniform mat4 u;
#endif
#ifdef _d
uniform mat4 v;
#endif
uniform vec4 w;
#ifdef _b
uniform float x,A,B,C,D,E;float Va(float sa){return sa/(x*A);}float Wa(float sa){float ta,ua,va,wa;ta=Va(sa);ua=C/ta;va=.5*ua/B;wa=.05;return va/wa;}float Xa(float sa){return E*abs(sa-D)/sa;}float Ya(float sa){float ta,ua;ta=Wa(sa);ua=Xa(sa);return clamp(max(ta,ua),0.,1.);}
#endif
attribute vec4 F;
attribute vec2 G;
#ifdef _c
attribute vec3 H;const vec3 ra=vec3(127);
#endif
void main(){float sa=t[int(floor(F.w*255.+.5))];if(sa>0.){vec4 ta=vec4(floor(F.xyz*255.+.5),1);gl_Position=s*ta;m=(floor(G*65535.+.5)+w.xy)*w.zw;
#ifdef _b
o=Ya(gl_Position.w);
#endif
p=sa;
#ifdef _a
vec4 ua=u*ta;q=ua.xyz/6371010.;
#endif
#ifdef _c
n=(u*vec4(floor(H*255.+.5)-ra,0)).xyz;
#endif
#ifdef _d
r=v*ta;
#endif
}else gl_Position=vec4(0,0,0,1);}