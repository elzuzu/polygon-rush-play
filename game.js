var n0=Object.defineProperty;var i0=(i,e)=>{for(var t in e)n0(i,t,{get:e[t],enumerable:!0})};var s0=0,uf=1,r0=2;var Pd=1,Au=2,yi=3,oi=0,qt=1,Jt=2,ri=0,lr=1,dr=2,hf=3,ff=4,wu=5,Si=100,o0=101,a0=102,c0=103,l0=104,u0=200,Ru=201,h0=202,f0=203,pl=204,fo=205,d0=206,p0=207,m0=208,g0=209,_0=210,x0=211,v0=212,y0=213,M0=214,ml=0,gl=1,_l=2,pr=3,xl=4,vl=5,yl=6,Ml=7,Ld=0,S0=1,b0=2,Ji=0,Cu=1,Iu=2,Pu=3,bo=4,T0=5,Lu=6,Du=7,df="attached",E0="detached",Dd=300,mr=301,gr=302,Sl=303,bl=304,ja=306,Ai=1e3,bi=1001,po=1002,nn=1003,Nu=1004;var ar=1005;var pn=1006,co=1007;var si=1008;var wi=1009,Nd=1010,Ud=1011,mo=1012,Uu=1013,ws=1014,Zn=1015,En=1016,Fu=1017,Ou=1018,_r=1020,Fd=35902,Od=1021,Bd=1022,Nn=1023,zd=1024,kd=1025,ur=1026,xr=1027,Bu=1028,zu=1029,Hd=1030,ku=1031;var Hu=1033,Ma=33776,Sa=33777,ba=33778,Ta=33779,Tl=35840,El=35841,Al=35842,wl=35843,Rl=36196,Cl=37492,Il=37496,Pl=37808,Ll=37809,Dl=37810,Nl=37811,Ul=37812,Fl=37813,Ol=37814,Bl=37815,zl=37816,kl=37817,Hl=37818,Vl=37819,Gl=37820,Wl=37821,Ea=36492,Xl=36494,ql=36495,Vd=36283,Yl=36284,Zl=36285,Kl=36286;var vr=2300,yr=2301,Uc=2302,pf=2400,mf=2401,gf=2402,A0=2500;var Gd=0,Qa=1,To=2,w0=3200,R0=3201;var Wd=0,C0=1,Zi="",Lt="srgb",sn="srgb-linear",ec="linear",_t="srgb";var Vs=7680;var _f=519,I0=512,P0=513,L0=514,Xd=515,D0=516,N0=517,U0=518,F0=519,$l=35044,li=35048;var xf="300 es",Ti=2e3,Aa=2001,ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=1234567,lo=Math.PI/180,Mr=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function Vu(i,e){return(i%e+e)%e}function O0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function B0(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function z0(i,e,t,n){return uo(i,e,1-Math.exp(-t*n))}function k0(i,e=1){return e-Math.abs(Vu(i,e*2)-e)}function H0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function V0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function G0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function W0(i,e){return i+Math.random()*(e-i)}function X0(i){return i*(.5-Math.random())}function q0(i){i!==void 0&&(vf=i);let e=vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y0(i){return i*lo}function Z0(i){return i*Mr}function K0(i){return(i&i-1)===0&&i!==0}function $0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function J0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function j0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qd={DEG2RAD:lo,RAD2DEG:Mr,generateUUID:Kn,clamp:tn,euclideanModulo:Vu,mapLinear:O0,inverseLerp:B0,lerp:uo,damp:z0,pingpong:k0,smoothstep:H0,smootherstep:V0,randInt:G0,randFloat:W0,randFloatSpread:X0,seededRandom:q0,degToRad:Y0,radToDeg:Z0,isPowerOfTwo:K0,ceilPowerOfTwo:$0,floorPowerOfTwo:J0,setQuaternionFromProperEuler:j0,normalize:Mt,denormalize:Yn},Ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],y=s[1],v=s[4],_=s[7],A=s[2],T=s[5],E=s[8];return r[0]=o*x+a*y+c*A,r[3]=o*m+a*v+c*T,r[6]=o*d+a*_+c*E,r[1]=l*x+u*y+h*A,r[4]=l*m+u*v+h*T,r[7]=l*d+u*_+h*E,r[2]=f*x+p*y+g*A,r[5]=f*m+p*v+g*T,r[8]=f*d+p*_+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fc=new it;function Yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Q0(){let i=go("canvas");return i.style.display="block",i}var yf={};function oo(i){i in yf||(yf[i]=!0,console.warn(i))}function eg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function tg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ng(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?ec:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mf=[.64,.33,.3,.6,.15,.06],Sf=[.2126,.7152,.0722],bf=[.3127,.329],Tf=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ef=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[sn]:{primaries:Mf,whitePoint:bf,transfer:ec,toXYZ:Tf,fromXYZ:Ef,luminanceCoefficients:Sf,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:Mf,whitePoint:bf,transfer:_t,toXYZ:Tf,fromXYZ:Ef,luminanceCoefficients:Sf,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}});var Gs,Jl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=go("canvas")),Gs.width=e.width,Gs.height=e.height;let n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=go("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ig=0,wa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oc(s[o].image)):r.push(Oc(s[o]))}else r=Oc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sg=0,Yt=class i extends ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=pn,o=si,a=Nn,c=wi,l=i.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Kn(),this.name="",this.source=new wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Dd;Yt.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(p+1)/2,A=(d+1)/2,T=(u+f)/4,E=(h+x)/4,C=(g+m)/4;return v>_&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=E/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jl=class extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new wa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ra=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ql=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==p||u!==g){let m=1-a,d=c*f+l*p+u*g+h*x,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let A=Math.sqrt(v),T=Math.atan2(A,d*y);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}let _=a*y;if(c=c*m+f*_,l=l*m+p*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-a*p,e[t+2]=l*g+u*p+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Af.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new O,Af=new hn,Un=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),qo.subVectors(this.max,Kr),Ws.subVectors(e.a,Kr),Xs.subVectors(e.b,Kr),qs.subVectors(e.c,Kr),Vi.subVectors(Xs,Ws),Gi.subVectors(qs,Xs),vs.subVectors(Ws,qs);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-vs.z,vs.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,vs.z,0,-vs.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-vs.y,vs.x,0];return!zc(t,Ws,Xs,qs,qo)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Ws,Xs,qs,qo))?!1:(Yo.crossVectors(Vi,Gi),t=[Yo.x,Yo.y,Yo.z],zc(t,Ws,Xs,qs,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,Xo=new Un,Ws=new O,Xs=new O,qs=new O,Vi=new O,Gi=new O,vs=new O,Kr=new O,qo=new O,Yo=new O,ys=new O;function zc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ys.fromArray(i,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),c=e.dot(ys),l=t.dot(ys),u=n.dot(ys);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var rg=new Un,$r=new O,kc=new O,bn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(kc)),this.expandByPoint($r.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new O,Hc=new O,Zo=new O,Wi=new O,Vc=new O,Ko=new O,Gc=new O,Sr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hc.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Hc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zo),a=Wi.dot(this.direction),c=-Wi.dot(Zo),l=Wi.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Hc).addScaledVector(Zo,f),p}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){Vc.subVectors(t,e),Ko.subVectors(n,e),Gc.crossVectors(Vc,Ko);let o=this.direction.dot(Gc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);let c=a*this.direction.dot(Ko.crossVectors(Wi,Ko));if(c<0)return null;let l=a*this.direction.dot(Vc.cross(Wi));if(l<0||c+l>o)return null;let u=-a*Wi.dot(Gc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,o,a,c,l,u,h,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(og,e,ag)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Xi.crossVectors(n,Mn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Xi.crossVectors(n,Mn)),Xi.normalize(),$o.crossVectors(Mn,Xi),s[0]=Xi.x,s[4]=$o.x,s[8]=Mn.x,s[1]=Xi.y,s[5]=$o.y,s[9]=Mn.y,s[2]=Xi.z,s[6]=$o.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],y=n[3],v=n[7],_=n[11],A=n[15],T=s[0],E=s[4],C=s[8],M=s[12],S=s[1],L=s[5],k=s[9],H=s[13],j=s[2],le=s[6],ne=s[10],pe=s[14],ee=s[3],fe=s[7],we=s[11],Re=s[15];return r[0]=o*T+a*S+c*j+l*ee,r[4]=o*E+a*L+c*le+l*fe,r[8]=o*C+a*k+c*ne+l*we,r[12]=o*M+a*H+c*pe+l*Re,r[1]=u*T+h*S+f*j+p*ee,r[5]=u*E+h*L+f*le+p*fe,r[9]=u*C+h*k+f*ne+p*we,r[13]=u*M+h*H+f*pe+p*Re,r[2]=g*T+x*S+m*j+d*ee,r[6]=g*E+x*L+m*le+d*fe,r[10]=g*C+x*k+m*ne+d*we,r[14]=g*M+x*H+m*pe+d*Re,r[3]=y*T+v*S+_*j+A*ee,r[7]=y*E+v*L+_*le+A*fe,r[11]=y*C+v*k+_*ne+A*we,r[15]=y*M+v*H+_*pe+A*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+d*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],y=h*m*l-x*f*l+x*c*p-a*m*p-h*c*d+a*f*d,v=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,_=u*x*l-g*h*l+g*a*p-o*x*p-u*a*d+o*h*d,A=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,T=t*y+n*v+s*_+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return e[0]=y*E,e[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*E,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*E,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*p-n*c*p)*E,e[4]=v*E,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*E,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*d-t*c*d)*E,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*p+t*c*p)*E,e[8]=_*E,e[9]=(g*h*r-u*x*r-g*n*p+t*x*p+u*n*d-t*h*d)*E,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*d+t*a*d)*E,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*E,e[12]=A*E,e[13]=(u*x*s-g*h*s+g*n*f-t*x*f-u*n*m+t*h*m)*E,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*E,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,y=c*l,v=c*u,_=c*h,A=n.x,T=n.y,E=n.z;return s[0]=(1-(x+d))*A,s[1]=(p+_)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+d))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+v)*E,s[9]=(m-y)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ys.set(s[0],s[1],s[2]).length(),o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let l=1/r,u=1/o,h=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ti){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===Ti)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Aa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ti){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*l,p=(n+s)*u,g,x;if(a===Ti)g=(o+r)*h,x=-2*h;else if(a===Aa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ys=new O,Xn=new je,og=new O(0,0,0),ag=new O(1,1,1),Xi=new O,$o=new O,Mn=new O,wf=new je,Rf=new hn,ai=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cg=0,Cf=new O,Zs=new hn,gi=new je,Jo=new O,Jr=new O,lg=new O,ug=new hn,If=new O(1,0,0),Pf=new O(0,1,0),Lf=new O(0,0,1),Df={type:"added"},hg={type:"removed"},Ks={type:"childadded",child:null},Wc={type:"childremoved",child:null},At=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new ai,n=new hn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new it}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(If,e)}rotateY(e){return this.rotateOnAxis(Pf,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,t){return Cf.copy(e).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(If,e)}translateY(e){return this.translateOnAxis(Pf,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Jr,Jo,this.up):gi.lookAt(Jo,Jr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(gi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Df),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Df),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new O,_i=new O,Xc=new O,xi=new O,$s=new O,Js=new O,Nf=new O,qc=new O,Yc=new O,Zc=new O,Kc=new ft,$c=new ft,Jc=new ft,Ki=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),_i.subVectors(n,t),Xc.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(_i),c=qn.dot(Xc),l=_i.dot(_i),u=_i.dot(Xc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Kc.setScalar(0),$c.setScalar(0),Jc.setScalar(0),Kc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),_i.subVectors(e,t),qn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),qn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,n),Js.subVectors(r,n),qc.subVectors(e,n);let c=$s.dot(qc),l=Js.dot(qc);if(c<=0&&l<=0)return t.copy(n);Yc.subVectors(e,s);let u=$s.dot(Yc),h=Js.dot(Yc);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector($s,o);Zc.subVectors(e,r);let p=$s.dot(Zc),g=Js.dot(Zc);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Js,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Nf.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Nf,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector($s,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},jo={h:0,s:0,l:0};function jc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Vu(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jc(o,r,e+1/3),this.g=jc(o,r,e),this.b=jc(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ot.fromWorkingColorSpace(en.copy(this),e),Math.round(tn(en.r*255,0,255))*65536+Math.round(tn(en.g*255,0,255))*256+Math.round(tn(en.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Lt){ot.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(jo);let n=uo(qi.h,jo.h,t),s=uo(qi.s,jo.s,t),r=uo(qi.l,jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Oe;Oe.NAMES=Zd;var fg=0,mn=class extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Kn(),this.name="",this.blending=lr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=fo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pl&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_f&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new O,Qo=new Ge,ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$l,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}};var Ia=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pa=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},dg=0,Dn=new je,Qc=new At,js=new O,Sn=new Un,jr=new Un,Xt=new O,pt=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?Pa:Ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Sn.min,jr.min),Sn.expandByPoint(Xt),Xt.addVectors(Sn.max,jr.max),Sn.expandByPoint(Xt)):(Sn.expandByPoint(jr.min),Sn.expandByPoint(jr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xt.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),Xt.add(js)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new O,c[C]=new O;let l=new O,u=new O,h=new O,f=new Ge,p=new Ge,g=new Ge,x=new O,m=new O;function d(C,M,S){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(x),a[M].add(x),a[S].add(x),c[C].add(m),c[M].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){let S=y[C],L=S.start,k=S.count;for(let H=L,j=L+k;H<j;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let v=new O,_=new O,A=new O,T=new O;function E(C){A.fromBufferAttribute(s,C),T.copy(A);let M=a[C];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(T,M);let L=_.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,L)}for(let C=0,M=y.length;C<M;++C){let S=y[C],L=S.start,k=S.count;for(let H=L,j=L+k;H<j;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new ct(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uf=new je,Ms=new Sr,ea=new bn,Ff=new O,ta=new O,na=new O,ia=new O,el=new O,sa=new O,Of=new O,ra=new O,dt=class extends At{constructor(e=new pt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(el.fromBufferAttribute(h,e),o?sa.addScaledVector(el,u):sa.addScaledVector(el.sub(t),u))}t.add(sa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(ea.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ea,Ff)===null||Ms.origin.distanceToSquared(Ff)>(e.far-e.near)**2))&&(Uf.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Uf),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,A=v;_<A;_+=3){let T=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);s=oa(this,d,e,n,l,u,h,T,E,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=oa(this,o,e,n,l,u,h,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,A=v;_<A;_+=3){let T=_,E=_+1,C=_+2;s=oa(this,d,e,n,l,u,h,T,E,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let y=m,v=m+1,_=m+2;s=oa(this,o,e,n,l,u,h,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pg(i,e,t,n,s,r,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===oi,a),c===null)return null;ra.copy(a),ra.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ra);return l<t.near||l>t.far?null:{distance:l,point:ra.clone(),object:i}}function oa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ta),i.getVertexPosition(c,na),i.getVertexPosition(l,ia);let u=pg(i,e,t,n,ta,na,ia,Of);if(u){let h=new O;Ki.getBarycoord(Of,ta,na,ia,h),s&&(u.uv=Ki.getInterpolatedAttribute(s,a,c,l,h,new Ge)),r&&(u.uv1=Ki.getInterpolatedAttribute(r,a,c,l,h,new Ge)),o&&(u.normal=Ki.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};Ki.getNormal(ta,na,ia,f.normal),u.face=f,u.barycoord=h}return u}var $n=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function g(x,m,d,y,v,_,A,T,E,C,M){let S=_/E,L=A/C,k=_/2,H=A/2,j=T/2,le=E+1,ne=C+1,pe=0,ee=0,fe=new O;for(let we=0;we<ne;we++){let Re=we*L-H;for(let te=0;te<le;te++){let _e=te*S-k;fe[x]=_e*y,fe[m]=Re*v,fe[d]=j,l.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[d]=T>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(te/E),h.push(1-we/C),pe+=1}}for(let we=0;we<C;we++)for(let Re=0;Re<E;Re++){let te=f+Re+le*we,_e=f+Re+le*(we+1),K=f+(Re+1)+le*(we+1),X=f+(Re+1)+le*we;c.push(te,_e,X),c.push(_e,K,X),ee+=6}a.addGroup(p,ee,M),p+=ee,f+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function br(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=br(i[t]);for(let s in n)e[s]=n[s]}return e}function mg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var os={clone:br,merge:un},gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},La=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new O,Bf=new Ge,zf=new Ge,kt=class extends La{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,zf),t.subVectors(zf,Bf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,er=1,eu=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Qs,er,e,t);s.layers=this.layers,this.add(s);let r=new kt(Qs,er,e,t);r.layers=this.layers,this.add(r);let o=new kt(Qs,er,e,t);o.layers=this.layers,this.add(o);let a=new kt(Qs,er,e,t);a.layers=this.layers,this.add(a);let c=new kt(Qs,er,e,t);c.layers=this.layers,this.add(c);let l=new kt(Qs,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Da=class extends Yt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tu=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Da(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $n(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:ri});r.uniforms.tEquirect.value=t;let o=new dt(s,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=pn),new eu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},tl=new O,xg=new O,vg=new it,Mi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tl.subVectors(n,t).cross(xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vg.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new bn,aa=new O,_o=class{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-p,_-d).normalize(),n[1].setComponents(c+r,f+l,m+p,_+d).normalize(),n[2].setComponents(c+o,f+u,m+g,_+y).normalize(),n[3].setComponents(c-o,f-u,m-g,_-y).normalize(),n[4].setComponents(c-a,f-h,m-x,_-v).normalize(),t===Ti)n[5].setComponents(c+a,f+h,m+x,_+v).normalize();else if(t===Aa)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $d(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yg(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Tr=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let y=d*f-o;for(let v=0;v<l;v++){let _=v*h-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let v=y+l*d,_=y+l*(d+1),A=y+1+l*(d+1),T=y+1+l*d;p.push(v,_,T),p.push(_,A,T)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Mg,alphahash_pars_fragment:Sg,alphamap_fragment:bg,alphamap_pars_fragment:Tg,alphatest_fragment:Eg,alphatest_pars_fragment:Ag,aomap_fragment:wg,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Ig,begin_vertex:Pg,beginnormal_vertex:Lg,bsdfs:Dg,iridescence_fragment:Ng,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Og,clipping_planes_pars_vertex:Bg,clipping_planes_vertex:zg,color_fragment:kg,color_pars_fragment:Hg,color_pars_vertex:Vg,color_vertex:Gg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:Zg,emissivemap_fragment:Kg,emissivemap_pars_fragment:$g,colorspace_fragment:Jg,colorspace_pars_fragment:jg,envmap_fragment:Qg,envmap_common_pars_fragment:e_,envmap_pars_fragment:t_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:d_,envmap_vertex:i_,fog_vertex:s_,fog_pars_vertex:r_,fog_fragment:o_,fog_pars_fragment:a_,gradientmap_pars_fragment:c_,lightmap_pars_fragment:l_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:h_,lights_pars_begin:f_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:__,lights_physical_fragment:x_,lights_physical_pars_fragment:v_,lights_fragment_begin:y_,lights_fragment_maps:M_,lights_fragment_end:S_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:T_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:A_,map_fragment:w_,map_pars_fragment:R_,map_particle_fragment:C_,map_particle_pars_fragment:I_,metalnessmap_fragment:P_,metalnessmap_pars_fragment:L_,morphinstance_vertex:D_,morphcolor_vertex:N_,morphnormal_vertex:U_,morphtarget_pars_vertex:F_,morphtarget_vertex:O_,normal_fragment_begin:B_,normal_fragment_maps:z_,normal_pars_fragment:k_,normal_pars_vertex:H_,normal_vertex:V_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:W_,clearcoat_normal_fragment_maps:X_,clearcoat_pars_fragment:q_,iridescence_pars_fragment:Y_,opaque_fragment:Z_,packing:K_,premultiplied_alpha_fragment:$_,project_vertex:J_,dithering_fragment:j_,dithering_pars_fragment:Q_,roughnessmap_fragment:ex,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:sx,shadowmask_pars_fragment:rx,skinbase_vertex:ox,skinning_pars_vertex:ax,skinning_vertex:cx,skinnormal_vertex:lx,specularmap_fragment:ux,specularmap_pars_fragment:hx,tonemapping_fragment:fx,tonemapping_pars_fragment:dx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:_x,uv_vertex:xx,worldpos_vertex:vx,background_vert:yx,background_frag:Mx,backgroundCube_vert:Sx,backgroundCube_frag:bx,cube_vert:Tx,cube_frag:Ex,depth_vert:Ax,depth_frag:wx,distanceRGBA_vert:Rx,distanceRGBA_frag:Cx,equirect_vert:Ix,equirect_frag:Px,linedashed_vert:Lx,linedashed_frag:Dx,meshbasic_vert:Nx,meshbasic_frag:Ux,meshlambert_vert:Fx,meshlambert_frag:Ox,meshmatcap_vert:Bx,meshmatcap_frag:zx,meshnormal_vert:kx,meshnormal_frag:Hx,meshphong_vert:Vx,meshphong_frag:Gx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:Zx,points_frag:Kx,shadow_vert:$x,shadow_frag:Jx,sprite_vert:jx,sprite_frag:Qx},Fe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ii={basic:{uniforms:un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:un([Fe.points,Fe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:un([Fe.common,Fe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:un([Fe.sprite,Fe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:un([Fe.common,Fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:un([Fe.lights,Fe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ii.physical={uniforms:un([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ca={r:0,b:0,g:0},bs=new ai,ev=new je;function tv(i,e,t,n,s,r,o){let a=new Oe(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,_=g(y);_===null?d(a,c):_&&_.isColor&&(d(_,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===ja)?(u===void 0&&(u=new dt(new $n(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:br(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),bs.copy(v.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(bs)),u.material.toneMapped=ot.getTransfer(_.colorSpace)!==_t,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new dt(new Tr(2,2),new wt({name:"BackgroundMaterial",uniforms:br(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ot.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,v){y.getRGB(ca,Kd(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(a,c)},render:x,addToRenderList:m}}function nv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,L,k,H,j){let le=!1,ne=h(H,k,L);r!==ne&&(r=ne,l(r.object)),le=p(S,H,k,j),le&&g(S,H,k,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,_(S,L,k,H),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,L,k){let H=k.wireframe===!0,j=n[S.id];j===void 0&&(j={},n[S.id]=j);let le=j[L.id];le===void 0&&(le={},j[L.id]=le);let ne=le[H];return ne===void 0&&(ne=f(c()),le[H]=ne),ne}function f(S){let L=[],k=[],H=[];for(let j=0;j<t;j++)L[j]=0,k[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,L,k,H){let j=r.attributes,le=L.attributes,ne=0,pe=k.getAttributes();for(let ee in pe)if(pe[ee].location>=0){let we=j[ee],Re=le[ee];if(Re===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),we===void 0||we.attribute!==Re||Re&&we.data!==Re.data)return!0;ne++}return r.attributesNum!==ne||r.index!==H}function g(S,L,k,H){let j={},le=L.attributes,ne=0,pe=k.getAttributes();for(let ee in pe)if(pe[ee].location>=0){let we=le[ee];we===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(we=S.instanceColor));let Re={};Re.attribute=we,we&&we.data&&(Re.data=we.data),j[ee]=Re,ne++}r.attributes=j,r.attributesNum=ne,r.index=H}function x(){let S=r.newAttributes;for(let L=0,k=S.length;L<k;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){let k=r.newAttributes,H=r.enabledAttributes,j=r.attributeDivisors;k[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),j[S]!==L&&(i.vertexAttribDivisor(S,L),j[S]=L)}function y(){let S=r.newAttributes,L=r.enabledAttributes;for(let k=0,H=L.length;k<H;k++)L[k]!==S[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function v(S,L,k,H,j,le,ne){ne===!0?i.vertexAttribIPointer(S,L,k,j,le):i.vertexAttribPointer(S,L,k,H,j,le)}function _(S,L,k,H){x();let j=H.attributes,le=k.getAttributes(),ne=L.defaultAttributeValues;for(let pe in le){let ee=le[pe];if(ee.location>=0){let fe=j[pe];if(fe===void 0&&(pe==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),pe==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){let we=fe.normalized,Re=fe.itemSize,te=e.get(fe);if(te===void 0)continue;let _e=te.buffer,K=te.type,X=te.bytesPerElement,oe=K===i.INT||K===i.UNSIGNED_INT||fe.gpuType===Uu;if(fe.isInterleavedBufferAttribute){let D=fe.data,V=D.stride,J=fe.offset;if(D.isInstancedInterleavedBuffer){for(let re=0;re<ee.locationSize;re++)d(ee.location+re,D.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let re=0;re<ee.locationSize;re++)m(ee.location+re);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let re=0;re<ee.locationSize;re++)v(ee.location+re,Re/ee.locationSize,K,we,V*X,(J+Re/ee.locationSize*re)*X,oe)}else{if(fe.isInstancedBufferAttribute){for(let D=0;D<ee.locationSize;D++)d(ee.location+D,fe.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let D=0;D<ee.locationSize;D++)m(ee.location+D);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let D=0;D<ee.locationSize;D++)v(ee.location+D,Re/ee.locationSize,K,we,Re*X,Re/ee.locationSize*D*X,oe)}}else if(ne!==void 0){let we=ne[pe];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(ee.location,we);break;case 3:i.vertexAttrib3fv(ee.location,we);break;case 4:i.vertexAttrib4fv(ee.location,we);break;default:i.vertexAttrib1fv(ee.location,we)}}}}y()}function A(){C();for(let S in n){let L=n[S];for(let k in L){let H=L[k];for(let j in H)u(H[j].object),delete H[j];delete L[k]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let k in L){let H=L[k];for(let j in H)u(H[j].object),delete H[j];delete L[k]}delete n[S.id]}function E(S){for(let L in n){let k=n[L];if(k[S.id]===void 0)continue;let H=k[S.id];for(let j in H)u(H[j].object),delete H[j];delete k[S.id]}}function C(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function iv(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==wi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Zn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function rv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Mi,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:n,v=y*4,_=d.clippingState||null;c.value=_,_=u(g,f,v,p);for(let A=0;A!==v;++A)_[A]=t[A];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=p;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ov(i){let e=new WeakMap;function t(o,a){return a===Sl?o.mapping=mr:a===bl&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sl||a===bl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new tu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qi=class extends La{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cr=4,kf=[.125,.215,.35,.446,.526,.582],As=20,nl=new Qi,Hf=new Oe,il=null,sl=0,rl=0,ol=!1,Es=(1+Math.sqrt(5))/2,tr=1/Es,Vf=[new O(-Es,tr,0),new O(Es,tr,0),new O(-tr,0,Es),new O(tr,0,Es),new O(0,Es,-tr),new O(0,Es,tr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:En,format:Nn,colorSpace:sn,depthBuffer:!1},s=Gf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(r)),this._blurMaterial=cv(r,e,t)}return s}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,s){let a=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Hf),u.toneMapping=Ji,u.autoClear=!1;let p=new Ht({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new dt(new $n,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Hf),x=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let v=this._cubeSize;la(s,y*v,d>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mr||e.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;la(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,nl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vf[(s-r-1)%Vf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new dt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*As-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):As;m>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let d=[],y=0;for(let E=0;E<As;++E){let C=E/x,M=Math.exp(-C*C/2);d.push(M),E===0?y+=M:E<m&&(y+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[s],A=3*_*(s>v-cr?s-v+cr:0),T=4*(this._cubeSize-_);la(t,A,T,3*_,2*_),c.setRenderTarget(t),c.render(h,nl)}};function av(i){let e=[],t=[],n=[],s=i,r=i-cr+1+kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-cr?c=kf[o-i+cr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,y=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let T=0;T<p;T++){let E=T%3*2/3-1,C=T>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(M,x*g*T),v.set(f,m*g*T);let S=[T,T,T,T,T,T];_.set(S,d*g*T)}let A=new pt;A.setAttribute("position",new ct(y,x)),A.setAttribute("uv",new ct(v,m)),A.setAttribute("faceIndex",new ct(_,d)),e.push(A),s>cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gf(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cv(i,e,t){let n=new Float32Array(As),s=new O(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wf(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Xf(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Sl||c===bl,u=c===mr||c===gr;if(l||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Er(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Er(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hv(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let v=0,_=y.length;v<_;v+=3){let A=y[v+0],T=y[v+1],E=y[v+2];f.push(A,T,T,E,E,A)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let A=v+0,T=v+1,E=v+2;f.push(A,T,T,E,E,A)}}else return;let m=new(Yd(f)?Pa:Ia)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function fv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*x[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function dv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pv(i,e,t){let n=new WeakMap,s=new ft;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*A*4*h),E=new Ra(T,_,A,h);E.type=Zn,E.needsUpdate=!0;let C=v*4;for(let S=0;S<h;S++){let L=m[S],k=d[S],H=y[S],j=_*A*4*S;for(let le=0;le<L.count;le++){let ne=le*C;p===!0&&(s.fromBufferAttribute(L,le),T[j+ne+0]=s.x,T[j+ne+1]=s.y,T[j+ne+2]=s.z,T[j+ne+3]=0),g===!0&&(s.fromBufferAttribute(k,le),T[j+ne+4]=s.x,T[j+ne+5]=s.y,T[j+ne+6]=s.z,T[j+ne+7]=0),x===!0&&(s.fromBufferAttribute(H,le),T[j+ne+8]=s.x,T[j+ne+9]=s.y,T[j+ne+10]=s.z,T[j+ne+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new Ge(_,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function mv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Na=class extends Yt{constructor(e,t,n,s,r,o,a,c,l,u=ur){if(u!==ur&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=ws),n===void 0&&u===xr&&(n=_r),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jd=new Yt,qf=new Na(1,1),jd=new Ra,Qd=new Ql,ep=new Da,Yf=[],Zf=[],Kf=new Float32Array(16),$f=new Float32Array(9),Jf=new Float32Array(4);function Dr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yf[s];if(r===void 0&&(r=new Float32Array(s),Yf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=Zf[e];t===void 0&&(t=new Int32Array(e),Zf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function yv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Jf.set(n),i.uniformMatrix2fv(this.addr,!1,Jf),Gt(t,n)}}function Mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;$f.set(n),i.uniformMatrix3fv(this.addr,!1,$f),Gt(t,n)}}function Sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Kf.set(n),i.uniformMatrix4fv(this.addr,!1,Kf),Gt(t,n)}}function bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function Pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qf.compareFunction=Xd,r=qf):r=Jd,t.setTexture2D(e||r,s)}function Lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qd,s)}function Dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ep,s)}function Nv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jd,s)}function Uv(i){switch(i){case 5126:return gv;case 35664:return _v;case 35665:return xv;case 35666:return vv;case 35674:return yv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return Tv;case 35668:case 35672:return Ev;case 35669:case 35673:return Av;case 5125:return wv;case 36294:return Rv;case 36295:return Cv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Fv(i,e){i.uniform1fv(this.addr,e)}function Ov(i,e){let t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bv(i,e){let t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function zv(i,e){let t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function kv(i,e){let t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){let t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vv(i,e){let t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gv(i,e){i.uniform1iv(this.addr,e)}function Wv(i,e){i.uniform2iv(this.addr,e)}function Xv(i,e){i.uniform3iv(this.addr,e)}function qv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function Zv(i,e){i.uniform2uiv(this.addr,e)}function Kv(i,e){i.uniform3uiv(this.addr,e)}function $v(i,e){i.uniform4uiv(this.addr,e)}function Jv(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jd,r[o])}function jv(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qd,r[o])}function Qv(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ep,r[o])}function ey(i,e,t){let n=this.cache,s=e.length,r=tc(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jd,r[o])}function ty(i){switch(i){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return Zv;case 36295:return Kv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ey}}var nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}},iu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function jf(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){let n=i.name,s=n.length;for(al.lastIndex=0;;){let r=al.exec(n),o=al.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jf(t,l===void 0?new nu(a,i,e):new iu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new su(a),jf(t,h)),t=h}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ny(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Qf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iy=37297,sy=0;function ry(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ed=new it;function oy(i){ot._getMatrix(ed,ot.workingColorSpace,i);let e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case ec:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ry(i.getShaderSource(e),o)}else return s}function ay(i,e){let t=oy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cy(i,e){let t;switch(e){case Cu:t="Linear";break;case Iu:t="Reinhard";break;case Pu:t="Cineon";break;case bo:t="ACESFilmic";break;case Lu:t="AgX";break;case Du:t="Neutral";break;case T0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ua=new O;function ly(){ot.getLuminanceCoefficients(ua);let i=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function hy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ao(i){return i!==""}function nd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(i){return i.replace(dy,my)}var py=new Map;function my(i,e){let t=st[e];if(t===void 0){let n=py.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ru(t)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(gy,_y)}function _y(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function vy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===gr&&(e="ENVMAP_MODE_REFRACTION"),e}function My(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case b0:e="ENVMAP_BLENDING_ADD";break}return e}function Sy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function by(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=xy(t),l=vy(t),u=yy(t),h=My(t),f=Sy(t),p=uy(t),g=hy(r),x=s.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(m=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?st.tonemapping_pars_fragment:"",t.toneMapping!==Ji?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),ly(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=ru(o),o=nd(o,t),o=id(o,t),a=ru(a),a=nd(a,t),a=id(a,t),o=sd(o),a=sd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=y+m+o,_=y+d+a,A=Qf(s,s.VERTEX_SHADER,v),T=Qf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(L){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(A).trim(),j=s.getShaderInfoLog(T).trim(),le=!0,ne=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,T);else{let pe=td(s,A,"vertex"),ee=td(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+pe+`
`+ee)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||j==="")&&(ne=!1);ne&&(L.diagnostics={runnable:le,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(A),s.deleteShader(T),C=new fr(s,x),M=fy(s,x)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,iy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}var Ty=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new au(e),t.set(e,n)),n}},au=class{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}};function Ey(i,e,t,n,s,r,o){let a=new Ca,c=new ou,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,k,H){let j=k.fog,le=H.geometry,ne=M.isMeshStandardMaterial?k.environment:null,pe=(M.isMeshStandardMaterial?t:e).get(M.envMap||ne),ee=pe&&pe.mapping===ja?pe.image.height:null,fe=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let we=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Re=we!==void 0?we.length:0,te=0;le.morphAttributes.position!==void 0&&(te=1),le.morphAttributes.normal!==void 0&&(te=2),le.morphAttributes.color!==void 0&&(te=3);let _e,K,X,oe;if(fe){let $=ii[fe];_e=$.vertexShader,K=$.fragmentShader}else _e=M.vertexShader,K=M.fragmentShader,c.update(M),X=c.getVertexShaderID(M),oe=c.getFragmentShaderID(M);let D=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),J=H.isInstancedMesh===!0,re=H.isBatchedMesh===!0,xe=!!M.map,ce=!!M.matcap,Se=!!pe,F=!!M.aoMap,$e=!!M.lightMap,Be=!!M.bumpMap,De=!!M.normalMap,Ee=!!M.displacementMap,Ve=!!M.emissiveMap,Ne=!!M.metalnessMap,I=!!M.roughnessMap,b=M.anisotropy>0,G=M.clearcoat>0,ue=M.dispersion>0,me=M.iridescence>0,ae=M.sheen>0,Te=M.transmission>0,Ie=b&&!!M.anisotropyMap,ye=G&&!!M.clearcoatMap,He=G&&!!M.clearcoatNormalMap,ge=G&&!!M.clearcoatRoughnessMap,Pe=me&&!!M.iridescenceMap,We=me&&!!M.iridescenceThicknessMap,Xe=ae&&!!M.sheenColorMap,he=ae&&!!M.sheenRoughnessMap,Le=!!M.specularMap,de=!!M.specularColorMap,Ae=!!M.specularIntensityMap,B=Te&&!!M.transmissionMap,ve=Te&&!!M.thicknessMap,R=!!M.gradientMap,P=!!M.alphaMap,U=M.alphaTest>0,W=!!M.alphaHash,N=!!M.extensions,z=Ji;M.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(z=i.toneMapping);let Z={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:K,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:re,batchingColor:re&&H._colorsTexture!==null,instancing:J,instancingColor:J&&H.instanceColor!==null,instancingMorph:J&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:sn,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:ce,envMap:Se,envMapMode:Se&&pe.mapping,envMapCubeUVHeight:ee,aoMap:F,lightMap:$e,bumpMap:Be,normalMap:De,displacementMap:f&&Ee,emissiveMap:Ve,normalMapObjectSpace:De&&M.normalMapType===C0,normalMapTangentSpace:De&&M.normalMapType===Wd,metalnessMap:Ne,roughnessMap:I,anisotropy:b,anisotropyMap:Ie,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:He,clearcoatRoughnessMap:ge,dispersion:ue,iridescence:me,iridescenceMap:Pe,iridescenceThicknessMap:We,sheen:ae,sheenColorMap:Xe,sheenRoughnessMap:he,specularMap:Le,specularColorMap:de,specularIntensityMap:Ae,transmission:Te,transmissionMap:B,thicknessMap:ve,gradientMap:R,opaque:M.transparent===!1&&M.blending===lr&&M.alphaToCoverage===!1,alphaMap:P,alphaTest:U,alphaHash:W,combine:M.combine,mapUv:xe&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:$e&&x(M.lightMap.channel),bumpMapUv:Be&&x(M.bumpMap.channel),normalMapUv:De&&x(M.normalMap.channel),displacementMapUv:Ee&&x(M.displacementMap.channel),emissiveMapUv:Ve&&x(M.emissiveMap.channel),metalnessMapUv:Ne&&x(M.metalnessMap.channel),roughnessMapUv:I&&x(M.roughnessMap.channel),anisotropyMapUv:Ie&&x(M.anisotropyMap.channel),clearcoatMapUv:ye&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:We&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(M.sheenRoughnessMap.channel),specularMapUv:Le&&x(M.specularMap.channel),specularColorMapUv:de&&x(M.specularColorMap.channel),specularIntensityMapUv:Ae&&x(M.specularIntensityMap.channel),transmissionMapUv:B&&x(M.transmissionMap.channel),thicknessMapUv:ve&&x(M.thicknessMap.channel),alphaMapUv:P&&x(M.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(De||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!le.attributes.uv&&(xe||P),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:V,skinning:H.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:z,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:Ve&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:N&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&M.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Z.vertexUv1s=l.has(1),Z.vertexUv2s=l.has(2),Z.vertexUv3s=l.has(3),l.clear(),Z}function d(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let S=g[M.type],L;if(S){let k=ii[S];L=os.clone(k.uniforms)}else L=M.uniforms;return L}function A(M,S){let L;for(let k=0,H=u.length;k<H;k++){let j=u[k];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new by(i,S,M,r),u.push(L)),L}function T(M){if(--M.usedTimes===0){let S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function Ay(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function wy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||wy),n.length>1&&n.sort(f||od),s.length>1&&s.sort(f||od)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Ry(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ad,i.set(n,[o])):s>=r.length?(o=new ad,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Oe};break;case"SpotLight":t={position:new O,direction:new O,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Iy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Py=0;function Ly(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dy(i){let e=new Cy,t=Iy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new je,o=new je;function a(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,y=0,v=0,_=0,A=0,T=0,E=0;l.sort(Ly);for(let M=0,S=l.length;M<S;M++){let L=l[M],k=L.color,H=L.intensity,j=L.distance,le=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*H,h+=k.g*H,f+=k.b*H;else if(L.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(L.sh.coefficients[ne],H);E++}else if(L.isDirectionalLight){let ne=e.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let pe=L.shadow,ee=t.get(L);ee.shadowIntensity=pe.intensity,ee.shadowBias=pe.bias,ee.shadowNormalBias=pe.normalBias,ee.shadowRadius=pe.radius,ee.shadowMapSize=pe.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=le,n.directionalShadowMatrix[p]=L.shadow.matrix,y++}n.directional[p]=ne,p++}else if(L.isSpotLight){let ne=e.get(L);ne.position.setFromMatrixPosition(L.matrixWorld),ne.color.copy(k).multiplyScalar(H),ne.distance=j,ne.coneCos=Math.cos(L.angle),ne.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ne.decay=L.decay,n.spot[x]=ne;let pe=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,pe.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=pe.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=pe.intensity,ee.shadowBias=pe.bias,ee.shadowNormalBias=pe.normalBias,ee.shadowRadius=pe.radius,ee.shadowMapSize=pe.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=le,_++}x++}else if(L.isRectAreaLight){let ne=e.get(L);ne.color.copy(k).multiplyScalar(H),ne.halfWidth.set(L.width*.5,0,0),ne.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=ne,m++}else if(L.isPointLight){let ne=e.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity),ne.distance=L.distance,ne.decay=L.decay,L.castShadow){let pe=L.shadow,ee=t.get(L);ee.shadowIntensity=pe.intensity,ee.shadowBias=pe.bias,ee.shadowNormalBias=pe.normalBias,ee.shadowRadius=pe.radius,ee.shadowMapSize=pe.mapSize,ee.shadowCameraNear=pe.camera.near,ee.shadowCameraFar=pe.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=le,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=ne,g++}else if(L.isHemisphereLight){let ne=e.get(L);ne.skyColor.copy(L.color).multiplyScalar(H),ne.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[d]=ne,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=A,C.numLightProbes=E,n.version=Py++)}function c(l,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){let v=l[d];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function cd(i){let e=new Dy(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ny(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new cd(i),e.set(s,[a])):r>=o.length?(a=new cd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var cu=class extends mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lu=class extends mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Oy(i,e,t){let n=new _o,s=new Ge,r=new Ge,o=new ft,a=new cu({depthPacking:R0}),c=new lu,l={},u=t.maxTextureSize,h={[oi]:qt,[qt]:oi,[Jt]:Jt},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Uy,fragmentShader:Fy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let d=this.type;this.render=function(T,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ri),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=d!==yi&&this.type===yi,j=d===yi&&this.type!==yi;for(let le=0,ne=T.length;le<ne;le++){let pe=T[le],ee=pe.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let fe=ee.getFrameExtents();if(s.multiply(fe),r.copy(ee.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,ee.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,ee.mapSize.y=r.y)),ee.map===null||H===!0||j===!0){let Re=this.type!==yi?{minFilter:nn,magFilter:nn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new jt(s.x,s.y,Re),ee.map.texture.name=pe.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();let we=ee.getViewportCount();for(let Re=0;Re<we;Re++){let te=ee.getViewport(Re);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),k.viewport(o),ee.updateMatrices(pe,Re),n=ee.getFrustum(),_(E,C,ee.camera,pe,this.type)}ee.isPointLightShadow!==!0&&this.type===yi&&y(ee,C),ee.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,L)};function y(T,E){let C=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,C,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,C,p,x,null)}function v(T,E,C,M){let S=null,L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=S.uuid,H=E.uuid,j=l[k];j===void 0&&(j={},l[k]=j);let le=j[H];le===void 0&&(le=S.clone(),j[H]=le,E.addEventListener("dispose",A)),S=le}if(S.visible=E.visible,S.wireframe=E.wireframe,M===yi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=i.properties.get(S);k.light=C}return S}function _(T,E,C,M,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===yi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let H=e.update(T),j=T.material;if(Array.isArray(j)){let le=H.groups;for(let ne=0,pe=le.length;ne<pe;ne++){let ee=le[ne],fe=j[ee.materialIndex];if(fe&&fe.visible){let we=v(T,fe,M,S);T.onBeforeShadow(i,T,E,C,H,we,ee),i.renderBufferDirect(C,null,H,we,T,ee),T.onAfterShadow(i,T,E,C,H,we,ee)}}}else if(j.visible){let le=v(T,j,M,S);T.onBeforeShadow(i,T,E,C,H,le,null),i.renderBufferDirect(C,null,H,le,T,null),T.onAfterShadow(i,T,E,C,H,le,null)}}let k=T.children;for(let H=0,j=k.length;H<j;H++)_(k[H],E,C,M,S)}function A(T){T.target.removeEventListener("dispose",A);for(let C in l){let M=l[C],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var By={[ml]:gl,[_l]:yl,[xl]:Ml,[pr]:vl,[gl]:ml,[yl]:_l,[Ml]:xl,[vl]:pr};function zy(i,e){function t(){let B=!1,ve=new ft,R=null,P=new ft(0,0,0,0);return{setMask:function(U){R!==U&&!B&&(i.colorMask(U,U,U,U),R=U)},setLocked:function(U){B=U},setClear:function(U,W,N,z,Z){Z===!0&&(U*=z,W*=z,N*=z),ve.set(U,W,N,z),P.equals(ve)===!1&&(i.clearColor(U,W,N,z),P.copy(ve))},reset:function(){B=!1,R=null,P.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,R=null,P=null,U=null;return{setReversed:function(W){if(ve!==W){let N=e.get("EXT_clip_control");ve?N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT):N.clipControlEXT(N.LOWER_LEFT_EXT,N.NEGATIVE_ONE_TO_ONE_EXT);let z=U;U=null,this.setClear(z)}ve=W},getReversed:function(){return ve},setTest:function(W){W?D(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(W){R!==W&&!B&&(i.depthMask(W),R=W)},setFunc:function(W){if(ve&&(W=By[W]),P!==W){switch(W){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case yl:i.depthFunc(i.GREATER);break;case Ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}P=W}},setLocked:function(W){B=W},setClear:function(W){U!==W&&(ve&&(W=1-W),i.clearDepth(W),U=W)},reset:function(){B=!1,R=null,P=null,U=null,ve=!1}}}function s(){let B=!1,ve=null,R=null,P=null,U=null,W=null,N=null,z=null,Z=null;return{setTest:function($){B||($?D(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function($){ve!==$&&!B&&(i.stencilMask($),ve=$)},setFunc:function($,Q,Me){(R!==$||P!==Q||U!==Me)&&(i.stencilFunc($,Q,Me),R=$,P=Q,U=Me)},setOp:function($,Q,Me){(W!==$||N!==Q||z!==Me)&&(i.stencilOp($,Q,Me),W=$,N=Q,z=Me)},setLocked:function($){B=$},setClear:function($){Z!==$&&(i.clearStencil($),Z=$)},reset:function(){B=!1,ve=null,R=null,P=null,U=null,W=null,N=null,z=null,Z=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,y=null,v=null,_=null,A=null,T=null,E=new Oe(0,0,0),C=0,M=!1,S=null,L=null,k=null,H=null,j=null,le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,pe=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ne=pe>=1):ee.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ne=pe>=2);let fe=null,we={},Re=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),_e=new ft().fromArray(Re),K=new ft().fromArray(te);function X(B,ve,R,P){let U=new Uint8Array(4),W=i.createTexture();i.bindTexture(B,W),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let N=0;N<R;N++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,P,0,i.RGBA,i.UNSIGNED_BYTE,U):i.texImage2D(ve+N,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,U);return W}let oe={};oe[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(i.DEPTH_TEST),o.setFunc(pr),Be(!1),De(uf),D(i.CULL_FACE),F(ri);function D(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function V(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function J(B,ve){return h[B]!==ve?(i.bindFramebuffer(B,ve),h[B]=ve,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function re(B,ve){let R=p,P=!1;if(B){R=f.get(ve),R===void 0&&(R=[],f.set(ve,R));let U=B.textures;if(R.length!==U.length||R[0]!==i.COLOR_ATTACHMENT0){for(let W=0,N=U.length;W<N;W++)R[W]=i.COLOR_ATTACHMENT0+W;R.length=U.length,P=!0}}else R[0]!==i.BACK&&(R[0]=i.BACK,P=!0);P&&i.drawBuffers(R)}function xe(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let ce={[Si]:i.FUNC_ADD,[o0]:i.FUNC_SUBTRACT,[a0]:i.FUNC_REVERSE_SUBTRACT};ce[c0]=i.MIN,ce[l0]=i.MAX;let Se={[u0]:i.ZERO,[Ru]:i.ONE,[h0]:i.SRC_COLOR,[pl]:i.SRC_ALPHA,[_0]:i.SRC_ALPHA_SATURATE,[m0]:i.DST_COLOR,[d0]:i.DST_ALPHA,[f0]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[g0]:i.ONE_MINUS_DST_COLOR,[p0]:i.ONE_MINUS_DST_ALPHA,[x0]:i.CONSTANT_COLOR,[v0]:i.ONE_MINUS_CONSTANT_COLOR,[y0]:i.CONSTANT_ALPHA,[M0]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,ve,R,P,U,W,N,z,Z,$){if(B===ri){x===!0&&(V(i.BLEND),x=!1);return}if(x===!1&&(D(i.BLEND),x=!0),B!==wu){if(B!==m||$!==M){if((d!==Si||_!==Si)&&(i.blendEquation(i.FUNC_ADD),d=Si,_=Si),$)switch(B){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.ONE,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ff:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ff:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,v=null,A=null,T=null,E.set(0,0,0),C=0,m=B,M=$}return}U=U||ve,W=W||R,N=N||P,(ve!==d||U!==_)&&(i.blendEquationSeparate(ce[ve],ce[U]),d=ve,_=U),(R!==y||P!==v||W!==A||N!==T)&&(i.blendFuncSeparate(Se[R],Se[P],Se[W],Se[N]),y=R,v=P,A=W,T=N),(z.equals(E)===!1||Z!==C)&&(i.blendColor(z.r,z.g,z.b,Z),E.copy(z),C=Z),m=B,M=!1}function $e(B,ve){B.side===Jt?V(i.CULL_FACE):D(i.CULL_FACE);let R=B.side===qt;ve&&(R=!R),Be(R),B.blending===lr&&B.transparent===!1?F(ri):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let P=B.stencilWrite;a.setTest(P),P&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ve(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function De(B){B!==s0?(D(i.CULL_FACE),B!==L&&(B===uf?i.cullFace(i.BACK):B===r0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),L=B}function Ee(B){B!==k&&(ne&&i.lineWidth(B),k=B)}function Ve(B,ve,R){B?(D(i.POLYGON_OFFSET_FILL),(H!==ve||j!==R)&&(i.polygonOffset(ve,R),H=ve,j=R)):V(i.POLYGON_OFFSET_FILL)}function Ne(B){B?D(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function I(B){B===void 0&&(B=i.TEXTURE0+le-1),fe!==B&&(i.activeTexture(B),fe=B)}function b(B,ve,R){R===void 0&&(fe===null?R=i.TEXTURE0+le-1:R=fe);let P=we[R];P===void 0&&(P={type:void 0,texture:void 0},we[R]=P),(P.type!==B||P.texture!==ve)&&(fe!==R&&(i.activeTexture(R),fe=R),i.bindTexture(B,ve||oe[B]),P.type=B,P.texture=ve)}function G(){let B=we[fe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(B){_e.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),_e.copy(B))}function he(B){K.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function Le(B,ve){let R=l.get(ve);R===void 0&&(R=new WeakMap,l.set(ve,R));let P=R.get(B);P===void 0&&(P=i.getUniformBlockIndex(ve,B.name),R.set(B,P))}function de(B,ve){let P=l.get(ve).get(B);c.get(ve)!==P&&(i.uniformBlockBinding(ve,P,B.__bindingPointIndex),c.set(ve,P))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,we={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,y=null,v=null,_=null,A=null,T=null,E=new Oe(0,0,0),C=0,M=!1,S=null,L=null,k=null,H=null,j=null,_e.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:V,bindFramebuffer:J,drawBuffers:re,useProgram:xe,setBlending:F,setMaterial:$e,setFlipSided:Be,setCullFace:De,setLineWidth:Ee,setPolygonOffset:Ve,setScissorTest:Ne,activeTexture:I,bindTexture:b,unbindTexture:G,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Pe,texImage3D:We,updateUBOMapping:Le,uniformBlockBinding:de,texStorage2D:He,texStorage3D:ge,texSubImage2D:ae,texSubImage3D:Te,compressedTexSubImage2D:Ie,compressedTexSubImage3D:ye,scissor:Xe,viewport:he,reset:Ae}}function ld(i,e,t,n){let s=ky(n);switch(t){case Od:return i*e;case zd:return i*e;case kd:return i*e*2;case Bu:return i*e/s.components*s.byteLength;case zu:return i*e/s.components*s.byteLength;case Hd:return i*e*2/s.components*s.byteLength;case ku:return i*e*2/s.components*s.byteLength;case Bd:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case Hu:return i*e*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:case wl:return Math.max(i,16)*Math.max(e,8)/4;case Tl:case Al:return Math.max(i,8)*Math.max(e,8)/2;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vd:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ky(i){switch(i){case wi:case Nd:return{byteLength:1,components:1};case mo:case Ud:case En:return{byteLength:2,components:1};case Fu:case Ou:return{byteLength:2,components:4};case ws:case Uu:case Zn:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return p?new OffscreenCanvas(I,b):go("canvas")}function x(I,b,G){let ue=1,me=Ne(I);if((me.width>G||me.height>G)&&(ue=G/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ae=Math.floor(ue*me.width),Te=Math.floor(ue*me.height);h===void 0&&(h=g(ae,Te));let Ie=b?g(ae,Te):h;return Ie.width=ae,Ie.height=Te,Ie.getContext("2d").drawImage(I,0,0,ae,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ae+"x"+Te+")."),Ie}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,b,G,ue,me=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=b;if(b===i.RED&&(G===i.FLOAT&&(ae=i.R32F),G===i.HALF_FLOAT&&(ae=i.R16F),G===i.UNSIGNED_BYTE&&(ae=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.R8UI),G===i.UNSIGNED_SHORT&&(ae=i.R16UI),G===i.UNSIGNED_INT&&(ae=i.R32UI),G===i.BYTE&&(ae=i.R8I),G===i.SHORT&&(ae=i.R16I),G===i.INT&&(ae=i.R32I)),b===i.RG&&(G===i.FLOAT&&(ae=i.RG32F),G===i.HALF_FLOAT&&(ae=i.RG16F),G===i.UNSIGNED_BYTE&&(ae=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RG8UI),G===i.UNSIGNED_SHORT&&(ae=i.RG16UI),G===i.UNSIGNED_INT&&(ae=i.RG32UI),G===i.BYTE&&(ae=i.RG8I),G===i.SHORT&&(ae=i.RG16I),G===i.INT&&(ae=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),G===i.UNSIGNED_INT&&(ae=i.RGB32UI),G===i.BYTE&&(ae=i.RGB8I),G===i.SHORT&&(ae=i.RGB16I),G===i.INT&&(ae=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),G===i.UNSIGNED_INT&&(ae=i.RGBA32UI),G===i.BYTE&&(ae=i.RGBA8I),G===i.SHORT&&(ae=i.RGBA16I),G===i.INT&&(ae=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),b===i.RGBA){let Te=me?ec:ot.getTransfer(ue);G===i.FLOAT&&(ae=i.RGBA32F),G===i.HALF_FLOAT&&(ae=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ae=Te===_t?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function _(I,b){let G;return I?b===null||b===ws||b===_r?G=i.DEPTH24_STENCIL8:b===Zn?G=i.DEPTH32F_STENCIL8:b===mo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ws||b===_r?G=i.DEPTH_COMPONENT24:b===Zn?G=i.DEPTH_COMPONENT32F:b===mo&&(G=i.DEPTH_COMPONENT16),G}function A(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==nn&&I.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function T(I){let b=I.target;b.removeEventListener("dispose",T),C(b),b.isVideoTexture&&u.delete(b)}function E(I){let b=I.target;b.removeEventListener("dispose",E),S(b)}function C(I){let b=n.get(I);if(b.__webglInit===void 0)return;let G=I.source,ue=f.get(G);if(ue){let me=ue[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&M(I),Object.keys(ue).length===0&&f.delete(G)}n.remove(I)}function M(I){let b=n.get(I);i.deleteTexture(b.__webglTexture);let G=I.source,ue=f.get(G);delete ue[b.__cacheKey],o.memory.textures--}function S(I){let b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(b.__webglFramebuffer[ue]))for(let me=0;me<b.__webglFramebuffer[ue].length;me++)i.deleteFramebuffer(b.__webglFramebuffer[ue][me]);else i.deleteFramebuffer(b.__webglFramebuffer[ue]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ue])}else{if(Array.isArray(b.__webglFramebuffer))for(let ue=0;ue<b.__webglFramebuffer.length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[ue]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ue=0;ue<b.__webglColorRenderbuffer.length;ue++)b.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ue]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=I.textures;for(let ue=0,me=G.length;ue<me;ue++){let ae=n.get(G[ue]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(G[ue])}n.remove(I)}let L=0;function k(){L=0}function H(){let I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function j(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function le(I,b){let G=n.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let ue=I.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,I,b);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function ne(I,b){let G=n.get(I);if(I.version>0&&G.__version!==I.version){K(G,I,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function pe(I,b){let G=n.get(I);if(I.version>0&&G.__version!==I.version){K(G,I,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function ee(I,b){let G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let fe={[Ai]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},we={[nn]:i.NEAREST,[Nu]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},Re={[I0]:i.NEVER,[F0]:i.ALWAYS,[P0]:i.LESS,[Xd]:i.LEQUAL,[L0]:i.EQUAL,[U0]:i.GEQUAL,[D0]:i.GREATER,[N0]:i.NOTEQUAL};function te(I,b){if(b.type===Zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===co||b.magFilter===ar||b.magFilter===si||b.minFilter===pn||b.minFilter===co||b.minFilter===ar||b.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,fe[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,fe[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,fe[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,we[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,we[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==ar&&b.minFilter!==si||b.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function _e(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",T));let ue=b.source,me=f.get(ue);me===void 0&&(me={},f.set(ue,me));let ae=j(b);if(ae!==I.__cacheKey){me[ae]===void 0&&(me[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),me[ae].usedTimes++;let Te=me[I.__cacheKey];Te!==void 0&&(me[I.__cacheKey].usedTimes--,Te.usedTimes===0&&M(b)),I.__cacheKey=ae,I.__webglTexture=me[ae].texture}return G}function K(I,b,G){let ue=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=i.TEXTURE_3D);let me=_e(I,b),ae=b.source;t.bindTexture(ue,I.__webglTexture,i.TEXTURE0+G);let Te=n.get(ae);if(ae.version!==Te.__version||me===!0){t.activeTexture(i.TEXTURE0+G);let Ie=ot.getPrimaries(ot.workingColorSpace),ye=b.colorSpace===Zi?null:ot.getPrimaries(b.colorSpace),He=b.colorSpace===Zi||Ie===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ge=x(b.image,!1,s.maxTextureSize);ge=Ve(b,ge);let Pe=r.convert(b.format,b.colorSpace),We=r.convert(b.type),Xe=v(b.internalFormat,Pe,We,b.colorSpace,b.isVideoTexture);te(ue,b);let he,Le=b.mipmaps,de=b.isVideoTexture!==!0,Ae=Te.__version===void 0||me===!0,B=ae.dataReady,ve=A(b,ge);if(b.isDepthTexture)Xe=_(b.format===xr,b.type),Ae&&(de?t.texStorage2D(i.TEXTURE_2D,1,Xe,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Xe,ge.width,ge.height,0,Pe,We,null));else if(b.isDataTexture)if(Le.length>0){de&&Ae&&t.texStorage2D(i.TEXTURE_2D,ve,Xe,Le[0].width,Le[0].height);for(let R=0,P=Le.length;R<P;R++)he=Le[R],de?B&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,he.width,he.height,Pe,We,he.data):t.texImage2D(i.TEXTURE_2D,R,Xe,he.width,he.height,0,Pe,We,he.data);b.generateMipmaps=!1}else de?(Ae&&t.texStorage2D(i.TEXTURE_2D,ve,Xe,ge.width,ge.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Pe,We,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,ge.width,ge.height,0,Pe,We,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){de&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Xe,Le[0].width,Le[0].height,ge.depth);for(let R=0,P=Le.length;R<P;R++)if(he=Le[R],b.format!==Nn)if(Pe!==null)if(de){if(B)if(b.layerUpdates.size>0){let U=ld(he.width,he.height,b.format,b.type);for(let W of b.layerUpdates){let N=he.data.subarray(W*U/he.data.BYTES_PER_ELEMENT,(W+1)*U/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,W,he.width,he.height,1,Pe,N)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,he.width,he.height,ge.depth,Pe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,Xe,he.width,he.height,ge.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,he.width,he.height,ge.depth,Pe,We,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,R,Xe,he.width,he.height,ge.depth,0,Pe,We,he.data)}else{de&&Ae&&t.texStorage2D(i.TEXTURE_2D,ve,Xe,Le[0].width,Le[0].height);for(let R=0,P=Le.length;R<P;R++)he=Le[R],b.format!==Nn?Pe!==null?de?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,R,Xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?B&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,he.width,he.height,Pe,We,he.data):t.texImage2D(i.TEXTURE_2D,R,Xe,he.width,he.height,0,Pe,We,he.data)}else if(b.isDataArrayTexture)if(de){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Xe,ge.width,ge.height,ge.depth),B)if(b.layerUpdates.size>0){let R=ld(ge.width,ge.height,b.format,b.type);for(let P of b.layerUpdates){let U=ge.data.subarray(P*R/ge.data.BYTES_PER_ELEMENT,(P+1)*R/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,P,ge.width,ge.height,1,Pe,We,U)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,We,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,ge.width,ge.height,ge.depth,0,Pe,We,ge.data);else if(b.isData3DTexture)de?(Ae&&t.texStorage3D(i.TEXTURE_3D,ve,Xe,ge.width,ge.height,ge.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,We,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,ge.width,ge.height,ge.depth,0,Pe,We,ge.data);else if(b.isFramebufferTexture){if(Ae)if(de)t.texStorage2D(i.TEXTURE_2D,ve,Xe,ge.width,ge.height);else{let R=ge.width,P=ge.height;for(let U=0;U<ve;U++)t.texImage2D(i.TEXTURE_2D,U,Xe,R,P,0,Pe,We,null),R>>=1,P>>=1}}else if(Le.length>0){if(de&&Ae){let R=Ne(Le[0]);t.texStorage2D(i.TEXTURE_2D,ve,Xe,R.width,R.height)}for(let R=0,P=Le.length;R<P;R++)he=Le[R],de?B&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,Pe,We,he):t.texImage2D(i.TEXTURE_2D,R,Xe,Pe,We,he);b.generateMipmaps=!1}else if(de){if(Ae){let R=Ne(ge);t.texStorage2D(i.TEXTURE_2D,ve,Xe,R.width,R.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,We,ge)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Pe,We,ge);m(b)&&d(ue),Te.__version=ae.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function X(I,b,G){if(b.image.length!==6)return;let ue=_e(I,b),me=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let ae=n.get(me);if(me.version!==ae.__version||ue===!0){t.activeTexture(i.TEXTURE0+G);let Te=ot.getPrimaries(ot.workingColorSpace),Ie=b.colorSpace===Zi?null:ot.getPrimaries(b.colorSpace),ye=b.colorSpace===Zi||Te===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let He=b.isCompressedTexture||b.image[0].isCompressedTexture,ge=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let P=0;P<6;P++)!He&&!ge?Pe[P]=x(b.image[P],!0,s.maxCubemapSize):Pe[P]=ge?b.image[P].image:b.image[P],Pe[P]=Ve(b,Pe[P]);let We=Pe[0],Xe=r.convert(b.format,b.colorSpace),he=r.convert(b.type),Le=v(b.internalFormat,Xe,he,b.colorSpace),de=b.isVideoTexture!==!0,Ae=ae.__version===void 0||ue===!0,B=me.dataReady,ve=A(b,We);te(i.TEXTURE_CUBE_MAP,b);let R;if(He){de&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Le,We.width,We.height);for(let P=0;P<6;P++){R=Pe[P].mipmaps;for(let U=0;U<R.length;U++){let W=R[U];b.format!==Nn?Xe!==null?de?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U,0,0,W.width,W.height,Xe,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U,Le,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U,0,0,W.width,W.height,Xe,he,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U,Le,W.width,W.height,0,Xe,he,W.data)}}}else{if(R=b.mipmaps,de&&Ae){R.length>0&&ve++;let P=Ne(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Le,P.width,P.height)}for(let P=0;P<6;P++)if(ge){de?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Pe[P].width,Pe[P].height,Xe,he,Pe[P].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Le,Pe[P].width,Pe[P].height,0,Xe,he,Pe[P].data);for(let U=0;U<R.length;U++){let N=R[U].image[P].image;de?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U+1,0,0,N.width,N.height,Xe,he,N.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U+1,Le,N.width,N.height,0,Xe,he,N.data)}}else{de?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Xe,he,Pe[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Le,Xe,he,Pe[P]);for(let U=0;U<R.length;U++){let W=R[U];de?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U+1,0,0,Xe,he,W.image[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,U+1,Le,Xe,he,W.image[P])}}}m(b)&&d(i.TEXTURE_CUBE_MAP),ae.__version=me.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function oe(I,b,G,ue,me,ae){let Te=r.convert(G.format,G.colorSpace),Ie=r.convert(G.type),ye=v(G.internalFormat,Te,Ie,G.colorSpace),He=n.get(b),ge=n.get(G);if(ge.__renderTarget=b,!He.__hasExternalTextures){let Pe=Math.max(1,b.width>>ae),We=Math.max(1,b.height>>ae);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ae,ye,Pe,We,b.depth,0,Te,Ie,null):t.texImage2D(me,ae,ye,Pe,We,0,Te,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),De(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,me,ge.__webglTexture,0,Be(b)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,me,ge.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(I,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){let ue=b.depthTexture,me=ue&&ue.isDepthTexture?ue.type:null,ae=_(b.stencilBuffer,me),Te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=Be(b);De(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ae,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ae,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{let ue=b.textures;for(let me=0;me<ue.length;me++){let ae=ue[me],Te=r.convert(ae.format,ae.colorSpace),Ie=r.convert(ae.type),ye=v(ae.internalFormat,Te,Ie,ae.colorSpace),He=Be(b);G&&De(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ye,b.width,b.height):De(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ye,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ye,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ue=n.get(b.depthTexture);ue.__renderTarget=b,(!ue.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),le(b.depthTexture,0);let me=ue.__webglTexture,ae=Be(b);if(b.depthTexture.format===ur)De(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(b.depthTexture.format===xr)De(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function J(I){let b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let ue=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){let me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",me)};ue.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=ue}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");V(b.__webglFramebuffer,I)}else if(G){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=i.createRenderbuffer(),D(b.__webglDepthbuffer[ue],I,!1);else{let me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),D(b.__webglDepthbuffer,I,!1);else{let ue=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(I,b,G){let ue=n.get(I);b!==void 0&&oe(ue.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&J(I)}function xe(I){let b=I.texture,G=n.get(I),ue=n.get(b);I.addEventListener("dispose",E);let me=I.textures,ae=I.isWebGLCubeRenderTarget===!0,Te=me.length>1;if(Te||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=b.version,o.memory.textures++),ae){G.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[Ie]=[];for(let ye=0;ye<b.mipmaps.length;ye++)G.__webglFramebuffer[Ie][ye]=i.createFramebuffer()}else G.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)G.__webglFramebuffer[Ie]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Te)for(let Ie=0,ye=me.length;Ie<ye;Ie++){let He=n.get(me[Ie]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&De(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ie=0;Ie<me.length;Ie++){let ye=me[Ie];G.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Ie]);let He=r.convert(ye.format,ye.colorSpace),ge=r.convert(ye.type),Pe=v(ye.internalFormat,He,ge,ye.colorSpace,I.isXRRenderTarget===!0),We=Be(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Pe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,G.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),D(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),te(i.TEXTURE_CUBE_MAP,b);for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)oe(G.__webglFramebuffer[Ie][ye],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ye);else oe(G.__webglFramebuffer[Ie],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);m(b)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let Ie=0,ye=me.length;Ie<ye;Ie++){let He=me[Ie],ge=n.get(He);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),te(i.TEXTURE_2D,He),oe(G.__webglFramebuffer,I,He,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),m(He)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ue.__webglTexture),te(Ie,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)oe(G.__webglFramebuffer[ye],I,b,i.COLOR_ATTACHMENT0,Ie,ye);else oe(G.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,Ie,0);m(b)&&d(Ie),t.unbindTexture()}I.depthBuffer&&J(I)}function ce(I){let b=I.textures;for(let G=0,ue=b.length;G<ue;G++){let me=b[G];if(m(me)){let ae=y(I),Te=n.get(me).__webglTexture;t.bindTexture(ae,Te),d(ae),t.unbindTexture()}}}let Se=[],F=[];function $e(I){if(I.samples>0){if(De(I)===!1){let b=I.textures,G=I.width,ue=I.height,me=i.COLOR_BUFFER_BIT,ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(I),Ie=b.length>1;if(Ie)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);let He=n.get(b[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,G,ue,0,0,G,ue,me,i.NEAREST),c===!0&&(Se.length=0,F.length=0,Se.push(i.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Se.push(ae),F.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);let He=n.get(b[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Be(I){return Math.min(s.maxSamples,I.samples)}function De(I){let b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(I){let b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Ve(I,b){let G=I.colorSpace,ue=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==sn&&G!==Zi&&(ot.getTransfer(G)===_t?(ue!==Nn||me!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ne(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=pe,this.setTextureCube=ee,this.rebindTextures=re,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=De}function Vy(i,e){function t(n,s=Zi){let r,o=ot.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===Fu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ou)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.BYTE;if(n===Ud)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===Uu)return i.INT;if(n===ws)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Od)return i.ALPHA;if(n===Bd)return i.RGB;if(n===Nn)return i.RGBA;if(n===zd)return i.LUMINANCE;if(n===kd)return i.LUMINANCE_ALPHA;if(n===ur)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===Bu)return i.RED;if(n===zu)return i.RED_INTEGER;if(n===Hd)return i.RG;if(n===ku)return i.RG_INTEGER;if(n===Hu)return i.RGBA_INTEGER;if(n===Ma||n===Sa||n===ba||n===Ta)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===El||n===Al||n===wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Xl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vd||n===Yl||n===Zl||n===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var uu=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gy={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Yt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wt({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends ji{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,x=new hu,m=t.getContextAttributes(),d=null,y=null,v=[],_=[],A=new Ge,T=null,E=new kt;E.viewport=new ft;let C=new kt;C.viewport=new ft;let M=[E,C],S=new uu,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let X=v[K];return X===void 0&&(X=new ho,v[K]=X),X.getTargetRaySpace()},this.getControllerGrip=function(K){let X=v[K];return X===void 0&&(X=new ho,v[K]=X),X.getGripSpace()},this.getHand=function(K){let X=v[K];return X===void 0&&(X=new ho,v[K]=X),X.getHandSpace()};function H(K){let X=_.indexOf(K.inputSource);if(X===-1)return;let oe=v[X];oe!==void 0&&(oe.update(K.inputSource,K.frame,l||o),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",le);for(let K=0;K<v.length;K++){let X=_[K];X!==null&&(_[K]=null,v[K].disconnect(X))}L=null,k=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,y=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",j),s.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){let X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new jt(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,oe=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?xr:ur,oe=m.stencil?_r:ws);let V={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(V),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new jt(f.textureWidth,f.textureHeight,{format:Nn,type:wi,depthTexture:new Na(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function le(K){for(let X=0;X<K.removed.length;X++){let oe=K.removed[X],D=_.indexOf(oe);D>=0&&(_[D]=null,v[D].disconnect(oe))}for(let X=0;X<K.added.length;X++){let oe=K.added[X],D=_.indexOf(oe);if(D===-1){for(let J=0;J<v.length;J++)if(J>=_.length){_.push(oe),D=J;break}else if(_[J]===null){_[J]=oe,D=J;break}if(D===-1)break}let V=v[D];V&&V.connect(oe)}}let ne=new O,pe=new O;function ee(K,X,oe){ne.setFromMatrixPosition(X.matrixWorld),pe.setFromMatrixPosition(oe.matrixWorld);let D=ne.distanceTo(pe),V=X.projectionMatrix.elements,J=oe.projectionMatrix.elements,re=V[14]/(V[10]-1),xe=V[14]/(V[10]+1),ce=(V[9]+1)/V[5],Se=(V[9]-1)/V[5],F=(V[8]-1)/V[0],$e=(J[8]+1)/J[0],Be=re*F,De=re*$e,Ee=D/(-F+$e),Ve=Ee*-F;if(X.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ve),K.translateZ(Ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),V[10]===-1)K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Ne=re+Ee,I=xe+Ee,b=Be-Ve,G=De+(D-Ve),ue=ce*xe/I*Ne,me=Se*xe/I*Ne;K.projectionMatrix.makePerspective(b,G,ue,me,Ne,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,X){X===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(X.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let X=K.near,oe=K.far;x.texture!==null&&(x.depthNear>0&&(X=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),S.near=C.near=E.near=X,S.far=C.far=E.far=oe,(L!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,k=S.far),E.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,S.layers.mask=E.layers.mask|C.layers.mask;let D=K.parent,V=S.cameras;fe(S,D);for(let J=0;J<V.length;J++)fe(V[J],D);V.length===2?ee(S,E,C):S.projectionMatrix.copy(E.projectionMatrix),we(K,S,D)};function we(K,X,oe){oe===null?K.matrix.copy(X.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(X.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Re=null;function te(K,X){if(u=X.getViewerPose(l||o),g=X,u!==null){let oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let D=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,D=!0);for(let J=0;J<oe.length;J++){let re=oe[J],xe=null;if(p!==null)xe=p.getViewport(re);else{let Se=h.getViewSubImage(f,re);xe=Se.viewport,J===0&&(e.setRenderTargetTextures(y,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(y))}let ce=M[J];ce===void 0&&(ce=new kt,ce.layers.enable(J),ce.viewport=new ft,M[J]=ce),ce.matrix.fromArray(re.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(re.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(xe.x,xe.y,xe.width,xe.height),J===0&&(S.matrix.copy(ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),D===!0&&S.cameras.push(ce)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")){let J=h.getDepthInformation(oe[0]);J&&J.isValid&&J.texture&&x.init(e,J,s.renderState)}}for(let oe=0;oe<v.length;oe++){let D=_[oe],V=v[oe];D!==null&&V!==void 0&&V.update(D,X,l||o)}Re&&Re(K,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let _e=new $d;_e.setAnimationLoop(te),this.setAnimationLoop=function(K){Re=K},this.dispose=function(){}}},Ts=new ai,qy=new je;function Yy(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Kd(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,Ts.copy(_),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(Ts)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(y,A);let T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){let v=h();y.__bindingPointIndex=v;let _=i.createBuffer(),A=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],_=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,E=_.length;T<E;T++){let C=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,S=C.length;M<S;M++){let L=C[M];if(p(L,T,M,A)===!0){let k=L.__offset,H=Array.isArray(L.value)?L.value:[L.value],j=0;for(let le=0;le<H.length;le++){let ne=H[le],pe=x(ne);typeof ne=="number"||typeof ne=="boolean"?(L.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,k+j,L.__data)):ne.isMatrix3?(L.__data[0]=ne.elements[0],L.__data[1]=ne.elements[1],L.__data[2]=ne.elements[2],L.__data[3]=0,L.__data[4]=ne.elements[3],L.__data[5]=ne.elements[4],L.__data[6]=ne.elements[5],L.__data[7]=0,L.__data[8]=ne.elements[6],L.__data[9]=ne.elements[7],L.__data[10]=ne.elements[8],L.__data[11]=0):(ne.toArray(L.__data,j),j+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,_,A){let T=y.value,E=v+"_"+_;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{let C=A[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return A[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){let v=y.uniforms,_=0,A=16;for(let E=0,C=v.length;E<C;E++){let M=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,L=M.length;S<L;S++){let k=M[S],H=Array.isArray(k.value)?k.value:[k.value];for(let j=0,le=H.length;j<le;j++){let ne=H[j],pe=x(ne),ee=_%A,fe=ee%pe.boundary,we=ee+fe;_+=fe,we!==0&&A-we<pe.storage&&(_+=A-we),k.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=pe.storage}}}let T=_%A;return T>0&&(_+=A-T),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ua=class{constructor(e={}){let{canvas:t=Q0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=Ji,this.toneMappingExposure=1;let _=this,A=!1,T=0,E=0,C=null,M=-1,S=null,L=new ft,k=new ft,H=null,j=new Oe(0),le=0,ne=t.width,pe=t.height,ee=1,fe=null,we=null,Re=new ft(0,0,ne,pe),te=new ft(0,0,ne,pe),_e=!1,K=new _o,X=!1,oe=!1,D=new je,V=new je,J=new O,re=new ft,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function Se(){return C===null?ee:1}let F=n;function $e(w,q){return t.getContext(w,q)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",P,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",W,!1),F===null){let q="webgl2";if(F=$e(q,w),F===null)throw $e(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,De,Ee,Ve,Ne,I,b,G,ue,me,ae,Te,Ie,ye,He,ge,Pe,We,Xe,he,Le,de,Ae,B;function ve(){Be=new uv(F),Be.init(),de=new Vy(F,Be),De=new sv(F,Be,e,de),Ee=new zy(F,Be),De.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),Ve=new dv(F),Ne=new Ay,I=new Hy(F,Be,Ee,Ne,De,de,Ve),b=new ov(_),G=new lv(_),ue=new yg(F),Ae=new nv(F,ue),me=new hv(F,ue,Ve,Ae),ae=new mv(F,me,ue,Ve),Xe=new pv(F,De,I),ge=new rv(Ne),Te=new Ey(_,b,G,Be,De,Ae,ge),Ie=new Yy(_,Ne),ye=new Ry,He=new Ny(Be),We=new tv(_,b,G,Ee,ae,p,c),Pe=new Oy(_,ae,De),B=new Zy(F,Ve,De,Ee),he=new iv(F,Be,Ve),Le=new fv(F,Be,Ve),Ve.programs=Te.programs,_.capabilities=De,_.extensions=Be,_.properties=Ne,_.renderLists=ye,_.shadowMap=Pe,_.state=Ee,_.info=Ve}ve();let R=new fu(_,F);this.xr=R,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(ne,pe,!1))},this.getSize=function(w){return w.set(ne,pe)},this.setSize=function(w,q,ie=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,pe=q,t.width=Math.floor(w*ee),t.height=Math.floor(q*ee),ie===!0&&(t.style.width=w+"px",t.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(ne*ee,pe*ee).floor()},this.setDrawingBufferSize=function(w,q,ie){ne=w,pe=q,ee=ie,t.width=Math.floor(w*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Re)},this.setViewport=function(w,q,ie,se){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,q,ie,se),Ee.viewport(L.copy(Re).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,q,ie,se){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,q,ie,se),Ee.scissor(k.copy(te).multiplyScalar(ee).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){Ee.setScissorTest(_e=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(w=!0,q=!0,ie=!0){let se=0;if(w){let Y=!1;if(C!==null){let Ce=C.texture.format;Y=Ce===Hu||Ce===ku||Ce===zu}if(Y){let Ce=C.texture.type,ke=Ce===wi||Ce===ws||Ce===mo||Ce===_r||Ce===Fu||Ce===Ou,Ye=We.getClearColor(),Ze=We.getClearAlpha(),Qe=Ye.r,nt=Ye.g,Ke=Ye.b;ke?(g[0]=Qe,g[1]=nt,g[2]=Ke,g[3]=Ze,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Qe,x[1]=nt,x[2]=Ke,x[3]=Ze,F.clearBufferiv(F.COLOR,0,x))}else se|=F.COLOR_BUFFER_BIT}q&&(se|=F.DEPTH_BUFFER_BIT),ie&&(se|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",P,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",W,!1),ye.dispose(),He.dispose(),Ne.dispose(),b.dispose(),G.dispose(),ae.dispose(),Ae.dispose(),B.dispose(),Te.dispose(),R.dispose(),R.removeEventListener("sessionstart",ze),R.removeEventListener("sessionend",Ue),be.stop()};function P(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Ve.autoReset,q=Pe.enabled,ie=Pe.autoUpdate,se=Pe.needsUpdate,Y=Pe.type;ve(),Ve.autoReset=w,Pe.enabled=q,Pe.autoUpdate=ie,Pe.needsUpdate=se,Pe.type=Y}function W(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function N(w){let q=w.target;q.removeEventListener("dispose",N),z(q)}function z(w){Z(w),Ne.remove(w)}function Z(w){let q=Ne.get(w).programs;q!==void 0&&(q.forEach(function(ie){Te.releaseProgram(ie)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ie,se,Y,Ce){q===null&&(q=xe);let ke=Y.isMesh&&Y.matrixWorld.determinant()<0,Ye=zt(w,q,ie,se,Y);Ee.setMaterial(se,ke);let Ze=ie.index,Qe=1;if(se.wireframe===!0){if(Ze=me.getWireframeAttribute(ie),Ze===void 0)return;Qe=2}let nt=ie.drawRange,Ke=ie.attributes.position,ht=nt.start*Qe,Tt=(nt.start+nt.count)*Qe;Ce!==null&&(ht=Math.max(ht,Ce.start*Qe),Tt=Math.min(Tt,(Ce.start+Ce.count)*Qe)),Ze!==null?(ht=Math.max(ht,0),Tt=Math.min(Tt,Ze.count)):Ke!=null&&(ht=Math.max(ht,0),Tt=Math.min(Tt,Ke.count));let Ct=Tt-ht;if(Ct<0||Ct===1/0)return;Ae.setup(Y,se,Ye,ie,Ze);let dn,mt=he;if(Ze!==null&&(dn=ue.get(Ze),mt=Le,mt.setIndex(dn)),Y.isMesh)se.wireframe===!0?(Ee.setLineWidth(se.wireframeLinewidth*Se()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(Y.isLine){let Je=se.linewidth;Je===void 0&&(Je=1),Ee.setLineWidth(Je*Se()),Y.isLineSegments?mt.setMode(F.LINES):Y.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else Y.isPoints?mt.setMode(F.POINTS):Y.isSprite&&mt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)mt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Je=Y._multiDrawStarts,di=Y._multiDrawCounts,gt=Y._multiDrawCount,Gn=Ze?ue.get(Ze).bytesPerElement:1,Hs=Ne.get(se).currentProgram.getUniforms();for(let yn=0;yn<gt;yn++)Hs.setValue(F,"_gl_DrawID",yn),mt.render(Je[yn]/Gn,di[yn])}else if(Y.isInstancedMesh)mt.renderInstances(ht,Ct,Y.count);else if(ie.isInstancedBufferGeometry){let Je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,di=Math.min(ie.instanceCount,Je);mt.renderInstances(ht,Ct,di)}else mt.render(ht,Ct)};function $(w,q,ie){w.transparent===!0&&w.side===Jt&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,Rt(w,q,ie),w.side=oi,w.needsUpdate=!0,Rt(w,q,ie),w.side=Jt):Rt(w,q,ie)}this.compile=function(w,q,ie=null){ie===null&&(ie=w),d=He.get(ie),d.init(q),v.push(d),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),w!==ie&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();let se=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){let Ye=Ce[ke];$(Ye,ie,Y),se.add(Ye)}else $(Ce,ie,Y),se.add(Ce)}),v.pop(),d=null,se},this.compileAsync=function(w,q,ie=null){let se=this.compile(w,q,ie);return new Promise(Y=>{function Ce(){if(se.forEach(function(ke){Ne.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){Y(w);return}setTimeout(Ce,10)}Be.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Q=null;function Me(w){Q&&Q(w)}function ze(){be.stop()}function Ue(){be.start()}let be=new $d;be.setAnimationLoop(Me),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(w){Q=w,R.setAnimationLoop(w),w===null?be.stop():be.start()},R.addEventListener("sessionstart",ze),R.addEventListener("sessionend",Ue),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(q),q=R.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,q,C),d=He.get(w,v.length),d.init(q),v.push(d),V.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(V),oe=this.localClippingEnabled,X=ge.init(this.clippingPlanes,oe),m=ye.get(w,y.length),m.init(),y.push(m),R.enabled===!0&&R.isPresenting===!0){let Ce=_.xr.getDepthSensingMesh();Ce!==null&&qe(Ce,q,-1/0,_.sortObjects)}qe(w,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(fe,we),ce=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,ce&&We.addToRenderList(m,w),this.info.render.frame++,X===!0&&ge.beginShadows();let ie=d.state.shadowsArray;Pe.render(ie,w,q),X===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=m.opaque,Y=m.transmissive;if(d.setupLights(),q.isArrayCamera){let Ce=q.cameras;if(Y.length>0)for(let ke=0,Ye=Ce.length;ke<Ye;ke++){let Ze=Ce[ke];rt(se,Y,w,Ze)}ce&&We.render(w);for(let ke=0,Ye=Ce.length;ke<Ye;ke++){let Ze=Ce[ke];et(m,w,Ze,Ze.viewport)}}else Y.length>0&&rt(se,Y,w,q),ce&&We.render(w),et(m,w,q);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(_,w,q),Ae.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(d=v[v.length-1],X===!0&&ge.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function qe(w,q,ie,se){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){se&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);let ke=ae.update(w),Ye=w.material;Ye.visible&&m.push(w,ke,Ye,ie,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let ke=ae.update(w),Ye=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),re.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),re.copy(ke.boundingSphere.center)),re.applyMatrix4(w.matrixWorld).applyMatrix4(V)),Array.isArray(Ye)){let Ze=ke.groups;for(let Qe=0,nt=Ze.length;Qe<nt;Qe++){let Ke=Ze[Qe],ht=Ye[Ke.materialIndex];ht&&ht.visible&&m.push(w,ke,ht,ie,re.z,Ke)}}else Ye.visible&&m.push(w,ke,Ye,ie,re.z,null)}}let Ce=w.children;for(let ke=0,Ye=Ce.length;ke<Ye;ke++)qe(Ce[ke],q,ie,se)}function et(w,q,ie,se){let Y=w.opaque,Ce=w.transmissive,ke=w.transparent;d.setupLightsView(ie),X===!0&&ge.setGlobalState(_.clippingPlanes,ie),se&&Ee.viewport(L.copy(se)),Y.length>0&&lt(Y,q,ie),Ce.length>0&&lt(Ce,q,ie),ke.length>0&&lt(ke,q,ie),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function rt(w,q,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[se.id]===void 0&&(d.state.transmissionRenderTarget[se.id]=new jt(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?En:wi,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let Ce=d.state.transmissionRenderTarget[se.id],ke=se.viewport||L;Ce.setSize(ke.z,ke.w);let Ye=_.getRenderTarget();_.setRenderTarget(Ce),_.getClearColor(j),le=_.getClearAlpha(),le<1&&_.setClearColor(16777215,.5),_.clear(),ce&&We.render(ie);let Ze=_.toneMapping;_.toneMapping=Ji;let Qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),d.setupLightsView(se),X===!0&&ge.setGlobalState(_.clippingPlanes,se),lt(w,ie,se),I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce),Be.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ke=0,ht=q.length;Ke<ht;Ke++){let Tt=q[Ke],Ct=Tt.object,dn=Tt.geometry,mt=Tt.material,Je=Tt.group;if(mt.side===Jt&&Ct.layers.test(se.layers)){let di=mt.side;mt.side=qt,mt.needsUpdate=!0,yt(Ct,ie,se,dn,mt,Je),mt.side=di,mt.needsUpdate=!0,nt=!0}}nt===!0&&(I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce))}_.setRenderTarget(Ye),_.setClearColor(j,le),Qe!==void 0&&(se.viewport=Qe),_.toneMapping=Ze}function lt(w,q,ie){let se=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ce=w.length;Y<Ce;Y++){let ke=w[Y],Ye=ke.object,Ze=ke.geometry,Qe=se===null?ke.material:se,nt=ke.group;Ye.layers.test(ie.layers)&&yt(Ye,q,ie,Ze,Qe,nt)}}function yt(w,q,ie,se,Y,Ce){w.onBeforeRender(_,q,ie,se,Y,Ce),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(_,q,ie,se,w,Ce),Y.transparent===!0&&Y.side===Jt&&Y.forceSinglePass===!1?(Y.side=qt,Y.needsUpdate=!0,_.renderBufferDirect(ie,q,se,Y,w,Ce),Y.side=oi,Y.needsUpdate=!0,_.renderBufferDirect(ie,q,se,Y,w,Ce),Y.side=Jt):_.renderBufferDirect(ie,q,se,Y,w,Ce),w.onAfterRender(_,q,ie,se,Y,Ce)}function Rt(w,q,ie){q.isScene!==!0&&(q=xe);let se=Ne.get(w),Y=d.state.lights,Ce=d.state.shadowsArray,ke=Y.state.version,Ye=Te.getParameters(w,Y.state,Ce,q,ie),Ze=Te.getProgramCacheKey(Ye),Qe=se.programs;se.environment=w.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(w.isMeshStandardMaterial?G:b).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Qe===void 0&&(w.addEventListener("dispose",N),Qe=new Map,se.programs=Qe);let nt=Qe.get(Ze);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===ke)return cn(w,Ye),nt}else Ye.uniforms=Te.getUniforms(w),w.onBeforeCompile(Ye,_),nt=Te.acquireProgram(Ye,Ze),Qe.set(Ze,nt),se.uniforms=Ye.uniforms;let Ke=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ke.clippingPlanes=ge.uniform),cn(w,Ye),se.needsLights=zi(w),se.lightsStateVersion=ke,se.needsLights&&(Ke.ambientLightColor.value=Y.state.ambient,Ke.lightProbe.value=Y.state.probe,Ke.directionalLights.value=Y.state.directional,Ke.directionalLightShadows.value=Y.state.directionalShadow,Ke.spotLights.value=Y.state.spot,Ke.spotLightShadows.value=Y.state.spotShadow,Ke.rectAreaLights.value=Y.state.rectArea,Ke.ltc_1.value=Y.state.rectAreaLTC1,Ke.ltc_2.value=Y.state.rectAreaLTC2,Ke.pointLights.value=Y.state.point,Ke.pointLightShadows.value=Y.state.pointShadow,Ke.hemisphereLights.value=Y.state.hemi,Ke.directionalShadowMap.value=Y.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ke.spotShadowMap.value=Y.state.spotShadowMap,Ke.spotLightMatrix.value=Y.state.spotLightMatrix,Ke.spotLightMap.value=Y.state.spotLightMap,Ke.pointShadowMap.value=Y.state.pointShadowMap,Ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function Wt(w){if(w.uniformsList===null){let q=w.currentProgram.getUniforms();w.uniformsList=fr.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function cn(w,q){let ie=Ne.get(w);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function zt(w,q,ie,se,Y){q.isScene!==!0&&(q=xe),I.resetTextureUnits();let Ce=q.fog,ke=se.isMeshStandardMaterial?q.environment:null,Ye=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sn,Ze=(se.isMeshStandardMaterial?G:b).get(se.envMap||ke),Qe=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ke=!!ie.morphAttributes.position,ht=!!ie.morphAttributes.normal,Tt=!!ie.morphAttributes.color,Ct=Ji;se.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ct=_.toneMapping);let dn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,mt=dn!==void 0?dn.length:0,Je=Ne.get(se),di=d.state.lights;if(X===!0&&(oe===!0||w!==S)){let Ln=w===S&&se.id===M;ge.setState(se,w,Ln)}let gt=!1;se.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==di.state.version||Je.outputColorSpace!==Ye||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==Ze||se.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ge.numPlanes||Je.numIntersection!==ge.numIntersection)||Je.vertexAlphas!==Qe||Je.vertexTangents!==nt||Je.morphTargets!==Ke||Je.morphNormals!==ht||Je.morphColors!==Tt||Je.toneMapping!==Ct||Je.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Je.__version=se.version);let Gn=Je.currentProgram;gt===!0&&(Gn=Rt(se,q,Y));let Hs=!1,yn=!1,Yr=!1,It=Gn.getUniforms(),ni=Je.uniforms;if(Ee.useProgram(Gn.program)&&(Hs=!0,yn=!0,Yr=!0),se.id!==M&&(M=se.id,yn=!0),Hs||S!==w){Ee.buffers.depth.getReversed()?(D.copy(w.projectionMatrix),tg(D),ng(D),It.setValue(F,"projectionMatrix",D)):It.setValue(F,"projectionMatrix",w.projectionMatrix),It.setValue(F,"viewMatrix",w.matrixWorldInverse);let ki=It.map.cameraPosition;ki!==void 0&&ki.setValue(F,J.setFromMatrixPosition(w.matrixWorld)),De.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,yn=!0,Yr=!0)}if(Y.isSkinnedMesh){It.setOptional(F,Y,"bindMatrix"),It.setOptional(F,Y,"bindMatrixInverse");let Ln=Y.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),It.setValue(F,"boneTexture",Ln.boneTexture,I))}Y.isBatchedMesh&&(It.setOptional(F,Y,"batchingTexture"),It.setValue(F,"batchingTexture",Y._matricesTexture,I),It.setOptional(F,Y,"batchingIdTexture"),It.setValue(F,"batchingIdTexture",Y._indirectTexture,I),It.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(F,"batchingColorTexture",Y._colorsTexture,I));let Zr=ie.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&Xe.update(Y,ie,Gn),(yn||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,It.setValue(F,"receiveShadow",Y.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(ni.envMap.value=Ze,ni.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(ni.envMapIntensity.value=q.environmentIntensity),yn&&(It.setValue(F,"toneMappingExposure",_.toneMappingExposure),Je.needsLights&&ti(ni,Yr),Ce&&se.fog===!0&&Ie.refreshFogUniforms(ni,Ce),Ie.refreshMaterialUniforms(ni,se,ee,pe,d.state.transmissionRenderTarget[w.id]),fr.upload(F,Wt(Je),ni,I)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(fr.upload(F,Wt(Je),ni,I),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(F,"center",Y.center),It.setValue(F,"modelViewMatrix",Y.modelViewMatrix),It.setValue(F,"normalMatrix",Y.normalMatrix),It.setValue(F,"modelMatrix",Y.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let Ln=se.uniformsGroups;for(let ki=0,Hi=Ln.length;ki<Hi;ki++){let lf=Ln[ki];B.update(lf,Gn),B.bind(lf,Gn)}}return Gn}function ti(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function zi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,q,ie){Ne.get(w.texture).__webglTexture=q,Ne.get(w.depthTexture).__webglTexture=ie;let se=Ne.get(w);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,q){let ie=Ne.get(w);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,ie=0){C=w,T=q,E=ie;let se=!0,Y=null,Ce=!1,ke=!1;if(w){let Ze=Ne.get(w);if(Ze.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(F.FRAMEBUFFER,null),se=!1;else if(Ze.__webglFramebuffer===void 0)I.setupRenderTarget(w);else if(Ze.__hasExternalTextures)I.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ke=w.depthTexture;if(Ze.__boundDepthTexture!==Ke){if(Ke!==null&&Ne.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(w)}}let Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);let nt=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?Y=nt[q][ie]:Y=nt[q],Ce=!0):w.samples>0&&I.useMultisampledRTT(w)===!1?Y=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?Y=nt[ie]:Y=nt,L.copy(w.viewport),k.copy(w.scissor),H=w.scissorTest}else L.copy(Re).multiplyScalar(ee).floor(),k.copy(te).multiplyScalar(ee).floor(),H=_e;if(Ee.bindFramebuffer(F.FRAMEBUFFER,Y)&&se&&Ee.drawBuffers(w,Y),Ee.viewport(L),Ee.scissor(k),Ee.setScissorTest(H),Ce){let Ze=Ne.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ze.__webglTexture,ie)}else if(ke){let Ze=Ne.get(w.texture),Qe=q||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.__webglTexture,ie||0,Qe)}M=-1},this.readRenderTargetPixels=function(w,q,ie,se,Y,Ce,ke){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){Ee.bindFramebuffer(F.FRAMEBUFFER,Ye);try{let Ze=w.texture,Qe=Ze.format,nt=Ze.type;if(!De.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-se&&ie>=0&&ie<=w.height-Y&&F.readPixels(q,ie,se,Y,de.convert(Qe),de.convert(nt),Ce)}finally{let Ze=C!==null?Ne.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,q,ie,se,Y,Ce,ke){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){let Ze=w.texture,Qe=Ze.format,nt=Ze.type;if(!De.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=w.width-se&&ie>=0&&ie<=w.height-Y){Ee.bindFramebuffer(F.FRAMEBUFFER,Ye);let Ke=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.bufferData(F.PIXEL_PACK_BUFFER,Ce.byteLength,F.STREAM_READ),F.readPixels(q,ie,se,Y,de.convert(Qe),de.convert(nt),0);let ht=C!==null?Ne.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,ht);let Tt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await eg(F,Tt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ce),F.deleteBuffer(Ke),F.deleteSync(Tt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,q=null,ie=0){w.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1]);let se=Math.pow(2,-ie),Y=Math.floor(w.image.width*se),Ce=Math.floor(w.image.height*se),ke=q!==null?q.x:0,Ye=q!==null?q.y:0;I.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,ke,Ye,Y,Ce),Ee.unbindTexture()},this.copyTextureToTexture=function(w,q,ie=null,se=null,Y=0){w.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,w=arguments[1],q=arguments[2],Y=arguments[3]||0,ie=null);let Ce,ke,Ye,Ze,Qe,nt,Ke,ht,Tt,Ct=w.isCompressedTexture?w.mipmaps[Y]:w.image;ie!==null?(Ce=ie.max.x-ie.min.x,ke=ie.max.y-ie.min.y,Ye=ie.isBox3?ie.max.z-ie.min.z:1,Ze=ie.min.x,Qe=ie.min.y,nt=ie.isBox3?ie.min.z:0):(Ce=Ct.width,ke=Ct.height,Ye=Ct.depth||1,Ze=0,Qe=0,nt=0),se!==null?(Ke=se.x,ht=se.y,Tt=se.z):(Ke=0,ht=0,Tt=0);let dn=de.convert(q.format),mt=de.convert(q.type),Je;q.isData3DTexture?(I.setTexture3D(q,0),Je=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(I.setTexture2DArray(q,0),Je=F.TEXTURE_2D_ARRAY):(I.setTexture2D(q,0),Je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);let di=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Gn=F.getParameter(F.UNPACK_SKIP_PIXELS),Hs=F.getParameter(F.UNPACK_SKIP_ROWS),yn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ze),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nt);let Yr=w.isDataArrayTexture||w.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let ni=Ne.get(w),Zr=Ne.get(q),Ln=Ne.get(ni.__renderTarget),ki=Ne.get(Zr.__renderTarget);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Hi=0;Hi<Ye;Hi++)Yr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.get(w).__webglTexture,Y,nt+Hi),w.isDepthTexture?(It&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.get(q).__webglTexture,Y,Tt+Hi),F.blitFramebuffer(Ze,Qe,Ce,ke,Ke,ht,Ce,ke,F.DEPTH_BUFFER_BIT,F.NEAREST)):It?F.copyTexSubImage3D(Je,Y,Ke,ht,Tt+Hi,Ze,Qe,Ce,ke):F.copyTexSubImage2D(Je,Y,Ke,ht,Tt+Hi,Ze,Qe,Ce,ke);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else It?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Je,Y,Ke,ht,Tt,Ce,ke,Ye,dn,mt,Ct.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Je,Y,Ke,ht,Tt,Ce,ke,Ye,dn,Ct.data):F.texSubImage3D(Je,Y,Ke,ht,Tt,Ce,ke,Ye,dn,mt,Ct):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,Ke,ht,Ce,ke,dn,mt,Ct.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,Ke,ht,Ct.width,Ct.height,dn,Ct.data):F.texSubImage2D(F.TEXTURE_2D,Y,Ke,ht,Ce,ke,dn,mt,Ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,di),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Gn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Hs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,yn),Y===0&&q.generateMipmaps&&F.generateMipmap(Je),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,q,ie=null,se=null,Y=0){return w.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,w=arguments[2],q=arguments[3],Y=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,ie,se,Y)},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&I.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?I.setTextureCube(w,0):w.isData3DTexture?I.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?I.setTexture2DArray(w,0):I.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,Ee.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}},Fa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xo=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$l,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new O,Rs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vo=class extends mn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nr,Qr=new O,ir=new O,sr=new O,rr=new Ge,eo=new Ge,tp=new je,ha=new O,to=new O,fa=new O,ud=new Ge,cl=new Ge,hd=new Ge,Oa=class extends At{constructor(e=new vo){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ar(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Rs(n,3,0,!1)),nr.setAttribute("uv",new Rs(n,2,3,!1))}this.geometry=nr,this.material=e,this.center=new Ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;da(ha.set(-.5,-.5,0),sr,o,ir,s,r),da(to.set(.5,-.5,0),sr,o,ir,s,r),da(fa.set(.5,.5,0),sr,o,ir,s,r),ud.set(0,0),cl.set(1,0),hd.set(1,1);let a=e.ray.intersectTriangle(ha,to,fa,!1,Qr);if(a===null&&(da(to.set(-.5,.5,0),sr,o,ir,s,r),cl.set(0,1),a=e.ray.intersectTriangle(ha,fa,to,!1,Qr),a===null))return;let c=e.ray.origin.distanceTo(Qr);c<e.near||c>e.far||t.push({distance:c,point:Qr.clone(),uv:Ki.getInterpolation(Qr,ha,to,fa,ud,cl,hd,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function da(i,e,t,n,s,r){rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(eo.x=r*rr.x-s*rr.y,eo.y=s*rr.x+r*rr.y):eo.copy(rr),i.copy(e),i.x+=eo.x,i.y+=eo.y,i.applyMatrix4(tp)}var fd=new O,dd=new ft,pd=new ft,Ky=new O,md=new je,pa=new O,ll=new bn,gd=new je,ul=new Sr,Ba=class extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=df,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(s),e.ray.intersectsSphere(ll)!==!1&&(gd.copy(s).invert(),ul.copy(e.ray).applyMatrix4(gd),!(this.boundingBox!==null&&ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ul)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===E0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;dd.fromBufferAttribute(s.attributes.skinIndex,e),pd.fromBufferAttribute(s.attributes.skinWeight,e),fd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=pd.getComponent(r);if(o!==0){let a=dd.getComponent(r);md.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ky.copy(fd).applyMatrix4(md),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},yo=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},za=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,u=nn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_d=new je,$y=new je,ka=class i{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:$y;_d.multiplyMatrices(a,t[r]),_d.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new za(t,e,e,Nn,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new yo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Cs=class extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},or=new je,xd=new je,ma=[],vd=new Un,Jy=new je,no=new dt,io=new bn,ci=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),vd.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),io.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),e.ray.intersectsSphere(io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),xd.multiplyMatrices(n,or),no.matrixWorld=xd,no.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){let c=ma[o];c.instanceId=r,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new za(new Float32Array(s*this.count),s,this.count,Bu,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var es=class extends mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ha=new O,Va=new O,yd=new je,so=new Sr,ga=new bn,hl=new O,Md=new O,wr=class extends At{constructor(e=new pt,t=new es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ha.fromBufferAttribute(t,s-1),Va.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Va);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;yd.copy(s).invert(),so.copy(e.ray).applyMatrix4(yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=u.getX(x),y=u.getX(x+1),v=_a(this,e,so,c,d,y);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),d=_a(this,e,so,c,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let d=_a(this,e,so,c,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=_a(this,e,so,c,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _a(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Va.fromBufferAttribute(o,r),t.distanceSqToSegment(Ha,Va,hl,Md)>n)return;hl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hl);if(!(c<e.near||c>e.far))return{distance:c,point:Md.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Sd=new O,bd=new O,Is=class extends wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sd.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sd.distanceTo(bd);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ga=class extends wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ps=class extends mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Td=new je,du=new Sr,xa=new bn,va=new O,ts=class extends At{constructor(e=new pt,t=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;Td.copy(s).invert(),du.copy(e.ray).applyMatrix4(Td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=l.getX(g);va.fromBufferAttribute(h,m),Ed(va,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)va.fromBufferAttribute(h,g),Ed(va,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ed(i,e,t,n,s,r,o){let a=du.distanceSqToPoint(i);if(a<t){let c=new O;du.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Rr=class extends Yt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function y(){let _=new O,A=new O,T=0,E=(t-e)/n;for(let C=0;C<=r;C++){let M=[],S=C/r,L=S*(t-e)+e;for(let k=0;k<=s;k++){let H=k/s,j=H*c+a,le=Math.sin(j),ne=Math.cos(j);A.x=L*le,A.y=-S*n+m,A.z=L*ne,h.push(A.x,A.y,A.z),_.set(le,E,ne).normalize(),f.push(_.x,_.y,_.z),p.push(H,1-S),M.push(g++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let S=x[M][C],L=x[M+1][C],k=x[M+1][C+1],H=x[M][C+1];(e>0||M!==0)&&(u.push(S,L,H),T+=3),(t>0||M!==r-1)&&(u.push(L,k,H),T+=3)}l.addGroup(d,T,0),d+=T}function v(_){let A=g,T=new Ge,E=new O,C=0,M=_===!0?e:t,S=_===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let L=g;for(let k=0;k<=s;k++){let j=k/s*c+a,le=Math.cos(j),ne=Math.sin(j);E.x=M*ne,E.y=m*S,E.z=M*le,h.push(E.x,E.y,E.z),f.push(0,S,0),T.x=le*.5+.5,T.y=ne*.5*S+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){let H=A+k,j=L+k;_===!0?u.push(j,j+1,H):u.push(j+1,j,H),C+=3}l.addGroup(d,C,_===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ls=class i extends fn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pu=class i extends pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new O,_=new O,A=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],v),p(t[T+1],_),p(t[T+2],A),c(v,_,A,y)}function c(y,v,_,A){let T=A+1,E=[];for(let C=0;C<=T;C++){E[C]=[];let M=y.clone().lerp(_,C/T),S=v.clone().lerp(_,C/T),L=T-C;for(let k=0;k<=L;k++)k===0&&C===T?E[C][k]=M:E[C][k]=M.clone().lerp(S,k/L)}for(let C=0;C<T;C++)for(let M=0;M<2*(T-C)-1;M++){let S=Math.floor(M/2);M%2===0?(f(E[C][S+1]),f(E[C+1][S]),f(E[C][S])):(f(E[C][S+1]),f(E[C+1][S+1]),f(E[C+1][S]))}}function l(y){let v=new O;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){let y=new O;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;o.push(_,1-A)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],A=o[y+4],T=Math.max(v,_,A),E=Math.min(v,_,A);T>.9&&E<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,v){let _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){let y=new O,v=new O,_=new O,A=new O,T=new Ge,E=new Ge,C=new Ge;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),T.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),A.copy(y).add(v).add(_).divideScalar(3);let L=m(A);x(T,S+0,y,L),x(E,S+2,v,L),x(C,S+4,_,L)}}function x(y,v,_,A){A<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ds=class i extends pu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Cr=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new O,f=new O,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let y=[],v=d/n,_=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let T=A/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-v),y.push(l++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let v=u[d][y+1],_=u[d][y],A=u[d+1][y],T=u[d+1][y+1];(d!==0||o>0)&&p.push(v,_,T),(d!==n-1||c<Math.PI)&&p.push(_,A,T)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wa=class extends wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ut=class extends mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tn=class extends ut{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ya(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ad(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function np(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mu=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pf,endingEnd:pf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mf:r=e,a=2*t-n;break;case gf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mf:o=e,c=2*n-t;break;case gf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let A=0;A!==a;++A)r[A]=d*o[u+A]+y*o[l+A]+v*o[c+A]+_*o[h+A];return r}},gu=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},_u=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&jy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=yr;var is=class extends Fn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=vr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends Fn{};Xa.prototype.ValueTypeName="color";var Ri=class extends Fn{};Ri.prototype.ValueTypeName="number";var xu=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ci=class extends Fn{InterpolantFactoryMethodLinear(e){return new xu(this.times,this.values,this.getValueSize(),e)}};Ci.prototype.ValueTypeName="quaternion";Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Fn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=vr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Fn{};Ii.prototype.ValueTypeName="vector";var qa=class{constructor(e="",t=-1,n=[],s=A0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Qy(c);c=Ad(c,1,u),l=Ad(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ri(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,x){if(p.length!==0){let m=[],d=[];np(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){let v=f[g];m.push(v.time),d.push(v.morphTarget===x?1:0)}s.push(new Ri(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[h].name+"]";n(Ii,p+".position",f,"pos",s),n(Ci,p+".quaternion",f,"rot",s),n(Ii,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function eM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return Xa;case"quaternion":return Ci;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function tM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eM(i.type);if(i.times===void 0){let t=[],n=[];np(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var $i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},nM=new vu,Pi=class{constructor(e){this.manager=e!==void 0?e:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},yu=class extends Error{constructor(e,t){super(e),this.response=t}},Mo=class extends Pi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=vi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){y();function y(){h.read().then(({done:v,value:_})=>{if(v)d.close();else{x+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let T=0,E=u.length;T<E;T++){let C=u[T];C.onProgress&&C.onProgress(A)}d.enqueue(_),y()}},v=>{d.error(v)})}}});return new Response(m)}else throw new yu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{$i.add(e,l);let u=vi[e];delete vi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=vi[e];if(u===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Mu=class extends Pi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=go("img");function c(){u(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ya=class extends Pi{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,o=new Mu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ir=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Za=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fl=new je,wd=new O,Rd=new O,So=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(wd),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Su=class extends So{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pr=class extends Ir{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Cd=new je,ro=new O,dl=new O,bu=class extends So{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd)}},Ka=class extends Ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tu=class extends So{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var $a=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,c),r.manager.itemStart(e)}};var Ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Id();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Id(){return performance.now()}var Wu="\\[\\]\\.:\\/",iM=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",sM="[^"+Wu.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",Xu),oM=/(WCOD+)?/.source.replace("WCOD",sM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),cM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),lM=new RegExp("^"+rM+oM+aM+cM+"$"),uM=["material","materials","bones","map"],Eu=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iM,"")}static parseTrackName(e){let t=lM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);uM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Eu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var nc=[25,18,15,12,10,8,6,4],as={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},cs={sunset:{id:"sunset",name:"Coucher de soleil",grip:1,wet:0,rain:0,wind:0,skyTop:2828907,skyHorizon:16747084,fogColor:15900784,fogDensity:.0011,sunColor:16756848,sunIntensity:2.6,sunDir:[-.55,.28,-.6],hemiSky:9076688,hemiGround:5913136,hemiIntensity:.9,seaColor:2060175,night:!1,bloom:.55},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function Eo(i){let e=String(i),t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function On(i){let e=(typeof i=="number"?i>>>0:Eo(i))||1,t=e,n=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:n,range:(s,r)=>s+(r-s)*n(),int:(s,r)=>s+Math.floor(n()*(r-s+1)),pick:s=>s[Math.floor(n()*s.length)],chance:s=>n()<s,sign:()=>n()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(n()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>On(Eo(t+":"+s))}}var ic=Math.PI*2,hM=2,ip=2800,sp=4200,fM=34,rp=8,op=60,dM=.12,pM=.1,ap=28,mM=150,qu=52,$u=.0025,cp=1/150,gM=10,lp=5,up=250,hp=38,fp=75,sc=150,Zu=120,gp=10,_M=80,xM=40,vM=20,yM=30,MM=95,Yu=18,dp=22,SM=60,Ku=(i,e,t)=>i<e?e:i>t?t:i;function bM(i){let e=i.int(10,14),t=i.range(440,520),n=[];for(let s=0;s<e;s++){let r=i.range(-.3,.3)*(ic/e),o=s/e*ic+r,a=Ku(t*i.range(.62,1.25),380,620);n.push([a*Math.cos(o),a*Math.sin(o)])}return n}function TM(i,e,t,n,s,r,o,a,c){let l=(x,m,d,y)=>{let v=(c-d)/(y-d);return[x[0]+(m[0]-x[0])*v,x[1]+(m[1]-x[1])*v]},u=l(i,e,s,r),h=l(e,t,r,o),f=l(t,n,o,a),p=l(u,h,s,o),g=l(h,f,r,a);return l(p,g,r,o)}function EM(i,e){let t=i.length,n=[];for(let s=0;s<t;s++){let r=i[(s-1+t)%t],o=i[s],a=i[(s+1)%t],c=i[(s+2)%t],l=0,u=l+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(c[0]-a[0],c[1]-a[1]));for(let p=0;p<e;p++){let g=u+(h-u)*(p/e);n.push(TM(r,o,a,c,l,u,h,f,g))}}return n}function AM(i){let e=i.length,t=new Float64Array(e+1);for(let l=0;l<e;l++){let u=i[l],h=i[(l+1)%e];t[l+1]=t[l]+Math.hypot(h[0]-u[0],h[1]-u[1])}let n=t[e],s=Math.max(1,Math.round(n/hM)),r=n/s,o=new Float64Array(s),a=new Float64Array(s),c=0;for(let l=0;l<s;l++){let u=l*r;for(;c<e-1&&t[c+1]<=u;)c++;let h=i[c],f=i[(c+1)%e],p=t[c+1]-t[c],g=p>0?(u-t[c])/p:0;o[l]=h[0]+(f[0]-h[0])*g,a[l]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function pp(i,e){let t=i.length,n=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=i[(o+t)%t];for(let o=0;o<t;o++)n[o]=r/s,r+=i[(o+1+e)%t]-i[((o-e)%t+t)%t];return n}function wM(i,e,t){let n=i.length,s=new Float64Array(n),r=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,u=i[l]-i[c],h=e[l]-e[c],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,u=(s[l]-s[c])/(2*t),h=(r[l]-r[c])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function RM(i,e){let t=i.length;for(let n=0;n<50;n++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[a]*i[a]+2*xM*e);i[o]>c+1e-9&&(i[o]=c,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[o]*i[o]+2*vM*e);i[a]>c+1e-9&&(i[a]=c,s=!0)}if(!s)break}}function mp(i){let e=i.length,t=-1;for(let r=0;r<e;r++)if(i[r]!==i[(r-1+e)%e]){t=r;break}if(t<0)return i[0]!==0?[{start:0,len:e,key:i[0]}]:[];let n=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=i[o];s&&a===s.key?s.len++:(s&&s.key!==0&&n.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&n.push(s),n}function _p(i,e){let t=i.length,n=0;for(let s=0;s<t;s++){let r=i[s].vmax,o=i[(s+1)%t].vmax;n+=e/Math.max(1,.5*(r+o))}return n}function Ju(i,e){let t=i.length,n=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let l=0;l<t;l++){let u=i[l].curv,h=Math.abs(u);h>n&&(n=h);let f=Math.abs(i[l].slope);f>s&&(s=f),r[l]=u>cp?1:u<-cp?-1:0,o[l]=h<$u?1:0}let a=0;for(let l of mp(r))l.len*e>=gM&&a++;let c={start:0,len:0};for(let l of mp(o))l.key===1&&l.len>c.len&&(c=l);return{minRadius:n>0?1/n:1/0,maxSlope:s,corners:a,longestStraight:c.len*e,longestStraightStart:c.start}}function CM(i,e){let t=i.length,n=qu,s=(l,u)=>(l+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let l=0;l<t;l++){let u=Math.floor(i[l].x/n),h=Math.floor(i[l].z/n);o[l]=[u,h];let f=s(u,h),p=r.get(f);p||(p=[],r.set(f,p)),p.push(l)}let a=0,c=qu*qu;for(let l=0;l<t;l++){let[u,h]=o[l];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(u+f,h+p));if(g)for(let x of g){if(x<=l)continue;let m=Math.abs(l-x);if(Math.min(m,t-m)*e<=mM)continue;let y=i[l].x-i[x].x,v=i[l].z-i[x].z;y*y+v*v<c&&a++}}}return a}function IM(i){let e=bM(i),t=EM(e,160),{xs:n,zs:s,count:r,step:o}=AM(t),a=[[8,12],[4,7],[2,4],[1,2]],c=[1,2,4,7].map((E,C)=>({k:E,a:i.range(a[C][0],a[C][1]),p:i.range(0,ic)})),l=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let E=0;E<r;E++){let C=(E-1+r)%r,M=(E+1)%r,S=n[M]-n[C],L=s[M]-s[C];h[E]=Math.hypot(S,L)||1e-9,l[E]=S/h[E],u[E]=L/h[E]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let E=0;E<40;E++){for(let M=0;M<r;M++){let S=0;for(let L of c)S+=L.a*g*Math.sin(ic*L.k*M/r+L.p);f[M]=fM+S}let C=0;for(let M=0;M<r;M++){let S=(M-1+r)%r,L=(M+1)%r;p[M]=(f[L]-f[S])/h[M],Math.abs(p[M])>C&&(C=Math.abs(p[M]))}if(C<=pM)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let E=0;E<r;E++){let C=(E-1+r)%r,M=(E+1)%r,S=n[M]-n[C],L=f[M]-f[C],k=s[M]-s[C],H=Math.hypot(S,L,k)||1e-9;x[E]=S/H,m[E]=L/H,d[E]=k/H}let y=wM(n,s,o),v=pp(y,2),_=new Float64Array(r);for(let E=0;E<r;E++){let C=Ku((Math.abs(v[E])-.016666666666666666)/.023333333333333334,0,1);_[E]=Yu+(dp-Yu)*C}let A=pp(_,10);for(let E=0;E<r;E++)A[E]=Ku(A[E],Yu,dp);let T=new Float64Array(r);for(let E=0;E<r;E++)T[E]=Math.min(MM,Math.sqrt(yM/Math.max(Math.abs(v[E]),1e-9)));return RM(T,o),{xs:n,ys:f,zs:s,count:r,step:o,fx:l,fz:u,tx:x,ty:m,tz:d,slope:p,curv:v,width:A,vmax:T}}function PM(i){let{xs:e,ys:t,zs:n,count:s,step:r,fx:o,fz:a,tx:c,ty:l,tz:u,slope:h,curv:f,width:p,vmax:g}=i,x=[];for(let v=0;v<s;v++)x.push({curv:f[v],slope:h[v],vmax:g[v],x:e[v],z:n[v]});let m=Ju(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(_M/r))%s:0,y=new Array(s);for(let v=0;v<s;v++){let _=(d+v)%s;y[v]={s:v*r,x:e[_],y:t[_],z:n[_],tx:c[_],ty:l[_],tz:u[_],rx:-a[_],rz:o[_],width:p[_],curv:f[_],vmax:g[_],slope:h[_]}}return y}function LM(i,e,t){let n=i.length,s=new Int32Array(n+1);for(let m=0;m<n;m++)s[m+1]=s[m]+(Math.abs(i[m].curv)>=$u?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(sc/e),a=Math.floor((n*e-sc)/e),c=Math.ceil(gp/e),l=[],u=[],h=(m,d)=>l.every(([y,v])=>d<y||m>v),f=(m,d,y,v)=>{for(let _=0;_<400;_++){let A=Math.round(t.range(m,d)/e),T=Math.ceil(y/e),E=A+T;if(a-E<o)return null;let C=t.int(o,a-E),M=C+A;if(v&&!r(C,M+T))continue;let S=C-c,L=M+T+c;if(!(S<0||L>n-1||!h(S,L)))return l.push([S,L]),{a:C,b:M}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,Zu,!0);d&&u.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&u.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&u.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return u.sort((m,d)=>m.s0-d.s0),u}function DM(i,e,t){let n=IM(i),s=PM(n),{count:r,step:o}=n,a=r*o,c=LM(s,o,i),l=Ju(s,o),u=1/0,h=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:c,bounds:{minX:u,maxX:h,minZ:f,maxZ:p},stats:{minRadius:l.minRadius,maxSlope:l.maxSlope,lapTimeEstimate:_p(s,o),corners:l.corners}}}function NM(i){let e=[],{pts:t,count:n,step:s,length:r}=i;if(!Array.isArray(t)||t.length!==n||!(n>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=ip&&r<=sp||e.push(`longueur ${r.toFixed(0)} m hors [${ip}, ${sp}]`),Math.abs(n*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<rp||a>op)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${rp}, ${op}]`);let c=Ju(t,s);c.minRadius>=ap||e.push(`rayon min ${c.minRadius.toFixed(1)} m < ${ap}`),c.maxSlope>dM&&e.push(`pente max ${(c.maxSlope*100).toFixed(1)} % > 12 %`),c.corners<lp&&e.push(`${c.corners} virages < ${lp}`),c.longestStraight<up&&e.push(`ligne droite max ${c.longestStraight.toFixed(0)} m < ${up}`);let l=CM(t,s);l>0&&e.push(`${l} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=_p(t,s);u>=hp&&u<=fp||e.push(`temps au tour ${u.toFixed(1)} s hors [${hp}, ${fp}]`);let h=i.features||[],f=h.filter(d=>d.type==="ramp").length,p=h.filter(d=>d.type==="boost").length,g=h.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%n;for(let d of h)if((d.s0<sc||d.s1>r-sc)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let y=d.s1-d.s0;(y<11.5||y>16.5)&&e.push(`tremplin de ${y.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let v=x(d.s0),_=x(d.s1+Zu),A=!0;for(let T=v;T!==(_+1)%n;T=(T+1)%n)if(Math.abs(t[T].curv)>=$u){A=!1;break}A||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((d,y)=>d.s0-y.s0);for(let d=0;d+1<m.length;d++){let y=m[d],v=m[d+1],_=y.s1+(y.type==="ramp"?Zu:0);v.s0<_+gp-1e-6&&e.push(`features ${y.type} et ${v.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function xp(i,e={}){let t=e.maxAttempts??SM,n=On(i),s=null,r=1/0;for(let o=0;o<t;o++){let a=n.fork("try"+o),c=DM(a,i,o+1),l=NM(c);if(l.ok)return c;l.reasons.length<r&&(r=l.reasons.length,s=c)}return s.attempts=t,s}function ju(i,e){let t=i.length,n=e%t;return n<0&&(n+=t),n>=t&&(n-=t),n}var UM=(i,e)=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function Di(i,e,t={}){let n=i.count,s=i.step,r=ju(i,e),o=r/s,a=Math.floor(o),c=a%n,l=(c+1)%n,u=o-a,h=i.pts[c],f=i.pts[l],p=(_,A)=>_+(A-_)*u,g=p(h.tx,f.tx),x=p(h.ty,f.ty),m=p(h.tz,f.tz),d=Math.hypot(g,x,m)||1,[y,v]=UM(p(h.rx,f.rx),p(h.rz,f.rz));return t.s=r,t.x=p(h.x,f.x),t.y=p(h.y,f.y),t.z=p(h.z,f.z),t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=y,t.rz=v,t.width=p(h.width,f.width),t.curv=p(h.curv,f.curv),t.vmax=p(h.vmax,f.vmax),t.slope=p(h.slope,f.slope),t.i=c,t}var Li={};function vp(i,e,t,n={}){return Di(i,e,Li),n.x=Li.x+t*Li.rx,n.y=Li.y,n.z=Li.z+t*Li.rz,n.heading=Math.atan2(Li.tx,Li.tz),n.slope=Li.slope,n}function yp(i,e){let t=ju(i,e);for(let n of i.features)if(n.type==="ramp"&&t>=n.s0&&t<n.s1)return n.height*(t-n.s0)/(n.s1-n.s0);return 0}function rc(i,e,t){let n=ju(i,e);for(let s of i.features)if((t===void 0||s.type===t)&&n>=s.s0&&n<=s.s1)return s;return null}var BM=1/30,Mp=.5,Sp=.4,zM=.6,Ao=[.2,.36,.52,.68,.84],bp=Ao.length+1,kM=.2,HM=.1,VM=.34,GM=4,WM=4,XM=.2,qM=4.9,YM=5.5,ZM=5,KM=6,$M=1.8,JM=.03,jM=1.6,QM=.5,eS=2,tS=.785,nS=4.7,iS=2.5,Ur=.196,sS=.098,rS=.5,oS=.27,aS=16,cS=11,lS=.72,uS=5,hS=.5,Tp=.35,fS=.42,dS=60,pS=.3,mS=5,gS=1.6,_S=3,xS=14,vS=.004,yS=1.2,MS=2,SS=.5,bS=22,Ep=.25,TS=6,ES=1.8,Ap=1,AS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],Dt=(i,e,t)=>i<e?e:i>t?t:i,ui=(i,e=0)=>Number.isFinite(i)?i:e,Qu=(i,e)=>{let t=i%e;return t<0?t+e:t},wS=(i,e,t)=>i<e?Math.min(e,i+t):Math.max(e,i-t);function wp({s:i=0,d:e=0}={}){return{s:i,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:as.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function Rp(i,e,t,n,s,r,o){let a=i.events,c=e||{},l=s||{},u=!!c.boost&&!i._prevBoost;if(i._prevBoost=!!c.boost,r=Number.isFinite(r)&&r>0?Math.min(r,BM):0,i._init||(i._init=!0,i.boostCharges=n.boostCharges),r===0)return i;let h=t.length,f=n.maxSpeed,p=Dt(ui(c.throttle),0,1),g=Dt(ui(c.brake),0,1),x=Dt(ui(c.steer),-1,1),m=i.stun>0;m&&(i.stun=Math.max(0,i.stun-r),p=0,g=0,x=0);let d=Qu(i.s,h),y=Di(t,d),v=!i.airborne;if(u&&!m&&i.boostCharges>0&&i.boostT<=0&&(i.boostCharges-=1,i.boostT=n.boostDuration,a.push("boost")),v){let ye=rc(t,d,"boost");if(ye){let He=Math.floor(i.s/h)+":"+ye.s0;i._padKey!==He&&(i._padKey=He,i.boostT=Math.max(i.boostT,yS),a.push("pad"))}}g>.5&&i.boostT>0&&(i.boostT=0);let _=i.boostT>0;_&&(p=1);let A=v&&!m&&Math.abs(x)>.3&&i.speed>MS&&(!!c.drift||g>.3),T=i.speed,E=T/f;i._shiftT>0?i._shiftT-=r:i.gear<bp&&E>Ao[i.gear-1]&&!(g>0&&T>3)?(i.gear+=1,i._shiftT=kM):i.gear>1&&T<Ao[i.gear-2]*f-2&&(i.gear-=1,i._shiftT=HM);let C=i.gear>1?Ao[i.gear-2]:0,M=i.gear<bp?Ao[i.gear-1]:1;i.rpm=Dt(.35+.65*((E-C)/(M-C)),.1,1.05);let S=v&&Math.abs(i.d)>y.width*.5,L=zM*f,k=S?L:f*(_?n.boostPower:1),H=GM/(f*f),j=0;if(v){if(S&&T>L&&(j-=2*n.offroadDrag*(T-L)),p>0&&i._shiftT<=0&&T<k){let ye=VM*f,He=.8+.2*Math.sin(Math.PI*Dt(i.rpm,0,1)),ge=n.accel*p*He*Math.min(1,ye/Math.max(T,1));_&&(ge*=eS),j+=Math.min(ge,n.accel*1.15*(_?1.3:1))}g>0&&(j-=n.brake*g*(A?.35:1)),j-=T*(.2-.03*(i.gear-1))*(1-p),j-=XM,j-=qM*y.slope,j-=H*T*T}else j-=H*WM*T*T;i.speed=Math.max(0,T+j*r),v&&i.speed>k&&!S&&(i.speed=Math.max(k,i.speed-10*r));let le=Dt(i.speed/f,0,1),ne=1+(n.wetGrip-1)*RS(l),pe=Dt(n.grip*ui(l.grip,1)*ne,.05,1.5),ee=i.speed<.6?0:x,we=Math.abs(ee)>Math.abs(i.steer)||ee*i.steer<0?YM:ZM*Dt(Math.abs(j)/6,1,2.5);i.steer=wS(i.steer,ee,we*r);let Re=i.yaw-i.vdir,te=i.speed*Math.sin(Re),_e=Math.min(jM,1+JM*Math.abs(te));A&&(_e=n.driftBonus),_&&v&&(_e*=QM);let K=1-(1-n.steerHighSpeed)*le,X=Math.min(1,i.speed/6),oe=v?1:n.airControl,D=i.steer*n.steerRate*K*_e*X*oe*(.6+.4*Math.min(1,pe)),V=Math.min(i.speed/mS,dS*Math.min(1.2,pe)*(A?1.5:1)/Math.max(i.speed,1)),J=Dt(D,-V,V);v&&Math.abs(x)<=.15&&(i.yaw*=Math.exp(-gS*r)),o&&n.steerNoise>0&&!m&&v&&(i.yaw+=n.steerNoise*p*(o.next()*2-1)*r);let re=Math.max(.3,1-i.d*y.curv),xe=i.speed*Math.cos(i.vdir)/re*r,ce=i.speed*Math.sin(i.vdir)*r,Se=y.curv*xe,F=i.vdir,$e=Se*(v?1-pS:1);if(i.yaw+=J*r-$e,i.vdir-=$e,v){let ye=(A?$M:KM)*pe,He=1-Math.exp(-ye*r);i.vdir+=(i.yaw-i.vdir)*He,i.speed*=1-(1-Math.cos(Re))*He}else{let ye=3*Dt(n.airStability,0,2);i.yaw+=(i.vdir-i.yaw)*(1-Math.exp(-ye*r)),n.airStability<1&&(i.yaw+=(i.yaw>=i.vdir?1:-1)*(1-n.airStability)*.6*r)}i.vdir=Dt(ui(i.vdir),-Mp,Mp),i.yaw=Dt(ui(i.yaw),i.vdir-Sp,i.vdir+Sp),i._t+=r,ce+=ui(l.wind)*(1.2*Math.sin(i._t*.37)+.4*Math.sin(i._t*1.13+1))*r*(v?1:.5),i.s+=xe,i.d+=ce;let Be=v?Dt((Math.abs(i.yaw-i.vdir)-.04)/.22,0,1)*X:0;i.drift+=(Be-i.drift)*Math.min(1,8*r);let De=Di(t,Qu(i.s,h));i.onRoad=Math.abs(i.d)<=De.width*.5;let Ee=De.width*.5+6-.4;if(Math.abs(i.d)>=Ee-.02){let ye=i.d>=0?1:-1,He=i.vdir*ye>0,ge=He?Math.abs(Math.sin(i.vdir)):0;if(i.d=ye*Ee,He&&(i.vdir=-ye*.04,i.yaw=i.yaw*.4-ye*.04),i._wallHit)i.speed*=Math.max(0,1-.8*r);else{let Pe=i.boostT>0,We=o?o.next():1;Pe&&i.speed>TS||ge>SS&&i.speed>bS&&We<Ep||i.airborne&&We<Ep?(i.speed*=.3,i.stun=ES,a.push("crash")):i.speed*=1-Dt(n.wallLoss*1.3*(.5+ge),0,.9),a.push("wall")}i.boostT=0,i._wallT=Tp,i._wallHit=!0}else i._wallHit=!1;i.stun>0&&v&&(i.speed*=Math.exp(-2.2*r)),d=Qu(i.s,h);let Ve=ui(yp(t,d)),Ne=(Ve-i._g)/r;if(i.airborne||(Ve<i.yRel-.05?(i.airborne=!0,i._apex=i.yRel-Ve,i.vy=i._vyG,i.vy>_S&&a.push("jump")):(i.yRel=Ve,i.vy=Dt(Ne,-80,80),i._vyG=i.vy)),i.airborne&&(i.vy-=26*r,i.yRel+=i.vy*r,i._apex=Math.max(i._apex,i.yRel-Ve),i.vy<=0&&i.yRel<=Ve)){let ye=-i.vy,He=Math.abs(i.yaw-i.vdir),ge=ye>xS/Math.max(.3,n.landing)||He>.35;i.airborne=!1,i.yRel=Ve,i.vy=0,i._vyG=0,i._springA=Dt(i._springA+.35*i._apex+.03*ye,0,1),i._springP=Math.PI/2;let Pe=vS*ye+(ge?.08:0);i.speed*=1-Dt(Pe/Math.max(.2,n.landing),0,.45),a.push(ge?"hardLand":"land")}i._g=Ve,v=!i.airborne,i.speed=Dt(ui(i.speed),0,1.5*f),i._wallT=Math.max(0,i._wallT-r);let I=Math.max(0,1-i.speed/4,i._wallT/Tp),b=v?(Se+(i.vdir-F))/r:0;i._turnF+=(b-i._turnF)*Math.min(1,6*r);let G=i.speed*i._turnF,ue=Math.sign(G)*Math.max(0,Math.abs(G)-uS),me=i.steer*fS*Math.min(1,i.speed/10),ae=Dt((1-I)*(Math.atan(ue/cS)*lS+hS*(i.yaw-i.vdir)+me),-Ap,Ap);i.stun>0&&(ae=(i.lean>=0?1:-1)*1.35),i.lean+=(ae-i.lean)*Math.min(1,9*r),i._dive=g>.1&&v?Math.min(Ur,i._dive+Ur*r):Math.max(0,i._dive-.25*r);let Te=Dt(j*sS,-Ur,Ur)-i._dive;i._pitchF+=(Te-i._pitchF)*Math.min(1,r/rS);let Ie=Dt(Te-i._pitchF,-Ur,Ur);i.wheelie=i.boostT>0&&v?Math.min(Math.PI/2,i.wheelie+nS*r):Math.max(0,i.wheelie-iS*r),Ie+=Math.sin(i.wheelie)*tS,v||(Ie=Math.atan2(i.vy,Math.max(8,i.speed))),i.pitch=Ie,i._springA*=Math.exp(-r/oS),i._springP+=aS*r,i.compress=Math.sin(i._springP)*i._springA,i.wheelSpin+=i.speed/.32*r,i.boostT=Math.max(0,i.boostT-r);for(let ye of AS)Number.isFinite(i[ye])||(i[ye]=0);return i.speed<0&&(i.speed=0),i}function RS(i){return Dt(ui(i.wet),0,1)}var CS=8,IS=25,PS=150,LS=3,DS=35,NS=2,US=14,FS=30,OS=12,BS=2,zS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Zt=(i,e,t)=>i<e?e:i>t?t:i,oc=(i,e,t)=>i+(e-i)*t,kS=(i,e)=>i-e*Math.round(i/e);function HS(i,e){let t=i.length,n=i.features,s=null,r=1/0;for(let o=0;o<n.length;o++){let a=n[o];if(a.type!=="ramp")continue;let c=((a.s0-e)%t+t)%t;c<r&&(r=c,s=a)}return s?{f:s,dist:r}:null}function VS(i,e){for(let t=0;t<=PS;t+=IS)if(Math.abs(Di(i,e+t).curv)>.004)return!1;return!0}function ac(i,e){let t=i||zS,n={persona:t,rng:e,skill:Zt(t.skill??.5,0,1),aggression:Zt(t.aggression??.5,0,1),jumpSkill:Zt(t.jumpSkill??.5,0,1),lineSkill:Zt(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return n.nextMistake=e.range(8,20)+(1-n.skill)*15,n}function cc(i,e,t,n,s,r){let o=i.input,a=t.length,c=i.rng,l=i.aggression,u=i.skill,h=i.jumpSkill,f=e.speed,p=e.s,g=Di(t,p),x=Math.max(.8,g.width*.5-1.2);i.wanderT-=r,i.wanderT<=0&&(i.wanderT=c.range(.9,1.8),i.wanderGoal=c.range(-1,1)*(1-i.lineSkill)*.5*x),i.wander+=(i.wanderGoal-i.wander)*Math.min(1,r*1.5),i.nextMistake-=r,i.mistakeT-=r,i.mistakeT<=0&&i.nextMistake<=0&&(i.mistakeT=c.range(.5,1.2),i.mistakeSide=c.sign(),i.nextMistake=c.range(8,20)+(1-u)*15);let m=i.mistakeT>0;i.boostLock-=r;let d=oc(1.4,.6,l),y=Math.max(20,f*d),v=Math.max(y,Zt(f*1.6+20,40,110)),_=1/0,A=0,T=0,E=0;for(let X=0;X<=v;X+=CS){let oe=X===0?g:Di(t,p+X);if(X<=y&&oe.vmax<_&&(_=oe.vmax),X>=8){let D=Math.abs(oe.curv);D>A&&(A=D,T=Math.sign(oe.curv),E=X)}}let C=Zt(A/.02,0,1),M=0;if(T!==0&&C>0){let X=Zt((E-10)/30,0,1),oe=oc(1,-.8,X);M=T*x*i.lineSkill*C*oe}M+=i.wander,m&&(M+=i.mistakeSide*1.2);let S=HS(t,p),L=S?S.dist:1/0,k=rc(t,p,"ramp")!==null,H=L<FS;(k||H)&&h>.5&&(M*=1-Zt((h-.4)/.6,0,1));let j=!k&&L>=LS&&L<=DS&&h<.5;for(let X=0;X<s.length;X++){let oe=s[X];if(oe===e)continue;let D=kS(oe.s-p,a);if(D<=0||D>=OS)continue;let V=oe.d-e.d;if(!(Math.abs(V)>=BS)){if(l>.55){let J=V!==0?Math.sign(V):e.d<0?1:-1;M+=J*(.6+.8*l)}else{let J=V!==0?-Math.sign(V):e.d<0?1:-1;Math.abs(e.d+J*2)>x&&(J=-J),M+=J*2*(1-l)}break}}M=Zt(M,-x,x),i.dGoal+=(M-i.dGoal)*Math.min(1,r*2.5);let le=Zt(i.dGoal,-x,x),ne;if(e.airborne)ne=Zt(-e.yaw*2,-.3,.3);else{let X=le-e.d,oe=Zt(X*.12,-.25,.25),D=Di(t,p+Zt(f*.25,4,20)).curv,V=n.steerRate*oc(1,n.steerHighSpeed,Zt(f/n.maxSpeed,0,1));ne=(D*f+(oe-e.yaw)*3)/V}ne=Zt(ne,-1,1),Number.isFinite(ne)||(ne=0);let pe=Zt(-i.playerGap/150,-1,1)*.06,ee=oc(.86,1,u)+l*.04;m&&(ee*=.85);let fe=_*ee*(1+pe),we=n.maxSpeed,Re=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&i.boostLock<=0){if(h>.6&&L>=NS&&L<=US)Re=!0;else if(f>20&&VS(t,p)){let X=i.playerGap<-20,oe=.25+.5*l+(X?.3:0);Re=c.chance(oe)}i.boostLock=Re?1:.4}o.boost=Re;let te=A<.003;if(e.boostT>0){let X=we*n.boostPower;fe=te?X*.98:Math.min(fe,X)}else fe=Math.min(fe,we);let _e=0,K=0;if(e.airborne)_e=1;else{let X=fe-f;X>-1.5?_e=j?0:Zt(.5+X*.25,0,1):K=Zt((-X-1.5)*.15,0,1)}return o.throttle=_e,o.brake=K,o.steer=ne,o.drift=!e.airborne&&l>.75&&A>.025&&f>40&&E<20,o}var GS=7,WS=3,XS=.3,qS=3,YS=25,ZS=1.5,KS=1.2,$S=1.8,Cp=.9,JS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},lc=(i,e,t)=>i<e?e:i>t?t:i,eh=(i,e)=>i-e*Math.round(i/e);function th(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function Ip({track:i,laps:e,env:t,rng:n,riders:s}){let r=i.length,o=e*r,c=s.filter(y=>!y.isPlayer).concat(s.filter(y=>y.isPlayer)).map((y,v)=>{let _=Math.floor(v/2),A=v%2,T=-GS*(_+1),C=wp({s:T,d:A===0?-2.5:2.5});return{id:y.id,name:y.name,color:y.color,accent:y.accent,isPlayer:!!y.isPlayer,stats:y.stats,persona:y.persona||null,state:C,ai:y.isPlayer?null:ac(y.persona||JS,n.fork("ai:"+y.id)),rng:n.fork("rider:"+y.id),others:null,input:th(),coast:th(),frameEvents:[],startS:T,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:v+1}});for(let y of c)y.others=c.filter(v=>v!==y).map(v=>v.state);let l=c.find(y=>y.isPlayer)||null,u=c.slice(),h=c.length,f=new Uint8Array(h*h);function p(y,v,_,A,T){if(_===v)return;let E=Math.floor(v/r),C=Math.min(Math.floor(_/r),e);for(let M=Math.max(E+1,1);M<=C;M++){let S=lc((M*r-v)/(_-v),0,1),L=A+S*T,k=L-y.lapStartT;y.lapTimes.push(k),(y.bestLap===null||k<y.bestLap)&&(y.bestLap=k),y.lapStartT=L}if(_>=o){let M=lc((o-v)/(_-v),0,1);y.finished=!0,y.finishTime=A+M*T}}function g(y){let v=y.state,_=y.coast;return _.throttle=XS,_.brake=0,_.steer=lc(-v.yaw*2-v.d*.05,-.5,.5),_.boost=!1,_.drift=!1,_}function x(y,v){let _=y.state;for(let A=0;A<h;A++){let T=c[A];if(T===y)continue;let E=eh(T.state.s-_.s,r);if(E>qS&&E<YS&&Math.abs(T.state.d-_.d)<ZS){_.speed=Math.min(_.speed+KS*y.stats.slipstream*v,y.stats.maxSpeed*1.05);return}}}function m(){for(let y=0;y<h;y++)for(let v=y+1;v<h;v++){let _=c[y],A=c[v],T=eh(A.state.s-_.state.s,r),E=A.state.d-_.state.d,C=y*h+v;if(Math.abs(T)<$S&&Math.abs(E)<Cp){let M=E!==0?Math.sign(E):n.sign(),S=(Cp-Math.abs(E))/2+.05;if(_.state.d-=M*S,A.state.d+=M*S,!f[C]){f[C]=1;let L=(_.state.speed+A.state.speed)/2;_.state.speed+=(L-_.state.speed)*.2,A.state.speed+=(L-A.state.speed)*.2;let k=T>=0?_:A;k.state.speed*=.96}}else f[C]=0}}let d={phase:"countdown",countdown:WS,time:0,laps:e,track:i,riders:c,player:l,update(y,v){if(d.phase==="countdown"){d.countdown=Math.max(0,d.countdown-y),d.countdown<=0&&(d.phase="racing");return}let _=d.time;d.time+=y;for(let A=0;A<h;A++){let T=c[A];T.finished?T.input=g(T):T.isPlayer?T.input=v||th():(l&&(T.ai.playerGap=eh(T.state.s-l.state.s,r)),T.input=cc(T.ai,T.state,i,T.stats,T.others,y))}for(let A=0;A<h;A++){let T=c[A],E=T.state,C=T.finished,M=E.s;if(Rp(E,T.input,i,T.stats,t,y,T.rng),C||(p(T,M,E.s,_,y),T.finished||x(T,y)),T.lap=T.finished?e:lc(Math.floor(E.s/r)+1,1,e),!T.isPlayer){T.frameEvents.length=0;for(let S=0;S<E.events.length;S++)T.frameEvents.push(E.events[S]);E.events.length=0}}m(),u.sort((A,T)=>A.finished!==T.finished?A.finished?-1:1:A.finished?A.finishTime-T.finishTime:T.state.s-A.state.s);for(let A=0;A<h;A++)u[A].position=A+1;(l?l.finished:c.every(A=>A.finished))&&(d.phase="finished")},results(){let y=c.map(v=>{let _;if(v.finished)_=v.finishTime;else{let A=Math.max(0,v.state.s-v.startS),T=d.time>1?Math.max(5,A/d.time):40,E=Math.max(0,o-v.state.s);_=d.time+E/T}return{id:v.id,name:v.name,position:v.position,time:_,bestLap:v.bestLap,isPlayer:v.isPlayer}});return y.sort((v,_)=>v.position-_.position),y}};return d}var uh={};i0(uh,{PLAYER:()=>hi,RIVALS:()=>hc,UPGRADES:()=>Ns,applyUpgrade:()=>sh,computeStats:()=>Fr,createRun:()=>fc,dailySeed:()=>pc,isRunOver:()=>wo,loadMeta:()=>ah,offerUpgrades:()=>ih,randomSeed:()=>QS,recordResult:()=>rh,runRiders:()=>dc,saveMeta:()=>ch,standings:()=>Or,updateMeta:()=>lh});var Pp="polygon-rush-meta",jS=Object.keys(cs),hi={id:"player",name:"Vous",color:16722511,accent:16777215},Ns=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(i){i.accel*=1.35,i.maxSpeed*=1.04,i.steerNoise+=.35,i.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(i){i.landing*=1.8,i.offroadDrag*=.6,i.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(i){i.maxSpeed*=1.07,i.airStability*=.6,i.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(i){i.wetGrip*=1.35,i.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(i){i.boostCharges+=2,i.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(i){i.brake*=1.4,i.steerRate*=1.08,i.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(i){i.airControl*=1.5,i.airStability*=1.25,i.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(i){i.grip*=1.12,i.wetGrip*=.7,i.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(i){i.slipstream*=1.6,i.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(i){i.wallLoss*=.5,i.accel*=.92,i.maxSpeed*=.97}}],hc=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Lp=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],nh=Lp.length;function Dp(i){return Ns.find(e=>e.id===i)||null}function Np(i,e){let t=0;for(let n of i.upgrades)n===e&&t++;return t}function fc(i){let e=String(i),t=On(Eo(e+"|run")),n=[];for(let o=0;o<nh;o++)if(o===0)n.push("sunset");else if(o===nh-1)n.push("rain");else{let a=n[o-1],c=jS.filter(l=>l!==a&&!(o===nh-2&&l==="rain"));n.push(t.pick(c))}let s=Lp.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:n[a],laps:a<2?2:3})),r={[hi.id]:0};for(let o of hc)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function dc(i){let e=Math.max(0,i.stageIndex),t=[{id:hi.id,name:hi.name,color:hi.color,accent:hi.accent,isPlayer:!0,persona:null,stats:Fr(i)}];for(let n of hc){let s=Math.min(.99,Math.round((n.skill+.01*e)*100)/100);t.push({id:n.id,name:n.name,color:n.color,accent:n.accent,isPlayer:!1,persona:{...n,skill:s},stats:{...as}})}return t}function Fr(i){let e={...as};for(let t of i.upgrades){let n=Dp(t);n&&n.apply(e)}return e}function ih(i){let e=On(Eo(`${i.seed}|offer|${i.stageIndex}`)),t=Ns.filter(n=>Np(i,n.id)<n.maxStacks);return e.shuffle(t).slice(0,3)}function sh(i,e){let t=Dp(e);return!t||Np(i,e)>=t.maxStacks?!1:(i.upgrades.push(e),!0)}function Up(i){if(i===hi.id)return hi.name;let e=hc.find(t=>t.id===i);return e?e.name:i}function rh(i,e){if(wo(i))return i;let t=e.slice().sort((r,o)=>r.position-o.position),n=i.stages[i.stageIndex],s={stage:i.stageIndex,name:n.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,c=nc[a-1]??0;i.points[r.id]=(i.points[r.id]||0)+c,s.results.push({id:r.id,name:r.name||Up(r.id),position:a,points:c,isPlayer:r.id===hi.id})}),i.history.push(s),i.stageIndex+=1,i}function Or(i){let e={};for(let t of i.history)for(let n of t.results)e[n.id]=Math.min(e[n.id]??1/0,n.position);return Object.keys(i.points).map(t=>({id:t,name:Up(t),points:i.points[t],isPlayer:t===hi.id,_best:e[t]??1/0})).sort((t,n)=>n.points-t.points||t._best-n._best).map(({_best:t,...n})=>n)}function wo(i){return i.stageIndex>=i.stages.length}function pc(i=new Date){let e=i instanceof Date?i:new Date(i),t=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${n}-${s}`}function QS(){let i="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=i[Math.floor(Math.random()*i.length)];return e}function uc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function oh(i){let e=uc();if(!i||typeof i!="object")return e;let t=n=>Number.isFinite(n)&&n>=0?Math.floor(n):0;return{runs:t(i.runs),wins:t(i.wins),bestPoints:t(i.bestPoints),unlocked:Array.isArray(i.unlocked)?i.unlocked.filter(n=>typeof n=="string"):e.unlocked}}function Fp(){try{return globalThis.localStorage??null}catch{return null}}function ah(){try{let i=Fp();if(!i)return uc();let e=i.getItem(Pp);return e?oh(JSON.parse(e)):uc()}catch{return uc()}}function ch(i){try{let e=Fp();return e?(e.setItem(Pp,JSON.stringify(oh(i))),!0):!1}catch{return!1}}function lh(i,e){let t=oh(i),n=Or(e),s=n.find(o=>o.isPlayer),r=n.length>0&&n[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var Bn=.9,Op=.3,mc=8,hh=3,Bp=6+.8,Ro=3,e1=4.5,t1=.015,n1=.004,zp=60,St={asphaltA:[.16,.165,.18],asphaltB:[.19,.195,.21],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.91,.85],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.72,.64,.47],gravel:[.5,.44,.34],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},gc=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],kp=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],i1=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],rn=(i,e,t)=>i+(e-i)*t,_n=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,n,s){let[r,o,a,c]=e,l=kp(gc(o,r),gc(a,r)),u=kp(gc(a,r),gc(c,r)),h=[l[0]+u[0],l[1]+u[1],l[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=i1(h,n)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function Co(i,e,t,n,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let c of[-1,1]){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=c,f[o]=u,f[a]=h,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*n[0]+t[1][p]*f[1]*n[1]+t[2][p]*f[2]*n[2])});i.quad(l,s,t[r].map(u=>u*c),null)}}}function fh(i,e,t){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Rr(n);return s.colorSpace=Lt,s.anisotropy=4,s}function Hp(i,e,t,n){i.beginPath(),e.forEach(([s,r],o)=>o?i.lineTo(s*t,r*n):i.moveTo(s*t,r*n)),i.closePath(),i.fill()}var s1=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function Vp(i,e,t){let n=t??On(i.seed??1),s=i.pts,r=s.length,o=i.step??i.length/r,a=i.length??r*o,c=i.features??[],l=c.filter(R=>R.type==="ramp"),u=c.filter(R=>R.type==="boost"),h=c.filter(R=>R.type==="tunnel"),f=Math.max(0,Math.min(1,e.wet??0)),p=!!e.night,g=new xt;g.name="road";let x=[],m=[],d=[],y=R=>(m.push(R),R),v=fh(128,128,(R,P,U)=>{R.fillStyle="#0d0d0d",R.fillRect(0,0,P,U),R.fillStyle="#ffc81a",Hp(R,s1,P,U)}),_=fh(256,128,(R,P,U)=>{R.fillStyle="#04141a",R.fillRect(0,0,P,U),R.fillStyle="#37f3ff",Hp(R,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],P,U)}),A=fh(1024,256,(R,P,U)=>{R.fillStyle="#0b0e16",R.fillRect(0,0,P,U),R.strokeStyle="#ffd21f",R.lineWidth=10,R.strokeRect(12,12,P-24,U-24),R.fillStyle="#ffd21f",R.font="bold 150px Arial, Helvetica, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("POLYGON RUSH",P/2,U/2+8)});for(let R of[v,_,A])R&&d.push(R);_&&(_.wrapS=Ai);let T=y(new ut({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),E=y(new Ht({vertexColors:!0})),C=y(new ut({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),M=y(new ut({vertexColors:!0,flatShading:!0,roughness:1})),S=y(new ut({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),L=y(new Ht({vertexColors:!0})),k=y(new ut({color:v?16777215:16762906,map:v,emissive:v?16777215:16762906,emissiveMap:v,emissiveIntensity:.5,flatShading:!0})),H=y(new ut({color:207411,emissive:3666943,emissiveMap:_,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),j=y(new ut({vertexColors:!0,flatShading:!0,side:Jt,roughness:.9})),le=y(new Ht({vertexColors:!0})),ne=y(new ut({vertexColors:!0,flatShading:!0,roughness:.6})),pe=y(new ut({color:A?16777215:16765471,map:A,emissive:A?16777215:16756736,emissiveMap:A,emissiveIntensity:.7,flatShading:!0})),ee=y(new ut({color:2830138,flatShading:!0,roughness:.7})),fe=y(new ut({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),we=R=>{for(let P of l)if(R>=P.s0&&R<P.s1)return P.height*(R-P.s0)/(P.s1-P.s0);return 0},Re=R=>l.some(P=>R>=P.s0&&R<P.s1),te=R=>h.some(P=>R>=P.s0&&R<=P.s1),_e=R=>{let P=R/o,U=Math.floor(P),W=P-U;U=(U%r+r)%r;let N=s[U],z=s[(U+1)%r],Z=rn(N.rx,z.rx,W),$=rn(N.rz,z.rz,W),Q=Math.hypot(Z,$)||1,Me=rn(N.tx,z.tx,W),ze=rn(N.tz,z.tz,W),Ue=Math.hypot(Me,ze)||1,be=rn(N.y,z.y,W);return{s:R,x:rn(N.x,z.x,W),z:rn(N.z,z.z,W),yb:be,y:be,h:0,rx:Z/Q,rz:$/Q,tx:Me/Ue,tz:ze/Ue,w:rn(N.width,z.width,W),curv:rn(N.curv,z.curv,W),sample:!1}},K=(R,P,U)=>({x:rn(R.x,P.x,U),y:rn(R.y,P.y,U),yb:rn(R.yb,P.yb,U),z:rn(R.z,P.z,U),rx:rn(R.rx,P.rx,U),rz:rn(R.rz,P.rz,U),w:rn(R.w,P.w,U)}),X=(R,P,U=0)=>[R.x+R.rx*P,R.y+U,R.z+R.rz*P],oe=(R,P,U=0)=>[R.x+R.rx*P,R.yb+U,R.z+R.rz*P],D=[];for(let R of l)D.push({s:R.s0,h:0},{s:R.s1,h:R.height},{s:R.s1,h:0});D.sort((R,P)=>R.s-P.s);let V=[],J=0,re=(R,P,U)=>{let W=V[V.length-1];if(W&&Math.abs(W.s-R)<1e-9&&Math.abs(W.h-P)<1e-9){W.sample=W.sample||U;return}let N=_e(R);N.h=P,N.y=N.yb+P,N.sample=U,V.push(N)};for(let R=0;R<r;R++){let P=R*o;for(;J<D.length&&D[J].s<=P+1e-9;)re(D[J].s,D[J].h,!1),J++;re(P,we(P),!0)}for(;J<D.length;)re(D[J].s,D[J].h,!1),J++;let xe=V.length,ce=[];for(let R=0;R<xe;R++){let P=V[R],U=V[(R+1)%xe],W=P.s,N=R+1<xe?V[R+1].s:a,z=Math.abs(N-W)<1e-9,Z=(W+N)/2;ce.push({a:P,b:U,sa:W,sb:N,drop:z,mid:Z,ramp:!z&&Re(Z)})}let Se=new _n,F=new _n,$e=new _n,Be=new _n,De=new _n,Ee=new _n,Ve=new _n,Ne=new _n,I=new _n,b=new _n,G=new _n,ue=new _n,me=R=>R.w/2+6-Op/2,ae=R=>R.w/2+6+Op/2;for(let R of ce){let{a:P,b:U,sa:W,sb:N,mid:z}=R;if(R.drop){Se.quad([X(P,-P.w/2),X(P,P.w/2),X(U,U.w/2),X(U,-U.w/2)],St.rampDark,[P.tx,0,P.tz]);continue}let Z=P.w/2,$=U.w/2;if(R.ramp)F.quad([X(P,-Z),X(P,Z),X(U,$),X(U,-$)],Math.floor(z/2)%2===0?St.yellow:St.black,[0,1,0]),Se.quad([X(P,-Z),X(U,-$),oe(U,-$),oe(P,-Z)],St.rampDark,[-P.rx,0,-P.rz]),Se.quad([X(P,Z),oe(P,Z),oe(U,$),X(U,$)],St.rampDark,[P.rx,0,P.rz]);else{Se.quad([X(P,-Z),X(P,Z),X(U,$),X(U,-$)],Math.floor(z/8)%2?St.asphaltB:St.asphaltA,[0,1,0]);for(let be of[-1,1])$e.quad([X(P,be*(Z-.25),.02),X(P,be*(Z-.45),.02),X(U,be*($-.45),.02),X(U,be*($-.25),.02)],St.white,[0,1,0]);let Q=9,Me=3;for(let be=Math.floor(W/Q);be*Q<N;be++){let qe=Math.max(W,be*Q),et=Math.min(N,be*Q+Me);if(et-qe<1e-6)continue;let rt=K(P,U,(qe-W)/(N-W)),lt=K(P,U,(et-W)/(N-W));$e.quad([X(rt,-.08,.02),X(rt,.08,.02),X(lt,.08,.02),X(lt,-.08,.02)],St.white,[0,1,0])}let ze=Math.abs((P.curv+U.curv)/2)>n1?1.2:.5,Ue=Math.floor(z/2)%2?St.red:St.railA;for(let be of[-1,1])$e.quad([X(P,be*Z,.025),X(P,be*(Z+ze),.025),X(U,be*($+ze),.025),X(U,be*$,.025)],Ue,[0,1,0])}for(let Q of[-1,1]){Be.quad([oe(P,Q*Z),oe(P,Q*me(P)),oe(U,Q*me(U)),oe(U,Q*$)],St.sand,[0,1,0]);let Me=mc/2,ze=-hh/2,Ue=-hh,be=[Q*P.rx*.6,.8,Q*P.rz*.6];Be.quad([oe(P,Q*ae(P),0),oe(P,Q*(ae(P)+Me),ze),oe(U,Q*(ae(U)+Me),ze),oe(U,Q*ae(U),0)],St.gravel,be),Be.quad([oe(P,Q*(ae(P)+Me),ze),oe(P,Q*(ae(P)+mc),Ue),oe(U,Q*(ae(U)+mc),Ue),oe(U,Q*(ae(U)+Me),ze)],St.gravel,be);let qe=Math.floor(z/6)%2?St.railB:St.railA,et=Q*me(P),rt=Q*me(U),lt=Q*ae(P),yt=Q*ae(U);De.quad([oe(P,et,0),oe(P,et,Bn),oe(U,rt,Bn),oe(U,rt,0)],qe,[-Q*P.rx,0,-Q*P.rz]),De.quad([oe(P,lt,0),oe(P,lt,Bn),oe(U,yt,Bn),oe(U,yt,0)],qe,[Q*P.rx,0,Q*P.rz]),De.quad([oe(P,et,Bn),oe(P,lt,Bn),oe(U,yt,Bn),oe(U,rt,Bn)],qe,[0,1,0]),p&&Ee.quad([oe(P,et,Bn+.02),oe(P,lt,Bn+.02),oe(U,yt,Bn+.02),oe(U,rt,Bn+.02)],Q<0?St.neonCyan:St.neonMag,[0,1,0])}}for(let R of V){if(!R.sample||Math.abs(R.curv)<=t1||Math.round(R.s/o)%8!==0||te(R.s)||Re(R.s))continue;let U=-Math.sign(R.curv)*(R.w/2+6+.6),N=R.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];Ve.quad([oe(R,U-.6,1),oe(R,U+.6,1),oe(R,U+.6,2),oe(R,U-.6,2)],[1,1,1],[-R.tx,0,-R.tz],N),Co(G,[R.x+R.rx*U,R.yb+.35,R.z+R.rz*U],[[R.tx,0,R.tz],[R.rx,0,R.rz],[0,1,0]],[.08,.12,.65],St.post)}let Te=_e(0),Ie=Math.max(4,Math.round(Te.w)),ye=Te.w/Ie;for(let R=0;R<3;R++){let P=_e(-2+R),U=_e(-1+R);for(let W=0;W<Ie;W++){let N=-Te.w/2+W*ye,z=N+ye;$e.quad([X(P,N,.03),X(P,z,.03),X(U,z,.03),X(U,N,.03)],(R+W)%2?St.checkB:St.checkW,[0,1,0])}}let He=Te.w/2+6+.5,ge=[[Te.tx,0,Te.tz],[Te.rx,0,Te.rz],[0,1,0]];for(let R of[-1,1])Co(G,[Te.x+Te.rx*R*He,Te.yb+4,Te.z+Te.rz*R*He],ge,[.3,.3,4],St.post);Co(G,[Te.x,Te.yb+7.5,Te.z],ge,[.5,He,.5],St.beam);let Pe=(R,P,U)=>[Te.x+Te.tx*R+Te.rx*P,Te.yb+U,Te.z+Te.tz*R+Te.rz*P];ue.quad([Pe(-.55,-He,5.2),Pe(-.55,He,5.2),Pe(-.55,He,6.8),Pe(-.55,-He,6.8)],[1,1,1],[-Te.tx,0,-Te.tz],[[0,0],[1,0],[1,1],[0,1]]),ue.quad([Pe(.55,-He,5.2),Pe(.55,He,5.2),Pe(.55,He,6.8),Pe(.55,-He,6.8)],[1,1,1],[Te.tx,0,Te.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let R of u){let P=[];for(let W=R.s0;W<R.s1;W+=2)P.push(W);P.push(R.s1);let U=P.map(_e);for(let W=0;W+1<U.length;W++){let N=U[W],z=U[W+1],Z=(N.s-R.s0)/4,$=(z.s-R.s0)/4;Ne.quad([X(N,-N.w/2,.04),X(N,N.w/2,.04),X(z,z.w/2,.04),X(z,-z.w/2,.04)],[1,1,1],[0,1,0],[[Z,0],[Z,1],[$,1],[$,0]])}}let We=R=>{let P=R.w/2+Bp,U=[[-P,0],[-P,Ro]];for(let W=1;W<=7;W++){let N=Math.PI-W*Math.PI/8;U.push([P*Math.cos(N),Ro+e1*Math.sin(N)])}return U.push([P,Ro],[P,0]),U},Xe=(R,P,U,W=0)=>[R.x+R.rx*P+R.tx*W,R.yb+U,R.z+R.rz*P+R.tz*W],he=(R,P,U)=>{let W=-P,N=Ro-U,z=Math.hypot(W,N)||1;return[R.rx*W/z,N/z,R.rz*W/z]},Le=([R,P])=>{let U=-R,W=Ro-P,N=Math.hypot(U,W)||1;return[R+U/N*.45,P+W/N*.45]};for(let R of h){let P=[];for(let W=R.s0;W<R.s1;W+=2)P.push(W);P.push(R.s1);let U=P.map(_e);for(let W=0;W+1<U.length;W++){let N=U[W],z=U[W+1],Z=We(N),$=We(z);for(let Q=0;Q<Z.length-1;Q++){let Me=(Z[Q][0]+Z[Q+1][0])/2,ze=(Z[Q][1]+Z[Q+1][1])/2;I.quad([Xe(N,Z[Q][0],Z[Q][1]),Xe(N,Z[Q+1][0],Z[Q+1][1]),Xe(z,$[Q+1][0],$[Q+1][1]),Xe(z,$[Q][0],$[Q][1])],Q%2?St.tunA:St.tunB,he(N,Me,ze))}if(Math.round((N.s-R.s0)/2)%6===0)for(let Q=1;Q<=8;Q++){let Me=Le(Z[Q]),ze=Le(Z[Q+1]),Ue=(Me[0]+ze[0])/2,be=(Me[1]+ze[1])/2;b.quad([Xe(N,Me[0],Me[1]),Xe(N,ze[0],ze[1]),Xe(N,ze[0],ze[1],.6),Xe(N,Me[0],Me[1],.6)],Q%2?St.neonCyan:St.neonMag,he(N,Ue,be))}}for(let W of[U[0],U[U.length-1]]){let N=W.w/2+Bp,z=[[W.tx,0,W.tz],[W.rx,0,W.rz],[0,1,0]];for(let Z of[-1,1])Co(I,[W.x+W.rx*Z*(N+1.2),W.yb+5,W.z+W.rz*Z*(N+1.2)],z,[2,1.1,5],St.concrete);Co(I,[W.x,W.yb+10.5,W.z],z,[2,N+3.5,1.5],St.concreteB)}}let de=(R,P,U,W=!1)=>{if(!R.idx.length)return null;let N=new pt;N.setAttribute("position",new vt(R.pos,3)),N.setAttribute("color",new vt(R.col,3)),N.setAttribute("uv",new vt(R.uv,2)),N.setIndex(R.idx),N.computeVertexNormals(),x.push(N);let z=new dt(N,P);return z.name=U,z.receiveShadow=W,g.add(z),z};de(Se,T,"road-asphalt",!0),de(F,E,"road-ramp-top"),de($e,C,"road-paint"),de(Be,M,"road-shoulder-talus"),de(De,S,"road-barriers"),p&&de(Ee,L,"road-barrier-neon"),de(Ve,k,"road-chevrons"),de(Ne,H,"road-boost"),de(I,j,"road-tunnels"),de(b,le,"road-tunnel-neon"),de(G,ne,"road-props"),de(ue,pe,"road-start-sign");let Ae=[];for(let R=1;R*zp<a-5;R++){let P=R*zp;if(h.some($=>P>=$.s0-15&&P<=$.s1+15))continue;let U=_e(P),W=R%2?1:-1,N=W*(U.w/2+6+2.6),z=U.yb-hh*Math.min(1,2.45/mc),Z=n.range(8.5,9.5);Ae.push({x:U.x+U.rx*N,z:U.z+U.rz*N,y:z,h:Z,hx:U.x+U.rx*(N-W*.6),hz:U.z+U.rz*(N-W*.6)})}if(Ae.length){let R=new fn(.18,.26,9,6,1),P=new Ds(.55,0);x.push(R,P);let U=new ci(R,ee,Ae.length),W=new ci(P,fe,Ae.length);U.name="road-lamp-masts",W.name="road-lamp-heads";let N=new je,z=new hn,Z=new O,$=new O;Ae.forEach((Q,Me)=>{$.set(Q.x,Q.y+Q.h/2,Q.z),Z.set(1,Q.h/9,1),N.compose($,z,Z),U.setMatrixAt(Me,N),$.set(Q.hx,Q.y+Q.h+.2,Q.hz),Z.set(1,1,1),N.compose($,z,Z),W.setMatrixAt(Me,N)}),U.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,g.add(U,W)}return{group:g,update:(R,P)=>{_&&(_.offset.x=-(P*.9%1)),H.emissiveIntensity=2.2+.5*Math.sin(P*5)},dispose:()=>{g.removeFromParent();for(let R of x)R.dispose();for(let R of m)R.dispose();for(let R of d)R.dispose()}}}function Wp(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Gp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let g=Gp(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Gp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ct(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function dh(i,e){if(e===Gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===To||e===Qa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===To)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var on=10,ls=450,An=40,Xp=12e3,qp=32,Yp=4e3,wn=Math.PI*2,Io=new At,zr=new Oe,Zp=new je,Kp=new je,r1=new O(0,1,0),$p=i=>i<0?0:i>1?1:i,us=(i,e,t)=>i<e?e:i>t?t:i,Us=(i,e,t)=>{let n=$p((t-i)/(e-i));return n*n*(3-2*n)};function o1(i){let e=(n,s)=>{let r=Math.imul(n|0,374761393)+Math.imul(s|0,668265263)+i|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(n,s)=>{let r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=a*a*(3-2*a),u=c*c*(3-2*c),h=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*l+(p-h)*u+(h-f-p+g)*l*u};return(n,s)=>(t(n,s)*.5+t(n*2+17.3,s*2-9.1)*.25+t(n*4-3.7,s*4+11.2)*.125)/.875}var Br=i=>{let e=new Oe(i);return[e.r,e.g,e.b]},hs={sand:Br(14271631),dry:Br(10134118),garrigue:Br(7309902),rock:Br(11038533),pale:Br(13352870),snow:Br(15855076)},a1=[16513264,15853260,14725754,16052195],c1=[9075302,7236192,11047018,8023646],l1=[3407871,16727250,16757051],_c=0,xc=0,vc=0,Po=(i,e)=>{_c+=(i[0]-_c)*e,xc+=(i[1]-xc)*e,vc+=(i[2]-vc)*e};function u1(i,e,t,n,s,r){_c=hs.sand[0],xc=hs.sand[1],vc=hs.sand[2],Po(hs.dry,Us(2.5,7,i)),Po(hs.garrigue,Us(25,75,i)*.55),Po(hs.rock,Us(.4,.65,e)),Po(hs.pale,Us(95,120,i)*.8),Po(hs.snow,Us(125,150,i));let o=_c*t,a=xc*t,c=vc*t;n&&(o=o*.45+.02,a=a*.5+.03,c=c*.75+.09);for(let l=0;l<9;l+=3)s[r+l]=o,s[r+l+1]=a,s[r+l+2]=c}function zn(i,e){let t=i.index?i.toNonIndexed():i;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let n=t.attributes.position.count,s=new Float32Array(n*3);zr.setHex(e);for(let r=0;r<n;r++)s[r*3]=zr.r,s[r*3+1]=zr.g,s[r*3+2]=zr.b;return t.setAttribute("color",new ct(s,3)),t}var Lo=i=>Wp(i,!1);function h1(i,e,t){let n=Math.sin(i*12.9898+e*78.233+t*37.719)*43758.5453;return n-Math.floor(n)}function f1(){let i=new Ds(1,0),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*h1(n,s,r);e.setXYZ(t,n*o,s*o,r*o)}return i.computeVertexNormals(),i}function d1(){return Lo([zn(new fn(.35,.5,6,6).translate(0,3,0),7162931),zn(new Ds(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function p1(){return Lo([zn(new fn(.25,.35,1.2,5).translate(0,.6,0),7162931),zn(new Ls(1.1,10,6).translate(0,6,0),3037756)])}function m1(){let i=[zn(new fn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Ls(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*wn/7);i.push(zn(t,5214010))}return Lo(i)}function g1(){return Lo([zn(new fn(1.6,2.3,13,8).translate(0,6.5,0),16052712),zn(new fn(2,2,2.2,8).translate(0,6.5,0),12727595),zn(new fn(1.3,1.3,1.8,8).translate(0,14,0),16771488),zn(new Ls(1.7,1.2,8).translate(0,15.4,0),3812906)])}function _1(){return Lo([zn(new $n(2.2,.9,6).translate(0,.45,0),15986662),zn(new Ls(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Jn(i,e,t,n=!0){let s=new ci(i,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];Io.position.set(o.x,o.y,o.z),Io.rotation.set(0,o.ry??0,0),Io.scale.set(o.sx??1,o.sy??1,o.sz??1),Io.updateMatrix(),s.setMatrixAt(r,Io.matrix),o.col!==void 0&&(zr.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,zr))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=n,s}var x1=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,v1=`
uniform vec3 topColor;
uniform vec3 horizonColor;
uniform vec3 sunColor;
uniform vec3 sunDir;
uniform float night;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(horizonColor, topColor, smoothstep(0.0, 0.55, h));
  if (h < 0.0) col = horizonColor * 0.9;
  float s = max(dot(d, normalize(sunDir)), 0.0);
  col += sunColor * (pow(s, 48.0) * 0.5 + pow(s, 400.0) * 0.5);
  float disk = smoothstep(0.9988, 0.9994, s);
  col = mix(col, sunColor * (1.4 + 0.3 * night) + vec3(0.1), disk);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;function Jp(i,e,t,n){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,c=o1(n.int(1,1073741808)),l=o.minX-ls-An,u=o.minZ-ls-An,h=Math.ceil((o.maxX-o.minX+2*ls)/An)+3,f=Math.ceil((o.maxZ-o.minZ+2*ls)/An)+3,p=Array.from({length:h*f},()=>[]);for(let N=0;N<r;N++){let z=us(Math.floor((s[N].x-l)/An),0,h-1),Z=us(Math.floor((s[N].z-u)/An),0,f-1);p[Z*h+z].push(N)}let g=0;function x(N,z){let Z=Math.floor((N-l)/An),$=Math.floor((z-u)/An),Q=Math.max(h,f),Me=1/0,ze=0;for(let Ue=0;Ue<=Q;Ue++){for(let qe=$-Ue;qe<=$+Ue;qe++){if(qe<0||qe>=f)continue;let rt=qe===$-Ue||qe===$+Ue?1:2*Ue;for(let lt=Z-Ue;lt<=Z+Ue;lt+=rt){if(lt<0||lt>=h)continue;let yt=p[qe*h+lt];for(let Rt=0;Rt<yt.length;Rt++){let Wt=yt[Rt],cn=s[Wt],zt=cn.x-N,ti=cn.z-z,zi=zt*zt+ti*ti;zi<Me&&(Me=zi,ze=Wt)}}}let be=Ue*An;if(Me<=be*be)break}return g=Math.sqrt(Me),ze}function m(N,z,Z){let $=Z*Z,Q=1/0,Me=us(Math.floor((N-Z-l)/An),0,h-1),ze=us(Math.floor((N+Z-l)/An),0,h-1),Ue=us(Math.floor((z-Z-u)/An),0,f-1),be=us(Math.floor((z+Z-u)/An),0,f-1);for(let qe=Ue;qe<=be;qe++)for(let et=Me;et<=ze;et++){let rt=p[qe*h+et];for(let lt=0;lt<rt.length;lt++){let yt=s[rt[lt]],Rt=yt.x-N,Wt=yt.z-z;Rt*Rt+Wt*Wt<=$&&yt.y<Q&&(Q=yt.y)}}return Q}let d=Math.ceil(r/4),y=new Float64Array(d*2);for(let N=0;N<d;N++)y[2*N]=s[N*4%r].x,y[2*N+1]=s[N*4%r].z;function v(N,z){let Z=!1;for(let $=0,Q=d-1;$<d;Q=$++){let Me=y[2*$],ze=y[2*$+1],Ue=y[2*Q],be=y[2*Q+1];ze>z!=be>z&&N<(Ue-Me)*(z-ze)/(be-ze)+Me&&(Z=!Z)}return Z}let _=o.minX-ls,A=o.minZ-ls,T=Math.ceil((o.maxX-o.minX+2*ls)/on)+1,E=Math.ceil((o.maxZ-o.minZ+2*ls)/on)+1,C=new Float32Array(T*E);for(let N=0;N<E;N++)for(let z=0;z<T;z++){let Z=_+z*on,$=A+N*on,Q=x(Z,$),Me=g,ze=s[Q],Ue=ze.width*.5,be=ze.y;if(Me<40){let zt=m(Z,$,24);zt<be&&(be=zt)}let qe=1;if(!v(Z,$)){let zt=Me-Ue+(c(Z/140+31.7,$/140-8.2)-.5)*70;qe=1-Us(110,200,zt)}let et=c(Z/260,$/260),lt=-15+(10+130*Math.pow($p((et-.42)/.5),1.5)+6*et+15)*qe,yt=Us(Ue+6+12,Ue+6+82,Me),Rt=be-.6,Wt=Rt+(lt-Rt)*yt,cn=be+Math.max(0,Me-Ue-6-12)*.9;Wt>cn&&(Wt=cn),C[N*T+z]=Wt}function M(N,z){let Z=(N-_)/on,$=(z-A)/on;Z=us(Z,0,T-1.000001),$=us($,0,E-1.000001);let Q=Math.floor(Z),Me=Math.floor($),ze=Z-Q,Ue=$-Me,be=C[Me*T+Q],qe=C[Me*T+Q+1],et=C[(Me+1)*T+Q],rt=C[(Me+1)*T+Q+1],lt=be+(qe-be)*ze,yt=et+(rt-et)*ze;return lt+(yt-lt)*Ue}let S=(N,z)=>Math.max(Math.abs(M(N+4,z)-M(N-4,z)),Math.abs(M(N,z+4)-M(N,z-4)))/8,L=(N,z,Z)=>{let $=x(N,z);return g>=s[$].width*.5+6+4+Z},k=2*(T-1)*(E-1),H=new Float32Array(k*9),j=new Float32Array(k*9),le=0,ne=(N,z,Z,$,Q,Me,ze,Ue,be)=>{let qe=$-N,et=Q-z,rt=Me-Z,lt=ze-N,yt=Ue-z,Rt=be-Z,Wt=et*Rt-rt*yt,cn=rt*lt-qe*Rt,zt=qe*yt-et*lt,ti=Math.hypot(Wt,cn,zt)||1,zi=1-Math.abs(cn)/ti,w=le*9;H[w]=N,H[w+1]=z,H[w+2]=Z,H[w+3]=$,H[w+4]=Q,H[w+5]=Me,H[w+6]=ze,H[w+7]=Ue,H[w+8]=be,u1((z+Q+Ue)/3,zi,.9+.2*n.next(),a,j,w),le++};for(let N=0;N<E-1;N++)for(let z=0;z<T-1;z++){let Z=N*T+z,$=Z+1,Q=Z+T,Me=Q+1,ze=_+z*on,Ue=A+N*on,be=ze+on,qe=Ue+on;ne(ze,C[Z],Ue,ze,C[Q],qe,be,C[$],Ue),ne(be,C[$],Ue,ze,C[Q],qe,be,C[Me],qe)}let pe=new pt;pe.setAttribute("position",new ct(H,3)),pe.setAttribute("color",new ct(j,3)),pe.computeVertexNormals(),pe.computeBoundingSphere();let ee=new dt(pe,new ut({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0}));ee.receiveShadow=!0;let fe=new xt;fe.name="environment",fe.add(ee);let we=(o.minX+o.maxX)/2,Re=(o.minZ+o.maxZ)/2,te=new Tr(Xp,Xp,qp,qp);te.rotateX(-Math.PI/2);let _e=te.attributes.position,K=_e.count,X=new Float32Array(K),oe=new Float32Array(K);for(let N=0;N<K;N++)X[N]=_e.getX(N),oe[N]=_e.getZ(N);let D=new dt(te,new ut({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));D.position.set(we,0,Re),fe.add(D);let V=new O(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),J=new xt,re=new wt({uniforms:{topColor:{value:new Oe(t.skyTop)},horizonColor:{value:new Oe(t.skyHorizon)},sunColor:{value:new Oe(t.sunColor)},sunDir:{value:V},night:{value:a?1:0}},vertexShader:x1,fragmentShader:v1,side:qt,depthWrite:!1,fog:!1}),xe=new dt(new Cr(Yp,32,16),re);if(xe.renderOrder=-10,xe.frustumCulled=!1,J.add(xe),a){let z=new Float32Array(1500);for(let Q=0;Q<500;Q++){let Me=n.range(0,wn),ze=Math.asin(n.range(.05,.98)),Ue=Yp*.97;z[Q*3]=Ue*Math.cos(ze)*Math.cos(Me),z[Q*3+1]=Ue*Math.sin(ze),z[Q*3+2]=Ue*Math.cos(ze)*Math.sin(Me)}let Z=new pt;Z.setAttribute("position",new ct(z,3));let $=new ts(Z,new Ps({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));$.frustumCulled=!1,J.add($)}fe.add(J);let ce=new Za(t.hemiSky,t.hemiGround,t.hemiIntensity),Se=new Lr(t.sunColor,t.sunIntensity);Se.castShadow=!0,Se.shadow.mapSize.set(2048,2048);let F=Se.shadow.camera;F.left=-90,F.right=90,F.top=90,F.bottom=-90,F.near=1,F.far=600,F.updateProjectionMatrix(),Se.shadow.bias=-5e-4,fe.add(ce,Se,Se.target);let $e=i.fog,Be=i.background,De=new Fa(t.fogColor,t.fogDensity),Ee=new Oe(t.skyHorizon);i.fog=De,i.background=Ee;let Ve=_+(T-1)*on,Ne=A+(E-1)*on,I=()=>n.range(_+30,Ve-30),b=()=>n.range(A+30,Ne-30),G=(N,z,Z)=>{let $=[];for(let Q=0;Q<z&&$.length<N;Q++){let Me=Z(I(),b());Me&&$.push(Me)}return $},ue=G(320,4e4,(N,z)=>{let Z=M(N,z);if(Z<4||Z>95||!L(N,z,2)||S(N,z)>.6)return null;let $=n.range(.8,1.45);return{x:N,y:Z-.3,z,sx:$,sy:$*n.range(.9,1.3),sz:$,ry:n.range(0,wn),col:16777215,v:n.range(.85,1.15)}}),me=G(170,4e4,(N,z)=>{let Z=M(N,z);if(Z<6||Z>70||!L(N,z,1.5)||S(N,z)>.6)return null;let $=n.range(.8,1.3);return{x:N,y:Z-.3,z,sx:$,sy:$*n.range(.9,1.25),sz:$,ry:n.range(0,wn),col:16777215,v:n.range(.85,1.15)}}),ae=G(110,4e4,(N,z)=>{let Z=M(N,z);if(Z<1.8||Z>14||!L(N,z,2)||S(N,z)>.5)return null;let $=n.range(.85,1.25);return{x:N,y:Z-.3,z,sx:$,sy:$,sz:$,ry:n.range(0,wn),col:16777215,v:n.range(.9,1.1)}});fe.add(Jn(d1(),new ut({vertexColors:!0,flatShading:!0,roughness:.9}),ue)),fe.add(Jn(p1(),new ut({vertexColors:!0,flatShading:!0,roughness:.9}),me)),fe.add(Jn(m1(),new ut({vertexColors:!0,flatShading:!0,roughness:.9}),ae));let Te=G(300,3e4,(N,z)=>{let Z=M(N,z);if(Z<1.5)return null;let $=n.range(1.2,4.5);return L(N,z,$*.6)?{x:N,y:Z+$*.15,z,sx:$,sy:$*n.range(.55,.9),sz:$,ry:n.range(0,wn),col:n.pick(c1),v:n.range(.85,1.15)}:null}),Ie=G(3,3e4,(N,z)=>{if(M(N,z)>-4)return null;let Z=x(N,z);if(g<s[Z].width*.5+200||g>800)return null;let $=n.range(25,45);return{x:N,y:.1*$,z,sx:$,sy:$*.45,sz:$,ry:n.range(0,wn),col:10260344,v:1}});fe.add(Jn(f1(),new ut({color:16777215,flatShading:!0,roughness:.95}),Te.concat(Ie)));let ye=[],He=[],ge=[],Pe=n.int(3,5),We=0;for(let N=0;N<4e3&&We<Pe;N++){let z=I(),Z=b(),$=x(z,Z),Q=s[$].width*.5;if(g<Q+25||g>Q+80)continue;let Me=M(z,Z);if(Me<6||Me>40||S(z,Z)>.35)continue;We++;let ze=n.int(7,12);for(let Ue=0;Ue<ze;Ue++){let be=n.range(0,wn),qe=Math.sqrt(n.next())*18,et=z+Math.cos(be)*qe,rt=Z+Math.sin(be)*qe,lt=x(et,rt);if(g<s[lt].width*.5+6+4+4)continue;let yt=M(et,rt);if(yt<3)continue;let Rt=n.range(4,6.5),Wt=n.range(3.5,6),cn=n.range(4,6.5),zt=n.pick([0,Math.PI/2])+n.range(-.15,.15),ti=yt-1;if(ye.push({x:et,y:ti,z:rt,ry:zt,sx:Rt,sy:Wt,sz:cn,col:n.pick(a1),v:1}),He.push({x:et,y:ti+Wt,z:rt,ry:zt,sx:Rt*1.08,sy:n.range(1.8,2.6),sz:cn*1.08}),a)for(let zi of[-1,1]){let w=zi*Rt*.28,q=cn/2+.03;ge.push({x:et+w*Math.cos(zt)+q*Math.sin(zt),y:ti+Wt*.55,z:rt-w*Math.sin(zt)+q*Math.cos(zt),ry:zt})}}}let Xe=new ut({color:16777215,flatShading:!0,roughness:.85}),he=new ut({color:11818298,flatShading:!0,roughness:.8});if(ye.length){let N=new $n(1,1,1).translate(0,.5,0),z=new fn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0);fe.add(Jn(N,Xe,ye),Jn(z,he,He))}if(a&&ge.length){let N=new $n(1.2,1.1,.12);fe.add(Jn(N,new Ht({color:16761466}),ge,!1))}if(a){let N=0,z=0,Z=!1;for(let $=0;$<4e3&&!Z;$++){let Q=I(),Me=b(),ze=x(Q,Me),Ue=s[ze].width*.5;if(g<Ue+220||g>Ue+420)continue;let be=M(Q,Me);be<6||be>30||(N=Q,z=Me,Z=!0)}if(Z){let $=[],Q=[],Me=n.int(9,13);for(let ze=0;ze<Me;ze++){let Ue=N+n.range(-110,110),be=z+n.range(-110,110),qe=M(Ue,be);if(qe<2)continue;let et=n.range(6,10),rt=n.range(30,70);$.push({x:Ue,y:qe,z:be,sx:et,sy:rt,sz:et,col:1777720,v:n.range(.8,1.2)});let lt=n.pick(l1);for(let yt=0;yt<3;yt++){let Rt=yt*wn/3+n.range(0,.5);Q.push({x:Ue+Math.cos(Rt)*et*.88,y:qe+rt*.05,z:be+Math.sin(Rt)*et*.88,ry:-Rt,sy:rt*.9,col:lt,v:1})}}fe.add(Jn(new fn(.72,1,1,6).translate(0,.5,0),new ut({color:16777215,flatShading:!0,roughness:.7}),$),Jn(new $n(.5,1,.25).translate(0,.5,0),new Ht({color:16777215}),Q,!1))}}{let N=[],z=[];for(let $=1;$<E-1;$++)for(let Q=1;Q<T-1;Q++){let Me=$*T+Q,ze=C[Me];if(ze<2||ze>30)continue;let Ue=x(_+Q*on,A+$*on);if(g<s[Ue].width*.5+60)continue;(C[Me-1]<0||C[Me+1]<0||C[Me-T]<0||C[Me+T]<0?N:z).push(Me)}let Z=N.length?N:z;if(Z.length){let $=n.pick(Z),Q=$%T,Me=($-Q)/T,ze=new dt(g1(),new ut({vertexColors:!0,flatShading:!0,roughness:.6}));ze.position.set(_+Q*on,C[$]-.5,A+Me*on),ze.castShadow=!0,fe.add(ze)}}let Le=G(4,2e4,(N,z)=>{if(M(N,z)>-3)return null;let Z=x(N,z);return g<s[Z].width*.5+250||g>900?null:{x:N,y:-.2,z,ry:n.range(0,wn),col:16777215,v:1}});Le.length&&fe.add(Jn(_1(),new ut({vertexColors:!0,flatShading:!0,roughness:.6}),Le));let de=[],Ae=[];for(let N=0;N<2e4&&de.length<3;N++){let z=I(),Z=b(),$=x(z,Z);if(g<s[$].width*.5+60)continue;let Q=M(z,Z);Q<55||de.some(Me=>Math.hypot(Me.x-z,Me.z-Z)<200)||de.push({x:z,y:Q,z:Z,ry:n.range(0,wn),speed:n.range(.9,1.5),phase:n.range(0,wn)})}let B=new $n(.7,14,.22).translate(0,7,0),ve=new ut({color:15659507,flatShading:!0,roughness:.6}),R=null;if(de.length){fe.add(Jn(new fn(.8,.35,30,6).translate(0,15,0),ve,de));for(let N of de)Ae.push(new je().compose(new O(N.x,N.y+30,N.z),new hn().setFromAxisAngle(r1,N.ry),new O(1,1,1)));R=new ci(B,ve,de.length*3),R.castShadow=!0,fe.add(R)}function P(N){if(R){for(let z=0;z<de.length;z++){let Z=N*de[z].speed+de[z].phase;for(let $=0;$<3;$++)Kp.makeRotationZ(Z+$*wn/3),Zp.multiplyMatrices(Ae[z],Kp),R.setMatrixAt(z*3+$,Zp)}R.instanceMatrix.needsUpdate=!0}}P(0);function U(N,z,Z){Se.position.set(Z.x+V.x*200,Z.y+V.y*200,Z.z+V.z*200),Se.target.position.set(Z.x,Z.y,Z.z),J.position.set(Z.x,0,Z.z);for(let $=0;$<K;$++)_e.setY($,.35*Math.sin(X[$]*.02+z*.8)+.25*Math.cos(oe[$]*.017-z*.6));_e.needsUpdate=!0,P(z)}function W(){i.remove(fe),fe.traverse(N=>{if(N.geometry&&N.geometry.dispose(),N.material){let z=Array.isArray(N.material)?N.material:[N.material];for(let Z of z)Z.dispose()}}),Se.shadow.map&&Se.shadow.map.dispose(),fe.clear(),i.fog===De&&(i.fog=$e??null),i.background===Ee&&(i.background=Be??null)}return i.add(fe),{group:fe,sun:Se,update:U,dispose:W,heightAt:M}}var yc=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Nh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=rs.extractUrlBase(e);o=rs.resolveURL(l,this.path)}else o=rs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Mo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===nm){try{o[at.KHR_BINARY_GLTF]=new Uh(e)}catch(h){s&&s(h);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Vh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new xh;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new Fh(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new Oh;break;case at.KHR_MESH_QUANTIZATION:o[h]=new Bh;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function y1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_h=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],sn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Lr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ka(u),l.distance=h;break;case"spot":l=new Pr(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},xh=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let s=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}},vh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},yh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Sh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Lt)),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ph=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lh=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Dh=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},Nh=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==kn.TRIANGLES&&l.mode!==kn.TRIANGLE_STRIP&&l.mode!==kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(let g of h){let x=new je,m=new O,d=new hn,y=new O(1,1,1),v=new ci(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,x.compose(m,d,y));for(let _ in c)if(_==="_COLOR_0"){let A=c[_];v.instanceColor=new Cs(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);At.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},nm="glTF",Do=12,jp={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Do),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Do,r=new DataView(e,Do),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===jp.JSON){let l=new Uint8Array(e,Do+o,a);this.content=n.decode(l)}else if(c===jp.BIN){let l=Do+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Fh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=kh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=kh[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=kr[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let x=p.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(p)},a,l,sn,f)})})}},Oh=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bh=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Mc=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*l,x=g-l,m=-2*p+3*f,d=p-f,y=1-m,v=d-f+h;for(let _=0;_!==a;_++){let A=o[x+_+a],T=o[x+_+c]*u,E=o[g+_+a],C=o[g+_]*u;r[_]=y*A+v*T+m*E+d*C}return r}},M1=new hn,zh=class extends Mc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return M1.fromArray(r).normalize().toArray(r),r}},kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qp={9728:nn,9729:pn,9984:Nu,9985:co,9986:ar,9987:si},em={33071:bi,33648:po,10497:Ai},ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},S1={CUBICSPLINE:void 0,LINEAR:yr,STEP:vr},mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function b1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function Fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T1(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function E1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function A1(i){let e,t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gh(t.attributes):e=i.indices+":"+gh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+gh(i.targets[n]);return e}function gh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Hh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function w1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var R1=new je,Vh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new y1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ya(this.options.manager):this.textureLoader=new $a(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Fs(r,a,s),Ni(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(rs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ph[s.type],a=kr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new ct(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ph[s.type],l=kr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==h){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,v=t.cache.get(y);v||(x=new l(a,d*p,s.count*p/u),v=new Ar(x,p/u),t.cache.add(y,v)),m=new Rs(v,c,f%p/u,g)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new ct(x,c,g);if(s.sparse!==void 0){let d=ph.SCALAR,y=kr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,A=new y(o[1],v,s.sparse.count*d),T=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=A.length;E<C;E++){let M=A[E];if(m.setX(M,T[E*c]),c>=2&&m.setY(M,T[E*c+1]),c>=3&&m.setZ(M,T[E*c+2]),c>=4&&m.setW(M,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Qp[f.magFilter]||pn,u.minFilter=Qp[f.minFilter]||si,u.wrapS=em[f.wrapS]||Ai,u.wrapT=em[f.wrapT]||Ai,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==pn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Yt(x);m.needsUpdate=!0,f(m)}),t.load(rs.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Ni(h,o),h.userData.mimeType=o.mimeType||w1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ps,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new es,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ut}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){let h=s[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Lt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jt);let u=r.alphaMode||mh.OPAQUE;if(u===mh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===mh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ht&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ge(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ht&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ht){let h=r.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],sn)}return r.emissiveTexture!==void 0&&o!==Ht&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ni(h,r),t.associations.set(h,{materials:e}),r.extensions&&Fs(s,h,r),h})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return tm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=A1(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=tm(new pt,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?b1(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p],m=o[p],d,y=l[p];if(m.mode===kn.TRIANGLES||m.mode===kn.TRIANGLE_STRIP||m.mode===kn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Ba(x,y):new dt(x,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===kn.TRIANGLE_STRIP?d.geometry=dh(d.geometry,Qa):m.mode===kn.TRIANGLE_FAN&&(d.geometry=dh(d.geometry,To));else if(m.mode===kn.LINES)d=new Is(x,y);else if(m.mode===kn.LINE_STRIP)d=new wr(x,y);else if(m.mode===kn.LINE_LOOP)d=new Ga(x,y);else if(m.mode===kn.POINTS)d=new ts(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&E1(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ni(d,r),m.extensions&&Fs(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Fs(s,h[0],r),h[0];let f=new xt;r.extensions&&Fs(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(qd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ka(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],x=h[3],m=h[4],d=[];for(let y=0,v=f.length;y<v;y++){let _=f[y],A=p[y],T=g[y],E=x[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=n._createAnimationTracks(_,A,T,E,C);if(M)for(let S=0;S<M.length;S++)d.push(M[S])}return new qa(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,R1)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new yo:l.length>1?u=new xt:l.length===1?u=l[0]:u=new At,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ni(u,r),r.extensions&&Fs(n,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new xt;n.name&&(r.name=s.createUniqueName(n.name)),Ni(r,n),n.extensions&&Fs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof mn||f instanceof Yt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];fs[r.path]===fs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(fs[r.path]){case fs.weights:l=Ri;break;case fs.rotation:l=Ci;break;case fs.position:case fs.scale:l=Ii;break;default:n.itemSize===1?l=Ri:l=Ii;break}let u=s.interpolation!==void 0?S1[s.interpolation]:yr,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+fs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ci?zh:Mc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function C1(i,e,t){let n=e.attributes,s=new Un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){let u=Hh(kr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,c=new O;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=Hh(kr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function tm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=kh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Ni(i,e),C1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?T1(i,e.targets,t):i})}var No=null;async function im(i="assets/bike.glb"){if(No)return No;let e=await new yc().loadAsync(i),t={},n={};for(let o of e.scene.children)o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1),t[o.name]=o,o.traverse(a=>{a.isMesh&&a.material?.name&&(n[a.material.name]=a.material)});let r=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"].filter(o=>!t[o]);if(r.length)throw new Error("bike.glb incomplet : "+r.join(", "));return No={parts:t,mats:n},No}function sm(){return No}var Ut=0,Kt=1,Fi=2,Tc=.32,bc=-.7,hm=.7,Ui=[0,-Tc,-bc],fm=[0,-Tc,-hm],rm=.62,I1=.35,ds=Math.PI*2,Cn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,n,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],c=e[2]+r[2],l=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=n[0]+r[0],p=n[1]+r[1],g=n[2]+r[2],x=l-o,m=u-a,d=h-c,y=f-o,v=p-a,_=g-c,A=m*_-d*v,T=d*y-x*_,E=x*v-m*y,C=(o+l+f)/3-(s[0]+r[0]),M=(a+u+p)/3-(s[1]+r[1]),S=(c+h+g)/3-(s[2]+r[2]),L=this.pos;A*C+T*M+E*S>=0?L.push(o,a,c,l,u,h,f,p,g):L.push(o,a,c,f,p,g,l,u,h)}quad(e,t,n,s,r){this.tri(e,t,n,r),this.tri(e,n,s,r)}build(){this.closeGroup();let e=new pt;e.setAttribute("position",new vt(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function P1(i){let e=0,t=0,n=0;for(let r of i)e+=r[0],t+=r[1],n+=r[2];let s=i.length;return[e/s,t/s,n/s]}function L1(i,e){return[(i[0]+e[0])/2,(i[1]+e[1])/2,(i[2]+e[2])/2]}function om(i,e,t,n){let s=e.length;for(let r=0;r<s;r++)i.tri(t,e[r],e[(r+1)%s],n)}function ps(i,e,t,n,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,c=e.map(P1);for(let l=0;l<o-1;l++){let u=e[l],h=e[l+1],f=L1(c[l],c[l+1]);for(let p=0;p<a;p++){let g=(p+1)%a;i.setSlot(r(l,p)),i.quad(u[p],u[g],h[g],h[p],f)}}i.setSlot(n),om(i,e[0],c[0],c[1]),i.setSlot(s),om(i,e[o-1],c[o-1],c[o-2])}function Rn(i,e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],u=Math.hypot(a,c,l)||1,h=[a/u,c/u,l/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],p=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*h[2]-p[2]*h[1],p[2]*h[0]-p[0]*h[2],p[0]*h[1]-p[1]*h[0]],m=(d,y)=>{let v=[];for(let _=0;_<r;_++){let A=ds*_/r,T=Math.cos(A)*y,E=Math.sin(A)*y;v.push([d[0]+T*p[0]+E*x[0],d[1]+T*p[1]+E*x[1],d[2]+T*p[2]+E*x[2]])}return v};ps(i,[m(e,n),m(t,s)],o,o,o)}function Bs(i,e,t,n){i.setSlot(n);let s=(a,c,l)=>[e[0]+a*t[0],e[1]+c*t[1],e[2]+l*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)i.tri(r[a[0]],r[a[1]],r[a[2]],e),i.tri(r[a[0]],r[a[2]],r[a[3]],e)}var Ec=3,Fo=4;function D1(i,e,t,n,s,r,o,a,c){return[[0,e,i],[o,t,i],[a,n,i],[c,s,i],[0,r,i],[-c,s,i],[-a,n,i],[-o,t,i]]}function N1(){let i=new Cn(Ui),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(n=>D1(...n));ps(i,t,(n,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?n===7||n===8?Kt:Ut:o?n>=9?Ec:Ut:a?n>=2&&n<=5?Ec:n>=7&&n<=8?Kt:Ut:n>=3&&n<=6?Fi:Kt},Ut,Ut);for(let n of[-1,1])Rn(i,[.11*n,.46,-.26],[.1*n,.32,-.7],.04,.03,5,Fo),Rn(i,[.14*n,.44,-.3],[.22*n,.42,-.32],.018,.018,4,Kt),Rn(i,[.1*n,.95,.42],[.27*n,.93,.35],.02,.02,4,Kt);return Rn(i,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,Fo),Rn(i,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,Fo),Rn(i,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,Kt),Bs(i,[0,.685,-.74],[.06,.012,.16],Kt),i.build()}function U1(){let i=new Cn(Ui),e=(t,n,s,r)=>[[0,n,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return ps(i,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],Ut,Ut,Ut),i.build()}function F1(){let i=new Cn(Ui);return Bs(i,[0,.985,-1.085],[.04,.02,.014],Ut),i.build()}function O1(){let i=new Cn;return Rn(i,[0,0,0],[0,0,-.45],.05,.004,6,Ut),i.build()}function B1(){let i=new Cn(Ui);for(let e of[-1,1]){let t=[.062*e,.795,.905];i.setSlot(Ut);let n=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];i.quad(n[0],n[1],n[2],n[3],[t[0],t[1],t[2]-.2])}return i.build()}function z1(){let i=new Cn(fm);for(let n of[-1,1])Rn(i,[.085*n,.32,.7],[.085*n,.56,.615],.032,.032,5,Kt),Rn(i,[.085*n,.56,.615],[.085*n,.88,.5],.024,.024,5,Fi),Bs(i,[.1*n,.33,.74],[.012,.05,.035],Fo);let e=.34,t=[];for(let n of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(n),r=.7+Math.sin(n),o=(a,c)=>[a,.32+c*Math.cos(n),.7+c*Math.sin(n)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return ps(i,t,Ut,Ut,Ut),i.build()}function am(i,e){let t=new Cn,n=14,s=(o,a)=>{let c=[];for(let l=0;l<n;l++){let u=ds*l/n;c.push([o,a*Math.cos(u),a*Math.sin(u)])}return c};ps(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*i,a)),Kt,Kt,Kt);for(let o of[-1,1]){let a=o*(.62*i+.004),c=[a,0,0],l=[0,0,0],u=10;for(let h=0;h<u;h++){let f=ds*h/u,p=ds*(h+1)/u;t.setSlot(h%2?Kt:Fi),t.tri(c,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],l)}if(e){let h=o*(.62*i+.012);t.setSlot(Fo);for(let f=0;f<u;f++){let p=ds*f/u,g=ds*(f+1)/u;t.quad([h,.09*Math.cos(p),.09*Math.sin(p)],[h,.16*Math.cos(p),.16*Math.sin(p)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],l)}}}return t.build()}function k1(){let i=new Cn,e=[0,.11,.015],t=[.125,.135,.155],n=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,c=Math.cos(a),l=[];for(let u=0;u<n;u++){let h=ds*(u+.5)/n;l.push([e[0]+t[0]*c*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*c*Math.sin(h)])}r.push(l)}return ps(i,r,(o,a)=>{let c=ds*(a+1)/n;return Math.sin(c)>.45&&(o===1||o===2)?Kt:Math.abs(Math.cos(c))<.35?Fi:Ut},Kt,Ut),i.build()}function Uo(i,e,t,n){return[[e,i,0],[e*.55,i,t],[-e*.55,i,t],[-e,i,0],[-e*.55,i,-n],[e*.55,i,-n]]}function H1(){let i=new Cn,e=[Uo(-.08,.13,.09,.1),Uo(.04,.145,.1,.1),Uo(.22,.185,.11,.11),Uo(.38,.205,.1,.1),Uo(.45,.09,.06,.07)];return ps(i,e,(t,n)=>t===0?Fi:t===2&&(n===0||n===2||n===3||n===5)?Ec:Ut,Kt,Kt),ps(i,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],Fi,Fi,Fi),i.build()}function cm(i){let e=new Cn,t=[.09*i,-.09,.5];return Rn(e,[0,0,0],t,.058,.048,5,Ut),Rn(e,t,[0,0,.93],.046,.038,5,Ut),Bs(e,[0,0,.97],[.042,.04,.05],Kt),Bs(e,[0,.015,.02],[.052,.04,.05],Ec),e.build()}function lm(i){let e=new Cn,t=[.11*i,-.19,.42],n=[.085*i,-.47,.05];return Rn(e,[0,0,0],t,.082,.066,6,Ut),Rn(e,t,n,.062,.05,5,Ut),Bs(e,[t[0]+.035*i,t[1]-.02,t[2]+.02],[.025,.05,.045],Fi),Bs(e,[n[0],n[1]-.04,n[2]+.04],[.045,.05,.115],Kt),e.build()}var Gh=null;function V1(){return Gh||(Gh={body:N1(),bubble:U1(),tail:F1(),flame:O1(),fork:z1(),headlight:B1(),wheelRear:am(.1,!1),wheelFront:am(.068,!0),helmet:k1(),torso:H1(),armR:cm(-1),armL:cm(1),legR:lm(-1),legL:lm(1)}),Gh}var jn=(i,e,t)=>i<e?e:i>t?t:i,dm=i=>jn(i,0,1),Os=i=>Number.isFinite(i)?i:0,Sc=i=>typeof i=="boolean"?i?1:0:dm(Os(i));function Hn(i,e){return i.name=e,i}function um(i,e,t,n){let s=new dt(i,e);return s.name=t,s.castShadow=n,s.receiveShadow=!1,s}function pm({color:i=14034984,accent:e=16761395,isPlayer:t=!1}={}){let n=V1(),s=ce=>new ut({flatShading:!0,side:Jt,...ce}),r=s({color:new Oe(i),metalness:.35,roughness:.3}),o=s({color:1382173,metalness:.2,roughness:.7}),a=s({color:new Oe(e),metalness:.45,roughness:.35}),c=s({color:15856108,metalness:.15,roughness:.45}),l=s({color:11120312,metalness:.9,roughness:.32}),u=[r,o,a,c,l],h=s({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),f=s({color:16777215,emissive:16774358,emissiveIntensity:2.4}),p=s({color:3342336,emissive:16718362,emissiveIntensity:.8}),g=sm(),x=null;if(g){let ce=(Se,F)=>{let $e=g.mats[Se].clone();return $e.color.set(F),$e};x={Paint:ce("Paint",i),Suit:ce("Suit",i),Accent:ce("Accent",e),Tail:g.mats.Tail.clone()}}function m(ce,Se,F,$e,Be){if(!g)return um(Se,F,ce,$e);let De=g.parts[ce].clone(!0);return De.name=ce,Be&&De.position.set(Be[0],Be[1],Be[2]),De.traverse(Ee=>{Ee.isMesh&&(Ee.material=x[Ee.material.name]||Ee.material,Ee.castShadow=$e)}),De}let d=s({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),y=Hn(new xt,"bike"),v=Hn(new xt,"leanPivot"),_=Hn(new xt,"pitchPivot");_.position.set(0,Tc,bc);let A=Hn(new xt,"rearWheel");A.add(m("wheelRear",n.wheelRear,u,!0));let T=Hn(new xt,"chassis"),E=m("body",n.body,u,!0,Ui),C=m("bubble",n.bubble,h,!1,Ui),M=m("tail",n.tail,p,!1,Ui),S=m("headlight",n.headlight,f,!1,Ui),L=um(n.flame,d,"flame",!1);L.position.set(.205,.215,-.26),L.rotation.x=-.42,L.scale.z=.02,L.visible=!1;let k=Hn(new xt,"hips");k.position.set(0,rm,I1);let H=Hn(new xt,"torso"),j=Hn(new xt,"head");j.position.set(0,.45,.01),j.add(m("helmet",n.helmet,u,!0)),H.add(m("torso",n.torso,u,!0),j);let le=m("armR",n.armR,u,!0),ne=m("armL",n.armL,u,!0),pe=Hn(new xt,"legR");pe.position.set(-.12,-.02,0),pe.add(m("legR",n.legR,u,!0));let ee=Hn(new xt,"legL");ee.position.set(.12,-.02,0),ee.add(m("legL",n.legL,u,!0)),k.add(H,le,ne,pe,ee),T.add(E,C,M,S,L,k),g&&T.add(m("frame",null,null,!0,Ui));let fe=Hn(new xt,"steerPivot");fe.position.set(0,0,hm-bc);let we=m("fork",n.fork,u,!0,fm),Re=Hn(new xt,"frontWheel");if(Re.add(m("wheelFront",n.wheelFront,u,!0)),fe.add(we,Re),_.add(A,T,fe),v.add(_),y.add(v),t){let ce=new Pr(16773590,60,60,.5,.6,2);ce.name="headSpot",ce.castShadow=!1,ce.position.set(0,1,.9),ce.target.position.set(0,.2,30),ce.target.name="headSpotTarget",y.add(ce,ce.target)}let te={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},_e=.2,K=.37,X=.02,oe=[.25,.93-Tc,.36-bc],D=new O,V=new O,J=new O(0,0,1);function re(ce,Se){D.set(_e*Se,K,X).applyEuler(H.rotation),V.set(oe[0]*Se-k.position.x,oe[1]-k.position.y,oe[2]-k.position.z);let F=Math.cos(-k.rotation.z),$e=Math.sin(-k.rotation.z),Be=V.x*F-V.y*$e,De=V.x*$e+V.y*F;V.x=Be,V.y=De,ce.position.copy(D),V.sub(D);let Ee=V.length()||1;ce.scale.z=Ee,ce.quaternion.setFromUnitVectors(J,V.multiplyScalar(1/Ee))}function xe(ce,Se){let F=ce||{},$e=Number.isFinite(Se)?jn(Se,0,.1):1/60,Be=1-Math.exp(-$e*14),De=1-Math.exp(-$e*5);te.lean+=(jn(Os(F.lean),-1.5,1.5)-te.lean)*Be,te.steer+=(jn(Os(F.steer),-1,1)-te.steer)*Be,te.pitch+=(jn(Os(F.pitch),-.9,.9)-te.pitch)*Be,te.compress+=(jn(Os(F.compress),-1,1)-te.compress)*Be,te.sr+=(dm(Os(F.speedRatio))-te.sr)*De,te.brake+=(Sc(F.braking)-te.brake)*De,te.air+=(Sc(F.airborne)-te.air)*De,te.drift+=(Sc(F.drift)-te.drift)*De,te.boost+=(Sc(F.boost)-te.boost)*De;let Ee=te.lean,Ve=(Number.isFinite(F.speed)?F.speed:te.sr*80)*3.6;v.rotation.z=Ee,_.rotation.x=-te.pitch,fe.rotation.y=-.45*te.steer*jn(1-2*te.sr,0,1),T.position.y=-.07*te.compress;let Ne=jn((Ve-20)/100,0,1),I=jn(Math.abs(Ee)*2.27,0,1),b=Ee>=0?1:-1,G=I*(1-jn((Ve-30)/30,0,1));k.position.x=-.17*I*b,k.position.y=rm+.1*te.air,k.rotation.z=-.2*I*b,H.rotation.x=jn(.45+.55*Ne-.2*te.brake-.25*te.air+.1*te.boost,.2,1.05),H.rotation.z=-.1*I*b,j.rotation.x=-.35*Ne+.1*te.air,j.rotation.y=-.35*I*b,j.rotation.z=-.4*Ee;let ue=.55*I+.3*G;pe.rotation.y=b>0?-ue:0,ee.rotation.y=b<0?ue:0,re(le,-1),re(ne,1),(x?x.Tail:p).emissiveIntensity=(x?2:.8)+(x?6:2.2)*te.brake,L.visible=te.boost>.03,L.scale.z=.02+1.3*te.boost,d.emissiveIntensity=1.5+2*te.boost;let me=Os(F.wheelSpin);A.rotation.x=me,Re.rotation.x=me}return xe({},0),{group:y,update:xe}}var mm=Math.PI*2,Ot=6e3,Hr=2200,gm=60,_m=30,xm=60,G1=3,Oo=2e3,zs=170,qh=1.5,W1=13,vm=W1-qh,Wh=120,X1={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},q1=new Oe(16777215),Y1=new Oe(8386303);function xn(i,e){return i+(e-i)*Math.random()}function Bo(i,e,t){return i<e?e:i>t?t:i}function ms(i,e=0){return Number.isFinite(i)?i:e}function Z1(i){return Number.isFinite(i)?Bo(i,0,.1):0}function Xh(i,e){return i-e*Math.floor(i/e+.5)}function K1(){let i=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return i*e}var $1=`
attribute float aSize;
attribute vec3 aColor;
attribute float aAlpha;
attribute float aMode;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
varying float vMode;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vMode = aMode;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.5), 0.0, 256.0);
}`,J1=`
varying vec3 vColor;
varying float vAlpha;
varying float vMode;
void main() {
  // Disque \xE0 bord fondu : volutes douces pour la fum\xE9e et la poussi\xE8re,
  // c\u0153ur brillant et halo pour les \xE9tincelles et les flammes.
  float r = length(gl_PointCoord - 0.5) * 2.0;
  if (r > 1.0) discard;
  if (vMode > 0.5) {
    float core = pow(1.0 - r, 2.2);
    gl_FragColor = vec4(vColor * vAlpha * (core * 2.4 + 0.15 * (1.0 - r)), 0.0);
  } else {
    float a = vAlpha * smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(vColor * a, a);
  }
}`,j1=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Q1=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function ym(i,e){let t=e||{},n=ms(t.rain,0),s=ms(t.wind,0),r=new Float32Array(Ot*3),o=new Float32Array(Ot*3),a=new Float32Array(Ot*3),c=new Float32Array(Ot*3),l=new Float32Array(Ot*3),u=new Float32Array(Ot),h=new Float32Array(Ot),f=new Float32Array(Ot),p=new Float32Array(Ot),g=new Float32Array(Ot),x=new Float32Array(Ot),m=new Float32Array(Ot),d=new Float32Array(Ot),y=new Float32Array(Ot),v=new Float32Array(Ot),_=new Float32Array(Ot),A=new Uint8Array(Ot),T=0,E=!1,C=new pt,M=new ct(r,3).setUsage(li),S=new ct(l,3).setUsage(li),L=new ct(u,1).setUsage(li),k=new ct(h,1).setUsage(li),H=new ct(f,1).setUsage(li);C.setAttribute("position",M),C.setAttribute("aColor",S),C.setAttribute("aSize",L),C.setAttribute("aAlpha",k),C.setAttribute("aMode",H);let j=new wt({uniforms:{uScale:{value:700}},vertexShader:$1,fragmentShader:J1,transparent:!0,depthWrite:!1,blending:wu,blendSrc:Ru,blendDst:fo,blendEquation:Si}),le=new ts(C,j);le.frustumCulled=!1,i.add(le);function ne(he,Le,de,Ae,B,ve,R,P=1){let U=X1[he];if(!U||!Number.isFinite(Le)||!Number.isFinite(de)||!Number.isFinite(Ae))return;let W=ms(B),N=ms(ve),z=ms(R),Z=Math.min(Ot,Math.max(0,Math.floor(ms(P,1))));for(let $=0;$<Z;$++){let Q=T;T=(T+1)%Ot;let Me,ze,Ue;if(U.ring){let qe=(Z>1?$/Z:Math.random())*mm+Math.random()*.2,et=xn(3.5,5.5);Me=Math.cos(qe)*et+W*.3,Ue=Math.sin(qe)*et+z*.3,ze=xn(U.lift[0],U.lift[1])+N*.3}else Me=W+xn(-U.spread,U.spread),Ue=z+xn(-U.spread,U.spread),ze=N+xn(U.lift[0],U.lift[1]);let be=Q*3;r[be]=Le+xn(-.1,.1),r[be+1]=de,r[be+2]=Ae+xn(-.1,.1),o[be]=Me,o[be+1]=ze,o[be+2]=Ue,p[Q]=0,g[Q]=U.life*xn(.85,1.15),x[Q]=U.drag,m[Q]=U.grav,d[Q]=U.s0*xn(.85,1.2),y[Q]=U.s1*xn(.85,1.2),v[Q]=U.a0,_[Q]=de,A[Q]=U.bounce?1:0,f[Q]=U.add?1:0,a[be]=U.c0[0],a[be+1]=U.c0[1],a[be+2]=U.c0[2],c[be]=U.c1[0],c[be+1]=U.c1[1],c[be+2]=U.c1[2]}Z>0&&(E=!0)}function pe(he){let Le=!1;for(let de=0;de<Ot;de++){if(g[de]<=0)continue;if(Le=!0,p[de]+=he,p[de]>=g[de]){g[de]=0,h[de]=0,u[de]=0;continue}let Ae=de*3,B=Math.max(0,1-x[de]*he),ve=o[Ae]*B,R=o[Ae+1]*B-m[de]*he,P=o[Ae+2]*B,U=r[Ae]+ve*he,W=r[Ae+1]+R*he,N=r[Ae+2]+P*he;A[de]&&W<_[de]&&R<0&&(W=_[de],R=-R*.35,ve*=.6,P*=.6,A[de]=0),o[Ae]=ve,o[Ae+1]=R,o[Ae+2]=P,r[Ae]=U,r[Ae+1]=W,r[Ae+2]=N;let z=p[de]/g[de];u[de]=d[de]+(y[de]-d[de])*z,h[de]=v[de]*(1-z*z),l[Ae]=a[Ae]+(c[Ae]-a[Ae])*z,l[Ae+1]=a[Ae+1]+(c[Ae+1]-a[Ae+1])*z,l[Ae+2]=a[Ae+2]+(c[Ae+2]-a[Ae+2])*z}return Le}let ee=null;if(n>0){let he=new pt,Le=new Float32Array(Hr*6),de=new ct(Le,3).setUsage(li);he.setAttribute("position",de);let Ae=new Float32Array(Hr*3),B=new Float32Array(Hr),ve=new Float32Array(Hr);for(let U=0;U<Hr;U++)Ae[U*3]=(Math.random()-.5)*gm,Ae[U*3+1]=-12+Math.random()*_m,Ae[U*3+2]=(Math.random()-.5)*xm,B[U]=xn(22,30),ve[U]=xn(.8,1.2);let R=new es({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),P=new Is(he,R);P.frustumCulled=!1,i.add(P),ee={geo:he,mat:R,lines:P,attr:de,pa:Le,head:Ae,fall:B,len:ve,windX:5.5*s,windZ:2*s}}function fe(he,Le,de){let Ae=ee,B=Ae.pa,ve=Ae.head,R=Ae.windX,P=Ae.windZ,U=Le.x,W=Le.y+G1,N=Le.z;for(let z=0;z<Hr;z++){let Z=z*3,$=U+Xh(ve[Z]-U,gm),Q=W+Xh(ve[Z+1]-W,_m),Me=N+Xh(ve[Z+2]-N,xm),ze=Ae.fall[z],Ue=R-de.x,be=-ze-de.y,qe=P-de.z,et=.05*Ae.len[z],rt=z*6;B[rt]=$-Ue*et,B[rt+1]=Q-be*et,B[rt+2]=Me-qe*et,B[rt+3]=$,B[rt+4]=Q,B[rt+5]=Me,ve[Z]=$+R*he,ve[Z+1]=Q-ze*he,ve[Z+2]=Me+P*he}Ae.attr.needsUpdate=!0}let we=new Float32Array(Oo*4*3),Re=new Float32Array(Oo*4),te=new Uint16Array(Oo*6);for(let he=0;he<Oo;he++){let Le=he*4;te.set([Le,Le+1,Le+2,Le,Le+2,Le+3],he*6)}let _e=new pt,K=new ct(we,3).setUsage(li),X=new ct(Re,1).setUsage(li);_e.setAttribute("position",K),_e.setAttribute("aAlpha",X),_e.setIndex(new ct(te,1));let oe=new wt({uniforms:{uColor:{value:new Oe(1315086)}},vertexShader:j1,fragmentShader:Q1,transparent:!0,depthWrite:!1,side:Jt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),D=new dt(_e,oe);D.frustumCulled=!1,i.add(D);let V=0,J=1/0,re=-1;function xe(he,Le,de,Ae,B,ve,R=.3,P=.5){if(![he,Le,de,Ae,B,ve,R,P].every(Number.isFinite))return;let U=Ae-he,W=ve-de,N=Math.hypot(U,W);if(N<1e-4)return;let z=R*.5,Z=-W/N*z,$=U/N*z,Q=Bo(P,0,1),Me=Le+.03,ze=B+.03,Ue=V*4;V=(V+1)%Oo;let be=we,qe=Ue*3;be[qe]=he+Z,be[qe+1]=Me,be[qe+2]=de+$,be[qe+3]=he-Z,be[qe+4]=Me,be[qe+5]=de-$,be[qe+6]=Ae-Z,be[qe+7]=ze,be[qe+8]=ve-$,be[qe+9]=Ae+Z,be[qe+10]=ze,be[qe+11]=ve+$,Re[Ue]=Q,Re[Ue+1]=Q,Re[Ue+2]=Q,Re[Ue+3]=Q,Ue<J&&(J=Ue),Ue+3>re&&(re=Ue+3)}function ce(){if(re<0)return;let he=J,Le=re-J+1;K.clearUpdateRanges(),K.addUpdateRange(he*3,Le*3),K.needsUpdate=!0,X.clearUpdateRanges(),X.addUpdateRange(he,Le),X.needsUpdate=!0,J=1/0,re=-1}let Se=new xt;Se.matrixAutoUpdate=!1,i.add(Se);let F=new Float32Array(zs*6),$e=new ct(F,3).setUsage(li),Be=new pt;Be.setAttribute("position",$e);let De=new Float32Array(zs),Ee=new Float32Array(zs),Ve=new Float32Array(zs),Ne=new Float32Array(zs);for(let he=0;he<zs;he++){let Le=Math.random()*mm,de=xn(.8,1.5);De[he]=Math.cos(Le)*de,Ee[he]=Math.sin(Le)*de,Ve[he]=-qh-Math.random()*vm,Ne[he]=xn(.5,1.2)}let I=new es({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),b=new Is(Be,I);b.frustumCulled=!1,b.visible=!1,Se.add(b);let G=0,ue=0,me=0,ae=0;function Te(he,Le){me+=(G-me)*(1-Math.exp(-6*he)),ae+=(ue-ae)*(1-Math.exp(-8*he)),Le.updateMatrixWorld(),Se.matrix.copy(Le.matrixWorld),Se.matrixWorld.copy(Le.matrixWorld);let de=Bo((me-.55)/.45,0,1),Ae=Math.min(1,.55*de*de*(3-2*de)+.6*ae),B=Math.floor(Ae*zs);if(B<=0){b.visible=!1;return}b.visible=!0,Be.setDrawRange(0,B*2),I.color.copy(q1).lerp(Y1,ae),I.opacity=.05+.24*Ae;let ve=(60+110*Ae)*he,R=1.5+5*Ae,P=F;for(let U=0;U<B;U++){let W=Ve[U]+ve;W>-qh&&(W-=vm),Ve[U]=W;let N=-W,z=De[U]*N*.9,Z=Ee[U]*N*.5,$=R*Ne[U],Q=U*6;P[Q]=z,P[Q+1]=Z,P[Q+2]=W,P[Q+3]=z,P[Q+4]=Z,P[Q+5]=W-$}$e.needsUpdate=!0}let Ie=new O,ye=new O,He=!1,ge=!1;function Pe(he,Le){if(ge)return;he=Z1(he);let de=Le.position;He?he>0&&(ye.subVectors(de,Ie).divideScalar(he),ye.lengthSq()>Wh*Wh&&ye.setLength(Wh),Ie.copy(de)):(Ie.copy(de),ye.set(0,0,0),He=!0);let Ae=ms(Le.fov,60);j.uniforms.uScale.value=K1()/(2*Math.tan(Ae*Math.PI/360)),(pe(he)||E)&&(M.needsUpdate=!0,S.needsUpdate=!0,L.needsUpdate=!0,k.needsUpdate=!0,H.needsUpdate=!0,E=!1),ee&&he>0&&fe(he,de,ye),Te(he,Le),ce()}function We(he,Le){let de=Bo(ms(he,0),0,1.5);G=Bo((de-.7)/.3,0,1),ue=Le?1:0}function Xe(){ge||(ge=!0,i.remove(le,D,Se),ee&&i.remove(ee.lines),C.dispose(),j.dispose(),_e.dispose(),oe.dispose(),Be.dispose(),I.dispose(),ee&&(ee.geo.dispose(),ee.mat.dispose()))}return{emit:ne,addSkid:xe,setSpeed:We,update:Pe,dispose:Xe}}var Ac={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eb=new Qi(-1,1,1,-1,0,1),Yh=class extends pt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},tb=new Yh,gs=class{constructor(e){this._mesh=new dt(tb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vr=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=os.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zo=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wc=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ge);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vr(Ac),this.copyPass.material.blending=ri,this.clock=new Ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zo!==void 0&&(o instanceof zo?n=!0:o instanceof wc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cc=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Mm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Gr=class i extends In{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new jt(r,o,{type:En});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new jt(r,o,{type:En});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Mm;this.highPassUniforms=os.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ge(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ac;this.copyUniforms=os.clone(u.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new Ht,this.fsQuad=new gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ge(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Gr.BlurDirectionX=new Ge(1,0);Gr.BlurDirectionY=new Ge(0,1);var Sm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ic=class extends In{constructor(){super();let e=Sm;this.uniforms=os.clone(e.uniforms),this.material=new Wa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new gs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Iu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Du&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bm=62,nb=82,Tm=94,ib=9,sb=20,Em=3.7,rb=1.45,ob=3,ab=4,cb=5,Pc=.6;function _s(i,e,t){return i<e?e:i>t?t:i}function bt(i,e=0){return Number.isFinite(i)?i:e}function lb(i,e,t){return i+(e-i)*t}function Wr(i,e){return 1-Math.exp(-i*e)}function ub(i){return Number.isFinite(i)?_s(i,0,.1):0}function Am(i){let e=new O,t=new O,n=new O,s=new O,r={x:1,z:0},o=!1,a=0,c=0,l=0,u=bm,h=Em,f=0,p=0,g=0;function x(A,T){let E=bt(A.x),C=bt(A.y),M=bt(A.z),S=bt(A.heading)+bt(A.yaw),L=Math.sin(S),k=Math.cos(S),H=-k,j=L;r.x=H,r.z=j;let le=A.airborne?1:0,ne=T*T,pe=Em-.5*ne+.9*le,ee=rb-.22*ne+.7*le;h=pe;let fe=_s(bt(A.slope),-.15,.15),Re=_s(bt(A.lean),-1.5,1.5)*0;e.set(E-L*pe+H*Re,C+ee-fe*pe,M-k*pe+j*Re),e.y<C+Pc&&(e.y=C+Pc),t.set(E+L*7,C+1+fe*4-1.5*le,M+k*8)}function m(A){return lb(bm,nb,Math.pow(A,1.6))}function d(A,T,E,C){i.position.set(n.x+r.x*T,Math.max(n.y+E,C),n.z+r.z*T),i.lookAt(s),i.rotateZ(A)}function y(A,T){if(A=ub(A),!o){v(T);return}a+=A;let E=_s(bt(T.speedRatio),0,1);x(T,E);let C=bt(T.x)-f,M=bt(T.y)-p,S=bt(T.z)-g;C*C+M*M+S*S<400&&(n.x+=C,n.y+=M,n.z+=S,s.x+=C,s.y+=M,s.z+=S),f=bt(T.x),p=bt(T.y),g=bt(T.z),n.lerp(e,Wr(ib,A));let L=n.x-bt(T.x),k=n.z-bt(T.z),H=Math.hypot(L,k);H>.001&&(n.x=bt(T.x)+L/H*h,n.z=bt(T.z)+k/H*h),s.lerp(t,Wr(sb,A));let j=bt(T.y)+Pc;n.y<j&&(n.y=j),l*=Math.exp(-cb*A);let le=E*E*E*2.2,ne=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,pe=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,ee=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,fe=l*.35+le*.01,we=ne*fe,Re=pe*fe,te=ee*(l*.03+le*.002);c+=((T.boosting?1:0)-c)*Wr(ab,A);let _e=m(E),K=_e+(Tm-_e)*c;u+=(K-u)*Wr(ob,A),Math.abs(i.fov-u)>1e-4&&(i.fov=u,i.updateProjectionMatrix()),d(te,we,Re,j)}function v(A){let T=_s(bt(A.speedRatio),0,1);x(A,T),n.copy(e),s.copy(t),f=bt(A.x),p=bt(A.y),g=bt(A.z),o=!0,a=0,l=0,c=A.boosting?1:0,u=m(T)+(Tm-m(T))*c,i.fov=u,i.updateProjectionMatrix(),d(0,0,0,bt(A.y)+Pc)}function _(A){l=_s(l+bt(A),0,1.5)}return{update:y,shake:_,snap:v}}var hb=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fb=`
uniform sampler2D tDiffuse;
uniform float uSpeed;
uniform float uBoost;
uniform float uTime;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 c = vUv - 0.5;
  float r = length(c);
  float amt = clamp(uSpeed * 0.6 + uBoost * 0.4, 0.0, 1.0);

  vec2 off = c * (0.0012 + 0.009 * amt * amt) * (0.5 + r);
  vec3 col;
  col.r = texture2D(tDiffuse, vUv + off).r;
  col.g = texture2D(tDiffuse, vUv).g;
  col.b = texture2D(tDiffuse, vUv - off).b;

  // Flou radial de vitesse : nul au centre (la route reste nette), marqu\xE9 sur les bords.
  float sp = smoothstep(0.45, 1.0, uSpeed);
  float blur = (0.045 * sp + 0.04 * uBoost) * smoothstep(0.1, 0.65, r);
  vec3 acc = col;
  for (int i = 1; i <= 8; i++) {
    float f = float(i) / 8.0;
    acc += texture2D(tDiffuse, vUv - c * blur * f).rgb;
  }
  col = acc / 9.0;

  float vig = smoothstep(0.25, 0.85, r * 1.3);
  col *= 1.0 - vig * (0.36 + 0.3 * amt);

  col += vec3(0.0, 0.03, 0.05) * uBoost;

  float g = hash(vUv * vec2(1920.0, 1080.0) + fract(uTime) * 97.0) - 0.5;
  col += g * 0.014;

  gl_FragColor = vec4(col, 1.0);
}`;function wm(i,e,t,n){let r=bt((n||{}).bloom,.5),o=null,a=null,c=null,l=0,u=0,h=0,f=0,p=0,g=Math.min(globalThis.devicePixelRatio||1,2);try{let v=i.getSize(new Ge),_=new jt(Math.max(1,v.x),Math.max(1,v.y),{type:En,samples:4});o=new Rc(i,_),o.setPixelRatio(g),o.addPass(new Cc(e,t)),a=new Gr(new Ge(512,512),r*.8,.75,.9),o.addPass(a),c=new Vr({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:hb,fragmentShader:fb}),o.addPass(c),o.addPass(new Ic)}catch(v){console.warn("Post-traitement indisponible, rendu direct :",v),o=null,a=null,c=null}function x(v,_){!Number.isFinite(v)||!Number.isFinite(_)||v<=0||_<=0||(g=Math.min(globalThis.devicePixelRatio||1,2),i.setPixelRatio(g),i.setSize(v,_),o&&(o.setPixelRatio(g),o.setSize(v,_)))}function m(v,_){l=_s(bt(v,0),0,1),u=_?1:0}function d(v){if(v=Number.isFinite(v)?_s(v,0,.1):0,p+=v,h+=(l-h)*Wr(8,v),f+=(u-f)*Wr(8,v),c&&(c.uniforms.uSpeed.value=h,c.uniforms.uBoost.value=f,c.uniforms.uTime.value=p),o)try{o.render(v);return}catch(_){console.warn("\xC9chec du post-traitement, rendu direct :",_),o=null}i.render(e,t)}function y(){o&&o.dispose(),a&&a.dispose&&a.dispose(),c&&c.dispose&&c.dispose(),o=null}return{render:d,setSize:x,setSpeed:m,dispose:y}}var db=as.maxSpeed*3.6,Zh=20,pb=.85,mb=800,Oi=360,gb=24,_b=3,Rm=(i,e,t)=>i<e?e:i>t?t:i,Cm=i=>(i<10?"0":"")+i,Im=()=>typeof performance<"u"?performance.now():Date.now();function ko(i){if(i==null||!Number.isFinite(i))return"--:--.--";let e=Math.max(0,Math.floor(i*100+1e-6)),t=Math.floor(e/6e3),n=Math.floor(e/100)%60;return`${t}:${Cm(n)}.${Cm(e%100)}`}function xb(i){return typeof i=="number"?"#"+(i&16777215).toString(16).padStart(6,"0"):typeof i=="string"&&i?i:"#ffffff"}function Kh(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}var vb=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${Oi}" height="${Oi}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;function Pm(i){let e=document.createElement("div");e.className="pr-hud pr-off",e.innerHTML=vb,i.appendChild(e);let t=te=>e.querySelector(te),n={pos:t(".pr-pos"),posCur:t(".pr-pos-cur"),posTot:t(".pr-pos-tot"),wrong:t(".pr-wrong"),lap:t(".pr-lap"),time:t(".pr-time"),best:t(".pr-best-v"),dias:t(".pr-dias"),mm:t(".pr-minimap"),speed:t(".pr-speed-num"),bar:t(".pr-bar"),count:t(".pr-count"),flash:t(".pr-flash")},s=[];for(let te=0;te<Zh;te++){let _e=document.createElement("span");_e.className="pr-seg",n.bar.appendChild(_e),s.push(_e)}let r=Object.create(null),o=(te,_e,K)=>r[te]===K?!1:(r[te]=K,_e.textContent=K,!0),a=!1,c=-1,l=!1,u=!1,h=!1,f=!1,p=0,g=0,x=[],m="";function d(te){for(;x.length<te;){let _e=document.createElement("div");_e.className="pr-dia";let K=document.createElement("div");K.className="pr-dia-fill",_e.appendChild(K),n.dias.appendChild(_e),x.push({d:_e,f:K,t:""})}}function y(te,_e){let K=Math.max(0,Math.floor(te||0)),X=_e>0,oe=X?Rm(_e/as.boostDuration,0,1):0,D=Math.max(_b,K+(X?1:0));d(D);let V=K+"|"+(X?1:0)+"|"+oe.toFixed(2)+"|"+D;if(V!==m){m=V;for(let J=0;J<x.length;J++){let re=x[J],xe=0,ce=!1;J<K?xe=1:X&&J===K&&(xe=oe,ce=!0),re.d.hidden=J>=D,re.d.classList.toggle("pr-use",ce);let Se="scaleY("+xe.toFixed(3)+")";re.t!==Se&&(re.t=Se,re.f.style.transform=Se)}}}function v(te){let _e=Math.round(Rm(te,0,1)*Zh),K=te>pb;if(!(_e===c&&K===l)){c=_e,l=K;for(let X=0;X<Zh;X++)s[X].classList.toggle("pr-on",X<_e);n.bar.classList.toggle("pr-hot",K)}}function _(te,_e){let K=h,X=o("cd",n.count,te);n.count.classList.toggle("pr-go",_e),K||(n.count.classList.add("pr-vis"),h=!0),(!K||X)&&Kh(n.count,"pr-kick")}function A(){h&&(h=!1,n.count.classList.remove("pr-vis"),r.cd="")}function T(te){if(te==null){f=!1,p=0,A();return}if(te>0){f=!1,_(String(Math.ceil(te)),!1);return}f||(f=!0,p=Im()),Im()-p<mb?_("GO !",!0):A()}let E=null;try{E=n.mm.getContext("2d")}catch{E=null}let C=null,M=null,S=1,L=0,k=0,H=new Map;function j(te){let _e=H.get(te);return _e===void 0&&(_e=xb(te),H.set(te,_e)),_e}function le(te){if(M=null,C=null,!te||!te.pts||!te.pts.length)return;let _e=te.pts,K=1/0,X=-1/0,oe=1/0,D=-1/0;for(let Se=0;Se<_e.length;Se++){let F=_e[Se];F.x<K&&(K=F.x),F.x>X&&(X=F.x),F.z<oe&&(oe=F.z),F.z>D&&(D=F.z)}let V=X-K||1,J=D-oe||1,re=(Oi-2*gb)/Math.max(V,J);S=re,L=(Oi-V*re)/2-K*re,k=(Oi-J*re)/2-oe*re,M=te;let xe=document.createElement("canvas");xe.width=Oi,xe.height=Oi;let ce=xe.getContext("2d");if(ce){ce.lineJoin="round",ce.lineCap="round",ce.beginPath();for(let De=0;De<_e.length;De++){let Ee=_e[De].x*re+L,Ve=_e[De].z*re+k;De===0?ce.moveTo(Ee,Ve):ce.lineTo(Ee,Ve)}ce.closePath(),ce.strokeStyle="rgba(11, 14, 31, 0.9)",ce.lineWidth=10,ce.stroke(),ce.strokeStyle="rgba(230, 240, 255, 0.85)",ce.lineWidth=4,ce.stroke();let Se=_e[0],F=(Se.width||14)/2*re,$e=Se.x*re+L,Be=Se.z*re+k;ce.beginPath(),ce.moveTo($e-Se.rx*F,Be-Se.rz*F),ce.lineTo($e+Se.rx*F,Be+Se.rz*F),ce.strokeStyle="#ffd23f",ce.lineWidth=4,ce.stroke()}C=xe}function ne(te){if(!E||(E.clearRect(0,0,Oi,Oi),C&&E.drawImage(C,0,0),!M||!te))return;let _e=M.pts,K=_e.length;if(!K)return;let X=M.length||K*M.step,oe=M.step||X/K;for(let D=0;D<2;D++)for(let V=0;V<te.length;V++){let J=te[V],re=!!J.isPlayer;if(re!==(D===1))continue;let xe=(J.s||0)%X;xe<0&&(xe+=X);let ce=Math.floor(xe/oe);ce>=K&&(ce=K-1),ce<0&&(ce=0);let Se=_e[ce],F=J.d||0,$e=(Se.x+Se.rx*F)*S+L,Be=(Se.z+Se.rz*F)*S+k;E.beginPath(),E.arc($e,Be,re?10:6.5,0,Math.PI*2),E.fillStyle=j(J.color),E.fill(),E.lineWidth=re?3.5:2,E.strokeStyle=re?"#ffffff":"rgba(11, 14, 31, 0.95)",E.stroke()}}function pe(te,_e=1100){n.flash.textContent=String(te),n.flash.classList.add("pr-vis"),Kh(n.flash,"pr-kick"),clearTimeout(g),g=setTimeout(()=>n.flash.classList.remove("pr-vis"),_e)}function ee(te){if(te){if(te.speedKmh!=null&&(o("spd",n.speed,String(Math.max(0,Math.round(te.speedKmh)))),v(te.speedKmh/db)),te.position!=null||te.total!=null){let _e=te.position!=null?String(te.position):"-",K=te.total!=null?String(te.total):"-";o("posc",n.posCur,_e)&&a&&Kh(n.pos,"pr-pop"),o("post",n.posTot,K)}if(te.lap!=null&&o("lap",n.lap,"Tour "+te.lap+(te.laps!=null?"/"+te.laps:"")),te.time!=null&&o("time",n.time,ko(te.time)),te.bestLap!==void 0&&o("best",n.best,ko(te.bestLap)),te.wrongWay!==void 0){let _e=!!te.wrongWay;_e!==u&&(u=_e,n.wrong.classList.toggle("pr-vis",_e))}(te.boostCharges!=null||te.boostT!=null)&&y(te.boostCharges,te.boostT||0),te.countdown!==void 0&&T(te.countdown)}}function fe(){a=!0,e.classList.remove("pr-off")}function we(){a=!1,e.classList.add("pr-off")}function Re(){clearTimeout(g),H.clear(),e.remove()}return{show:fe,hide:we,update:ee,setTrack:le,updateMinimap:ne,flash:pe,dispose:Re}}var Lm="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Dm=0;function $h(){Dm++;let i=On((Date.now()^Math.imul(Dm,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=Lm[i.int(0,Lm.length-1)];return e}var Pt=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Nm(i){return i?typeof i=="string"?cs[i]?.name||i:i.name||cs[i.id]?.name||"":""}function yb(i){return i&&typeof i=="object"?i:Ns.find(e=>e.id===i)||{id:String(i),name:String(i),icon:"\u2022"}}function Um(i){let e=new Map;for(let n of i||[]){let s=yb(n),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:n,n:s}of e.values())t+=`<span class="pr-own">${Pt(n.icon)} ${Pt(n.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function Jh(i){return(i||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${Pt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function Fm(i){let e=document.createElement("div");e.className="pr-menu pr-off",i.appendChild(e);let t=null,n=null;function s(x){try{t&&typeof t.play=="function"&&t.play(x)}catch{}}function r(x,m){let d=n;if(!d||!d.items.length)return;let y=d.items.length,v=(x%y+y)%y,_=v!==d.index;d.index=v,d.focused=!0;for(let A=0;A<y;A++)d.items[A].classList.toggle("pr-sel",A===v);try{d.items[v].focus({preventScroll:!0})}catch{}_&&m&&s("select")}function o(x){let m=n;m&&(n=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),m.resolve(x))}function a(x){return n=null,e.innerHTML=x.html,e.classList.remove("pr-off"),new Promise(m=>{n={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:x.actions||{},resolve:m},x.onMount&&x.onMount(e,o),r(x.initial||0,!1)})}e.addEventListener("click",x=>{let m=n;if(!m||!(x.target instanceof Element))return;let d=x.target.closest("[data-act]");if(!d||!e.contains(d)||d.disabled)return;let y=m.items.indexOf(d);y>=0&&y!==m.index&&r(y,!1);let v=m.actions[d.dataset.act];v&&v(d,o)}),e.addEventListener("mouseover",x=>{let m=n;if(!m||!(x.target instanceof Element))return;let d=x.target.closest("[data-nav]");if(!d)return;let y=m.items.indexOf(d);y>=0&&y!==m.index&&r(y,!0)}),window.addEventListener("keydown",x=>{let m=n;if(!m)return;let d=x.target,y=!!d&&d.tagName==="INPUT",v=x.key||"",_=v.toLowerCase();if(v==="ArrowUp"||!y&&(v==="ArrowLeft"||_==="z"||_==="q")){x.preventDefault(),r(m.index-1,!0);return}if(v==="ArrowDown"||!y&&(v==="ArrowRight"||_==="s"||_==="d")){x.preventDefault(),r(m.index+1,!0);return}if(y){if(v==="Enter"){x.preventDefault();let A=e.querySelector("[data-main]");A&&A.click()}return}if(v.length===1){let A=m.items.find(T=>T.dataset.key===v);A&&(x.preventDefault(),A.click())}});function c({dailySeed:x,meta:m}={}){let d=m||{},y=String(x||"RUSH-DAILY").toUpperCase(),v=$h();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${Pt(v)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${Pt(y)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${d.runs??0}</b><span>runs</span></div>
    <div><b>${d.wins??0}</b><span>victoires</span></div>
    <div><b>${d.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:_=>{let A=_.closest(".pr-screen").querySelector("[data-seed]");A&&(A.value=$h())},launch:(_,A)=>{let T=_.closest(".pr-screen").querySelector("[data-seed]"),E=(T?T.value:"").trim().toUpperCase();E||(E=$h()),A({seed:E})},daily:(_,A)=>A({seed:y})}})}function l({stage:x={},index:m=1,total:d=1,standings:y=[],weather:v}={}){let _=Nm(v)||Nm(x.weather),A=x.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">\xC9tape ${Pt(m)}/${Pt(d)}</div>
    <h2 class="pr-h2">${Pt(x.name)}</h2>
    <p class="pr-sub">${Pt(x.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${Pt(_)}</dd></div>
      <div><dt>Tours</dt><dd>${Pt(A)} ${A>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${Pt(x.trackSeed)}</dd></div>
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Jh(y)}</ol>
  </div></div>
</section>`,actions:{go:(T,E)=>E(void 0)}})}function u({results:x=[],standings:m=[],stage:d={}}={}){let v=[...x].sort((_,A)=>(_.position??99)-(A.position??99)).map((_,A)=>{let T=nc[(_.position??0)-1]??0;return`<tr class="pr-tr${_.isPlayer?" pr-me":""}" style="--i:${A}"><td class="pr-c-pos">${Pt(_.position??"")}</td><td class="pr-c-name">${Pt(_.name)}</td><td class="pr-c-tm">${_.time==null?"Abandon":ko(_.time)}</td><td class="pr-c-best">${_.bestLap==null?"\u2014":ko(_.bestLap)}</td><td class="pr-c-pts">${T>0?"+"+T:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${Pt(d.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Jh(m)}</ol>
  </div></div>
</section>`,actions:{next:(_,A)=>A(void 0)}})}function h({choices:x=[],index:m=1,total:d=1,owned:y=[]}={}){let v=x.map((_,A)=>`<button type="button" class="pr-card pr-slide" style="--i:${A}" data-nav data-key="${A+1}" data-act="pick" data-id="${Pt(_.id)}"><span class="pr-card-in"><span class="pr-card-key">${A+1}</span><span class="pr-card-ico" aria-hidden="true">${Pt(_.icon)}</span><span class="pr-card-name">${Pt(_.name)}</span><span class="pr-card-tag">${Pt(_.tagline)}</span><span class="pr-card-pro">\u25B2 ${Pt(_.pro)}</span><span class="pr-card-con">\u25BC ${Pt(_.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${Pt(m)}/${Pt(d)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Um(y)}</div>
</section>`,actions:{pick:(_,A)=>A(_.dataset.id)}})}function f({standings:x=[],playerPosition:m,run:d={},meta:y}={}){let v=y||{},_=m??x.findIndex(E=>E.isPlayer)+1,A=_===1,T=A?"Champion !":`${Pt(_)}e au championnat`;return a({initial:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${A?" pr-gold":""}">${T}</div>
    <ol class="pr-slist pr-slist-big">${Jh(x)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Um(d.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${Pt(d.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>
    <p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">Nouveau run</button>
  </div></div>
</section>`,actions:{copy:E=>{let C="Copier la seed",M;try{M=navigator.clipboard.writeText(String(d.seed??""))}catch(L){M=Promise.reject(L)}let S=L=>{E.textContent=L,setTimeout(()=>{E.isConnected&&(E.textContent=C)},1500)};M.then(()=>S("Copi\xE9e !"),()=>S("Copie impossible"))},again:(E,C)=>C(void 0)}})}function p(x){t=x||null}function g(){n=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:c,showStageIntro:l,showResults:u,showUpgradeChoice:h,showRunEnd:f,hideAll:g,setAudio:p}}var Om=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Bm=.6,Mb=.3,jh=6,ks=55,Sb=.1,bb=25,zm=60/128/4,Tb=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],Xr=i=>Number.isFinite(i)?i<0?0:i>1?1:i:0,km=i=>440*Math.pow(2,(i-69)/12);function Eb(i){let t=new Float32Array(1024);for(let n=0;n<1024;n++){let s=n*2/1023-1;t[n]=(1+i)*s/(1+i*Math.abs(s))}return t}function Hm(){let i=null,e=!1,t=null,n=null,s=null,r=null,o=null,a=null,c=null,l=!1,u=!1,h=null,f=0,p=0,g=-1,x=0,m=0,d=0;function y(D){let V=Math.round(2*D),J=Math.round(.1*D),re=new Float32Array(V+J),xe=0,ce=0,Se=0,F=0,$e=0,Be=0,De=0;for(let b=0;b<V+J;b++){let G=Math.random()*2-1;xe=.99886*xe+G*.0555179,ce=.99332*ce+G*.0750759,Se=.969*Se+G*.153852,F=.8665*F+G*.3104856,$e=.55*$e+G*.5329522,Be=-.7616*Be-G*.016898,re[b]=(xe+ce+Se+F+$e+Be+De+G*.5362)*.11,De=G*.115926}let Ee=i.createBuffer(1,V,D),Ve=Ee.getChannelData(0),Ne=0;for(let b=0;b<V;b++){let G=b<J?re[b]*(b/J)+re[V+b]*(1-b/J):re[b];Ve[b]=G;let ue=Math.abs(G);ue>Ne&&(Ne=ue)}let I=Ne>0?1/Ne:1;for(let b=0;b<V;b++)Ve[b]*=I;return Ee}function v(D){let V=i.createBufferSource();return V.buffer=n,V.loop=!0,V.connect(D),V.start(0,Math.random()*1.5),V}function _(D){let V=i.createGain();return V.gain.value=D,V}function A(D,V,J){let re=i.createBiquadFilter();return re.type=D,re.frequency.value=V,re.Q.value=J,re}function T(){n=y(i.sampleRate),t=_(l?0:Bm);let D=i.createDynamicsCompressor();D.threshold.value=-16,D.knee.value=12,D.ratio.value=4,D.attack.value=.005,D.release.value=.2,t.connect(D),D.connect(i.destination);let V=i.createOscillator();V.type="sawtooth",V.frequency.value=ks,V.detune.value=-6;let J=i.createOscillator();J.type="sawtooth",J.frequency.value=ks,J.detune.value=6;let re=i.createOscillator();re.type="square",re.frequency.value=ks/2;let xe=_(1);V.connect(_(.28)).connect(xe),J.connect(_(.28)).connect(xe),re.connect(_(.22)).connect(xe);let ce=A("bandpass",ks*4,1.2),Se=_(.04);v(ce),ce.connect(Se).connect(xe);let F=i.createWaveShaper();F.curve=Eb(4),F.oversample="2x",xe.connect(F);let $e=A("lowpass",300,1.3);F.connect($e);let Be=_(0);$e.connect(Be).connect(t),V.start(),J.start(),re.start(),s={osc1:V,osc2:J,osc3:re,nBp:ce,nGain:Se,lp:$e,gain:Be};let De=A("bandpass",300,.7),Ee=_(0);v(De),De.connect(Ee).connect(t),r={filter:De,gain:Ee};let Ve=A("bandpass",1100,4),Ne=_(3),I=_(0);v(Ve),Ve.connect(Ne).connect(I).connect(t),o={filter:Ve,gain:I};let b=A("highpass",900,.5),G=_(3),ue=_(0);v(b),b.connect(G).connect(ue).connect(t),a={gain:ue},c=_(0),c.connect(t),e=!0}function E(D,V,J){let re=i.currentTime;D.cancelScheduledValues(re),D.setTargetAtTime(V,re,J)}function C(D){let V=D.t0,J=D.dur,re=i.createOscillator();re.type=D.type||"sine",re.frequency.setValueAtTime(D.f0,V),D.f1&&re.frequency.exponentialRampToValueAtTime(D.f1,V+J);let xe=i.createGain();xe.gain.setValueAtTime(1e-4,V),xe.gain.linearRampToValueAtTime(D.vol,V+(D.attack||.004)),xe.gain.exponentialRampToValueAtTime(1e-4,V+J);let ce=re;if(D.lp){let Se=A("lowpass",D.lp,.7);re.connect(Se),ce=Se}ce.connect(xe),xe.connect(t),re.start(V),re.stop(V+J+.02)}function M(D){let V=D.t0,J=D.dur,re=i.createBufferSource();re.buffer=n;let xe=A(D.type,D.f0,D.q||1);D.f1&&xe.frequency.exponentialRampToValueAtTime(D.f1,V+J),xe.frequency.setValueAtTime(D.f0,V);let ce=i.createGain();ce.gain.setValueAtTime(1e-4,V),ce.gain.linearRampToValueAtTime(D.vol,V+.004),ce.gain.exponentialRampToValueAtTime(1e-4,V+J),re.connect(xe),xe.connect(ce),ce.connect(t),re.start(V,Math.random()*1.5,J+.02)}function S(D,V){let J=i.createBufferSource();J.buffer=n;let re=A("bandpass",700+Math.random()*900,1.2),xe=i.createGain();xe.gain.setValueAtTime(0,D),xe.gain.linearRampToValueAtTime(V,D+.003),xe.gain.linearRampToValueAtTime(0,D+.03),J.connect(re),re.connect(xe),xe.connect(t),J.start(D,Math.random()*1.5,.05)}let L={beep(D){C({type:"square",f0:440,t0:D,dur:.12,vol:.12,lp:2400})},go(D){C({type:"sawtooth",f0:880,t0:D,dur:.4,vol:.12,lp:3e3}),C({type:"sine",f0:1320,t0:D,dur:.4,vol:.06}),C({type:"sine",f0:1760,t0:D+.02,dur:.25,vol:.04}),M({t0:D,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(D){M({t0:D,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),C({type:"sawtooth",f0:150,f1:600,t0:D,dur:.6,vol:.1,lp:1500,attack:.02})},jump(D){M({t0:D,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(D){C({type:"sine",f0:90,f1:50,t0:D,dur:.2,vol:.6,attack:.002}),M({t0:D,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(D){M({t0:D,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let V=340,J=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[re,xe,ce]of J)C({type:"sine",f0:V*re,t0:D,dur:ce,vol:xe,attack:.001})},select(D){C({type:"sine",f0:2400,t0:D,dur:.03,vol:.15,attack:.002})},confirm(D){C({type:"triangle",f0:660,t0:D,dur:.12,vol:.2}),C({type:"triangle",f0:990,t0:D+.09,dur:.18,vol:.2})},win(D){[523,659,784,1047,1319].forEach((J,re)=>{let xe=re<4?.13:.5,ce=D+re*.11;C({type:"square",f0:J,t0:ce,dur:xe,vol:.1,lp:2500}),C({type:"triangle",f0:J,t0:ce,dur:xe,vol:.12})})},lose(D){[392,330,262].forEach((V,J)=>{C({type:"triangle",f0:V,t0:D+J*.22,dur:.3,vol:.25,attack:.01})})},pad(D){C({type:"sawtooth",f0:300,f1:1500,t0:D,dur:.15,vol:.12,lp:4e3})},lap(D){C({type:"sine",f0:1e3,t0:D,dur:.08,vol:.2}),C({type:"sine",f0:1e3,t0:D+.15,dur:.08,vol:.2})}};function k(D){let V=i.createOscillator();V.type="sine",V.frequency.setValueAtTime(150,D),V.frequency.exponentialRampToValueAtTime(45,D+.12);let J=i.createGain();J.gain.setValueAtTime(.5,D),J.gain.exponentialRampToValueAtTime(.001,D+.3),V.connect(J),J.connect(c),V.start(D),V.stop(D+.32)}function H(D,V){let J=i.createBufferSource();J.buffer=n;let re=A("highpass",7e3,.7),xe=i.createGain();xe.gain.setValueAtTime(V,D),xe.gain.exponentialRampToValueAtTime(.001,D+.04),J.connect(re),re.connect(xe),xe.connect(c),J.start(D,Math.random()*1.5,.05)}function j(D,V,J){let re=i.createOscillator();re.type="sawtooth",re.frequency.value=V;let xe=A("lowpass",1e3,6);xe.frequency.setValueAtTime(1e3,D),xe.frequency.exponentialRampToValueAtTime(180,D+J);let ce=i.createGain();ce.gain.setValueAtTime(1e-4,D),ce.gain.linearRampToValueAtTime(.16,D+.01),ce.gain.exponentialRampToValueAtTime(1e-4,D+J),re.connect(xe),xe.connect(ce),ce.connect(c),re.start(D),re.stop(D+J+.02)}function le(D,V){let J=i.createOscillator();J.type="triangle",J.frequency.value=V;let re=i.createGain();re.gain.setValueAtTime(1e-4,D),re.gain.linearRampToValueAtTime(.035,D+.005),re.gain.exponentialRampToValueAtTime(1e-4,D+.11),J.connect(re),re.connect(c),J.start(D),J.stop(D+.13)}function ne(D,V){let J=D&15,re=Tb[D>>4&3];if(J%4===0&&k(V),J%2===1&&H(V,J%4===2?.1:.05),J%2===0){let xe=J===6||J===14?12:0;j(V,km(re.root+xe),zm*1.8);let ce=[0,re.iv[0],re.iv[1],12];le(V,km(re.root+24+ce[J>>1&3]))}}function pe(){if(!e||!u)return;let D=i.currentTime;f<D&&(f=D+.02);let V=D+Sb;for(;f<V;)ne(p,f),f+=zm,p++}function ee(){if(!e){if(!Om)return;try{i=new Om,T()}catch{i=null,e=!1;return}}if(i.state==="suspended")try{let D=i.resume();D&&D.catch&&D.catch(()=>{})}catch{}}function fe(D,V){if(!e)return;D=Xr(D),V=Xr(V);let J=i.currentTime,re=D*jh,xe=Math.min(jh-1,Math.floor(re)),Se=.45+.55*Math.min(1,re-xe),F=Xr(D/.08),$e=ks+(ks*Math.pow(jh,Se)-ks)*F,Be=.5*D+.5*V,De=260+3200*Math.pow(Be,1.3),Ee=.07+.2*D*(.35+.65*V)+.03*V;if(E(s.osc1.frequency,$e,.04),E(s.osc2.frequency,$e,.04),E(s.osc3.frequency,$e*.5,.04),E(s.nBp.frequency,$e*4,.05),E(s.nGain.gain,.04+.22*V,.05),E(s.lp.frequency,De,.05),g!==-1&&xe!==g){let Ve=s.gain.gain;Ve.cancelScheduledValues(J),Ve.setTargetAtTime(Ee*.35,J,.004),Ve.setTargetAtTime(Ee,J+.06,.03),x=J+.12}if(g=xe,J>=x&&E(s.gain.gain,Ee,.05),V>=m)m=V;else if(m-V>.3){if(D>.6&&J>=d){let Ve=.12+.2*D;for(let Ne=0;Ne<3;Ne++)S(J+Ne*.05+Math.random()*.02,Ve*(1-Ne*.2));d=J+.4}m=V}}function we(D){if(!e)return;let V=Xr(D),J=V*V;E(r.filter.frequency,250+1600*J,.2),E(r.gain.gain,.03+.35*J,.15)}function Re(D){if(!e)return;let V=Xr(D);E(o.filter.frequency,900+500*V,.05),E(o.gain.gain,V,.03)}function te(D){e&&E(a.gain.gain,Xr(D)*.25,.1)}function _e(D){e&&Object.prototype.hasOwnProperty.call(L,D)&&L[D](i.currentTime+.01)}function K(D){l=!!D,e&&E(t.gain,l?0:Bm,.015)}function X(){e&&(u||(u=!0,p=0,f=i.currentTime+.05),E(c.gain,Mb,.05),h||(h=setInterval(pe,bb)),pe())}function oe(){u=!1,h&&(clearInterval(h),h=null),e&&E(c.gain,0,.05)}return{resume:ee,setEngine:fe,setWind:we,setSkid:Re,setRain:te,play:_e,setMuted:K,startMusic:X,stopMusic:oe}}var Qh=1/120,Ho=new URLSearchParams(location.search),Ab=document.getElementById("game"),ei=new Ua({canvas:Ab,antialias:!0,powerPreference:"high-performance"});ei.setPixelRatio(Math.min(window.devicePixelRatio,2));ei.shadowMap.enabled=!0;ei.shadowMap.type=Au;ei.toneMapping=bo;ei.toneMappingExposure=1.05;ei.outputColorSpace=Lt;var vn=new xo,Pn=new kt(70,1,.3,6e3);vn.add(Pn);var xs=Am(Pn),Ym=document.getElementById("ui"),Qn=Pm(Ym),Bi=Fm(Ym),Nt=Hm();Bi.setAudio?.(Nt);var Nc=new Set,$t={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var wb=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||(Nc.add(i.code),an==="race"&&wb.includes(i.code)&&i.preventDefault(),i.code==="KeyM"&&(ef=!ef,Nt.setMuted(ef)),(i.code==="KeyP"||i.code==="Escape")&&an==="race"&&(sf=!sf))});addEventListener("keyup",i=>Nc.delete(i.code));addEventListener("blur",()=>Nc.clear());addEventListener("pointerdown",()=>Nt.resume(),{once:!1});var ef=!1,sf=!1;function Rb(i){let e=(...s)=>s.some(r=>Nc.has(r));$t.throttle=e("ArrowUp","KeyW")?1:0,$t.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);$t.steer=t,$t.boost=e("Space"),$t.drift=e("ShiftLeft","ShiftRight","KeyX");let n=navigator.getGamepads?.()[0];if(n){let s=n.axes[0]||0;Math.abs(s)>.12&&($t.steer=s),$t.throttle=Math.max($t.throttle,n.buttons[7]?.value||0,n.buttons[0]?.pressed?1:0),$t.brake=Math.max($t.brake,n.buttons[6]?.value||0),$t.boost=$t.boost||!!n.buttons[2]?.pressed,$t.drift=$t.drift||!!n.buttons[1]?.pressed||!!n.buttons[5]?.pressed}return $t}function Cb(i){let e=new xo,t=new Cr(50,32,16),n=new O(...i.sunDir).normalize(),s=new wt({side:qt,uniforms:{uTop:{value:new Oe(i.skyTop)},uHor:{value:new Oe(i.skyHorizon)},uGround:{value:new Oe(i.hemiGround)},uSun:{value:new Oe(i.sunColor).multiplyScalar(i.sunIntensity)},uSunDir:{value:n}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new dt(t,s));let r=new Er(ei),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var Vo=null;function Ib(){if(Vo)return Vo;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Vo=new Rr(i),Vo.colorSpace=Lt,Vo}function tf(i,e,t){let n=new Oa(new vo({map:Ib(),color:i,transparent:!0,opacity:t,blending:dr,depthWrite:!1,fog:!1}));return n.scale.setScalar(e),n}var tt=null,an="boot",rf=0,of=0,af=0,Go=99;function Pb(){if(tt){for(let i of tt.bikes)vn.remove(i.model.group);vn.remove(tt.road.group),tt.road.dispose?.(),tt.env.dispose?.(),tt.env.group?.parent&&tt.env.group.parent.remove(tt.env.group),tt.fx.dispose?.(),tt.post.dispose?.(),tt.envMap?.dispose(),vn.environment=null,tt.sunGlow&&(vn.remove(tt.sunGlow),tt.sunGlow.material.dispose()),tt=null}}function Zm({trackSeed:i,weatherId:e,laps:t,riders:n,autopilot:s}){Pb();let r=On(i),o=xp(i),a=cs[e]||cs.sunset,c=Jp(vn,o,a,r.fork("env")),l=Cb(a);vn.environment=l.texture,vn.environmentIntensity=a.night?.55:.8,ei.toneMappingExposure=a.night?1.5:1;let u=tf(a.sunColor,a.night?900:2200,a.night?.35:.75);u.userData.dir=new O(...a.sunDir).normalize(),vn.add(u);let h=Vp(o,a,r.fork("road"));vn.add(h.group);let f=ym(vn,a),p=wm(ei,vn,Pn,a),g=Ip({track:o,laps:t,env:a,rng:r.fork("race"),riders:n}),x=g.riders.map(d=>{let y=pm({color:d.color,accent:d.accent,isPlayer:!!d.isPlayer&&!!a.night});y.group.rotation.order="YXZ";let v=y.group.getObjectByName("chassis")||y.group,_=tf(16722458,.3,.3);if(_.position.set(0,.67,-.42),v.add(_),a.night){let A=tf(16773840,1.3,.8);A.position.set(0,.48,1.66),v.add(A)}return y.tailGlow=_,vn.add(y.group),{rider:d,model:y,pose:{},prev:new O,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),m=s?ac({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},r.fork("auto")):null;return tt={track:o,weather:a,env:c,road:h,fx:f,post:p,race:g,bikes:x,autoAI:m,envMap:l,sunGlow:u,playerBike:x.find(d=>d.rider.isPlayer)||x[0]},Qn.setTrack(o),e0(),$m(.016),xs.snap(cf()),of=g.player?.position||n.length,af=1,Go=99,window.__game={stage:tt,renderer:ei,scene:vn,camera:Pn,RL:uh},window.__tick=Qm,tt}var fi={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function cf(){let i=tt.playerBike,e=i.rider.state;return fi.x=i.w.x,fi.y=i.w.y,fi.z=i.w.z,fi.heading=i.w.heading,fi.yaw=-Km(e),fi.speedRatio=Math.min(1.3,e.speed/i.rider.stats.maxSpeed),fi.airborne=e.airborne,fi.boosting=e.boostT>0,fi.slope=i.w.slope||0,fi}var Lb=.8,Vm=.7;function Km(i){let e=i.vdir??i.yaw;return e+Lb*(i.yaw-e)}function $m(i){let{track:e,fx:t,weather:n}=tt;for(let s of tt.bikes){let r=s.rider.state;vp(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-Km(r),c=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=Vm*(Math.sin(a)-Math.sin(c)),o.position.z+=Vm*(Math.cos(a)-Math.cos(c)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let l=s.pose;if(l.lean=r.lean,l.steer=r.steer,l.pitch=r.pitch,l.compress=r.compress,l.wheelSpin=r.wheelSpin,l.speedRatio=r.speed/s.rider.stats.maxSpeed,l.speed=r.speed,l.airborne=r.airborne,l.drift=r.drift,l.boost=r.boostT>0,l.braking=s.rider.isPlayer?$t.brake>.1:!!s.rider.braking,s.model.update(l,i),s.model.tailGlow){let v=l.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*v-s.model.tailGlow.material.opacity)*Math.min(1,i*12),s.model.tailGlow.scale.setScalar(.3+.55*v)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),p=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),n.wet>.2&&r.speed>20&&Math.random()<n.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-h*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let y=s.rider.isPlayer?null:s.rider.frameEvents;y&&y.length&&Jm(s,y,!1)}}function Jm(i,e,t){let{fx:n}=tt,s=i.rider.state,r=i.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let c of e)c==="land"||c==="hardLand"?(n.emit("land",i.w.x,i.w.y+.1,i.w.z,o*.3,1,a*.3,c==="hardLand"?40:22),t&&(Nt.play("land"),xs.shake(c==="hardLand"?.9:.45))):c==="wall"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,3,a*.5,26),t&&(Nt.play("hit"),xs.shake(.7))):c==="crash"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,4,a*.5,40),n.emit("dust",i.w.x,i.w.y+.2,i.w.z,o*.3,2,a*.3,30),t&&(xs.shake(1.4),Qn.flash("CHUTE !",1400))):c==="jump"?t&&Nt.play("jump"):c==="boost"?t&&(Nt.play("boost"),xs.shake(.3),Qn.flash("BOOST !",600)):c==="pad"&&t&&(Nt.play("pad"),xs.shake(.2))}function Db(i){let{race:e,autoAI:t,track:n}=tt,s=e.player,r=$t;if(t||an==="finish")if(t){let a=e.riders.filter(c=>c!==s).map(c=>c.state);r=cc(t,s.state,n,s.stats,a,i)}else r=Nb;e.update(i,r);let o=s.state.events;o.length&&(Jm(tt.playerBike,o,!t),o.length=0)}var Nb={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},Vn={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},nf=[],Gm=new O,Wm=performance.now(),Lc=0,Dc=0;function jm(i){requestAnimationFrame(jm);let e=Math.min(.05,(i-Wm)/1e3);Wm=i,Qm(e)}function Qm(i){if(!tt)return;if(sf){tt.post.render(0);return}Dc+=i,rf+=i;let{race:e}=tt,t=an==="race"||an==="attract"||an==="finish";if(t){an==="race"&&Rb(i),Lc+=i;let a=0;for(;Lc>=Qh&&a++<8;)Db(Qh),Lc-=Qh;a>=8&&(Lc=0)}$m(i);let n=e.player,s=n.state,r=Math.min(1.3,s.speed/n.stats.maxSpeed),o=cf();an==="intro"||an==="menu"||an==="finish"&&rf>1.2?Ub(o,i):xs.update(i,o),Gm.set(o.x,o.y,o.z),tt.env.update(i,Dc,Gm),tt.sunGlow.position.copy(Pn.position).addScaledVector(tt.sunGlow.userData.dir,3200),tt.road.update(i,Dc),tt.fx.setSpeed(t?r:0,s.boostT>0),tt.fx.update(i,Pn),tt.post.setSpeed(t?r:0,s.boostT>0),tt.post.render(i),(an==="race"||an==="finish")&&(Nt.setEngine(Math.min(1,r),an==="race"?$t.throttle:.3),Nt.setWind(Math.min(1,r)),Nt.setSkid(s.airborne?0:Math.min(1,s.drift))),an==="race"&&Fb(e,n,s)}var Xm=new O;function Ub(i,e){let t=Dc*.35+i.heading;Xm.set(i.x+Math.sin(t)*7.5,i.y+2.6,i.z+Math.cos(t)*7.5),Pn.position.lerp(Xm,Math.min(1,e*2.5)),Pn.fov+=(55-Pn.fov)*Math.min(1,e*3),Pn.updateProjectionMatrix(),Pn.lookAt(i.x,i.y+.9,i.z)}function Fb(i,e,t){Vn.speedKmh=t.speed*3.6,Vn.position=e.position,Vn.total=i.riders.length,Vn.lap=Math.min(i.laps,Math.max(1,e.lap)),Vn.laps=i.laps,Vn.time=i.time,Vn.bestLap=e.bestLap??null,Vn.boostCharges=t.boostCharges,Vn.boostT=t.boostT,Vn.countdown=i.phase==="countdown"?i.countdown:i.time<.9?0:null,Vn.wrongWay=Math.abs(t.yaw)>1.4,Qn.update(Vn),nf.length=0;for(let n of i.riders)nf.push({s:n.state.s,d:n.state.d,isPlayer:!!n.isPlayer,color:n.color});if(Qn.updateMinimap(nf),i.phase==="countdown"){let n=Math.ceil(i.countdown);n!==Go&&(Go=n,n>0&&Nt.play("beep"))}else Go!==0&&(Go=0,Nt.play("go"),Nt.startMusic?.());i.phase==="racing"&&(e.position<of&&Qn.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),of=e.position,e.lap!==af&&e.lap<=i.laps&&(af=e.lap,Nt.play("lap"),e.lap===i.laps&&Qn.flash("DERNIER TOUR",1400))),i.phase==="finished"&&an==="race"&&Ob()}function e0(){let i=innerWidth,e=innerHeight;ei.setSize(i,e,!1),Pn.aspect=i/e,Pn.updateProjectionMatrix(),tt?.post.setSize(i,e)}addEventListener("resize",e0);function Wo(i){an=i,rf=0}var Bt=null,qr=ah(),t0=null;function Ob(){Wo("finish"),Qn.flash(`ARRIV\xC9E \u2014 ${tt.race.player.position}${tt.race.player.position===1?"er":"e"}`,2200),Nt.play(tt.race.player.position<=3?"win":"lose"),Nt.stopMusic?.(),setTimeout(()=>t0?.(),3200)}function qm(){let i=dc(fc("ATTRACT"));for(let e of i)e.stats=Fr({upgrades:[]});Zm({trackSeed:"ATTRACT-"+pc(),weatherId:"sunset",laps:99,riders:i,autopilot:!0}),Qn.hide(),Wo("attract")}async function Bb(){for(await im().catch(i=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",i)),qm(),document.getElementById("boot").remove(),requestAnimationFrame(jm);;){let i=Ho.get("seed");for(i||({seed:i}=await Bi.showTitle({dailySeed:pc(),meta:qr})),Nt.resume(),Bt=fc(i);!wo(Bt);){let n=Bt.stages[Bt.stageIndex],s=Fr(Bt),r=dc(Bt).map(a=>({...a,stats:a.isPlayer?s:Fr({upgrades:[]})}));Bi.hideAll(),Zm({trackSeed:n.trackSeed,weatherId:Ho.get("weather")||n.weather,laps:n.laps,riders:r,autopilot:Ho.has("auto")}),Wo("intro"),Nt.setRain(tt.weather.rain||0),Ho.has("auto")||await Bi.showStageIntro({stage:n,index:Bt.stageIndex+1,total:Bt.stages.length,standings:Or(Bt),weather:tt.weather}),Bi.hideAll(),xs.snap(cf()),Qn.show(),Wo("race"),await new Promise(a=>{t0=a}),Qn.hide(),Nt.setEngine(.1,0),Nt.setWind(0),Nt.setSkid(0);let o=tt.race.results();if(rh(Bt,o),await Bi.showResults({results:o,standings:Or(Bt),stage:n}),!wo(Bt)){let a=ih(Bt),c=Bt.upgrades.map(u=>Ns.find(h=>h.id===u)).filter(Boolean),l=await Bi.showUpgradeChoice({choices:a,index:Bt.stageIndex,total:Bt.stages.length,owned:c});sh(Bt,l)}}let e=Or(Bt),t=e.findIndex(n=>n.isPlayer)+1;qr=lh(qr,Bt)||qr,ch(qr),Wo("menu"),await Bi.showRunEnd({standings:e,playerPosition:t,run:Bt,meta:qr}),Bi.hideAll(),Ho.delete("seed"),qm()}}Bb().catch(i=>{console.error(i);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(i?.stack||i)});
