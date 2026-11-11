var lx=Object.defineProperty;var cx=(n,e)=>{for(var t in e)lx(n,t,{get:e[t],enumerable:!0})};var ux=0,Cd=1,hx=2;var Fl=1,fx=2,Yi=3,Ci=0,Qt=1,Nt=2,nn=0,Hr=1,_s=2,Pd=3,Id=4,ia=5,Fn=100,dx=101,px=102,mx=103,gx=104,lo=200,Ch=201,xx=202,vx=203,xu=204,Yo=205,Ol=206,yx=207,Bl=208,_x=209,Mx=210,bx=211,Sx=212,Ex=213,Tx=214,vu=0,yu=1,_u=2,Xr=3,Mu=4,bu=5,Su=6,Eu=7,Ph=0,wx=1,Ax=2,ys=0,Ih=1,Lh=2,Dh=3,sa=4,Rx=5,Nh=6,Uh=7,Ld="attached",Cx="detached",Kp=300,qr=301,Yr=302,Tu=303,wu=304,zl=306,In=1e3,$i=1001,$o=1002,Kt=1003,Fh=1004;var zr=1005;var On=1006,Go=1007;var ti=1008;var Mi=1009,jp=1010,Jp=1011,Zo=1012,Oh=1013,sr=1014,yi=1015,un=1016,Bh=1017,zh=1018,Ms=1020,Qp=35902,em=1021,tm=1022,Bn=1023,nm=1024,im=1025,Vr=1026,bs=1027,kh=1028,Hh=1029,sm=1030,Vh=1031;var Gh=1033,cl=33776,ul=33777,hl=33778,fl=33779,Au=35840,Ru=35841,Cu=35842,Pu=35843,Iu=36196,Lu=37492,Du=37496,Nu=37808,Uu=37809,Fu=37810,Ou=37811,Bu=37812,zu=37813,ku=37814,Hu=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,qu=37820,Yu=37821,dl=36492,$u=36494,Zu=36495,rm=36283,Ku=36284,ju=36285,Ju=36286;var $r=2300,Zr=2301,Bc=2302,Dd=2400,Nd=2401,Ud=2402,Px=2500;var om=0,kl=1,ra=2,Ix=3200,Lx=3201;var Hl=0,Dx=1,gs="",Lt="srgb",En="srgb-linear",Vl="linear",Ct="srgb";var _r=7680;var Fd=519,Nx=512,Ux=513,Fx=514,am=515,Ox=516,Bx=517,zx=518,kx=519,Qu=35044,Li=35048;var Od="300 es",Zi=2e3,pl=2001,Ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,Wo=Math.PI/180,Kr=180/Math.PI;function _i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function _n(n,e,t){return Math.max(e,Math.min(t,n))}function Wh(n,e){return(n%e+e)%e}function Hx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vx(n,e,t){return n!==e?(t-n)/(e-n):0}function Xo(n,e,t){return(1-t)*n+t*e}function Gx(n,e,t,i){return Xo(n,e,1-Math.exp(-t*i))}function Wx(n,e=1){return e-Math.abs(Wh(n,e*2)-e)}function Xx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $x(n,e){return n+Math.random()*(e-n)}function Zx(n){return n*(.5-Math.random())}function Kx(n){n!==void 0&&(Bd=n);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jx(n){return n*Wo}function Jx(n){return n*Kr}function Qx(n){return(n&n-1)===0&&n!==0}function ev(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var lm={DEG2RAD:Wo,RAD2DEG:Kr,generateUUID:_i,clamp:_n,euclideanModulo:Wh,mapLinear:Hx,inverseLerp:Vx,lerp:Xo,damp:Gx,pingpong:Wx,smoothstep:Xx,smootherstep:qx,randInt:Yx,randFloat:$x,randFloatSpread:Zx,seededRandom:Kx,degToRad:jx,radToDeg:Jx,isPowerOfTwo:Qx,ceilPowerOfTwo:ev,floorPowerOfTwo:tv,setQuaternionFromProperEuler:nv,normalize:It,denormalize:vi},Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],S=s[1],M=s[4],y=s[7],w=s[2],E=s[5],v=s[8];return r[0]=o*x+a*S+l*w,r[3]=o*m+a*M+l*E,r[6]=o*d+a*y+l*v,r[1]=c*x+u*S+h*w,r[4]=c*m+u*M+h*E,r[7]=c*d+u*y+h*v,r[2]=f*x+p*S+g*w,r[5]=f*m+p*M+g*E,r[8]=f*d+p*y+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zc=new ht;function cm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iv(){let n=Ko("canvas");return n.style.display="block",n}var zd={};function Ho(n){n in zd||(zd[n]=!0,console.warn(n))}function sv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function rv(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ov(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var mt={enabled:!0,workingColorSpace:En,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(n.r=Ki(n.r),n.g=Ki(n.g),n.b=Ki(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(n.r=Gr(n.r),n.g=Gr(n.g),n.b=Gr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===gs?Vl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kd=[.64,.33,.3,.6,.15,.06],Hd=[.2126,.7152,.0722],Vd=[.3127,.329],Gd=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[En]:{primaries:kd,whitePoint:Vd,transfer:Vl,toXYZ:Gd,fromXYZ:Wd,luminanceCoefficients:Hd,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:kd,whitePoint:Vd,transfer:Ct,toXYZ:Gd,fromXYZ:Wd,luminanceCoefficients:Hd,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}});var Mr,eh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Ko("canvas")),Mr.width=e.width,Mr.height=e.height;let i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ko("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},av=0,ml=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lv=0,ln=class n extends Ss{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=$i,s=$i,r=On,o=ti,a=Bn,l=Mi,c=n.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=_i(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Kp;ln.DEFAULT_ANISOTROPY=1;var St=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(p+1)/2,w=(d+1)/2,E=(u+f)/4,v=(h+x)/4,T=(g+m)/4;return M>y&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=v/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=T/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=v/r,s=T/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},th=class extends Ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends th{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},gl=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*x,S=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let w=Math.sqrt(M),E=Math.atan2(w,d*S);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}let y=a*S;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hc=new H,Xd=new sn,ni=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Na.subVectors(this.max,Po),br.subVectors(e.a,Po),Sr.subVectors(e.b,Po),Er.subVectors(e.c,Po),us.subVectors(Sr,br),hs.subVectors(Er,Sr),Ks.subVectors(br,Er);let t=[0,-us.z,us.y,0,-hs.z,hs.y,0,-Ks.z,Ks.y,us.z,0,-us.x,hs.z,0,-hs.x,Ks.z,0,-Ks.x,-us.y,us.x,0,-hs.y,hs.x,0,-Ks.y,Ks.x,0];return!Vc(t,br,Sr,Er,Na)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,br,Sr,Er,Na))?!1:(Ua.crossVectors(us,hs),t=[Ua.x,Ua.y,Ua.z],Vc(t,br,Sr,Er,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hi=[new H,new H,new H,new H,new H,new H,new H,new H],pi=new H,Da=new ni,br=new H,Sr=new H,Er=new H,us=new H,hs=new H,Ks=new H,Po=new H,Na=new H,Ua=new H,js=new H;function Vc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){js.fromArray(n,r);let a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=e.dot(js),c=t.dot(js),u=i.dot(js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var cv=new ni,Io=new H,Gc=new H,Xn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Gc)),this.expandByPoint(Io.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new H,Wc=new H,Fa=new H,fs=new H,Xc=new H,Oa=new H,qc=new H,jr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Wc.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Wc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fa),a=fs.dot(this.direction),l=-fs.dot(Fa),c=fs.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wc).addScaledVector(Fa,f),p}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,r){Xc.subVectors(t,e),Oa.subVectors(i,e),qc.crossVectors(Xc,Oa);let o=this.direction.dot(qc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fs.subVectors(this.origin,e);let l=a*this.direction.dot(Oa.crossVectors(fs,Oa));if(l<0)return null;let c=a*this.direction.dot(Xc.cross(fs));if(c<0||l+c>o)return null;let u=-a*fs.dot(qc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uv,e,hv)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ds.crossVectors(i,Gn),ds.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ds.crossVectors(i,Gn)),ds.normalize(),Ba.crossVectors(Gn,ds),s[0]=ds.x,s[4]=Ba.x,s[8]=Gn.x,s[1]=ds.y,s[5]=Ba.y,s[9]=Gn.y,s[2]=ds.z,s[6]=Ba.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],S=i[3],M=i[7],y=i[11],w=i[15],E=s[0],v=s[4],T=s[8],_=s[12],b=s[1],A=s[5],N=s[9],B=s[13],L=s[2],k=s[6],z=s[10],Z=s[14],V=s[3],se=s[7],ye=s[11],Q=s[15];return r[0]=o*E+a*b+l*L+c*V,r[4]=o*v+a*A+l*k+c*se,r[8]=o*T+a*N+l*z+c*ye,r[12]=o*_+a*B+l*Z+c*Q,r[1]=u*E+h*b+f*L+p*V,r[5]=u*v+h*A+f*k+p*se,r[9]=u*T+h*N+f*z+p*ye,r[13]=u*_+h*B+f*Z+p*Q,r[2]=g*E+x*b+m*L+d*V,r[6]=g*v+x*A+m*k+d*se,r[10]=g*T+x*N+m*z+d*ye,r[14]=g*_+x*B+m*Z+d*Q,r[3]=S*E+M*b+y*L+w*V,r[7]=S*v+M*A+y*k+w*se,r[11]=S*T+M*N+y*z+w*ye,r[15]=S*_+M*B+y*Z+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],S=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,M=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,y=u*x*c-g*h*c+g*a*p-o*x*p-u*a*d+o*h*d,w=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,E=t*S+i*M+s*y+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/E;return e[0]=S*v,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*v,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*v,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*v,e[4]=M*v,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*v,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*v,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*v,e[8]=y*v,e[9]=(g*h*r-u*x*r-g*i*p+t*x*p+u*i*d-t*h*d)*v,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*v,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*v,e[12]=w*v,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*v,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*v,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*v,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,S=l*c,M=l*u,y=l*h,w=i.x,E=i.y,v=i.z;return s[0]=(1-(x+d))*w,s[1]=(p+y)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(f+d))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+M)*v,s[9]=(m-S)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Tr.set(s[0],s[1],s[2]).length(),o=Tr.set(s[4],s[5],s[6]).length(),a=Tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);let c=1/r,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Zi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===Zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Zi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,p=(i+s)*u,g,x;if(a===Zi)g=(o+r)*h,x=-2*h;else if(a===pl)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Tr=new H,mi=new je,uv=new H(0,0,0),hv=new H(1,1,1),ds=new H,Ba=new H,Gn=new H,qd=new je,Yd=new sn,bi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var xl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fv=0,$d=new H,wr=new sn,Gi=new je,za=new H,Lo=new H,dv=new H,pv=new sn,Zd=new H(1,0,0),Kd=new H(0,1,0),jd=new H(0,0,1),Jd={type:"added"},mv={type:"removed"},Ar={type:"childadded",child:null},Yc={type:"childremoved",child:null},Bt=class n extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new bi,i=new sn,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ht}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?za.copy(e):za.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Lo,za,this.up):Gi.lookAt(za,Lo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(Gi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new H,Wi=new H,$c=new H,Xi=new H,Rr=new H,Cr=new H,Qd=new H,Zc=new H,Kc=new H,jc=new H,Jc=new St,Qc=new St,eu=new St,xs=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gi.subVectors(s,t),Wi.subVectors(i,t),$c.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(Wi),l=gi.dot($c),c=Wi.dot(Wi),u=Wi.dot($c),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Jc.setScalar(0),Qc.setScalar(0),eu.setScalar(0),Jc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(Qc,r.y),o.addScaledVector(eu,r.z),o}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),Wi.subVectors(e,t),gi.cross(Wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),gi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Rr.subVectors(s,i),Cr.subVectors(r,i),Zc.subVectors(e,i);let l=Rr.dot(Zc),c=Cr.dot(Zc);if(l<=0&&c<=0)return t.copy(i);Kc.subVectors(e,s);let u=Rr.dot(Kc),h=Cr.dot(Kc);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Rr,o);jc.subVectors(e,r);let p=Rr.dot(jc),g=Cr.dot(jc);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cr,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Qd.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Qd,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},ka={h:0,s:0,l:0};function tu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Wh(e,1),t=_n(t,0,1),i=_n(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=tu(o,r,e+1/3),this.g=tu(o,r,e),this.b=tu(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=um[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return mt.fromWorkingColorSpace(yn.copy(this),e),Math.round(_n(yn.r*255,0,255))*65536+Math.round(_n(yn.g*255,0,255))*256+Math.round(_n(yn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(yn.copy(this),t);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Lt){mt.fromWorkingColorSpace(yn.copy(this),e);let t=yn.r,i=yn.g,s=yn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(ka);let i=Xo(ps.h,ka.h,t),s=Xo(ps.s,ka.s,t),r=Xo(ps.l,ka.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Ae;Ae.NAMES=um;var gv=0,Mn=class extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=_i(),this.name="",this.blending=Hr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=Yo,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xu&&(i.blendSrc=this.blendSrc),this.blendDst!==Yo&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends Mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new H,Ha=new Ke,gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}};var vl=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var yl=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var at=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}},xv=0,ei=new je,nu=new Bt,Pr=new H,Wn=new ni,Do=new ni,an=new H,xt=class n extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?yl:vl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Wn.min,Do.min),Wn.expandByPoint(an),an.addVectors(Wn.max,Do.max),Wn.expandByPoint(an)):(Wn.expandByPoint(Do.min),Wn.expandByPoint(Do.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(e,c),an.add(Pr)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new H,l[T]=new H;let c=new H,u=new H,h=new H,f=new Ke,p=new Ke,g=new Ke,x=new H,m=new H;function d(T,_,b){c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,b),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[T].add(x),a[_].add(x),a[b].add(x),l[T].add(m),l[_].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let T=0,_=S.length;T<_;++T){let b=S[T],A=b.start,N=b.count;for(let B=A,L=A+N;B<L;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new H,y=new H,w=new H,E=new H;function v(T){w.fromBufferAttribute(s,T),E.copy(w);let _=a[T];M.copy(_),M.sub(w.multiplyScalar(w.dot(_))).normalize(),y.crossVectors(E,_);let A=y.dot(l[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,A)}for(let T=0,_=S.length;T<_;++T){let b=S[T],A=b.start,N=b.count;for(let B=A,L=A+N;B<L;B+=3)v(e.getX(B+0)),v(e.getX(B+1)),v(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ep=new je,Js=new jr,Va=new Xn,tp=new H,Ga=new H,Wa=new H,Xa=new H,iu=new H,qa=new H,np=new H,Ya=new H,rt=class extends Bt{constructor(e=new xt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(iu.fromBufferAttribute(h,e),o?qa.addScaledVector(iu,u):qa.addScaledVector(iu.sub(t),u))}t.add(qa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Js.copy(e.ray).recast(e.near),!(Va.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Va,tp)===null||Js.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(r).invert(),Js.copy(e.ray).applyMatrix4(ep),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,w=M;y<w;y+=3){let E=a.getX(y),v=a.getX(y+1),T=a.getX(y+2);s=$a(this,d,e,i,c,u,h,E,v,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=$a(this,o,e,i,c,u,h,S,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,w=M;y<w;y+=3){let E=y,v=y+1,T=y+2;s=$a(this,d,e,i,c,u,h,E,v,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let S=m,M=m+1,y=m+2;s=$a(this,o,e,i,c,u,h,S,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vv(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function $a(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ga),n.getVertexPosition(l,Wa),n.getVertexPosition(c,Xa);let u=vv(n,e,t,i,Ga,Wa,Xa,np);if(u){let h=new H;xs.getBarycoord(np,Ga,Wa,Xa,h),s&&(u.uv=xs.getInterpolatedAttribute(s,a,l,c,h,new Ke)),r&&(u.uv1=xs.getInterpolatedAttribute(r,a,l,c,h,new Ke)),o&&(u.normal=xs.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};xs.getNormal(Ga,Wa,Xa,f.normal),u.face=f,u.barycoord=h}return u}var bn=class n extends xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function g(x,m,d,S,M,y,w,E,v,T,_){let b=y/v,A=w/T,N=y/2,B=w/2,L=E/2,k=v+1,z=T+1,Z=0,V=0,se=new H;for(let ye=0;ye<z;ye++){let Q=ye*A-B;for(let ge=0;ge<k;ge++){let be=ge*b-N;se[x]=be*S,se[m]=Q*M,se[d]=L,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[d]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push(ge/v),h.push(1-ye/T),Z+=1}}for(let ye=0;ye<T;ye++)for(let Q=0;Q<v;Q++){let ge=f+Q+k*ye,be=f+Q+k*(ye+1),ce=f+(Q+1)+k*(ye+1),re=f+(Q+1)+k*ye;l.push(ge,be,re),l.push(be,ce,re),V+=6}a.addGroup(p,V,_),p+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pn(n){let e={};for(let t=0;t<n.length;t++){let i=Jr(n[t]);for(let s in i)e[s]=i[s]}return e}function yv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Tn={clone:Jr,merge:Pn},_v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends Mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_l=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ms=new H,ip=new Ke,sp=new Ke,Zt=class extends _l{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,ip,sp),t.subVectors(sp,ip)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,Lr=1,ih=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Ir,Lr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Ir,Lr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Ir,Lr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Ir,Lr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Ir,Lr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Ir,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ml=class extends ln{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sh=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ml(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:nn});r.uniforms.tEquirect.value=t;let o=new rt(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=On),new ih(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},su=new H,bv=new H,Sv=new ht,xi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=su.subVectors(i,t).cross(bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(su),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sv.getNormalMatrix(e),s=this.coplanarPoint(su).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qs=new Xn,Za=new H,jo=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],S=s[13],M=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-p,y-d).normalize(),i[1].setComponents(l+r,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+u,m+g,y+S).normalize(),i[3].setComponents(l-o,f-u,m-g,y-S).normalize(),i[4].setComponents(l-a,f-h,m-x,y-M).normalize(),t===Zi)i[5].setComponents(l+a,f+h,m+x,y+M).normalize();else if(t===pl)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ev(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zn=class n extends xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let S=d*f-o;for(let M=0;M<c;M++){let y=M*h-r;g.push(y,-S,0),x.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){let M=S+c*d,y=S+c*(d+1),w=S+1+c*(d+1),E=S+1+c*d;p.push(M,y,E),p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wv=`#ifdef USE_ALPHAHASH
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
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iv=`#ifdef USE_AOMAP
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
#endif`,Lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dv=`#ifdef USE_BATCHING
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
#endif`,Nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ov=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bv=`#ifdef USE_IRIDESCENCE
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
#endif`,zv=`#ifdef USE_BUMPMAP
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
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$v=`#define PI 3.141592653589793
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
} // validated`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kv=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
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
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
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
#endif`,xy=`#ifdef USE_ENVMAP
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
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,by=`PhysicalMaterial material;
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
#endif`,Sy=`struct PhysicalMaterial {
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
}`,Ey=`
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
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ny=`#if defined( USE_POINTS_UV )
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
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,By=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c_=`float getShadowMask() {
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
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,p_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T_=`uniform sampler2D t2D;
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`#include <common>
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
}`,I_=`#if DEPTH_PACKING == 3200
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
}`,L_=`#define DISTANCE
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
}`,D_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`uniform float scale;
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,z_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,H_=`#define LAMBERT
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
}`,V_=`#define MATCAP
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
}`,G_=`#define MATCAP
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
}`,W_=`#define NORMAL
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
}`,X_=`#define NORMAL
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
}`,q_=`#define PHONG
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
}`,Y_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,Z_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,j_=`#define TOON
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
}`,J_=`uniform float size;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,n1=`uniform float rotation;
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
}`,i1=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Tv,alphahash_pars_fragment:wv,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Pv,aomap_fragment:Iv,aomap_pars_fragment:Lv,batching_pars_vertex:Dv,batching_vertex:Nv,begin_vertex:Uv,beginnormal_vertex:Fv,bsdfs:Ov,iridescence_fragment:Bv,bumpmap_pars_fragment:zv,clipping_planes_fragment:kv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:Gv,color_fragment:Wv,color_pars_fragment:Xv,color_pars_vertex:qv,color_vertex:Yv,common:$v,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Kv,displacementmap_pars_vertex:jv,displacementmap_vertex:Jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:ey,colorspace_fragment:ty,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:sy,envmap_pars_fragment:ry,envmap_pars_vertex:oy,envmap_physical_pars_fragment:xy,envmap_vertex:ay,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:hy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:dy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:vy,lights_toon_pars_fragment:yy,lights_phong_fragment:_y,lights_phong_pars_fragment:My,lights_physical_fragment:by,lights_physical_pars_fragment:Sy,lights_fragment_begin:Ey,lights_fragment_maps:Ty,lights_fragment_end:wy,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Py,map_fragment:Iy,map_pars_fragment:Ly,map_particle_fragment:Dy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Fy,morphinstance_vertex:Oy,morphcolor_vertex:By,morphnormal_vertex:zy,morphtarget_pars_vertex:ky,morphtarget_vertex:Hy,normal_fragment_begin:Vy,normal_fragment_maps:Gy,normal_pars_fragment:Wy,normal_pars_vertex:Xy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:jy,opaque_fragment:Jy,packing:Qy,premultiplied_alpha_fragment:e_,project_vertex:t_,dithering_fragment:n_,dithering_pars_fragment:i_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:a_,shadowmap_vertex:l_,shadowmask_pars_fragment:c_,skinbase_vertex:u_,skinning_pars_vertex:h_,skinning_vertex:f_,skinnormal_vertex:d_,specularmap_fragment:p_,specularmap_pars_fragment:m_,tonemapping_fragment:g_,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:__,uv_pars_vertex:M_,uv_vertex:b_,worldpos_vertex:S_,background_vert:E_,background_frag:T_,backgroundCube_vert:w_,backgroundCube_frag:A_,cube_vert:R_,cube_frag:C_,depth_vert:P_,depth_frag:I_,distanceRGBA_vert:L_,distanceRGBA_frag:D_,equirect_vert:N_,equirect_frag:U_,linedashed_vert:F_,linedashed_frag:O_,meshbasic_vert:B_,meshbasic_frag:z_,meshlambert_vert:k_,meshlambert_frag:H_,meshmatcap_vert:V_,meshmatcap_frag:G_,meshnormal_vert:W_,meshnormal_frag:X_,meshphong_vert:q_,meshphong_frag:Y_,meshphysical_vert:$_,meshphysical_frag:Z_,meshtoon_vert:K_,meshtoon_frag:j_,points_vert:J_,points_frag:Q_,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},We={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ri={basic:{uniforms:Pn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Pn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Pn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Pn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Pn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Pn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Pn([We.points,We.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Pn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Pn([We.common,We.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Pn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Pn([We.sprite,We.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Pn([We.common,We.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Pn([We.lights,We.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ri.physical={uniforms:Pn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Ka={r:0,b:0,g:0},er=new bi,s1=new je;function r1(n,e,t,i,s,r,o){let a=new Ae(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1,y=g(S);y===null?d(a,l):y&&y.isColor&&(d(y,1),M=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){let y=g(M);y&&(y.isCubeTexture||y.mapping===zl)?(u===void 0&&(u=new rt(new bn(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Jr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),er.copy(M.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(er)),u.material.toneMapped=mt.getTransfer(y.colorSpace)!==Ct,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new zn(2,2),new Mt({name:"BackgroundMaterial",uniforms:Jr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=mt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,M){S.getRGB(Ka,hm(n)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:x,addToRenderList:m}}function o1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,A,N,B,L){let k=!1,z=h(B,N,A);r!==z&&(r=z,c(r.object)),k=p(b,B,N,L),k&&g(b,B,N,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(b,A,N,B),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,A,N){let B=N.wireframe===!0,L=i[b.id];L===void 0&&(L={},i[b.id]=L);let k=L[A.id];k===void 0&&(k={},L[A.id]=k);let z=k[B];return z===void 0&&(z=f(l()),k[B]=z),z}function f(b){let A=[],N=[],B=[];for(let L=0;L<t;L++)A[L]=0,N[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:B,object:b,attributes:{},index:null}}function p(b,A,N,B){let L=r.attributes,k=A.attributes,z=0,Z=N.getAttributes();for(let V in Z)if(Z[V].location>=0){let ye=L[V],Q=k[V];if(Q===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),ye===void 0||ye.attribute!==Q||Q&&ye.data!==Q.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function g(b,A,N,B){let L={},k=A.attributes,z=0,Z=N.getAttributes();for(let V in Z)if(Z[V].location>=0){let ye=k[V];ye===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor));let Q={};Q.attribute=ye,ye&&ye.data&&(Q.data=ye.data),L[V]=Q,z++}r.attributes=L,r.attributesNum=z,r.index=B}function x(){let b=r.newAttributes;for(let A=0,N=b.length;A<N;A++)b[A]=0}function m(b){d(b,0)}function d(b,A){let N=r.newAttributes,B=r.enabledAttributes,L=r.attributeDivisors;N[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),L[b]!==A&&(n.vertexAttribDivisor(b,A),L[b]=A)}function S(){let b=r.newAttributes,A=r.enabledAttributes;for(let N=0,B=A.length;N<B;N++)A[N]!==b[N]&&(n.disableVertexAttribArray(N),A[N]=0)}function M(b,A,N,B,L,k,z){z===!0?n.vertexAttribIPointer(b,A,N,L,k):n.vertexAttribPointer(b,A,N,B,L,k)}function y(b,A,N,B){x();let L=B.attributes,k=N.getAttributes(),z=A.defaultAttributeValues;for(let Z in k){let V=k[Z];if(V.location>=0){let se=L[Z];if(se===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let ye=se.normalized,Q=se.itemSize,ge=e.get(se);if(ge===void 0)continue;let be=ge.buffer,ce=ge.type,re=ge.bytesPerElement,oe=ce===n.INT||ce===n.UNSIGNED_INT||se.gpuType===Oh;if(se.isInterleavedBufferAttribute){let P=se.data,G=P.stride,$=se.offset;if(P.isInstancedInterleavedBuffer){for(let te=0;te<V.locationSize;te++)d(V.location+te,P.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);n.bindBuffer(n.ARRAY_BUFFER,be);for(let te=0;te<V.locationSize;te++)M(V.location+te,Q/V.locationSize,ce,ye,G*re,($+Q/V.locationSize*te)*re,oe)}else{if(se.isInstancedBufferAttribute){for(let P=0;P<V.locationSize;P++)d(V.location+P,se.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let P=0;P<V.locationSize;P++)m(V.location+P);n.bindBuffer(n.ARRAY_BUFFER,be);for(let P=0;P<V.locationSize;P++)M(V.location+P,Q/V.locationSize,ce,ye,Q*re,Q/V.locationSize*P*re,oe)}}else if(z!==void 0){let ye=z[Z];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(V.location,ye);break;case 3:n.vertexAttrib3fv(V.location,ye);break;case 4:n.vertexAttrib4fv(V.location,ye);break;default:n.vertexAttrib1fv(V.location,ye)}}}}S()}function w(){T();for(let b in i){let A=i[b];for(let N in A){let B=A[N];for(let L in B)u(B[L].object),delete B[L];delete A[N]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let A=i[b.id];for(let N in A){let B=A[N];for(let L in B)u(B[L].object),delete B[L];delete A[N]}delete i[b.id]}function v(b){for(let A in i){let N=i[A];if(N[b.id]===void 0)continue;let B=N[b.id];for(let L in B)u(B[L].object),delete B[L];delete N[b.id]}}function T(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function a1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Bn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let T=v===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Mi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==yi&&!T)}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:w,maxSamples:E}}function c1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new xi,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,M=S*4,y=d.clippingState||null;l.value=y,y=u(g,f,M,p);for(let w=0;w!==M;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==x;++M,y+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function u1(n){let e=new WeakMap;function t(o,a){return a===Tu?o.mapping=qr:a===wu&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Tu||a===wu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Es=class extends _l{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,rp=[.125,.215,.35,.446,.526,.582],ir=20,ru=new Es,op=new Ae,ou=null,au=0,lu=0,cu=!1,nr=(1+Math.sqrt(5))/2,Dr=1/nr,ap=[new H(-nr,Dr,0),new H(nr,Dr,0),new H(-Dr,0,nr),new H(Dr,0,nr),new H(0,nr,-Dr),new H(0,nr,Dr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,lu),this._renderer.xr.enabled=cu,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:un,format:Bn,colorSpace:En,depthBuffer:!1},s=lp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h1(r)),this._blurMaterial=f1(r,e,t)}return s}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,ru)}_sceneToCubeUV(e,t,i,s){let a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(op),u.toneMapping=ys,u.autoClear=!1;let p=new Yt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new rt(new bn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(op),x=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;ja(s,S*M,d>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===qr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ru)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ap[(s-r-1)%ap.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new rt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ir-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ir;m>ir&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);let d=[],S=0;for(let v=0;v<ir;++v){let T=v/x,_=Math.exp(-T*T/2);d.push(_),v===0?S+=_:v<m&&(S+=2*_)}for(let v=0;v<d.length;v++)d[v]=d[v]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let y=this._sizeLods[s],w=3*y*(s>M-kr?s-M+kr:0),E=4*(this._cubeSize-y);ja(t,w,E,3*y,2*y),l.setRenderTarget(t),l.render(h,ru)}};function h1(n){let e=[],t=[],i=[],s=n,r=n-kr+1+rp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-kr?l=rp[o-n+kr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,S=new Float32Array(x*g*p),M=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let E=0;E<p;E++){let v=E%3*2/3-1,T=E>2?0:-1,_=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];S.set(_,x*g*E),M.set(f,m*g*E);let b=[E,E,E,E,E,E];y.set(b,d*g*E)}let w=new xt;w.setAttribute("position",new gt(S,x)),w.setAttribute("uv",new gt(M,m)),w.setAttribute("faceIndex",new gt(y,d)),e.push(w),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lp(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function f1(n,e,t){let i=new Float32Array(ir),s=new H(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function cp(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function up(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Xh(){return`

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
	`}function d1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Tu||l===wu,u=l===qr||l===Yr;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qr(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Qr(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function p1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ho("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function m1(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let M=0,y=S.length;M<y;M+=3){let w=S[M+0],E=S[M+1],v=S[M+2];f.push(w,E,E,v,v,w)}}else if(g!==void 0){let S=g.array;x=g.version;for(let M=0,y=S.length/3-1;M<y;M+=3){let w=M+0,E=M+1,v=M+2;f.push(w,E,E,v,v,w)}}else return;let m=new(cm(f)?yl:vl)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function g1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*x[S];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function v1(n,e,t){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let _=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*w*4*h),v=new gl(E,y,w,h);v.type=yi,v.needsUpdate=!0;let T=M*4;for(let b=0;b<h;b++){let A=m[b],N=d[b],B=S[b],L=y*w*4*b;for(let k=0;k<A.count;k++){let z=k*T;p===!0&&(s.fromBufferAttribute(A,k),E[L+z+0]=s.x,E[L+z+1]=s.y,E[L+z+2]=s.z,E[L+z+3]=0),g===!0&&(s.fromBufferAttribute(N,k),E[L+z+4]=s.x,E[L+z+5]=s.y,E[L+z+6]=s.z,E[L+z+7]=0),x===!0&&(s.fromBufferAttribute(B,k),E[L+z+8]=s.x,E[L+z+9]=s.y,E[L+z+10]=s.z,E[L+z+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new Ke(y,w)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function y1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var eo=class extends ln{constructor(e,t,i,s,r,o,a,l,c,u=Vr){if(u!==Vr&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=sr),i===void 0&&u===bs&&(i=Ms),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dm=new ln,hp=new eo(1,1),pm=new gl,mm=new nh,gm=new Ml,fp=[],dp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=fp[s];if(r===void 0&&(r=new Float32Array(s),fp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gl(n,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function M1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function S1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function E1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;gp.set(i),n.uniformMatrix2fv(this.addr,!1,gp),on(t,i)}}function T1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;mp.set(i),n.uniformMatrix3fv(this.addr,!1,mp),on(t,i)}}function w1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;pp.set(i),n.uniformMatrix4fv(this.addr,!1,pp),on(t,i)}}function A1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function I1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function U1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hp.compareFunction=am,r=hp):r=dm,t.setTexture2D(e||r,s)}function F1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||mm,s)}function O1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||gm,s)}function B1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pm,s)}function z1(n){switch(n){case 5126:return _1;case 35664:return M1;case 35665:return b1;case 35666:return S1;case 35674:return E1;case 35675:return T1;case 35676:return w1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return P1;case 5125:return I1;case 36294:return L1;case 36295:return D1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return B1}}function k1(n,e){n.uniform1fv(this.addr,e)}function H1(n,e){let t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function V1(n,e){let t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function G1(n,e){let t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function W1(n,e){let t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function X1(n,e){let t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function q1(n,e){let t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Y1(n,e){n.uniform1iv(this.addr,e)}function $1(n,e){n.uniform2iv(this.addr,e)}function Z1(n,e){n.uniform3iv(this.addr,e)}function K1(n,e){n.uniform4iv(this.addr,e)}function j1(n,e){n.uniform1uiv(this.addr,e)}function J1(n,e){n.uniform2uiv(this.addr,e)}function Q1(n,e){n.uniform3uiv(this.addr,e)}function eM(n,e){n.uniform4uiv(this.addr,e)}function tM(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||dm,r[o])}function nM(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mm,r[o])}function iM(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gm,r[o])}function sM(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pm,r[o])}function rM(n){switch(n){case 5126:return k1;case 35664:return H1;case 35665:return V1;case 35666:return G1;case 35674:return W1;case 35675:return X1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return $1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return j1;case 36294:return J1;case 36295:return Q1;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}var rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=z1(t.type)}},oh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rM(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},uu=/(\w+)(\])?(\[|\.)?/g;function xp(n,e){n.seq.push(e),n.map[e.id]=e}function oM(n,e,t){let i=n.name,s=i.length;for(uu.lastIndex=0;;){let r=uu.exec(i),o=uu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xp(t,c===void 0?new rh(a,n,e):new oh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ah(a),xp(t,h)),t=h}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);oM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function vp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var aM=37297,lM=0;function cM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var yp=new ht;function uM(n){mt._getMatrix(yp,mt.workingColorSpace,n);let e=`mat3( ${yp.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Vl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _p(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+cM(n.getShaderSource(e),o)}else return s}function hM(n,e){let t=uM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fM(n,e){let t;switch(e){case Ih:t="Linear";break;case Lh:t="Reinhard";break;case Dh:t="Cineon";break;case sa:t="ACESFilmic";break;case Nh:t="AgX";break;case Uh:t="Neutral";break;case Rx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ja=new H;function dM(){mt.getLuminanceCoefficients(Ja);let n=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function mM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vo(n){return n!==""}function Mp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(n){return n.replace(xM,yM)}var vM=new Map;function yM(n,e){let t=ft[e];if(t===void 0){let i=vM.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}var _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(n){return n.replace(_M,MM)}function MM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ep(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function SM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qr:case Yr:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Yr&&(e="ENVMAP_MODE_REFRACTION"),e}function TM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case wx:e="ENVMAP_BLENDING_MIX";break;case Ax:e="ENVMAP_BLENDING_ADD";break}return e}function wM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=bM(t),c=SM(t),u=EM(t),h=TM(t),f=wM(t),p=pM(t),g=mM(r),x=s.createProgram(),m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),d.length>0&&(d+=`
`)):(m=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),d=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ys?"#define TONE_MAPPING":"",t.toneMapping!==ys?ft.tonemapping_pars_fragment:"",t.toneMapping!==ys?fM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,hM("linearToOutputTexel",t.outputColorSpace),dM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),o=lh(o),o=Mp(o,t),o=bp(o,t),a=lh(a),a=Mp(a,t),a=bp(a,t),o=Sp(o),a=Sp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=S+m+o,y=S+d+a,w=vp(s,s.VERTEX_SHADER,M),E=vp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(A){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(w).trim(),L=s.getShaderInfoLog(E).trim(),k=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,E);else{let Z=_p(s,w,"vertex"),V=_p(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+Z+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||L==="")&&(z=!1);z&&(A.diagnostics={runnable:k,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(w),s.deleteShader(E),T=new Wr(s,x),_=gM(s,x)}let T;this.getUniforms=function(){return T===void 0&&v(this),T};let _;this.getAttributes=function(){return _===void 0&&v(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,aM)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var RM=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new uh(e),t.set(e,i)),i}},uh=class{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}};function CM(n,e,t,i,s,r,o){let a=new xl,l=new ch,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,A,N,B){let L=N.fog,k=B.geometry,z=_.isMeshStandardMaterial?N.environment:null,Z=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),V=Z&&Z.mapping===zl?Z.image.height:null,se=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let ye=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=ye!==void 0?ye.length:0,ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let be,ce,re,oe;if(se){let Ee=Ri[se];be=Ee.vertexShader,ce=Ee.fragmentShader}else be=_.vertexShader,ce=_.fragmentShader,l.update(_),re=l.getVertexShaderID(_),oe=l.getFragmentShaderID(_);let P=n.getRenderTarget(),G=n.state.buffers.depth.getReversed(),$=B.isInstancedMesh===!0,te=B.isBatchedMesh===!0,le=!!_.map,Te=!!_.matcap,Fe=!!Z,q=!!_.aoMap,Ye=!!_.lightMap,ke=!!_.bumpMap,Le=!!_.normalMap,Ce=!!_.displacementMap,qe=!!_.emissiveMap,Pe=!!_.metalnessMap,U=!!_.roughnessMap,R=_.anisotropy>0,ne=_.clearcoat>0,xe=_.dispersion>0,Me=_.iridescence>0,de=_.sheen>0,He=_.transmission>0,Re=R&&!!_.anisotropyMap,Ne=ne&&!!_.clearcoatMap,Ve=ne&&!!_.clearcoatNormalMap,_e=ne&&!!_.clearcoatRoughnessMap,De=Me&&!!_.iridescenceMap,$e=Me&&!!_.iridescenceThicknessMap,Qe=de&&!!_.sheenColorMap,D=de&&!!_.sheenRoughnessMap,K=!!_.specularMap,X=!!_.specularColorMap,F=!!_.specularIntensityMap,C=He&&!!_.transmissionMap,Y=He&&!!_.thicknessMap,O=!!_.gradientMap,j=!!_.alphaMap,W=_.alphaTest>0,ue=!!_.alphaHash,Se=!!_.extensions,Ue=ys;_.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ue=n.toneMapping);let Ie={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:ce,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:te,batchingColor:te&&B._colorsTexture!==null,instancing:$,instancingColor:$&&B.instanceColor!==null,instancingMorph:$&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:En,alphaToCoverage:!!_.alphaToCoverage,map:le,matcap:Te,envMap:Fe,envMapMode:Fe&&Z.mapping,envMapCubeUVHeight:V,aoMap:q,lightMap:Ye,bumpMap:ke,normalMap:Le,displacementMap:f&&Ce,emissiveMap:qe,normalMapObjectSpace:Le&&_.normalMapType===Dx,normalMapTangentSpace:Le&&_.normalMapType===Hl,metalnessMap:Pe,roughnessMap:U,anisotropy:R,anisotropyMap:Re,clearcoat:ne,clearcoatMap:Ne,clearcoatNormalMap:Ve,clearcoatRoughnessMap:_e,dispersion:xe,iridescence:Me,iridescenceMap:De,iridescenceThicknessMap:$e,sheen:de,sheenColorMap:Qe,sheenRoughnessMap:D,specularMap:K,specularColorMap:X,specularIntensityMap:F,transmission:He,transmissionMap:C,thicknessMap:Y,gradientMap:O,opaque:_.transparent===!1&&_.blending===Hr&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:W,alphaHash:ue,combine:_.combine,mapUv:le&&x(_.map.channel),aoMapUv:q&&x(_.aoMap.channel),lightMapUv:Ye&&x(_.lightMap.channel),bumpMapUv:ke&&x(_.bumpMap.channel),normalMapUv:Le&&x(_.normalMap.channel),displacementMapUv:Ce&&x(_.displacementMap.channel),emissiveMapUv:qe&&x(_.emissiveMap.channel),metalnessMapUv:Pe&&x(_.metalnessMap.channel),roughnessMapUv:U&&x(_.roughnessMap.channel),anisotropyMapUv:Re&&x(_.anisotropyMap.channel),clearcoatMapUv:Ne&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:D&&x(_.sheenRoughnessMap.channel),specularMapUv:K&&x(_.specularMap.channel),specularColorMapUv:X&&x(_.specularColorMap.channel),specularIntensityMapUv:F&&x(_.specularIntensityMap.channel),transmissionMapUv:C&&x(_.transmissionMap.channel),thicknessMapUv:Y&&x(_.thicknessMap.channel),alphaMapUv:j&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Le||R),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(le||j),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:G,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:le&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===Ct,decodeVideoTextureEmissive:qe&&_.emissiveMap.isVideoTexture===!0&&mt.getTransfer(_.emissiveMap.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nt,flipSided:_.side===Qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function d(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(S(b,_),M(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function S(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){let b=g[_.type],A;if(b){let N=Ri[b];A=Tn.clone(N.uniforms)}else A=_.uniforms;return A}function w(_,b){let A;for(let N=0,B=u.length;N<B;N++){let L=u[N];if(L.cacheKey===b){A=L,++A.usedTimes;break}}return A===void 0&&(A=new AM(n,b,_,r),u.push(A)),A}function E(_){if(--_.usedTimes===0){let b=u.indexOf(_);u[b]=u[u.length-1],u.pop(),_.destroy()}}function v(_){l.remove(_)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:E,releaseShaderCache:v,programs:u,dispose:T}}function PM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function IM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||IM),i.length>1&&i.sort(f||Tp),s.length>1&&s.sort(f||Tp)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function LM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new wp,n.set(i,[o])):s>=r.length?(o=new wp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ae};break;case"SpotLight":t={position:new H,direction:new H,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function NM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var UM=0;function FM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OM(n){let e=new DM,t=NM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,S=0,M=0,y=0,w=0,E=0,v=0;c.sort(FM);for(let _=0,b=c.length;_<b;_++){let A=c[_],N=A.color,B=A.intensity,L=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*B,h+=N.g*B,f+=N.b*B;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],B);v++}else if(A.isDirectionalLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,V=t.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=A.shadow.matrix,S++}i.directional[p]=z,p++}else if(A.isSpotLight){let z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(N).multiplyScalar(B),z.distance=L,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[x]=z;let Z=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,Z.updateMatrices(A),A.castShadow&&E++),i.spotLightMatrix[x]=Z.matrix,A.castShadow){let V=t.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=k,y++}x++}else if(A.isRectAreaLight){let z=e.get(A);z.color.copy(N).multiplyScalar(B),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=z,m++}else if(A.isPointLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){let Z=A.shadow,V=t.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=A.shadow.matrix,M++}i.point[g]=z,g++}else if(A.isHemisphereLight){let z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(B),z.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[d]=z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let T=i.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==d||T.numDirectionalShadows!==S||T.numPointShadows!==M||T.numSpotShadows!==y||T.numSpotMaps!==w||T.numLightProbes!==v)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=v,T.directionalLength=p,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=d,T.numDirectionalShadows=S,T.numPointShadows=M,T.numSpotShadows=y,T.numSpotMaps=w,T.numLightProbes=v,i.version=UM++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){let M=c[d];if(M.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Ap(n){let e=new OM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function BM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ap(n),e.set(s,[a])):r>=o.length?(a=new Ap(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var hh=class extends Mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fh=class extends Mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
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
}`;function HM(n,e,t){let i=new jo,s=new Ke,r=new Ke,o=new St,a=new hh({depthPacking:Lx}),l=new fh,c={},u=t.maxTextureSize,h={[Ci]:Qt,[Qt]:Ci,[Nt]:Nt},f=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:zM,fragmentShader:kM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let d=this.type;this.render=function(E,v,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let _=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(nn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=d!==Yi&&this.type===Yi,L=d===Yi&&this.type!==Yi;for(let k=0,z=E.length;k<z;k++){let Z=E[k],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||B===!0||L===!0){let Q=this.type!==Yi?{minFilter:Kt,magFilter:Kt}:{};V.map!==null&&V.map.dispose(),V.map=new qt(s.x,s.y,Q),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ye=V.getViewportCount();for(let Q=0;Q<ye;Q++){let ge=V.getViewport(Q);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),N.viewport(o),V.updateMatrices(Z,Q),i=V.getFrustum(),y(v,T,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Yi&&S(V,T),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(_,b,A)};function S(E,v){let T=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(v,null,T,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(v,null,T,p,x,null)}function M(E,v,T,_){let b=null,A=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)b=A;else if(b=T.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let N=b.uuid,B=v.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let k=L[B];k===void 0&&(k=b.clone(),L[B]=k,v.addEventListener("dispose",w)),b=k}if(b.visible=v.visible,b.wireframe=v.wireframe,_===Yi?b.side=v.shadowSide!==null?v.shadowSide:v.side:b.side=v.shadowSide!==null?v.shadowSide:h[v.side],b.alphaMap=v.alphaMap,b.alphaTest=v.alphaTest,b.map=v.map,b.clipShadows=v.clipShadows,b.clippingPlanes=v.clippingPlanes,b.clipIntersection=v.clipIntersection,b.displacementMap=v.displacementMap,b.displacementScale=v.displacementScale,b.displacementBias=v.displacementBias,b.wireframeLinewidth=v.wireframeLinewidth,b.linewidth=v.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=n.properties.get(b);N.light=T}return b}function y(E,v,T,_,b){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Yi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);let B=e.update(E),L=E.material;if(Array.isArray(L)){let k=B.groups;for(let z=0,Z=k.length;z<Z;z++){let V=k[z],se=L[V.materialIndex];if(se&&se.visible){let ye=M(E,se,_,b);E.onBeforeShadow(n,E,v,T,B,ye,V),n.renderBufferDirect(T,null,B,ye,E,V),E.onAfterShadow(n,E,v,T,B,ye,V)}}}else if(L.visible){let k=M(E,L,_,b);E.onBeforeShadow(n,E,v,T,B,k,null),n.renderBufferDirect(T,null,B,k,E,null),E.onAfterShadow(n,E,v,T,B,k,null)}}let N=E.children;for(let B=0,L=N.length;B<L;B++)y(N[B],v,T,_,b)}function w(E){E.target.removeEventListener("dispose",w);for(let T in c){let _=c[T],b=E.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var VM={[vu]:yu,[_u]:Su,[Mu]:Eu,[Xr]:bu,[yu]:vu,[Su]:_u,[Eu]:Mu,[bu]:Xr};function GM(n,e){function t(){let C=!1,Y=new St,O=null,j=new St(0,0,0,0);return{setMask:function(W){O!==W&&!C&&(n.colorMask(W,W,W,W),O=W)},setLocked:function(W){C=W},setClear:function(W,ue,Se,Ue,Ie){Ie===!0&&(W*=Ue,ue*=Ue,Se*=Ue),Y.set(W,ue,Se,Ue),j.equals(Y)===!1&&(n.clearColor(W,ue,Se,Ue),j.copy(Y))},reset:function(){C=!1,O=null,j.set(-1,0,0,0)}}}function i(){let C=!1,Y=!1,O=null,j=null,W=null;return{setReversed:function(ue){if(Y!==ue){let Se=e.get("EXT_clip_control");Y?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT);let Ue=W;W=null,this.setClear(Ue)}Y=ue},getReversed:function(){return Y},setTest:function(ue){ue?P(n.DEPTH_TEST):G(n.DEPTH_TEST)},setMask:function(ue){O!==ue&&!C&&(n.depthMask(ue),O=ue)},setFunc:function(ue){if(Y&&(ue=VM[ue]),j!==ue){switch(ue){case vu:n.depthFunc(n.NEVER);break;case yu:n.depthFunc(n.ALWAYS);break;case _u:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case Mu:n.depthFunc(n.EQUAL);break;case bu:n.depthFunc(n.GEQUAL);break;case Su:n.depthFunc(n.GREATER);break;case Eu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ue}},setLocked:function(ue){C=ue},setClear:function(ue){W!==ue&&(Y&&(ue=1-ue),n.clearDepth(ue),W=ue)},reset:function(){C=!1,O=null,j=null,W=null,Y=!1}}}function s(){let C=!1,Y=null,O=null,j=null,W=null,ue=null,Se=null,Ue=null,Ie=null;return{setTest:function(Ee){C||(Ee?P(n.STENCIL_TEST):G(n.STENCIL_TEST))},setMask:function(Ee){Y!==Ee&&!C&&(n.stencilMask(Ee),Y=Ee)},setFunc:function(Ee,ie,J){(O!==Ee||j!==ie||W!==J)&&(n.stencilFunc(Ee,ie,J),O=Ee,j=ie,W=J)},setOp:function(Ee,ie,J){(ue!==Ee||Se!==ie||Ue!==J)&&(n.stencilOp(Ee,ie,J),ue=Ee,Se=ie,Ue=J)},setLocked:function(Ee){C=Ee},setClear:function(Ee){Ie!==Ee&&(n.clearStencil(Ee),Ie=Ee)},reset:function(){C=!1,Y=null,O=null,j=null,W=null,ue=null,Se=null,Ue=null,Ie=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,S=null,M=null,y=null,w=null,E=null,v=new Ae(0,0,0),T=0,_=!1,b=null,A=null,N=null,B=null,L=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=Z>=2);let se=null,ye={},Q=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),be=new St().fromArray(Q),ce=new St().fromArray(ge);function re(C,Y,O,j){let W=new Uint8Array(4),ue=n.createTexture();n.bindTexture(C,ue),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<O;Se++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Y,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,W):n.texImage2D(Y+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,W);return ue}let oe={};oe[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(n.DEPTH_TEST),o.setFunc(Xr),ke(!1),Le(Cd),P(n.CULL_FACE),q(nn);function P(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function G(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function $(C,Y){return h[C]!==Y?(n.bindFramebuffer(C,Y),h[C]=Y,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Y),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Y),!0):!1}function te(C,Y){let O=p,j=!1;if(C){O=f.get(Y),O===void 0&&(O=[],f.set(Y,O));let W=C.textures;if(O.length!==W.length||O[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Se=W.length;ue<Se;ue++)O[ue]=n.COLOR_ATTACHMENT0+ue;O.length=W.length,j=!0}}else O[0]!==n.BACK&&(O[0]=n.BACK,j=!0);j&&n.drawBuffers(O)}function le(C){return g!==C?(n.useProgram(C),g=C,!0):!1}let Te={[Fn]:n.FUNC_ADD,[dx]:n.FUNC_SUBTRACT,[px]:n.FUNC_REVERSE_SUBTRACT};Te[mx]=n.MIN,Te[gx]=n.MAX;let Fe={[lo]:n.ZERO,[Ch]:n.ONE,[xx]:n.SRC_COLOR,[xu]:n.SRC_ALPHA,[Mx]:n.SRC_ALPHA_SATURATE,[Bl]:n.DST_COLOR,[Ol]:n.DST_ALPHA,[vx]:n.ONE_MINUS_SRC_COLOR,[Yo]:n.ONE_MINUS_SRC_ALPHA,[_x]:n.ONE_MINUS_DST_COLOR,[yx]:n.ONE_MINUS_DST_ALPHA,[bx]:n.CONSTANT_COLOR,[Sx]:n.ONE_MINUS_CONSTANT_COLOR,[Ex]:n.CONSTANT_ALPHA,[Tx]:n.ONE_MINUS_CONSTANT_ALPHA};function q(C,Y,O,j,W,ue,Se,Ue,Ie,Ee){if(C===nn){x===!0&&(G(n.BLEND),x=!1);return}if(x===!1&&(P(n.BLEND),x=!0),C!==ia){if(C!==m||Ee!==_){if((d!==Fn||y!==Fn)&&(n.blendEquation(n.FUNC_ADD),d=Fn,y=Fn),Ee)switch(C){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _s:n.blendFunc(n.ONE,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _s:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Id:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,M=null,w=null,E=null,v.set(0,0,0),T=0,m=C,_=Ee}return}W=W||Y,ue=ue||O,Se=Se||j,(Y!==d||W!==y)&&(n.blendEquationSeparate(Te[Y],Te[W]),d=Y,y=W),(O!==S||j!==M||ue!==w||Se!==E)&&(n.blendFuncSeparate(Fe[O],Fe[j],Fe[ue],Fe[Se]),S=O,M=j,w=ue,E=Se),(Ue.equals(v)===!1||Ie!==T)&&(n.blendColor(Ue.r,Ue.g,Ue.b,Ie),v.copy(Ue),T=Ie),m=C,_=!1}function Ye(C,Y){C.side===Nt?G(n.CULL_FACE):P(n.CULL_FACE);let O=C.side===Qt;Y&&(O=!O),ke(O),C.blending===Hr&&C.transparent===!1?q(nn):q(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let j=C.stencilWrite;a.setTest(j),j&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),qe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):G(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(C){b!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),b=C)}function Le(C){C!==ux?(P(n.CULL_FACE),C!==A&&(C===Cd?n.cullFace(n.BACK):C===hx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):G(n.CULL_FACE),A=C}function Ce(C){C!==N&&(z&&n.lineWidth(C),N=C)}function qe(C,Y,O){C?(P(n.POLYGON_OFFSET_FILL),(B!==Y||L!==O)&&(n.polygonOffset(Y,O),B=Y,L=O)):G(n.POLYGON_OFFSET_FILL)}function Pe(C){C?P(n.SCISSOR_TEST):G(n.SCISSOR_TEST)}function U(C){C===void 0&&(C=n.TEXTURE0+k-1),se!==C&&(n.activeTexture(C),se=C)}function R(C,Y,O){O===void 0&&(se===null?O=n.TEXTURE0+k-1:O=se);let j=ye[O];j===void 0&&(j={type:void 0,texture:void 0},ye[O]=j),(j.type!==C||j.texture!==Y)&&(se!==O&&(n.activeTexture(O),se=O),n.bindTexture(C,Y||oe[C]),j.type=C,j.texture=Y)}function ne(){let C=ye[se];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Qe(C){be.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),be.copy(C))}function D(C){ce.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ce.copy(C))}function K(C,Y){let O=c.get(Y);O===void 0&&(O=new WeakMap,c.set(Y,O));let j=O.get(C);j===void 0&&(j=n.getUniformBlockIndex(Y,C.name),O.set(C,j))}function X(C,Y){let j=c.get(Y).get(C);l.get(Y)!==j&&(n.uniformBlockBinding(Y,j,C.__bindingPointIndex),l.set(Y,j))}function F(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,ye={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,S=null,M=null,y=null,w=null,E=null,v=new Ae(0,0,0),T=0,_=!1,b=null,A=null,N=null,B=null,L=null,be.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:G,bindFramebuffer:$,drawBuffers:te,useProgram:le,setBlending:q,setMaterial:Ye,setFlipSided:ke,setCullFace:Le,setLineWidth:Ce,setPolygonOffset:qe,setScissorTest:Pe,activeTexture:U,bindTexture:R,unbindTexture:ne,compressedTexImage2D:xe,compressedTexImage3D:Me,texImage2D:De,texImage3D:$e,updateUBOMapping:K,uniformBlockBinding:X,texStorage2D:Ve,texStorage3D:_e,texSubImage2D:de,texSubImage3D:He,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ne,scissor:Qe,viewport:D,reset:F}}function Rp(n,e,t,i){let s=WM(i);switch(t){case em:return n*e;case nm:return n*e;case im:return n*e*2;case kh:return n*e/s.components*s.byteLength;case Hh:return n*e/s.components*s.byteLength;case sm:return n*e*2/s.components*s.byteLength;case Vh:return n*e*2/s.components*s.byteLength;case tm:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case Gh:return n*e*4/s.components*s.byteLength;case cl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hl:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ru:case Pu:return Math.max(n,16)*Math.max(e,8)/4;case Au:case Cu:return Math.max(n,8)*Math.max(e,8)/2;case Iu:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ku:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dl:case $u:case Zu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rm:case Ku:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ju:case Ju:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WM(n){switch(n){case Mi:case jp:return{byteLength:1,components:1};case Zo:case Jp:case un:return{byteLength:2,components:1};case Bh:case zh:return{byteLength:2,components:4};case sr:case Oh:case yi:return{byteLength:4,components:1};case Qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function XM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return p?new OffscreenCanvas(U,R):Ko("canvas")}function x(U,R,ne){let xe=1,Me=Pe(U);if((Me.width>ne||Me.height>ne)&&(xe=ne/Math.max(Me.width,Me.height)),xe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let de=Math.floor(xe*Me.width),He=Math.floor(xe*Me.height);h===void 0&&(h=g(de,He));let Re=R?g(de,He):h;return Re.width=de,Re.height=He,Re.getContext("2d").drawImage(U,0,0,de,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+de+"x"+He+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),U;return U}function m(U){return U.generateMipmaps}function d(U){n.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(U,R,ne,xe,Me=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=R;if(R===n.RED&&(ne===n.FLOAT&&(de=n.R32F),ne===n.HALF_FLOAT&&(de=n.R16F),ne===n.UNSIGNED_BYTE&&(de=n.R8)),R===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(de=n.R8UI),ne===n.UNSIGNED_SHORT&&(de=n.R16UI),ne===n.UNSIGNED_INT&&(de=n.R32UI),ne===n.BYTE&&(de=n.R8I),ne===n.SHORT&&(de=n.R16I),ne===n.INT&&(de=n.R32I)),R===n.RG&&(ne===n.FLOAT&&(de=n.RG32F),ne===n.HALF_FLOAT&&(de=n.RG16F),ne===n.UNSIGNED_BYTE&&(de=n.RG8)),R===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(de=n.RG8UI),ne===n.UNSIGNED_SHORT&&(de=n.RG16UI),ne===n.UNSIGNED_INT&&(de=n.RG32UI),ne===n.BYTE&&(de=n.RG8I),ne===n.SHORT&&(de=n.RG16I),ne===n.INT&&(de=n.RG32I)),R===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(de=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(de=n.RGB16UI),ne===n.UNSIGNED_INT&&(de=n.RGB32UI),ne===n.BYTE&&(de=n.RGB8I),ne===n.SHORT&&(de=n.RGB16I),ne===n.INT&&(de=n.RGB32I)),R===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),ne===n.UNSIGNED_INT&&(de=n.RGBA32UI),ne===n.BYTE&&(de=n.RGBA8I),ne===n.SHORT&&(de=n.RGBA16I),ne===n.INT&&(de=n.RGBA32I)),R===n.RGB&&ne===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),R===n.RGBA){let He=Me?Vl:mt.getTransfer(xe);ne===n.FLOAT&&(de=n.RGBA32F),ne===n.HALF_FLOAT&&(de=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(de=He===Ct?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function y(U,R){let ne;return U?R===null||R===sr||R===Ms?ne=n.DEPTH24_STENCIL8:R===yi?ne=n.DEPTH32F_STENCIL8:R===Zo&&(ne=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===sr||R===Ms?ne=n.DEPTH_COMPONENT24:R===yi?ne=n.DEPTH_COMPONENT32F:R===Zo&&(ne=n.DEPTH_COMPONENT16),ne}function w(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Kt&&U.minFilter!==On?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function E(U){let R=U.target;R.removeEventListener("dispose",E),T(R),R.isVideoTexture&&u.delete(R)}function v(U){let R=U.target;R.removeEventListener("dispose",v),b(R)}function T(U){let R=i.get(U);if(R.__webglInit===void 0)return;let ne=U.source,xe=f.get(ne);if(xe){let Me=xe[R.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&_(U),Object.keys(xe).length===0&&f.delete(ne)}i.remove(U)}function _(U){let R=i.get(U);n.deleteTexture(R.__webglTexture);let ne=U.source,xe=f.get(ne);delete xe[R.__cacheKey],o.memory.textures--}function b(U){let R=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(R.__webglFramebuffer[xe]))for(let Me=0;Me<R.__webglFramebuffer[xe].length;Me++)n.deleteFramebuffer(R.__webglFramebuffer[xe][Me]);else n.deleteFramebuffer(R.__webglFramebuffer[xe]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[xe])}else{if(Array.isArray(R.__webglFramebuffer))for(let xe=0;xe<R.__webglFramebuffer.length;xe++)n.deleteFramebuffer(R.__webglFramebuffer[xe]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let xe=0;xe<R.__webglColorRenderbuffer.length;xe++)R.__webglColorRenderbuffer[xe]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[xe]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let ne=U.textures;for(let xe=0,Me=ne.length;xe<Me;xe++){let de=i.get(ne[xe]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(ne[xe])}i.remove(U)}let A=0;function N(){A=0}function B(){let U=A;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),A+=1,U}function L(U){let R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function k(U,R){let ne=i.get(U);if(U.isVideoTexture&&Ce(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){let xe=U.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(ne,U,R);return}}t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+R)}function z(U,R){let ne=i.get(U);if(U.version>0&&ne.__version!==U.version){ce(ne,U,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+R)}function Z(U,R){let ne=i.get(U);if(U.version>0&&ne.__version!==U.version){ce(ne,U,R);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+R)}function V(U,R){let ne=i.get(U);if(U.version>0&&ne.__version!==U.version){re(ne,U,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+R)}let se={[In]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},ye={[Kt]:n.NEAREST,[Fh]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},Q={[Nx]:n.NEVER,[kx]:n.ALWAYS,[Ux]:n.LESS,[am]:n.LEQUAL,[Fx]:n.EQUAL,[zx]:n.GEQUAL,[Ox]:n.GREATER,[Bx]:n.NOTEQUAL};function ge(U,R){if(R.type===yi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===On||R.magFilter===Go||R.magFilter===zr||R.magFilter===ti||R.minFilter===On||R.minFilter===Go||R.minFilter===zr||R.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,se[R.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,se[R.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,se[R.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,ye[R.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,ye[R.minFilter]),R.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Q[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Kt||R.minFilter!==zr&&R.minFilter!==ti||R.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function be(U,R){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",E));let xe=R.source,Me=f.get(xe);Me===void 0&&(Me={},f.set(xe,Me));let de=L(R);if(de!==U.__cacheKey){Me[de]===void 0&&(Me[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),Me[de].usedTimes++;let He=Me[U.__cacheKey];He!==void 0&&(Me[U.__cacheKey].usedTimes--,He.usedTimes===0&&_(R)),U.__cacheKey=de,U.__webglTexture=Me[de].texture}return ne}function ce(U,R,ne){let xe=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(xe=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(xe=n.TEXTURE_3D);let Me=be(U,R),de=R.source;t.bindTexture(xe,U.__webglTexture,n.TEXTURE0+ne);let He=i.get(de);if(de.version!==He.__version||Me===!0){t.activeTexture(n.TEXTURE0+ne);let Re=mt.getPrimaries(mt.workingColorSpace),Ne=R.colorSpace===gs?null:mt.getPrimaries(R.colorSpace),Ve=R.colorSpace===gs||Re===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let _e=x(R.image,!1,s.maxTextureSize);_e=qe(R,_e);let De=r.convert(R.format,R.colorSpace),$e=r.convert(R.type),Qe=M(R.internalFormat,De,$e,R.colorSpace,R.isVideoTexture);ge(xe,R);let D,K=R.mipmaps,X=R.isVideoTexture!==!0,F=He.__version===void 0||Me===!0,C=de.dataReady,Y=w(R,_e);if(R.isDepthTexture)Qe=y(R.format===bs,R.type),F&&(X?t.texStorage2D(n.TEXTURE_2D,1,Qe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Qe,_e.width,_e.height,0,De,$e,null));else if(R.isDataTexture)if(K.length>0){X&&F&&t.texStorage2D(n.TEXTURE_2D,Y,Qe,K[0].width,K[0].height);for(let O=0,j=K.length;O<j;O++)D=K[O],X?C&&t.texSubImage2D(n.TEXTURE_2D,O,0,0,D.width,D.height,De,$e,D.data):t.texImage2D(n.TEXTURE_2D,O,Qe,D.width,D.height,0,De,$e,D.data);R.generateMipmaps=!1}else X?(F&&t.texStorage2D(n.TEXTURE_2D,Y,Qe,_e.width,_e.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,De,$e,_e.data)):t.texImage2D(n.TEXTURE_2D,0,Qe,_e.width,_e.height,0,De,$e,_e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){X&&F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Y,Qe,K[0].width,K[0].height,_e.depth);for(let O=0,j=K.length;O<j;O++)if(D=K[O],R.format!==Bn)if(De!==null)if(X){if(C)if(R.layerUpdates.size>0){let W=Rp(D.width,D.height,R.format,R.type);for(let ue of R.layerUpdates){let Se=D.data.subarray(ue*W/D.data.BYTES_PER_ELEMENT,(ue+1)*W/D.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,ue,D.width,D.height,1,De,Se)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,0,D.width,D.height,_e.depth,De,D.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,O,Qe,D.width,D.height,_e.depth,0,D.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,0,D.width,D.height,_e.depth,De,$e,D.data):t.texImage3D(n.TEXTURE_2D_ARRAY,O,Qe,D.width,D.height,_e.depth,0,De,$e,D.data)}else{X&&F&&t.texStorage2D(n.TEXTURE_2D,Y,Qe,K[0].width,K[0].height);for(let O=0,j=K.length;O<j;O++)D=K[O],R.format!==Bn?De!==null?X?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,O,0,0,D.width,D.height,De,D.data):t.compressedTexImage2D(n.TEXTURE_2D,O,Qe,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?C&&t.texSubImage2D(n.TEXTURE_2D,O,0,0,D.width,D.height,De,$e,D.data):t.texImage2D(n.TEXTURE_2D,O,Qe,D.width,D.height,0,De,$e,D.data)}else if(R.isDataArrayTexture)if(X){if(F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Y,Qe,_e.width,_e.height,_e.depth),C)if(R.layerUpdates.size>0){let O=Rp(_e.width,_e.height,R.format,R.type);for(let j of R.layerUpdates){let W=_e.data.subarray(j*O/_e.data.BYTES_PER_ELEMENT,(j+1)*O/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,_e.width,_e.height,1,De,$e,W)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,De,$e,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Qe,_e.width,_e.height,_e.depth,0,De,$e,_e.data);else if(R.isData3DTexture)X?(F&&t.texStorage3D(n.TEXTURE_3D,Y,Qe,_e.width,_e.height,_e.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,De,$e,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Qe,_e.width,_e.height,_e.depth,0,De,$e,_e.data);else if(R.isFramebufferTexture){if(F)if(X)t.texStorage2D(n.TEXTURE_2D,Y,Qe,_e.width,_e.height);else{let O=_e.width,j=_e.height;for(let W=0;W<Y;W++)t.texImage2D(n.TEXTURE_2D,W,Qe,O,j,0,De,$e,null),O>>=1,j>>=1}}else if(K.length>0){if(X&&F){let O=Pe(K[0]);t.texStorage2D(n.TEXTURE_2D,Y,Qe,O.width,O.height)}for(let O=0,j=K.length;O<j;O++)D=K[O],X?C&&t.texSubImage2D(n.TEXTURE_2D,O,0,0,De,$e,D):t.texImage2D(n.TEXTURE_2D,O,Qe,De,$e,D);R.generateMipmaps=!1}else if(X){if(F){let O=Pe(_e);t.texStorage2D(n.TEXTURE_2D,Y,Qe,O.width,O.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,$e,_e)}else t.texImage2D(n.TEXTURE_2D,0,Qe,De,$e,_e);m(R)&&d(xe),He.__version=de.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function re(U,R,ne){if(R.image.length!==6)return;let xe=be(U,R),Me=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+ne);let de=i.get(Me);if(Me.version!==de.__version||xe===!0){t.activeTexture(n.TEXTURE0+ne);let He=mt.getPrimaries(mt.workingColorSpace),Re=R.colorSpace===gs?null:mt.getPrimaries(R.colorSpace),Ne=R.colorSpace===gs||He===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Ve=R.isCompressedTexture||R.image[0].isCompressedTexture,_e=R.image[0]&&R.image[0].isDataTexture,De=[];for(let j=0;j<6;j++)!Ve&&!_e?De[j]=x(R.image[j],!0,s.maxCubemapSize):De[j]=_e?R.image[j].image:R.image[j],De[j]=qe(R,De[j]);let $e=De[0],Qe=r.convert(R.format,R.colorSpace),D=r.convert(R.type),K=M(R.internalFormat,Qe,D,R.colorSpace),X=R.isVideoTexture!==!0,F=de.__version===void 0||xe===!0,C=Me.dataReady,Y=w(R,$e);ge(n.TEXTURE_CUBE_MAP,R);let O;if(Ve){X&&F&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Y,K,$e.width,$e.height);for(let j=0;j<6;j++){O=De[j].mipmaps;for(let W=0;W<O.length;W++){let ue=O[W];R.format!==Bn?Qe!==null?X?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W,0,0,ue.width,ue.height,Qe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W,K,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W,0,0,ue.width,ue.height,Qe,D,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W,K,ue.width,ue.height,0,Qe,D,ue.data)}}}else{if(O=R.mipmaps,X&&F){O.length>0&&Y++;let j=Pe(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Y,K,j.width,j.height)}for(let j=0;j<6;j++)if(_e){X?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De[j].width,De[j].height,Qe,D,De[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,K,De[j].width,De[j].height,0,Qe,D,De[j].data);for(let W=0;W<O.length;W++){let Se=O[W].image[j].image;X?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W+1,0,0,Se.width,Se.height,Qe,D,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W+1,K,Se.width,Se.height,0,Qe,D,Se.data)}}else{X?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Qe,D,De[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,K,Qe,D,De[j]);for(let W=0;W<O.length;W++){let ue=O[W];X?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W+1,0,0,Qe,D,ue.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,W+1,K,Qe,D,ue.image[j])}}}m(R)&&d(n.TEXTURE_CUBE_MAP),de.__version=Me.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function oe(U,R,ne,xe,Me,de){let He=r.convert(ne.format,ne.colorSpace),Re=r.convert(ne.type),Ne=M(ne.internalFormat,He,Re,ne.colorSpace),Ve=i.get(R),_e=i.get(ne);if(_e.__renderTarget=R,!Ve.__hasExternalTextures){let De=Math.max(1,R.width>>de),$e=Math.max(1,R.height>>de);Me===n.TEXTURE_3D||Me===n.TEXTURE_2D_ARRAY?t.texImage3D(Me,de,Ne,De,$e,R.depth,0,He,Re,null):t.texImage2D(Me,de,Ne,De,$e,0,He,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Le(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,Me,_e.__webglTexture,0,ke(R)):(Me===n.TEXTURE_2D||Me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,xe,Me,_e.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(U,R,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,U),R.depthBuffer){let xe=R.depthTexture,Me=xe&&xe.isDepthTexture?xe.type:null,de=y(R.stencilBuffer,Me),He=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=ke(R);Le(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,de,R.width,R.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,de,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,de,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,He,n.RENDERBUFFER,U)}else{let xe=R.textures;for(let Me=0;Me<xe.length;Me++){let de=xe[Me],He=r.convert(de.format,de.colorSpace),Re=r.convert(de.type),Ne=M(de.internalFormat,He,Re,de.colorSpace),Ve=ke(R);ne&&Le(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ne,R.width,R.height):Le(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Ne,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let xe=i.get(R.depthTexture);xe.__renderTarget=R,(!xe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);let Me=xe.__webglTexture,de=ke(R);if(R.depthTexture.format===Vr)Le(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Me,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Me,0);else if(R.depthTexture.format===bs)Le(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Me,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function $(U){let R=i.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){let xe=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),xe){let Me=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,xe.removeEventListener("dispose",Me)};xe.addEventListener("dispose",Me),R.__depthDisposeCallback=Me}R.__boundDepthTexture=xe}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");G(R.__webglFramebuffer,U)}else if(ne){R.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[xe]),R.__webglDepthbuffer[xe]===void 0)R.__webglDepthbuffer[xe]=n.createRenderbuffer(),P(R.__webglDepthbuffer[xe],U,!1);else{let Me=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer[xe];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,de)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),P(R.__webglDepthbuffer,U,!1);else{let xe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,Me)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(U,R,ne){let xe=i.get(U);R!==void 0&&oe(xe.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&$(U)}function le(U){let R=U.texture,ne=i.get(U),xe=i.get(R);U.addEventListener("dispose",v);let Me=U.textures,de=U.isWebGLCubeRenderTarget===!0,He=Me.length>1;if(He||(xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture()),xe.__version=R.version,o.memory.textures++),de){ne.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer[Re]=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)ne.__webglFramebuffer[Re][Ne]=n.createFramebuffer()}else ne.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)ne.__webglFramebuffer[Re]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(He)for(let Re=0,Ne=Me.length;Re<Ne;Re++){let Ve=i.get(Me[Re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Le(U)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Re=0;Re<Me.length;Re++){let Ne=Me[Re];ne.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[Re]);let Ve=r.convert(Ne.format,Ne.colorSpace),_e=r.convert(Ne.type),De=M(Ne.internalFormat,Ve,_e,Ne.colorSpace,U.isXRRenderTarget===!0),$e=ke(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,De,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ne.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),P(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),ge(n.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)oe(ne.__webglFramebuffer[Re][Ne],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ne);else oe(ne.__webglFramebuffer[Re],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);m(R)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Re=0,Ne=Me.length;Re<Ne;Re++){let Ve=Me[Re],_e=i.get(Ve);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),ge(n.TEXTURE_2D,Ve),oe(ne.__webglFramebuffer,U,Ve,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),m(Ve)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,xe.__webglTexture),ge(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)oe(ne.__webglFramebuffer[Ne],U,R,n.COLOR_ATTACHMENT0,Re,Ne);else oe(ne.__webglFramebuffer,U,R,n.COLOR_ATTACHMENT0,Re,0);m(R)&&d(Re),t.unbindTexture()}U.depthBuffer&&$(U)}function Te(U){let R=U.textures;for(let ne=0,xe=R.length;ne<xe;ne++){let Me=R[ne];if(m(Me)){let de=S(U),He=i.get(Me).__webglTexture;t.bindTexture(de,He),d(de),t.unbindTexture()}}}let Fe=[],q=[];function Ye(U){if(U.samples>0){if(Le(U)===!1){let R=U.textures,ne=U.width,xe=U.height,Me=n.COLOR_BUFFER_BIT,de=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(U),Re=R.length>1;if(Re)for(let Ne=0;Ne<R.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ne=0;Ne<R.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Me|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Me|=n.STENCIL_BUFFER_BIT)),Re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);let Ve=i.get(R[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,ne,xe,0,0,ne,xe,Me,n.NEAREST),l===!0&&(Fe.length=0,q.length=0,Fe.push(n.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Fe.push(de),q.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ne=0;Ne<R.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);let Ve=i.get(R[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let R=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function ke(U){return Math.min(s.maxSamples,U.samples)}function Le(U){let R=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ce(U){let R=o.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function qe(U,R){let ne=U.colorSpace,xe=U.format,Me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==En&&ne!==gs&&(mt.getTransfer(ne)===Ct?(xe!==Bn||Me!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}function Pe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=te,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Le}function qM(n,e){function t(i,s=gs){let r,o=mt.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===Bh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jp)return n.BYTE;if(i===Jp)return n.SHORT;if(i===Zo)return n.UNSIGNED_SHORT;if(i===Oh)return n.INT;if(i===sr)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===em)return n.ALPHA;if(i===tm)return n.RGB;if(i===Bn)return n.RGBA;if(i===nm)return n.LUMINANCE;if(i===im)return n.LUMINANCE_ALPHA;if(i===Vr)return n.DEPTH_COMPONENT;if(i===bs)return n.DEPTH_STENCIL;if(i===kh)return n.RED;if(i===Hh)return n.RED_INTEGER;if(i===sm)return n.RG;if(i===Vh)return n.RG_INTEGER;if(i===Gh)return n.RGBA_INTEGER;if(i===cl||i===ul||i===hl||i===fl)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===cl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===cl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Au||i===Ru||i===Cu||i===Pu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Iu||i===Lu||i===Du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Iu||i===Lu)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Du)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nu||i===Uu||i===Fu||i===Ou||i===Bu||i===zu||i===ku||i===Hu||i===Vu||i===Gu||i===Wu||i===Xu||i===qu||i===Yu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ou)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ku)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===$u||i===Zu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rm||i===Ku||i===ju||i===Ju)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ju)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dh=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},YM={type:"move"},qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
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

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:$M,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends Ss{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,x=new ph,m=t.getContextAttributes(),d=null,S=null,M=[],y=[],w=new Ke,E=null,v=new Zt;v.viewport=new St;let T=new Zt;T.viewport=new St;let _=[v,T],b=new dh,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let re=M[ce];return re===void 0&&(re=new qo,M[ce]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ce){let re=M[ce];return re===void 0&&(re=new qo,M[ce]=re),re.getGripSpace()},this.getHand=function(ce){let re=M[ce];return re===void 0&&(re=new qo,M[ce]=re),re.getHandSpace()};function B(ce){let re=y.indexOf(ce.inputSource);if(re===-1)return;let oe=M[re];oe!==void 0&&(oe.update(ce.inputSource,ce.frame,c||o),oe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function L(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",k);for(let ce=0;ce<M.length;ce++){let re=y[ce];re!==null&&(y[ce]=null,M[ce].disconnect(re))}A=null,N=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,S=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",L),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,oe=null,P=null;m.depth&&(P=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?bs:Vr,oe=m.stencil?Ms:sr);let G={colorFormat:t.RGBA8,depthFormat:P,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(G),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:Bn,type:Mi,depthTexture:new eo(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(ce){for(let re=0;re<ce.removed.length;re++){let oe=ce.removed[re],P=y.indexOf(oe);P>=0&&(y[P]=null,M[P].disconnect(oe))}for(let re=0;re<ce.added.length;re++){let oe=ce.added[re],P=y.indexOf(oe);if(P===-1){for(let $=0;$<M.length;$++)if($>=y.length){y.push(oe),P=$;break}else if(y[$]===null){y[$]=oe,P=$;break}if(P===-1)break}let G=M[P];G&&G.connect(oe)}}let z=new H,Z=new H;function V(ce,re,oe){z.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);let P=z.distanceTo(Z),G=re.projectionMatrix.elements,$=oe.projectionMatrix.elements,te=G[14]/(G[10]-1),le=G[14]/(G[10]+1),Te=(G[9]+1)/G[5],Fe=(G[9]-1)/G[5],q=(G[8]-1)/G[0],Ye=($[8]+1)/$[0],ke=te*q,Le=te*Ye,Ce=P/(-q+Ye),qe=Ce*-q;if(re.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(qe),ce.translateZ(Ce),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),G[10]===-1)ce.projectionMatrix.copy(re.projectionMatrix),ce.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Pe=te+Ce,U=le+Ce,R=ke-qe,ne=Le+(P-qe),xe=Te*le/U*Pe,Me=Fe*le/U*Pe;ce.projectionMatrix.makePerspective(R,ne,xe,Me,Pe,U),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function se(ce,re){re===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(re.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let re=ce.near,oe=ce.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),b.near=T.near=v.near=re,b.far=T.far=v.far=oe,(A!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,N=b.far),v.layers.mask=ce.layers.mask|2,T.layers.mask=ce.layers.mask|4,b.layers.mask=v.layers.mask|T.layers.mask;let P=ce.parent,G=b.cameras;se(b,P);for(let $=0;$<G.length;$++)se(G[$],P);G.length===2?V(b,v,T):b.projectionMatrix.copy(v.projectionMatrix),ye(ce,b,P)};function ye(ce,re,oe){oe===null?ce.matrix.copy(re.matrixWorld):(ce.matrix.copy(oe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(re.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(re.projectionMatrix),ce.projectionMatrixInverse.copy(re.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Kr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ce){l=ce,f!==null&&(f.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Q=null;function ge(ce,re){if(u=re.getViewerPose(c||o),g=re,u!==null){let oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let P=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,P=!0);for(let $=0;$<oe.length;$++){let te=oe[$],le=null;if(p!==null)le=p.getViewport(te);else{let Fe=h.getViewSubImage(f,te);le=Fe.viewport,$===0&&(e.setRenderTargetTextures(S,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(S))}let Te=_[$];Te===void 0&&(Te=new Zt,Te.layers.enable($),Te.viewport=new St,_[$]=Te),Te.matrix.fromArray(te.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(te.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(le.x,le.y,le.width,le.height),$===0&&(b.matrix.copy(Te.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),P===!0&&b.cameras.push(Te)}let G=s.enabledFeatures;if(G&&G.includes("depth-sensing")){let $=h.getDepthInformation(oe[0]);$&&$.isValid&&$.texture&&x.init(e,$,s.renderState)}}for(let oe=0;oe<M.length;oe++){let P=y[oe],G=M[oe];P!==null&&G!==void 0&&G.update(P,re,c||o)}Q&&Q(ce,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let be=new fm;be.setAnimationLoop(ge),this.setAnimationLoop=function(ce){Q=ce},this.dispose=function(){}}},tr=new bi,KM=new je;function jM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,hm(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),M=S.envMap,y=S.envMapRotation;M&&(m.envMap.value=M,tr.copy(y),tr.x*=-1,tr.y*=-1,tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(tr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let y=M.program;i.uniformBlockBinding(S,y)}function c(S,M){let y=s[S.id];y===void 0&&(g(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",m));let w=M.program;i.updateUBOMapping(S,w);let E=e.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){let M=h();S.__bindingPointIndex=M;let y=n.createBuffer(),w=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let M=s[S.id],y=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,v=y.length;E<v;E++){let T=Array.isArray(y[E])?y[E]:[y[E]];for(let _=0,b=T.length;_<b;_++){let A=T[_];if(p(A,E,_,w)===!0){let N=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],L=0;for(let k=0;k<B.length;k++){let z=B[k],Z=x(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,N+L,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,M,y,w){let E=S.value,v=M+"_"+y;if(w[v]===void 0)return typeof E=="number"||typeof E=="boolean"?w[v]=E:w[v]=E.clone(),!0;{let T=w[v];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return w[v]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(S){let M=S.uniforms,y=0,w=16;for(let v=0,T=M.length;v<T;v++){let _=Array.isArray(M[v])?M[v]:[M[v]];for(let b=0,A=_.length;b<A;b++){let N=_[b],B=Array.isArray(N.value)?N.value:[N.value];for(let L=0,k=B.length;L<k;L++){let z=B[L],Z=x(z),V=y%w,se=V%Z.boundary,ye=V+se;y+=se,ye!==0&&w-ye<Z.storage&&(y+=w-ye),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=Z.storage}}}let E=y%w;return E>0&&(y+=w-E),S.__size=y,S.__cache={},this}function x(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var bl=class{constructor(e={}){let{canvas:t=iv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=ys,this.toneMappingExposure=1;let y=this,w=!1,E=0,v=0,T=null,_=-1,b=null,A=new St,N=new St,B=null,L=new Ae(0),k=0,z=t.width,Z=t.height,V=1,se=null,ye=null,Q=new St(0,0,z,Z),ge=new St(0,0,z,Z),be=!1,ce=new jo,re=!1,oe=!1,P=new je,G=new je,$=new H,te=new St,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Fe(){return T===null?V:1}let q=i;function Ye(I,ee){return t.getContext(I,ee)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",ue,!1),q===null){let ee="webgl2";if(q=Ye(ee,I),q===null)throw Ye(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ke,Le,Ce,qe,Pe,U,R,ne,xe,Me,de,He,Re,Ne,Ve,_e,De,$e,Qe,D,K,X,F,C;function Y(){ke=new p1(q),ke.init(),X=new qM(q,ke),Le=new l1(q,ke,e,X),Ce=new GM(q,ke),Le.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),qe=new x1(q),Pe=new PM,U=new XM(q,ke,Ce,Pe,Le,X,qe),R=new u1(y),ne=new d1(y),xe=new Ev(q),F=new o1(q,xe),Me=new m1(q,xe,qe,F),de=new y1(q,Me,xe,qe),Qe=new v1(q,Le,U),_e=new c1(Pe),He=new CM(y,R,ne,ke,Le,F,_e),Re=new jM(y,Pe),Ne=new LM,Ve=new BM(ke),$e=new r1(y,R,ne,Ce,de,p,l),De=new HM(y,de,Le),C=new JM(q,qe,Le,Ce),D=new a1(q,ke,qe),K=new g1(q,ke,qe),qe.programs=He.programs,y.capabilities=Le,y.extensions=ke,y.properties=Pe,y.renderLists=Ne,y.shadowMap=De,y.state=Ce,y.info=qe}Y();let O=new mh(y,q);this.xr=O,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let I=ke.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ke.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(I){I!==void 0&&(V=I,this.setSize(z,Z,!1))},this.getSize=function(I){return I.set(z,Z)},this.setSize=function(I,ee,pe=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,Z=ee,t.width=Math.floor(I*V),t.height=Math.floor(ee*V),pe===!0&&(t.style.width=I+"px",t.style.height=ee+"px"),this.setViewport(0,0,I,ee)},this.getDrawingBufferSize=function(I){return I.set(z*V,Z*V).floor()},this.setDrawingBufferSize=function(I,ee,pe){z=I,Z=ee,V=pe,t.width=Math.floor(I*pe),t.height=Math.floor(ee*pe),this.setViewport(0,0,I,ee)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(Q)},this.setViewport=function(I,ee,pe,me){I.isVector4?Q.set(I.x,I.y,I.z,I.w):Q.set(I,ee,pe,me),Ce.viewport(A.copy(Q).multiplyScalar(V).round())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,ee,pe,me){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,ee,pe,me),Ce.scissor(N.copy(ge).multiplyScalar(V).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(I){Ce.setScissorTest(be=I)},this.setOpaqueSort=function(I){se=I},this.setTransparentSort=function(I){ye=I},this.getClearColor=function(I){return I.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(I=!0,ee=!0,pe=!0){let me=0;if(I){let ae=!1;if(T!==null){let ze=T.texture.format;ae=ze===Gh||ze===Vh||ze===Hh}if(ae){let ze=T.texture.type,Ze=ze===Mi||ze===sr||ze===Zo||ze===Ms||ze===Bh||ze===zh,et=$e.getClearColor(),tt=$e.getClearAlpha(),ot=et.r,ut=et.g,nt=et.b;Ze?(g[0]=ot,g[1]=ut,g[2]=nt,g[3]=tt,q.clearBufferuiv(q.COLOR,0,g)):(x[0]=ot,x[1]=ut,x[2]=nt,x[3]=tt,q.clearBufferiv(q.COLOR,0,x))}else me|=q.COLOR_BUFFER_BIT}ee&&(me|=q.DEPTH_BUFFER_BIT),pe&&(me|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ne.dispose(),Ve.dispose(),Pe.dispose(),R.dispose(),ne.dispose(),de.dispose(),F.dispose(),C.dispose(),He.dispose(),O.dispose(),O.removeEventListener("sessionstart",he),O.removeEventListener("sessionend",ve),we.stop()};function j(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let I=qe.autoReset,ee=De.enabled,pe=De.autoUpdate,me=De.needsUpdate,ae=De.type;Y(),qe.autoReset=I,De.enabled=ee,De.autoUpdate=pe,De.needsUpdate=me,De.type=ae}function ue(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Se(I){let ee=I.target;ee.removeEventListener("dispose",Se),Ue(ee)}function Ue(I){Ie(I),Pe.remove(I)}function Ie(I){let ee=Pe.get(I).programs;ee!==void 0&&(ee.forEach(function(pe){He.releaseProgram(pe)}),I.isShaderMaterial&&He.releaseShaderCache(I))}this.renderBufferDirect=function(I,ee,pe,me,ae,ze){ee===null&&(ee=le);let Ze=ae.isMesh&&ae.matrixWorld.determinant()<0,et=Pt(I,ee,pe,me,ae);Ce.setMaterial(me,Ze);let tt=pe.index,ot=1;if(me.wireframe===!0){if(tt=Me.getWireframeAttribute(pe),tt===void 0)return;ot=2}let ut=pe.drawRange,nt=pe.attributes.position,Et=ut.start*ot,Ft=(ut.start+ut.count)*ot;ze!==null&&(Et=Math.max(Et,ze.start*ot),Ft=Math.min(Ft,(ze.start+ze.count)*ot)),tt!==null?(Et=Math.max(Et,0),Ft=Math.min(Ft,tt.count)):nt!=null&&(Et=Math.max(Et,0),Ft=Math.min(Ft,nt.count));let kt=Ft-Et;if(kt<0||kt===1/0)return;F.setup(ae,me,et,pe,tt);let Un,At=D;if(tt!==null&&(Un=xe.get(tt),At=K,At.setIndex(Un)),ae.isMesh)me.wireframe===!0?(Ce.setLineWidth(me.wireframeLinewidth*Fe()),At.setMode(q.LINES)):At.setMode(q.TRIANGLES);else if(ae.isLine){let it=me.linewidth;it===void 0&&(it=1),Ce.setLineWidth(it*Fe()),ae.isLineSegments?At.setMode(q.LINES):ae.isLineLoop?At.setMode(q.LINE_LOOP):At.setMode(q.LINE_STRIP)}else ae.isPoints?At.setMode(q.POINTS):ae.isSprite&&At.setMode(q.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)At.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))At.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let it=ae._multiDrawStarts,ki=ae._multiDrawCounts,Rt=ae._multiDrawCount,di=tt?xe.get(tt).bytesPerElement:1,yr=Pe.get(me).currentProgram.getUniforms();for(let Vn=0;Vn<Rt;Vn++)yr.setValue(q,"_gl_DrawID",Vn),At.render(it[Vn]/di,ki[Vn])}else if(ae.isInstancedMesh)At.renderInstances(Et,kt,ae.count);else if(pe.isInstancedBufferGeometry){let it=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,ki=Math.min(pe.instanceCount,it);At.renderInstances(Et,kt,ki)}else At.render(Et,kt)};function Ee(I,ee,pe){I.transparent===!0&&I.side===Nt&&I.forceSinglePass===!1?(I.side=Qt,I.needsUpdate=!0,lt(I,ee,pe),I.side=Ci,I.needsUpdate=!0,lt(I,ee,pe),I.side=Nt):lt(I,ee,pe)}this.compile=function(I,ee,pe=null){pe===null&&(pe=I),d=Ve.get(pe),d.init(ee),M.push(d),pe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(d.pushLight(ae),ae.castShadow&&d.pushShadow(ae))}),I!==pe&&I.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(d.pushLight(ae),ae.castShadow&&d.pushShadow(ae))}),d.setupLights();let me=new Set;return I.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let ze=ae.material;if(ze)if(Array.isArray(ze))for(let Ze=0;Ze<ze.length;Ze++){let et=ze[Ze];Ee(et,pe,ae),me.add(et)}else Ee(ze,pe,ae),me.add(ze)}),M.pop(),d=null,me},this.compileAsync=function(I,ee,pe=null){let me=this.compile(I,ee,pe);return new Promise(ae=>{function ze(){if(me.forEach(function(Ze){Pe.get(Ze).currentProgram.isReady()&&me.delete(Ze)}),me.size===0){ae(I);return}setTimeout(ze,10)}ke.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let ie=null;function J(I){ie&&ie(I)}function he(){we.stop()}function ve(){we.start()}let we=new fm;we.setAnimationLoop(J),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(I){ie=I,O.setAnimationLoop(I),I===null?we.stop():we.start()},O.addEventListener("sessionstart",he),O.addEventListener("sessionend",ve),this.render=function(I,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(ee),ee=O.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,ee,T),d=Ve.get(I,M.length),d.init(ee),M.push(d),G.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ce.setFromProjectionMatrix(G),oe=this.localClippingEnabled,re=_e.init(this.clippingPlanes,oe),m=Ne.get(I,S.length),m.init(),S.push(m),O.enabled===!0&&O.isPresenting===!0){let ze=y.xr.getDepthSensingMesh();ze!==null&&fe(ze,ee,-1/0,y.sortObjects)}fe(I,ee,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(se,ye),Te=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Te&&$e.addToRenderList(m,I),this.info.render.frame++,re===!0&&_e.beginShadows();let pe=d.state.shadowsArray;De.render(pe,I,ee),re===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let me=m.opaque,ae=m.transmissive;if(d.setupLights(),ee.isArrayCamera){let ze=ee.cameras;if(ae.length>0)for(let Ze=0,et=ze.length;Ze<et;Ze++){let tt=ze[Ze];Be(me,ae,I,tt)}Te&&$e.render(I);for(let Ze=0,et=ze.length;Ze<et;Ze++){let tt=ze[Ze];Oe(m,I,tt,tt.viewport)}}else ae.length>0&&Be(me,ae,I,ee),Te&&$e.render(I),Oe(m,I,ee);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,ee),F.resetDefaultState(),_=-1,b=null,M.pop(),M.length>0?(d=M[M.length-1],re===!0&&_e.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function fe(I,ee,pe,me){if(I.visible===!1)return;if(I.layers.test(ee.layers)){if(I.isGroup)pe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ee);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ce.intersectsSprite(I)){me&&te.setFromMatrixPosition(I.matrixWorld).applyMatrix4(G);let Ze=de.update(I),et=I.material;et.visible&&m.push(I,Ze,et,pe,te.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ce.intersectsObject(I))){let Ze=de.update(I),et=I.material;if(me&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),te.copy(I.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),te.copy(Ze.boundingSphere.center)),te.applyMatrix4(I.matrixWorld).applyMatrix4(G)),Array.isArray(et)){let tt=Ze.groups;for(let ot=0,ut=tt.length;ot<ut;ot++){let nt=tt[ot],Et=et[nt.materialIndex];Et&&Et.visible&&m.push(I,Ze,Et,pe,te.z,nt)}}else et.visible&&m.push(I,Ze,et,pe,te.z,null)}}let ze=I.children;for(let Ze=0,et=ze.length;Ze<et;Ze++)fe(ze[Ze],ee,pe,me)}function Oe(I,ee,pe,me){let ae=I.opaque,ze=I.transmissive,Ze=I.transparent;d.setupLightsView(pe),re===!0&&_e.setGlobalState(y.clippingPlanes,pe),me&&Ce.viewport(A.copy(me)),ae.length>0&&Ge(ae,ee,pe),ze.length>0&&Ge(ze,ee,pe),Ze.length>0&&Ge(Ze,ee,pe),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Be(I,ee,pe,me){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[me.id]===void 0&&(d.state.transmissionRenderTarget[me.id]=new qt(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?un:Mi,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let ze=d.state.transmissionRenderTarget[me.id],Ze=me.viewport||A;ze.setSize(Ze.z,Ze.w);let et=y.getRenderTarget();y.setRenderTarget(ze),y.getClearColor(L),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Te&&$e.render(pe);let tt=y.toneMapping;y.toneMapping=ys;let ot=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),d.setupLightsView(me),re===!0&&_e.setGlobalState(y.clippingPlanes,me),Ge(I,pe,me),U.updateMultisampleRenderTarget(ze),U.updateRenderTargetMipmap(ze),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let nt=0,Et=ee.length;nt<Et;nt++){let Ft=ee[nt],kt=Ft.object,Un=Ft.geometry,At=Ft.material,it=Ft.group;if(At.side===Nt&&kt.layers.test(me.layers)){let ki=At.side;At.side=Qt,At.needsUpdate=!0,Je(kt,pe,me,Un,At,it),At.side=ki,At.needsUpdate=!0,ut=!0}}ut===!0&&(U.updateMultisampleRenderTarget(ze),U.updateRenderTargetMipmap(ze))}y.setRenderTarget(et),y.setClearColor(L,k),ot!==void 0&&(me.viewport=ot),y.toneMapping=tt}function Ge(I,ee,pe){let me=ee.isScene===!0?ee.overrideMaterial:null;for(let ae=0,ze=I.length;ae<ze;ae++){let Ze=I[ae],et=Ze.object,tt=Ze.geometry,ot=me===null?Ze.material:me,ut=Ze.group;et.layers.test(pe.layers)&&Je(et,ee,pe,tt,ot,ut)}}function Je(I,ee,pe,me,ae,ze){I.onBeforeRender(y,ee,pe,me,ae,ze),I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ae.onBeforeRender(y,ee,pe,me,I,ze),ae.transparent===!0&&ae.side===Nt&&ae.forceSinglePass===!1?(ae.side=Qt,ae.needsUpdate=!0,y.renderBufferDirect(pe,ee,me,ae,I,ze),ae.side=Ci,ae.needsUpdate=!0,y.renderBufferDirect(pe,ee,me,ae,I,ze),ae.side=Nt):y.renderBufferDirect(pe,ee,me,ae,I,ze),I.onAfterRender(y,ee,pe,me,ae,ze)}function lt(I,ee,pe){ee.isScene!==!0&&(ee=le);let me=Pe.get(I),ae=d.state.lights,ze=d.state.shadowsArray,Ze=ae.state.version,et=He.getParameters(I,ae.state,ze,ee,pe),tt=He.getProgramCacheKey(et),ot=me.programs;me.environment=I.isMeshStandardMaterial?ee.environment:null,me.fog=ee.fog,me.envMap=(I.isMeshStandardMaterial?ne:R).get(I.envMap||me.environment),me.envMapRotation=me.environment!==null&&I.envMap===null?ee.environmentRotation:I.envMapRotation,ot===void 0&&(I.addEventListener("dispose",Se),ot=new Map,me.programs=ot);let ut=ot.get(tt);if(ut!==void 0){if(me.currentProgram===ut&&me.lightsStateVersion===Ze)return _t(I,et),ut}else et.uniforms=He.getUniforms(I),I.onBeforeCompile(et,y),ut=He.acquireProgram(et,tt),ot.set(tt,ut),me.uniforms=et.uniforms;let nt=me.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(nt.clippingPlanes=_e.uniform),_t(I,et),me.needsLights=gn(I),me.lightsStateVersion=Ze,me.needsLights&&(nt.ambientLightColor.value=ae.state.ambient,nt.lightProbe.value=ae.state.probe,nt.directionalLights.value=ae.state.directional,nt.directionalLightShadows.value=ae.state.directionalShadow,nt.spotLights.value=ae.state.spot,nt.spotLightShadows.value=ae.state.spotShadow,nt.rectAreaLights.value=ae.state.rectArea,nt.ltc_1.value=ae.state.rectAreaLTC1,nt.ltc_2.value=ae.state.rectAreaLTC2,nt.pointLights.value=ae.state.point,nt.pointLightShadows.value=ae.state.pointShadow,nt.hemisphereLights.value=ae.state.hemi,nt.directionalShadowMap.value=ae.state.directionalShadowMap,nt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,nt.spotShadowMap.value=ae.state.spotShadowMap,nt.spotLightMatrix.value=ae.state.spotLightMatrix,nt.spotLightMap.value=ae.state.spotLightMap,nt.pointShadowMap.value=ae.state.pointShadowMap,nt.pointShadowMatrix.value=ae.state.pointShadowMatrix),me.currentProgram=ut,me.uniformsList=null,ut}function pt(I){if(I.uniformsList===null){let ee=I.currentProgram.getUniforms();I.uniformsList=Wr.seqWithValue(ee.seq,I.uniforms)}return I.uniformsList}function _t(I,ee){let pe=Pe.get(I);pe.outputColorSpace=ee.outputColorSpace,pe.batching=ee.batching,pe.batchingColor=ee.batchingColor,pe.instancing=ee.instancing,pe.instancingColor=ee.instancingColor,pe.instancingMorph=ee.instancingMorph,pe.skinning=ee.skinning,pe.morphTargets=ee.morphTargets,pe.morphNormals=ee.morphNormals,pe.morphColors=ee.morphColors,pe.morphTargetsCount=ee.morphTargetsCount,pe.numClippingPlanes=ee.numClippingPlanes,pe.numIntersection=ee.numClipIntersection,pe.vertexAlphas=ee.vertexAlphas,pe.vertexTangents=ee.vertexTangents,pe.toneMapping=ee.toneMapping}function Pt(I,ee,pe,me,ae){ee.isScene!==!0&&(ee=le),U.resetTextureUnits();let ze=ee.fog,Ze=me.isMeshStandardMaterial?ee.environment:null,et=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:En,tt=(me.isMeshStandardMaterial?ne:R).get(me.envMap||Ze),ot=me.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ut=!!pe.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),nt=!!pe.morphAttributes.position,Et=!!pe.morphAttributes.normal,Ft=!!pe.morphAttributes.color,kt=ys;me.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(kt=y.toneMapping);let Un=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,At=Un!==void 0?Un.length:0,it=Pe.get(me),ki=d.state.lights;if(re===!0&&(oe===!0||I!==b)){let Qn=I===b&&me.id===_;_e.setState(me,I,Qn)}let Rt=!1;me.version===it.__version?(it.needsLights&&it.lightsStateVersion!==ki.state.version||it.outputColorSpace!==et||ae.isBatchedMesh&&it.batching===!1||!ae.isBatchedMesh&&it.batching===!0||ae.isBatchedMesh&&it.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&it.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&it.instancing===!1||!ae.isInstancedMesh&&it.instancing===!0||ae.isSkinnedMesh&&it.skinning===!1||!ae.isSkinnedMesh&&it.skinning===!0||ae.isInstancedMesh&&it.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&it.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&it.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&it.instancingMorph===!1&&ae.morphTexture!==null||it.envMap!==tt||me.fog===!0&&it.fog!==ze||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==_e.numPlanes||it.numIntersection!==_e.numIntersection)||it.vertexAlphas!==ot||it.vertexTangents!==ut||it.morphTargets!==nt||it.morphNormals!==Et||it.morphColors!==Ft||it.toneMapping!==kt||it.morphTargetsCount!==At)&&(Rt=!0):(Rt=!0,it.__version=me.version);let di=it.currentProgram;Rt===!0&&(di=lt(me,ee,ae));let yr=!1,Vn=!1,Ro=!1,Ht=di.getUniforms(),Ai=it.uniforms;if(Ce.useProgram(di.program)&&(yr=!0,Vn=!0,Ro=!0),me.id!==_&&(_=me.id,Vn=!0),yr||b!==I){Ce.buffers.depth.getReversed()?(P.copy(I.projectionMatrix),rv(P),ov(P),Ht.setValue(q,"projectionMatrix",P)):Ht.setValue(q,"projectionMatrix",I.projectionMatrix),Ht.setValue(q,"viewMatrix",I.matrixWorldInverse);let ls=Ht.map.cameraPosition;ls!==void 0&&ls.setValue(q,$.setFromMatrixPosition(I.matrixWorld)),Le.logarithmicDepthBuffer&&Ht.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&Ht.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,Vn=!0,Ro=!0)}if(ae.isSkinnedMesh){Ht.setOptional(q,ae,"bindMatrix"),Ht.setOptional(q,ae,"bindMatrixInverse");let Qn=ae.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),Ht.setValue(q,"boneTexture",Qn.boneTexture,U))}ae.isBatchedMesh&&(Ht.setOptional(q,ae,"batchingTexture"),Ht.setValue(q,"batchingTexture",ae._matricesTexture,U),Ht.setOptional(q,ae,"batchingIdTexture"),Ht.setValue(q,"batchingIdTexture",ae._indirectTexture,U),Ht.setOptional(q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ht.setValue(q,"batchingColorTexture",ae._colorsTexture,U));let Co=pe.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0)&&Qe.update(ae,pe,di),(Vn||it.receiveShadow!==ae.receiveShadow)&&(it.receiveShadow=ae.receiveShadow,Ht.setValue(q,"receiveShadow",ae.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(Ai.envMap.value=tt,Ai.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),me.isMeshStandardMaterial&&me.envMap===null&&ee.environment!==null&&(Ai.envMapIntensity.value=ee.environmentIntensity),Vn&&(Ht.setValue(q,"toneMappingExposure",y.toneMappingExposure),it.needsLights&&wt(Ai,Ro),ze&&me.fog===!0&&Re.refreshFogUniforms(Ai,ze),Re.refreshMaterialUniforms(Ai,me,V,Z,d.state.transmissionRenderTarget[I.id]),Wr.upload(q,pt(it),Ai,U)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(Wr.upload(q,pt(it),Ai,U),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&Ht.setValue(q,"center",ae.center),Ht.setValue(q,"modelViewMatrix",ae.modelViewMatrix),Ht.setValue(q,"normalMatrix",ae.normalMatrix),Ht.setValue(q,"modelMatrix",ae.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){let Qn=me.uniformsGroups;for(let ls=0,cs=Qn.length;ls<cs;ls++){let Rd=Qn[ls];C.update(Rd,di),C.bind(Rd,di)}}return di}function wt(I,ee){I.ambientLightColor.needsUpdate=ee,I.lightProbe.needsUpdate=ee,I.directionalLights.needsUpdate=ee,I.directionalLightShadows.needsUpdate=ee,I.pointLights.needsUpdate=ee,I.pointLightShadows.needsUpdate=ee,I.spotLights.needsUpdate=ee,I.spotLightShadows.needsUpdate=ee,I.rectAreaLights.needsUpdate=ee,I.hemisphereLights.needsUpdate=ee}function gn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,ee,pe){Pe.get(I.texture).__webglTexture=ee,Pe.get(I.depthTexture).__webglTexture=pe;let me=Pe.get(I);me.__hasExternalTextures=!0,me.__autoAllocateDepthBuffer=pe===void 0,me.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),me.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,ee){let pe=Pe.get(I);pe.__webglFramebuffer=ee,pe.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(I,ee=0,pe=0){T=I,E=ee,v=pe;let me=!0,ae=null,ze=!1,Ze=!1;if(I){let tt=Pe.get(I);if(tt.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(q.FRAMEBUFFER,null),me=!1;else if(tt.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(tt.__hasExternalTextures)U.rebindTextures(I,Pe.get(I.texture).__webglTexture,Pe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let nt=I.depthTexture;if(tt.__boundDepthTexture!==nt){if(nt!==null&&Pe.has(nt)&&(I.width!==nt.image.width||I.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}let ot=I.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ze=!0);let ut=Pe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ut[ee])?ae=ut[ee][pe]:ae=ut[ee],ze=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?ae=Pe.get(I).__webglMultisampledFramebuffer:Array.isArray(ut)?ae=ut[pe]:ae=ut,A.copy(I.viewport),N.copy(I.scissor),B=I.scissorTest}else A.copy(Q).multiplyScalar(V).floor(),N.copy(ge).multiplyScalar(V).floor(),B=be;if(Ce.bindFramebuffer(q.FRAMEBUFFER,ae)&&me&&Ce.drawBuffers(I,ae),Ce.viewport(A),Ce.scissor(N),Ce.setScissorTest(B),ze){let tt=Pe.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+ee,tt.__webglTexture,pe)}else if(Ze){let tt=Pe.get(I.texture),ot=ee||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.__webglTexture,pe||0,ot)}_=-1},this.readRenderTargetPixels=function(I,ee,pe,me,ae,ze,Ze){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=Pe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ze!==void 0&&(et=et[Ze]),et){Ce.bindFramebuffer(q.FRAMEBUFFER,et);try{let tt=I.texture,ot=tt.format,ut=tt.type;if(!Le.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=I.width-me&&pe>=0&&pe<=I.height-ae&&q.readPixels(ee,pe,me,ae,X.convert(ot),X.convert(ut),ze)}finally{let tt=T!==null?Pe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(I,ee,pe,me,ae,ze,Ze){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=Pe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ze!==void 0&&(et=et[Ze]),et){let tt=I.texture,ot=tt.format,ut=tt.type;if(!Le.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=I.width-me&&pe>=0&&pe<=I.height-ae){Ce.bindFramebuffer(q.FRAMEBUFFER,et);let nt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,nt),q.bufferData(q.PIXEL_PACK_BUFFER,ze.byteLength,q.STREAM_READ),q.readPixels(ee,pe,me,ae,X.convert(ot),X.convert(ut),0);let Et=T!==null?Pe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,Et);let Ft=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await sv(q,Ft,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,nt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ze),q.deleteBuffer(nt),q.deleteSync(Ft),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,ee=null,pe=0){I.isTexture!==!0&&(Ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,I=arguments[1]);let me=Math.pow(2,-pe),ae=Math.floor(I.image.width*me),ze=Math.floor(I.image.height*me),Ze=ee!==null?ee.x:0,et=ee!==null?ee.y:0;U.setTexture2D(I,0),q.copyTexSubImage2D(q.TEXTURE_2D,pe,0,0,Ze,et,ae,ze),Ce.unbindTexture()},this.copyTextureToTexture=function(I,ee,pe=null,me=null,ae=0){I.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture function signature has changed."),me=arguments[0]||null,I=arguments[1],ee=arguments[2],ae=arguments[3]||0,pe=null);let ze,Ze,et,tt,ot,ut,nt,Et,Ft,kt=I.isCompressedTexture?I.mipmaps[ae]:I.image;pe!==null?(ze=pe.max.x-pe.min.x,Ze=pe.max.y-pe.min.y,et=pe.isBox3?pe.max.z-pe.min.z:1,tt=pe.min.x,ot=pe.min.y,ut=pe.isBox3?pe.min.z:0):(ze=kt.width,Ze=kt.height,et=kt.depth||1,tt=0,ot=0,ut=0),me!==null?(nt=me.x,Et=me.y,Ft=me.z):(nt=0,Et=0,Ft=0);let Un=X.convert(ee.format),At=X.convert(ee.type),it;ee.isData3DTexture?(U.setTexture3D(ee,0),it=q.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(U.setTexture2DArray(ee,0),it=q.TEXTURE_2D_ARRAY):(U.setTexture2D(ee,0),it=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment);let ki=q.getParameter(q.UNPACK_ROW_LENGTH),Rt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),di=q.getParameter(q.UNPACK_SKIP_PIXELS),yr=q.getParameter(q.UNPACK_SKIP_ROWS),Vn=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,kt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,kt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,tt),q.pixelStorei(q.UNPACK_SKIP_ROWS,ot),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ut);let Ro=I.isDataArrayTexture||I.isData3DTexture,Ht=ee.isDataArrayTexture||ee.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let Ai=Pe.get(I),Co=Pe.get(ee),Qn=Pe.get(Ai.__renderTarget),ls=Pe.get(Co.__renderTarget);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,Qn.__webglFramebuffer),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let cs=0;cs<et;cs++)Ro&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Pe.get(I).__webglTexture,ae,ut+cs),I.isDepthTexture?(Ht&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Pe.get(ee).__webglTexture,ae,Ft+cs),q.blitFramebuffer(tt,ot,ze,Ze,nt,Et,ze,Ze,q.DEPTH_BUFFER_BIT,q.NEAREST)):Ht?q.copyTexSubImage3D(it,ae,nt,Et,Ft+cs,tt,ot,ze,Ze):q.copyTexSubImage2D(it,ae,nt,Et,Ft+cs,tt,ot,ze,Ze);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ht?I.isDataTexture||I.isData3DTexture?q.texSubImage3D(it,ae,nt,Et,Ft,ze,Ze,et,Un,At,kt.data):ee.isCompressedArrayTexture?q.compressedTexSubImage3D(it,ae,nt,Et,Ft,ze,Ze,et,Un,kt.data):q.texSubImage3D(it,ae,nt,Et,Ft,ze,Ze,et,Un,At,kt):I.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ae,nt,Et,ze,Ze,Un,At,kt.data):I.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ae,nt,Et,kt.width,kt.height,Un,kt.data):q.texSubImage2D(q.TEXTURE_2D,ae,nt,Et,ze,Ze,Un,At,kt);q.pixelStorei(q.UNPACK_ROW_LENGTH,ki),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Rt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,di),q.pixelStorei(q.UNPACK_SKIP_ROWS,yr),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Vn),ae===0&&ee.generateMipmaps&&q.generateMipmap(it),Ce.unbindTexture()},this.copyTextureToTexture3D=function(I,ee,pe=null,me=null,ae=0){return I.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),pe=arguments[0]||null,me=arguments[1]||null,I=arguments[2],ee=arguments[3],ae=arguments[4]||0),Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,ee,pe,me,ae)},this.initRenderTarget=function(I){Pe.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),Ce.unbindTexture()},this.resetState=function(){E=0,v=0,T=null,Ce.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}},to=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jo=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},no=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qu,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new H,rr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},io=class extends Mn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,No=new H,Ur=new H,Fr=new H,Or=new Ke,Uo=new Ke,xm=new je,Qa=new H,Fo=new H,el=new H,Cp=new Ke,hu=new Ke,Pp=new Ke,Qo=class extends Bt{constructor(e=new io){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new no(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new rr(i,3,0,!1)),Nr.setAttribute("uv",new rr(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;tl(Qa.set(-.5,-.5,0),Fr,o,Ur,s,r),tl(Fo.set(.5,-.5,0),Fr,o,Ur,s,r),tl(el.set(.5,.5,0),Fr,o,Ur,s,r),Cp.set(0,0),hu.set(1,0),Pp.set(1,1);let a=e.ray.intersectTriangle(Qa,Fo,el,!1,No);if(a===null&&(tl(Fo.set(-.5,.5,0),Fr,o,Ur,s,r),hu.set(0,1),a=e.ray.intersectTriangle(Qa,el,Fo,!1,No),a===null))return;let l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||t.push({distance:l,point:No.clone(),uv:xs.getInterpolation(No,Qa,Fo,el,Cp,hu,Pp,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function tl(n,e,t,i,s,r){Or.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Uo.x=r*Or.x-s*Or.y,Uo.y=s*Or.x+r*Or.y):Uo.copy(Or),n.copy(e),n.x+=Uo.x,n.y+=Uo.y,n.applyMatrix4(xm)}var Ip=new H,Lp=new St,Dp=new St,QM=new H,Np=new je,nl=new H,fu=new Xn,Up=new je,du=new jr,Sl=class extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ld,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,nl),this.boundingBox.expandByPoint(nl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,nl),this.boundingSphere.expandByPoint(nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fu.copy(this.boundingSphere),fu.applyMatrix4(s),e.ray.intersectsSphere(fu)!==!1&&(Up.copy(s).invert(),du.copy(e.ray).applyMatrix4(Up),!(this.boundingBox!==null&&du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Lp.fromBufferAttribute(s.attributes.skinIndex,e),Dp.fromBufferAttribute(s.attributes.skinWeight,e),Ip.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Dp.getComponent(r);if(o!==0){let a=Lp.getComponent(r);Np.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(QM.copy(Ip).applyMatrix4(Np),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ea=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ts=class extends ln{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Kt,u=Kt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fp=new je,eb=new je,El=class n{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:eb;Fp.multiplyMatrices(a,t[r]),Fp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ts(t,e,e,Bn,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ea),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},or=class extends gt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new je,Op=new je,il=[],Bp=new ni,tb=new je,Oo=new rt,Bo=new Xn,Sn=class extends rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),Bp.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Bp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),Bo.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),Op.multiplyMatrices(i,Br),Oo.matrixWorld=Op,Oo.raycast(e,il);for(let o=0,a=il.length;o<a;o++){let l=il[o];l.instanceId=r,l.object=this,t.push(l)}il.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ts(new Float32Array(s*this.count),s,this.count,kh,yi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ws=class extends Mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tl=new H,wl=new H,zp=new je,zo=new jr,sl=new Xn,pu=new H,kp=new H,so=class extends Bt{constructor(e=new xt,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Tl.fromBufferAttribute(t,s-1),wl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Tl.distanceTo(wl);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(s),sl.radius+=r,e.ray.intersectsSphere(sl)===!1)return;zp.copy(s).invert(),zo.copy(e.ray).applyMatrix4(zp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=u.getX(x),S=u.getX(x+1),M=rl(this,e,zo,l,d,S);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),d=rl(this,e,zo,l,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=rl(this,e,zo,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=rl(this,e,zo,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rl(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Tl.fromBufferAttribute(o,s),wl.fromBufferAttribute(o,r),t.distanceSqToSegment(Tl,wl,pu,kp)>i)return;pu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(pu);if(!(l<e.near||l>e.far))return{distance:l,point:kp.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Hp=new H,Vp=new H,ar=class extends so{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Hp.fromBufferAttribute(t,s),Vp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hp.distanceTo(Vp);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Al=class extends so{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},lr=class extends Mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gp=new je,gh=new jr,ol=new Xn,al=new H,As=class extends Bt{constructor(e=new xt,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),ol.radius+=r,e.ray.intersectsSphere(ol)===!1)return;Gp.copy(s).invert(),gh.copy(e.ray).applyMatrix4(Gp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);al.fromBufferAttribute(h,m),Wp(al,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)al.fromBufferAttribute(h,g),Wp(al,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wp(n,e,t,i,s,r,o){let a=gh.distanceSqToPoint(n);if(a<t){let l=new H;gh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ii=class extends ln{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cn=class n extends xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=i/2,d=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(p,2));function S(){let y=new H,w=new H,E=0,v=(t-e)/i;for(let T=0;T<=r;T++){let _=[],b=T/r,A=b*(t-e)+e;for(let N=0;N<=s;N++){let B=N/s,L=B*l+a,k=Math.sin(L),z=Math.cos(L);w.x=A*k,w.y=-b*i+m,w.z=A*z,h.push(w.x,w.y,w.z),y.set(k,v,z).normalize(),f.push(y.x,y.y,y.z),p.push(B,1-b),_.push(g++)}x.push(_)}for(let T=0;T<s;T++)for(let _=0;_<r;_++){let b=x[_][T],A=x[_+1][T],N=x[_+1][T+1],B=x[_][T+1];(e>0||_!==0)&&(u.push(b,A,B),E+=3),(t>0||_!==r-1)&&(u.push(A,N,B),E+=3)}c.addGroup(d,E,0),d+=E}function M(y){let w=g,E=new Ke,v=new H,T=0,_=y===!0?e:t,b=y===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let A=g;for(let N=0;N<=s;N++){let L=N/s*l+a,k=Math.cos(L),z=Math.sin(L);v.x=_*z,v.y=m*b,v.z=_*k,h.push(v.x,v.y,v.z),f.push(0,b,0),E.x=k*.5+.5,E.y=z*.5*b+.5,p.push(E.x,E.y),g++}for(let N=0;N<s;N++){let B=w+N,L=A+N;y===!0?u.push(L,L+1,B):u.push(L+1,L,B),T+=3}c.addGroup(d,T,y===!0?1:2),d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pi=class n extends cn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xh=class n extends xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new H,y=new H,w=new H;for(let E=0;E<t.length;E+=3)p(t[E+0],M),p(t[E+1],y),p(t[E+2],w),l(M,y,w,S)}function l(S,M,y,w){let E=w+1,v=[];for(let T=0;T<=E;T++){v[T]=[];let _=S.clone().lerp(y,T/E),b=M.clone().lerp(y,T/E),A=E-T;for(let N=0;N<=A;N++)N===0&&T===E?v[T][N]=_:v[T][N]=_.clone().lerp(b,N/A)}for(let T=0;T<E;T++)for(let _=0;_<2*(E-T)-1;_++){let b=Math.floor(_/2);_%2===0?(f(v[T][b+1]),f(v[T+1][b]),f(v[T][b])):(f(v[T][b+1]),f(v[T+1][b+1]),f(v[T+1][b]))}}function c(S){let M=new H;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(S),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let S=new H;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let y=m(S)/2/Math.PI+.5,w=d(S)/Math.PI+.5;o.push(y,1-w)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let M=o[S+0],y=o[S+2],w=o[S+4],E=Math.max(M,y,w),v=Math.min(M,y,w);E>.9&&v<.1&&(M<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),w<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,M){let y=S*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let S=new H,M=new H,y=new H,w=new H,E=new Ke,v=new Ke,T=new Ke;for(let _=0,b=0;_<r.length;_+=9,b+=6){S.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),E.set(o[b+0],o[b+1]),v.set(o[b+2],o[b+3]),T.set(o[b+4],o[b+5]),w.copy(S).add(M).add(y).divideScalar(3);let A=m(w);x(E,b+0,S,A),x(v,b+2,M,A),x(T,b+4,y,A)}}function x(S,M,y,w){w<0&&S.x===1&&(o[M]=S.x-1),y.x===0&&y.z===0&&(o[M]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Si=class n extends xh{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Rs=class n extends xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let S=[],M=d/i,y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let E=w/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+y,1-M),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){let M=u[d][S+1],y=u[d][S],w=u[d+1][S],E=u[d+1][S+1];(d!==0||o>0)&&p.push(M,y,E),(d!==i-1||l<Math.PI)&&p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rl=class extends Mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},st=class extends Mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends st{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Cl=class extends Mn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Yn=class extends Mn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ll(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ib(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Xp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function vm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vh=class extends Cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dd,endingEnd:Dd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nd:r=e,a=2*t-i;break;case Ud:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nd:o=e,l=2*i-t;break;case Ud:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let w=0;w!==a;++w)r[w]=d*o[u+w]+S*o[c+w]+M*o[l+w]+y*o[h+w];return r}},yh=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},_h=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ll(t,this.TimeBufferType),this.values=ll(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ll(e.times,Array),values:ll(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case Bc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&nb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Zr;var Ps=class extends si{constructor(e,t,i){super(e,t,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=$r;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends si{};Pl.prototype.ValueTypeName="color";var ji=class extends si{};ji.prototype.ValueTypeName="number";var Mh=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ji=class extends si{InterpolantFactoryMethodLinear(e){return new Mh(this.times,this.values,this.getValueSize(),e)}};Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends si{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=$r;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends si{};Qi.prototype.ValueTypeName="vector";var Il=class{constructor(e="",t=-1,i=[],s=Px){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(rb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=ib(l);l=Xp(l,1,u),c=Xp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ji(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,p,g,x){if(p.length!==0){let m=[],d=[];vm(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let S=0;S!==f[g].morphTargets.length;++S){let M=f[g];m.push(M.time),d.push(M.morphTarget===x?1:0)}s.push(new ji(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{let p=".bones["+t[h].name+"]";i(Qi,p+".position",f,"pos",s),i(Ji,p+".quaternion",f,"rot",s),i(Qi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function sb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Pl;case"quaternion":return Ji;case"bool":case"boolean":return Ps;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function rb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=sb(n.type);if(n.times===void 0){let t=[],i=[];vm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var vs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},bh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},ob=new bh,es=class{constructor(e){this.manager=e!==void 0?e:ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};es.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},Sh=class extends Error{constructor(e,t){super(e),this.response=t}},ta=class extends es{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:i,onError:s});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=qi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){S();function S(){h.read().then(({done:M,value:y})=>{if(M)d.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,v=u.length;E<v;E++){let T=u[E];T.onProgress&&T.onProgress(w)}d.enqueue(y),S()}},M=>{d.error(M)})}}});return new Response(m)}else throw new Sh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{vs.add(e,c);let u=qi[e];delete qi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Eh=class extends es{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ko("img");function l(){u(),vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ll=class extends es{constructor(e){super(e)}load(e,t,i,s){let r=new ln,o=new Eh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ro=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},oo=class extends ro{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mu=new je,qp=new H,Yp=new H,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(qp),Yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yp),t.updateMatrixWorld(),mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Th=class extends na{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ao=class extends ro{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$p=new je,ko=new H,gu=new H,wh=class extends na{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),i.position.copy(ko),gu.copy(i.position),gu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(gu),i.updateMatrixWorld(),s.makeTranslation(-ko.x,-ko.y,-ko.z),$p.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($p)}},Dl=class extends ro{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ah=class extends na{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ls=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nl=class extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),vs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vs.add(e,l),r.manager.itemStart(e)}};var Ul=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Zp(){return performance.now()}var qh="\\[\\]\\.:\\/",ab=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",lb="[^"+qh.replace("\\.","")+"]",cb=/((?:WC+[\/:])*)/.source.replace("WC",Yh),ub=/(WCOD+)?/.source.replace("WCOD",lb),hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),fb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),db=new RegExp("^"+cb+ub+hb+fb+"$"),pb=["material","materials","bones","map"],Rh=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ab,"")}static parseTrackName(e){let t=db.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);pb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Rh;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var oa=class n extends rt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Zt;let i=this,s=t.color!==void 0?new Ae(t.color):new Ae(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new xi,h=new H,f=new H,p=new H,g=new je,x=new H(0,0,-1),m=new St,d=new H,S=new H,M=new St,y=new je,w=this.camera,E=new qt(r,o,{samples:c,type:un}),v=new Mt({name:l.name!==void 0?l.name:"unspecified",uniforms:Tn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});v.uniforms.tDiffuse.value=E.texture,v.uniforms.color.value=s,v.uniforms.textureMatrix.value=y,this.material=v,this.onBeforeRender=function(T,_,b){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(b.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),g.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),S.subVectors(f,x),S.reflect(h).negate(),S.add(f),w.position.copy(d),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(h),w.lookAt(S),w.far=b.far,w.updateMatrixWorld(),w.projectionMatrix.copy(b.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(w.projectionMatrix),y.multiply(w.matrixWorldInverse),y.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(w.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let A=w.projectionMatrix;M.x=(Math.sign(m.x)+A.elements[8])/A.elements[0],M.y=(Math.sign(m.y)+A.elements[9])/A.elements[5],M.z=-1,M.w=(1+A.elements[10])/A.elements[14],m.multiplyScalar(2/m.dot(M)),A.elements[2]=m.x,A.elements[6]=m.y,A.elements[10]=m.z+1-a,A.elements[14]=m.w,i.visible=!1;let N=T.getRenderTarget(),B=T.xr.enabled,L=T.shadowMap.autoUpdate;T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,T.setRenderTarget(E),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(_,w),T.xr.enabled=B,T.shadowMap.autoUpdate=L,T.setRenderTarget(N);let k=b.viewport;k!==void 0&&T.state.viewport(k),i.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()}}};oa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Wl=[25,18,15,12,10,8,6,4],cr={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ds={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function aa(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function $n(n){let e=(typeof n=="number"?n>>>0:aa(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>$n(aa(t+":"+s))}}var Xl=Math.PI*2,mb=2,ym=2800,_m=4200,gb=34,Mm=8,bm=60,xb=.12,vb=.1,Sm=28,yb=150,$h=52,Jh=.0025,Em=1/150,_b=10,Tm=5,wm=250,Am=38,Rm=75,ql=150,Kh=120,Lm=10,Mb=80,bb=40,Sb=20,Eb=30,Tb=95,Zh=18,Cm=22,wb=60,jh=(n,e,t)=>n<e?e:n>t?t:n;function Ab(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(Xl/e),o=s/e*Xl+r,a=jh(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function Rb(n,e,t,i,s,r,o,a,l){let c=(x,m,d,S)=>{let M=(l-d)/(S-d);return[x[0]+(m[0]-x[0])*M,x[1]+(m[1]-x[1])*M]},u=c(n,e,s,r),h=c(e,t,r,o),f=c(t,i,o,a),p=c(u,h,s,o),g=c(h,f,r,a);return c(p,g,r,o)}function Cb(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],l=n[(s+2)%t],c=0,u=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let p=0;p<e;p++){let g=u+(h-u)*(p/e);i.push(Rb(r,o,a,l,c,u,h,f,g))}}return i}function Pb(n){let e=n.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let u=n[c],h=n[(c+1)%e];t[c+1]=t[c]+Math.hypot(h[0]-u[0],h[1]-u[1])}let i=t[e],s=Math.max(1,Math.round(i/mb)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let u=c*r;for(;l<e-1&&t[l+1]<=u;)l++;let h=n[l],f=n[(l+1)%e],p=t[l+1]-t[l],g=p>0?(u-t[l])/p:0;o[c]=h[0]+(f[0]-h[0])*g,a[c]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function Pm(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function Ib(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=n[c]-n[l],h=e[c]-e[l],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=(s[c]-s[l])/(2*t),h=(r[c]-r[l])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function Lb(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[a]*n[a]+2*bb*e);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[o]*n[o]+2*Sb*e);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function Im(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function Dm(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Qh(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let u=n[c].curv,h=Math.abs(u);h>i&&(i=h);let f=Math.abs(n[c].slope);f>s&&(s=f),r[c]=u>Em?1:u<-Em?-1:0,o[c]=h<Jh?1:0}let a=0;for(let c of Im(r))c.len*e>=_b&&a++;let l={start:0,len:0};for(let c of Im(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function Db(n,e){let t=n.length,i=$h,s=(c,u)=>(c+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let u=Math.floor(n[c].x/i),h=Math.floor(n[c].z/i);o[c]=[u,h];let f=s(u,h),p=r.get(f);p||(p=[],r.set(f,p)),p.push(c)}let a=0,l=$h*$h;for(let c=0;c<t;c++){let[u,h]=o[c];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(u+f,h+p));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=yb)continue;let S=n[c].x-n[x].x,M=n[c].z-n[x].z;S*S+M*M<l&&a++}}}return a}function Nb(n){let e=Ab(n),t=Cb(e,160),{xs:i,zs:s,count:r,step:o}=Pb(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((v,T)=>({k:v,a:n.range(a[T][0],a[T][1]),p:n.range(0,Xl)})),c=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let v=0;v<r;v++){let T=(v-1+r)%r,_=(v+1)%r,b=i[_]-i[T],A=s[_]-s[T];h[v]=Math.hypot(b,A)||1e-9,c[v]=b/h[v],u[v]=A/h[v]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let v=0;v<40;v++){for(let _=0;_<r;_++){let b=0;for(let A of l)b+=A.a*g*Math.sin(Xl*A.k*_/r+A.p);f[_]=gb+b}let T=0;for(let _=0;_<r;_++){let b=(_-1+r)%r,A=(_+1)%r;p[_]=(f[A]-f[b])/h[_],Math.abs(p[_])>T&&(T=Math.abs(p[_]))}if(T<=vb)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let v=0;v<r;v++){let T=(v-1+r)%r,_=(v+1)%r,b=i[_]-i[T],A=f[_]-f[T],N=s[_]-s[T],B=Math.hypot(b,A,N)||1e-9;x[v]=b/B,m[v]=A/B,d[v]=N/B}let S=Ib(i,s,o),M=Pm(S,2),y=new Float64Array(r);for(let v=0;v<r;v++){let T=jh((Math.abs(M[v])-.016666666666666666)/.023333333333333334,0,1);y[v]=Zh+(Cm-Zh)*T}let w=Pm(y,10);for(let v=0;v<r;v++)w[v]=jh(w[v],Zh,Cm);let E=new Float64Array(r);for(let v=0;v<r;v++)E[v]=Math.min(Tb,Math.sqrt(Eb/Math.max(Math.abs(M[v]),1e-9)));return Lb(E,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:c,fz:u,tx:x,ty:m,tz:d,slope:p,curv:M,width:w,vmax:E}}function Ub(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:u,slope:h,curv:f,width:p,vmax:g}=n,x=[];for(let M=0;M<s;M++)x.push({curv:f[M],slope:h[M],vmax:g[M],x:e[M],z:i[M]});let m=Qh(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(Mb/r))%s:0,S=new Array(s);for(let M=0;M<s;M++){let y=(d+M)%s;S[M]={s:M*r,x:e[y],y:t[y],z:i[y],tx:l[y],ty:c[y],tz:u[y],rx:-a[y],rz:o[y],width:p[y],curv:f[y],vmax:g[y],slope:h[y]}}return S}function Fb(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=Jh?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(ql/e),a=Math.floor((i*e-ql)/e),l=Math.ceil(Lm/e),c=[],u=[],h=(m,d)=>c.every(([S,M])=>d<S||m>M),f=(m,d,S,M)=>{for(let y=0;y<400;y++){let w=Math.round(t.range(m,d)/e),E=Math.ceil(S/e),v=w+E;if(a-v<o)return null;let T=t.int(o,a-v),_=T+w;if(M&&!r(T,_+E))continue;let b=T-l,A=_+E+l;if(!(b<0||A>i-1||!h(b,A)))return c.push([b,A]),{a:T,b:_}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,Kh,!0);d&&u.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&u.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&u.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return u.sort((m,d)=>m.s0-d.s0),u}function Ob(n,e,t){let i=Nb(n),s=Ub(i),{count:r,step:o}=i,a=r*o,l=Fb(s,o,n),c=Qh(s,o),u=1/0,h=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:u,maxX:h,minZ:f,maxZ:p},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:Dm(s,o),corners:c.corners}}}function Bb(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=ym&&r<=_m||e.push(`longueur ${r.toFixed(0)} m hors [${ym}, ${_m}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<Mm||a>bm)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${Mm}, ${bm}]`);let l=Qh(t,s);l.minRadius>=Sm||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${Sm}`),l.maxSlope>xb&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<Tm&&e.push(`${l.corners} virages < ${Tm}`),l.longestStraight<wm&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${wm}`);let c=Db(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=Dm(t,s);u>=Am&&u<=Rm||e.push(`temps au tour ${u.toFixed(1)} s hors [${Am}, ${Rm}]`);let h=n.features||[],f=h.filter(d=>d.type==="ramp").length,p=h.filter(d=>d.type==="boost").length,g=h.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%i;for(let d of h)if((d.s0<ql||d.s1>r-ql)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let S=d.s1-d.s0;(S<11.5||S>16.5)&&e.push(`tremplin de ${S.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let M=x(d.s0),y=x(d.s1+Kh),w=!0;for(let E=M;E!==(y+1)%i;E=(E+1)%i)if(Math.abs(t[E].curv)>=Jh){w=!1;break}w||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((d,S)=>d.s0-S.s0);for(let d=0;d+1<m.length;d++){let S=m[d],M=m[d+1],y=S.s1+(S.type==="ramp"?Kh:0);M.s0<y+Lm-1e-6&&e.push(`features ${S.type} et ${M.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function Nm(n,e={}){let t=e.maxAttempts??wb,i=$n(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),l=Ob(a,n,o+1),c=Bb(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function ef(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var zb=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function ns(n,e,t={}){let i=n.count,s=n.step,r=ef(n,e),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,u=o-a,h=n.pts[l],f=n.pts[c],p=(y,w)=>y+(w-y)*u,g=p(h.tx,f.tx),x=p(h.ty,f.ty),m=p(h.tz,f.tz),d=Math.hypot(g,x,m)||1,[S,M]=zb(p(h.rx,f.rx),p(h.rz,f.rz));if(t.s=r,t.x=p(h.x,f.x),t.y=p(h.y,f.y),t.z=p(h.z,f.z),n.open&&e!==r){let y=e-r;t.x+=g/d*y,t.z+=m/d*y}return t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=S,t.rz=M,t.width=p(h.width,f.width),t.curv=p(h.curv,f.curv),t.vmax=p(h.vmax,f.vmax),t.slope=p(h.slope,f.slope),t.i=l,t}var ts={};function zt(n,e,t,i={}){return ns(n,e,ts),i.x=ts.x+t*ts.rx,i.y=ts.y,i.z=ts.z+t*ts.rz,i.heading=Math.atan2(ts.tx,ts.tz),i.slope=ts.slope,i}function Um(n,e){let t=ef(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function Ns(n,e,t){let i=ef(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var Vb=1/30,Fm=.5,Om=.4,Gb=.6,la=[.2,.36,.52,.68,.84],Bm=la.length+1,Wb=.2,Xb=.1,qb=.34,Yb=4,$b=4,Zb=.2,Kb=4.9,jb=5.5,Jb=5,Qb=6,eS=1.8,tS=.03,nS=1.6,iS=.5,sS=2,rS=.785,oS=4.7,aS=2.5,uo=.196,lS=.098,cS=.5,uS=.27,hS=16,fS=11,dS=.72,pS=5,mS=.5,zm=.35,gS=.42,xS=60,vS=.3,yS=5,_S=1.6,MS=3,bS=14,SS=.004,ES=1.2,TS=2,wS=.5,AS=22,km=.25,RS=6,CS=1.8,Hm=1,PS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],$t=(n,e,t)=>n<e?e:n>t?t:n,Di=(n,e=0)=>Number.isFinite(n)?n:e,IS=(n,e)=>{let t=n%e;return t<0?t+e:t},LS=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function Vm({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:cr.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function Gm(n,e,t,i,s,r,o){let a=n.events,l=e||{},c=s||{},u=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,Vb):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let h=t.length,f=i.maxSpeed,p=$t(Di(l.throttle),0,1),g=$t(Di(l.brake),0,1),x=$t(Di(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,g=0,x=0);let d=Ve=>t.open?Ve:IS(Ve,h),S=d(n.s),M=ns(t,S),y=!n.airborne;if(u&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),y){let Ve=Ns(t,S,"boost");if(Ve){let _e=Math.floor(n.s/h)+":"+Ve.s0;n._padKey!==_e&&(n._padKey=_e,n.boostT=Math.max(n.boostT,ES),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let w=n.boostT>0;w&&(p=1);let E=y&&!m&&Math.abs(x)>.3&&n.speed>TS&&(!!l.drift||g>.3),v=n.speed,T=v/f;n._shiftT>0?n._shiftT-=r:n.gear<Bm&&T>la[n.gear-1]&&!(g>0&&v>3)?(n.gear+=1,n._shiftT=Wb):n.gear>1&&v<la[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=Xb);let _=n.gear>1?la[n.gear-2]:0,b=n.gear<Bm?la[n.gear-1]:1;n.rpm=$t(.35+.65*((T-_)/(b-_)),.1,1.05);let A=y&&Math.abs(n.d)>M.width*.5,N=Gb*f,B=A?N:f*(w?i.boostPower:1),L=Yb/(f*f),k=0;if(y){if(A&&v>N&&(k-=2*i.offroadDrag*(v-N)),p>0&&n._shiftT<=0&&v<B){let Ve=qb*f,_e=.8+.2*Math.sin(Math.PI*$t(n.rpm,0,1)),De=i.accel*p*_e*Math.min(1,Ve/Math.max(v,1));w&&(De*=sS),k+=Math.min(De,i.accel*1.15*(w?1.3:1))}g>0&&(k-=i.brake*g*(E?.35:1)),k-=v*(.2-.03*(n.gear-1))*(1-p),k-=Zb,k-=Kb*M.slope,k-=L*v*v}else k-=L*$b*v*v;n.speed=Math.max(0,v+k*r),y&&n.speed>B&&!A&&(n.speed=Math.max(B,n.speed-10*r));let z=$t(n.speed/f,0,1),Z=1+(i.wetGrip-1)*DS(c),V=$t(i.grip*Di(c.grip,1)*Z,.05,1.5),se=n.speed<.6?0:x,Q=Math.abs(se)>Math.abs(n.steer)||se*n.steer<0?jb:Jb*$t(Math.abs(k)/6,1,2.5);n.steer=LS(n.steer,se,Q*r);let ge=n.yaw-n.vdir,be=n.speed*Math.sin(ge),ce=Math.min(nS,1+tS*Math.abs(be));E&&(ce=i.driftBonus),w&&y&&(ce*=iS);let re=1-(1-i.steerHighSpeed)*z,oe=Math.min(1,n.speed/6),P=y?1:i.airControl,G=n.steer*i.steerRate*re*ce*oe*P*(.6+.4*Math.min(1,V)),$=Math.min(n.speed/yS,xS*Math.min(1.2,V)*(E?1.5:1)/Math.max(n.speed,1)),te=$t(G,-$,$);y&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-_S*r)),o&&i.steerNoise>0&&!m&&y&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let le=Math.max(.3,1-n.d*M.curv),Te=n.speed*Math.cos(n.vdir)/le*r,Fe=n.speed*Math.sin(n.vdir)*r,q=M.curv*Te,Ye=n.vdir,ke=q*(y?1-vS:1);if(n.yaw+=te*r-ke,n.vdir-=ke,y){let Ve=(E?eS:Qb)*V,_e=1-Math.exp(-Ve*r);n.vdir+=(n.yaw-n.vdir)*_e,n.speed*=1-(1-Math.cos(ge))*_e}else{let Ve=3*$t(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-Ve*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=$t(Di(n.vdir),-Fm,Fm),n.yaw=$t(Di(n.yaw),n.vdir-Om,n.vdir+Om),n._t+=r,Fe+=Di(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(y?1:.5),n.s+=Te,n.d+=Fe;let Le=y?$t((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*oe:0;n.drift+=(Le-n.drift)*Math.min(1,8*r);let Ce=ns(t,d(n.s));n.onRoad=Math.abs(n.d)<=Ce.width*.5;let qe=Ce.width*.5+6-.4;if(Math.abs(n.d)>=qe-.02){let Ve=n.d>=0?1:-1,_e=n.vdir*Ve>0,De=_e?Math.abs(Math.sin(n.vdir)):0;if(n.d=Ve*qe,_e&&(n.vdir=-Ve*.04,n.yaw=n.yaw*.4-Ve*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let $e=n.boostT>0,Qe=o?o.next():1;$e&&n.speed>RS||De>wS&&n.speed>AS&&Qe<km||n.airborne&&Qe<km?(n.speed*=.3,n.stun=CS,a.push("crash")):n.speed*=1-$t(i.wallLoss*1.3*(.5+De),0,.9),a.push("wall")}n.boostT=0,n._wallT=zm,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&y&&(n.speed*=Math.exp(-2.2*r)),S=d(n.s);let Pe=Di(Um(t,S)),U=(Pe-n._g)/r;if(n.airborne||(Pe<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-Pe,n.vy=n._vyG,n.vy>MS&&a.push("jump")):(n.yRel=Pe,n.vy=$t(U,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-Pe),n.vy<=0&&n.yRel<=Pe)){let Ve=-n.vy,_e=Math.abs(n.yaw-n.vdir),De=Ve>bS/Math.max(.3,i.landing)||_e>.35;n.airborne=!1,n.yRel=Pe,n.vy=0,n._vyG=0,n._springA=$t(n._springA+.35*n._apex+.03*Ve,0,1),n._springP=Math.PI/2;let $e=SS*Ve+(De?.08:0);n.speed*=1-$t($e/Math.max(.2,i.landing),0,.45),a.push(De?"hardLand":"land")}n._g=Pe,y=!n.airborne,n.speed=$t(Di(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let R=Math.max(0,1-n.speed/4,n._wallT/zm),ne=y?(q+(n.vdir-Ye))/r:0;n._turnF+=(ne-n._turnF)*Math.min(1,6*r);let xe=n.speed*n._turnF,Me=Math.sign(xe)*Math.max(0,Math.abs(xe)-pS),de=n.steer*gS*Math.min(1,n.speed/10),He=$t((1-R)*(Math.atan(Me/fS)*dS+mS*(n.yaw-n.vdir)+de),-Hm,Hm);n.stun>0&&(He=(n.lean>=0?1:-1)*1.35),n.lean+=(He-n.lean)*Math.min(1,9*r),n._dive=g>.1&&y?Math.min(uo,n._dive+uo*r):Math.max(0,n._dive-.25*r);let Re=$t(k*lS,-uo,uo)-n._dive;n._pitchF+=(Re-n._pitchF)*Math.min(1,r/cS);let Ne=$t(Re-n._pitchF,-uo,uo);n.wheelie=n.boostT>0&&y?Math.min(Math.PI/2,n.wheelie+oS*r):Math.max(0,n.wheelie-aS*r),Ne+=Math.sin(n.wheelie)*rS,y||(Ne=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Ne,n._springA*=Math.exp(-r/uS),n._springP+=hS*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let Ve of PS)Number.isFinite(n[Ve])||(n[Ve]=0);return n.speed<0&&(n.speed=0),n}function DS(n){return $t(Di(n.wet),0,1)}var NS=8,US=25,FS=150,OS=3,BS=35,zS=2,kS=14,HS=30,VS=12,GS=2,WS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},hn=(n,e,t)=>n<e?e:n>t?t:n,Yl=(n,e,t)=>n+(e-n)*t,XS=(n,e)=>n-e*Math.round(n/e);function qS(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function YS(n,e){for(let t=0;t<=FS;t+=US)if(Math.abs(ns(n,e+t).curv)>.004)return!1;return!0}function $l(n,e){let t=n||WS,i={persona:t,rng:e,skill:hn(t.skill??.5,0,1),aggression:hn(t.aggression??.5,0,1),jumpSkill:hn(t.jumpSkill??.5,0,1),lineSkill:hn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function Zl(n,e,t,i,s,r){let o=n.input,a=t.length,l=n.rng,c=n.aggression,u=n.skill,h=n.jumpSkill,f=e.speed,p=e.s,g=ns(t,p),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-u)*15);let m=n.mistakeT>0;n.boostLock-=r;let d=Yl(1.4,.6,c),S=Math.max(20,f*d),M=Math.max(S,hn(f*1.6+20,40,110)),y=1/0,w=0,E=0,v=0;for(let oe=0;oe<=M;oe+=NS){let P=oe===0?g:ns(t,p+oe);if(oe<=S&&P.vmax<y&&(y=P.vmax),oe>=8){let G=Math.abs(P.curv);G>w&&(w=G,E=Math.sign(P.curv),v=oe)}}let T=hn(w/.02,0,1),_=0;if(E!==0&&T>0){let oe=hn((v-10)/30,0,1),P=Yl(1,-.8,oe);_=E*x*n.lineSkill*T*P}_+=n.wander,m&&(_+=n.mistakeSide*1.2);let b=qS(t,p),A=b?b.dist:1/0,N=Ns(t,p,"ramp")!==null,B=A<HS;(N||B)&&h>.5&&(_*=1-hn((h-.4)/.6,0,1));let L=!N&&A>=OS&&A<=BS&&h<.5;for(let oe=0;oe<s.length;oe++){let P=s[oe];if(P===e)continue;let G=XS(P.s-p,a);if(G<=0||G>=VS)continue;let $=P.d-e.d;if(!(Math.abs($)>=GS)){if(c>.55){let te=$!==0?Math.sign($):e.d<0?1:-1;_+=te*(.6+.8*c)}else{let te=$!==0?-Math.sign($):e.d<0?1:-1;Math.abs(e.d+te*2)>x&&(te=-te),_+=te*2*(1-c)}break}}let k=n.obstacles;if(k){let oe=35+f*1.7,P=null,G=1/0;for(let $=0;$<k.length;$++){let te=k[$],le=te.s-p;le>-te.type.len&&le<oe&&le<G&&Math.abs(te.d-_)<te.type.w/2+1.5&&(te.speed<f-3||le<40)&&(P=te,G=le)}if(P){let $=P.type.w/2+2,te=[P.d-$,P.d+$].filter(Fe=>Math.abs(Fe)<=x),le=te.filter(Fe=>!k.some(q=>q!==P&&Math.abs(q.s-P.s)<30&&Math.abs(q.d-Fe)<q.type.w/2+1.2)),Te=le.length?le:te;Te.length&&(_=Te.reduce((Fe,q)=>Math.abs(q-e.d)<Math.abs(Fe-e.d)?q:Fe))}}_=hn(_,-x,x),n.dGoal+=(_-n.dGoal)*Math.min(1,r*(k?4.5:2.5));let z=hn(n.dGoal,-x,x),Z;if(e.airborne)Z=hn(-e.yaw*2,-.3,.3);else{let oe=z-e.d,P=hn(oe*.12,-.25,.25),G=ns(t,p+hn(f*.25,4,20)).curv,$=i.steerRate*Yl(1,i.steerHighSpeed,hn(f/i.maxSpeed,0,1));Z=(G*f+(P-e.yaw)*3)/$}Z=hn(Z,-1,1),Number.isFinite(Z)||(Z=0);let V=hn(-n.playerGap/150,-1,1)*.06,se=Yl(.86,1,u)+c*.04;m&&(se*=.85);let ye=y*se*(1+V),Q=i.maxSpeed,ge=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(h>.6&&A>=zS&&A<=kS)ge=!0;else if(f>20&&YS(t,p)){let oe=n.playerGap<-20,P=.25+.5*c+(oe?.3:0);ge=l.chance(P)}n.boostLock=ge?1:.4}o.boost=ge;let be=w<.003;if(e.boostT>0){let oe=Q*i.boostPower;ye=be?oe*.98:Math.min(ye,oe)}else ye=Math.min(ye,Q);let ce=0,re=0;if(e.airborne)ce=1;else{let oe=ye-f;oe>-1.5?ce=L?0:hn(.5+oe*.25,0,1):re=hn((-oe-1.5)*.15,0,1)}return o.throttle=ce,o.brake=re,o.steer=Z,o.drift=!e.airborne&&c>.75&&w>.025&&f>40&&v<20,o}var $S=7,ZS=3,KS=.3,jS=3,JS=25,QS=1.5,eE=1.2,tE=1.8,Wm=.9,nE={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Kl=(n,e,t)=>n<e?e:n>t?t:n,tf=(n,e)=>n-e*Math.round(n/e);function nf(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function Xm({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null,startS:a=0}){let l=n.length,c=n.raceEnd??l,u=e*c,f=s.filter(E=>!E.isPlayer).concat(s.filter(E=>E.isPlayer)).map((E,v)=>{let T=Math.floor(v/2),_=v%2,b=a-$S*(T+1),A=_===0?-2.5:2.5,N=o?.states.get(E.id),B=N||Vm({s:b,d:A});return{id:E.id,name:E.name,color:E.color,accent:E.accent,isPlayer:!!E.isPlayer,stats:E.stats,persona:E.persona||null,state:B,remote:!!E.remote,ai:E.isPlayer||E.remote?null:$l(E.persona||nE,i.fork("ai:"+E.id)),rng:i.fork("rider:"+E.id),others:null,input:nf(),coast:nf(),frameEvents:[],startS:N?N.s:b,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:v+1}});for(let E of f)E.others=f.filter(v=>v!==E).map(v=>v.state);let p=f.find(E=>E.isPlayer)||null,g=f.slice(),x=f.length,m=new Uint8Array(x*x);function d(E,v,T,_,b){if(T===v)return;let A=Math.floor(v/c),N=Math.min(Math.floor(T/c),e);for(let B=Math.max(A+1,1);B<=N;B++){let L=Kl((B*c-v)/(T-v),0,1),k=_+L*b,z=k-E.lapStartT;E.lapTimes.push(z),(E.bestLap===null||z<E.bestLap)&&(E.bestLap=z),E.lapStartT=k}if(r&&T>=u){let B=Kl((u-v)/(T-v),0,1);E.finished=!0,E.finishTime=_+B*b}}function S(E){let v=E.state,T=E.coast;return T.throttle=KS,T.brake=0,T.steer=Kl(-v.yaw*2-v.d*.05,-.5,.5),T.boost=!1,T.drift=!1,T}function M(E,v){let T=E.state;for(let _=0;_<x;_++){let b=f[_];if(b===E||b.hidden)continue;let A=tf(b.state.s-T.s,l);if(A>jS&&A<JS&&Math.abs(b.state.d-T.d)<QS){T.speed=Math.min(T.speed+eE*E.stats.slipstream*v,E.stats.maxSpeed*1.05);return}}}function y(){for(let E=0;E<x;E++)for(let v=E+1;v<x;v++){let T=f[E],_=f[v];if(T.remote&&_.remote||T.hidden||_.hidden)continue;let b=!T.remote,A=!_.remote,N=tf(_.state.s-T.state.s,l),B=_.state.d-T.state.d,L=E*x+v;if(Math.abs(N)<tE&&Math.abs(B)<Wm){let k=B!==0?Math.sign(B):i.sign(),z=((Wm-Math.abs(B))/2+.05)*(b&&A?1:2);if(b&&(T.state.d-=k*z),A&&(_.state.d+=k*z),!m[L]){m[L]=1;let Z=(T.state.speed+_.state.speed)/2;b&&(T.state.speed+=(Z-T.state.speed)*.2),A&&(_.state.speed+=(Z-_.state.speed)*.2);let V=N>=0?T:_;V.remote||(V.state.speed*=.96),(!b||!A)&&(b?T:_).state.events?.push("hit")}}else m[L]=0}}let w={phase:o?"racing":"countdown",countdown:o?0:ZS,time:o?o.time:0,final:r,laps:e,track:n,riders:f,player:p,update(E,v){if(w.phase==="countdown"){w.countdown=Math.max(0,w.countdown-E),w.countdown<=0&&(w.phase="racing");return}let T=w.time;w.time+=E;for(let _=0;_<x;_++){let b=f[_];b.remote||(b.finished?b.input=S(b):b.isPlayer?b.input=v||nf():(p&&(b.ai.playerGap=tf(b.state.s-p.state.s,l)),b.input=Zl(b.ai,b.state,n,b.stats,b.others,E)))}for(let _=0;_<x;_++){let b=f[_];if(b.remote){b.lap=1;continue}let A=b.state,N=b.finished,B=A.s;if(Gm(A,b.input,n,b.stats,t,E,b.rng),N||(d(b,B,A.s,T,E),b.finished||M(b,E)),b.lap=b.finished?e:Kl(Math.floor(A.s/c)+1,1,e),!b.isPlayer){b.frameEvents.length=0;for(let L=0;L<A.events.length;L++)b.frameEvents.push(A.events[L]);A.events.length=0}}y(),g.sort((_,b)=>_.finished!==b.finished?_.finished?-1:1:_.finished?_.finishTime-b.finishTime:b.state.s-_.state.s);for(let _=0;_<x;_++)g[_].position=_+1;r?(p?p.finished:f.every(_=>_.finished))&&(w.phase="finished"):(p||g[0]).state.s>=c&&(w.phase="relay")},results(){let E=f.map(v=>{let T;if(v.finished)T=v.finishTime;else{let _=Math.max(0,v.state.s-v.startS),b=w.time>1?Math.max(5,_/w.time):40,A=Math.max(0,u-v.state.s);T=w.time+A/b}return{id:v.id,name:v.name,position:v.position,time:T,bestLap:v.bestLap,isPlayer:v.isPlayer}});return E.sort((v,T)=>v.position-T.position),E}};return w}var uf={};cx(uf,{PLAYER:()=>Ni,RIVALS:()=>Jl,UPGRADES:()=>ur,applyUpgrade:()=>nc,computeStats:()=>Us,createRun:()=>Ql,dailySeed:()=>ic,isRunOver:()=>ca,loadMeta:()=>af,offerUpgrades:()=>tc,randomSeed:()=>sE,recordResult:()=>rf,runRiders:()=>ec,saveMeta:()=>lf,standings:()=>ho,updateMeta:()=>cf});var qm="polygon-rush-meta",iE=Object.keys(Ds).filter(n=>n!=="sicily"),Ni={id:"player",name:"Vous",color:14885934,accent:2312392},ur=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],Jl=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Ym=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],sf=Ym.length;function $m(n){return ur.find(e=>e.id===n)||null}function Zm(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function Ql(n){let e=String(n),t=$n(aa(e+"|run")),i=[];for(let o=0;o<sf;o++)if(o===0)i.push("sunset");else if(o===sf-1)i.push("rain");else{let a=i[o-1],l=iE.filter(c=>c!==a&&!(o===sf-2&&c==="rain"));i.push(t.pick(l))}let s=Ym.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Ni.id]:0};for(let o of Jl)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function ec(n){let e=Math.max(0,n.stageIndex),t=[{id:Ni.id,name:Ni.name,color:Ni.color,accent:Ni.accent,isPlayer:!0,persona:null,stats:Us(n)}];for(let i of Jl){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...cr}})}return t}function Us(n){let e={...cr};for(let t of n.upgrades){let i=$m(t);i&&i.apply(e)}return e}function tc(n){let e=$n(aa(`${n.seed}|offer|${n.stageIndex}`)),t=ur.filter(i=>Zm(n,i.id)<i.maxStacks);return e.shuffle(t).slice(0,3)}function nc(n,e){let t=$m(e);return!t||Zm(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function Km(n){if(n===Ni.id)return Ni.name;let e=Jl.find(t=>t.id===n);return e?e.name:n}function rf(n,e){if(ca(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=Wl[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||n.names?.[r.id]||Km(r.id),position:a,points:l,isPlayer:r.id===Ni.id})}),n.history.push(s),n.stageIndex+=1,n}function ho(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:n.names?.[t]||Km(t),points:n.points[t],isPlayer:t===Ni.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function ca(n){return n.stageIndex>=n.stages.length}function ic(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function sE(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function jl(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function of(n){let e=jl();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function jm(){try{return globalThis.localStorage??null}catch{return null}}function af(){try{let n=jm();if(!n)return jl();let e=n.getItem(qm);return e?of(JSON.parse(e)):jl()}catch{return jl()}}function lf(n){try{let e=jm();return e?(e.setItem(qm,JSON.stringify(of(n))),!0):!1}catch{return!1}}function cf(n,e){let t=of(n),i=ho(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var oi=.9,Jm=.3,sc=8,hf=3,Qm=6+.8,ua=3,rE=4.5,oE=.015,aE=.004,e0=60,bt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},rc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],t0=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],lE=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],wn=(n,e,t)=>n+(e-n)*t,kn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,l]=e,c=t0(rc(o,r),rc(a,r)),u=t0(rc(a,r),rc(l,r)),h=[c[0]+u[0],c[1]+u[1],c[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=lE(h,i)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function ha(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=l,f[o]=u,f[a]=h,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*i[0]+t[1][p]*f[1]*i[1]+t[2][p]*f[2]*i[2])});n.quad(c,s,t[r].map(u=>u*l),null)}}}function ff(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new ii(i);return s.colorSpace=Lt,s.anisotropy=4,s}function n0(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var cE=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function oc(n,e,t){let i=t??$n(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(D=>D.type==="ramp"),u=l.filter(D=>D.type==="boost"),h=l.filter(D=>D.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,g=new ct;g.name="road";let x=[],m=[],d=[],S=D=>(m.push(D),D),M=ff(128,128,(D,K,X)=>{D.fillStyle="#f3efe6",D.fillRect(0,0,K,X),D.fillStyle="#d6202a",n0(D,cE,K,X)}),y=ff(256,128,(D,K,X)=>{D.fillStyle="#04141a",D.fillRect(0,0,K,X),D.fillStyle="#37f3ff",n0(D,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],K,X)}),w=ff(1024,256,(D,K,X)=>{D.fillStyle="#0b0e16",D.fillRect(0,0,K,X),D.strokeStyle="#ffd21f",D.lineWidth=10,D.strokeRect(12,12,K-24,X-24),D.fillStyle="#ffd21f",D.font="bold 150px Arial, Helvetica, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText("POLYGON RUSH",K/2,X/2+8)});for(let D of[M,y,w])D&&d.push(D);y&&(y.wrapS=In);let E=S(new st({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),v=S(new Yt({vertexColors:!0})),T=S(new st({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),_=S(new st({vertexColors:!0,flatShading:!0,roughness:1})),b=S(new st({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),A=S(new Yt({vertexColors:!0})),N=S(new st({color:M?16777215:16762906,map:M,emissive:M?16777215:16762906,emissiveMap:M,emissiveIntensity:.5,flatShading:!0})),B=S(new st({color:207411,emissive:3666943,emissiveMap:y,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=S(new st({vertexColors:!0,flatShading:!0,side:Nt,roughness:.9})),k=S(new Yt({vertexColors:!0})),z=S(new st({vertexColors:!0,flatShading:!0,roughness:.6})),Z=S(new st({color:w?16777215:16765471,map:w,emissive:w?16777215:16756736,emissiveMap:w,emissiveIntensity:.7,flatShading:!0})),V=S(new st({color:2830138,flatShading:!0,roughness:.7})),se=S(new st({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),ye=D=>{for(let K of c)if(D>=K.s0&&D<K.s1)return K.height*(D-K.s0)/(K.s1-K.s0);return 0},Q=D=>c.some(K=>D>=K.s0&&D<K.s1),ge=D=>h.some(K=>D>=K.s0&&D<=K.s1),be=D=>{let K=D/o,X=Math.floor(K),F=K-X;X=n.open?Math.max(0,Math.min(r-2,X)):(X%r+r)%r;let C=s[X],Y=s[(X+1)%r],O=wn(C.rx,Y.rx,F),j=wn(C.rz,Y.rz,F),W=Math.hypot(O,j)||1,ue=wn(C.tx,Y.tx,F),Se=wn(C.tz,Y.tz,F),Ue=Math.hypot(ue,Se)||1,Ie=wn(C.y,Y.y,F);return{s:D,x:wn(C.x,Y.x,F),z:wn(C.z,Y.z,F),yb:Ie,y:Ie,h:0,rx:O/W,rz:j/W,tx:ue/Ue,tz:Se/Ue,w:wn(C.width,Y.width,F),curv:wn(C.curv,Y.curv,F),sample:!1}},ce=(D,K,X)=>({x:wn(D.x,K.x,X),y:wn(D.y,K.y,X),yb:wn(D.yb,K.yb,X),z:wn(D.z,K.z,X),rx:wn(D.rx,K.rx,X),rz:wn(D.rz,K.rz,X),w:wn(D.w,K.w,X)}),re=(D,K,X=0)=>[D.x+D.rx*K,D.y+X,D.z+D.rz*K],oe=(D,K,X=0)=>[D.x+D.rx*K,D.yb+X,D.z+D.rz*K],P=[];for(let D of c)P.push({s:D.s0,h:0},{s:D.s1,h:D.height},{s:D.s1,h:0});P.sort((D,K)=>D.s-K.s);let G=[],$=0,te=(D,K,X)=>{let F=G[G.length-1];if(F&&Math.abs(F.s-D)<1e-9&&Math.abs(F.h-K)<1e-9){F.sample=F.sample||X;return}let C=be(D);C.h=K,C.y=C.yb+K,C.sample=X,G.push(C)};for(let D=0;D<r;D++){let K=D*o;for(;$<P.length&&P[$].s<=K+1e-9;)te(P[$].s,P[$].h,!1),$++;te(K,ye(K),!0)}for(;$<P.length;)te(P[$].s,P[$].h,!1),$++;let le=G.length,Te=[];for(let D=0;D<le&&!(n.open&&D===le-1);D++){let K=G[D],X=G[(D+1)%le],F=K.s,C=D+1<le?G[D+1].s:a,Y=Math.abs(C-F)<1e-9,O=(F+C)/2;Te.push({a:K,b:X,sa:F,sb:C,drop:Y,mid:O,ramp:!Y&&Q(O)})}let Fe=new kn,q=new kn,Ye=new kn,ke=new kn,Le=new kn,Ce=new kn,qe=new kn,Pe=new kn,U=new kn,R=new kn,ne=new kn,xe=new kn,Me=D=>D.w/2+6-Jm/2,de=D=>D.w/2+6+Jm/2;for(let D of Te){let{a:K,b:X,sa:F,sb:C,mid:Y}=D;if(D.drop){Fe.quad([re(K,-K.w/2),re(K,K.w/2),re(X,X.w/2),re(X,-X.w/2)],bt.rampDark,[K.tx,0,K.tz]);continue}let O=K.w/2,j=X.w/2;if(D.ramp)q.quad([re(K,-O),re(K,O),re(X,j),re(X,-j)],Math.floor(Y/2)%2===0?bt.yellow:bt.black,[0,1,0]),Fe.quad([re(K,-O),re(X,-j),oe(X,-j),oe(K,-O)],bt.rampDark,[-K.rx,0,-K.rz]),Fe.quad([re(K,O),oe(K,O),oe(X,j),re(X,j)],bt.rampDark,[K.rx,0,K.rz]);else{Fe.quad([re(K,-O),re(K,O),re(X,j),re(X,-j)],n.open?Math.floor(Y/8)%2?bt.motorwayB:bt.motorwayA:Math.floor(Y/8)%2?bt.asphaltB:bt.asphaltA,[0,1,0]);for(let Ie of[-1,1])Ye.quad([re(K,Ie*(O-.25),.02),re(K,Ie*(O-.45),.02),re(X,Ie*(j-.45),.02),re(X,Ie*(j-.25),.02)],bt.white,[0,1,0]);let W=9,ue=3;for(let Ie=Math.floor(F/W);Ie*W<C;Ie++){let Ee=Math.max(F,Ie*W),ie=Math.min(C,Ie*W+ue);if(ie-Ee<1e-6)continue;let J=ce(K,X,(Ee-F)/(C-F)),he=ce(K,X,(ie-F)/(C-F));Ye.quad([re(J,-.08,.02),re(J,.08,.02),re(he,.08,.02),re(he,-.08,.02)],bt.white,[0,1,0])}let Se=Math.abs((K.curv+X.curv)/2)>aE?1.2:.5,Ue=Math.floor(Y/2)%2?bt.red:bt.railA;for(let Ie of n.open?[]:[-1,1])Ye.quad([re(K,Ie*O,.025),re(K,Ie*(O+Se),.025),re(X,Ie*(j+Se),.025),re(X,Ie*j,.025)],Ue,[0,1,0])}for(let W of[-1,1]){ke.quad([oe(K,W*O),oe(K,W*Me(K)),oe(X,W*Me(X)),oe(X,W*j)],n.open?bt.lane:bt.sand,[0,1,0]);let ue=sc/2,Se=-hf/2,Ue=-hf,Ie=[W*K.rx*.6,.8,W*K.rz*.6];ke.quad([oe(K,W*de(K),0),oe(K,W*(de(K)+ue),Se),oe(X,W*(de(X)+ue),Se),oe(X,W*de(X),0)],bt.gravel,Ie),ke.quad([oe(K,W*(de(K)+ue),Se),oe(K,W*(de(K)+sc),Ue),oe(X,W*(de(X)+sc),Ue),oe(X,W*(de(X)+ue),Se)],bt.gravel,Ie);let Ee=Math.floor(Y/6)%2?bt.railB:bt.railA,ie=W*Me(K),J=W*Me(X),he=W*de(K),ve=W*de(X);!n.open&&(W<0||p||e.openRight===!1)&&(Le.quad([oe(K,ie,0),oe(K,ie,oi),oe(X,J,oi),oe(X,J,0)],Ee,[-W*K.rx,0,-W*K.rz]),Le.quad([oe(K,he,0),oe(K,he,oi),oe(X,ve,oi),oe(X,ve,0)],Ee,[W*K.rx,0,W*K.rz]),Le.quad([oe(K,ie,oi),oe(K,he,oi),oe(X,ve,oi),oe(X,J,oi)],Ee,[0,1,0])),p&&Ce.quad([oe(K,ie,oi+.02),oe(K,he,oi+.02),oe(X,ve,oi+.02),oe(X,J,oi+.02)],W<0?bt.neonCyan:bt.neonMag,[0,1,0])}}for(let D of G){if(!D.sample||Math.abs(D.curv)<=oE||Math.round(D.s/o)%8!==0||ge(D.s)||Q(D.s))continue;let X=-Math.sign(D.curv)*(D.w/2+6+.6),C=D.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];qe.quad([oe(D,X-.6,1),oe(D,X+.6,1),oe(D,X+.6,2),oe(D,X-.6,2)],[1,1,1],[-D.tx,0,-D.tz],C),ha(ne,[D.x+D.rx*X,D.yb+.35,D.z+D.rz*X],[[D.tx,0,D.tz],[D.rx,0,D.rz],[0,1,0]],[.08,.12,.65],bt.post)}if(!n.noStart){let D=be(0),K=Math.max(4,Math.round(D.w)),X=D.w/K;for(let O=0;O<3;O++){let j=be(-2+O),W=be(-1+O);for(let ue=0;ue<K;ue++){let Se=-D.w/2+ue*X,Ue=Se+X;Ye.quad([re(j,Se,.03),re(j,Ue,.03),re(W,Ue,.03),re(W,Se,.03)],(O+ue)%2?bt.checkB:bt.checkW,[0,1,0])}}let F=D.w/2+6+.5,C=[[D.tx,0,D.tz],[D.rx,0,D.rz],[0,1,0]];for(let O of[-1,1])ha(ne,[D.x+D.rx*O*F,D.yb+4,D.z+D.rz*O*F],C,[.3,.3,4],bt.post);ha(ne,[D.x,D.yb+7.5,D.z],C,[.5,F,.5],bt.beam);let Y=(O,j,W)=>[D.x+D.tx*O+D.rx*j,D.yb+W,D.z+D.tz*O+D.rz*j];xe.quad([Y(-.55,-F,5.2),Y(-.55,F,5.2),Y(-.55,F,6.8),Y(-.55,-F,6.8)],[1,1,1],[-D.tx,0,-D.tz],[[0,0],[1,0],[1,1],[0,1]]),xe.quad([Y(.55,-F,5.2),Y(.55,F,5.2),Y(.55,F,6.8),Y(.55,-F,6.8)],[1,1,1],[D.tx,0,D.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let O of u){let j=[];for(let ue=O.s0;ue<O.s1;ue+=2)j.push(ue);j.push(O.s1);let W=j.map(be);for(let ue=0;ue+1<W.length;ue++){let Se=W[ue],Ue=W[ue+1],Ie=(Se.s-O.s0)/4,Ee=(Ue.s-O.s0)/4;Pe.quad([re(Se,-Se.w/2,.04),re(Se,Se.w/2,.04),re(Ue,Ue.w/2,.04),re(Ue,-Ue.w/2,.04)],[1,1,1],[0,1,0],[[Ie,0],[Ie,1],[Ee,1],[Ee,0]])}}}let He=D=>{let K=D.w/2+Qm,X=[[-K,0],[-K,ua]];for(let F=1;F<=7;F++){let C=Math.PI-F*Math.PI/8;X.push([K*Math.cos(C),ua+rE*Math.sin(C)])}return X.push([K,ua],[K,0]),X},Re=(D,K,X,F=0)=>[D.x+D.rx*K+D.tx*F,D.yb+X,D.z+D.rz*K+D.tz*F],Ne=(D,K,X)=>{let F=-K,C=ua-X,Y=Math.hypot(F,C)||1;return[D.rx*F/Y,C/Y,D.rz*F/Y]},Ve=([D,K])=>{let X=-D,F=ua-K,C=Math.hypot(X,F)||1;return[D+X/C*.45,K+F/C*.45]};for(let D of h){let K=[];for(let F=D.s0;F<D.s1;F+=2)K.push(F);K.push(D.s1);let X=K.map(be);for(let F=0;F+1<X.length;F++){let C=X[F],Y=X[F+1],O=He(C),j=He(Y);for(let W=0;W<O.length-1;W++){let ue=(O[W][0]+O[W+1][0])/2,Se=(O[W][1]+O[W+1][1])/2;U.quad([Re(C,O[W][0],O[W][1]),Re(C,O[W+1][0],O[W+1][1]),Re(Y,j[W+1][0],j[W+1][1]),Re(Y,j[W][0],j[W][1])],n.open?W%2?bt.tunOchreA:bt.tunOchreB:W%2?bt.tunA:bt.tunB,Ne(C,ue,Se))}if(Math.round((C.s-D.s0)/2)%6===0)for(let W=1;W<=8;W++){let ue=Ve(O[W]),Se=Ve(O[W+1]),Ue=(ue[0]+Se[0])/2,Ie=(ue[1]+Se[1])/2;R.quad([Re(C,ue[0],ue[1]),Re(C,Se[0],Se[1]),Re(C,Se[0],Se[1],.6),Re(C,ue[0],ue[1],.6)],n.open?bt.sodium:W%2?bt.neonCyan:bt.neonMag,Ne(C,Ue,Ie))}}for(let F of[D.cutStart?null:X[0],D.cutEnd?null:X[X.length-1]]){if(!F)continue;let C=F.w/2+Qm,Y=[[F.tx,0,F.tz],[F.rx,0,F.rz],[0,1,0]];for(let O of[-1,1])ha(U,[F.x+F.rx*O*(C+1.2),F.yb+5,F.z+F.rz*O*(C+1.2)],Y,[2,1.1,5],bt.concrete);ha(U,[F.x,F.yb+10.5,F.z],Y,[2,C+3.5,1.5],bt.concreteB)}}let _e=(D,K,X,F=!1)=>{if(!D.idx.length)return null;let C=new xt;C.setAttribute("position",new at(D.pos,3)),C.setAttribute("color",new at(D.col,3)),C.setAttribute("uv",new at(D.uv,2)),C.setIndex(D.idx),C.computeVertexNormals(),x.push(C);let Y=new rt(C,K);return Y.name=X,Y.receiveShadow=F,g.add(Y),Y};_e(Fe,E,"road-asphalt",!0),_e(q,v,"road-ramp-top"),_e(Ye,T,"road-paint"),_e(ke,_,"road-shoulder-talus"),_e(Le,b,"road-barriers"),p&&_e(Ce,A,"road-barrier-neon"),_e(qe,N,"road-chevrons"),_e(Pe,B,"road-boost"),_e(U,L,"road-tunnels"),_e(R,k,"road-tunnel-neon"),_e(ne,z,"road-props"),_e(xe,Z,"road-start-sign");let De=[];for(let D=1;D*e0<a-5;D++){let K=D*e0;if(h.some(j=>K>=j.s0-15&&K<=j.s1+15))continue;let X=be(K),F=D%2?1:-1,C=F*(X.w/2+6+2.6),Y=X.yb-hf*Math.min(1,2.45/sc),O=i.range(8.5,9.5);De.push({x:X.x+X.rx*C,z:X.z+X.rz*C,y:Y,h:O,hx:X.x+X.rx*(C-F*.6),hz:X.z+X.rz*(C-F*.6)})}if(De.length){let D=new cn(.18,.26,9,6,1),K=new Si(.55,0);x.push(D,K);let X=new Sn(D,V,De.length),F=new Sn(K,se,De.length);X.name="road-lamp-masts",F.name="road-lamp-heads";let C=new je,Y=new sn,O=new H,j=new H;De.forEach((W,ue)=>{j.set(W.x,W.y+W.h/2,W.z),O.set(1,W.h/9,1),C.compose(j,Y,O),X.setMatrixAt(ue,C),j.set(W.hx,W.y+W.h+.2,W.hz),O.set(1,1,1),C.compose(j,Y,O),F.setMatrixAt(ue,C)}),X.instanceMatrix.needsUpdate=!0,F.instanceMatrix.needsUpdate=!0,g.add(X,F)}return{group:g,update:(D,K)=>{y&&(y.offset.x=-(K*.9%1)),B.emissiveIntensity=2.2+.5*Math.sin(K*5)},dispose:()=>{g.removeFromParent();for(let D of x)D.dispose();for(let D of m)D.dispose();for(let D of d)D.dispose()}}}function s0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new xt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=i0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let g=i0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function i0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new gt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function df(n,e){if(e===om)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ra||e===kl){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===ra)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var uE=0;function fo(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t*uE},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vVoxPos;
varying vec3 vVoxNor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          mat4 voxM = modelMatrix * instanceMatrix;
        #else
          mat4 voxM = modelMatrix;
        #endif
        vVoxPos = (voxM * vec4(transformed, 1.0)).xyz;
        vVoxNor = normalize(mat3(voxM) * objectNormal);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vVoxPos;
        varying vec3 vVoxNor;
        uniform float uVoxCell;
        uniform float uVoxStrength;
        float voxHash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // Les blocs sont pos\xE9s sur l'axe dominant de la face : sur une pente, cela donne des marches.
          vec3 an = abs(vVoxNor);
          vec3 q = vVoxPos / uVoxCell;
          vec2 uv; float lay;
          if (an.y >= an.x && an.y >= an.z) { uv = q.xz; lay = floor(q.y * 0.5); }
          else if (an.x >= an.z) { uv = q.zy; lay = floor(q.x); }
          else { uv = q.xy; lay = floor(q.z); }
          vec2 id = floor(uv);
          vec2 f = abs(fract(uv) - 0.5);
          float h = voxHash(vec3(id, lay));
          float edge = smoothstep(0.42, 0.5, max(f.x, f.y));
          // Les joints s'effacent au loin pour \xE9viter le moir\xE9.
          float fade = clamp(1.0 - fwidth(uv.x) * 2.5, 0.0, 1.0);
          float tone = mix(1.0, 0.8 + 0.34 * h, uVoxStrength * (0.35 + 0.65 * fade));
          diffuseColor.rgb *= tone * (1.0 - 0.3 * edge * fade * uVoxStrength);
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var hE=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function r0(n,e){n.traverse(t=>{if(!t.isMesh||hE.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||fo(s,e(t),1)})}function o0(n,e,t=46){let i=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(c)*u,f=Math.sin(c)*u,p=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([h+Math.round(e.range(-3.5,3.5))*g,p+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new Si(.72,0),r=new Yn({color:n.night?2765648:16777215,fog:!1,flatShading:!0,emissive:n.night?329487:new Ae(16777215).lerp(new Ae(n.skyHorizon),.35).multiplyScalar(.5)}),o=new Sn(s,r,i.length),a=new je;return i.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function a0(n,e,t,i,s,r,o,a,l,c){let u=e+s,h=t+r,f=i+o,p,g,x,m,d,S;s?(p=0,g=l?1:-1,x=0,m=0,d=0,S=c?1:-1):r?(p=a?1:-1,g=0,x=0,m=0,d=0,S=c?1:-1):(p=a?1:-1,g=0,x=0,m=0,d=l?1:-1,S=0);let M=n(u+p,h+g,f+x)?1:0,y=n(u+m,h+d,f+S)?1:0,w=n(u+p+m,h+g+d,f+x+S)?1:0;return .5+.1667*(M&&y?0:3-(M+y+w))}function Fs(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,S)=>m+r+(d+r)*1024+(S+r)*1048576,a=new Map,l=(m,d,S,M,y,w)=>{let E=Math.floor(m/e),v=Math.floor(d/e),T=Math.floor(S/e),_=o(E,v,T);a.has(_)||a.set(_,[E,v,T,M,y,w])};for(let m=0;m<i.count;m+=3){let d=i.getX(m),S=i.getY(m),M=i.getZ(m),y=i.getX(m+1),w=i.getY(m+1),E=i.getZ(m+1),v=i.getX(m+2),T=i.getY(m+2),_=i.getZ(m+2),b=.6,A=.6,N=.6;s&&(b=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,A=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,N=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let B=Math.max(Math.hypot(y-d,w-S,E-M),Math.hypot(v-d,T-S,_-M),Math.hypot(v-y,T-w,_-E)),L=Math.max(1,Math.ceil(B/e*2));for(let k=0;k<=L;k++)for(let z=0;z<=L-k;z++){let Z=k/L,V=z/L;l(d+(y-d)*Z+(v-d)*V,S+(w-S)*Z+(T-S)*V,M+(E-M)*Z+(_-M)*V,b,A,N)}}let c=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,S=c.get(d);S||c.set(d,S=[]),S.push(m)}for(let m of c.values()){m.sort((d,S)=>d[1]-S[1]);for(let d=0;d<m.length-1;d++)for(let S=m[d][1]+1;S<m[d+1][1];S++)a.set(o(m[d][0],S,m[d][2]),[m[d][0],S,m[d][2],m[d][3],m[d][4],m[d][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],p=[],g=(m,d,S)=>a.has(o(m,d,S));for(let m of a.values()){let[d,S,M,y,w,E]=m,v=Math.sin(d*12.9898+S*78.233+M*37.719)*43758.5453,T=.86+.24*(v-Math.floor(v));for(let[_,b,A,N]of u)if(!a.has(o(d+_,S+b,M+A)))for(let B of[0,1,2,0,2,3]){let L=N[B*3],k=N[B*3+1],z=N[B*3+2],Z=T*a0(g,d,S,M,_,b,A,L,k,z);h.push((d+L)*e,(S+k)*e,(M+z)*e),f.push(_,b,A),p.push(y*Z,w*Z,E*Z)}}let x=new xt;return x.setAttribute("position",new at(h,3)),x.setAttribute("normal",new at(f,3)),x.setAttribute("color",new at(p,3)),x.computeBoundingSphere(),x}function Ei(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,d)=>x<0||m<0||d<0||x>=n||m>=e||d>=t?null:o[x+n*(m+e*d)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++)o[d+n*(m+e*x)]=s(d,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],u=[],h=[],f=-n/2,p=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++){let S=o[d+n*(m+e*x)];if(!S)continue;let M=Math.sin(d*12.9898+m*78.233+x*37.719)*43758.5453,y=1-r/2+r*(M-Math.floor(M));for(let[w,E,v,T]of l)if(!a(d+w,m+E,x+v)&&!(E<0&&m===0))for(let _ of[0,1,2,0,2,3]){let b=T[_*3],A=T[_*3+1],N=T[_*3+2],B=y*a0(a,d,m,x,w,E,v,b,A,N);c.push((d+f+b)*i,(m+A)*i,(x+p+N)*i),u.push(w,E,v),h.push(S[0]*B,S[1]*B,S[2]*B)}}let g=new xt;return g.setAttribute("position",new at(c,3)),g.setAttribute("normal",new at(u,3)),g.setAttribute("color",new at(h,3)),g.computeBoundingSphere(),g}function l0(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new je},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWetPos;
varying vec4 vReflUv;
uniform mat4 uReflMatrix;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 wetWorld = modelMatrix * vec4(transformed, 1.0);
        vWetPos = wetWorld.xyz;
        vReflUv = uReflMatrix * wetWorld;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWetPos;
        varying vec4 vReflUv;
        uniform float uWet;
        uniform float uReflOn;
        uniform sampler2D tRefl;
        float gPuddle = 0.0;
        float wetHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float wetNoise(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(wetHash(i), wetHash(i + vec2(1.0, 0.0)), f.x), mix(wetHash(i + vec2(0.0, 1.0)), wetHash(i + vec2(1.0, 1.0)), f.x), f.y);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float n = wetNoise(vWetPos.xz * 0.11) * 0.65 + wetNoise(vWetPos.xz * 0.37 + 7.3) * 0.35;
          gPuddle = smoothstep(0.46, 0.66, n) * uWet;
          diffuseColor.rgb *= mix(1.15, 0.78, gPuddle);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(0.62, 0.06, gPuddle);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uReflOn > 0.5 && vReflUv.w > 0.0) {
          // l\xE9ger fr\xE9missement de la surface, plus fort hors des flaques
          vec2 ripple = (vec2(wetNoise(vWetPos.xz * 1.7), wetNoise(vWetPos.xz * 1.7 + 31.0)) - 0.5) * mix(0.04, 0.003, gPuddle);
          vec3 refl = texture2D(tRefl, vReflUv.xy / vReflUv.w + ripple).rgb;
          float fres = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.5);
          totalEmissiveRadiance += refl * (0.03 + 0.45 * fres) * mix(0.03, 0.6, gPuddle) * uWet;
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function pf(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let l=i-t+1,c=r-s+1,u=a-o+1,h=new Map;for(let f=0;f<n.length;f+=4){let p=n[f+3];h.set(n[f]-t+l*(n[f+1]-s+c*(n[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return Ei(l,c,u,e,(f,p,g)=>h.get(f+l*(p+c*g))||null,.12)}function c0(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
        {
          vec3 wn = abs(vVoxNor);
          if (wn.y < 0.5) {
            float u = (wn.x >= wn.z ? vVoxPos.z : vVoxPos.x) / ${t.toFixed(2)};
            float v = vVoxPos.y / ${e.toFixed(2)};
            vec2 f = fract(vec2(u, v));
            float win = step(0.26, f.x) * step(f.x, 0.72) * step(0.32, f.y) * step(f.y, 0.78);
            // volets ou vitres : un bloc sur trois est plus clair, le motif s'efface au loin
            float lit = step(0.66, voxHash(vec3(floor(u), floor(v), 3.0)));
            float fade = clamp(1.0 - max(fwidth(u), fwidth(v)) * 3.0, 0.0, 1.0);
            vec3 glass = mix(vec3(0.16, 0.2, 0.26), vec3(0.42, 0.5, 0.56), lit);
            diffuseColor.rgb = mix(diffuseColor.rgb, glass, win * fade * 0.85);
          }
        }
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}function u0(n){let e={value:0};return n.onBeforeCompile=t=>{t.uniforms.uSeaTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSeaW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSeaW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vSeaW;
        uniform float uSeaTime;
        // une onde : direction d, nombre d'onde k, pulsation w, cambrure a ; renvoie sa pente, att\xE9nu\xE9e au loin
        vec2 seaWave(vec2 p, vec2 d, float k, float w, float a, float px) {
          float fade = clamp(1.0 - px * k * 1.6, 0.0, 1.0);
          return d * (a * fade * cos(k * dot(d, p) + w * uSeaTime));
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          // grandes plaques plus claires ou plus sombres, comme les ris\xE9es vues de la c\xF4te
          vec2 q = vSeaW.xz * 0.004;
          float patchy = sin(q.x * 1.7 + uSeaTime * 0.05) * cos(q.y * 2.3 - uSeaTime * 0.04) + 0.5 * sin(q.x * 4.1 - q.y * 3.3);
          diffuseColor.rgb *= 0.93 + 0.09 * patchy;
        }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec2 p = vSeaW.xz;
          float px = max(length(dFdx(p)), length(dFdy(p)));     // taille d'un pixel sur l'eau, en m\xE8tres
          vec2 g = vec2(0.0);
          g += seaWave(p, normalize(vec2(0.86, 0.5)), 0.045, 0.75, 0.22, px);    // houle longue
          g += seaWave(p, normalize(vec2(0.35, 0.94)), 0.11, 1.15, 0.2, px);
          g += seaWave(p, normalize(vec2(-0.6, 0.8)), 0.31, 1.9, 0.17, px);      // clapot
          g += seaWave(p, normalize(vec2(0.95, -0.3)), 0.83, 3.1, 0.14, px);
          g += seaWave(p, normalize(vec2(-0.2, -0.98)), 1.9, 4.6, 0.1, px);
          vec3 nW = normalize(vec3(-g.x, 1.0, -g.y));
          normal = normalize(mat3(viewMatrix) * nW);
        }`)},n.customProgramCacheKey=()=>"sea-waves",n.needsUpdate=!0,e}var fn=5,h0=1,Os=450,Zn=40,f0=12e3,d0=32,p0=4e3,Kn=Math.PI*2,fa=new Bt,mo=new Ae,m0=new je,g0=new je,fE=new H(0,1,0),x0=n=>n<0?0:n>1?1:n,Ui=(n,e,t)=>n<e?e:n>t?t:n,hr=(n,e,t)=>{let i=x0((t-n)/(e-n));return i*i*(3-2*i)};function dE(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),u=l*l*(3-2*l),h=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*c+(p-h)*u+(h-f-p+g)*c*u};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var po=n=>{let e=new Ae(n);return[e.r,e.g,e.b]},Bs={sand:po(14271631),dry:po(7317050),garrigue:po(5212718),rock:po(12169890),pale:po(13617336),snow:po(15855076)},pE=[16513264,15853260,14725754,16052195],mE=[9075302,7236192,11047018,8023646],gE=[3407871,16727250,16757051],ac=0,lc=0,cc=0,da=(n,e)=>{ac+=(n[0]-ac)*e,lc+=(n[1]-lc)*e,cc+=(n[2]-cc)*e};function xE(n,e,t,i,s,r){ac=Bs.sand[0],lc=Bs.sand[1],cc=Bs.sand[2],da(Bs.dry,hr(2.5,7,n)),da(Bs.garrigue,hr(25,75,n)*.55),da(Bs.rock,hr(.4,.65,e)),da(Bs.pale,hr(95,120,n)*.8),da(Bs.snow,hr(125,150,n));let o=ac*t,a=lc*t,l=cc*t;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function ai(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);mo.setHex(e);for(let r=0;r<i;r++)s[r*3]=mo.r,s[r*3+1]=mo.g,s[r*3+2]=mo.b;return t.setAttribute("color",new gt(s,3)),t}var pa=n=>s0(n,!1);function vE(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function yE(){let n=new Si(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*vE(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function _E(){return pa([ai(new cn(.35,.5,6,6).translate(0,3,0),7162931),ai(new Si(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function ME(){return pa([ai(new cn(.25,.35,1.2,5).translate(0,.6,0),7162931),ai(new Pi(1.1,10,6).translate(0,6,0),3037756)])}function bE(){let n=[ai(new cn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Pi(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Kn/7);n.push(ai(t,5214010))}return pa(n)}function SE(){return pa([ai(new cn(1.6,2.3,13,8).translate(0,6.5,0),16052712),ai(new cn(2,2,2.2,8).translate(0,6.5,0),12727595),ai(new cn(1.3,1.3,1.8,8).translate(0,14,0),16771488),ai(new Pi(1.7,1.2,8).translate(0,15.4,0),3812906)])}function EE(){return pa([ai(new bn(2.2,.9,6).translate(0,.45,0),15986662),ai(new Pi(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Ti(n,e,t,i=!0){let s=new Sn(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];fa.position.set(o.x,o.y,o.z),fa.rotation.set(0,o.ry??0,0),fa.scale.set(o.sx??1,o.sy??1,o.sz??1),fa.updateMatrix(),s.setMatrixAt(r,fa.matrix),o.col!==void 0&&(mo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,mo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var TE=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,wE=`
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
}`;function v0(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=dE(i.int(1,1073741808)),c=o.minX-Os-Zn,u=o.minZ-Os-Zn,h=Math.ceil((o.maxX-o.minX+2*Os)/Zn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Os)/Zn)+3,p=Array.from({length:h*f},()=>[]);for(let ie=0;ie<r;ie++){let J=Ui(Math.floor((s[ie].x-c)/Zn),0,h-1),he=Ui(Math.floor((s[ie].z-u)/Zn),0,f-1);p[he*h+J].push(ie)}let g=0;function x(ie,J){let he=Math.floor((ie-c)/Zn),ve=Math.floor((J-u)/Zn),we=Math.max(h,f),fe=1/0,Oe=0;for(let Be=0;Be<=we;Be++){for(let Je=ve-Be;Je<=ve+Be;Je++){if(Je<0||Je>=f)continue;let pt=Je===ve-Be||Je===ve+Be?1:2*Be;for(let _t=he-Be;_t<=he+Be;_t+=pt){if(_t<0||_t>=h)continue;let Pt=p[Je*h+_t];for(let wt=0;wt<Pt.length;wt++){let gn=Pt[wt],I=s[gn],ee=I.x-ie,pe=I.z-J,me=ee*ee+pe*pe;me<fe&&(fe=me,Oe=gn)}}}let Ge=Be*Zn;if(fe<=Ge*Ge)break}return g=Math.sqrt(fe),Oe}function m(ie,J,he){let ve=he*he,we=1/0,fe=Ui(Math.floor((ie-he-c)/Zn),0,h-1),Oe=Ui(Math.floor((ie+he-c)/Zn),0,h-1),Be=Ui(Math.floor((J-he-u)/Zn),0,f-1),Ge=Ui(Math.floor((J+he-u)/Zn),0,f-1);for(let Je=Be;Je<=Ge;Je++)for(let lt=fe;lt<=Oe;lt++){let pt=p[Je*h+lt];for(let _t=0;_t<pt.length;_t++){let Pt=s[pt[_t]],wt=Pt.x-ie,gn=Pt.z-J;wt*wt+gn*gn<=ve&&Pt.y<we&&(we=Pt.y)}}return we}let d=Math.ceil(r/4),S=new Float64Array(d*2);for(let ie=0;ie<d;ie++)S[2*ie]=s[ie*4%r].x,S[2*ie+1]=s[ie*4%r].z;function M(ie,J){let he=!1;for(let ve=0,we=d-1;ve<d;we=ve++){let fe=S[2*ve],Oe=S[2*ve+1],Be=S[2*we],Ge=S[2*we+1];Oe>J!=Ge>J&&ie<(Be-fe)*(J-Oe)/(Ge-Oe)+fe&&(he=!he)}return he}let y=o.minX-Os,w=o.minZ-Os,E=Math.ceil((o.maxX-o.minX+2*Os)/fn)+1,v=Math.ceil((o.maxZ-o.minZ+2*Os)/fn)+1,T=new Float32Array(E*v);for(let ie=0;ie<v;ie++)for(let J=0;J<E;J++){let he=y+J*fn,ve=w+ie*fn,we=x(he,ve),fe=g,Oe=s[we],Be=Oe.width*.5,Ge=Oe.y;if(fe<40){let ee=m(he,ve,24);ee<Ge&&(Ge=ee)}let Je=1;if(!M(he,ve)){let ee=fe-Be+(l(he/140+31.7,ve/140-8.2)-.5)*70;Je=1-hr(110,200,ee)}let lt=l(he/260,ve/260),_t=-15+(10+130*Math.pow(x0((lt-.42)/.5),1.5)+6*lt+15)*Je;if(Je>=1){let ee=l(he/90+11.3,ve/90-4.1);_t=Math.max(_t,Ge+6+38*ee)}let Pt=hr(Be+6+12,Be+6+62,fe),wt=Ge-.6,gn=wt+(_t-wt)*Pt,I=Ge+Math.max(0,fe-Be-6-12)*1.2;gn>I&&(gn=I),T[ie*E+J]=gn}let _=null;function b(ie,J){if(_)return _(ie,J);let he=(ie-y)/fn,ve=(J-w)/fn;he=Ui(he,0,E-1.000001),ve=Ui(ve,0,v-1.000001);let we=Math.floor(he),fe=Math.floor(ve),Oe=he-we,Be=ve-fe,Ge=T[fe*E+we],Je=T[fe*E+we+1],lt=T[(fe+1)*E+we],pt=T[(fe+1)*E+we+1],_t=Ge+(Je-Ge)*Oe,Pt=lt+(pt-lt)*Oe;return _t+(Pt-_t)*Be}let A=(ie,J)=>Math.max(Math.abs(b(ie+4,J)-b(ie-4,J)),Math.abs(b(ie,J+4)-b(ie,J-4)))/8,N=(ie,J,he)=>{let ve=x(ie,J);return g>=s[ve].width*.5+6+4+he},B=[],L=[],k=new Float32Array(9),z=(ie,J,he,ve,we,fe,Oe,Be,Ge)=>{let Je=ve-ie,lt=we-J,pt=fe-he,_t=Oe-ie,Pt=Be-J,wt=Ge-he,gn=lt*wt-pt*Pt,I=pt*_t-Je*wt,ee=Je*Pt-lt*_t,pe=Math.hypot(gn,I,ee)||1,me=1-Math.abs(I)/pe;B.push(ie,J,he,ve,we,fe,Oe,Be,Ge),xE((J+we+Be)/3,me,.9+.2*i.next(),a,k,0);for(let ae=0;ae<9;ae++)L.push(k[ae])},Z=E-1,V=v-1,se=new Float32Array(Z*V);for(let ie=0;ie<V;ie++)for(let J=0;J<Z;J++){let he=ie*E+J,ve=(T[he]+T[he+1]+T[he+E]+T[he+E+1])/4;se[ie*Z+J]=Math.floor(ve/h0)*h0}let ye=-4;for(let ie=0;ie<V;ie++)for(let J=0;J<Z;J++){let he=se[ie*Z+J],ve=y+J*fn,we=w+ie*fn,fe=ve+fn,Oe=we+fn;if(he>ye&&(z(ve,he,we,ve,he,Oe,fe,he,we),z(fe,he,we,ve,he,Oe,fe,he,Oe)),J+1<Z){let Be=se[ie*Z+J+1],Ge=Math.min(he,Be),Je=Math.max(he,Be);Je>Ge&&Je>ye&&(z(fe,Ge,we,fe,Je,we,fe,Je,Oe),z(fe,Ge,we,fe,Je,Oe,fe,Ge,Oe))}if(ie+1<V){let Be=se[(ie+1)*Z+J],Ge=Math.min(he,Be),Je=Math.max(he,Be);Je>Ge&&Je>ye&&(z(ve,Ge,Oe,ve,Je,Oe,fe,Je,Oe),z(ve,Ge,Oe,fe,Je,Oe,fe,Ge,Oe))}}_=(ie,J)=>{let he=Ui(Math.floor((ie-y)/fn),0,Z-1),ve=Ui(Math.floor((J-w)/fn),0,V-1);return se[ve*Z+he]};let Q=new xt;Q.setAttribute("position",new at(B,3)),Q.setAttribute("color",new at(L,3)),Q.computeVertexNormals(),Q.computeBoundingSphere();let ge=new rt(Q,new st({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Nt}));ge.receiveShadow=!0;let be=new ct;be.name="environment",be.add(ge);let ce=(o.minX+o.maxX)/2,re=(o.minZ+o.maxZ)/2,oe=new zn(f0,f0,d0,d0);oe.rotateX(-Math.PI/2);let P=oe.attributes.position,G=P.count,$=new Float32Array(G),te=new Float32Array(G);for(let ie=0;ie<G;ie++)$[ie]=P.getX(ie),te[ie]=P.getZ(ie);let le=new rt(oe,new st({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));le.position.set(ce,0,re),be.add(le);let Te=new H(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Fe=new ct,q=new Mt({uniforms:{topColor:{value:new Ae(t.skyTop)},horizonColor:{value:new Ae(t.skyHorizon)},sunColor:{value:new Ae(t.sunColor)},sunDir:{value:Te},night:{value:a?1:0}},vertexShader:TE,fragmentShader:wE,side:Qt,depthWrite:!1,fog:!1}),Ye=new rt(new Rs(p0,32,16),q);if(Ye.renderOrder=-10,Ye.frustumCulled=!1,Fe.add(Ye),a){let J=new Float32Array(1500);for(let we=0;we<500;we++){let fe=i.range(0,Kn),Oe=Math.asin(i.range(.05,.98)),Be=p0*.97;J[we*3]=Be*Math.cos(Oe)*Math.cos(fe),J[we*3+1]=Be*Math.sin(Oe),J[we*3+2]=Be*Math.cos(Oe)*Math.sin(fe)}let he=new xt;he.setAttribute("position",new gt(J,3));let ve=new As(he,new lr({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));ve.frustumCulled=!1,Fe.add(ve)}be.add(Fe);let ke=new oo(t.hemiSky,t.hemiGround,t.hemiIntensity),Le=new Ii(t.sunColor,t.sunIntensity);Le.castShadow=!0,Le.shadow.mapSize.set(2048,2048);let Ce=Le.shadow.camera;Ce.left=-90,Ce.right=90,Ce.top=90,Ce.bottom=-90,Ce.near=1,Ce.far=600,Ce.updateProjectionMatrix(),Le.shadow.bias=-5e-4,be.add(ke,Le,Le.target);let qe=n.fog,Pe=n.background,U=new to(t.fogColor,t.fogDensity),R=new Ae(t.skyHorizon);n.fog=U,n.background=R;let ne=y+(E-1)*fn,xe=w+(v-1)*fn,Me=()=>i.range(y+30,ne-30),de=()=>i.range(w+30,xe-30),He=(ie,J,he)=>{let ve=[];for(let we=0;we<J&&ve.length<ie;we++){let fe=he(Me(),de());fe&&ve.push(fe)}return ve},Re=He(320,4e4,(ie,J)=>{let he=b(ie,J);if(he<4||he>95||!N(ie,J,2)||A(ie,J)>.6)return null;let ve=i.range(.8,1.45);return{x:ie,y:he-.3,z:J,sx:ve,sy:ve*i.range(.9,1.3),sz:ve,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),Ne=He(170,4e4,(ie,J)=>{let he=b(ie,J);if(he<6||he>70||!N(ie,J,1.5)||A(ie,J)>.6)return null;let ve=i.range(.8,1.3);return{x:ie,y:he-.3,z:J,sx:ve,sy:ve*i.range(.9,1.25),sz:ve,ry:i.range(0,Kn),col:16777215,v:i.range(.85,1.15)}}),Ve=He(110,4e4,(ie,J)=>{let he=b(ie,J);if(he<1.8||he>14||!N(ie,J,2)||A(ie,J)>.5)return null;let ve=i.range(.85,1.25);return{x:ie,y:he-.3,z:J,sx:ve,sy:ve,sz:ve,ry:i.range(0,Kn),col:16777215,v:i.range(.9,1.1)}});be.add(Ti(Fs(_E(),.8),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Re)),be.add(Ti(Fs(ME(),.7),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Ne)),be.add(Ti(Fs(bE(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Ve));let _e=He(300,3e4,(ie,J)=>{let he=b(ie,J);if(he<1.5)return null;let ve=i.range(1.2,4.5);return N(ie,J,ve*.6)?{x:ie,y:he+ve*.15,z:J,sx:ve,sy:ve*i.range(.55,.9),sz:ve,ry:i.range(0,Kn),col:i.pick(mE),v:i.range(.85,1.15)}:null}),De=He(3,3e4,(ie,J)=>{if(b(ie,J)>-4)return null;let he=x(ie,J);if(g<s[he].width*.5+200||g>800)return null;let ve=i.range(25,45);return{x:ie,y:.1*ve,z:J,sx:ve,sy:ve*.45,sz:ve,ry:i.range(0,Kn),col:10260344,v:1}});be.add(Ti(Fs(yE(),.42),new st({color:16777215,flatShading:!0,roughness:.95}),_e.concat(De)));let $e=[],Qe=[],D=[],K=i.int(3,5),X=0;for(let ie=0;ie<4e3&&X<K;ie++){let J=Me(),he=de(),ve=x(J,he),we=s[ve].width*.5;if(g<we+25||g>we+80)continue;let fe=b(J,he);if(fe<6||fe>40||A(J,he)>.35)continue;X++;let Oe=i.int(7,12);for(let Be=0;Be<Oe;Be++){let Ge=i.range(0,Kn),Je=Math.sqrt(i.next())*18,lt=J+Math.cos(Ge)*Je,pt=he+Math.sin(Ge)*Je,_t=x(lt,pt);if(g<s[_t].width*.5+6+4+4)continue;let Pt=b(lt,pt);if(Pt<3)continue;let wt=i.range(4,6.5),gn=i.range(3.5,6),I=i.range(4,6.5),ee=i.pick([0,Math.PI/2])+i.range(-.15,.15),pe=Pt-1;if($e.push({x:lt,y:pe,z:pt,ry:ee,sx:wt,sy:gn,sz:I,col:i.pick(pE),v:1}),Qe.push({x:lt,y:pe+gn,z:pt,ry:ee,sx:wt*1.08,sy:i.range(1.8,2.6),sz:I*1.08}),a)for(let me of[-1,1]){let ae=me*wt*.28,ze=I/2+.03;D.push({x:lt+ae*Math.cos(ee)+ze*Math.sin(ee),y:pe+gn*.55,z:pt-ae*Math.sin(ee)+ze*Math.cos(ee),ry:ee})}}}let F=new st({color:16777215,flatShading:!0,roughness:.85}),C=new st({color:11818298,flatShading:!0,roughness:.8});if($e.length){let ie=new bn(1,1,1).translate(0,.5,0),J=Fs(new cn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);be.add(Ti(ie,F,$e),Ti(J,C,Qe))}if(a&&D.length){let ie=new bn(1.2,1.1,.12);be.add(Ti(ie,new Yt({color:16761466}),D,!1))}if(a){let ie=0,J=0,he=!1;for(let ve=0;ve<4e3&&!he;ve++){let we=Me(),fe=de(),Oe=x(we,fe),Be=s[Oe].width*.5;if(g<Be+220||g>Be+420)continue;let Ge=b(we,fe);Ge<6||Ge>30||(ie=we,J=fe,he=!0)}if(he){let ve=[],we=[],fe=i.int(9,13);for(let Oe=0;Oe<fe;Oe++){let Be=ie+i.range(-110,110),Ge=J+i.range(-110,110),Je=b(Be,Ge);if(Je<2)continue;let lt=i.range(6,10),pt=i.range(30,70);ve.push({x:Be,y:Je,z:Ge,sx:lt,sy:pt,sz:lt,col:1777720,v:i.range(.8,1.2)});let _t=i.pick(gE);for(let Pt=0;Pt<3;Pt++){let wt=Pt*Kn/3+i.range(0,.5);we.push({x:Be+Math.cos(wt)*lt*.88,y:Je+pt*.05,z:Ge+Math.sin(wt)*lt*.88,ry:-wt,sy:pt*.9,col:_t,v:1})}}be.add(Ti(new cn(.72,1,1,6).translate(0,.5,0),new st({color:16777215,flatShading:!0,roughness:.7}),ve),Ti(new bn(.5,1,.25).translate(0,.5,0),new Yt({color:16777215}),we,!1))}}{let ie=[],J=[];for(let ve=1;ve<v-1;ve++)for(let we=1;we<E-1;we++){let fe=ve*E+we,Oe=T[fe];if(Oe<2||Oe>30)continue;let Be=x(y+we*fn,w+ve*fn);if(g<s[Be].width*.5+60)continue;(T[fe-1]<0||T[fe+1]<0||T[fe-E]<0||T[fe+E]<0?ie:J).push(fe)}let he=ie.length?ie:J;if(he.length){let ve=i.pick(he),we=ve%E,fe=(ve-we)/E,Oe=new rt(Fs(SE(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.6}));Oe.position.set(y+we*fn,T[ve]-.5,w+fe*fn),Oe.castShadow=!0,be.add(Oe)}}let Y=He(4,2e4,(ie,J)=>{if(b(ie,J)>-3)return null;let he=x(ie,J);return g<s[he].width*.5+250||g>900?null:{x:ie,y:-.2,z:J,ry:i.range(0,Kn),col:16777215,v:1}});Y.length&&be.add(Ti(Fs(EE(),.5),new st({vertexColors:!0,flatShading:!0,roughness:.6}),Y));let O=[],j=[];for(let ie=0;ie<2e4&&O.length<3;ie++){let J=Me(),he=de(),ve=x(J,he);if(g<s[ve].width*.5+60)continue;let we=b(J,he);we<55||O.some(fe=>Math.hypot(fe.x-J,fe.z-he)<200)||O.push({x:J,y:we,z:he,ry:i.range(0,Kn),speed:i.range(.9,1.5),phase:i.range(0,Kn)})}let W=new bn(.7,14,.22).translate(0,7,0),ue=new st({color:15659507,flatShading:!0,roughness:.6}),Se=null;if(O.length){be.add(Ti(new cn(.8,.35,30,6).translate(0,15,0),ue,O));for(let ie of O)j.push(new je().compose(new H(ie.x,ie.y+30,ie.z),new sn().setFromAxisAngle(fE,ie.ry),new H(1,1,1)));Se=new Sn(W,ue,O.length*3),Se.castShadow=!0,be.add(Se)}function Ue(ie){if(Se){for(let J=0;J<O.length;J++){let he=ie*O[J].speed+O[J].phase;for(let ve=0;ve<3;ve++)g0.makeRotationZ(he+ve*Kn/3),m0.multiplyMatrices(j[J],g0),Se.setMatrixAt(J*3+ve,m0)}Se.instanceMatrix.needsUpdate=!0}}Ue(0);function Ie(ie,J,he){Le.position.set(he.x+Te.x*200,he.y+Te.y*200,he.z+Te.z*200),Le.target.position.set(he.x,he.y,he.z),Fe.position.set(he.x,0,he.z);for(let ve=0;ve<G;ve++)P.setY(ve,.35*Math.sin($[ve]*.02+J*.8)+.25*Math.cos(te[ve]*.017-J*.6));P.needsUpdate=!0,Ue(J)}function Ee(){n.remove(be),be.traverse(ie=>{if(ie.geometry&&ie.geometry.dispose(),ie.material){let J=Array.isArray(ie.material)?ie.material:[ie.material];for(let he of J)he.dispose()}}),Le.shadow.map&&Le.shadow.map.dispose(),be.clear(),n.fog===U&&(n.fog=qe??null),n.background===R&&(n.background=Pe??null)}return n.add(be),{group:be,sun:Le,update:Ie,dispose:Ee,heightAt:b}}var hc=[.62,.6,.55],zs=[.5,.49,.45],gf=[.72,.3,.18],_0=[.6,.24,.15],xf=[.16,.2,.28],AE=[.2,.38,.3],M0=[.36,.25,.16],go=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],dr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],xn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function uc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return Ei(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,u=l-1;if(a<s){if(c<0||u<0||c>=e||u>=t)return null;if(!(c===0||u===0||c===e-1||u===t-1))return a===s-1?n:null;let p=c===0||c===e-1?u:c,g=c===0||c===e-1?t:e;return a%3===2&&p%3===1&&p<g-1?xf:a%3===2&&p%3===2&&p<g-1&&xn(c,a,u)>.45?AE:a===0?zs:n}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(c+h)%2?gf:_0:null},.14)}function RE(n){return Ei(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?xf:s===0?zs:n:s===16?n:null;let l=s-17;return i>=l&&i<=6-l&&r>=l&&r<=6-l?(i+r)%2?gf:_0:null},.14)}function CE(n){let r=[];for(let o=0;o<6;o++)r.push([11+(xn(n,o,1)-.5)*9,13+xn(n,o,2)*6,11+(xn(n,o,3)-.5)*9,3.6+xn(n,o,4)*2.4]);return Ei(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return M0;for(let c of r){let u=o-c[0],h=(a-c[1])*1.25,f=l-c[2];if(u*u+h*h+f*f<c[3]*c[3])return go[Math.floor(xn(o,a,l)*go.length)]}return null},.22)}function PE(){return Ei(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?hc:zs:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:zs:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function mf(n,e){let r=e-3-9;return Ei(n,e+2,5,1,(o,a,l)=>{let c=o%22,u=a>=e&&(l===0||l===4);if(a>=e)return u?zs:null;if(a>=e-2)return(o+a+l)%3?hc:zs;if(c<4)return(o+a+l)%4?hc:zs;if(a<r)return null;let h=c-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+l)%3?hc:zs:null},.14)}function IE(n){return Ei(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,l=2.5+(xn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<l*l?go[Math.floor(xn(t,i+n,s)*go.length)]:null},.22)}function LE(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Ei(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?M0:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(xn(i,s,r)*3)]:null},.2)}function y0(n){let r=(a,l)=>{let c=(a-15+.5)/15,u=(l-15+.5)/(30/2),h=Math.hypot(c,u)+(xn(Math.floor(a/3)+n,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),p=14+Math.floor(xn(Math.floor(a/5),n,Math.floor(l/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(xn(n,a,1)-.5)*14),c=Math.floor(15+(xn(n,a,2)-.5)*14);o.push([l,c,r(l,c),dr[Math.floor(xn(n,a,3)*dr.length)],a===0?7:3])}return Ei(30,26,30,1.6,(a,l,c)=>{let u=r(a,c);for(let[p,g,x,m,d]of o){let S=Math.abs(a-p),M=Math.abs(c-g),y=d>3?1:2;if(S<=y&&M<=1&&l>=x&&l<x+d)return l===x+d-2&&S!==y&&M===1?xf:m;if(S<=y&&M<=1-(l-x-d)&&l>=x+d&&l<x+d+2)return gf}if(l>=u)return null;if(l===u-1)return xn(a,5,c)>.75?go[0]:[.36,.56,.2];let h=l%5===0?.86:1,f=.93+.14*xn(Math.floor(a/2),l,Math.floor(c/2));return xn(a,l,c)>.965?go[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function fr(n,e,t){let i=new Sn(n,e,t.length),s=new je,r=new sn,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function DE(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new ii(n);return t.colorSpace=Lt,t.anisotropy=8,t}function b0(n,e,t,i){let s=new ct;s.name="scenery";let r=[],o=()=>{let L=new st({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,k)=>{k.length&&(r.push(L),s.add(fr(L,o(),k)))},l={x:0,y:0,z:0,heading:0},c=n.length,u=L=>!!Ns(n,(L%c+c)%c,"tunnel"),h=L=>n.pts[Math.floor((L%c+c)%c/n.step)%n.pts.length].width,f=(L,k)=>{let z=1/0;for(let Z=0;Z<n.pts.length;Z+=3){let V=n.pts[Z],se=(V.x-L)*(V.x-L)+(V.z-k)*(V.z-k);se<z&&(z=se)}return Math.sqrt(z)},p=(L,k)=>{let z=Math.floor(L/n.step);for(let Z=0;Z<k/n.step;Z+=4)if(Math.abs(n.pts[(z+Z)%n.pts.length].curv)>.004)return!1;return!u(L)&&!u(L+k/2)&&!u(L+k)},g=[[24,22,-1]];for(let L=380;L<c-220&&g.length<4;L+=70)p(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let x=[],m=[],d=[],S=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],M=L=>g.some(([k,z])=>L>k-12&&L<k+z*4+12);for(let[L,k,z]of g)for(let Z=0;Z<k;Z++){let V=L+Z*4,se=z*(h(V)/2+6+.6);zt(n,V,se,l);let ye=l.heading+z*Math.PI/2,Q=Math.sin(l.heading),ge=Math.cos(l.heading),be=-z*ge,ce=z*Q;x.push({x:l.x+be*3.5,y:l.y-.3,z:l.z+ce*3.5,ry:ye});for(let re=0;re<6;re++)for(let oe=0;oe<4;oe++){if(t.next()<.18)continue;let P=-1.6+oe*1.05+t.range(-.15,.15),G=1+re*1,$=l.x+be*G+Q*P,te=l.z+ce*G+ge*P,le=l.y-.3+2.5+re*.8,Te=new Ae(t.pick(S));m.push({x:$,y:le+.4,z:te,ry:l.heading,sx:.5,sy:.8,sz:.36,color:Te}),d.push({x:$,y:le+1,z:te,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new Ae(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:$-be*.12,y:le-.1,z:te-ce*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new Ae(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:$,y:le+1.22,z:te,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new Ae(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:$+Q*.32,y:le+1.05,z:te+ge*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:Te})}}if(a(PE(),x),m.length){let L=new bn(1,1,1);r.push(L);let k=new st({roughness:.85});r.push(k),s.add(fr(L,k,m),fr(L,k,d));let z=x.map(Z=>({x:Z.x,y:Z.y+8.2,z:Z.z,ry:Z.ry,sx:8,sy:.4,sz:4.05,color:new Ae(2303534)}));s.add(fr(L,k,z))}let y=DE(),w=new st({map:y,color:y?16777215:15921128,roughness:.7,side:Nt});r.push(w),y&&r.push(y);let E=new zn(1,1);r.push(E);let v=[],T=(L,k)=>{if(u(L))return;let z=k*(h(L)/2+6-.22);zt(n,L,z,l),v.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(k<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)T(L,-1);for(let L=30;L<110;L+=13)T(L,1);for(let L=400;L<c-80;L+=260)T(L,-1),T(L+13,-1),T(L+120,1);if(v.length){let L=fr(E,w,v);L.castShadow=!1,s.add(L)}let _=[[],[],[]];for(let L=130;L<c-20;L+=t.range(13,28)){if(M(L)||u(L)||u(L+12)||u(L-12))continue;let z=(t.next()<.82?-1:1)*(h(L)/2+6+t.range(3.4,6.5));zt(n,L,z,l);let Z=i?i(l.x,l.z):l.y;Z<1.5||_[t.int(0,2)].push({x:l.x,y:Z-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(_.forEach((L,k)=>a(CE(11+k*7),L)),i){let L=[];for(let se=200;se<c-100;se+=45)for(let ye of[-1,1]){let Q=ye*t.range(70,150);zt(n,se,Q,l);let ge=i(l.x,l.z);ge>l.y+6&&ge>6&&f(l.x,l.z)>55&&L.push({x:l.x,z:l.z,y:ge,score:ge-l.y+t.range(0,4)})}L.sort((se,ye)=>ye.score-se.score);let k=[];for(let se of L){if(k.length>=4)break;k.every(ye=>Math.hypot(ye.x-se.x,ye.z-se.z)>220)&&k.push(se)}let z=[{geo:uc(dr[0],8,7,2),items:[]},{geo:uc(dr[1],10,7,3),items:[]},{geo:uc(dr[2],7,6,2),items:[]},{geo:uc(dr[3],9,8,3),items:[]}],Z=[],V=[];for(let se of k){for(let ye=0;ye<2;ye++){let Q=se.x+t.range(-12,12),ge=se.z+t.range(-12,12);f(Q,ge)<45||(Z.push({x:Q,y:i(Q,ge)-.5,z:ge,ry:t.int(0,3)*Math.PI/2}),V.push([Q,ge]))}for(let ye=0;ye<60&&z.reduce((Q,ge)=>Q+ge.items.length,0)<k.length*22;ye++){let Q=t.range(0,6.28),ge=t.range(8,60),be=se.x+Math.cos(Q)*ge,ce=se.z+Math.sin(Q)*ge,re=i(be,ce);re<3||f(be,ce)<42||V.some(oe=>Math.hypot(oe[0]-be,oe[1]-ce)<12)||(V.push([be,ce]),t.pick(z).items.push({x:be,y:re-.5,z:ce,ry:t.int(0,3)*Math.PI/2}))}}for(let se of z)a(se.geo,se.items);a(RE(dr[2]),Z)}let b=[[],[]];for(let L=115;L<c-10;L+=t.range(4.5,9))if(!u(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let k of[-1,1]){if(t.next()<.35)continue;let z=k*(h(L)/2+6+t.range(1.4,2.6));zt(n,L,z,l),b[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}b.forEach((L,k)=>a(IE(3+k*5),L));let A=[];for(let L=160;L<c-60;L+=t.range(120,220)){let k=t.sign(),z=t.int(5,9);for(let Z=0;Z<z;Z++){let V=L+Z*4.2;if(u(V))continue;zt(n,V,k*(h(V)/2+6+4.2),l);let se=i?i(l.x,l.z):l.y;se<1.5||A.push({x:l.x,y:se-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(LE(),A),i){let L=[[],[],[]],k=[];for(let z=150;z<c-50;z+=t.range(120,220))for(let Z of[-1,1]){if(t.next()<.3)continue;zt(n,z,Z*t.range(72,125),l);let V=i(l.x,l.z);V<1||f(l.x,l.z)<56||k.some(se=>Math.hypot(se[0]-l.x,se[1]-l.z)<70)||(k.push([l.x,l.z]),L[t.int(0,2)].push({x:l.x,y:V-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((z,Z)=>a(y0(17+Z*13),z))}{let L=[],k=[],z=new Ae(12172998),Z=new Ae(7172730);for(let V=0;V<c;V+=4){if(u(V)||M(V))continue;let se=h(V)/2+6-.75;zt(n,V,se,l);let ye=l.x,Q=l.y,ge=l.z,be=l.heading;L.push({x:ye,y:Q+.4,z:ge,ry:be,sx:.12,sy:.8,sz:.12,color:Z}),zt(n,V+4,h(V+4)/2+6-.75,l);let ce=(ye+l.x)/2,re=(Q+l.y)/2,oe=(ge+l.z)/2,P=Math.hypot(l.x-ye,l.z-ge)+.05,G=Math.atan2(l.x-ye,l.z-ge);for(let $ of[.42,.72])k.push({x:ce,y:re+$,z:oe,ry:G,sx:.07,sy:.2,sz:P,color:z})}if(L.length){let V=new bn(1,1,1),se=new st({roughness:.35,metalness:.85});r.push(V,se),s.add(fr(V,se,L),fr(V,se,k))}}if(i){let L=[];for(let V=0;V<400&&L.length<16;V++){let se=t.range(n.bounds.minX-420,n.bounds.maxX+420),ye=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),Q=f(se,ye);i(se,ye)>-3||Q<90||Q>520||L.some(ge=>Math.hypot(ge.x-se,ge.z-ye)<60)||L.push({x:se,y:-.3,z:ye,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let k=[.93,.93,.9],z=[.98,.97,.93],Z=[.55,.36,.2];a(Ei(5,18,14,.7,(V,se,ye)=>{let Q=Math.abs(ye-6.5),ge=Math.abs(V-2);return se<2?ge<=2-(se===0?1:0)-(Q>5?1:0)&&Q<7-(se===0?1:0)?se===1&&ge<2?Z:k:null:V===2&&ye===7?[.3,.26,.22]:V===2&&ye>7&&ye<13&&se<17-(ye-7)*2.6||V===2&&ye<7&&ye>1&&se<14-(7-ye)*2.4?z:null},.06),L)}{zt(n,0,0,l);let L=l.x,k=l.y,z=l.z,Z=l.heading,V=Math.sin(Z),se=Math.cos(Z),ye=-se,Q=V,ge=(ce,re,oe)=>f(ce,re)>oe,be=!1;for(let ce of[430,500,380,580,660]){for(let re of[70,130,0,-70,190,-140]){if(be)break;let oe=L+V*ce+ye*re,P=z+se*ce+Q*re;if(!ge(oe,P,85))continue;let G=i?Math.max(-2,i(oe,P)):k;a(y0(101),[{x:oe,y:G-3,z:P,ry:Z+.6,s:2.3}]);let $=oe-V*95-ye*30,te=P-se*95-Q*30;if(ge($,te,45)&&ge($+ye*90,te+Q*90,40)&&ge($-ye*90,te-Q*90,40)){let le=i?Math.max(-1,i($,te)):k;a(mf(198,24),[{x:$,y:Math.min(le,k)-5,z:te,ry:Z}])}be=!0}if(be)break}}for(let L of[1,-1]){let k=!0;for(let Z of[210,270,330,390])zt(n,Z,L*62,l),f(l.x,l.z)<46&&(k=!1);if(!k||L<0)continue;zt(n,300,L*62,l);let z=i?i(l.x,l.z):l.y;a(mf(198,22),[{x:l.x,y:z-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let N=-1,B=-1/0;for(let L=300;L<c-300;L+=40){let k=Math.floor(L/n.step),z=0;for(let V=0;V<60;V+=6)z+=Math.abs(n.pts[(k+V)%n.pts.length].curv);let Z=-z*400+t.range(0,1)-(u(L)||u(L+100)?100:0);Z>B&&(B=Z,N=L)}if(N>0)for(let L of[1,-1]){zt(n,N+90,L*95,l);let k=i?i(l.x,l.z):l.y;if(k<2)continue;a(mf(198,20),[{x:l.x,y:Math.min(k,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function NE(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function S0(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let v=0;v<e;v++){let T=Math.max(0,v-1),_=Math.min(e-1,v+1),b=i[_]-i[T],A=r[_]-r[T],N=Math.hypot(b,A)||1e-9;o[v]=b/N,a[v]=A/N,l[v]=(s[_]-s[T])/N}let c=new Float64Array(e);for(let v=1;v<e-1;v++){let T=-a[v],_=o[v];c[v]=((o[v+1]-o[v-1])*T+(a[v+1]-a[v-1])*_)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let u=NE(c,12),h=new Float64Array(e);for(let v=0;v<e;v++)h[v]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[v]))));for(let v=e-2;v>=0;v--)h[v]=Math.min(h[v],Math.sqrt(h[v+1]**2+80*t));for(let v=1;v<e;v++)h[v]=Math.min(h[v],Math.sqrt(h[v-1]**2+40*t));let f=new Array(e),p=1/0,g=-1/0,x=1/0,m=-1/0,d=1/0,S=0;for(let v=0;v<e;v++){let T=Math.hypot(1,l[v]);f[v]={s:v*t,x:i[v],y:s[v],z:r[v],tx:o[v]/T,ty:l[v]/T,tz:a[v]/T,rx:-a[v],rz:o[v],width:n.width,curv:u[v],vmax:h[v],slope:l[v]},i[v]<p&&(p=i[v]),i[v]>g&&(g=i[v]),r[v]<x&&(x=r[v]),r[v]>m&&(m=r[v]);let _=1/Math.max(1e-9,Math.abs(u[v]));_<d&&(d=_),Math.abs(l[v])>S&&(S=Math.abs(l[v]))}let M=[],y=[];for(let v of n.features)v.type==="tunnel"?M.push({type:"tunnel",s0:v.s0,s1:v.s1,name:v.name}):y.push({s0:v.s0,s1:v.s1,name:v.name});let w=(e-1)*t,E=0;for(let v=0;v<e;v++)E+=t/Math.max(5,h[v]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||w,w),length:w,step:t,count:e,pts:f,features:M,bridges:y,bounds:{minX:p,maxX:g,minZ:x,maxZ:m},stats:{minRadius:d,maxSlope:S,lapTimeEstimate:E,corners:0}}}var E0=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function UE(n,e,t,i=null){let s=[],r=n.length,o=i?i.s0:0,a=i?i.s1:r,l=f=>{if(i&&Number.isFinite(f.s)&&Number.isFinite(f.dist))return{dist:f.dist,q:n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))]};let p=1/0,g=0;for(let x=0;x<n.count;x+=5){let m=n.pts[x],d=(m.x-f.x)**2+(m.z-f.z)**2;d<p&&(p=d,g=x)}return{dist:Math.sqrt(p),q:n.pts[g]}},c={},u=(f,p)=>(c[f]=(c[f]||0)+1)<=(i?1:p),h=e.places.map(f=>({p:f,n:l(f)})).filter(f=>f.n.dist<1600&&f.n.q.s>150&&f.n.q.s<r-150).sort((f,p)=>f.n.dist-p.n.dist);for(let{p:f,n:p}of h)s.some(g=>g.x!==void 0&&Math.hypot(g.x-f.x,g.z-f.z)<250)||(f.kind==="castle"?/^torre/i.test(f.name)?u("torre",2)&&s.push({prop:"torre",x:f.x,z:f.z,height:48,label:f.name}):/castel|rocca|forte|fort/i.test(f.name)&&u("castello",3)&&s.push({prop:"castello",x:f.x,z:f.z,width:170,label:f.name}):f.kind==="place"&&(f.rank==="village"||f.rank==="town"||f.rank===void 0)&&(t(f.x,f.z)-p.q.y>120&&p.dist>250?u("borgo",3)&&s.push({prop:"borgo",x:f.x,z:f.z,width:300}):p.dist>90&&p.dist<450&&u("chiesa",3)&&s.push({prop:"chiesa",x:f.x,z:f.z,width:46})));for(let f=900,p=0;f<r-600;f+=1300,p++){if(f<o||f>=a)continue;let g=n.pts[Math.round(f/n.step)];for(let x of[1,-1]){let m=x*560;if(t(g.x+g.rx*m,g.z+g.rz*m)<=0&&t(g.x+g.rx*m*1.3,g.z+g.rz*m*1.3)<=0)p%2===0&&s.push({prop:"peschereccio",s:f,d:m+p%3*40*x,width:34,sea:!0});else if(p%2===1){let d=x*78,S=t(g.x+g.rx*d,g.z+g.rz*d);S>1&&Math.abs(S-g.y)<14&&s.push({prop:"agrumeto",s:f,d,width:70})}}}return s}function vf(n){return n._geo||(n._geo=pf(n.cells,1)),n._geo}function T0({track:n,data:e,baked:t,heightAt:i,clearance:s,range:r=null,unit:o=!1}){let a=new ct;a.name="real-props";let l=[],c=[];if(!t)return{group:a,placed:l,skipped:c,dispose(){}};let u=new Yn({vertexColors:!0}),h=new Map,f=n.length,p=r?Math.max(0,Math.floor((r.s0-2500)/n.step)):0,g=r?Math.min(n.count,Math.ceil((r.s1+2500)/n.step)):n.count,x=(m,d)=>{let S=1/0,M=p;for(let y=p;y<g;y+=2){let w=n.pts[y],E=(w.x-m)**2+(w.z-d)**2;E<S&&(S=E,M=y)}return{q:n.pts[M],dist:Math.sqrt(S)}};for(let m of UE(n,e,i,r)){let d=t[m.prop];if(!d?.cells?.length)continue;let S=d._ext;if(!S){let A=[1/0,1/0,1/0],N=[-1/0,-1/0,-1/0];for(let B=0;B<d.cells.length;B+=4)for(let L=0;L<3;L++)A[L]=Math.min(A[L],d.cells[B+L]),N[L]=Math.max(N[L],d.cells[B+L]+1);S=d._ext=[N[0]-A[0],N[1]-A[1],N[2]-A[2]]}let M=m.height?m.height/S[1]:m.width/Math.max(S[0],S[2]),y=Math.hypot(S[0],S[2])*M/2,w,E;if(m.x!==void 0)w=m.x,E=m.z;else{let A=n.pts[Math.max(0,Math.min(n.count-1,Math.round(m.s/n.step)))];w=A.x+A.rx*m.d,E=A.z+A.rz*m.d}let v=x(w,E);if(v.dist-y<s){if(m.x===void 0||v.dist<1){c.push(m.prop+" : trop pr\xE8s de la route");continue}let A=(y+s+2)/v.dist;if(w=v.q.x+(w-v.q.x)*A,E=v.q.z+(E-v.q.z)*A,v=x(w,E),v.dist-y<s){c.push(m.prop+" : trop pr\xE8s de la route");continue}}let T;if(m.sea){if(i(w,E)>0){c.push(m.prop+" : pas en mer");continue}T=-.12*M*S[1]}else{T=1/0;for(let[A,N]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])T=Math.min(T,i(w+A*y*.6,E+N*y*.6));T=Math.max(T,.2)-.5}let _;if(o)_=vf(d);else{let A=m.prop+"@"+M.toFixed(3);_=h.get(A),_||h.set(A,_=pf(d.cells,M))}let b=new rt(_,u);o&&b.scale.setScalar(M),b.name="prop-"+m.prop,b.position.set(w,T,E),b.rotation.y=Math.atan2(v.q.x-w,v.q.z-E),b.updateMatrix(),b.matrixAutoUpdate=!1,a.add(b),l.push({prop:m.prop,label:m.label||null,s:v.q.s,dist:v.dist,x:w,y:T,z:E,size:M})}return{group:a,placed:l,skipped:c,dispose(){u.dispose();for(let m of h.values())m.dispose()}}}var FE=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function fc(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null,lower:r=.2}={}){let{cell:o,ix:a,iz:l,h:c,c:u}=n,h=a.length,f=1/0,p=-1/0,g=1/0,x=-1/0;for(let Q=0;Q<h;Q++)a[Q]<f&&(f=a[Q]),a[Q]>p&&(p=a[Q]),l[Q]<g&&(g=l[Q]),l[Q]>x&&(x=l[Q]);let m=n.hx||[],d=n.hz||[],S=n.hh||[];for(let Q=0;Q<m.length;Q++)m[Q]<f&&(f=m[Q]),m[Q]>p&&(p=m[Q]),d[Q]<g&&(g=d[Q]),d[Q]>x&&(x=d[Q]);let M=h?p-f+1:0,y=h?x-g+1:0,w=new Float32Array(M*y).fill(NaN),E=new Float32Array(M*y).fill(NaN),v=(Q,ge)=>Q<f||Q>p||ge<g||ge>x?-1:(Q-f)*y+(ge-g),T={get(Q){if(Q<0)return;let ge=w[Q];return ge===ge?ge:void 0}},_=new Float32Array(h);for(let Q=0;Q<m.length&&h;Q++){let ge=(m[Q]-f)*y+(d[Q]-g);E[ge]=S[Q]/10,w[ge]=Math.floor(S[Q]/10/e)*e}let b=0;for(let Q=0;Q<h;Q++){let ge=(a[Q]-f)*y+(l[Q]-g);_[Q]=Math.floor(c[Q]/10/e)*e,w[ge]=_[Q],E[ge]=c[Q]/10,c[Q]/10>t&&(b+=2)}let A=y+1,N=new Float32Array((M+1)*A);for(let Q=0;Q<=M;Q++)for(let ge=0;ge<=y;ge++){let be=0,ce=0,re=1/0;for(let P=Q-1;P<=Q;P++)if(!(P<0||P>=M))for(let G=ge-1;G<=ge;G++){if(G<0||G>=y)continue;let $=E[P*y+G];$===$&&(be+=$,ce++,$<re&&(re=$))}let oe=ce?be/ce:0;N[Q*A+ge]=ce?oe-(oe-re)*r+i:0}let B=new Float32Array(b*9),L=new Float32Array(b*9),k=new Float32Array(b*9),z=0,Z=[0,0,0],V=(Q,ge,be,ce,re,oe,P,G,$,te,le,Te)=>{let Fe=ce-Q,q=re-ge,Ye=oe-be,ke=P-Q,Le=G-ge,Ce=$-be,qe=q*Ce-Ye*Le,Pe=Ye*ke-Fe*Ce,U=Fe*Le-q*ke,R=Math.hypot(qe,Pe,U)||1;qe/=R,Pe/=R,U/=R,B[z]=Q,B[z+1]=ge,B[z+2]=be,B[z+3]=ce,B[z+4]=re,B[z+5]=oe,B[z+6]=P,B[z+7]=G,B[z+8]=$;for(let ne=0;ne<9;ne+=3)L[z+ne]=qe,L[z+ne+1]=Pe,L[z+ne+2]=U,k[z+ne]=te,k[z+ne+1]=le,k[z+ne+2]=Te;z+=9};for(let Q=0;Q<h;Q++){if(c[Q]/10<=t)continue;FE(u[Q],Z),s&&s(Z,(a[Q]+.5)*o,(l[Q]+.5)*o,_[Q]);let ge=a[Q]-f,be=l[Q]-g,ce=N[ge*A+be],re=N[ge*A+be+1],oe=N[(ge+1)*A+be],P=N[(ge+1)*A+be+1],G=a[Q]*o,$=l[Q]*o,te=G+o,le=$+o,Te=.94+.12*((a[Q]*73856093^l[Q]*19349663)>>>0)/4294967295,Fe=Z[0]*Te,q=Z[1]*Te,Ye=Z[2]*Te,ke=.93;Math.abs(ce-P)<=Math.abs(re-oe)?(V(G,ce,$,G,re,le,te,P,le,Fe,q,Ye),V(G,ce,$,te,P,le,te,oe,$,Fe*ke,q*ke,Ye*ke)):(V(G,ce,$,G,re,le,te,oe,$,Fe,q,Ye),V(G,re,le,te,P,le,te,oe,$,Fe*ke,q*ke,Ye*ke))}let se=new xt;return se.setAttribute("position",new gt(B,3)),se.setAttribute("normal",new gt(L,3)),se.setAttribute("color",new gt(k,3)),se.computeBoundingSphere(),{geo:se,heights:T,key:v,q:_,surfaceAt:(Q,ge)=>{let be=Q/o-f,ce=ge/o-g,re=Math.floor(be),oe=Math.floor(ce);if(re<0||re>=M||oe<0||oe>=y||E[re*y+oe]!==E[re*y+oe])return;let P=be-re,G=ce-oe,$=N[re*A+oe],te=N[re*A+oe+1],le=N[(re+1)*A+oe],Te=N[(re+1)*A+oe+1];return($*(1-G)+te*G)*(1-P)+(le*(1-G)+Te*G)*P}}}function xo(n,e,t){let i=new Sn(n,e,t.length),s=new je,r=new sn,o=new H,a=new H,l=new H(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function w0(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new ii(e);return i.colorSpace=Lt,i.anisotropy=8,i}var yf=.12,OE=8200,BE=3,zE=1,kE=5,HE=2,vo=new Map;function A0(n,e){if(!vo.has(e)){let t=fetch(`${n}c${String(e).padStart(3,"0")}.json`).then(i=>{if(!i.ok)throw new Error("tuile indisponible : "+e);return i.json()}).then(i=>(vo.set(e,i),i));t.catch(()=>vo.delete(e)),vo.set(e,t)}return Promise.resolve(vo.get(e))}function _f(n,e,t,i=1){let s=Math.max(0,Math.min(e.chunks-1,Math.floor(t/e.chunk))),r=[];for(let o=Math.max(0,s-1);o<=Math.min(e.chunks-1,s+i);o++)r.push(A0(n,o));return Promise.all(r)}function VE(n,e,t){let i=n.step,s=e*i,r=t*i,o=[];for(let l=e;l<=t;l++)o.push({...n.pts[l],s:(l-e)*i});let a=[];for(let l of n.features)l.type!=="tunnel"||l.s1<=s||l.s0>=r||a.push({type:"tunnel",name:l.name,s0:Math.max(l.s0,s)-s,s1:Math.min(l.s1,r)-s,cutStart:l.s0<s,cutEnd:l.s1>r});return{seed:n.seed+":"+e,open:!0,noStart:!0,length:(o.length-1)*i,step:i,count:o.length,pts:o,features:a,bridges:[]}}function R0(n,e,t,i,{base:s="assets/v3/world/",baked:r=null,rng:o,far:a=null}={}){let l=new ct;l.name="environment";let c=[],u=F=>(c.push(F),F),h=e.length,f=e.step,p=i.width/2,g=p+6+2,x=i.chunk,m=i.chunks,d=Math.round(x/f),S=new rt(u(new zn(6e4,6e4)),u(new st({color:t.seaColor,roughness:.16,metalness:.1}))),M=u0(S.material);S.rotation.x=-Math.PI/2,S.position.y=.05,S.name="real-sea",l.add(S);let y=new H(...t.sunDir).normalize(),w=u(new Mt({side:Qt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Ae(t.skyTop)},uHor:{value:new Ae(t.skyHorizon)},uSun:{value:new Ae(t.sunColor)},uSunDir:{value:y}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),E=new rt(u(new Rs(OE,32,16)),w);E.renderOrder=-10,E.frustumCulled=!1,l.add(E);let v=n.fog,T=n.background;n.fog=new to(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new Ae(t.skyHorizon);let _=new oo(t.hemiSky,t.hemiGround,t.hemiIntensity),b=new Ii(t.sunColor,t.sunIntensity);b.castShadow=!0,b.shadow.mapSize.set(2048,2048);let A=b.shadow.camera;A.left=-90,A.right=90,A.top=90,A.bottom=-90,A.near=1,A.far=500,b.shadow.bias=-5e-4,l.add(_,b,b.target);let N=null;function B(F){if(N||!F)return;let C=new Ae(t.skyHorizon),Y=fc(F,60,{tint:(O,j,W,ue)=>{let Se=ue>2300?.5:0,Ue=.55;O[0]=(O[0]+(1-O[0])*Se)*(1-Ue)+C.r*Ue,O[1]=(O[1]+(1-O[1])*Se)*(1-Ue)+C.g*Ue,O[2]=(O[2]+(1-O[2])*Se)*(1-Ue)+C.b*Ue}}).geo;N=new rt(u(Y),u(new Yt({vertexColors:!0,fog:!1,side:Nt}))),N.name="real-terrain-far",N.scale.setScalar(yf),N.frustumCulled=!1,N.renderOrder=-5,l.add(N)}a?B(a):typeof fetch=="function"&&fetch(s+"far.json").then(F=>F.ok?F.json():null).then(F=>{Me||B(F)}).catch(()=>{});let L=u(new bn(1,1,1)),k=F=>{let C=F.index?F.toNonIndexed():F;return C.computeVertexNormals(),u(C)},z=k(new Pi(Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0)),Z=k(new Pi(.5,1,6,1).translate(0,.5,0)),V=k(new cn(.22,.5,1,7,1).translate(0,.5,0)),se=k(new Si(.5,0).translate(0,.5,0)),ye=k(new cn(.4,.5,1,5,1).translate(0,.5,0)),Q=fo(u(new st({vertexColors:!0,roughness:.95,metalness:0,side:Nt})),1,1),ge=fo(u(new st({vertexColors:!0,roughness:1,side:Nt})),8,.7),be=c0(fo(u(new st({roughness:.9})),1.5,.8)),ce=u(new st({roughness:.85})),re=u(new Yn),oe=u(new Yn),P=fo(u(new st({roughness:.9})),.8,.6),G=u(new st({roughness:.35,metalness:.85})),$=u(new Yn),te=u(new zn(1,1)),le=(F,C,Y)=>{let O=Math.sin(F*127.1+C*311.7+Y*74.7)*43758.5453;return O-Math.floor(O)},Te=[2910768,2910768,3503416,15231644,15920356].map(F=>new Ae(F)),Fe=[15983808,15321498,16117730,14924172,14472128,15784368,13620956].map(F=>new Ae(F)),q=[11884346,11030070,14275268,13222064,9390646].map(F=>new Ae(F)),Ye=new Ae(12170925),ke=new Ae(10131343),Le=new Ae(12764876),Ce=new Ae(8225160),qe=new Ae(7031346);if(r)for(let F of Object.values(r))F?.cells?.length&&vf(F);let Pe=60,U=new Map;for(let F=0;F<e.count;F+=3){let C=e.pts[F],Y=Math.floor(C.x/Pe)*100003+Math.floor(C.z/Pe),O=U.get(Y);O||U.set(Y,O=[]),O.push(C)}let R=(F,C,Y,O)=>{let j=null,W=Math.max(Y,O)+g;for(let ue=Math.floor((F-W)/Pe);ue<=Math.floor((F+W)/Pe);ue++)for(let Se=Math.floor((C-W)/Pe);Se<=Math.floor((C+W)/Pe);Se++){let Ue=U.get(ue*100003+Se);if(Ue)for(let Ie of Ue){let Ee=Math.max(0,Math.abs(Ie.x-F)-Y),ie=Math.max(0,Math.abs(Ie.z-C)-O);Ee*Ee+ie*ie<g*g&&(j===null||Ie.y<j)&&(j=Ie.y)}}return j},ne=F=>!!Ns(e,Math.max(0,Math.min(h-1,F)),"tunnel"),xe=new Map,Me=!1,de={built:0,freed:0,worstStep:0,worstBy:[0,0,0,0,0,0,0,0,0,0],buildings:0,trees:0,props:[]},He=10;function Re(F,C){for(let Y of xe.values()){if(!Y.near)continue;let O=Y.near.heights.get(Y.near.key(Math.floor(F/10),Math.floor(C/10)));if(O!==void 0)return O}for(let Y of xe.values()){if(!Y.mid)continue;let O=Y.mid.heights.get(Y.mid.key(Math.floor(F/80),Math.floor(C/80)));if(O!==void 0)return O-3}return-5}function Ne(F,C){let Y=[],O=J=>(Y.push(J),J),j=F.group,W=C.s0,ue=Math.min(C.s1,h),Se=Math.round(W/f),Ue=Math.min(e.count-1,Math.round(ue/f)),Ie=o.fork("tuile:"+F.i),Ee={x:0,y:0,z:0,heading:0},ie={x:0,y:0,z:0,heading:0};return F.own=Y,[()=>{F.near=fc(C.near,1);let J=new rt(O(F.near.geo),Q);J.receiveShadow=!0,J.name="real-terrain-near",j.add(J)},()=>{F.mid=fc(C.mid,4,{yOffset:-3});let J=new rt(O(F.mid.geo),ge);J.name="real-terrain-mid",j.add(J)},...[0,1,2,3].map(J=>()=>{let he=Se+Math.round((Ue-Se)*J/4),ve=Se+Math.round((Ue-Se)*(J+1)/4);if(ve<=he)return;let we=oc(VE(e,he,ve),t,Ie.fork("route"+J));j.add(we.group),F.roads.push(we)}),()=>{let J=C.buildings,he=[],ve=[],we=[];for(let fe=0;fe<J.x.length;fe++){let Oe=J.l[fe]>0?Math.min(J.l[fe],9):1+Math.floor(Ie.next()*3)+(J.w[fe]*J.d[fe]>300?1:0),Be=Oe*3.1,Ge=Re(J.x[fe],J.z[fe]);Ge<-4&&(Ge=J.y[fe]),Ge=Math.max(Ge,.3);let Je=R(J.x[fe],J.z[fe],J.w[fe]/2+.3,J.d[fe]/2+.3);if(Je!==null){let pt=Je-3.2-Ge;if(pt<3)continue;Be>pt&&(Be=pt)}he.push({x:J.x[fe],y:Ge+Be/2-.5,z:J.z[fe],sx:J.w[fe],sy:Be+1,sz:J.d[fe],color:Ie.pick(Fe)});let lt=Ie.pick(q);Oe<=3&&J.w[fe]*J.d[fe]<260&&Je===null?we.push({x:J.x[fe],y:Ge+Be,z:J.z[fe],sx:J.w[fe]+.8,sy:1.6+.12*Math.min(J.w[fe],J.d[fe]),sz:J.d[fe]+.8,color:lt}):ve.push({x:J.x[fe],y:Ge+Be+.35,z:J.z[fe],sx:J.w[fe]+.6,sy:.7,sz:J.d[fe]+.6,color:lt})}if(F.stats.buildings=he.length,he.length){let fe=xo(L,be,he);fe.name="real-buildings",fe.castShadow=!0,fe.frustumCulled=!0,fe.computeBoundingSphere(),j.add(fe),Y.push(fe);for(let[Oe,Be]of[[L,ve],[z,we]]){if(!Be.length)continue;let Ge=xo(Oe,ce,Be);Ge.name="real-roofs",Ge.frustumCulled=!0,Ge.computeBoundingSphere(),j.add(Ge),Y.push(Ge)}}},()=>{let J=C.trees,he=[],ve=[],we=[],fe=[],Oe=new Ae;for(let Be=0;Be<J.x.length;Be++){let Ge=J.x[Be],Je=J.z[Be];if(R(Ge,Je,2.5,2.5)!==null)continue;let lt=J.r[Be]/1e3,pt=J.y[Be]-.4,_t=.75+.5*lt,Pt=lt*40;if(J.k[Be])if(lt<.55){let wt=8+6*lt;ve.push({x:Ge,y:pt,z:Je,ry:Pt,sx:2.4,sy:wt,sz:2.4,color:Oe.setRGB(.1*_t,.26*_t,.13*_t).clone()})}else{let wt=6+5*lt;he.push({x:Ge,y:pt,z:Je,ry:Pt,sx:.8,sy:wt+.3,sz:.8,color:qe}),we.push({x:Ge,y:pt+wt,z:Je,ry:Pt,sx:7.5,sy:2.6,sz:7.5,color:Oe.setRGB(.14*_t,.34*_t,.16*_t).clone()})}else{let wt=3.4+2.6*lt;he.push({x:Ge,y:pt,z:Je,ry:Pt,sx:.7,sy:2,sz:.7,color:qe}),fe.push({x:Ge,y:pt+1.5,z:Je,ry:Pt,sx:wt,sy:wt*.85,sz:wt,color:Oe.setRGB(.3*_t,.44*_t,.2*_t).clone()})}}F.stats.trees=ve.length+we.length+fe.length;for(let[Be,Ge,Je,lt]of[[he,ye,oe,"real-trunks"],[ve,Z,re,"real-trees"],[we,V,re,"real-trees"],[fe,se,re,"real-trees"]]){if(!Be.length)continue;let pt=xo(Ge,Je,Be);pt.name=lt,pt.frustumCulled=!0,pt.computeBoundingSphere(),j.add(pt),Y.push(pt)}},()=>{let J=[],he=[],ve=[],we=[];for(let fe of e.bridges)if(!(fe.s1<=W||fe.s0>=ue)){for(let Oe=fe.s0+6;Oe<fe.s1-2;Oe+=34){if(Oe<W||Oe>=ue)continue;zt(e,Oe,0,Ee);let Be=Re(Ee.x,Ee.z),Ge=Ee.y-1.6-Be;Ge<3||(J.push({x:Ee.x,y:Be+Ge/2,z:Ee.z,ry:Ee.heading,sx:p*1.5,sy:Ge,sz:2.4,color:ke}),J.push({x:Ee.x,y:Ee.y-1.2,z:Ee.z,ry:Ee.heading,sx:p*2+5,sy:1.2,sz:3.6,color:Ye}))}for(let Oe=fe.s0;Oe<fe.s1;Oe+=8)if(!(Oe<W||Oe>=ue)){for(let Be of[-1,1])zt(e,Oe+4,Be*(p+6+.4),Ee),he.push({x:Ee.x,y:Ee.y-.9,z:Ee.z,ry:Ee.heading,sx:.9,sy:1.8,sz:8.3,color:Ye});zt(e,Oe+4,0,Ee),he.push({x:Ee.x,y:Ee.y-1.25,z:Ee.z,ry:Ee.heading,sx:p*2+12,sy:.9,sz:8.3,color:ke})}}for(let fe=W;fe<ue&&fe<h-4;fe+=4)if(!ne(fe))for(let Oe of[-1,1]){let Be=Oe*(p+6-.7);zt(e,fe,Be,Ee),zt(e,fe+4,Be,ie),ve.push({x:Ee.x,y:Ee.y+.4,z:Ee.z,ry:Ee.heading,sx:.12,sy:.8,sz:.12,color:Ce});let Ge=Math.hypot(ie.x-Ee.x,ie.z-Ee.z)+.05,Je=Math.atan2(ie.x-Ee.x,ie.z-Ee.z);for(let lt of[.42,.72])we.push({x:(Ee.x+ie.x)/2,y:(Ee.y+ie.y)/2+lt,z:(Ee.z+ie.z)/2,ry:Je,sx:.07,sy:.2,sz:Ge,color:Le})}for(let[fe,Oe,Be,Ge]of[[J,P,"real-piers",!0],[he,P,"real-decks",!1],[ve,G,"real-rail-posts",!1],[we,G,"real-rails",!1]]){if(!fe.length)continue;let Je=xo(L,Oe,fe);Je.name=Be,Je.castShadow=Ge,Je.frustumCulled=!0,Je.computeBoundingSphere(),j.add(Je),Y.push(Je)}},()=>{for(let he of i.signs){if(he.s<W||he.s>=ue)continue;let ve=w0([he.name,""]),we=O(new Yt({map:ve,color:ve?16777215:817731,side:Nt}));ve&&O(ve),zt(e,he.s,p+6+2.2,Ee);let fe=new rt(te,we);fe.scale.set(7.5,2.8,1),fe.position.set(Ee.x,Ee.y+5.2,Ee.z),fe.rotation.y=Ee.heading+Math.PI,fe.name="real-sign";let Oe=new rt(L,G);Oe.scale.set(.3,5.2,.3),Oe.position.set(Ee.x,Ee.y+2.2,Ee.z),j.add(fe,Oe)}let J=[];for(let he=Math.max(60,W);he<ue&&he<h-20;he+=Ie.range(5,11)){if(ne(he)||e.bridges.some(we=>he>we.s0-4&&he<we.s1+4))continue;if(Ie.next()<.25){he+=Ie.range(15,50);continue}let ve=Ie.next()<.5?-1:1;zt(e,he,ve*(p+6+Ie.range(1.2,2.4)),Ee),J.push({x:Ee.x,y:Ee.y-.6,z:Ee.z,ry:Ie.range(0,6.28),sx:Ie.range(1.8,3),sy:Ie.range(1.6,2.6),sz:Ie.range(1.8,3),color:Ie.pick(Te)})}if(J.length){let he=xo(se,$,J);he.castShadow=!0,he.name="real-oleanders",he.frustumCulled=!0,he.computeBoundingSphere(),j.add(he),Y.push(he)}if(r){let he=T0({track:e,data:C,baked:r,heightAt:Re,clearance:g,range:{s0:W,s1:ue},unit:!0});j.add(he.group),Y.push(he),F.stats.props=he.placed}}]}function Ve(F){if(xe.has(F)||F<0||F>=m)return;let C={i:F,state:"loading",group:new ct,own:[],steps:null,near:null,mid:null,roads:[],stats:{buildings:0,trees:0,props:[]}};C.group.name="tuile-"+F,xe.set(F,C);let Y=j=>{Me||xe.get(F)!==C||(C.steps=Ne(C,j),C.state="building",l.add(C.group))},O=vo.get(F);O&&typeof O.then!="function"?Y(O):A0(s,F).then(Y).catch(()=>{xe.get(F)===C&&xe.delete(F)})}function _e(F){let C=He-F.steps.length,Y=F.steps.shift(),O=typeof performance<"u"?performance.now():0;Y();let j=(typeof performance<"u"?performance.now():0)-O;j>de.worstStep&&(de.worstStep=j),j>de.worstBy[C]&&(de.worstBy[C]=Math.round(j)),F.steps.length||(F.state="ready",de.built++)}function De(F){l.remove(F.group);for(let C of F.roads)C.dispose?.();for(let C of F.own)C.isInstancedMesh?C.dispose():C.dispose?.();xe.delete(F.i),de.freed++}function $e(F){let C=Math.max(0,Math.min(m-1,Math.floor(F/x)));for(let Y=Math.max(0,C-1);Y<=Math.min(m-1,C+1);Y++){Ve(Y);let O=xe.get(Y);for(;O&&O.steps&&O.steps.length;)_e(O)}}let Qe=0,D=new H;function K(F,C,Y,O=0){E.position.set(Y.x,0,Y.z),S.position.x=Y.x,S.position.z=Y.z,M.value=C,b.position.copy(Y).addScaledVector(y,200),b.target.position.copy(Y),N&&(D.copy(Y),N.position.set(D.x*(1-yf),-2,D.z*(1-yf)));let j=Math.max(0,Math.min(m-1,Math.floor(O/x)));for(let ue=j-zE;ue<=j+BE;ue++)Ve(ue);for(let ue of Array.from(xe.values()))(ue.i<j-HE||ue.i>j+kE)&&De(ue);Qe+=1;let W=null;for(let ue of xe.values())ue.state==="building"&&(!W||Math.abs(ue.i-j)<Math.abs(W.i-j))&&(W=ue);W&&(Qe>=3||Math.abs(W.i-j)<=1)&&(Qe=0,_e(W));for(let ue of xe.values())for(let Se of ue.roads)Se.update?.(F,C)}function X(){Me=!0;for(let F of Array.from(xe.values()))De(F);n.remove(l),n.fog&&n.fog!==v&&(n.fog=v||null),n.background=T||null;for(let F of c)F.dispose?.()}return n.add(l),{group:l,sun:b,update:K,dispose:X,heightAt:Re,prime:$e,chunks:xe,stats:de,readyAround(F){let C=Math.floor(F/x),Y=xe.get(C);return!!Y&&Y.state==="ready"}}}var GE=[-5,0,5],dc=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],C0=[0,0,0,0,0,1,1,2,3,3],WE=.45,XE=1,qE=1.5,YE=12,$E=5,ZE=3,KE=5;function P0({rng:n,count:e=22,density:t=1}={}){let i=[];for(let h=0;h<e;h++)i.push({id:h,type:dc[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(h,f,p=30,g=30){let x=0;for(let m of i)m!==f&&m.s>h-p&&m.s<h+g&&(x|=1<<m.lane);return x}function a(h,f){let p=dc[C0[n.int(0,C0.length-1)]],g=o(f,h,45,45),x=p.lanes.filter(d=>!(g&1<<d));return([0,1,2].filter(d=>g&1<<d).length>=2||!x.length)&&(f+=60,x=p.lanes),h.type=p,h.lane=x[n.int(0,x.length-1)],h.d=GE[h.lane]+n.range(-.35,.35),h.cruise=h.speed=n.range(p.v[0],p.v[1]),h.color=n.int(0,7),h.s=f,h.passed=!1,h.hitT=0,f}function l(h,f=350){let p=h+f;for(let g of i)p=a(g,p)+n.range(70,190)/t;r=!0}function c(h,f,p){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,d=0,S=1/0;for(let M of i){if(M===x||M.lane===x.lane)continue;let y=M.s-x.s;y>-8&&y<45&&(d|=1<<M.lane,M.speed<S&&(S=M.speed))}d===(7&~(1<<x.lane))&&(m=Math.min(m,S-.5));for(let M of i){if(M===x||M.lane!==x.lane)continue;let y=M.s-x.s-(M.type.len+x.type.len)/2;y>0&&y<25&&(m=Math.min(m,M.speed))}x.speed+=(m-x.speed)*Math.min(1,h*1.5),x.s+=x.speed*h,x.hitT>0&&(x.hitT-=h),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of p){let m=x.state;for(let d of i){let S=m.s-d.s,M=m.d-d.d,y=d.type.len/2+XE,w=d.type.w/2+WE;if(Math.abs(S)<y&&Math.abs(M)<w){if(d.hitT<=0||x.isPlayer){let E=M!==0?Math.sign(M):m.d<d.d?-1:1;m.d=d.d+E*(w+.05),m.speed>d.speed*.95&&(m.speed=Math.max(d.speed*.9,m.speed*.5),m.boostT=0,d.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:d})))),d.hitT=1.2}x.isPlayer&&(d.passed=!0)}else if(x.isPlayer&&!d.passed&&S>y&&(d.passed=!0,Math.abs(M)<w+qE&&m.speed-d.speed>YE)){s.nearMisses++,s.combo++,s.comboT=$E,s.meter++;let E=!1;s.meter>=ZE&&(s.meter=0,m.boostCharges<KE&&(m.boostCharges+=1,E=!0)),s.events.push({type:"near",vehicle:d,combo:s.combo,boost:E})}}}s.comboT>0&&(s.comboT-=h,s.comboT<=0&&(s.combo=0))}function u(h){for(let f of i)f.s+=h}return Object.assign(s,{update:c,reset:l,shift:u})}var bf="wss://tracker.openwebtorrent.com",I0=[{urls:"stun:stun.cloudflare.com:3478"}],jE=4,JE=25e3,L0=()=>{let n=crypto.getRandomValues(new Uint8Array(20)),e="";for(let t of n)e+=String.fromCharCode(t);return e},Mf=n=>Array.from(n,e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("");async function QE(n){let e=new TextEncoder().encode("polygon-rush/v3/"+String(n).trim()),t=new Uint8Array(await crypto.subtle.digest("SHA-1",e)),i="";for(let s of t)i+=String.fromCharCode(s);return i}function D0(n){return n.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{let t=setTimeout(e,2500);n.addEventListener("icegatheringstatechange",()=>{n.iceGatheringState==="complete"&&(clearTimeout(t),e())})})}async function pc(n,{onPeer:e,onLeave:t,onMessage:i,onStatus:s,maxPeers:r=7}={}){let o=r,a=await QE(n),l=L0(),c=Mf(l),u=new Map,h=new Map,f=null,p=null,g=!1,x=0,m=v=>s?.(v);function d(v,T,_){let b=u.get(v);if(b&&b.ch.readyState==="open"){try{T.close()}catch{}return}let A={id:v,pc:T,ch:_,send(B){_.readyState==="open"&&_.send(JSON.stringify(B))}};u.set(v,A),_.onmessage=B=>{let L;try{L=JSON.parse(B.data)}catch{return}L&&typeof L=="object"&&i?.(A,L)};let N=()=>{u.get(v)===A&&(u.delete(v),t?.(A));try{T.close()}catch{}};_.onclose=N,T.addEventListener("connectionstatechange",()=>{["failed","closed","disconnected"].includes(T.connectionState)&&N()}),e?.(A)}function S(v,T,_){T.readyState==="open"?d(_,v,T):T.onopen=()=>d(_,v,T)}async function M(){let v=[];for(let T=0;T<jE&&u.size+T<o;T++){let _=new RTCPeerConnection({iceServers:I0}),b=_.createDataChannel("jeu",{ordered:!1,maxRetransmits:0});_._ch=b,await _.setLocalDescription(await _.createOffer()),await D0(_);let A=L0();h.set(A,_),setTimeout(()=>{if(h.get(A)===_){h.delete(A);try{_.close()}catch{}}},5e4),v.push({offer_id:A,offer:{type:"offer",sdp:_.localDescription.sdp}})}return v}async function y(v){if(!f||f.readyState!==1)return;let T=u.size<o?await M():[];if(!f||f.readyState!==1)return;let _={action:"announce",info_hash:a,peer_id:l,numwant:T.length,uploaded:0,downloaded:0,left:1,offers:T};v&&(_.event=v),f.send(JSON.stringify(_))}async function w(v){let T;try{T=JSON.parse(v)}catch{return}if(!(!T||T.info_hash!==a)){if(T["failure reason"]){m("Le tracker refuse : "+T["failure reason"]);return}if(T.peer_id!==l){if(T.offer&&T.peer_id&&T.offer_id){let _=Mf(T.peer_id);if(u.has(_)||u.size>=o)return;let b=new RTCPeerConnection({iceServers:I0});b.ondatachannel=A=>S(b,A.channel,_);try{await b.setRemoteDescription(T.offer),await b.setLocalDescription(await b.createAnswer()),await D0(b),f?.send(JSON.stringify({action:"announce",info_hash:a,peer_id:l,to_peer_id:T.peer_id,offer_id:T.offer_id,answer:{type:"answer",sdp:b.localDescription.sdp}}))}catch{try{b.close()}catch{}}}else if(T.answer&&T.offer_id){let _=h.get(T.offer_id);if(!_)return;h.delete(T.offer_id);let b=Mf(T.peer_id);if(u.has(b)){try{_.close()}catch{}return}S(_,_._ch,b);try{await _.setRemoteDescription(T.answer)}catch{try{_.close()}catch{}}}}}}function E(){g||(m("Connexion au tracker\u2026"),f=new WebSocket(bf),f.onopen=()=>{x=0,m("En attente d'autres joueurs"),y("started"),clearInterval(p),p=setInterval(()=>y(),JE)},f.onmessage=v=>{typeof v.data=="string"&&w(v.data)},f.onclose=()=>{clearInterval(p),!g&&(m("Tracker injoignable, nouvel essai\u2026"),setTimeout(E,Math.min(15e3,2e3*2**x++)))},f.onerror=()=>{})}return E(),{id:c,peers:u,broadcast(v){let T=JSON.stringify(v);for(let _ of u.values())_.ch.readyState==="open"&&_.ch.send(T)},stopAnnouncing(){clearInterval(p);try{f?.close()}catch{}g=!0},leave(){g=!0,clearInterval(p);try{f?.close()}catch{}for(let v of u.values())try{v.pc.close()}catch{}for(let v of h.values())try{v.close()}catch{}u.clear(),h.clear()}}}function N0(){let n=null,e=0,t=null;return{get known(){return!!n},get age(){return n?(performance.now()-e)/1e3:1/0},push(i,s){!Number.isFinite(i.g)||!Number.isFinite(i.d)||!Number.isFinite(i.v)||(n={g:i.g,d:Math.max(-14,Math.min(14,i.d)),v:Math.max(0,Math.min(140,i.v)),l:+i.l||0,y:+i.y||0,b:!!i.b},e=s)},sample(i,s){if(!n)return null;let r=Math.min(.5,Math.max(0,(i-e)/1e3)),o={g:n.g+n.v*r,d:n.d,v:n.v,l:n.l,y:n.y,b:n.b};if(!t||Math.abs(t.g-o.g)>60)t={...o};else{let a=Math.min(1,s*10);t.g+=t.v*s+(o.g-(t.g+t.v*s))*a,t.d+=(o.d-t.d)*a,t.v+=(o.v-t.v)*a,t.l+=(o.l-t.l)*a,t.y+=(o.y-t.y)*a,t.b=o.b}return t}}}var ma=[[14885934,2312392],[2005987,15921906],[3129179,1053720],[15902491,1776411],[10178016,15921906],[15751836,1776411],[2279360,1776411],[15921906,14885934]];function yo(n){return String(n||"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,14)||"Pilote"}function Sf(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}var mc=15e3;function Ef(n){if(!n||typeof n!="object")return null;let e=Sf(n.id);return e.length<4?null:{id:e,name:String(n.name||"").replace(/[^\p{L}\p{N} _.'!-]/gu,"").trim().slice(0,24)||"Partie",host:yo(n.host),players:Math.max(1,Math.min(8,Math.floor(Number(n.players))||1)),locked:!!n.locked,started:!!n.started,stage:Math.max(1,Math.min(99,Math.floor(Number(n.stage))||1))}}function Tf(n,e){let t=!1;for(let[i,s]of n)e-s.seen>mc&&(n.delete(i),t=!0);return t}var B0={name:"ECDSA",namedCurve:"P-256"},z0={name:"ECDSA",hash:"SHA-256"},U0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",k0=new TextEncoder,F0=n=>{let e="";for(let t of new Uint8Array(n))e+=String.fromCharCode(t);return btoa(e)},O0=n=>Uint8Array.from(atob(String(n)),e=>e.charCodeAt(0));async function H0(n){let e=new Uint8Array(await crypto.subtle.digest("SHA-256",n)),t="";for(let i=0;i<12;i++)t+=U0[e[i]%U0.length];return t}async function V0(){let n=await crypto.subtle.generateKey(B0,!1,["sign","verify"]),e=await crypto.subtle.exportKey("raw",n.publicKey);return{id:await H0(e),pub:F0(e),sign:async t=>F0(await crypto.subtle.sign(z0,n.privateKey,k0.encode(t)))}}async function ga(n,e,t,i){try{let s=O0(e);if(s.length!==65||typeof i!="string"||i.length>200||await H0(s)!==n)return!1;let r=await crypto.subtle.importKey("raw",s,B0,!1,["verify"]);return await crypto.subtle.verify(z0,r,O0(i),k0.encode(t))}catch{return!1}}var wf=n=>["partie",n.id,n.name,n.host,n.players,n.locked?1:0,n.started?1:0,n.stage,n.seq].join("|"),Af=(n,e)=>["fermee",n,e].join("|"),Rf=(n,e)=>["hote",n,e].join("|");var eT=15;async function G0(n,e,{onChange:t,onStart:i,onStatus:s,password:r="",roomKey:o=null}={}){let a=!!o,l=String(n).toUpperCase(),c=Promise.resolve(null),u=new Map,h=yo(e),f=null,p=0,g=()=>t?.(),x=await pc("partie/"+String(n).toUpperCase()+(r?"/"+r:""),{onStatus:s,onPeer(d){u.set(d.id,{id:d.id,name:"Pilote",remote:N0(),finished:!1,finishTime:null,gone:!1,peer:d}),c.then(S=>d.send(S?{t:"hi",name:h,pub:o.pub,sig:S}:{t:"hi",name:h})),f&&d.send({t:"busy"}),g()},onLeave(d){let S=u.get(d.id);S&&(f?S.gone=!0:u.delete(d.id),g())},onMessage(d,S){let M=u.get(d.id);M&&(S.t==="hi"?(M.name=yo(S.name),g(),S.pub&&S.sig&&ga(l,String(S.pub),Rf(l,d.id),String(S.sig)).then(y=>{y&&(M.creator=!0,g())})):S.t==="s"?M.remote.push(S,performance.now()):S.t==="fin"&&Number.isFinite(S.time)?(M.finished=!0,M.finishTime=S.time,g()):S.t==="start"&&!f&&d.id===m.hostId?(f={stage:Math.max(1,Math.floor(Number(S.stage))||1)},x.stopAnnouncing(),i?.(f)):S.t==="busy"&&(M.busy=!0,g()))}});a&&(c=o.sign(Rf(l,x.id)).catch(()=>null));let m={code:n,locked:!!r,id:x.id,name:h,players:u,get started(){return f},get peerCount(){return x.peers.size},get hostId(){if(a)return x.id;for(let S of u.values())if(S.creator&&!S.gone)return S.id;let d=x.id;for(let S of u.keys())S<d&&(d=S);return d},get isHost(){return m.hostId===x.id},roster(){let d=[{id:x.id,name:h,me:!0},...Array.from(u.values()).filter(S=>!S.busy)];return d.sort((S,M)=>S.id<M.id?-1:1),d.map((S,M)=>({...S,color:ma[M%ma.length][0],accent:ma[M%ma.length][1]}))},start(d){return f||!m.isHost?!1:(f={stage:d},x.broadcast({t:"start",stage:d}),x.stopAnnouncing(),!0)},sendState(d,S,M){d-p<1e3/eT||(p=d,x.broadcast({t:"s",g:Math.round(S*100)/100,d:Math.round(M.d*100)/100,v:Math.round(M.speed*100)/100,l:Math.round((M.lean||0)*1e3)/1e3,y:Math.round((M.yaw||0)*1e3)/1e3,b:M.boostT>0?1:0}))},sendFinish(d){x.broadcast({t:"fin",time:d})},leave(){x.leave()}};return m}var tT=4e3,W0=60,nT=5*6e4,iT=5;async function X0({onChange:n,onStatus:e}={}){let t=new Map,i=new Map,s=null,r=!1,o=()=>performance.now(),a=()=>{r||n?.()},l=({seen:x,...m})=>({...m,age:Math.max(0,Math.round(o()-x))});async function c(x,m){let d=Ef(m),S=Number(m?.seq),M=Number(m?.age);if(!d||!Number.isSafeInteger(S)||!Number.isFinite(M)||M<0||M>mc||s&&d.id===s.data.id)return;let y=t.get(d.id);if((y?y.seq>=S:t.size>=W0)||Math.abs(Date.now()-S)>nT)return;let w={...d,seq:S,pub:String(m.pub||""),sig:String(m.sig||"")};if(!await ga(d.id,w.pub,wf(w),w.sig)){i.set(x.id,(i.get(x.id)||0)+1);return}let E=t.get(d.id);E&&E.seq>=S||(t.set(d.id,{...w,seen:o()-M}),a())}let u=await pc("annuaire",{maxPeers:12,onStatus:e,onPeer(x){x.send({t:"rooms",list:h()}),a()},onLeave(x){i.delete(x.id),a()},async onMessage(x,m){if(!((i.get(x.id)||0)>=iT)){if(m.t==="rooms"&&Array.isArray(m.list))for(let d of m.list.slice(0,W0))await c(x,d);else if(m.t==="gone"&&typeof m.id=="string"){let d=t.get(m.id),S=Number(m.seq);d&&Number.isSafeInteger(S)&&S>d.seq&&await ga(d.id,d.pub,Af(d.id,S),String(m.sig||""))&&(t.delete(m.id),u.broadcast({t:"gone",id:m.id,seq:S,sig:m.sig}),a())}}}});function h(){let x=Array.from(t.values()).filter(m=>o()-m.seen<=mc).map(l);return s?.signed&&x.push({...s.signed,age:0}),x}async function f(){if(!s)return;let x=s,m={...x.data,seq:Date.now(),pub:x.key.pub};m.sig=await x.key.sign(wf(m)),s===x&&(x.signed=m)}let p=setInterval(async()=>{Tf(t,o())&&a(),await f(),r||u.broadcast({t:"rooms",list:h()})},tT);async function g(){if(!s)return;let x=Date.now()+1,m={t:"gone",id:s.data.id,seq:x,sig:await s.key.sign(Af(s.data.id,x))};u.broadcast(m)}return{get peers(){return u.peers.size},list(){return Tf(t,o()),Array.from(t.values()).sort((x,m)=>x.started-m.started||m.seen-x.seen)},async advertise(x,m){let d=Ef({...x,id:m.id});!d||s&&JSON.stringify(s.data)===JSON.stringify(d)||(s={key:m,data:d,signed:s?.signed||null},await f(),r||u.broadcast({t:"rooms",list:h()}))},async retire(){s&&(await g(),s=null)},close(){if(r)return;let x=()=>{r=!0,clearInterval(p),u.leave()};s?g().then(x,x):x()}}}var q0="polygon-rush-name",li=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),sT=n=>"#"+n.toString(16).padStart(6,"0"),gc="width:min(70vw,15em);font-size:2.6vmin;letter-spacing:0.04em;text-transform:none";async function Y0(n,e){let t="";try{t=localStorage.getItem(q0)||""}catch{}let i=()=>{},s="Connexion au tracker\u2026",r=null;try{r=await X0({onChange:()=>i(),onStatus:a=>{s=a,i()}})}catch(a){return console.warn("Annuaire indisponible :",a),null}let o=()=>(i=()=>{},r.close(),null);for(;;){let a=await n({initial:1,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Multijoueur \xB7 ${li(e.title)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-name-in">Pseudo</label>
    <div class="pr-seedbox"><input id="pr-name-in" class="pr-input" type="text" value="${li(t)}" maxlength="14" autocomplete="off" spellcheck="false" data-nav data-name style="${gc}"></div>
  </div>
  <div class="pr-frame pr-slide" style="--i:2;width:min(92vw,46em)"><div class="pr-frame-in">
    <h3 class="pr-h3">Parties ouvertes</h3>
    <p class="pr-cmds" data-status></p>
    <ol class="pr-slist" data-rooms style="max-height:34vh;overflow:auto"></ol>
  </div></div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="create">Cr\xE9er une partie</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:4">Liaison directe entre joueurs : votre adresse IP est visible des autres joueurs, du tracker (${li(bf.replace("wss://",""))}) et du serveur STUN de Cloudflare.</p>
</section>`,onMount(v){i=()=>{let T=v.querySelector("[data-rooms]");if(!T)return;let _=r.list(),b=r.peers,A=`${b} autre${b>1?"s":""} joueur${b>1?"s":""} dans le lobby`;v.querySelector("[data-status]").textContent=_.length?`${_.length} partie${_.length>1?"s":""} annonc\xE9e${_.length>1?"s":""} \xB7 ${A}`:b?`Aucune partie pour l'instant \xB7 ${A}`:s,T.innerHTML=_.map(N=>`<li style="display:flex;align-items:center;gap:.8em"><span style="flex:1;text-align:left">${N.locked?"\u{1F512} ":""}<b>${li(N.name)}</b> <small>\xB7 ${li(N.host)}</small></span><span>${N.players}/8</span>`+(N.started?'<span style="opacity:.6;min-width:7em;text-align:right">en course</span>':`<button type="button" class="pr-btn pr-btn-small" data-act="join" data-id="${li(N.id)}" data-locked="${N.locked?1:0}" data-room="${li(N.name)}">Rejoindre</button>`)+"</li>").join("")},i()},actions:{back:(v,T)=>T(null),create:(v,T)=>T({create:!0,name:v.closest(".pr-screen").querySelector("[data-name]").value}),join:(v,T)=>T({join:v.dataset.id,locked:v.dataset.locked==="1",room:v.dataset.room,name:v.closest(".pr-screen").querySelector("[data-name]").value})}});if(i=()=>{},!a)return o();let l=yo(a.name);t=l;try{localStorage.setItem(q0,l)}catch{}let c,u,h="",f=!1,p=null;if(a.create){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Nouvelle partie</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-room-in">Nom de la partie</label>
    <div class="pr-seedbox"><input id="pr-room-in" class="pr-input" type="text" value="${li("Partie de "+l)}" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-room style="${gc}"></div>
  </div>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe (laisser vide pour une partie publique)</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${gc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Ouvrir la partie</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:4">Une partie publique peut \xEAtre rejointe par tous ceux qui la voient dans le lobby.<br>Une partie priv\xE9e appara\xEEt avec un cadenas : il faut son mot de passe pour y entrer.</p>
</section>`,actions:{back:(T,_)=>_(null),ok:(T,_)=>{let b=T.closest(".pr-screen");_({room:b.querySelector("[data-room]").value,pass:b.querySelector("[data-pass]").value.trim()})}}});if(!v)continue;p=await V0(),c=p.id,u=v.room,h=v.pass,f=!0}else if(c=Sf(a.join),u=a.room,a.locked){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">\u{1F512} ${li(u)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe de la partie</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${gc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:2">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Entrer</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
</section>`,actions:{back:(T,_)=>_(null),ok:(T,_)=>_({pass:T.closest(".pr-screen").querySelector("[data-pass]").value.trim()})}});if(!v)continue;h=v.pass}let g=null,x=null,m="Connexion au tracker\u2026",d=1;try{g=await G0(c,l,{password:h,roomKey:p,onChange:()=>i(),onStatus:v=>{m=v,i()},onStart:v=>x?.({stage:v.stage})})}catch(v){console.warn("Partie indisponible :",v);continue}let S=performance.now(),M=e.stages.map((v,T)=>`<option value="${T+1}">${T+1} \xB7 ${li(v.subtitle)}</option>`).join(""),y=()=>{p&&r.advertise({name:u,host:l,players:g.roster().length,locked:!!h,started:!!g.started,stage:d},p)},w=null,E=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">${h?"\u{1F512} Partie priv\xE9e":"Partie publique"}</p>
  <div class="pr-logo pr-slide" style="--i:1;font-size:.45em"><span class="pr-logo-b">${li(u)}</span></div>
  <p class="pr-cmds pr-slide" style="--i:2" data-status></p>
  <ol class="pr-slist pr-slide" style="--i:3;min-width:min(80vw,26em)" data-list></ol>
  <div class="pr-seedrow pr-slide" style="--i:4" data-hostrow>
    <label class="pr-lbl" for="pr-from-mp">D\xE9part</label>
    <div class="pr-seedbox"><select id="pr-from-mp" class="pr-input" data-nav data-from style="width:min(86vw,34em);font-size:2.3vmin;letter-spacing:0.04em;text-align:left;text-transform:none">${M}</select></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:5">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="start" data-start>D\xE9part</button>
    <button type="button" class="pr-btn" data-nav data-act="quit">Quitter</button>
  </div>
</section>`,onMount(v,T){if(x=T,g.started){T({stage:g.started.stage});return}i=()=>{let _=v.querySelector("[data-list]");if(!_)return;let b=g.roster(),A=g.hostId;_.innerHTML=b.map(k=>`<li${k.me?' class="pr-me"':""}><span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${sT(k.color)};margin-right:.6em"></span><span>${li(k.name)}${k.me?" (vous)":""}</span><b>${k.id===A?"h\xF4te":""}</b></li>`).join("");let N=b.length<2,B;N?f?B=h?"Partie priv\xE9e ouverte \xB7 donnez le mot de passe \xE0 vos amis":"Partie ouverte \xB7 visible dans le lobby":performance.now()-S>15e3?B=h?"Personne ici : mot de passe incorrect, ou la partie est ferm\xE9e":"Personne ici : la partie est peut-\xEAtre ferm\xE9e":B=m:B=`${b.length} joueurs`+(g.isHost?" \xB7 \xE0 vous de lancer la course":" \xB7 l'h\xF4te lance la course"),v.querySelector("[data-status]").textContent=B,d=Number(v.querySelector("[data-from]").value)||1;let L=v.querySelector("[data-start]");L.style.display=g.isHost?"":"none",L.disabled=N,L.style.opacity=N?"0.45":"",v.querySelector("[data-hostrow]").style.display=g.isHost?"":"none",y()},i(),v.querySelector("[data-from]").addEventListener("change",()=>i()),w=setInterval(()=>i(),3e3)},actions:{quit:(v,T)=>T(null),start:(v,T)=>{if(!g.isHost||g.roster().length<2)return;let _=Number(v.closest(".pr-screen").querySelector("[data-from]").value)||1;g.start(_)&&T({stage:_})}}});if(clearInterval(w),i=()=>{},x=null,!E){await r.retire(),g.leave();continue}return p?y():r.close(),{session:g,stage:E.stage,directory:p?r:null}}}var rT=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function ks(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,u,h,f=1,p=1,g=1,x=0,m=0]of n){let d=(S,M)=>{let y=M[S*3+1]>0,w=M[S*3+2];return[o+M[S*3]*c/2,a+M[S*3+1]*u/2,l+w*h/2-(y?w>0?x:-m:0)]};for(let[S,M,y,w]of s){let E=d(0,w),v=d(1,w),T=d(2,w),_=(v[1]-E[1])*(T[2]-E[2])-(v[2]-E[2])*(T[1]-E[1]),b=(v[2]-E[2])*(T[0]-E[0])-(v[0]-E[0])*(T[2]-E[2]),A=(v[0]-E[0])*(T[1]-E[1])-(v[1]-E[1])*(T[0]-E[0]),N=Math.hypot(_,b,A)||1,B=_*S+b*M+A*y<0?-1:1;_*=B/N,b*=B/N,A*=B/N;for(let L of[0,1,2,0,2,3])e.push(...d(L,w)),t.push(_,b,A),i.push(f,p,g)}}let r=new xt;return r.setAttribute("position",new at(e,3)),r.setAttribute("normal",new at(t,3)),r.setAttribute("color",new at(i,3)),r}var xc=[.12,.16,.22],oT=[.07,.07,.08],vc=[.95,.08,.06],yc=[1,.95,.75],aT=[.86,.87,.88],lT=[.2,.21,.23];function _c(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...oT]);return s}function cT(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...vc],[t/2-.3,.75,s-.02,.4,.22,.08,...vc],[-t/2+.3,.7,r+.02,.4,.2,.08,...yc],[t/2-.3,.7,r+.02,.4,.2,.08,...yc]];if(n.id==="car")return[ks([[0,.62,0,t,.64,e,1,1,1,.35,.12],[0,1.4,-.33,t*.8,.08,e*.52-.95]]),ks([[0,1.13,-.25,t*.86,.5,e*.52,...xc,.55,.4],..._c(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[ks([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1,1,1,1,.25,0]]),ks([[0,1.75,r-.62,t*.92,.7,1,...xc,.5,0],..._c(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[ks([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),ks([[0,2.2,0,t*1.01,1.15,e*.985,...xc],..._c(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[ks([[0,1.75,r-a/2,t,2.5,a,1,1,1,.3,0]]),ks([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...aT],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...lT],[0,2.35,r-.36,t*.92,.85,.85,...xc,.2,0],..._c(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...vc],[t/2-.3,1,s-.02,.4,.25,.08,...vc],[-t/2+.3,.9,r+.02,.4,.2,.08,...yc],[t/2-.3,.9,r+.02,.4,.2,.08,...yc]])]}function $0(n,e){let t=new ct;t.name="traffic";let i=new Map(dc.map(h=>[h.id,cT(h)])),s=rT.map(h=>new Yn({color:h})),r=new Yn({vertexColors:!0}),o=[];for(let h=0;h<e;h++){let f=new ct,p=new rt(i.get("car")[0],s[0]),g=new rt(i.get("car")[1],r);p.castShadow=!0,g.castShadow=!0,f.add(p,g),f.visible=!1,t.add(f),o.push({g:f,body:p,detail:g,type:null,color:-1})}n.add(t);let a={};function l(h,f,p){for(let g=0;g<o.length;g++){let x=o[g],m=h.vehicles[g],d=m?m.s-p:1e9;if(!m||d<-120||d>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[S,M]=i.get(m.type.id);x.body.geometry=S,x.detail.geometry=M}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),zt(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let h of o)h.g.visible=!1}function u(){n.remove(t);for(let[h,f]of i.values())h.dispose(),f.dispose();for(let h of s)h.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:u}}var Z0="polygon-rush-v3-records",uT=new Set(["rally","rain"]);function K0(){try{let n=globalThis.localStorage?.getItem(Z0),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function Mc(n){try{return globalThis.localStorage?.setItem(Z0,JSON.stringify(n)),!0}catch{return!1}}function Cf(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function j0(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?Cf(e):e.toFixed(1).replace(".",'"')}`}function J0(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function Q0(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}function eg(n){return n.filter(e=>!uT.has(e.id))}function tg(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let p=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(p),!0}function u(f,p,g=9){l(),f.length&&(s=f.slice(0,3),r=p,o=a=g,e.textContent="",s.forEach((x,m)=>{let d=document.createElement("button");d.type="button",d.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let S=M=>String(M).replace(/[&<>]/g,y=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[y]);d.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${S(x.icon||"")} ${S(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${S(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${S(x.con)}</div>`,d.addEventListener("click",()=>c(m)),e.appendChild(d)}),e.style.display="flex",t.style.display="block")}function h(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:u,pick:c,update:h,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var bc=class extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Kf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ls.extractUrlBase(e);o=Ls.resolveURL(c,this.path)}else o=Ls.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ta(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===og){try{o[yt.KHR_BINARY_GLTF]=new jf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[yt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new sd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case yt.KHR_MATERIALS_UNLIT:o[h]=new Nf;break;case yt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Jf(r,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:o[h]=new Qf;break;case yt.KHR_MESH_QUANTIZATION:o[h]=new ed;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function hT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Df=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ae(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],En);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ii(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Dl(u),c.distance=h;break;case"spot":c=new ao(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,is(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Nf=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,i){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],En),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ff=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}},Of=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Bf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],En)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Lt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},kf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],En),Promise.all(r)}},Vf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Gf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],En),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Lt)),Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Xf=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Yf=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$f=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zf=class{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},Kf=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ci.TRIANGLES&&c.mode!==ci.TRIANGLE_STRIP&&c.mode!==ci.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let x=new je,m=new H,d=new sn,S=new H(1,1,1),M=new Sn(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(m,d,S));for(let y in l)if(y==="_COLOR_0"){let w=l[y];M.instanceColor=new or(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Bt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},og="glTF",xa=12,ng={JSON:1313821514,BIN:5130562},jf=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xa,r=new DataView(e,xa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ng.JSON){let c=new Uint8Array(e,xa+o,a);this.content=i.decode(c)}else if(l===ng.BIN){let c=xa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=nd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=nd[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],p=_o[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(p)},a,c,En,f)})})}},Qf=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ed=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},Sc=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,p=f*h,g=e*c,x=g-c,m=-2*p+3*f,d=p-f,S=1-m,M=d-f+h;for(let y=0;y!==a;y++){let w=o[x+y+a],E=o[x+y+l]*u,v=o[g+y+a],T=o[g+y]*u;r[y]=S*w+M*E+m*v+d*T}return r}},fT=new sn,td=class extends Sc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return fT.fromArray(r).normalize().toArray(r),r}},ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ig={9728:Kt,9729:On,9984:Fh,9985:Go,9986:zr,9987:ti},sg={33071:$i,33648:$o,10497:In},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dT={CUBICSPLINE:void 0,LINEAR:Zr,STEP:$r},If={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),n.DefaultMaterial}function pr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function is(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function gT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xT(n){let e,t=n.extensions&&n.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lf(t.attributes):e=n.indices+":"+Lf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Lf(n.targets[i]);return e}function Lf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function id(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yT=new je,sd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Ll(this.options.manager):this.textureLoader=new Nl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ta(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return pr(r,a,s),is(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ls.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Pf[s.type],a=_o[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new gt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Pf[s.type],c=_o[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==h){let d=Math.floor(f/p),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,M=t.cache.get(S);M||(x=new c(a,d*p,s.count*p/u),M=new no(x,p/u),t.cache.add(S,M)),m=new rr(M,l,f%p/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new gt(x,l,g);if(s.sparse!==void 0){let d=Pf.SCALAR,S=_o[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new S(o[1],M,s.sparse.count*d),E=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,T=w.length;v<T;v++){let _=w[v];if(m.setX(_,E[v*l]),l>=2&&m.setY(_,E[v*l+1]),l>=3&&m.setZ(_,E[v*l+2]),l>=4&&m.setW(_,E[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=ig[f.magFilter]||On,u.minFilter=ig[f.minFilter]||ti,u.wrapS=sg[f.wrapS]||In,u.wrapT=sg[f.wrapT]||In,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Kt&&u.minFilter!==On,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new ln(x);m.needsUpdate=!0,f(m)}),t.load(Ls.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),is(h,o),h.userData.mimeType=o.mimeType||vT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[yt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new lr,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new ws,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return st}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){let h=s[yt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],En),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Lt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Nt);let u=r.alphaMode||If.OPAQUE;if(u===If.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===If.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let h=r.emissiveFactor;a.emissive=new Ae().setRGB(h[0],h[1],h[2],En)}return r.emissiveTexture!==void 0&&o!==Yt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),is(h,r),t.associations.set(h,{materials:e}),r.extensions&&pr(s,h,r),h})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return rg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=xT(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=rg(new xt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?pT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p],m=o[p],d,S=c[p];if(m.mode===ci.TRIANGLES||m.mode===ci.TRIANGLE_STRIP||m.mode===ci.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Sl(x,S):new rt(x,S),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ci.TRIANGLE_STRIP?d.geometry=df(d.geometry,kl):m.mode===ci.TRIANGLE_FAN&&(d.geometry=df(d.geometry,ra));else if(m.mode===ci.LINES)d=new ar(x,S);else if(m.mode===ci.LINE_STRIP)d=new so(x,S);else if(m.mode===ci.LINE_LOOP)d=new Al(x,S);else if(m.mode===ci.POINTS)d=new As(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&gT(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),is(d,r),m.extensions&&pr(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&pr(s,h[0],r),h[0];let f=new ct;r.extensions&&pr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(lm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Es(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),is(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new El(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],x=h[3],m=h[4],d=[];for(let S=0,M=f.length;S<M;S++){let y=f[S],w=p[S],E=g[S],v=x[S],T=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let _=i._createAnimationTracks(y,w,E,v,T);if(_)for(let b=0;b<_.length;b++)d.push(_[b])}return new Il(r,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,yT)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ea:c.length>1?u=new ct:c.length===1?u=c[0]:u=new Bt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),is(u,r),r.extensions&&pr(i,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new ct;i.name&&(r.name=s.createUniqueName(i.name)),is(r,i),i.extensions&&pr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof Mn||f instanceof ln)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Hs[r.path]===Hs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Hs[r.path]){case Hs.weights:c=ji;break;case Hs.rotation:c=Ji;break;case Hs.position:case Hs.scale:c=Qi;break;default:i.itemSize===1?c=ji:c=Qi;break}let u=s.interpolation!==void 0?dT[s.interpolation]:Zr,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Hs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=id(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ji?td:Sc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _T(n,e,t){let i=e.attributes,s=new ni;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let u=id(_o[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=id(_o[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function rg(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=nd[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return mt.workingColorSpace!==En&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),is(n,e),_T(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mT(n,e.targets,t):n})}var Vs={hi:null,lo:null},MT=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL"],bT=[["legR","legL"],["thighR","thighL","shinR","shinL"]];async function rd(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=MT.filter(a=>!i[a]);if(bT.some(a=>a.every(l=>i[l]))||r.push("jambes"),r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function ag(n="assets/"){if(Vs.lo)return Vs;let e=new bc,t=()=>rd(e,n+"bike_low.glb");return Vs.lo=await rd(e,n+"bike_mid.glb").catch(t),Vs.hi=await rd(e,n+"bike_hi.glb").catch(()=>Vs.lo),Vs}function lg(n="lo"){return Vs[n]||Vs.lo}var jt=0,dn=1,rs=2,_a=.32,ya=-.7,mg=.7,ss=[0,-_a,-ya],gg=[0,-_a,-mg],cg=.58,ST=.4,Gs=Math.PI*2,Jn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=i[0]+r[0],p=i[1]+r[1],g=i[2]+r[2],x=c-o,m=u-a,d=h-l,S=f-o,M=p-a,y=g-l,w=m*y-d*M,E=d*S-x*y,v=x*M-m*S,T=(o+c+f)/3-(s[0]+r[0]),_=(a+u+p)/3-(s[1]+r[1]),b=(l+h+g)/3-(s[2]+r[2]),A=this.pos;w*T+E*_+v*b>=0?A.push(o,a,l,c,u,h,f,p,g):A.push(o,a,l,f,p,g,c,u,h)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new xt;e.setAttribute("position",new at(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function ET(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function TT(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function ug(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function Ws(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(ET);for(let c=0;c<o-1;c++){let u=e[c],h=e[c+1],f=TT(l[c],l[c+1]);for(let p=0;p<a;p++){let g=(p+1)%a;n.setSlot(r(c,p)),n.quad(u[p],u[g],h[g],h[p],f)}}n.setSlot(i),ug(n,e[0],l[0],l[1]),n.setSlot(s),ug(n,e[o-1],l[o-1],l[o-2])}function jn(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],u=Math.hypot(a,l,c)||1,h=[a/u,l/u,c/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],p=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*h[2]-p[2]*h[1],p[2]*h[0]-p[0]*h[2],p[0]*h[1]-p[1]*h[0]],m=(d,S)=>{let M=[];for(let y=0;y<r;y++){let w=Gs*y/r,E=Math.cos(w)*S,v=Math.sin(w)*S;M.push([d[0]+E*p[0]+v*x[0],d[1]+E*p[1]+v*x[1],d[2]+E*p[2]+v*x[2]])}return M};Ws(n,[m(e,i),m(t,s)],o,o,o)}function gr(n,e,t,i){n.setSlot(i);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var Tc=3,Ma=4;function wT(n,e,t,i,s,r,o,a,l){return[[0,e,n],[o,t,n],[a,i,n],[l,s,n],[0,r,n],[-l,s,n],[-a,i,n],[-o,t,n]]}function AT(){let n=new Jn(ss),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>wT(...i));Ws(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?dn:jt:o?i>=9?Tc:jt:a?i>=2&&i<=5?Tc:i>=7&&i<=8?dn:jt:i>=3&&i<=6?rs:dn},jt,jt);for(let i of[-1,1])jn(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,Ma),jn(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,dn),jn(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,dn);return jn(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,Ma),jn(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,Ma),jn(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,dn),gr(n,[0,.685,-.74],[.06,.012,.16],dn),n.build()}function RT(){let n=new Jn(ss),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Ws(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],jt,jt,jt),n.build()}function CT(){let n=new Jn(ss);return gr(n,[0,.985,-1.085],[.04,.02,.014],jt),n.build()}function PT(){let n=new Jn;return jn(n,[0,0,0],[0,0,-.45],.05,.004,6,jt),n.build()}function IT(){let n=new Jn(ss);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(jt);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function LT(){let n=new Jn(gg);for(let i of[-1,1])jn(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,dn),jn(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,rs),gr(n,[.1*i,.33,.74],[.012,.05,.035],Ma);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,l)=>[a,.32+l*Math.cos(i),.7+l*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Ws(n,t,jt,jt,jt),n.build()}function hg(n,e){let t=new Jn,i=14,s=(o,a)=>{let l=[];for(let c=0;c<i;c++){let u=Gs*c/i;l.push([o,a*Math.cos(u),a*Math.sin(u)])}return l};Ws(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),dn,dn,dn);for(let o of[-1,1]){let a=o*(.62*n+.004),l=[a,0,0],c=[0,0,0],u=10;for(let h=0;h<u;h++){let f=Gs*h/u,p=Gs*(h+1)/u;t.setSlot(h%2?dn:rs),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],c)}if(e){let h=o*(.62*n+.012);t.setSlot(Ma);for(let f=0;f<u;f++){let p=Gs*f/u,g=Gs*(f+1)/u;t.quad([h,.09*Math.cos(p),.09*Math.sin(p)],[h,.16*Math.cos(p),.16*Math.sin(p)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function DT(){let n=new Jn,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let u=0;u<i;u++){let h=Gs*(u+.5)/i;c.push([e[0]+t[0]*l*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(h)])}r.push(c)}return Ws(n,r,(o,a)=>{let l=Gs*(a+1)/i;return Math.sin(l)>.45&&(o===1||o===2)?dn:Math.abs(Math.cos(l))<.35?rs:jt},dn,jt),n.build()}function va(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function NT(){let n=new Jn,e=[va(-.08,.13,.09,.1),va(.04,.145,.1,.1),va(.22,.185,.11,.11),va(.38,.205,.1,.1),va(.45,.09,.06,.07)];return Ws(n,e,(t,i)=>t===0?rs:t===2&&(i===0||i===2||i===3||i===5)?Tc:jt,dn,dn),Ws(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],rs,rs,rs),n.build()}function fg(n){let e=new Jn,t=[.09*n,-.09,.5];return jn(e,[0,0,0],t,.058,.048,5,jt),jn(e,t,[0,0,.93],.046,.038,5,jt),gr(e,[0,0,.97],[.042,.04,.05],dn),gr(e,[0,.015,.02],[.052,.04,.05],Tc),e.build()}function dg(n){let e=new Jn,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return jn(e,[0,0,0],t,.082,.066,6,jt),jn(e,t,i,.062,.05,5,jt),gr(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],rs),gr(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],dn),e.build()}var od=null;function UT(){return od||(od={body:AT(),bubble:RT(),tail:CT(),flame:PT(),fork:LT(),headlight:IT(),wheelRear:hg(.1,!1),wheelFront:hg(.068,!0),helmet:DT(),torso:NT(),armR:fg(-1),armL:fg(1),legR:dg(-1),legL:dg(1)}),od}var hi=(n,e,t)=>n<e?e:n>t?t:n,xg=n=>hi(n,0,1),mr=n=>Number.isFinite(n)?n:0,Ec=n=>typeof n=="boolean"?n?1:0:xg(mr(n));function ui(n,e){return n.name=e,n}function pg(n,e,t,i){let s=new rt(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function vg({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=UT(),r=F=>new st({flatShading:!0,side:Nt,...F}),o=r({color:new Ae(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new Ae(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,l,c,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=lg(i),m=null;if(x){let F=(C,Y)=>{let O=x.mats[C].clone();return O.color.set(Y),O};m={Paint:F("Paint",n),Suit:F("Suit",n),Accent:F("Accent",e),Tail:x.mats.Tail.clone()}}function d(F,C,Y,O,j){if(!x)return pg(C,Y,F,O);let W=x.parts[F].clone(!0);return W.name=F,j&&W.position.set(j[0],j[1],j[2]),W.traverse(ue=>{ue.isMesh&&(ue.material.name==="Number"&&!t&&(ue.visible=!1),ue.material=m[ue.material.name]||ue.material,ue.castShadow=O)}),W}let S=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),M=ui(new ct,"bike"),y=ui(new ct,"leanPivot"),w=ui(new ct,"pitchPivot");w.position.set(0,_a,ya);let E=ui(new ct,"rearWheel");E.add(d("wheelRear",s.wheelRear,h,!0));let v=ui(new ct,"chassis"),T=d("body",s.body,h,!0,ss),_=d("bubble",s.bubble,f,!1,ss),b=d("tail",s.tail,g,!1,ss),A=d("headlight",s.headlight,p,!1,ss),N=pg(s.flame,S,"flame",!1);N.position.set(-.187,.435,-.02),N.rotation.x=-.42,N.scale.z=.02,N.visible=!1;let B=ui(new ct,"hips");B.position.set(0,cg,ST);let L=ui(new ct,"torso"),k=ui(new ct,"head");k.position.set(0,.45,.01),k.add(d("helmet",s.helmet,h,!0)),L.add(d("torso",s.torso,h,!0),k);let z=d("armR",s.armR,h,!0),Z=d("armL",s.armL,h,!0),V=ui(new ct,"legR");V.position.set(-.12,-.02,0);let se=!!(x&&x.parts.thighR&&x.parts.shinR&&x.parts.thighL&&x.parts.shinL);se||V.add(d("legR",s.legR,h,!0));let ye=ui(new ct,"legL");ye.position.set(.12,-.02,0),se||ye.add(d("legL",s.legL,h,!0));let Q=!!(x&&x.parts.forearmR&&x.parts.forearmL),ge=Q?d("forearmR",null,null,!0):null,be=Q?d("forearmL",null,null,!0):null;B.add(L,z,Z,V,ye),Q&&B.add(ge,be);let ce=se?d("thighR",null,null,!0):null,re=se?d("shinR",null,null,!0):null,oe=se?d("thighL",null,null,!0):null,P=se?d("shinL",null,null,!0):null;se&&B.add(ce,re,oe,P),x&&x.parts.pelvis&&B.add(d("pelvis",null,null,!0)),v.add(T,_,b,A,N,B),x&&v.add(d("frame",null,null,!0,ss));let G=ui(new ct,"steerPivot");G.position.set(0,0,mg-ya);let $=d("fork",s.fork,h,!0,gg),te=ui(new ct,"frontWheel");if(te.add(d("wheelFront",s.wheelFront,h,!0)),G.add($,te),w.add(E,v,G),y.add(w),M.add(y),t){let F=new ao(16773590,60,60,.5,.6,2);F.name="headSpot",F.castShadow=!1,F.position.set(0,1,.9),F.target.position.set(0,.2,30),F.target.name="headSpotTarget",M.add(F,F.target)}let le={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},Te=.2,Fe=.37,q=.02,Ye=[.25,.9-_a,.34-ya],ke=new H,Le=new H,Ce=new H,qe=new H,Pe=new H,U=new H(0,0,1),R=.3,ne=.31;function xe(F,C,Y){ke.set(Te*Y,Fe,q).applyEuler(L.rotation),Le.set(Ye[0]*Y-B.position.x,Ye[1]-B.position.y,Ye[2]-B.position.z);let O=Math.cos(-B.rotation.z),j=Math.sin(-B.rotation.z),W=Le.x*O-Le.y*j,ue=Le.x*j+Le.y*O;Le.x=W,Le.y=ue,F.position.copy(ke),Ce.copy(Le).sub(ke);let Se=Ce.length()||1;if(Ce.multiplyScalar(1/Se),!C){F.scale.z=Se/(x?x.armLength:1),F.quaternion.setFromUnitVectors(U,Ce);return}let Ue=Math.max(1,Se/(R+ne-.004)),Ie=R*Ue,Ee=ne*Ue,ie=(Ie*Ie-Ee*Ee+Se*Se)/(2*Se),J=Math.sqrt(Math.max(0,Ie*Ie-ie*ie));qe.set(.5*Y,-.87,0),qe.addScaledVector(Ce,-qe.dot(Ce)).normalize(),Pe.copy(ke).addScaledVector(Ce,ie).addScaledVector(qe,J),F.scale.z=Ue,F.quaternion.setFromUnitVectors(U,qe.copy(Pe).sub(ke).normalize()),C.position.copy(Pe),C.scale.z=Ue,C.quaternion.setFromUnitVectors(U,qe.copy(Le).sub(Pe).normalize())}let Me=.47,de=.44,He=.12,Re=[.205,.45-_a,-.29-ya],Ne=new H,Ve=new H,_e=new H,De=new H,$e=new H,Qe=new je;function D(F,C,Y,O,j){$e.copy(C).normalize(),De.set(Y,O,j).addScaledVector($e,-(Y*$e.x+O*$e.y+j*$e.z)),De.lengthSq()<1e-8&&De.set(0,1,0),De.normalize(),_e.crossVectors(De,$e),F.quaternion.setFromRotationMatrix(Qe.makeBasis(_e,De,$e))}function K(F,C,Y,O){Ne.set(He*Y,-.02,0),Le.set(Re[0]*Y-B.position.x,Re[1]-B.position.y,Re[2]-B.position.z);let j=Math.cos(-B.rotation.z),W=Math.sin(-B.rotation.z),ue=Le.x*j-Le.y*W,Se=Le.x*W+Le.y*j;Le.x=ue,Le.y=Se,Ce.copy(Le).sub(Ne);let Ue=Math.min(Ce.length()||1,Me+de-.004);Ce.normalize();let Ie=(Me*Me-de*de+Ue*Ue)/(2*Ue),Ee=Math.sqrt(Math.max(0,Me*Me-Ie*Ie));qe.set(O*Y,.25,1),qe.addScaledVector(Ce,-qe.dot(Ce)).normalize(),Ve.copy(Ne).addScaledVector(Ce,Ie).addScaledVector(qe,Ee),F.position.copy(Ne),D(F,qe.copy(Ve).sub(Ne),0,1,0),C.position.copy(Ve),D(C,qe.copy(Le).sub(Ve),0,.2,1)}function X(F,C){let Y=F||{},O=Number.isFinite(C)?hi(C,0,.1):1/60,j=1-Math.exp(-O*14),W=1-Math.exp(-O*5);le.lean+=(hi(mr(Y.lean),-1.5,1.5)-le.lean)*j,le.steer+=(hi(mr(Y.steer),-1,1)-le.steer)*j,le.pitch+=(hi(mr(Y.pitch),-.9,.9)-le.pitch)*j,le.compress+=(hi(mr(Y.compress),-1,1)-le.compress)*j,le.sr+=(xg(mr(Y.speedRatio))-le.sr)*W,le.brake+=(Ec(Y.braking)-le.brake)*W,le.air+=(Ec(Y.airborne)-le.air)*W,le.drift+=(Ec(Y.drift)-le.drift)*W,le.boost+=(Ec(Y.boost)-le.boost)*W;let ue=le.lean,Se=(Number.isFinite(Y.speed)?Y.speed:le.sr*80)*3.6;y.rotation.z=ue,w.rotation.x=-le.pitch,G.rotation.y=-.45*le.steer*hi(1-2*le.sr,0,1),v.position.y=-.07*le.compress;let Ue=hi((Se-20)/100,0,1),Ie=fe=>fe*fe*(3-2*fe),Ee=Ie(hi(Math.abs(ue)/.52,0,1)),ie=Ie(hi((Math.abs(ue)-.17)/.6,0,1)),J=ue>=0?1:-1,he=Ee*(1-hi((Se-30)/30,0,1));B.position.x=-.17*Ee*J,B.position.y=cg+.1*le.air,B.rotation.z=-.2*Ee*J,L.rotation.x=hi(.5+.62*Ue-.2*le.brake-.25*le.air+.08*le.boost,.2,1.16),L.rotation.z=-.15*Ee*J,L.rotation.y=-.12*Ee*J,k.rotation.x=-.68*Ue+.1*le.air,k.rotation.y=-.35*Ee*J,k.rotation.z=-.4*ue;let ve=.12*Ee+.5*ie+.3*he;if(V.rotation.y=J>0?-ve:0,ye.rotation.y=J<0?ve:0,se){let fe=1.6*ie+.25*Ee+.8*he;K(ce,re,-1,.35+(J<0?fe:0)),K(oe,P,1,.35+(J>0?fe:0))}xe(z,ge,-1),xe(Z,be,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*le.brake,N.visible=le.boost>.03,N.scale.z=.02+1.3*le.boost,S.emissiveIntensity=1.5+2*le.boost;let we=mr(Y.wheelSpin);E.rotation.x=we,te.rotation.x=we}return X({},0),{group:M,update:X}}var yg=Math.PI*2,en=6e3,Mo=2200,_g=60,Mg=30,bg=60,FT=3,ba=2e3,xr=170,cd=1.5,OT=13,Sg=OT-cd,ad=120,BT={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},zT=new Ae(16777215),kT=new Ae(8386303);function Hn(n,e){return n+(e-n)*Math.random()}function Sa(n,e,t){return n<e?e:n>t?t:n}function Xs(n,e=0){return Number.isFinite(n)?n:e}function HT(n){return Number.isFinite(n)?Sa(n,0,.1):0}function ld(n,e){return n-e*Math.floor(n/e+.5)}function VT(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var GT=`
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
}`,WT=`
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
}`,XT=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,qT=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function Eg(n,e){let t=e||{},i=Xs(t.rain,0),s=Xs(t.wind,0),r=new Float32Array(en*3),o=new Float32Array(en*3),a=new Float32Array(en*3),l=new Float32Array(en*3),c=new Float32Array(en*3),u=new Float32Array(en),h=new Float32Array(en),f=new Float32Array(en),p=new Float32Array(en),g=new Float32Array(en),x=new Float32Array(en),m=new Float32Array(en),d=new Float32Array(en),S=new Float32Array(en),M=new Float32Array(en),y=new Float32Array(en),w=new Uint8Array(en),E=0,v=!1,T=new xt,_=new gt(r,3).setUsage(Li),b=new gt(c,3).setUsage(Li),A=new gt(u,1).setUsage(Li),N=new gt(h,1).setUsage(Li),B=new gt(f,1).setUsage(Li);T.setAttribute("position",_),T.setAttribute("aColor",b),T.setAttribute("aSize",A),T.setAttribute("aAlpha",N),T.setAttribute("aMode",B);let L=new Mt({uniforms:{uScale:{value:700}},vertexShader:GT,fragmentShader:WT,transparent:!0,depthWrite:!1,blending:ia,blendSrc:Ch,blendDst:Yo,blendEquation:Fn}),k=new As(T,L);k.frustumCulled=!1,n.add(k);function z(D,K,X,F,C,Y,O,j=1){let W=BT[D];if(!W||!Number.isFinite(K)||!Number.isFinite(X)||!Number.isFinite(F))return;let ue=Xs(C),Se=Xs(Y),Ue=Xs(O),Ie=Math.min(en,Math.max(0,Math.floor(Xs(j,1))));for(let Ee=0;Ee<Ie;Ee++){let ie=E;E=(E+1)%en;let J,he,ve;if(W.ring){let fe=(Ie>1?Ee/Ie:Math.random())*yg+Math.random()*.2,Oe=Hn(3.5,5.5);J=Math.cos(fe)*Oe+ue*.3,ve=Math.sin(fe)*Oe+Ue*.3,he=Hn(W.lift[0],W.lift[1])+Se*.3}else J=ue+Hn(-W.spread,W.spread),ve=Ue+Hn(-W.spread,W.spread),he=Se+Hn(W.lift[0],W.lift[1]);let we=ie*3;r[we]=K+Hn(-.1,.1),r[we+1]=X,r[we+2]=F+Hn(-.1,.1),o[we]=J,o[we+1]=he,o[we+2]=ve,p[ie]=0,g[ie]=W.life*Hn(.85,1.15),x[ie]=W.drag,m[ie]=W.grav,d[ie]=W.s0*Hn(.85,1.2),S[ie]=W.s1*Hn(.85,1.2),M[ie]=W.a0,y[ie]=X,w[ie]=W.bounce?1:0,f[ie]=W.add?1:0,a[we]=W.c0[0],a[we+1]=W.c0[1],a[we+2]=W.c0[2],l[we]=W.c1[0],l[we+1]=W.c1[1],l[we+2]=W.c1[2]}Ie>0&&(v=!0)}function Z(D){let K=!1;for(let X=0;X<en;X++){if(g[X]<=0)continue;if(K=!0,p[X]+=D,p[X]>=g[X]){g[X]=0,h[X]=0,u[X]=0;continue}let F=X*3,C=Math.max(0,1-x[X]*D),Y=o[F]*C,O=o[F+1]*C-m[X]*D,j=o[F+2]*C,W=r[F]+Y*D,ue=r[F+1]+O*D,Se=r[F+2]+j*D;w[X]&&ue<y[X]&&O<0&&(ue=y[X],O=-O*.35,Y*=.6,j*=.6,w[X]=0),o[F]=Y,o[F+1]=O,o[F+2]=j,r[F]=W,r[F+1]=ue,r[F+2]=Se;let Ue=p[X]/g[X];u[X]=d[X]+(S[X]-d[X])*Ue,h[X]=M[X]*(1-Ue*Ue),c[F]=a[F]+(l[F]-a[F])*Ue,c[F+1]=a[F+1]+(l[F+1]-a[F+1])*Ue,c[F+2]=a[F+2]+(l[F+2]-a[F+2])*Ue}return K}let V=null;if(i>0){let D=new xt,K=new Float32Array(Mo*6),X=new gt(K,3).setUsage(Li);D.setAttribute("position",X);let F=new Float32Array(Mo*3),C=new Float32Array(Mo),Y=new Float32Array(Mo);for(let W=0;W<Mo;W++)F[W*3]=(Math.random()-.5)*_g,F[W*3+1]=-12+Math.random()*Mg,F[W*3+2]=(Math.random()-.5)*bg,C[W]=Hn(22,30),Y[W]=Hn(.8,1.2);let O=new ws({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),j=new ar(D,O);j.frustumCulled=!1,n.add(j),V={geo:D,mat:O,lines:j,attr:X,pa:K,head:F,fall:C,len:Y,windX:5.5*s,windZ:2*s}}function se(D,K,X){let F=V,C=F.pa,Y=F.head,O=F.windX,j=F.windZ,W=K.x,ue=K.y+FT,Se=K.z;for(let Ue=0;Ue<Mo;Ue++){let Ie=Ue*3,Ee=W+ld(Y[Ie]-W,_g),ie=ue+ld(Y[Ie+1]-ue,Mg),J=Se+ld(Y[Ie+2]-Se,bg),he=F.fall[Ue],ve=O-X.x,we=-he-X.y,fe=j-X.z,Oe=.05*F.len[Ue],Be=Ue*6;C[Be]=Ee-ve*Oe,C[Be+1]=ie-we*Oe,C[Be+2]=J-fe*Oe,C[Be+3]=Ee,C[Be+4]=ie,C[Be+5]=J,Y[Ie]=Ee+O*D,Y[Ie+1]=ie-he*D,Y[Ie+2]=J+j*D}F.attr.needsUpdate=!0}let ye=new Float32Array(ba*4*3),Q=new Float32Array(ba*4),ge=new Uint16Array(ba*6);for(let D=0;D<ba;D++){let K=D*4;ge.set([K,K+1,K+2,K,K+2,K+3],D*6)}let be=new xt,ce=new gt(ye,3).setUsage(Li),re=new gt(Q,1).setUsage(Li);be.setAttribute("position",ce),be.setAttribute("aAlpha",re),be.setIndex(new gt(ge,1));let oe=new Mt({uniforms:{uColor:{value:new Ae(1315086)}},vertexShader:XT,fragmentShader:qT,transparent:!0,depthWrite:!1,side:Nt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),P=new rt(be,oe);P.frustumCulled=!1,n.add(P);let G=0,$=1/0,te=-1;function le(D,K,X,F,C,Y,O=.3,j=.5){if(![D,K,X,F,C,Y,O,j].every(Number.isFinite))return;let W=F-D,ue=Y-X,Se=Math.hypot(W,ue);if(Se<1e-4)return;let Ue=O*.5,Ie=-ue/Se*Ue,Ee=W/Se*Ue,ie=Sa(j,0,1),J=K+.03,he=C+.03,ve=G*4;G=(G+1)%ba;let we=ye,fe=ve*3;we[fe]=D+Ie,we[fe+1]=J,we[fe+2]=X+Ee,we[fe+3]=D-Ie,we[fe+4]=J,we[fe+5]=X-Ee,we[fe+6]=F-Ie,we[fe+7]=he,we[fe+8]=Y-Ee,we[fe+9]=F+Ie,we[fe+10]=he,we[fe+11]=Y+Ee,Q[ve]=ie,Q[ve+1]=ie,Q[ve+2]=ie,Q[ve+3]=ie,ve<$&&($=ve),ve+3>te&&(te=ve+3)}function Te(){if(te<0)return;let D=$,K=te-$+1;ce.clearUpdateRanges(),ce.addUpdateRange(D*3,K*3),ce.needsUpdate=!0,re.clearUpdateRanges(),re.addUpdateRange(D,K),re.needsUpdate=!0,$=1/0,te=-1}let Fe=new ct;Fe.matrixAutoUpdate=!1,n.add(Fe);let q=new Float32Array(xr*6),Ye=new gt(q,3).setUsage(Li),ke=new xt;ke.setAttribute("position",Ye);let Le=new Float32Array(xr),Ce=new Float32Array(xr),qe=new Float32Array(xr),Pe=new Float32Array(xr);for(let D=0;D<xr;D++){let K=Math.random()*yg,X=Hn(.8,1.5);Le[D]=Math.cos(K)*X,Ce[D]=Math.sin(K)*X,qe[D]=-cd-Math.random()*Sg,Pe[D]=Hn(.5,1.2)}let U=new ws({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),R=new ar(ke,U);R.frustumCulled=!1,R.visible=!1,Fe.add(R);let ne=0,xe=0,Me=0,de=0;function He(D,K){Me+=(ne-Me)*(1-Math.exp(-6*D)),de+=(xe-de)*(1-Math.exp(-8*D)),K.updateMatrixWorld(),Fe.matrix.copy(K.matrixWorld),Fe.matrixWorld.copy(K.matrixWorld);let X=Sa((Me-.55)/.45,0,1),F=Math.min(1,.55*X*X*(3-2*X)+.6*de),C=Math.floor(F*xr);if(C<=0){R.visible=!1;return}R.visible=!0,ke.setDrawRange(0,C*2),U.color.copy(zT).lerp(kT,de),U.opacity=.05+.24*F;let Y=(60+110*F)*D,O=1.5+5*F,j=q;for(let W=0;W<C;W++){let ue=qe[W]+Y;ue>-cd&&(ue-=Sg),qe[W]=ue;let Se=-ue,Ue=Le[W]*Se*.9,Ie=Ce[W]*Se*.5,Ee=O*Pe[W],ie=W*6;j[ie]=Ue,j[ie+1]=Ie,j[ie+2]=ue,j[ie+3]=Ue,j[ie+4]=Ie,j[ie+5]=ue-Ee}Ye.needsUpdate=!0}let Re=new H,Ne=new H,Ve=!1,_e=!1;function De(D,K){if(_e)return;D=HT(D);let X=K.position;Ve?D>0&&(Ne.subVectors(X,Re).divideScalar(D),Ne.lengthSq()>ad*ad&&Ne.setLength(ad),Re.copy(X)):(Re.copy(X),Ne.set(0,0,0),Ve=!0);let F=Xs(K.fov,60);L.uniforms.uScale.value=VT()/(2*Math.tan(F*Math.PI/360)),(Z(D)||v)&&(_.needsUpdate=!0,b.needsUpdate=!0,A.needsUpdate=!0,N.needsUpdate=!0,B.needsUpdate=!0,v=!1),V&&D>0&&se(D,X,Ne),He(D,K),Te()}function $e(D,K){let X=Sa(Xs(D,0),0,1.5);ne=Sa((X-.7)/.3,0,1),xe=K?1:0}function Qe(){_e||(_e=!0,n.remove(k,P,Fe),V&&n.remove(V.lines),T.dispose(),L.dispose(),be.dispose(),oe.dispose(),ke.dispose(),U.dispose(),V&&(V.geo.dispose(),V.mat.dispose()))}return{emit:z,addSkid:le,setSpeed:$e,update:De,dispose:Qe}}var qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},YT=new Es(-1,1,1,-1,0,1),ud=class extends xt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},$T=new ud,Fi=class{constructor(e){this._mesh=new rt($T,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bo=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ea=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wc=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ac=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bo(qs),this.copyPass.material.blending=nn,this.clock=new Ul}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ea!==void 0&&(o instanceof Ea?i=!0:o instanceof wc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Rc=class extends Ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Tg={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var So=class n extends Ln{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new qt(r,o,{type:un});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new qt(r,o,{type:un});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Tg;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=qs;this.copyUniforms=Tn.clone(u.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:_s,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new Fi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ke(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};So.BlurDirectionX=new Ke(1,0);So.BlurDirectionY=new Ke(0,1);var wg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Cc=class extends Ln{constructor(){super();let e=wg;this.uniforms=Tn.clone(e.uniforms),this.material=new Rl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ih?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ta={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},wa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Pc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ag(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=ZT(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new H(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ts(s,e,e);return r.wrapS=In,r.wrapT=In,r.needsUpdate=!0,r}function ZT(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Aa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:hd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function hd(n,e,t){let i=KT(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function KT(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new H(Math.cos(r),Math.sin(r),o))}return i}var Ic=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,p=c-h,g=e-f,x=t-p,m,d;g>x?(m=1,d=0):(m=0,d=1);let S=g-m+u,M=x-d+u,y=g-1+2*u,w=x-1+2*u,E=l&255,v=c&255,T=this.perm[E+this.perm[v]]%12,_=this.perm[E+m+this.perm[v+d]]%12,b=this.perm[E+1+this.perm[v+1]]%12,A=.5-g*g-x*x;A<0?i=0:(A*=A,i=A*A*this.dot(this.grad3[T],g,x));let N=.5-S*S-M*M;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[_],S,M));let B=.5-y*y-w*w;return B<0?r=0:(B*=B,r=B*B*this.dot(this.grad3[b],y,w)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(u+h+f)*p,x=u-g,m=h-g,d=f-g,S=e-x,M=t-m,y=i-d,w,E,v,T,_,b;S>=M?M>=y?(w=1,E=0,v=0,T=1,_=1,b=0):S>=y?(w=1,E=0,v=0,T=1,_=0,b=1):(w=0,E=0,v=1,T=1,_=0,b=1):M<y?(w=0,E=0,v=1,T=0,_=1,b=1):S<y?(w=0,E=1,v=0,T=0,_=1,b=1):(w=0,E=1,v=0,T=1,_=1,b=0);let A=S-w+p,N=M-E+p,B=y-v+p,L=S-T+2*p,k=M-_+2*p,z=y-b+2*p,Z=S-1+3*p,V=M-1+3*p,se=y-1+3*p,ye=u&255,Q=h&255,ge=f&255,be=this.perm[ye+this.perm[Q+this.perm[ge]]]%12,ce=this.perm[ye+w+this.perm[Q+E+this.perm[ge+v]]]%12,re=this.perm[ye+T+this.perm[Q+_+this.perm[ge+b]]]%12,oe=this.perm[ye+1+this.perm[Q+1+this.perm[ge+1]]]%12,P=.6-S*S-M*M-y*y;P<0?s=0:(P*=P,s=P*P*this.dot3(this.grad3[be],S,M,y));let G=.6-A*A-N*N-B*B;G<0?r=0:(G*=G,r=G*G*this.dot3(this.grad3[ce],A,N,B));let $=.6-L*L-k*k-z*z;$<0?o=0:($*=$,o=$*$*this.dot3(this.grad3[re],L,k,z));let te=.6-Z*Z-V*V-se*se;return te<0?a=0:(te*=te,a=te*te*this.dot3(this.grad3[oe],Z,V,se)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,p,g,x=(e+t+i+s)*l,m=Math.floor(e+x),d=Math.floor(t+x),S=Math.floor(i+x),M=Math.floor(s+x),y=(m+d+S+M)*c,w=m-y,E=d-y,v=S-y,T=M-y,_=e-w,b=t-E,A=i-v,N=s-T,B=_>b?32:0,L=_>A?16:0,k=b>A?8:0,z=_>N?4:0,Z=b>N?2:0,V=A>N?1:0,se=B+L+k+z+Z+V,ye=o[se][0]>=3?1:0,Q=o[se][1]>=3?1:0,ge=o[se][2]>=3?1:0,be=o[se][3]>=3?1:0,ce=o[se][0]>=2?1:0,re=o[se][1]>=2?1:0,oe=o[se][2]>=2?1:0,P=o[se][3]>=2?1:0,G=o[se][0]>=1?1:0,$=o[se][1]>=1?1:0,te=o[se][2]>=1?1:0,le=o[se][3]>=1?1:0,Te=_-ye+c,Fe=b-Q+c,q=A-ge+c,Ye=N-be+c,ke=_-ce+2*c,Le=b-re+2*c,Ce=A-oe+2*c,qe=N-P+2*c,Pe=_-G+3*c,U=b-$+3*c,R=A-te+3*c,ne=N-le+3*c,xe=_-1+4*c,Me=b-1+4*c,de=A-1+4*c,He=N-1+4*c,Re=m&255,Ne=d&255,Ve=S&255,_e=M&255,De=a[Re+a[Ne+a[Ve+a[_e]]]]%32,$e=a[Re+ye+a[Ne+Q+a[Ve+ge+a[_e+be]]]]%32,Qe=a[Re+ce+a[Ne+re+a[Ve+oe+a[_e+P]]]]%32,D=a[Re+G+a[Ne+$+a[Ve+te+a[_e+le]]]]%32,K=a[Re+1+a[Ne+1+a[Ve+1+a[_e+1]]]]%32,X=.6-_*_-b*b-A*A-N*N;X<0?u=0:(X*=X,u=X*X*this.dot4(r[De],_,b,A,N));let F=.6-Te*Te-Fe*Fe-q*q-Ye*Ye;F<0?h=0:(F*=F,h=F*F*this.dot4(r[$e],Te,Fe,q,Ye));let C=.6-ke*ke-Le*Le-Ce*Ce-qe*qe;C<0?f=0:(C*=C,f=C*C*this.dot4(r[Qe],ke,Le,Ce,qe));let Y=.6-Pe*Pe-U*U-R*R-ne*ne;Y<0?p=0:(Y*=Y,p=Y*Y*this.dot4(r[D],Pe,U,R,ne));let O=.6-xe*xe-Me*Me-de*de-He*He;return O<0?g=0:(O*=O,g=O*O*this.dot4(r[K],xe,Me,de,He)),27*(u+h+f+p+g)}};var Ra=class n extends Ln{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ag(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Mt({defines:Object.assign({},Ta.defines),uniforms:Tn.clone(Ta.uniforms),vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Cl,this.normalMaterial.blending=nn,this.pdMaterial=new Mt({defines:Object.assign({},Aa.defines),uniforms:Tn.clone(Aa.uniforms),vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Mt({defines:Object.assign({},wa.defines),uniforms:Tn.clone(wa.uniforms),vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Mt({uniforms:Tn.clone(qs.uniforms),vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Bl,blendDst:lo,blendEquation:Fn,blendSrcAlpha:Ol,blendDstAlpha:lo,blendEquationAlpha:Fn}),this.blendMaterial=new Mt({uniforms:Tn.clone(Pc.uniforms),vertexShader:Pc.vertexShader,fragmentShader:Pc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ia,blendSrc:Bl,blendDst:lo,blendEquation:Fn,blendSrcAlpha:Ol,blendDstAlpha:lo,blendEquationAlpha:Fn}),this.fsQuad=new Fi(null),this.originalClearColor=new Ae,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new eo,this.depthTexture.format=bs,this.depthTexture.type=Ms,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Kt,magFilter:Kt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=hd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Ic,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ts(s,e,e,Bn,Mi);return r.wrapS=In,r.wrapT=In,r.needsUpdate=!0,r}};Ra.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Rg=58,jT=82,Cg=94,JT=9,QT=20,Pg=4.7,ew=1.95,tw=3,nw=4,iw=5,Lc=.6;function Ys(n,e,t){return n<e?e:n>t?t:n}function Ut(n,e=0){return Number.isFinite(n)?n:e}function sw(n,e,t){return n+(e-n)*t}function Eo(n,e){return 1-Math.exp(-n*e)}function rw(n){return Number.isFinite(n)?Ys(n,0,.1):0}function Ig(n){let e=new H,t=new H,i=new H,s=new H,r={x:1,z:0},o=!1,a=0,l=0,c=0,u=Rg,h=Pg,f=0,p=0,g=0;function x(w,E){let v=Ut(w.x),T=Ut(w.y),_=Ut(w.z),b=Ut(w.heading)+Ut(w.yaw),A=Math.sin(b),N=Math.cos(b),B=-N,L=A;r.x=B,r.z=L;let k=w.airborne?1:0,z=E*E,Z=Pg-.3*z+.9*k,V=ew-.15*z+.7*k;h=Z;let se=Ys(Ut(w.slope),-.15,.15),ye=Ys(Ut(w.lean),-1.5,1.5),Q=0;e.set(v-A*Z+B*Q,T+V-se*Z,_-N*Z+L*Q),e.y<T+Lc&&(e.y=T+Lc),t.set(v+A*8.5,T+.55+se*4-1.5*k,_+N*8)}function m(w){return sw(Rg,jT,Math.pow(w,1.6))}function d(w,E,v,T){n.position.set(i.x+r.x*E,Math.max(i.y+v,T),i.z+r.z*E),n.lookAt(s),n.rotateZ(w)}function S(w,E){if(w=rw(w),!o){M(E);return}a+=w;let v=Ys(Ut(E.speedRatio),0,1);x(E,v);let T=Ut(E.x)-f,_=Ut(E.y)-p,b=Ut(E.z)-g;T*T+_*_+b*b<400&&(i.x+=T,i.y+=_,i.z+=b,s.x+=T,s.y+=_,s.z+=b),f=Ut(E.x),p=Ut(E.y),g=Ut(E.z),i.lerp(e,Eo(JT,w));let A=i.x-Ut(E.x),N=i.z-Ut(E.z),B=Math.hypot(A,N);B>.001&&(i.x=Ut(E.x)+A/B*h,i.z=Ut(E.z)+N/B*h),s.lerp(t,Eo(QT,w));let L=Ut(E.y)+Lc;i.y<L&&(i.y=L),c*=Math.exp(-iw*w);let k=v*v*v*2.2,z=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Z=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,V=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,se=c*.35+k*.01,ye=z*se,Q=Z*se,ge=V*(c*.03+k*.002);l+=((E.boosting?1:0)-l)*Eo(nw,w);let be=m(v),ce=be+(Cg-be)*l;u+=(ce-u)*Eo(tw,w),Math.abs(n.fov-u)>1e-4&&(n.fov=u,n.updateProjectionMatrix()),d(ge,ye,Q,L)}function M(w){let E=Ys(Ut(w.speedRatio),0,1);x(w,E),i.copy(e),s.copy(t),f=Ut(w.x),p=Ut(w.y),g=Ut(w.z),o=!0,a=0,c=0,l=w.boosting?1:0,u=m(E)+(Cg-m(E))*l,n.fov=u,n.updateProjectionMatrix(),d(0,0,0,Ut(w.y)+Lc)}function y(w){c=Ys(c+Ut(w),0,1.5)}return{update:S,shake:y,snap:M}}var ow=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,aw=`
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
  col *= 1.0 - vig * (0.16 + 0.22 * amt);

  col += vec3(0.0, 0.03, 0.05) * uBoost;

  // \xC9talonnage : couleurs plus satur\xE9es, contraste un peu relev\xE9, ombres l\xE9g\xE8rement froides.
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(lum), col, 1.28);
  col = max(vec3(0.0), (col - 0.18) * 1.1 + 0.18);
  col *= mix(vec3(0.99, 0.97, 1.0), vec3(1.1, 1.0, 0.88), smoothstep(0.05, 0.6, lum));


  float g = hash(vUv * vec2(1920.0, 1080.0) + fract(uTime) * 97.0) - 0.5;
  col += g * 0.014;

  gl_FragColor = vec4(col, 1.0);
}`;function Lg(n,e,t,i,s={}){let r=i||{},o=Ut(r.bloom,.5),a=null,l=null,c=null,u=null,h=0,f=0,p=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let E=n.getSize(new Ke),v=new qt(Math.max(1,E.x),Math.max(1,E.y),{type:un,samples:4});if(a=new Ac(n,v),a.setPixelRatio(m),a.addPass(new Rc(e,t)),s.ao&&!r.night){u=new Ra(e,t,Math.max(1,E.x),Math.max(1,E.y)),u.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),u.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),u.blendIntensity=.6;let T=u.overrideVisibility.bind(u);u.overrideVisibility=()=>{T(),e.traverse(_=>{let b=Array.isArray(_.material)?_.material[0]:_.material;(_.isSprite||b&&(b.depthWrite===!1||b.blending===_s))&&(_.visible=!1)})},a.addPass(u)}l=new So(new Ke(512,512),o*.8,.75,.9),a.addPass(l),c=new bo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:ow,fragmentShader:aw}),a.addPass(c),a.addPass(new Cc)}catch(E){console.warn("Post-traitement indisponible, rendu direct :",E),a=null,l=null,c=null}function d(E,v){!Number.isFinite(E)||!Number.isFinite(v)||E<=0||v<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(m),n.setSize(E,v),a&&(a.setPixelRatio(m),a.setSize(E,v)))}function S(E,v){h=Ys(Ut(E,0),0,1),f=v?1:0}function M(E){if(E=Number.isFinite(E)?Ys(E,0,.1):0,x+=E,p+=(h-p)*Eo(8,E),g+=(f-g)*Eo(8,E),c&&(c.uniforms.uSpeed.value=p,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(E);return}catch(v){console.warn("\xC9chec du post-traitement, rendu direct :",v),a=null}n.render(e,t)}function y(E){u&&(u.enabled=!!E)}function w(){u&&u.dispose&&u.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:M,setSize:d,setSpeed:S,dispose:w,setAO:y,get hasAO(){return!!u},get aoOn(){return!!u&&u.enabled}}}function Dg(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var Wt=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function Ng(n){let e=Wt("div","h2-root",n);e.hidden=!0;let t=Wt("div","h2-pos",e),i=Wt("span","h2-pos-num",t,"1"),s=Wt("span","h2-pos-tot",t,"/8");Wt("span","h2-pos-lbl",t,"POS");let r=Wt("div","h2-right",e),o=Wt("div","h2-pill h2-lap",r),a=Wt("span","h2-lap-lbl",o,"TOUR"),l=Wt("span","h2-lap-num",o,"1"),c=Wt("span","h2-lap-tot",o,"/3"),u=Wt("div","h2-pill h2-time",r,`00'00"000`),h=Wt("div","h2-best",r,""),f=Wt("canvas","h2-map",e),p=220;f.width=f.height=p;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=p;let m=null,d=1,S=0,M=0,y=Wt("div","h2-dial",e),w=Wt("canvas","h2-dial-canvas",y),E=300;w.width=w.height=E;let v=w.getContext("2d"),T=Wt("div","h2-gear",y,"1"),_=Wt("div","h2-speed",y,"0");Wt("div","h2-unit",y,"km/h");let b=Wt("div","h2-boost",y),A=[],N=Wt("div","h2-count",e,""),B=Wt("div","h2-flash",e,""),L=Wt("div","h2-wrong",e,"CONTRESENS");L.hidden=!0;let k={},z=(P,G,$)=>{k[P]!==$&&(k[P]=$,G.textContent=$)},Z=Math.PI*.75,V=Math.PI*2.25,se=-1;function ye(P){let G=Math.round(P*120)/120;if(G===se)return;se=G;let $=E/2,te=E*.44;v.clearRect(0,0,E,E),v.lineCap="butt",v.beginPath(),v.arc($,$,te*1.05,0,Math.PI*2),v.fillStyle="rgba(8, 10, 16, 0.42)",v.fill();let le=(q,Ye,ke,Le)=>{v.beginPath(),v.arc($,$,te,q,Ye),v.strokeStyle=ke,v.lineWidth=Le,v.stroke()},Te=Z+(V-Z)*.86;le(Z,Te,"rgba(255,255,255,0.28)",E*.05),le(Te,V,"rgba(226,40,48,0.55)",E*.05);let Fe=Z+(V-Z)*Math.min(1,Math.max(0,G));le(Z,Math.min(Fe,Te),"#ffffff",E*.05),Fe>Te&&le(Te,Fe,"#e8242e",E*.05);for(let q=0;q<=8;q++){let Ye=Z+(V-Z)*q/8;v.beginPath(),v.moveTo($+Math.cos(Ye)*te*.8,$+Math.sin(Ye)*te*.8),v.lineTo($+Math.cos(Ye)*te*.9,$+Math.sin(Ye)*te*.9),v.strokeStyle=q>=7?"#e8242e":"rgba(255,255,255,0.75)",v.lineWidth=3,v.stroke()}v.beginPath(),v.moveTo($+Math.cos(Fe)*te*.3,$+Math.sin(Fe)*te*.3),v.lineTo($+Math.cos(Fe)*te*.98,$+Math.sin(Fe)*te*.98),v.strokeStyle="#ffffff",v.lineWidth=4,v.stroke()}ye(0);function Q(P){m=P;let G=P.bounds,$=G.maxX-G.minX,te=G.maxZ-G.minZ;d=(p-36)/Math.max($,te),S=(p-$*d)/2-G.minX*d,M=(p-te*d)/2-G.minZ*d;let le=x.getContext("2d");le.clearRect(0,0,p,p);let Te=()=>{le.beginPath(),P.pts.forEach((Fe,q)=>{let Ye=Fe.x*d+S,ke=Fe.z*d+M;q?le.lineTo(Ye,ke):le.moveTo(Ye,ke)}),P.open||le.closePath()};le.lineJoin="round",Te(),le.strokeStyle="rgba(0,0,0,0.45)",le.lineWidth=9,le.stroke(),Te(),le.strokeStyle="#ffffff",le.lineWidth=5,le.stroke(),Te(),le.strokeStyle="rgba(20,24,34,0.9)",le.lineWidth=2,le.stroke(),g.clearRect(0,0,p,p),g.drawImage(x,0,0)}function ge(P){if(!m)return;g.clearRect(0,0,p,p),g.drawImage(x,0,0);let G=m.pts.length,$=(te,le)=>{let Te=Math.floor((te.s%m.length+m.length)%m.length/m.step);Te>=G&&(Te=G-1);let Fe=m.pts[Te],q=Fe.x*d+S,Ye=Fe.z*d+M;g.beginPath(),g.arc(q,Ye,le?6:3.6,0,Math.PI*2),g.fillStyle=le?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let te of P)te.isPlayer||$(te,!1);for(let te of P)te.isPlayer&&$(te,!0)}let be=null;function ce(P){z("pos",i,String(P.position)),z("tot",s,"/"+P.total),z("lap",l,String(P.lap)),z("laps",c,"/"+P.laps),z("time",u,Dg(P.time)),z("best",h,P.bestLap?"MEILLEUR "+Dg(P.bestLap):""),z("speed",_,String(Math.round(P.speedKmh))),z("gear",T,String(P.gear||1)),ye(P.rpm??Math.min(1,P.speedKmh/290));let G=P.boostCharges|0,$=P.boostT>0?1:0,te=G+":"+$;if(k.boost!==te){for(k.boost=te;A.length<G+$;)A.push(Wt("span","h2-boost-dot",b));A.forEach((le,Te)=>{le.hidden=Te>=G+$,le.classList.toggle("h2-on",$&&Te===G)})}if(P.countdown===null||P.countdown===void 0)be===null&&k.count!==""&&(k.count="",N.textContent="",N.classList.remove("h2-show"));else if(P.countdown>0){let le=String(Math.ceil(P.countdown));k.count!==le&&(k.count=le,N.textContent=le,N.classList.remove("h2-show"),N.offsetWidth,N.classList.add("h2-show"))}else k.count!=="GO !"&&(k.count="GO !",N.textContent="GO !",N.classList.remove("h2-show"),N.offsetWidth,N.classList.add("h2-show"),clearTimeout(be),be=setTimeout(()=>{be=null},800));L.hidden===!!P.wrongWay&&(L.hidden=!P.wrongWay)}let re=null;function oe(P,G=900){B.textContent=P,B.classList.remove("h2-show"),B.offsetWidth,B.classList.add("h2-show"),clearTimeout(re),re=setTimeout(()=>B.classList.remove("h2-show"),G)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:ce,setTrack:Q,updateMinimap:ge,flash:oe,setLapLabel(P){a.textContent!==P&&(a.textContent=P)},dispose(){e.remove()}}}var lR=cr.maxSpeed*3.6;var Ug=360;var Fg=n=>(n<10?"0":"")+n;function fd(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${Fg(i)}.${Fg(e%100)}`}var cR=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${Ug}" height="${Ug}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var Og="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Bg=0;function dd(){Bg++;let n=$n((Date.now()^Math.imul(Bg,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=Og[n.int(0,Og.length-1)];return e}var dt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function zg(n){return n?typeof n=="string"?Ds[n]?.name||n:n.name||Ds[n.id]?.name||"":""}function lw(n){return n&&typeof n=="object"?n:ur.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function pd(n){let e=new Map;for(let i of n||[]){let s=lw(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${dt(i.icon)} ${dt(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function md(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${dt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function kg(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(M){try{t&&typeof t.play=="function"&&t.play(M)}catch{}}function r(M,y){let w=i;if(!w||!w.items.length)return;let E=w.items.length,v=(M%E+E)%E,T=v!==w.index;w.index=v,w.focused=!0;for(let _=0;_<E;_++)w.items[_].classList.toggle("pr-sel",_===v);try{w.items[v].focus({preventScroll:!0})}catch{}T&&y&&s("select")}function o(M){let y=i;y&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),y.resolve(M))}function a(M){return i=null,e.innerHTML=M.html,e.classList.remove("pr-off"),new Promise(y=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:M.actions||{},resolve:y},M.onMount&&M.onMount(e,o),r(M.initial||0,!1)})}e.addEventListener("click",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let w=M.target.closest("[data-act]");if(!w||!e.contains(w)||w.disabled)return;let E=y.items.indexOf(w);E>=0&&E!==y.index&&r(E,!1);let v=y.actions[w.dataset.act];v&&v(w,o)}),e.addEventListener("mouseover",M=>{let y=i;if(!y||!(M.target instanceof Element))return;let w=M.target.closest("[data-nav]");if(!w)return;let E=y.items.indexOf(w);E>=0&&E!==y.index&&r(E,!0)}),window.addEventListener("keydown",M=>{let y=i;if(!y)return;let w=M.target,E=!!w&&w.tagName==="INPUT",v=M.key||"",T=v.toLowerCase();if(v==="ArrowUp"||!E&&(v==="ArrowLeft"||T==="z"||T==="q")){M.preventDefault(),r(y.index-1,!0);return}if(v==="ArrowDown"||!E&&(v==="ArrowRight"||T==="s"||T==="d")){M.preventDefault(),r(y.index+1,!0);return}if(E){if(v==="Enter"){M.preventDefault();let _=e.querySelector("[data-main]");_&&_.click()}return}if(v.length===1){let _=y.items.find(b=>b.dataset.key===v);_&&(M.preventDefault(),_.click())}});function l({dailySeed:M,meta:y,route:w=null,records:E=null}={}){let v=y||{};if(w)return f(w,v,E||{});let T=String(M||"RUSH-DAILY").toUpperCase(),_=dd();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${dt(_)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${dt(T)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${v.runs??0}</b><span>runs</span></div>
    <div><b>${v.wins??0}</b><span>victoires</span></div>
    <div><b>${v.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:b=>{let A=b.closest(".pr-screen").querySelector("[data-seed]");A&&(A.value=dd())},launch:(b,A)=>{let N=b.closest(".pr-screen").querySelector("[data-seed]"),B=(N?N.value:"").trim().toUpperCase();B||(B=dd()),A({seed:B})},daily:(b,A)=>A({seed:T})}})}let c=M=>`${Math.floor(M/60)}'${String(Math.floor(M%60)).padStart(2,"0")}"`,u=M=>M==null?"":` <small>${M<0?"\u2212":"+"}${Math.abs(M).toFixed(1)} s</small>`;function h(M){if(!M)return"";let y='<li style="display:flex;justify-content:space-between;gap:1.5em">',w=M.splits.map((v,T)=>`${y}<span>${T+1} \xB7 ${dt(v.name.split(" \xB7 ")[0])}</span><b>${dt(c(v.time))}${u(v.delta)}${v.record&&v.best!==null?" \u2605":""}</b></li>`).join(""),E;return M.total?M.total.best===null?E=`Temps total <b>${dt(c(M.time))}</b> \xB7 premier chrono enregistr\xE9`:M.total.record?E=`Temps total <b>${dt(c(M.time))}</b> \xB7 <b>nouveau record</b>${u(M.total.delta)}`:E=`Temps total <b>${dt(c(M.time))}</b> \xB7 record ${dt(c(M.total.best))}${u(M.total.delta)}`:E=`Temps <b>${dt(c(M.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${E}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${w}</ul>`}function f(M,y,w){let E=Object.keys(w.splits||{}).length,v=(M.stages.reduce((_,b)=>_+b.length,0)/1e3).toFixed(0),T=M.stages.map((_,b)=>`<option value="${b+1}">${b+1} \xB7 ${dt(_.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${dt(M.title)} \xB7 ${dt(M.roads)} \xB7 ${v} km d'une traite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-from-in">D\xE9part</label>
    <div class="pr-seedbox">
      <select id="pr-from-in" class="pr-input" data-nav data-from style="width:min(86vw,34em);font-size:2.3vmin;letter-spacing:0.04em;text-align:left;text-transform:none">${T}</select>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Prendre la route</button>
    <button type="button" class="pr-btn" data-nav data-act="multi">Multijoueur<small>parties publiques et priv\xE9es</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${w.total?dt(c(w.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${w.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${E}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(_,b)=>{let A=_.closest(".pr-screen").querySelector("[data-from]");b({seed:"A18-A20",stage:Number(A?A.value:1)||1})},multi:(_,b)=>b({multi:!0})}})}function p({stage:M={},index:y=1,total:w=1,standings:E=[],weather:v}={}){let T=zg(v)||zg(M.weather),_=M.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${M.real?"Itin\xE9raire r\xE9el":`\xC9tape ${dt(y)}/${dt(w)}`}</div>
    <h2 class="pr-h2">${dt(M.name)}</h2>
    <p class="pr-sub">${dt(M.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${dt(T)}</dd></div>
      ${M.real?`<div><dt>Tron\xE7ons</dt><dd>${M.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${dt(M.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${dt(_)} ${_>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${dt(M.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${md(E)}</ol>
  </div></div>
</section>`,actions:{go:(b,A)=>A(void 0)}})}function g({results:M=[],standings:y=[],stage:w={}}={}){let v=[...M].sort((T,_)=>(T.position??99)-(_.position??99)).map((T,_)=>{let b=Wl[(T.position??0)-1]??0;return`<tr class="pr-tr${T.isPlayer?" pr-me":""}" style="--i:${_}"><td class="pr-c-pos">${dt(T.position??"")}</td><td class="pr-c-name">${dt(T.name)}</td><td class="pr-c-tm">${T.time==null?"Abandon":fd(T.time)}</td><td class="pr-c-best">${T.bestLap==null?"\u2014":fd(T.bestLap)}</td><td class="pr-c-pts">${b>0?"+"+b:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${dt(w.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${md(y)}</ol>
  </div></div>
</section>`,actions:{next:(T,_)=>_(void 0)}})}function x({choices:M=[],index:y=1,total:w=1,owned:E=[]}={}){let v=M.map((T,_)=>`<button type="button" class="pr-card pr-slide" style="--i:${_}" data-nav data-key="${_+1}" data-act="pick" data-id="${dt(T.id)}"><span class="pr-card-in"><span class="pr-card-key">${_+1}</span><span class="pr-card-ico" aria-hidden="true">${dt(T.icon)}</span><span class="pr-card-name">${dt(T.name)}</span><span class="pr-card-tag">${dt(T.tagline)}</span><span class="pr-card-pro">\u25B2 ${dt(T.pro)}</span><span class="pr-card-con">\u25BC ${dt(T.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${dt(y)}/${dt(w)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${pd(E)}</div>
</section>`,actions:{pick:(T,_)=>_(T.dataset.id)}})}function m({standings:M=[],playerPosition:y,run:w={},meta:E}={}){let v=E||{},T=y??M.findIndex(A=>A.isPlayer)+1,_=T===1,b=w.real?_?"Victoire !":`${dt(T)}e \xE0 l'arriv\xE9e`:_?"Champion !":`${dt(T)}e au championnat`;return a({initial:w.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${_?" pr-gold":""}">${b}</div>
    <ol class="pr-slist pr-slist-big">${md(M)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${w.real?`<h3 class="pr-h3">${dt(w.stages[0].name)}</h3>
    <p class="pr-sub">${dt(w.stages[0].subtitle)}</p>${h(w.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${pd(w.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${pd(w.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${dt(w.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${w.real?"":`<p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${w.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:A=>{let N="Copier la seed",B;try{B=navigator.clipboard.writeText(String(w.seed??""))}catch(k){B=Promise.reject(k)}let L=k=>{A.textContent=k,setTimeout(()=>{A.isConnected&&(A.textContent=N)},1500)};B.then(()=>L("Copi\xE9e !"),()=>L("Copie impossible"))},again:(A,N)=>N(void 0)}})}function d(M){t=M||null}function S(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:p,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:S,setAudio:d,mount:a}}var Hg=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Vg=.6,cw=.3,gd=6,vr=55,uw=.1,hw=25,Gg=60/128/4,fw=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],To=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Wg=n=>440*Math.pow(2,(n-69)/12);function dw(n){let t=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;t[i]=(1+n)*s/(1+n*Math.abs(s))}return t}function Xg(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=!1,u=!1,h=null,f=0,p=0,g=-1,x=0,m=0,d=0;function S(P){let G=Math.round(2*P),$=Math.round(.1*P),te=new Float32Array(G+$),le=0,Te=0,Fe=0,q=0,Ye=0,ke=0,Le=0;for(let R=0;R<G+$;R++){let ne=Math.random()*2-1;le=.99886*le+ne*.0555179,Te=.99332*Te+ne*.0750759,Fe=.969*Fe+ne*.153852,q=.8665*q+ne*.3104856,Ye=.55*Ye+ne*.5329522,ke=-.7616*ke-ne*.016898,te[R]=(le+Te+Fe+q+Ye+ke+Le+ne*.5362)*.11,Le=ne*.115926}let Ce=n.createBuffer(1,G,P),qe=Ce.getChannelData(0),Pe=0;for(let R=0;R<G;R++){let ne=R<$?te[R]*(R/$)+te[G+R]*(1-R/$):te[R];qe[R]=ne;let xe=Math.abs(ne);xe>Pe&&(Pe=xe)}let U=Pe>0?1/Pe:1;for(let R=0;R<G;R++)qe[R]*=U;return Ce}function M(P){let G=n.createBufferSource();return G.buffer=i,G.loop=!0,G.connect(P),G.start(0,Math.random()*1.5),G}function y(P){let G=n.createGain();return G.gain.value=P,G}function w(P,G,$){let te=n.createBiquadFilter();return te.type=P,te.frequency.value=G,te.Q.value=$,te}function E(){i=S(n.sampleRate),t=y(c?0:Vg);let P=n.createDynamicsCompressor();P.threshold.value=-16,P.knee.value=12,P.ratio.value=4,P.attack.value=.005,P.release.value=.2,t.connect(P),P.connect(n.destination);let G=n.createOscillator();G.type="sawtooth",G.frequency.value=vr,G.detune.value=-6;let $=n.createOscillator();$.type="sawtooth",$.frequency.value=vr,$.detune.value=6;let te=n.createOscillator();te.type="square",te.frequency.value=vr/2;let le=y(1);G.connect(y(.28)).connect(le),$.connect(y(.28)).connect(le),te.connect(y(.22)).connect(le);let Te=w("bandpass",vr*4,1.2),Fe=y(.04);M(Te),Te.connect(Fe).connect(le);let q=n.createWaveShaper();q.curve=dw(4),q.oversample="2x",le.connect(q);let Ye=w("lowpass",300,1.3);q.connect(Ye);let ke=y(0);Ye.connect(ke).connect(t),G.start(),$.start(),te.start(),s={osc1:G,osc2:$,osc3:te,nBp:Te,nGain:Fe,lp:Ye,gain:ke};let Le=w("bandpass",300,.7),Ce=y(0);M(Le),Le.connect(Ce).connect(t),r={filter:Le,gain:Ce};let qe=w("bandpass",1100,4),Pe=y(3),U=y(0);M(qe),qe.connect(Pe).connect(U).connect(t),o={filter:qe,gain:U};let R=w("highpass",900,.5),ne=y(3),xe=y(0);M(R),R.connect(ne).connect(xe).connect(t),a={gain:xe},l=y(0),l.connect(t),e=!0}function v(P,G,$){let te=n.currentTime;P.cancelScheduledValues(te),P.setTargetAtTime(G,te,$)}function T(P){let G=P.t0,$=P.dur,te=n.createOscillator();te.type=P.type||"sine",te.frequency.setValueAtTime(P.f0,G),P.f1&&te.frequency.exponentialRampToValueAtTime(P.f1,G+$);let le=n.createGain();le.gain.setValueAtTime(1e-4,G),le.gain.linearRampToValueAtTime(P.vol,G+(P.attack||.004)),le.gain.exponentialRampToValueAtTime(1e-4,G+$);let Te=te;if(P.lp){let Fe=w("lowpass",P.lp,.7);te.connect(Fe),Te=Fe}Te.connect(le),le.connect(t),te.start(G),te.stop(G+$+.02)}function _(P){let G=P.t0,$=P.dur,te=n.createBufferSource();te.buffer=i;let le=w(P.type,P.f0,P.q||1);P.f1&&le.frequency.exponentialRampToValueAtTime(P.f1,G+$),le.frequency.setValueAtTime(P.f0,G);let Te=n.createGain();Te.gain.setValueAtTime(1e-4,G),Te.gain.linearRampToValueAtTime(P.vol,G+.004),Te.gain.exponentialRampToValueAtTime(1e-4,G+$),te.connect(le),le.connect(Te),Te.connect(t),te.start(G,Math.random()*1.5,$+.02)}function b(P,G){let $=n.createBufferSource();$.buffer=i;let te=w("bandpass",700+Math.random()*900,1.2),le=n.createGain();le.gain.setValueAtTime(0,P),le.gain.linearRampToValueAtTime(G,P+.003),le.gain.linearRampToValueAtTime(0,P+.03),$.connect(te),te.connect(le),le.connect(t),$.start(P,Math.random()*1.5,.05)}let A={beep(P){T({type:"square",f0:440,t0:P,dur:.12,vol:.12,lp:2400})},go(P){T({type:"sawtooth",f0:880,t0:P,dur:.4,vol:.12,lp:3e3}),T({type:"sine",f0:1320,t0:P,dur:.4,vol:.06}),T({type:"sine",f0:1760,t0:P+.02,dur:.25,vol:.04}),_({t0:P,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(P){_({t0:P,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),T({type:"sawtooth",f0:150,f1:600,t0:P,dur:.6,vol:.1,lp:1500,attack:.02})},jump(P){_({t0:P,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(P){T({type:"sine",f0:90,f1:50,t0:P,dur:.2,vol:.6,attack:.002}),_({t0:P,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(P){_({t0:P,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let G=340,$=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[te,le,Te]of $)T({type:"sine",f0:G*te,t0:P,dur:Te,vol:le,attack:.001})},select(P){T({type:"sine",f0:2400,t0:P,dur:.03,vol:.15,attack:.002})},confirm(P){T({type:"triangle",f0:660,t0:P,dur:.12,vol:.2}),T({type:"triangle",f0:990,t0:P+.09,dur:.18,vol:.2})},win(P){[523,659,784,1047,1319].forEach(($,te)=>{let le=te<4?.13:.5,Te=P+te*.11;T({type:"square",f0:$,t0:Te,dur:le,vol:.1,lp:2500}),T({type:"triangle",f0:$,t0:Te,dur:le,vol:.12})})},lose(P){[392,330,262].forEach((G,$)=>{T({type:"triangle",f0:G,t0:P+$*.22,dur:.3,vol:.25,attack:.01})})},pad(P){T({type:"sawtooth",f0:300,f1:1500,t0:P,dur:.15,vol:.12,lp:4e3})},lap(P){T({type:"sine",f0:1e3,t0:P,dur:.08,vol:.2}),T({type:"sine",f0:1e3,t0:P+.15,dur:.08,vol:.2})}};function N(P){let G=n.createOscillator();G.type="sine",G.frequency.setValueAtTime(150,P),G.frequency.exponentialRampToValueAtTime(45,P+.12);let $=n.createGain();$.gain.setValueAtTime(.5,P),$.gain.exponentialRampToValueAtTime(.001,P+.3),G.connect($),$.connect(l),G.start(P),G.stop(P+.32)}function B(P,G){let $=n.createBufferSource();$.buffer=i;let te=w("highpass",7e3,.7),le=n.createGain();le.gain.setValueAtTime(G,P),le.gain.exponentialRampToValueAtTime(.001,P+.04),$.connect(te),te.connect(le),le.connect(l),$.start(P,Math.random()*1.5,.05)}function L(P,G,$){let te=n.createOscillator();te.type="sawtooth",te.frequency.value=G;let le=w("lowpass",1e3,6);le.frequency.setValueAtTime(1e3,P),le.frequency.exponentialRampToValueAtTime(180,P+$);let Te=n.createGain();Te.gain.setValueAtTime(1e-4,P),Te.gain.linearRampToValueAtTime(.16,P+.01),Te.gain.exponentialRampToValueAtTime(1e-4,P+$),te.connect(le),le.connect(Te),Te.connect(l),te.start(P),te.stop(P+$+.02)}function k(P,G){let $=n.createOscillator();$.type="triangle",$.frequency.value=G;let te=n.createGain();te.gain.setValueAtTime(1e-4,P),te.gain.linearRampToValueAtTime(.035,P+.005),te.gain.exponentialRampToValueAtTime(1e-4,P+.11),$.connect(te),te.connect(l),$.start(P),$.stop(P+.13)}function z(P,G){let $=P&15,te=fw[P>>4&3];if($%4===0&&N(G),$%2===1&&B(G,$%4===2?.1:.05),$%2===0){let le=$===6||$===14?12:0;L(G,Wg(te.root+le),Gg*1.8);let Te=[0,te.iv[0],te.iv[1],12];k(G,Wg(te.root+24+Te[$>>1&3]))}}function Z(){if(!e||!u)return;let P=n.currentTime;f<P&&(f=P+.02);let G=P+uw;for(;f<G;)z(p,f),f+=Gg,p++}function V(){if(!e){if(!Hg)return;try{n=new Hg,E()}catch{n=null,e=!1;return}}if(n.state==="suspended")try{let P=n.resume();P&&P.catch&&P.catch(()=>{})}catch{}}function se(P,G){if(!e)return;P=To(P),G=To(G);let $=n.currentTime,te=P*gd,le=Math.min(gd-1,Math.floor(te)),Fe=.45+.55*Math.min(1,te-le),q=To(P/.08),Ye=vr+(vr*Math.pow(gd,Fe)-vr)*q,ke=.5*P+.5*G,Le=260+3200*Math.pow(ke,1.3),Ce=.07+.2*P*(.35+.65*G)+.03*G;if(v(s.osc1.frequency,Ye,.04),v(s.osc2.frequency,Ye,.04),v(s.osc3.frequency,Ye*.5,.04),v(s.nBp.frequency,Ye*4,.05),v(s.nGain.gain,.04+.22*G,.05),v(s.lp.frequency,Le,.05),g!==-1&&le!==g){let qe=s.gain.gain;qe.cancelScheduledValues($),qe.setTargetAtTime(Ce*.35,$,.004),qe.setTargetAtTime(Ce,$+.06,.03),x=$+.12}if(g=le,$>=x&&v(s.gain.gain,Ce,.05),G>=m)m=G;else if(m-G>.3){if(P>.6&&$>=d){let qe=.12+.2*P;for(let Pe=0;Pe<3;Pe++)b($+Pe*.05+Math.random()*.02,qe*(1-Pe*.2));d=$+.4}m=G}}function ye(P){if(!e)return;let G=To(P),$=G*G;v(r.filter.frequency,250+1600*$,.2),v(r.gain.gain,.03+.35*$,.15)}function Q(P){if(!e)return;let G=To(P);v(o.filter.frequency,900+500*G,.05),v(o.gain.gain,G,.03)}function ge(P){e&&v(a.gain.gain,To(P)*.25,.1)}function be(P){e&&Object.prototype.hasOwnProperty.call(A,P)&&A[P](n.currentTime+.01)}function ce(P){c=!!P,e&&v(t.gain,c?0:Vg,.015)}function re(){e&&(u||(u=!0,p=0,f=n.currentTime+.05),v(l.gain,cw,.05),h||(h=setInterval(Z,hw)),Z())}function oe(){u=!1,h&&(clearInterval(h),h=null),e&&v(l.gain,0,.05)}return{resume:V,setEngine:se,setWind:ye,setSkid:Q,setRain:ge,play:be,setMuted:ce,startMusic:re,stopMusic:oe}}var xd=1/120,Dn=new URLSearchParams(location.search),pw=document.getElementById("game"),wi=new bl({canvas:pw,antialias:!0,powerPreference:"high-performance"});wi.setPixelRatio(Math.min(window.devicePixelRatio,2));wi.shadowMap.enabled=!0;wi.shadowMap.type=Fl;wi.toneMapping=sa;wi.toneMappingExposure=1.05;wi.outputColorSpace=Lt;var Gt=new Jo,Nn=new Zt(70,1,.3,6e3);Gt.add(Nn);var $s=Ig(Nn),Jg=document.getElementById("ui"),tn=Ng(Jg),Bi=kg(Jg),Vt=Xg();Bi.setAudio?.(Vt);var Oc=new Set,pn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var mw=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement)){if(Oc.add(n.code),Xt==="race"&&mw.includes(n.code)&&n.preventDefault(),Zs?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&Zs.pick(e%3)}n.code==="KeyM"&&(Uc=!Uc,Vt.setMuted(Uc)),(n.code==="KeyP"||n.code==="Escape")&&Xt==="race"&&(bd=!bd)}});addEventListener("keyup",n=>Oc.delete(n.code));addEventListener("blur",()=>Oc.clear());addEventListener("pointerdown",()=>Vt.resume(),{once:!1});var Uc=Dn.has("mute");Uc&&Vt.setMuted(!0);var bd=!1;function gw(n){let e=(...s)=>s.some(r=>Oc.has(r));pn.throttle=e("ArrowUp","KeyW")?1:0,pn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);pn.steer=t,pn.boost=e("Space"),pn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(pn.steer=s),pn.throttle=Math.max(pn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),pn.brake=Math.max(pn.brake,i.buttons[6]?.value||0),pn.boost=pn.boost||!!i.buttons[2]?.pressed,pn.drift=pn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return pn}function xw(n){let e=new Jo,t=new Rs(50,32,16),i=new H(...n.sunDir).normalize(),s=new Mt({side:Qt,uniforms:{uTop:{value:new Ae(n.skyTop)},uHor:{value:new Ae(n.skyHorizon)},uGround:{value:new Ae(n.hemiGround)},uSun:{value:new Ae(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new rt(t,s));let r=new Qr(wi),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var qg=new Map;function Yg(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=qg.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new ii(o),s.colorSpace=Lt,s.magFilter=Kt,s.minFilter=ti,qg.set(i,s)}let r=new rt(new zn(1,1),new st({map:s,roughness:.5,side:Nt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var Ca=null;function vw(){if(Ca)return Ca;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ca=new ii(n),Ca.colorSpace=Lt,Ca}function vd(n,e,t){let i=new Qo(new io({map:vw(),color:n,transparent:!0,opacity:t,blending:_s,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var os={ao:Dn.get("fx")!=="low",slow:0,frames:0,checked:!1},Xe=null,Xt="boot",Sd=0,Ed=0,Td=0,Pa=99;function yw(){if(Xe){for(let n of Xe.labels||[])n.material.map?.dispose(),n.material.dispose();for(let n of Xe.bikes)Gt.remove(n.model.group);Gt.remove(Xe.road.group),Xe.road.dispose?.(),Xe.env.dispose?.(),Xe.env.group?.parent&&Xe.env.group.parent.remove(Xe.env.group),Xe.fx.dispose?.(),Xe.post.dispose?.(),Xe.envMap?.dispose(),Gt.environment=null,Xe.mirror&&(Gt.remove(Xe.mirror),Xe.mirror.dispose()),Xe.fill&&Gt.remove(Xe.fill),Xe.scenery&&(Gt.remove(Xe.scenery.group),Xe.scenery.dispose()),Xe.clouds&&(Gt.remove(Xe.clouds),Xe.clouds.geometry.dispose(),Xe.clouds.material.dispose()),Xe.sunGlow&&(Gt.remove(Xe.sunGlow),Xe.sunGlow.material.dispose()),Xe=null}}var Ia="assets/v3/world/",Rn=null,fi=null,Qg={};function ex({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null,startS:c=0}){let u=[performance.now()],h=z=>{u.push(z,Math.round(performance.now()-u[0]))};yw(),h("dispose");let f=$n(n),p=!!r&&!!Rn,g=p?Rn.track:Nm(n);h("track");let x=Ds[e]||Ds.sunset;Nn.far=p?9500:6e3,Nn.updateProjectionMatrix();let m=p?R0(Gt,g,x,Rn.index,{base:Ia,baked:Qg,rng:f.fork("env")}):v0(Gt,g,x,f.fork("env"));p&&m.prime(c),h("env");let d=xw(x);Gt.environment=d.texture,Gt.environmentIntensity=x.night?.55:.5,wi.toneMappingExposure=x.night?1.5:.82;let S=vd(x.sunColor,x.night?900:2200,x.night?.35:.75);S.userData.dir=new H(...x.sunDir).normalize(),Gt.add(S);let M=new Ii(x.night?3820160:13226728,x.night?.25:.45);M.position.set(-x.sunDir[0],.6,-x.sunDir[2]).multiplyScalar(100),M.name="fill-light",Gt.add(M),h("envmap");let y=p?{group:new ct,update(){},dispose(){}}:oc(g,x,f.fork("road"));Gt.add(y.group),h("road"),p||r0(m.group,z=>z.geometry.attributes.position.count>2e4?1:.45);let w=p?{group:new ct,dispose(){}}:b0(g,x,f.fork("scenery"),m.heightAt);m.sun?.shadow&&(m.sun.shadow.mapSize.set(4096,4096),m.sun.shadow.radius=5,m.sun.shadow.blurSamples=16,m.sun.shadow.normalBias=.05,m.sun.shadow.map?.dispose(),m.sun.shadow.map=null),Gt.add(w.group);let E=null,v=p?Math.min(.25,x.wet||.25):x.sheen??x.wet;v>.5&&!Dn.has("noreflect")&&(E=new oa(new zn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),E.rotation.x=-Math.PI/2,E.material.colorWrite=!1,E.material.depthWrite=!1,E.material.depthTest=!1,E.frustumCulled=!1,E.renderOrder=-10,E.name="road-mirror",Gt.add(E));let T=y.group.getObjectByName("road-asphalt");T&&v>.5&&(T.material.envMap=d.texture,T.material.envMapIntensity=E?.35:1.25,T.material.metalness=.3,l0(T.material,x.sheen??x.wet,E?{texture:E.getRenderTarget().texture,matrix:E.material.uniforms.textureMatrix.value}:null)),h("voxelize");let _=l||o0(x,f.fork("clouds"));Gt.add(_);let b=Eg(Gt,x),A=Lg(wi,Gt,Nn,x,{ao:os.ao});h("fx");let N=Xm({track:g,laps:t,env:x,rng:f.fork("race"),riders:i,final:o,carry:a,startS:c}),B=[],L=N.riders.map(z=>{let Z=vg({color:z.color,accent:z.accent,isPlayer:!!z.isPlayer&&!!x.night,detail:z.isPlayer?"hi":"lo"});if(Z.group.rotation.order="YXZ",z.remote){let ge=Tw(z.name,z.color);Z.group.add(ge),B.push(ge)}let V=Z.group.getObjectByName("chassis")||Z.group,se=vd(16722458,.3,.3);if(se.position.set(0,.67,-.42),V.add(se),x.night){let ge=vd(16773840,1.3,.8);ge.position.set(0,.48,1.66),V.add(ge)}Z.tailGlow=se;let ye=z.isPlayer?1:2+N.riders.indexOf(z)*7%97;for(let ge of[-1,1]){let be=Yg(ye);be.scale.set(.24,.17,1),be.position.set(.105*ge,.6,-.2),be.rotation.y=ge*Math.PI/2,V.add(be)}let Q=Yg(ye);return Q.scale.set(.2,.14,1),Q.position.set(0,.585,1.6),Q.rotation.x=-.75,V.add(Q),Gt.add(Z.group),{rider:z,model:Z,pose:{},prev:new H,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),k=s?$l({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},f.fork("auto")):null;if(Xe={labels:B,track:g,weather:x,env:m,road:y,fx:b,post:A,race:N,bikes:L,autoAI:k,envMap:d,sunGlow:S,clouds:_,scenery:w,mirror:E,fill:M,playerBike:L.find(z=>z.rider.isPlayer)||L[0]},h("bikes"),window.__loadTimes=u.slice(1),vt?.traffic){for(let z of N.riders)z.ai&&(z.ai.obstacles=vt.traffic.vehicles);k&&(k.obstacles=vt.traffic.vehicles)}if(p){let z=[];for(let Z of g.features)Z.type==="tunnel"&&Z.name&&z.push({s:Z.s0-90,text:Z.name.toUpperCase()});for(let Z of g.bridges)Z.name&&Z.s1-Z.s0>150&&z.push({s:Z.s0-40,text:Z.name.toUpperCase()});for(let Z of Rn.index.signs)z.push({s:Z.s-20,text:Z.name.toUpperCase()});z.sort((Z,V)=>Z.s-V.s),Xe.announce=z.filter(Z=>Z.s>=c-60&&Z.s<=g.raceEnd),Xe.announceIdx=0}return tn.setTrack(g),ax(),nx(.016),$s.snap(Ad()),Ed=N.player?.position||i.length,Td=1,Pa=99,window.__game={stage:Xe,renderer:wi,scene:Gt,camera:Nn,RL:uf},window.__tick=rx,Xe}var Oi={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Ad(){let n=Xe.playerBike,e=n.rider.state;return Oi.x=n.w.x,Oi.y=n.w.y,Oi.z=n.w.z,Oi.heading=n.w.heading,Oi.yaw=-tx(e),Oi.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Oi.airborne=e.airborne,Oi.boosting=e.boostT>0,Oi.slope=n.w.slope||0,Oi}var _w=.8,$g=.7;function tx(n){let e=n.vdir??n.yaw;return e+_w*(n.yaw-e)}function nx(n){let{track:e,fx:t,weather:i}=Xe;for(let s of Xe.bikes){let r=s.rider.state;zt(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.visible=!s.rider.hidden;let a=s.w.heading-tx(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=$g*(Math.sin(a)-Math.sin(l)),o.position.z+=$g*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?pn.brake>.1:!!s.rider.braking,s.model.update(c,n),s.model.tailGlow){let M=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*M-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*M)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),p=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-h*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let S=s.rider.isPlayer?null:s.rider.frameEvents;S&&S.length&&ix(s,S,!1)}}function ix(n,e,t){let{fx:i}=Xe,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(Vt.play("land"),$s.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(Vt.play("hit"),$s.shake(.7))):l==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&($s.shake(1.4),tn.flash("CHUTE !",1400))):l==="jump"?t&&Vt.play("jump"):l==="boost"?t&&(Vt.play("boost"),$s.shake(.3),tn.flash("BOOST !",600)):l==="pad"&&t&&(Vt.play("pad"),$s.shake(.2))}function Mw(n){let{race:e,autoAI:t,track:i}=Xe,s=e.player,r=pn;if(t||Xt==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=Zl(t,s.state,i,s.stats,a,n)}else r=bw;if(mn&&vt&&(Aw(e,n),ww(e,n)),e.update(n,r),mn&&vt&&e.phase!=="countdown"&&(mn.session.sendState(performance.now(),s.state.s,s.state),s.finished&&!mn.sentFinish&&(mn.sentFinish=!0,mn.session.sendFinish(s.finishTime))),vt?.traffic&&e.phase!=="countdown"){vt.traffic.update(n,s.state,e.riders);for(let a of vt.traffic.events)a.type==="near"&&!t?(tn.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),Vt.play(a.boost?"boost":"pad")):a.type==="hit"&&!t&&tn.flash("ACCROCHAGE",900)}let o=s.state.events;o.length&&(ix(Xe.playerBike,o,!t),o.length=0)}var bw={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},An={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},yd=[],Zg=new H,_d=performance.now(),Dc=0,Fc=0;function sx(n){requestAnimationFrame(sx);let e=Math.min(.05,(n-_d)/1e3);os.ao&&!os.checked&&Xt==="race"&&Xe?.race.phase==="racing"&&(os.frames++,n-_d>25&&os.slow++,os.frames>=240&&(os.checked=!0,os.slow>96&&(os.ao=!1,Xe.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),_d=n,rx(e)}function rx(n){if(!Xe)return;if(bd){Xe.post.render(0);return}Fc+=n,Sd+=n,Xt==="race"&&Zs?.update(n);let{race:e}=Xe,t=Xt==="race"||Xt==="attract"||Xt==="finish";if(t){Xt==="race"&&gw(n),Dc+=n;let a=0;for(;Dc>=xd&&a++<8;)Mw(xd),Dc-=xd;a>=8&&(Dc=0)}nx(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=Ad();Xt==="intro"||Xt==="menu"||Xt==="finish"&&Sd>1.2?Sw(o,n):$s.update(n,o),Zg.set(o.x,o.y,o.z),Xe.env.update(n,Fc,Zg,(Xe.race.player||Xe.race.riders[0]).state.s),Xe.mirror&&Xe.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Xe.sunGlow.position.copy(Nn.position).addScaledVector(Xe.sunGlow.userData.dir,3200),Xe.road.update(n,Fc),Xe.fx.setSpeed(t?r:0,s.boostT>0),Xe.fx.update(n,Nn),Ao&&(vt?.traffic&&Xt!=="attract"?Ao.update(vt.traffic,Xe.track,s.s):Ao.hide()),Xe.post.setSpeed(t?r:0,s.boostT>0),Xe.post.render(n),(Xt==="race"||Xt==="finish")&&(Vt.setEngine(Math.min(1,r),Xt==="race"?pn.throttle:.3),Vt.setWind(Math.min(1,r)),Vt.setSkid(s.airborne?0:Math.min(1,s.drift))),Xt==="race"&&Ew(e,i,s)}var Kg=new H;function Sw(n,e){let t=Fc*.35+n.heading;Kg.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Nn.position.lerp(Kg,Math.min(1,e*2.5)),Nn.fov+=(55-Nn.fov)*Math.min(1,e*3),Nn.updateProjectionMatrix(),Nn.lookAt(n.x,n.y+.9,n.z)}function Ew(n,e,t){An.speedKmh=t.speed*3.6,An.position=e.position,An.total=n.riders.length,An.lap=Math.min(n.laps,Math.max(1,e.lap)),An.laps=n.laps,vt&&Xt!=="attract"&&(An.lap=vt.index+1,An.laps=vt.metas.length),tn.setLapLabel?.(vt&&Xt!=="attract"?"TRON\xC7ON":"TOUR"),An.time=n.time,An.bestLap=e.bestLap??null,An.boostCharges=t.boostCharges,An.boostT=t.boostT,An.gear=t.gear,An.rpm=t.rpm,An.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,An.wrongWay=Math.abs(t.yaw)>1.4,tn.update(An),yd.length=0;for(let i of n.riders)yd.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(tn.updateMinimap(yd),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==Pa&&(Pa=i,i>0&&Vt.play("beep"))}else Pa!==0&&(Pa=0,Vt.play("go"),Vt.startMusic?.());if(n.phase==="racing"){let i=Xe.announce;if(i)for(;Xe.announceIdx<i.length&&i[Xe.announceIdx].s<=t.s;)tn.flash(i[Xe.announceIdx].text,2e3),Xe.announceIdx++;e.position<Ed&&!(i&&Xe.announceIdx>0&&t.s-i[Xe.announceIdx-1].s<120)&&tn.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),Ed=e.position,e.lap!==Td&&e.lap<=n.laps&&(Td=e.lap,Vt.play("lap"),e.lap===n.laps&&tn.flash("DERNIER TOUR",1400))}if(vt&&Xt==="race"&&n.phase==="racing")for(;vt.index<vt.metas.length-1&&t.s>=vt.metas[vt.index].s1;)Cw(n);n.phase==="finished"&&Xt==="race"&&Pw()}var vt=null,Ao=null;function Tw(n,e){let t=document.createElement("canvas");t.width=256,t.height=64;let i=t.getContext("2d");i.font="bold 34px Arial, Helvetica, sans-serif";let s=Math.min(244,i.measureText(n).width+28);i.fillStyle="rgba(10,14,28,.78)",i.beginPath(),i.roundRect((256-s)/2,8,s,48,12),i.fill(),i.fillStyle="#"+e.toString(16).padStart(6,"0"),i.fillRect((256-s)/2,50,s,6),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,31,230);let r=new ii(t);r.colorSpace=Lt;let o=new Qo(new io({map:r,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));return o.scale.set(3.6,.9,1),o.position.set(0,2.55,0),o.name="name-tag",o}var zi=null,Md=0;function ww(n,e){if(Md-=e,Md>0)return;Md=.25,zi||(zi=document.createElement("div"),zi.style.cssText="position:fixed;left:2.2vmin;top:13vmin;z-index:30;font:bold 1.9vmin Arial,Helvetica,sans-serif;color:#fff;text-shadow:0 1px 3px #000;display:grid;gap:.5vmin;pointer-events:none",document.body.appendChild(zi));let t=n.player.state.s,i=n.riders.filter(s=>s.remote).map(s=>{let r=mn.session.players.get(s.id);if(!r||r.gone)return{gap:-1/0,html:`<span style="opacity:.6">\u2715 ${Nc(s.name)} \xB7 abandon</span>`};if(s.finished)return{gap:1/0,html:`<span>\u{1F3C1} ${Nc(s.name)} \xB7 arriv\xE9</span>`};if(!r.remote.known)return{gap:0,html:`<span style="opacity:.6">\u2026 ${Nc(s.name)}</span>`};let o=s.state.s-t,a=Math.abs(o)>=1e3?(Math.abs(o)/1e3).toFixed(1).replace(".",",")+" km":Math.round(Math.abs(o))+" m";return{gap:o,html:`<span><b style="color:#${s.color.toString(16).padStart(6,"0")}">${o>=0?"\u25B2":"\u25BC"}</b> ${Nc(s.name)} \xB7 ${o>=0?"+":"\u2212"}${a}</span>`}});i.sort((s,r)=>r.gap-s.gap),zi.innerHTML=i.map(s=>s.html).join(""),zi.style.display=""}var Nc=n=>String(n).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),mn=null;function Aw(n,e){let t=performance.now(),i=n.track;for(let s of n.riders){if(!s.remote)continue;let r=mn.session.players.get(s.id),o=r&&!r.gone?r.remote.sample(t,e):null;if(!o){s.hidden=!0,(!r||r.gone)&&(s.state.s=-1e5,!s.dnf&&!s.finished&&(s.dnf=!0,tn.flash(`${s.name.toUpperCase()} A QUITT\xC9 LA COURSE`,2200)));continue}let a=s.state;a.s=o.g,a.d=o.d,a.speed=o.v,a.lean=o.l,a.yaw=o.y,a.vdir=o.y,a.boostT=o.b?.2:0,a.wheelSpin=(a.wheelSpin||0)+o.v*e/.31,s.hidden=Math.abs(a.s-n.player.state.s)>3500||r.remote.age>4,r.finished&&!s.finished&&(s.finished=!0,s.finishTime=r.finishTime)}}var as=K0(),Zs=null;function ox(n){let e=vt.metas[vt.splits.length],t=vt.splits.length===0,i=J0(as,e.id+(t?":g":":r"),n-vt.splitStart);return vt.splitStart=n,vt.splits.push({name:e.subtitle,...i}),Mc(as),i}function Rw(){if(!Tt)return;let n=eg(tc({...Tt,stageIndex:vt.index}));if(!n.length)return;let e=t=>{if(!nc(Tt,t.id))return;let i=vt.riders.find(s=>s.isPlayer);i&&Object.assign(i.stats,Us(Tt)),tn.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800),Vt.play("lap")};if(vt.autopilot&&!Dn.has("pick")){e(n[0]);return}Zs=Zs||tg(),Zs.show(n,e,9)}function Cw(n){let e=ox(n.time);vt.index+=1;let t=vt.metas[vt.index];tn.flash(`SECTION ${Cf(e.time)}${e.delta===null?"":" ("+j0(e.delta)+")"}${e.record&&e.best!==null?" \xB7 RECORD":""} \u2014 ${t.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),Rw()}function ax(){let n=innerWidth,e=innerHeight;wi.setSize(n,e,!1),Nn.aspect=n/e,Nn.updateProjectionMatrix(),Xe?.post.setSize(n,e)}addEventListener("resize",ax);function La(n){Xt=n,Sd=0}var Tt=null,wo=af(),wd=null;function Pw(){if(La("finish"),Zs?.hide(),vt&&Tt){let n=Xe.race.player.finishTime??Xe.race.time,e=ox(n),t=!!fi&&vt.metas.length===fi.stages.length,i=t?Q0(as,n):null;as.finishes+=1,Mc(as),Tt.summary={splits:vt.splits,total:i,time:n,full:t,last:e}}if(tn.flash(`ARRIV\xC9E \u2014 ${Xe.race.player.position}${Xe.race.player.position===1?"er":"e"}`,2200),Vt.play(Xe.race.player.position<=3?"win":"lose"),Vt.stopMusic?.(),mn){let n=performance.now(),e=()=>Xe.race.riders.some(i=>i.remote&&!i.finished&&!i.dnf),t=()=>{if(Xt==="finish"){if(!e()||performance.now()-n>12e4){wd?.();return}performance.now()-n>3e3&&tn.flash("EN ATTENTE DES AUTRES JOUEURS\u2026",1100),setTimeout(t,1e3)}};setTimeout(t,3200);return}setTimeout(()=>wd?.(),3200)}async function jg(){vt=null,zi&&(zi.style.display="none"),Ao?.hide(),Zs?.hide();let n=ec(Ql("ATTRACT"));for(let t of n)t.stats=Us({upgrades:[]});let e=Rn?Rn.index.sections[Math.min(2,Rn.index.sections.length-1)].s0+9e3:0;Rn&&await _f(Ia,Rn.index,e,1).catch(()=>{}),ex({trackSeed:Rn?"REAL:"+Rn.index.id:"ATTRACT-"+ic(),weatherId:Rn?"sicily":"sunset",laps:Rn?1:99,riders:n,autopilot:!0,realData:!!Rn,startS:e}),tn.hide(),La("attract")}async function Iw(){if(await ag().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Dn.has("noreal")){let[n,e]=await Promise.all([fetch(Ia+"index.json").then(t=>t.ok?t.json():null).catch(()=>null),fetch(Ia+"track.json").then(t=>t.ok?t.json():null).catch(()=>null)]);if(n&&e&&(Rn={index:n,track:S0({...n,...e})},fi={title:n.title,roads:n.roads,stages:n.sections}),fi){let t=await fetch("assets/v3/props/index.json").then(s=>s.ok?s.json():[]).catch(()=>[]);await Promise.all(E0.filter(s=>t.includes(s)).map(s=>fetch(`assets/v3/props/${s}.json`).then(r=>r.ok?r.json():null).then(r=>{r&&(Qg[s]=r)}).catch(()=>{})));let i=document.createElement("div");i.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",i.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(i)}}for(await jg(),document.getElementById("boot").remove(),requestAnimationFrame(sx);;){let n=Dn.get("seed"),e=Number(Dn.get("stage"))||0;if(!n){let s=await Bi.showTitle({dailySeed:ic(),meta:wo,route:fi,records:as});if(s.multi){let r=fi?await Y0(Bi.mount,fi):null;if(!r)continue;mn={session:r.session,directory:r.directory,sentFinish:!1},n="MP-"+r.session.code,e=r.stage}else n=s.seed,s.stage&&(e=s.stage)}if(Vt.resume(),Tt=Ql(n),fi){let s=Math.floor(e)-1;Tt.real=!0,s>0&&s<fi.stages.length||(s=0);let r=fi.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;Tt.stages=[{name:fi.title,subtitle:`${fi.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!ca(Tt);){let s=Tt.stages[Tt.stageIndex],r=Us(Tt),o=ec(Tt).map(c=>({...c,stats:c.isPlayer?r:Us({upgrades:[]})}));if(mn&&s.real){Tt.points={},Tt.names={};let c=o.find(u=>u.isPlayer);o=mn.session.roster().map(u=>u.me?{...c,name:u.name,color:u.color,accent:u.accent}:{id:u.id,name:u.name,color:u.color,accent:u.accent,isPlayer:!1,remote:!0,persona:null,stats:Us({upgrades:[]})});for(let u of o)Tt.points[u.id]=0,Tt.names[u.id]=u.name}Bi.hideAll();let a=0;vt=null,s.real&&(tn.flash?.("CHARGEMENT\u2026"),a=s.real[0].s0,await _f(Ia,Rn.index,a,1).catch(()=>{}),vt={metas:s.real,index:0,riders:o,autopilot:Dn.has("auto"),weatherId:Dn.get("weather")||s.weather,splits:[],splitStart:0},as.runs+=1,Mc(as),Dn.has("notraffic")||(vt.traffic=P0({rng:$n("trafic|"+n+"|"+as.runs),count:40,density:2.6}),Ao=Ao||$0(Gt,40))),ex({trackSeed:s.trackSeed,weatherId:Dn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Dn.has("auto"),realData:!!s.real,startS:a}),La("intro"),Vt.setRain(Xe.weather.rain||0),!Dn.has("auto")&&!mn&&await Bi.showStageIntro({stage:s,index:Tt.stageIndex+1,total:Tt.stages.length,standings:ho(Tt),weather:Xe.weather}),Bi.hideAll(),$s.snap(Ad()),tn.show(),La("race"),await new Promise(c=>{wd=c}),tn.hide(),Vt.setEngine(.1,0),Vt.setWind(0),Vt.setSkid(0);let l=Xe.race.results();if(mn){let c=new Set(Xe.race.riders.filter(u=>u.dnf).map(u=>u.id));for(let u of l)c.has(u.id)&&(u.time=null);l.sort((u,h)=>(u.time===null)-(h.time===null)||u.position-h.position),l.forEach((u,h)=>{u.position=h+1}),zi&&(zi.style.display="none")}if(rf(Tt,l),await Bi.showResults({results:l,standings:ho(Tt),stage:s}),!ca(Tt)){let c=tc(Tt),u=Tt.upgrades.map(f=>ur.find(p=>p.id===f)).filter(Boolean),h=await Bi.showUpgradeChoice({choices:c,index:Tt.stageIndex,total:Tt.stages.length,owned:u});nc(Tt,h)}}let t=ho(Tt),i=t.findIndex(s=>s.isPlayer)+1;wo=cf(wo,Tt)||wo,lf(wo),La("menu"),await Bi.showRunEnd({standings:t,playerPosition:i,run:Tt,meta:wo}),Bi.hideAll(),mn&&(mn.directory?.close(),mn.session.leave(),mn=null),Dn.delete("seed"),Dn.delete("stage"),await jg()}}Iw().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
