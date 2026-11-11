var P0=Object.defineProperty;var L0=(i,e)=>{for(var t in e)P0(i,t,{get:e[t],enumerable:!0})};var D0=0,Pf=1,N0=2;var hc=1,U0=2,Li=3,xi=0,Kt=1,wt=2,gi=0,wr=1,Ir=2,Lf=3,Df=4,Vu=5,Di=100,F0=101,O0=102,B0=103,z0=104,k0=200,Gu=201,H0=202,V0=203,Il=204,Co=205,G0=206,W0=207,X0=208,q0=209,Y0=210,Z0=211,K0=212,$0=213,J0=214,Pl=0,Ll=1,Dl=2,Pr=3,Nl=4,Ul=5,Fl=6,Ol=7,Wu=0,j0=1,Q0=2,as=0,Xu=1,qu=2,Yu=3,zo=4,eg=5,Zu=6,Ku=7,Nf="attached",tg="detached",jd=300,Lr=301,Dr=302,Bl=303,zl=304,fc=306,Oi=1e3,Ni=1001,Io=1002,nn=1003,$u=1004;var Er=1005;var wn=1006,To=1007;var Gn=1008;var Bi=1009,Qd=1010,ep=1011,Po=1012,Ju=1013,ks=1014,ri=1015,bn=1016,ju=1017,Qu=1018,Nr=1020,tp=35902,np=1021,ip=1022,Wn=1023,sp=1024,rp=1025,Ar=1026,Ur=1027,eh=1028,th=1029,op=1030,nh=1031;var ih=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,kl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,Zl=37809,Kl=37810,$l=37811,Jl=37812,jl=37813,Ql=37814,eu=37815,tu=37816,nu=37817,iu=37818,su=37819,ru=37820,ou=37821,za=36492,au=36494,cu=36495,ap=36283,lu=36284,uu=36285,hu=36286;var Fr=2300,Or=2301,Jc=2302,Uf=2400,Ff=2401,Of=2402,ng=2500;var cp=0,dc=1,ko=2,ig=3200,sg=3201;var sh=0,rg=1,ss="",Tt="srgb",gn="srgb-linear",pc="linear",Mt="srgb";var rr=7680;var Bf=519,og=512,ag=513,cg=514,lp=515,lg=516,ug=517,hg=518,fg=519,fu=35044,vi=35048;var zf="300 es",Ui=2e3,ka=2001,cs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kf=1234567,wo=Math.PI/180,Br=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function pn(i,e,t){return Math.max(e,Math.min(t,i))}function rh(i,e){return(i%e+e)%e}function dg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function pg(i,e,t){return i!==e?(t-i)/(e-i):0}function Ao(i,e,t){return(1-t)*i+t*e}function mg(i,e,t,n){return Ao(i,e,1-Math.exp(-t*n))}function gg(i,e=1){return e-Math.abs(rh(i,e*2)-e)}function xg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _g(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yg(i,e){return i+Math.random()*(e-i)}function Mg(i){return i*(.5-Math.random())}function Sg(i){i!==void 0&&(kf=i);let e=kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bg(i){return i*wo}function Eg(i){return i*Br}function Tg(i){return(i&i-1)===0&&i!==0}function wg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ag(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var up={DEG2RAD:wo,RAD2DEG:Br,generateUUID:oi,clamp:pn,euclideanModulo:rh,mapLinear:dg,inverseLerp:pg,lerp:Ao,damp:mg,pingpong:gg,smoothstep:xg,smootherstep:_g,randInt:vg,randFloat:yg,randFloatSpread:Mg,seededRandom:Sg,degToRad:bg,radToDeg:Eg,isPowerOfTwo:Tg,ceilPowerOfTwo:wg,floorPowerOfTwo:Ag,setQuaternionFromProperEuler:Rg,normalize:Et,denormalize:si},Ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],x=n[8],_=s[0],m=s[3],d=s[6],v=s[1],y=s[4],g=s[7],T=s[2],b=s[5],M=s[8];return r[0]=o*_+a*v+c*T,r[3]=o*m+a*y+c*b,r[6]=o*d+a*g+c*M,r[1]=l*_+u*v+h*T,r[4]=l*m+u*y+h*b,r[7]=l*d+u*g+h*M,r[2]=f*_+p*v+x*T,r[5]=f*m+p*y+x*b,r[8]=f*d+p*g+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,x=t*h+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jc.makeScale(e,t)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jc=new lt;function hp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cg(){let i=Lo("canvas");return i.style.display="block",i}var Hf={};function bo(i){i in Hf||(Hf[i]=!0,console.warn(i))}function Ig(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Pg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=Rr(i.r),i.g=Rr(i.g),i.b=Rr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ss?pc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vf=[.64,.33,.3,.6,.15,.06],Gf=[.2126,.7152,.0722],Wf=[.3127,.329],Xf=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qf=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[gn]:{primaries:Vf,whitePoint:Wf,transfer:pc,toXYZ:Xf,fromXYZ:qf,luminanceCoefficients:Gf,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Vf,whitePoint:Wf,transfer:Mt,toXYZ:Xf,fromXYZ:qf,luminanceCoefficients:Gf,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var or,du=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Lo("canvas")),or.width=e.width,or.height=e.height;let n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dg=0,Ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qc(s[o].image)):r.push(Qc(s[o]))}else r=Qc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?du.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ng=0,sn=class i extends cs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ni,s=Ni,r=wn,o=Gn,a=Wn,c=Bi,l=i.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=oi(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=jd;sn.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],x=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,g=(p+1)/2,T=(d+1)/2,b=(u+f)/4,M=(h+_)/4,A=(x+m)/4;return y>g&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=M/n):g>T?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=b/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=M/r,s=A/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-x)*(m-x)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pu=class extends cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends pu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Va=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mu=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(h!==_||c!==f||l!==p||u!==x){let m=1-a,d=c*f+l*p+u*x+h*_,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let T=Math.sqrt(y),b=Math.atan2(T,d*v);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}let g=a*v;if(c=c*m+f*g,l=l*m+p*g,u=u*m+x*g,h=h*m+_*g,m===1-a){let T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+u*h+c*p-l*f,e[t+1]=c*x+u*f+l*h-a*p,e[t+2]=l*x+u*p+a*f-c*h,e[t+3]=u*x-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*x,this._y=l*p*h-f*u*x,this._z=l*u*x+f*p*h,this._w=l*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+l*p*x,this._y=l*p*h-f*u*x,this._z=l*u*x-f*p*h,this._w=l*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-l*p*x,this._y=l*p*h+f*u*x,this._z=l*u*x+f*p*h,this._w=l*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-l*p*x,this._y=l*p*h+f*u*x,this._z=l*u*x-f*p*h,this._w=l*u*h+f*p*x;break;case"YZX":this._x=f*u*h+l*p*x,this._y=l*p*h+f*u*x,this._z=l*u*x-f*p*h,this._w=l*u*h-f*p*x;break;case"XZY":this._x=f*u*h-l*p*x,this._y=l*p*h-f*u*x,this._z=l*u*x+f*p*h,this._w=l*u*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new O,Yf=new jt,Xn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),oa.subVectors(this.max,ho),ar.subVectors(e.a,ho),cr.subVectors(e.b,ho),lr.subVectors(e.c,ho),ji.subVectors(cr,ar),Qi.subVectors(lr,cr),Ls.subVectors(ar,lr);let t=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-Ls.z,Ls.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,Ls.z,0,-Ls.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-Ls.y,Ls.x,0];return!tl(t,ar,cr,lr,oa)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,ar,cr,lr,oa))?!1:(aa.crossVectors(ji,Qi),t=[aa.x,aa.y,aa.z],tl(t,ar,cr,lr,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new O,new O,new O,new O,new O,new O,new O,new O],ei=new O,ra=new Xn,ar=new O,cr=new O,lr=new O,ji=new O,Qi=new O,Ls=new O,ho=new O,oa=new O,aa=new O,Ds=new O;function tl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ds.fromArray(i,r);let a=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),c=e.dot(Ds),l=t.dot(Ds),u=n.dot(Ds);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ug=new Xn,fo=new O,nl=new O,Nn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ug.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);let t=fo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(nl)),this.expandByPoint(fo.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new O,il=new O,ca=new O,es=new O,sl=new O,la=new O,rl=new O,zr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){il.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),es.copy(this.origin).sub(il);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=es.dot(this.direction),c=-es.dot(ca),l=es.lengthSq(),u=Math.abs(1-o*o),h,f,p,x;if(u>0)if(h=o*c-a,f=o*a-c,x=r*u,h>=0)if(f>=-x)if(f<=x){let _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(il).addScaledVector(ca,f),p}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){sl.subVectors(t,e),la.subVectors(n,e),rl.crossVectors(sl,la);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);let c=a*this.direction.dot(la.crossVectors(es,la));if(c<0)return null;let l=a*this.direction.dot(sl.cross(es));if(l<0||c+l>o)return null;let u=-a*es.dot(rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class i{constructor(e,t,n,s,r,o,a,c,l,u,h,f,p,x,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,p,x,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,p,x,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,x=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=x+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,x=l*u,_=l*h;t[0]=f+_*a,t[4]=x*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,x=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*h,x=a*u,_=a*h;t[0]=c*u,t[4]=x*l-p,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=p*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=x*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+x,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fg,e,Og)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ts.crossVectors(n,Ln),ts.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ts.crossVectors(n,Ln)),ts.normalize(),ua.crossVectors(Ln,ts),s[0]=ts.x,s[4]=ua.x,s[8]=Ln.x,s[1]=ts.y,s[5]=ua.y,s[9]=Ln.y,s[2]=ts.z,s[6]=ua.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],x=n[2],_=n[6],m=n[10],d=n[14],v=n[3],y=n[7],g=n[11],T=n[15],b=s[0],M=s[4],A=s[8],E=s[12],S=s[1],I=s[5],V=s[9],z=s[13],P=s[2],H=s[6],G=s[10],ee=s[14],k=s[3],X=s[7],ue=s[11],pe=s[15];return r[0]=o*b+a*S+c*P+l*k,r[4]=o*M+a*I+c*H+l*X,r[8]=o*A+a*V+c*G+l*ue,r[12]=o*E+a*z+c*ee+l*pe,r[1]=u*b+h*S+f*P+p*k,r[5]=u*M+h*I+f*H+p*X,r[9]=u*A+h*V+f*G+p*ue,r[13]=u*E+h*z+f*ee+p*pe,r[2]=x*b+_*S+m*P+d*k,r[6]=x*M+_*I+m*H+d*X,r[10]=x*A+_*V+m*G+d*ue,r[14]=x*E+_*z+m*ee+d*pe,r[3]=v*b+y*S+g*P+T*k,r[7]=v*M+y*I+g*H+T*X,r[11]=v*A+y*V+g*G+T*ue,r[15]=v*E+y*z+g*ee+T*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+d*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],v=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,y=x*f*l-u*m*l-x*c*p+o*m*p+u*c*d-o*f*d,g=u*_*l-x*h*l+x*a*p-o*_*p-u*a*d+o*h*d,T=x*h*c-u*_*c-x*a*f+o*_*f+u*a*m-o*h*m,b=t*v+n*y+s*g+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/b;return e[0]=v*M,e[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*M,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*M,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*p-n*c*p)*M,e[4]=y*M,e[5]=(u*m*r-x*f*r+x*s*p-t*m*p-u*s*d+t*f*d)*M,e[6]=(x*c*r-o*m*r-x*s*l+t*m*l+o*s*d-t*c*d)*M,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*p+t*c*p)*M,e[8]=g*M,e[9]=(x*h*r-u*_*r-x*n*p+t*_*p+u*n*d-t*h*d)*M,e[10]=(o*_*r-x*a*r+x*n*l-t*_*l-o*n*d+t*a*d)*M,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*M,e[12]=T*M,e[13]=(u*_*s-x*h*s+x*n*f-t*_*f-u*n*m+t*h*m)*M,e[14]=(x*a*s-o*_*s-x*n*c+t*_*c+o*n*m-t*a*m)*M,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*M,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,x=r*h,_=o*u,m=o*h,d=a*h,v=c*l,y=c*u,g=c*h,T=n.x,b=n.y,M=n.z;return s[0]=(1-(_+d))*T,s[1]=(p+g)*T,s[2]=(x-y)*T,s[3]=0,s[4]=(p-g)*b,s[5]=(1-(f+d))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(x+y)*M,s[9]=(m-v)*M,s[10]=(1-(f+_))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),a=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let l=1/r,u=1/o,h=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ui){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(a===Ui)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ka)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ui){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*l,p=(n+s)*u,x,_;if(a===Ui)x=(o+r)*h,_=-2*h;else if(a===ka)x=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new O,ti=new Qe,Fg=new O(0,0,0),Og=new O(1,1,1),ts=new O,ua=new O,Ln=new O,Zf=new Qe,Kf=new jt,ai=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bg=0,$f=new O,hr=new jt,Ri=new Qe,ha=new O,po=new O,zg=new O,kg=new jt,Jf=new O(1,0,0),jf=new O(0,1,0),Qf=new O(0,0,1),ed={type:"added"},Hg={type:"removed"},fr={type:"childadded",child:null},ol={type:"childremoved",child:null},Lt=class i extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new ai,n=new jt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new lt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Jf,e)}rotateY(e){return this.rotateOnAxis(jf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jf,e)}translateY(e){return this.translateOnAxis(jf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(po,ha,this.up):Ri.lookAt(ha,po,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Ri),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hg),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new O(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new O,Ci=new O,al=new O,Ii=new O,dr=new O,pr=new O,td=new O,cl=new O,ll=new O,ul=new O,hl=new gt,fl=new gt,dl=new gt,rs=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),Ci.subVectors(n,t),al.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ci),c=ni.dot(al),l=Ci.dot(Ci),u=Ci.dot(al),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,x=(o*u-a*c)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return hl.setScalar(0),fl.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),Ci.subVectors(e,t),ni.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;dr.subVectors(s,n),pr.subVectors(r,n),cl.subVectors(e,n);let c=dr.dot(cl),l=pr.dot(cl);if(c<=0&&l<=0)return t.copy(n);ll.subVectors(e,s);let u=dr.dot(ll),h=pr.dot(ll);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(dr,o);ul.subVectors(e,r);let p=dr.dot(ul),x=pr.dot(ul);if(x>=0&&p<=x)return t.copy(r);let _=p*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(pr,a);let m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return td.subVectors(r,s),a=(h-u)/(h-u+(p-x)),t.copy(s).addScaledVector(td,a);let d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},fa={h:0,s:0,l:0};function pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=rh(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pl(o,r,e+1/3),this.g=pl(o,r,e),this.b=pl(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=fp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ht.fromWorkingColorSpace(dn.copy(this),e),Math.round(pn(dn.r*255,0,255))*65536+Math.round(pn(dn.g*255,0,255))*256+Math.round(pn(dn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Tt){ht.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(fa);let n=Ao(ns.h,fa.h,t),s=Ao(ns.s,fa.s,t),r=Ao(ns.l,fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Ee;Ee.NAMES=fp;var Vg=0,Mn=class extends cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=oi(),this.name="",this.blending=wr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Co,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gt=class extends Mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new O,da=new Ze,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fu&&(e.usage=this.usage),e}};var Wa=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xa=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gg=0,Vn=new Qe,ml=new Lt,mr=new O,Dn=new Xn,mo=new Xn,tn=new O,pt=class i extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?Xa:Wa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Dn.min,mo.min),Dn.expandByPoint(tn),tn.addVectors(Dn.max,mo.max),Dn.expandByPoint(tn)):(Dn.expandByPoint(mo.min),Dn.expandByPoint(mo.max))}Dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(e,l),tn.add(mr)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new O,c[A]=new O;let l=new O,u=new O,h=new O,f=new Ze,p=new Ze,x=new Ze,_=new O,m=new O;function d(A,E,S){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,S),u.sub(l),h.sub(l),p.sub(f),x.sub(f);let I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),a[A].add(_),a[E].add(_),a[S].add(_),c[A].add(m),c[E].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,E=v.length;A<E;++A){let S=v[A],I=S.start,V=S.count;for(let z=I,P=I+V;z<P;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new O,g=new O,T=new O,b=new O;function M(A){T.fromBufferAttribute(s,A),b.copy(T);let E=a[A];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),g.crossVectors(b,E);let I=g.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,I)}for(let A=0,E=v.length;A<E;++A){let S=v[A],I=S.start,V=S.count;for(let z=I,P=I+V;z<P;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,x=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[x++]=l[p++]}return new xt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nd=new Qe,Ns=new zr,pa=new Nn,id=new O,ma=new O,ga=new O,xa=new O,gl=new O,_a=new O,sd=new O,va=new O,at=class extends Lt{constructor(e=new pt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(gl.fromBufferAttribute(h,e),o?_a.addScaledVector(gl,u):_a.addScaledVector(gl.sub(t),u))}t.add(_a)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(pa.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(pa,id)===null||Ns.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=v,T=y;g<T;g+=3){let b=a.getX(g),M=a.getX(g+1),A=a.getX(g+2);s=ya(this,d,e,n,l,u,h,b,M,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){let v=a.getX(m),y=a.getX(m+1),g=a.getX(m+2);s=ya(this,o,e,n,l,u,h,v,y,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let g=v,T=y;g<T;g+=3){let b=g,M=g+1,A=g+2;s=ya(this,d,e,n,l,u,h,b,M,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){let v=m,y=m+1,g=m+2;s=ya(this,o,e,n,l,u,h,v,y,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Wg(i,e,t,n,s,r,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(va);return l<t.near||l>t.far?null:{distance:l,point:va.clone(),object:i}}function ya(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ma),i.getVertexPosition(c,ga),i.getVertexPosition(l,xa);let u=Wg(i,e,t,n,ma,ga,xa,sd);if(u){let h=new O;rs.getBarycoord(sd,ma,ga,xa,h),s&&(u.uv=rs.getInterpolatedAttribute(s,a,c,l,h,new Ze)),r&&(u.uv1=rs.getInterpolatedAttribute(r,a,c,l,h,new Ze)),o&&(u.normal=rs.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};rs.getNormal(ma,ga,xa,f.normal),u.face=f,u.barycoord=h}return u}var rn=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function x(_,m,d,v,y,g,T,b,M,A,E){let S=g/M,I=T/A,V=g/2,z=T/2,P=b/2,H=M+1,G=A+1,ee=0,k=0,X=new O;for(let ue=0;ue<G;ue++){let pe=ue*I-z;for(let Me=0;Me<H;Me++){let fe=Me*S-V;X[_]=fe*v,X[m]=pe*y,X[d]=P,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[d]=b>0?1:-1,u.push(X.x,X.y,X.z),h.push(Me/M),h.push(1-ue/A),ee+=1}}for(let ue=0;ue<A;ue++)for(let pe=0;pe<M;pe++){let Me=f+pe+H*ue,fe=f+pe+H*(ue+1),ie=f+(pe+1)+H*(ue+1),$=f+(pe+1)+H*ue;c.push(Me,fe,$),c.push(fe,ie,$),k+=6}a.addGroup(p,k,E),p+=k,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function kr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=kr(i[t]);for(let s in n)e[s]=n[s]}return e}function Xg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var yi={clone:kr,merge:yn},qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qa=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},is=new O,rd=new Ze,od=new Ze,Xt=class extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,rd,od),t.subVectors(od,rd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gr=-90,xr=1,gu=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(gr,xr,e,t);s.layers=this.layers,this.add(s);let r=new Xt(gr,xr,e,t);r.layers=this.layers,this.add(r);let o=new Xt(gr,xr,e,t);o.layers=this.layers,this.add(o);let a=new Xt(gr,xr,e,t);a.layers=this.layers,this.add(a);let c=new Xt(gr,xr,e,t);c.layers=this.layers,this.add(c);let l=new Xt(gr,xr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ya=class extends sn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xu=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:gi});r.uniforms.tEquirect.value=t;let o=new at(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=wn),new gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xl=new O,Zg=new O,Kg=new lt,ii=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xl.subVectors(n,t).cross(Zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kg.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Nn,Ma=new O,Do=class{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],x=s[9],_=s[10],m=s[11],d=s[12],v=s[13],y=s[14],g=s[15];if(n[0].setComponents(c-r,f-l,m-p,g-d).normalize(),n[1].setComponents(c+r,f+l,m+p,g+d).normalize(),n[2].setComponents(c+o,f+u,m+x,g+v).normalize(),n[3].setComponents(c-o,f-u,m-x,g-v).normalize(),n[4].setComponents(c-a,f-h,m-_,g-y).normalize(),t===Ui)n[5].setComponents(c+a,f+h,m+_,g+y).normalize();else if(t===ka)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $g(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){let x=h[f],_=h[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){let _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var An=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],x=[],_=[],m=[];for(let d=0;d<u;d++){let v=d*f-o;for(let y=0;y<l;y++){let g=y*h-r;x.push(g,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let y=v+l*d,g=v+l*(d+1),T=v+1+l*(d+1),b=v+1+l*d;p.push(y,g,b),p.push(g,T,b)}this.setIndex(p),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rx=`#ifdef USE_BATCHING
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
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,hx=`#ifdef USE_BUMPMAP
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sx=`vec3 transformedNormal = objectNormal;
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
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
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
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vx=`uniform bool receiveShadow;
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
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
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
#endif`,Kx=`struct PhysicalMaterial {
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
}`,$x=`
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o_=`#if defined( USE_POINTS_UV )
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
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U_=`float getShadowMask() {
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
}`,F_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z_=`#ifdef USE_SKINNING
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
#endif`,k_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`#include <common>
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
}`,iv=`#if DEPTH_PACKING == 3200
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
}`,sv=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
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
}`,lv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,hv=`uniform vec3 diffuse;
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
}`,fv=`#define LAMBERT
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
}`,dv=`#define LAMBERT
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
}`,pv=`#define MATCAP
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
}`,mv=`#define MATCAP
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
}`,gv=`#define NORMAL
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
}`,xv=`#define NORMAL
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
}`,_v=`#define PHONG
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
}`,vv=`#define PHONG
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
}`,yv=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,Sv=`#define TOON
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
}`,bv=`#define TOON
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
}`,Ev=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Av=`uniform vec3 color;
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
}`,Rv=`uniform float rotation;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Jg,alphahash_pars_fragment:jg,alphamap_fragment:Qg,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:sx,batching_pars_vertex:rx,batching_vertex:ox,begin_vertex:ax,beginnormal_vertex:cx,bsdfs:lx,iridescence_fragment:ux,bumpmap_pars_fragment:hx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:xx,color_pars_vertex:_x,color_vertex:vx,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:bx,displacementmap_vertex:Ex,emissivemap_fragment:Tx,emissivemap_pars_fragment:wx,colorspace_fragment:Ax,colorspace_pars_fragment:Rx,envmap_fragment:Cx,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Px,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Gx,envmap_vertex:Dx,fog_vertex:Nx,fog_pars_vertex:Ux,fog_fragment:Fx,fog_pars_fragment:Ox,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:zx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Vx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:qx,lights_phong_pars_fragment:Yx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Kx,lights_fragment_begin:$x,lights_fragment_maps:Jx,lights_fragment_end:jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:s_,map_particle_fragment:r_,map_particle_pars_fragment:o_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:c_,morphinstance_vertex:l_,morphcolor_vertex:u_,morphnormal_vertex:h_,morphtarget_pars_vertex:f_,morphtarget_vertex:d_,normal_fragment_begin:p_,normal_fragment_maps:m_,normal_pars_fragment:g_,normal_pars_vertex:x_,normal_vertex:__,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:y_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:S_,iridescence_pars_fragment:b_,opaque_fragment:E_,packing:T_,premultiplied_alpha_fragment:w_,project_vertex:A_,dithering_fragment:R_,dithering_pars_fragment:C_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:D_,shadowmap_vertex:N_,shadowmask_pars_fragment:U_,skinbase_vertex:F_,skinning_pars_vertex:O_,skinning_vertex:B_,skinnormal_vertex:z_,specularmap_fragment:k_,specularmap_pars_fragment:H_,tonemapping_fragment:V_,tonemapping_pars_fragment:G_,transmission_fragment:W_,transmission_pars_fragment:X_,uv_pars_fragment:q_,uv_pars_vertex:Y_,uv_vertex:Z_,worldpos_vertex:K_,background_vert:$_,background_frag:J_,backgroundCube_vert:j_,backgroundCube_frag:Q_,cube_vert:ev,cube_frag:tv,depth_vert:nv,depth_frag:iv,distanceRGBA_vert:sv,distanceRGBA_frag:rv,equirect_vert:ov,equirect_frag:av,linedashed_vert:cv,linedashed_frag:lv,meshbasic_vert:uv,meshbasic_frag:hv,meshlambert_vert:fv,meshlambert_frag:dv,meshmatcap_vert:pv,meshmatcap_frag:mv,meshnormal_vert:gv,meshnormal_frag:xv,meshphong_vert:_v,meshphong_frag:vv,meshphysical_vert:yv,meshphysical_frag:Mv,meshtoon_vert:Sv,meshtoon_frag:bv,points_vert:Ev,points_frag:Tv,shadow_vert:wv,shadow_frag:Av,sprite_vert:Rv,sprite_frag:Cv},ke={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},mi={basic:{uniforms:yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:yn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:yn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:yn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:yn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:yn([ke.points,ke.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:yn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:yn([ke.common,ke.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:yn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:yn([ke.sprite,ke.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:yn([ke.common,ke.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:yn([ke.lights,ke.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};mi.physical={uniforms:yn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Sa={r:0,b:0,g:0},Fs=new ai,Iv=new Qe;function Pv(i,e,t,n,s,r,o){let a=new Ee(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1,g=x(v);g===null?d(a,c):g&&g.isColor&&(d(g,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let g=x(y);g&&(g.isCubeTexture||g.mapping===fc)?(u===void 0&&(u=new at(new rn(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:kr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fs.copy(y.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(Fs)),u.material.toneMapped=ht.getTransfer(g.colorSpace)!==Mt,(h!==g||f!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new at(new An(2,2),new St({name:"BackgroundMaterial",uniforms:kr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(g.colorSpace)!==Mt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=g,f=g.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,y){v.getRGB(Sa,dp(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:_,addToRenderList:m}}function Lv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,I,V,z,P){let H=!1,G=h(z,V,I);r!==G&&(r=G,l(r.object)),H=p(S,z,V,P),H&&x(S,z,V,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,g(S,I,V,z),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,I,V){let z=V.wireframe===!0,P=n[S.id];P===void 0&&(P={},n[S.id]=P);let H=P[I.id];H===void 0&&(H={},P[I.id]=H);let G=H[z];return G===void 0&&(G=f(c()),H[z]=G),G}function f(S){let I=[],V=[],z=[];for(let P=0;P<t;P++)I[P]=0,V[P]=0,z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,I,V,z){let P=r.attributes,H=I.attributes,G=0,ee=V.getAttributes();for(let k in ee)if(ee[k].location>=0){let ue=P[k],pe=H[k];if(pe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function x(S,I,V,z){let P={},H=I.attributes,G=0,ee=V.getAttributes();for(let k in ee)if(ee[k].location>=0){let ue=H[k];ue===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));let pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),P[k]=pe,G++}r.attributes=P,r.attributesNum=G,r.index=z}function _(){let S=r.newAttributes;for(let I=0,V=S.length;I<V;I++)S[I]=0}function m(S){d(S,0)}function d(S,I){let V=r.newAttributes,z=r.enabledAttributes,P=r.attributeDivisors;V[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),P[S]!==I&&(i.vertexAttribDivisor(S,I),P[S]=I)}function v(){let S=r.newAttributes,I=r.enabledAttributes;for(let V=0,z=I.length;V<z;V++)I[V]!==S[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function y(S,I,V,z,P,H,G){G===!0?i.vertexAttribIPointer(S,I,V,P,H):i.vertexAttribPointer(S,I,V,z,P,H)}function g(S,I,V,z){_();let P=z.attributes,H=V.getAttributes(),G=I.defaultAttributeValues;for(let ee in H){let k=H[ee];if(k.location>=0){let X=P[ee];if(X===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){let ue=X.normalized,pe=X.itemSize,Me=e.get(X);if(Me===void 0)continue;let fe=Me.buffer,ie=Me.type,$=Me.bytesPerElement,j=ie===i.INT||ie===i.UNSIGNED_INT||X.gpuType===Ju;if(X.isInterleavedBufferAttribute){let D=X.data,Y=D.stride,Z=X.offset;if(D.isInstancedInterleavedBuffer){for(let se=0;se<k.locationSize;se++)d(k.location+se,D.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let se=0;se<k.locationSize;se++)m(k.location+se);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let se=0;se<k.locationSize;se++)y(k.location+se,pe/k.locationSize,ie,ue,Y*$,(Z+pe/k.locationSize*se)*$,j)}else{if(X.isInstancedBufferAttribute){for(let D=0;D<k.locationSize;D++)d(k.location+D,X.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let D=0;D<k.locationSize;D++)m(k.location+D);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let D=0;D<k.locationSize;D++)y(k.location+D,pe/k.locationSize,ie,ue,pe*$,pe/k.locationSize*D*$,j)}}else if(G!==void 0){let ue=G[ee];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(k.location,ue);break;case 3:i.vertexAttrib3fv(k.location,ue);break;case 4:i.vertexAttrib4fv(k.location,ue);break;default:i.vertexAttrib1fv(k.location,ue)}}}}v()}function T(){A();for(let S in n){let I=n[S];for(let V in I){let z=I[V];for(let P in z)u(z[P].object),delete z[P];delete I[V]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let V in I){let z=I[V];for(let P in z)u(z[P].object),delete z[P];delete I[V]}delete n[S.id]}function M(S){for(let I in n){let V=n[I];if(V[S.id]===void 0)continue;let z=V[S.id];for(let P in z)u(z[P].object),delete z[P];delete V[S.id]}}function A(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Dv(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=u[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Nv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==Wn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let A=M===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Bi&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ri&&!A)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:T,maxSamples:b}}function Uv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ii,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let x=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||x===null||x.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,y=v*4,g=d.clippingState||null;c.value=g,g=u(x,f,y,p);for(let T=0;T!==y;++T)g[T]=t[T];d.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,x){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,x!==!0||m===null){let d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,g=p;y!==_;++y,g+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,g),m[g+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Fv(i){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=Lr:a===zl&&(o.mapping=Dr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bl||a===zl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new xu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ls=class extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tr=4,ad=[.125,.215,.35,.446,.526,.582],zs=20,_l=new ls,cd=new Ee,vl=null,yl=0,Ml=0,Sl=!1,Bs=(1+Math.sqrt(5))/2,_r=1/Bs,ld=[new O(-Bs,_r,0),new O(Bs,_r,0),new O(-_r,0,Bs),new O(_r,0,Bs),new O(0,Bs,-_r),new O(0,Bs,_r),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:bn,format:Wn,colorSpace:gn,depthBuffer:!1},s=ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ov(r)),this._blurMaterial=Bv(r,e,t)}return s}_compileMaterial(e){let t=new at(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,s){let a=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cd),u.toneMapping=as,u.autoClear=!1;let p=new Gt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),x=new at(new rn,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(cd),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let y=this._cubeSize;ba(s,v*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Lr||e.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ba(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ld[(s-r-1)%ld.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new at(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zs-1),_=r/x,m=isFinite(r)?1+Math.floor(u*_):zs;m>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let d=[],v=0;for(let M=0;M<zs;++M){let A=M/_,E=Math.exp(-A*A/2);d.push(E),M===0?v+=E:M<m&&(v+=2*E)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-n;let g=this._sizeLods[s],T=3*g*(s>y-Tr?s-y+Tr:0),b=4*(this._cubeSize-g);ba(t,T,b,3*g,2*g),c.setRenderTarget(t),c.render(h,_l)}};function Ov(i){let e=[],t=[],n=[],s=i,r=i-Tr+1+ad.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Tr?c=ad[o-i+Tr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,_=3,m=2,d=1,v=new Float32Array(_*x*p),y=new Float32Array(m*x*p),g=new Float32Array(d*x*p);for(let b=0;b<p;b++){let M=b%3*2/3-1,A=b>2?0:-1,E=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];v.set(E,_*x*b),y.set(f,m*x*b);let S=[b,b,b,b,b,b];g.set(S,d*x*b)}let T=new pt;T.setAttribute("position",new xt(v,_)),T.setAttribute("uv",new xt(y,m)),T.setAttribute("faceIndex",new xt(g,d)),e.push(T),s>Tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ud(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bv(i,e,t){let n=new Float32Array(zs),s=new O(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function hd(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function fd(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function zv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bl||c===zl,u=c===Lr||c===Dr;if(l||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Hr(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Hr(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&bo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hv(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let x in p){let _=p[x];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,x=h.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let y=0,g=v.length;y<g;y+=3){let T=v[y+0],b=v[y+1],M=v[y+2];f.push(T,b,b,M,M,T)}}else if(x!==void 0){let v=x.array;_=x.version;for(let y=0,g=v.length/3-1;y<g;y+=3){let T=y+0,b=y+1,M=y+2;f.push(T,b,b,M,M,T)}}else return;let m=new(hp(f)?Xa:Wa)(f,1);m.version=_;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Vv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function h(f,p,x,_){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,x);let d=0;for(let v=0;v<x;v++)d+=p[v]*_[v];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Gv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wv(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let E=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;p===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let g=a.attributes.position.count*y,T=1;g>e.maxTextureSize&&(T=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let b=new Float32Array(g*T*4*h),M=new Va(b,g,T,h);M.type=ri,M.needsUpdate=!0;let A=y*4;for(let S=0;S<h;S++){let I=m[S],V=d[S],z=v[S],P=g*T*4*S;for(let H=0;H<I.count;H++){let G=H*A;p===!0&&(s.fromBufferAttribute(I,H),b[P+G+0]=s.x,b[P+G+1]=s.y,b[P+G+2]=s.z,b[P+G+3]=0),x===!0&&(s.fromBufferAttribute(V,H),b[P+G+4]=s.x,b[P+G+5]=s.y,b[P+G+6]=s.z,b[P+G+7]=0),_===!0&&(s.fromBufferAttribute(z,H),b[P+G+8]=s.x,b[P+G+9]=s.y,b[P+G+10]=s.z,b[P+G+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:M,size:new Ze(g,T)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Xv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Za=class extends sn{constructor(e,t,n,s,r,o,a,c,l,u=Ar){if(u!==Ar&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ar&&(n=ks),n===void 0&&u===Ur&&(n=Nr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mp=new sn,dd=new Za(1,1),gp=new Va,xp=new mu,_p=new Ya,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),_d=new Float32Array(4);function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mc(i,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function $v(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),en(t,n)}}function Jv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),en(t,n)}}function jv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),en(t,n)}}function Qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function iy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dd.compareFunction=lp,r=dd):r=mp,t.setTexture2D(e||r,s)}function cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xp,s)}function ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_p,s)}function uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gp,s)}function hy(i){switch(i){case 5126:return qv;case 35664:return Yv;case 35665:return Zv;case 35666:return Kv;case 35674:return $v;case 35675:return Jv;case 35676:return jv;case 5124:case 35670:return Qv;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return uy}}function fy(i,e){i.uniform1fv(this.addr,e)}function dy(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function py(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function my(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function gy(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xy(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _y(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vy(i,e){i.uniform1iv(this.addr,e)}function yy(i,e){i.uniform2iv(this.addr,e)}function My(i,e){i.uniform3iv(this.addr,e)}function Sy(i,e){i.uniform4iv(this.addr,e)}function by(i,e){i.uniform1uiv(this.addr,e)}function Ey(i,e){i.uniform2uiv(this.addr,e)}function Ty(i,e){i.uniform3uiv(this.addr,e)}function wy(i,e){i.uniform4uiv(this.addr,e)}function Ay(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mp,r[o])}function Ry(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xp,r[o])}function Cy(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_p,r[o])}function Iy(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gp,r[o])}function Py(i){switch(i){case 5126:return fy;case 35664:return dy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return xy;case 35676:return _y;case 5124:case 35670:return vy;case 35667:case 35671:return yy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return by;case 36294:return Ey;case 36295:return Ty;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Iy}}var _u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hy(t.type)}},vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Py(t.type)}},yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function vd(i,e){i.seq.push(e),i.map[e.id]=e}function Ly(i,e,t){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),o=bl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vd(t,l===void 0?new _u(a,i,e):new vu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new yu(a),vd(t,h)),t=h}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ly(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Dy=37297,Ny=0;function Uy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Md=new lt;function Fy(i){ht._getMatrix(Md,ht.workingColorSpace,i);let e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case pc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Uy(i.getShaderSource(e),o)}else return s}function Oy(i,e){let t=Fy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function By(i,e){let t;switch(e){case Xu:t="Linear";break;case qu:t="Reinhard";break;case Yu:t="Cineon";break;case zo:t="ACESFilmic";break;case Zu:t="AgX";break;case Ku:t="Neutral";break;case eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ea=new O;function zy(){ht.getLuminanceCoefficients(Ea);let i=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ky(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Hy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Eo(i){return i!==""}function bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(i){return i.replace(Gy,Xy)}var Wy=new Map;function Xy(i,e){let t=ut[e];if(t===void 0){let n=Wy.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mu(t)}var qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(qy,Yy)}function Yy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Zy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Ky(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lr:case Dr:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $y(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Dr&&(e="ENVMAP_MODE_REFRACTION"),e}function Jy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wu:e="ENVMAP_BLENDING_MULTIPLY";break;case j0:e="ENVMAP_BLENDING_MIX";break;case Q0:e="ENVMAP_BLENDING_ADD";break}return e}function jy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Zy(t),l=Ky(t),u=$y(t),h=Jy(t),f=jy(t),p=ky(t),x=Hy(r),_=s.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Eo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Eo).join(`
`),d.length>0&&(d+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),d=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?ut.tonemapping_pars_fragment:"",t.toneMapping!==as?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),zy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),o=Mu(o),o=bd(o,t),o=Ed(o,t),a=Mu(a),a=bd(a,t),a=Ed(a,t),o=Td(o),a=Td(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=v+m+o,g=v+d+a,T=yd(s,s.VERTEX_SHADER,y),b=yd(s,s.FRAGMENT_SHADER,g);s.attachShader(_,T),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(I){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(T).trim(),P=s.getShaderInfoLog(b).trim(),H=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,b);else{let ee=Sd(s,T,"vertex"),k=Sd(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ee+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||P==="")&&(G=!1);G&&(I.diagnostics={runnable:H,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:P,prefix:d}})}s.deleteShader(T),s.deleteShader(b),A=new Cr(s,_),E=Vy(s,_)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Dy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ny++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}var eM=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bu(e),t.set(e,n)),n}},bu=class{constructor(e){this.id=eM++,this.code=e,this.usedTimes=0}};function tM(i,e,t,n,s,r,o){let a=new Ga,c=new Su,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,V,z){let P=V.fog,H=z.geometry,G=E.isMeshStandardMaterial?V.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),k=ee&&ee.mapping===fc?ee.image.height:null,X=x[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pe=ue!==void 0?ue.length:0,Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let fe,ie,$,j;if(X){let Oe=mi[X];fe=Oe.vertexShader,ie=Oe.fragmentShader}else fe=E.vertexShader,ie=E.fragmentShader,c.update(E),$=c.getVertexShaderID(E),j=c.getFragmentShaderID(E);let D=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),Z=z.isInstancedMesh===!0,se=z.isBatchedMesh===!0,_e=!!E.map,Se=!!E.matcap,Ae=!!ee,W=!!E.aoMap,We=!!E.lightMap,ze=!!E.bumpMap,Fe=!!E.normalMap,Re=!!E.displacementMap,Ge=!!E.emissiveMap,De=!!E.metalnessMap,L=!!E.roughnessMap,w=E.anisotropy>0,U=E.clearcoat>0,ne=E.dispersion>0,re=E.iridescence>0,te=E.sheen>0,xe=E.transmission>0,be=w&&!!E.anisotropyMap,Ie=U&&!!E.clearcoatMap,He=U&&!!E.clearcoatNormalMap,ye=U&&!!E.clearcoatRoughnessMap,Ne=re&&!!E.iridescenceMap,Ke=re&&!!E.iridescenceThicknessMap,Ye=te&&!!E.sheenColorMap,me=te&&!!E.sheenRoughnessMap,Be=!!E.specularMap,ve=!!E.specularColorMap,Le=!!E.specularIntensityMap,q=xe&&!!E.transmissionMap,Te=xe&&!!E.thicknessMap,R=!!E.gradientMap,N=!!E.alphaMap,F=E.alphaTest>0,J=!!E.alphaHash,le=!!E.extensions,we=as;E.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(we=i.toneMapping);let Ue={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:fe,fragmentShader:ie,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:se,batchingColor:se&&z._colorsTexture!==null,instancing:Z,instancingColor:Z&&z.instanceColor!==null,instancingMorph:Z&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:gn,alphaToCoverage:!!E.alphaToCoverage,map:_e,matcap:Se,envMap:Ae,envMapMode:Ae&&ee.mapping,envMapCubeUVHeight:k,aoMap:W,lightMap:We,bumpMap:ze,normalMap:Fe,displacementMap:f&&Re,emissiveMap:Ge,normalMapObjectSpace:Fe&&E.normalMapType===rg,normalMapTangentSpace:Fe&&E.normalMapType===sh,metalnessMap:De,roughnessMap:L,anisotropy:w,anisotropyMap:be,clearcoat:U,clearcoatMap:Ie,clearcoatNormalMap:He,clearcoatRoughnessMap:ye,dispersion:ne,iridescence:re,iridescenceMap:Ne,iridescenceThicknessMap:Ke,sheen:te,sheenColorMap:Ye,sheenRoughnessMap:me,specularMap:Be,specularColorMap:ve,specularIntensityMap:Le,transmission:xe,transmissionMap:q,thicknessMap:Te,gradientMap:R,opaque:E.transparent===!1&&E.blending===wr&&E.alphaToCoverage===!1,alphaMap:N,alphaTest:F,alphaHash:J,combine:E.combine,mapUv:_e&&_(E.map.channel),aoMapUv:W&&_(E.aoMap.channel),lightMapUv:We&&_(E.lightMap.channel),bumpMapUv:ze&&_(E.bumpMap.channel),normalMapUv:Fe&&_(E.normalMap.channel),displacementMapUv:Re&&_(E.displacementMap.channel),emissiveMapUv:Ge&&_(E.emissiveMap.channel),metalnessMapUv:De&&_(E.metalnessMap.channel),roughnessMapUv:L&&_(E.roughnessMap.channel),anisotropyMapUv:be&&_(E.anisotropyMap.channel),clearcoatMapUv:Ie&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(E.sheenRoughnessMap.channel),specularMapUv:Be&&_(E.specularMap.channel),specularColorMapUv:ve&&_(E.specularColorMap.channel),specularIntensityMapUv:Le&&_(E.specularIntensityMap.channel),transmissionMapUv:q&&_(E.transmissionMap.channel),thicknessMapUv:Te&&_(E.thicknessMap.channel),alphaMapUv:N&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Fe||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(_e||N),fog:!!P,useFog:E.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Y,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:_e&&E.map.isVideoTexture===!0&&ht.getTransfer(E.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ge&&E.emissiveMap.isVideoTexture===!0&&ht.getTransfer(E.emissiveMap.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wt,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:le&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&E.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function d(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function g(E){let S=x[E.type],I;if(S){let V=mi[S];I=yi.clone(V.uniforms)}else I=E.uniforms;return I}function T(E,S){let I;for(let V=0,z=u.length;V<z;V++){let P=u[V];if(P.cacheKey===S){I=P,++I.usedTimes;break}}return I===void 0&&(I=new Qy(i,S,E,r),u.push(I)),I}function b(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function M(E){c.remove(E)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:T,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:A}}function nM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function iM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,x,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,x,_,m){let d=o(h,f,p,x,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(h,f,p,x,_,m){let d=o(h,f,p,x,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||iM),n.length>1&&n.sort(f||Ad),s.length>1&&s.sort(f||Ad)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function sM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Rd,i.set(n,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ee};break;case"SpotLight":t={position:new O,direction:new O,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function oM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var aM=0;function cM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lM(i){let e=new rM,t=oM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new Qe,o=new Qe;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,x=0,_=0,m=0,d=0,v=0,y=0,g=0,T=0,b=0,M=0;l.sort(cM);for(let E=0,S=l.length;E<S;E++){let I=l[E],V=I.color,z=I.intensity,P=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*z,h+=V.g*z,f+=V.b*z;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],z);M++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,k=t.get(I);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=I.shadow.matrix,v++}n.directional[p]=G,p++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(V).multiplyScalar(z),G.distance=P,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;let ee=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,ee.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[_]=ee.matrix,I.castShadow){let k=t.get(I);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=H,g++}_++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(V).multiplyScalar(z),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let ee=I.shadow,k=t.get(I);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,k.shadowCameraNear=ee.camera.near,k.shadowCameraFar=ee.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=H,n.pointShadowMatrix[x]=I.shadow.matrix,y++}n.point[x]=G,x++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(z),G.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==p||A.pointLength!==x||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==g||A.numSpotMaps!==T||A.numLightProbes!==M)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=g+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=M,A.directionalLength=p,A.pointLength=x,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=g,A.numSpotMaps=T,A.numLightProbes=M,n.version=aM++)}function c(l,u){let h=0,f=0,p=0,x=0,_=0,m=u.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let y=l[d];if(y.isDirectionalLight){let g=n.directional[h];g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(y.isSpotLight){let g=n.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let g=n.rectArea[x];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let g=n.point[f];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let g=n.hemi[_];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Cd(i){let e=new lM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function uM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cd(i),e.set(s,[a])):r>=o.length?(a=new Cd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Eu=class extends Mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tu=class extends Mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
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
}`;function dM(i,e,t){let n=new Do,s=new Ze,r=new Ze,o=new gt,a=new Eu({depthPacking:sg}),c=new Tu,l={},u=t.maxTextureSize,h={[xi]:Kt,[Kt]:xi,[wt]:wt},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:hM,fragmentShader:fM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new pt;x.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new at(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let d=this.type;this.render=function(b,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let E=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(gi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=d!==Li&&this.type===Li,P=d===Li&&this.type!==Li;for(let H=0,G=b.length;H<G;H++){let ee=b[H],k=ee.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let X=k.getFrameExtents();if(s.multiply(X),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||z===!0||P===!0){let pe=this.type!==Li?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new Jt(s.x,s.y,pe),k.map.texture.name=ee.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ue=k.getViewportCount();for(let pe=0;pe<ue;pe++){let Me=k.getViewport(pe);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),V.viewport(o),k.updateMatrices(ee,pe),n=k.getFrustum(),g(M,A,k.camera,ee,this.type)}k.isPointLightShadow!==!0&&this.type===Li&&v(k,A),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,I)};function v(b,M){let A=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Jt(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,A,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,A,p,_,null)}function y(b,M,A,E){let S=null,I=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=A.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let V=S.uuid,z=M.uuid,P=l[V];P===void 0&&(P={},l[V]=P);let H=P[z];H===void 0&&(H=S.clone(),P[z]=H,M.addEventListener("dispose",T)),S=H}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Li?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=i.properties.get(S);V.light=A}return S}function g(b,M,A,E,S){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Li)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let z=e.update(b),P=b.material;if(Array.isArray(P)){let H=z.groups;for(let G=0,ee=H.length;G<ee;G++){let k=H[G],X=P[k.materialIndex];if(X&&X.visible){let ue=y(b,X,E,S);b.onBeforeShadow(i,b,M,A,z,ue,k),i.renderBufferDirect(A,null,z,ue,b,k),b.onAfterShadow(i,b,M,A,z,ue,k)}}}else if(P.visible){let H=y(b,P,E,S);b.onBeforeShadow(i,b,M,A,z,H,null),i.renderBufferDirect(A,null,z,H,b,null),b.onAfterShadow(i,b,M,A,z,H,null)}}let V=b.children;for(let z=0,P=V.length;z<P;z++)g(V[z],M,A,E,S)}function T(b){b.target.removeEventListener("dispose",T);for(let A in l){let E=l[A],S=b.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var pM={[Pl]:Ll,[Dl]:Fl,[Nl]:Ol,[Pr]:Ul,[Ll]:Pl,[Fl]:Dl,[Ol]:Nl,[Ul]:Pr};function mM(i,e){function t(){let q=!1,Te=new gt,R=null,N=new gt(0,0,0,0);return{setMask:function(F){R!==F&&!q&&(i.colorMask(F,F,F,F),R=F)},setLocked:function(F){q=F},setClear:function(F,J,le,we,Ue){Ue===!0&&(F*=we,J*=we,le*=we),Te.set(F,J,le,we),N.equals(Te)===!1&&(i.clearColor(F,J,le,we),N.copy(Te))},reset:function(){q=!1,R=null,N.set(-1,0,0,0)}}}function n(){let q=!1,Te=!1,R=null,N=null,F=null;return{setReversed:function(J){if(Te!==J){let le=e.get("EXT_clip_control");Te?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);let we=F;F=null,this.setClear(we)}Te=J},getReversed:function(){return Te},setTest:function(J){J?D(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(J){R!==J&&!q&&(i.depthMask(J),R=J)},setFunc:function(J){if(Te&&(J=pM[J]),N!==J){switch(J){case Pl:i.depthFunc(i.NEVER);break;case Ll:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Nl:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case Fl:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}N=J}},setLocked:function(J){q=J},setClear:function(J){F!==J&&(Te&&(J=1-J),i.clearDepth(J),F=J)},reset:function(){q=!1,R=null,N=null,F=null,Te=!1}}}function s(){let q=!1,Te=null,R=null,N=null,F=null,J=null,le=null,we=null,Ue=null;return{setTest:function(Oe){q||(Oe?D(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Oe){Te!==Oe&&!q&&(i.stencilMask(Oe),Te=Oe)},setFunc:function(Oe,B,oe){(R!==Oe||N!==B||F!==oe)&&(i.stencilFunc(Oe,B,oe),R=Oe,N=B,F=oe)},setOp:function(Oe,B,oe){(J!==Oe||le!==B||we!==oe)&&(i.stencilOp(Oe,B,oe),J=Oe,le=B,we=oe)},setLocked:function(Oe){q=Oe},setClear:function(Oe){Ue!==Oe&&(i.clearStencil(Oe),Ue=Oe)},reset:function(){q=!1,Te=null,R=null,N=null,F=null,J=null,le=null,we=null,Ue=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,v=null,y=null,g=null,T=null,b=null,M=new Ee(0,0,0),A=0,E=!1,S=null,I=null,V=null,z=null,P=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ee=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=ee>=1):k.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=ee>=2);let X=null,ue={},pe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),fe=new gt().fromArray(pe),ie=new gt().fromArray(Me);function $(q,Te,R,N){let F=new Uint8Array(4),J=i.createTexture();i.bindTexture(q,J),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<R;le++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,N,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(Te+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return J}let j={};j[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(i.DEPTH_TEST),o.setFunc(Pr),ze(!1),Fe(Pf),D(i.CULL_FACE),W(gi);function D(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function Y(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function Z(q,Te){return h[q]!==Te?(i.bindFramebuffer(q,Te),h[q]=Te,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function se(q,Te){let R=p,N=!1;if(q){R=f.get(Te),R===void 0&&(R=[],f.set(Te,R));let F=q.textures;if(R.length!==F.length||R[0]!==i.COLOR_ATTACHMENT0){for(let J=0,le=F.length;J<le;J++)R[J]=i.COLOR_ATTACHMENT0+J;R.length=F.length,N=!0}}else R[0]!==i.BACK&&(R[0]=i.BACK,N=!0);N&&i.drawBuffers(R)}function _e(q){return x!==q?(i.useProgram(q),x=q,!0):!1}let Se={[Di]:i.FUNC_ADD,[F0]:i.FUNC_SUBTRACT,[O0]:i.FUNC_REVERSE_SUBTRACT};Se[B0]=i.MIN,Se[z0]=i.MAX;let Ae={[k0]:i.ZERO,[Gu]:i.ONE,[H0]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[Y0]:i.SRC_ALPHA_SATURATE,[X0]:i.DST_COLOR,[G0]:i.DST_ALPHA,[V0]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[q0]:i.ONE_MINUS_DST_COLOR,[W0]:i.ONE_MINUS_DST_ALPHA,[Z0]:i.CONSTANT_COLOR,[K0]:i.ONE_MINUS_CONSTANT_COLOR,[$0]:i.CONSTANT_ALPHA,[J0]:i.ONE_MINUS_CONSTANT_ALPHA};function W(q,Te,R,N,F,J,le,we,Ue,Oe){if(q===gi){_===!0&&(Y(i.BLEND),_=!1);return}if(_===!1&&(D(i.BLEND),_=!0),q!==Vu){if(q!==m||Oe!==E){if((d!==Di||g!==Di)&&(i.blendEquation(i.FUNC_ADD),d=Di,g=Di),Oe)switch(q){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ir:i.blendFunc(i.ONE,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Df:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ir:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Df:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}v=null,y=null,T=null,b=null,M.set(0,0,0),A=0,m=q,E=Oe}return}F=F||Te,J=J||R,le=le||N,(Te!==d||F!==g)&&(i.blendEquationSeparate(Se[Te],Se[F]),d=Te,g=F),(R!==v||N!==y||J!==T||le!==b)&&(i.blendFuncSeparate(Ae[R],Ae[N],Ae[J],Ae[le]),v=R,y=N,T=J,b=le),(we.equals(M)===!1||Ue!==A)&&(i.blendColor(we.r,we.g,we.b,Ue),M.copy(we),A=Ue),m=q,E=!1}function We(q,Te){q.side===wt?Y(i.CULL_FACE):D(i.CULL_FACE);let R=q.side===Kt;Te&&(R=!R),ze(R),q.blending===wr&&q.transparent===!1?W(gi):W(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let N=q.stencilWrite;a.setTest(N),N&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ge(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(q){S!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),S=q)}function Fe(q){q!==D0?(D(i.CULL_FACE),q!==I&&(q===Pf?i.cullFace(i.BACK):q===N0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),I=q}function Re(q){q!==V&&(G&&i.lineWidth(q),V=q)}function Ge(q,Te,R){q?(D(i.POLYGON_OFFSET_FILL),(z!==Te||P!==R)&&(i.polygonOffset(Te,R),z=Te,P=R)):Y(i.POLYGON_OFFSET_FILL)}function De(q){q?D(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function L(q){q===void 0&&(q=i.TEXTURE0+H-1),X!==q&&(i.activeTexture(q),X=q)}function w(q,Te,R){R===void 0&&(X===null?R=i.TEXTURE0+H-1:R=X);let N=ue[R];N===void 0&&(N={type:void 0,texture:void 0},ue[R]=N),(N.type!==q||N.texture!==Te)&&(X!==R&&(i.activeTexture(R),X=R),i.bindTexture(q,Te||j[q]),N.type=q,N.texture=Te)}function U(){let q=ue[X];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ne(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ye(q){fe.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),fe.copy(q))}function me(q){ie.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ie.copy(q))}function Be(q,Te){let R=l.get(Te);R===void 0&&(R=new WeakMap,l.set(Te,R));let N=R.get(q);N===void 0&&(N=i.getUniformBlockIndex(Te,q.name),R.set(q,N))}function ve(q,Te){let N=l.get(Te).get(q);c.get(Te)!==N&&(i.uniformBlockBinding(Te,N,q.__bindingPointIndex),c.set(Te,N))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,ue={},h={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,v=null,y=null,g=null,T=null,b=null,M=new Ee(0,0,0),A=0,E=!1,S=null,I=null,V=null,z=null,P=null,fe.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:Y,bindFramebuffer:Z,drawBuffers:se,useProgram:_e,setBlending:W,setMaterial:We,setFlipSided:ze,setCullFace:Fe,setLineWidth:Re,setPolygonOffset:Ge,setScissorTest:De,activeTexture:L,bindTexture:w,unbindTexture:U,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:Ne,texImage3D:Ke,updateUBOMapping:Be,uniformBlockBinding:ve,texStorage2D:He,texStorage3D:ye,texSubImage2D:te,texSubImage3D:xe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ie,scissor:Ye,viewport:me,reset:Le}}function Id(i,e,t,n){let s=gM(n);switch(t){case np:return i*e;case sp:return i*e;case rp:return i*e*2;case eh:return i*e/s.components*s.byteLength;case th:return i*e/s.components*s.byteLength;case op:return i*e*2/s.components*s.byteLength;case nh:return i*e*2/s.components*s.byteLength;case ip:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case ih:return i*e*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case kl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case za:case au:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ap:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uu:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gM(i){switch(i){case Bi:case Qd:return{byteLength:1,components:1};case Po:case ep:case bn:return{byteLength:2,components:1};case ju:case Qu:return{byteLength:2,components:4};case ks:case Ju:case ri:return{byteLength:4,components:1};case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return p?new OffscreenCanvas(L,w):Lo("canvas")}function _(L,w,U){let ne=1,re=De(L);if((re.width>U||re.height>U)&&(ne=U/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let te=Math.floor(ne*re.width),xe=Math.floor(ne*re.height);h===void 0&&(h=x(te,xe));let be=w?x(te,xe):h;return be.width=te,be.height=xe,be.getContext("2d").drawImage(L,0,0,te,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+te+"x"+xe+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function m(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,w,U,ne,re=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=w;if(w===i.RED&&(U===i.FLOAT&&(te=i.R32F),U===i.HALF_FLOAT&&(te=i.R16F),U===i.UNSIGNED_BYTE&&(te=i.R8)),w===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.R8UI),U===i.UNSIGNED_SHORT&&(te=i.R16UI),U===i.UNSIGNED_INT&&(te=i.R32UI),U===i.BYTE&&(te=i.R8I),U===i.SHORT&&(te=i.R16I),U===i.INT&&(te=i.R32I)),w===i.RG&&(U===i.FLOAT&&(te=i.RG32F),U===i.HALF_FLOAT&&(te=i.RG16F),U===i.UNSIGNED_BYTE&&(te=i.RG8)),w===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.RG8UI),U===i.UNSIGNED_SHORT&&(te=i.RG16UI),U===i.UNSIGNED_INT&&(te=i.RG32UI),U===i.BYTE&&(te=i.RG8I),U===i.SHORT&&(te=i.RG16I),U===i.INT&&(te=i.RG32I)),w===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.RGB8UI),U===i.UNSIGNED_SHORT&&(te=i.RGB16UI),U===i.UNSIGNED_INT&&(te=i.RGB32UI),U===i.BYTE&&(te=i.RGB8I),U===i.SHORT&&(te=i.RGB16I),U===i.INT&&(te=i.RGB32I)),w===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),U===i.UNSIGNED_INT&&(te=i.RGBA32UI),U===i.BYTE&&(te=i.RGBA8I),U===i.SHORT&&(te=i.RGBA16I),U===i.INT&&(te=i.RGBA32I)),w===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),w===i.RGBA){let xe=re?pc:ht.getTransfer(ne);U===i.FLOAT&&(te=i.RGBA32F),U===i.HALF_FLOAT&&(te=i.RGBA16F),U===i.UNSIGNED_BYTE&&(te=xe===Mt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function g(L,w){let U;return L?w===null||w===ks||w===Nr?U=i.DEPTH24_STENCIL8:w===ri?U=i.DEPTH32F_STENCIL8:w===Po&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ks||w===Nr?U=i.DEPTH_COMPONENT24:w===ri?U=i.DEPTH_COMPONENT32F:w===Po&&(U=i.DEPTH_COMPONENT16),U}function T(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==nn&&L.minFilter!==wn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function b(L){let w=L.target;w.removeEventListener("dispose",b),A(w),w.isVideoTexture&&u.delete(w)}function M(L){let w=L.target;w.removeEventListener("dispose",M),S(w)}function A(L){let w=n.get(L);if(w.__webglInit===void 0)return;let U=L.source,ne=f.get(U);if(ne){let re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(L),Object.keys(ne).length===0&&f.delete(U)}n.remove(L)}function E(L){let w=n.get(L);i.deleteTexture(w.__webglTexture);let U=L.source,ne=f.get(U);delete ne[w.__cacheKey],o.memory.textures--}function S(L){let w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let re=0;re<w.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(w.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let U=L.textures;for(let ne=0,re=U.length;ne<re;ne++){let te=n.get(U[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(U[ne])}n.remove(L)}let I=0;function V(){I=0}function z(){let L=I;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function P(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function H(L,w){let U=n.get(L);if(L.isVideoTexture&&Re(L),L.isRenderTargetTexture===!1&&L.version>0&&U.__version!==L.version){let ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(U,L,w);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+w)}function G(L,w){let U=n.get(L);if(L.version>0&&U.__version!==L.version){ie(U,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+w)}function ee(L,w){let U=n.get(L);if(L.version>0&&U.__version!==L.version){ie(U,L,w);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+w)}function k(L,w){let U=n.get(L);if(L.version>0&&U.__version!==L.version){$(U,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+w)}let X={[Oi]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},ue={[nn]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},pe={[og]:i.NEVER,[fg]:i.ALWAYS,[ag]:i.LESS,[lp]:i.LEQUAL,[cg]:i.EQUAL,[hg]:i.GEQUAL,[lg]:i.GREATER,[ug]:i.NOTEQUAL};function Me(L,w){if(w.type===ri&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===wn||w.magFilter===To||w.magFilter===Er||w.magFilter===Gn||w.minFilter===wn||w.minFilter===To||w.minFilter===Er||w.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,X[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,X[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,X[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ue[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ue[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==Er&&w.minFilter!==Gn||w.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function fe(L,w){let U=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",b));let ne=w.source,re=f.get(ne);re===void 0&&(re={},f.set(ne,re));let te=P(w);if(te!==L.__cacheKey){re[te]===void 0&&(re[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),re[te].usedTimes++;let xe=re[L.__cacheKey];xe!==void 0&&(re[L.__cacheKey].usedTimes--,xe.usedTimes===0&&E(w)),L.__cacheKey=te,L.__webglTexture=re[te].texture}return U}function ie(L,w,U){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);let re=fe(L,w),te=w.source;t.bindTexture(ne,L.__webglTexture,i.TEXTURE0+U);let xe=n.get(te);if(te.version!==xe.__version||re===!0){t.activeTexture(i.TEXTURE0+U);let be=ht.getPrimaries(ht.workingColorSpace),Ie=w.colorSpace===ss?null:ht.getPrimaries(w.colorSpace),He=w.colorSpace===ss||be===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ye=_(w.image,!1,s.maxTextureSize);ye=Ge(w,ye);let Ne=r.convert(w.format,w.colorSpace),Ke=r.convert(w.type),Ye=y(w.internalFormat,Ne,Ke,w.colorSpace,w.isVideoTexture);Me(ne,w);let me,Be=w.mipmaps,ve=w.isVideoTexture!==!0,Le=xe.__version===void 0||re===!0,q=te.dataReady,Te=T(w,ye);if(w.isDepthTexture)Ye=g(w.format===Ur,w.type),Le&&(ve?t.texStorage2D(i.TEXTURE_2D,1,Ye,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Ne,Ke,null));else if(w.isDataTexture)if(Be.length>0){ve&&Le&&t.texStorage2D(i.TEXTURE_2D,Te,Ye,Be[0].width,Be[0].height);for(let R=0,N=Be.length;R<N;R++)me=Be[R],ve?q&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,Ne,Ke,me.data):t.texImage2D(i.TEXTURE_2D,R,Ye,me.width,me.height,0,Ne,Ke,me.data);w.generateMipmaps=!1}else ve?(Le&&t.texStorage2D(i.TEXTURE_2D,Te,Ye,ye.width,ye.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Ne,Ke,ye.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Ne,Ke,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ve&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ye,Be[0].width,Be[0].height,ye.depth);for(let R=0,N=Be.length;R<N;R++)if(me=Be[R],w.format!==Wn)if(Ne!==null)if(ve){if(q)if(w.layerUpdates.size>0){let F=Id(me.width,me.height,w.format,w.type);for(let J of w.layerUpdates){let le=me.data.subarray(J*F/me.data.BYTES_PER_ELEMENT,(J+1)*F/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,J,me.width,me.height,1,Ne,le)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,me.width,me.height,ye.depth,Ne,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,Ye,me.width,me.height,ye.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,me.width,me.height,ye.depth,Ne,Ke,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,R,Ye,me.width,me.height,ye.depth,0,Ne,Ke,me.data)}else{ve&&Le&&t.texStorage2D(i.TEXTURE_2D,Te,Ye,Be[0].width,Be[0].height);for(let R=0,N=Be.length;R<N;R++)me=Be[R],w.format!==Wn?Ne!==null?ve?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,Ne,me.data):t.compressedTexImage2D(i.TEXTURE_2D,R,Ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?q&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,Ne,Ke,me.data):t.texImage2D(i.TEXTURE_2D,R,Ye,me.width,me.height,0,Ne,Ke,me.data)}else if(w.isDataArrayTexture)if(ve){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ye,ye.width,ye.height,ye.depth),q)if(w.layerUpdates.size>0){let R=Id(ye.width,ye.height,w.format,w.type);for(let N of w.layerUpdates){let F=ye.data.subarray(N*R/ye.data.BYTES_PER_ELEMENT,(N+1)*R/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,N,ye.width,ye.height,1,Ne,Ke,F)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Ke,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,ye.width,ye.height,ye.depth,0,Ne,Ke,ye.data);else if(w.isData3DTexture)ve?(Le&&t.texStorage3D(i.TEXTURE_3D,Te,Ye,ye.width,ye.height,ye.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Ke,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,ye.width,ye.height,ye.depth,0,Ne,Ke,ye.data);else if(w.isFramebufferTexture){if(Le)if(ve)t.texStorage2D(i.TEXTURE_2D,Te,Ye,ye.width,ye.height);else{let R=ye.width,N=ye.height;for(let F=0;F<Te;F++)t.texImage2D(i.TEXTURE_2D,F,Ye,R,N,0,Ne,Ke,null),R>>=1,N>>=1}}else if(Be.length>0){if(ve&&Le){let R=De(Be[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ye,R.width,R.height)}for(let R=0,N=Be.length;R<N;R++)me=Be[R],ve?q&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,Ne,Ke,me):t.texImage2D(i.TEXTURE_2D,R,Ye,Ne,Ke,me);w.generateMipmaps=!1}else if(ve){if(Le){let R=De(ye);t.texStorage2D(i.TEXTURE_2D,Te,Ye,R.width,R.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Ke,ye)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Ne,Ke,ye);m(w)&&d(ne),xe.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function $(L,w,U){if(w.image.length!==6)return;let ne=fe(L,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+U);let te=n.get(re);if(re.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+U);let xe=ht.getPrimaries(ht.workingColorSpace),be=w.colorSpace===ss?null:ht.getPrimaries(w.colorSpace),Ie=w.colorSpace===ss||xe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let He=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let N=0;N<6;N++)!He&&!ye?Ne[N]=_(w.image[N],!0,s.maxCubemapSize):Ne[N]=ye?w.image[N].image:w.image[N],Ne[N]=Ge(w,Ne[N]);let Ke=Ne[0],Ye=r.convert(w.format,w.colorSpace),me=r.convert(w.type),Be=y(w.internalFormat,Ye,me,w.colorSpace),ve=w.isVideoTexture!==!0,Le=te.__version===void 0||ne===!0,q=re.dataReady,Te=T(w,Ke);Me(i.TEXTURE_CUBE_MAP,w);let R;if(He){ve&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Be,Ke.width,Ke.height);for(let N=0;N<6;N++){R=Ne[N].mipmaps;for(let F=0;F<R.length;F++){let J=R[F];w.format!==Wn?Ye!==null?ve?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F,0,0,J.width,J.height,Ye,J.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F,Be,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F,0,0,J.width,J.height,Ye,me,J.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F,Be,J.width,J.height,0,Ye,me,J.data)}}}else{if(R=w.mipmaps,ve&&Le){R.length>0&&Te++;let N=De(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Be,N.width,N.height)}for(let N=0;N<6;N++)if(ye){ve?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ne[N].width,Ne[N].height,Ye,me,Ne[N].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Be,Ne[N].width,Ne[N].height,0,Ye,me,Ne[N].data);for(let F=0;F<R.length;F++){let le=R[F].image[N].image;ve?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F+1,0,0,le.width,le.height,Ye,me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F+1,Be,le.width,le.height,0,Ye,me,le.data)}}else{ve?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ye,me,Ne[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Be,Ye,me,Ne[N]);for(let F=0;F<R.length;F++){let J=R[F];ve?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F+1,0,0,Ye,me,J.image[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,F+1,Be,Ye,me,J.image[N])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),te.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function j(L,w,U,ne,re,te){let xe=r.convert(U.format,U.colorSpace),be=r.convert(U.type),Ie=y(U.internalFormat,xe,be,U.colorSpace),He=n.get(w),ye=n.get(U);if(ye.__renderTarget=w,!He.__hasExternalTextures){let Ne=Math.max(1,w.width>>te),Ke=Math.max(1,w.height>>te);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,te,Ie,Ne,Ke,w.depth,0,xe,be,null):t.texImage2D(re,te,Ie,Ne,Ke,0,xe,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,re,ye.__webglTexture,0,ze(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,re,ye.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(L,w,U){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){let ne=w.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,te=g(w.stencilBuffer,re),xe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=ze(w);Fe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,te,w.width,w.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,te,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,L)}else{let ne=w.textures;for(let re=0;re<ne.length;re++){let te=ne[re],xe=r.convert(te.format,te.colorSpace),be=r.convert(te.type),Ie=y(te.internalFormat,xe,be,te.colorSpace),He=ze(w);U&&Fe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ie,w.width,w.height):Fe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,Ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let re=ne.__webglTexture,te=ze(w);if(w.depthTexture.format===Ar)Fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(w.depthTexture.format===Ur)Fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Z(L){let w=n.get(L),U=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let ne=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=ne}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Y(w.__webglFramebuffer,L)}else if(U){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),D(w.__webglDepthbuffer[ne],L,!1);else{let re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),D(w.__webglDepthbuffer,L,!1);else{let ne=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(L,w,U){let ne=n.get(L);w!==void 0&&j(ne.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Z(L)}function _e(L){let w=L.texture,U=n.get(L),ne=n.get(w);L.addEventListener("dispose",M);let re=L.textures,te=L.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),te){U.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer[be]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)U.__webglFramebuffer[be][Ie]=i.createFramebuffer()}else U.__webglFramebuffer[be]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)U.__webglFramebuffer[be]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xe)for(let be=0,Ie=re.length;be<Ie;be++){let He=n.get(re[be]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Fe(L)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let be=0;be<re.length;be++){let Ie=re[be];U.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[be]);let He=r.convert(Ie.format,Ie.colorSpace),ye=r.convert(Ie.type),Ne=y(Ie.internalFormat,He,ye,Ie.colorSpace,L.isXRRenderTarget===!0),Ke=ze(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Ne,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,U.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),D(U.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Me(i.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)j(U.__webglFramebuffer[be][Ie],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie);else j(U.__webglFramebuffer[be],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let be=0,Ie=re.length;be<Ie;be++){let He=re[be],ye=n.get(He);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),Me(i.TEXTURE_2D,He),j(U.__webglFramebuffer,L,He,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),m(He)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ne.__webglTexture),Me(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)j(U.__webglFramebuffer[Ie],L,w,i.COLOR_ATTACHMENT0,be,Ie);else j(U.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,be,0);m(w)&&d(be),t.unbindTexture()}L.depthBuffer&&Z(L)}function Se(L){let w=L.textures;for(let U=0,ne=w.length;U<ne;U++){let re=w[U];if(m(re)){let te=v(L),xe=n.get(re).__webglTexture;t.bindTexture(te,xe),d(te),t.unbindTexture()}}}let Ae=[],W=[];function We(L){if(L.samples>0){if(Fe(L)===!1){let w=L.textures,U=L.width,ne=L.height,re=i.COLOR_BUFFER_BIT,te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(L),be=w.length>1;if(be)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);let He=n.get(w[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,U,ne,0,0,U,ne,re,i.NEAREST),c===!0&&(Ae.length=0,W.length=0,Ae.push(i.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ae.push(te),W.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);let He=n.get(w[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ze(L){return Math.min(s.maxSamples,L.samples)}function Fe(L){let w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Re(L){let w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Ge(L,w){let U=L.colorSpace,ne=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||U!==gn&&U!==ss&&(ht.getTransfer(U)===Mt?(ne!==Wn||re!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),w}function De(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=k,this.rebindTextures=se,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Fe}function _M(i,e){function t(n,s=ss){let r,o=ht.getTransfer(s);if(n===Bi)return i.UNSIGNED_BYTE;if(n===ju)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qd)return i.BYTE;if(n===ep)return i.SHORT;if(n===Po)return i.UNSIGNED_SHORT;if(n===Ju)return i.INT;if(n===ks)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===np)return i.ALPHA;if(n===ip)return i.RGB;if(n===Wn)return i.RGBA;if(n===sp)return i.LUMINANCE;if(n===rp)return i.LUMINANCE_ALPHA;if(n===Ar)return i.DEPTH_COMPONENT;if(n===Ur)return i.DEPTH_STENCIL;if(n===eh)return i.RED;if(n===th)return i.RED_INTEGER;if(n===op)return i.RG;if(n===nh)return i.RG_INTEGER;if(n===ih)return i.RGBA_INTEGER;if(n===Ua||n===Fa||n===Oa||n===Ba)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===Zl||n===Kl||n===$l||n===Jl||n===jl||n===Ql||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===au||n===cu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===za)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ap||n===lu||n===uu||n===hu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wu=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vM={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MM=`
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

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:yM,fragmentShader:MM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ru=class extends cs{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,x=null,_=new Au,m=t.getContextAttributes(),d=null,v=null,y=[],g=[],T=new Ze,b=null,M=new Xt;M.viewport=new gt;let A=new Xt;A.viewport=new gt;let E=[M,A],S=new wu,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let $=y[ie];return $===void 0&&($=new Ro,y[ie]=$),$.getTargetRaySpace()},this.getControllerGrip=function(ie){let $=y[ie];return $===void 0&&($=new Ro,y[ie]=$),$.getGripSpace()},this.getHand=function(ie){let $=y[ie];return $===void 0&&($=new Ro,y[ie]=$),$.getHandSpace()};function z(ie){let $=g.indexOf(ie.inputSource);if($===-1)return;let j=y[$];j!==void 0&&(j.update(ie.inputSource,ie.frame,l||o),j.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",H);for(let ie=0;ie<y.length;ie++){let $=g[ie];$!==null&&(g[ie]=null,y[ie].disconnect($))}I=null,V=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,v=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",P),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Jt(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,j=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Ur:Ar,j=m.stencil?Nr:ks);let Y={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Y),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Jt(f.textureWidth,f.textureHeight,{format:Wn,type:Bi,depthTexture:new Za(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(ie){for(let $=0;$<ie.removed.length;$++){let j=ie.removed[$],D=g.indexOf(j);D>=0&&(g[D]=null,y[D].disconnect(j))}for(let $=0;$<ie.added.length;$++){let j=ie.added[$],D=g.indexOf(j);if(D===-1){for(let Z=0;Z<y.length;Z++)if(Z>=g.length){g.push(j),D=Z;break}else if(g[Z]===null){g[Z]=j,D=Z;break}if(D===-1)break}let Y=y[D];Y&&Y.connect(j)}}let G=new O,ee=new O;function k(ie,$,j){G.setFromMatrixPosition($.matrixWorld),ee.setFromMatrixPosition(j.matrixWorld);let D=G.distanceTo(ee),Y=$.projectionMatrix.elements,Z=j.projectionMatrix.elements,se=Y[14]/(Y[10]-1),_e=Y[14]/(Y[10]+1),Se=(Y[9]+1)/Y[5],Ae=(Y[9]-1)/Y[5],W=(Y[8]-1)/Y[0],We=(Z[8]+1)/Z[0],ze=se*W,Fe=se*We,Re=D/(-W+We),Ge=Re*-W;if($.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ge),ie.translateZ(Re),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Y[10]===-1)ie.projectionMatrix.copy($.projectionMatrix),ie.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let De=se+Re,L=_e+Re,w=ze-Ge,U=Fe+(D-Ge),ne=Se*_e/L*De,re=Ae*_e/L*De;ie.projectionMatrix.makePerspective(w,U,ne,re,De,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function X(ie,$){$===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices($.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let $=ie.near,j=ie.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(j=_.depthFar)),S.near=A.near=M.near=$,S.far=A.far=M.far=j,(I!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,V=S.far),M.layers.mask=ie.layers.mask|2,A.layers.mask=ie.layers.mask|4,S.layers.mask=M.layers.mask|A.layers.mask;let D=ie.parent,Y=S.cameras;X(S,D);for(let Z=0;Z<Y.length;Z++)X(Y[Z],D);Y.length===2?k(S,M,A):S.projectionMatrix.copy(M.projectionMatrix),ue(ie,S,D)};function ue(ie,$,j){j===null?ie.matrix.copy($.matrixWorld):(ie.matrix.copy(j.matrixWorld),ie.matrix.invert(),ie.matrix.multiply($.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy($.projectionMatrix),ie.projectionMatrixInverse.copy($.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Br*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ie){c=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let pe=null;function Me(ie,$){if(u=$.getViewerPose(l||o),x=$,u!==null){let j=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let D=!1;j.length!==S.cameras.length&&(S.cameras.length=0,D=!0);for(let Z=0;Z<j.length;Z++){let se=j[Z],_e=null;if(p!==null)_e=p.getViewport(se);else{let Ae=h.getViewSubImage(f,se);_e=Ae.viewport,Z===0&&(e.setRenderTargetTextures(v,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(v))}let Se=E[Z];Se===void 0&&(Se=new Xt,Se.layers.enable(Z),Se.viewport=new gt,E[Z]=Se),Se.matrix.fromArray(se.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(se.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(_e.x,_e.y,_e.width,_e.height),Z===0&&(S.matrix.copy(Se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),D===!0&&S.cameras.push(Se)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){let Z=h.getDepthInformation(j[0]);Z&&Z.isValid&&Z.texture&&_.init(e,Z,s.renderState)}}for(let j=0;j<y.length;j++){let D=g[j],Y=y[j];D!==null&&Y!==void 0&&Y.update(D,$,l||o)}pe&&pe(ie,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),x=null}let fe=new pp;fe.setAnimationLoop(Me),this.setAnimationLoop=function(ie){pe=ie},this.dispose=function(){}}},Os=new ai,SM=new Qe;function bM(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,dp(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d),y=v.envMap,g=v.envMapRotation;y&&(m.envMap.value=y,Os.copy(g),Os.x*=-1,Os.y*=-1,Os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),m.envMapRotation.value.setFromMatrix4(SM.makeRotationFromEuler(Os)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function EM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let g=y.program;n.uniformBlockBinding(v,g)}function l(v,y){let g=s[v.id];g===void 0&&(x(v),g=u(v),s[v.id]=g,v.addEventListener("dispose",m));let T=y.program;n.updateUBOMapping(v,T);let b=e.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function u(v){let y=h();v.__bindingPointIndex=y;let g=i.createBuffer(),T=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,g),g}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],g=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,M=g.length;b<M;b++){let A=Array.isArray(g[b])?g[b]:[g[b]];for(let E=0,S=A.length;E<S;E++){let I=A[E];if(p(I,b,E,T)===!0){let V=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],P=0;for(let H=0;H<z.length;H++){let G=z[H],ee=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+P,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,P),P+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,g,T){let b=v.value,M=y+"_"+g;if(T[M]===void 0)return typeof b=="number"||typeof b=="boolean"?T[M]=b:T[M]=b.clone(),!0;{let A=T[M];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[M]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function x(v){let y=v.uniforms,g=0,T=16;for(let M=0,A=y.length;M<A;M++){let E=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,I=E.length;S<I;S++){let V=E[S],z=Array.isArray(V.value)?V.value:[V.value];for(let P=0,H=z.length;P<H;P++){let G=z[P],ee=_(G),k=g%T,X=k%ee.boundary,ue=k+X;g+=X,ue!==0&&T-ue<ee.storage&&(g+=T-ue),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=g,g+=ee.storage}}}let b=g%T;return b>0&&(g+=T-b),v.__size=g,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let g=o.indexOf(y.__bindingPointIndex);o.splice(g,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ka=class{constructor(e={}){let{canvas:t=Cg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=as,this.toneMappingExposure=1;let g=this,T=!1,b=0,M=0,A=null,E=-1,S=null,I=new gt,V=new gt,z=null,P=new Ee(0),H=0,G=t.width,ee=t.height,k=1,X=null,ue=null,pe=new gt(0,0,G,ee),Me=new gt(0,0,G,ee),fe=!1,ie=new Do,$=!1,j=!1,D=new Qe,Y=new Qe,Z=new O,se=new gt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ae(){return A===null?k:1}let W=n;function We(C,K){return t.getContext(C,K)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",J,!1),W===null){let K="webgl2";if(W=We(K,C),W===null)throw We(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Fe,Re,Ge,De,L,w,U,ne,re,te,xe,be,Ie,He,ye,Ne,Ke,Ye,me,Be,ve,Le,q;function Te(){ze=new kv(W),ze.init(),ve=new _M(W,ze),Fe=new Nv(W,ze,e,ve),Re=new mM(W,ze),Fe.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),Ge=new Gv(W),De=new nM,L=new xM(W,ze,Re,De,Fe,ve,Ge),w=new Fv(g),U=new zv(g),ne=new $g(W),Le=new Lv(W,ne),re=new Hv(W,ne,Ge,Le),te=new Xv(W,re,ne,Ge),Ye=new Wv(W,Fe,L),ye=new Uv(De),xe=new tM(g,w,U,ze,Fe,Le,ye),be=new bM(g,De),Ie=new sM,He=new uM(ze),Ke=new Pv(g,w,U,Re,te,p,c),Ne=new dM(g,te,Fe),q=new EM(W,Ge,Fe,Re),me=new Dv(W,ze,Ge),Be=new Vv(W,ze,Ge),Ge.programs=xe.programs,g.capabilities=Fe,g.extensions=ze,g.properties=De,g.renderLists=Ie,g.shadowMap=Ne,g.state=Re,g.info=Ge}Te();let R=new Ru(g,W);this.xr=R,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(G,ee,!1))},this.getSize=function(C){return C.set(G,ee)},this.setSize=function(C,K,ae=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,ee=K,t.width=Math.floor(C*k),t.height=Math.floor(K*k),ae===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(G*k,ee*k).floor()},this.setDrawingBufferSize=function(C,K,ae){G=C,ee=K,k=ae,t.width=Math.floor(C*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,K,ae,ce){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,K,ae,ce),Re.viewport(I.copy(pe).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,K,ae,ce){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,K,ae,ce),Re.scissor(V.copy(Me).multiplyScalar(k).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){Re.setScissorTest(fe=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(C=!0,K=!0,ae=!0){let ce=0;if(C){let Q=!1;if(A!==null){let Pe=A.texture.format;Q=Pe===ih||Pe===nh||Pe===th}if(Q){let Pe=A.texture.type,Ve=Pe===Bi||Pe===ks||Pe===Po||Pe===Nr||Pe===ju||Pe===Qu,$e=Ke.getClearColor(),Je=Ke.getClearAlpha(),rt=$e.r,ct=$e.g,je=$e.b;Ve?(x[0]=rt,x[1]=ct,x[2]=je,x[3]=Je,W.clearBufferuiv(W.COLOR,0,x)):(_[0]=rt,_[1]=ct,_[2]=je,_[3]=Je,W.clearBufferiv(W.COLOR,0,_))}else ce|=W.COLOR_BUFFER_BIT}K&&(ce|=W.DEPTH_BUFFER_BIT),ae&&(ce|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Ie.dispose(),He.dispose(),De.dispose(),w.dispose(),U.dispose(),te.dispose(),Le.dispose(),q.dispose(),xe.dispose(),R.dispose(),R.removeEventListener("sessionstart",he),R.removeEventListener("sessionend",de),ge.stop()};function N(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let C=Ge.autoReset,K=Ne.enabled,ae=Ne.autoUpdate,ce=Ne.needsUpdate,Q=Ne.type;Te(),Ge.autoReset=C,Ne.enabled=K,Ne.autoUpdate=ae,Ne.needsUpdate=ce,Ne.type=Q}function J(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){let K=C.target;K.removeEventListener("dispose",le),we(K)}function we(C){Ue(C),De.remove(C)}function Ue(C){let K=De.get(C).programs;K!==void 0&&(K.forEach(function(ae){xe.releaseProgram(ae)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ae,ce,Q,Pe){K===null&&(K=_e);let Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,$e=Bt(C,K,ae,ce,Q);Re.setMaterial(ce,Ve);let Je=ae.index,rt=1;if(ce.wireframe===!0){if(Je=re.getWireframeAttribute(ae),Je===void 0)return;rt=2}let ct=ae.drawRange,je=ae.attributes.position,_t=ct.start*rt,It=(ct.start+ct.count)*rt;Pe!==null&&(_t=Math.max(_t,Pe.start*rt),It=Math.min(It,(Pe.start+Pe.count)*rt)),Je!==null?(_t=Math.max(_t,0),It=Math.min(It,Je.count)):je!=null&&(_t=Math.max(_t,0),It=Math.min(It,je.count));let Dt=It-_t;if(Dt<0||Dt===1/0)return;Le.setup(Q,ce,$e,ae,Je);let Tn,vt=me;if(Je!==null&&(Tn=ne.get(Je),vt=Be,vt.setIndex(Tn)),Q.isMesh)ce.wireframe===!0?(Re.setLineWidth(ce.wireframeLinewidth*Ae()),vt.setMode(W.LINES)):vt.setMode(W.TRIANGLES);else if(Q.isLine){let et=ce.linewidth;et===void 0&&(et=1),Re.setLineWidth(et*Ae()),Q.isLineSegments?vt.setMode(W.LINES):Q.isLineLoop?vt.setMode(W.LINE_LOOP):vt.setMode(W.LINE_STRIP)}else Q.isPoints?vt.setMode(W.POINTS):Q.isSprite&&vt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)vt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))vt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let et=Q._multiDrawStarts,Ti=Q._multiDrawCounts,yt=Q._multiDrawCount,Qn=Je?ne.get(Je).bytesPerElement:1,sr=De.get(ce).currentProgram.getUniforms();for(let Pn=0;Pn<yt;Pn++)sr.setValue(W,"_gl_DrawID",Pn),vt.render(et[Pn]/Qn,Ti[Pn])}else if(Q.isInstancedMesh)vt.renderInstances(_t,Dt,Q.count);else if(ae.isInstancedBufferGeometry){let et=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ti=Math.min(ae.instanceCount,et);vt.renderInstances(_t,Dt,Ti)}else vt.render(_t,Dt)};function Oe(C,K,ae){C.transparent===!0&&C.side===wt&&C.forceSinglePass===!1?(C.side=Kt,C.needsUpdate=!0,bt(C,K,ae),C.side=xi,C.needsUpdate=!0,bt(C,K,ae),C.side=wt):bt(C,K,ae)}this.compile=function(C,K,ae=null){ae===null&&(ae=C),d=He.get(ae),d.init(K),y.push(d),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),C!==ae&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights();let ce=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let Ve=0;Ve<Pe.length;Ve++){let $e=Pe[Ve];Oe($e,ae,Q),ce.add($e)}else Oe(Pe,ae,Q),ce.add(Pe)}),y.pop(),d=null,ce},this.compileAsync=function(C,K,ae=null){let ce=this.compile(C,K,ae);return new Promise(Q=>{function Pe(){if(ce.forEach(function(Ve){De.get(Ve).currentProgram.isReady()&&ce.delete(Ve)}),ce.size===0){Q(C);return}setTimeout(Pe,10)}ze.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let B=null;function oe(C){B&&B(C)}function he(){ge.stop()}function de(){ge.start()}let ge=new pp;ge.setAnimationLoop(oe),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(C){B=C,R.setAnimationLoop(C),C===null?ge.stop():ge.start()},R.addEventListener("sessionstart",he),R.addEventListener("sessionend",de),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(K),K=R.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,K,A),d=He.get(C,y.length),d.init(K),y.push(d),Y.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ie.setFromProjectionMatrix(Y),j=this.localClippingEnabled,$=ye.init(this.clippingPlanes,j),m=Ie.get(C,v.length),m.init(),v.push(m),R.enabled===!0&&R.isPresenting===!0){let Pe=g.xr.getDepthSensingMesh();Pe!==null&&Ce(Pe,K,-1/0,g.sortObjects)}Ce(C,K,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(X,ue),Se=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Se&&Ke.addToRenderList(m,C),this.info.render.frame++,$===!0&&ye.beginShadows();let ae=d.state.shadowsArray;Ne.render(ae,C,K),$===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,Q=m.transmissive;if(d.setupLights(),K.isArrayCamera){let Pe=K.cameras;if(Q.length>0)for(let Ve=0,$e=Pe.length;Ve<$e;Ve++){let Je=Pe[Ve];qe(ce,Q,C,Je)}Se&&Ke.render(C);for(let Ve=0,$e=Pe.length;Ve<$e;Ve++){let Je=Pe[Ve];Xe(m,C,Je,Je.viewport)}}else Q.length>0&&qe(ce,Q,C,K),Se&&Ke.render(C),Xe(m,C,K);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,K),Le.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],$===!0&&ye.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ce(C,K,ae,ce){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){ce&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Y);let Ve=te.update(C),$e=C.material;$e.visible&&m.push(C,Ve,$e,ae,se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ie.intersectsObject(C))){let Ve=te.update(C),$e=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),se.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),se.copy(Ve.boundingSphere.center)),se.applyMatrix4(C.matrixWorld).applyMatrix4(Y)),Array.isArray($e)){let Je=Ve.groups;for(let rt=0,ct=Je.length;rt<ct;rt++){let je=Je[rt],_t=$e[je.materialIndex];_t&&_t.visible&&m.push(C,Ve,_t,ae,se.z,je)}}else $e.visible&&m.push(C,Ve,$e,ae,se.z,null)}}let Pe=C.children;for(let Ve=0,$e=Pe.length;Ve<$e;Ve++)Ce(Pe[Ve],K,ae,ce)}function Xe(C,K,ae,ce){let Q=C.opaque,Pe=C.transmissive,Ve=C.transparent;d.setupLightsView(ae),$===!0&&ye.setGlobalState(g.clippingPlanes,ae),ce&&Re.viewport(I.copy(ce)),Q.length>0&&nt(Q,K,ae),Pe.length>0&&nt(Pe,K,ae),Ve.length>0&&nt(Ve,K,ae),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function qe(C,K,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ce.id]===void 0&&(d.state.transmissionRenderTarget[ce.id]=new Jt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?bn:Bi,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let Pe=d.state.transmissionRenderTarget[ce.id],Ve=ce.viewport||I;Pe.setSize(Ve.z,Ve.w);let $e=g.getRenderTarget();g.setRenderTarget(Pe),g.getClearColor(P),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear(),Se&&Ke.render(ae);let Je=g.toneMapping;g.toneMapping=as;let rt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),d.setupLightsView(ce),$===!0&&ye.setGlobalState(g.clippingPlanes,ce),nt(C,ae,ce),L.updateMultisampleRenderTarget(Pe),L.updateRenderTargetMipmap(Pe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let je=0,_t=K.length;je<_t;je++){let It=K[je],Dt=It.object,Tn=It.geometry,vt=It.material,et=It.group;if(vt.side===wt&&Dt.layers.test(ce.layers)){let Ti=vt.side;vt.side=Kt,vt.needsUpdate=!0,st(Dt,ae,ce,Tn,vt,et),vt.side=Ti,vt.needsUpdate=!0,ct=!0}}ct===!0&&(L.updateMultisampleRenderTarget(Pe),L.updateRenderTargetMipmap(Pe))}g.setRenderTarget($e),g.setClearColor(P,H),rt!==void 0&&(ce.viewport=rt),g.toneMapping=Je}function nt(C,K,ae){let ce=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Pe=C.length;Q<Pe;Q++){let Ve=C[Q],$e=Ve.object,Je=Ve.geometry,rt=ce===null?Ve.material:ce,ct=Ve.group;$e.layers.test(ae.layers)&&st($e,K,ae,Je,rt,ct)}}function st(C,K,ae,ce,Q,Pe){C.onBeforeRender(g,K,ae,ce,Q,Pe),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(g,K,ae,ce,C,Pe),Q.transparent===!0&&Q.side===wt&&Q.forceSinglePass===!1?(Q.side=Kt,Q.needsUpdate=!0,g.renderBufferDirect(ae,K,ce,Q,C,Pe),Q.side=xi,Q.needsUpdate=!0,g.renderBufferDirect(ae,K,ce,Q,C,Pe),Q.side=wt):g.renderBufferDirect(ae,K,ce,Q,C,Pe),C.onAfterRender(g,K,ae,ce,Q,Pe)}function bt(C,K,ae){K.isScene!==!0&&(K=_e);let ce=De.get(C),Q=d.state.lights,Pe=d.state.shadowsArray,Ve=Q.state.version,$e=xe.getParameters(C,Q.state,Pe,K,ae),Je=xe.getProgramCacheKey($e),rt=ce.programs;ce.environment=C.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(C.isMeshStandardMaterial?U:w).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",le),rt=new Map,ce.programs=rt);let ct=rt.get(Je);if(ct!==void 0){if(ce.currentProgram===ct&&ce.lightsStateVersion===Ve)return Ct(C,$e),ct}else $e.uniforms=xe.getUniforms(C),C.onBeforeCompile($e,g),ct=xe.acquireProgram($e,Je),rt.set(Je,ct),ce.uniforms=$e.uniforms;let je=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=ye.uniform),Ct(C,$e),ce.needsLights=un(C),ce.lightsStateVersion=Ve,ce.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMap.value=Q.state.directionalShadowMap,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotShadowMap.value=Q.state.spotShadowMap,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMap.value=Q.state.pointShadowMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=ct,ce.uniformsList=null,ct}function Ot(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=Cr.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Ct(C,K){let ae=De.get(C);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function Bt(C,K,ae,ce,Q){K.isScene!==!0&&(K=_e),L.resetTextureUnits();let Pe=K.fog,Ve=ce.isMeshStandardMaterial?K.environment:null,$e=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gn,Je=(ce.isMeshStandardMaterial?U:w).get(ce.envMap||Ve),rt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),je=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,It=!!ae.morphAttributes.color,Dt=as;ce.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=g.toneMapping);let Tn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,vt=Tn!==void 0?Tn.length:0,et=De.get(ce),Ti=d.state.lights;if($===!0&&(j===!0||C!==S)){let Hn=C===S&&ce.id===E;ye.setState(ce,C,Hn)}let yt=!1;ce.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ti.state.version||et.outputColorSpace!==$e||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==Je||ce.fog===!0&&et.fog!==Pe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ye.numPlanes||et.numIntersection!==ye.numIntersection)||et.vertexAlphas!==rt||et.vertexTangents!==ct||et.morphTargets!==je||et.morphNormals!==_t||et.morphColors!==It||et.toneMapping!==Dt||et.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,et.__version=ce.version);let Qn=et.currentProgram;yt===!0&&(Qn=bt(ce,K,Q));let sr=!1,Pn=!1,lo=!1,Nt=Qn.getUniforms(),pi=et.uniforms;if(Re.useProgram(Qn.program)&&(sr=!0,Pn=!0,lo=!0),ce.id!==E&&(E=ce.id,Pn=!0),sr||S!==C){Re.buffers.depth.getReversed()?(D.copy(C.projectionMatrix),Pg(D),Lg(D),Nt.setValue(W,"projectionMatrix",D)):Nt.setValue(W,"projectionMatrix",C.projectionMatrix),Nt.setValue(W,"viewMatrix",C.matrixWorldInverse);let $i=Nt.map.cameraPosition;$i!==void 0&&$i.setValue(W,Z.setFromMatrixPosition(C.matrixWorld)),Fe.logarithmicDepthBuffer&&Nt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Nt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Pn=!0,lo=!0)}if(Q.isSkinnedMesh){Nt.setOptional(W,Q,"bindMatrix"),Nt.setOptional(W,Q,"bindMatrixInverse");let Hn=Q.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Nt.setValue(W,"boneTexture",Hn.boneTexture,L))}Q.isBatchedMesh&&(Nt.setOptional(W,Q,"batchingTexture"),Nt.setValue(W,"batchingTexture",Q._matricesTexture,L),Nt.setOptional(W,Q,"batchingIdTexture"),Nt.setValue(W,"batchingIdTexture",Q._indirectTexture,L),Nt.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Nt.setValue(W,"batchingColorTexture",Q._colorsTexture,L));let uo=ae.morphAttributes;if((uo.position!==void 0||uo.normal!==void 0||uo.color!==void 0)&&Ye.update(Q,ae,Qn),(Pn||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,Nt.setValue(W,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(pi.envMap.value=Je,pi.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&K.environment!==null&&(pi.envMapIntensity.value=K.environmentIntensity),Pn&&(Nt.setValue(W,"toneMappingExposure",g.toneMappingExposure),et.needsLights&&Vt(pi,lo),Pe&&ce.fog===!0&&be.refreshFogUniforms(pi,Pe),be.refreshMaterialUniforms(pi,ce,k,ee,d.state.transmissionRenderTarget[C.id]),Cr.upload(W,Ot(et),pi,L)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Cr.upload(W,Ot(et),pi,L),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Nt.setValue(W,"center",Q.center),Nt.setValue(W,"modelViewMatrix",Q.modelViewMatrix),Nt.setValue(W,"normalMatrix",Q.normalMatrix),Nt.setValue(W,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let Hn=ce.uniformsGroups;for(let $i=0,Ji=Hn.length;$i<Ji;$i++){let If=Hn[$i];q.update(If,Qn),q.bind(If,Qn)}}return Qn}function Vt(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function un(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,K,ae){De.get(C.texture).__webglTexture=K,De.get(C.depthTexture).__webglTexture=ae;let ce=De.get(C);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){let ae=De.get(C);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ae=0){A=C,b=K,M=ae;let ce=!0,Q=null,Pe=!1,Ve=!1;if(C){let Je=De.get(C);if(Je.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(W.FRAMEBUFFER,null),ce=!1;else if(Je.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Je.__hasExternalTextures)L.rebindTextures(C,De.get(C.texture).__webglTexture,De.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let je=C.depthTexture;if(Je.__boundDepthTexture!==je){if(je!==null&&De.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}let rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ve=!0);let ct=De.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[K])?Q=ct[K][ae]:Q=ct[K],Pe=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Q=De.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?Q=ct[ae]:Q=ct,I.copy(C.viewport),V.copy(C.scissor),z=C.scissorTest}else I.copy(pe).multiplyScalar(k).floor(),V.copy(Me).multiplyScalar(k).floor(),z=fe;if(Re.bindFramebuffer(W.FRAMEBUFFER,Q)&&ce&&Re.drawBuffers(C,Q),Re.viewport(I),Re.scissor(V),Re.setScissorTest(z),Pe){let Je=De.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Je.__webglTexture,ae)}else if(Ve){let Je=De.get(C.texture),rt=K||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Je.__webglTexture,ae||0,rt)}E=-1},this.readRenderTargetPixels=function(C,K,ae,ce,Q,Pe,Ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=De.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){Re.bindFramebuffer(W.FRAMEBUFFER,$e);try{let Je=C.texture,rt=Je.format,ct=Je.type;if(!Fe.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ce&&ae>=0&&ae<=C.height-Q&&W.readPixels(K,ae,ce,Q,ve.convert(rt),ve.convert(ct),Pe)}finally{let Je=A!==null?De.get(A).__webglFramebuffer:null;Re.bindFramebuffer(W.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,K,ae,ce,Q,Pe,Ve){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=De.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){let Je=C.texture,rt=Je.format,ct=Je.type;if(!Fe.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=C.width-ce&&ae>=0&&ae<=C.height-Q){Re.bindFramebuffer(W.FRAMEBUFFER,$e);let je=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,je),W.bufferData(W.PIXEL_PACK_BUFFER,Pe.byteLength,W.STREAM_READ),W.readPixels(K,ae,ce,Q,ve.convert(rt),ve.convert(ct),0);let _t=A!==null?De.get(A).__webglFramebuffer:null;Re.bindFramebuffer(W.FRAMEBUFFER,_t);let It=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Ig(W,It,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,je),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Pe),W.deleteBuffer(je),W.deleteSync(It),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,K=null,ae=0){C.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1]);let ce=Math.pow(2,-ae),Q=Math.floor(C.image.width*ce),Pe=Math.floor(C.image.height*ce),Ve=K!==null?K.x:0,$e=K!==null?K.y:0;L.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,ae,0,0,Ve,$e,Q,Pe),Re.unbindTexture()},this.copyTextureToTexture=function(C,K,ae=null,ce=null,Q=0){C.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,C=arguments[1],K=arguments[2],Q=arguments[3]||0,ae=null);let Pe,Ve,$e,Je,rt,ct,je,_t,It,Dt=C.isCompressedTexture?C.mipmaps[Q]:C.image;ae!==null?(Pe=ae.max.x-ae.min.x,Ve=ae.max.y-ae.min.y,$e=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,rt=ae.min.y,ct=ae.isBox3?ae.min.z:0):(Pe=Dt.width,Ve=Dt.height,$e=Dt.depth||1,Je=0,rt=0,ct=0),ce!==null?(je=ce.x,_t=ce.y,It=ce.z):(je=0,_t=0,It=0);let Tn=ve.convert(K.format),vt=ve.convert(K.type),et;K.isData3DTexture?(L.setTexture3D(K,0),et=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),et=W.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),et=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);let Ti=W.getParameter(W.UNPACK_ROW_LENGTH),yt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Qn=W.getParameter(W.UNPACK_SKIP_PIXELS),sr=W.getParameter(W.UNPACK_SKIP_ROWS),Pn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Dt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Dt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Je),W.pixelStorei(W.UNPACK_SKIP_ROWS,rt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ct);let lo=C.isDataArrayTexture||C.isData3DTexture,Nt=K.isDataArrayTexture||K.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let pi=De.get(C),uo=De.get(K),Hn=De.get(pi.__renderTarget),$i=De.get(uo.__renderTarget);Re.bindFramebuffer(W.READ_FRAMEBUFFER,Hn.__webglFramebuffer),Re.bindFramebuffer(W.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Ji=0;Ji<$e;Ji++)lo&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,De.get(C).__webglTexture,Q,ct+Ji),C.isDepthTexture?(Nt&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,De.get(K).__webglTexture,Q,It+Ji),W.blitFramebuffer(Je,rt,Pe,Ve,je,_t,Pe,Ve,W.DEPTH_BUFFER_BIT,W.NEAREST)):Nt?W.copyTexSubImage3D(et,Q,je,_t,It+Ji,Je,rt,Pe,Ve):W.copyTexSubImage2D(et,Q,je,_t,It+Ji,Je,rt,Pe,Ve);Re.bindFramebuffer(W.READ_FRAMEBUFFER,null),Re.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Nt?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(et,Q,je,_t,It,Pe,Ve,$e,Tn,vt,Dt.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(et,Q,je,_t,It,Pe,Ve,$e,Tn,Dt.data):W.texSubImage3D(et,Q,je,_t,It,Pe,Ve,$e,Tn,vt,Dt):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Q,je,_t,Pe,Ve,Tn,vt,Dt.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Q,je,_t,Dt.width,Dt.height,Tn,Dt.data):W.texSubImage2D(W.TEXTURE_2D,Q,je,_t,Pe,Ve,Tn,vt,Dt);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ti),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Qn),W.pixelStorei(W.UNPACK_SKIP_ROWS,sr),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Pn),Q===0&&K.generateMipmaps&&W.generateMipmap(et),Re.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ae=null,ce=null,Q=0){return C.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,C=arguments[2],K=arguments[3],Q=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,ae,ce,Q)},this.initRenderTarget=function(C){De.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Re.unbindTexture()},this.resetState=function(){b=0,M=0,A=null,Re.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}},Vr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var No=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new O,Hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uo=class extends Mn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vr,go=new O,yr=new O,Mr=new O,Sr=new Ze,xo=new Ze,vp=new Qe,Ta=new O,_o=new O,wa=new O,Pd=new Ze,El=new Ze,Ld=new Ze,$a=class extends Lt{constructor(e=new Uo){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gr(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Hs(n,3,0,!1)),vr.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=vr,this.material=e,this.center=new Ze(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Mr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Aa(Ta.set(-.5,-.5,0),Mr,o,yr,s,r),Aa(_o.set(.5,-.5,0),Mr,o,yr,s,r),Aa(wa.set(.5,.5,0),Mr,o,yr,s,r),Pd.set(0,0),El.set(1,0),Ld.set(1,1);let a=e.ray.intersectTriangle(Ta,_o,wa,!1,go);if(a===null&&(Aa(_o.set(-.5,.5,0),Mr,o,yr,s,r),El.set(0,1),a=e.ray.intersectTriangle(Ta,wa,_o,!1,go),a===null))return;let c=e.ray.origin.distanceTo(go);c<e.near||c>e.far||t.push({distance:c,point:go.clone(),uv:rs.getInterpolation(go,Ta,_o,wa,Pd,El,Ld,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Aa(i,e,t,n,s,r){Sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xo.x=r*Sr.x-s*Sr.y,xo.y=s*Sr.x+r*Sr.y):xo.copy(Sr),i.copy(e),i.x+=xo.x,i.y+=xo.y,i.applyMatrix4(vp)}var Dd=new O,Nd=new gt,Ud=new gt,TM=new O,Fd=new Qe,Ra=new O,Tl=new Nn,Od=new Qe,wl=new zr,Ja=class extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nf,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(s),e.ray.intersectsSphere(Tl)!==!1&&(Od.copy(s).invert(),wl.copy(e.ray).applyMatrix4(Od),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Nd.fromBufferAttribute(s.attributes.skinIndex,e),Ud.fromBufferAttribute(s.attributes.skinWeight,e),Dd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Ud.getComponent(r);if(o!==0){let a=Nd.getComponent(r);Fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TM.copy(Dd).applyMatrix4(Fd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Fo=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ja=class extends sn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,u=nn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bd=new Qe,wM=new Qe,Qa=class i{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:wM;Bd.multiplyMatrices(a,t[r]),Bd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ja(t,e,e,Wn,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fo),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Vs=class extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new Qe,zd=new Qe,Ca=[],kd=new Xn,AM=new Qe,vo=new at,yo=new Nn,mn=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,AM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),kd.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(kd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),yo.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(n),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),zd.multiplyMatrices(n,br),vo.matrixWorld=zd,vo.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let c=Ca[o];c.instanceId=r,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ja(new Float32Array(s*this.count),s,this.count,eh,ri));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var us=class extends Mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ec=new O,tc=new O,Hd=new Qe,Mo=new zr,Ia=new Nn,Al=new O,Vd=new O,Wr=class extends Lt{constructor(e=new pt,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ec.fromBufferAttribute(t,s-1),tc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;Hd.copy(s).invert(),Mo.copy(e.ray).applyMatrix4(Hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let d=u.getX(_),v=u.getX(_+1),y=Pa(this,e,Mo,c,d,v);y&&t.push(y)}if(this.isLineLoop){let _=u.getX(x-1),m=u.getX(p),d=Pa(this,e,Mo,c,_,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let d=Pa(this,e,Mo,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){let _=Pa(this,e,Mo,c,x-1,p);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ec.fromBufferAttribute(o,s),tc.fromBufferAttribute(o,r),t.distanceSqToSegment(ec,tc,Al,Vd)>n)return;Al.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Al);if(!(c<e.near||c>e.far))return{distance:c,point:Vd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Gd=new O,Wd=new O,Gs=class extends Wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Gd.fromBufferAttribute(t,s),Wd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gd.distanceTo(Wd);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},nc=class extends Wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ws=class extends Mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xd=new Qe,Cu=new zr,La=new Nn,Da=new O,hs=class extends Lt{constructor(e=new pt,t=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;Xd.copy(s).invert(),Cu.copy(e.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=f,_=p;x<_;x++){let m=l.getX(x);Da.fromBufferAttribute(h,m),qd(Da,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,_=p;x<_;x++)Da.fromBufferAttribute(h,x),qd(Da,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qd(i,e,t,n,s,r,o){let a=Cu.distanceSqToPoint(i);if(a<t){let c=new O;Cu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ci=class extends sn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Sn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],x=0,_=[],m=n/2,d=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function v(){let g=new O,T=new O,b=0,M=(t-e)/n;for(let A=0;A<=r;A++){let E=[],S=A/r,I=S*(t-e)+e;for(let V=0;V<=s;V++){let z=V/s,P=z*c+a,H=Math.sin(P),G=Math.cos(P);T.x=I*H,T.y=-S*n+m,T.z=I*G,h.push(T.x,T.y,T.z),g.set(H,M,G).normalize(),f.push(g.x,g.y,g.z),p.push(z,1-S),E.push(x++)}_.push(E)}for(let A=0;A<s;A++)for(let E=0;E<r;E++){let S=_[E][A],I=_[E+1][A],V=_[E+1][A+1],z=_[E][A+1];(e>0||E!==0)&&(u.push(S,I,z),b+=3),(t>0||E!==r-1)&&(u.push(I,V,z),b+=3)}l.addGroup(d,b,0),d+=b}function y(g){let T=x,b=new Ze,M=new O,A=0,E=g===!0?e:t,S=g===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),x++;let I=x;for(let V=0;V<=s;V++){let P=V/s*c+a,H=Math.cos(P),G=Math.sin(P);M.x=E*G,M.y=m*S,M.z=E*H,h.push(M.x,M.y,M.z),f.push(0,S,0),b.x=H*.5+.5,b.y=G*.5*S+.5,p.push(b.x,b.y),x++}for(let V=0;V<s;V++){let z=T+V,P=I+V;g===!0?u.push(P,P+1,z):u.push(P+1,P,z),A+=3}l.addGroup(d,A,g===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xs=class i extends Sn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Iu=class i extends pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new O,g=new O,T=new O;for(let b=0;b<t.length;b+=3)p(t[b+0],y),p(t[b+1],g),p(t[b+2],T),c(y,g,T,v)}function c(v,y,g,T){let b=T+1,M=[];for(let A=0;A<=b;A++){M[A]=[];let E=v.clone().lerp(g,A/b),S=y.clone().lerp(g,A/b),I=b-A;for(let V=0;V<=I;V++)V===0&&A===b?M[A][V]=E:M[A][V]=E.clone().lerp(S,V/I)}for(let A=0;A<b;A++)for(let E=0;E<2*(b-A)-1;E++){let S=Math.floor(E/2);E%2===0?(f(M[A][S+1]),f(M[A+1][S]),f(M[A][S])):(f(M[A][S+1]),f(M[A+1][S+1]),f(M[A+1][S]))}}function l(v){let y=new O;for(let g=0;g<r.length;g+=3)y.x=r[g+0],y.y=r[g+1],y.z=r[g+2],y.normalize().multiplyScalar(v),r[g+0]=y.x,r[g+1]=y.y,r[g+2]=y.z}function u(){let v=new O;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let g=m(v)/2/Math.PI+.5,T=d(v)/Math.PI+.5;o.push(g,1-T)}x(),h()}function h(){for(let v=0;v<o.length;v+=6){let y=o[v+0],g=o[v+2],T=o[v+4],b=Math.max(y,g,T),M=Math.min(y,g,T);b>.9&&M<.1&&(y<.2&&(o[v+0]+=1),g<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,y){let g=v*3;y.x=e[g+0],y.y=e[g+1],y.z=e[g+2]}function x(){let v=new O,y=new O,g=new O,T=new O,b=new Ze,M=new Ze,A=new Ze;for(let E=0,S=0;E<r.length;E+=9,S+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),g.set(r[E+6],r[E+7],r[E+8]),b.set(o[S+0],o[S+1]),M.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),T.copy(v).add(y).add(g).divideScalar(3);let I=m(T);_(b,S+0,v,I),_(M,S+2,y,I),_(A,S+4,g,I)}}function _(v,y,g,T){T<0&&v.x===1&&(o[y]=v.x-1),g.x===0&&g.z===0&&(o[y]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var qs=class i extends Iu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fs=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new O,f=new O,p=[],x=[],_=[],m=[];for(let d=0;d<=n;d++){let v=[],y=d/n,g=0;d===0&&o===0?g=.5/t:d===n&&c===Math.PI&&(g=-.5/t);for(let T=0;T<=t;T++){let b=T/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+y*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(b+g,1-y),v.push(l++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let y=u[d][v+1],g=u[d][v],T=u[d+1][v],b=u[d+1][v+1];(d!==0||o>0)&&p.push(y,g,b),(d!==n-1||c<Math.PI)&&p.push(g,T,b)}this.setIndex(p),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ic=class extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},it=class extends Mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Un=class extends it{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var sc=class extends Mn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Na(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function RM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function CM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function yp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ds=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pu=class extends ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uf,endingEnd:Uf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ff:r=e,a=2*t-n;break;case Of:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ff:o=e,c=2*n-t;break;case Of:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),_=x*x,m=_*x,d=-f*m+2*f*_-f*x,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,y=(-1-p)*m+(1.5+p)*_+.5*x,g=p*m-p*_;for(let T=0;T!==a;++T)r[T]=d*o[u+T]+v*o[l+T]+y*o[c+T]+g*o[h+T];return r}},Lu=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Du=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case Jc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&RM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let x=0;x!==n;++x){let _=t[h+x];if(_!==t[f+x]||_!==t[p+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Or;var ps=class extends qn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Fr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends qn{};rc.prototype.ValueTypeName="color";var zi=class extends qn{};zi.prototype.ValueTypeName="number";var Nu=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ki=class extends qn{InterpolantFactoryMethodLinear(e){return new Nu(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends qn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Fr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends qn{};Hi.prototype.ValueTypeName="vector";var oc=class{constructor(e="",t=-1,n=[],s=ng){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(PM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=CM(c);c=Yd(c,1,u),l=Yd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new zi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,x,_){if(p.length!==0){let m=[],d=[];yp(p,m,d,x),m.length!==0&&_.push(new h(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)p[f[x].morphTargets[_]]=-1;for(let _ in p){let m=[],d=[];for(let v=0;v!==f[x].morphTargets.length;++v){let y=f[x];m.push(y.time),d.push(y.morphTarget===_?1:0)}s.push(new zi(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{let p=".bones["+t[h].name+"]";n(Hi,p+".position",f,"pos",s),n(ki,p+".quaternion",f,"rot",s),n(Hi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function IM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return Hi;case"color":return rc;case"quaternion":return ki;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function PM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=IM(i.type);if(i.times===void 0){let t=[],n=[];yp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var os={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Uu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}},LM=new Uu,Vi=class{constructor(e){this.manager=e!==void 0?e:LM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},Fu=class extends Error{constructor(e,t){super(e),this.response=t}},Oo=class extends Vi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=os.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:s});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Pi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,x=p!==0,_=0,m=new ReadableStream({start(d){v();function v(){h.read().then(({done:y,value:g})=>{if(y)d.close();else{_+=g.byteLength;let T=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let b=0,M=u.length;b<M;b++){let A=u[b];A.onProgress&&A.onProgress(T)}d.enqueue(g),v()}},y=>{d.error(y)})}}});return new Response(m)}else throw new Fu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(x=>p.decode(x))}}}).then(l=>{os.add(e,l);let u=Pi[e];delete Pi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Pi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Pi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ou=class extends Vi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=os.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Lo("img");function c(){u(),os.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ac=class extends Vi{constructor(e){super(e)}load(e,t,n,s){let r=new sn,o=new Ou(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},qr=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rl=new Qe,Zd=new O,Kd=new O,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bu=class extends Bo{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Yr=class extends Xr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$d=new Qe,So=new O,Cl=new O,zu=class extends Bo{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),So.setFromMatrixPosition(e.matrixWorld),n.position.copy(So),Cl.copy(n.position),Cl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cl),n.updateMatrixWorld(),s.makeTranslation(-So.x,-So.y,-So.z),$d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d)}},cc=class extends Xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ku=class extends Bo{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_i=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ku}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var gs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var lc=class extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=os.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return os.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),os.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});os.add(e,c),r.manager.itemStart(e)}};var uc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Jd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Jd(){return performance.now()}var ah="\\[\\]\\.:\\/",DM=new RegExp("["+ah+"]","g"),ch="[^"+ah+"]",NM="[^"+ah.replace("\\.","")+"]",UM=/((?:WC+[\/:])*)/.source.replace("WC",ch),FM=/(WCOD+)?/.source.replace("WCOD",NM),OM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),BM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),zM=new RegExp("^"+UM+FM+OM+BM+"$"),kM=["material","materials","bones","map"],Hu=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DM,"")}static parseTrackName(e){let t=zM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Hu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ho=class i extends at{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Xt;let n=this,s=t.color!==void 0?new Ee(t.color):new Ee(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new ii,h=new O,f=new O,p=new O,x=new Qe,_=new O(0,0,-1),m=new gt,d=new O,v=new O,y=new gt,g=new Qe,T=this.camera,b=new Jt(r,o,{samples:l,type:bn}),M=new St({name:c.name!==void 0?c.name:"unspecified",uniforms:yi.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});M.uniforms.tDiffuse.value=b.texture,M.uniforms.color.value=s,M.uniforms.textureMatrix.value=g,this.material=M,this.onBeforeRender=function(A,E,S){if(f.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),x.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(x),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),x.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(x),_.add(p),v.subVectors(f,_),v.reflect(h).negate(),v.add(f),T.position.copy(d),T.up.set(0,1,0),T.up.applyMatrix4(x),T.up.reflect(h),T.lookAt(v),T.far=S.far,T.updateMatrixWorld(),T.projectionMatrix.copy(S.projectionMatrix),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(T.projectionMatrix),g.multiply(T.matrixWorldInverse),g.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let I=T.projectionMatrix;y.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],y.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],y.z=-1,y.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(y)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-a,I.elements[14]=m.w,n.visible=!1;let V=A.getRenderTarget(),z=A.xr.enabled,P=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(b),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(E,T),A.xr.enabled=z,A.shadowMap.autoUpdate=P,A.setRenderTarget(V);let H=S.viewport;H!==void 0&&A.state.viewport(H),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};Ho.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var gc=[25,18,15,12,10,8,6,4],Ys={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},xs={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function Vo(i){let e=String(i),t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Yn(i){let e=(typeof i=="number"?i>>>0:Vo(i))||1,t=e,n=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:n,range:(s,r)=>s+(r-s)*n(),int:(s,r)=>s+Math.floor(n()*(r-s+1)),pick:s=>s[Math.floor(n()*s.length)],chance:s=>n()<s,sign:()=>n()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(n()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Yn(Vo(t+":"+s))}}var xc=Math.PI*2,HM=2,Mp=2800,Sp=4200,VM=34,bp=8,Ep=60,GM=.12,WM=.1,Tp=28,XM=150,lh=52,dh=.0025,wp=1/150,qM=10,Ap=5,Rp=250,Cp=38,Ip=75,_c=150,hh=120,Np=10,YM=80,ZM=40,KM=20,$M=30,JM=95,uh=18,Pp=22,jM=60,fh=(i,e,t)=>i<e?e:i>t?t:i;function QM(i){let e=i.int(10,14),t=i.range(440,520),n=[];for(let s=0;s<e;s++){let r=i.range(-.3,.3)*(xc/e),o=s/e*xc+r,a=fh(t*i.range(.62,1.25),380,620);n.push([a*Math.cos(o),a*Math.sin(o)])}return n}function e1(i,e,t,n,s,r,o,a,c){let l=(_,m,d,v)=>{let y=(c-d)/(v-d);return[_[0]+(m[0]-_[0])*y,_[1]+(m[1]-_[1])*y]},u=l(i,e,s,r),h=l(e,t,r,o),f=l(t,n,o,a),p=l(u,h,s,o),x=l(h,f,r,a);return l(p,x,r,o)}function t1(i,e){let t=i.length,n=[];for(let s=0;s<t;s++){let r=i[(s-1+t)%t],o=i[s],a=i[(s+1)%t],c=i[(s+2)%t],l=0,u=l+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),h=u+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=h+Math.sqrt(Math.hypot(c[0]-a[0],c[1]-a[1]));for(let p=0;p<e;p++){let x=u+(h-u)*(p/e);n.push(e1(r,o,a,c,l,u,h,f,x))}}return n}function n1(i){let e=i.length,t=new Float64Array(e+1);for(let l=0;l<e;l++){let u=i[l],h=i[(l+1)%e];t[l+1]=t[l]+Math.hypot(h[0]-u[0],h[1]-u[1])}let n=t[e],s=Math.max(1,Math.round(n/HM)),r=n/s,o=new Float64Array(s),a=new Float64Array(s),c=0;for(let l=0;l<s;l++){let u=l*r;for(;c<e-1&&t[c+1]<=u;)c++;let h=i[c],f=i[(c+1)%e],p=t[c+1]-t[c],x=p>0?(u-t[c])/p:0;o[l]=h[0]+(f[0]-h[0])*x,a[l]=h[1]+(f[1]-h[1])*x}return{xs:o,zs:a,count:s,step:r}}function Lp(i,e){let t=i.length,n=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=i[(o+t)%t];for(let o=0;o<t;o++)n[o]=r/s,r+=i[(o+1+e)%t]-i[((o-e)%t+t)%t];return n}function i1(i,e,t){let n=i.length,s=new Float64Array(n),r=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,u=i[l]-i[c],h=e[l]-e[c],f=Math.hypot(u,h)||1;s[a]=u/f,r[a]=h/f}let o=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,u=(s[l]-s[c])/(2*t),h=(r[l]-r[c])/(2*t);o[a]=s[a]*h-r[a]*u}return o}function s1(i,e){let t=i.length;for(let n=0;n<50;n++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[a]*i[a]+2*ZM*e);i[o]>c+1e-9&&(i[o]=c,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[o]*i[o]+2*KM*e);i[a]>c+1e-9&&(i[a]=c,s=!0)}if(!s)break}}function Dp(i){let e=i.length,t=-1;for(let r=0;r<e;r++)if(i[r]!==i[(r-1+e)%e]){t=r;break}if(t<0)return i[0]!==0?[{start:0,len:e,key:i[0]}]:[];let n=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=i[o];s&&a===s.key?s.len++:(s&&s.key!==0&&n.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&n.push(s),n}function Up(i,e){let t=i.length,n=0;for(let s=0;s<t;s++){let r=i[s].vmax,o=i[(s+1)%t].vmax;n+=e/Math.max(1,.5*(r+o))}return n}function ph(i,e){let t=i.length,n=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let l=0;l<t;l++){let u=i[l].curv,h=Math.abs(u);h>n&&(n=h);let f=Math.abs(i[l].slope);f>s&&(s=f),r[l]=u>wp?1:u<-wp?-1:0,o[l]=h<dh?1:0}let a=0;for(let l of Dp(r))l.len*e>=qM&&a++;let c={start:0,len:0};for(let l of Dp(o))l.key===1&&l.len>c.len&&(c=l);return{minRadius:n>0?1/n:1/0,maxSlope:s,corners:a,longestStraight:c.len*e,longestStraightStart:c.start}}function r1(i,e){let t=i.length,n=lh,s=(l,u)=>(l+4096)*8192+(u+4096),r=new Map,o=new Array(t);for(let l=0;l<t;l++){let u=Math.floor(i[l].x/n),h=Math.floor(i[l].z/n);o[l]=[u,h];let f=s(u,h),p=r.get(f);p||(p=[],r.set(f,p)),p.push(l)}let a=0,c=lh*lh;for(let l=0;l<t;l++){let[u,h]=o[l];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let x=r.get(s(u+f,h+p));if(x)for(let _ of x){if(_<=l)continue;let m=Math.abs(l-_);if(Math.min(m,t-m)*e<=XM)continue;let v=i[l].x-i[_].x,y=i[l].z-i[_].z;v*v+y*y<c&&a++}}}return a}function o1(i){let e=QM(i),t=t1(e,160),{xs:n,zs:s,count:r,step:o}=n1(t),a=[[8,12],[4,7],[2,4],[1,2]],c=[1,2,4,7].map((M,A)=>({k:M,a:i.range(a[A][0],a[A][1]),p:i.range(0,xc)})),l=new Float64Array(r),u=new Float64Array(r),h=new Float64Array(r);for(let M=0;M<r;M++){let A=(M-1+r)%r,E=(M+1)%r,S=n[E]-n[A],I=s[E]-s[A];h[M]=Math.hypot(S,I)||1e-9,l[M]=S/h[M],u[M]=I/h[M]}let f=new Float64Array(r),p=new Float64Array(r),x=1;for(let M=0;M<40;M++){for(let E=0;E<r;E++){let S=0;for(let I of c)S+=I.a*x*Math.sin(xc*I.k*E/r+I.p);f[E]=VM+S}let A=0;for(let E=0;E<r;E++){let S=(E-1+r)%r,I=(E+1)%r;p[E]=(f[I]-f[S])/h[E],Math.abs(p[E])>A&&(A=Math.abs(p[E]))}if(A<=WM)break;x*=.9}let _=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let M=0;M<r;M++){let A=(M-1+r)%r,E=(M+1)%r,S=n[E]-n[A],I=f[E]-f[A],V=s[E]-s[A],z=Math.hypot(S,I,V)||1e-9;_[M]=S/z,m[M]=I/z,d[M]=V/z}let v=i1(n,s,o),y=Lp(v,2),g=new Float64Array(r);for(let M=0;M<r;M++){let A=fh((Math.abs(y[M])-.016666666666666666)/.023333333333333334,0,1);g[M]=uh+(Pp-uh)*A}let T=Lp(g,10);for(let M=0;M<r;M++)T[M]=fh(T[M],uh,Pp);let b=new Float64Array(r);for(let M=0;M<r;M++)b[M]=Math.min(JM,Math.sqrt($M/Math.max(Math.abs(y[M]),1e-9)));return s1(b,o),{xs:n,ys:f,zs:s,count:r,step:o,fx:l,fz:u,tx:_,ty:m,tz:d,slope:p,curv:y,width:T,vmax:b}}function a1(i){let{xs:e,ys:t,zs:n,count:s,step:r,fx:o,fz:a,tx:c,ty:l,tz:u,slope:h,curv:f,width:p,vmax:x}=i,_=[];for(let y=0;y<s;y++)_.push({curv:f[y],slope:h[y],vmax:x[y],x:e[y],z:n[y]});let m=ph(_,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(YM/r))%s:0,v=new Array(s);for(let y=0;y<s;y++){let g=(d+y)%s;v[y]={s:y*r,x:e[g],y:t[g],z:n[g],tx:c[g],ty:l[g],tz:u[g],rx:-a[g],rz:o[g],width:p[g],curv:f[g],vmax:x[g],slope:h[g]}}return v}function c1(i,e,t){let n=i.length,s=new Int32Array(n+1);for(let m=0;m<n;m++)s[m+1]=s[m]+(Math.abs(i[m].curv)>=dh?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(_c/e),a=Math.floor((n*e-_c)/e),c=Math.ceil(Np/e),l=[],u=[],h=(m,d)=>l.every(([v,y])=>d<v||m>y),f=(m,d,v,y)=>{for(let g=0;g<400;g++){let T=Math.round(t.range(m,d)/e),b=Math.ceil(v/e),M=T+b;if(a-M<o)return null;let A=t.int(o,a-M),E=A+T;if(y&&!r(A,E+b))continue;let S=A-c,I=E+b+c;if(!(S<0||I>n-1||!h(S,I)))return l.push([S,I]),{a:A,b:E}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,hh,!0);d&&u.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let x=t.int(2,3);for(let m=0;m<x;m++){let d=f(10,10,0,!1);d&&u.push({type:"boost",s0:d.a*e,s1:d.b*e})}let _=t.int(1,2);for(let m=0;m<_;m++){let d=f(60,140,0,!1);d&&u.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return u.sort((m,d)=>m.s0-d.s0),u}function l1(i,e,t){let n=o1(i),s=a1(n),{count:r,step:o}=n,a=r*o,c=c1(s,o,i),l=ph(s,o),u=1/0,h=-1/0,f=1/0,p=-1/0;for(let x of s)x.x<u&&(u=x.x),x.x>h&&(h=x.x),x.z<f&&(f=x.z),x.z>p&&(p=x.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:c,bounds:{minX:u,maxX:h,minZ:f,maxZ:p},stats:{minRadius:l.minRadius,maxSlope:l.maxSlope,lapTimeEstimate:Up(s,o),corners:l.corners}}}function u1(i){let e=[],{pts:t,count:n,step:s,length:r}=i;if(!Array.isArray(t)||t.length!==n||!(n>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=Mp&&r<=Sp||e.push(`longueur ${r.toFixed(0)} m hors [${Mp}, ${Sp}]`),Math.abs(n*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<bp||a>Ep)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${bp}, ${Ep}]`);let c=ph(t,s);c.minRadius>=Tp||e.push(`rayon min ${c.minRadius.toFixed(1)} m < ${Tp}`),c.maxSlope>GM&&e.push(`pente max ${(c.maxSlope*100).toFixed(1)} % > 12 %`),c.corners<Ap&&e.push(`${c.corners} virages < ${Ap}`),c.longestStraight<Rp&&e.push(`ligne droite max ${c.longestStraight.toFixed(0)} m < ${Rp}`);let l=r1(t,s);l>0&&e.push(`${l} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let u=Up(t,s);u>=Cp&&u<=Ip||e.push(`temps au tour ${u.toFixed(1)} s hors [${Cp}, ${Ip}]`);let h=i.features||[],f=h.filter(d=>d.type==="ramp").length,p=h.filter(d=>d.type==="boost").length,x=h.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),x<1&&e.push("aucun tunnel");let _=d=>Math.round((d%r+r)%r/s)%n;for(let d of h)if((d.s0<_c||d.s1>r-_c)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let v=d.s1-d.s0;(v<11.5||v>16.5)&&e.push(`tremplin de ${v.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let y=_(d.s0),g=_(d.s1+hh),T=!0;for(let b=y;b!==(g+1)%n;b=(b+1)%n)if(Math.abs(t[b].curv)>=dh){T=!1;break}T||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=h.slice().sort((d,v)=>d.s0-v.s0);for(let d=0;d+1<m.length;d++){let v=m[d],y=m[d+1],g=v.s1+(v.type==="ramp"?hh:0);y.s0<g+Np-1e-6&&e.push(`features ${v.type} et ${y.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function Fp(i,e={}){let t=e.maxAttempts??jM,n=Yn(i),s=null,r=1/0;for(let o=0;o<t;o++){let a=n.fork("try"+o),c=l1(a,i,o+1),l=u1(c);if(l.ok)return c;l.reasons.length<r&&(r=l.reasons.length,s=c)}return s.attempts=t,s}function mh(i,e){let t=i.length;if(i.open)return e<0?0:Math.min(e,(i.count-1.001)*i.step);let n=e%t;return n<0&&(n+=t),n>=t&&(n-=t),n}var h1=(i,e)=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function Xi(i,e,t={}){let n=i.count,s=i.step,r=mh(i,e),o=r/s,a=Math.floor(o),c=a%n,l=(c+1)%n,u=o-a,h=i.pts[c],f=i.pts[l],p=(g,T)=>g+(T-g)*u,x=p(h.tx,f.tx),_=p(h.ty,f.ty),m=p(h.tz,f.tz),d=Math.hypot(x,_,m)||1,[v,y]=h1(p(h.rx,f.rx),p(h.rz,f.rz));if(t.s=r,t.x=p(h.x,f.x),t.y=p(h.y,f.y),t.z=p(h.z,f.z),i.open&&e!==r){let g=e-r;t.x+=x/d*g,t.z+=m/d*g}return t.tx=x/d,t.ty=_/d,t.tz=m/d,t.rx=v,t.rz=y,t.width=p(h.width,f.width),t.curv=p(h.curv,f.curv),t.vmax=p(h.vmax,f.vmax),t.slope=p(h.slope,f.slope),t.i=c,t}var Wi={};function Ft(i,e,t,n={}){return Xi(i,e,Wi),n.x=Wi.x+t*Wi.rx,n.y=Wi.y,n.z=Wi.z+t*Wi.rz,n.heading=Math.atan2(Wi.tx,Wi.tz),n.slope=Wi.slope,n}function Op(i,e){let t=mh(i,e);for(let n of i.features)if(n.type==="ramp"&&t>=n.s0&&t<n.s1)return n.height*(t-n.s0)/(n.s1-n.s0);return 0}function _s(i,e,t){let n=mh(i,e);for(let s of i.features)if((t===void 0||s.type===t)&&n>=s.s0&&n<=s.s1)return s;return null}var p1=1/30,Bp=.5,zp=.4,m1=.6,Go=[.2,.36,.52,.68,.84],kp=Go.length+1,g1=.2,x1=.1,_1=.34,v1=4,y1=4,M1=.2,S1=4.9,b1=5.5,E1=5,T1=6,w1=1.8,A1=.03,R1=1.6,C1=.5,I1=2,P1=.785,L1=4.7,D1=2.5,Kr=.196,N1=.098,U1=.5,F1=.27,O1=16,B1=11,z1=.72,k1=5,H1=.5,Hp=.35,V1=.42,G1=60,W1=.3,X1=5,q1=1.6,Y1=3,Z1=14,K1=.004,$1=1.2,J1=2,j1=.5,Q1=22,Vp=.25,eS=6,tS=1.8,Gp=1,nS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],Wt=(i,e,t)=>i<e?e:i>t?t:i,Mi=(i,e=0)=>Number.isFinite(i)?i:e,iS=(i,e)=>{let t=i%e;return t<0?t+e:t},sS=(i,e,t)=>i<e?Math.min(e,i+t):Math.max(e,i-t);function Wp({s:i=0,d:e=0}={}){return{s:i,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:Ys.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function Xp(i,e,t,n,s,r,o){let a=i.events,c=e||{},l=s||{},u=!!c.boost&&!i._prevBoost;if(i._prevBoost=!!c.boost,r=Number.isFinite(r)&&r>0?Math.min(r,p1):0,i._init||(i._init=!0,i.boostCharges=n.boostCharges),r===0)return i;let h=t.length,f=n.maxSpeed,p=Wt(Mi(c.throttle),0,1),x=Wt(Mi(c.brake),0,1),_=Wt(Mi(c.steer),-1,1),m=i.stun>0;m&&(i.stun=Math.max(0,i.stun-r),p=0,x=0,_=0);let d=He=>t.open?He:iS(He,h),v=d(i.s),y=Xi(t,v),g=!i.airborne;if(u&&!m&&i.boostCharges>0&&i.boostT<=0&&(i.boostCharges-=1,i.boostT=n.boostDuration,a.push("boost")),g){let He=_s(t,v,"boost");if(He){let ye=Math.floor(i.s/h)+":"+He.s0;i._padKey!==ye&&(i._padKey=ye,i.boostT=Math.max(i.boostT,$1),a.push("pad"))}}x>.5&&i.boostT>0&&(i.boostT=0);let T=i.boostT>0;T&&(p=1);let b=g&&!m&&Math.abs(_)>.3&&i.speed>J1&&(!!c.drift||x>.3),M=i.speed,A=M/f;i._shiftT>0?i._shiftT-=r:i.gear<kp&&A>Go[i.gear-1]&&!(x>0&&M>3)?(i.gear+=1,i._shiftT=g1):i.gear>1&&M<Go[i.gear-2]*f-2&&(i.gear-=1,i._shiftT=x1);let E=i.gear>1?Go[i.gear-2]:0,S=i.gear<kp?Go[i.gear-1]:1;i.rpm=Wt(.35+.65*((A-E)/(S-E)),.1,1.05);let I=g&&Math.abs(i.d)>y.width*.5,V=m1*f,z=I?V:f*(T?n.boostPower:1),P=v1/(f*f),H=0;if(g){if(I&&M>V&&(H-=2*n.offroadDrag*(M-V)),p>0&&i._shiftT<=0&&M<z){let He=_1*f,ye=.8+.2*Math.sin(Math.PI*Wt(i.rpm,0,1)),Ne=n.accel*p*ye*Math.min(1,He/Math.max(M,1));T&&(Ne*=I1),H+=Math.min(Ne,n.accel*1.15*(T?1.3:1))}x>0&&(H-=n.brake*x*(b?.35:1)),H-=M*(.2-.03*(i.gear-1))*(1-p),H-=M1,H-=S1*y.slope,H-=P*M*M}else H-=P*y1*M*M;i.speed=Math.max(0,M+H*r),g&&i.speed>z&&!I&&(i.speed=Math.max(z,i.speed-10*r));let G=Wt(i.speed/f,0,1),ee=1+(n.wetGrip-1)*rS(l),k=Wt(n.grip*Mi(l.grip,1)*ee,.05,1.5),X=i.speed<.6?0:_,pe=Math.abs(X)>Math.abs(i.steer)||X*i.steer<0?b1:E1*Wt(Math.abs(H)/6,1,2.5);i.steer=sS(i.steer,X,pe*r);let Me=i.yaw-i.vdir,fe=i.speed*Math.sin(Me),ie=Math.min(R1,1+A1*Math.abs(fe));b&&(ie=n.driftBonus),T&&g&&(ie*=C1);let $=1-(1-n.steerHighSpeed)*G,j=Math.min(1,i.speed/6),D=g?1:n.airControl,Y=i.steer*n.steerRate*$*ie*j*D*(.6+.4*Math.min(1,k)),Z=Math.min(i.speed/X1,G1*Math.min(1.2,k)*(b?1.5:1)/Math.max(i.speed,1)),se=Wt(Y,-Z,Z);g&&Math.abs(_)<=.15&&(i.yaw*=Math.exp(-q1*r)),o&&n.steerNoise>0&&!m&&g&&(i.yaw+=n.steerNoise*p*(o.next()*2-1)*r);let _e=Math.max(.3,1-i.d*y.curv),Se=i.speed*Math.cos(i.vdir)/_e*r,Ae=i.speed*Math.sin(i.vdir)*r,W=y.curv*Se,We=i.vdir,ze=W*(g?1-W1:1);if(i.yaw+=se*r-ze,i.vdir-=ze,g){let He=(b?w1:T1)*k,ye=1-Math.exp(-He*r);i.vdir+=(i.yaw-i.vdir)*ye,i.speed*=1-(1-Math.cos(Me))*ye}else{let He=3*Wt(n.airStability,0,2);i.yaw+=(i.vdir-i.yaw)*(1-Math.exp(-He*r)),n.airStability<1&&(i.yaw+=(i.yaw>=i.vdir?1:-1)*(1-n.airStability)*.6*r)}i.vdir=Wt(Mi(i.vdir),-Bp,Bp),i.yaw=Wt(Mi(i.yaw),i.vdir-zp,i.vdir+zp),i._t+=r,Ae+=Mi(l.wind)*(1.2*Math.sin(i._t*.37)+.4*Math.sin(i._t*1.13+1))*r*(g?1:.5),i.s+=Se,i.d+=Ae;let Fe=g?Wt((Math.abs(i.yaw-i.vdir)-.04)/.22,0,1)*j:0;i.drift+=(Fe-i.drift)*Math.min(1,8*r);let Re=Xi(t,d(i.s));i.onRoad=Math.abs(i.d)<=Re.width*.5;let Ge=Re.width*.5+6-.4;if(Math.abs(i.d)>=Ge-.02){let He=i.d>=0?1:-1,ye=i.vdir*He>0,Ne=ye?Math.abs(Math.sin(i.vdir)):0;if(i.d=He*Ge,ye&&(i.vdir=-He*.04,i.yaw=i.yaw*.4-He*.04),i._wallHit)i.speed*=Math.max(0,1-.8*r);else{let Ke=i.boostT>0,Ye=o?o.next():1;Ke&&i.speed>eS||Ne>j1&&i.speed>Q1&&Ye<Vp||i.airborne&&Ye<Vp?(i.speed*=.3,i.stun=tS,a.push("crash")):i.speed*=1-Wt(n.wallLoss*1.3*(.5+Ne),0,.9),a.push("wall")}i.boostT=0,i._wallT=Hp,i._wallHit=!0}else i._wallHit=!1;i.stun>0&&g&&(i.speed*=Math.exp(-2.2*r)),v=d(i.s);let De=Mi(Op(t,v)),L=(De-i._g)/r;if(i.airborne||(De<i.yRel-.05?(i.airborne=!0,i._apex=i.yRel-De,i.vy=i._vyG,i.vy>Y1&&a.push("jump")):(i.yRel=De,i.vy=Wt(L,-80,80),i._vyG=i.vy)),i.airborne&&(i.vy-=26*r,i.yRel+=i.vy*r,i._apex=Math.max(i._apex,i.yRel-De),i.vy<=0&&i.yRel<=De)){let He=-i.vy,ye=Math.abs(i.yaw-i.vdir),Ne=He>Z1/Math.max(.3,n.landing)||ye>.35;i.airborne=!1,i.yRel=De,i.vy=0,i._vyG=0,i._springA=Wt(i._springA+.35*i._apex+.03*He,0,1),i._springP=Math.PI/2;let Ke=K1*He+(Ne?.08:0);i.speed*=1-Wt(Ke/Math.max(.2,n.landing),0,.45),a.push(Ne?"hardLand":"land")}i._g=De,g=!i.airborne,i.speed=Wt(Mi(i.speed),0,1.5*f),i._wallT=Math.max(0,i._wallT-r);let w=Math.max(0,1-i.speed/4,i._wallT/Hp),U=g?(W+(i.vdir-We))/r:0;i._turnF+=(U-i._turnF)*Math.min(1,6*r);let ne=i.speed*i._turnF,re=Math.sign(ne)*Math.max(0,Math.abs(ne)-k1),te=i.steer*V1*Math.min(1,i.speed/10),xe=Wt((1-w)*(Math.atan(re/B1)*z1+H1*(i.yaw-i.vdir)+te),-Gp,Gp);i.stun>0&&(xe=(i.lean>=0?1:-1)*1.35),i.lean+=(xe-i.lean)*Math.min(1,9*r),i._dive=x>.1&&g?Math.min(Kr,i._dive+Kr*r):Math.max(0,i._dive-.25*r);let be=Wt(H*N1,-Kr,Kr)-i._dive;i._pitchF+=(be-i._pitchF)*Math.min(1,r/U1);let Ie=Wt(be-i._pitchF,-Kr,Kr);i.wheelie=i.boostT>0&&g?Math.min(Math.PI/2,i.wheelie+L1*r):Math.max(0,i.wheelie-D1*r),Ie+=Math.sin(i.wheelie)*P1,g||(Ie=Math.atan2(i.vy,Math.max(8,i.speed))),i.pitch=Ie,i._springA*=Math.exp(-r/F1),i._springP+=O1*r,i.compress=Math.sin(i._springP)*i._springA,i.wheelSpin+=i.speed/.32*r,i.boostT=Math.max(0,i.boostT-r);for(let He of nS)Number.isFinite(i[He])||(i[He]=0);return i.speed<0&&(i.speed=0),i}function rS(i){return Wt(Mi(i.wet),0,1)}var oS=8,aS=25,cS=150,lS=3,uS=35,hS=2,fS=14,dS=30,pS=12,mS=2,gS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},on=(i,e,t)=>i<e?e:i>t?t:i,vc=(i,e,t)=>i+(e-i)*t,xS=(i,e)=>i-e*Math.round(i/e);function _S(i,e){let t=i.length,n=i.features,s=null,r=1/0;for(let o=0;o<n.length;o++){let a=n[o];if(a.type!=="ramp")continue;let c=((a.s0-e)%t+t)%t;c<r&&(r=c,s=a)}return s?{f:s,dist:r}:null}function vS(i,e){for(let t=0;t<=cS;t+=aS)if(Math.abs(Xi(i,e+t).curv)>.004)return!1;return!0}function yc(i,e){let t=i||gS,n={persona:t,rng:e,skill:on(t.skill??.5,0,1),aggression:on(t.aggression??.5,0,1),jumpSkill:on(t.jumpSkill??.5,0,1),lineSkill:on(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return n.nextMistake=e.range(8,20)+(1-n.skill)*15,n}function Mc(i,e,t,n,s,r){let o=i.input,a=t.length,c=i.rng,l=i.aggression,u=i.skill,h=i.jumpSkill,f=e.speed,p=e.s,x=Xi(t,p),_=Math.max(.8,x.width*.5-1.2);i.wanderT-=r,i.wanderT<=0&&(i.wanderT=c.range(.9,1.8),i.wanderGoal=c.range(-1,1)*(1-i.lineSkill)*.5*_),i.wander+=(i.wanderGoal-i.wander)*Math.min(1,r*1.5),i.nextMistake-=r,i.mistakeT-=r,i.mistakeT<=0&&i.nextMistake<=0&&(i.mistakeT=c.range(.5,1.2),i.mistakeSide=c.sign(),i.nextMistake=c.range(8,20)+(1-u)*15);let m=i.mistakeT>0;i.boostLock-=r;let d=vc(1.4,.6,l),v=Math.max(20,f*d),y=Math.max(v,on(f*1.6+20,40,110)),g=1/0,T=0,b=0,M=0;for(let $=0;$<=y;$+=oS){let j=$===0?x:Xi(t,p+$);if($<=v&&j.vmax<g&&(g=j.vmax),$>=8){let D=Math.abs(j.curv);D>T&&(T=D,b=Math.sign(j.curv),M=$)}}let A=on(T/.02,0,1),E=0;if(b!==0&&A>0){let $=on((M-10)/30,0,1),j=vc(1,-.8,$);E=b*_*i.lineSkill*A*j}E+=i.wander,m&&(E+=i.mistakeSide*1.2);let S=_S(t,p),I=S?S.dist:1/0,V=_s(t,p,"ramp")!==null,z=I<dS;(V||z)&&h>.5&&(E*=1-on((h-.4)/.6,0,1));let P=!V&&I>=lS&&I<=uS&&h<.5;for(let $=0;$<s.length;$++){let j=s[$];if(j===e)continue;let D=xS(j.s-p,a);if(D<=0||D>=pS)continue;let Y=j.d-e.d;if(!(Math.abs(Y)>=mS)){if(l>.55){let Z=Y!==0?Math.sign(Y):e.d<0?1:-1;E+=Z*(.6+.8*l)}else{let Z=Y!==0?-Math.sign(Y):e.d<0?1:-1;Math.abs(e.d+Z*2)>_&&(Z=-Z),E+=Z*2*(1-l)}break}}E=on(E,-_,_),i.dGoal+=(E-i.dGoal)*Math.min(1,r*2.5);let H=on(i.dGoal,-_,_),G;if(e.airborne)G=on(-e.yaw*2,-.3,.3);else{let $=H-e.d,j=on($*.12,-.25,.25),D=Xi(t,p+on(f*.25,4,20)).curv,Y=n.steerRate*vc(1,n.steerHighSpeed,on(f/n.maxSpeed,0,1));G=(D*f+(j-e.yaw)*3)/Y}G=on(G,-1,1),Number.isFinite(G)||(G=0);let ee=on(-i.playerGap/150,-1,1)*.06,k=vc(.86,1,u)+l*.04;m&&(k*=.85);let X=g*k*(1+ee),ue=n.maxSpeed,pe=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&i.boostLock<=0){if(h>.6&&I>=hS&&I<=fS)pe=!0;else if(f>20&&vS(t,p)){let $=i.playerGap<-20,j=.25+.5*l+($?.3:0);pe=c.chance(j)}i.boostLock=pe?1:.4}o.boost=pe;let Me=T<.003;if(e.boostT>0){let $=ue*n.boostPower;X=Me?$*.98:Math.min(X,$)}else X=Math.min(X,ue);let fe=0,ie=0;if(e.airborne)fe=1;else{let $=X-f;$>-1.5?fe=P?0:on(.5+$*.25,0,1):ie=on((-$-1.5)*.15,0,1)}return o.throttle=fe,o.brake=ie,o.steer=G,o.drift=!e.airborne&&l>.75&&T>.025&&f>40&&M<20,o}var yS=7,MS=3,SS=.3,bS=3,ES=25,TS=1.5,wS=1.2,AS=1.8,qp=.9,RS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Sc=(i,e,t)=>i<e?e:i>t?t:i,gh=(i,e)=>i-e*Math.round(i/e);function xh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function Yp({track:i,laps:e,env:t,rng:n,riders:s}){let r=i.length,o=e*r,c=s.filter(v=>!v.isPlayer).concat(s.filter(v=>v.isPlayer)).map((v,y)=>{let g=Math.floor(y/2),T=y%2,b=-yS*(g+1),A=Wp({s:b,d:T===0?-2.5:2.5});return{id:v.id,name:v.name,color:v.color,accent:v.accent,isPlayer:!!v.isPlayer,stats:v.stats,persona:v.persona||null,state:A,ai:v.isPlayer?null:yc(v.persona||RS,n.fork("ai:"+v.id)),rng:n.fork("rider:"+v.id),others:null,input:xh(),coast:xh(),frameEvents:[],startS:b,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:y+1}});for(let v of c)v.others=c.filter(y=>y!==v).map(y=>y.state);let l=c.find(v=>v.isPlayer)||null,u=c.slice(),h=c.length,f=new Uint8Array(h*h);function p(v,y,g,T,b){if(g===y)return;let M=Math.floor(y/r),A=Math.min(Math.floor(g/r),e);for(let E=Math.max(M+1,1);E<=A;E++){let S=Sc((E*r-y)/(g-y),0,1),I=T+S*b,V=I-v.lapStartT;v.lapTimes.push(V),(v.bestLap===null||V<v.bestLap)&&(v.bestLap=V),v.lapStartT=I}if(g>=o){let E=Sc((o-y)/(g-y),0,1);v.finished=!0,v.finishTime=T+E*b}}function x(v){let y=v.state,g=v.coast;return g.throttle=SS,g.brake=0,g.steer=Sc(-y.yaw*2-y.d*.05,-.5,.5),g.boost=!1,g.drift=!1,g}function _(v,y){let g=v.state;for(let T=0;T<h;T++){let b=c[T];if(b===v)continue;let M=gh(b.state.s-g.s,r);if(M>bS&&M<ES&&Math.abs(b.state.d-g.d)<TS){g.speed=Math.min(g.speed+wS*v.stats.slipstream*y,v.stats.maxSpeed*1.05);return}}}function m(){for(let v=0;v<h;v++)for(let y=v+1;y<h;y++){let g=c[v],T=c[y],b=gh(T.state.s-g.state.s,r),M=T.state.d-g.state.d,A=v*h+y;if(Math.abs(b)<AS&&Math.abs(M)<qp){let E=M!==0?Math.sign(M):n.sign(),S=(qp-Math.abs(M))/2+.05;if(g.state.d-=E*S,T.state.d+=E*S,!f[A]){f[A]=1;let I=(g.state.speed+T.state.speed)/2;g.state.speed+=(I-g.state.speed)*.2,T.state.speed+=(I-T.state.speed)*.2;let V=b>=0?g:T;V.state.speed*=.96}}else f[A]=0}}let d={phase:"countdown",countdown:MS,time:0,laps:e,track:i,riders:c,player:l,update(v,y){if(d.phase==="countdown"){d.countdown=Math.max(0,d.countdown-v),d.countdown<=0&&(d.phase="racing");return}let g=d.time;d.time+=v;for(let T=0;T<h;T++){let b=c[T];b.finished?b.input=x(b):b.isPlayer?b.input=y||xh():(l&&(b.ai.playerGap=gh(b.state.s-l.state.s,r)),b.input=Mc(b.ai,b.state,i,b.stats,b.others,v))}for(let T=0;T<h;T++){let b=c[T],M=b.state,A=b.finished,E=M.s;if(Xp(M,b.input,i,b.stats,t,v,b.rng),A||(p(b,E,M.s,g,v),b.finished||_(b,v)),b.lap=b.finished?e:Sc(Math.floor(M.s/r)+1,1,e),!b.isPlayer){b.frameEvents.length=0;for(let S=0;S<M.events.length;S++)b.frameEvents.push(M.events[S]);M.events.length=0}}m(),u.sort((T,b)=>T.finished!==b.finished?T.finished?-1:1:T.finished?T.finishTime-b.finishTime:b.state.s-T.state.s);for(let T=0;T<h;T++)u[T].position=T+1;(l?l.finished:c.every(T=>T.finished))&&(d.phase="finished")},results(){let v=c.map(y=>{let g;if(y.finished)g=y.finishTime;else{let T=Math.max(0,y.state.s-y.startS),b=d.time>1?Math.max(5,T/d.time):40,M=Math.max(0,o-y.state.s);g=d.time+M/b}return{id:y.id,name:y.name,position:y.position,time:g,bestLap:y.bestLap,isPlayer:y.isPlayer}});return v.sort((y,g)=>y.position-g.position),v}};return d}var wh={};L0(wh,{PLAYER:()=>Si,RIVALS:()=>Ec,UPGRADES:()=>Zs,applyUpgrade:()=>yh,computeStats:()=>$r,createRun:()=>Tc,dailySeed:()=>Ac,isRunOver:()=>Wo,loadMeta:()=>bh,offerUpgrades:()=>vh,randomSeed:()=>IS,recordResult:()=>Mh,runRiders:()=>wc,saveMeta:()=>Eh,standings:()=>Jr,updateMeta:()=>Th});var Zp="polygon-rush-meta",CS=Object.keys(xs).filter(i=>i!=="sicily"),Si={id:"player",name:"Vous",color:14885934,accent:2312392},Zs=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(i){i.accel*=1.35,i.maxSpeed*=1.04,i.steerNoise+=.35,i.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(i){i.landing*=1.8,i.offroadDrag*=.6,i.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(i){i.maxSpeed*=1.07,i.airStability*=.6,i.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(i){i.wetGrip*=1.35,i.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(i){i.boostCharges+=2,i.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(i){i.brake*=1.4,i.steerRate*=1.08,i.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(i){i.airControl*=1.5,i.airStability*=1.25,i.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(i){i.grip*=1.12,i.wetGrip*=.7,i.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(i){i.slipstream*=1.6,i.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(i){i.wallLoss*=.5,i.accel*=.92,i.maxSpeed*=.97}}],Ec=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Kp=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],_h=Kp.length;function $p(i){return Zs.find(e=>e.id===i)||null}function Jp(i,e){let t=0;for(let n of i.upgrades)n===e&&t++;return t}function Tc(i){let e=String(i),t=Yn(Vo(e+"|run")),n=[];for(let o=0;o<_h;o++)if(o===0)n.push("sunset");else if(o===_h-1)n.push("rain");else{let a=n[o-1],c=CS.filter(l=>l!==a&&!(o===_h-2&&l==="rain"));n.push(t.pick(c))}let s=Kp.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:n[a],laps:a<2?2:3})),r={[Si.id]:0};for(let o of Ec)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function wc(i){let e=Math.max(0,i.stageIndex),t=[{id:Si.id,name:Si.name,color:Si.color,accent:Si.accent,isPlayer:!0,persona:null,stats:$r(i)}];for(let n of Ec){let s=Math.min(.99,Math.round((n.skill+.01*e)*100)/100);t.push({id:n.id,name:n.name,color:n.color,accent:n.accent,isPlayer:!1,persona:{...n,skill:s},stats:{...Ys}})}return t}function $r(i){let e={...Ys};for(let t of i.upgrades){let n=$p(t);n&&n.apply(e)}return e}function vh(i){let e=Yn(Vo(`${i.seed}|offer|${i.stageIndex}`)),t=Zs.filter(n=>Jp(i,n.id)<n.maxStacks);return e.shuffle(t).slice(0,3)}function yh(i,e){let t=$p(e);return!t||Jp(i,e)>=t.maxStacks?!1:(i.upgrades.push(e),!0)}function jp(i){if(i===Si.id)return Si.name;let e=Ec.find(t=>t.id===i);return e?e.name:i}function Mh(i,e){if(Wo(i))return i;let t=e.slice().sort((r,o)=>r.position-o.position),n=i.stages[i.stageIndex],s={stage:i.stageIndex,name:n.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,c=gc[a-1]??0;i.points[r.id]=(i.points[r.id]||0)+c,s.results.push({id:r.id,name:r.name||jp(r.id),position:a,points:c,isPlayer:r.id===Si.id})}),i.history.push(s),i.stageIndex+=1,i}function Jr(i){let e={};for(let t of i.history)for(let n of t.results)e[n.id]=Math.min(e[n.id]??1/0,n.position);return Object.keys(i.points).map(t=>({id:t,name:jp(t),points:i.points[t],isPlayer:t===Si.id,_best:e[t]??1/0})).sort((t,n)=>n.points-t.points||t._best-n._best).map(({_best:t,...n})=>n)}function Wo(i){return i.stageIndex>=i.stages.length}function Ac(i=new Date){let e=i instanceof Date?i:new Date(i),t=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${n}-${s}`}function IS(){let i="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=i[Math.floor(Math.random()*i.length)];return e}function bc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Sh(i){let e=bc();if(!i||typeof i!="object")return e;let t=n=>Number.isFinite(n)&&n>=0?Math.floor(n):0;return{runs:t(i.runs),wins:t(i.wins),bestPoints:t(i.bestPoints),unlocked:Array.isArray(i.unlocked)?i.unlocked.filter(n=>typeof n=="string"):e.unlocked}}function Qp(){try{return globalThis.localStorage??null}catch{return null}}function bh(){try{let i=Qp();if(!i)return bc();let e=i.getItem(Zp);return e?Sh(JSON.parse(e)):bc()}catch{return bc()}}function Eh(i){try{let e=Qp();return e?(e.setItem(Zp,JSON.stringify(Sh(i))),!0):!1}catch{return!1}}function Th(i,e){let t=Sh(i),n=Jr(e),s=n.find(o=>o.isPlayer),r=n.length>0&&n[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var Zn=.9,em=.3,Rc=8,Ah=3,tm=6+.8,Xo=3,PS=4.5,LS=.015,DS=.004,nm=60,mt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},Cc=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],im=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],NS=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],xn=(i,e,t)=>i+(e-i)*t,Rn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,n,s){let[r,o,a,c]=e,l=im(Cc(o,r),Cc(a,r)),u=im(Cc(a,r),Cc(c,r)),h=[l[0]+u[0],l[1]+u[1],l[2]+u[2]];if(!(Math.hypot(h[0],h[1],h[2])>1e-12))return;let f=NS(h,n)<0,p=this.n;for(let x=0;x<4;x++){let _=e[x];this.pos.push(_[0],_[1],_[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[x]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function qo(i,e,t,n,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let c of[-1,1]){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{let f=[0,0,0];return f[r]=c,f[o]=u,f[a]=h,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*n[0]+t[1][p]*f[1]*n[1]+t[2][p]*f[2]*n[2])});i.quad(l,s,t[r].map(u=>u*c),null)}}}function Rh(i,e,t){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new ci(n);return s.colorSpace=Tt,s.anisotropy=4,s}function sm(i,e,t,n){i.beginPath(),e.forEach(([s,r],o)=>o?i.lineTo(s*t,r*n):i.moveTo(s*t,r*n)),i.closePath(),i.fill()}var US=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function rm(i,e,t){let n=t??Yn(i.seed??1),s=i.pts,r=s.length,o=i.step??i.length/r,a=i.length??r*o,c=i.features??[],l=c.filter(R=>R.type==="ramp"),u=c.filter(R=>R.type==="boost"),h=c.filter(R=>R.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,x=new dt;x.name="road";let _=[],m=[],d=[],v=R=>(m.push(R),R),y=Rh(128,128,(R,N,F)=>{R.fillStyle="#f3efe6",R.fillRect(0,0,N,F),R.fillStyle="#d6202a",sm(R,US,N,F)}),g=Rh(256,128,(R,N,F)=>{R.fillStyle="#04141a",R.fillRect(0,0,N,F),R.fillStyle="#37f3ff",sm(R,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],N,F)}),T=Rh(1024,256,(R,N,F)=>{R.fillStyle="#0b0e16",R.fillRect(0,0,N,F),R.strokeStyle="#ffd21f",R.lineWidth=10,R.strokeRect(12,12,N-24,F-24),R.fillStyle="#ffd21f",R.font="bold 150px Arial, Helvetica, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("POLYGON RUSH",N/2,F/2+8)});for(let R of[y,g,T])R&&d.push(R);g&&(g.wrapS=Oi);let b=v(new it({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),M=v(new Gt({vertexColors:!0})),A=v(new it({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),E=v(new it({vertexColors:!0,flatShading:!0,roughness:1})),S=v(new it({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),I=v(new Gt({vertexColors:!0})),V=v(new it({color:y?16777215:16762906,map:y,emissive:y?16777215:16762906,emissiveMap:y,emissiveIntensity:.5,flatShading:!0})),z=v(new it({color:207411,emissive:3666943,emissiveMap:g,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),P=v(new it({vertexColors:!0,flatShading:!0,side:wt,roughness:.9})),H=v(new Gt({vertexColors:!0})),G=v(new it({vertexColors:!0,flatShading:!0,roughness:.6})),ee=v(new it({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),k=v(new it({color:2830138,flatShading:!0,roughness:.7})),X=v(new it({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),ue=R=>{for(let N of l)if(R>=N.s0&&R<N.s1)return N.height*(R-N.s0)/(N.s1-N.s0);return 0},pe=R=>l.some(N=>R>=N.s0&&R<N.s1),Me=R=>h.some(N=>R>=N.s0&&R<=N.s1),fe=R=>{let N=R/o,F=Math.floor(N),J=N-F;F=i.open?Math.max(0,Math.min(r-2,F)):(F%r+r)%r;let le=s[F],we=s[(F+1)%r],Ue=xn(le.rx,we.rx,J),Oe=xn(le.rz,we.rz,J),B=Math.hypot(Ue,Oe)||1,oe=xn(le.tx,we.tx,J),he=xn(le.tz,we.tz,J),de=Math.hypot(oe,he)||1,ge=xn(le.y,we.y,J);return{s:R,x:xn(le.x,we.x,J),z:xn(le.z,we.z,J),yb:ge,y:ge,h:0,rx:Ue/B,rz:Oe/B,tx:oe/de,tz:he/de,w:xn(le.width,we.width,J),curv:xn(le.curv,we.curv,J),sample:!1}},ie=(R,N,F)=>({x:xn(R.x,N.x,F),y:xn(R.y,N.y,F),yb:xn(R.yb,N.yb,F),z:xn(R.z,N.z,F),rx:xn(R.rx,N.rx,F),rz:xn(R.rz,N.rz,F),w:xn(R.w,N.w,F)}),$=(R,N,F=0)=>[R.x+R.rx*N,R.y+F,R.z+R.rz*N],j=(R,N,F=0)=>[R.x+R.rx*N,R.yb+F,R.z+R.rz*N],D=[];for(let R of l)D.push({s:R.s0,h:0},{s:R.s1,h:R.height},{s:R.s1,h:0});D.sort((R,N)=>R.s-N.s);let Y=[],Z=0,se=(R,N,F)=>{let J=Y[Y.length-1];if(J&&Math.abs(J.s-R)<1e-9&&Math.abs(J.h-N)<1e-9){J.sample=J.sample||F;return}let le=fe(R);le.h=N,le.y=le.yb+N,le.sample=F,Y.push(le)};for(let R=0;R<r;R++){let N=R*o;for(;Z<D.length&&D[Z].s<=N+1e-9;)se(D[Z].s,D[Z].h,!1),Z++;se(N,ue(N),!0)}for(;Z<D.length;)se(D[Z].s,D[Z].h,!1),Z++;let _e=Y.length,Se=[];for(let R=0;R<_e&&!(i.open&&R===_e-1);R++){let N=Y[R],F=Y[(R+1)%_e],J=N.s,le=R+1<_e?Y[R+1].s:a,we=Math.abs(le-J)<1e-9,Ue=(J+le)/2;Se.push({a:N,b:F,sa:J,sb:le,drop:we,mid:Ue,ramp:!we&&pe(Ue)})}let Ae=new Rn,W=new Rn,We=new Rn,ze=new Rn,Fe=new Rn,Re=new Rn,Ge=new Rn,De=new Rn,L=new Rn,w=new Rn,U=new Rn,ne=new Rn,re=R=>R.w/2+6-em/2,te=R=>R.w/2+6+em/2;for(let R of Se){let{a:N,b:F,sa:J,sb:le,mid:we}=R;if(R.drop){Ae.quad([$(N,-N.w/2),$(N,N.w/2),$(F,F.w/2),$(F,-F.w/2)],mt.rampDark,[N.tx,0,N.tz]);continue}let Ue=N.w/2,Oe=F.w/2;if(R.ramp)W.quad([$(N,-Ue),$(N,Ue),$(F,Oe),$(F,-Oe)],Math.floor(we/2)%2===0?mt.yellow:mt.black,[0,1,0]),Ae.quad([$(N,-Ue),$(F,-Oe),j(F,-Oe),j(N,-Ue)],mt.rampDark,[-N.rx,0,-N.rz]),Ae.quad([$(N,Ue),j(N,Ue),j(F,Oe),$(F,Oe)],mt.rampDark,[N.rx,0,N.rz]);else{Ae.quad([$(N,-Ue),$(N,Ue),$(F,Oe),$(F,-Oe)],i.open?Math.floor(we/8)%2?mt.motorwayB:mt.motorwayA:Math.floor(we/8)%2?mt.asphaltB:mt.asphaltA,[0,1,0]);for(let ge of[-1,1])We.quad([$(N,ge*(Ue-.25),.02),$(N,ge*(Ue-.45),.02),$(F,ge*(Oe-.45),.02),$(F,ge*(Oe-.25),.02)],mt.white,[0,1,0]);let B=9,oe=3;for(let ge=Math.floor(J/B);ge*B<le;ge++){let Ce=Math.max(J,ge*B),Xe=Math.min(le,ge*B+oe);if(Xe-Ce<1e-6)continue;let qe=ie(N,F,(Ce-J)/(le-J)),nt=ie(N,F,(Xe-J)/(le-J));We.quad([$(qe,-.08,.02),$(qe,.08,.02),$(nt,.08,.02),$(nt,-.08,.02)],mt.white,[0,1,0])}let he=Math.abs((N.curv+F.curv)/2)>DS?1.2:.5,de=Math.floor(we/2)%2?mt.red:mt.railA;for(let ge of i.open?[]:[-1,1])We.quad([$(N,ge*Ue,.025),$(N,ge*(Ue+he),.025),$(F,ge*(Oe+he),.025),$(F,ge*Oe,.025)],de,[0,1,0])}for(let B of[-1,1]){ze.quad([j(N,B*Ue),j(N,B*re(N)),j(F,B*re(F)),j(F,B*Oe)],i.open?mt.lane:mt.sand,[0,1,0]);let oe=Rc/2,he=-Ah/2,de=-Ah,ge=[B*N.rx*.6,.8,B*N.rz*.6];ze.quad([j(N,B*te(N),0),j(N,B*(te(N)+oe),he),j(F,B*(te(F)+oe),he),j(F,B*te(F),0)],mt.gravel,ge),ze.quad([j(N,B*(te(N)+oe),he),j(N,B*(te(N)+Rc),de),j(F,B*(te(F)+Rc),de),j(F,B*(te(F)+oe),he)],mt.gravel,ge);let Ce=Math.floor(we/6)%2?mt.railB:mt.railA,Xe=B*re(N),qe=B*re(F),nt=B*te(N),st=B*te(F);!i.open&&(B<0||p||e.openRight===!1)&&(Fe.quad([j(N,Xe,0),j(N,Xe,Zn),j(F,qe,Zn),j(F,qe,0)],Ce,[-B*N.rx,0,-B*N.rz]),Fe.quad([j(N,nt,0),j(N,nt,Zn),j(F,st,Zn),j(F,st,0)],Ce,[B*N.rx,0,B*N.rz]),Fe.quad([j(N,Xe,Zn),j(N,nt,Zn),j(F,st,Zn),j(F,qe,Zn)],Ce,[0,1,0])),p&&Re.quad([j(N,Xe,Zn+.02),j(N,nt,Zn+.02),j(F,st,Zn+.02),j(F,qe,Zn+.02)],B<0?mt.neonCyan:mt.neonMag,[0,1,0])}}for(let R of Y){if(!R.sample||Math.abs(R.curv)<=LS||Math.round(R.s/o)%8!==0||Me(R.s)||pe(R.s))continue;let F=-Math.sign(R.curv)*(R.w/2+6+.6),le=R.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];Ge.quad([j(R,F-.6,1),j(R,F+.6,1),j(R,F+.6,2),j(R,F-.6,2)],[1,1,1],[-R.tx,0,-R.tz],le),qo(U,[R.x+R.rx*F,R.yb+.35,R.z+R.rz*F],[[R.tx,0,R.tz],[R.rx,0,R.rz],[0,1,0]],[.08,.12,.65],mt.post)}let xe=fe(0),be=Math.max(4,Math.round(xe.w)),Ie=xe.w/be;for(let R=0;R<3;R++){let N=fe(-2+R),F=fe(-1+R);for(let J=0;J<be;J++){let le=-xe.w/2+J*Ie,we=le+Ie;We.quad([$(N,le,.03),$(N,we,.03),$(F,we,.03),$(F,le,.03)],(R+J)%2?mt.checkB:mt.checkW,[0,1,0])}}let He=xe.w/2+6+.5,ye=[[xe.tx,0,xe.tz],[xe.rx,0,xe.rz],[0,1,0]];for(let R of[-1,1])qo(U,[xe.x+xe.rx*R*He,xe.yb+4,xe.z+xe.rz*R*He],ye,[.3,.3,4],mt.post);qo(U,[xe.x,xe.yb+7.5,xe.z],ye,[.5,He,.5],mt.beam);let Ne=(R,N,F)=>[xe.x+xe.tx*R+xe.rx*N,xe.yb+F,xe.z+xe.tz*R+xe.rz*N];ne.quad([Ne(-.55,-He,5.2),Ne(-.55,He,5.2),Ne(-.55,He,6.8),Ne(-.55,-He,6.8)],[1,1,1],[-xe.tx,0,-xe.tz],[[0,0],[1,0],[1,1],[0,1]]),ne.quad([Ne(.55,-He,5.2),Ne(.55,He,5.2),Ne(.55,He,6.8),Ne(.55,-He,6.8)],[1,1,1],[xe.tx,0,xe.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let R of u){let N=[];for(let J=R.s0;J<R.s1;J+=2)N.push(J);N.push(R.s1);let F=N.map(fe);for(let J=0;J+1<F.length;J++){let le=F[J],we=F[J+1],Ue=(le.s-R.s0)/4,Oe=(we.s-R.s0)/4;De.quad([$(le,-le.w/2,.04),$(le,le.w/2,.04),$(we,we.w/2,.04),$(we,-we.w/2,.04)],[1,1,1],[0,1,0],[[Ue,0],[Ue,1],[Oe,1],[Oe,0]])}}let Ke=R=>{let N=R.w/2+tm,F=[[-N,0],[-N,Xo]];for(let J=1;J<=7;J++){let le=Math.PI-J*Math.PI/8;F.push([N*Math.cos(le),Xo+PS*Math.sin(le)])}return F.push([N,Xo],[N,0]),F},Ye=(R,N,F,J=0)=>[R.x+R.rx*N+R.tx*J,R.yb+F,R.z+R.rz*N+R.tz*J],me=(R,N,F)=>{let J=-N,le=Xo-F,we=Math.hypot(J,le)||1;return[R.rx*J/we,le/we,R.rz*J/we]},Be=([R,N])=>{let F=-R,J=Xo-N,le=Math.hypot(F,J)||1;return[R+F/le*.45,N+J/le*.45]};for(let R of h){let N=[];for(let J=R.s0;J<R.s1;J+=2)N.push(J);N.push(R.s1);let F=N.map(fe);for(let J=0;J+1<F.length;J++){let le=F[J],we=F[J+1],Ue=Ke(le),Oe=Ke(we);for(let B=0;B<Ue.length-1;B++){let oe=(Ue[B][0]+Ue[B+1][0])/2,he=(Ue[B][1]+Ue[B+1][1])/2;L.quad([Ye(le,Ue[B][0],Ue[B][1]),Ye(le,Ue[B+1][0],Ue[B+1][1]),Ye(we,Oe[B+1][0],Oe[B+1][1]),Ye(we,Oe[B][0],Oe[B][1])],i.open?B%2?mt.tunOchreA:mt.tunOchreB:B%2?mt.tunA:mt.tunB,me(le,oe,he))}if(Math.round((le.s-R.s0)/2)%6===0)for(let B=1;B<=8;B++){let oe=Be(Ue[B]),he=Be(Ue[B+1]),de=(oe[0]+he[0])/2,ge=(oe[1]+he[1])/2;w.quad([Ye(le,oe[0],oe[1]),Ye(le,he[0],he[1]),Ye(le,he[0],he[1],.6),Ye(le,oe[0],oe[1],.6)],i.open?mt.sodium:B%2?mt.neonCyan:mt.neonMag,me(le,de,ge))}}for(let J of[F[0],F[F.length-1]]){let le=J.w/2+tm,we=[[J.tx,0,J.tz],[J.rx,0,J.rz],[0,1,0]];for(let Ue of[-1,1])qo(L,[J.x+J.rx*Ue*(le+1.2),J.yb+5,J.z+J.rz*Ue*(le+1.2)],we,[2,1.1,5],mt.concrete);qo(L,[J.x,J.yb+10.5,J.z],we,[2,le+3.5,1.5],mt.concreteB)}}let ve=(R,N,F,J=!1)=>{if(!R.idx.length)return null;let le=new pt;le.setAttribute("position",new ot(R.pos,3)),le.setAttribute("color",new ot(R.col,3)),le.setAttribute("uv",new ot(R.uv,2)),le.setIndex(R.idx),le.computeVertexNormals(),_.push(le);let we=new at(le,N);return we.name=F,we.receiveShadow=J,x.add(we),we};ve(Ae,b,"road-asphalt",!0),ve(W,M,"road-ramp-top"),ve(We,A,"road-paint"),ve(ze,E,"road-shoulder-talus"),ve(Fe,S,"road-barriers"),p&&ve(Re,I,"road-barrier-neon"),ve(Ge,V,"road-chevrons"),ve(De,z,"road-boost"),ve(L,P,"road-tunnels"),ve(w,H,"road-tunnel-neon"),ve(U,G,"road-props"),ve(ne,ee,"road-start-sign");let Le=[];for(let R=1;R*nm<a-5;R++){let N=R*nm;if(h.some(Oe=>N>=Oe.s0-15&&N<=Oe.s1+15))continue;let F=fe(N),J=R%2?1:-1,le=J*(F.w/2+6+2.6),we=F.yb-Ah*Math.min(1,2.45/Rc),Ue=n.range(8.5,9.5);Le.push({x:F.x+F.rx*le,z:F.z+F.rz*le,y:we,h:Ue,hx:F.x+F.rx*(le-J*.6),hz:F.z+F.rz*(le-J*.6)})}if(Le.length){let R=new Sn(.18,.26,9,6,1),N=new qs(.55,0);_.push(R,N);let F=new mn(R,k,Le.length),J=new mn(N,X,Le.length);F.name="road-lamp-masts",J.name="road-lamp-heads";let le=new Qe,we=new jt,Ue=new O,Oe=new O;Le.forEach((B,oe)=>{Oe.set(B.x,B.y+B.h/2,B.z),Ue.set(1,B.h/9,1),le.compose(Oe,we,Ue),F.setMatrixAt(oe,le),Oe.set(B.hx,B.y+B.h+.2,B.hz),Ue.set(1,1,1),le.compose(Oe,we,Ue),J.setMatrixAt(oe,le)}),F.instanceMatrix.needsUpdate=!0,J.instanceMatrix.needsUpdate=!0,x.add(F,J)}return{group:x,update:(R,N)=>{g&&(g.offset.x=-(N*.9%1)),z.emissiveIntensity=2.2+.5*Math.sin(N*5)},dispose:()=>{x.removeFromParent();for(let R of _)R.dispose();for(let R of m)R.dispose();for(let R of d)R.dispose()}}}function am(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=om(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);let x=om(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}return c}function om(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new xt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,p=u.count;f<p;f++)for(let x=0;x<t;x++){let _=u.getComponent(f,x);a.setComponent(f+h,x,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Ch(i,e){if(e===cp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ko||e===dc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ko)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function jr(i,e=.5,t=1){if(!i||i.userData.voxel||!(i.isMeshStandardMaterial||i.isMeshLambertMaterial))return i;i.userData.voxel=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"voxel-"+e+"-"+t,i.needsUpdate=!0,i}var FS=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function Ih(i,e){i.traverse(t=>{if(!t.isMesh||FS.test(t.name))return;let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||jr(s,e(t),1)})}function cm(i,e,t=46){let n=[];for(let c=0;c<t;c++){let l=e.range(0,Math.PI*2),u=e.range(700,4200),h=Math.cos(l)*u,f=Math.sin(l)*u,p=e.range(260,520),x=e.range(26,46),_=e.int(5,11);for(let m=0;m<_;m++)n.push([h+Math.round(e.range(-3.5,3.5))*x,p+Math.round(e.range(0,1.4))*x*.6,f+Math.round(e.range(-2,2))*x,x*e.int(1,3),x*.6*e.int(1,2),x*e.int(1,2)])}let s=new rn(1,1,1),r=new sc({color:i.night?2765648:16777215,fog:!1,emissive:i.night?329487:new Ee(16777215).lerp(new Ee(i.skyHorizon),.35).multiplyScalar(.5)}),o=new mn(s,r,n.length),a=new Qe;return n.forEach((c,l)=>{a.makeScale(c[3],c[4],c[5]),a.setPosition(c[0],c[1],c[2]),o.setMatrixAt(l,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function lm(i,e,t,n,s,r,o,a,c,l){let u=e+s,h=t+r,f=n+o,p,x,_,m,d,v;s?(p=0,x=c?1:-1,_=0,m=0,d=0,v=l?1:-1):r?(p=a?1:-1,x=0,_=0,m=0,d=0,v=l?1:-1):(p=a?1:-1,x=0,_=0,m=0,d=c?1:-1,v=0);let y=i(u+p,h+x,f+_)?1:0,g=i(u+m,h+d,f+v)?1:0,T=i(u+p+m,h+x+d,f+_+v)?1:0;return .5+.1667*(y&&g?0:3-(y+g+T))}function vs(i,e){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,v)=>m+r+(d+r)*1024+(v+r)*1048576,a=new Map,c=(m,d,v,y,g,T)=>{let b=Math.floor(m/e),M=Math.floor(d/e),A=Math.floor(v/e),E=o(b,M,A);a.has(E)||a.set(E,[b,M,A,y,g,T])};for(let m=0;m<n.count;m+=3){let d=n.getX(m),v=n.getY(m),y=n.getZ(m),g=n.getX(m+1),T=n.getY(m+1),b=n.getZ(m+1),M=n.getX(m+2),A=n.getY(m+2),E=n.getZ(m+2),S=.6,I=.6,V=.6;s&&(S=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,I=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,V=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let z=Math.max(Math.hypot(g-d,T-v,b-y),Math.hypot(M-d,A-v,E-y),Math.hypot(M-g,A-T,E-b)),P=Math.max(1,Math.ceil(z/e*2));for(let H=0;H<=P;H++)for(let G=0;G<=P-H;G++){let ee=H/P,k=G/P;c(d+(g-d)*ee+(M-d)*k,v+(T-v)*ee+(A-v)*k,y+(b-y)*ee+(E-y)*k,S,I,V)}}let l=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,v=l.get(d);v||l.set(d,v=[]),v.push(m)}for(let m of l.values()){m.sort((d,v)=>d[1]-v[1]);for(let d=0;d<m.length-1;d++)for(let v=m[d][1]+1;v<m[d+1][1];v++)a.set(o(m[d][0],v,m[d][2]),[m[d][0],v,m[d][2],m[d][3],m[d][4],m[d][5]])}let u=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],h=[],f=[],p=[],x=(m,d,v)=>a.has(o(m,d,v));for(let m of a.values()){let[d,v,y,g,T,b]=m,M=Math.sin(d*12.9898+v*78.233+y*37.719)*43758.5453,A=.86+.24*(M-Math.floor(M));for(let[E,S,I,V]of u)if(!a.has(o(d+E,v+S,y+I)))for(let z of[0,1,2,0,2,3]){let P=V[z*3],H=V[z*3+1],G=V[z*3+2],ee=A*lm(x,d,v,y,E,S,I,P,H,G);h.push((d+P)*e,(v+H)*e,(y+G)*e),f.push(E,S,I),p.push(g*ee,T*ee,b*ee)}}let _=new pt;return _.setAttribute("position",new ot(h,3)),_.setAttribute("normal",new ot(f,3)),_.setAttribute("color",new ot(p,3)),_.computeBoundingSphere(),_}function Kn(i,e,t,n,s,r=.2){let o=new Array(i*e*t),a=(_,m,d)=>_<0||m<0||d<0||_>=i||m>=e||d>=t?null:o[_+i*(m+e*d)];for(let _=0;_<t;_++)for(let m=0;m<e;m++)for(let d=0;d<i;d++)o[d+i*(m+e*_)]=s(d,m,_)||null;let c=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],l=[],u=[],h=[],f=-i/2,p=-t/2;for(let _=0;_<t;_++)for(let m=0;m<e;m++)for(let d=0;d<i;d++){let v=o[d+i*(m+e*_)];if(!v)continue;let y=Math.sin(d*12.9898+m*78.233+_*37.719)*43758.5453,g=1-r/2+r*(y-Math.floor(y));for(let[T,b,M,A]of c)if(!a(d+T,m+b,_+M)&&!(b<0&&m===0))for(let E of[0,1,2,0,2,3]){let S=A[E*3],I=A[E*3+1],V=A[E*3+2],z=g*lm(a,d,m,_,T,b,M,S,I,V);l.push((d+f+S)*n,(m+I)*n,(_+p+V)*n),u.push(T,b,M),h.push(v[0]*z,v[1]*z,v[2]*z)}}let x=new pt;return x.setAttribute("position",new ot(l,3)),x.setAttribute("normal",new ot(u,3)),x.setAttribute("color",new ot(h,3)),x.computeBoundingSphere(),x}function um(i,e=1,t=null){if(!i||i.userData.wetRoad)return i;i.userData.wetRoad=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new Qe},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),i.needsUpdate=!0,i}var an=5,hm=1,ys=450,Fn=40,fm=12e3,dm=32,pm=4e3,On=Math.PI*2,Yo=new Lt,eo=new Ee,mm=new Qe,gm=new Qe,OS=new O(0,1,0),xm=i=>i<0?0:i>1?1:i,bi=(i,e,t)=>i<e?e:i>t?t:i,Ks=(i,e,t)=>{let n=xm((t-i)/(e-i));return n*n*(3-2*n)};function BS(i){let e=(n,s)=>{let r=Math.imul(n|0,374761393)+Math.imul(s|0,668265263)+i|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(n,s)=>{let r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=a*a*(3-2*a),u=c*c*(3-2*c),h=e(r,o),f=e(r+1,o),p=e(r,o+1),x=e(r+1,o+1);return h+(f-h)*l+(p-h)*u+(h-f-p+x)*l*u};return(n,s)=>(t(n,s)*.5+t(n*2+17.3,s*2-9.1)*.25+t(n*4-3.7,s*4+11.2)*.125)/.875}var Qr=i=>{let e=new Ee(i);return[e.r,e.g,e.b]},Ms={sand:Qr(14271631),dry:Qr(7317050),garrigue:Qr(5212718),rock:Qr(12169890),pale:Qr(13617336),snow:Qr(15855076)},zS=[16513264,15853260,14725754,16052195],kS=[9075302,7236192,11047018,8023646],HS=[3407871,16727250,16757051],Ic=0,Pc=0,Lc=0,Zo=(i,e)=>{Ic+=(i[0]-Ic)*e,Pc+=(i[1]-Pc)*e,Lc+=(i[2]-Lc)*e};function VS(i,e,t,n,s,r){Ic=Ms.sand[0],Pc=Ms.sand[1],Lc=Ms.sand[2],Zo(Ms.dry,Ks(2.5,7,i)),Zo(Ms.garrigue,Ks(25,75,i)*.55),Zo(Ms.rock,Ks(.4,.65,e)),Zo(Ms.pale,Ks(95,120,i)*.8),Zo(Ms.snow,Ks(125,150,i));let o=Ic*t,a=Pc*t,c=Lc*t;n&&(o=o*.45+.02,a=a*.5+.03,c=c*.75+.09);for(let l=0;l<9;l+=3)s[r+l]=o,s[r+l+1]=a,s[r+l+2]=c}function $n(i,e){let t=i.index?i.toNonIndexed():i;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let n=t.attributes.position.count,s=new Float32Array(n*3);eo.setHex(e);for(let r=0;r<n;r++)s[r*3]=eo.r,s[r*3+1]=eo.g,s[r*3+2]=eo.b;return t.setAttribute("color",new xt(s,3)),t}var Ko=i=>am(i,!1);function GS(i,e,t){let n=Math.sin(i*12.9898+e*78.233+t*37.719)*43758.5453;return n-Math.floor(n)}function WS(){let i=new qs(1,0),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*GS(n,s,r);e.setXYZ(t,n*o,s*o,r*o)}return i.computeVertexNormals(),i}function XS(){return Ko([$n(new Sn(.35,.5,6,6).translate(0,3,0),7162931),$n(new qs(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function qS(){return Ko([$n(new Sn(.25,.35,1.2,5).translate(0,.6,0),7162931),$n(new Xs(1.1,10,6).translate(0,6,0),3037756)])}function YS(){let i=[$n(new Sn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Xs(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*On/7);i.push($n(t,5214010))}return Ko(i)}function ZS(){return Ko([$n(new Sn(1.6,2.3,13,8).translate(0,6.5,0),16052712),$n(new Sn(2,2,2.2,8).translate(0,6.5,0),12727595),$n(new Sn(1.3,1.3,1.8,8).translate(0,14,0),16771488),$n(new Xs(1.7,1.2,8).translate(0,15.4,0),3812906)])}function KS(){return Ko([$n(new rn(2.2,.9,6).translate(0,.45,0),15986662),$n(new Xs(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function li(i,e,t,n=!0){let s=new mn(i,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];Yo.position.set(o.x,o.y,o.z),Yo.rotation.set(0,o.ry??0,0),Yo.scale.set(o.sx??1,o.sy??1,o.sz??1),Yo.updateMatrix(),s.setMatrixAt(r,Yo.matrix),o.col!==void 0&&(eo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,eo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=n,s}var $S=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,JS=`
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
}`;function _m(i,e,t,n){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,c=BS(n.int(1,1073741808)),l=o.minX-ys-Fn,u=o.minZ-ys-Fn,h=Math.ceil((o.maxX-o.minX+2*ys)/Fn)+3,f=Math.ceil((o.maxZ-o.minZ+2*ys)/Fn)+3,p=Array.from({length:h*f},()=>[]);for(let B=0;B<r;B++){let oe=bi(Math.floor((s[B].x-l)/Fn),0,h-1),he=bi(Math.floor((s[B].z-u)/Fn),0,f-1);p[he*h+oe].push(B)}let x=0;function _(B,oe){let he=Math.floor((B-l)/Fn),de=Math.floor((oe-u)/Fn),ge=Math.max(h,f),Ce=1/0,Xe=0;for(let qe=0;qe<=ge;qe++){for(let st=de-qe;st<=de+qe;st++){if(st<0||st>=f)continue;let Ot=st===de-qe||st===de+qe?1:2*qe;for(let Ct=he-qe;Ct<=he+qe;Ct+=Ot){if(Ct<0||Ct>=h)continue;let Bt=p[st*h+Ct];for(let Vt=0;Vt<Bt.length;Vt++){let un=Bt[Vt],C=s[un],K=C.x-B,ae=C.z-oe,ce=K*K+ae*ae;ce<Ce&&(Ce=ce,Xe=un)}}}let nt=qe*Fn;if(Ce<=nt*nt)break}return x=Math.sqrt(Ce),Xe}function m(B,oe,he){let de=he*he,ge=1/0,Ce=bi(Math.floor((B-he-l)/Fn),0,h-1),Xe=bi(Math.floor((B+he-l)/Fn),0,h-1),qe=bi(Math.floor((oe-he-u)/Fn),0,f-1),nt=bi(Math.floor((oe+he-u)/Fn),0,f-1);for(let st=qe;st<=nt;st++)for(let bt=Ce;bt<=Xe;bt++){let Ot=p[st*h+bt];for(let Ct=0;Ct<Ot.length;Ct++){let Bt=s[Ot[Ct]],Vt=Bt.x-B,un=Bt.z-oe;Vt*Vt+un*un<=de&&Bt.y<ge&&(ge=Bt.y)}}return ge}let d=Math.ceil(r/4),v=new Float64Array(d*2);for(let B=0;B<d;B++)v[2*B]=s[B*4%r].x,v[2*B+1]=s[B*4%r].z;function y(B,oe){let he=!1;for(let de=0,ge=d-1;de<d;ge=de++){let Ce=v[2*de],Xe=v[2*de+1],qe=v[2*ge],nt=v[2*ge+1];Xe>oe!=nt>oe&&B<(qe-Ce)*(oe-Xe)/(nt-Xe)+Ce&&(he=!he)}return he}let g=o.minX-ys,T=o.minZ-ys,b=Math.ceil((o.maxX-o.minX+2*ys)/an)+1,M=Math.ceil((o.maxZ-o.minZ+2*ys)/an)+1,A=new Float32Array(b*M);for(let B=0;B<M;B++)for(let oe=0;oe<b;oe++){let he=g+oe*an,de=T+B*an,ge=_(he,de),Ce=x,Xe=s[ge],qe=Xe.width*.5,nt=Xe.y;if(Ce<40){let K=m(he,de,24);K<nt&&(nt=K)}let st=1;if(!y(he,de)){let K=Ce-qe+(c(he/140+31.7,de/140-8.2)-.5)*70;st=1-Ks(110,200,K)}let bt=c(he/260,de/260),Ct=-15+(10+130*Math.pow(xm((bt-.42)/.5),1.5)+6*bt+15)*st;if(st>=1){let K=c(he/90+11.3,de/90-4.1);Ct=Math.max(Ct,nt+6+38*K)}let Bt=Ks(qe+6+12,qe+6+62,Ce),Vt=nt-.6,un=Vt+(Ct-Vt)*Bt,C=nt+Math.max(0,Ce-qe-6-12)*1.2;un>C&&(un=C),A[B*b+oe]=un}let E=null;function S(B,oe){if(E)return E(B,oe);let he=(B-g)/an,de=(oe-T)/an;he=bi(he,0,b-1.000001),de=bi(de,0,M-1.000001);let ge=Math.floor(he),Ce=Math.floor(de),Xe=he-ge,qe=de-Ce,nt=A[Ce*b+ge],st=A[Ce*b+ge+1],bt=A[(Ce+1)*b+ge],Ot=A[(Ce+1)*b+ge+1],Ct=nt+(st-nt)*Xe,Bt=bt+(Ot-bt)*Xe;return Ct+(Bt-Ct)*qe}let I=(B,oe)=>Math.max(Math.abs(S(B+4,oe)-S(B-4,oe)),Math.abs(S(B,oe+4)-S(B,oe-4)))/8,V=(B,oe,he)=>{let de=_(B,oe);return x>=s[de].width*.5+6+4+he},z=[],P=[],H=new Float32Array(9),G=(B,oe,he,de,ge,Ce,Xe,qe,nt)=>{let st=de-B,bt=ge-oe,Ot=Ce-he,Ct=Xe-B,Bt=qe-oe,Vt=nt-he,un=bt*Vt-Ot*Bt,C=Ot*Ct-st*Vt,K=st*Bt-bt*Ct,ae=Math.hypot(un,C,K)||1,ce=1-Math.abs(C)/ae;z.push(B,oe,he,de,ge,Ce,Xe,qe,nt),VS((oe+ge+qe)/3,ce,.9+.2*n.next(),a,H,0);for(let Q=0;Q<9;Q++)P.push(H[Q])},ee=b-1,k=M-1,X=new Float32Array(ee*k);for(let B=0;B<k;B++)for(let oe=0;oe<ee;oe++){let he=B*b+oe,de=(A[he]+A[he+1]+A[he+b]+A[he+b+1])/4;X[B*ee+oe]=Math.floor(de/hm)*hm}let ue=-4;for(let B=0;B<k;B++)for(let oe=0;oe<ee;oe++){let he=X[B*ee+oe],de=g+oe*an,ge=T+B*an,Ce=de+an,Xe=ge+an;if(he>ue&&(G(de,he,ge,de,he,Xe,Ce,he,ge),G(Ce,he,ge,de,he,Xe,Ce,he,Xe)),oe+1<ee){let qe=X[B*ee+oe+1],nt=Math.min(he,qe),st=Math.max(he,qe);st>nt&&st>ue&&(G(Ce,nt,ge,Ce,st,ge,Ce,st,Xe),G(Ce,nt,ge,Ce,st,Xe,Ce,nt,Xe))}if(B+1<k){let qe=X[(B+1)*ee+oe],nt=Math.min(he,qe),st=Math.max(he,qe);st>nt&&st>ue&&(G(de,nt,Xe,de,st,Xe,Ce,st,Xe),G(de,nt,Xe,Ce,st,Xe,Ce,nt,Xe))}}E=(B,oe)=>{let he=bi(Math.floor((B-g)/an),0,ee-1),de=bi(Math.floor((oe-T)/an),0,k-1);return X[de*ee+he]};let pe=new pt;pe.setAttribute("position",new ot(z,3)),pe.setAttribute("color",new ot(P,3)),pe.computeVertexNormals(),pe.computeBoundingSphere();let Me=new at(pe,new it({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:wt}));Me.receiveShadow=!0;let fe=new dt;fe.name="environment",fe.add(Me);let ie=(o.minX+o.maxX)/2,$=(o.minZ+o.maxZ)/2,j=new An(fm,fm,dm,dm);j.rotateX(-Math.PI/2);let D=j.attributes.position,Y=D.count,Z=new Float32Array(Y),se=new Float32Array(Y);for(let B=0;B<Y;B++)Z[B]=D.getX(B),se[B]=D.getZ(B);let _e=new at(j,new it({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));_e.position.set(ie,0,$),fe.add(_e);let Se=new O(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ae=new dt,W=new St({uniforms:{topColor:{value:new Ee(t.skyTop)},horizonColor:{value:new Ee(t.skyHorizon)},sunColor:{value:new Ee(t.sunColor)},sunDir:{value:Se},night:{value:a?1:0}},vertexShader:$S,fragmentShader:JS,side:Kt,depthWrite:!1,fog:!1}),We=new at(new fs(pm,32,16),W);if(We.renderOrder=-10,We.frustumCulled=!1,Ae.add(We),a){let oe=new Float32Array(1500);for(let ge=0;ge<500;ge++){let Ce=n.range(0,On),Xe=Math.asin(n.range(.05,.98)),qe=pm*.97;oe[ge*3]=qe*Math.cos(Xe)*Math.cos(Ce),oe[ge*3+1]=qe*Math.sin(Xe),oe[ge*3+2]=qe*Math.cos(Xe)*Math.sin(Ce)}let he=new pt;he.setAttribute("position",new xt(oe,3));let de=new hs(he,new Ws({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));de.frustumCulled=!1,Ae.add(de)}fe.add(Ae);let ze=new qr(t.hemiSky,t.hemiGround,t.hemiIntensity),Fe=new _i(t.sunColor,t.sunIntensity);Fe.castShadow=!0,Fe.shadow.mapSize.set(2048,2048);let Re=Fe.shadow.camera;Re.left=-90,Re.right=90,Re.top=90,Re.bottom=-90,Re.near=1,Re.far=600,Re.updateProjectionMatrix(),Fe.shadow.bias=-5e-4,fe.add(ze,Fe,Fe.target);let Ge=i.fog,De=i.background,L=new Vr(t.fogColor,t.fogDensity),w=new Ee(t.skyHorizon);i.fog=L,i.background=w;let U=g+(b-1)*an,ne=T+(M-1)*an,re=()=>n.range(g+30,U-30),te=()=>n.range(T+30,ne-30),xe=(B,oe,he)=>{let de=[];for(let ge=0;ge<oe&&de.length<B;ge++){let Ce=he(re(),te());Ce&&de.push(Ce)}return de},be=xe(320,4e4,(B,oe)=>{let he=S(B,oe);if(he<4||he>95||!V(B,oe,2)||I(B,oe)>.6)return null;let de=n.range(.8,1.45);return{x:B,y:he-.3,z:oe,sx:de,sy:de*n.range(.9,1.3),sz:de,ry:n.range(0,On),col:16777215,v:n.range(.85,1.15)}}),Ie=xe(170,4e4,(B,oe)=>{let he=S(B,oe);if(he<6||he>70||!V(B,oe,1.5)||I(B,oe)>.6)return null;let de=n.range(.8,1.3);return{x:B,y:he-.3,z:oe,sx:de,sy:de*n.range(.9,1.25),sz:de,ry:n.range(0,On),col:16777215,v:n.range(.85,1.15)}}),He=xe(110,4e4,(B,oe)=>{let he=S(B,oe);if(he<1.8||he>14||!V(B,oe,2)||I(B,oe)>.5)return null;let de=n.range(.85,1.25);return{x:B,y:he-.3,z:oe,sx:de,sy:de,sz:de,ry:n.range(0,On),col:16777215,v:n.range(.9,1.1)}});fe.add(li(vs(XS(),.8),new it({vertexColors:!0,flatShading:!0,roughness:.9}),be)),fe.add(li(vs(qS(),.7),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Ie)),fe.add(li(vs(YS(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.9}),He));let ye=xe(300,3e4,(B,oe)=>{let he=S(B,oe);if(he<1.5)return null;let de=n.range(1.2,4.5);return V(B,oe,de*.6)?{x:B,y:he+de*.15,z:oe,sx:de,sy:de*n.range(.55,.9),sz:de,ry:n.range(0,On),col:n.pick(kS),v:n.range(.85,1.15)}:null}),Ne=xe(3,3e4,(B,oe)=>{if(S(B,oe)>-4)return null;let he=_(B,oe);if(x<s[he].width*.5+200||x>800)return null;let de=n.range(25,45);return{x:B,y:.1*de,z:oe,sx:de,sy:de*.45,sz:de,ry:n.range(0,On),col:10260344,v:1}});fe.add(li(vs(WS(),.42),new it({color:16777215,flatShading:!0,roughness:.95}),ye.concat(Ne)));let Ke=[],Ye=[],me=[],Be=n.int(3,5),ve=0;for(let B=0;B<4e3&&ve<Be;B++){let oe=re(),he=te(),de=_(oe,he),ge=s[de].width*.5;if(x<ge+25||x>ge+80)continue;let Ce=S(oe,he);if(Ce<6||Ce>40||I(oe,he)>.35)continue;ve++;let Xe=n.int(7,12);for(let qe=0;qe<Xe;qe++){let nt=n.range(0,On),st=Math.sqrt(n.next())*18,bt=oe+Math.cos(nt)*st,Ot=he+Math.sin(nt)*st,Ct=_(bt,Ot);if(x<s[Ct].width*.5+6+4+4)continue;let Bt=S(bt,Ot);if(Bt<3)continue;let Vt=n.range(4,6.5),un=n.range(3.5,6),C=n.range(4,6.5),K=n.pick([0,Math.PI/2])+n.range(-.15,.15),ae=Bt-1;if(Ke.push({x:bt,y:ae,z:Ot,ry:K,sx:Vt,sy:un,sz:C,col:n.pick(zS),v:1}),Ye.push({x:bt,y:ae+un,z:Ot,ry:K,sx:Vt*1.08,sy:n.range(1.8,2.6),sz:C*1.08}),a)for(let ce of[-1,1]){let Q=ce*Vt*.28,Pe=C/2+.03;me.push({x:bt+Q*Math.cos(K)+Pe*Math.sin(K),y:ae+un*.55,z:Ot-Q*Math.sin(K)+Pe*Math.cos(K),ry:K})}}}let Le=new it({color:16777215,flatShading:!0,roughness:.85}),q=new it({color:11818298,flatShading:!0,roughness:.8});if(Ke.length){let B=new rn(1,1,1).translate(0,.5,0),oe=vs(new Sn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);fe.add(li(B,Le,Ke),li(oe,q,Ye))}if(a&&me.length){let B=new rn(1.2,1.1,.12);fe.add(li(B,new Gt({color:16761466}),me,!1))}if(a){let B=0,oe=0,he=!1;for(let de=0;de<4e3&&!he;de++){let ge=re(),Ce=te(),Xe=_(ge,Ce),qe=s[Xe].width*.5;if(x<qe+220||x>qe+420)continue;let nt=S(ge,Ce);nt<6||nt>30||(B=ge,oe=Ce,he=!0)}if(he){let de=[],ge=[],Ce=n.int(9,13);for(let Xe=0;Xe<Ce;Xe++){let qe=B+n.range(-110,110),nt=oe+n.range(-110,110),st=S(qe,nt);if(st<2)continue;let bt=n.range(6,10),Ot=n.range(30,70);de.push({x:qe,y:st,z:nt,sx:bt,sy:Ot,sz:bt,col:1777720,v:n.range(.8,1.2)});let Ct=n.pick(HS);for(let Bt=0;Bt<3;Bt++){let Vt=Bt*On/3+n.range(0,.5);ge.push({x:qe+Math.cos(Vt)*bt*.88,y:st+Ot*.05,z:nt+Math.sin(Vt)*bt*.88,ry:-Vt,sy:Ot*.9,col:Ct,v:1})}}fe.add(li(new Sn(.72,1,1,6).translate(0,.5,0),new it({color:16777215,flatShading:!0,roughness:.7}),de),li(new rn(.5,1,.25).translate(0,.5,0),new Gt({color:16777215}),ge,!1))}}{let B=[],oe=[];for(let de=1;de<M-1;de++)for(let ge=1;ge<b-1;ge++){let Ce=de*b+ge,Xe=A[Ce];if(Xe<2||Xe>30)continue;let qe=_(g+ge*an,T+de*an);if(x<s[qe].width*.5+60)continue;(A[Ce-1]<0||A[Ce+1]<0||A[Ce-b]<0||A[Ce+b]<0?B:oe).push(Ce)}let he=B.length?B:oe;if(he.length){let de=n.pick(he),ge=de%b,Ce=(de-ge)/b,Xe=new at(vs(ZS(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.6}));Xe.position.set(g+ge*an,A[de]-.5,T+Ce*an),Xe.castShadow=!0,fe.add(Xe)}}let Te=xe(4,2e4,(B,oe)=>{if(S(B,oe)>-3)return null;let he=_(B,oe);return x<s[he].width*.5+250||x>900?null:{x:B,y:-.2,z:oe,ry:n.range(0,On),col:16777215,v:1}});Te.length&&fe.add(li(vs(KS(),.5),new it({vertexColors:!0,flatShading:!0,roughness:.6}),Te));let R=[],N=[];for(let B=0;B<2e4&&R.length<3;B++){let oe=re(),he=te(),de=_(oe,he);if(x<s[de].width*.5+60)continue;let ge=S(oe,he);ge<55||R.some(Ce=>Math.hypot(Ce.x-oe,Ce.z-he)<200)||R.push({x:oe,y:ge,z:he,ry:n.range(0,On),speed:n.range(.9,1.5),phase:n.range(0,On)})}let F=new rn(.7,14,.22).translate(0,7,0),J=new it({color:15659507,flatShading:!0,roughness:.6}),le=null;if(R.length){fe.add(li(new Sn(.8,.35,30,6).translate(0,15,0),J,R));for(let B of R)N.push(new Qe().compose(new O(B.x,B.y+30,B.z),new jt().setFromAxisAngle(OS,B.ry),new O(1,1,1)));le=new mn(F,J,R.length*3),le.castShadow=!0,fe.add(le)}function we(B){if(le){for(let oe=0;oe<R.length;oe++){let he=B*R[oe].speed+R[oe].phase;for(let de=0;de<3;de++)gm.makeRotationZ(he+de*On/3),mm.multiplyMatrices(N[oe],gm),le.setMatrixAt(oe*3+de,mm)}le.instanceMatrix.needsUpdate=!0}}we(0);function Ue(B,oe,he){Fe.position.set(he.x+Se.x*200,he.y+Se.y*200,he.z+Se.z*200),Fe.target.position.set(he.x,he.y,he.z),Ae.position.set(he.x,0,he.z);for(let de=0;de<Y;de++)D.setY(de,.35*Math.sin(Z[de]*.02+oe*.8)+.25*Math.cos(se[de]*.017-oe*.6));D.needsUpdate=!0,we(oe)}function Oe(){i.remove(fe),fe.traverse(B=>{if(B.geometry&&B.geometry.dispose(),B.material){let oe=Array.isArray(B.material)?B.material:[B.material];for(let he of oe)he.dispose()}}),Fe.shadow.map&&Fe.shadow.map.dispose(),fe.clear(),i.fog===L&&(i.fog=Ge??null),i.background===w&&(i.background=De??null)}return i.add(fe),{group:fe,sun:Fe,update:Ue,dispose:Oe,heightAt:S}}var Nc=[.62,.6,.55],Ss=[.5,.49,.45],Lh=[.72,.3,.18],ym=[.6,.24,.15],Dh=[.16,.2,.28],jS=[.2,.38,.3],Mm=[.36,.25,.16],to=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],Js=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],hn=(i,e,t)=>{let n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function Dc(i,e,t,n){let s=n*3+1,r=Math.ceil(t/2);return Kn(e+2,s+r+1,t+2,1,(o,a,c)=>{let l=o-1,u=c-1;if(a<s){if(l<0||u<0||l>=e||u>=t)return null;if(!(l===0||u===0||l===e-1||u===t-1))return a===s-1?i:null;let p=l===0||l===e-1?u:l,x=l===0||l===e-1?t:e;return a%3===2&&p%3===1&&p<x-1?Dh:a%3===2&&p%3===2&&p<x-1&&hn(l,a,u)>.45?jS:a===0?Ss:i}let h=a-s;return u>=h-1&&u<=t-h&&h<=r?(l+h)%2?Lh:ym:null},.14)}function QS(i){return Kn(7,23,7,1,(n,s,r)=>{let o=n-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?Dh:s===0?Ss:i:s===16?i:null;let c=s-17;return n>=c&&n<=6-c&&r>=c&&r<=6-c?(n+r)%2?Lh:ym:null},.14)}function eb(i){let r=[];for(let o=0;o<6;o++)r.push([11+(hn(i,o,1)-.5)*9,13+hn(i,o,2)*6,11+(hn(i,o,3)-.5)*9,3.6+hn(i,o,4)*2.4]);return Kn(22,24,22,.7,(o,a,c)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(c-11+.5)<1.3)return Mm;for(let l of r){let u=o-l[0],h=(a-l[1])*1.25,f=c-l[2];if(u*u+h*h+f*f<l[3]*l[3])return to[Math.floor(hn(o,a,c)*to.length)]}return null},.22)}function tb(){return Kn(14,16,8,.5,(i,e,t)=>{let s=5+Math.floor((i-1)/2)*1.6;return i===0?e<5?(e+t)%3?Nc:Ss:null:i>=1&&i<13&&e<s?e>=s-1?[.42,.42,.44]:Ss:i===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function Ph(i,e){let r=e-3-9;return Kn(i,e+2,5,1,(o,a,c)=>{let l=o%22,u=a>=e&&(c===0||c===4);if(a>=e)return u?Ss:null;if(a>=e-2)return(o+a+c)%3?Nc:Ss;if(l<4)return(o+a+c)%4?Nc:Ss;if(a<r)return null;let h=l-4-9+.5,f=a-r;return h*h+f*f>81?(o+a+c)%3?Nc:Ss:null},.14)}function nb(i){return Kn(6,4,6,.5,(t,n,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(n-.8)*1.5,c=2.5+(hn(t+i,n,s)-.5)*1.2;return r*r+a*a+o*o<c*c?to[Math.floor(hn(t,n+i,s)*to.length)]:null},.22)}function ib(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Kn(6,20,6,.6,(n,s,r)=>{let o=n-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?Mm:null;let c=(s-2)/18,l=2.6*Math.sin(Math.PI*Math.min(1,.18+c*.82))**.7*(1-c*.55)+.3;return o*o+a*a<l*l?t[Math.floor(hn(n,s,r)*3)]:null},.2)}function vm(i){let r=(a,c)=>{let l=(a-15+.5)/15,u=(c-15+.5)/(30/2),h=Math.hypot(l,u)+(hn(Math.floor(a/3)+i,0,Math.floor(c/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-h)/.16)),p=14+Math.floor(hn(Math.floor(a/5),i,Math.floor(c/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let c=Math.floor(15+(hn(i,a,1)-.5)*14),l=Math.floor(15+(hn(i,a,2)-.5)*14);o.push([c,l,r(c,l),Js[Math.floor(hn(i,a,3)*Js.length)],a===0?7:3])}return Kn(30,26,30,1.6,(a,c,l)=>{let u=r(a,l);for(let[p,x,_,m,d]of o){let v=Math.abs(a-p),y=Math.abs(l-x),g=d>3?1:2;if(v<=g&&y<=1&&c>=_&&c<_+d)return c===_+d-2&&v!==g&&y===1?Dh:m;if(v<=g&&y<=1-(c-_-d)&&c>=_+d&&c<_+d+2)return Lh}if(c>=u)return null;if(c===u-1)return hn(a,5,l)>.75?to[0]:[.36,.56,.2];let h=c%5===0?.86:1,f=.93+.14*hn(Math.floor(a/2),c,Math.floor(l/2));return hn(a,c,l)>.965?to[2]:[.74*h*f,.71*h*f,.64*h*f]},.1)}function $s(i,e,t){let n=new mn(i,e,t.length),s=new Qe,r=new jt,o=new O,a=new O,c=new O(0,1,0);return t.forEach((l,u)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??l.s??1,l.sy??l.s??1,l.sz??l.s??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),n.setMatrixAt(u,s),l.color&&n.setColorAt(u,l.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n}function sb(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=1024,i.height=192;let e=i.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let n of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(n+s*72,192),e.lineTo(n+s*72+36,192),e.lineTo(n+s*72+108,0),e.lineTo(n+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new ci(i);return t.colorSpace=Tt,t.anisotropy=8,t}function Sm(i,e,t,n){let s=new dt;s.name="scenery";let r=[],o=()=>{let P=new it({vertexColors:!0,roughness:.9,metalness:0});return r.push(P),P},a=(P,H)=>{H.length&&(r.push(P),s.add($s(P,o(),H)))},c={x:0,y:0,z:0,heading:0},l=i.length,u=P=>!!_s(i,(P%l+l)%l,"tunnel"),h=P=>i.pts[Math.floor((P%l+l)%l/i.step)%i.pts.length].width,f=(P,H)=>{let G=1/0;for(let ee=0;ee<i.pts.length;ee+=3){let k=i.pts[ee],X=(k.x-P)*(k.x-P)+(k.z-H)*(k.z-H);X<G&&(G=X)}return Math.sqrt(G)},p=(P,H)=>{let G=Math.floor(P/i.step);for(let ee=0;ee<H/i.step;ee+=4)if(Math.abs(i.pts[(G+ee)%i.pts.length].curv)>.004)return!1;return!u(P)&&!u(P+H/2)&&!u(P+H)},x=[[24,22,-1]];for(let P=380;P<l-220&&x.length<4;P+=70)p(P-10,80)&&(x.push([P,14,t.sign()]),P+=420);let _=[],m=[],d=[],v=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],y=P=>x.some(([H,G])=>P>H-12&&P<H+G*4+12);for(let[P,H,G]of x)for(let ee=0;ee<H;ee++){let k=P+ee*4,X=G*(h(k)/2+6+.6);Ft(i,k,X,c);let ue=c.heading+G*Math.PI/2,pe=Math.sin(c.heading),Me=Math.cos(c.heading),fe=-G*Me,ie=G*pe;_.push({x:c.x+fe*3.5,y:c.y-.3,z:c.z+ie*3.5,ry:ue});for(let $=0;$<6;$++)for(let j=0;j<4;j++){if(t.next()<.18)continue;let D=-1.6+j*1.05+t.range(-.15,.15),Y=1+$*1,Z=c.x+fe*Y+pe*D,se=c.z+ie*Y+Me*D,_e=c.y-.3+2.5+$*.8,Se=new Ee(t.pick(v));m.push({x:Z,y:_e+.4,z:se,ry:c.heading,sx:.5,sy:.8,sz:.36,color:Se}),d.push({x:Z,y:_e+1,z:se,ry:c.heading,sx:.36,sy:.36,sz:.36,color:new Ee(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:Z-fe*.12,y:_e-.1,z:se-ie*.12,ry:c.heading,sx:.46,sy:.3,sz:.5,color:new Ee(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:Z,y:_e+1.22,z:se,ry:c.heading,sx:.4,sy:.12,sz:.4,color:new Ee(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:Z+pe*.32,y:_e+1.05,z:se+Me*.32,ry:c.heading,sx:.14,sy:.6,sz:.14,color:Se})}}if(a(tb(),_),m.length){let P=new rn(1,1,1);r.push(P);let H=new it({roughness:.85});r.push(H),s.add($s(P,H,m),$s(P,H,d));let G=_.map(ee=>({x:ee.x,y:ee.y+8.2,z:ee.z,ry:ee.ry,sx:8,sy:.4,sz:4.05,color:new Ee(2303534)}));s.add($s(P,H,G))}let g=sb(),T=new it({map:g,color:g?16777215:15921128,roughness:.7,side:wt});r.push(T),g&&r.push(g);let b=new An(1,1);r.push(b);let M=[],A=(P,H)=>{if(u(P))return;let G=H*(h(P)/2+6-.22);Ft(i,P,G,c),M.push({x:c.x,y:c.y+.52,z:c.z,ry:c.heading+(H<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let P=120;P<240;P+=13)A(P,-1);for(let P=30;P<110;P+=13)A(P,1);for(let P=400;P<l-80;P+=260)A(P,-1),A(P+13,-1),A(P+120,1);if(M.length){let P=$s(b,T,M);P.castShadow=!1,s.add(P)}let E=[[],[],[]];for(let P=130;P<l-20;P+=t.range(13,28)){if(y(P)||u(P)||u(P+12)||u(P-12))continue;let G=(t.next()<.82?-1:1)*(h(P)/2+6+t.range(3.4,6.5));Ft(i,P,G,c);let ee=n?n(c.x,c.z):c.y;ee<1.5||E[t.int(0,2)].push({x:c.x,y:ee-.2,z:c.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(E.forEach((P,H)=>a(eb(11+H*7),P)),n){let P=[];for(let X=200;X<l-100;X+=45)for(let ue of[-1,1]){let pe=ue*t.range(70,150);Ft(i,X,pe,c);let Me=n(c.x,c.z);Me>c.y+6&&Me>6&&f(c.x,c.z)>55&&P.push({x:c.x,z:c.z,y:Me,score:Me-c.y+t.range(0,4)})}P.sort((X,ue)=>ue.score-X.score);let H=[];for(let X of P){if(H.length>=4)break;H.every(ue=>Math.hypot(ue.x-X.x,ue.z-X.z)>220)&&H.push(X)}let G=[{geo:Dc(Js[0],8,7,2),items:[]},{geo:Dc(Js[1],10,7,3),items:[]},{geo:Dc(Js[2],7,6,2),items:[]},{geo:Dc(Js[3],9,8,3),items:[]}],ee=[],k=[];for(let X of H){for(let ue=0;ue<2;ue++){let pe=X.x+t.range(-12,12),Me=X.z+t.range(-12,12);f(pe,Me)<45||(ee.push({x:pe,y:n(pe,Me)-.5,z:Me,ry:t.int(0,3)*Math.PI/2}),k.push([pe,Me]))}for(let ue=0;ue<60&&G.reduce((pe,Me)=>pe+Me.items.length,0)<H.length*22;ue++){let pe=t.range(0,6.28),Me=t.range(8,60),fe=X.x+Math.cos(pe)*Me,ie=X.z+Math.sin(pe)*Me,$=n(fe,ie);$<3||f(fe,ie)<42||k.some(j=>Math.hypot(j[0]-fe,j[1]-ie)<12)||(k.push([fe,ie]),t.pick(G).items.push({x:fe,y:$-.5,z:ie,ry:t.int(0,3)*Math.PI/2}))}}for(let X of G)a(X.geo,X.items);a(QS(Js[2]),ee)}let S=[[],[]];for(let P=115;P<l-10;P+=t.range(4.5,9))if(!u(P)){if(t.next()<.3){P+=t.range(20,60);continue}for(let H of[-1,1]){if(t.next()<.35)continue;let G=H*(h(P)/2+6+t.range(1.4,2.6));Ft(i,P,G,c),S[t.int(0,1)].push({x:c.x,y:c.y-.5,z:c.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}S.forEach((P,H)=>a(nb(3+H*5),P));let I=[];for(let P=160;P<l-60;P+=t.range(120,220)){let H=t.sign(),G=t.int(5,9);for(let ee=0;ee<G;ee++){let k=P+ee*4.2;if(u(k))continue;Ft(i,k,H*(h(k)/2+6+4.2),c);let X=n?n(c.x,c.z):c.y;X<1.5||I.push({x:c.x,y:X-.2,z:c.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(ib(),I),n){let P=[[],[],[]],H=[];for(let G=150;G<l-50;G+=t.range(120,220))for(let ee of[-1,1]){if(t.next()<.3)continue;Ft(i,G,ee*t.range(72,125),c);let k=n(c.x,c.z);k<1||f(c.x,c.z)<56||H.some(X=>Math.hypot(X[0]-c.x,X[1]-c.z)<70)||(H.push([c.x,c.z]),P[t.int(0,2)].push({x:c.x,y:k-3,z:c.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}P.forEach((G,ee)=>a(vm(17+ee*13),G))}{let P=[],H=[],G=new Ee(12172998),ee=new Ee(7172730);for(let k=0;k<l;k+=4){if(u(k)||y(k))continue;let X=h(k)/2+6-.75;Ft(i,k,X,c);let ue=c.x,pe=c.y,Me=c.z,fe=c.heading;P.push({x:ue,y:pe+.4,z:Me,ry:fe,sx:.12,sy:.8,sz:.12,color:ee}),Ft(i,k+4,h(k+4)/2+6-.75,c);let ie=(ue+c.x)/2,$=(pe+c.y)/2,j=(Me+c.z)/2,D=Math.hypot(c.x-ue,c.z-Me)+.05,Y=Math.atan2(c.x-ue,c.z-Me);for(let Z of[.42,.72])H.push({x:ie,y:$+Z,z:j,ry:Y,sx:.07,sy:.2,sz:D,color:G})}if(P.length){let k=new rn(1,1,1),X=new it({roughness:.35,metalness:.85});r.push(k,X),s.add($s(k,X,P),$s(k,X,H))}}if(n){let P=[];for(let k=0;k<400&&P.length<16;k++){let X=t.range(i.bounds.minX-420,i.bounds.maxX+420),ue=t.range(i.bounds.minZ-420,i.bounds.maxZ+420),pe=f(X,ue);n(X,ue)>-3||pe<90||pe>520||P.some(Me=>Math.hypot(Me.x-X,Me.z-ue)<60)||P.push({x:X,y:-.3,z:ue,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let H=[.93,.93,.9],G=[.98,.97,.93],ee=[.55,.36,.2];a(Kn(5,18,14,.7,(k,X,ue)=>{let pe=Math.abs(ue-6.5),Me=Math.abs(k-2);return X<2?Me<=2-(X===0?1:0)-(pe>5?1:0)&&pe<7-(X===0?1:0)?X===1&&Me<2?ee:H:null:k===2&&ue===7?[.3,.26,.22]:k===2&&ue>7&&ue<13&&X<17-(ue-7)*2.6||k===2&&ue<7&&ue>1&&X<14-(7-ue)*2.4?G:null},.06),P)}{Ft(i,0,0,c);let P=c.x,H=c.y,G=c.z,ee=c.heading,k=Math.sin(ee),X=Math.cos(ee),ue=-X,pe=k,Me=(ie,$,j)=>f(ie,$)>j,fe=!1;for(let ie of[430,500,380,580,660]){for(let $ of[70,130,0,-70,190,-140]){if(fe)break;let j=P+k*ie+ue*$,D=G+X*ie+pe*$;if(!Me(j,D,85))continue;let Y=n?Math.max(-2,n(j,D)):H;a(vm(101),[{x:j,y:Y-3,z:D,ry:ee+.6,s:2.3}]);let Z=j-k*95-ue*30,se=D-X*95-pe*30;if(Me(Z,se,45)&&Me(Z+ue*90,se+pe*90,40)&&Me(Z-ue*90,se-pe*90,40)){let _e=n?Math.max(-1,n(Z,se)):H;a(Ph(198,24),[{x:Z,y:Math.min(_e,H)-5,z:se,ry:ee}])}fe=!0}if(fe)break}}for(let P of[1,-1]){let H=!0;for(let ee of[210,270,330,390])Ft(i,ee,P*62,c),f(c.x,c.z)<46&&(H=!1);if(!H||P<0)continue;Ft(i,300,P*62,c);let G=n?n(c.x,c.z):c.y;a(Ph(198,22),[{x:c.x,y:G-4,z:c.z,ry:c.heading-Math.PI/2}]);break}let V=-1,z=-1/0;for(let P=300;P<l-300;P+=40){let H=Math.floor(P/i.step),G=0;for(let k=0;k<60;k+=6)G+=Math.abs(i.pts[(H+k)%i.pts.length].curv);let ee=-G*400+t.range(0,1)-(u(P)||u(P+100)?100:0);ee>z&&(z=ee,V=P)}if(V>0)for(let P of[1,-1]){Ft(i,V+90,P*95,c);let H=n?n(c.x,c.z):c.y;if(H<2)continue;a(Ph(198,20),[{x:c.x,y:Math.min(H,c.y)-4,z:c.z,ry:c.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let P of r)P.dispose?.()}}}function rb(i,e){let t=i.length,n=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=i[a],o++;n[r]=s/o}return n}function bm(i){let e=i.x.length,t=i.step,n=i.x,s=i.y,r=i.z,o=new Float64Array(e),a=new Float64Array(e),c=new Float64Array(e);for(let M=0;M<e;M++){let A=Math.max(0,M-1),E=Math.min(e-1,M+1),S=n[E]-n[A],I=r[E]-r[A],V=Math.hypot(S,I)||1e-9;o[M]=S/V,a[M]=I/V,c[M]=(s[E]-s[A])/V}let l=new Float64Array(e);for(let M=1;M<e-1;M++){let A=-a[M],E=o[M];l[M]=((o[M+1]-o[M-1])*A+(a[M+1]-a[M-1])*E)/(2*t)}l[0]=l[1],l[e-1]=l[e-2];let u=rb(l,12),h=new Float64Array(e);for(let M=0;M<e;M++)h[M]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(u[M]))));for(let M=e-2;M>=0;M--)h[M]=Math.min(h[M],Math.sqrt(h[M+1]**2+80*t));for(let M=1;M<e;M++)h[M]=Math.min(h[M],Math.sqrt(h[M-1]**2+40*t));let f=new Array(e),p=1/0,x=-1/0,_=1/0,m=-1/0,d=1/0,v=0;for(let M=0;M<e;M++){let A=Math.hypot(1,c[M]);f[M]={s:M*t,x:n[M],y:s[M],z:r[M],tx:o[M]/A,ty:c[M]/A,tz:a[M]/A,rx:-a[M],rz:o[M],width:i.width,curv:u[M],vmax:h[M],slope:c[M]},n[M]<p&&(p=n[M]),n[M]>x&&(x=n[M]),r[M]<_&&(_=r[M]),r[M]>m&&(m=r[M]);let E=1/Math.max(1e-9,Math.abs(u[M]));E<d&&(d=E),Math.abs(c[M])>v&&(v=Math.abs(c[M]))}let y=[],g=[];for(let M of i.features)M.type==="tunnel"?y.push({type:"tunnel",s0:M.s0,s1:M.s1,name:M.name}):g.push({s0:M.s0,s1:M.s1,name:M.name});let T=(e-1)*t;for(let M=900;M<T-400;M+=1700){let A=Math.floor(M/t);!y.some(S=>M>S.s0-60&&M<S.s1+60)&&Math.abs(u[A])<.002&&y.push({type:"boost",s0:M,s1:M+10})}let b=0;for(let M=0;M<e;M++)b+=t/Math.max(5,h[M]);return{seed:"REAL:"+i.id,attempts:1,open:!0,real:i,length:T,step:t,count:e,pts:f,features:y,bridges:g,bounds:{minX:p,maxX:x,minZ:_,maxZ:m},stats:{minRadius:d,maxSlope:v,lapTimeEstimate:b,corners:0}}}var Nh=.12,ob=8200,ab=(i,e,t=1.08,n=1.45)=>{let s=(i>>16&255)/255,r=(i>>8&255)/255,o=(i&255)/255,a=.3*s+.59*r+.11*o,c=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=c,r*=c,o*=c,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*n)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*n)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*n)*t)),e[0]=s,e[1]=r,e[2]=o};function Uh(i,e,{seaCut:t=.25,yOffset:n=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:c,c:l}=i,u=o.length,h=(g,T)=>(g+4e4)*1e5+(T+4e4),f=new Map,p=new Float32Array(u);for(let g=0;g<u;g++)p[g]=Math.floor(c[g]/10/e)*e,f.set(h(o[g],a[g]),p[g]);let x=[],_=[],m=[],d=[0,0,0],v=(g,T,b,M,A,E,S,I,V,z,P,H,G,ee,k,X,ue,pe)=>{x.push(g,T,b,M,A,E,S,I,V,g,T,b,S,I,V,z,P,H);for(let Me=0;Me<6;Me++)m.push(G,ee,k),_.push(X,ue,pe)};for(let g=0;g<u;g++){let T=p[g];if(c[g]/10<=t)continue;ab(l[g],d),s&&s(d,(o[g]+.5)*r,(a[g]+.5)*r,T);let b=.92+.16*((o[g]*73856093^a[g]*19349663)>>>0)/4294967295,M=d[0]*b,A=d[1]*b,E=d[2]*b,S=o[g]*r,I=a[g]*r,V=S+r,z=I+r,P=T+n;v(S,P,I,S,P,z,V,P,z,V,P,I,0,1,0,M,A,E);let H=.2+.45*M,G=.19+.42*A,ee=.17+.38*E,k=(X,ue,pe,Me,fe,ie)=>{let $=f.get(h(o[g]+X,a[g]+ue));if($===void 0||$>=T)return;let j=$+n;v(pe,j,Me,pe,P,Me,fe,P,ie,fe,j,ie,X,0,ue,H,G,ee)};k(1,0,V,z,V,I),k(-1,0,S,I,S,z),k(0,1,S,z,V,z),k(0,-1,V,I,S,I)}let y=new pt;return y.setAttribute("position",new ot(x,3)),y.setAttribute("normal",new ot(m,3)),y.setAttribute("color",new ot(_,3)),y.computeBoundingSphere(),{geo:y,heights:f,key:h,q:p}}function js(i,e,t){let n=new mn(i,e,t.length),s=new Qe,r=new jt,o=new O,a=new O,c=new O(0,1,0);return t.forEach((l,u)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??1,l.sy??1,l.sz??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),n.setMatrixAt(u,s),l.color&&n.setColorAt(u,l.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.frustumCulled=!1,n}function cb(i){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(i[0],256,i[1]?70:96,470),i[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(i[1],256,136,470));let n=new ci(e);return n.colorSpace=Tt,n.anisotropy=8,n}function Em(i,e,t,n){let s=e.real,r=new dt;r.name="environment";let o=[],a=U=>(o.push(U),U),c=!!t.night,l=()=>jr(a(new it({vertexColors:!0,roughness:.95,metalness:0,side:wt})),1,1),u=Uh(s.near,1),h=new at(a(u.geo),l());h.receiveShadow=!0,h.name="real-terrain-near";let f=Uh(s.mid,4,{yOffset:-3}),p=new at(a(f.geo),jr(a(new it({vertexColors:!0,roughness:1,side:wt})),8,.7));p.name="real-terrain-mid";let x=new Ee(t.skyHorizon),_=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,d=Uh(s.far,60,{tint:(U,ne,re,te)=>{let xe=Math.hypot(ne-_,re-m),be=Math.min(.82,1-Math.exp(-xe/3e4)),Ie=te>2300?.5:0;U[0]=(U[0]+(1-U[0])*Ie)*(1-be)+x.r*be,U[1]=(U[1]+(1-U[1])*Ie)*(1-be)+x.g*be,U[2]=(U[2]+(1-U[2])*Ie)*(1-be)+x.b*be}}),v=new at(a(d.geo),a(new Gt({vertexColors:!0,fog:!1,side:wt})));v.name="real-terrain-far",v.scale.setScalar(Nh),v.frustumCulled=!1,v.renderOrder=-5,r.add(h,p,v);let y=(U,ne)=>{let re=s.near.cell,te=u.heights.get(u.key(Math.floor(U/re),Math.floor(ne/re)));if(te!==void 0)return te;let xe=s.mid.cell,be=f.heights.get(f.key(Math.floor(U/xe),Math.floor(ne/xe)));return be!==void 0?be-3:-5},g=new at(a(new An(6e4,6e4)),a(new it({color:t.seaColor,roughness:.25,metalness:.2})));g.rotation.x=-Math.PI/2,g.position.y=.05,g.name="real-sea",r.add(g);let T=new O(...t.sunDir).normalize(),b=a(new St({side:Kt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Ee(t.skyTop)},uHor:{value:new Ee(t.skyHorizon)},uSun:{value:new Ee(t.sunColor)},uSunDir:{value:T}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),M=new at(a(new fs(ob,32,16)),b);M.renderOrder=-10,M.frustumCulled=!1,r.add(M);let A=i.fog,E=i.background;i.fog=new Vr(t.fogColor,(t.fogDensity||5e-4)*.3),i.background=new Ee(t.skyHorizon);let S=new qr(t.hemiSky,t.hemiGround,t.hemiIntensity),I=new _i(t.sunColor,t.sunIntensity);I.castShadow=!0,I.shadow.mapSize.set(2048,2048);let V=I.shadow.camera;V.left=-90,V.right=90,V.top=90,V.bottom=-90,V.near=1,V.far=500,I.shadow.bias=-5e-4,r.add(S,I,I.target);let z=s.buildings,P=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],H=[11884346,11030070,14275268,13222064,9390646],G=[],ee=[];for(let U=0;U<z.x.length;U++){let re=(z.l[U]>0?Math.min(z.l[U],9):1+Math.floor(n.next()*3)+(z.w[U]*z.d[U]>300?1:0))*3.1,te=Math.max(y(z.x[U],z.z[U]),.3);G.push({x:z.x[U],y:te+re/2-.5,z:z.z[U],sx:z.w[U],sy:re+1,sz:z.d[U],color:new Ee(n.pick(P))}),ee.push({x:z.x[U],y:te+re+.35,z:z.z[U],sx:z.w[U]+.6,sy:.7,sz:z.d[U]+.6,color:new Ee(n.pick(H))})}let k=a(new rn(1,1,1));if(G.length){let U=jr(a(new it({roughness:.9})),1.5,.8),ne=a(new it({roughness:.85})),re=js(k,U,G),te=js(k,ne,ee);re.name="real-buildings",re.castShadow=!0,r.add(re,te)}let X={x:0,y:0,z:0,heading:0},ue=s.width/2,pe=new Ee(12170925),Me=new Ee(10131343),fe=[],ie=[];for(let U of e.bridges){for(let ne=U.s0+6;ne<U.s1-2;ne+=34){Ft(e,ne,0,X);let re=y(X.x,X.z),te=X.y-1.6-re;te<3||(fe.push({x:X.x,y:re+te/2,z:X.z,ry:X.heading,sx:ue*1.5,sy:te,sz:2.4,color:Me}),fe.push({x:X.x,y:X.y-1.2,z:X.z,ry:X.heading,sx:ue*2+5,sy:1.2,sz:3.6,color:pe}))}for(let ne=U.s0;ne<U.s1;ne+=8){for(let re of[-1,1])Ft(e,ne+4,re*(ue+6+.4),X),ie.push({x:X.x,y:X.y-.9,z:X.z,ry:X.heading,sx:.9,sy:1.8,sz:8.3,color:pe});Ft(e,ne+4,0,X),ie.push({x:X.x,y:X.y-1.25,z:X.z,ry:X.heading,sx:ue*2+12,sy:.9,sz:8.3,color:Me})}}let $=jr(a(new it({roughness:.9})),.8,.6);if(fe.length){let U=js(k,$,fe);U.castShadow=!0,U.name="real-piers",r.add(U)}ie.length&&r.add(js(k,$,ie));let j=e.length,D=U=>!!_s(e,Math.max(0,Math.min(j-1,U)),"tunnel"),Y=[],Z=[],se=new Ee(12764876),_e=new Ee(8225160),Se={x:0,y:0,z:0,heading:0};for(let U=0;U<j-4;U+=4)if(!D(U))for(let ne of[-1,1]){let re=ne*(ue+6-.7);Ft(e,U,re,X),Ft(e,U+4,re,Se),Y.push({x:X.x,y:X.y+.4,z:X.z,ry:X.heading,sx:.12,sy:.8,sz:.12,color:_e});let te=Math.hypot(Se.x-X.x,Se.z-X.z)+.05,xe=Math.atan2(Se.x-X.x,Se.z-X.z);for(let be of[.42,.72])Z.push({x:(X.x+Se.x)/2,y:(X.y+Se.y)/2+be,z:(X.z+Se.z)/2,ry:xe,sx:.07,sy:.2,sz:te,color:se})}let Ae=a(new it({roughness:.35,metalness:.85}));Y.length&&r.add(js(k,Ae,Y),js(k,Ae,Z));let W=[];for(let U of s.places){if(U.kind!=="place")continue;let ne=1/0,re=0;for(let xe=0;xe<e.count;xe+=10){let be=e.pts[xe],Ie=(be.x-U.x)**2+(be.z-U.z)**2;Ie<ne&&(ne=Ie,re=xe)}let te=Math.sqrt(ne);te<2600&&W.push({name:U.name,s:re*e.step,dist:te})}W.sort((U,ne)=>U.s-ne.s);let We=a(new An(1,1)),ze=[];for(let U of W){if(ze.some(be=>Math.abs(be.s-U.s)<500)||U.s<120||U.s>j-150||D(U.s)||D(U.s-60))continue;ze.push(U);let ne=cb([U.name,U.dist>600?`${(U.dist/1e3).toFixed(1).replace(".",",")} km`:""]),re=a(new Gt({map:ne,color:ne?16777215:817731,side:wt}));ne&&a(ne),Ft(e,U.s,ue+6+2.2,X);let te=new at(We,re);te.scale.set(7.5,2.8,1),te.position.set(X.x,X.y+5.2,X.z),te.rotation.y=X.heading+Math.PI,r.add(te);let xe=new at(k,Ae);xe.scale.set(.3,5.2,.3),xe.position.set(X.x,X.y+2.2,X.z),r.add(xe)}let Fe=(U,ne,re)=>{let te=Math.sin(U*127.1+ne*311.7+re*74.7)*43758.5453;return te-Math.floor(te)},Re=Kn(5,5,5,.5,(U,ne,re)=>{let te=U-2,xe=re-2,be=(ne-1.6)*1.2;if(te*te+be*be+xe*xe>5.4+Fe(U,ne,re))return null;let Ie=Fe(U+3,ne,re+7);return Ie>.72?[.92,.42,.6]:Ie>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Re);let Ge=[];for(let U=60;U<j-20;U+=n.range(5,11)){if(D(U)||e.bridges.some(re=>U>re.s0-4&&U<re.s1+4))continue;if(n.next()<.25){U+=n.range(15,50);continue}let ne=n.next()<.5?-1:1;Ft(e,U,ne*(ue+6+n.range(1.2,2.4)),X),Ge.push({x:X.x,y:X.y-.5,z:X.z,ry:n.range(0,6.28),sx:n.range(.8,1.3),sy:n.range(.8,1.3),sz:n.range(.8,1.3)})}if(Ge.length){let U=js(Re,a(new it({vertexColors:!0,roughness:.9})),Ge);U.castShadow=!0,U.name="real-oleanders",r.add(U)}i.add(r);let De=new O;function L(U,ne,re){M.position.set(re.x,0,re.z),g.position.x=re.x,g.position.z=re.z,I.position.copy(re).addScaledVector(T,200),I.target.position.copy(re),De.copy(re),v.position.set(De.x*(1-Nh),-2,De.z*(1-Nh))}function w(){i.remove(r),i.fog&&i.fog!==A&&(i.fog=A||null),i.background=E||null;for(let U of o)U.dispose?.()}return{group:r,sun:I,update:L,dispose:w,heightAt:y,places:ze,allPlaces:W}}var Uc=class extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=gs.extractUrlBase(e);o=gs.resolveURL(l,this.path)}else o=gs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Oo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cm){try{o[ft.KHR_BINARY_GLTF]=new sf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new kh;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new rf(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new of;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new af;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function lb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zh=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ee(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],gn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _i(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new cc(u),l.distance=h;break;case"spot":l=new Yr(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,qi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},kh=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(a,a)}return Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],gn),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Qh=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ef=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tf=class{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},nf=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(let x of h){let _=new Qe,m=new O,d=new jt,v=new O(1,1,1),y=new mn(x.geometry,x.material,f);for(let g=0;g<f;g++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,g),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,g),c.SCALE&&v.fromBufferAttribute(c.SCALE,g),y.setMatrixAt(g,_.compose(m,d,v));for(let g in c)if(g==="_COLOR_0"){let T=c[g];y.instanceColor=new Vs(T.array,T.itemSize,T.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&x.geometry.setAttribute(g,c[g]);Lt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Cm="glTF",$o=12,Tm={JSON:1313821514,BIN:5130562},sf=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,$o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-$o,r=new DataView(e,$o),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Tm.JSON){let l=new Uint8Array(e,$o+o,a);this.content=n.decode(l)}else if(c===Tm.BIN){let l=$o+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=lf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=lf[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=no[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let x in p.attributes){let _=p.attributes[x],m=c[x];m!==void 0&&(_.normalized=m)}h(p)},a,l,gn,f)})})}},of=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},af=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},Fc=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,x=e*l,_=x-l,m=-2*p+3*f,d=p-f,v=1-m,y=d-f+h;for(let g=0;g!==a;g++){let T=o[_+g+a],b=o[_+g+c]*u,M=o[x+g+a],A=o[x+g]*u;r[g]=v*T+y*b+m*M+d*A}return r}},ub=new jt,cf=class extends Fc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ub.fromArray(r).normalize().toArray(r),r}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wm={9728:nn,9729:wn,9984:$u,9985:To,9986:Er,9987:Gn},Am={33071:Ni,33648:Io,10497:Oi},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hb={CUBICSPLINE:void 0,LINEAR:Or,STEP:Fr},Oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),i.DefaultMaterial}function Qs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function db(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function pb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mb(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bh(t.attributes):e=i.indices+":"+Bh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bh(i.targets[n]);return e}function Bh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xb=new Qe,hf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ac(this.options.manager):this.textureLoader=new lc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Qs(r,a,s),qi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(gs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Fh[s.type],a=no[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new xt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Fh[s.type],l=no[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,_,m;if(p&&p!==h){let d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,y=t.cache.get(v);y||(_=new l(a,d*p,s.count*p/u),y=new Gr(_,p/u),t.cache.add(v,y)),m=new Hs(y,c,f%p/u,x)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new xt(_,c,x);if(s.sparse!==void 0){let d=Fh.SCALAR,v=no[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,g=s.sparse.values.byteOffset||0,T=new v(o[1],y,s.sparse.count*d),b=new l(o[2],g,s.sparse.count*c);a!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,A=T.length;M<A;M++){let E=T[M];if(m.setX(E,b[M*c]),c>=2&&m.setY(E,b[M*c+1]),c>=3&&m.setZ(E,b[M*c+2]),c>=4&&m.setW(E,b[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=wm[f.magFilter]||wn,u.minFilter=wm[f.minFilter]||Gn,u.wrapS=Am[f.wrapS]||Oi,u.wrapT=Am[f.wrapT]||Oi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==wn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){let m=new sn(_);m.needsUpdate=!0,f(m)}),t.load(gs.resolveURL(h,r.path),x,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),qi(h,o),h.userData.mimeType=o.mimeType||gb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ws,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new us,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return it}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let h=s[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],gn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wt);let u=r.alphaMode||Oh.OPAQUE;if(u===Oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Oh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Gt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gt){let h=r.emissiveFactor;a.emissive=new Ee().setRGB(h[0],h[1],h[2],gn)}return r.emissiveTexture!==void 0&&o!==Gt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),qi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Qs(s,h,r),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=mb(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Rm(new pt,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?fb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,x=u.length;p<x;p++){let _=u[p],m=o[p],d,v=l[p];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Ja(_,v):new at(_,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?d.geometry=Ch(d.geometry,dc):m.mode===Jn.TRIANGLE_FAN&&(d.geometry=Ch(d.geometry,ko));else if(m.mode===Jn.LINES)d=new Gs(_,v);else if(m.mode===Jn.LINE_STRIP)d=new Wr(_,v);else if(m.mode===Jn.LINE_LOOP)d=new nc(_,v);else if(m.mode===Jn.POINTS)d=new hs(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&pb(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),qi(d,r),m.extensions&&Qs(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,x=h.length;p<x;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Qs(s,h[0],r),h[0];let f=new dt;r.extensions&&Qs(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,x=h.length;p<x;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(up.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ls(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new Qe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qa(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],x=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[x.input]:x.input,v=s.parameters!==void 0?s.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),l.push(x),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],x=h[2],_=h[3],m=h[4],d=[];for(let v=0,y=f.length;v<y;v++){let g=f[v],T=p[v],b=x[v],M=_[v],A=m[v];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();let E=n._createAnimationTracks(g,T,b,M,A);if(E)for(let S=0;S<E.length;S++)d.push(E[S])}return new oc(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,xb)});for(let p=0,x=h.length;p<x;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Fo:l.length>1?u=new dt:l.length===1?u=l[0]:u=new Lt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),qi(u,r),r.extensions&&Qs(n,u,r),r.matrix!==void 0){let h=new Qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new dt;n.name&&(r.name=s.createUniqueName(n.name)),qi(r,n),n.extensions&&Qs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof Mn||f instanceof sn)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];bs[r.path]===bs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(bs[r.path]){case bs.weights:l=zi;break;case bs.rotation:l=ki;break;case bs.position:case bs.scale:l=Hi;break;default:n.itemSize===1?l=zi:l=Hi;break}let u=s.interpolation!==void 0?hb[s.interpolation]:Or,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new l(c[f]+"."+bs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=uf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ki?cf:Fc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _b(i,e,t){let n=e.attributes,s=new Xn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){let u=uf(no[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,c=new O;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,x=f.max;if(p!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),f.normalized){let _=uf(no[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Rm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=lf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),qi(i,e),_b(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?db(i,e.targets,t):i})}var Es={hi:null,lo:null},vb=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function ff(i,e){let t=await i.loadAsync(e),n={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),n[a.name]=a,a.traverse(c=>{c.isMesh&&c.material?.name&&(s[c.material.name]=c.material)});let r=vb.filter(a=>!n[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return n.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:n,mats:s,armLength:o>.1?o/1.01:1}}async function Im(i="assets/"){if(Es.lo)return Es;let e=new Uc;return Es.lo=await ff(e,i+"bike_voxel.glb").catch(()=>ff(e,i+"bike.glb")),Es.hi=await ff(e,i+"bike_voxel_hi.glb").catch(()=>Es.lo),Es}function Pm(i="lo"){return Es[i]||Es.lo}var qt=0,cn=1,Zi=2,zc=.32,Bc=-.7,Bm=.7,Yi=[0,-zc,-Bc],zm=[0,-zc,-Bm],Lm=.62,yb=.35,Ts=Math.PI*2,zn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,n,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],c=e[2]+r[2],l=t[0]+r[0],u=t[1]+r[1],h=t[2]+r[2],f=n[0]+r[0],p=n[1]+r[1],x=n[2]+r[2],_=l-o,m=u-a,d=h-c,v=f-o,y=p-a,g=x-c,T=m*g-d*y,b=d*v-_*g,M=_*y-m*v,A=(o+l+f)/3-(s[0]+r[0]),E=(a+u+p)/3-(s[1]+r[1]),S=(c+h+x)/3-(s[2]+r[2]),I=this.pos;T*A+b*E+M*S>=0?I.push(o,a,c,l,u,h,f,p,x):I.push(o,a,c,f,p,x,l,u,h)}quad(e,t,n,s,r){this.tri(e,t,n,r),this.tri(e,n,s,r)}build(){this.closeGroup();let e=new pt;e.setAttribute("position",new ot(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function Mb(i){let e=0,t=0,n=0;for(let r of i)e+=r[0],t+=r[1],n+=r[2];let s=i.length;return[e/s,t/s,n/s]}function Sb(i,e){return[(i[0]+e[0])/2,(i[1]+e[1])/2,(i[2]+e[2])/2]}function Dm(i,e,t,n){let s=e.length;for(let r=0;r<s;r++)i.tri(t,e[r],e[(r+1)%s],n)}function ws(i,e,t,n,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,c=e.map(Mb);for(let l=0;l<o-1;l++){let u=e[l],h=e[l+1],f=Sb(c[l],c[l+1]);for(let p=0;p<a;p++){let x=(p+1)%a;i.setSlot(r(l,p)),i.quad(u[p],u[x],h[x],h[p],f)}}i.setSlot(n),Dm(i,e[0],c[0],c[1]),i.setSlot(s),Dm(i,e[o-1],c[o-1],c[o-2])}function Bn(i,e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],u=Math.hypot(a,c,l)||1,h=[a/u,c/u,l/u],f=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],p=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],x=Math.hypot(p[0],p[1],p[2]);p=[p[0]/x,p[1]/x,p[2]/x];let _=[p[1]*h[2]-p[2]*h[1],p[2]*h[0]-p[0]*h[2],p[0]*h[1]-p[1]*h[0]],m=(d,v)=>{let y=[];for(let g=0;g<r;g++){let T=Ts*g/r,b=Math.cos(T)*v,M=Math.sin(T)*v;y.push([d[0]+b*p[0]+M*_[0],d[1]+b*p[1]+M*_[1],d[2]+b*p[2]+M*_[2]])}return y};ws(i,[m(e,n),m(t,s)],o,o,o)}function tr(i,e,t,n){i.setSlot(n);let s=(a,c,l)=>[e[0]+a*t[0],e[1]+c*t[1],e[2]+l*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)i.tri(r[a[0]],r[a[1]],r[a[2]],e),i.tri(r[a[0]],r[a[2]],r[a[3]],e)}var kc=3,jo=4;function bb(i,e,t,n,s,r,o,a,c){return[[0,e,i],[o,t,i],[a,n,i],[c,s,i],[0,r,i],[-c,s,i],[-a,n,i],[-o,t,i]]}function Eb(){let i=new zn(Yi),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(n=>bb(...n));ws(i,t,(n,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?n===7||n===8?cn:qt:o?n>=9?kc:qt:a?n>=2&&n<=5?kc:n>=7&&n<=8?cn:qt:n>=3&&n<=6?Zi:cn},qt,qt);for(let n of[-1,1])Bn(i,[.11*n,.46,-.26],[.1*n,.32,-.7],.04,.03,5,jo),Bn(i,[.14*n,.44,-.3],[.22*n,.42,-.32],.018,.018,4,cn),Bn(i,[.1*n,.95,.42],[.27*n,.93,.35],.02,.02,4,cn);return Bn(i,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,jo),Bn(i,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,jo),Bn(i,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,cn),tr(i,[0,.685,-.74],[.06,.012,.16],cn),i.build()}function Tb(){let i=new zn(Yi),e=(t,n,s,r)=>[[0,n,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return ws(i,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],qt,qt,qt),i.build()}function wb(){let i=new zn(Yi);return tr(i,[0,.985,-1.085],[.04,.02,.014],qt),i.build()}function Ab(){let i=new zn;return Bn(i,[0,0,0],[0,0,-.45],.05,.004,6,qt),i.build()}function Rb(){let i=new zn(Yi);for(let e of[-1,1]){let t=[.062*e,.795,.905];i.setSlot(qt);let n=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];i.quad(n[0],n[1],n[2],n[3],[t[0],t[1],t[2]-.2])}return i.build()}function Cb(){let i=new zn(zm);for(let n of[-1,1])Bn(i,[.085*n,.32,.7],[.085*n,.56,.615],.032,.032,5,cn),Bn(i,[.085*n,.56,.615],[.085*n,.88,.5],.024,.024,5,Zi),tr(i,[.1*n,.33,.74],[.012,.05,.035],jo);let e=.34,t=[];for(let n of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(n),r=.7+Math.sin(n),o=(a,c)=>[a,.32+c*Math.cos(n),.7+c*Math.sin(n)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return ws(i,t,qt,qt,qt),i.build()}function Nm(i,e){let t=new zn,n=14,s=(o,a)=>{let c=[];for(let l=0;l<n;l++){let u=Ts*l/n;c.push([o,a*Math.cos(u),a*Math.sin(u)])}return c};ws(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*i,a)),cn,cn,cn);for(let o of[-1,1]){let a=o*(.62*i+.004),c=[a,0,0],l=[0,0,0],u=10;for(let h=0;h<u;h++){let f=Ts*h/u,p=Ts*(h+1)/u;t.setSlot(h%2?cn:Zi),t.tri(c,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],l)}if(e){let h=o*(.62*i+.012);t.setSlot(jo);for(let f=0;f<u;f++){let p=Ts*f/u,x=Ts*(f+1)/u;t.quad([h,.09*Math.cos(p),.09*Math.sin(p)],[h,.16*Math.cos(p),.16*Math.sin(p)],[h,.16*Math.cos(x),.16*Math.sin(x)],[h,.09*Math.cos(x),.09*Math.sin(x)],l)}}}return t.build()}function Ib(){let i=new zn,e=[0,.11,.015],t=[.125,.135,.155],n=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,c=Math.cos(a),l=[];for(let u=0;u<n;u++){let h=Ts*(u+.5)/n;l.push([e[0]+t[0]*c*Math.cos(h),e[1]+t[1]*Math.sin(a),e[2]+t[2]*c*Math.sin(h)])}r.push(l)}return ws(i,r,(o,a)=>{let c=Ts*(a+1)/n;return Math.sin(c)>.45&&(o===1||o===2)?cn:Math.abs(Math.cos(c))<.35?Zi:qt},cn,qt),i.build()}function Jo(i,e,t,n){return[[e,i,0],[e*.55,i,t],[-e*.55,i,t],[-e,i,0],[-e*.55,i,-n],[e*.55,i,-n]]}function Pb(){let i=new zn,e=[Jo(-.08,.13,.09,.1),Jo(.04,.145,.1,.1),Jo(.22,.185,.11,.11),Jo(.38,.205,.1,.1),Jo(.45,.09,.06,.07)];return ws(i,e,(t,n)=>t===0?Zi:t===2&&(n===0||n===2||n===3||n===5)?kc:qt,cn,cn),ws(i,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],Zi,Zi,Zi),i.build()}function Um(i){let e=new zn,t=[.09*i,-.09,.5];return Bn(e,[0,0,0],t,.058,.048,5,qt),Bn(e,t,[0,0,.93],.046,.038,5,qt),tr(e,[0,0,.97],[.042,.04,.05],cn),tr(e,[0,.015,.02],[.052,.04,.05],kc),e.build()}function Fm(i){let e=new zn,t=[.11*i,-.19,.42],n=[.085*i,-.47,.05];return Bn(e,[0,0,0],t,.082,.066,6,qt),Bn(e,t,n,.062,.05,5,qt),tr(e,[t[0]+.035*i,t[1]-.02,t[2]+.02],[.025,.05,.045],Zi),tr(e,[n[0],n[1]-.04,n[2]+.04],[.045,.05,.115],cn),e.build()}var df=null;function Lb(){return df||(df={body:Eb(),bubble:Tb(),tail:wb(),flame:Ab(),fork:Cb(),headlight:Rb(),wheelRear:Nm(.1,!1),wheelFront:Nm(.068,!0),helmet:Ib(),torso:Pb(),armR:Um(-1),armL:Um(1),legR:Fm(-1),legL:Fm(1)}),df}var ui=(i,e,t)=>i<e?e:i>t?t:i,km=i=>ui(i,0,1),er=i=>Number.isFinite(i)?i:0,Oc=i=>typeof i=="boolean"?i?1:0:km(er(i));function jn(i,e){return i.name=e,i}function Om(i,e,t,n){let s=new at(i,e);return s.name=t,s.castShadow=n,s.receiveShadow=!1,s}function Hm({color:i=14034984,accent:e=16761395,isPlayer:t=!1,detail:n="lo"}={}){let s=Lb(),r=Ae=>new it({flatShading:!0,side:wt,...Ae}),o=r({color:new Ee(i),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),c=r({color:new Ee(e),metalness:.45,roughness:.35}),l=r({color:15856108,metalness:.15,roughness:.45}),u=r({color:11120312,metalness:.9,roughness:.32}),h=[o,a,c,l,u],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),x=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),_=Pm(n),m=null;if(_){let Ae=(W,We)=>{let ze=_.mats[W].clone();return ze.color.set(We),ze};m={Paint:Ae("Paint",i),Suit:Ae("Suit",i),Accent:Ae("Accent",e),Tail:_.mats.Tail.clone()}}function d(Ae,W,We,ze,Fe){if(!_)return Om(W,We,Ae,ze);let Re=_.parts[Ae].clone(!0);return Re.name=Ae,Fe&&Re.position.set(Fe[0],Fe[1],Fe[2]),Re.traverse(Ge=>{Ge.isMesh&&(Ge.material=m[Ge.material.name]||Ge.material,Ge.castShadow=ze)}),Re}let v=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),y=jn(new dt,"bike"),g=jn(new dt,"leanPivot"),T=jn(new dt,"pitchPivot");T.position.set(0,zc,Bc);let b=jn(new dt,"rearWheel");b.add(d("wheelRear",s.wheelRear,h,!0));let M=jn(new dt,"chassis"),A=d("body",s.body,h,!0,Yi),E=d("bubble",s.bubble,f,!1,Yi),S=d("tail",s.tail,x,!1,Yi),I=d("headlight",s.headlight,p,!1,Yi),V=Om(s.flame,v,"flame",!1);V.position.set(.205,.215,-.26),V.rotation.x=-.42,V.scale.z=.02,V.visible=!1;let z=jn(new dt,"hips");z.position.set(0,Lm,yb);let P=jn(new dt,"torso"),H=jn(new dt,"head");H.position.set(0,.45,.01),H.add(d("helmet",s.helmet,h,!0)),P.add(d("torso",s.torso,h,!0),H);let G=d("armR",s.armR,h,!0),ee=d("armL",s.armL,h,!0),k=jn(new dt,"legR");k.position.set(-.12,-.02,0),k.add(d("legR",s.legR,h,!0));let X=jn(new dt,"legL");X.position.set(.12,-.02,0),X.add(d("legL",s.legL,h,!0)),z.add(P,G,ee,k,X),M.add(A,E,S,I,V,z),_&&M.add(d("frame",null,null,!0,Yi));let ue=jn(new dt,"steerPivot");ue.position.set(0,0,Bm-Bc);let pe=d("fork",s.fork,h,!0,zm),Me=jn(new dt,"frontWheel");if(Me.add(d("wheelFront",s.wheelFront,h,!0)),ue.add(pe,Me),T.add(b,M,ue),g.add(T),y.add(g),t){let Ae=new Yr(16773590,60,60,.5,.6,2);Ae.name="headSpot",Ae.castShadow=!1,Ae.position.set(0,1,.9),Ae.target.position.set(0,.2,30),Ae.target.name="headSpotTarget",y.add(Ae,Ae.target)}let fe={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ie=.2,$=.37,j=.02,D=[.25,.93-zc,.36-Bc],Y=new O,Z=new O,se=new O(0,0,1);function _e(Ae,W){Y.set(ie*W,$,j).applyEuler(P.rotation),Z.set(D[0]*W-z.position.x,D[1]-z.position.y,D[2]-z.position.z);let We=Math.cos(-z.rotation.z),ze=Math.sin(-z.rotation.z),Fe=Z.x*We-Z.y*ze,Re=Z.x*ze+Z.y*We;Z.x=Fe,Z.y=Re,Ae.position.copy(Y),Z.sub(Y);let Ge=Z.length()||1;Ae.scale.z=Ge/(_?_.armLength:1),Ae.quaternion.setFromUnitVectors(se,Z.multiplyScalar(1/Ge))}function Se(Ae,W){let We=Ae||{},ze=Number.isFinite(W)?ui(W,0,.1):1/60,Fe=1-Math.exp(-ze*14),Re=1-Math.exp(-ze*5);fe.lean+=(ui(er(We.lean),-1.5,1.5)-fe.lean)*Fe,fe.steer+=(ui(er(We.steer),-1,1)-fe.steer)*Fe,fe.pitch+=(ui(er(We.pitch),-.9,.9)-fe.pitch)*Fe,fe.compress+=(ui(er(We.compress),-1,1)-fe.compress)*Fe,fe.sr+=(km(er(We.speedRatio))-fe.sr)*Re,fe.brake+=(Oc(We.braking)-fe.brake)*Re,fe.air+=(Oc(We.airborne)-fe.air)*Re,fe.drift+=(Oc(We.drift)-fe.drift)*Re,fe.boost+=(Oc(We.boost)-fe.boost)*Re;let Ge=fe.lean,De=(Number.isFinite(We.speed)?We.speed:fe.sr*80)*3.6;g.rotation.z=Ge,T.rotation.x=-fe.pitch,ue.rotation.y=-.45*fe.steer*ui(1-2*fe.sr,0,1),M.position.y=-.07*fe.compress;let L=ui((De-20)/100,0,1),w=ui(Math.abs(Ge)*2.27,0,1),U=Ge>=0?1:-1,ne=w*(1-ui((De-30)/30,0,1));z.position.x=-.17*w*U,z.position.y=Lm+.1*fe.air,z.rotation.z=-.2*w*U,P.rotation.x=ui(.45+.55*L-.2*fe.brake-.25*fe.air+.1*fe.boost,.2,1.05),P.rotation.z=-.1*w*U,H.rotation.x=-.35*L+.1*fe.air,H.rotation.y=-.35*w*U,H.rotation.z=-.4*Ge;let re=.55*w+.3*ne;k.rotation.y=U>0?-re:0,X.rotation.y=U<0?re:0,_e(G,-1),_e(ee,1),(m?m.Tail:x).emissiveIntensity=(m?2:.8)+(m?6:2.2)*fe.brake,V.visible=fe.boost>.03,V.scale.z=.02+1.3*fe.boost,v.emissiveIntensity=1.5+2*fe.boost;let te=er(We.wheelSpin);b.rotation.x=te,Me.rotation.x=te}return Se({},0),{group:y,update:Se}}var Vm=Math.PI*2,$t=6e3,io=2200,Gm=60,Wm=30,Xm=60,Db=3,Qo=2e3,nr=170,gf=1.5,Nb=13,qm=Nb-gf,pf=120,Ub={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},Fb=new Ee(16777215),Ob=new Ee(8386303);function Cn(i,e){return i+(e-i)*Math.random()}function ea(i,e,t){return i<e?e:i>t?t:i}function As(i,e=0){return Number.isFinite(i)?i:e}function Bb(i){return Number.isFinite(i)?ea(i,0,.1):0}function mf(i,e){return i-e*Math.floor(i/e+.5)}function zb(){let i=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return i*e}var kb=`
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
}`,Hb=`
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
}`,Vb=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Gb=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function Ym(i,e){let t=e||{},n=As(t.rain,0),s=As(t.wind,0),r=new Float32Array($t*3),o=new Float32Array($t*3),a=new Float32Array($t*3),c=new Float32Array($t*3),l=new Float32Array($t*3),u=new Float32Array($t),h=new Float32Array($t),f=new Float32Array($t),p=new Float32Array($t),x=new Float32Array($t),_=new Float32Array($t),m=new Float32Array($t),d=new Float32Array($t),v=new Float32Array($t),y=new Float32Array($t),g=new Float32Array($t),T=new Uint8Array($t),b=0,M=!1,A=new pt,E=new xt(r,3).setUsage(vi),S=new xt(l,3).setUsage(vi),I=new xt(u,1).setUsage(vi),V=new xt(h,1).setUsage(vi),z=new xt(f,1).setUsage(vi);A.setAttribute("position",E),A.setAttribute("aColor",S),A.setAttribute("aSize",I),A.setAttribute("aAlpha",V),A.setAttribute("aMode",z);let P=new St({uniforms:{uScale:{value:700}},vertexShader:kb,fragmentShader:Hb,transparent:!0,depthWrite:!1,blending:Vu,blendSrc:Gu,blendDst:Co,blendEquation:Di}),H=new hs(A,P);H.frustumCulled=!1,i.add(H);function G(me,Be,ve,Le,q,Te,R,N=1){let F=Ub[me];if(!F||!Number.isFinite(Be)||!Number.isFinite(ve)||!Number.isFinite(Le))return;let J=As(q),le=As(Te),we=As(R),Ue=Math.min($t,Math.max(0,Math.floor(As(N,1))));for(let Oe=0;Oe<Ue;Oe++){let B=b;b=(b+1)%$t;let oe,he,de;if(F.ring){let Ce=(Ue>1?Oe/Ue:Math.random())*Vm+Math.random()*.2,Xe=Cn(3.5,5.5);oe=Math.cos(Ce)*Xe+J*.3,de=Math.sin(Ce)*Xe+we*.3,he=Cn(F.lift[0],F.lift[1])+le*.3}else oe=J+Cn(-F.spread,F.spread),de=we+Cn(-F.spread,F.spread),he=le+Cn(F.lift[0],F.lift[1]);let ge=B*3;r[ge]=Be+Cn(-.1,.1),r[ge+1]=ve,r[ge+2]=Le+Cn(-.1,.1),o[ge]=oe,o[ge+1]=he,o[ge+2]=de,p[B]=0,x[B]=F.life*Cn(.85,1.15),_[B]=F.drag,m[B]=F.grav,d[B]=F.s0*Cn(.85,1.2),v[B]=F.s1*Cn(.85,1.2),y[B]=F.a0,g[B]=ve,T[B]=F.bounce?1:0,f[B]=F.add?1:0,a[ge]=F.c0[0],a[ge+1]=F.c0[1],a[ge+2]=F.c0[2],c[ge]=F.c1[0],c[ge+1]=F.c1[1],c[ge+2]=F.c1[2]}Ue>0&&(M=!0)}function ee(me){let Be=!1;for(let ve=0;ve<$t;ve++){if(x[ve]<=0)continue;if(Be=!0,p[ve]+=me,p[ve]>=x[ve]){x[ve]=0,h[ve]=0,u[ve]=0;continue}let Le=ve*3,q=Math.max(0,1-_[ve]*me),Te=o[Le]*q,R=o[Le+1]*q-m[ve]*me,N=o[Le+2]*q,F=r[Le]+Te*me,J=r[Le+1]+R*me,le=r[Le+2]+N*me;T[ve]&&J<g[ve]&&R<0&&(J=g[ve],R=-R*.35,Te*=.6,N*=.6,T[ve]=0),o[Le]=Te,o[Le+1]=R,o[Le+2]=N,r[Le]=F,r[Le+1]=J,r[Le+2]=le;let we=p[ve]/x[ve];u[ve]=d[ve]+(v[ve]-d[ve])*we,h[ve]=y[ve]*(1-we*we),l[Le]=a[Le]+(c[Le]-a[Le])*we,l[Le+1]=a[Le+1]+(c[Le+1]-a[Le+1])*we,l[Le+2]=a[Le+2]+(c[Le+2]-a[Le+2])*we}return Be}let k=null;if(n>0){let me=new pt,Be=new Float32Array(io*6),ve=new xt(Be,3).setUsage(vi);me.setAttribute("position",ve);let Le=new Float32Array(io*3),q=new Float32Array(io),Te=new Float32Array(io);for(let F=0;F<io;F++)Le[F*3]=(Math.random()-.5)*Gm,Le[F*3+1]=-12+Math.random()*Wm,Le[F*3+2]=(Math.random()-.5)*Xm,q[F]=Cn(22,30),Te[F]=Cn(.8,1.2);let R=new us({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),N=new Gs(me,R);N.frustumCulled=!1,i.add(N),k={geo:me,mat:R,lines:N,attr:ve,pa:Be,head:Le,fall:q,len:Te,windX:5.5*s,windZ:2*s}}function X(me,Be,ve){let Le=k,q=Le.pa,Te=Le.head,R=Le.windX,N=Le.windZ,F=Be.x,J=Be.y+Db,le=Be.z;for(let we=0;we<io;we++){let Ue=we*3,Oe=F+mf(Te[Ue]-F,Gm),B=J+mf(Te[Ue+1]-J,Wm),oe=le+mf(Te[Ue+2]-le,Xm),he=Le.fall[we],de=R-ve.x,ge=-he-ve.y,Ce=N-ve.z,Xe=.05*Le.len[we],qe=we*6;q[qe]=Oe-de*Xe,q[qe+1]=B-ge*Xe,q[qe+2]=oe-Ce*Xe,q[qe+3]=Oe,q[qe+4]=B,q[qe+5]=oe,Te[Ue]=Oe+R*me,Te[Ue+1]=B-he*me,Te[Ue+2]=oe+N*me}Le.attr.needsUpdate=!0}let ue=new Float32Array(Qo*4*3),pe=new Float32Array(Qo*4),Me=new Uint16Array(Qo*6);for(let me=0;me<Qo;me++){let Be=me*4;Me.set([Be,Be+1,Be+2,Be,Be+2,Be+3],me*6)}let fe=new pt,ie=new xt(ue,3).setUsage(vi),$=new xt(pe,1).setUsage(vi);fe.setAttribute("position",ie),fe.setAttribute("aAlpha",$),fe.setIndex(new xt(Me,1));let j=new St({uniforms:{uColor:{value:new Ee(1315086)}},vertexShader:Vb,fragmentShader:Gb,transparent:!0,depthWrite:!1,side:wt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),D=new at(fe,j);D.frustumCulled=!1,i.add(D);let Y=0,Z=1/0,se=-1;function _e(me,Be,ve,Le,q,Te,R=.3,N=.5){if(![me,Be,ve,Le,q,Te,R,N].every(Number.isFinite))return;let F=Le-me,J=Te-ve,le=Math.hypot(F,J);if(le<1e-4)return;let we=R*.5,Ue=-J/le*we,Oe=F/le*we,B=ea(N,0,1),oe=Be+.03,he=q+.03,de=Y*4;Y=(Y+1)%Qo;let ge=ue,Ce=de*3;ge[Ce]=me+Ue,ge[Ce+1]=oe,ge[Ce+2]=ve+Oe,ge[Ce+3]=me-Ue,ge[Ce+4]=oe,ge[Ce+5]=ve-Oe,ge[Ce+6]=Le-Ue,ge[Ce+7]=he,ge[Ce+8]=Te-Oe,ge[Ce+9]=Le+Ue,ge[Ce+10]=he,ge[Ce+11]=Te+Oe,pe[de]=B,pe[de+1]=B,pe[de+2]=B,pe[de+3]=B,de<Z&&(Z=de),de+3>se&&(se=de+3)}function Se(){if(se<0)return;let me=Z,Be=se-Z+1;ie.clearUpdateRanges(),ie.addUpdateRange(me*3,Be*3),ie.needsUpdate=!0,$.clearUpdateRanges(),$.addUpdateRange(me,Be),$.needsUpdate=!0,Z=1/0,se=-1}let Ae=new dt;Ae.matrixAutoUpdate=!1,i.add(Ae);let W=new Float32Array(nr*6),We=new xt(W,3).setUsage(vi),ze=new pt;ze.setAttribute("position",We);let Fe=new Float32Array(nr),Re=new Float32Array(nr),Ge=new Float32Array(nr),De=new Float32Array(nr);for(let me=0;me<nr;me++){let Be=Math.random()*Vm,ve=Cn(.8,1.5);Fe[me]=Math.cos(Be)*ve,Re[me]=Math.sin(Be)*ve,Ge[me]=-gf-Math.random()*qm,De[me]=Cn(.5,1.2)}let L=new us({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),w=new Gs(ze,L);w.frustumCulled=!1,w.visible=!1,Ae.add(w);let U=0,ne=0,re=0,te=0;function xe(me,Be){re+=(U-re)*(1-Math.exp(-6*me)),te+=(ne-te)*(1-Math.exp(-8*me)),Be.updateMatrixWorld(),Ae.matrix.copy(Be.matrixWorld),Ae.matrixWorld.copy(Be.matrixWorld);let ve=ea((re-.55)/.45,0,1),Le=Math.min(1,.55*ve*ve*(3-2*ve)+.6*te),q=Math.floor(Le*nr);if(q<=0){w.visible=!1;return}w.visible=!0,ze.setDrawRange(0,q*2),L.color.copy(Fb).lerp(Ob,te),L.opacity=.05+.24*Le;let Te=(60+110*Le)*me,R=1.5+5*Le,N=W;for(let F=0;F<q;F++){let J=Ge[F]+Te;J>-gf&&(J-=qm),Ge[F]=J;let le=-J,we=Fe[F]*le*.9,Ue=Re[F]*le*.5,Oe=R*De[F],B=F*6;N[B]=we,N[B+1]=Ue,N[B+2]=J,N[B+3]=we,N[B+4]=Ue,N[B+5]=J-Oe}We.needsUpdate=!0}let be=new O,Ie=new O,He=!1,ye=!1;function Ne(me,Be){if(ye)return;me=Bb(me);let ve=Be.position;He?me>0&&(Ie.subVectors(ve,be).divideScalar(me),Ie.lengthSq()>pf*pf&&Ie.setLength(pf),be.copy(ve)):(be.copy(ve),Ie.set(0,0,0),He=!0);let Le=As(Be.fov,60);P.uniforms.uScale.value=zb()/(2*Math.tan(Le*Math.PI/360)),(ee(me)||M)&&(E.needsUpdate=!0,S.needsUpdate=!0,I.needsUpdate=!0,V.needsUpdate=!0,z.needsUpdate=!0,M=!1),k&&me>0&&X(me,ve,Ie),xe(me,Be),Se()}function Ke(me,Be){let ve=ea(As(me,0),0,1.5);U=ea((ve-.7)/.3,0,1),ne=Be?1:0}function Ye(){ye||(ye=!0,i.remove(H,D,Ae),k&&i.remove(k.lines),A.dispose(),P.dispose(),fe.dispose(),j.dispose(),ze.dispose(),L.dispose(),k&&(k.geo.dispose(),k.mat.dispose()))}return{emit:G,addSkid:_e,setSpeed:Ke,update:Ne,dispose:Ye}}var Hc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Wb=new ls(-1,1,1,-1,0,1),xf=class extends pt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},Xb=new xf,Rs=class{constructor(e){this._mesh=new at(Xb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var so=class extends kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yi.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Rs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ta=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vc=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ze);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new so(Hc),this.copyPass.material.blending=gi,this.clock=new uc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ta!==void 0&&(o instanceof ta?n=!0:o instanceof Vc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wc=class extends kn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Zm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ro=class i extends kn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new Ee(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Jt(r,o,{type:bn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Jt(r,o,{type:bn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Zm;this.highPassUniforms=yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ze(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Hc;this.copyUniforms=yi.clone(u.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ir,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ee,this.oldClearAlpha=1,this.basic=new Gt,this.fsQuad=new Rs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ze(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ro.BlurDirectionX=new Ze(1,0);ro.BlurDirectionY=new Ze(0,1);var Km={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Xc=class extends kn{constructor(){super();let e=Km;this.uniforms=yi.clone(e.uniforms),this.material=new ic({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ku&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $m=58,qb=82,Jm=94,Yb=9,Zb=20,jm=4.7,Kb=1.95,$b=3,Jb=4,jb=5,qc=.6;function Cs(i,e,t){return i<e?e:i>t?t:i}function Rt(i,e=0){return Number.isFinite(i)?i:e}function Qb(i,e,t){return i+(e-i)*t}function oo(i,e){return 1-Math.exp(-i*e)}function eE(i){return Number.isFinite(i)?Cs(i,0,.1):0}function Qm(i){let e=new O,t=new O,n=new O,s=new O,r={x:1,z:0},o=!1,a=0,c=0,l=0,u=$m,h=jm,f=0,p=0,x=0;function _(T,b){let M=Rt(T.x),A=Rt(T.y),E=Rt(T.z),S=Rt(T.heading)+Rt(T.yaw),I=Math.sin(S),V=Math.cos(S),z=-V,P=I;r.x=z,r.z=P;let H=T.airborne?1:0,G=b*b,ee=jm-.3*G+.9*H,k=Kb-.15*G+.7*H;h=ee;let X=Cs(Rt(T.slope),-.15,.15),ue=Cs(Rt(T.lean),-1.5,1.5),pe=0;e.set(M-I*ee+z*pe,A+k-X*ee,E-V*ee+P*pe),e.y<A+qc&&(e.y=A+qc),t.set(M+I*8.5,A+.55+X*4-1.5*H,E+V*8)}function m(T){return Qb($m,qb,Math.pow(T,1.6))}function d(T,b,M,A){i.position.set(n.x+r.x*b,Math.max(n.y+M,A),n.z+r.z*b),i.lookAt(s),i.rotateZ(T)}function v(T,b){if(T=eE(T),!o){y(b);return}a+=T;let M=Cs(Rt(b.speedRatio),0,1);_(b,M);let A=Rt(b.x)-f,E=Rt(b.y)-p,S=Rt(b.z)-x;A*A+E*E+S*S<400&&(n.x+=A,n.y+=E,n.z+=S,s.x+=A,s.y+=E,s.z+=S),f=Rt(b.x),p=Rt(b.y),x=Rt(b.z),n.lerp(e,oo(Yb,T));let I=n.x-Rt(b.x),V=n.z-Rt(b.z),z=Math.hypot(I,V);z>.001&&(n.x=Rt(b.x)+I/z*h,n.z=Rt(b.z)+V/z*h),s.lerp(t,oo(Zb,T));let P=Rt(b.y)+qc;n.y<P&&(n.y=P),l*=Math.exp(-jb*T);let H=M*M*M*2.2,G=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,ee=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,k=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,X=l*.35+H*.01,ue=G*X,pe=ee*X,Me=k*(l*.03+H*.002);c+=((b.boosting?1:0)-c)*oo(Jb,T);let fe=m(M),ie=fe+(Jm-fe)*c;u+=(ie-u)*oo($b,T),Math.abs(i.fov-u)>1e-4&&(i.fov=u,i.updateProjectionMatrix()),d(Me,ue,pe,P)}function y(T){let b=Cs(Rt(T.speedRatio),0,1);_(T,b),n.copy(e),s.copy(t),f=Rt(T.x),p=Rt(T.y),x=Rt(T.z),o=!0,a=0,l=0,c=T.boosting?1:0,u=m(b)+(Jm-m(b))*c,i.fov=u,i.updateProjectionMatrix(),d(0,0,0,Rt(T.y)+qc)}function g(T){l=Cs(l+Rt(T),0,1.5)}return{update:v,shake:g,snap:y}}var tE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,nE=`
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
}`;function e0(i,e,t,n){let r=Rt((n||{}).bloom,.5),o=null,a=null,c=null,l=0,u=0,h=0,f=0,p=0,x=Math.min(globalThis.devicePixelRatio||1,2);try{let y=i.getSize(new Ze),g=new Jt(Math.max(1,y.x),Math.max(1,y.y),{type:bn,samples:4});o=new Gc(i,g),o.setPixelRatio(x),o.addPass(new Wc(e,t)),a=new ro(new Ze(512,512),r*.8,.75,.9),o.addPass(a),c=new so({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:tE,fragmentShader:nE}),o.addPass(c),o.addPass(new Xc)}catch(y){console.warn("Post-traitement indisponible, rendu direct :",y),o=null,a=null,c=null}function _(y,g){!Number.isFinite(y)||!Number.isFinite(g)||y<=0||g<=0||(x=Math.min(globalThis.devicePixelRatio||1,2),i.setPixelRatio(x),i.setSize(y,g),o&&(o.setPixelRatio(x),o.setSize(y,g)))}function m(y,g){l=Cs(Rt(y,0),0,1),u=g?1:0}function d(y){if(y=Number.isFinite(y)?Cs(y,0,.1):0,p+=y,h+=(l-h)*oo(8,y),f+=(u-f)*oo(8,y),c&&(c.uniforms.uSpeed.value=h,c.uniforms.uBoost.value=f,c.uniforms.uTime.value=p),o)try{o.render(y);return}catch(g){console.warn("\xC9chec du post-traitement, rendu direct :",g),o=null}i.render(e,t)}function v(){o&&o.dispose(),a&&a.dispose&&a.dispose(),c&&c.dispose&&c.dispose(),o=null}return{render:d,setSize:_,setSpeed:m,dispose:v}}function t0(i){if(!Number.isFinite(i))return`--'--"---`;let e=Math.floor(i/60),t=Math.floor(i%60),n=Math.floor(i*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(n).padStart(3,"0")}`}var zt=(i,e,t,n)=>{let s=document.createElement(i);return e&&(s.className=e),n!=null&&(s.textContent=n),t?.appendChild(s),s};function n0(i){let e=zt("div","h2-root",i);e.hidden=!0;let t=zt("div","h2-pos",e),n=zt("span","h2-pos-num",t,"1"),s=zt("span","h2-pos-tot",t,"/8");zt("span","h2-pos-lbl",t,"POS");let r=zt("div","h2-right",e),o=zt("div","h2-pill h2-lap",r);zt("span","h2-lap-lbl",o,"TOUR");let a=zt("span","h2-lap-num",o,"1"),c=zt("span","h2-lap-tot",o,"/3"),l=zt("div","h2-pill h2-time",r,`00'00"000`),u=zt("div","h2-best",r,""),h=zt("canvas","h2-map",e),f=220;h.width=h.height=f;let p=h.getContext("2d"),x=document.createElement("canvas");x.width=x.height=f;let _=null,m=1,d=0,v=0,y=zt("div","h2-dial",e),g=zt("canvas","h2-dial-canvas",y),T=300;g.width=g.height=T;let b=g.getContext("2d"),M=zt("div","h2-gear",y,"1"),A=zt("div","h2-speed",y,"0");zt("div","h2-unit",y,"km/h");let E=zt("div","h2-boost",y),S=[],I=zt("div","h2-count",e,""),V=zt("div","h2-flash",e,""),z=zt("div","h2-wrong",e,"CONTRESENS");z.hidden=!0;let P={},H=(j,D,Y)=>{P[j]!==Y&&(P[j]=Y,D.textContent=Y)},G=Math.PI*.75,ee=Math.PI*2.25,k=-1;function X(j){let D=Math.round(j*120)/120;if(D===k)return;k=D;let Y=T/2,Z=T*.44;b.clearRect(0,0,T,T),b.lineCap="butt",b.beginPath(),b.arc(Y,Y,Z*1.05,0,Math.PI*2),b.fillStyle="rgba(8, 10, 16, 0.42)",b.fill();let se=(Ae,W,We,ze)=>{b.beginPath(),b.arc(Y,Y,Z,Ae,W),b.strokeStyle=We,b.lineWidth=ze,b.stroke()},_e=G+(ee-G)*.86;se(G,_e,"rgba(255,255,255,0.28)",T*.05),se(_e,ee,"rgba(226,40,48,0.55)",T*.05);let Se=G+(ee-G)*Math.min(1,Math.max(0,D));se(G,Math.min(Se,_e),"#ffffff",T*.05),Se>_e&&se(_e,Se,"#e8242e",T*.05);for(let Ae=0;Ae<=8;Ae++){let W=G+(ee-G)*Ae/8;b.beginPath(),b.moveTo(Y+Math.cos(W)*Z*.8,Y+Math.sin(W)*Z*.8),b.lineTo(Y+Math.cos(W)*Z*.9,Y+Math.sin(W)*Z*.9),b.strokeStyle=Ae>=7?"#e8242e":"rgba(255,255,255,0.75)",b.lineWidth=3,b.stroke()}b.beginPath(),b.moveTo(Y+Math.cos(Se)*Z*.3,Y+Math.sin(Se)*Z*.3),b.lineTo(Y+Math.cos(Se)*Z*.98,Y+Math.sin(Se)*Z*.98),b.strokeStyle="#ffffff",b.lineWidth=4,b.stroke()}X(0);function ue(j){_=j;let D=j.bounds,Y=D.maxX-D.minX,Z=D.maxZ-D.minZ;m=(f-36)/Math.max(Y,Z),d=(f-Y*m)/2-D.minX*m,v=(f-Z*m)/2-D.minZ*m;let se=x.getContext("2d");se.clearRect(0,0,f,f);let _e=()=>{se.beginPath(),j.pts.forEach((Se,Ae)=>{let W=Se.x*m+d,We=Se.z*m+v;Ae?se.lineTo(W,We):se.moveTo(W,We)}),j.open||se.closePath()};se.lineJoin="round",_e(),se.strokeStyle="rgba(0,0,0,0.45)",se.lineWidth=9,se.stroke(),_e(),se.strokeStyle="#ffffff",se.lineWidth=5,se.stroke(),_e(),se.strokeStyle="rgba(20,24,34,0.9)",se.lineWidth=2,se.stroke(),p.clearRect(0,0,f,f),p.drawImage(x,0,0)}function pe(j){if(!_)return;p.clearRect(0,0,f,f),p.drawImage(x,0,0);let D=_.pts.length,Y=(Z,se)=>{let _e=Math.floor((Z.s%_.length+_.length)%_.length/_.step);_e>=D&&(_e=D-1);let Se=_.pts[_e],Ae=Se.x*m+d,W=Se.z*m+v;p.beginPath(),p.arc(Ae,W,se?6:3.6,0,Math.PI*2),p.fillStyle=se?"#e8242e":"#ffffff",p.fill(),p.lineWidth=1.5,p.strokeStyle="rgba(0,0,0,0.6)",p.stroke()};for(let Z of j)Z.isPlayer||Y(Z,!1);for(let Z of j)Z.isPlayer&&Y(Z,!0)}let Me=null;function fe(j){H("pos",n,String(j.position)),H("tot",s,"/"+j.total),H("lap",a,String(j.lap)),H("laps",c,"/"+j.laps),H("time",l,t0(j.time)),H("best",u,j.bestLap?"MEILLEUR "+t0(j.bestLap):""),H("speed",A,String(Math.round(j.speedKmh))),H("gear",M,String(j.gear||1)),X(j.rpm??Math.min(1,j.speedKmh/290));let D=j.boostCharges|0,Y=j.boostT>0?1:0,Z=D+":"+Y;if(P.boost!==Z){for(P.boost=Z;S.length<D+Y;)S.push(zt("span","h2-boost-dot",E));S.forEach((se,_e)=>{se.hidden=_e>=D+Y,se.classList.toggle("h2-on",Y&&_e===D)})}if(j.countdown===null||j.countdown===void 0)Me===null&&P.count!==""&&(P.count="",I.textContent="",I.classList.remove("h2-show"));else if(j.countdown>0){let se=String(Math.ceil(j.countdown));P.count!==se&&(P.count=se,I.textContent=se,I.classList.remove("h2-show"),I.offsetWidth,I.classList.add("h2-show"))}else P.count!=="GO !"&&(P.count="GO !",I.textContent="GO !",I.classList.remove("h2-show"),I.offsetWidth,I.classList.add("h2-show"),clearTimeout(Me),Me=setTimeout(()=>{Me=null},800));z.hidden===!!j.wrongWay&&(z.hidden=!j.wrongWay)}let ie=null;function $(j,D=900){V.textContent=j,V.classList.remove("h2-show"),V.offsetWidth,V.classList.add("h2-show"),clearTimeout(ie),ie=setTimeout(()=>V.classList.remove("h2-show"),D)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:fe,setTrack:ue,updateMinimap:pe,flash:$,dispose(){e.remove()}}}var QT=Ys.maxSpeed*3.6;var i0=360;var s0=i=>(i<10?"0":"")+i;function _f(i){if(i==null||!Number.isFinite(i))return"--:--.--";let e=Math.max(0,Math.floor(i*100+1e-6)),t=Math.floor(e/6e3),n=Math.floor(e/100)%60;return`${t}:${s0(n)}.${s0(e%100)}`}var ew=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${i0}" height="${i0}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var r0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",o0=0;function vf(){o0++;let i=Yn((Date.now()^Math.imul(o0,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=r0[i.int(0,r0.length-1)];return e}var Ut=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function a0(i){return i?typeof i=="string"?xs[i]?.name||i:i.name||xs[i.id]?.name||"":""}function iE(i){return i&&typeof i=="object"?i:Zs.find(e=>e.id===i)||{id:String(i),name:String(i),icon:"\u2022"}}function c0(i){let e=new Map;for(let n of i||[]){let s=iE(n),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:n,n:s}of e.values())t+=`<span class="pr-own">${Ut(n.icon)} ${Ut(n.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function yf(i){return(i||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${Ut(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function l0(i){let e=document.createElement("div");e.className="pr-menu pr-off",i.appendChild(e);let t=null,n=null;function s(_){try{t&&typeof t.play=="function"&&t.play(_)}catch{}}function r(_,m){let d=n;if(!d||!d.items.length)return;let v=d.items.length,y=(_%v+v)%v,g=y!==d.index;d.index=y,d.focused=!0;for(let T=0;T<v;T++)d.items[T].classList.toggle("pr-sel",T===y);try{d.items[y].focus({preventScroll:!0})}catch{}g&&m&&s("select")}function o(_){let m=n;m&&(n=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),m.resolve(_))}function a(_){return n=null,e.innerHTML=_.html,e.classList.remove("pr-off"),new Promise(m=>{n={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:_.actions||{},resolve:m},_.onMount&&_.onMount(e,o),r(_.initial||0,!1)})}e.addEventListener("click",_=>{let m=n;if(!m||!(_.target instanceof Element))return;let d=_.target.closest("[data-act]");if(!d||!e.contains(d)||d.disabled)return;let v=m.items.indexOf(d);v>=0&&v!==m.index&&r(v,!1);let y=m.actions[d.dataset.act];y&&y(d,o)}),e.addEventListener("mouseover",_=>{let m=n;if(!m||!(_.target instanceof Element))return;let d=_.target.closest("[data-nav]");if(!d)return;let v=m.items.indexOf(d);v>=0&&v!==m.index&&r(v,!0)}),window.addEventListener("keydown",_=>{let m=n;if(!m)return;let d=_.target,v=!!d&&d.tagName==="INPUT",y=_.key||"",g=y.toLowerCase();if(y==="ArrowUp"||!v&&(y==="ArrowLeft"||g==="z"||g==="q")){_.preventDefault(),r(m.index-1,!0);return}if(y==="ArrowDown"||!v&&(y==="ArrowRight"||g==="s"||g==="d")){_.preventDefault(),r(m.index+1,!0);return}if(v){if(y==="Enter"){_.preventDefault();let T=e.querySelector("[data-main]");T&&T.click()}return}if(y.length===1){let T=m.items.find(b=>b.dataset.key===y);T&&(_.preventDefault(),T.click())}});function c({dailySeed:_,meta:m}={}){let d=m||{},v=String(_||"RUSH-DAILY").toUpperCase(),y=vf();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${Ut(y)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${Ut(v)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${d.runs??0}</b><span>runs</span></div>
    <div><b>${d.wins??0}</b><span>victoires</span></div>
    <div><b>${d.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:g=>{let T=g.closest(".pr-screen").querySelector("[data-seed]");T&&(T.value=vf())},launch:(g,T)=>{let b=g.closest(".pr-screen").querySelector("[data-seed]"),M=(b?b.value:"").trim().toUpperCase();M||(M=vf()),T({seed:M})},daily:(g,T)=>T({seed:v})}})}function l({stage:_={},index:m=1,total:d=1,standings:v=[],weather:y}={}){let g=a0(y)||a0(_.weather),T=_.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">\xC9tape ${Ut(m)}/${Ut(d)}</div>
    <h2 class="pr-h2">${Ut(_.name)}</h2>
    <p class="pr-sub">${Ut(_.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${Ut(g)}</dd></div>
      <div><dt>Tours</dt><dd>${Ut(T)} ${T>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${Ut(_.trackSeed)}</dd></div>
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${yf(v)}</ol>
  </div></div>
</section>`,actions:{go:(b,M)=>M(void 0)}})}function u({results:_=[],standings:m=[],stage:d={}}={}){let y=[..._].sort((g,T)=>(g.position??99)-(T.position??99)).map((g,T)=>{let b=gc[(g.position??0)-1]??0;return`<tr class="pr-tr${g.isPlayer?" pr-me":""}" style="--i:${T}"><td class="pr-c-pos">${Ut(g.position??"")}</td><td class="pr-c-name">${Ut(g.name)}</td><td class="pr-c-tm">${g.time==null?"Abandon":_f(g.time)}</td><td class="pr-c-best">${g.bestLap==null?"\u2014":_f(g.bestLap)}</td><td class="pr-c-pts">${b>0?"+"+b:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${Ut(d.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${y}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${yf(m)}</ol>
  </div></div>
</section>`,actions:{next:(g,T)=>T(void 0)}})}function h({choices:_=[],index:m=1,total:d=1,owned:v=[]}={}){let y=_.map((g,T)=>`<button type="button" class="pr-card pr-slide" style="--i:${T}" data-nav data-key="${T+1}" data-act="pick" data-id="${Ut(g.id)}"><span class="pr-card-in"><span class="pr-card-key">${T+1}</span><span class="pr-card-ico" aria-hidden="true">${Ut(g.icon)}</span><span class="pr-card-name">${Ut(g.name)}</span><span class="pr-card-tag">${Ut(g.tagline)}</span><span class="pr-card-pro">\u25B2 ${Ut(g.pro)}</span><span class="pr-card-con">\u25BC ${Ut(g.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${Ut(m)}/${Ut(d)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${y}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${c0(v)}</div>
</section>`,actions:{pick:(g,T)=>T(g.dataset.id)}})}function f({standings:_=[],playerPosition:m,run:d={},meta:v}={}){let y=v||{},g=m??_.findIndex(M=>M.isPlayer)+1,T=g===1,b=T?"Champion !":`${Ut(g)}e au championnat`;return a({initial:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${T?" pr-gold":""}">${b}</div>
    <ol class="pr-slist pr-slist-big">${yf(_)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${c0(d.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${Ut(d.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>
    <p class="pr-cmds">Runs : ${y.runs??0} \xB7 Victoires : ${y.wins??0} \xB7 Record : ${y.bestPoints??0} pts</p>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">Nouveau run</button>
  </div></div>
</section>`,actions:{copy:M=>{let A="Copier la seed",E;try{E=navigator.clipboard.writeText(String(d.seed??""))}catch(I){E=Promise.reject(I)}let S=I=>{M.textContent=I,setTimeout(()=>{M.isConnected&&(M.textContent=A)},1500)};E.then(()=>S("Copi\xE9e !"),()=>S("Copie impossible"))},again:(M,A)=>A(void 0)}})}function p(_){t=_||null}function x(){n=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:c,showStageIntro:l,showResults:u,showUpgradeChoice:h,showRunEnd:f,hideAll:x,setAudio:p}}var u0=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,h0=.6,sE=.3,Mf=6,ir=55,rE=.1,oE=25,f0=60/128/4,aE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],ao=i=>Number.isFinite(i)?i<0?0:i>1?1:i:0,d0=i=>440*Math.pow(2,(i-69)/12);function cE(i){let t=new Float32Array(1024);for(let n=0;n<1024;n++){let s=n*2/1023-1;t[n]=(1+i)*s/(1+i*Math.abs(s))}return t}function p0(){let i=null,e=!1,t=null,n=null,s=null,r=null,o=null,a=null,c=null,l=!1,u=!1,h=null,f=0,p=0,x=-1,_=0,m=0,d=0;function v(D){let Y=Math.round(2*D),Z=Math.round(.1*D),se=new Float32Array(Y+Z),_e=0,Se=0,Ae=0,W=0,We=0,ze=0,Fe=0;for(let w=0;w<Y+Z;w++){let U=Math.random()*2-1;_e=.99886*_e+U*.0555179,Se=.99332*Se+U*.0750759,Ae=.969*Ae+U*.153852,W=.8665*W+U*.3104856,We=.55*We+U*.5329522,ze=-.7616*ze-U*.016898,se[w]=(_e+Se+Ae+W+We+ze+Fe+U*.5362)*.11,Fe=U*.115926}let Re=i.createBuffer(1,Y,D),Ge=Re.getChannelData(0),De=0;for(let w=0;w<Y;w++){let U=w<Z?se[w]*(w/Z)+se[Y+w]*(1-w/Z):se[w];Ge[w]=U;let ne=Math.abs(U);ne>De&&(De=ne)}let L=De>0?1/De:1;for(let w=0;w<Y;w++)Ge[w]*=L;return Re}function y(D){let Y=i.createBufferSource();return Y.buffer=n,Y.loop=!0,Y.connect(D),Y.start(0,Math.random()*1.5),Y}function g(D){let Y=i.createGain();return Y.gain.value=D,Y}function T(D,Y,Z){let se=i.createBiquadFilter();return se.type=D,se.frequency.value=Y,se.Q.value=Z,se}function b(){n=v(i.sampleRate),t=g(l?0:h0);let D=i.createDynamicsCompressor();D.threshold.value=-16,D.knee.value=12,D.ratio.value=4,D.attack.value=.005,D.release.value=.2,t.connect(D),D.connect(i.destination);let Y=i.createOscillator();Y.type="sawtooth",Y.frequency.value=ir,Y.detune.value=-6;let Z=i.createOscillator();Z.type="sawtooth",Z.frequency.value=ir,Z.detune.value=6;let se=i.createOscillator();se.type="square",se.frequency.value=ir/2;let _e=g(1);Y.connect(g(.28)).connect(_e),Z.connect(g(.28)).connect(_e),se.connect(g(.22)).connect(_e);let Se=T("bandpass",ir*4,1.2),Ae=g(.04);y(Se),Se.connect(Ae).connect(_e);let W=i.createWaveShaper();W.curve=cE(4),W.oversample="2x",_e.connect(W);let We=T("lowpass",300,1.3);W.connect(We);let ze=g(0);We.connect(ze).connect(t),Y.start(),Z.start(),se.start(),s={osc1:Y,osc2:Z,osc3:se,nBp:Se,nGain:Ae,lp:We,gain:ze};let Fe=T("bandpass",300,.7),Re=g(0);y(Fe),Fe.connect(Re).connect(t),r={filter:Fe,gain:Re};let Ge=T("bandpass",1100,4),De=g(3),L=g(0);y(Ge),Ge.connect(De).connect(L).connect(t),o={filter:Ge,gain:L};let w=T("highpass",900,.5),U=g(3),ne=g(0);y(w),w.connect(U).connect(ne).connect(t),a={gain:ne},c=g(0),c.connect(t),e=!0}function M(D,Y,Z){let se=i.currentTime;D.cancelScheduledValues(se),D.setTargetAtTime(Y,se,Z)}function A(D){let Y=D.t0,Z=D.dur,se=i.createOscillator();se.type=D.type||"sine",se.frequency.setValueAtTime(D.f0,Y),D.f1&&se.frequency.exponentialRampToValueAtTime(D.f1,Y+Z);let _e=i.createGain();_e.gain.setValueAtTime(1e-4,Y),_e.gain.linearRampToValueAtTime(D.vol,Y+(D.attack||.004)),_e.gain.exponentialRampToValueAtTime(1e-4,Y+Z);let Se=se;if(D.lp){let Ae=T("lowpass",D.lp,.7);se.connect(Ae),Se=Ae}Se.connect(_e),_e.connect(t),se.start(Y),se.stop(Y+Z+.02)}function E(D){let Y=D.t0,Z=D.dur,se=i.createBufferSource();se.buffer=n;let _e=T(D.type,D.f0,D.q||1);D.f1&&_e.frequency.exponentialRampToValueAtTime(D.f1,Y+Z),_e.frequency.setValueAtTime(D.f0,Y);let Se=i.createGain();Se.gain.setValueAtTime(1e-4,Y),Se.gain.linearRampToValueAtTime(D.vol,Y+.004),Se.gain.exponentialRampToValueAtTime(1e-4,Y+Z),se.connect(_e),_e.connect(Se),Se.connect(t),se.start(Y,Math.random()*1.5,Z+.02)}function S(D,Y){let Z=i.createBufferSource();Z.buffer=n;let se=T("bandpass",700+Math.random()*900,1.2),_e=i.createGain();_e.gain.setValueAtTime(0,D),_e.gain.linearRampToValueAtTime(Y,D+.003),_e.gain.linearRampToValueAtTime(0,D+.03),Z.connect(se),se.connect(_e),_e.connect(t),Z.start(D,Math.random()*1.5,.05)}let I={beep(D){A({type:"square",f0:440,t0:D,dur:.12,vol:.12,lp:2400})},go(D){A({type:"sawtooth",f0:880,t0:D,dur:.4,vol:.12,lp:3e3}),A({type:"sine",f0:1320,t0:D,dur:.4,vol:.06}),A({type:"sine",f0:1760,t0:D+.02,dur:.25,vol:.04}),E({t0:D,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(D){E({t0:D,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),A({type:"sawtooth",f0:150,f1:600,t0:D,dur:.6,vol:.1,lp:1500,attack:.02})},jump(D){E({t0:D,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(D){A({type:"sine",f0:90,f1:50,t0:D,dur:.2,vol:.6,attack:.002}),E({t0:D,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(D){E({t0:D,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let Y=340,Z=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[se,_e,Se]of Z)A({type:"sine",f0:Y*se,t0:D,dur:Se,vol:_e,attack:.001})},select(D){A({type:"sine",f0:2400,t0:D,dur:.03,vol:.15,attack:.002})},confirm(D){A({type:"triangle",f0:660,t0:D,dur:.12,vol:.2}),A({type:"triangle",f0:990,t0:D+.09,dur:.18,vol:.2})},win(D){[523,659,784,1047,1319].forEach((Z,se)=>{let _e=se<4?.13:.5,Se=D+se*.11;A({type:"square",f0:Z,t0:Se,dur:_e,vol:.1,lp:2500}),A({type:"triangle",f0:Z,t0:Se,dur:_e,vol:.12})})},lose(D){[392,330,262].forEach((Y,Z)=>{A({type:"triangle",f0:Y,t0:D+Z*.22,dur:.3,vol:.25,attack:.01})})},pad(D){A({type:"sawtooth",f0:300,f1:1500,t0:D,dur:.15,vol:.12,lp:4e3})},lap(D){A({type:"sine",f0:1e3,t0:D,dur:.08,vol:.2}),A({type:"sine",f0:1e3,t0:D+.15,dur:.08,vol:.2})}};function V(D){let Y=i.createOscillator();Y.type="sine",Y.frequency.setValueAtTime(150,D),Y.frequency.exponentialRampToValueAtTime(45,D+.12);let Z=i.createGain();Z.gain.setValueAtTime(.5,D),Z.gain.exponentialRampToValueAtTime(.001,D+.3),Y.connect(Z),Z.connect(c),Y.start(D),Y.stop(D+.32)}function z(D,Y){let Z=i.createBufferSource();Z.buffer=n;let se=T("highpass",7e3,.7),_e=i.createGain();_e.gain.setValueAtTime(Y,D),_e.gain.exponentialRampToValueAtTime(.001,D+.04),Z.connect(se),se.connect(_e),_e.connect(c),Z.start(D,Math.random()*1.5,.05)}function P(D,Y,Z){let se=i.createOscillator();se.type="sawtooth",se.frequency.value=Y;let _e=T("lowpass",1e3,6);_e.frequency.setValueAtTime(1e3,D),_e.frequency.exponentialRampToValueAtTime(180,D+Z);let Se=i.createGain();Se.gain.setValueAtTime(1e-4,D),Se.gain.linearRampToValueAtTime(.16,D+.01),Se.gain.exponentialRampToValueAtTime(1e-4,D+Z),se.connect(_e),_e.connect(Se),Se.connect(c),se.start(D),se.stop(D+Z+.02)}function H(D,Y){let Z=i.createOscillator();Z.type="triangle",Z.frequency.value=Y;let se=i.createGain();se.gain.setValueAtTime(1e-4,D),se.gain.linearRampToValueAtTime(.035,D+.005),se.gain.exponentialRampToValueAtTime(1e-4,D+.11),Z.connect(se),se.connect(c),Z.start(D),Z.stop(D+.13)}function G(D,Y){let Z=D&15,se=aE[D>>4&3];if(Z%4===0&&V(Y),Z%2===1&&z(Y,Z%4===2?.1:.05),Z%2===0){let _e=Z===6||Z===14?12:0;P(Y,d0(se.root+_e),f0*1.8);let Se=[0,se.iv[0],se.iv[1],12];H(Y,d0(se.root+24+Se[Z>>1&3]))}}function ee(){if(!e||!u)return;let D=i.currentTime;f<D&&(f=D+.02);let Y=D+rE;for(;f<Y;)G(p,f),f+=f0,p++}function k(){if(!e){if(!u0)return;try{i=new u0,b()}catch{i=null,e=!1;return}}if(i.state==="suspended")try{let D=i.resume();D&&D.catch&&D.catch(()=>{})}catch{}}function X(D,Y){if(!e)return;D=ao(D),Y=ao(Y);let Z=i.currentTime,se=D*Mf,_e=Math.min(Mf-1,Math.floor(se)),Ae=.45+.55*Math.min(1,se-_e),W=ao(D/.08),We=ir+(ir*Math.pow(Mf,Ae)-ir)*W,ze=.5*D+.5*Y,Fe=260+3200*Math.pow(ze,1.3),Re=.07+.2*D*(.35+.65*Y)+.03*Y;if(M(s.osc1.frequency,We,.04),M(s.osc2.frequency,We,.04),M(s.osc3.frequency,We*.5,.04),M(s.nBp.frequency,We*4,.05),M(s.nGain.gain,.04+.22*Y,.05),M(s.lp.frequency,Fe,.05),x!==-1&&_e!==x){let Ge=s.gain.gain;Ge.cancelScheduledValues(Z),Ge.setTargetAtTime(Re*.35,Z,.004),Ge.setTargetAtTime(Re,Z+.06,.03),_=Z+.12}if(x=_e,Z>=_&&M(s.gain.gain,Re,.05),Y>=m)m=Y;else if(m-Y>.3){if(D>.6&&Z>=d){let Ge=.12+.2*D;for(let De=0;De<3;De++)S(Z+De*.05+Math.random()*.02,Ge*(1-De*.2));d=Z+.4}m=Y}}function ue(D){if(!e)return;let Y=ao(D),Z=Y*Y;M(r.filter.frequency,250+1600*Z,.2),M(r.gain.gain,.03+.35*Z,.15)}function pe(D){if(!e)return;let Y=ao(D);M(o.filter.frequency,900+500*Y,.05),M(o.gain.gain,Y,.03)}function Me(D){e&&M(a.gain.gain,ao(D)*.25,.1)}function fe(D){e&&Object.prototype.hasOwnProperty.call(I,D)&&I[D](i.currentTime+.01)}function ie(D){l=!!D,e&&M(t.gain,l?0:h0,.015)}function $(){e&&(u||(u=!0,p=0,f=i.currentTime+.05),M(c.gain,sE,.05),h||(h=setInterval(ee,oE)),ee())}function j(){u=!1,h&&(clearInterval(h),h=null),e&&M(c.gain,0,.05)}return{resume:k,setEngine:X,setWind:ue,setSkid:pe,setRain:Me,play:fe,setMuted:ie,startMusic:$,stopMusic:j}}var Sf=1/120,Is=new URLSearchParams(location.search),lE=document.getElementById("game"),di=new Ka({canvas:lE,antialias:!0,powerPreference:"high-performance"});di.setPixelRatio(Math.min(window.devicePixelRatio,2));di.shadowMap.enabled=!0;di.shadowMap.type=hc;di.toneMapping=zo;di.toneMappingExposure=1.05;di.outputColorSpace=Tt;var kt=new No,En=new Xt(70,1,.3,6e3);kt.add(En);var Ps=Qm(En),S0=document.getElementById("ui"),fi=n0(S0),Ki=l0(S0),Ht=p0();Ki.setAudio?.(Ht);var $c=new Set,ln={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var uE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||($c.add(i.code),_n==="race"&&uE.includes(i.code)&&i.preventDefault(),i.code==="KeyM"&&(Zc=!Zc,Ht.setMuted(Zc)),(i.code==="KeyP"||i.code==="Escape")&&_n==="race"&&(Tf=!Tf))});addEventListener("keyup",i=>$c.delete(i.code));addEventListener("blur",()=>$c.clear());addEventListener("pointerdown",()=>Ht.resume(),{once:!1});var Zc=Is.has("mute");Zc&&Ht.setMuted(!0);var Tf=!1;function hE(i){let e=(...s)=>s.some(r=>$c.has(r));ln.throttle=e("ArrowUp","KeyW")?1:0,ln.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);ln.steer=t,ln.boost=e("Space"),ln.drift=e("ShiftLeft","ShiftRight","KeyX");let n=navigator.getGamepads?.()[0];if(n){let s=n.axes[0]||0;Math.abs(s)>.12&&(ln.steer=s),ln.throttle=Math.max(ln.throttle,n.buttons[7]?.value||0,n.buttons[0]?.pressed?1:0),ln.brake=Math.max(ln.brake,n.buttons[6]?.value||0),ln.boost=ln.boost||!!n.buttons[2]?.pressed,ln.drift=ln.drift||!!n.buttons[1]?.pressed||!!n.buttons[5]?.pressed}return ln}function fE(i){let e=new No,t=new fs(50,32,16),n=new O(...i.sunDir).normalize(),s=new St({side:Kt,uniforms:{uTop:{value:new Ee(i.skyTop)},uHor:{value:new Ee(i.skyHorizon)},uGround:{value:new Ee(i.hemiGround)},uSun:{value:new Ee(i.sunColor).multiplyScalar(i.sunIntensity)},uSunDir:{value:n}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new at(t,s));let r=new Hr(di),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var m0=new Map;function g0(i,e="#f4f2ec",t="#16181d"){let n=i+e+t,s=m0.get(n);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(i),20,15),s=new ci(o),s.colorSpace=Tt,s.magFilter=nn,s.minFilter=Gn,m0.set(n,s)}let r=new at(new An(1,1),new it({map:s,roughness:.5,side:wt,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var na=null;function dE(){if(na)return na;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),na=new ci(i),na.colorSpace=Tt,na}function bf(i,e,t){let n=new $a(new Uo({map:dE(),color:i,transparent:!0,opacity:t,blending:Ir,depthWrite:!1,fog:!1}));return n.scale.setScalar(e),n}var tt=null,_n="boot",wf=0,Af=0,Rf=0,ia=99;function pE(){if(tt){for(let i of tt.bikes)kt.remove(i.model.group);kt.remove(tt.road.group),tt.road.dispose?.(),tt.env.dispose?.(),tt.env.group?.parent&&tt.env.group.parent.remove(tt.env.group),tt.fx.dispose?.(),tt.post.dispose?.(),tt.envMap?.dispose(),kt.environment=null,tt.mirror&&(kt.remove(tt.mirror),tt.mirror.dispose()),tt.fill&&kt.remove(tt.fill),tt.scenery&&(kt.remove(tt.scenery.group),tt.scenery.dispose()),tt.clouds&&(kt.remove(tt.clouds),tt.clouds.geometry.dispose(),tt.clouds.material.dispose()),tt.sunGlow&&(kt.remove(tt.sunGlow),tt.sunGlow.material.dispose()),tt=null}}var hi=null;function b0({trackSeed:i,weatherId:e,laps:t,riders:n,autopilot:s}){pE();let r=Yn(i),o=String(i).startsWith("REAL:")&&!!hi,a=o?bm(hi):Fp(i),c=xs[e]||xs.sunset;En.far=o?9500:6e3,En.updateProjectionMatrix();let l=o?Em(kt,a,c,r.fork("env")):_m(kt,a,c,r.fork("env")),u=fE(c);kt.environment=u.texture,kt.environmentIntensity=c.night?.55:.5,di.toneMappingExposure=c.night?1.5:.82;let h=bf(c.sunColor,c.night?900:2200,c.night?.35:.75);h.userData.dir=new O(...c.sunDir).normalize(),kt.add(h);let f=new _i(c.night?3820160:13226728,c.night?.25:.45);f.position.set(-c.sunDir[0],.6,-c.sunDir[2]).multiplyScalar(100),f.name="fill-light",kt.add(f);let p=rm(a,c,r.fork("road"));kt.add(p.group),o||Ih(l.group,A=>A.geometry.attributes.position.count>2e4?1:.45),Ih(p.group,()=>.4);let x=o?{group:new dt,dispose(){}}:Sm(a,c,r.fork("scenery"),l.heightAt);l.sun?.shadow&&(l.sun.shadow.mapSize.set(4096,4096),l.sun.shadow.radius=5,l.sun.shadow.blurSamples=16,l.sun.shadow.normalBias=.05,l.sun.shadow.map?.dispose(),l.sun.shadow.map=null),kt.add(x.group);let _=null,m=o?Math.min(.25,c.wet||.25):c.sheen??c.wet;m>.5&&!Is.has("noreflect")&&(_=new Ho(new An(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),_.rotation.x=-Math.PI/2,_.material.colorWrite=!1,_.material.depthWrite=!1,_.material.depthTest=!1,_.frustumCulled=!1,_.renderOrder=-10,_.name="road-mirror",kt.add(_));let d=p.group.getObjectByName("road-asphalt");d&&m>.5&&(d.material.envMap=u.texture,d.material.envMapIntensity=_?.35:1.25,d.material.metalness=.3,um(d.material,c.sheen??c.wet,_?{texture:_.getRenderTarget().texture,matrix:_.material.uniforms.textureMatrix.value}:null));let v=cm(c,r.fork("clouds"));kt.add(v);let y=Ym(kt,c),g=e0(di,kt,En,c),T=Yp({track:a,laps:t,env:c,rng:r.fork("race"),riders:n}),b=T.riders.map(A=>{let E=Hm({color:A.color,accent:A.accent,isPlayer:!!A.isPlayer&&!!c.night,detail:A.isPlayer?"hi":"lo"});E.group.rotation.order="YXZ";let S=E.group.getObjectByName("chassis")||E.group,I=bf(16722458,.3,.3);if(I.position.set(0,.67,-.42),S.add(I),c.night){let P=bf(16773840,1.3,.8);P.position.set(0,.48,1.66),S.add(P)}E.tailGlow=I;let V=A.isPlayer?1:2+T.riders.indexOf(A)*7%97;for(let P of[-1,1]){let H=g0(V);H.scale.set(.24,.17,1),H.position.set(.105*P,.6,-.2),H.rotation.y=P*Math.PI/2,S.add(H)}let z=g0(V);return z.scale.set(.2,.14,1),z.position.set(0,.585,1.6),z.rotation.x=-.75,S.add(z),kt.add(E.group),{rider:A,model:E,pose:{},prev:new O,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),M=s?yc({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},r.fork("auto")):null;return tt={track:a,weather:c,env:l,road:p,fx:y,post:g,race:T,bikes:b,autoAI:M,envMap:u,sunGlow:h,clouds:v,scenery:x,mirror:_,fill:f,playerBike:b.find(A=>A.rider.isPlayer)||b[0]},fi.setTrack(a),C0(),T0(.016),Ps.snap(Cf()),Af=T.player?.position||n.length,Rf=1,ia=99,window.__game={stage:tt,renderer:di,scene:kt,camera:En,RL:wh},window.__tick=R0,tt}var Ei={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Cf(){let i=tt.playerBike,e=i.rider.state;return Ei.x=i.w.x,Ei.y=i.w.y,Ei.z=i.w.z,Ei.heading=i.w.heading,Ei.yaw=-E0(e),Ei.speedRatio=Math.min(1.3,e.speed/i.rider.stats.maxSpeed),Ei.airborne=e.airborne,Ei.boosting=e.boostT>0,Ei.slope=i.w.slope||0,Ei}var mE=.8,x0=.7;function E0(i){let e=i.vdir??i.yaw;return e+mE*(i.yaw-e)}function T0(i){let{track:e,fx:t,weather:n}=tt;for(let s of tt.bikes){let r=s.rider.state;Ft(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-E0(r),c=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=x0*(Math.sin(a)-Math.sin(c)),o.position.z+=x0*(Math.cos(a)-Math.cos(c)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let l=s.pose;if(l.lean=r.lean,l.steer=r.steer,l.pitch=r.pitch,l.compress=r.compress,l.wheelSpin=r.wheelSpin,l.speedRatio=r.speed/s.rider.stats.maxSpeed,l.speed=r.speed,l.airborne=r.airborne,l.drift=r.drift,l.boost=r.boostT>0,l.braking=s.rider.isPlayer?ln.brake>.1:!!s.rider.braking,s.model.update(l,i),s.model.tailGlow){let y=l.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*y-s.model.tailGlow.material.opacity)*Math.min(1,i*12),s.model.tailGlow.scale.setScalar(.3+.55*y)}let u=o.rotation.y,h=Math.sin(u),f=Math.cos(u),p=s.w.x-h*.7,x=s.w.z-f*.7,_=s.w.y+.05,m=h*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,_,x,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,_,x,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,_,x,m*.25,1.5,d*.25,2),n.wet>.2&&r.speed>20&&Math.random()<n.wet*.8&&t.emit("spray",p,_,x,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-h*.4,_+.45,x-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,_,x),s.has=!r.airborne;let v=s.rider.isPlayer?null:s.rider.frameEvents;v&&v.length&&w0(s,v,!1)}}function w0(i,e,t){let{fx:n}=tt,s=i.rider.state,r=i.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let c of e)c==="land"||c==="hardLand"?(n.emit("land",i.w.x,i.w.y+.1,i.w.z,o*.3,1,a*.3,c==="hardLand"?40:22),t&&(Ht.play("land"),Ps.shake(c==="hardLand"?.9:.45))):c==="wall"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,3,a*.5,26),t&&(Ht.play("hit"),Ps.shake(.7))):c==="crash"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,4,a*.5,40),n.emit("dust",i.w.x,i.w.y+.2,i.w.z,o*.3,2,a*.3,30),t&&(Ps.shake(1.4),fi.flash("CHUTE !",1400))):c==="jump"?t&&Ht.play("jump"):c==="boost"?t&&(Ht.play("boost"),Ps.shake(.3),fi.flash("BOOST !",600)):c==="pad"&&t&&(Ht.play("pad"),Ps.shake(.2))}function gE(i){let{race:e,autoAI:t,track:n}=tt,s=e.player,r=ln;if(t||_n==="finish")if(t){let a=e.riders.filter(c=>c!==s).map(c=>c.state);r=Mc(t,s.state,n,s.stats,a,i)}else r=xE;e.update(i,r);let o=s.state.events;o.length&&(w0(tt.playerBike,o,!t),o.length=0)}var xE={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},In={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Ef=[],_0=new O,v0=performance.now(),Yc=0,Kc=0;function A0(i){requestAnimationFrame(A0);let e=Math.min(.05,(i-v0)/1e3);v0=i,R0(e)}function R0(i){if(!tt)return;if(Tf){tt.post.render(0);return}Kc+=i,wf+=i;let{race:e}=tt,t=_n==="race"||_n==="attract"||_n==="finish";if(t){_n==="race"&&hE(i),Yc+=i;let a=0;for(;Yc>=Sf&&a++<8;)gE(Sf),Yc-=Sf;a>=8&&(Yc=0)}T0(i);let n=e.player,s=n.state,r=Math.min(1.3,s.speed/n.stats.maxSpeed),o=Cf();_n==="intro"||_n==="menu"||_n==="finish"&&wf>1.2?_E(o,i):Ps.update(i,o),_0.set(o.x,o.y,o.z),tt.env.update(i,Kc,_0),tt.mirror&&tt.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),tt.sunGlow.position.copy(En.position).addScaledVector(tt.sunGlow.userData.dir,3200),tt.road.update(i,Kc),tt.fx.setSpeed(t?r:0,s.boostT>0),tt.fx.update(i,En),tt.post.setSpeed(t?r:0,s.boostT>0),tt.post.render(i),(_n==="race"||_n==="finish")&&(Ht.setEngine(Math.min(1,r),_n==="race"?ln.throttle:.3),Ht.setWind(Math.min(1,r)),Ht.setSkid(s.airborne?0:Math.min(1,s.drift))),_n==="race"&&vE(e,n,s)}var y0=new O;function _E(i,e){let t=Kc*.35+i.heading;y0.set(i.x+Math.sin(t)*7.5,i.y+2.6,i.z+Math.cos(t)*7.5),En.position.lerp(y0,Math.min(1,e*2.5)),En.fov+=(55-En.fov)*Math.min(1,e*3),En.updateProjectionMatrix(),En.lookAt(i.x,i.y+.9,i.z)}function vE(i,e,t){In.speedKmh=t.speed*3.6,In.position=e.position,In.total=i.riders.length,In.lap=Math.min(i.laps,Math.max(1,e.lap)),In.laps=i.laps,In.time=i.time,In.bestLap=e.bestLap??null,In.boostCharges=t.boostCharges,In.boostT=t.boostT,In.gear=t.gear,In.rpm=t.rpm,In.countdown=i.phase==="countdown"?i.countdown:i.time<.9?0:null,In.wrongWay=Math.abs(t.yaw)>1.4,fi.update(In),Ef.length=0;for(let n of i.riders)Ef.push({s:n.state.s,d:n.state.d,isPlayer:!!n.isPlayer,color:n.color});if(fi.updateMinimap(Ef),i.phase==="countdown"){let n=Math.ceil(i.countdown);n!==ia&&(ia=n,n>0&&Ht.play("beep"))}else ia!==0&&(ia=0,Ht.play("go"),Ht.startMusic?.());i.phase==="racing"&&(e.position<Af&&fi.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),Af=e.position,e.lap!==Rf&&e.lap<=i.laps&&(Rf=e.lap,Ht.play("lap"),e.lap===i.laps&&fi.flash("DERNIER TOUR",1400))),i.phase==="finished"&&_n==="race"&&yE()}function C0(){let i=innerWidth,e=innerHeight;di.setSize(i,e,!1),En.aspect=i/e,En.updateProjectionMatrix(),tt?.post.setSize(i,e)}addEventListener("resize",C0);function sa(i){_n=i,wf=0}var Yt=null,co=bh(),I0=null;function yE(){sa("finish"),fi.flash(`ARRIV\xC9E \u2014 ${tt.race.player.position}${tt.race.player.position===1?"er":"e"}`,2200),Ht.play(tt.race.player.position<=3?"win":"lose"),Ht.stopMusic?.(),setTimeout(()=>I0?.(),3200)}function M0(){let i=wc(Tc("ATTRACT"));for(let e of i)e.stats=$r({upgrades:[]});b0({trackSeed:hi?"REAL:"+hi.id:"ATTRACT-"+Ac(),weatherId:hi?"sicily":"sunset",laps:hi?1:99,riders:i,autopilot:!0}),fi.hide(),sa("attract")}async function ME(){for(await Im().catch(i=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",i)),Is.has("noreal")||(hi=await fetch("assets/v3/a18.json").then(i=>i.ok?i.json():null).catch(()=>null)),M0(),document.getElementById("boot").remove(),requestAnimationFrame(A0);;){let i=Is.get("seed");for(i||({seed:i}=await Ki.showTitle({dailySeed:Ac(),meta:co})),Ht.resume(),Yt=Tc(i),hi&&(Yt.stages=[{name:hi.title,subtitle:hi.subtitle,trackSeed:"REAL:"+hi.id,weather:"sicily",laps:1}]);!Wo(Yt);){let n=Yt.stages[Yt.stageIndex],s=$r(Yt),r=wc(Yt).map(a=>({...a,stats:a.isPlayer?s:$r({upgrades:[]})}));Ki.hideAll(),b0({trackSeed:n.trackSeed,weatherId:Is.get("weather")||n.weather,laps:n.laps,riders:r,autopilot:Is.has("auto")}),sa("intro"),Ht.setRain(tt.weather.rain||0),Is.has("auto")||await Ki.showStageIntro({stage:n,index:Yt.stageIndex+1,total:Yt.stages.length,standings:Jr(Yt),weather:tt.weather}),Ki.hideAll(),Ps.snap(Cf()),fi.show(),sa("race"),await new Promise(a=>{I0=a}),fi.hide(),Ht.setEngine(.1,0),Ht.setWind(0),Ht.setSkid(0);let o=tt.race.results();if(Mh(Yt,o),await Ki.showResults({results:o,standings:Jr(Yt),stage:n}),!Wo(Yt)){let a=vh(Yt),c=Yt.upgrades.map(u=>Zs.find(h=>h.id===u)).filter(Boolean),l=await Ki.showUpgradeChoice({choices:a,index:Yt.stageIndex,total:Yt.stages.length,owned:c});yh(Yt,l)}}let e=Jr(Yt),t=e.findIndex(n=>n.isPlayer)+1;co=Th(co,Yt)||co,Eh(co),sa("menu"),await Ki.showRunEnd({standings:e,playerPosition:t,run:Yt,meta:co}),Ki.hideAll(),Is.delete("seed"),M0()}}ME().catch(i=>{console.error(i);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(i?.stack||i)});
