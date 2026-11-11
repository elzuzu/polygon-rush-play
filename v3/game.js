var Gx=Object.defineProperty;var Wx=(n,e)=>{for(var t in e)Gx(n,t,{get:e[t],enumerable:!0})};var Xx=0,Qd=1,qx=2;var Jl=1,Yx=2,Ji=3,Li=0,nn=1,Dt=2,rn=0,Gr=1,Di=2,ep=3,tp=4,aa=5,Fn=100,$x=101,Zx=102,Kx=103,jx=104,ho=200,Kh=201,Jx=202,Qx=203,zu=204,Ko=205,Ql=206,ev=207,ec=208,tv=209,nv=210,iv=211,sv=212,rv=213,ov=214,ku=0,Hu=1,Vu=2,$r=3,Gu=4,Wu=5,Xu=6,qu=7,jh=0,av=1,lv=2,ws=0,Jh=1,Qh=2,ef=3,la=4,cv=5,tf=6,nf=7,np="attached",uv="detached",_m=300,Zr=301,Kr=302,Yu=303,$u=304,tc=306,Ln=1e3,es=1001,jo=1002,jt=1003,sf=1004;var Hr=1005;var Bn=1006,Yo=1007;var ri=1008;var wi=1009,Mm=1010,bm=1011,Jo=1012,rf=1013,or=1014,Si=1015,dn=1016,of=1017,af=1018,Ts=1020,Sm=35902,Em=1021,wm=1022,zn=1023,Tm=1024,Am=1025,Wr=1026,As=1027,lf=1028,cf=1029,Rm=1030,uf=1031;var hf=1033,_l=33776,Ml=33777,bl=33778,Sl=33779,Zu=35840,Ku=35841,ju=35842,Ju=35843,Qu=36196,eh=37492,th=37496,nh=37808,ih=37809,sh=37810,rh=37811,oh=37812,ah=37813,lh=37814,ch=37815,uh=37816,hh=37817,fh=37818,dh=37819,ph=37820,mh=37821,El=36492,gh=36494,xh=36495,Cm=36283,vh=36284,yh=36285,_h=36286;var jr=2300,Jr=2301,ru=2302,ip=2400,sp=2401,rp=2402,hv=2500;var Pm=0,nc=1,ca=2,fv=3200,dv=3201;var ic=0,pv=1,Ss="",Ot="srgb",wn="srgb-linear",sc="linear",Lt="srgb";var br=7680;var op=519,mv=512,gv=513,xv=514,Im=515,vv=516,yv=517,_v=518,Mv=519,Mh=35044,Oi=35048;var ap="300 es",ts=2e3,wl=2001,Rs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lp=1234567,Xr=Math.PI/180,Qr=180/Math.PI;function Ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function bn(n,e,t){return Math.max(e,Math.min(t,n))}function ff(n,e){return(n%e+e)%e}function bv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Sv(n,e,t){return n!==e?(t-n)/(e-n):0}function $o(n,e,t){return(1-t)*n+t*e}function Ev(n,e,t,i){return $o(n,e,1-Math.exp(-t*i))}function wv(n,e=1){return e-Math.abs(ff(n,e*2)-e)}function Tv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Av(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cv(n,e){return n+Math.random()*(e-n)}function Pv(n){return n*(.5-Math.random())}function Iv(n){n!==void 0&&(lp=n);let e=lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lv(n){return n*Xr}function Dv(n){return n*Qr}function Nv(n){return(n&n-1)===0&&n!==0}function Uv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ov(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Lm={DEG2RAD:Xr,RAD2DEG:Qr,generateUUID:Ei,clamp:bn,euclideanModulo:ff,mapLinear:bv,inverseLerp:Sv,lerp:$o,damp:Ev,pingpong:wv,smoothstep:Tv,smootherstep:Av,randInt:Rv,randFloat:Cv,randFloatSpread:Pv,seededRandom:Iv,degToRad:Lv,radToDeg:Dv,isPowerOfTwo:Nv,ceilPowerOfTwo:Uv,floorPowerOfTwo:Ov,setQuaternionFromProperEuler:Fv,normalize:Ut,denormalize:bi},Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],b=s[1],M=s[4],_=s[7],T=s[2],E=s[5],v=s[8];return r[0]=o*x+a*b+l*T,r[3]=o*m+a*M+l*E,r[6]=o*d+a*_+l*v,r[1]=c*x+u*b+h*T,r[4]=c*m+u*M+h*E,r[7]=c*d+u*_+h*v,r[2]=f*x+p*b+g*T,r[5]=f*m+p*M+g*E,r[8]=f*d+p*_+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ou.makeScale(e,t)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ou=new dt;function Dm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bv(){let n=Qo("canvas");return n.style.display="block",n}var cp={};function Xo(n){n in cp||(cp[n]=!0,console.warn(n))}function zv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function kv(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hv(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var xt={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(n.r=ns(n.r),n.g=ns(n.g),n.b=ns(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(n.r=qr(n.r),n.g=qr(n.g),n.b=qr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ss?sc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var up=[.64,.33,.3,.6,.15,.06],hp=[.2126,.7152,.0722],fp=[.3127,.329],dp=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[wn]:{primaries:up,whitePoint:fp,transfer:sc,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:hp,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:up,whitePoint:fp,transfer:Lt,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:hp,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});var Sr,bh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Qo("canvas")),Sr.width=e.width,Sr.height=e.height;let i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ns(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vv=0,Tl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(au(s[o].image)):r.push(au(s[o]))}else r=au(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function au(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gv=0,hn=class n extends Rs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=es,s=es,r=Bn,o=ri,a=zn,l=wi,c=n.DEFAULT_ANISOTROPY,u=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Ei(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=_m;hn.DEFAULT_ANISOTROPY=1;var wt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,T=(d+1)/2,E=(u+f)/4,v=(h+x)/4,w=(g+m)/4;return M>_&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=v/i):_>T?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=v/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sh=class extends Rs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Sh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Al=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eh=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*x,b=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let T=Math.sqrt(M),E=Math.atan2(T,d*b);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let _=a*b;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lu=new G,mp=new on,oi=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Va.subVectors(this.max,No),Er.subVectors(e.a,No),wr.subVectors(e.b,No),Tr.subVectors(e.c,No),xs.subVectors(wr,Er),vs.subVectors(Tr,wr),Js.subVectors(Er,Tr);let t=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Js.z,Js.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Js.z,0,-Js.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Js.y,Js.x,0];return!cu(t,Er,wr,Tr,Va)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,Er,wr,Tr,Va))?!1:(Ga.crossVectors(xs,vs),t=[Ga.x,Ga.y,Ga.z],cu(t,Er,wr,Tr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qi=[new G,new G,new G,new G,new G,new G,new G,new G],vi=new G,Ha=new oi,Er=new G,wr=new G,Tr=new G,xs=new G,vs=new G,Js=new G,No=new G,Va=new G,Ga=new G,Qs=new G;function cu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qs.fromArray(n,r);let a=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=e.dot(Qs),c=t.dot(Qs),u=i.dot(Qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Wv=new oi,Uo=new G,uu=new G,qn=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Wv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);let t=Uo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Uo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(uu)),this.expandByPoint(Uo.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yi=new G,hu=new G,Wa=new G,ys=new G,fu=new G,Xa=new G,du=new G,eo=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hu.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(hu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=ys.dot(this.direction),l=-ys.dot(Wa),c=ys.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hu).addScaledVector(Wa,f),p}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);let i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,s,r){fu.subVectors(t,e),Xa.subVectors(i,e),du.crossVectors(fu,Xa);let o=this.direction.dot(du),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,e);let l=a*this.direction.dot(Xa.crossVectors(ys,Xa));if(l<0)return null;let c=a*this.direction.dot(fu.cross(ys));if(c<0||l+c>o)return null;let u=-a*ys.dot(du);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,qv)}lookAt(e,t,i){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),_s.crossVectors(i,Wn),_s.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),_s.crossVectors(i,Wn)),_s.normalize(),qa.crossVectors(Wn,_s),s[0]=_s.x,s[4]=qa.x,s[8]=Wn.x,s[1]=_s.y,s[5]=qa.y,s[9]=Wn.y,s[2]=_s.z,s[6]=qa.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],b=i[3],M=i[7],_=i[11],T=i[15],E=s[0],v=s[4],w=s[8],y=s[12],S=s[1],R=s[5],N=s[9],F=s[13],L=s[2],I=s[6],H=s[10],W=s[14],z=s[3],O=s[7],V=s[11],q=s[15];return r[0]=o*E+a*S+l*L+c*z,r[4]=o*v+a*R+l*I+c*O,r[8]=o*w+a*N+l*H+c*V,r[12]=o*y+a*F+l*W+c*q,r[1]=u*E+h*S+f*L+p*z,r[5]=u*v+h*R+f*I+p*O,r[9]=u*w+h*N+f*H+p*V,r[13]=u*y+h*F+f*W+p*q,r[2]=g*E+x*S+m*L+d*z,r[6]=g*v+x*R+m*I+d*O,r[10]=g*w+x*N+m*H+d*V,r[14]=g*y+x*F+m*W+d*q,r[3]=b*E+M*S+_*L+T*z,r[7]=b*v+M*R+_*I+T*O,r[11]=b*w+M*N+_*H+T*V,r[15]=b*y+M*F+_*W+T*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],b=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,M=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,_=u*x*c-g*h*c+g*a*p-o*x*p-u*a*d+o*h*d,T=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,E=t*b+i*M+s*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/E;return e[0]=b*v,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*v,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*v,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*v,e[4]=M*v,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*v,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*v,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*v,e[8]=_*v,e[9]=(g*h*r-u*x*r-g*i*p+t*x*p+u*i*d-t*h*d)*v,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*v,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*v,e[12]=T*v,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*v,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*v,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*v,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,b=l*c,M=l*u,_=l*h,T=i.x,E=i.y,v=i.z;return s[0]=(1-(x+d))*T,s[1]=(p+_)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+M)*v,s[9]=(m-b)*v,s[10]=(1-(f+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),a=Ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yi.copy(this);let c=1/r,u=1/o,h=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ts){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(a===ts)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ts){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,p=(i+s)*u,g,x;if(a===ts)g=(o+r)*h,x=-2*h;else if(a===wl)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ar=new G,yi=new je,Xv=new G(0,0,0),qv=new G(1,1,1),_s=new G,qa=new G,Wn=new G,gp=new je,xp=new on,Ti=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Rl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yv=0,vp=new G,Rr=new on,$i=new je,Ya=new G,Oo=new G,$v=new G,Zv=new on,yp=new G(1,0,0),_p=new G(0,1,0),Mp=new G(0,0,1),bp={type:"added"},Kv={type:"removed"},Cr={type:"childadded",child:null},pu={type:"childremoved",child:null},Gt=class n extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new G,t=new Ti,i=new on,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new dt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(Mp,e)}translateOnAxis(e,t){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(Mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ya.copy(e):Ya.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Oo,Ya,this.up):$i.lookAt(Ya,Oo,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix($i),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bp),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kv),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bp),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=new G,Zi=new G,mu=new G,Ki=new G,Pr=new G,Ir=new G,Sp=new G,gu=new G,xu=new G,vu=new G,yu=new wt,_u=new wt,Mu=new wt,Qi=class n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_i.subVectors(s,t),Zi.subVectors(i,t),mu.subVectors(e,t);let o=_i.dot(_i),a=_i.dot(Zi),l=_i.dot(mu),c=Zi.dot(Zi),u=Zi.dot(mu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return yu.setScalar(0),_u.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(e,t),_u.fromBufferAttribute(e,i),Mu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yu,r.x),o.addScaledVector(_u,r.y),o.addScaledVector(Mu,r.z),o}static isFrontFacing(e,t,i,s){return _i.subVectors(i,t),Zi.subVectors(e,t),_i.cross(Zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),_i.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Pr.subVectors(s,i),Ir.subVectors(r,i),gu.subVectors(e,i);let l=Pr.dot(gu),c=Ir.dot(gu);if(l<=0&&c<=0)return t.copy(i);xu.subVectors(e,s);let u=Pr.dot(xu),h=Ir.dot(xu);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Pr,o);vu.subVectors(e,r);let p=Pr.dot(vu),g=Ir.dot(vu);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ir,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Sp.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Sp,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Pr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},$a={h:0,s:0,l:0};function bu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=ff(e,1),t=bn(t,0,1),i=bn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bu(o,r,e+1/3),this.g=bu(o,r,e),this.b=bu(o,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=Nm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return xt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(bn(Mn.r*255,0,255))*65536+Math.round(bn(Mn.g*255,0,255))*256+Math.round(bn(Mn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ot){xt.fromWorkingColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+t,Ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ms),e.getHSL($a);let i=$o(Ms.h,$a.h,t),s=$o(Ms.s,$a.s,t),r=$o(Ms.l,$a.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new De;De.NAMES=Nm;var jv=0,Sn=class extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Ei(),this.name="",this.blending=Gr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zu,this.blendDst=Ko,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ko&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zt=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new G,Za=new Ke,vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mh&&(e.usage=this.usage),e}};var Cl=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pl=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Jv=0,si=new je,Su=new Gt,Lr=new G,Xn=new oi,Fo=new oi,un=new G,ht=class n extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dm(e)?Pl:Cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Xn.min,Fo.min),Xn.expandByPoint(un),un.addVectors(Xn.max,Fo.max),Xn.expandByPoint(un)):(Xn.expandByPoint(Fo.min),Xn.expandByPoint(Fo.max))}Xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),un.add(Lr)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new G,l[w]=new G;let c=new G,u=new G,h=new G,f=new Ke,p=new Ke,g=new Ke,x=new G,m=new G;function d(w,y,S){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(x),a[y].add(x),a[S].add(x),l[w].add(m),l[y].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,y=b.length;w<y;++w){let S=b[w],R=S.start,N=S.count;for(let F=R,L=R+N;F<L;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new G,_=new G,T=new G,E=new G;function v(w){T.fromBufferAttribute(s,w),E.copy(T);let y=a[w];M.copy(y),M.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(E,y);let R=_.dot(l[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,R)}for(let w=0,y=b.length;w<y;++w){let S=b[w],R=S.start,N=S.count;for(let F=R,L=R+N;F<L;F+=3)v(e.getX(F+0)),v(e.getX(F+1)),v(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ep=new je,er=new eo,Ka=new qn,wp=new G,ja=new G,Ja=new G,Qa=new G,Eu=new G,el=new G,Tp=new G,tl=new G,et=class extends Gt{constructor(e=new ht,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){el.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Eu.fromBufferAttribute(h,e),o?el.addScaledVector(Eu,u):el.addScaledVector(Eu.sub(t),u))}t.add(el)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),er.copy(e.ray).recast(e.near),!(Ka.containsPoint(er.origin)===!1&&(er.intersectSphere(Ka,wp)===null||er.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(Ep.copy(r).invert(),er.copy(e.ray).applyMatrix4(Ep),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,T=M;_<T;_+=3){let E=a.getX(_),v=a.getX(_+1),w=a.getX(_+2);s=nl(this,d,e,i,c,u,h,E,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=nl(this,o,e,i,c,u,h,b,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,T=M;_<T;_+=3){let E=_,v=_+1,w=_+2;s=nl(this,d,e,i,c,u,h,E,v,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=m,M=m+1,_=m+2;s=nl(this,o,e,i,c,u,h,b,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qv(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;tl.copy(a),tl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:n}}function nl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ja),n.getVertexPosition(l,Ja),n.getVertexPosition(c,Qa);let u=Qv(n,e,t,i,ja,Ja,Qa,Tp);if(u){let h=new G;Qi.getBarycoord(Tp,ja,Ja,Qa,h),s&&(u.uv=Qi.getInterpolatedAttribute(s,a,l,c,h,new Ke)),r&&(u.uv1=Qi.getInterpolatedAttribute(r,a,l,c,h,new Ke)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};Qi.getNormal(ja,Ja,Qa,f.normal),u.face=f,u.barycoord=h}return u}var fn=class n extends ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function g(x,m,d,b,M,_,T,E,v,w,y){let S=_/v,R=T/w,N=_/2,F=T/2,L=E/2,I=v+1,H=w+1,W=0,z=0,O=new G;for(let V=0;V<H;V++){let q=V*R-F;for(let se=0;se<I;se++){let me=se*S-N;O[x]=me*b,O[m]=q*M,O[d]=L,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[d]=E>0?1:-1,u.push(O.x,O.y,O.z),h.push(se/v),h.push(1-V/w),W+=1}}for(let V=0;V<w;V++)for(let q=0;q<v;q++){let se=f+q+I*V,me=f+q+I*(V+1),ie=f+(q+1)+I*(V+1),J=f+(q+1)+I*V;l.push(se,me,J),l.push(me,ie,J),z+=6}a.addGroup(p,z,y),p+=z,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function to(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function In(n){let e={};for(let t=0;t<n.length;t++){let i=to(n[t]);for(let s in i)e[s]=i[s]}return e}function ey(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Um(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Tn={clone:to,merge:In},ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends Sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ty,this.fragmentShader=ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Il=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ts}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bs=new G,Ap=new Ke,Rp=new Ke,Kt=class extends Il{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,Nr=1,wh=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Dr,Nr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Dr,Nr,e,t);r.layers=this.layers,this.add(r);let o=new Kt(Dr,Nr,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Dr,Nr,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Dr,Nr,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Dr,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ts)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ll=class extends hn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Th=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ll(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:rn});r.uniforms.tEquirect.value=t;let o=new et(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=Bn),new wh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},wu=new G,iy=new G,sy=new dt,Mi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=wu.subVectors(i,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(wu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sy.getNormalMatrix(e),s=this.coplanarPoint(wu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new qn,il=new G,ea=class{constructor(e=new Mi,t=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ts){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],b=s[13],M=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-p,_-d).normalize(),i[1].setComponents(l+r,f+c,m+p,_+d).normalize(),i[2].setComponents(l+o,f+u,m+g,_+b).normalize(),i[3].setComponents(l-o,f-u,m-g,_-b).normalize(),i[4].setComponents(l-a,f-h,m-x,_-M).normalize(),t===ts)i[5].setComponents(l+a,f+h,m+x,_+M).normalize();else if(t===wl)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(il.x=s.normal.x>0?e.max.x:e.min.x,il.y=s.normal.y>0?e.max.y:e.min.y,il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Om(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ry(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kn=class n extends ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let b=d*f-o;for(let M=0;M<c;M++){let _=M*h-r;g.push(_,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){let M=b+c*d,_=b+c*(d+1),T=b+1+c*(d+1),E=b+1+c*d;p.push(M,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fy=`#ifdef USE_AOMAP
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
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yy=`#ifdef USE_IRIDESCENCE
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
#endif`,_y=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,By=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
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
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
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
#endif`,s_=`struct PhysicalMaterial {
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
}`,r_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m_=`#if defined( USE_POINTS_UV )
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
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o1=`uniform sampler2D t2D;
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
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
}`,f1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,p1=`#define DISTANCE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
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
}`,v1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,M1=`#define LAMBERT
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
}`,b1=`#define LAMBERT
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
}`,S1=`#define MATCAP
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
}`,E1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,T1=`#define NORMAL
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
}`,A1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,C1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,L1=`#define TOON
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
}`,D1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,O1=`uniform vec3 color;
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
}`,F1=`uniform float rotation;
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
}`,B1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:oy,alphahash_pars_fragment:ay,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:uy,alphatest_pars_fragment:hy,aomap_fragment:fy,aomap_pars_fragment:dy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:xy,bsdfs:vy,iridescence_fragment:yy,bumpmap_pars_fragment:_y,clipping_planes_fragment:My,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:Ey,color_fragment:wy,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Dy,emissivemap_fragment:Ny,emissivemap_pars_fragment:Uy,colorspace_fragment:Oy,colorspace_pars_fragment:Fy,envmap_fragment:By,envmap_common_pars_fragment:zy,envmap_pars_fragment:ky,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:Jy,envmap_vertex:Vy,fog_vertex:Gy,fog_pars_vertex:Wy,fog_fragment:Xy,fog_pars_fragment:qy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:$y,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Ky,lights_pars_begin:jy,lights_toon_fragment:Qy,lights_toon_pars_fragment:e_,lights_phong_fragment:t_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:s_,lights_fragment_begin:r_,lights_fragment_maps:o_,lights_fragment_end:a_,logdepthbuf_fragment:l_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:h_,map_fragment:f_,map_pars_fragment:d_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:x_,morphinstance_vertex:v_,morphcolor_vertex:y_,morphnormal_vertex:__,morphtarget_pars_vertex:M_,morphtarget_vertex:b_,normal_fragment_begin:S_,normal_fragment_maps:E_,normal_pars_fragment:w_,normal_pars_vertex:T_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:L_,opaque_fragment:D_,packing:N_,premultiplied_alpha_fragment:U_,project_vertex:O_,dithering_fragment:F_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:k_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:V_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:$_,specularmap_fragment:Z_,specularmap_pars_fragment:K_,tonemapping_fragment:j_,tonemapping_pars_fragment:J_,transmission_fragment:Q_,transmission_pars_fragment:e1,uv_pars_fragment:t1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:s1,background_vert:r1,background_frag:o1,backgroundCube_vert:a1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:h1,depth_frag:f1,distanceRGBA_vert:d1,distanceRGBA_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:x1,linedashed_frag:v1,meshbasic_vert:y1,meshbasic_frag:_1,meshlambert_vert:M1,meshlambert_frag:b1,meshmatcap_vert:S1,meshmatcap_frag:E1,meshnormal_vert:w1,meshnormal_frag:T1,meshphong_vert:A1,meshphong_frag:R1,meshphysical_vert:C1,meshphysical_frag:P1,meshtoon_vert:I1,meshtoon_frag:L1,points_vert:D1,points_frag:N1,shadow_vert:U1,shadow_frag:O1,sprite_vert:F1,sprite_frag:B1},Ye={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ii={basic:{uniforms:In([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:In([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new De(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:In([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:In([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:In([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new De(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:In([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:In([Ye.points,Ye.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:In([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:In([Ye.common,Ye.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:In([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:In([Ye.sprite,Ye.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:In([Ye.common,Ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:In([Ye.lights,Ye.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ii.physical={uniforms:In([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var sl={r:0,b:0,g:0},nr=new Ti,z1=new je;function k1(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1,_=g(b);_===null?d(a,l):_&&_.isColor&&(d(_,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===tc)?(u===void 0&&(u=new et(new fn(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:to(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),nr.copy(M.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z1.makeRotationFromEuler(nr)),u.material.toneMapped=xt.getTransfer(_.colorSpace)!==Lt,(h!==_||f!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new et(new kn(2,2),new Mt({name:"BackgroundMaterial",uniforms:to(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=xt.getTransfer(_.colorSpace)!==Lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(sl,Um(n)),i.buffers.color.setClear(sl.r,sl.g,sl.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:m}}function H1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,R,N,F,L){let I=!1,H=h(F,N,R);r!==H&&(r=H,c(r.object)),I=p(S,F,N,L),I&&g(S,F,N,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,_(S,R,N,F),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,R,N){let F=N.wireframe===!0,L=i[S.id];L===void 0&&(L={},i[S.id]=L);let I=L[R.id];I===void 0&&(I={},L[R.id]=I);let H=I[F];return H===void 0&&(H=f(l()),I[F]=H),H}function f(S){let R=[],N=[],F=[];for(let L=0;L<t;L++)R[L]=0,N[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,R,N,F){let L=r.attributes,I=R.attributes,H=0,W=N.getAttributes();for(let z in W)if(W[z].location>=0){let V=L[z],q=I[z];if(q===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),V===void 0||V.attribute!==q||q&&V.data!==q.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(S,R,N,F){let L={},I=R.attributes,H=0,W=N.getAttributes();for(let z in W)if(W[z].location>=0){let V=I[z];V===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));let q={};q.attribute=V,V&&V.data&&(q.data=V.data),L[z]=q,H++}r.attributes=L,r.attributesNum=H,r.index=F}function x(){let S=r.newAttributes;for(let R=0,N=S.length;R<N;R++)S[R]=0}function m(S){d(S,0)}function d(S,R){let N=r.newAttributes,F=r.enabledAttributes,L=r.attributeDivisors;N[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),L[S]!==R&&(n.vertexAttribDivisor(S,R),L[S]=R)}function b(){let S=r.newAttributes,R=r.enabledAttributes;for(let N=0,F=R.length;N<F;N++)R[N]!==S[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function M(S,R,N,F,L,I,H){H===!0?n.vertexAttribIPointer(S,R,N,L,I):n.vertexAttribPointer(S,R,N,F,L,I)}function _(S,R,N,F){x();let L=F.attributes,I=N.getAttributes(),H=R.defaultAttributeValues;for(let W in I){let z=I[W];if(z.location>=0){let O=L[W];if(O===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),O!==void 0){let V=O.normalized,q=O.itemSize,se=e.get(O);if(se===void 0)continue;let me=se.buffer,ie=se.type,J=se.bytesPerElement,Q=ie===n.INT||ie===n.UNSIGNED_INT||O.gpuType===rf;if(O.isInterleavedBufferAttribute){let oe=O.data,he=oe.stride,_e=O.offset;if(oe.isInstancedInterleavedBuffer){for(let Se=0;Se<z.locationSize;Se++)d(z.location+Se,oe.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<z.locationSize;Se++)m(z.location+Se);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Se=0;Se<z.locationSize;Se++)M(z.location+Se,q/z.locationSize,ie,V,he*J,(_e+q/z.locationSize*Se)*J,Q)}else{if(O.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)d(z.location+oe,O.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let oe=0;oe<z.locationSize;oe++)m(z.location+oe);n.bindBuffer(n.ARRAY_BUFFER,me);for(let oe=0;oe<z.locationSize;oe++)M(z.location+oe,q/z.locationSize,ie,V,q*J,q/z.locationSize*oe*J,Q)}}else if(H!==void 0){let V=H[W];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(z.location,V);break;case 3:n.vertexAttrib3fv(z.location,V);break;case 4:n.vertexAttrib4fv(z.location,V);break;default:n.vertexAttrib1fv(z.location,V)}}}}b()}function T(){w();for(let S in i){let R=i[S];for(let N in R){let F=R[N];for(let L in F)u(F[L].object),delete F[L];delete R[N]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let R=i[S.id];for(let N in R){let F=R[N];for(let L in F)u(F[L].object),delete F[L];delete R[N]}delete i[S.id]}function v(S){for(let R in i){let N=i[R];if(N[S.id]===void 0)continue;let F=N[S.id];for(let L in F)u(F[L].object),delete F[L];delete N[S.id]}}function w(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function V1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==zn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==wi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Si&&!w)}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function W1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Mi,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,M=b*4,_=d.clippingState||null;l.value=_,_=u(g,f,M,p);for(let T=0;T!==M;++T)_[T]=t[T];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function X1(n){let e=new WeakMap;function t(o,a){return a===Yu?o.mapping=Zr:a===$u&&(o.mapping=Kr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yu||a===$u)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Th(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Cs=class extends Il{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vr=4,Cp=[.125,.215,.35,.446,.526,.582],rr=20,Tu=new Cs,Pp=new De,Au=null,Ru=0,Cu=0,Pu=!1,sr=(1+Math.sqrt(5))/2,Ur=1/sr,Ip=[new G(-sr,Ur,0),new G(sr,Ur,0),new G(-Ur,0,sr),new G(Ur,0,sr),new G(0,sr,-Ur),new G(0,sr,Ur),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],no=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:dn,format:zn,colorSpace:wn,depthBuffer:!1},s=Lp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q1(r)),this._blurMaterial=Y1(r,e,t)}return s}_compileMaterial(e){let t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,i,s){let a=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pp),u.toneMapping=ws,u.autoClear=!1;let p=new zt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new et(new fn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Pp),x=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;rl(s,b*M,d>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Zr||e.mapping===Kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;rl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ip[(s-r-1)%Ip.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new et(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*rr-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):rr;m>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);let d=[],b=0;for(let v=0;v<rr;++v){let w=v/x,y=Math.exp(-w*w/2);d.push(y),v===0?b+=y:v<m&&(b+=2*y)}for(let v=0;v<d.length;v++)d[v]=d[v]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let _=this._sizeLods[s],T=3*_*(s>M-Vr?s-M+Vr:0),E=4*(this._cubeSize-_);rl(t,T,E,3*_,2*_),l.setRenderTarget(t),l.render(h,Tu)}};function q1(n){let e=[],t=[],i=[],s=n,r=n-Vr+1+Cp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Vr?l=Cp[o-n+Vr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),M=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){let v=E%3*2/3-1,w=E>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];b.set(y,x*g*E),M.set(f,m*g*E);let S=[E,E,E,E,E,E];_.set(S,d*g*E)}let T=new ht;T.setAttribute("position",new vt(b,x)),T.setAttribute("uv",new vt(M,m)),T.setAttribute("faceIndex",new vt(_,d)),e.push(T),s>Vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lp(n,e,t){let i=new $t(n,e,t);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Y1(n,e,t){let i=new Float32Array(rr),s=new G(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:df(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Dp(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function Np(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function df(){return`

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
	`}function $1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Yu||l===$u,u=l===Zr||l===Kr;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new no(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new no(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Z1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function K1(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let M=0,_=b.length;M<_;M+=3){let T=b[M+0],E=b[M+1],v=b[M+2];f.push(T,E,E,v,v,T)}}else if(g!==void 0){let b=g.array;x=g.version;for(let M=0,_=b.length/3-1;M<_;M+=3){let T=M+0,E=M+1,v=M+2;f.push(T,E,E,v,v,T)}}else return;let m=new(Dm(f)?Pl:Cl)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function j1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function J1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Q1(n,e,t){let i=new WeakMap,s=new wt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let y=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*T*4*h),v=new Al(E,_,T,h);v.type=Si,v.needsUpdate=!0;let w=M*4;for(let S=0;S<h;S++){let R=m[S],N=d[S],F=b[S],L=_*T*4*S;for(let I=0;I<R.count;I++){let H=I*w;p===!0&&(s.fromBufferAttribute(R,I),E[L+H+0]=s.x,E[L+H+1]=s.y,E[L+H+2]=s.z,E[L+H+3]=0),g===!0&&(s.fromBufferAttribute(N,I),E[L+H+4]=s.x,E[L+H+5]=s.y,E[L+H+6]=s.z,E[L+H+7]=0),x===!0&&(s.fromBufferAttribute(F,I),E[L+H+8]=s.x,E[L+H+9]=s.y,E[L+H+10]=s.z,E[L+H+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new Ke(_,T)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function eM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var io=class extends hn{constructor(e,t,i,s,r,o,a,l,c,u=Wr){if(u!==Wr&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wr&&(i=or),i===void 0&&u===As&&(i=Ts),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fm=new hn,Up=new io(1,1),Bm=new Al,zm=new Eh,km=new Ll,Op=[],Fp=[],Bp=new Float32Array(16),zp=new Float32Array(9),kp=new Float32Array(4);function fo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rc(n,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function iM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function sM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function rM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;kp.set(i),n.uniformMatrix2fv(this.addr,!1,kp),ln(t,i)}}function oM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;zp.set(i),n.uniformMatrix3fv(this.addr,!1,zp),ln(t,i)}}function aM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Bp.set(i),n.uniformMatrix4fv(this.addr,!1,Bp),ln(t,i)}}function lM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function uM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function fM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function pM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function mM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function gM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Up.compareFunction=Im,r=Up):r=Fm,t.setTexture2D(e||r,s)}function xM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zm,s)}function vM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||km,s)}function yM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Bm,s)}function _M(n){switch(n){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return yM}}function MM(n,e){n.uniform1fv(this.addr,e)}function bM(n,e){let t=fo(e,this.size,2);n.uniform2fv(this.addr,t)}function SM(n,e){let t=fo(e,this.size,3);n.uniform3fv(this.addr,t)}function EM(n,e){let t=fo(e,this.size,4);n.uniform4fv(this.addr,t)}function wM(n,e){let t=fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TM(n,e){let t=fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AM(n,e){let t=fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RM(n,e){n.uniform1iv(this.addr,e)}function CM(n,e){n.uniform2iv(this.addr,e)}function PM(n,e){n.uniform3iv(this.addr,e)}function IM(n,e){n.uniform4iv(this.addr,e)}function LM(n,e){n.uniform1uiv(this.addr,e)}function DM(n,e){n.uniform2uiv(this.addr,e)}function NM(n,e){n.uniform3uiv(this.addr,e)}function UM(n,e){n.uniform4uiv(this.addr,e)}function OM(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fm,r[o])}function FM(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zm,r[o])}function BM(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||km,r[o])}function zM(n,e,t){let i=this.cache,s=e.length,r=rc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bm,r[o])}function kM(n){switch(n){case 5126:return MM;case 35664:return bM;case 35665:return SM;case 35666:return EM;case 35674:return wM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return IM;case 5125:return LM;case 36294:return DM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}var Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}},Rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}},Ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Iu=/(\w+)(\])?(\[|\.)?/g;function Hp(n,e){n.seq.push(e),n.map[e.id]=e}function HM(n,e,t){let i=n.name,s=i.length;for(Iu.lastIndex=0;;){let r=Iu.exec(i),o=Iu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hp(t,c===void 0?new Ah(a,n,e):new Rh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ch(a),Hp(t,h)),t=h}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);HM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var VM=37297,GM=0;function WM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gp=new dt;function XM(n){xt._getMatrix(Gp,xt.workingColorSpace,n);let e=`mat3( ${Gp.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case sc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+WM(n.getShaderSource(e),o)}else return s}function qM(n,e){let t=XM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YM(n,e){let t;switch(e){case Jh:t="Linear";break;case Qh:t="Reinhard";break;case ef:t="Cineon";break;case la:t="ACESFilmic";break;case tf:t="AgX";break;case nf:t="Neutral";break;case cv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ol=new G;function $M(){xt.getLuminanceCoefficients(ol);let n=ol.x.toFixed(4),e=ol.y.toFixed(4),t=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function KM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qo(n){return n!==""}function Xp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var JM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(n){return n.replace(JM,eb)}var QM=new Map;function eb(n,e){let t=pt[e];if(t===void 0){let i=QM.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ph(t)}var tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(n){return n.replace(tb,nb)}function nb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $p(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ib(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function sb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Kr:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Kr&&(e="ENVMAP_MODE_REFRACTION"),e}function ob(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case av:e="ENVMAP_BLENDING_MIX";break;case lv:e="ENVMAP_BLENDING_ADD";break}return e}function ab(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ib(t),c=sb(t),u=rb(t),h=ob(t),f=ab(t),p=ZM(t),g=KM(r),x=s.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qo).join(`
`),d.length>0&&(d+=`
`)):(m=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),d=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?pt.tonemapping_pars_fragment:"",t.toneMapping!==ws?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),$M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),o=Ph(o),o=Xp(o,t),o=qp(o,t),a=Ph(a),a=Xp(a,t),a=qp(a,t),o=Yp(o),a=Yp(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=b+m+o,_=b+d+a,T=Vp(s,s.VERTEX_SHADER,M),E=Vp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(R){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(T).trim(),L=s.getShaderInfoLog(E).trim(),I=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,E);else{let W=Wp(s,T,"vertex"),z=Wp(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+W+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||L==="")&&(H=!1);H&&(R.diagnostics={runnable:I,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(T),s.deleteShader(E),w=new Yr(s,x),y=jM(s,x)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let y;this.getAttributes=function(){return y===void 0&&v(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,VM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var cb=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lh(e),t.set(e,i)),i}},Lh=class{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}};function ub(n,e,t,i,s,r,o){let a=new Rl,l=new Ih,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,N,F){let L=N.fog,I=F.geometry,H=y.isMeshStandardMaterial?N.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),z=W&&W.mapping===tc?W.image.height:null,O=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,q=V!==void 0?V.length:0,se=0;I.morphAttributes.position!==void 0&&(se=1),I.morphAttributes.normal!==void 0&&(se=2),I.morphAttributes.color!==void 0&&(se=3);let me,ie,J,Q;if(O){let Ae=Ii[O];me=Ae.vertexShader,ie=Ae.fragmentShader}else me=y.vertexShader,ie=y.fragmentShader,l.update(y),J=l.getVertexShaderID(y),Q=l.getFragmentShaderID(y);let oe=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),_e=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Ie=!!y.map,ne=!!y.matcap,Ee=!!W,X=!!y.aoMap,We=!!y.lightMap,we=!!y.bumpMap,Le=!!y.normalMap,Pe=!!y.displacementMap,Ne=!!y.emissiveMap,pe=!!y.metalnessMap,P=!!y.roughnessMap,A=y.anisotropy>0,ee=y.clearcoat>0,le=y.dispersion>0,xe=y.iridescence>0,fe=y.sheen>0,Be=y.transmission>0,Re=A&&!!y.anisotropyMap,Ue=ee&&!!y.clearcoatMap,Xe=ee&&!!y.clearcoatNormalMap,be=ee&&!!y.clearcoatRoughnessMap,Fe=xe&&!!y.iridescenceMap,$e=xe&&!!y.iridescenceThicknessMap,Qe=fe&&!!y.sheenColorMap,U=fe&&!!y.sheenRoughnessMap,K=!!y.specularMap,$=!!y.specularColorMap,B=!!y.specularIntensityMap,C=Be&&!!y.transmissionMap,Z=Be&&!!y.thicknessMap,k=!!y.gradientMap,j=!!y.alphaMap,Y=y.alphaTest>0,ue=!!y.alphaHash,Te=!!y.extensions,ze=ws;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ze=n.toneMapping);let Oe={shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:ie,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:_e,instancingColor:_e&&F.instanceColor!==null,instancingMorph:_e&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:wn,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:ne,envMap:Ee,envMapMode:Ee&&W.mapping,envMapCubeUVHeight:z,aoMap:X,lightMap:We,bumpMap:we,normalMap:Le,displacementMap:f&&Pe,emissiveMap:Ne,normalMapObjectSpace:Le&&y.normalMapType===pv,normalMapTangentSpace:Le&&y.normalMapType===ic,metalnessMap:pe,roughnessMap:P,anisotropy:A,anisotropyMap:Re,clearcoat:ee,clearcoatMap:Ue,clearcoatNormalMap:Xe,clearcoatRoughnessMap:be,dispersion:le,iridescence:xe,iridescenceMap:Fe,iridescenceThicknessMap:$e,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:U,specularMap:K,specularColorMap:$,specularIntensityMap:B,transmission:Be,transmissionMap:C,thicknessMap:Z,gradientMap:k,opaque:y.transparent===!1&&y.blending===Gr&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:Y,alphaHash:ue,combine:y.combine,mapUv:Ie&&x(y.map.channel),aoMapUv:X&&x(y.aoMap.channel),lightMapUv:We&&x(y.lightMap.channel),bumpMapUv:we&&x(y.bumpMap.channel),normalMapUv:Le&&x(y.normalMap.channel),displacementMapUv:Pe&&x(y.displacementMap.channel),emissiveMapUv:Ne&&x(y.emissiveMap.channel),metalnessMapUv:pe&&x(y.metalnessMap.channel),roughnessMapUv:P&&x(y.roughnessMap.channel),anisotropyMapUv:Re&&x(y.anisotropyMap.channel),clearcoatMapUv:Ue&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:U&&x(y.sheenRoughnessMap.channel),specularMapUv:K&&x(y.specularMap.channel),specularColorMapUv:$&&x(y.specularColorMap.channel),specularIntensityMapUv:B&&x(y.specularIntensityMap.channel),transmissionMapUv:C&&x(y.transmissionMap.channel),thicknessMapUv:Z&&x(y.thicknessMap.channel),alphaMapUv:j&&x(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Le||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Ie||j),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:he,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ne&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===Lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Te&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&y.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function d(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(S,y),M(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let S=g[y.type],R;if(S){let N=Ii[S];R=Tn.clone(N.uniforms)}else R=y.uniforms;return R}function T(y,S){let R;for(let N=0,F=u.length;N<F;N++){let L=u[N];if(L.cacheKey===S){R=L,++R.usedTimes;break}}return R===void 0&&(R=new lb(n,S,y,r),u.push(R)),R}function E(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function v(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:v,programs:u,dispose:w}}function hb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||fb),i.length>1&&i.sort(f||Zp),s.length>1&&s.sort(f||Zp)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function db(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Kp,n.set(i,[o])):s>=r.length?(o=new Kp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new De};break;case"SpotLight":t={position:new G,direction:new G,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function mb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var gb=0;function xb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vb(n){let e=new pb,t=mb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,M=0,_=0,T=0,E=0,v=0;c.sort(xb);for(let y=0,S=c.length;y<S;y++){let R=c[y],N=R.color,F=R.intensity,L=R.distance,I=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*F,h+=N.g*F,f+=N.b*F;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],F);v++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,z=t.get(R);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=R.shadow.matrix,b++}i.directional[p]=H,p++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=L,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[x]=H;let W=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,W.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=W.matrix,R.castShadow){let z=t.get(R);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=I,_++}x++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let W=R.shadow,z=t.get(R);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(F),H.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[d]=H,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ye.LTC_FLOAT_1,i.rectAreaLTC2=Ye.LTC_FLOAT_2):(i.rectAreaLTC1=Ye.LTC_HALF_1,i.rectAreaLTC2=Ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==b||w.numPointShadows!==M||w.numSpotShadows!==_||w.numSpotMaps!==T||w.numLightProbes!==v)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=v,w.directionalLength=p,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=b,w.numPointShadows=M,w.numSpotShadows=_,w.numSpotMaps=T,w.numLightProbes=v,i.version=gb++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let M=c[d];if(M.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function jp(n){let e=new vb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new jp(n),e.set(s,[a])):r>=o.length?(a=new jp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Dh=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nh=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
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
}`;function bb(n,e,t){let i=new ea,s=new Ke,r=new Ke,o=new wt,a=new Dh({depthPacking:dv}),l=new Nh,c={},u=t.maxTextureSize,h={[Li]:nn,[nn]:Li,[Dt]:Dt},f=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:_b,fragmentShader:Mb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ht;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let d=this.type;this.render=function(E,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let y=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(rn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=d!==Ji&&this.type===Ji,L=d===Ji&&this.type!==Ji;for(let I=0,H=E.length;I<H;I++){let W=E[I],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let O=z.getFrameExtents();if(s.multiply(O),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,z.mapSize.y=r.y)),z.map===null||F===!0||L===!0){let q=this.type!==Ji?{minFilter:jt,magFilter:jt}:{};z.map!==null&&z.map.dispose(),z.map=new $t(s.x,s.y,q),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let V=z.getViewportCount();for(let q=0;q<V;q++){let se=z.getViewport(q);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),N.viewport(o),z.updateMatrices(W,q),i=z.getFrustum(),_(v,w,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===Ji&&b(z,w),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,R)};function b(E,v){let w=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $t(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(v,null,w,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(v,null,w,p,x,null)}function M(E,v,w,y){let S=null,R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=w.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let N=S.uuid,F=v.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let I=L[F];I===void 0&&(I=S.clone(),L[F]=I,v.addEventListener("dispose",T)),S=I}if(S.visible=v.visible,S.wireframe=v.wireframe,y===Ji?S.side=v.shadowSide!==null?v.shadowSide:v.side:S.side=v.shadowSide!==null?v.shadowSide:h[v.side],S.alphaMap=v.alphaMap,S.alphaTest=v.alphaTest,S.map=v.map,S.clipShadows=v.clipShadows,S.clippingPlanes=v.clippingPlanes,S.clipIntersection=v.clipIntersection,S.displacementMap=v.displacementMap,S.displacementScale=v.displacementScale,S.displacementBias=v.displacementBias,S.wireframeLinewidth=v.wireframeLinewidth,S.linewidth=v.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=n.properties.get(S);N.light=w}return S}function _(E,v,w,y,S){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Ji)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let F=e.update(E),L=E.material;if(Array.isArray(L)){let I=F.groups;for(let H=0,W=I.length;H<W;H++){let z=I[H],O=L[z.materialIndex];if(O&&O.visible){let V=M(E,O,y,S);E.onBeforeShadow(n,E,v,w,F,V,z),n.renderBufferDirect(w,null,F,V,E,z),E.onAfterShadow(n,E,v,w,F,V,z)}}}else if(L.visible){let I=M(E,L,y,S);E.onBeforeShadow(n,E,v,w,F,I,null),n.renderBufferDirect(w,null,F,I,E,null),E.onAfterShadow(n,E,v,w,F,I,null)}}let N=E.children;for(let F=0,L=N.length;F<L;F++)_(N[F],v,w,y,S)}function T(E){E.target.removeEventListener("dispose",T);for(let w in c){let y=c[w],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}var Sb={[ku]:Hu,[Vu]:Xu,[Gu]:qu,[$r]:Wu,[Hu]:ku,[Xu]:Vu,[qu]:Gu,[Wu]:$r};function Eb(n,e){function t(){let C=!1,Z=new wt,k=null,j=new wt(0,0,0,0);return{setMask:function(Y){k!==Y&&!C&&(n.colorMask(Y,Y,Y,Y),k=Y)},setLocked:function(Y){C=Y},setClear:function(Y,ue,Te,ze,Oe){Oe===!0&&(Y*=ze,ue*=ze,Te*=ze),Z.set(Y,ue,Te,ze),j.equals(Z)===!1&&(n.clearColor(Y,ue,Te,ze),j.copy(Z))},reset:function(){C=!1,k=null,j.set(-1,0,0,0)}}}function i(){let C=!1,Z=!1,k=null,j=null,Y=null;return{setReversed:function(ue){if(Z!==ue){let Te=e.get("EXT_clip_control");Z?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT);let ze=Y;Y=null,this.setClear(ze)}Z=ue},getReversed:function(){return Z},setTest:function(ue){ue?oe(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ue){k!==ue&&!C&&(n.depthMask(ue),k=ue)},setFunc:function(ue){if(Z&&(ue=Sb[ue]),j!==ue){switch(ue){case ku:n.depthFunc(n.NEVER);break;case Hu:n.depthFunc(n.ALWAYS);break;case Vu:n.depthFunc(n.LESS);break;case $r:n.depthFunc(n.LEQUAL);break;case Gu:n.depthFunc(n.EQUAL);break;case Wu:n.depthFunc(n.GEQUAL);break;case Xu:n.depthFunc(n.GREATER);break;case qu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ue}},setLocked:function(ue){C=ue},setClear:function(ue){Y!==ue&&(Z&&(ue=1-ue),n.clearDepth(ue),Y=ue)},reset:function(){C=!1,k=null,j=null,Y=null,Z=!1}}}function s(){let C=!1,Z=null,k=null,j=null,Y=null,ue=null,Te=null,ze=null,Oe=null;return{setTest:function(Ae){C||(Ae?oe(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ae){Z!==Ae&&!C&&(n.stencilMask(Ae),Z=Ae)},setFunc:function(Ae,ae,te){(k!==Ae||j!==ae||Y!==te)&&(n.stencilFunc(Ae,ae,te),k=Ae,j=ae,Y=te)},setOp:function(Ae,ae,te){(ue!==Ae||Te!==ae||ze!==te)&&(n.stencilOp(Ae,ae,te),ue=Ae,Te=ae,ze=te)},setLocked:function(Ae){C=Ae},setClear:function(Ae){Oe!==Ae&&(n.clearStencil(Ae),Oe=Ae)},reset:function(){C=!1,Z=null,k=null,j=null,Y=null,ue=null,Te=null,ze=null,Oe=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,M=null,_=null,T=null,E=null,v=new De(0,0,0),w=0,y=!1,S=null,R=null,N=null,F=null,L=null,I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=W>=2);let O=null,V={},q=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),me=new wt().fromArray(q),ie=new wt().fromArray(se);function J(C,Z,k,j){let Y=new Uint8Array(4),ue=n.createTexture();n.bindTexture(C,ue),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<k;Te++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,Y):n.texImage2D(Z+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Y);return ue}let Q={};Q[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc($r),we(!1),Le(Qd),oe(n.CULL_FACE),X(rn);function oe(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function he(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function _e(C,Z){return h[C]!==Z?(n.bindFramebuffer(C,Z),h[C]=Z,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Z),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Se(C,Z){let k=p,j=!1;if(C){k=f.get(Z),k===void 0&&(k=[],f.set(Z,k));let Y=C.textures;if(k.length!==Y.length||k[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Te=Y.length;ue<Te;ue++)k[ue]=n.COLOR_ATTACHMENT0+ue;k.length=Y.length,j=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,j=!0);j&&n.drawBuffers(k)}function Ie(C){return g!==C?(n.useProgram(C),g=C,!0):!1}let ne={[Fn]:n.FUNC_ADD,[$x]:n.FUNC_SUBTRACT,[Zx]:n.FUNC_REVERSE_SUBTRACT};ne[Kx]=n.MIN,ne[jx]=n.MAX;let Ee={[ho]:n.ZERO,[Kh]:n.ONE,[Jx]:n.SRC_COLOR,[zu]:n.SRC_ALPHA,[nv]:n.SRC_ALPHA_SATURATE,[ec]:n.DST_COLOR,[Ql]:n.DST_ALPHA,[Qx]:n.ONE_MINUS_SRC_COLOR,[Ko]:n.ONE_MINUS_SRC_ALPHA,[tv]:n.ONE_MINUS_DST_COLOR,[ev]:n.ONE_MINUS_DST_ALPHA,[iv]:n.CONSTANT_COLOR,[sv]:n.ONE_MINUS_CONSTANT_COLOR,[rv]:n.CONSTANT_ALPHA,[ov]:n.ONE_MINUS_CONSTANT_ALPHA};function X(C,Z,k,j,Y,ue,Te,ze,Oe,Ae){if(C===rn){x===!0&&(he(n.BLEND),x=!1);return}if(x===!1&&(oe(n.BLEND),x=!0),C!==aa){if(C!==m||Ae!==y){if((d!==Fn||_!==Fn)&&(n.blendEquation(n.FUNC_ADD),d=Fn,_=Fn),Ae)switch(C){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Di:n.blendFunc(n.ONE,n.ONE);break;case ep:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Di:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ep:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,M=null,T=null,E=null,v.set(0,0,0),w=0,m=C,y=Ae}return}Y=Y||Z,ue=ue||k,Te=Te||j,(Z!==d||Y!==_)&&(n.blendEquationSeparate(ne[Z],ne[Y]),d=Z,_=Y),(k!==b||j!==M||ue!==T||Te!==E)&&(n.blendFuncSeparate(Ee[k],Ee[j],Ee[ue],Ee[Te]),b=k,M=j,T=ue,E=Te),(ze.equals(v)===!1||Oe!==w)&&(n.blendColor(ze.r,ze.g,ze.b,Oe),v.copy(ze),w=Oe),m=C,y=!1}function We(C,Z){C.side===Dt?he(n.CULL_FACE):oe(n.CULL_FACE);let k=C.side===nn;Z&&(k=!k),we(k),C.blending===Gr&&C.transparent===!1?X(rn):X(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let j=C.stencilWrite;a.setTest(j),j&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ne(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(C){S!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),S=C)}function Le(C){C!==Xx?(oe(n.CULL_FACE),C!==R&&(C===Qd?n.cullFace(n.BACK):C===qx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),R=C}function Pe(C){C!==N&&(H&&n.lineWidth(C),N=C)}function Ne(C,Z,k){C?(oe(n.POLYGON_OFFSET_FILL),(F!==Z||L!==k)&&(n.polygonOffset(Z,k),F=Z,L=k)):he(n.POLYGON_OFFSET_FILL)}function pe(C){C?oe(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function P(C){C===void 0&&(C=n.TEXTURE0+I-1),O!==C&&(n.activeTexture(C),O=C)}function A(C,Z,k){k===void 0&&(O===null?k=n.TEXTURE0+I-1:k=O);let j=V[k];j===void 0&&(j={type:void 0,texture:void 0},V[k]=j),(j.type!==C||j.texture!==Z)&&(O!==k&&(n.activeTexture(k),O=k),n.bindTexture(C,Z||Q[C]),j.type=C,j.texture=Z)}function ee(){let C=V[O];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Qe(C){me.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),me.copy(C))}function U(C){ie.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function K(C,Z){let k=c.get(Z);k===void 0&&(k=new WeakMap,c.set(Z,k));let j=k.get(C);j===void 0&&(j=n.getUniformBlockIndex(Z,C.name),k.set(C,j))}function $(C,Z){let j=c.get(Z).get(C);l.get(Z)!==j&&(n.uniformBlockBinding(Z,j,C.__bindingPointIndex),l.set(Z,j))}function B(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},O=null,V={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,M=null,_=null,T=null,E=null,v=new De(0,0,0),w=0,y=!1,S=null,R=null,N=null,F=null,L=null,me.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:he,bindFramebuffer:_e,drawBuffers:Se,useProgram:Ie,setBlending:X,setMaterial:We,setFlipSided:we,setCullFace:Le,setLineWidth:Pe,setPolygonOffset:Ne,setScissorTest:pe,activeTexture:P,bindTexture:A,unbindTexture:ee,compressedTexImage2D:le,compressedTexImage3D:xe,texImage2D:Fe,texImage3D:$e,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:Xe,texStorage3D:be,texSubImage2D:fe,texSubImage3D:Be,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:Qe,viewport:U,reset:B}}function Jp(n,e,t,i){let s=wb(i);switch(t){case Em:return n*e;case Tm:return n*e;case Am:return n*e*2;case lf:return n*e/s.components*s.byteLength;case cf:return n*e/s.components*s.byteLength;case Rm:return n*e*2/s.components*s.byteLength;case uf:return n*e*2/s.components*s.byteLength;case wm:return n*e*3/s.components*s.byteLength;case zn:return n*e*4/s.components*s.byteLength;case hf:return n*e*4/s.components*s.byteLength;case _l:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:case Ju:return Math.max(n,16)*Math.max(e,8)/4;case Zu:case ju:return Math.max(n,8)*Math.max(e,8)/2;case Qu:case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case El:case gh:case xh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cm:case vh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yh:case _h:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wb(n){switch(n){case wi:case Mm:return{byteLength:1,components:1};case Jo:case bm:case dn:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case or:case rf:case Si:return{byteLength:4,components:1};case Sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Tb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):Qo("canvas")}function x(P,A,ee){let le=1,xe=pe(P);if((xe.width>ee||xe.height>ee)&&(le=ee/Math.max(xe.width,xe.height)),le<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let fe=Math.floor(le*xe.width),Be=Math.floor(le*xe.height);h===void 0&&(h=g(fe,Be));let Re=A?g(fe,Be):h;return Re.width=fe,Re.height=Be,Re.getContext("2d").drawImage(P,0,0,fe,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+Be+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,A,ee,le,xe=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=A;if(A===n.RED&&(ee===n.FLOAT&&(fe=n.R32F),ee===n.HALF_FLOAT&&(fe=n.R16F),ee===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.R8UI),ee===n.UNSIGNED_SHORT&&(fe=n.R16UI),ee===n.UNSIGNED_INT&&(fe=n.R32UI),ee===n.BYTE&&(fe=n.R8I),ee===n.SHORT&&(fe=n.R16I),ee===n.INT&&(fe=n.R32I)),A===n.RG&&(ee===n.FLOAT&&(fe=n.RG32F),ee===n.HALF_FLOAT&&(fe=n.RG16F),ee===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RG_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.RG8UI),ee===n.UNSIGNED_SHORT&&(fe=n.RG16UI),ee===n.UNSIGNED_INT&&(fe=n.RG32UI),ee===n.BYTE&&(fe=n.RG8I),ee===n.SHORT&&(fe=n.RG16I),ee===n.INT&&(fe=n.RG32I)),A===n.RGB_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),ee===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),ee===n.UNSIGNED_INT&&(fe=n.RGB32UI),ee===n.BYTE&&(fe=n.RGB8I),ee===n.SHORT&&(fe=n.RGB16I),ee===n.INT&&(fe=n.RGB32I)),A===n.RGBA_INTEGER&&(ee===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),ee===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),ee===n.UNSIGNED_INT&&(fe=n.RGBA32UI),ee===n.BYTE&&(fe=n.RGBA8I),ee===n.SHORT&&(fe=n.RGBA16I),ee===n.INT&&(fe=n.RGBA32I)),A===n.RGB&&ee===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),A===n.RGBA){let Be=xe?sc:xt.getTransfer(le);ee===n.FLOAT&&(fe=n.RGBA32F),ee===n.HALF_FLOAT&&(fe=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(fe=Be===Lt?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function _(P,A){let ee;return P?A===null||A===or||A===Ts?ee=n.DEPTH24_STENCIL8:A===Si?ee=n.DEPTH32F_STENCIL8:A===Jo&&(ee=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===or||A===Ts?ee=n.DEPTH_COMPONENT24:A===Si?ee=n.DEPTH_COMPONENT32F:A===Jo&&(ee=n.DEPTH_COMPONENT16),ee}function T(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==Bn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function E(P){let A=P.target;A.removeEventListener("dispose",E),w(A),A.isVideoTexture&&u.delete(A)}function v(P){let A=P.target;A.removeEventListener("dispose",v),S(A)}function w(P){let A=i.get(P);if(A.__webglInit===void 0)return;let ee=P.source,le=f.get(ee);if(le){let xe=le[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&y(P),Object.keys(le).length===0&&f.delete(ee)}i.remove(P)}function y(P){let A=i.get(P);n.deleteTexture(A.__webglTexture);let ee=P.source,le=f.get(ee);delete le[A.__cacheKey],o.memory.textures--}function S(P){let A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let xe=0;xe<A.__webglFramebuffer[le].length;xe++)n.deleteFramebuffer(A.__webglFramebuffer[le][xe]);else n.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)n.deleteFramebuffer(A.__webglFramebuffer[le]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ee=P.textures;for(let le=0,xe=ee.length;le<xe;le++){let fe=i.get(ee[le]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(ee[le])}i.remove(P)}let R=0;function N(){R=0}function F(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function L(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function I(P,A){let ee=i.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){let le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(ee,P,A);return}}t.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+A)}function H(P,A){let ee=i.get(P);if(P.version>0&&ee.__version!==P.version){ie(ee,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+A)}function W(P,A){let ee=i.get(P);if(P.version>0&&ee.__version!==P.version){ie(ee,P,A);return}t.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+A)}function z(P,A){let ee=i.get(P);if(P.version>0&&ee.__version!==P.version){J(ee,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+A)}let O={[Ln]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},V={[jt]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[Yo]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},q={[mv]:n.NEVER,[Mv]:n.ALWAYS,[gv]:n.LESS,[Im]:n.LEQUAL,[xv]:n.EQUAL,[_v]:n.GEQUAL,[vv]:n.GREATER,[yv]:n.NOTEQUAL};function se(P,A){if(A.type===Si&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Bn||A.magFilter===Yo||A.magFilter===Hr||A.magFilter===ri||A.minFilter===Bn||A.minFilter===Yo||A.minFilter===Hr||A.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,O[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,O[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,O[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,V[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,V[A.minFilter]),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===jt||A.minFilter!==Hr&&A.minFilter!==ri||A.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function me(P,A){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",E));let le=A.source,xe=f.get(le);xe===void 0&&(xe={},f.set(le,xe));let fe=L(A);if(fe!==P.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),xe[fe].usedTimes++;let Be=xe[P.__cacheKey];Be!==void 0&&(xe[P.__cacheKey].usedTimes--,Be.usedTimes===0&&y(A)),P.__cacheKey=fe,P.__webglTexture=xe[fe].texture}return ee}function ie(P,A,ee){let le=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=n.TEXTURE_3D);let xe=me(P,A),fe=A.source;t.bindTexture(le,P.__webglTexture,n.TEXTURE0+ee);let Be=i.get(fe);if(fe.version!==Be.__version||xe===!0){t.activeTexture(n.TEXTURE0+ee);let Re=xt.getPrimaries(xt.workingColorSpace),Ue=A.colorSpace===Ss?null:xt.getPrimaries(A.colorSpace),Xe=A.colorSpace===Ss||Re===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let be=x(A.image,!1,s.maxTextureSize);be=Ne(A,be);let Fe=r.convert(A.format,A.colorSpace),$e=r.convert(A.type),Qe=M(A.internalFormat,Fe,$e,A.colorSpace,A.isVideoTexture);se(le,A);let U,K=A.mipmaps,$=A.isVideoTexture!==!0,B=Be.__version===void 0||xe===!0,C=fe.dataReady,Z=T(A,be);if(A.isDepthTexture)Qe=_(A.format===As,A.type),B&&($?t.texStorage2D(n.TEXTURE_2D,1,Qe,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Qe,be.width,be.height,0,Fe,$e,null));else if(A.isDataTexture)if(K.length>0){$&&B&&t.texStorage2D(n.TEXTURE_2D,Z,Qe,K[0].width,K[0].height);for(let k=0,j=K.length;k<j;k++)U=K[k],$?C&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,U.width,U.height,Fe,$e,U.data):t.texImage2D(n.TEXTURE_2D,k,Qe,U.width,U.height,0,Fe,$e,U.data);A.generateMipmaps=!1}else $?(B&&t.texStorage2D(n.TEXTURE_2D,Z,Qe,be.width,be.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be.width,be.height,Fe,$e,be.data)):t.texImage2D(n.TEXTURE_2D,0,Qe,be.width,be.height,0,Fe,$e,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){$&&B&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,Qe,K[0].width,K[0].height,be.depth);for(let k=0,j=K.length;k<j;k++)if(U=K[k],A.format!==zn)if(Fe!==null)if($){if(C)if(A.layerUpdates.size>0){let Y=Jp(U.width,U.height,A.format,A.type);for(let ue of A.layerUpdates){let Te=U.data.subarray(ue*Y/U.data.BYTES_PER_ELEMENT,(ue+1)*Y/U.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,ue,U.width,U.height,1,Fe,Te)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,U.width,U.height,be.depth,Fe,U.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Qe,U.width,U.height,be.depth,0,U.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,U.width,U.height,be.depth,Fe,$e,U.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,Qe,U.width,U.height,be.depth,0,Fe,$e,U.data)}else{$&&B&&t.texStorage2D(n.TEXTURE_2D,Z,Qe,K[0].width,K[0].height);for(let k=0,j=K.length;k<j;k++)U=K[k],A.format!==zn?Fe!==null?$?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,U.width,U.height,Fe,U.data):t.compressedTexImage2D(n.TEXTURE_2D,k,Qe,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?C&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,U.width,U.height,Fe,$e,U.data):t.texImage2D(n.TEXTURE_2D,k,Qe,U.width,U.height,0,Fe,$e,U.data)}else if(A.isDataArrayTexture)if($){if(B&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,Qe,be.width,be.height,be.depth),C)if(A.layerUpdates.size>0){let k=Jp(be.width,be.height,A.format,A.type);for(let j of A.layerUpdates){let Y=be.data.subarray(j*k/be.data.BYTES_PER_ELEMENT,(j+1)*k/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,be.width,be.height,1,Fe,$e,Y)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Fe,$e,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Qe,be.width,be.height,be.depth,0,Fe,$e,be.data);else if(A.isData3DTexture)$?(B&&t.texStorage3D(n.TEXTURE_3D,Z,Qe,be.width,be.height,be.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Fe,$e,be.data)):t.texImage3D(n.TEXTURE_3D,0,Qe,be.width,be.height,be.depth,0,Fe,$e,be.data);else if(A.isFramebufferTexture){if(B)if($)t.texStorage2D(n.TEXTURE_2D,Z,Qe,be.width,be.height);else{let k=be.width,j=be.height;for(let Y=0;Y<Z;Y++)t.texImage2D(n.TEXTURE_2D,Y,Qe,k,j,0,Fe,$e,null),k>>=1,j>>=1}}else if(K.length>0){if($&&B){let k=pe(K[0]);t.texStorage2D(n.TEXTURE_2D,Z,Qe,k.width,k.height)}for(let k=0,j=K.length;k<j;k++)U=K[k],$?C&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,Fe,$e,U):t.texImage2D(n.TEXTURE_2D,k,Qe,Fe,$e,U);A.generateMipmaps=!1}else if($){if(B){let k=pe(be);t.texStorage2D(n.TEXTURE_2D,Z,Qe,k.width,k.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,$e,be)}else t.texImage2D(n.TEXTURE_2D,0,Qe,Fe,$e,be);m(A)&&d(le),Be.__version=fe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function J(P,A,ee){if(A.image.length!==6)return;let le=me(P,A),xe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+ee);let fe=i.get(xe);if(xe.version!==fe.__version||le===!0){t.activeTexture(n.TEXTURE0+ee);let Be=xt.getPrimaries(xt.workingColorSpace),Re=A.colorSpace===Ss?null:xt.getPrimaries(A.colorSpace),Ue=A.colorSpace===Ss||Be===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Xe=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let j=0;j<6;j++)!Xe&&!be?Fe[j]=x(A.image[j],!0,s.maxCubemapSize):Fe[j]=be?A.image[j].image:A.image[j],Fe[j]=Ne(A,Fe[j]);let $e=Fe[0],Qe=r.convert(A.format,A.colorSpace),U=r.convert(A.type),K=M(A.internalFormat,Qe,U,A.colorSpace),$=A.isVideoTexture!==!0,B=fe.__version===void 0||le===!0,C=xe.dataReady,Z=T(A,$e);se(n.TEXTURE_CUBE_MAP,A);let k;if(Xe){$&&B&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,K,$e.width,$e.height);for(let j=0;j<6;j++){k=Fe[j].mipmaps;for(let Y=0;Y<k.length;Y++){let ue=k[Y];A.format!==zn?Qe!==null?$?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y,0,0,ue.width,ue.height,Qe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y,K,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y,0,0,ue.width,ue.height,Qe,U,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y,K,ue.width,ue.height,0,Qe,U,ue.data)}}}else{if(k=A.mipmaps,$&&B){k.length>0&&Z++;let j=pe(Fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,K,j.width,j.height)}for(let j=0;j<6;j++)if(be){$?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Fe[j].width,Fe[j].height,Qe,U,Fe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,K,Fe[j].width,Fe[j].height,0,Qe,U,Fe[j].data);for(let Y=0;Y<k.length;Y++){let Te=k[Y].image[j].image;$?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y+1,0,0,Te.width,Te.height,Qe,U,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y+1,K,Te.width,Te.height,0,Qe,U,Te.data)}}else{$?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Qe,U,Fe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,K,Qe,U,Fe[j]);for(let Y=0;Y<k.length;Y++){let ue=k[Y];$?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y+1,0,0,Qe,U,ue.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y+1,K,Qe,U,ue.image[j])}}}m(A)&&d(n.TEXTURE_CUBE_MAP),fe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Q(P,A,ee,le,xe,fe){let Be=r.convert(ee.format,ee.colorSpace),Re=r.convert(ee.type),Ue=M(ee.internalFormat,Be,Re,ee.colorSpace),Xe=i.get(A),be=i.get(ee);if(be.__renderTarget=A,!Xe.__hasExternalTextures){let Fe=Math.max(1,A.width>>fe),$e=Math.max(1,A.height>>fe);xe===n.TEXTURE_3D||xe===n.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,Ue,Fe,$e,A.depth,0,Be,Re,null):t.texImage2D(xe,fe,Ue,Fe,$e,0,Be,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Le(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,xe,be.__webglTexture,0,we(A)):(xe===n.TEXTURE_2D||xe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,xe,be.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(P,A,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer){let le=A.depthTexture,xe=le&&le.isDepthTexture?le.type:null,fe=_(A.stencilBuffer,xe),Be=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=we(A);Le(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,fe,A.width,A.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,P)}else{let le=A.textures;for(let xe=0;xe<le.length;xe++){let fe=le[xe],Be=r.convert(fe.format,fe.colorSpace),Re=r.convert(fe.type),Ue=M(fe.internalFormat,Be,Re,fe.colorSpace),Xe=we(A);ee&&Le(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ue,A.width,A.height):Le(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ue,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let le=i.get(A.depthTexture);le.__renderTarget=A,(!le.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);let xe=le.__webglTexture,fe=we(A);if(A.depthTexture.format===Wr)Le(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,xe,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,xe,0);else if(A.depthTexture.format===As)Le(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,xe,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function _e(P){let A=i.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let le=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),le){let xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,le.removeEventListener("dispose",xe)};le.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=le}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");he(A.__webglFramebuffer,P)}else if(ee){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]===void 0)A.__webglDepthbuffer[le]=n.createRenderbuffer(),oe(A.__webglDepthbuffer[le],P,!1);else{let xe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),oe(A.__webglDepthbuffer,P,!1);else{let le=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,xe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(P,A,ee){let le=i.get(P);A!==void 0&&Q(le.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&_e(P)}function Ie(P){let A=P.texture,ee=i.get(P),le=i.get(A);P.addEventListener("dispose",v);let xe=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Be=xe.length>1;if(Be||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=A.version,o.memory.textures++),fe){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)ee.__webglFramebuffer[Re][Ue]=n.createFramebuffer()}else ee.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)ee.__webglFramebuffer[Re]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(Be)for(let Re=0,Ue=xe.length;Re<Ue;Re++){let Xe=i.get(xe[Re]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Le(P)===!1){ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){let Ue=xe[Re];ee.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);let Xe=r.convert(Ue.format,Ue.colorSpace),be=r.convert(Ue.type),Fe=M(Ue.internalFormat,Xe,be,Ue.colorSpace,P.isXRRenderTarget===!0),$e=we(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Fe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),se(n.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Q(ee.__webglFramebuffer[Re][Ue],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else Q(ee.__webglFramebuffer[Re],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);m(A)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Re=0,Ue=xe.length;Re<Ue;Re++){let Xe=xe[Re],be=i.get(Xe);t.bindTexture(n.TEXTURE_2D,be.__webglTexture),se(n.TEXTURE_2D,Xe),Q(ee.__webglFramebuffer,P,Xe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),m(Xe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,le.__webglTexture),se(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Q(ee.__webglFramebuffer[Ue],P,A,n.COLOR_ATTACHMENT0,Re,Ue);else Q(ee.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,Re,0);m(A)&&d(Re),t.unbindTexture()}P.depthBuffer&&_e(P)}function ne(P){let A=P.textures;for(let ee=0,le=A.length;ee<le;ee++){let xe=A[ee];if(m(xe)){let fe=b(P),Be=i.get(xe).__webglTexture;t.bindTexture(fe,Be),d(fe),t.unbindTexture()}}}let Ee=[],X=[];function We(P){if(P.samples>0){if(Le(P)===!1){let A=P.textures,ee=P.width,le=P.height,xe=n.COLOR_BUFFER_BIT,fe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(P),Re=A.length>1;if(Re)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=n.STENCIL_BUFFER_BIT)),Re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);let Xe=i.get(A[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,ee,le,0,0,ee,le,xe,n.NEAREST),l===!0&&(Ee.length=0,X.length=0,Ee.push(n.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ee.push(fe),X.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);let Xe=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let A=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function we(P){return Math.min(s.maxSamples,P.samples)}function Le(P){let A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(P){let A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function Ne(P,A){let ee=P.colorSpace,le=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==wn&&ee!==Ss&&(xt.getTransfer(ee)===Lt?(le!==zn||xe!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=Se,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Le}function Ab(n,e){function t(i,s=Ss){let r,o=xt.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===of)return n.UNSIGNED_SHORT_4_4_4_4;if(i===af)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mm)return n.BYTE;if(i===bm)return n.SHORT;if(i===Jo)return n.UNSIGNED_SHORT;if(i===rf)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===Em)return n.ALPHA;if(i===wm)return n.RGB;if(i===zn)return n.RGBA;if(i===Tm)return n.LUMINANCE;if(i===Am)return n.LUMINANCE_ALPHA;if(i===Wr)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===lf)return n.RED;if(i===cf)return n.RED_INTEGER;if(i===Rm)return n.RG;if(i===uf)return n.RG_INTEGER;if(i===hf)return n.RGBA_INTEGER;if(i===_l||i===Ml||i===bl||i===Sl)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zu||i===Ku||i===ju||i===Ju)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ku)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ju)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ju)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qu||i===eh||i===th)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qu||i===eh)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===th)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===uh||i===hh||i===fh||i===dh||i===ph||i===mh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===gh||i===xh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===El)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cm||i===vh||i===yh||i===_h)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===El)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Uh=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rb={type:"move"},Zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new hn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:Cb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fh=class extends Rs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,x=new Oh,m=t.getContextAttributes(),d=null,b=null,M=[],_=[],T=new Ke,E=null,v=new Kt;v.viewport=new wt;let w=new Kt;w.viewport=new wt;let y=[v,w],S=new Uh,R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let J=M[ie];return J===void 0&&(J=new Zo,M[ie]=J),J.getTargetRaySpace()},this.getControllerGrip=function(ie){let J=M[ie];return J===void 0&&(J=new Zo,M[ie]=J),J.getGripSpace()},this.getHand=function(ie){let J=M[ie];return J===void 0&&(J=new Zo,M[ie]=J),J.getHandSpace()};function F(ie){let J=_.indexOf(ie.inputSource);if(J===-1)return;let Q=M[J];Q!==void 0&&(Q.update(ie.inputSource,ie.frame,c||o),Q.dispatchEvent({type:ie.type,data:ie.inputSource}))}function L(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",I);for(let ie=0;ie<M.length;ie++){let J=_[ie];J!==null&&(_[ie]=null,M[ie].disconnect(J))}R=null,N=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,b=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",L),s.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new $t(p.framebufferWidth,p.framebufferHeight,{format:zn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,Q=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?As:Wr,Q=m.stencil?Ts:or);let he={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(he),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new $t(f.textureWidth,f.textureHeight,{format:zn,type:wi,depthTexture:new io(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(ie){for(let J=0;J<ie.removed.length;J++){let Q=ie.removed[J],oe=_.indexOf(Q);oe>=0&&(_[oe]=null,M[oe].disconnect(Q))}for(let J=0;J<ie.added.length;J++){let Q=ie.added[J],oe=_.indexOf(Q);if(oe===-1){for(let _e=0;_e<M.length;_e++)if(_e>=_.length){_.push(Q),oe=_e;break}else if(_[_e]===null){_[_e]=Q,oe=_e;break}if(oe===-1)break}let he=M[oe];he&&he.connect(Q)}}let H=new G,W=new G;function z(ie,J,Q){H.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(Q.matrixWorld);let oe=H.distanceTo(W),he=J.projectionMatrix.elements,_e=Q.projectionMatrix.elements,Se=he[14]/(he[10]-1),Ie=he[14]/(he[10]+1),ne=(he[9]+1)/he[5],Ee=(he[9]-1)/he[5],X=(he[8]-1)/he[0],We=(_e[8]+1)/_e[0],we=Se*X,Le=Se*We,Pe=oe/(-X+We),Ne=Pe*-X;if(J.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ne),ie.translateZ(Pe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),he[10]===-1)ie.projectionMatrix.copy(J.projectionMatrix),ie.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let pe=Se+Pe,P=Ie+Pe,A=we-Ne,ee=Le+(oe-Ne),le=ne*Ie/P*pe,xe=Ee*Ie/P*pe;ie.projectionMatrix.makePerspective(A,ee,le,xe,pe,P),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function O(ie,J){J===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(J.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let J=ie.near,Q=ie.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(Q=x.depthFar)),S.near=w.near=v.near=J,S.far=w.far=v.far=Q,(R!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,N=S.far),v.layers.mask=ie.layers.mask|2,w.layers.mask=ie.layers.mask|4,S.layers.mask=v.layers.mask|w.layers.mask;let oe=ie.parent,he=S.cameras;O(S,oe);for(let _e=0;_e<he.length;_e++)O(he[_e],oe);he.length===2?z(S,v,w):S.projectionMatrix.copy(v.projectionMatrix),V(ie,S,oe)};function V(ie,J,Q){Q===null?ie.matrix.copy(J.matrixWorld):(ie.matrix.copy(Q.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(J.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(J.projectionMatrix),ie.projectionMatrixInverse.copy(J.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Qr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let q=null;function se(ie,J){if(u=J.getViewerPose(c||o),g=J,u!==null){let Q=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let oe=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let _e=0;_e<Q.length;_e++){let Se=Q[_e],Ie=null;if(p!==null)Ie=p.getViewport(Se);else{let Ee=h.getViewSubImage(f,Se);Ie=Ee.viewport,_e===0&&(e.setRenderTargetTextures(b,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(b))}let ne=y[_e];ne===void 0&&(ne=new Kt,ne.layers.enable(_e),ne.viewport=new wt,y[_e]=ne),ne.matrix.fromArray(Se.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Se.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),_e===0&&(S.matrix.copy(ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(ne)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){let _e=h.getDepthInformation(Q[0]);_e&&_e.isValid&&_e.texture&&x.init(e,_e,s.renderState)}}for(let Q=0;Q<M.length;Q++){let oe=_[Q],he=M[Q];oe!==null&&he!==void 0&&he.update(oe,J,c||o)}q&&q(ie,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let me=new Om;me.setAnimationLoop(se),this.setAnimationLoop=function(ie){q=ie},this.dispose=function(){}}},ir=new Ti,Ib=new je;function Lb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Um(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),M=b.envMap,_=b.envMapRotation;M&&(m.envMap.value=M,ir.copy(_),ir.x*=-1,ir.y*=-1,ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(ir)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Db(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let _=M.program;i.uniformBlockBinding(b,_)}function c(b,M){let _=s[b.id];_===void 0&&(g(b),_=u(b),s[b.id]=_,b.addEventListener("dispose",m));let T=M.program;i.updateUBOMapping(b,T);let E=e.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function u(b){let M=h();b.__bindingPointIndex=M;let _=n.createBuffer(),T=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=s[b.id],_=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,v=_.length;E<v;E++){let w=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,S=w.length;y<S;y++){let R=w[y];if(p(R,E,y,T)===!0){let N=R.__offset,F=Array.isArray(R.value)?R.value:[R.value],L=0;for(let I=0;I<F.length;I++){let H=F[I],W=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+L,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,M,_,T){let E=b.value,v=M+"_"+_;if(T[v]===void 0)return typeof E=="number"||typeof E=="boolean"?T[v]=E:T[v]=E.clone(),!0;{let w=T[v];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return T[v]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(b){let M=b.uniforms,_=0,T=16;for(let v=0,w=M.length;v<w;v++){let y=Array.isArray(M[v])?M[v]:[M[v]];for(let S=0,R=y.length;S<R;S++){let N=y[S],F=Array.isArray(N.value)?N.value:[N.value];for(let L=0,I=F.length;L<I;L++){let H=F[L],W=x(H),z=_%T,O=z%W.boundary,V=z+O;_+=O,V!==0&&T-V<W.storage&&(_+=T-V),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=W.storage}}}let E=_%T;return E>0&&(_+=T-E),b.__size=_,b.__cache={},this}function x(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Dl=class{constructor(e={}){let{canvas:t=Bv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=ws,this.toneMappingExposure=1;let _=this,T=!1,E=0,v=0,w=null,y=-1,S=null,R=new wt,N=new wt,F=null,L=new De(0),I=0,H=t.width,W=t.height,z=1,O=null,V=null,q=new wt(0,0,H,W),se=new wt(0,0,H,W),me=!1,ie=new ea,J=!1,Q=!1,oe=new je,he=new je,_e=new G,Se=new wt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Ee(){return w===null?z:1}let X=i;function We(D,re){return t.getContext(D,re)}try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",ue,!1),X===null){let re="webgl2";if(X=We(re,D),X===null)throw We(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let we,Le,Pe,Ne,pe,P,A,ee,le,xe,fe,Be,Re,Ue,Xe,be,Fe,$e,Qe,U,K,$,B,C;function Z(){we=new Z1(X),we.init(),$=new Ab(X,we),Le=new G1(X,we,e,$),Pe=new Eb(X,we),Le.reverseDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),Ne=new J1(X),pe=new hb,P=new Tb(X,we,Pe,pe,Le,$,Ne),A=new X1(_),ee=new $1(_),le=new ry(X),B=new H1(X,le),xe=new K1(X,le,Ne,B),fe=new eM(X,xe,le,Ne),Qe=new Q1(X,Le,P),be=new W1(pe),Be=new ub(_,A,ee,we,Le,B,be),Re=new Lb(_,pe),Ue=new db,Xe=new yb(we),$e=new k1(_,A,ee,Pe,fe,p,l),Fe=new bb(_,fe,Le),C=new Db(X,Ne,Le,Pe),U=new V1(X,we,Ne),K=new j1(X,we,Ne),Ne.programs=Be.programs,_.capabilities=Le,_.extensions=we,_.properties=pe,_.renderLists=Ue,_.shadowMap=Fe,_.state=Pe,_.info=Ne}Z();let k=new Fh(_,X);this.xr=k,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let D=we.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=we.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(H,W,!1))},this.getSize=function(D){return D.set(H,W)},this.setSize=function(D,re,ve=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,W=re,t.width=Math.floor(D*z),t.height=Math.floor(re*z),ve===!0&&(t.style.width=D+"px",t.style.height=re+"px"),this.setViewport(0,0,D,re)},this.getDrawingBufferSize=function(D){return D.set(H*z,W*z).floor()},this.setDrawingBufferSize=function(D,re,ve){H=D,W=re,z=ve,t.width=Math.floor(D*ve),t.height=Math.floor(re*ve),this.setViewport(0,0,D,re)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy(q)},this.setViewport=function(D,re,ve,ye){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,re,ve,ye),Pe.viewport(R.copy(q).multiplyScalar(z).round())},this.getScissor=function(D){return D.copy(se)},this.setScissor=function(D,re,ve,ye){D.isVector4?se.set(D.x,D.y,D.z,D.w):se.set(D,re,ve,ye),Pe.scissor(N.copy(se).multiplyScalar(z).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(D){Pe.setScissorTest(me=D)},this.setOpaqueSort=function(D){O=D},this.setTransparentSort=function(D){V=D},this.getClearColor=function(D){return D.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(D=!0,re=!0,ve=!0){let ye=0;if(D){let ce=!1;if(w!==null){let Ge=w.texture.format;ce=Ge===hf||Ge===uf||Ge===cf}if(ce){let Ge=w.texture.type,Ze=Ge===wi||Ge===or||Ge===Jo||Ge===Ts||Ge===of||Ge===af,tt=$e.getClearColor(),nt=$e.getClearAlpha(),ct=tt.r,ft=tt.g,it=tt.b;Ze?(g[0]=ct,g[1]=ft,g[2]=it,g[3]=nt,X.clearBufferuiv(X.COLOR,0,g)):(x[0]=ct,x[1]=ft,x[2]=it,x[3]=nt,X.clearBufferiv(X.COLOR,0,x))}else ye|=X.COLOR_BUFFER_BIT}re&&(ye|=X.DEPTH_BUFFER_BIT),ve&&(ye|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ye)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ue.dispose(),Xe.dispose(),pe.dispose(),A.dispose(),ee.dispose(),fe.dispose(),B.dispose(),C.dispose(),Be.dispose(),k.dispose(),k.removeEventListener("sessionstart",de),k.removeEventListener("sessionend",Me),Ce.stop()};function j(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let D=Ne.autoReset,re=Fe.enabled,ve=Fe.autoUpdate,ye=Fe.needsUpdate,ce=Fe.type;Z(),Ne.autoReset=D,Fe.enabled=re,Fe.autoUpdate=ve,Fe.needsUpdate=ye,Fe.type=ce}function ue(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Te(D){let re=D.target;re.removeEventListener("dispose",Te),ze(re)}function ze(D){Oe(D),pe.remove(D)}function Oe(D){let re=pe.get(D).programs;re!==void 0&&(re.forEach(function(ve){Be.releaseProgram(ve)}),D.isShaderMaterial&&Be.releaseShaderCache(D))}this.renderBufferDirect=function(D,re,ve,ye,ce,Ge){re===null&&(re=Ie);let Ze=ce.isMesh&&ce.matrixWorld.determinant()<0,tt=Nt(D,re,ve,ye,ce);Pe.setMaterial(ye,Ze);let nt=ve.index,ct=1;if(ye.wireframe===!0){if(nt=xe.getWireframeAttribute(ve),nt===void 0)return;ct=2}let ft=ve.drawRange,it=ve.attributes.position,Tt=ft.start*ct,Ht=(ft.start+ft.count)*ct;Ge!==null&&(Tt=Math.max(Tt,Ge.start*ct),Ht=Math.min(Ht,(Ge.start+Ge.count)*ct)),nt!==null?(Tt=Math.max(Tt,0),Ht=Math.min(Ht,nt.count)):it!=null&&(Tt=Math.max(Tt,0),Ht=Math.min(Ht,it.count));let Wt=Ht-Tt;if(Wt<0||Wt===1/0)return;B.setup(ce,ye,tt,ve,nt);let On,Pt=U;if(nt!==null&&(On=le.get(nt),Pt=K,Pt.setIndex(On)),ce.isMesh)ye.wireframe===!0?(Pe.setLineWidth(ye.wireframeLinewidth*Ee()),Pt.setMode(X.LINES)):Pt.setMode(X.TRIANGLES);else if(ce.isLine){let st=ye.linewidth;st===void 0&&(st=1),Pe.setLineWidth(st*Ee()),ce.isLineSegments?Pt.setMode(X.LINES):ce.isLineLoop?Pt.setMode(X.LINE_LOOP):Pt.setMode(X.LINE_STRIP)}else ce.isPoints?Pt.setMode(X.POINTS):ce.isSprite&&Pt.setMode(X.TRIANGLES);if(ce.isBatchedMesh)if(ce._multiDrawInstances!==null)Pt.renderMultiDrawInstances(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount,ce._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{let st=ce._multiDrawStarts,Xi=ce._multiDrawCounts,It=ce._multiDrawCount,xi=nt?le.get(nt).bytesPerElement:1,Mr=pe.get(ye).currentProgram.getUniforms();for(let Gn=0;Gn<It;Gn++)Mr.setValue(X,"_gl_DrawID",Gn),Pt.render(st[Gn]/xi,Xi[Gn])}else if(ce.isInstancedMesh)Pt.renderInstances(Tt,Wt,ce.count);else if(ve.isInstancedBufferGeometry){let st=ve._maxInstanceCount!==void 0?ve._maxInstanceCount:1/0,Xi=Math.min(ve.instanceCount,st);Pt.renderInstances(Tt,Wt,Xi)}else Pt.render(Tt,Wt)};function Ae(D,re,ve){D.transparent===!0&&D.side===Dt&&D.forceSinglePass===!1?(D.side=nn,D.needsUpdate=!0,ut(D,re,ve),D.side=Li,D.needsUpdate=!0,ut(D,re,ve),D.side=Dt):ut(D,re,ve)}this.compile=function(D,re,ve=null){ve===null&&(ve=D),d=Xe.get(ve),d.init(re),M.push(d),ve.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(d.pushLight(ce),ce.castShadow&&d.pushShadow(ce))}),D!==ve&&D.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(d.pushLight(ce),ce.castShadow&&d.pushShadow(ce))}),d.setupLights();let ye=new Set;return D.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;let Ge=ce.material;if(Ge)if(Array.isArray(Ge))for(let Ze=0;Ze<Ge.length;Ze++){let tt=Ge[Ze];Ae(tt,ve,ce),ye.add(tt)}else Ae(Ge,ve,ce),ye.add(Ge)}),M.pop(),d=null,ye},this.compileAsync=function(D,re,ve=null){let ye=this.compile(D,re,ve);return new Promise(ce=>{function Ge(){if(ye.forEach(function(Ze){pe.get(Ze).currentProgram.isReady()&&ye.delete(Ze)}),ye.size===0){ce(D);return}setTimeout(Ge,10)}we.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let ae=null;function te(D){ae&&ae(D)}function de(){Ce.stop()}function Me(){Ce.start()}let Ce=new Om;Ce.setAnimationLoop(te),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(D){ae=D,k.setAnimationLoop(D),D===null?Ce.stop():Ce.start()},k.addEventListener("sessionstart",de),k.addEventListener("sessionend",Me),this.render=function(D,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(re),re=k.getCamera()),D.isScene===!0&&D.onBeforeRender(_,D,re,w),d=Xe.get(D,M.length),d.init(re),M.push(d),he.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ie.setFromProjectionMatrix(he),Q=this.localClippingEnabled,J=be.init(this.clippingPlanes,Q),m=Ue.get(D,b.length),m.init(),b.push(m),k.enabled===!0&&k.isPresenting===!0){let Ge=_.xr.getDepthSensingMesh();Ge!==null&&ge(Ge,re,-1/0,_.sortObjects)}ge(D,re,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(O,V),ne=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,ne&&$e.addToRenderList(m,D),this.info.render.frame++,J===!0&&be.beginShadows();let ve=d.state.shadowsArray;Fe.render(ve,D,re),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let ye=m.opaque,ce=m.transmissive;if(d.setupLights(),re.isArrayCamera){let Ge=re.cameras;if(ce.length>0)for(let Ze=0,tt=Ge.length;Ze<tt;Ze++){let nt=Ge[Ze];Ve(ye,ce,D,nt)}ne&&$e.render(D);for(let Ze=0,tt=Ge.length;Ze<tt;Ze++){let nt=Ge[Ze];He(m,D,nt,nt.viewport)}}else ce.length>0&&Ve(ye,ce,D,re),ne&&$e.render(D),He(m,D,re);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(_,D,re),B.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(d=M[M.length-1],J===!0&&be.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ge(D,re,ve,ye){if(D.visible===!1)return;if(D.layers.test(re.layers)){if(D.isGroup)ve=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(re);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ie.intersectsSprite(D)){ye&&Se.setFromMatrixPosition(D.matrixWorld).applyMatrix4(he);let Ze=fe.update(D),tt=D.material;tt.visible&&m.push(D,Ze,tt,ve,Se.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ie.intersectsObject(D))){let Ze=fe.update(D),tt=D.material;if(ye&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Se.copy(D.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Se.copy(Ze.boundingSphere.center)),Se.applyMatrix4(D.matrixWorld).applyMatrix4(he)),Array.isArray(tt)){let nt=Ze.groups;for(let ct=0,ft=nt.length;ct<ft;ct++){let it=nt[ct],Tt=tt[it.materialIndex];Tt&&Tt.visible&&m.push(D,Ze,Tt,ve,Se.z,it)}}else tt.visible&&m.push(D,Ze,tt,ve,Se.z,null)}}let Ge=D.children;for(let Ze=0,tt=Ge.length;Ze<tt;Ze++)ge(Ge[Ze],re,ve,ye)}function He(D,re,ve,ye){let ce=D.opaque,Ge=D.transmissive,Ze=D.transparent;d.setupLightsView(ve),J===!0&&be.setGlobalState(_.clippingPlanes,ve),ye&&Pe.viewport(R.copy(ye)),ce.length>0&&qe(ce,re,ve),Ge.length>0&&qe(Ge,re,ve),Ze.length>0&&qe(Ze,re,ve),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ve(D,re,ve,ye){if((ve.isScene===!0?ve.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ye.id]===void 0&&(d.state.transmissionRenderTarget[ye.id]=new $t(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?dn:wi,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let Ge=d.state.transmissionRenderTarget[ye.id],Ze=ye.viewport||R;Ge.setSize(Ze.z,Ze.w);let tt=_.getRenderTarget();_.setRenderTarget(Ge),_.getClearColor(L),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear(),ne&&$e.render(ve);let nt=_.toneMapping;_.toneMapping=ws;let ct=ye.viewport;if(ye.viewport!==void 0&&(ye.viewport=void 0),d.setupLightsView(ye),J===!0&&be.setGlobalState(_.clippingPlanes,ye),qe(D,ve,ye),P.updateMultisampleRenderTarget(Ge),P.updateRenderTargetMipmap(Ge),we.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let it=0,Tt=re.length;it<Tt;it++){let Ht=re[it],Wt=Ht.object,On=Ht.geometry,Pt=Ht.material,st=Ht.group;if(Pt.side===Dt&&Wt.layers.test(ye.layers)){let Xi=Pt.side;Pt.side=nn,Pt.needsUpdate=!0,Je(Wt,ve,ye,On,Pt,st),Pt.side=Xi,Pt.needsUpdate=!0,ft=!0}}ft===!0&&(P.updateMultisampleRenderTarget(Ge),P.updateRenderTargetMipmap(Ge))}_.setRenderTarget(tt),_.setClearColor(L,I),ct!==void 0&&(ye.viewport=ct),_.toneMapping=nt}function qe(D,re,ve){let ye=re.isScene===!0?re.overrideMaterial:null;for(let ce=0,Ge=D.length;ce<Ge;ce++){let Ze=D[ce],tt=Ze.object,nt=Ze.geometry,ct=ye===null?Ze.material:ye,ft=Ze.group;tt.layers.test(ve.layers)&&Je(tt,re,ve,nt,ct,ft)}}function Je(D,re,ve,ye,ce,Ge){D.onBeforeRender(_,re,ve,ye,ce,Ge),D.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ce.onBeforeRender(_,re,ve,ye,D,Ge),ce.transparent===!0&&ce.side===Dt&&ce.forceSinglePass===!1?(ce.side=nn,ce.needsUpdate=!0,_.renderBufferDirect(ve,re,ye,ce,D,Ge),ce.side=Li,ce.needsUpdate=!0,_.renderBufferDirect(ve,re,ye,ce,D,Ge),ce.side=Dt):_.renderBufferDirect(ve,re,ye,ce,D,Ge),D.onAfterRender(_,re,ve,ye,ce,Ge)}function ut(D,re,ve){re.isScene!==!0&&(re=Ie);let ye=pe.get(D),ce=d.state.lights,Ge=d.state.shadowsArray,Ze=ce.state.version,tt=Be.getParameters(D,ce.state,Ge,re,ve),nt=Be.getProgramCacheKey(tt),ct=ye.programs;ye.environment=D.isMeshStandardMaterial?re.environment:null,ye.fog=re.fog,ye.envMap=(D.isMeshStandardMaterial?ee:A).get(D.envMap||ye.environment),ye.envMapRotation=ye.environment!==null&&D.envMap===null?re.environmentRotation:D.envMapRotation,ct===void 0&&(D.addEventListener("dispose",Te),ct=new Map,ye.programs=ct);let ft=ct.get(nt);if(ft!==void 0){if(ye.currentProgram===ft&&ye.lightsStateVersion===Ze)return _t(D,tt),ft}else tt.uniforms=Be.getUniforms(D),D.onBeforeCompile(tt,_),ft=Be.acquireProgram(tt,nt),ct.set(nt,ft),ye.uniforms=tt.uniforms;let it=ye.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(it.clippingPlanes=be.uniform),_t(D,tt),ye.needsLights=vn(D),ye.lightsStateVersion=Ze,ye.needsLights&&(it.ambientLightColor.value=ce.state.ambient,it.lightProbe.value=ce.state.probe,it.directionalLights.value=ce.state.directional,it.directionalLightShadows.value=ce.state.directionalShadow,it.spotLights.value=ce.state.spot,it.spotLightShadows.value=ce.state.spotShadow,it.rectAreaLights.value=ce.state.rectArea,it.ltc_1.value=ce.state.rectAreaLTC1,it.ltc_2.value=ce.state.rectAreaLTC2,it.pointLights.value=ce.state.point,it.pointLightShadows.value=ce.state.pointShadow,it.hemisphereLights.value=ce.state.hemi,it.directionalShadowMap.value=ce.state.directionalShadowMap,it.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,it.spotShadowMap.value=ce.state.spotShadowMap,it.spotLightMatrix.value=ce.state.spotLightMatrix,it.spotLightMap.value=ce.state.spotLightMap,it.pointShadowMap.value=ce.state.pointShadowMap,it.pointShadowMatrix.value=ce.state.pointShadowMatrix),ye.currentProgram=ft,ye.uniformsList=null,ft}function gt(D){if(D.uniformsList===null){let re=D.currentProgram.getUniforms();D.uniformsList=Yr.seqWithValue(re.seq,D.uniforms)}return D.uniformsList}function _t(D,re){let ve=pe.get(D);ve.outputColorSpace=re.outputColorSpace,ve.batching=re.batching,ve.batchingColor=re.batchingColor,ve.instancing=re.instancing,ve.instancingColor=re.instancingColor,ve.instancingMorph=re.instancingMorph,ve.skinning=re.skinning,ve.morphTargets=re.morphTargets,ve.morphNormals=re.morphNormals,ve.morphColors=re.morphColors,ve.morphTargetsCount=re.morphTargetsCount,ve.numClippingPlanes=re.numClippingPlanes,ve.numIntersection=re.numClipIntersection,ve.vertexAlphas=re.vertexAlphas,ve.vertexTangents=re.vertexTangents,ve.toneMapping=re.toneMapping}function Nt(D,re,ve,ye,ce){re.isScene!==!0&&(re=Ie),P.resetTextureUnits();let Ge=re.fog,Ze=ye.isMeshStandardMaterial?re.environment:null,tt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:wn,nt=(ye.isMeshStandardMaterial?ee:A).get(ye.envMap||Ze),ct=ye.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,ft=!!ve.attributes.tangent&&(!!ye.normalMap||ye.anisotropy>0),it=!!ve.morphAttributes.position,Tt=!!ve.morphAttributes.normal,Ht=!!ve.morphAttributes.color,Wt=ws;ye.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Wt=_.toneMapping);let On=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,Pt=On!==void 0?On.length:0,st=pe.get(ye),Xi=d.state.lights;if(J===!0&&(Q===!0||D!==S)){let ii=D===S&&ye.id===y;be.setState(ye,D,ii)}let It=!1;ye.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Xi.state.version||st.outputColorSpace!==tt||ce.isBatchedMesh&&st.batching===!1||!ce.isBatchedMesh&&st.batching===!0||ce.isBatchedMesh&&st.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&st.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&st.instancing===!1||!ce.isInstancedMesh&&st.instancing===!0||ce.isSkinnedMesh&&st.skinning===!1||!ce.isSkinnedMesh&&st.skinning===!0||ce.isInstancedMesh&&st.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&st.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&st.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&st.instancingMorph===!1&&ce.morphTexture!==null||st.envMap!==nt||ye.fog===!0&&st.fog!==Ge||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==be.numPlanes||st.numIntersection!==be.numIntersection)||st.vertexAlphas!==ct||st.vertexTangents!==ft||st.morphTargets!==it||st.morphNormals!==Tt||st.morphColors!==Ht||st.toneMapping!==Wt||st.morphTargetsCount!==Pt)&&(It=!0):(It=!0,st.__version=ye.version);let xi=st.currentProgram;It===!0&&(xi=ut(ye,re,ce));let Mr=!1,Gn=!1,Lo=!1,Xt=xi.getUniforms(),Pi=st.uniforms;if(Pe.useProgram(xi.program)&&(Mr=!0,Gn=!0,Lo=!0),ye.id!==y&&(y=ye.id,Gn=!0),Mr||S!==D){Pe.buffers.depth.getReversed()?(oe.copy(D.projectionMatrix),kv(oe),Hv(oe),Xt.setValue(X,"projectionMatrix",oe)):Xt.setValue(X,"projectionMatrix",D.projectionMatrix),Xt.setValue(X,"viewMatrix",D.matrixWorldInverse);let ms=Xt.map.cameraPosition;ms!==void 0&&ms.setValue(X,_e.setFromMatrixPosition(D.matrixWorld)),Le.logarithmicDepthBuffer&&Xt.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ye.isMeshPhongMaterial||ye.isMeshToonMaterial||ye.isMeshLambertMaterial||ye.isMeshBasicMaterial||ye.isMeshStandardMaterial||ye.isShaderMaterial)&&Xt.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,Gn=!0,Lo=!0)}if(ce.isSkinnedMesh){Xt.setOptional(X,ce,"bindMatrix"),Xt.setOptional(X,ce,"bindMatrixInverse");let ii=ce.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),Xt.setValue(X,"boneTexture",ii.boneTexture,P))}ce.isBatchedMesh&&(Xt.setOptional(X,ce,"batchingTexture"),Xt.setValue(X,"batchingTexture",ce._matricesTexture,P),Xt.setOptional(X,ce,"batchingIdTexture"),Xt.setValue(X,"batchingIdTexture",ce._indirectTexture,P),Xt.setOptional(X,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Xt.setValue(X,"batchingColorTexture",ce._colorsTexture,P));let Do=ve.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0)&&Qe.update(ce,ve,xi),(Gn||st.receiveShadow!==ce.receiveShadow)&&(st.receiveShadow=ce.receiveShadow,Xt.setValue(X,"receiveShadow",ce.receiveShadow)),ye.isMeshGouraudMaterial&&ye.envMap!==null&&(Pi.envMap.value=nt,Pi.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),ye.isMeshStandardMaterial&&ye.envMap===null&&re.environment!==null&&(Pi.envMapIntensity.value=re.environmentIntensity),Gn&&(Xt.setValue(X,"toneMappingExposure",_.toneMappingExposure),st.needsLights&&Rt(Pi,Lo),Ge&&ye.fog===!0&&Re.refreshFogUniforms(Pi,Ge),Re.refreshMaterialUniforms(Pi,ye,z,W,d.state.transmissionRenderTarget[D.id]),Yr.upload(X,gt(st),Pi,P)),ye.isShaderMaterial&&ye.uniformsNeedUpdate===!0&&(Yr.upload(X,gt(st),Pi,P),ye.uniformsNeedUpdate=!1),ye.isSpriteMaterial&&Xt.setValue(X,"center",ce.center),Xt.setValue(X,"modelViewMatrix",ce.modelViewMatrix),Xt.setValue(X,"normalMatrix",ce.normalMatrix),Xt.setValue(X,"modelMatrix",ce.matrixWorld),ye.isShaderMaterial||ye.isRawShaderMaterial){let ii=ye.uniformsGroups;for(let ms=0,gs=ii.length;ms<gs;ms++){let Jd=ii[ms];C.update(Jd,xi),C.bind(Jd,xi)}}return xi}function Rt(D,re){D.ambientLightColor.needsUpdate=re,D.lightProbe.needsUpdate=re,D.directionalLights.needsUpdate=re,D.directionalLightShadows.needsUpdate=re,D.pointLights.needsUpdate=re,D.pointLightShadows.needsUpdate=re,D.spotLights.needsUpdate=re,D.spotLightShadows.needsUpdate=re,D.rectAreaLights.needsUpdate=re,D.hemisphereLights.needsUpdate=re}function vn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,re,ve){pe.get(D.texture).__webglTexture=re,pe.get(D.depthTexture).__webglTexture=ve;let ye=pe.get(D);ye.__hasExternalTextures=!0,ye.__autoAllocateDepthBuffer=ve===void 0,ye.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ye.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,re){let ve=pe.get(D);ve.__webglFramebuffer=re,ve.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(D,re=0,ve=0){w=D,E=re,v=ve;let ye=!0,ce=null,Ge=!1,Ze=!1;if(D){let nt=pe.get(D);if(nt.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(X.FRAMEBUFFER,null),ye=!1;else if(nt.__webglFramebuffer===void 0)P.setupRenderTarget(D);else if(nt.__hasExternalTextures)P.rebindTextures(D,pe.get(D.texture).__webglTexture,pe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let it=D.depthTexture;if(nt.__boundDepthTexture!==it){if(it!==null&&pe.has(it)&&(D.width!==it.image.width||D.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(D)}}let ct=D.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ze=!0);let ft=pe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ft[re])?ce=ft[re][ve]:ce=ft[re],Ge=!0):D.samples>0&&P.useMultisampledRTT(D)===!1?ce=pe.get(D).__webglMultisampledFramebuffer:Array.isArray(ft)?ce=ft[ve]:ce=ft,R.copy(D.viewport),N.copy(D.scissor),F=D.scissorTest}else R.copy(q).multiplyScalar(z).floor(),N.copy(se).multiplyScalar(z).floor(),F=me;if(Pe.bindFramebuffer(X.FRAMEBUFFER,ce)&&ye&&Pe.drawBuffers(D,ce),Pe.viewport(R),Pe.scissor(N),Pe.setScissorTest(F),Ge){let nt=pe.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+re,nt.__webglTexture,ve)}else if(Ze){let nt=pe.get(D.texture),ct=re||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,nt.__webglTexture,ve||0,ct)}y=-1},this.readRenderTargetPixels=function(D,re,ve,ye,ce,Ge,Ze){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ze!==void 0&&(tt=tt[Ze]),tt){Pe.bindFramebuffer(X.FRAMEBUFFER,tt);try{let nt=D.texture,ct=nt.format,ft=nt.type;if(!Le.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=D.width-ye&&ve>=0&&ve<=D.height-ce&&X.readPixels(re,ve,ye,ce,$.convert(ct),$.convert(ft),Ge)}finally{let nt=w!==null?pe.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(X.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(D,re,ve,ye,ce,Ge,Ze){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ze!==void 0&&(tt=tt[Ze]),tt){let nt=D.texture,ct=nt.format,ft=nt.type;if(!Le.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(re>=0&&re<=D.width-ye&&ve>=0&&ve<=D.height-ce){Pe.bindFramebuffer(X.FRAMEBUFFER,tt);let it=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,it),X.bufferData(X.PIXEL_PACK_BUFFER,Ge.byteLength,X.STREAM_READ),X.readPixels(re,ve,ye,ce,$.convert(ct),$.convert(ft),0);let Tt=w!==null?pe.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(X.FRAMEBUFFER,Tt);let Ht=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await zv(X,Ht,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,it),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ge),X.deleteBuffer(it),X.deleteSync(Ht),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,re=null,ve=0){D.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),re=arguments[0]||null,D=arguments[1]);let ye=Math.pow(2,-ve),ce=Math.floor(D.image.width*ye),Ge=Math.floor(D.image.height*ye),Ze=re!==null?re.x:0,tt=re!==null?re.y:0;P.setTexture2D(D,0),X.copyTexSubImage2D(X.TEXTURE_2D,ve,0,0,Ze,tt,ce,Ge),Pe.unbindTexture()},this.copyTextureToTexture=function(D,re,ve=null,ye=null,ce=0){D.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),ye=arguments[0]||null,D=arguments[1],re=arguments[2],ce=arguments[3]||0,ve=null);let Ge,Ze,tt,nt,ct,ft,it,Tt,Ht,Wt=D.isCompressedTexture?D.mipmaps[ce]:D.image;ve!==null?(Ge=ve.max.x-ve.min.x,Ze=ve.max.y-ve.min.y,tt=ve.isBox3?ve.max.z-ve.min.z:1,nt=ve.min.x,ct=ve.min.y,ft=ve.isBox3?ve.min.z:0):(Ge=Wt.width,Ze=Wt.height,tt=Wt.depth||1,nt=0,ct=0,ft=0),ye!==null?(it=ye.x,Tt=ye.y,Ht=ye.z):(it=0,Tt=0,Ht=0);let On=$.convert(re.format),Pt=$.convert(re.type),st;re.isData3DTexture?(P.setTexture3D(re,0),st=X.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(P.setTexture2DArray(re,0),st=X.TEXTURE_2D_ARRAY):(P.setTexture2D(re,0),st=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment);let Xi=X.getParameter(X.UNPACK_ROW_LENGTH),It=X.getParameter(X.UNPACK_IMAGE_HEIGHT),xi=X.getParameter(X.UNPACK_SKIP_PIXELS),Mr=X.getParameter(X.UNPACK_SKIP_ROWS),Gn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Wt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Wt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,nt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ct),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);let Lo=D.isDataArrayTexture||D.isData3DTexture,Xt=re.isDataArrayTexture||re.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let Pi=pe.get(D),Do=pe.get(re),ii=pe.get(Pi.__renderTarget),ms=pe.get(Do.__renderTarget);Pe.bindFramebuffer(X.READ_FRAMEBUFFER,ii.__webglFramebuffer),Pe.bindFramebuffer(X.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let gs=0;gs<tt;gs++)Lo&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pe.get(D).__webglTexture,ce,ft+gs),D.isDepthTexture?(Xt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pe.get(re).__webglTexture,ce,Ht+gs),X.blitFramebuffer(nt,ct,Ge,Ze,it,Tt,Ge,Ze,X.DEPTH_BUFFER_BIT,X.NEAREST)):Xt?X.copyTexSubImage3D(st,ce,it,Tt,Ht+gs,nt,ct,Ge,Ze):X.copyTexSubImage2D(st,ce,it,Tt,Ht+gs,nt,ct,Ge,Ze);Pe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Xt?D.isDataTexture||D.isData3DTexture?X.texSubImage3D(st,ce,it,Tt,Ht,Ge,Ze,tt,On,Pt,Wt.data):re.isCompressedArrayTexture?X.compressedTexSubImage3D(st,ce,it,Tt,Ht,Ge,Ze,tt,On,Wt.data):X.texSubImage3D(st,ce,it,Tt,Ht,Ge,Ze,tt,On,Pt,Wt):D.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ce,it,Tt,Ge,Ze,On,Pt,Wt.data):D.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ce,it,Tt,Wt.width,Wt.height,On,Wt.data):X.texSubImage2D(X.TEXTURE_2D,ce,it,Tt,Ge,Ze,On,Pt,Wt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Xi),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,It),X.pixelStorei(X.UNPACK_SKIP_PIXELS,xi),X.pixelStorei(X.UNPACK_SKIP_ROWS,Mr),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Gn),ce===0&&re.generateMipmaps&&X.generateMipmap(st),Pe.unbindTexture()},this.copyTextureToTexture3D=function(D,re,ve=null,ye=null,ce=0){return D.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ve=arguments[0]||null,ye=arguments[1]||null,D=arguments[2],re=arguments[3],ce=arguments[4]||0),Xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,re,ve,ye,ce)},this.initRenderTarget=function(D){pe.get(D).__webglFramebuffer===void 0&&P.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?P.setTextureCube(D,0):D.isData3DTexture?P.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?P.setTexture2DArray(D,0):P.setTexture2D(D,0),Pe.unbindTexture()},this.resetState=function(){E=0,v=0,w=null,Pe.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}},so=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ta=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ro=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mh,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new G,ar=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},oo=class extends Sn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Or,Bo=new G,Fr=new G,Br=new G,zr=new Ke,zo=new Ke,Hm=new je,al=new G,ko=new G,ll=new G,Qp=new Ke,Lu=new Ke,em=new Ke,na=class extends Gt{constructor(e=new oo){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ro(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new ar(i,3,0,!1)),Or.setAttribute("uv",new ar(i,2,3,!1))}this.geometry=Or,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Hm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Br.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;cl(al.set(-.5,-.5,0),Br,o,Fr,s,r),cl(ko.set(.5,-.5,0),Br,o,Fr,s,r),cl(ll.set(.5,.5,0),Br,o,Fr,s,r),Qp.set(0,0),Lu.set(1,0),em.set(1,1);let a=e.ray.intersectTriangle(al,ko,ll,!1,Bo);if(a===null&&(cl(ko.set(-.5,.5,0),Br,o,Fr,s,r),Lu.set(0,1),a=e.ray.intersectTriangle(al,ll,ko,!1,Bo),a===null))return;let l=e.ray.origin.distanceTo(Bo);l<e.near||l>e.far||t.push({distance:l,point:Bo.clone(),uv:Qi.getInterpolation(Bo,al,ko,ll,Qp,Lu,em,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function cl(n,e,t,i,s,r){zr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(zo.x=r*zr.x-s*zr.y,zo.y=s*zr.x+r*zr.y):zo.copy(zr),n.copy(e),n.x+=zo.x,n.y+=zo.y,n.applyMatrix4(Hm)}var tm=new G,nm=new wt,im=new wt,Nb=new G,sm=new je,ul=new G,Du=new qn,rm=new je,Nu=new eo,Nl=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=np,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Du.copy(this.boundingSphere),Du.applyMatrix4(s),e.ray.intersectsSphere(Du)!==!1&&(rm.copy(s).invert(),Nu.copy(e.ray).applyMatrix4(rm),!(this.boundingBox!==null&&Nu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===np?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;nm.fromBufferAttribute(s.attributes.skinIndex,e),im.fromBufferAttribute(s.attributes.skinWeight,e),tm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=im.getComponent(r);if(o!==0){let a=nm.getComponent(r);sm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Nb.copy(tm).applyMatrix4(sm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ia=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ps=class extends hn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=jt,u=jt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},om=new je,Ub=new je,Ul=class n{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ub;om.multiplyMatrices(a,t[r]),om.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ps(t,e,e,zn,Si);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ia),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},lr=class extends vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},kr=new je,am=new je,hl=[],lm=new oi,Ob=new je,Ho=new et,Vo=new qn,En=class extends et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ob)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),lm.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(lm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Vo.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(i),e.ray.intersectsSphere(Vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),am.multiplyMatrices(i,kr),Ho.matrixWorld=am,Ho.raycast(e,hl);for(let o=0,a=hl.length;o<a;o++){let l=hl[o];l.instanceId=r,l.object=this,t.push(l)}hl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,lf,Si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ni=class extends Sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ol=new G,Fl=new G,cm=new je,Go=new eo,fl=new qn,Uu=new G,um=new G,ao=class extends Gt{constructor(e=new ht,t=new Ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ol.fromBufferAttribute(t,s-1),Fl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ol.distanceTo(Fl);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;cm.copy(s).invert(),Go.copy(e.ray).applyMatrix4(cm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=u.getX(x),b=u.getX(x+1),M=dl(this,e,Go,l,d,b);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),d=dl(this,e,Go,l,x,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=dl(this,e,Go,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=dl(this,e,Go,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dl(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Ol.fromBufferAttribute(o,s),Fl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ol,Fl,Uu,um)>i)return;Uu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Uu);if(!(l<e.near||l>e.far))return{distance:l,point:um.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var hm=new G,fm=new G,is=class extends ao{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)hm.fromBufferAttribute(t,s),fm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hm.distanceTo(fm);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Bl=class extends ao{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},cr=class extends Sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dm=new je,Bh=new eo,pl=new qn,ml=new G,Is=class extends Gt{constructor(e=new ht,t=new cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,e.ray.intersectsSphere(pl)===!1)return;dm.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(dm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);ml.fromBufferAttribute(h,m),pm(ml,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)ml.fromBufferAttribute(h,g),pm(ml,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pm(n,e,t,i,s,r,o){let a=Bh.distanceSqToPoint(n);if(a<t){let l=new G;Bh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ai=class extends hn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zl=class n extends ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new G,u=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=i+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jt=class n extends ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=i/2,d=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2));function b(){let _=new G,T=new G,E=0,v=(t-e)/i;for(let w=0;w<=r;w++){let y=[],S=w/r,R=S*(t-e)+e;for(let N=0;N<=s;N++){let F=N/s,L=F*l+a,I=Math.sin(L),H=Math.cos(L);T.x=R*I,T.y=-S*i+m,T.z=R*H,h.push(T.x,T.y,T.z),_.set(I,v,H).normalize(),f.push(_.x,_.y,_.z),p.push(F,1-S),y.push(g++)}x.push(y)}for(let w=0;w<s;w++)for(let y=0;y<r;y++){let S=x[y][w],R=x[y+1][w],N=x[y+1][w+1],F=x[y][w+1];(e>0||y!==0)&&(u.push(S,R,F),E+=3),(t>0||y!==r-1)&&(u.push(R,N,F),E+=3)}c.addGroup(d,E,0),d+=E}function M(_){let T=g,E=new Ke,v=new G,w=0,y=_===!0?e:t,S=_===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let R=g;for(let N=0;N<=s;N++){let L=N/s*l+a,I=Math.cos(L),H=Math.sin(L);v.x=y*H,v.y=m*S,v.z=y*I,h.push(v.x,v.y,v.z),f.push(0,S,0),E.x=I*.5+.5,E.y=H*.5*S+.5,p.push(E.x,E.y),g++}for(let N=0;N<s;N++){let F=T+N,L=R+N;_===!0?u.push(L,L+1,F):u.push(L+1,L,F),w+=3}c.addGroup(d,w,_===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yn=class n extends Jt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kl=class n extends ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new G,_=new G,T=new G;for(let E=0;E<t.length;E+=3)p(t[E+0],M),p(t[E+1],_),p(t[E+2],T),l(M,_,T,b)}function l(b,M,_,T){let E=T+1,v=[];for(let w=0;w<=E;w++){v[w]=[];let y=b.clone().lerp(_,w/E),S=M.clone().lerp(_,w/E),R=E-w;for(let N=0;N<=R;N++)N===0&&w===E?v[w][N]=y:v[w][N]=y.clone().lerp(S,N/R)}for(let w=0;w<E;w++)for(let y=0;y<2*(E-w)-1;y++){let S=Math.floor(y/2);y%2===0?(f(v[w][S+1]),f(v[w+1][S]),f(v[w][S])):(f(v[w][S+1]),f(v[w+1][S+1]),f(v[w+1][S]))}}function c(b){let M=new G;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(b),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let b=new G;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let _=m(b)/2/Math.PI+.5,T=d(b)/Math.PI+.5;o.push(_,1-T)}g(),h()}function h(){for(let b=0;b<o.length;b+=6){let M=o[b+0],_=o[b+2],T=o[b+4],E=Math.max(M,_,T),v=Math.min(M,_,T);E>.9&&v<.1&&(M<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),T<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,M){let _=b*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){let b=new G,M=new G,_=new G,T=new G,E=new Ke,v=new Ke,w=new Ke;for(let y=0,S=0;y<r.length;y+=9,S+=6){b.set(r[y+0],r[y+1],r[y+2]),M.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),E.set(o[S+0],o[S+1]),v.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),T.copy(b).add(M).add(_).divideScalar(3);let R=m(T);x(E,S+0,b,R),x(v,S+2,M,R),x(w,S+4,_,R)}}function x(b,M,_,T){T<0&&b.x===1&&(o[M]=b.x-1),_.x===0&&_.z===0&&(o[M]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var gl=new G,xl=new G,Ou=new G,vl=new Qi,Hl=class extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Xr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:d}=vl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),vl.getNormal(Ou),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let M=(b+1)%3,_=h[b],T=h[M],E=vl[u[b]],v=vl[u[M]],w=`${_}_${T}`,y=`${T}_${_}`;y in f&&f[y]?(Ou.dot(f[y].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(v.x,v.y,v.z)),f[y]=null):w in f||(f[w]={index0:c[b],index1:c[M],normal:Ou.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];gl.fromBufferAttribute(a,x),xl.fromBufferAttribute(a,m),p.push(gl.x,gl.y,gl.z),p.push(xl.x,xl.y,xl.z)}this.setAttribute("position",new rt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var $n=class n extends kl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},sa=class n extends kl{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vl=class n extends ht{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new G,g=new Ke;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let d=r+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let d=0;d<i;d++){let b=d+m,M=b,_=b+i+1,T=b+i+2,E=b+1;a.push(M,_,E),a.push(_,T,E)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ls=class n extends ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new G,f=new G,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let b=[],M=d/i,_=0;d===0&&o===0?_=.5/t:d===i&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let E=T/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+_,1-M),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){let M=u[d][b+1],_=u[d][b],T=u[d+1][b],E=u[d+1][b+1];(d!==0||o>0)&&p.push(M,_,E),(d!==i-1||l<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gl=class n extends ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new G,h=new G,f=new G;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(x,m,b),o.push(m,d,b)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Wl=class extends Mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ot=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zn=class extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xl=class extends Sn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Kn=class extends Sn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function yl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Fb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Bb(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function mm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Vm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Ds=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends Ds{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ip,endingEnd:ip}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sp:r=e,a=2*t-i;break;case rp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sp:o=e,l=2*i-t;break;case rp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let T=0;T!==a;++T)r[T]=d*o[u+T]+b*o[c+T]+M*o[l+T]+_*o[h+T];return r}},kh=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Hh=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},li=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yl(t,this.TimeBufferType),this.values=yl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yl(e.times,Array),values:yl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case ru:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Fb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ru,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Jr;var Ns=class extends li{constructor(e,t,i){super(e,t,i)}};Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=jr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends li{};ql.prototype.ValueTypeName="color";var ss=class extends li{};ss.prototype.ValueTypeName="number";var Vh=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},rs=class extends li{InterpolantFactoryMethodLinear(e){return new Vh(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends li{constructor(e,t,i){super(e,t,i)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=jr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends li{};os.prototype.ValueTypeName="vector";var Yl=class{constructor(e="",t=-1,i=[],s=hv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(kb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(li.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Bb(l);l=mm(l,1,u),c=mm(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,p,g,x){if(p.length!==0){let m=[],d=[];Vm(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let b=0;b!==f[g].morphTargets.length;++b){let M=f[g];m.push(M.time),d.push(M.morphTarget===x?1:0)}s.push(new ss(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{let p=".bones["+t[h].name+"]";i(os,p+".position",f,"pos",s),i(rs,p+".quaternion",f,"rot",s),i(os,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return ql;case"quaternion":return rs;case"bool":case"boolean":return Ns;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function kb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zb(n.type);if(n.times===void 0){let t=[],i=[];Vm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Es={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Gh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Hb=new Gh,as=class{constructor(e){this.manager=e!==void 0?e:Hb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};as.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Wh=class extends Error{constructor(e,t){super(e),this.response=t}},ra=class extends as{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Es.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:i,onError:s});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ji[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){b();function b(){h.read().then(({done:M,value:_})=>{if(M)d.close();else{x+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,v=u.length;E<v;E++){let w=u[E];w.onProgress&&w.onProgress(T)}d.enqueue(_),b()}},M=>{d.error(M)})}}});return new Response(m)}else throw new Wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Es.add(e,c);let u=ji[e];delete ji[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=ji[e];if(u===void 0)throw this.manager.itemError(e),c;delete ji[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Xh=class extends as{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Es.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qo("img");function l(){u(),Es.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var $l=class extends as{constructor(e){super(e)}load(e,t,i,s){let r=new hn,o=new Xh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},lo=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},co=class extends lo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fu=new je,gm=new G,xm=new G,oa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),t.position.copy(gm),xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xm),t.updateMatrixWorld(),Fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qh=class extends oa{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},uo=class extends lo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vm=new je,Wo=new G,Bu=new G,Yh=class extends oa{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wo),Bu.copy(i.position),Bu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bu),i.updateMatrixWorld(),s.makeTranslation(-Wo.x,-Wo.y,-Wo.z),vm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vm)}},Zl=class extends lo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$h=class extends oa{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ui=class extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Os=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Kl=class extends as{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Es.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Es.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Es.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Es.add(e,l),r.manager.itemStart(e)}};var jl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ym();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ym(){return performance.now()}var pf="\\[\\]\\.:\\/",Vb=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",Gb="[^"+pf.replace("\\.","")+"]",Wb=/((?:WC+[\/:])*)/.source.replace("WC",mf),Xb=/(WCOD+)?/.source.replace("WCOD",Gb),qb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),Yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),$b=new RegExp("^"+Wb+Xb+qb+Yb+"$"),Zb=["material","materials","bones","map"],Zh=class{constructor(e,t,i){let s=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vb,"")}static parseTrackName(e){let t=$b.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Zb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Zh;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VA=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ua=class n extends et{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Kt;let i=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Mi,h=new G,f=new G,p=new G,g=new je,x=new G(0,0,-1),m=new wt,d=new G,b=new G,M=new wt,_=new je,T=this.camera,E=new $t(r,o,{samples:c,type:dn}),v=new Mt({name:l.name!==void 0?l.name:"unspecified",uniforms:Tn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});v.uniforms.tDiffuse.value=E.texture,v.uniforms.color.value=s,v.uniforms.textureMatrix.value=_,this.material=v,this.onBeforeRender=function(w,y,S){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),g.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),b.subVectors(f,x),b.reflect(h).negate(),b.add(f),T.position.copy(d),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(h),T.lookAt(b),T.far=S.far,T.updateMatrixWorld(),T.projectionMatrix.copy(S.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(T.projectionMatrix),_.multiply(T.matrixWorldInverse),_.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let R=T.projectionMatrix;M.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],M.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],M.z=-1,M.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(M)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-a,R.elements[14]=m.w,i.visible=!1;let N=w.getRenderTarget(),F=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(E),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(y,T),w.xr.enabled=F,w.shadowMap.autoUpdate=L,w.setRenderTarget(N);let I=S.viewport;I!==void 0&&w.state.viewport(I),i.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()}}};ua.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var oc=[25,18,15,12,10,8,6,4],ur={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Fs={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function ha(n){let e=String(n),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Jn(n){let e=(typeof n=="number"?n>>>0:ha(n))||1,t=e,i=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Jn(ha(t+":"+s))}}var ac=Math.PI*2,Kb=2,Gm=2800,Wm=4200,jb=34,Xm=8,qm=60,Jb=.12,Qb=.1,Ym=28,eS=150,gf=52,_f=.0025,$m=1/150,tS=10,Zm=5,Km=250,jm=38,Jm=75,lc=150,vf=120,n0=10,nS=80,iS=40,sS=20,rS=30,oS=95,xf=18,Qm=22,aS=60,yf=(n,e,t)=>n<e?e:n>t?t:n;function lS(n){let e=n.int(10,14),t=n.range(440,520),i=[];for(let s=0;s<e;s++){let r=n.range(-.3,.3)*(ac/e),o=s/e*ac+r,a=yf(t*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function cS(n,e,t,i,s,r,o,a,l){let c=(x,m,d,b)=>{let M=(l-d)/(b-d);return[x[0]+(m[0]-x[0])*M,x[1]+(m[1]-x[1])*M]},u=c(n,e,s,r),h=c(e,t,r,o),f=c(t,i,o,a),p=c(u,h,s,o),g=c(h,f,r,a);return c(p,g,r,o)}function uS(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r=n[(s-1+t)%t],o=n[s],a=n[(s+1)%t],l=n[(s+2)%t],c=0,u=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let p=0;p<e;p++){let g=u+(h-u)*(p/e);i.push(cS(r,o,a,l,c,u,h,f,g))}}return i}function hS(n){let e=n.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let u=n[c],h=n[(c+1)%e];t[c+1]=t[c]+Math.hypot(h[0]-u[0],h[1]-u[1])}let i=t[e],s=Math.max(1,Math.round(i/Kb)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let u=c*r;for(;l<e-1&&t[l+1]<=u;)l++;let h=n[l],f=n[(l+1)%e],p=t[l+1]-t[l],g=p>0?(u-t[l])/p:0;o[c]=h[0]+(f[0]-h[0])*g,a[c]=h[1]+(f[1]-h[1])*g}return{xs:o,zs:a,count:s,step:r}}function e0(n,e){let t=n.length,i=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=n[(o+t)%t];for(let o=0;o<t;o++)i[o]=r/s,r+=n[(o+1+e)%t]-n[((o-e)%t+t)%t];return i}function fS(n,e,t){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=n[c]-n[l],h=e[c]-e[l],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,u=(s[c]-s[l])/(2*t),h=(r[c]-r[l])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function dS(n,e){let t=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[a]*n[a]+2*iS*e);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(n[o]*n[o]+2*sS*e);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function t0(n){let e=n.length,t=-1;for(let r=0;r<e;r++)if(n[r]!==n[(r-1+e)%e]){t=r;break}if(t<0)return n[0]!==0?[{start:0,len:e,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function i0(n,e){let t=n.length,i=0;for(let s=0;s<t;s++){let r=n[s].vmax,o=n[(s+1)%t].vmax;i+=e/Math.max(1,.5*(r+o))}return i}function Mf(n,e){let t=n.length,i=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let u=n[c].curv,h=Math.abs(u);h>i&&(i=h);let f=Math.abs(n[c].slope);f>s&&(s=f),r[c]=u>$m?1:u<-$m?-1:0,o[c]=h<_f?1:0}let a=0;for(let c of t0(r))c.len*e>=tS&&a++;let l={start:0,len:0};for(let c of t0(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function pS(n,e){let t=n.length,i=gf,s=(c,u)=>(c+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let u=Math.floor(n[c].x/i),h=Math.floor(n[c].z/i);o[c]=[u,h];let f=s(u,h),p=r.get(f);p||(p=[],r.set(f,p)),p.push(c)}let a=0,l=gf*gf;for(let c=0;c<t;c++){let[u,h]=o[c];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let g=r.get(s(u+f,h+p));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=eS)continue;let b=n[c].x-n[x].x,M=n[c].z-n[x].z;b*b+M*M<l&&a++}}}return a}function mS(n){let e=lS(n),t=uS(e,160),{xs:i,zs:s,count:r,step:o}=hS(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((v,w)=>({k:v,a:n.range(a[w][0],a[w][1]),p:n.range(0,ac)})),c=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,y=(v+1)%r,S=i[y]-i[w],R=s[y]-s[w];h[v]=Math.hypot(S,R)||1e-9,c[v]=S/h[v],u[v]=R/h[v]}let f=new Float64Array(r),p=new Float64Array(r),g=1;for(let v=0;v<40;v++){for(let y=0;y<r;y++){let S=0;for(let R of l)S+=R.a*g*Math.sin(ac*R.k*y/r+R.p);f[y]=jb+S}let w=0;for(let y=0;y<r;y++){let S=(y-1+r)%r,R=(y+1)%r;p[y]=(f[R]-f[S])/h[y],Math.abs(p[y])>w&&(w=Math.abs(p[y]))}if(w<=Qb)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let v=0;v<r;v++){let w=(v-1+r)%r,y=(v+1)%r,S=i[y]-i[w],R=f[y]-f[w],N=s[y]-s[w],F=Math.hypot(S,R,N)||1e-9;x[v]=S/F,m[v]=R/F,d[v]=N/F}let b=fS(i,s,o),M=e0(b,2),_=new Float64Array(r);for(let v=0;v<r;v++){let w=yf((Math.abs(M[v])-.016666666666666666)/.023333333333333334,0,1);_[v]=xf+(Qm-xf)*w}let T=e0(_,10);for(let v=0;v<r;v++)T[v]=yf(T[v],xf,Qm);let E=new Float64Array(r);for(let v=0;v<r;v++)E[v]=Math.min(oS,Math.sqrt(rS/Math.max(Math.abs(M[v]),1e-9)));return dS(E,o),{xs:i,ys:f,zs:s,count:r,step:o,fx:c,fz:u,tx:x,ty:m,tz:d,slope:p,curv:M,width:T,vmax:E}}function gS(n){let{xs:e,ys:t,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:u,slope:h,curv:f,width:p,vmax:g}=n,x=[];for(let M=0;M<s;M++)x.push({curv:f[M],slope:h[M],vmax:g[M],x:e[M],z:i[M]});let m=Mf(x,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(nS/r))%s:0,b=new Array(s);for(let M=0;M<s;M++){let _=(d+M)%s;b[M]={s:M*r,x:e[_],y:t[_],z:i[_],tx:l[_],ty:c[_],tz:u[_],rx:-a[_],rz:o[_],width:p[_],curv:f[_],vmax:g[_],slope:h[_]}}return b}function xS(n,e,t){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=_f?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(lc/e),a=Math.floor((i*e-lc)/e),l=Math.ceil(n0/e),c=[],u=[],h=(m,d)=>c.every(([b,M])=>d<b||m>M),f=(m,d,b,M)=>{for(let _=0;_<400;_++){let T=Math.round(t.range(m,d)/e),E=Math.ceil(b/e),v=T+E;if(a-v<o)return null;let w=t.int(o,a-v),y=w+T;if(M&&!r(w,y+E))continue;let S=w-l,R=y+E+l;if(!(S<0||R>i-1||!h(S,R)))return c.push([S,R]),{a:w,b:y}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,vf,!0);d&&u.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let d=f(10,10,0,!1);d&&u.push({type:"boost",s0:d.a*e,s1:d.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let d=f(60,140,0,!1);d&&u.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return u.sort((m,d)=>m.s0-d.s0),u}function vS(n,e,t){let i=mS(n),s=gS(i),{count:r,step:o}=i,a=r*o,l=xS(s,o,n),c=Mf(s,o),u=1/0,h=-1/0,f=1/0,p=-1/0;for(let g of s)g.x<u&&(u=g.x),g.x>h&&(h=g.x),g.z<f&&(f=g.z),g.z>p&&(p=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:u,maxX:h,minZ:f,maxZ:p},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:i0(s,o),corners:c.corners}}}function yS(n){let e=[],{pts:t,count:i,step:s,length:r}=n;if(!Array.isArray(t)||t.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=Gm&&r<=Wm||e.push(`longueur ${r.toFixed(0)} m hors [${Gm}, ${Wm}]`),Math.abs(i*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<Xm||a>qm)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${Xm}, ${qm}]`);let l=Mf(t,s);l.minRadius>=Ym||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${Ym}`),l.maxSlope>Jb&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<Zm&&e.push(`${l.corners} virages < ${Zm}`),l.longestStraight<Km&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${Km}`);let c=pS(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=i0(t,s);u>=jm&&u<=Jm||e.push(`temps au tour ${u.toFixed(1)} s hors [${jm}, ${Jm}]`);let h=n.features||[],f=h.filter(d=>d.type==="ramp").length,p=h.filter(d=>d.type==="boost").length,g=h.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=d=>Math.round((d%r+r)%r/s)%i;for(let d of h)if((d.s0<lc||d.s1>r-lc)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let b=d.s1-d.s0;(b<11.5||b>16.5)&&e.push(`tremplin de ${b.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let M=x(d.s0),_=x(d.s1+vf),T=!0;for(let E=M;E!==(_+1)%i;E=(E+1)%i)if(Math.abs(t[E].curv)>=_f){T=!1;break}T||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((d,b)=>d.s0-b.s0);for(let d=0;d+1<m.length;d++){let b=m[d],M=m[d+1],_=b.s1+(b.type==="ramp"?vf:0);M.s0<_+n0-1e-6&&e.push(`features ${b.type} et ${M.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function s0(n,e={}){let t=e.maxAttempts??aS,i=Jn(n),s=null,r=1/0;for(let o=0;o<t;o++){let a=i.fork("try"+o),l=vS(a,n,o+1),c=yS(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function bf(n,e){let t=n.length;if(n.open)return e<0?0:Math.min(e,(n.count-1.001)*n.step);let i=e%t;return i<0&&(i+=t),i>=t&&(i-=t),i}var _S=(n,e)=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function ci(n,e,t={}){let i=n.count,s=n.step,r=bf(n,e),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,u=o-a,h=n.pts[l],f=n.pts[c],p=(_,T)=>_+(T-_)*u,g=p(h.tx,f.tx),x=p(h.ty,f.ty),m=p(h.tz,f.tz),d=Math.hypot(g,x,m)||1,[b,M]=_S(p(h.rx,f.rx),p(h.rz,f.rz));if(t.s=r,t.x=p(h.x,f.x),t.y=p(h.y,f.y),t.z=p(h.z,f.z),n.open&&e!==r){let _=e-r;t.x+=g/d*_,t.z+=m/d*_}return t.tx=g/d,t.ty=x/d,t.tz=m/d,t.rx=b,t.rz=M,t.width=p(h.width,f.width),t.curv=p(h.curv,f.curv),t.vmax=p(h.vmax,f.vmax),t.slope=p(h.slope,f.slope),t.i=l,t}var ls={};function At(n,e,t,i={}){return ci(n,e,ls),i.x=ls.x+t*ls.rx,i.y=ls.y,i.z=ls.z+t*ls.rz,i.heading=Math.atan2(ls.tx,ls.tz),i.slope=ls.slope,i}function r0(n,e){let t=bf(n,e);for(let i of n.features)if(i.type==="ramp"&&t>=i.s0&&t<i.s1)return i.height*(t-i.s0)/(i.s1-i.s0);return 0}function Bs(n,e,t){let i=bf(n,e);for(let s of n.features)if((t===void 0||s.type===t)&&i>=s.s0&&i<=s.s1)return s;return null}var SS=1/30,o0=.5,a0=.4,ES=.6,fa=[.2,.36,.52,.68,.84],l0=fa.length+1,wS=.2,TS=.1,AS=.34,RS=4,CS=4,PS=.2,IS=4.9,LS=5.5,DS=5,NS=6,US=1.8,OS=.03,FS=1.6,BS=.5,zS=2,kS=.785,HS=4.7,VS=2.5,po=.196,GS=.098,WS=.5,XS=.27,qS=16,YS=11,$S=.72,ZS=5,KS=.5,c0=.35,jS=.42,JS=60,QS=.3,eE=5,tE=1.6,nE=3,iE=14,sE=.004,rE=1.2,oE=2,aE=.5,lE=22,u0=.25,cE=6,uE=1.8,h0=1,hE=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],Zt=(n,e,t)=>n<e?e:n>t?t:n,Fi=(n,e=0)=>Number.isFinite(n)?n:e,fE=(n,e)=>{let t=n%e;return t<0?t+e:t},dE=(n,e,t)=>n<e?Math.min(e,n+t):Math.max(e,n-t);function f0({s:n=0,d:e=0}={}){return{s:n,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:ur.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function d0(n,e,t,i,s,r,o){let a=n.events,l=e||{},c=s||{},u=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,SS):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let h=t.length,f=i.maxSpeed,p=Zt(Fi(l.throttle),0,1),g=Zt(Fi(l.brake),0,1),x=Zt(Fi(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,g=0,x=0);let d=Xe=>t.open?Xe:fE(Xe,h),b=d(n.s),M=ci(t,b),_=!n.airborne;if(u&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),_){let Xe=Bs(t,b,"boost");if(Xe){let be=Math.floor(n.s/h)+":"+Xe.s0;n._padKey!==be&&(n._padKey=be,n.boostT=Math.max(n.boostT,rE),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let T=n.boostT>0;T&&(p=1);let E=_&&!m&&Math.abs(x)>.3&&n.speed>oE&&(!!l.drift||g>.3),v=n.speed,w=v/f;n._shiftT>0?n._shiftT-=r:n.gear<l0&&w>fa[n.gear-1]&&!(g>0&&v>3)?(n.gear+=1,n._shiftT=wS):n.gear>1&&v<fa[n.gear-2]*f-2&&(n.gear-=1,n._shiftT=TS);let y=n.gear>1?fa[n.gear-2]:0,S=n.gear<l0?fa[n.gear-1]:1;n.rpm=Zt(.35+.65*((w-y)/(S-y)),.1,1.05);let R=_&&Math.abs(n.d)>M.width*.5,N=ES*f,F=R?N:f*(T?i.boostPower:1),L=RS/(f*f),I=0;if(_){if(R&&v>N&&(I-=2*i.offroadDrag*(v-N)),p>0&&n._shiftT<=0&&v<F){let Xe=AS*f,be=.8+.2*Math.sin(Math.PI*Zt(n.rpm,0,1)),Fe=i.accel*p*be*Math.min(1,Xe/Math.max(v,1));T&&(Fe*=zS),I+=Math.min(Fe,i.accel*1.15*(T?1.3:1))}g>0&&(I-=i.brake*g*(E?.35:1)),I-=v*(.2-.03*(n.gear-1))*(1-p),I-=PS,I-=IS*M.slope,I-=L*v*v}else I-=L*CS*v*v;n.speed=Math.max(0,v+I*r),_&&n.speed>F&&!R&&(n.speed=Math.max(F,n.speed-10*r));let H=Zt(n.speed/f,0,1),W=1+(i.wetGrip-1)*pE(c),z=Zt(i.grip*Fi(c.grip,1)*W,.05,1.5),O=n.speed<.6?0:x,q=Math.abs(O)>Math.abs(n.steer)||O*n.steer<0?LS:DS*Zt(Math.abs(I)/6,1,2.5);n.steer=dE(n.steer,O,q*r);let se=n.yaw-n.vdir,me=n.speed*Math.sin(se),ie=Math.min(FS,1+OS*Math.abs(me));E&&(ie=i.driftBonus),T&&_&&(ie*=BS);let J=1-(1-i.steerHighSpeed)*H,Q=Math.min(1,n.speed/6),oe=_?1:i.airControl,he=n.steer*i.steerRate*J*ie*Q*oe*(.6+.4*Math.min(1,z)),_e=Math.min(n.speed/eE,JS*Math.min(1.2,z)*(E?1.5:1)/Math.max(n.speed,1)),Se=Zt(he,-_e,_e);_&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-tE*r)),o&&i.steerNoise>0&&!m&&_&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let Ie=Math.max(.3,1-n.d*M.curv),ne=n.speed*Math.cos(n.vdir)/Ie*r,Ee=n.speed*Math.sin(n.vdir)*r,X=M.curv*ne,We=n.vdir,we=X*(_?1-QS:1);if(n.yaw+=Se*r-we,n.vdir-=we,_){let Xe=(E?US:NS)*z,be=1-Math.exp(-Xe*r);n.vdir+=(n.yaw-n.vdir)*be,n.speed*=1-(1-Math.cos(se))*be}else{let Xe=3*Zt(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-Xe*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=Zt(Fi(n.vdir),-o0,o0),n.yaw=Zt(Fi(n.yaw),n.vdir-a0,n.vdir+a0),n._t+=r,Ee+=Fi(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(_?1:.5),n.s+=ne,n.d+=Ee;let Le=_?Zt((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*Q:0;n.drift+=(Le-n.drift)*Math.min(1,8*r);let Pe=ci(t,d(n.s));n.onRoad=Math.abs(n.d)<=Pe.width*.5;let Ne=Pe.width*.5+6-.4;if(Math.abs(n.d)>=Ne-.02){let Xe=n.d>=0?1:-1,be=n.vdir*Xe>0,Fe=be?Math.abs(Math.sin(n.vdir)):0;if(n.d=Xe*Ne,be&&(n.vdir=-Xe*.04,n.yaw=n.yaw*.4-Xe*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let $e=n.boostT>0,Qe=o?o.next():1;$e&&n.speed>cE||Fe>aE&&n.speed>lE&&Qe<u0||n.airborne&&Qe<u0?(n.speed*=.3,n.stun=uE,a.push("crash")):n.speed*=1-Zt(i.wallLoss*1.3*(.5+Fe),0,.9),a.push("wall")}n.boostT=0,n._wallT=c0,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&_&&(n.speed*=Math.exp(-2.2*r)),b=d(n.s);let pe=Fi(r0(t,b)),P=(pe-n._g)/r;if(n.airborne||(pe<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-pe,n.vy=n._vyG,n.vy>nE&&a.push("jump")):(n.yRel=pe,n.vy=Zt(P,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-pe),n.vy<=0&&n.yRel<=pe)){let Xe=-n.vy,be=Math.abs(n.yaw-n.vdir),Fe=Xe>iE/Math.max(.3,i.landing)||be>.35;n.airborne=!1,n.yRel=pe,n.vy=0,n._vyG=0,n._springA=Zt(n._springA+.35*n._apex+.03*Xe,0,1),n._springP=Math.PI/2;let $e=sE*Xe+(Fe?.08:0);n.speed*=1-Zt($e/Math.max(.2,i.landing),0,.45),a.push(Fe?"hardLand":"land")}n._g=pe,_=!n.airborne,n.speed=Zt(Fi(n.speed),0,1.5*f),n._wallT=Math.max(0,n._wallT-r);let A=Math.max(0,1-n.speed/4,n._wallT/c0),ee=_?(X+(n.vdir-We))/r:0;n._turnF+=(ee-n._turnF)*Math.min(1,6*r);let le=n.speed*n._turnF,xe=Math.sign(le)*Math.max(0,Math.abs(le)-ZS),fe=n.steer*jS*Math.min(1,n.speed/10),Be=Zt((1-A)*(Math.atan(xe/YS)*$S+KS*(n.yaw-n.vdir)+fe),-h0,h0);n.stun>0&&(Be=(n.lean>=0?1:-1)*1.35),n.lean+=(Be-n.lean)*Math.min(1,9*r),n._dive=g>.1&&_?Math.min(po,n._dive+po*r):Math.max(0,n._dive-.25*r);let Re=Zt(I*GS,-po,po)-n._dive;n._pitchF+=(Re-n._pitchF)*Math.min(1,r/WS);let Ue=Zt(Re-n._pitchF,-po,po);n.wheelie=n.boostT>0&&_?Math.min(Math.PI/2,n.wheelie+HS*r):Math.max(0,n.wheelie-VS*r),Ue+=Math.sin(n.wheelie)*kS,_||(Ue=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Ue,n._springA*=Math.exp(-r/XS),n._springP+=qS*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let Xe of hE)Number.isFinite(n[Xe])||(n[Xe]=0);return n.speed<0&&(n.speed=0),n}function pE(n){return Zt(Fi(n.wet),0,1)}var mE=8,gE=25,xE=150,vE=3,yE=35,_E=2,ME=14,bE=30,SE=12,EE=2,wE={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},pn=(n,e,t)=>n<e?e:n>t?t:n,cc=(n,e,t)=>n+(e-n)*t,TE=(n,e)=>n-e*Math.round(n/e);function AE(n,e){let t=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function RE(n,e){for(let t=0;t<=xE;t+=gE)if(Math.abs(ci(n,e+t).curv)>.004)return!1;return!0}function uc(n,e){let t=n||wE,i={persona:t,rng:e,skill:pn(t.skill??.5,0,1),aggression:pn(t.aggression??.5,0,1),jumpSkill:pn(t.jumpSkill??.5,0,1),lineSkill:pn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=e.range(8,20)+(1-i.skill)*15,i}function hc(n,e,t,i,s,r){let o=n.input,a=t.length,l=n.rng,c=n.aggression,u=n.skill,h=n.jumpSkill,f=e.speed,p=e.s,g=ci(t,p),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-u)*15);let m=n.mistakeT>0;n.boostLock-=r;let d=cc(1.4,.6,c),b=Math.max(20,f*d),M=Math.max(b,pn(f*1.6+20,40,110)),_=1/0,T=0,E=0,v=0;for(let Q=0;Q<=M;Q+=mE){let oe=Q===0?g:ci(t,p+Q);if(Q<=b&&oe.vmax<_&&(_=oe.vmax),Q>=8){let he=Math.abs(oe.curv);he>T&&(T=he,E=Math.sign(oe.curv),v=Q)}}let w=pn(T/.02,0,1),y=0;if(E!==0&&w>0){let Q=pn((v-10)/30,0,1),oe=cc(1,-.8,Q);y=E*x*n.lineSkill*w*oe}y+=n.wander,m&&(y+=n.mistakeSide*1.2);let S=AE(t,p),R=S?S.dist:1/0,N=Bs(t,p,"ramp")!==null,F=R<bE;(N||F)&&h>.5&&(y*=1-pn((h-.4)/.6,0,1));let L=!N&&R>=vE&&R<=yE&&h<.5;for(let Q=0;Q<s.length;Q++){let oe=s[Q];if(oe===e)continue;let he=TE(oe.s-p,a);if(he<=0||he>=SE)continue;let _e=oe.d-e.d;if(!(Math.abs(_e)>=EE)){if(c>.55){let Se=_e!==0?Math.sign(_e):e.d<0?1:-1;y+=Se*(.6+.8*c)}else{let Se=_e!==0?-Math.sign(_e):e.d<0?1:-1;Math.abs(e.d+Se*2)>x&&(Se=-Se),y+=Se*2*(1-c)}break}}let I=n.obstacles;if(I){let Q=35+f*1.7,oe=null,he=1/0;for(let _e=0;_e<I.length;_e++){let Se=I[_e],Ie=Se.s-p;Ie>-Se.type.len&&Ie<Q&&Ie<he&&Math.abs(Se.d-y)<Se.type.w/2+1.5&&(Se.speed<f-3||Ie<40)&&(oe=Se,he=Ie)}if(oe){let _e=oe.type.w/2+2,Se=[oe.d-_e,oe.d+_e].filter(Ee=>Math.abs(Ee)<=x),Ie=Se.filter(Ee=>!I.some(X=>X!==oe&&Math.abs(X.s-oe.s)<30&&Math.abs(X.d-Ee)<X.type.w/2+1.2)),ne=Ie.length?Ie:Se;ne.length&&(y=ne.reduce((Ee,X)=>Math.abs(X-e.d)<Math.abs(Ee-e.d)?X:Ee))}}y=pn(y,-x,x),n.dGoal+=(y-n.dGoal)*Math.min(1,r*(I?4.5:2.5));let H=pn(n.dGoal,-x,x),W;if(e.airborne)W=pn(-e.yaw*2,-.3,.3);else{let Q=H-e.d,oe=pn(Q*.12,-.25,.25),he=ci(t,p+pn(f*.25,4,20)).curv,_e=i.steerRate*cc(1,i.steerHighSpeed,pn(f/i.maxSpeed,0,1));W=(he*f+(oe-e.yaw)*3)/_e}W=pn(W,-1,1),Number.isFinite(W)||(W=0);let z=pn(-n.playerGap/150,-1,1)*.06,O=cc(.86,1,u)+c*.04;m&&(O*=.85);let V=_*O*(1+z),q=i.maxSpeed,se=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&n.boostLock<=0){if(h>.6&&R>=_E&&R<=ME)se=!0;else if(f>20&&RE(t,p)){let Q=n.playerGap<-20,oe=.25+.5*c+(Q?.3:0);se=l.chance(oe)}n.boostLock=se?1:.4}o.boost=se;let me=T<.003;if(e.boostT>0){let Q=q*i.boostPower;V=me?Q*.98:Math.min(V,Q)}else V=Math.min(V,q);let ie=0,J=0;if(e.airborne)ie=1;else{let Q=V-f;Q>-1.5?ie=L?0:pn(.5+Q*.25,0,1):J=pn((-Q-1.5)*.15,0,1)}return o.throttle=ie,o.brake=J,o.steer=W,o.drift=!e.airborne&&c>.75&&T>.025&&f>40&&v<20,o}var CE=7,PE=3,IE=.3,LE=3,DE=25,NE=1.5,UE=1.2,OE=1.8,p0=.9,FE={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},fc=(n,e,t)=>n<e?e:n>t?t:n,Sf=(n,e)=>n-e*Math.round(n/e);function Ef(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function m0({track:n,laps:e,env:t,rng:i,riders:s,final:r=!0,carry:o=null,startS:a=0}){let l=n.length,c=n.raceEnd??l,u=e*c,f=s.filter(E=>!E.isPlayer).concat(s.filter(E=>E.isPlayer)).map((E,v)=>{let w=Math.floor(v/2),y=v%2,S=a-CE*(w+1),R=y===0?-2.5:2.5,N=o?.states.get(E.id),F=N||f0({s:S,d:R});return{id:E.id,name:E.name,color:E.color,accent:E.accent,isPlayer:!!E.isPlayer,stats:E.stats,persona:E.persona||null,state:F,remote:!!E.remote,ai:E.isPlayer||E.remote?null:uc(E.persona||FE,i.fork("ai:"+E.id)),rng:i.fork("rider:"+E.id),others:null,input:Ef(),coast:Ef(),frameEvents:[],startS:N?N.s:S,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:v+1}});for(let E of f)E.others=f.filter(v=>v!==E).map(v=>v.state);let p=f.find(E=>E.isPlayer)||null,g=f.slice(),x=f.length,m=new Uint8Array(x*x);function d(E,v,w,y,S){if(w===v)return;let R=Math.floor(v/c),N=Math.min(Math.floor(w/c),e);for(let F=Math.max(R+1,1);F<=N;F++){let L=fc((F*c-v)/(w-v),0,1),I=y+L*S,H=I-E.lapStartT;E.lapTimes.push(H),(E.bestLap===null||H<E.bestLap)&&(E.bestLap=H),E.lapStartT=I}if(r&&w>=u){let F=fc((u-v)/(w-v),0,1);E.finished=!0,E.finishTime=y+F*S}}function b(E){let v=E.state,w=E.coast;return w.throttle=IE,w.brake=0,w.steer=fc(-v.yaw*2-v.d*.05,-.5,.5),w.boost=!1,w.drift=!1,w}function M(E,v){let w=E.state;for(let y=0;y<x;y++){let S=f[y];if(S===E||S.hidden)continue;let R=Sf(S.state.s-w.s,l);if(R>LE&&R<DE&&Math.abs(S.state.d-w.d)<NE){w.speed=Math.min(w.speed+UE*E.stats.slipstream*v,E.stats.maxSpeed*1.05);return}}}function _(){for(let E=0;E<x;E++)for(let v=E+1;v<x;v++){let w=f[E],y=f[v];if(w.remote&&y.remote||w.hidden||y.hidden)continue;let S=!w.remote,R=!y.remote,N=Sf(y.state.s-w.state.s,l),F=y.state.d-w.state.d,L=E*x+v;if(Math.abs(N)<OE&&Math.abs(F)<p0){let I=F!==0?Math.sign(F):i.sign(),H=((p0-Math.abs(F))/2+.05)*(S&&R?1:2);if(S&&(w.state.d-=I*H),R&&(y.state.d+=I*H),!m[L]){m[L]=1;let W=(w.state.speed+y.state.speed)/2;S&&(w.state.speed+=(W-w.state.speed)*.2),R&&(y.state.speed+=(W-y.state.speed)*.2);let z=N>=0?w:y;z.remote||(z.state.speed*=.96),(!S||!R)&&(S?w:y).state.events?.push("hit")}}else m[L]=0}}let T={phase:o?"racing":"countdown",countdown:o?0:PE,time:o?o.time:0,final:r,laps:e,track:n,riders:f,player:p,update(E,v){if(T.phase==="countdown"){T.countdown=Math.max(0,T.countdown-E),T.countdown<=0&&(T.phase="racing");return}let w=T.time;T.time+=E;for(let y=0;y<x;y++){let S=f[y];S.remote||(S.finished?S.input=b(S):S.isPlayer?S.input=v||Ef():(p&&(S.ai.playerGap=Sf(S.state.s-p.state.s,l)),S.input=hc(S.ai,S.state,n,S.stats,S.others,E)))}for(let y=0;y<x;y++){let S=f[y];if(S.remote){S.lap=1;continue}let R=S.state,N=S.finished,F=R.s;if(d0(R,S.input,n,S.stats,t,E,S.rng),N||(d(S,F,R.s,w,E),S.finished||M(S,E)),S.lap=S.finished?e:fc(Math.floor(R.s/c)+1,1,e),!S.isPlayer){S.frameEvents.length=0;for(let L=0;L<R.events.length;L++)S.frameEvents.push(R.events[L]);R.events.length=0}}_(),g.sort((y,S)=>y.finished!==S.finished?y.finished?-1:1:y.finished?y.finishTime-S.finishTime:S.state.s-y.state.s);for(let y=0;y<x;y++)g[y].position=y+1;r?(p?p.finished:f.every(y=>y.finished))&&(T.phase="finished"):(p||g[0]).state.s>=c&&(T.phase="relay")},results(){let E=f.map(v=>{let w;if(v.finished)w=v.finishTime;else{let y=Math.max(0,v.state.s-v.startS),S=T.time>1?Math.max(5,y/T.time):40,R=Math.max(0,u-v.state.s);w=T.time+R/S}return{id:v.id,name:v.name,position:v.position,time:w,bestLap:v.bestLap,isPlayer:v.isPlayer}});return E.sort((v,w)=>v.position-w.position),E}};return T}var If={};Wx(If,{PLAYER:()=>Bi,RIVALS:()=>pc,UPGRADES:()=>hr,applyUpgrade:()=>vc,computeStats:()=>zs,createRun:()=>mc,dailySeed:()=>yc,isRunOver:()=>da,loadMeta:()=>Rf,offerUpgrades:()=>xc,randomSeed:()=>zE,recordResult:()=>Tf,runRiders:()=>gc,saveMeta:()=>Cf,standings:()=>mo,updateMeta:()=>Pf});var g0="polygon-rush-meta",BE=Object.keys(Fs).filter(n=>n!=="sicily"),Bi={id:"player",name:"Vous",color:14885934,accent:2312392},hr=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],pc=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],x0=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],wf=x0.length;function v0(n){return hr.find(e=>e.id===n)||null}function y0(n,e){let t=0;for(let i of n.upgrades)i===e&&t++;return t}function mc(n){let e=String(n),t=Jn(ha(e+"|run")),i=[];for(let o=0;o<wf;o++)if(o===0)i.push("sunset");else if(o===wf-1)i.push("rain");else{let a=i[o-1],l=BE.filter(c=>c!==a&&!(o===wf-2&&c==="rain"));i.push(t.pick(l))}let s=x0.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Bi.id]:0};for(let o of pc)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function gc(n){let e=Math.max(0,n.stageIndex),t=[{id:Bi.id,name:Bi.name,color:Bi.color,accent:Bi.accent,isPlayer:!0,persona:null,stats:zs(n)}];for(let i of pc){let s=Math.min(.99,Math.round((i.skill+.01*e)*100)/100);t.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...ur}})}return t}function zs(n){let e={...ur};for(let t of n.upgrades){let i=v0(t);i&&i.apply(e)}return e}function xc(n,e=null){let t=Jn(ha(`${n.seed}|offer|${n.stageIndex}`)),i=hr.filter(s=>y0(n,s.id)<s.maxStacks&&!(e&&e.has(s.id)));return t.shuffle(i).slice(0,3)}function vc(n,e){let t=v0(e);return!t||y0(n,e)>=t.maxStacks?!1:(n.upgrades.push(e),!0)}function _0(n){if(n===Bi.id)return Bi.name;let e=pc.find(t=>t.id===n);return e?e.name:n}function Tf(n,e){if(da(n))return n;let t=e.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=oc[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||n.names?.[r.id]||_0(r.id),position:a,points:l,isPlayer:r.id===Bi.id})}),n.history.push(s),n.stageIndex+=1,n}function mo(n){let e={};for(let t of n.history)for(let i of t.results)e[i.id]=Math.min(e[i.id]??1/0,i.position);return Object.keys(n.points).map(t=>({id:t,name:n.names?.[t]||_0(t),points:n.points[t],isPlayer:t===Bi.id,_best:e[t]??1/0})).sort((t,i)=>i.points-t.points||t._best-i._best).map(({_best:t,...i})=>i)}function da(n){return n.stageIndex>=n.stages.length}function yc(n=new Date){let e=n instanceof Date?n:new Date(n),t=e.getUTCFullYear(),i=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${i}-${s}`}function zE(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}function dc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Af(n){let e=dc();if(!n||typeof n!="object")return e;let t=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:t(n.runs),wins:t(n.wins),bestPoints:t(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):e.unlocked}}function M0(){try{return globalThis.localStorage??null}catch{return null}}function Rf(){try{let n=M0();if(!n)return dc();let e=n.getItem(g0);return e?Af(JSON.parse(e)):dc()}catch{return dc()}}function Cf(n){try{let e=M0();return e?(e.setItem(g0,JSON.stringify(Af(n))),!0):!1}catch{return!1}}function Pf(n,e){let t=Af(n),i=mo(e),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var ui=.9,b0=.3,_c=8,Lf=3,S0=6+.8,pa=3,kE=4.5,HE=.015,VE=.004,E0=60,St={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},Mc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],w0=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],GE=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],An=(n,e,t)=>n+(e-n)*t,Hn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,i,s){let[r,o,a,l]=e,c=w0(Mc(o,r),Mc(a,r)),u=w0(Mc(a,r),Mc(l,r)),h=[c[0]+u[0],c[1]+u[1],c[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=GE(h,i)<0,p=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function ma(n,e,t,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=l,f[o]=u,f[a]=h,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*i[0]+t[1][p]*f[1]*i[1]+t[2][p]*f[2]*i[2])});n.quad(c,s,t[r].map(u=>u*l),null)}}}function Df(n,e,t){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new ai(i);return s.colorSpace=Ot,s.anisotropy=4,s}function T0(n,e,t,i){n.beginPath(),e.forEach(([s,r],o)=>o?n.lineTo(s*t,r*i):n.moveTo(s*t,r*i)),n.closePath(),n.fill()}var WE=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function bc(n,e,t){let i=t??Jn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(U=>U.type==="ramp"),u=l.filter(U=>U.type==="boost"),h=l.filter(U=>U.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,g=new lt;g.name="road";let x=[],m=[],d=[],b=U=>(m.push(U),U),M=Df(128,128,(U,K,$)=>{U.fillStyle="#f3efe6",U.fillRect(0,0,K,$),U.fillStyle="#d6202a",T0(U,WE,K,$)}),_=Df(256,128,(U,K,$)=>{U.fillStyle="#04141a",U.fillRect(0,0,K,$),U.fillStyle="#37f3ff",T0(U,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],K,$)}),T=Df(1024,256,(U,K,$)=>{U.fillStyle="#0b0e16",U.fillRect(0,0,K,$),U.strokeStyle="#ffd21f",U.lineWidth=10,U.strokeRect(12,12,K-24,$-24),U.fillStyle="#ffd21f",U.font="bold 150px Arial, Helvetica, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText("POLYGON RUSH",K/2,$/2+8)});for(let U of[M,_,T])U&&d.push(U);_&&(_.wrapS=Ln);let E=b(new ot({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),v=b(new zt({vertexColors:!0})),w=b(new ot({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),y=b(new ot({vertexColors:!0,flatShading:!0,roughness:1})),S=b(new ot({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),R=b(new zt({vertexColors:!0})),N=b(new ot({color:M?16777215:16762906,map:M,emissive:M?16777215:16762906,emissiveMap:M,emissiveIntensity:.5,flatShading:!0})),F=b(new ot({color:207411,emissive:3666943,emissiveMap:_,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=b(new ot({vertexColors:!0,flatShading:!0,side:Dt,roughness:.9})),I=b(new zt({vertexColors:!0})),H=b(new ot({vertexColors:!0,flatShading:!0,roughness:.6})),W=b(new ot({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),z=b(new ot({color:2830138,flatShading:!0,roughness:.7})),O=b(new ot({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),V=U=>{for(let K of c)if(U>=K.s0&&U<K.s1)return K.height*(U-K.s0)/(K.s1-K.s0);return 0},q=U=>c.some(K=>U>=K.s0&&U<K.s1),se=U=>h.some(K=>U>=K.s0&&U<=K.s1),me=U=>{let K=U/o,$=Math.floor(K),B=K-$;$=n.open?Math.max(0,Math.min(r-2,$)):($%r+r)%r;let C=s[$],Z=s[($+1)%r],k=An(C.rx,Z.rx,B),j=An(C.rz,Z.rz,B),Y=Math.hypot(k,j)||1,ue=An(C.tx,Z.tx,B),Te=An(C.tz,Z.tz,B),ze=Math.hypot(ue,Te)||1,Oe=An(C.y,Z.y,B);return{s:U,x:An(C.x,Z.x,B),z:An(C.z,Z.z,B),yb:Oe,y:Oe,h:0,rx:k/Y,rz:j/Y,tx:ue/ze,tz:Te/ze,w:An(C.width,Z.width,B),curv:An(C.curv,Z.curv,B),sample:!1}},ie=(U,K,$)=>({x:An(U.x,K.x,$),y:An(U.y,K.y,$),yb:An(U.yb,K.yb,$),z:An(U.z,K.z,$),rx:An(U.rx,K.rx,$),rz:An(U.rz,K.rz,$),w:An(U.w,K.w,$)}),J=(U,K,$=0)=>[U.x+U.rx*K,U.y+$,U.z+U.rz*K],Q=(U,K,$=0)=>[U.x+U.rx*K,U.yb+$,U.z+U.rz*K],oe=[];for(let U of c)oe.push({s:U.s0,h:0},{s:U.s1,h:U.height},{s:U.s1,h:0});oe.sort((U,K)=>U.s-K.s);let he=[],_e=0,Se=(U,K,$)=>{let B=he[he.length-1];if(B&&Math.abs(B.s-U)<1e-9&&Math.abs(B.h-K)<1e-9){B.sample=B.sample||$;return}let C=me(U);C.h=K,C.y=C.yb+K,C.sample=$,he.push(C)};for(let U=0;U<r;U++){let K=U*o;for(;_e<oe.length&&oe[_e].s<=K+1e-9;)Se(oe[_e].s,oe[_e].h,!1),_e++;Se(K,V(K),!0)}for(;_e<oe.length;)Se(oe[_e].s,oe[_e].h,!1),_e++;let Ie=he.length,ne=[];for(let U=0;U<Ie&&!(n.open&&U===Ie-1);U++){let K=he[U],$=he[(U+1)%Ie],B=K.s,C=U+1<Ie?he[U+1].s:a,Z=Math.abs(C-B)<1e-9,k=(B+C)/2;ne.push({a:K,b:$,sa:B,sb:C,drop:Z,mid:k,ramp:!Z&&q(k)})}let Ee=new Hn,X=new Hn,We=new Hn,we=new Hn,Le=new Hn,Pe=new Hn,Ne=new Hn,pe=new Hn,P=new Hn,A=new Hn,ee=new Hn,le=new Hn,xe=U=>U.w/2+6-b0/2,fe=U=>U.w/2+6+b0/2;for(let U of ne){let{a:K,b:$,sa:B,sb:C,mid:Z}=U;if(U.drop){Ee.quad([J(K,-K.w/2),J(K,K.w/2),J($,$.w/2),J($,-$.w/2)],St.rampDark,[K.tx,0,K.tz]);continue}let k=K.w/2,j=$.w/2;if(U.ramp)X.quad([J(K,-k),J(K,k),J($,j),J($,-j)],Math.floor(Z/2)%2===0?St.yellow:St.black,[0,1,0]),Ee.quad([J(K,-k),J($,-j),Q($,-j),Q(K,-k)],St.rampDark,[-K.rx,0,-K.rz]),Ee.quad([J(K,k),Q(K,k),Q($,j),J($,j)],St.rampDark,[K.rx,0,K.rz]);else{Ee.quad([J(K,-k),J(K,k),J($,j),J($,-j)],n.open?Math.floor(Z/8)%2?St.motorwayB:St.motorwayA:Math.floor(Z/8)%2?St.asphaltB:St.asphaltA,[0,1,0]);for(let Oe of[-1,1])We.quad([J(K,Oe*(k-.25),.02),J(K,Oe*(k-.45),.02),J($,Oe*(j-.45),.02),J($,Oe*(j-.25),.02)],St.white,[0,1,0]);let Y=9,ue=3;for(let Oe=Math.floor(B/Y);Oe*Y<C;Oe++){let Ae=Math.max(B,Oe*Y),ae=Math.min(C,Oe*Y+ue);if(ae-Ae<1e-6)continue;let te=ie(K,$,(Ae-B)/(C-B)),de=ie(K,$,(ae-B)/(C-B));We.quad([J(te,-.08,.02),J(te,.08,.02),J(de,.08,.02),J(de,-.08,.02)],St.white,[0,1,0])}let Te=Math.abs((K.curv+$.curv)/2)>VE?1.2:.5,ze=Math.floor(Z/2)%2?St.red:St.railA;for(let Oe of n.open?[]:[-1,1])We.quad([J(K,Oe*k,.025),J(K,Oe*(k+Te),.025),J($,Oe*(j+Te),.025),J($,Oe*j,.025)],ze,[0,1,0])}for(let Y of[-1,1]){we.quad([Q(K,Y*k),Q(K,Y*xe(K)),Q($,Y*xe($)),Q($,Y*j)],n.open?St.lane:St.sand,[0,1,0]);let ue=_c/2,Te=-Lf/2,ze=-Lf,Oe=[Y*K.rx*.6,.8,Y*K.rz*.6];we.quad([Q(K,Y*fe(K),0),Q(K,Y*(fe(K)+ue),Te),Q($,Y*(fe($)+ue),Te),Q($,Y*fe($),0)],St.gravel,Oe),we.quad([Q(K,Y*(fe(K)+ue),Te),Q(K,Y*(fe(K)+_c),ze),Q($,Y*(fe($)+_c),ze),Q($,Y*(fe($)+ue),Te)],St.gravel,Oe);let Ae=Math.floor(Z/6)%2?St.railB:St.railA,ae=Y*xe(K),te=Y*xe($),de=Y*fe(K),Me=Y*fe($);!n.open&&(Y<0||p||e.openRight===!1)&&(Le.quad([Q(K,ae,0),Q(K,ae,ui),Q($,te,ui),Q($,te,0)],Ae,[-Y*K.rx,0,-Y*K.rz]),Le.quad([Q(K,de,0),Q(K,de,ui),Q($,Me,ui),Q($,Me,0)],Ae,[Y*K.rx,0,Y*K.rz]),Le.quad([Q(K,ae,ui),Q(K,de,ui),Q($,Me,ui),Q($,te,ui)],Ae,[0,1,0])),p&&Pe.quad([Q(K,ae,ui+.02),Q(K,de,ui+.02),Q($,Me,ui+.02),Q($,te,ui+.02)],Y<0?St.neonCyan:St.neonMag,[0,1,0])}}for(let U of he){if(!U.sample||Math.abs(U.curv)<=HE||Math.round(U.s/o)%8!==0||se(U.s)||q(U.s))continue;let $=-Math.sign(U.curv)*(U.w/2+6+.6),C=U.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];Ne.quad([Q(U,$-.6,1),Q(U,$+.6,1),Q(U,$+.6,2),Q(U,$-.6,2)],[1,1,1],[-U.tx,0,-U.tz],C),ma(ee,[U.x+U.rx*$,U.yb+.35,U.z+U.rz*$],[[U.tx,0,U.tz],[U.rx,0,U.rz],[0,1,0]],[.08,.12,.65],St.post)}if(!n.noStart){let U=me(0),K=Math.max(4,Math.round(U.w)),$=U.w/K;for(let k=0;k<3;k++){let j=me(-2+k),Y=me(-1+k);for(let ue=0;ue<K;ue++){let Te=-U.w/2+ue*$,ze=Te+$;We.quad([J(j,Te,.03),J(j,ze,.03),J(Y,ze,.03),J(Y,Te,.03)],(k+ue)%2?St.checkB:St.checkW,[0,1,0])}}let B=U.w/2+6+.5,C=[[U.tx,0,U.tz],[U.rx,0,U.rz],[0,1,0]];for(let k of[-1,1])ma(ee,[U.x+U.rx*k*B,U.yb+4,U.z+U.rz*k*B],C,[.3,.3,4],St.post);ma(ee,[U.x,U.yb+7.5,U.z],C,[.5,B,.5],St.beam);let Z=(k,j,Y)=>[U.x+U.tx*k+U.rx*j,U.yb+Y,U.z+U.tz*k+U.rz*j];le.quad([Z(-.55,-B,5.2),Z(-.55,B,5.2),Z(-.55,B,6.8),Z(-.55,-B,6.8)],[1,1,1],[-U.tx,0,-U.tz],[[0,0],[1,0],[1,1],[0,1]]),le.quad([Z(.55,-B,5.2),Z(.55,B,5.2),Z(.55,B,6.8),Z(.55,-B,6.8)],[1,1,1],[U.tx,0,U.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let k of u){let j=[];for(let ue=k.s0;ue<k.s1;ue+=2)j.push(ue);j.push(k.s1);let Y=j.map(me);for(let ue=0;ue+1<Y.length;ue++){let Te=Y[ue],ze=Y[ue+1],Oe=(Te.s-k.s0)/4,Ae=(ze.s-k.s0)/4;pe.quad([J(Te,-Te.w/2,.04),J(Te,Te.w/2,.04),J(ze,ze.w/2,.04),J(ze,-ze.w/2,.04)],[1,1,1],[0,1,0],[[Oe,0],[Oe,1],[Ae,1],[Ae,0]])}}}let Be=U=>{let K=U.w/2+S0,$=[[-K,0],[-K,pa]];for(let B=1;B<=7;B++){let C=Math.PI-B*Math.PI/8;$.push([K*Math.cos(C),pa+kE*Math.sin(C)])}return $.push([K,pa],[K,0]),$},Re=(U,K,$,B=0)=>[U.x+U.rx*K+U.tx*B,U.yb+$,U.z+U.rz*K+U.tz*B],Ue=(U,K,$)=>{let B=-K,C=pa-$,Z=Math.hypot(B,C)||1;return[U.rx*B/Z,C/Z,U.rz*B/Z]},Xe=([U,K])=>{let $=-U,B=pa-K,C=Math.hypot($,B)||1;return[U+$/C*.45,K+B/C*.45]};for(let U of h){let K=[];for(let B=U.s0;B<U.s1;B+=2)K.push(B);K.push(U.s1);let $=K.map(me);for(let B=0;B+1<$.length;B++){let C=$[B],Z=$[B+1],k=Be(C),j=Be(Z);for(let Y=0;Y<k.length-1;Y++){let ue=(k[Y][0]+k[Y+1][0])/2,Te=(k[Y][1]+k[Y+1][1])/2;P.quad([Re(C,k[Y][0],k[Y][1]),Re(C,k[Y+1][0],k[Y+1][1]),Re(Z,j[Y+1][0],j[Y+1][1]),Re(Z,j[Y][0],j[Y][1])],n.open?Y%2?St.tunOchreA:St.tunOchreB:Y%2?St.tunA:St.tunB,Ue(C,ue,Te))}if(Math.round((C.s-U.s0)/2)%6===0)for(let Y=1;Y<=8;Y++){let ue=Xe(k[Y]),Te=Xe(k[Y+1]),ze=(ue[0]+Te[0])/2,Oe=(ue[1]+Te[1])/2;A.quad([Re(C,ue[0],ue[1]),Re(C,Te[0],Te[1]),Re(C,Te[0],Te[1],.6),Re(C,ue[0],ue[1],.6)],n.open?St.sodium:Y%2?St.neonCyan:St.neonMag,Ue(C,ze,Oe))}}for(let B of[U.cutStart?null:$[0],U.cutEnd?null:$[$.length-1]]){if(!B)continue;let C=B.w/2+S0,Z=[[B.tx,0,B.tz],[B.rx,0,B.rz],[0,1,0]];for(let k of[-1,1])ma(P,[B.x+B.rx*k*(C+1.2),B.yb+5,B.z+B.rz*k*(C+1.2)],Z,[2,1.1,5],St.concrete);ma(P,[B.x,B.yb+10.5,B.z],Z,[2,C+3.5,1.5],St.concreteB)}}let be=(U,K,$,B=!1)=>{if(!U.idx.length)return null;let C=new ht;C.setAttribute("position",new rt(U.pos,3)),C.setAttribute("color",new rt(U.col,3)),C.setAttribute("uv",new rt(U.uv,2)),C.setIndex(U.idx),C.computeVertexNormals(),x.push(C);let Z=new et(C,K);return Z.name=$,Z.receiveShadow=B,g.add(Z),Z};be(Ee,E,"road-asphalt",!0),be(X,v,"road-ramp-top"),be(We,w,"road-paint"),be(we,y,"road-shoulder-talus"),be(Le,S,"road-barriers"),p&&be(Pe,R,"road-barrier-neon"),be(Ne,N,"road-chevrons"),be(pe,F,"road-boost"),be(P,L,"road-tunnels"),be(A,I,"road-tunnel-neon"),be(ee,H,"road-props"),be(le,W,"road-start-sign");let Fe=[];for(let U=1;U*E0<a-5;U++){let K=U*E0;if(h.some(j=>K>=j.s0-15&&K<=j.s1+15))continue;let $=me(K),B=U%2?1:-1,C=B*($.w/2+6+2.6),Z=$.yb-Lf*Math.min(1,2.45/_c),k=i.range(8.5,9.5);Fe.push({x:$.x+$.rx*C,z:$.z+$.rz*C,y:Z,h:k,hx:$.x+$.rx*(C-B*.6),hz:$.z+$.rz*(C-B*.6)})}if(Fe.length){let U=new Jt(.18,.26,9,6,1),K=new $n(.55,0);x.push(U,K);let $=new En(U,z,Fe.length),B=new En(K,O,Fe.length);$.name="road-lamp-masts",B.name="road-lamp-heads";let C=new je,Z=new on,k=new G,j=new G;Fe.forEach((Y,ue)=>{j.set(Y.x,Y.y+Y.h/2,Y.z),k.set(1,Y.h/9,1),C.compose(j,Z,k),$.setMatrixAt(ue,C),j.set(Y.hx,Y.y+Y.h+.2,Y.hz),k.set(1,1,1),C.compose(j,Z,k),B.setMatrixAt(ue,C)}),$.instanceMatrix.needsUpdate=!0,B.instanceMatrix.needsUpdate=!0,g.add($,B)}return{group:g,update:(U,K)=>{_&&(_.offset.x=-(K*.9%1)),F.emissiveIntensity=2.2+.5*Math.sin(K*5)},dispose:()=>{g.removeFromParent();for(let U of x)U.dispose();for(let U of m)U.dispose();for(let U of d)U.dispose()}}}function R0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ht,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=A0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let g=A0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function A0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new vt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Nf(n,e){if(e===Pm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ca||e===nc){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===ca)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var XE=0;function go(n,e=.5,t=1){if(!n||n.userData.voxel||!(n.isMeshStandardMaterial||n.isMeshLambertMaterial))return n;n.userData.voxel=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t*XE},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"voxel-"+e+"-"+t,n.needsUpdate=!0,n}var qE=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function C0(n,e){n.traverse(t=>{if(!t.isMesh||qE.test(t.name))return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||go(s,e(t),1)})}function P0(n,e,t=46){let i=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(c)*u,f=Math.sin(c)*u,p=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)i.push([h+Math.round(e.range(-3.5,3.5))*g,p+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new $n(.72,0),r=new Kn({color:n.night?2765648:16777215,fog:!1,flatShading:!0,emissive:n.night?329487:new De(16777215).lerp(new De(n.skyHorizon),.35).multiplyScalar(.5)}),o=new En(s,r,i.length),a=new je;return i.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function I0(n,e,t,i,s,r,o,a,l,c){let u=e+s,h=t+r,f=i+o,p,g,x,m,d,b;s?(p=0,g=l?1:-1,x=0,m=0,d=0,b=c?1:-1):r?(p=a?1:-1,g=0,x=0,m=0,d=0,b=c?1:-1):(p=a?1:-1,g=0,x=0,m=0,d=l?1:-1,b=0);let M=n(u+p,h+g,f+x)?1:0,_=n(u+m,h+d,f+b)?1:0,T=n(u+p+m,h+g+d,f+x+b)?1:0;return .5+.1667*(M&&_?0:3-(M+_+T))}function ks(n,e){let t=n.index?n.toNonIndexed():n,i=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,b)=>m+r+(d+r)*1024+(b+r)*1048576,a=new Map,l=(m,d,b,M,_,T)=>{let E=Math.floor(m/e),v=Math.floor(d/e),w=Math.floor(b/e),y=o(E,v,w);a.has(y)||a.set(y,[E,v,w,M,_,T])};for(let m=0;m<i.count;m+=3){let d=i.getX(m),b=i.getY(m),M=i.getZ(m),_=i.getX(m+1),T=i.getY(m+1),E=i.getZ(m+1),v=i.getX(m+2),w=i.getY(m+2),y=i.getZ(m+2),S=.6,R=.6,N=.6;s&&(S=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,R=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,N=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let F=Math.max(Math.hypot(_-d,T-b,E-M),Math.hypot(v-d,w-b,y-M),Math.hypot(v-_,w-T,y-E)),L=Math.max(1,Math.ceil(F/e*2));for(let I=0;I<=L;I++)for(let H=0;H<=L-I;H++){let W=I/L,z=H/L;l(d+(_-d)*W+(v-d)*z,b+(T-b)*W+(w-b)*z,M+(E-M)*W+(y-M)*z,S,R,N)}}let c=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,b=c.get(d);b||c.set(d,b=[]),b.push(m)}for(let m of c.values()){m.sort((d,b)=>d[1]-b[1]);for(let d=0;d<m.length-1;d++)for(let b=m[d][1]+1;b<m[d+1][1];b++)a.set(o(m[d][0],b,m[d][2]),[m[d][0],b,m[d][2],m[d][3],m[d][4],m[d][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],p=[],g=(m,d,b)=>a.has(o(m,d,b));for(let m of a.values()){let[d,b,M,_,T,E]=m,v=Math.sin(d*12.9898+b*78.233+M*37.719)*43758.5453,w=.86+.24*(v-Math.floor(v));for(let[y,S,R,N]of u)if(!a.has(o(d+y,b+S,M+R)))for(let F of[0,1,2,0,2,3]){let L=N[F*3],I=N[F*3+1],H=N[F*3+2],W=w*I0(g,d,b,M,y,S,R,L,I,H);h.push((d+L)*e,(b+I)*e,(M+H)*e),f.push(y,S,R),p.push(_*W,T*W,E*W)}}let x=new ht;return x.setAttribute("position",new rt(h,3)),x.setAttribute("normal",new rt(f,3)),x.setAttribute("color",new rt(p,3)),x.computeBoundingSphere(),x}function Ai(n,e,t,i,s,r=.2){let o=new Array(n*e*t),a=(x,m,d)=>x<0||m<0||d<0||x>=n||m>=e||d>=t?null:o[x+n*(m+e*d)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++)o[d+n*(m+e*x)]=s(d,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],u=[],h=[],f=-n/2,p=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let d=0;d<n;d++){let b=o[d+n*(m+e*x)];if(!b)continue;let M=Math.sin(d*12.9898+m*78.233+x*37.719)*43758.5453,_=1-r/2+r*(M-Math.floor(M));for(let[T,E,v,w]of l)if(!a(d+T,m+E,x+v)&&!(E<0&&m===0))for(let y of[0,1,2,0,2,3]){let S=w[y*3],R=w[y*3+1],N=w[y*3+2],F=_*I0(a,d,m,x,T,E,v,S,R,N);c.push((d+f+S)*i,(m+R)*i,(x+p+N)*i),u.push(T,E,v),h.push(b[0]*F,b[1]*F,b[2]*F)}}let g=new ht;return g.setAttribute("position",new rt(c,3)),g.setAttribute("normal",new rt(u,3)),g.setAttribute("color",new rt(h,3)),g.computeBoundingSphere(),g}function L0(n,e=1,t=null){if(!n||n.userData.wetRoad)return n;n.userData.wetRoad=!0;let i=n.onBeforeCompile;return n.onBeforeCompile=(s,r)=>{i?.call(n,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new je},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),n.needsUpdate=!0,n}function Uf(n,e){let t=1/0,i=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<n.length;f+=4)t=Math.min(t,n[f]),i=Math.max(i,n[f]),s=Math.min(s,n[f+1]),r=Math.max(r,n[f+1]),o=Math.min(o,n[f+2]),a=Math.max(a,n[f+2]);let l=i-t+1,c=r-s+1,u=a-o+1,h=new Map;for(let f=0;f<n.length;f+=4){let p=n[f+3];h.set(n[f]-t+l*(n[f+1]-s+c*(n[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return Ai(l,c,u,e,(f,p,g)=>h.get(f+l*(p+c*g))||null,.12)}function D0(n,e=3.1,t=2.6){if(!n||!n.userData.voxel||n.userData.windows)return n;n.userData.windows=!0;let i=n.onBeforeCompile;n.onBeforeCompile=(r,o)=>{i?.call(n,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=n.customProgramCacheKey?.()||"";return n.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,n.needsUpdate=!0,n}function N0(n){let e={value:0};return n.onBeforeCompile=t=>{t.uniforms.uSeaTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"sea-waves",n.needsUpdate=!0,e}var mn=5,U0=1,Hs=450,Qn=40,O0=12e3,F0=32,B0=4e3,ei=Math.PI*2,ga=new Gt,vo=new De,z0=new je,k0=new je,YE=new G(0,1,0),H0=n=>n<0?0:n>1?1:n,zi=(n,e,t)=>n<e?e:n>t?t:n,fr=(n,e,t)=>{let i=H0((t-n)/(e-n));return i*i*(3-2*i)};function $E(n){let e=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),u=l*l*(3-2*l),h=e(r,o),f=e(r+1,o),p=e(r,o+1),g=e(r+1,o+1);return h+(f-h)*c+(p-h)*u+(h-f-p+g)*c*u};return(i,s)=>(t(i,s)*.5+t(i*2+17.3,s*2-9.1)*.25+t(i*4-3.7,s*4+11.2)*.125)/.875}var xo=n=>{let e=new De(n);return[e.r,e.g,e.b]},Vs={sand:xo(14271631),dry:xo(7317050),garrigue:xo(5212718),rock:xo(12169890),pale:xo(13617336),snow:xo(15855076)},ZE=[16513264,15853260,14725754,16052195],KE=[9075302,7236192,11047018,8023646],jE=[3407871,16727250,16757051],Sc=0,Ec=0,wc=0,xa=(n,e)=>{Sc+=(n[0]-Sc)*e,Ec+=(n[1]-Ec)*e,wc+=(n[2]-wc)*e};function JE(n,e,t,i,s,r){Sc=Vs.sand[0],Ec=Vs.sand[1],wc=Vs.sand[2],xa(Vs.dry,fr(2.5,7,n)),xa(Vs.garrigue,fr(25,75,n)*.55),xa(Vs.rock,fr(.4,.65,e)),xa(Vs.pale,fr(95,120,n)*.8),xa(Vs.snow,fr(125,150,n));let o=Sc*t,a=Ec*t,l=wc*t;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function hi(n,e){let t=n.index?n.toNonIndexed():n;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let i=t.attributes.position.count,s=new Float32Array(i*3);vo.setHex(e);for(let r=0;r<i;r++)s[r*3]=vo.r,s[r*3+1]=vo.g,s[r*3+2]=vo.b;return t.setAttribute("color",new vt(s,3)),t}var va=n=>R0(n,!1);function QE(n,e,t){let i=Math.sin(n*12.9898+e*78.233+t*37.719)*43758.5453;return i-Math.floor(i)}function ew(){let n=new $n(1,0),e=n.attributes.position;for(let t=0;t<e.count;t++){let i=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*QE(i,s,r);e.setXYZ(t,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function tw(){return va([hi(new Jt(.35,.5,6,6).translate(0,3,0),7162931),hi(new $n(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function nw(){return va([hi(new Jt(.25,.35,1.2,5).translate(0,.6,0),7162931),hi(new Yn(1.1,10,6).translate(0,6,0),3037756)])}function iw(){let n=[hi(new Jt(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Yn(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*ei/7);n.push(hi(t,5214010))}return va(n)}function sw(){return va([hi(new Jt(1.6,2.3,13,8).translate(0,6.5,0),16052712),hi(new Jt(2,2,2.2,8).translate(0,6.5,0),12727595),hi(new Jt(1.3,1.3,1.8,8).translate(0,14,0),16771488),hi(new Yn(1.7,1.2,8).translate(0,15.4,0),3812906)])}function rw(){return va([hi(new fn(2.2,.9,6).translate(0,.45,0),15986662),hi(new Yn(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function Ri(n,e,t,i=!0){let s=new En(n,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];ga.position.set(o.x,o.y,o.z),ga.rotation.set(0,o.ry??0,0),ga.scale.set(o.sx??1,o.sy??1,o.sz??1),ga.updateMatrix(),s.setMatrixAt(r,ga.matrix),o.col!==void 0&&(vo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,vo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var ow=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,aw=`
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
}`;function V0(n,e,t,i){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=$E(i.int(1,1073741808)),c=o.minX-Hs-Qn,u=o.minZ-Hs-Qn,h=Math.ceil((o.maxX-o.minX+2*Hs)/Qn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Hs)/Qn)+3,p=Array.from({length:h*f},()=>[]);for(let ae=0;ae<r;ae++){let te=zi(Math.floor((s[ae].x-c)/Qn),0,h-1),de=zi(Math.floor((s[ae].z-u)/Qn),0,f-1);p[de*h+te].push(ae)}let g=0;function x(ae,te){let de=Math.floor((ae-c)/Qn),Me=Math.floor((te-u)/Qn),Ce=Math.max(h,f),ge=1/0,He=0;for(let Ve=0;Ve<=Ce;Ve++){for(let Je=Me-Ve;Je<=Me+Ve;Je++){if(Je<0||Je>=f)continue;let gt=Je===Me-Ve||Je===Me+Ve?1:2*Ve;for(let _t=de-Ve;_t<=de+Ve;_t+=gt){if(_t<0||_t>=h)continue;let Nt=p[Je*h+_t];for(let Rt=0;Rt<Nt.length;Rt++){let vn=Nt[Rt],D=s[vn],re=D.x-ae,ve=D.z-te,ye=re*re+ve*ve;ye<ge&&(ge=ye,He=vn)}}}let qe=Ve*Qn;if(ge<=qe*qe)break}return g=Math.sqrt(ge),He}function m(ae,te,de){let Me=de*de,Ce=1/0,ge=zi(Math.floor((ae-de-c)/Qn),0,h-1),He=zi(Math.floor((ae+de-c)/Qn),0,h-1),Ve=zi(Math.floor((te-de-u)/Qn),0,f-1),qe=zi(Math.floor((te+de-u)/Qn),0,f-1);for(let Je=Ve;Je<=qe;Je++)for(let ut=ge;ut<=He;ut++){let gt=p[Je*h+ut];for(let _t=0;_t<gt.length;_t++){let Nt=s[gt[_t]],Rt=Nt.x-ae,vn=Nt.z-te;Rt*Rt+vn*vn<=Me&&Nt.y<Ce&&(Ce=Nt.y)}}return Ce}let d=Math.ceil(r/4),b=new Float64Array(d*2);for(let ae=0;ae<d;ae++)b[2*ae]=s[ae*4%r].x,b[2*ae+1]=s[ae*4%r].z;function M(ae,te){let de=!1;for(let Me=0,Ce=d-1;Me<d;Ce=Me++){let ge=b[2*Me],He=b[2*Me+1],Ve=b[2*Ce],qe=b[2*Ce+1];He>te!=qe>te&&ae<(Ve-ge)*(te-He)/(qe-He)+ge&&(de=!de)}return de}let _=o.minX-Hs,T=o.minZ-Hs,E=Math.ceil((o.maxX-o.minX+2*Hs)/mn)+1,v=Math.ceil((o.maxZ-o.minZ+2*Hs)/mn)+1,w=new Float32Array(E*v);for(let ae=0;ae<v;ae++)for(let te=0;te<E;te++){let de=_+te*mn,Me=T+ae*mn,Ce=x(de,Me),ge=g,He=s[Ce],Ve=He.width*.5,qe=He.y;if(ge<40){let re=m(de,Me,24);re<qe&&(qe=re)}let Je=1;if(!M(de,Me)){let re=ge-Ve+(l(de/140+31.7,Me/140-8.2)-.5)*70;Je=1-fr(110,200,re)}let ut=l(de/260,Me/260),_t=-15+(10+130*Math.pow(H0((ut-.42)/.5),1.5)+6*ut+15)*Je;if(Je>=1){let re=l(de/90+11.3,Me/90-4.1);_t=Math.max(_t,qe+6+38*re)}let Nt=fr(Ve+6+12,Ve+6+62,ge),Rt=qe-.6,vn=Rt+(_t-Rt)*Nt,D=qe+Math.max(0,ge-Ve-6-12)*1.2;vn>D&&(vn=D),w[ae*E+te]=vn}let y=null;function S(ae,te){if(y)return y(ae,te);let de=(ae-_)/mn,Me=(te-T)/mn;de=zi(de,0,E-1.000001),Me=zi(Me,0,v-1.000001);let Ce=Math.floor(de),ge=Math.floor(Me),He=de-Ce,Ve=Me-ge,qe=w[ge*E+Ce],Je=w[ge*E+Ce+1],ut=w[(ge+1)*E+Ce],gt=w[(ge+1)*E+Ce+1],_t=qe+(Je-qe)*He,Nt=ut+(gt-ut)*He;return _t+(Nt-_t)*Ve}let R=(ae,te)=>Math.max(Math.abs(S(ae+4,te)-S(ae-4,te)),Math.abs(S(ae,te+4)-S(ae,te-4)))/8,N=(ae,te,de)=>{let Me=x(ae,te);return g>=s[Me].width*.5+6+4+de},F=[],L=[],I=new Float32Array(9),H=(ae,te,de,Me,Ce,ge,He,Ve,qe)=>{let Je=Me-ae,ut=Ce-te,gt=ge-de,_t=He-ae,Nt=Ve-te,Rt=qe-de,vn=ut*Rt-gt*Nt,D=gt*_t-Je*Rt,re=Je*Nt-ut*_t,ve=Math.hypot(vn,D,re)||1,ye=1-Math.abs(D)/ve;F.push(ae,te,de,Me,Ce,ge,He,Ve,qe),JE((te+Ce+Ve)/3,ye,.9+.2*i.next(),a,I,0);for(let ce=0;ce<9;ce++)L.push(I[ce])},W=E-1,z=v-1,O=new Float32Array(W*z);for(let ae=0;ae<z;ae++)for(let te=0;te<W;te++){let de=ae*E+te,Me=(w[de]+w[de+1]+w[de+E]+w[de+E+1])/4;O[ae*W+te]=Math.floor(Me/U0)*U0}let V=-4;for(let ae=0;ae<z;ae++)for(let te=0;te<W;te++){let de=O[ae*W+te],Me=_+te*mn,Ce=T+ae*mn,ge=Me+mn,He=Ce+mn;if(de>V&&(H(Me,de,Ce,Me,de,He,ge,de,Ce),H(ge,de,Ce,Me,de,He,ge,de,He)),te+1<W){let Ve=O[ae*W+te+1],qe=Math.min(de,Ve),Je=Math.max(de,Ve);Je>qe&&Je>V&&(H(ge,qe,Ce,ge,Je,Ce,ge,Je,He),H(ge,qe,Ce,ge,Je,He,ge,qe,He))}if(ae+1<z){let Ve=O[(ae+1)*W+te],qe=Math.min(de,Ve),Je=Math.max(de,Ve);Je>qe&&Je>V&&(H(Me,qe,He,Me,Je,He,ge,Je,He),H(Me,qe,He,ge,Je,He,ge,qe,He))}}y=(ae,te)=>{let de=zi(Math.floor((ae-_)/mn),0,W-1),Me=zi(Math.floor((te-T)/mn),0,z-1);return O[Me*W+de]};let q=new ht;q.setAttribute("position",new rt(F,3)),q.setAttribute("color",new rt(L,3)),q.computeVertexNormals(),q.computeBoundingSphere();let se=new et(q,new ot({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Dt}));se.receiveShadow=!0;let me=new lt;me.name="environment",me.add(se);let ie=(o.minX+o.maxX)/2,J=(o.minZ+o.maxZ)/2,Q=new kn(O0,O0,F0,F0);Q.rotateX(-Math.PI/2);let oe=Q.attributes.position,he=oe.count,_e=new Float32Array(he),Se=new Float32Array(he);for(let ae=0;ae<he;ae++)_e[ae]=oe.getX(ae),Se[ae]=oe.getZ(ae);let Ie=new et(Q,new ot({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));Ie.position.set(ie,0,J),me.add(Ie);let ne=new G(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ee=new lt,X=new Mt({uniforms:{topColor:{value:new De(t.skyTop)},horizonColor:{value:new De(t.skyHorizon)},sunColor:{value:new De(t.sunColor)},sunDir:{value:ne},night:{value:a?1:0}},vertexShader:ow,fragmentShader:aw,side:nn,depthWrite:!1,fog:!1}),We=new et(new Ls(B0,32,16),X);if(We.renderOrder=-10,We.frustumCulled=!1,Ee.add(We),a){let te=new Float32Array(1500);for(let Ce=0;Ce<500;Ce++){let ge=i.range(0,ei),He=Math.asin(i.range(.05,.98)),Ve=B0*.97;te[Ce*3]=Ve*Math.cos(He)*Math.cos(ge),te[Ce*3+1]=Ve*Math.sin(He),te[Ce*3+2]=Ve*Math.cos(He)*Math.sin(ge)}let de=new ht;de.setAttribute("position",new vt(te,3));let Me=new Is(de,new cr({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));Me.frustumCulled=!1,Ee.add(Me)}me.add(Ee);let we=new co(t.hemiSky,t.hemiGround,t.hemiIntensity),Le=new Ui(t.sunColor,t.sunIntensity);Le.castShadow=!0,Le.shadow.mapSize.set(2048,2048);let Pe=Le.shadow.camera;Pe.left=-90,Pe.right=90,Pe.top=90,Pe.bottom=-90,Pe.near=1,Pe.far=600,Pe.updateProjectionMatrix(),Le.shadow.bias=-5e-4,me.add(we,Le,Le.target);let Ne=n.fog,pe=n.background,P=new so(t.fogColor,t.fogDensity),A=new De(t.skyHorizon);n.fog=P,n.background=A;let ee=_+(E-1)*mn,le=T+(v-1)*mn,xe=()=>i.range(_+30,ee-30),fe=()=>i.range(T+30,le-30),Be=(ae,te,de)=>{let Me=[];for(let Ce=0;Ce<te&&Me.length<ae;Ce++){let ge=de(xe(),fe());ge&&Me.push(ge)}return Me},Re=Be(320,4e4,(ae,te)=>{let de=S(ae,te);if(de<4||de>95||!N(ae,te,2)||R(ae,te)>.6)return null;let Me=i.range(.8,1.45);return{x:ae,y:de-.3,z:te,sx:Me,sy:Me*i.range(.9,1.3),sz:Me,ry:i.range(0,ei),col:16777215,v:i.range(.85,1.15)}}),Ue=Be(170,4e4,(ae,te)=>{let de=S(ae,te);if(de<6||de>70||!N(ae,te,1.5)||R(ae,te)>.6)return null;let Me=i.range(.8,1.3);return{x:ae,y:de-.3,z:te,sx:Me,sy:Me*i.range(.9,1.25),sz:Me,ry:i.range(0,ei),col:16777215,v:i.range(.85,1.15)}}),Xe=Be(110,4e4,(ae,te)=>{let de=S(ae,te);if(de<1.8||de>14||!N(ae,te,2)||R(ae,te)>.5)return null;let Me=i.range(.85,1.25);return{x:ae,y:de-.3,z:te,sx:Me,sy:Me,sz:Me,ry:i.range(0,ei),col:16777215,v:i.range(.9,1.1)}});me.add(Ri(ks(tw(),.8),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Re)),me.add(Ri(ks(nw(),.7),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Ue)),me.add(Ri(ks(iw(),.6),new ot({vertexColors:!0,flatShading:!0,roughness:.9}),Xe));let be=Be(300,3e4,(ae,te)=>{let de=S(ae,te);if(de<1.5)return null;let Me=i.range(1.2,4.5);return N(ae,te,Me*.6)?{x:ae,y:de+Me*.15,z:te,sx:Me,sy:Me*i.range(.55,.9),sz:Me,ry:i.range(0,ei),col:i.pick(KE),v:i.range(.85,1.15)}:null}),Fe=Be(3,3e4,(ae,te)=>{if(S(ae,te)>-4)return null;let de=x(ae,te);if(g<s[de].width*.5+200||g>800)return null;let Me=i.range(25,45);return{x:ae,y:.1*Me,z:te,sx:Me,sy:Me*.45,sz:Me,ry:i.range(0,ei),col:10260344,v:1}});me.add(Ri(ks(ew(),.42),new ot({color:16777215,flatShading:!0,roughness:.95}),be.concat(Fe)));let $e=[],Qe=[],U=[],K=i.int(3,5),$=0;for(let ae=0;ae<4e3&&$<K;ae++){let te=xe(),de=fe(),Me=x(te,de),Ce=s[Me].width*.5;if(g<Ce+25||g>Ce+80)continue;let ge=S(te,de);if(ge<6||ge>40||R(te,de)>.35)continue;$++;let He=i.int(7,12);for(let Ve=0;Ve<He;Ve++){let qe=i.range(0,ei),Je=Math.sqrt(i.next())*18,ut=te+Math.cos(qe)*Je,gt=de+Math.sin(qe)*Je,_t=x(ut,gt);if(g<s[_t].width*.5+6+4+4)continue;let Nt=S(ut,gt);if(Nt<3)continue;let Rt=i.range(4,6.5),vn=i.range(3.5,6),D=i.range(4,6.5),re=i.pick([0,Math.PI/2])+i.range(-.15,.15),ve=Nt-1;if($e.push({x:ut,y:ve,z:gt,ry:re,sx:Rt,sy:vn,sz:D,col:i.pick(ZE),v:1}),Qe.push({x:ut,y:ve+vn,z:gt,ry:re,sx:Rt*1.08,sy:i.range(1.8,2.6),sz:D*1.08}),a)for(let ye of[-1,1]){let ce=ye*Rt*.28,Ge=D/2+.03;U.push({x:ut+ce*Math.cos(re)+Ge*Math.sin(re),y:ve+vn*.55,z:gt-ce*Math.sin(re)+Ge*Math.cos(re),ry:re})}}}let B=new ot({color:16777215,flatShading:!0,roughness:.85}),C=new ot({color:11818298,flatShading:!0,roughness:.8});if($e.length){let ae=new fn(1,1,1).translate(0,.5,0),te=ks(new Jt(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);me.add(Ri(ae,B,$e),Ri(te,C,Qe))}if(a&&U.length){let ae=new fn(1.2,1.1,.12);me.add(Ri(ae,new zt({color:16761466}),U,!1))}if(a){let ae=0,te=0,de=!1;for(let Me=0;Me<4e3&&!de;Me++){let Ce=xe(),ge=fe(),He=x(Ce,ge),Ve=s[He].width*.5;if(g<Ve+220||g>Ve+420)continue;let qe=S(Ce,ge);qe<6||qe>30||(ae=Ce,te=ge,de=!0)}if(de){let Me=[],Ce=[],ge=i.int(9,13);for(let He=0;He<ge;He++){let Ve=ae+i.range(-110,110),qe=te+i.range(-110,110),Je=S(Ve,qe);if(Je<2)continue;let ut=i.range(6,10),gt=i.range(30,70);Me.push({x:Ve,y:Je,z:qe,sx:ut,sy:gt,sz:ut,col:1777720,v:i.range(.8,1.2)});let _t=i.pick(jE);for(let Nt=0;Nt<3;Nt++){let Rt=Nt*ei/3+i.range(0,.5);Ce.push({x:Ve+Math.cos(Rt)*ut*.88,y:Je+gt*.05,z:qe+Math.sin(Rt)*ut*.88,ry:-Rt,sy:gt*.9,col:_t,v:1})}}me.add(Ri(new Jt(.72,1,1,6).translate(0,.5,0),new ot({color:16777215,flatShading:!0,roughness:.7}),Me),Ri(new fn(.5,1,.25).translate(0,.5,0),new zt({color:16777215}),Ce,!1))}}{let ae=[],te=[];for(let Me=1;Me<v-1;Me++)for(let Ce=1;Ce<E-1;Ce++){let ge=Me*E+Ce,He=w[ge];if(He<2||He>30)continue;let Ve=x(_+Ce*mn,T+Me*mn);if(g<s[Ve].width*.5+60)continue;(w[ge-1]<0||w[ge+1]<0||w[ge-E]<0||w[ge+E]<0?ae:te).push(ge)}let de=ae.length?ae:te;if(de.length){let Me=i.pick(de),Ce=Me%E,ge=(Me-Ce)/E,He=new et(ks(sw(),.6),new ot({vertexColors:!0,flatShading:!0,roughness:.6}));He.position.set(_+Ce*mn,w[Me]-.5,T+ge*mn),He.castShadow=!0,me.add(He)}}let Z=Be(4,2e4,(ae,te)=>{if(S(ae,te)>-3)return null;let de=x(ae,te);return g<s[de].width*.5+250||g>900?null:{x:ae,y:-.2,z:te,ry:i.range(0,ei),col:16777215,v:1}});Z.length&&me.add(Ri(ks(rw(),.5),new ot({vertexColors:!0,flatShading:!0,roughness:.6}),Z));let k=[],j=[];for(let ae=0;ae<2e4&&k.length<3;ae++){let te=xe(),de=fe(),Me=x(te,de);if(g<s[Me].width*.5+60)continue;let Ce=S(te,de);Ce<55||k.some(ge=>Math.hypot(ge.x-te,ge.z-de)<200)||k.push({x:te,y:Ce,z:de,ry:i.range(0,ei),speed:i.range(.9,1.5),phase:i.range(0,ei)})}let Y=new fn(.7,14,.22).translate(0,7,0),ue=new ot({color:15659507,flatShading:!0,roughness:.6}),Te=null;if(k.length){me.add(Ri(new Jt(.8,.35,30,6).translate(0,15,0),ue,k));for(let ae of k)j.push(new je().compose(new G(ae.x,ae.y+30,ae.z),new on().setFromAxisAngle(YE,ae.ry),new G(1,1,1)));Te=new En(Y,ue,k.length*3),Te.castShadow=!0,me.add(Te)}function ze(ae){if(Te){for(let te=0;te<k.length;te++){let de=ae*k[te].speed+k[te].phase;for(let Me=0;Me<3;Me++)k0.makeRotationZ(de+Me*ei/3),z0.multiplyMatrices(j[te],k0),Te.setMatrixAt(te*3+Me,z0)}Te.instanceMatrix.needsUpdate=!0}}ze(0);function Oe(ae,te,de){Le.position.set(de.x+ne.x*200,de.y+ne.y*200,de.z+ne.z*200),Le.target.position.set(de.x,de.y,de.z),Ee.position.set(de.x,0,de.z);for(let Me=0;Me<he;Me++)oe.setY(Me,.35*Math.sin(_e[Me]*.02+te*.8)+.25*Math.cos(Se[Me]*.017-te*.6));oe.needsUpdate=!0,ze(te)}function Ae(){n.remove(me),me.traverse(ae=>{if(ae.geometry&&ae.geometry.dispose(),ae.material){let te=Array.isArray(ae.material)?ae.material:[ae.material];for(let de of te)de.dispose()}}),Le.shadow.map&&Le.shadow.map.dispose(),me.clear(),n.fog===P&&(n.fog=Ne??null),n.background===A&&(n.background=pe??null)}return n.add(me),{group:me,sun:Le,update:Oe,dispose:Ae,heightAt:S}}var Ac=[.62,.6,.55],Gs=[.5,.49,.45],Ff=[.72,.3,.18],W0=[.6,.24,.15],Bf=[.16,.2,.28],lw=[.2,.38,.3],X0=[.36,.25,.16],yo=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],pr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],yn=(n,e,t)=>{let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function Tc(n,e,t,i){let s=i*3+1,r=Math.ceil(t/2);return Ai(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,u=l-1;if(a<s){if(c<0||u<0||c>=e||u>=t)return null;if(!(c===0||u===0||c===e-1||u===t-1))return a===s-1?n:null;let p=c===0||c===e-1?u:c,g=c===0||c===e-1?t:e;return a%3===2&&p%3===1&&p<g-1?Bf:a%3===2&&p%3===2&&p<g-1&&yn(c,a,u)>.45?lw:a===0?Gs:n}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(c+h)%2?Ff:W0:null},.14)}function cw(n){return Ai(7,23,7,1,(i,s,r)=>{let o=i-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?Bf:s===0?Gs:n:s===16?n:null;let l=s-17;return i>=l&&i<=6-l&&r>=l&&r<=6-l?(i+r)%2?Ff:W0:null},.14)}function uw(n){let r=[];for(let o=0;o<6;o++)r.push([11+(yn(n,o,1)-.5)*9,13+yn(n,o,2)*6,11+(yn(n,o,3)-.5)*9,3.6+yn(n,o,4)*2.4]);return Ai(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return X0;for(let c of r){let u=o-c[0],h=(a-c[1])*1.25,f=l-c[2];if(u*u+h*h+f*f<c[3]*c[3])return yo[Math.floor(yn(o,a,l)*yo.length)]}return null},.22)}function hw(){return Ai(14,16,8,.5,(n,e,t)=>{let s=5+Math.floor((n-1)/2)*1.6;return n===0?e<5?(e+t)%3?Ac:Gs:null:n>=1&&n<13&&e<s?e>=s-1?[.42,.42,.44]:Gs:n===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function Of(n,e){let r=e-3-9;return Ai(n,e+2,5,1,(o,a,l)=>{let c=o%22,u=a>=e&&(l===0||l===4);if(a>=e)return u?Gs:null;if(a>=e-2)return(o+a+l)%3?Ac:Gs;if(c<4)return(o+a+l)%4?Ac:Gs;if(a<r)return null;let h=c-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+l)%3?Ac:Gs:null},.14)}function fw(n){return Ai(6,4,6,.5,(t,i,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(i-.8)*1.5,l=2.5+(yn(t+n,i,s)-.5)*1.2;return r*r+a*a+o*o<l*l?yo[Math.floor(yn(t,i+n,s)*yo.length)]:null},.22)}function dw(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Ai(6,20,6,.6,(i,s,r)=>{let o=i-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?X0:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(yn(i,s,r)*3)]:null},.2)}function G0(n){let r=(a,l)=>{let c=(a-15+.5)/15,u=(l-15+.5)/(30/2),h=Math.hypot(c,u)+(yn(Math.floor(a/3)+n,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),p=14+Math.floor(yn(Math.floor(a/5),n,Math.floor(l/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(yn(n,a,1)-.5)*14),c=Math.floor(15+(yn(n,a,2)-.5)*14);o.push([l,c,r(l,c),pr[Math.floor(yn(n,a,3)*pr.length)],a===0?7:3])}return Ai(30,26,30,1.6,(a,l,c)=>{let u=r(a,c);for(let[p,g,x,m,d]of o){let b=Math.abs(a-p),M=Math.abs(c-g),_=d>3?1:2;if(b<=_&&M<=1&&l>=x&&l<x+d)return l===x+d-2&&b!==_&&M===1?Bf:m;if(b<=_&&M<=1-(l-x-d)&&l>=x+d&&l<x+d+2)return Ff}if(l>=u)return null;if(l===u-1)return yn(a,5,c)>.75?yo[0]:[.36,.56,.2];let h=l%5===0?.86:1,f=.93+.14*yn(Math.floor(a/2),l,Math.floor(c/2));return yn(a,l,c)>.965?yo[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function dr(n,e,t){let i=new En(n,e,t.length),s=new je,r=new on,o=new G,a=new G,l=new G(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i}function pw(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=1024,n.height=192;let e=n.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let i of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(i+s*72,192),e.lineTo(i+s*72+36,192),e.lineTo(i+s*72+108,0),e.lineTo(i+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new ai(n);return t.colorSpace=Ot,t.anisotropy=8,t}function q0(n,e,t,i){let s=new lt;s.name="scenery";let r=[],o=()=>{let L=new ot({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,I)=>{I.length&&(r.push(L),s.add(dr(L,o(),I)))},l={x:0,y:0,z:0,heading:0},c=n.length,u=L=>!!Bs(n,(L%c+c)%c,"tunnel"),h=L=>n.pts[Math.floor((L%c+c)%c/n.step)%n.pts.length].width,f=(L,I)=>{let H=1/0;for(let W=0;W<n.pts.length;W+=3){let z=n.pts[W],O=(z.x-L)*(z.x-L)+(z.z-I)*(z.z-I);O<H&&(H=O)}return Math.sqrt(H)},p=(L,I)=>{let H=Math.floor(L/n.step);for(let W=0;W<I/n.step;W+=4)if(Math.abs(n.pts[(H+W)%n.pts.length].curv)>.004)return!1;return!u(L)&&!u(L+I/2)&&!u(L+I)},g=[[24,22,-1]];for(let L=380;L<c-220&&g.length<4;L+=70)p(L-10,80)&&(g.push([L,14,t.sign()]),L+=420);let x=[],m=[],d=[],b=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],M=L=>g.some(([I,H])=>L>I-12&&L<I+H*4+12);for(let[L,I,H]of g)for(let W=0;W<I;W++){let z=L+W*4,O=H*(h(z)/2+6+.6);At(n,z,O,l);let V=l.heading+H*Math.PI/2,q=Math.sin(l.heading),se=Math.cos(l.heading),me=-H*se,ie=H*q;x.push({x:l.x+me*3.5,y:l.y-.3,z:l.z+ie*3.5,ry:V});for(let J=0;J<6;J++)for(let Q=0;Q<4;Q++){if(t.next()<.18)continue;let oe=-1.6+Q*1.05+t.range(-.15,.15),he=1+J*1,_e=l.x+me*he+q*oe,Se=l.z+ie*he+se*oe,Ie=l.y-.3+2.5+J*.8,ne=new De(t.pick(b));m.push({x:_e,y:Ie+.4,z:Se,ry:l.heading,sx:.5,sy:.8,sz:.36,color:ne}),d.push({x:_e,y:Ie+1,z:Se,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new De(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:_e-me*.12,y:Ie-.1,z:Se-ie*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new De(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:_e,y:Ie+1.22,z:Se,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new De(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:_e+q*.32,y:Ie+1.05,z:Se+se*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:ne})}}if(a(hw(),x),m.length){let L=new fn(1,1,1);r.push(L);let I=new ot({roughness:.85});r.push(I),s.add(dr(L,I,m),dr(L,I,d));let H=x.map(W=>({x:W.x,y:W.y+8.2,z:W.z,ry:W.ry,sx:8,sy:.4,sz:4.05,color:new De(2303534)}));s.add(dr(L,I,H))}let _=pw(),T=new ot({map:_,color:_?16777215:15921128,roughness:.7,side:Dt});r.push(T),_&&r.push(_);let E=new kn(1,1);r.push(E);let v=[],w=(L,I)=>{if(u(L))return;let H=I*(h(L)/2+6-.22);At(n,L,H,l),v.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(I<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<c-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(v.length){let L=dr(E,T,v);L.castShadow=!1,s.add(L)}let y=[[],[],[]];for(let L=130;L<c-20;L+=t.range(13,28)){if(M(L)||u(L)||u(L+12)||u(L-12))continue;let H=(t.next()<.82?-1:1)*(h(L)/2+6+t.range(3.4,6.5));At(n,L,H,l);let W=i?i(l.x,l.z):l.y;W<1.5||y[t.int(0,2)].push({x:l.x,y:W-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(y.forEach((L,I)=>a(uw(11+I*7),L)),i){let L=[];for(let O=200;O<c-100;O+=45)for(let V of[-1,1]){let q=V*t.range(70,150);At(n,O,q,l);let se=i(l.x,l.z);se>l.y+6&&se>6&&f(l.x,l.z)>55&&L.push({x:l.x,z:l.z,y:se,score:se-l.y+t.range(0,4)})}L.sort((O,V)=>V.score-O.score);let I=[];for(let O of L){if(I.length>=4)break;I.every(V=>Math.hypot(V.x-O.x,V.z-O.z)>220)&&I.push(O)}let H=[{geo:Tc(pr[0],8,7,2),items:[]},{geo:Tc(pr[1],10,7,3),items:[]},{geo:Tc(pr[2],7,6,2),items:[]},{geo:Tc(pr[3],9,8,3),items:[]}],W=[],z=[];for(let O of I){for(let V=0;V<2;V++){let q=O.x+t.range(-12,12),se=O.z+t.range(-12,12);f(q,se)<45||(W.push({x:q,y:i(q,se)-.5,z:se,ry:t.int(0,3)*Math.PI/2}),z.push([q,se]))}for(let V=0;V<60&&H.reduce((q,se)=>q+se.items.length,0)<I.length*22;V++){let q=t.range(0,6.28),se=t.range(8,60),me=O.x+Math.cos(q)*se,ie=O.z+Math.sin(q)*se,J=i(me,ie);J<3||f(me,ie)<42||z.some(Q=>Math.hypot(Q[0]-me,Q[1]-ie)<12)||(z.push([me,ie]),t.pick(H).items.push({x:me,y:J-.5,z:ie,ry:t.int(0,3)*Math.PI/2}))}}for(let O of H)a(O.geo,O.items);a(cw(pr[2]),W)}let S=[[],[]];for(let L=115;L<c-10;L+=t.range(4.5,9))if(!u(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let I of[-1,1]){if(t.next()<.35)continue;let H=I*(h(L)/2+6+t.range(1.4,2.6));At(n,L,H,l),S[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}S.forEach((L,I)=>a(fw(3+I*5),L));let R=[];for(let L=160;L<c-60;L+=t.range(120,220)){let I=t.sign(),H=t.int(5,9);for(let W=0;W<H;W++){let z=L+W*4.2;if(u(z))continue;At(n,z,I*(h(z)/2+6+4.2),l);let O=i?i(l.x,l.z):l.y;O<1.5||R.push({x:l.x,y:O-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(dw(),R),i){let L=[[],[],[]],I=[];for(let H=150;H<c-50;H+=t.range(120,220))for(let W of[-1,1]){if(t.next()<.3)continue;At(n,H,W*t.range(72,125),l);let z=i(l.x,l.z);z<1||f(l.x,l.z)<56||I.some(O=>Math.hypot(O[0]-l.x,O[1]-l.z)<70)||(I.push([l.x,l.z]),L[t.int(0,2)].push({x:l.x,y:z-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((H,W)=>a(G0(17+W*13),H))}{let L=[],I=[],H=new De(12172998),W=new De(7172730);for(let z=0;z<c;z+=4){if(u(z)||M(z))continue;let O=h(z)/2+6-.75;At(n,z,O,l);let V=l.x,q=l.y,se=l.z,me=l.heading;L.push({x:V,y:q+.4,z:se,ry:me,sx:.12,sy:.8,sz:.12,color:W}),At(n,z+4,h(z+4)/2+6-.75,l);let ie=(V+l.x)/2,J=(q+l.y)/2,Q=(se+l.z)/2,oe=Math.hypot(l.x-V,l.z-se)+.05,he=Math.atan2(l.x-V,l.z-se);for(let _e of[.42,.72])I.push({x:ie,y:J+_e,z:Q,ry:he,sx:.07,sy:.2,sz:oe,color:H})}if(L.length){let z=new fn(1,1,1),O=new ot({roughness:.35,metalness:.85});r.push(z,O),s.add(dr(z,O,L),dr(z,O,I))}}if(i){let L=[];for(let z=0;z<400&&L.length<16;z++){let O=t.range(n.bounds.minX-420,n.bounds.maxX+420),V=t.range(n.bounds.minZ-420,n.bounds.maxZ+420),q=f(O,V);i(O,V)>-3||q<90||q>520||L.some(se=>Math.hypot(se.x-O,se.z-V)<60)||L.push({x:O,y:-.3,z:V,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let I=[.93,.93,.9],H=[.98,.97,.93],W=[.55,.36,.2];a(Ai(5,18,14,.7,(z,O,V)=>{let q=Math.abs(V-6.5),se=Math.abs(z-2);return O<2?se<=2-(O===0?1:0)-(q>5?1:0)&&q<7-(O===0?1:0)?O===1&&se<2?W:I:null:z===2&&V===7?[.3,.26,.22]:z===2&&V>7&&V<13&&O<17-(V-7)*2.6||z===2&&V<7&&V>1&&O<14-(7-V)*2.4?H:null},.06),L)}{At(n,0,0,l);let L=l.x,I=l.y,H=l.z,W=l.heading,z=Math.sin(W),O=Math.cos(W),V=-O,q=z,se=(ie,J,Q)=>f(ie,J)>Q,me=!1;for(let ie of[430,500,380,580,660]){for(let J of[70,130,0,-70,190,-140]){if(me)break;let Q=L+z*ie+V*J,oe=H+O*ie+q*J;if(!se(Q,oe,85))continue;let he=i?Math.max(-2,i(Q,oe)):I;a(G0(101),[{x:Q,y:he-3,z:oe,ry:W+.6,s:2.3}]);let _e=Q-z*95-V*30,Se=oe-O*95-q*30;if(se(_e,Se,45)&&se(_e+V*90,Se+q*90,40)&&se(_e-V*90,Se-q*90,40)){let Ie=i?Math.max(-1,i(_e,Se)):I;a(Of(198,24),[{x:_e,y:Math.min(Ie,I)-5,z:Se,ry:W}])}me=!0}if(me)break}}for(let L of[1,-1]){let I=!0;for(let W of[210,270,330,390])At(n,W,L*62,l),f(l.x,l.z)<46&&(I=!1);if(!I||L<0)continue;At(n,300,L*62,l);let H=i?i(l.x,l.z):l.y;a(Of(198,22),[{x:l.x,y:H-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let N=-1,F=-1/0;for(let L=300;L<c-300;L+=40){let I=Math.floor(L/n.step),H=0;for(let z=0;z<60;z+=6)H+=Math.abs(n.pts[(I+z)%n.pts.length].curv);let W=-H*400+t.range(0,1)-(u(L)||u(L+100)?100:0);W>F&&(F=W,N=L)}if(N>0)for(let L of[1,-1]){At(n,N+90,L*95,l);let I=i?i(l.x,l.z):l.y;if(I<2)continue;a(Of(198,20),[{x:l.x,y:Math.min(I,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function mw(n,e){let t=n.length,i=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=n[a],o++;i[r]=s/o}return i}function Y0(n){let e=n.x.length,t=n.step,i=n.x,s=n.y,r=n.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let v=0;v<e;v++){let w=Math.max(0,v-1),y=Math.min(e-1,v+1),S=i[y]-i[w],R=r[y]-r[w],N=Math.hypot(S,R)||1e-9;o[v]=S/N,a[v]=R/N,l[v]=(s[y]-s[w])/N}let c=new Float64Array(e);for(let v=1;v<e-1;v++){let w=-a[v],y=o[v];c[v]=((o[v+1]-o[v-1])*w+(a[v+1]-a[v-1])*y)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let u=mw(c,12),h=new Float64Array(e);for(let v=0;v<e;v++)h[v]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[v]))));for(let v=e-2;v>=0;v--)h[v]=Math.min(h[v],Math.sqrt(h[v+1]**2+80*t));for(let v=1;v<e;v++)h[v]=Math.min(h[v],Math.sqrt(h[v-1]**2+40*t));let f=new Array(e),p=1/0,g=-1/0,x=1/0,m=-1/0,d=1/0,b=0;for(let v=0;v<e;v++){let w=Math.hypot(1,l[v]);f[v]={s:v*t,x:i[v],y:s[v],z:r[v],tx:o[v]/w,ty:l[v]/w,tz:a[v]/w,rx:-a[v],rz:o[v],width:n.width,curv:u[v],vmax:h[v],slope:l[v]},i[v]<p&&(p=i[v]),i[v]>g&&(g=i[v]),r[v]<x&&(x=r[v]),r[v]>m&&(m=r[v]);let y=1/Math.max(1e-9,Math.abs(u[v]));y<d&&(d=y),Math.abs(l[v])>b&&(b=Math.abs(l[v]))}let M=[],_=[];for(let v of n.features)v.type==="tunnel"?M.push({type:"tunnel",s0:v.s0,s1:v.s1,name:v.name}):_.push({s0:v.s0,s1:v.s1,name:v.name});let T=(e-1)*t,E=0;for(let v=0;v<e;v++)E+=t/Math.max(5,h[v]);return{seed:"REAL:"+n.id,attempts:1,open:!0,real:n,raceStart:n.raceStart||0,raceEnd:Math.min(n.raceEnd||T,T),length:T,step:t,count:e,pts:f,features:M,bridges:_,bounds:{minX:p,maxX:g,minZ:x,maxZ:m},stats:{minRadius:d,maxSlope:b,lapTimeEstimate:E,corners:0}}}var $0=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function gw(n,e,t,i=null){let s=[],r=n.length,o=i?i.s0:0,a=i?i.s1:r,l=f=>{if(i&&Number.isFinite(f.s)&&Number.isFinite(f.dist))return{dist:f.dist,q:n.pts[Math.max(0,Math.min(n.count-1,Math.round(f.s/n.step)))]};let p=1/0,g=0;for(let x=0;x<n.count;x+=5){let m=n.pts[x],d=(m.x-f.x)**2+(m.z-f.z)**2;d<p&&(p=d,g=x)}return{dist:Math.sqrt(p),q:n.pts[g]}},c={},u=(f,p)=>(c[f]=(c[f]||0)+1)<=(i?1:p),h=e.places.map(f=>({p:f,n:l(f)})).filter(f=>f.n.dist<1600&&f.n.q.s>150&&f.n.q.s<r-150).sort((f,p)=>f.n.dist-p.n.dist);for(let{p:f,n:p}of h)s.some(g=>g.x!==void 0&&Math.hypot(g.x-f.x,g.z-f.z)<250)||(f.kind==="castle"?/^torre/i.test(f.name)?u("torre",2)&&s.push({prop:"torre",x:f.x,z:f.z,height:48,label:f.name}):/castel|rocca|forte|fort/i.test(f.name)&&u("castello",3)&&s.push({prop:"castello",x:f.x,z:f.z,width:170,label:f.name}):f.kind==="place"&&(f.rank==="village"||f.rank==="town"||f.rank===void 0)&&(t(f.x,f.z)-p.q.y>120&&p.dist>250?u("borgo",3)&&s.push({prop:"borgo",x:f.x,z:f.z,width:300}):p.dist>90&&p.dist<450&&u("chiesa",3)&&s.push({prop:"chiesa",x:f.x,z:f.z,width:46})));for(let f=900,p=0;f<r-600;f+=1300,p++){if(f<o||f>=a)continue;let g=n.pts[Math.round(f/n.step)];for(let x of[1,-1]){let m=x*560;if(t(g.x+g.rx*m,g.z+g.rz*m)<=0&&t(g.x+g.rx*m*1.3,g.z+g.rz*m*1.3)<=0)p%2===0&&s.push({prop:"peschereccio",s:f,d:m+p%3*40*x,width:34,sea:!0});else if(p%2===1){let d=x*78,b=t(g.x+g.rx*d,g.z+g.rz*d);b>1&&Math.abs(b-g.y)<14&&s.push({prop:"agrumeto",s:f,d,width:70})}}}return s}function zf(n){return n._geo||(n._geo=Uf(n.cells,1)),n._geo}function Z0({track:n,data:e,baked:t,heightAt:i,clearance:s,range:r=null,unit:o=!1}){let a=new lt;a.name="real-props";let l=[],c=[];if(!t)return{group:a,placed:l,skipped:c,dispose(){}};let u=new Kn({vertexColors:!0}),h=new Map,f=n.length,p=r?Math.max(0,Math.floor((r.s0-2500)/n.step)):0,g=r?Math.min(n.count,Math.ceil((r.s1+2500)/n.step)):n.count,x=(m,d)=>{let b=1/0,M=p;for(let _=p;_<g;_+=2){let T=n.pts[_],E=(T.x-m)**2+(T.z-d)**2;E<b&&(b=E,M=_)}return{q:n.pts[M],dist:Math.sqrt(b)}};for(let m of gw(n,e,i,r)){let d=t[m.prop];if(!d?.cells?.length)continue;let b=d._ext;if(!b){let R=[1/0,1/0,1/0],N=[-1/0,-1/0,-1/0];for(let F=0;F<d.cells.length;F+=4)for(let L=0;L<3;L++)R[L]=Math.min(R[L],d.cells[F+L]),N[L]=Math.max(N[L],d.cells[F+L]+1);b=d._ext=[N[0]-R[0],N[1]-R[1],N[2]-R[2]]}let M=m.height?m.height/b[1]:m.width/Math.max(b[0],b[2]),_=Math.hypot(b[0],b[2])*M/2,T,E;if(m.x!==void 0)T=m.x,E=m.z;else{let R=n.pts[Math.max(0,Math.min(n.count-1,Math.round(m.s/n.step)))];T=R.x+R.rx*m.d,E=R.z+R.rz*m.d}let v=x(T,E);if(v.dist-_<s){if(m.x===void 0||v.dist<1){c.push(m.prop+" : trop pr\xE8s de la route");continue}let R=(_+s+2)/v.dist;if(T=v.q.x+(T-v.q.x)*R,E=v.q.z+(E-v.q.z)*R,v=x(T,E),v.dist-_<s){c.push(m.prop+" : trop pr\xE8s de la route");continue}}let w;if(m.sea){if(i(T,E)>0){c.push(m.prop+" : pas en mer");continue}w=-.12*M*b[1]}else{w=1/0;for(let[R,N]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])w=Math.min(w,i(T+R*_*.6,E+N*_*.6));w=Math.max(w,.2)-.5}let y;if(o)y=zf(d);else{let R=m.prop+"@"+M.toFixed(3);y=h.get(R),y||h.set(R,y=Uf(d.cells,M))}let S=new et(y,u);o&&S.scale.setScalar(M),S.name="prop-"+m.prop,S.position.set(T,w,E),S.rotation.y=Math.atan2(v.q.x-T,v.q.z-E),S.updateMatrix(),S.matrixAutoUpdate=!1,a.add(S),l.push({prop:m.prop,label:m.label||null,s:v.q.s,dist:v.dist,x:T,y:w,z:E,size:M})}return{group:a,placed:l,skipped:c,dispose(){u.dispose();for(let m of h.values())m.dispose()}}}var xw=(n,e,t=1.08,i=1.45)=>{let s=(n>>16&255)/255,r=(n>>8&255)/255,o=(n&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*i)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*i)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*i)*t)),e[0]=s,e[1]=r,e[2]=o};function Rc(n,e,{seaCut:t=.25,yOffset:i=0,tint:s=null,lower:r=.2}={}){let{cell:o,ix:a,iz:l,h:c,c:u}=n,h=a.length,f=1/0,p=-1/0,g=1/0,x=-1/0;for(let q=0;q<h;q++)a[q]<f&&(f=a[q]),a[q]>p&&(p=a[q]),l[q]<g&&(g=l[q]),l[q]>x&&(x=l[q]);let m=n.hx||[],d=n.hz||[],b=n.hh||[];for(let q=0;q<m.length;q++)m[q]<f&&(f=m[q]),m[q]>p&&(p=m[q]),d[q]<g&&(g=d[q]),d[q]>x&&(x=d[q]);let M=h?p-f+1:0,_=h?x-g+1:0,T=new Float32Array(M*_).fill(NaN),E=new Float32Array(M*_).fill(NaN),v=(q,se)=>q<f||q>p||se<g||se>x?-1:(q-f)*_+(se-g),w={get(q){if(q<0)return;let se=T[q];return se===se?se:void 0}},y=new Float32Array(h);for(let q=0;q<m.length&&h;q++){let se=(m[q]-f)*_+(d[q]-g);E[se]=b[q]/10,T[se]=Math.floor(b[q]/10/e)*e}let S=0;for(let q=0;q<h;q++){let se=(a[q]-f)*_+(l[q]-g);y[q]=Math.floor(c[q]/10/e)*e,T[se]=y[q],E[se]=c[q]/10,c[q]/10>t&&(S+=2)}let R=_+1,N=new Float32Array((M+1)*R);for(let q=0;q<=M;q++)for(let se=0;se<=_;se++){let me=0,ie=0,J=1/0;for(let oe=q-1;oe<=q;oe++)if(!(oe<0||oe>=M))for(let he=se-1;he<=se;he++){if(he<0||he>=_)continue;let _e=E[oe*_+he];_e===_e&&(me+=_e,ie++,_e<J&&(J=_e))}let Q=ie?me/ie:0;N[q*R+se]=ie?Q-(Q-J)*r+i:0}let F=new Float32Array(S*9),L=new Float32Array(S*9),I=new Float32Array(S*9),H=0,W=[0,0,0],z=(q,se,me,ie,J,Q,oe,he,_e,Se,Ie,ne)=>{let Ee=ie-q,X=J-se,We=Q-me,we=oe-q,Le=he-se,Pe=_e-me,Ne=X*Pe-We*Le,pe=We*we-Ee*Pe,P=Ee*Le-X*we,A=Math.hypot(Ne,pe,P)||1;Ne/=A,pe/=A,P/=A,F[H]=q,F[H+1]=se,F[H+2]=me,F[H+3]=ie,F[H+4]=J,F[H+5]=Q,F[H+6]=oe,F[H+7]=he,F[H+8]=_e;for(let ee=0;ee<9;ee+=3)L[H+ee]=Ne,L[H+ee+1]=pe,L[H+ee+2]=P,I[H+ee]=Se,I[H+ee+1]=Ie,I[H+ee+2]=ne;H+=9};for(let q=0;q<h;q++){if(c[q]/10<=t)continue;xw(u[q],W),s&&s(W,(a[q]+.5)*o,(l[q]+.5)*o,y[q]);let se=a[q]-f,me=l[q]-g,ie=N[se*R+me],J=N[se*R+me+1],Q=N[(se+1)*R+me],oe=N[(se+1)*R+me+1],he=a[q]*o,_e=l[q]*o,Se=he+o,Ie=_e+o,ne=.94+.12*((a[q]*73856093^l[q]*19349663)>>>0)/4294967295,Ee=W[0]*ne,X=W[1]*ne,We=W[2]*ne,we=.93;Math.abs(ie-oe)<=Math.abs(J-Q)?(z(he,ie,_e,he,J,Ie,Se,oe,Ie,Ee,X,We),z(he,ie,_e,Se,oe,Ie,Se,Q,_e,Ee*we,X*we,We*we)):(z(he,ie,_e,he,J,Ie,Se,Q,_e,Ee,X,We),z(he,J,Ie,Se,oe,Ie,Se,Q,_e,Ee*we,X*we,We*we))}let O=new ht;return O.setAttribute("position",new vt(F,3)),O.setAttribute("normal",new vt(L,3)),O.setAttribute("color",new vt(I,3)),O.computeBoundingSphere(),{geo:O,heights:w,key:v,q:y,surfaceAt:(q,se)=>{let me=q/o-f,ie=se/o-g,J=Math.floor(me),Q=Math.floor(ie);if(J<0||J>=M||Q<0||Q>=_||E[J*_+Q]!==E[J*_+Q])return;let oe=me-J,he=ie-Q,_e=N[J*R+Q],Se=N[J*R+Q+1],Ie=N[(J+1)*R+Q],ne=N[(J+1)*R+Q+1];return(_e*(1-he)+Se*he)*(1-oe)+(Ie*(1-he)+ne*he)*oe}}}function _o(n,e,t){let i=new En(n,e,t.length),s=new je,r=new on,o=new G,a=new G,l=new G(0,1,0);return t.forEach((c,u)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),i.setMatrixAt(u,s),c.color&&i.setColorAt(u,c.color)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}function K0(n){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(n[0],256,n[1]?70:96,470),n[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(n[1],256,136,470));let i=new ai(e);return i.colorSpace=Ot,i.anisotropy=8,i}var kf=.12,vw=8200,yw=3,_w=1,Mw=5,bw=2,Mo=new Map;function j0(n,e){if(!Mo.has(e)){let t=fetch(`${n}c${String(e).padStart(3,"0")}.json`).then(i=>{if(!i.ok)throw new Error("tuile indisponible : "+e);return i.json()}).then(i=>(Mo.set(e,i),i));t.catch(()=>Mo.delete(e)),Mo.set(e,t)}return Promise.resolve(Mo.get(e))}function Hf(n,e,t,i=1){let s=Math.max(0,Math.min(e.chunks-1,Math.floor(t/e.chunk))),r=[];for(let o=Math.max(0,s-1);o<=Math.min(e.chunks-1,s+i);o++)r.push(j0(n,o));return Promise.all(r)}function Sw(n,e,t){let i=n.step,s=e*i,r=t*i,o=[];for(let l=e;l<=t;l++)o.push({...n.pts[l],s:(l-e)*i});let a=[];for(let l of n.features)l.type!=="tunnel"||l.s1<=s||l.s0>=r||a.push({type:"tunnel",name:l.name,s0:Math.max(l.s0,s)-s,s1:Math.min(l.s1,r)-s,cutStart:l.s0<s,cutEnd:l.s1>r});return{seed:n.seed+":"+e,open:!0,noStart:!0,length:(o.length-1)*i,step:i,count:o.length,pts:o,features:a,bridges:[]}}function J0(n,e,t,i,{base:s="assets/v3/world/",baked:r=null,rng:o,far:a=null}={}){let l=new lt;l.name="environment";let c=[],u=B=>(c.push(B),B),h=e.length,f=e.step,p=i.width/2,g=p+6+2,x=i.chunk,m=i.chunks,d=Math.round(x/f),b=new et(u(new kn(6e4,6e4)),u(new ot({color:t.seaColor,roughness:.16,metalness:.1}))),M=N0(b.material);b.rotation.x=-Math.PI/2,b.position.y=.05,b.name="real-sea",l.add(b);let _=new G(...t.sunDir).normalize(),T=u(new Mt({side:nn,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new De(t.skyTop)},uHor:{value:new De(t.skyHorizon)},uSun:{value:new De(t.sunColor)},uSunDir:{value:_}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),E=new et(u(new Ls(vw,32,16)),T);E.renderOrder=-10,E.frustumCulled=!1,l.add(E);let v=n.fog,w=n.background;n.fog=new so(t.fogColor,(t.fogDensity||5e-4)*.3),n.background=new De(t.skyHorizon);let y=new co(t.hemiSky,t.hemiGround,t.hemiIntensity),S=new Ui(t.sunColor,t.sunIntensity);S.castShadow=!0,S.shadow.mapSize.set(2048,2048);let R=S.shadow.camera;R.left=-90,R.right=90,R.top=90,R.bottom=-90,R.near=1,R.far=500,S.shadow.bias=-5e-4,l.add(y,S,S.target);let N=null;function F(B){if(N||!B)return;let C=new De(t.skyHorizon),Z=Rc(B,60,{tint:(k,j,Y,ue)=>{let Te=ue>2300?.5:0,ze=.55;k[0]=(k[0]+(1-k[0])*Te)*(1-ze)+C.r*ze,k[1]=(k[1]+(1-k[1])*Te)*(1-ze)+C.g*ze,k[2]=(k[2]+(1-k[2])*Te)*(1-ze)+C.b*ze}}).geo;N=new et(u(Z),u(new zt({vertexColors:!0,fog:!1,side:Dt}))),N.name="real-terrain-far",N.scale.setScalar(kf),N.frustumCulled=!1,N.renderOrder=-5,l.add(N)}a?F(a):typeof fetch=="function"&&fetch(s+"far.json").then(B=>B.ok?B.json():null).then(B=>{xe||F(B)}).catch(()=>{});let L=u(new fn(1,1,1)),I=B=>{let C=B.index?B.toNonIndexed():B;return C.computeVertexNormals(),u(C)},H=I(new Yn(Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0)),W=I(new Yn(.5,1,6,1).translate(0,.5,0)),z=I(new Jt(.22,.5,1,7,1).translate(0,.5,0)),O=I(new $n(.5,0).translate(0,.5,0)),V=I(new Jt(.4,.5,1,5,1).translate(0,.5,0)),q=go(u(new ot({vertexColors:!0,roughness:.95,metalness:0,side:Dt})),1,1),se=go(u(new ot({vertexColors:!0,roughness:1,side:Dt})),8,.7),me=D0(go(u(new ot({roughness:.9})),1.5,.8)),ie=u(new ot({roughness:.85})),J=u(new Kn),Q=u(new Kn),oe=go(u(new ot({roughness:.9})),.8,.6),he=u(new ot({roughness:.35,metalness:.85})),_e=u(new Kn),Se=u(new kn(1,1)),Ie=(B,C,Z)=>{let k=Math.sin(B*127.1+C*311.7+Z*74.7)*43758.5453;return k-Math.floor(k)},ne=[2910768,2910768,3503416,15231644,15920356].map(B=>new De(B)),Ee=[15983808,15321498,16117730,14924172,14472128,15784368,13620956].map(B=>new De(B)),X=[11884346,11030070,14275268,13222064,9390646].map(B=>new De(B)),We=new De(12170925),we=new De(10131343),Le=new De(12764876),Pe=new De(8225160),Ne=new De(7031346);if(r)for(let B of Object.values(r))B?.cells?.length&&zf(B);let pe=60,P=new Map;for(let B=0;B<e.count;B+=3){let C=e.pts[B],Z=Math.floor(C.x/pe)*100003+Math.floor(C.z/pe),k=P.get(Z);k||P.set(Z,k=[]),k.push(C)}let A=(B,C,Z,k)=>{let j=null,Y=Math.max(Z,k)+g;for(let ue=Math.floor((B-Y)/pe);ue<=Math.floor((B+Y)/pe);ue++)for(let Te=Math.floor((C-Y)/pe);Te<=Math.floor((C+Y)/pe);Te++){let ze=P.get(ue*100003+Te);if(ze)for(let Oe of ze){let Ae=Math.max(0,Math.abs(Oe.x-B)-Z),ae=Math.max(0,Math.abs(Oe.z-C)-k);Ae*Ae+ae*ae<g*g&&(j===null||Oe.y<j)&&(j=Oe.y)}}return j},ee=B=>!!Bs(e,Math.max(0,Math.min(h-1,B)),"tunnel"),le=new Map,xe=!1,fe={built:0,freed:0,worstStep:0,worstBy:[0,0,0,0,0,0,0,0,0,0],buildings:0,trees:0,props:[]},Be=10;function Re(B,C){for(let Z of le.values()){if(!Z.near)continue;let k=Z.near.heights.get(Z.near.key(Math.floor(B/10),Math.floor(C/10)));if(k!==void 0)return k}for(let Z of le.values()){if(!Z.mid)continue;let k=Z.mid.heights.get(Z.mid.key(Math.floor(B/80),Math.floor(C/80)));if(k!==void 0)return k-3}return-5}function Ue(B,C){let Z=[],k=te=>(Z.push(te),te),j=B.group,Y=C.s0,ue=Math.min(C.s1,h),Te=Math.round(Y/f),ze=Math.min(e.count-1,Math.round(ue/f)),Oe=o.fork("tuile:"+B.i),Ae={x:0,y:0,z:0,heading:0},ae={x:0,y:0,z:0,heading:0};return B.own=Z,[()=>{B.near=Rc(C.near,1);let te=new et(k(B.near.geo),q);te.receiveShadow=!0,te.name="real-terrain-near",j.add(te)},()=>{B.mid=Rc(C.mid,4,{yOffset:-3});let te=new et(k(B.mid.geo),se);te.name="real-terrain-mid",j.add(te)},...[0,1,2,3].map(te=>()=>{let de=Te+Math.round((ze-Te)*te/4),Me=Te+Math.round((ze-Te)*(te+1)/4);if(Me<=de)return;let Ce=bc(Sw(e,de,Me),t,Oe.fork("route"+te));j.add(Ce.group),B.roads.push(Ce)}),()=>{let te=C.buildings,de=[],Me=[],Ce=[];for(let ge=0;ge<te.x.length;ge++){let He=te.l[ge]>0?Math.min(te.l[ge],9):1+Math.floor(Oe.next()*3)+(te.w[ge]*te.d[ge]>300?1:0),Ve=He*3.1,qe=Re(te.x[ge],te.z[ge]);qe<-4&&(qe=te.y[ge]),qe=Math.max(qe,.3);let Je=A(te.x[ge],te.z[ge],te.w[ge]/2+.3,te.d[ge]/2+.3);if(Je!==null){let gt=Je-3.2-qe;if(gt<3)continue;Ve>gt&&(Ve=gt)}de.push({x:te.x[ge],y:qe+Ve/2-.5,z:te.z[ge],sx:te.w[ge],sy:Ve+1,sz:te.d[ge],color:Oe.pick(Ee)});let ut=Oe.pick(X);He<=3&&te.w[ge]*te.d[ge]<260&&Je===null?Ce.push({x:te.x[ge],y:qe+Ve,z:te.z[ge],sx:te.w[ge]+.8,sy:1.6+.12*Math.min(te.w[ge],te.d[ge]),sz:te.d[ge]+.8,color:ut}):Me.push({x:te.x[ge],y:qe+Ve+.35,z:te.z[ge],sx:te.w[ge]+.6,sy:.7,sz:te.d[ge]+.6,color:ut})}if(B.stats.buildings=de.length,de.length){let ge=_o(L,me,de);ge.name="real-buildings",ge.castShadow=!0,ge.frustumCulled=!0,ge.computeBoundingSphere(),j.add(ge),Z.push(ge);for(let[He,Ve]of[[L,Me],[H,Ce]]){if(!Ve.length)continue;let qe=_o(He,ie,Ve);qe.name="real-roofs",qe.frustumCulled=!0,qe.computeBoundingSphere(),j.add(qe),Z.push(qe)}}},()=>{let te=C.trees,de=[],Me=[],Ce=[],ge=[],He=new De;for(let Ve=0;Ve<te.x.length;Ve++){let qe=te.x[Ve],Je=te.z[Ve];if(A(qe,Je,2.5,2.5)!==null)continue;let ut=te.r[Ve]/1e3,gt=te.y[Ve]-.4,_t=.75+.5*ut,Nt=ut*40;if(te.k[Ve])if(ut<.55){let Rt=8+6*ut;Me.push({x:qe,y:gt,z:Je,ry:Nt,sx:2.4,sy:Rt,sz:2.4,color:He.setRGB(.1*_t,.26*_t,.13*_t).clone()})}else{let Rt=6+5*ut;de.push({x:qe,y:gt,z:Je,ry:Nt,sx:.8,sy:Rt+.3,sz:.8,color:Ne}),Ce.push({x:qe,y:gt+Rt,z:Je,ry:Nt,sx:7.5,sy:2.6,sz:7.5,color:He.setRGB(.14*_t,.34*_t,.16*_t).clone()})}else{let Rt=3.4+2.6*ut;de.push({x:qe,y:gt,z:Je,ry:Nt,sx:.7,sy:2,sz:.7,color:Ne}),ge.push({x:qe,y:gt+1.5,z:Je,ry:Nt,sx:Rt,sy:Rt*.85,sz:Rt,color:He.setRGB(.3*_t,.44*_t,.2*_t).clone()})}}B.stats.trees=Me.length+Ce.length+ge.length;for(let[Ve,qe,Je,ut]of[[de,V,Q,"real-trunks"],[Me,W,J,"real-trees"],[Ce,z,J,"real-trees"],[ge,O,J,"real-trees"]]){if(!Ve.length)continue;let gt=_o(qe,Je,Ve);gt.name=ut,gt.frustumCulled=!0,gt.computeBoundingSphere(),j.add(gt),Z.push(gt)}},()=>{let te=[],de=[],Me=[],Ce=[];for(let ge of e.bridges)if(!(ge.s1<=Y||ge.s0>=ue)){for(let He=ge.s0+6;He<ge.s1-2;He+=34){if(He<Y||He>=ue)continue;At(e,He,0,Ae);let Ve=Re(Ae.x,Ae.z),qe=Ae.y-1.6-Ve;qe<3||(te.push({x:Ae.x,y:Ve+qe/2,z:Ae.z,ry:Ae.heading,sx:p*1.5,sy:qe,sz:2.4,color:we}),te.push({x:Ae.x,y:Ae.y-1.2,z:Ae.z,ry:Ae.heading,sx:p*2+5,sy:1.2,sz:3.6,color:We}))}for(let He=ge.s0;He<ge.s1;He+=8)if(!(He<Y||He>=ue)){for(let Ve of[-1,1])At(e,He+4,Ve*(p+6+.4),Ae),de.push({x:Ae.x,y:Ae.y-.9,z:Ae.z,ry:Ae.heading,sx:.9,sy:1.8,sz:8.3,color:We});At(e,He+4,0,Ae),de.push({x:Ae.x,y:Ae.y-1.25,z:Ae.z,ry:Ae.heading,sx:p*2+12,sy:.9,sz:8.3,color:we})}}for(let ge=Y;ge<ue&&ge<h-4;ge+=4)if(!ee(ge))for(let He of[-1,1]){let Ve=He*(p+6-.7);At(e,ge,Ve,Ae),At(e,ge+4,Ve,ae),Me.push({x:Ae.x,y:Ae.y+.4,z:Ae.z,ry:Ae.heading,sx:.12,sy:.8,sz:.12,color:Pe});let qe=Math.hypot(ae.x-Ae.x,ae.z-Ae.z)+.05,Je=Math.atan2(ae.x-Ae.x,ae.z-Ae.z);for(let ut of[.42,.72])Ce.push({x:(Ae.x+ae.x)/2,y:(Ae.y+ae.y)/2+ut,z:(Ae.z+ae.z)/2,ry:Je,sx:.07,sy:.2,sz:qe,color:Le})}for(let[ge,He,Ve,qe]of[[te,oe,"real-piers",!0],[de,oe,"real-decks",!1],[Me,he,"real-rail-posts",!1],[Ce,he,"real-rails",!1]]){if(!ge.length)continue;let Je=_o(L,He,ge);Je.name=Ve,Je.castShadow=qe,Je.frustumCulled=!0,Je.computeBoundingSphere(),j.add(Je),Z.push(Je)}},()=>{for(let de of i.signs){if(de.s<Y||de.s>=ue)continue;let Me=K0([de.name,""]),Ce=k(new zt({map:Me,color:Me?16777215:817731,side:Dt}));Me&&k(Me),At(e,de.s,p+6+2.2,Ae);let ge=new et(Se,Ce);ge.scale.set(7.5,2.8,1),ge.position.set(Ae.x,Ae.y+5.2,Ae.z),ge.rotation.y=Ae.heading+Math.PI,ge.name="real-sign";let He=new et(L,he);He.scale.set(.3,5.2,.3),He.position.set(Ae.x,Ae.y+2.2,Ae.z),j.add(ge,He)}let te=[];for(let de=Math.max(60,Y);de<ue&&de<h-20;de+=Oe.range(5,11)){if(ee(de)||e.bridges.some(Ce=>de>Ce.s0-4&&de<Ce.s1+4))continue;if(Oe.next()<.25){de+=Oe.range(15,50);continue}let Me=Oe.next()<.5?-1:1;At(e,de,Me*(p+6+Oe.range(1.2,2.4)),Ae),te.push({x:Ae.x,y:Ae.y-.6,z:Ae.z,ry:Oe.range(0,6.28),sx:Oe.range(1.8,3),sy:Oe.range(1.6,2.6),sz:Oe.range(1.8,3),color:Oe.pick(ne)})}if(te.length){let de=_o(O,_e,te);de.castShadow=!0,de.name="real-oleanders",de.frustumCulled=!0,de.computeBoundingSphere(),j.add(de),Z.push(de)}if(r){let de=Z0({track:e,data:C,baked:r,heightAt:Re,clearance:g,range:{s0:Y,s1:ue},unit:!0});j.add(de.group),Z.push(de),B.stats.props=de.placed}}]}function Xe(B){if(le.has(B)||B<0||B>=m)return;let C={i:B,state:"loading",group:new lt,own:[],steps:null,near:null,mid:null,roads:[],stats:{buildings:0,trees:0,props:[]}};C.group.name="tuile-"+B,le.set(B,C);let Z=j=>{xe||le.get(B)!==C||(C.steps=Ue(C,j),C.state="building",l.add(C.group))},k=Mo.get(B);k&&typeof k.then!="function"?Z(k):j0(s,B).then(Z).catch(()=>{le.get(B)===C&&le.delete(B)})}function be(B){let C=Be-B.steps.length,Z=B.steps.shift(),k=typeof performance<"u"?performance.now():0;Z();let j=(typeof performance<"u"?performance.now():0)-k;j>fe.worstStep&&(fe.worstStep=j),j>fe.worstBy[C]&&(fe.worstBy[C]=Math.round(j)),B.steps.length||(B.state="ready",fe.built++)}function Fe(B){l.remove(B.group);for(let C of B.roads)C.dispose?.();for(let C of B.own)C.isInstancedMesh?C.dispose():C.dispose?.();le.delete(B.i),fe.freed++}function $e(B){let C=Math.max(0,Math.min(m-1,Math.floor(B/x)));for(let Z=Math.max(0,C-1);Z<=Math.min(m-1,C+1);Z++){Xe(Z);let k=le.get(Z);for(;k&&k.steps&&k.steps.length;)be(k)}}let Qe=0,U=new G;function K(B,C,Z,k=0){E.position.set(Z.x,0,Z.z),b.position.x=Z.x,b.position.z=Z.z,M.value=C,S.position.copy(Z).addScaledVector(_,200),S.target.position.copy(Z),N&&(U.copy(Z),N.position.set(U.x*(1-kf),-2,U.z*(1-kf)));let j=Math.max(0,Math.min(m-1,Math.floor(k/x)));for(let ue=j-_w;ue<=j+yw;ue++)Xe(ue);for(let ue of Array.from(le.values()))(ue.i<j-bw||ue.i>j+Mw)&&Fe(ue);Qe+=1;let Y=null;for(let ue of le.values())ue.state==="building"&&(!Y||Math.abs(ue.i-j)<Math.abs(Y.i-j))&&(Y=ue);Y&&(Qe>=3||Math.abs(Y.i-j)<=1)&&(Qe=0,be(Y));for(let ue of le.values())for(let Te of ue.roads)Te.update?.(B,C)}function $(){xe=!0;for(let B of Array.from(le.values()))Fe(B);n.remove(l),n.fog&&n.fog!==v&&(n.fog=v||null),n.background=w||null;for(let B of c)B.dispose?.()}return n.add(l),{group:l,sun:S,update:K,dispose:$,heightAt:Re,prime:$e,chunks:le,stats:fe,readyAround(B){let C=Math.floor(B/x),Z=le.get(C);return!!Z&&Z.state==="ready"}}}var Ew=[-5,0,5],Cc=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],Q0=[0,0,0,0,0,1,1,2,3,3],ww=.45,Tw=1,Aw=1.5,Rw=12,Cw=5,Pw=3,Iw=5;function eg({rng:n,count:e=22,density:t=1}={}){let i=[];for(let h=0;h<e;h++)i.push({id:h,type:Cc[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:i,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(h,f,p=30,g=30){let x=0;for(let m of i)m!==f&&m.s>h-p&&m.s<h+g&&(x|=1<<m.lane);return x}function a(h,f){let p=Cc[Q0[n.int(0,Q0.length-1)]],g=o(f,h,45,45),x=p.lanes.filter(d=>!(g&1<<d));return([0,1,2].filter(d=>g&1<<d).length>=2||!x.length)&&(f+=60,x=p.lanes),h.type=p,h.lane=x[n.int(0,x.length-1)],h.d=Ew[h.lane]+n.range(-.35,.35),h.cruise=h.speed=n.range(p.v[0],p.v[1]),h.color=n.int(0,7),h.s=f,h.passed=!1,h.hitT=0,f}function l(h,f=350){let p=h+f;for(let g of i)p=a(g,p)+n.range(70,190)/t;r=!0}function c(h,f,p){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of i)x.s>g&&(g=x.s);for(let x of i){let m=x.cruise,d=0,b=1/0;for(let M of i){if(M===x||M.lane===x.lane)continue;let _=M.s-x.s;_>-8&&_<45&&(d|=1<<M.lane,M.speed<b&&(b=M.speed))}d===(7&~(1<<x.lane))&&(m=Math.min(m,b-.5));for(let M of i){if(M===x||M.lane!==x.lane)continue;let _=M.s-x.s-(M.type.len+x.type.len)/2;_>0&&_<25&&(m=Math.min(m,M.speed))}x.speed+=(m-x.speed)*Math.min(1,h*1.5),x.s+=x.speed*h,x.hitT>0&&(x.hitT-=h),x.s<f.s-70&&(g=a(x,Math.max(g+n.range(70,190)/t,f.s+650)))}for(let x of p){let m=x.state;for(let d of i){let b=m.s-d.s,M=m.d-d.d,_=d.type.len/2+Tw,T=d.type.w/2+ww;if(Math.abs(b)<_&&Math.abs(M)<T){if(d.hitT<=0||x.isPlayer){let E=M!==0?Math.sign(M):m.d<d.d?-1:1;m.d=d.d+E*(T+.05),m.speed>d.speed*.95&&(m.speed=Math.max(d.speed*.9,m.speed*.5),m.boostT=0,d.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:d})))),d.hitT=1.2}x.isPlayer&&(d.passed=!0)}else if(x.isPlayer&&!d.passed&&b>_&&(d.passed=!0,Math.abs(M)<T+Aw&&m.speed-d.speed>Rw)){s.nearMisses++,s.combo++,s.comboT=Cw,s.meter++;let E=!1;s.meter>=Pw&&(s.meter=0,m.boostCharges<Iw&&(m.boostCharges+=1,E=!0)),s.events.push({type:"near",vehicle:d,combo:s.combo,boost:E})}}}s.comboT>0&&(s.comboT-=h,s.comboT<=0&&(s.combo=0))}function u(h){for(let f of i)f.s+=h}return Object.assign(s,{update:c,reset:l,shift:u})}var Gf="wss://tracker.openwebtorrent.com",tg=[{urls:"stun:stun.cloudflare.com:3478"}],Lw=4,Dw=25e3,ng=()=>{let n=crypto.getRandomValues(new Uint8Array(20)),e="";for(let t of n)e+=String.fromCharCode(t);return e},Vf=n=>Array.from(n,e=>e.charCodeAt(0).toString(16).padStart(2,"0")).join("");async function Nw(n){let e=new TextEncoder().encode("polygon-rush/v3/"+String(n).trim()),t=new Uint8Array(await crypto.subtle.digest("SHA-1",e)),i="";for(let s of t)i+=String.fromCharCode(s);return i}function ig(n){return n.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{let t=setTimeout(e,2500);n.addEventListener("icegatheringstatechange",()=>{n.iceGatheringState==="complete"&&(clearTimeout(t),e())})})}async function Pc(n,{onPeer:e,onLeave:t,onMessage:i,onStatus:s,maxPeers:r=7}={}){let o=r,a=await Nw(n),l=ng(),c=Vf(l),u=new Map,h=new Map,f=null,p=null,g=!1,x=0,m=v=>s?.(v);function d(v,w,y){let S=u.get(v);if(S&&S.ch.readyState==="open"){try{w.close()}catch{}return}let R={id:v,pc:w,ch:y,send(F){y.readyState==="open"&&y.send(JSON.stringify(F))}};u.set(v,R),y.onmessage=F=>{let L;try{L=JSON.parse(F.data)}catch{return}L&&typeof L=="object"&&i?.(R,L)};let N=()=>{u.get(v)===R&&(u.delete(v),t?.(R));try{w.close()}catch{}};y.onclose=N,w.addEventListener("connectionstatechange",()=>{["failed","closed","disconnected"].includes(w.connectionState)&&N()}),e?.(R)}function b(v,w,y){w.readyState==="open"?d(y,v,w):w.onopen=()=>d(y,v,w)}async function M(){let v=[];for(let w=0;w<Lw&&u.size+w<o;w++){let y=new RTCPeerConnection({iceServers:tg}),S=y.createDataChannel("jeu",{ordered:!1,maxRetransmits:0});y._ch=S,await y.setLocalDescription(await y.createOffer()),await ig(y);let R=ng();h.set(R,y),setTimeout(()=>{if(h.get(R)===y){h.delete(R);try{y.close()}catch{}}},5e4),v.push({offer_id:R,offer:{type:"offer",sdp:y.localDescription.sdp}})}return v}async function _(v){if(!f||f.readyState!==1)return;let w=u.size<o?await M():[];if(!f||f.readyState!==1)return;let y={action:"announce",info_hash:a,peer_id:l,numwant:w.length,uploaded:0,downloaded:0,left:1,offers:w};v&&(y.event=v),f.send(JSON.stringify(y))}async function T(v){let w;try{w=JSON.parse(v)}catch{return}if(!(!w||w.info_hash!==a)){if(w["failure reason"]){m("Le tracker refuse : "+w["failure reason"]);return}if(w.peer_id!==l){if(w.offer&&w.peer_id&&w.offer_id){let y=Vf(w.peer_id);if(u.has(y)||u.size>=o)return;let S=new RTCPeerConnection({iceServers:tg});S.ondatachannel=R=>b(S,R.channel,y);try{await S.setRemoteDescription(w.offer),await S.setLocalDescription(await S.createAnswer()),await ig(S),f?.send(JSON.stringify({action:"announce",info_hash:a,peer_id:l,to_peer_id:w.peer_id,offer_id:w.offer_id,answer:{type:"answer",sdp:S.localDescription.sdp}}))}catch{try{S.close()}catch{}}}else if(w.answer&&w.offer_id){let y=h.get(w.offer_id);if(!y)return;h.delete(w.offer_id);let S=Vf(w.peer_id);if(u.has(S)){try{y.close()}catch{}return}b(y,y._ch,S);try{await y.setRemoteDescription(w.answer)}catch{try{y.close()}catch{}}}}}}function E(){g||(m("Connexion au tracker\u2026"),f=new WebSocket(Gf),f.onopen=()=>{x=0,m("En attente d'autres joueurs"),_("started"),clearInterval(p),p=setInterval(()=>_(),Dw)},f.onmessage=v=>{typeof v.data=="string"&&T(v.data)},f.onclose=()=>{clearInterval(p),!g&&(m("Tracker injoignable, nouvel essai\u2026"),setTimeout(E,Math.min(15e3,2e3*2**x++)))},f.onerror=()=>{})}return E(),{id:c,peers:u,broadcast(v){let w=JSON.stringify(v);for(let y of u.values())y.ch.readyState==="open"&&y.ch.send(w)},stopAnnouncing(){clearInterval(p);try{f?.close()}catch{}g=!0},leave(){g=!0,clearInterval(p);try{f?.close()}catch{}for(let v of u.values())try{v.pc.close()}catch{}for(let v of h.values())try{v.close()}catch{}u.clear(),h.clear()}}}function sg(){let n=null,e=0,t=null;return{get known(){return!!n},get age(){return n?(performance.now()-e)/1e3:1/0},push(i,s){!Number.isFinite(i.g)||!Number.isFinite(i.d)||!Number.isFinite(i.v)||(n={g:i.g,d:Math.max(-14,Math.min(14,i.d)),v:Math.max(0,Math.min(140,i.v)),l:+i.l||0,y:+i.y||0,b:!!i.b},e=s)},sample(i,s){if(!n)return null;let r=Math.min(.5,Math.max(0,(i-e)/1e3)),o={g:n.g+n.v*r,d:n.d,v:n.v,l:n.l,y:n.y,b:n.b};if(!t||Math.abs(t.g-o.g)>60)t={...o};else{let a=Math.min(1,s*10);t.g+=t.v*s+(o.g-(t.g+t.v*s))*a,t.d+=(o.d-t.d)*a,t.v+=(o.v-t.v)*a,t.l+=(o.l-t.l)*a,t.y+=(o.y-t.y)*a,t.b=o.b}return t}}}var ya=[[14885934,2312392],[2005987,15921906],[3129179,1053720],[15902491,1776411],[10178016,15921906],[15751836,1776411],[2279360,1776411],[15921906,14885934]];function bo(n){return String(n||"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,14)||"Pilote"}function Wf(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}var Ic=15e3;function Xf(n){if(!n||typeof n!="object")return null;let e=Wf(n.id);return e.length<4?null:{id:e,name:String(n.name||"").replace(/[^\p{L}\p{N} _.'!-]/gu,"").trim().slice(0,24)||"Partie",host:bo(n.host),players:Math.max(1,Math.min(8,Math.floor(Number(n.players))||1)),locked:!!n.locked,started:!!n.started,stage:Math.max(1,Math.min(99,Math.floor(Number(n.stage))||1))}}function qf(n,e){let t=!1;for(let[i,s]of n)e-s.seen>Ic&&(n.delete(i),t=!0);return t}var lg={name:"ECDSA",namedCurve:"P-256"},cg={name:"ECDSA",hash:"SHA-256"},rg="ABCDEFGHJKMNPQRSTUVWXYZ23456789",ug=new TextEncoder,og=n=>{let e="";for(let t of new Uint8Array(n))e+=String.fromCharCode(t);return btoa(e)},ag=n=>Uint8Array.from(atob(String(n)),e=>e.charCodeAt(0));async function hg(n){let e=new Uint8Array(await crypto.subtle.digest("SHA-256",n)),t="";for(let i=0;i<12;i++)t+=rg[e[i]%rg.length];return t}async function fg(){let n=await crypto.subtle.generateKey(lg,!1,["sign","verify"]),e=await crypto.subtle.exportKey("raw",n.publicKey);return{id:await hg(e),pub:og(e),sign:async t=>og(await crypto.subtle.sign(cg,n.privateKey,ug.encode(t)))}}async function _a(n,e,t,i){try{let s=ag(e);if(s.length!==65||typeof i!="string"||i.length>200||await hg(s)!==n)return!1;let r=await crypto.subtle.importKey("raw",s,lg,!1,["verify"]);return await crypto.subtle.verify(cg,r,ag(i),ug.encode(t))}catch{return!1}}var Yf=n=>["partie",n.id,n.name,n.host,n.players,n.locked?1:0,n.started?1:0,n.stage,n.seq].join("|"),$f=(n,e)=>["fermee",n,e].join("|"),Zf=(n,e)=>["hote",n,e].join("|");var Uw=15;async function dg(n,e,{onChange:t,onStart:i,onStatus:s,password:r="",roomKey:o=null}={}){let a=!!o,l=String(n).toUpperCase(),c=Promise.resolve(null),u=new Map,h=bo(e),f=null,p=0,g=()=>t?.(),x=await Pc("partie/"+String(n).toUpperCase()+(r?"/"+r:""),{onStatus:s,onPeer(d){u.set(d.id,{id:d.id,name:"Pilote",remote:sg(),finished:!1,finishTime:null,gone:!1,peer:d}),c.then(b=>d.send(b?{t:"hi",name:h,pub:o.pub,sig:b}:{t:"hi",name:h})),f&&d.send({t:"busy"}),g()},onLeave(d){let b=u.get(d.id);b&&(f?b.gone=!0:u.delete(d.id),g())},onMessage(d,b){let M=u.get(d.id);M&&(b.t==="hi"?(M.name=bo(b.name),g(),b.pub&&b.sig&&_a(l,String(b.pub),Zf(l,d.id),String(b.sig)).then(_=>{_&&(M.creator=!0,g())})):b.t==="s"?M.remote.push(b,performance.now()):b.t==="fin"&&Number.isFinite(b.time)?(M.finished=!0,M.finishTime=b.time,g()):b.t==="start"&&!f&&d.id===m.hostId?(f={stage:Math.max(1,Math.floor(Number(b.stage))||1)},x.stopAnnouncing(),i?.(f)):b.t==="busy"&&(M.busy=!0,g()))}});a&&(c=o.sign(Zf(l,x.id)).catch(()=>null));let m={code:n,locked:!!r,id:x.id,name:h,players:u,get started(){return f},get peerCount(){return x.peers.size},get hostId(){if(a)return x.id;for(let b of u.values())if(b.creator&&!b.gone)return b.id;let d=x.id;for(let b of u.keys())b<d&&(d=b);return d},get isHost(){return m.hostId===x.id},roster(){let d=[{id:x.id,name:h,me:!0},...Array.from(u.values()).filter(b=>!b.busy)];return d.sort((b,M)=>b.id<M.id?-1:1),d.map((b,M)=>({...b,color:ya[M%ya.length][0],accent:ya[M%ya.length][1]}))},start(d){return f||!m.isHost?!1:(f={stage:d},x.broadcast({t:"start",stage:d}),x.stopAnnouncing(),!0)},sendState(d,b,M){d-p<1e3/Uw||(p=d,x.broadcast({t:"s",g:Math.round(b*100)/100,d:Math.round(M.d*100)/100,v:Math.round(M.speed*100)/100,l:Math.round((M.lean||0)*1e3)/1e3,y:Math.round((M.yaw||0)*1e3)/1e3,b:M.boostT>0?1:0}))},sendFinish(d){x.broadcast({t:"fin",time:d})},leave(){x.leave()}};return m}var Ow=4e3,pg=60,Fw=5*6e4,Bw=5;async function mg({onChange:n,onStatus:e}={}){let t=new Map,i=new Map,s=null,r=!1,o=()=>performance.now(),a=()=>{r||n?.()},l=({seen:x,...m})=>({...m,age:Math.max(0,Math.round(o()-x))});async function c(x,m){let d=Xf(m),b=Number(m?.seq),M=Number(m?.age);if(!d||!Number.isSafeInteger(b)||!Number.isFinite(M)||M<0||M>Ic||s&&d.id===s.data.id)return;let _=t.get(d.id);if((_?_.seq>=b:t.size>=pg)||Math.abs(Date.now()-b)>Fw)return;let T={...d,seq:b,pub:String(m.pub||""),sig:String(m.sig||"")};if(!await _a(d.id,T.pub,Yf(T),T.sig)){i.set(x.id,(i.get(x.id)||0)+1);return}let E=t.get(d.id);E&&E.seq>=b||(t.set(d.id,{...T,seen:o()-M}),a())}let u=await Pc("annuaire",{maxPeers:12,onStatus:e,onPeer(x){x.send({t:"rooms",list:h()}),a()},onLeave(x){i.delete(x.id),a()},async onMessage(x,m){if(!((i.get(x.id)||0)>=Bw)){if(m.t==="rooms"&&Array.isArray(m.list))for(let d of m.list.slice(0,pg))await c(x,d);else if(m.t==="gone"&&typeof m.id=="string"){let d=t.get(m.id),b=Number(m.seq);d&&Number.isSafeInteger(b)&&b>d.seq&&await _a(d.id,d.pub,$f(d.id,b),String(m.sig||""))&&(t.delete(m.id),u.broadcast({t:"gone",id:m.id,seq:b,sig:m.sig}),a())}}}});function h(){let x=Array.from(t.values()).filter(m=>o()-m.seen<=Ic).map(l);return s?.signed&&x.push({...s.signed,age:0}),x}async function f(){if(!s)return;let x=s,m={...x.data,seq:Date.now(),pub:x.key.pub};m.sig=await x.key.sign(Yf(m)),s===x&&(x.signed=m)}let p=setInterval(async()=>{qf(t,o())&&a(),await f(),r||u.broadcast({t:"rooms",list:h()})},Ow);async function g(){if(!s)return;let x=Date.now()+1,m={t:"gone",id:s.data.id,seq:x,sig:await s.key.sign($f(s.data.id,x))};u.broadcast(m)}return{get peers(){return u.peers.size},list(){return qf(t,o()),Array.from(t.values()).sort((x,m)=>x.started-m.started||m.seen-x.seen)},async advertise(x,m){let d=Xf({...x,id:m.id});!d||s&&JSON.stringify(s.data)===JSON.stringify(d)||(s={key:m,data:d,signed:s?.signed||null},await f(),r||u.broadcast({t:"rooms",list:h()}))},async retire(){s&&(await g(),s=null)},close(){if(r)return;let x=()=>{r=!0,clearInterval(p),u.leave()};s?g().then(x,x):x()}}}var gg="polygon-rush-name",fi=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),zw=n=>"#"+n.toString(16).padStart(6,"0"),Lc="width:min(70vw,15em);font-size:2.6vmin;letter-spacing:0.04em;text-transform:none";async function xg(n,e){let t="";try{t=localStorage.getItem(gg)||""}catch{}let i=()=>{},s="Connexion au tracker\u2026",r=null;try{r=await mg({onChange:()=>i(),onStatus:a=>{s=a,i()}})}catch(a){return console.warn("Annuaire indisponible :",a),null}let o=()=>(i=()=>{},r.close(),null);for(;;){let a=await n({initial:1,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Multijoueur \xB7 ${fi(e.title)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-name-in">Pseudo</label>
    <div class="pr-seedbox"><input id="pr-name-in" class="pr-input" type="text" value="${fi(t)}" maxlength="14" autocomplete="off" spellcheck="false" data-nav data-name style="${Lc}"></div>
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
  <p class="pr-cmds pr-slide" style="--i:4">Liaison directe entre joueurs : votre adresse IP est visible des autres joueurs, du tracker (${fi(Gf.replace("wss://",""))}) et du serveur STUN de Cloudflare.</p>
</section>`,onMount(v){i=()=>{let w=v.querySelector("[data-rooms]");if(!w)return;let y=r.list(),S=r.peers,R=`${S} autre${S>1?"s":""} joueur${S>1?"s":""} dans le lobby`;v.querySelector("[data-status]").textContent=y.length?`${y.length} partie${y.length>1?"s":""} annonc\xE9e${y.length>1?"s":""} \xB7 ${R}`:S?`Aucune partie pour l'instant \xB7 ${R}`:s,w.innerHTML=y.map(N=>`<li style="display:flex;align-items:center;gap:.8em"><span style="flex:1;text-align:left">${N.locked?"\u{1F512} ":""}<b>${fi(N.name)}</b> <small>\xB7 ${fi(N.host)}</small></span><span>${N.players}/8</span>`+(N.started?'<span style="opacity:.6;min-width:7em;text-align:right">en course</span>':`<button type="button" class="pr-btn pr-btn-small" data-act="join" data-id="${fi(N.id)}" data-locked="${N.locked?1:0}" data-room="${fi(N.name)}">Rejoindre</button>`)+"</li>").join("")},i()},actions:{back:(v,w)=>w(null),create:(v,w)=>w({create:!0,name:v.closest(".pr-screen").querySelector("[data-name]").value}),join:(v,w)=>w({join:v.dataset.id,locked:v.dataset.locked==="1",room:v.dataset.room,name:v.closest(".pr-screen").querySelector("[data-name]").value})}});if(i=()=>{},!a)return o();let l=bo(a.name);t=l;try{localStorage.setItem(gg,l)}catch{}let c,u,h="",f=!1,p=null;if(a.create){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">Nouvelle partie</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-room-in">Nom de la partie</label>
    <div class="pr-seedbox"><input id="pr-room-in" class="pr-input" type="text" value="${fi("Partie de "+l)}" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-room style="${Lc}"></div>
  </div>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe (laisser vide pour une partie publique)</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${Lc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Ouvrir la partie</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
  <p class="pr-cmds pr-slide" style="--i:4">Une partie publique peut \xEAtre rejointe par tous ceux qui la voient dans le lobby.<br>Une partie priv\xE9e appara\xEEt avec un cadenas : il faut son mot de passe pour y entrer.</p>
</section>`,actions:{back:(w,y)=>y(null),ok:(w,y)=>{let S=w.closest(".pr-screen");y({room:S.querySelector("[data-room]").value,pass:S.querySelector("[data-pass]").value.trim()})}}});if(!v)continue;p=await fg(),c=p.id,u=v.room,h=v.pass,f=!0}else if(c=Wf(a.join),u=a.room,a.locked){let v=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">\u{1F512} ${fi(u)}</p>
  <div class="pr-seedrow pr-slide" style="--i:1">
    <label class="pr-lbl" for="pr-pass-in">Mot de passe de la partie</label>
    <div class="pr-seedbox"><input id="pr-pass-in" class="pr-input" type="text" value="" maxlength="24" autocomplete="off" spellcheck="false" data-nav data-pass style="${Lc}"></div>
  </div>
  <div class="pr-btns pr-slide" style="--i:2">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="ok">Entrer</button>
    <button type="button" class="pr-btn" data-nav data-act="back">Retour</button>
  </div>
</section>`,actions:{back:(w,y)=>y(null),ok:(w,y)=>y({pass:w.closest(".pr-screen").querySelector("[data-pass]").value.trim()})}});if(!v)continue;h=v.pass}let g=null,x=null,m="Connexion au tracker\u2026",d=1;try{g=await dg(c,l,{password:h,roomKey:p,onChange:()=>i(),onStatus:v=>{m=v,i()},onStart:v=>x?.({stage:v.stage})})}catch(v){console.warn("Partie indisponible :",v);continue}let b=performance.now(),M=e.stages.map((v,w)=>`<option value="${w+1}">${w+1} \xB7 ${fi(v.subtitle)}</option>`).join(""),_=()=>{p&&r.advertise({name:u,host:l,players:g.roster().length,locked:!!h,started:!!g.started,stage:d},p)},T=null,E=await n({initial:0,html:`
<section class="pr-screen pr-title">
  <p class="pr-tagline pr-slide" style="--i:0">${h?"\u{1F512} Partie priv\xE9e":"Partie publique"}</p>
  <div class="pr-logo pr-slide" style="--i:1;font-size:.45em"><span class="pr-logo-b">${fi(u)}</span></div>
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
</section>`,onMount(v,w){if(x=w,g.started){w({stage:g.started.stage});return}i=()=>{let y=v.querySelector("[data-list]");if(!y)return;let S=g.roster(),R=g.hostId;y.innerHTML=S.map(I=>`<li${I.me?' class="pr-me"':""}><span style="display:inline-block;width:.8em;height:.8em;border-radius:50%;background:${zw(I.color)};margin-right:.6em"></span><span>${fi(I.name)}${I.me?" (vous)":""}</span><b>${I.id===R?"h\xF4te":""}</b></li>`).join("");let N=S.length<2,F;N?f?F=h?"Partie priv\xE9e ouverte \xB7 donnez le mot de passe \xE0 vos amis":"Partie ouverte \xB7 visible dans le lobby":performance.now()-b>15e3?F=h?"Personne ici : mot de passe incorrect, ou la partie est ferm\xE9e":"Personne ici : la partie est peut-\xEAtre ferm\xE9e":F=m:F=`${S.length} joueurs`+(g.isHost?" \xB7 \xE0 vous de lancer la course":" \xB7 l'h\xF4te lance la course"),v.querySelector("[data-status]").textContent=F,d=Number(v.querySelector("[data-from]").value)||1;let L=v.querySelector("[data-start]");L.style.display=g.isHost?"":"none",L.disabled=N,L.style.opacity=N?"0.45":"",v.querySelector("[data-hostrow]").style.display=g.isHost?"":"none",_()},i(),v.querySelector("[data-from]").addEventListener("change",()=>i()),T=setInterval(()=>i(),3e3)},actions:{quit:(v,w)=>w(null),start:(v,w)=>{if(!g.isHost||g.roster().length<2)return;let y=Number(v.closest(".pr-screen").querySelector("[data-from]").value)||1;g.start(y)&&w({stage:y})}}});if(clearInterval(T),i=()=>{},x=null,!E){await r.retire(),g.leave();continue}return p?_():r.close(),{session:g,stage:E.stage,directory:p?r:null}}}var kw=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function Ws(n){let e=[],t=[],i=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,u,h,f=1,p=1,g=1,x=0,m=0]of n){let d=(b,M)=>{let _=M[b*3+1]>0,T=M[b*3+2];return[o+M[b*3]*c/2,a+M[b*3+1]*u/2,l+T*h/2-(_?T>0?x:-m:0)]};for(let[b,M,_,T]of s){let E=d(0,T),v=d(1,T),w=d(2,T),y=(v[1]-E[1])*(w[2]-E[2])-(v[2]-E[2])*(w[1]-E[1]),S=(v[2]-E[2])*(w[0]-E[0])-(v[0]-E[0])*(w[2]-E[2]),R=(v[0]-E[0])*(w[1]-E[1])-(v[1]-E[1])*(w[0]-E[0]),N=Math.hypot(y,S,R)||1,F=y*b+S*M+R*_<0?-1:1;y*=F/N,S*=F/N,R*=F/N;for(let L of[0,1,2,0,2,3])e.push(...d(L,T)),t.push(y,S,R),i.push(f,p,g)}}let r=new ht;return r.setAttribute("position",new rt(e,3)),r.setAttribute("normal",new rt(t,3)),r.setAttribute("color",new rt(i,3)),r}var Dc=[.12,.16,.22],Hw=[.07,.07,.08],Nc=[.95,.08,.06],Uc=[1,.95,.75],Vw=[.86,.87,.88],Gw=[.2,.21,.23];function Oc(n,e,t,i){let s=[];for(let r of i)for(let o of[-1,1])s.push([o*(n/2-.12),t,r,.3,t*2,t*2,...Hw]);return s}function Ww(n){let{len:e,w:t,h:i}=n,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...Nc],[t/2-.3,.75,s-.02,.4,.22,.08,...Nc],[-t/2+.3,.7,r+.02,.4,.2,.08,...Uc],[t/2-.3,.7,r+.02,.4,.2,.08,...Uc]];if(n.id==="car")return[Ws([[0,.62,0,t,.64,e,1,1,1,.35,.12],[0,1.4,-.33,t*.8,.08,e*.52-.95]]),Ws([[0,1.13,-.25,t*.86,.5,e*.52,...Dc,.55,.4],...Oc(t,e,.32,[e*.3,-e*.3]),...o])];if(n.id==="van")return[Ws([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1,1,1,1,.25,0]]),Ws([[0,1.75,r-.62,t*.92,.7,1,...Dc,.5,0],...Oc(t,e,.36,[e*.32,-e*.3]),...o])];if(n.id==="bus")return[Ws([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),Ws([[0,2.2,0,t*1.01,1.15,e*.985,...Dc],...Oc(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[Ws([[0,1.75,r-a/2,t,2.5,a,1,1,1,.3,0]]),Ws([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...Vw],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...Gw],[0,2.35,r-.36,t*.92,.85,.85,...Dc,.2,0],...Oc(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...Nc],[t/2-.3,1,s-.02,.4,.25,.08,...Nc],[-t/2+.3,.9,r+.02,.4,.2,.08,...Uc],[t/2-.3,.9,r+.02,.4,.2,.08,...Uc]])]}function vg(n,e){let t=new lt;t.name="traffic";let i=new Map(Cc.map(h=>[h.id,Ww(h)])),s=kw.map(h=>new Kn({color:h})),r=new Kn({vertexColors:!0}),o=[];for(let h=0;h<e;h++){let f=new lt,p=new et(i.get("car")[0],s[0]),g=new et(i.get("car")[1],r);p.castShadow=!0,g.castShadow=!0,f.add(p,g),f.visible=!1,t.add(f),o.push({g:f,body:p,detail:g,type:null,color:-1})}n.add(t);let a={};function l(h,f,p){for(let g=0;g<o.length;g++){let x=o[g],m=h.vehicles[g],d=m?m.s-p:1e9;if(!m||d<-120||d>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[b,M]=i.get(m.type.id);x.body.geometry=b,x.detail.geometry=M}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),At(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let h of o)h.g.visible=!1}function u(){n.remove(t);for(let[h,f]of i.values())h.dispose(),f.dispose();for(let h of s)h.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:u}}var kc={nitro:{id:"nitro",name:"Nitro",icon:"\u{1F680}"},rocket:{id:"rocket",name:"Fus\xE9e",icon:"\u{1F3AF}"},oil:{id:"oil",name:"Huile",icon:"\u{1F6E2}"},shield:{id:"shield",name:"Bouclier",icon:"\u{1F6E1}"},pulse:{id:"pulse",name:"Impulsion",icon:"\u26A1"}},yg=Object.keys(kc),Ma=5,Xw=650,qw=420,Yw=320,$w=1.25,Zw=3.5,Kw=2.6,jw=10,Jw=38,Qw=95,eT=7,tT=420,nT=9,_g=2.4,iT=1.1,sT=40,rT=1.3,oT=1.8,aT=.6,Mg=700,lT=3,cT=.68,uT={rocket:1.1,oil:.8},hT={rocket:.5,oil:.62},Fc=5,Kf=9,Bc=[.3,.65],fT=1.4,dT=24,pT=12,zc=(n,e)=>n-e*Math.round(n/e);function Hc(n){return 10+5*Math.max(0,n|0)}function mT(n,{solo:e=!1}={}){return e?{nitro:1,rocket:0,oil:0,shield:0,pulse:0}:{nitro:3,rocket:n<=0?0:1+3.5*n,oil:1+3*(1-n),shield:2,pulse:n>.5?2.4*n:0}}function bg({track:n,rng:e,startS:t=0,attacks:i=!0}){let s=n.length,r=!!n.open,o=n.raceEnd??s,a=r?Xw:s/Math.max(2,Math.round(s/qw)),l=t+Yw,c=new Map,u=[],h=[],f=[],p={},g=0,x=I=>l+I*a,m=I=>Math.floor((I-l)/a);function d(I,H){let W=ci(n,x(I),p).width;return(H-(Ma-1)/2)*W*.19}let b=I=>I>=0&&(!r||x(I)<o-150),M=new Set,_=(I,H,W)=>(I*Bc.length+H)*Fc+W,T=(I,H,W)=>x(I)+a*Bc[H]+W*Kf;function E(I,H){let W=ci(n,T(I,H,2),p).width;return(((I*7+H*3)%5+5)%5-2)*.15*W}function v(I,H){let W=H.length,z=W>1?(I.position-1)/(W-1):0,O=mT(z,{solo:!i}),V=0;for(let se of yg)V+=O[se];let q=e.next()*V;for(let se of yg)if(q-=O[se],q<0)return se;return"nitro"}function w(I,H,W){if(I.shieldT>0)return I.shieldT=0,f.push({type:"block",rider:I,by:H,item:W}),!1;let z=I.state;return W==="pulse"?(I.slowT=lT,z.speed*=.75):(z.stun=Math.max(z.stun||0,uT[W]),z.speed*=hT[W]),z.boostT=0,f.push({type:"hit",rider:I,by:H,item:W}),!0}function y(I,H,W,z){let O=null,V=z;for(let q of H){if(q===I||q.hidden||q.remote||q.finished)continue;let se=W*(r?q.state.s-I.state.s:zc(q.state.s-I.state.s,s));se>0&&se<V&&(O=q,V=se)}return O?{rider:O,gap:V}:null}function S(I,H){let W=I.item;if(!W||I.finished||(I.state.stun||0)>0)return!1;let z=I.state;if(I.item=null,I.itemT=0,W==="nitro")z.boostT=Math.max(z.boostT,Kw);else if(W==="shield")I.shieldT=jw;else if(W==="oil")u.length>=dT&&u.shift(),u.push({s:z.s-2.5,d:z.d,t:sT,owner:I,arm:aT});else if(W==="rocket"){h.length>=pT&&h.shift();let O=y(I,H,1,tT);h.push({s:z.s+2,d:z.d,v:Math.max(Qw,z.speed+Jw),t:eT,owner:I,target:O?O.rider:null})}else if(W==="pulse")for(let O of H){if(O===I||O.hidden||O.remote||O.finished)continue;let V=r?O.state.s-z.s:zc(O.state.s-z.s,s);V>0&&V<Mg&&w(O,I,"pulse")}return f.push({type:"use",rider:I,item:W}),!0}function R(I,H,W){if(I.itemT=(I.itemT||0)+W,I.itemT<I.itemWait)return;let z=I.itemT>I.itemWait+9,O=I.item,V=z;O==="nitro"?V=V||Math.abs(I.state.lean||0)<.25&&I.state.boostT<=0&&!I.state.airborne:O==="shield"?V=!0:O==="rocket"?V=V||!!y(I,H,1,220):O==="oil"?V=V||!!y(I,H,-1,35):O==="pulse"&&(V=V||!!y(I,H,1,Mg*.6)),V&&S(I,H)}function N(I,H,{vehicles:W=null,autoPlayer:z=!1}={}){f.length=0,g+=I;for(let O of H){if(O.remote||O.hidden)continue;let V=O.state;if(O.shieldT>0&&(O.shieldT=Math.max(0,O.shieldT-I)),O.slowT>0){O.slowT=Math.max(0,O.slowT-I);let se=O.stats.maxSpeed*cT;V.speed>se&&(V.speed+=(se-V.speed)*Math.min(1,I*4)),V.boostT=0}let q=O.itemPrevS??V.s;if(O.itemPrevS=V.s,!O.finished){if(O.isPlayer&&V.s>q){for(let se=Math.max(0,m(q)-1);se<=m(V.s);se++)if(b(se))for(let me=0;me<Bc.length;me++){let ie=T(se,me,0);if(!(V.s<ie||q>ie+Fc*Kf)&&!(Math.abs(V.d-E(se,me))>fT))for(let J=0;J<Fc;J++){let Q=ie+J*Kf,oe=_(se,me,J);Q>q&&Q<=V.s&&!M.has(oe)&&(M.add(oe),f.push({type:"shard",rider:O}))}}}if(!O.item&&V.s>q&&!V.airborne){for(let se=m(q)+1;se<=m(V.s);se++)if(b(se)){for(let me=0;me<Ma;me++){let ie=se*Ma+me;if(!((c.get(ie)||0)>g||Math.abs(V.d-d(se,me))>$w)){c.set(ie,g+Zw),O.item=v(O,H),O.itemT=0,O.itemWait=.8+e.next()*4,f.push({type:"pickup",rider:O,item:O.item,row:se,box:me});break}}if(O.item)break}}O.item&&(!O.isPlayer||z)&&R(O,H,I)}}for(let O=u.length-1;O>=0;O--){let V=u[O];V.t-=I,V.arm>0&&(V.arm-=I);let q=V.t<=0;if(!q)for(let se of H){if(se.remote||se.hidden||se.finished||se.state.airborne||se===V.owner&&V.arm>0)continue;let me=r?se.state.s-V.s:zc(se.state.s-V.s,s);if(Math.abs(me)<oT&&Math.abs(se.state.d-V.d)<rT){w(se,V.owner,"oil"),q=!0;break}}q&&u.splice(O,1)}for(let O=h.length-1;O>=0;O--){let V=h[O];V.t-=I;let q=V.s;V.s+=V.v*I;let se=V.target;if(se&&!se.finished&&!se.hidden){let J=se.state.d-V.d;V.d+=Math.sign(J)*Math.min(Math.abs(J),nT*I)}let me=V.t<=0,ie=null;if(!me){for(let J of H){if(J===V.owner||J.remote||J.hidden||J.finished)continue;let Q=r?J.state.s:V.s+zc(J.state.s-V.s,s);if(Q>q-_g&&Q<V.s+_g&&Math.abs(J.state.d-V.d)<iT){ie=J;break}}if(ie)w(ie,V.owner,"rocket"),me=!0;else if(W){for(let J of W)if(J.s>q-J.type.len/2&&J.s<V.s+J.type.len/2&&Math.abs(J.d-V.d)<J.type.w/2+.3){f.push({type:"boom",s:V.s,d:V.d}),me=!0;break}}}me&&h.splice(O,1)}if(c.size>400)for(let[O,V]of c)V<g&&c.delete(O)}function F(I,H=[],W=1300,z=60){H.length=0;for(let O=Math.max(0,m(I-z)+1);x(O)<=I+W;O++){if(!b(O)){if(r)break;continue}for(let V=0;V<Ma;V++){let q=O*Ma+V;(c.get(q)||0)>g||H.push({s:x(O),d:d(O,V),key:q})}}return H}function L(I,H=[],W=650,z=15){H.length=0;for(let O=Math.max(0,m(I-z)-1);x(O)<=I+W;O++){if(!b(O)){if(r)break;continue}for(let V=0;V<Bc.length;V++){let q=E(O,V);for(let se=0;se<Fc;se++){let me=T(O,V,se),ie=_(O,V,se);me<I-z||me>I+W||M.has(ie)||H.push({s:me,d:q,key:ie})}}}return H}return{shardsAround:L,shardS:T,shardD:E,update:N,use:S,boxesAround:F,hazards:u,rockets:h,events:f,spacing:a,rowS:x,boxD:d,strike:w}}var Sg=30,Eg=25,wg=24,Tg=12,Ag=[16761370,2746367,16732064,8257370];function So(n){let e=n.index?n.toNonIndexed():n;return e.computeVertexNormals(),e}function Rg(n){let e=new lt;e.name="items",n.add(e);let t={},i=[],s=So(new sa(.85,0)),r=So(new Gl(1.3,.09,4,8)),o=new Jt(.22,.6,16,6,1,!0);o.translate(0,7.6,0);let a=[];for(let O=0;O<Eg;O++){let V=Ag[O%Ag.length],q=new lt,se=new et(s,new ot({color:V,emissive:V,emissiveIntensity:.55,roughness:.25,metalness:.2,flatShading:!0})),me=new et(r,new ot({color:16777215,emissive:16777215,emissiveIntensity:.35,roughness:.4,flatShading:!0})),ie=new et(o,new zt({color:V,transparent:!0,opacity:.5,depthWrite:!1,fog:!1}));q.add(se,me,ie),q.visible=!1,e.add(q),a.push({g:q,crystal:se,ring:me,beam:ie,phase:O*1.7})}let l=So(new sa(.3,0));l.scale(.8,1.35,.8);let c=new ot({color:5111706,emissive:2285690,emissiveIntensity:.9,roughness:.3,flatShading:!0}),u=[],h=[];for(let O=0;O<Sg;O++){let V=new et(l,c);V.visible=!1,e.add(V),u.push(V)}let f=new zl(1.35,9);f.rotateX(-Math.PI/2);let p=new Vl(1.35,1.6,9);p.rotateX(-Math.PI/2);let g=new zt({color:460299,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),x=new zt({color:10112511,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),m=[];for(let O=0;O<wg;O++){let V=new et(f,g);V.add(new et(p,x)),V.visible=!1,V.rotation.order="YXZ",e.add(V),m.push(V)}let d=(()=>{let O=new Jt(.11,.11,.8,6);return O.rotateX(Math.PI/2),So(O)})(),b=(()=>{let O=new Yn(.11,.34,6);return O.rotateX(Math.PI/2),O.translate(0,0,.57),So(O)})(),M=(()=>{let O=new fn(.5,.03,.22);return O.translate(0,0,-.32),O})(),_=new ot({color:15921906,roughness:.4,flatShading:!0}),T=new ot({color:14885934,roughness:.4,flatShading:!0}),E=new zt({color:16756800}),v=(()=>{let O=new Yn(.09,.5,5);return O.rotateX(-Math.PI/2),O.translate(0,0,-.65),O})(),w=[];for(let O=0;O<Tg;O++){let V=new lt,q=new et(M,T);q.rotation.z=Math.PI/2,V.add(new et(d,_),new et(b,T),new et(M,T),q,new et(v,E)),V.visible=!1,V.rotation.order="YXZ",e.add(V),w.push(V)}let y=So(new $n(1,1)),S=new zt({color:5953791,transparent:!0,opacity:.16,blending:Di,depthWrite:!1,side:Dt}),R=new Ni({color:12579583,transparent:!0,opacity:.55,depthWrite:!1}),N=new Hl(y),F=new Map;function L(O){let V=F.get(O);return V||(V=new lt,V.add(new et(y,S),new is(N,R)),V.position.set(0,.75,.1),V.scale.set(.8,.85,1.25),V.name="shield",O.add(V),F.set(O,V)),V}function I(O,V,q,se,me,ie,J){q.boxesAround(me,i);for(let Q=0;Q<Eg;Q++){let oe=a[Q],he=i[Q];if(oe.g.visible=!!he,!he)continue;At(se,he.s,he.d,t);let _e=oe.phase+he.key%7;oe.g.position.set(t.x,t.y+1.3+Math.sin(V*2.4+_e)*.12,t.z),oe.crystal.rotation.y=V*2.2+_e;let Se=Math.min(2.6,Math.max(1,(he.s-me)/55));oe.crystal.scale.setScalar(Se),oe.ring.scale.setScalar(Se),oe.beam.scale.set(Se,1,Se),oe.beam.material.opacity=.2+.3*Math.min(1,(he.s-me)/120),oe.ring.rotation.set(Math.PI/2+Math.sin(V*1.3+_e)*.5,V*1.1+_e,0)}q.shardsAround(me,h);for(let Q=0;Q<Sg;Q++){let oe=u[Q],he=h[Q];oe.visible=!!he,he&&(At(se,he.s,he.d,t),oe.position.set(t.x,t.y+.8+Math.sin(V*3+he.key)*.08,t.z),oe.rotation.y=V*3+he.key,oe.scale.setScalar(Math.min(2.4,Math.max(1,(he.s-me)/45))))}for(let Q=0;Q<wg;Q++){let oe=m[Q],he=q.hazards[Q];oe.visible=!!he,he&&(At(se,he.s,he.d,t),oe.position.set(t.x,t.y+.04,t.z),oe.rotation.set(-Math.atan(t.slope||0),t.heading,0),oe.scale.setScalar(Math.min(1,(40-he.t)*4+.15)))}for(let Q=0;Q<Tg;Q++){let oe=w[Q],he=q.rockets[Q];if(oe.visible=!!he,!he)continue;At(se,he.s,he.d,t),oe.position.set(t.x,t.y+.7,t.z),oe.rotation.set(-Math.atan(t.slope||0),t.heading,V*9);let _e=Math.sin(t.heading),Se=Math.cos(t.heading);J?.emit("boost",t.x-_e*.9,t.y+.7,t.z-Se*.9,_e*he.v*.6,.2,Se*he.v*.6,1),J?.emit("smoke",t.x-_e*1.2,t.y+.7,t.z-Se*1.2,_e*he.v*.3,.6,Se*he.v*.3,1)}for(let Q of ie){let oe=(Q.rider.shieldT||0)>0;if(!oe&&!F.has(Q.model.group))continue;let he=L(Q.model.group);he.visible=oe,oe&&(he.rotation.y=V*1.6,he.children[0].visible=Q.rider.shieldT>2||Math.sin(V*22)>0)}}function H(){e.visible=!1}function W(){e.visible=!0}function z(){F.clear()}return{group:e,update:I,hide:H,show:W,reset:z}}var Cg="polygon-rush-v3-records",gT=new Set(["rally","rain"]);function Pg(){try{let n=globalThis.localStorage?.getItem(Cg),e=n?JSON.parse(n):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function Vc(n){try{return globalThis.localStorage?.setItem(Cg,JSON.stringify(n)),!0}catch{return!1}}function jf(n){if(!Number.isFinite(n))return"\u2013";let e=Math.floor(n/60),t=n-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function Ig(n){let e=Math.abs(n);return`${n<0?"\u2212":"+"}${e>=60?jf(e):e.toFixed(1).replace(".",'"')}`}function Lg(n,e,t){let i=n.splits[e]??null,s=i===null||t<i;return s&&(n.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:i,delta:i===null?null:t-i,record:s}}function Dg(n,e){let t=n.total,i=t===null||e<t;return i&&(n.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:i}}var Ng=gT;function Ug(n=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let i=document.createElement("div");i.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(i),n.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let p=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(p),!0}function u(f,p,g=9){l(),f.length&&(s=f.slice(0,3),r=p,o=a=g,e.textContent="",s.forEach((x,m)=>{let d=document.createElement("button");d.type="button",d.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let b=M=>String(M).replace(/[&<>]/g,_=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[_]);d.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${b(x.icon||"")} ${b(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${b(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${b(x.con)}</div>`,d.addEventListener("click",()=>c(m)),e.appendChild(d)}),e.style.display="flex",t.style.display="block")}function h(f){s.length&&(o-=f,i.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:u,pick:c,update:h,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var Gc=class extends as{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new vd(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Os.extractUrlBase(e);o=Os.resolveURL(c,this.path)}else o=Os.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ra(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kg){try{o[yt.KHR_BINARY_GLTF]=new yd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[yt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Td(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case yt.KHR_MATERIALS_UNLIT:o[h]=new nd;break;case yt.KHR_DRACO_MESH_COMPRESSION:o[h]=new _d(r,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:o[h]=new Md;break;case yt.KHR_MESH_QUANTIZATION:o[h]=new bd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function xT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},td=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new De(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],wn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ui(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zl(u),c.distance=h;break;case"spot":c=new uo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,cs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},nd=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,i){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},sd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}},rd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},od=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},ad=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ld=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},cd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],wn),Promise.all(r)}},ud=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],wn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}},fd=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},dd=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},md=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gd=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},xd=class{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},vd=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==di.TRIANGLES&&c.mode!==di.TRIANGLE_STRIP&&c.mode!==di.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let x=new je,m=new G,d=new on,b=new G(1,1,1),M=new En(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&b.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(m,d,b));for(let _ in l)if(_==="_COLOR_0"){let T=l[_];M.instanceColor=new lr(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Gt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},kg="glTF",ba=12,Og={JSON:1313821514,BIN:5130562},yd=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ba),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ba,r=new DataView(e,ba),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Og.JSON){let c=new Uint8Array(e,ba+o,a);this.content=i.decode(c)}else if(l===Og.BIN){let c=ba+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_d=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Ed[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Ed[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],p=Eo[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(p)},a,c,wn,f)})})}},Md=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bd=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},Wc=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,p=f*h,g=e*c,x=g-c,m=-2*p+3*f,d=p-f,b=1-m,M=d-f+h;for(let _=0;_!==a;_++){let T=o[x+_+a],E=o[x+_+l]*u,v=o[g+_+a],w=o[g+_]*u;r[_]=b*T+M*E+m*v+d*w}return r}},vT=new on,Sd=class extends Wc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return vT.fromArray(r).normalize().toArray(r),r}},di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fg={9728:jt,9729:Bn,9984:sf,9985:Yo,9986:Hr,9987:ri},Bg={33071:es,33648:jo,10497:Ln},Jf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ed={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yT={CUBICSPLINE:void 0,LINEAR:Jr,STEP:jr},Qf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _T(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),n.DefaultMaterial}function mr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function cs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function MT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function bT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ST(n){let e,t=n.extensions&&n.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ed(t.attributes):e=n.indices+":"+ed(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ed(n.targets[i]);return e}function ed(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function wd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ET(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wT=new je,Td=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new $l(this.options.manager):this.textureLoader=new Kl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return mr(r,a,s),cs(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Os.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Jf[s.type],a=Eo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new vt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Jf[s.type],c=Eo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==h){let d=Math.floor(f/p),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,M=t.cache.get(b);M||(x=new c(a,d*p,s.count*p/u),M=new ro(x,p/u),t.cache.add(b,M)),m=new ar(M,l,f%p/u,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new vt(x,l,g);if(s.sparse!==void 0){let d=Jf.SCALAR,b=Eo[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,T=new b(o[1],M,s.sparse.count*d),E=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,w=T.length;v<w;v++){let y=T[v];if(m.setX(y,E[v*l]),l>=2&&m.setY(y,E[v*l+1]),l>=3&&m.setZ(y,E[v*l+2]),l>=4&&m.setW(y,E[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Fg[f.magFilter]||Bn,u.minFilter=Fg[f.minFilter]||ri,u.wrapS=Bg[f.wrapS]||Ln,u.wrapT=Bg[f.wrapT]||Ln,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jt&&u.minFilter!==Bn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new hn(x);m.needsUpdate=!0,f(m)}),t.load(Os.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),cs(h,o),h.userData.mimeType=o.mimeType||ET(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[yt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new cr,Sn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ni,Sn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ot}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){let h=s[yt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],wn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dt);let u=r.alphaMode||Qf.OPAQUE;if(u===Qf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==zt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zt){let h=r.emissiveFactor;a.emissive=new De().setRGB(h[0],h[1],h[2],wn)}return r.emissiveTexture!==void 0&&o!==zt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),cs(h,r),t.associations.set(h,{materials:e}),r.extensions&&mr(s,h,r),h})}createUniqueName(e){let t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return zg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=ST(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=zg(new ht,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?_T(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p],m=o[p],d,b=c[p];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Nl(x,b):new et(x,b),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===di.TRIANGLE_STRIP?d.geometry=Nf(d.geometry,nc):m.mode===di.TRIANGLE_FAN&&(d.geometry=Nf(d.geometry,ca));else if(m.mode===di.LINES)d=new is(x,b);else if(m.mode===di.LINE_STRIP)d=new ao(x,b);else if(m.mode===di.LINE_LOOP)d=new Bl(x,b);else if(m.mode===di.POINTS)d=new Is(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&bT(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),cs(d,r),m.extensions&&mr(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&mr(s,h[0],r),h[0];let f=new lt;r.extensions&&mr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(Lm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Cs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),cs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ul(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],x=h[3],m=h[4],d=[];for(let b=0,M=f.length;b<M;b++){let _=f[b],T=p[b],E=g[b],v=x[b],w=m[b];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let y=i._createAnimationTracks(_,T,E,v,w);if(y)for(let S=0;S<y.length;S++)d.push(y[S])}return new Yl(r,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,wT)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ia:c.length>1?u=new lt:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),cs(u,r),r.extensions&&mr(i,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new lt;i.name&&(r.name=s.createUniqueName(i.name)),cs(r,i),i.extensions&&mr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof Sn||f instanceof hn)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Xs[r.path]===Xs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Xs[r.path]){case Xs.weights:c=ss;break;case Xs.rotation:c=rs;break;case Xs.position:case Xs.scale:c=os;break;default:i.itemSize===1?c=ss:c=os;break}let u=s.interpolation!==void 0?yT[s.interpolation]:Jr,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Xs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=wd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof rs?Sd:Wc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function TT(n,e,t){let i=e.attributes,s=new oi;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),a.normalized){let u=wd(Eo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new G,l=new G;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=wd(Eo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function zg(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Ed[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return xt.workingColorSpace!==wn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),cs(n,e),TT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?MT(n,e.targets,t):n})}var qs={hi:null,lo:null},AT=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL"],RT=[["legR","legL"],["thighR","thighL","shinR","shinL"]];async function Ad(n,e){let t=await n.loadAsync(e),i={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),i[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=AT.filter(a=>!i[a]);if(RT.some(a=>a.every(l=>i[l]))||r.push("jambes"),r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return i.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:i,mats:s,armLength:o>.1?o/1.01:1}}async function Hg(n="assets/"){if(qs.lo)return qs;let e=new Gc,t=()=>Ad(e,n+"bike_low.glb");return qs.lo=await Ad(e,n+"bike_mid.glb").catch(t),qs.hi=await Ad(e,n+"bike_hi.glb").catch(()=>qs.lo),qs}function Vg(n="lo"){return qs[n]||qs.lo}var Qt=0,gn=1,hs=2,wa=.32,Ea=-.7,Zg=.7,us=[0,-wa,-Ea],Kg=[0,-wa,-Zg],Gg=.58,CT=.4,Ys=Math.PI*2,ni=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,i,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=i[0]+r[0],p=i[1]+r[1],g=i[2]+r[2],x=c-o,m=u-a,d=h-l,b=f-o,M=p-a,_=g-l,T=m*_-d*M,E=d*b-x*_,v=x*M-m*b,w=(o+c+f)/3-(s[0]+r[0]),y=(a+u+p)/3-(s[1]+r[1]),S=(l+h+g)/3-(s[2]+r[2]),R=this.pos;T*w+E*y+v*S>=0?R.push(o,a,l,c,u,h,f,p,g):R.push(o,a,l,f,p,g,c,u,h)}quad(e,t,i,s,r){this.tri(e,t,i,r),this.tri(e,i,s,r)}build(){this.closeGroup();let e=new ht;e.setAttribute("position",new rt(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function PT(n){let e=0,t=0,i=0;for(let r of n)e+=r[0],t+=r[1],i+=r[2];let s=n.length;return[e/s,t/s,i/s]}function IT(n,e){return[(n[0]+e[0])/2,(n[1]+e[1])/2,(n[2]+e[2])/2]}function Wg(n,e,t,i){let s=e.length;for(let r=0;r<s;r++)n.tri(t,e[r],e[(r+1)%s],i)}function $s(n,e,t,i,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(PT);for(let c=0;c<o-1;c++){let u=e[c],h=e[c+1],f=IT(l[c],l[c+1]);for(let p=0;p<a;p++){let g=(p+1)%a;n.setSlot(r(c,p)),n.quad(u[p],u[g],h[g],h[p],f)}}n.setSlot(i),Wg(n,e[0],l[0],l[1]),n.setSlot(s),Wg(n,e[o-1],l[o-1],l[o-2])}function ti(n,e,t,i,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],u=Math.hypot(a,l,c)||1,h=[a/u,l/u,c/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],p=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*h[2]-p[2]*h[1],p[2]*h[0]-p[0]*h[2],p[0]*h[1]-p[1]*h[0]],m=(d,b)=>{let M=[];for(let _=0;_<r;_++){let T=Ys*_/r,E=Math.cos(T)*b,v=Math.sin(T)*b;M.push([d[0]+E*p[0]+v*x[0],d[1]+E*p[1]+v*x[1],d[2]+E*p[2]+v*x[2]])}return M};$s(n,[m(e,i),m(t,s)],o,o,o)}function xr(n,e,t,i){n.setSlot(i);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],e),n.tri(r[a[0]],r[a[2]],r[a[3]],e)}var qc=3,Ta=4;function LT(n,e,t,i,s,r,o,a,l){return[[0,e,n],[o,t,n],[a,i,n],[l,s,n],[0,r,n],[-l,s,n],[-a,i,n],[-o,t,n]]}function DT(){let n=new ni(us),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>LT(...i));$s(n,t,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?gn:Qt:o?i>=9?qc:Qt:a?i>=2&&i<=5?qc:i>=7&&i<=8?gn:Qt:i>=3&&i<=6?hs:gn},Qt,Qt);for(let i of[-1,1])ti(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,Ta),ti(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,gn),ti(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,gn);return ti(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,Ta),ti(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,Ta),ti(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,gn),xr(n,[0,.685,-.74],[.06,.012,.16],gn),n.build()}function NT(){let n=new ni(us),e=(t,i,s,r)=>[[0,i,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return $s(n,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],Qt,Qt,Qt),n.build()}function UT(){let n=new ni(us);return xr(n,[0,.985,-1.085],[.04,.02,.014],Qt),n.build()}function OT(){let n=new ni;return ti(n,[0,0,0],[0,0,-.45],.05,.004,6,Qt),n.build()}function FT(){let n=new ni(us);for(let e of[-1,1]){let t=[.062*e,.795,.905];n.setSlot(Qt);let i=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[t[0],t[1],t[2]-.2])}return n.build()}function BT(){let n=new ni(Kg);for(let i of[-1,1])ti(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,gn),ti(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,hs),xr(n,[.1*i,.33,.74],[.012,.05,.035],Ta);let e=.34,t=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,l)=>[a,.32+l*Math.cos(i),.7+l*Math.sin(i)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return $s(n,t,Qt,Qt,Qt),n.build()}function Xg(n,e){let t=new ni,i=14,s=(o,a)=>{let l=[];for(let c=0;c<i;c++){let u=Ys*c/i;l.push([o,a*Math.cos(u),a*Math.sin(u)])}return l};$s(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),gn,gn,gn);for(let o of[-1,1]){let a=o*(.62*n+.004),l=[a,0,0],c=[0,0,0],u=10;for(let h=0;h<u;h++){let f=Ys*h/u,p=Ys*(h+1)/u;t.setSlot(h%2?gn:hs),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],c)}if(e){let h=o*(.62*n+.012);t.setSlot(Ta);for(let f=0;f<u;f++){let p=Ys*f/u,g=Ys*(f+1)/u;t.quad([h,.09*Math.cos(p),.09*Math.sin(p)],[h,.16*Math.cos(p),.16*Math.sin(p)],[h,.16*Math.cos(g),.16*Math.sin(g)],[h,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function zT(){let n=new ni,e=[0,.11,.015],t=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let u=0;u<i;u++){let h=Ys*(u+.5)/i;c.push([e[0]+t[0]*l*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(h)])}r.push(c)}return $s(n,r,(o,a)=>{let l=Ys*(a+1)/i;return Math.sin(l)>.45&&(o===1||o===2)?gn:Math.abs(Math.cos(l))<.35?hs:Qt},gn,Qt),n.build()}function Sa(n,e,t,i){return[[e,n,0],[e*.55,n,t],[-e*.55,n,t],[-e,n,0],[-e*.55,n,-i],[e*.55,n,-i]]}function kT(){let n=new ni,e=[Sa(-.08,.13,.09,.1),Sa(.04,.145,.1,.1),Sa(.22,.185,.11,.11),Sa(.38,.205,.1,.1),Sa(.45,.09,.06,.07)];return $s(n,e,(t,i)=>t===0?hs:t===2&&(i===0||i===2||i===3||i===5)?qc:Qt,gn,gn),$s(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],hs,hs,hs),n.build()}function qg(n){let e=new ni,t=[.09*n,-.09,.5];return ti(e,[0,0,0],t,.058,.048,5,Qt),ti(e,t,[0,0,.93],.046,.038,5,Qt),xr(e,[0,0,.97],[.042,.04,.05],gn),xr(e,[0,.015,.02],[.052,.04,.05],qc),e.build()}function Yg(n){let e=new ni,t=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return ti(e,[0,0,0],t,.082,.066,6,Qt),ti(e,t,i,.062,.05,5,Qt),xr(e,[t[0]+.035*n,t[1]-.02,t[2]+.02],[.025,.05,.045],hs),xr(e,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],gn),e.build()}var Rd=null;function HT(){return Rd||(Rd={body:DT(),bubble:NT(),tail:UT(),flame:OT(),fork:BT(),headlight:FT(),wheelRear:Xg(.1,!1),wheelFront:Xg(.068,!0),helmet:zT(),torso:kT(),armR:qg(-1),armL:qg(1),legR:Yg(-1),legL:Yg(1)}),Rd}var mi=(n,e,t)=>n<e?e:n>t?t:n,jg=n=>mi(n,0,1),gr=n=>Number.isFinite(n)?n:0,Xc=n=>typeof n=="boolean"?n?1:0:jg(gr(n));function pi(n,e){return n.name=e,n}function $g(n,e,t,i){let s=new et(n,e);return s.name=t,s.castShadow=i,s.receiveShadow=!1,s}function Jg({color:n=14034984,accent:e=16761395,isPlayer:t=!1,detail:i="lo"}={}){let s=HT(),r=B=>new ot({flatShading:!0,side:Dt,...B}),o=r({color:new De(n),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new De(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,l,c,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=Vg(i),m=null;if(x){let B=(C,Z)=>{let k=x.mats[C].clone();return k.color.set(Z),k};m={Paint:B("Paint",n),Suit:B("Suit",n),Accent:B("Accent",e),Tail:x.mats.Tail.clone()}}function d(B,C,Z,k,j){if(!x)return $g(C,Z,B,k);let Y=x.parts[B].clone(!0);return Y.name=B,j&&Y.position.set(j[0],j[1],j[2]),Y.traverse(ue=>{ue.isMesh&&(ue.material.name==="Number"&&!t&&(ue.visible=!1),ue.material=m[ue.material.name]||ue.material,ue.castShadow=k)}),Y}let b=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),M=pi(new lt,"bike"),_=pi(new lt,"leanPivot"),T=pi(new lt,"pitchPivot");T.position.set(0,wa,Ea);let E=pi(new lt,"rearWheel");E.add(d("wheelRear",s.wheelRear,h,!0));let v=pi(new lt,"chassis"),w=d("body",s.body,h,!0,us),y=d("bubble",s.bubble,f,!1,us),S=d("tail",s.tail,g,!1,us),R=d("headlight",s.headlight,p,!1,us),N=$g(s.flame,b,"flame",!1);N.position.set(-.187,.435,-.02),N.rotation.x=-.42,N.scale.z=.02,N.visible=!1;let F=pi(new lt,"hips");F.position.set(0,Gg,CT);let L=pi(new lt,"torso"),I=pi(new lt,"head");I.position.set(0,.45,.01),I.add(d("helmet",s.helmet,h,!0)),L.add(d("torso",s.torso,h,!0),I);let H=d("armR",s.armR,h,!0),W=d("armL",s.armL,h,!0),z=pi(new lt,"legR");z.position.set(-.12,-.02,0);let O=!!(x&&x.parts.thighR&&x.parts.shinR&&x.parts.thighL&&x.parts.shinL);O||z.add(d("legR",s.legR,h,!0));let V=pi(new lt,"legL");V.position.set(.12,-.02,0),O||V.add(d("legL",s.legL,h,!0));let q=!!(x&&x.parts.forearmR&&x.parts.forearmL),se=q?d("forearmR",null,null,!0):null,me=q?d("forearmL",null,null,!0):null;F.add(L,H,W,z,V),q&&F.add(se,me);let ie=O?d("thighR",null,null,!0):null,J=O?d("shinR",null,null,!0):null,Q=O?d("thighL",null,null,!0):null,oe=O?d("shinL",null,null,!0):null;O&&F.add(ie,J,Q,oe),x&&x.parts.pelvis&&F.add(d("pelvis",null,null,!0)),v.add(w,y,S,R,N,F),x&&v.add(d("frame",null,null,!0,us));let he=pi(new lt,"steerPivot");he.position.set(0,0,Zg-Ea);let _e=d("fork",s.fork,h,!0,Kg),Se=pi(new lt,"frontWheel");if(Se.add(d("wheelFront",s.wheelFront,h,!0)),he.add(_e,Se),T.add(E,v,he),_.add(T),M.add(_),t){let B=new uo(16773590,60,60,.5,.6,2);B.name="headSpot",B.castShadow=!1,B.position.set(0,1,.9),B.target.position.set(0,.2,30),B.target.name="headSpotTarget",M.add(B,B.target)}let Ie={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ne=.2,Ee=.37,X=.02,We=[.25,.9-wa,.34-Ea],we=new G,Le=new G,Pe=new G,Ne=new G,pe=new G,P=new G(0,0,1),A=.3,ee=.31;function le(B,C,Z){we.set(ne*Z,Ee,X).applyEuler(L.rotation),Le.set(We[0]*Z-F.position.x,We[1]-F.position.y,We[2]-F.position.z);let k=Math.cos(-F.rotation.z),j=Math.sin(-F.rotation.z),Y=Le.x*k-Le.y*j,ue=Le.x*j+Le.y*k;Le.x=Y,Le.y=ue,B.position.copy(we),Pe.copy(Le).sub(we);let Te=Pe.length()||1;if(Pe.multiplyScalar(1/Te),!C){B.scale.z=Te/(x?x.armLength:1),B.quaternion.setFromUnitVectors(P,Pe);return}let ze=Math.max(1,Te/(A+ee-.004)),Oe=A*ze,Ae=ee*ze,ae=(Oe*Oe-Ae*Ae+Te*Te)/(2*Te),te=Math.sqrt(Math.max(0,Oe*Oe-ae*ae));Ne.set(.5*Z,-.87,0),Ne.addScaledVector(Pe,-Ne.dot(Pe)).normalize(),pe.copy(we).addScaledVector(Pe,ae).addScaledVector(Ne,te),B.scale.z=ze,B.quaternion.setFromUnitVectors(P,Ne.copy(pe).sub(we).normalize()),C.position.copy(pe),C.scale.z=ze,C.quaternion.setFromUnitVectors(P,Ne.copy(Le).sub(pe).normalize())}let xe=.47,fe=.44,Be=.12,Re=[.205,.495-wa,-.29-Ea],Ue=new G,Xe=new G,be=new G,Fe=new G,$e=new G,Qe=new je;function U(B,C,Z,k,j){$e.copy(C).normalize(),Fe.set(Z,k,j).addScaledVector($e,-(Z*$e.x+k*$e.y+j*$e.z)),Fe.lengthSq()<1e-8&&Fe.set(0,1,0),Fe.normalize(),be.crossVectors(Fe,$e),B.quaternion.setFromRotationMatrix(Qe.makeBasis(be,Fe,$e))}function K(B,C,Z,k){Ue.set(Be*Z,-.02,0),Le.set(Re[0]*Z-F.position.x,Re[1]-F.position.y,Re[2]-F.position.z);let j=Math.cos(-F.rotation.z),Y=Math.sin(-F.rotation.z),ue=Le.x*j-Le.y*Y,Te=Le.x*Y+Le.y*j;Le.x=ue,Le.y=Te,Pe.copy(Le).sub(Ue);let ze=Math.min(Pe.length()||1,xe+fe-.004);Pe.normalize();let Oe=(xe*xe-fe*fe+ze*ze)/(2*ze),Ae=Math.sqrt(Math.max(0,xe*xe-Oe*Oe));Ne.set(k*Z,.25,1),Ne.addScaledVector(Pe,-Ne.dot(Pe)).normalize(),Xe.copy(Ue).addScaledVector(Pe,Oe).addScaledVector(Ne,Ae),B.position.copy(Ue),U(B,Ne.copy(Xe).sub(Ue),0,1,0),C.position.copy(Xe),U(C,Ne.copy(Le).sub(Xe),0,.2,1)}function $(B,C){let Z=B||{},k=Number.isFinite(C)?mi(C,0,.1):1/60,j=1-Math.exp(-k*14),Y=1-Math.exp(-k*5);Ie.lean+=(mi(gr(Z.lean),-1.5,1.5)-Ie.lean)*j,Ie.steer+=(mi(gr(Z.steer),-1,1)-Ie.steer)*j,Ie.pitch+=(mi(gr(Z.pitch),-.9,.9)-Ie.pitch)*j,Ie.compress+=(mi(gr(Z.compress),-1,1)-Ie.compress)*j,Ie.sr+=(jg(gr(Z.speedRatio))-Ie.sr)*Y,Ie.brake+=(Xc(Z.braking)-Ie.brake)*Y,Ie.air+=(Xc(Z.airborne)-Ie.air)*Y,Ie.drift+=(Xc(Z.drift)-Ie.drift)*Y,Ie.boost+=(Xc(Z.boost)-Ie.boost)*Y;let ue=Ie.lean,Te=(Number.isFinite(Z.speed)?Z.speed:Ie.sr*80)*3.6;_.rotation.z=ue,T.rotation.x=-Ie.pitch,he.rotation.y=-.45*Ie.steer*mi(1-2*Ie.sr,0,1),v.position.y=-.07*Ie.compress;let ze=mi((Te-20)/100,0,1),Oe=ge=>ge*ge*(3-2*ge),Ae=Oe(mi(Math.abs(ue)/.52,0,1)),ae=Oe(mi((Math.abs(ue)-.17)/.6,0,1)),te=ue>=0?1:-1,de=Ae*(1-mi((Te-30)/30,0,1));F.position.x=-.17*Ae*te,F.position.y=Gg+.1*Ie.air,F.rotation.z=-.2*Ae*te,L.rotation.x=mi(.5+.62*ze-.2*Ie.brake-.25*Ie.air+.08*Ie.boost,.2,1.16),L.rotation.z=-.15*Ae*te,L.rotation.y=-.12*Ae*te,I.rotation.x=-.68*ze+.1*Ie.air,I.rotation.y=-.35*Ae*te,I.rotation.z=-.4*ue;let Me=.12*Ae+.5*ae+.3*de;if(z.rotation.y=te>0?-Me:0,V.rotation.y=te<0?Me:0,O){let ge=1.6*ae+.25*Ae+.8*de;K(ie,J,-1,.35+(te<0?ge:0)),K(Q,oe,1,.35+(te>0?ge:0))}le(H,se,-1),le(W,me,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*Ie.brake,N.visible=Ie.boost>.03,N.scale.z=.02+1.3*Ie.boost,b.emissiveIntensity=1.5+2*Ie.boost;let Ce=gr(Z.wheelSpin);E.rotation.x=Ce,Se.rotation.x=Ce}return $({},0),{group:M,update:$}}var Qg=Math.PI*2,sn=6e3,wo=2200,ex=60,tx=30,nx=60,VT=3,Aa=2e3,vr=170,Id=1.5,GT=13,ix=GT-Id,Cd=120,WT={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},XT=new De(16777215),qT=new De(8386303);function Vn(n,e){return n+(e-n)*Math.random()}function Ra(n,e,t){return n<e?e:n>t?t:n}function Zs(n,e=0){return Number.isFinite(n)?n:e}function YT(n){return Number.isFinite(n)?Ra(n,0,.1):0}function Pd(n,e){return n-e*Math.floor(n/e+.5)}function $T(){let n=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return n*e}var ZT=`
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
}`,KT=`
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
}`,jT=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,JT=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function sx(n,e){let t=e||{},i=Zs(t.rain,0),s=Zs(t.wind,0),r=new Float32Array(sn*3),o=new Float32Array(sn*3),a=new Float32Array(sn*3),l=new Float32Array(sn*3),c=new Float32Array(sn*3),u=new Float32Array(sn),h=new Float32Array(sn),f=new Float32Array(sn),p=new Float32Array(sn),g=new Float32Array(sn),x=new Float32Array(sn),m=new Float32Array(sn),d=new Float32Array(sn),b=new Float32Array(sn),M=new Float32Array(sn),_=new Float32Array(sn),T=new Uint8Array(sn),E=0,v=!1,w=new ht,y=new vt(r,3).setUsage(Oi),S=new vt(c,3).setUsage(Oi),R=new vt(u,1).setUsage(Oi),N=new vt(h,1).setUsage(Oi),F=new vt(f,1).setUsage(Oi);w.setAttribute("position",y),w.setAttribute("aColor",S),w.setAttribute("aSize",R),w.setAttribute("aAlpha",N),w.setAttribute("aMode",F);let L=new Mt({uniforms:{uScale:{value:700}},vertexShader:ZT,fragmentShader:KT,transparent:!0,depthWrite:!1,blending:aa,blendSrc:Kh,blendDst:Ko,blendEquation:Fn}),I=new Is(w,L);I.frustumCulled=!1,n.add(I);function H(U,K,$,B,C,Z,k,j=1){let Y=WT[U];if(!Y||!Number.isFinite(K)||!Number.isFinite($)||!Number.isFinite(B))return;let ue=Zs(C),Te=Zs(Z),ze=Zs(k),Oe=Math.min(sn,Math.max(0,Math.floor(Zs(j,1))));for(let Ae=0;Ae<Oe;Ae++){let ae=E;E=(E+1)%sn;let te,de,Me;if(Y.ring){let ge=(Oe>1?Ae/Oe:Math.random())*Qg+Math.random()*.2,He=Vn(3.5,5.5);te=Math.cos(ge)*He+ue*.3,Me=Math.sin(ge)*He+ze*.3,de=Vn(Y.lift[0],Y.lift[1])+Te*.3}else te=ue+Vn(-Y.spread,Y.spread),Me=ze+Vn(-Y.spread,Y.spread),de=Te+Vn(Y.lift[0],Y.lift[1]);let Ce=ae*3;r[Ce]=K+Vn(-.1,.1),r[Ce+1]=$,r[Ce+2]=B+Vn(-.1,.1),o[Ce]=te,o[Ce+1]=de,o[Ce+2]=Me,p[ae]=0,g[ae]=Y.life*Vn(.85,1.15),x[ae]=Y.drag,m[ae]=Y.grav,d[ae]=Y.s0*Vn(.85,1.2),b[ae]=Y.s1*Vn(.85,1.2),M[ae]=Y.a0,_[ae]=$,T[ae]=Y.bounce?1:0,f[ae]=Y.add?1:0,a[Ce]=Y.c0[0],a[Ce+1]=Y.c0[1],a[Ce+2]=Y.c0[2],l[Ce]=Y.c1[0],l[Ce+1]=Y.c1[1],l[Ce+2]=Y.c1[2]}Oe>0&&(v=!0)}function W(U){let K=!1;for(let $=0;$<sn;$++){if(g[$]<=0)continue;if(K=!0,p[$]+=U,p[$]>=g[$]){g[$]=0,h[$]=0,u[$]=0;continue}let B=$*3,C=Math.max(0,1-x[$]*U),Z=o[B]*C,k=o[B+1]*C-m[$]*U,j=o[B+2]*C,Y=r[B]+Z*U,ue=r[B+1]+k*U,Te=r[B+2]+j*U;T[$]&&ue<_[$]&&k<0&&(ue=_[$],k=-k*.35,Z*=.6,j*=.6,T[$]=0),o[B]=Z,o[B+1]=k,o[B+2]=j,r[B]=Y,r[B+1]=ue,r[B+2]=Te;let ze=p[$]/g[$];u[$]=d[$]+(b[$]-d[$])*ze,h[$]=M[$]*(1-ze*ze),c[B]=a[B]+(l[B]-a[B])*ze,c[B+1]=a[B+1]+(l[B+1]-a[B+1])*ze,c[B+2]=a[B+2]+(l[B+2]-a[B+2])*ze}return K}let z=null;if(i>0){let U=new ht,K=new Float32Array(wo*6),$=new vt(K,3).setUsage(Oi);U.setAttribute("position",$);let B=new Float32Array(wo*3),C=new Float32Array(wo),Z=new Float32Array(wo);for(let Y=0;Y<wo;Y++)B[Y*3]=(Math.random()-.5)*ex,B[Y*3+1]=-12+Math.random()*tx,B[Y*3+2]=(Math.random()-.5)*nx,C[Y]=Vn(22,30),Z[Y]=Vn(.8,1.2);let k=new Ni({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),j=new is(U,k);j.frustumCulled=!1,n.add(j),z={geo:U,mat:k,lines:j,attr:$,pa:K,head:B,fall:C,len:Z,windX:5.5*s,windZ:2*s}}function O(U,K,$){let B=z,C=B.pa,Z=B.head,k=B.windX,j=B.windZ,Y=K.x,ue=K.y+VT,Te=K.z;for(let ze=0;ze<wo;ze++){let Oe=ze*3,Ae=Y+Pd(Z[Oe]-Y,ex),ae=ue+Pd(Z[Oe+1]-ue,tx),te=Te+Pd(Z[Oe+2]-Te,nx),de=B.fall[ze],Me=k-$.x,Ce=-de-$.y,ge=j-$.z,He=.05*B.len[ze],Ve=ze*6;C[Ve]=Ae-Me*He,C[Ve+1]=ae-Ce*He,C[Ve+2]=te-ge*He,C[Ve+3]=Ae,C[Ve+4]=ae,C[Ve+5]=te,Z[Oe]=Ae+k*U,Z[Oe+1]=ae-de*U,Z[Oe+2]=te+j*U}B.attr.needsUpdate=!0}let V=new Float32Array(Aa*4*3),q=new Float32Array(Aa*4),se=new Uint16Array(Aa*6);for(let U=0;U<Aa;U++){let K=U*4;se.set([K,K+1,K+2,K,K+2,K+3],U*6)}let me=new ht,ie=new vt(V,3).setUsage(Oi),J=new vt(q,1).setUsage(Oi);me.setAttribute("position",ie),me.setAttribute("aAlpha",J),me.setIndex(new vt(se,1));let Q=new Mt({uniforms:{uColor:{value:new De(1315086)}},vertexShader:jT,fragmentShader:JT,transparent:!0,depthWrite:!1,side:Dt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),oe=new et(me,Q);oe.frustumCulled=!1,n.add(oe);let he=0,_e=1/0,Se=-1;function Ie(U,K,$,B,C,Z,k=.3,j=.5){if(![U,K,$,B,C,Z,k,j].every(Number.isFinite))return;let Y=B-U,ue=Z-$,Te=Math.hypot(Y,ue);if(Te<1e-4)return;let ze=k*.5,Oe=-ue/Te*ze,Ae=Y/Te*ze,ae=Ra(j,0,1),te=K+.03,de=C+.03,Me=he*4;he=(he+1)%Aa;let Ce=V,ge=Me*3;Ce[ge]=U+Oe,Ce[ge+1]=te,Ce[ge+2]=$+Ae,Ce[ge+3]=U-Oe,Ce[ge+4]=te,Ce[ge+5]=$-Ae,Ce[ge+6]=B-Oe,Ce[ge+7]=de,Ce[ge+8]=Z-Ae,Ce[ge+9]=B+Oe,Ce[ge+10]=de,Ce[ge+11]=Z+Ae,q[Me]=ae,q[Me+1]=ae,q[Me+2]=ae,q[Me+3]=ae,Me<_e&&(_e=Me),Me+3>Se&&(Se=Me+3)}function ne(){if(Se<0)return;let U=_e,K=Se-_e+1;ie.clearUpdateRanges(),ie.addUpdateRange(U*3,K*3),ie.needsUpdate=!0,J.clearUpdateRanges(),J.addUpdateRange(U,K),J.needsUpdate=!0,_e=1/0,Se=-1}let Ee=new lt;Ee.matrixAutoUpdate=!1,n.add(Ee);let X=new Float32Array(vr*6),We=new vt(X,3).setUsage(Oi),we=new ht;we.setAttribute("position",We);let Le=new Float32Array(vr),Pe=new Float32Array(vr),Ne=new Float32Array(vr),pe=new Float32Array(vr);for(let U=0;U<vr;U++){let K=Math.random()*Qg,$=Vn(.8,1.5);Le[U]=Math.cos(K)*$,Pe[U]=Math.sin(K)*$,Ne[U]=-Id-Math.random()*ix,pe[U]=Vn(.5,1.2)}let P=new Ni({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new is(we,P);A.frustumCulled=!1,A.visible=!1,Ee.add(A);let ee=0,le=0,xe=0,fe=0;function Be(U,K){xe+=(ee-xe)*(1-Math.exp(-6*U)),fe+=(le-fe)*(1-Math.exp(-8*U)),K.updateMatrixWorld(),Ee.matrix.copy(K.matrixWorld),Ee.matrixWorld.copy(K.matrixWorld);let $=Ra((xe-.55)/.45,0,1),B=Math.min(1,.55*$*$*(3-2*$)+.6*fe),C=Math.floor(B*vr);if(C<=0){A.visible=!1;return}A.visible=!0,we.setDrawRange(0,C*2),P.color.copy(XT).lerp(qT,fe),P.opacity=.05+.24*B;let Z=(60+110*B)*U,k=1.5+5*B,j=X;for(let Y=0;Y<C;Y++){let ue=Ne[Y]+Z;ue>-Id&&(ue-=ix),Ne[Y]=ue;let Te=-ue,ze=Le[Y]*Te*.9,Oe=Pe[Y]*Te*.5,Ae=k*pe[Y],ae=Y*6;j[ae]=ze,j[ae+1]=Oe,j[ae+2]=ue,j[ae+3]=ze,j[ae+4]=Oe,j[ae+5]=ue-Ae}We.needsUpdate=!0}let Re=new G,Ue=new G,Xe=!1,be=!1;function Fe(U,K){if(be)return;U=YT(U);let $=K.position;Xe?U>0&&(Ue.subVectors($,Re).divideScalar(U),Ue.lengthSq()>Cd*Cd&&Ue.setLength(Cd),Re.copy($)):(Re.copy($),Ue.set(0,0,0),Xe=!0);let B=Zs(K.fov,60);L.uniforms.uScale.value=$T()/(2*Math.tan(B*Math.PI/360)),(W(U)||v)&&(y.needsUpdate=!0,S.needsUpdate=!0,R.needsUpdate=!0,N.needsUpdate=!0,F.needsUpdate=!0,v=!1),z&&U>0&&O(U,$,Ue),Be(U,K),ne()}function $e(U,K){let $=Ra(Zs(U,0),0,1.5);ee=Ra(($-.7)/.3,0,1),le=K?1:0}function Qe(){be||(be=!0,n.remove(I,oe,Ee),z&&n.remove(z.lines),w.dispose(),L.dispose(),me.dispose(),Q.dispose(),we.dispose(),P.dispose(),z&&(z.geo.dispose(),z.mat.dispose()))}return{emit:H,addSkid:Ie,setSpeed:$e,update:Fe,dispose:Qe}}var Ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},QT=new Cs(-1,1,1,-1,0,1),Ld=class extends ht{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},eA=new Ld,ki=class{constructor(e){this._mesh=new et(eA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,QT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var To=class extends Dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ki(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ca=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yc=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new To(Ks),this.copyPass.material.blending=rn,this.clock=new jl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(o instanceof Ca?i=!0:o instanceof Yc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zc=class extends Dn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var rx={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ao=class n extends Dn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new $t(r,o,{type:dn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new $t(r,o,{type:dn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=rx;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ks;this.copyUniforms=Tn.clone(u.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Di,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ke(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ao.BlurDirectionX=new Ke(1,0);Ao.BlurDirectionY=new Ke(0,1);var ox={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Kc=class extends Dn{constructor(){super();let e=ox;this.uniforms=Tn.clone(e.uniforms),this.material=new Wl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ef?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===la?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Pa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

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
		}`},Ia={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},jc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ax(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=tA(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new G(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ps(s,e,e);return r.wrapS=Ln,r.wrapT=Ln,r.needsUpdate=!0,r}function tA(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var La={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Dd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Dd(n,e,t){let i=nA(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function nA(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new G(Math.cos(r),Math.sin(r),o))}return i}var Jc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,p=c-h,g=e-f,x=t-p,m,d;g>x?(m=1,d=0):(m=0,d=1);let b=g-m+u,M=x-d+u,_=g-1+2*u,T=x-1+2*u,E=l&255,v=c&255,w=this.perm[E+this.perm[v]]%12,y=this.perm[E+m+this.perm[v+d]]%12,S=this.perm[E+1+this.perm[v+1]]%12,R=.5-g*g-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[w],g,x));let N=.5-b*b-M*M;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[y],b,M));let F=.5-_*_-T*T;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[S],_,T)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),p=1/6,g=(u+h+f)*p,x=u-g,m=h-g,d=f-g,b=e-x,M=t-m,_=i-d,T,E,v,w,y,S;b>=M?M>=_?(T=1,E=0,v=0,w=1,y=1,S=0):b>=_?(T=1,E=0,v=0,w=1,y=0,S=1):(T=0,E=0,v=1,w=1,y=0,S=1):M<_?(T=0,E=0,v=1,w=0,y=1,S=1):b<_?(T=0,E=1,v=0,w=0,y=1,S=1):(T=0,E=1,v=0,w=1,y=1,S=0);let R=b-T+p,N=M-E+p,F=_-v+p,L=b-w+2*p,I=M-y+2*p,H=_-S+2*p,W=b-1+3*p,z=M-1+3*p,O=_-1+3*p,V=u&255,q=h&255,se=f&255,me=this.perm[V+this.perm[q+this.perm[se]]]%12,ie=this.perm[V+T+this.perm[q+E+this.perm[se+v]]]%12,J=this.perm[V+w+this.perm[q+y+this.perm[se+S]]]%12,Q=this.perm[V+1+this.perm[q+1+this.perm[se+1]]]%12,oe=.6-b*b-M*M-_*_;oe<0?s=0:(oe*=oe,s=oe*oe*this.dot3(this.grad3[me],b,M,_));let he=.6-R*R-N*N-F*F;he<0?r=0:(he*=he,r=he*he*this.dot3(this.grad3[ie],R,N,F));let _e=.6-L*L-I*I-H*H;_e<0?o=0:(_e*=_e,o=_e*_e*this.dot3(this.grad3[J],L,I,H));let Se=.6-W*W-z*z-O*O;return Se<0?a=0:(Se*=Se,a=Se*Se*this.dot3(this.grad3[Q],W,z,O)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,p,g,x=(e+t+i+s)*l,m=Math.floor(e+x),d=Math.floor(t+x),b=Math.floor(i+x),M=Math.floor(s+x),_=(m+d+b+M)*c,T=m-_,E=d-_,v=b-_,w=M-_,y=e-T,S=t-E,R=i-v,N=s-w,F=y>S?32:0,L=y>R?16:0,I=S>R?8:0,H=y>N?4:0,W=S>N?2:0,z=R>N?1:0,O=F+L+I+H+W+z,V=o[O][0]>=3?1:0,q=o[O][1]>=3?1:0,se=o[O][2]>=3?1:0,me=o[O][3]>=3?1:0,ie=o[O][0]>=2?1:0,J=o[O][1]>=2?1:0,Q=o[O][2]>=2?1:0,oe=o[O][3]>=2?1:0,he=o[O][0]>=1?1:0,_e=o[O][1]>=1?1:0,Se=o[O][2]>=1?1:0,Ie=o[O][3]>=1?1:0,ne=y-V+c,Ee=S-q+c,X=R-se+c,We=N-me+c,we=y-ie+2*c,Le=S-J+2*c,Pe=R-Q+2*c,Ne=N-oe+2*c,pe=y-he+3*c,P=S-_e+3*c,A=R-Se+3*c,ee=N-Ie+3*c,le=y-1+4*c,xe=S-1+4*c,fe=R-1+4*c,Be=N-1+4*c,Re=m&255,Ue=d&255,Xe=b&255,be=M&255,Fe=a[Re+a[Ue+a[Xe+a[be]]]]%32,$e=a[Re+V+a[Ue+q+a[Xe+se+a[be+me]]]]%32,Qe=a[Re+ie+a[Ue+J+a[Xe+Q+a[be+oe]]]]%32,U=a[Re+he+a[Ue+_e+a[Xe+Se+a[be+Ie]]]]%32,K=a[Re+1+a[Ue+1+a[Xe+1+a[be+1]]]]%32,$=.6-y*y-S*S-R*R-N*N;$<0?u=0:($*=$,u=$*$*this.dot4(r[Fe],y,S,R,N));let B=.6-ne*ne-Ee*Ee-X*X-We*We;B<0?h=0:(B*=B,h=B*B*this.dot4(r[$e],ne,Ee,X,We));let C=.6-we*we-Le*Le-Pe*Pe-Ne*Ne;C<0?f=0:(C*=C,f=C*C*this.dot4(r[Qe],we,Le,Pe,Ne));let Z=.6-pe*pe-P*P-A*A-ee*ee;Z<0?p=0:(Z*=Z,p=Z*Z*this.dot4(r[U],pe,P,A,ee));let k=.6-le*le-xe*xe-fe*fe-Be*Be;return k<0?g=0:(k*=k,g=k*k*this.dot4(r[K],le,xe,fe,Be)),27*(u+h+f+p+g)}};var Da=class n extends Dn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ax(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new $t(this.width,this.height,{type:dn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Mt({defines:Object.assign({},Pa.defines),uniforms:Tn.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,blending:rn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Xl,this.normalMaterial.blending=rn,this.pdMaterial=new Mt({defines:Object.assign({},La.defines),uniforms:Tn.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Mt({defines:Object.assign({},Ia.defines),uniforms:Tn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,blending:rn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Mt({uniforms:Tn.clone(Ks.uniforms),vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ec,blendDst:ho,blendEquation:Fn,blendSrcAlpha:Ql,blendDstAlpha:ho,blendEquationAlpha:Fn}),this.blendMaterial=new Mt({uniforms:Tn.clone(jc.uniforms),vertexShader:jc.vertexShader,fragmentShader:jc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:aa,blendSrc:ec,blendDst:ho,blendEquation:Fn,blendSrcAlpha:Ql,blendDstAlpha:ho,blendEquationAlpha:Fn}),this.fsQuad=new ki(null),this.originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new io,this.depthTexture.format=As,this.depthTexture.type=Ts,this.normalRenderTarget=new $t(this.width,this.height,{minFilter:jt,magFilter:jt,type:dn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Dd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=rn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=rn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=rn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=rn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=rn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Jc,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ps(s,e,e,zn,wi);return r.wrapS=Ln,r.wrapT=Ln,r.needsUpdate=!0,r}};Da.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var lx=58,iA=82,cx=94,sA=9,rA=20,ux=4.7,oA=1.95,aA=3,lA=4,cA=5,Qc=.6;function js(n,e,t){return n<e?e:n>t?t:n}function kt(n,e=0){return Number.isFinite(n)?n:e}function uA(n,e,t){return n+(e-n)*t}function Ro(n,e){return 1-Math.exp(-n*e)}function hA(n){return Number.isFinite(n)?js(n,0,.1):0}function hx(n){let e=new G,t=new G,i=new G,s=new G,r={x:1,z:0},o=!1,a=0,l=0,c=0,u=lx,h=ux,f=0,p=0,g=0;function x(T,E){let v=kt(T.x),w=kt(T.y),y=kt(T.z),S=kt(T.heading)+kt(T.yaw),R=Math.sin(S),N=Math.cos(S),F=-N,L=R;r.x=F,r.z=L;let I=T.airborne?1:0,H=E*E,W=ux-.3*H+.9*I,z=oA-.15*H+.7*I;h=W;let O=js(kt(T.slope),-.15,.15),V=js(kt(T.lean),-1.5,1.5),q=0;e.set(v-R*W+F*q,w+z-O*W,y-N*W+L*q),e.y<w+Qc&&(e.y=w+Qc),t.set(v+R*8.5,w+.55+O*4-1.5*I,y+N*8)}function m(T){return uA(lx,iA,Math.pow(T,1.6))}function d(T,E,v,w){n.position.set(i.x+r.x*E,Math.max(i.y+v,w),i.z+r.z*E),n.lookAt(s),n.rotateZ(T)}function b(T,E){if(T=hA(T),!o){M(E);return}a+=T;let v=js(kt(E.speedRatio),0,1);x(E,v);let w=kt(E.x)-f,y=kt(E.y)-p,S=kt(E.z)-g;w*w+y*y+S*S<400&&(i.x+=w,i.y+=y,i.z+=S,s.x+=w,s.y+=y,s.z+=S),f=kt(E.x),p=kt(E.y),g=kt(E.z),i.lerp(e,Ro(sA,T));let R=i.x-kt(E.x),N=i.z-kt(E.z),F=Math.hypot(R,N);F>.001&&(i.x=kt(E.x)+R/F*h,i.z=kt(E.z)+N/F*h),s.lerp(t,Ro(rA,T));let L=kt(E.y)+Qc;i.y<L&&(i.y=L),c*=Math.exp(-cA*T);let I=v*v*v*2.2,H=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,W=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,z=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,O=c*.35+I*.01,V=H*O,q=W*O,se=z*(c*.03+I*.002);l+=((E.boosting?1:0)-l)*Ro(lA,T);let me=m(v),ie=me+(cx-me)*l;u+=(ie-u)*Ro(aA,T),Math.abs(n.fov-u)>1e-4&&(n.fov=u,n.updateProjectionMatrix()),d(se,V,q,L)}function M(T){let E=js(kt(T.speedRatio),0,1);x(T,E),i.copy(e),s.copy(t),f=kt(T.x),p=kt(T.y),g=kt(T.z),o=!0,a=0,c=0,l=T.boosting?1:0,u=m(E)+(cx-m(E))*l,n.fov=u,n.updateProjectionMatrix(),d(0,0,0,kt(T.y)+Qc)}function _(T){c=js(c+kt(T),0,1.5)}return{update:b,shake:_,snap:M}}var fA=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,dA=`
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
}`;function fx(n,e,t,i,s={}){let r=i||{},o=kt(r.bloom,.5),a=null,l=null,c=null,u=null,h=0,f=0,p=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let E=n.getSize(new Ke),v=new $t(Math.max(1,E.x),Math.max(1,E.y),{type:dn,samples:4});if(a=new $c(n,v),a.setPixelRatio(m),a.addPass(new Zc(e,t)),s.ao&&!r.night){u=new Da(e,t,Math.max(1,E.x),Math.max(1,E.y)),u.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),u.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),u.blendIntensity=.6;let w=u.overrideVisibility.bind(u);u.overrideVisibility=()=>{w(),e.traverse(y=>{let S=Array.isArray(y.material)?y.material[0]:y.material;(y.isSprite||S&&(S.depthWrite===!1||S.blending===Di))&&(y.visible=!1)})},a.addPass(u)}l=new Ao(new Ke(512,512),o*.8,.75,.9),a.addPass(l),c=new To({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:fA,fragmentShader:dA}),a.addPass(c),a.addPass(new Kc)}catch(E){console.warn("Post-traitement indisponible, rendu direct :",E),a=null,l=null,c=null}function d(E,v){!Number.isFinite(E)||!Number.isFinite(v)||E<=0||v<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(m),n.setSize(E,v),a&&(a.setPixelRatio(m),a.setSize(E,v)))}function b(E,v){h=js(kt(E,0),0,1),f=v?1:0}function M(E){if(E=Number.isFinite(E)?js(E,0,.1):0,x+=E,p+=(h-p)*Ro(8,E),g+=(f-g)*Ro(8,E),c&&(c.uniforms.uSpeed.value=p,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(E);return}catch(v){console.warn("\xC9chec du post-traitement, rendu direct :",v),a=null}n.render(e,t)}function _(E){u&&(u.enabled=!!E)}function T(){u&&u.dispose&&u.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:M,setSize:d,setSpeed:b,dispose:T,setAO:_,get hasAO(){return!!u},get aoOn(){return!!u&&u.enabled}}}function dx(n){if(!Number.isFinite(n))return`--'--"---`;let e=Math.floor(n/60),t=Math.floor(n%60),i=Math.floor(n*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(i).padStart(3,"0")}`}var Ct=(n,e,t,i)=>{let s=document.createElement(n);return e&&(s.className=e),i!=null&&(s.textContent=i),t?.appendChild(s),s};function px(n){let e=Ct("div","h2-root",n);e.hidden=!0;let t=Ct("div","h2-pos",e),i=Ct("span","h2-pos-num",t,"1"),s=Ct("span","h2-pos-tot",t,"/8");Ct("span","h2-pos-lbl",t,"POS");let r=Ct("div","h2-right",e),o=Ct("div","h2-pill h2-lap",r),a=Ct("span","h2-lap-lbl",o,"TOUR"),l=Ct("span","h2-lap-num",o,"1"),c=Ct("span","h2-lap-tot",o,"/3"),u=Ct("div","h2-pill h2-time",r,`00'00"000`),h=Ct("div","h2-best",r,""),f=Ct("canvas","h2-map",e),p=220;f.width=f.height=p;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=p;let m=null,d=1,b=0,M=0,_=Ct("div","h2-dial",e),T=Ct("canvas","h2-dial-canvas",_),E=300;T.width=T.height=E;let v=T.getContext("2d"),w=Ct("div","h2-gear",_,"1"),y=Ct("div","h2-speed",_,"0");Ct("div","h2-unit",_,"km/h");let S=Ct("div","h2-boost",_),R=[],N=Ct("div","h2-item",e),F=Ct("span","h2-item-icon",N,""),L=Ct("span","h2-item-name",N,"");Ct("span","h2-item-key",N,"E");let I=null,H=null,W=["\u{1F680}","\u{1F3AF}","\u{1F6E2}","\u{1F6E1}","\u26A1"];function z(pe){let P=pe?pe.id:"";if(H===P)return;if(H=P,clearInterval(I),N.classList.toggle("h2-has",!!pe),!pe){F.textContent="",L.textContent="";return}let A=0;L.textContent="",F.textContent=W[0],I=setInterval(()=>{if(++A>6){clearInterval(I),F.textContent=pe.icon,L.textContent=pe.name.toUpperCase();return}F.textContent=W[A%W.length]},70)}let O=Ct("div","h2-xp",e),V=Ct("span","h2-xp-lbl",O,"NIV 1"),q=Ct("span","h2-xp-bar",O),se=Ct("span","h2-xp-fill",q),me="";function ie(pe){let P=pe.xpNeed>0,A=P?pe.level+":"+pe.xp+":"+pe.xpNeed:"";if(A===me)return;let ee=P&&me&&Number(me.split(":")[0])<pe.level;me=A,O.hidden=!P,P&&(V.textContent="NIV "+pe.level,se.style.transform=`scaleX(${Math.min(1,pe.xp/pe.xpNeed)})`,ee&&(O.classList.remove("h2-up"),O.offsetWidth,O.classList.add("h2-up")))}let J=Ct("div","h2-count",e,""),Q=Ct("div","h2-flash",e,""),oe=Ct("div","h2-wrong",e,"CONTRESENS");oe.hidden=!0;let he={},_e=(pe,P,A)=>{he[pe]!==A&&(he[pe]=A,P.textContent=A)},Se=Math.PI*.75,Ie=Math.PI*2.25,ne=-1;function Ee(pe){let P=Math.round(pe*120)/120;if(P===ne)return;ne=P;let A=E/2,ee=E*.44;v.clearRect(0,0,E,E),v.lineCap="butt",v.beginPath(),v.arc(A,A,ee*1.05,0,Math.PI*2),v.fillStyle="rgba(8, 10, 16, 0.42)",v.fill();let le=(Be,Re,Ue,Xe)=>{v.beginPath(),v.arc(A,A,ee,Be,Re),v.strokeStyle=Ue,v.lineWidth=Xe,v.stroke()},xe=Se+(Ie-Se)*.86;le(Se,xe,"rgba(255,255,255,0.28)",E*.05),le(xe,Ie,"rgba(226,40,48,0.55)",E*.05);let fe=Se+(Ie-Se)*Math.min(1,Math.max(0,P));le(Se,Math.min(fe,xe),"#ffffff",E*.05),fe>xe&&le(xe,fe,"#e8242e",E*.05);for(let Be=0;Be<=8;Be++){let Re=Se+(Ie-Se)*Be/8;v.beginPath(),v.moveTo(A+Math.cos(Re)*ee*.8,A+Math.sin(Re)*ee*.8),v.lineTo(A+Math.cos(Re)*ee*.9,A+Math.sin(Re)*ee*.9),v.strokeStyle=Be>=7?"#e8242e":"rgba(255,255,255,0.75)",v.lineWidth=3,v.stroke()}v.beginPath(),v.moveTo(A+Math.cos(fe)*ee*.3,A+Math.sin(fe)*ee*.3),v.lineTo(A+Math.cos(fe)*ee*.98,A+Math.sin(fe)*ee*.98),v.strokeStyle="#ffffff",v.lineWidth=4,v.stroke()}Ee(0);function X(pe){m=pe;let P=pe.bounds,A=P.maxX-P.minX,ee=P.maxZ-P.minZ;d=(p-36)/Math.max(A,ee),b=(p-A*d)/2-P.minX*d,M=(p-ee*d)/2-P.minZ*d;let le=x.getContext("2d");le.clearRect(0,0,p,p);let xe=()=>{le.beginPath(),pe.pts.forEach((fe,Be)=>{let Re=fe.x*d+b,Ue=fe.z*d+M;Be?le.lineTo(Re,Ue):le.moveTo(Re,Ue)}),pe.open||le.closePath()};le.lineJoin="round",xe(),le.strokeStyle="rgba(0,0,0,0.45)",le.lineWidth=9,le.stroke(),xe(),le.strokeStyle="#ffffff",le.lineWidth=5,le.stroke(),xe(),le.strokeStyle="rgba(20,24,34,0.9)",le.lineWidth=2,le.stroke(),g.clearRect(0,0,p,p),g.drawImage(x,0,0)}function We(pe){if(!m)return;g.clearRect(0,0,p,p),g.drawImage(x,0,0);let P=m.pts.length,A=(ee,le)=>{let xe=Math.floor((ee.s%m.length+m.length)%m.length/m.step);xe>=P&&(xe=P-1);let fe=m.pts[xe],Be=fe.x*d+b,Re=fe.z*d+M;g.beginPath(),g.arc(Be,Re,le?6:3.6,0,Math.PI*2),g.fillStyle=le?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let ee of pe)ee.isPlayer||A(ee,!1);for(let ee of pe)ee.isPlayer&&A(ee,!0)}let we=null;function Le(pe){_e("pos",i,String(pe.position)),_e("tot",s,"/"+pe.total),_e("lap",l,String(pe.lap)),_e("laps",c,"/"+pe.laps),_e("time",u,dx(pe.time)),_e("best",h,pe.bestLap?"MEILLEUR "+dx(pe.bestLap):""),_e("speed",y,String(Math.round(pe.speedKmh))),_e("gear",w,String(pe.gear||1)),Ee(pe.rpm??Math.min(1,pe.speedKmh/290));let P=pe.boostCharges|0,A=pe.boostT>0?1:0,ee=P+":"+A;if(he.boost!==ee){for(he.boost=ee;R.length<P+A;)R.push(Ct("span","h2-boost-dot",S));R.forEach((le,xe)=>{le.hidden=xe>=P+A,le.classList.toggle("h2-on",A&&xe===P)})}if(pe.countdown===null||pe.countdown===void 0)we===null&&he.count!==""&&(he.count="",J.textContent="",J.classList.remove("h2-show"));else if(pe.countdown>0){let le=String(Math.ceil(pe.countdown));he.count!==le&&(he.count=le,J.textContent=le,J.classList.remove("h2-show"),J.offsetWidth,J.classList.add("h2-show"))}else he.count!=="GO !"&&(he.count="GO !",J.textContent="GO !",J.classList.remove("h2-show"),J.offsetWidth,J.classList.add("h2-show"),clearTimeout(we),we=setTimeout(()=>{we=null},800));z(pe.item||null),ie(pe),N.classList.toggle("h2-shield",(pe.shieldT||0)>0),oe.hidden===!!pe.wrongWay&&(oe.hidden=!pe.wrongWay)}let Pe=null;function Ne(pe,P=900){Q.textContent=pe,Q.classList.remove("h2-show"),Q.offsetWidth,Q.classList.add("h2-show"),clearTimeout(Pe),Pe=setTimeout(()=>Q.classList.remove("h2-show"),P)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:Le,setTrack:X,updateMinimap:We,flash:Ne,setLapLabel(pe){a.textContent!==pe&&(a.textContent=pe)},dispose(){e.remove()}}}var MC=ur.maxSpeed*3.6;var mx=360;var gx=n=>(n<10?"0":"")+n;function Nd(n){if(n==null||!Number.isFinite(n))return"--:--.--";let e=Math.max(0,Math.floor(n*100+1e-6)),t=Math.floor(e/6e3),i=Math.floor(e/100)%60;return`${t}:${gx(i)}.${gx(e%100)}`}var bC=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${mx}" height="${mx}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var xx="ABCDEFGHJKMNPQRSTUVWXYZ23456789",vx=0;function Ud(){vx++;let n=Jn((Date.now()^Math.imul(vx,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=xx[n.int(0,xx.length-1)];return e}var mt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function yx(n){return n?typeof n=="string"?Fs[n]?.name||n:n.name||Fs[n.id]?.name||"":""}function pA(n){return n&&typeof n=="object"?n:hr.find(e=>e.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function Od(n){let e=new Map;for(let i of n||[]){let s=pA(i),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:i,n:s}of e.values())t+=`<span class="pr-own">${mt(i.icon)} ${mt(i.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function Fd(n){return(n||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${mt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function _x(n){let e=document.createElement("div");e.className="pr-menu pr-off",n.appendChild(e);let t=null,i=null;function s(M){try{t&&typeof t.play=="function"&&t.play(M)}catch{}}function r(M,_){let T=i;if(!T||!T.items.length)return;let E=T.items.length,v=(M%E+E)%E,w=v!==T.index;T.index=v,T.focused=!0;for(let y=0;y<E;y++)T.items[y].classList.toggle("pr-sel",y===v);try{T.items[v].focus({preventScroll:!0})}catch{}w&&_&&s("select")}function o(M){let _=i;_&&(i=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),_.resolve(M))}function a(M){return i=null,e.innerHTML=M.html,e.classList.remove("pr-off"),new Promise(_=>{i={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:M.actions||{},resolve:_},M.onMount&&M.onMount(e,o),r(M.initial||0,!1)})}e.addEventListener("click",M=>{let _=i;if(!_||!(M.target instanceof Element))return;let T=M.target.closest("[data-act]");if(!T||!e.contains(T)||T.disabled)return;let E=_.items.indexOf(T);E>=0&&E!==_.index&&r(E,!1);let v=_.actions[T.dataset.act];v&&v(T,o)}),e.addEventListener("mouseover",M=>{let _=i;if(!_||!(M.target instanceof Element))return;let T=M.target.closest("[data-nav]");if(!T)return;let E=_.items.indexOf(T);E>=0&&E!==_.index&&r(E,!0)}),window.addEventListener("keydown",M=>{let _=i;if(!_)return;let T=M.target,E=!!T&&T.tagName==="INPUT",v=M.key||"",w=v.toLowerCase();if(v==="ArrowUp"||!E&&(v==="ArrowLeft"||w==="z"||w==="q")){M.preventDefault(),r(_.index-1,!0);return}if(v==="ArrowDown"||!E&&(v==="ArrowRight"||w==="s"||w==="d")){M.preventDefault(),r(_.index+1,!0);return}if(E){if(v==="Enter"){M.preventDefault();let y=e.querySelector("[data-main]");y&&y.click()}return}if(v.length===1){let y=_.items.find(S=>S.dataset.key===v);y&&(M.preventDefault(),y.click())}});function l({dailySeed:M,meta:_,route:T=null,records:E=null}={}){let v=_||{};if(T)return f(T,v,E||{});let w=String(M||"RUSH-DAILY").toUpperCase(),y=Ud();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${mt(y)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${mt(w)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${v.runs??0}</b><span>runs</span></div>
    <div><b>${v.wins??0}</b><span>victoires</span></div>
    <div><b>${v.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet</p>
</section>`,actions:{dice:S=>{let R=S.closest(".pr-screen").querySelector("[data-seed]");R&&(R.value=Ud())},launch:(S,R)=>{let N=S.closest(".pr-screen").querySelector("[data-seed]"),F=(N?N.value:"").trim().toUpperCase();F||(F=Ud()),R({seed:F})},daily:(S,R)=>R({seed:w})}})}let c=M=>`${Math.floor(M/60)}'${String(Math.floor(M%60)).padStart(2,"0")}"`,u=M=>M==null?"":` <small>${M<0?"\u2212":"+"}${Math.abs(M).toFixed(1)} s</small>`;function h(M){if(!M)return"";let _='<li style="display:flex;justify-content:space-between;gap:1.5em">',T=M.splits.map((v,w)=>`${_}<span>${w+1} \xB7 ${mt(v.name.split(" \xB7 ")[0])}</span><b>${mt(c(v.time))}${u(v.delta)}${v.record&&v.best!==null?" \u2605":""}</b></li>`).join(""),E;return M.total?M.total.best===null?E=`Temps total <b>${mt(c(M.time))}</b> \xB7 premier chrono enregistr\xE9`:M.total.record?E=`Temps total <b>${mt(c(M.time))}</b> \xB7 <b>nouveau record</b>${u(M.total.delta)}`:E=`Temps total <b>${mt(c(M.time))}</b> \xB7 record ${mt(c(M.total.best))}${u(M.total.delta)}`:E=`Temps <b>${mt(c(M.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${E}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${T}</ul>`}function f(M,_,T){let E=Object.keys(T.splits||{}).length,v=(M.stages.reduce((y,S)=>y+S.length,0)/1e3).toFixed(0),w=M.stages.map((y,S)=>`<option value="${S+1}">${S+1} \xB7 ${mt(y.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${mt(M.title)} \xB7 ${mt(M.roads)} \xB7 ${v} km d'une traite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-from-in">D\xE9part</label>
    <div class="pr-seedbox">
      <select id="pr-from-in" class="pr-input" data-nav data-from style="width:min(86vw,34em);font-size:2.3vmin;letter-spacing:0.04em;text-align:left;text-transform:none">${w}</select>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Prendre la route</button>
    <button type="button" class="pr-btn" data-nav data-act="multi">Multijoueur<small>parties publiques et priv\xE9es</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${T.total?mt(c(T.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${T.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${E}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 E objet \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(y,S)=>{let R=y.closest(".pr-screen").querySelector("[data-from]");S({seed:"A18-A20",stage:Number(R?R.value:1)||1})},multi:(y,S)=>S({multi:!0})}})}function p({stage:M={},index:_=1,total:T=1,standings:E=[],weather:v}={}){let w=yx(v)||yx(M.weather),y=M.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${M.real?"Itin\xE9raire r\xE9el":`\xC9tape ${mt(_)}/${mt(T)}`}</div>
    <h2 class="pr-h2">${mt(M.name)}</h2>
    <p class="pr-sub">${mt(M.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${mt(w)}</dd></div>
      ${M.real?`<div><dt>Tron\xE7ons</dt><dd>${M.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${mt(M.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${mt(y)} ${y>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${mt(M.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Fd(E)}</ol>
  </div></div>
</section>`,actions:{go:(S,R)=>R(void 0)}})}function g({results:M=[],standings:_=[],stage:T={}}={}){let v=[...M].sort((w,y)=>(w.position??99)-(y.position??99)).map((w,y)=>{let S=oc[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${y}"><td class="pr-c-pos">${mt(w.position??"")}</td><td class="pr-c-name">${mt(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":Nd(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":Nd(w.bestLap)}</td><td class="pr-c-pts">${S>0?"+"+S:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${mt(T.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Fd(_)}</ol>
  </div></div>
</section>`,actions:{next:(w,y)=>y(void 0)}})}function x({choices:M=[],index:_=1,total:T=1,owned:E=[]}={}){let v=M.map((w,y)=>`<button type="button" class="pr-card pr-slide" style="--i:${y}" data-nav data-key="${y+1}" data-act="pick" data-id="${mt(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${y+1}</span><span class="pr-card-ico" aria-hidden="true">${mt(w.icon)}</span><span class="pr-card-name">${mt(w.name)}</span><span class="pr-card-tag">${mt(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${mt(w.pro)}</span><span class="pr-card-con">\u25BC ${mt(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${mt(_)}/${mt(T)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Od(E)}</div>
</section>`,actions:{pick:(w,y)=>y(w.dataset.id)}})}function m({standings:M=[],playerPosition:_,run:T={},meta:E}={}){let v=E||{},w=_??M.findIndex(R=>R.isPlayer)+1,y=w===1,S=T.real?y?"Victoire !":`${mt(w)}e \xE0 l'arriv\xE9e`:y?"Champion !":`${mt(w)}e au championnat`;return a({initial:T.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${y?" pr-gold":""}">${S}</div>
    <ol class="pr-slist pr-slist-big">${Fd(M)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${T.real?`<h3 class="pr-h3">${mt(T.stages[0].name)}</h3>
    <p class="pr-sub">${mt(T.stages[0].subtitle)}</p>${h(T.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${Od(T.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Od(T.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${mt(T.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${T.real?"":`<p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${T.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:R=>{let N="Copier la seed",F;try{F=navigator.clipboard.writeText(String(T.seed??""))}catch(I){F=Promise.reject(I)}let L=I=>{R.textContent=I,setTimeout(()=>{R.isConnected&&(R.textContent=N)},1500)};F.then(()=>L("Copi\xE9e !"),()=>L("Copie impossible"))},again:(R,N)=>N(void 0)}})}function d(M){t=M||null}function b(){i=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:p,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:b,setAudio:d,mount:a}}var Mx=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,bx=.8,Sx=.56,mA=.5,Bd=6,gA=.12,xA=25,Na=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Nn=n=>440*Math.pow(2,(n-69)/12),eu=[{chord:[45,48,52],lead:[[0,69,2],[3,72,1],[4,76,2],[8,74,1],[10,72,1],[12,69,2],[14,71,2]]},{chord:[41,45,48],lead:[[0,72,3],[4,69,1],[6,72,1],[8,77,3],[12,76,2],[14,72,2]]},{chord:[43,47,50],lead:[[0,74,3],[4,71,1],[6,74,1],[8,79,3],[12,77,1],[13,76,1],[14,74,2]]},{chord:[40,43,47],lead:[[0,76,4],[4,71,2],[8,67,2],[10,71,2],[12,76,1],[13,74,1],[14,71,2]]}],Ex=[{chord:[38,41,45],lead:[[0,77,2],[2,76,1],[3,74,1],[4,69,2],[8,74,2],[10,77,2],[12,81,4]]},{chord:[43,47,50],lead:[[0,79,2],[2,77,1],[3,76,1],[4,74,2],[8,71,2],[10,74,2],[12,79,4]]},{chord:[48,52,55],lead:[[0,76,2],[2,79,2],[4,84,3],[8,83,1],[9,79,1],[10,76,2],[12,79,2],[14,76,2]]},{chord:[40,44,47],lead:[[0,76,2],[2,80,2],[4,83,4],[8,80,2],[10,76,2],[12,71,2],[14,68,2]]}],vA=eu.map(n=>({chord:n.chord,lead:[]})),yA=[{chord:[48,52,55],lead:[[0,76,4],[8,79,4]]},{chord:[45,48,52],lead:[[0,81,4],[8,76,4]]},{chord:[41,45,48],lead:[[0,77,4],[8,81,2],[12,84,4]]},{chord:[43,47,50],lead:[[0,83,4],[8,79,2],[12,74,4]]}],zd={race:{bpm:152,bars:[...vA,...eu,...eu,...Ex,...eu,...Ex],loopFrom:4,style:"race"},menu:{bpm:104,bars:yA,loopFrom:0,style:"menu"}};function wx(){let n=null,e=!1,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=null,u=null,h=null,f=!1,p=null,g=null,x=null,m=0,d=0,b=-1,M=0,_=0,T=0;function E(ne){let X=new Float32Array(32),We=new Float32Array(32);for(let we=1;we<32;we++)X[we]=2/(we*Math.PI)*Math.sin(we*Math.PI*ne);return n.createPeriodicWave(X,We,{disableNormalization:!1})}function v(ne){let X=new Float32Array(2048);for(let we=0;we<2048;we++)X[we]=Math.round((we*2/2047-1)*ne)/ne;let We=n.createWaveShaper();return We.curve=X,We}function w(ne,Ee){let X=n.createGain();return X.gain.value=ne,Ee&&X.connect(Ee),X}function y(ne,Ee,X,We){let we=n.createBiquadFilter();return we.type=ne,we.frequency.value=Ee,we.Q.value=X,We&&we.connect(We),we}function S(ne){let Ee=n.createBufferSource();return Ee.buffer=o,Ee.loop=!0,Ee.connect(ne),Ee.start(),Ee}function R(ne,Ee,X=.05){try{ne.setTargetAtTime(Ee,n.currentTime,X)}catch{}}function N(ne,Ee,X,We,we,Le,{slide:Pe=0,attack:Ne=.004,vibrato:pe=0}={}){let P=n.createOscillator();if(a[we]?P.setPeriodicWave(a[we]):P.type=we,P.frequency.setValueAtTime(Ee,ne),Pe&&P.frequency.exponentialRampToValueAtTime(Math.max(20,Ee*Pe),ne+X),pe){let ee=n.createOscillator(),le=w(Ee*.012);ee.frequency.value=6,ee.connect(le),le.connect(P.frequency),ee.start(ne+Math.min(.12,X*.5)),ee.stop(ne+X+.05)}let A=w(0,Le);A.gain.setValueAtTime(0,ne),A.gain.linearRampToValueAtTime(We,ne+Ne),A.gain.setValueAtTime(We,ne+Math.max(Ne,X*.7)),A.gain.linearRampToValueAtTime(0,ne+X),P.connect(A),P.start(ne),P.stop(ne+X+.02)}function F(ne,Ee,X,We,we,Le,Pe,Ne=0){let pe=n.createBufferSource();pe.buffer=o,pe.loopStart=Math.random()*1.5;let P=y(We,we,Le);Ne&&P.frequency.exponentialRampToValueAtTime(Ne,ne+Ee);let A=w(0,Pe);A.gain.setValueAtTime(X,ne),A.gain.exponentialRampToValueAtTime(8e-4,ne+Ee),pe.connect(P),P.connect(A),pe.start(ne,Math.random()*1.5),pe.stop(ne+Ee+.02)}function L(){t=w(f?0:bx,n.destination);let ne=n.createDynamicsCompressor();ne.threshold.value=-14,ne.ratio.value=4,ne.attack.value=.004,ne.release.value=.18,ne.connect(t),i=v(24),i.connect(ne),s=w(mA,i),r=w(0,i),a={p12:E(.125),p25:E(.25),p50:E(.5)};let Ee=n.sampleRate*2;o=n.createBuffer(1,Ee,n.sampleRate);let X=o.getChannelData(0);for(let le=0;le<Ee;le++)X[le]=Math.random()*2-1;let We=w(0,ne),we=y("lowpass",300,.5,We),Le=y("lowpass",1400,.5,we),Pe=(le,xe)=>{let fe=n.createOscillator();fe.type=le,fe.frequency.value=60;let Be=w(xe,Le);return fe.connect(Be),fe.start(),fe};l={out:We,lp:we,a:Pe("triangle",.55),b:Pe("sawtooth",.1),sub:Pe("triangle",.7)},l.b.detune.value=6;let Ne=w(0,ne),pe=y("lowpass",400,.4,Ne);S(pe),c={out:Ne,f:pe};let P=w(0,ne),A=y("bandpass",900,1.5,P);S(A),u={out:P,f:A};let ee=w(0,i);S(y("highpass",3500,.5,ee)),h={out:ee},e=!0}let I=(ne,Ee,X,We,we="p25")=>Ee.forEach((Le,Pe)=>N(ne+Pe*X,Nn(Le),X*1.6,We,we,s)),H={beep:ne=>N(ne,Nn(69),.14,.3,"p50",s),go:ne=>{N(ne,Nn(81),.42,.34,"p50",s),N(ne,Nn(88),.42,.18,"p25",s)},select:ne=>N(ne,Nn(84),.05,.2,"p25",s),confirm:ne=>I(ne,[76,83,88],.045,.24),pick:ne=>I(ne,[72,76,79,84],.04,.24,"p12"),lap:ne=>I(ne,[79,84,88,91],.06,.26),near:ne=>{N(ne,900,.16,.2,"p12",s,{slide:2.2})},boost:ne=>{N(ne,180,.5,.3,"sawtooth",s,{slide:5}),F(ne,.5,.35,"bandpass",500,1.2,s,5e3)},pad:ne=>{N(ne,330,.22,.26,"p25",s,{slide:2.5})},jump:ne=>N(ne,260,.2,.26,"p50",s,{slide:2.2}),land:ne=>{N(ne,120,.18,.5,"triangle",s,{slide:.35}),F(ne,.12,.3,"lowpass",900,.7,s)},hit:ne=>{F(ne,.28,.6,"lowpass",2400,.8,s,200),N(ne,160,.25,.4,"p50",s,{slide:.3})},win:ne=>{I(ne,[72,76,79,84,79,84,88],.09,.26),I(ne,[48,55,60],.27,.3,"triangle")},lose:ne=>I(ne,[67,64,60,55],.16,.24,"p50"),shard:ne=>N(ne,Nn(91),.07,.12,"p25",s),level:ne=>{I(ne,[72,76,79,84,88],.05,.24),N(ne,Nn(48),.3,.26,"triangle",s)},item:ne=>I(ne,[76,79,83,88,91],.035,.22,"p12"),rocket:ne=>{N(ne,220,.35,.24,"sawtooth",s,{slide:3.5}),F(ne,.35,.22,"bandpass",1800,1,s,600)},boom:ne=>{F(ne,.5,.5,"lowpass",1600,.7,s,120),N(ne,110,.4,.4,"triangle",s,{slide:.3})},oil:ne=>{N(ne,320,.22,.24,"p50",s,{slide:.4})},shield:ne=>{I(ne,[64,71,76],.05,.22,"p50"),N(ne+.15,Nn(88),.25,.12,"p25",s)},zap:ne=>{N(ne,1300,.3,.22,"p12",s,{slide:.15}),F(ne,.2,.18,"bandpass",2400,2,s,500)}};function W(ne,Ee){N(ne,150,.16,Ee,"triangle",r,{slide:.28,attack:.001})}function z(ne,Ee){F(ne,.13,Ee,"bandpass",1900,.7,r),N(ne,200,.06,Ee*.5,"triangle",r,{slide:.6,attack:.001})}function O(ne,Ee){F(ne,.035,Ee,"highpass",7500,.8,r)}function V(ne,Ee,X){let We=60/ne.bpm/4,we=ne.bars.length*16,Le=Ee<we?Ee:ne.loopFrom*16+(Ee-we)%(we-ne.loopFrom*16),Pe=ne.bars[Math.floor(Le/16)],Ne=Le%16,[pe,P,A]=Pe.chord;ne.style==="race"?(Ne%2===0&&N(X,Nn(pe+(Ne%4===2?12:0)),We*1.7,.34,"triangle",r),N(X,Nn([pe,P,A,pe+12][Ne%4]+24),We*.9,.07,"p12",r),(Ne===0||Ne===8||Ne===10)&&W(X,.5),(Ne===4||Ne===12)&&z(X,.3),Ne%2===0&&O(X,Ne%4===2?.13:.07),Ne===15&&Math.floor(Le/16)%4===3&&z(X,.22)):((Ne===0||Ne===8)&&N(X,Nn(pe),We*6,.3,"triangle",r),(Ne===6||Ne===14)&&N(X,Nn(A),We*1.8,.22,"triangle",r),Ne%2===0&&N(X,Nn([pe,A,P+12,A][Ne/2%4]+12),We*1.8,.07,"p12",r),Ne===0&&W(X,.3),(Ne===4||Ne===12)&&O(X,.08));for(let[ee,le,xe]of Pe.lead)ee===Ne&&(N(X,Nn(le),We*xe*.92,ne.style==="race"?.15:.12,"p25",r,{vibrato:xe>=3?1:0}),ne.style==="race"&&xe>=2&&N(X+We*1.5,Nn(le),We*.8,.05,"p25",r))}function q(){if(!e||!p)return;let ne=60/p.bpm/4;for(m<n.currentTime&&(m=n.currentTime+.03);m<n.currentTime+gA;)V(p,d,m),d++,m+=ne}function se(){if(Mx)try{if(n||(n=new Mx,L()),n.state==="suspended"&&n.resume(),g){let ne=g;g=null,_e(ne)}}catch{e=!1}}function me(ne,Ee){if(!e)return;let X=Na(ne),We=Na(Ee),we=n.currentTime,Le=Math.min(Bd-1,Math.floor(X*Bd)),Pe=X*Bd-Le,Ne=52+16*Le+118*(.3+.7*Pe);R(l.a.frequency,Ne,.03),R(l.b.frequency,Ne,.03),R(l.sub.frequency,Ne/2,.03),R(l.lp.frequency,190+520*We*(.4+.6*Pe)+180*X,.06),b>=0&&Le!==b&&(M=we+.09),b=Le,R(l.out.gain,we<M?.03:.06+.07*We,.02),We>_&&(_=We),_>.7&&We<.2&&X>.35&&we>T&&(F(we,.06,.12,"lowpass",450,.7,s),N(we,80,.06,.1,"triangle",s,{slide:.5,attack:.002}),T=we+.09+Math.random()*.22,Math.random()<.3&&(_=0)),We>.5&&(T=we+.1)}function ie(ne){if(!e)return;let Ee=Na(ne);R(c.out.gain,.1*Ee*Ee,.15),R(c.f.frequency,300+600*Ee,.15)}function J(ne){if(!e)return;let Ee=Na(ne);R(u.out.gain,.09*Ee,.05),R(u.f.frequency,700+400*Ee,.06)}function Q(ne){e&&R(h.out.gain,.05*Na(ne),.3)}function oe(ne){!e||!Object.prototype.hasOwnProperty.call(H,ne)||H[ne](n.currentTime+.01)}function he(ne){f=!!ne,e&&R(t.gain,f?0:bx,.015)}function _e(ne="race"){let Ee=zd[ne]||zd.race;if(!e){g=ne;return}p!==Ee&&(p=Ee,d=0,m=n.currentTime+.06),R(r.gain,Sx,.08),x||(x=setInterval(q,xA)),q()}function Se(){g=null,p=null,x&&(clearInterval(x),x=null),e&&R(r.gain,0,.06)}function Ie(ne,Ee,X=.05){let We=zd[ne];if(!e||!We)return 0;r.gain.value=Sx;let we=60/We.bpm/4;for(let Le=0;Le<Ee;Le++)V(We,Le,X+Le*we);return Ee*we}return{resume:se,setEngine:me,setWind:ie,setSkid:J,setRain:Q,play:oe,setMuted:he,startMusic:_e,stopMusic:Se,preview:Ie,get track(){return p?p.style:null}}}var kd=1/120,Rn=new URLSearchParams(location.search),_A=document.getElementById("game"),Ci=new Dl({canvas:_A,antialias:!0,powerPreference:"high-performance"});Ci.setPixelRatio(Math.min(window.devicePixelRatio,2));Ci.shadowMap.enabled=!0;Ci.shadowMap.type=Jl;Ci.toneMapping=la;Ci.toneMappingExposure=1.05;Ci.outputColorSpace=Ot;var qt=new ta,Un=new Kt(70,1,.3,6e3);qt.add(Un);var Wi=hx(Un),Dx=document.getElementById("ui"),Yt=px(Dx),Vi=_x(Dx),Et=wx();Vi.setAudio?.(Et);var su=new Set,xn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var MA=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"],bA=["KeyE","KeyF","ControlLeft","ControlRight","Enter"],ka=!1,Tx=!1;addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement)){if(su.add(n.code),Bt==="race"&&MA.includes(n.code)&&n.preventDefault(),Bt==="race"&&!n.repeat&&bA.includes(n.code)&&(ka=!0),ps?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(n.code);e>=0&&ps.pick(e%3)}n.code==="KeyM"&&(iu=!iu,Et.setMuted(iu)),(n.code==="KeyP"||n.code==="Escape")&&Bt==="race"&&(Xd=!Xd)}});addEventListener("keyup",n=>su.delete(n.code));addEventListener("blur",()=>su.clear());addEventListener("pointerdown",()=>Et.resume(),{once:!1});var iu=Rn.has("mute");iu&&Et.setMuted(!0);Et.startMusic("menu");var Xd=!1;function SA(n){let e=(...s)=>s.some(r=>su.has(r));xn.throttle=e("ArrowUp","KeyW")?1:0,xn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);xn.steer=t,xn.boost=e("Space"),xn.drift=e("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(xn.steer=s),xn.throttle=Math.max(xn.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),xn.brake=Math.max(xn.brake,i.buttons[6]?.value||0),xn.boost=xn.boost||!!i.buttons[2]?.pressed,xn.drift=xn.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed;let r=!!i.buttons[3]?.pressed||!!i.buttons[4]?.pressed;r&&!Tx&&(ka=!0),Tx=r}return xn}function EA(n){let e=new ta,t=new Ls(50,32,16),i=new G(...n.sunDir).normalize(),s=new Mt({side:nn,uniforms:{uTop:{value:new De(n.skyTop)},uHor:{value:new De(n.skyHorizon)},uGround:{value:new De(n.hemiGround)},uSun:{value:new De(n.sunColor).multiplyScalar(n.sunIntensity)},uSunDir:{value:i}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new et(t,s));let r=new no(Ci),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var Ax=new Map;function Rx(n,e="#f4f2ec",t="#16181d"){let i=n+e+t,s=Ax.get(i);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(n),20,15),s=new ai(o),s.colorSpace=Ot,s.magFilter=jt,s.minFilter=ri,Ax.set(i,s)}let r=new et(new kn(1,1),new ot({map:s,roughness:.5,side:Dt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var Ua=null;function wA(){if(Ua)return Ua;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ua=new ai(n),Ua.colorSpace=Ot,Ua}function Hd(n,e,t){let i=new na(new oo({map:wA(),color:n,transparent:!0,opacity:t,blending:Di,depthWrite:!1,fog:!1}));return i.scale.setScalar(e),i}var fs={ao:Rn.get("fx")!=="low",slow:0,frames:0,checked:!1},ke=null,Bt="boot",qd=0,Yd=0,$d=0,Oa=99;function TA(){if(ke){for(let n of ke.labels||[])n.material.map?.dispose(),n.material.dispose();for(let n of ke.bikes)qt.remove(n.model.group);qt.remove(ke.road.group),ke.road.dispose?.(),ke.env.dispose?.(),ke.env.group?.parent&&ke.env.group.parent.remove(ke.env.group),ke.fx.dispose?.(),ke.post.dispose?.(),ke.envMap?.dispose(),qt.environment=null,ke.mirror&&(qt.remove(ke.mirror),ke.mirror.dispose()),ke.fill&&qt.remove(ke.fill),ke.scenery&&(qt.remove(ke.scenery.group),ke.scenery.dispose()),ke.clouds&&(qt.remove(ke.clouds),ke.clouds.geometry.dispose(),ke.clouds.material.dispose()),ke.sunGlow&&(qt.remove(ke.sunGlow),ke.sunGlow.material.dispose()),ke=null}}var Ba="assets/v3/world/",Cn=null,gi=null,Nx={};function Ux({trackSeed:n,weatherId:e,laps:t,riders:i,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null,startS:c=0}){let u=[performance.now()],h=W=>{u.push(W,Math.round(performance.now()-u[0]))};TA(),h("dispose");let f=Jn(n),p=!!r&&!!Cn,g=p?Cn.track:s0(n);h("track");let x=Fs[e]||Fs.sunset;Un.far=p?9500:6e3,Un.updateProjectionMatrix();let m=p?J0(qt,g,x,Cn.index,{base:Ba,baked:Nx,rng:f.fork("env")}):V0(qt,g,x,f.fork("env"));p&&m.prime(c),h("env");let d=EA(x);qt.environment=d.texture,qt.environmentIntensity=x.night?.55:.5,Ci.toneMappingExposure=x.night?1.5:.82;let b=Hd(x.sunColor,x.night?900:2200,x.night?.35:.75);b.userData.dir=new G(...x.sunDir).normalize(),qt.add(b);let M=new Ui(x.night?3820160:13226728,x.night?.25:.45);M.position.set(-x.sunDir[0],.6,-x.sunDir[2]).multiplyScalar(100),M.name="fill-light",qt.add(M),h("envmap");let _=p?{group:new lt,update(){},dispose(){}}:bc(g,x,f.fork("road"));qt.add(_.group),h("road"),p||C0(m.group,W=>W.geometry.attributes.position.count>2e4?1:.45);let T=p?{group:new lt,dispose(){}}:q0(g,x,f.fork("scenery"),m.heightAt);m.sun?.shadow&&(m.sun.shadow.mapSize.set(4096,4096),m.sun.shadow.radius=5,m.sun.shadow.blurSamples=16,m.sun.shadow.normalBias=.05,m.sun.shadow.map?.dispose(),m.sun.shadow.map=null),qt.add(T.group);let E=null,v=p?Math.min(.25,x.wet||.25):x.sheen??x.wet;v>.5&&!Rn.has("noreflect")&&(E=new ua(new kn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),E.rotation.x=-Math.PI/2,E.material.colorWrite=!1,E.material.depthWrite=!1,E.material.depthTest=!1,E.frustumCulled=!1,E.renderOrder=-10,E.name="road-mirror",qt.add(E));let w=_.group.getObjectByName("road-asphalt");w&&v>.5&&(w.material.envMap=d.texture,w.material.envMapIntensity=E?.35:1.25,w.material.metalness=.3,L0(w.material,x.sheen??x.wet,E?{texture:E.getRenderTarget().texture,matrix:E.material.uniforms.textureMatrix.value}:null)),h("voxelize");let y=l||P0(x,f.fork("clouds"));qt.add(y);let S=sx(qt,x),R=fx(Ci,qt,Un,x,{ao:fs.ao});h("fx");let N=m0({track:g,laps:t,env:x,rng:f.fork("race"),riders:i,final:o,carry:a,startS:c}),F=Rn.has("noitems")?null:bg({track:g,rng:f.fork("items"),startS:c,attacks:!cn});Io=Io||Rg(qt),Io.reset(),ka=!1;let L=[],I=N.riders.map(W=>{let z=Jg({color:W.color,accent:W.accent,isPlayer:!!W.isPlayer&&!!x.night,detail:W.isPlayer?"hi":"lo"});if(z.group.rotation.order="YXZ",W.remote){let me=NA(W.name,W.color);z.group.add(me),L.push(me)}let O=z.group.getObjectByName("chassis")||z.group,V=Hd(16722458,.3,.3);if(V.position.set(0,.67,-.42),O.add(V),x.night){let me=Hd(16773840,1.3,.8);me.position.set(0,.48,1.66),O.add(me)}z.tailGlow=V;let q=W.isPlayer?1:2+N.riders.indexOf(W)*7%97;for(let me of[-1,1]){let ie=Rx(q);ie.scale.set(.24,.17,1),ie.position.set(.105*me,.6,-.2),ie.rotation.y=me*Math.PI/2,O.add(ie)}let se=Rx(q);return se.scale.set(.2,.14,1),se.position.set(0,.585,1.6),se.rotation.x=-.75,O.add(se),qt.add(z.group),{rider:W,model:z,pose:{},prev:new G,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),H=s?uc({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},f.fork("auto")):null;if(ke={labels:L,track:g,weather:x,env:m,road:_,fx:S,post:R,race:N,items:F,bikes:I,autoAI:H,envMap:d,sunGlow:b,clouds:y,scenery:T,mirror:E,fill:M,playerBike:I.find(W=>W.rider.isPlayer)||I[0]},h("bikes"),window.__loadTimes=u.slice(1),bt?.traffic){for(let W of N.riders)W.ai&&(W.ai.obstacles=bt.traffic.vehicles);H&&(H.obstacles=bt.traffic.vehicles)}if(p){let W=[];for(let z of g.features)z.type==="tunnel"&&z.name&&W.push({s:z.s0-90,text:z.name.toUpperCase()});for(let z of g.bridges)z.name&&z.s1-z.s0>150&&W.push({s:z.s0-40,text:z.name.toUpperCase()});for(let z of Cn.index.signs)W.push({s:z.s-20,text:z.name.toUpperCase()});W.sort((z,O)=>z.s-O.s),ke.announce=W.filter(z=>z.s>=c-60&&z.s<=g.raceEnd),ke.announceIdx=0}return Yt.setTrack(g),Vx(),Fx(.016),Wi.snap(jd()),Yd=N.player?.position||i.length,$d=1,Oa=99,window.__game={stage:ke,renderer:Ci,scene:qt,camera:Un,RL:If,audio:Et},window.__tick=kx,ke}var Hi={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function jd(){let n=ke.playerBike,e=n.rider.state;return Hi.x=n.w.x,Hi.y=n.w.y,Hi.z=n.w.z,Hi.heading=n.w.heading,Hi.yaw=-Ox(e),Hi.speedRatio=Math.min(1.3,e.speed/n.rider.stats.maxSpeed),Hi.airborne=e.airborne,Hi.boosting=e.boostT>0,Hi.slope=n.w.slope||0,Hi}var AA=.8,Cx=.7;function Ox(n){let e=n.vdir??n.yaw;return e+AA*(n.yaw-e)}function Fx(n){let{track:e,fx:t,weather:i}=ke;for(let s of ke.bikes){let r=s.rider.state;At(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.visible=!s.rider.hidden;let a=s.w.heading-Ox(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=Cx*(Math.sin(a)-Math.sin(l)),o.position.z+=Cx*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?xn.brake>.1:!!s.rider.braking,s.model.update(c,n),s.model.tailGlow){let M=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*M-s.model.tailGlow.material.opacity)*Math.min(1,n*12),s.model.tailGlow.scale.setScalar(.3+.55*M)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),p=s.w.x-h*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=h*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,x,g,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,x,g,m*.25,1.5,d*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&t.emit("spray",p,x,g,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-h*.4,x+.45,g-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let b=s.rider.isPlayer?null:s.rider.frameEvents;b&&b.length&&Bx(s,b,!1)}}function Bx(n,e,t){let{fx:i}=ke,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(Et.play("land"),Wi.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),t&&(Et.play("hit"),Wi.shake(.7))):l==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),t&&(Wi.shake(1.4),Yt.flash("CHUTE !",1400))):l==="jump"?t&&Et.play("jump"):l==="boost"?t&&(Et.play("boost"),Wi.shake(.3),Yt.flash("BOOST !",600)):l==="pad"&&t&&(Et.play("pad"),Wi.shake(.2))}function RA(n){let{race:e,autoAI:t,track:i}=ke,s=e.player,r=xn;if(t||Bt==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=hc(t,s.state,i,s.stats,a,n)}else r=IA;if(cn&&bt&&(OA(e,n),UA(e,n)),e.update(n,r),cn&&bt&&e.phase!=="countdown"&&(cn.session.sendState(performance.now(),s.state.s,s.state),s.finished&&!cn.sentFinish&&(cn.sentFinish=!0,cn.session.sendFinish(s.finishTime))),bt?.traffic&&e.phase!=="countdown"){bt.traffic.update(n,s.state,e.riders);for(let a of bt.traffic.events)a.type==="near"&&!t?(Yt.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),Zd(1),Et.play(a.boost?"boost":"near")):a.type==="hit"&&!t&&Yt.flash("ACCROCHAGE",900)}ke.items&&e.phase!=="countdown"&&(ka&&!t&&Bt==="race"&&ke.items.use(s,e.riders),ke.items.update(n,e.riders,{vehicles:bt?.traffic?.vehicles||null,autoPlayer:!!t||Bt!=="race"}),ke.items.events.length&&PA(ke.items.events,s,!t&&Bt==="race")),ka=!1;let o=s.state.events;o.length&&(Bx(ke.playerBike,o,!t),o.length=0)}var CA={nitro:"boost",rocket:"rocket",oil:"oil",shield:"shield",pulse:"zap"},yr={};function PA(n,e,t){let{fx:i,track:s}=ke;for(let r of n){let o=r.rider?ke.bikes.find(c=>c.rider===r.rider):null,a=r.rider===e,l=r.by===e;if(r.type==="shard")t&&(Et.play("shard"),Zd(1));else if(r.type==="pickup")o&&i.emit("spark",o.w.x,o.w.y+1.1,o.w.z,0,2,0,14),a&&t&&Et.play("item");else if(r.type==="use")a&&t&&(Et.play(CA[r.item]),Yt.flash(kc[r.item].name.toUpperCase()+" !",700),r.item==="pulse"&&Wi.shake(.3));else if(r.type==="hit"){if(o&&(i.emit("spark",o.w.x,o.w.y+.6,o.w.z,0,4,0,r.item==="oil"?10:36),i.emit(r.item==="oil"?"smoke":"dust",o.w.x,o.w.y+.3,o.w.z,0,2,0,18)),!t)continue;if(a){Et.play(r.item==="rocket"?"boom":r.item==="pulse"?"zap":"hit"),Wi.shake(r.item==="rocket"?1.2:.7);let c=r.by&&r.by!==e?" \u2014 "+r.by.name.toUpperCase():"";Yt.flash((r.item==="oil"?"GLISSADE":r.item==="pulse"?"MOTEUR BRID\xC9":"TOUCH\xC9")+c,1300)}else l&&(r.item==="rocket"&&Et.play("boom"),Zd(3),Yt.flash(`${r.rider.name.toUpperCase()} ${r.item==="oil"?"A GLISS\xC9":r.item==="pulse"?"BRID\xC9":"TOUCH\xC9"} !`,1100))}else r.type==="block"?(o&&i.emit("spark",o.w.x,o.w.y+.8,o.w.z,0,3,0,20),a&&t&&(Et.play("shield"),Yt.flash("BOUCLIER !",900))):r.type==="boom"&&(At(s,r.s,r.d,yr),i.emit("spark",yr.x,yr.y+.8,yr.z,0,4,0,30),i.emit("smoke",yr.x,yr.y+.8,yr.z,0,2,0,16))}}var IA={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},en={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Vd=[],Px=new G,Gd=performance.now(),tu=0,Fa=0;function zx(n){requestAnimationFrame(zx);let e=Math.min(.05,(n-Gd)/1e3);fs.ao&&!fs.checked&&Bt==="race"&&ke?.race.phase==="racing"&&(fs.frames++,n-Gd>25&&fs.slow++,fs.frames>=240&&(fs.checked=!0,fs.slow>96&&(fs.ao=!1,ke.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),Gd=n,kx(e)}function kx(n){if(!ke)return;if(Xd){ke.post.render(0);return}Fa+=n,qd+=n,Bt==="race"&&(ps?.update(n),_r>0&&!ps?.active&&FA());let{race:e}=ke,t=Bt==="race"||Bt==="attract"||Bt==="finish";if(t){Bt==="race"&&SA(n),tu+=n;let a=0;for(;tu>=kd&&a++<8;)RA(kd),tu-=kd;a>=8&&(tu=0)}Fx(n);let i=e.player,s=i.state,r=Math.min(1.3,s.speed/i.stats.maxSpeed),o=jd();Bt==="intro"||Bt==="menu"||Bt==="finish"&&qd>1.2?LA(o,n):Wi.update(n,o),Px.set(o.x,o.y,o.z),ke.env.update(n,Fa,Px,(ke.race.player||ke.race.riders[0]).state.s),ke.mirror&&ke.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),ke.sunGlow.position.copy(Un.position).addScaledVector(ke.sunGlow.userData.dir,3200),ke.road.update(n,Fa),ke.fx.setSpeed(t?r:0,s.boostT>0),ke.fx.update(n,Un),Po&&(bt?.traffic&&Bt!=="attract"?Po.update(bt.traffic,ke.track,s.s):Po.hide()),ke.items?(Io.show(),Io.update(n,Fa,ke.items,ke.track,s.s,ke.bikes,t?ke.fx:null)):Io?.hide(),ke.post.setSpeed(t?r:0,s.boostT>0),ke.post.render(n),(Bt==="race"||Bt==="finish")&&(Et.setEngine(Math.min(1,r),Bt==="race"?xn.throttle:.3),Et.setWind(Math.min(1,r)),Et.setSkid(s.airborne?0:Math.min(1,s.drift))),Bt==="race"&&DA(e,i,s)}var Ix=new G;function LA(n,e){let t=Fa*.35+n.heading;Ix.set(n.x+Math.sin(t)*7.5,n.y+2.6,n.z+Math.cos(t)*7.5),Un.position.lerp(Ix,Math.min(1,e*2.5)),Un.fov+=(55-Un.fov)*Math.min(1,e*3),Un.updateProjectionMatrix(),Un.lookAt(n.x,n.y+.9,n.z)}function DA(n,e,t){en.speedKmh=t.speed*3.6,en.position=e.position,en.total=n.riders.length,en.lap=Math.min(n.laps,Math.max(1,e.lap)),en.laps=n.laps,bt&&Bt!=="attract"&&(en.lap=bt.index+1,en.laps=bt.metas.length),Yt.setLapLabel?.(bt&&Bt!=="attract"?"TRON\xC7ON":"TOUR"),en.time=n.time,en.bestLap=e.bestLap??null,en.boostCharges=t.boostCharges,en.boostT=t.boostT,en.gear=t.gear,en.rpm=t.rpm,en.level=at?(at.level||0)+1:1,en.xp=at?.xp||0,en.xpNeed=at&&ke.items?Hc(at.level||0):0,en.item=e.item?kc[e.item]:null,en.shieldT=e.shieldT||0,en.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,en.wrongWay=Math.abs(t.yaw)>1.4,Yt.update(en),Vd.length=0;for(let i of n.riders)Vd.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(Yt.updateMinimap(Vd),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==Oa&&(Oa=i,i>0&&Et.play("beep"))}else Oa!==0&&(Oa=0,Et.play("go"),Et.startMusic?.("race"));if(n.phase==="racing"){let i=ke.announce;if(i)for(;ke.announceIdx<i.length&&i[ke.announceIdx].s<=t.s;)Yt.flash(i[ke.announceIdx].text,2e3),ke.announceIdx++;e.position<Yd&&!(i&&ke.announceIdx>0&&t.s-i[ke.announceIdx-1].s<120)&&Yt.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),Yd=e.position,e.lap!==$d&&e.lap<=n.laps&&($d=e.lap,Et.play("lap"),e.lap===n.laps&&Yt.flash("DERNIER TOUR",1400))}if(bt&&Bt==="race"&&n.phase==="racing")for(;bt.index<bt.metas.length-1&&t.s>=bt.metas[bt.index].s1;)BA(n);n.phase==="finished"&&Bt==="race"&&zA()}var bt=null,Po=null,Io=null;function NA(n,e){let t=document.createElement("canvas");t.width=256,t.height=64;let i=t.getContext("2d");i.font="bold 34px Arial, Helvetica, sans-serif";let s=Math.min(244,i.measureText(n).width+28);i.fillStyle="rgba(10,14,28,.78)",i.beginPath(),i.roundRect((256-s)/2,8,s,48,12),i.fill(),i.fillStyle="#"+e.toString(16).padStart(6,"0"),i.fillRect((256-s)/2,50,s,6),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,31,230);let r=new ai(t);r.colorSpace=Ot;let o=new na(new oo({map:r,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));return o.scale.set(3.6,.9,1),o.position.set(0,2.55,0),o.name="name-tag",o}var Gi=null,Wd=0;function UA(n,e){if(Wd-=e,Wd>0)return;Wd=.25,Gi||(Gi=document.createElement("div"),Gi.style.cssText="position:fixed;left:2.2vmin;top:13vmin;z-index:30;font:bold 1.9vmin Arial,Helvetica,sans-serif;color:#fff;text-shadow:0 1px 3px #000;display:grid;gap:.5vmin;pointer-events:none",document.body.appendChild(Gi));let t=n.player.state.s,i=n.riders.filter(s=>s.remote).map(s=>{let r=cn.session.players.get(s.id);if(!r||r.gone)return{gap:-1/0,html:`<span style="opacity:.6">\u2715 ${nu(s.name)} \xB7 abandon</span>`};if(s.finished)return{gap:1/0,html:`<span>\u{1F3C1} ${nu(s.name)} \xB7 arriv\xE9</span>`};if(!r.remote.known)return{gap:0,html:`<span style="opacity:.6">\u2026 ${nu(s.name)}</span>`};let o=s.state.s-t,a=Math.abs(o)>=1e3?(Math.abs(o)/1e3).toFixed(1).replace(".",",")+" km":Math.round(Math.abs(o))+" m";return{gap:o,html:`<span><b style="color:#${s.color.toString(16).padStart(6,"0")}">${o>=0?"\u25B2":"\u25BC"}</b> ${nu(s.name)} \xB7 ${o>=0?"+":"\u2212"}${a}</span>`}});i.sort((s,r)=>r.gap-s.gap),Gi.innerHTML=i.map(s=>s.html).join(""),Gi.style.display=""}var nu=n=>String(n).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),cn=null;function OA(n,e){let t=performance.now(),i=n.track;for(let s of n.riders){if(!s.remote)continue;let r=cn.session.players.get(s.id),o=r&&!r.gone?r.remote.sample(t,e):null;if(!o){s.hidden=!0,(!r||r.gone)&&(s.state.s=-1e5,!s.dnf&&!s.finished&&(s.dnf=!0,Yt.flash(`${s.name.toUpperCase()} A QUITT\xC9 LA COURSE`,2200)));continue}let a=s.state;a.s=o.g,a.d=o.d,a.speed=o.v,a.lean=o.l,a.yaw=o.y,a.vdir=o.y,a.boostT=o.b?.2:0,a.wheelSpin=(a.wheelSpin||0)+o.v*e/.31,s.hidden=Math.abs(a.s-n.player.state.s)>3500||r.remote.age>4,r.finished&&!s.finished&&(s.finished=!0,s.finishTime=r.finishTime)}}var ds=Pg(),ps=null;function Hx(n){let e=bt.metas[bt.splits.length],t=bt.splits.length===0,i=Lg(ds,e.id+(t?":g":":r"),n-bt.splitStart);return bt.splitStart=n,bt.splits.push({name:e.subtitle,...i}),Vc(ds),i}var _r=0;function Zd(n){if(!(!at||Bt!=="race"||!ke?.items))for(at.xp=(at.xp||0)+n,at.level=at.level||0;at.xp>=Hc(at.level);)at.xp-=Hc(at.level),at.level+=1,_r+=1,Yt.flash(`NIVEAU ${at.level+1}`,900),Et.play("level")}function FA(){if(_r=Math.max(0,_r-1),!at||!ke)return;at.offers=(at.offers||0)+1;let n=xc({...at,stageIndex:"n"+at.offers},at.real?Ng:null);if(!n.length){_r=0;return}let e=t=>{if(!vc(at,t.id))return;Et.play("pick");let i=ke.race.player;if(i){let s=i.stats.boostCharges;Object.assign(i.stats,zs(at)),i.stats.boostCharges>s&&(i.state.boostCharges+=i.stats.boostCharges-s)}Yt.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800)};if(ke.autoAI&&!Rn.has("pick")){e(n[0]);return}ps=ps||Ug(),ps.show(n,e,9)}function BA(n){let e=Hx(n.time);bt.index+=1;let t=bt.metas[bt.index];Yt.flash(`SECTION ${jf(e.time)}${e.delta===null?"":" ("+Ig(e.delta)+")"}${e.record&&e.best!==null?" \xB7 RECORD":""} \u2014 ${t.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),_r+=1}function Vx(){let n=innerWidth,e=innerHeight;Ci.setSize(n,e,!1),Un.aspect=n/e,Un.updateProjectionMatrix(),ke?.post.setSize(n,e)}addEventListener("resize",Vx);function za(n){Bt=n,qd=0}var at=null,Co=Rf(),Kd=null;function zA(){if(za("finish"),ps?.hide(),_r=0,bt&&at){let n=ke.race.player.finishTime??ke.race.time,e=Hx(n),t=!!gi&&bt.metas.length===gi.stages.length,i=t?Dg(ds,n):null;ds.finishes+=1,Vc(ds),at.summary={splits:bt.splits,total:i,time:n,full:t,last:e}}if(Yt.flash(`ARRIV\xC9E \u2014 ${ke.race.player.position}${ke.race.player.position===1?"er":"e"}`,2200),Et.play(ke.race.player.position<=3?"win":"lose"),Et.stopMusic?.(),setTimeout(()=>{Bt!=="race"&&Et.startMusic?.("menu")},3200),cn){let n=performance.now(),e=()=>ke.race.riders.some(i=>i.remote&&!i.finished&&!i.dnf),t=()=>{if(Bt==="finish"){if(!e()||performance.now()-n>12e4){Kd?.();return}performance.now()-n>3e3&&Yt.flash("EN ATTENTE DES AUTRES JOUEURS\u2026",1100),setTimeout(t,1e3)}};setTimeout(t,3200);return}setTimeout(()=>Kd?.(),3200)}async function Lx(){bt=null,Gi&&(Gi.style.display="none"),Po?.hide(),ps?.hide();let n=gc(mc("ATTRACT"));for(let t of n)t.stats=zs({upgrades:[]});let e=Cn?Cn.index.sections[Math.min(2,Cn.index.sections.length-1)].s0+9e3:0;Cn&&await Hf(Ba,Cn.index,e,1).catch(()=>{}),Ux({trackSeed:Cn?"REAL:"+Cn.index.id:"ATTRACT-"+yc(),weatherId:Cn?"sicily":"sunset",laps:Cn?1:99,riders:n,autopilot:!0,realData:!!Cn,startS:e}),Yt.hide(),za("attract")}async function kA(){if(await Hg().catch(n=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",n)),!Rn.has("noreal")){let[n,e]=await Promise.all([fetch(Ba+"index.json").then(t=>t.ok?t.json():null).catch(()=>null),fetch(Ba+"track.json").then(t=>t.ok?t.json():null).catch(()=>null)]);if(n&&e&&(Cn={index:n,track:Y0({...n,...e})},gi={title:n.title,roads:n.roads,stages:n.sections}),gi){let t=await fetch("assets/v3/props/index.json").then(s=>s.ok?s.json():[]).catch(()=>[]);await Promise.all($0.filter(s=>t.includes(s)).map(s=>fetch(`assets/v3/props/${s}.json`).then(r=>r.ok?r.json():null).then(r=>{r&&(Nx[s]=r)}).catch(()=>{})));let i=document.createElement("div");i.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",i.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(i)}}for(await Lx(),document.getElementById("boot").remove(),requestAnimationFrame(zx);;){let n=Rn.get("seed"),e=Number(Rn.get("stage"))||0;if(!n){let s=await Vi.showTitle({dailySeed:yc(),meta:Co,route:gi,records:ds});if(s.multi){let r=gi?await xg(Vi.mount,gi):null;if(!r)continue;cn={session:r.session,directory:r.directory,sentFinish:!1},n="MP-"+r.session.code,e=r.stage}else n=s.seed,s.stage&&(e=s.stage)}if(Et.resume(),at=mc(n),gi){let s=Math.floor(e)-1;at.real=!0,s>0&&s<gi.stages.length||(s=0);let r=gi.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;at.stages=[{name:gi.title,subtitle:`${gi.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!da(at);){let s=at.stages[at.stageIndex],r=zs(at),o=gc(at).map(c=>({...c,stats:c.isPlayer?r:zs({upgrades:[]})}));if(cn&&s.real){at.points={},at.names={};let c=o.find(u=>u.isPlayer);o=cn.session.roster().map(u=>u.me?{...c,name:u.name,color:u.color,accent:u.accent}:{id:u.id,name:u.name,color:u.color,accent:u.accent,isPlayer:!1,remote:!0,persona:null,stats:zs({upgrades:[]})});for(let u of o)at.points[u.id]=0,at.names[u.id]=u.name}Vi.hideAll();let a=0;bt=null,s.real&&(Yt.flash?.("CHARGEMENT\u2026"),a=s.real[0].s0,await Hf(Ba,Cn.index,a,1).catch(()=>{}),bt={metas:s.real,index:0,riders:o,autopilot:Rn.has("auto"),weatherId:Rn.get("weather")||s.weather,splits:[],splitStart:0},ds.runs+=1,Vc(ds),Rn.has("notraffic")||(bt.traffic=eg({rng:Jn("trafic|"+n+"|"+ds.runs),count:40,density:2.6}),Po=Po||vg(qt,40))),Ux({trackSeed:s.trackSeed,weatherId:Rn.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Rn.has("auto"),realData:!!s.real,startS:a}),za("intro"),Et.setRain(ke.weather.rain||0),!Rn.has("auto")&&!cn&&await Vi.showStageIntro({stage:s,index:at.stageIndex+1,total:at.stages.length,standings:mo(at),weather:ke.weather}),Vi.hideAll(),Wi.snap(jd()),Yt.show(),za("race"),await new Promise(c=>{Kd=c}),Yt.hide(),Et.setEngine(.1,0),Et.setWind(0),Et.setSkid(0);let l=ke.race.results();if(cn){let c=new Set(ke.race.riders.filter(u=>u.dnf).map(u=>u.id));for(let u of l)c.has(u.id)&&(u.time=null);l.sort((u,h)=>(u.time===null)-(h.time===null)||u.position-h.position),l.forEach((u,h)=>{u.position=h+1}),Gi&&(Gi.style.display="none")}if(Tf(at,l),await Vi.showResults({results:l,standings:mo(at),stage:s}),!da(at)){let c=xc(at),u=at.upgrades.map(f=>hr.find(p=>p.id===f)).filter(Boolean),h=await Vi.showUpgradeChoice({choices:c,index:at.stageIndex,total:at.stages.length,owned:u});vc(at,h)}}let t=mo(at),i=t.findIndex(s=>s.isPlayer)+1;Co=Pf(Co,at)||Co,Cf(Co),za("menu"),await Vi.showRunEnd({standings:t,playerPosition:i,run:at,meta:Co}),Vi.hideAll(),cn&&(cn.directory?.close(),cn.session.leave(),cn=null),Rn.delete("seed"),Rn.delete("stage"),await Lx()}}kA().catch(n=>{console.error(n);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
