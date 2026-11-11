var Tg=Object.defineProperty;var Eg=(i,e)=>{for(var t in e)Tg(i,t,{get:e[t],enumerable:!0})};var wg=0,cd=1,Ag=2;var Rl=1,Rg=2,Hi=3,Ei=0,Qt=1,Ct=2,tn=0,Br=1,Vr=2,ud=3,hd=4,Jo=5,Un=100,Cg=101,Pg=102,Ig=103,Lg=104,ro=200,_h=201,Dg=202,Ng=203,au=204,Vo=205,Cl=206,Ug=207,Pl=208,Fg=209,Og=210,Bg=211,zg=212,kg=213,Hg=214,lu=0,cu=1,uu=2,Gr=3,hu=4,fu=5,du=6,pu=7,yh=0,Vg=1,Gg=2,gs=0,Mh=1,Sh=2,bh=3,Qo=4,Wg=5,Th=6,Eh=7,fd="attached",Xg="detached",Pp=300,Wr=301,Xr=302,mu=303,gu=304,Il=306,Cn=1e3,Vi=1001,Go=1002,Kt=1003,wh=1004;var Fr=1005;var Fn=1006,Bo=1007;var ei=1008;var gi=1009,Ip=1010,Lp=1011,Wo=1012,Ah=1013,js=1014,pi=1015,un=1016,Rh=1017,Ch=1018,xs=1020,Dp=35902,Np=1021,Up=1022,On=1023,Fp=1024,Op=1025,zr=1026,vs=1027,Ph=1028,Ih=1029,Bp=1030,Lh=1031;var Dh=1033,el=33776,tl=33777,nl=33778,il=33779,xu=35840,vu=35841,_u=35842,yu=35843,Mu=36196,Su=37492,bu=37496,Tu=37808,Eu=37809,wu=37810,Au=37811,Ru=37812,Cu=37813,Pu=37814,Iu=37815,Lu=37816,Du=37817,Nu=37818,Uu=37819,Fu=37820,Ou=37821,sl=36492,Bu=36494,zu=36495,zp=36283,ku=36284,Hu=36285,Vu=36286;var qr=2300,Yr=2301,Rc=2302,dd=2400,pd=2401,md=2402,qg=2500;var kp=0,Ll=1,ea=2,Yg=3200,$g=3201;var Dl=0,Zg=1,ds="",Rt="srgb",Sn="srgb-linear",Nl="linear",Tt="srgb";var xr=7680;var gd=519,Kg=512,jg=513,Jg=514,Hp=515,Qg=516,ex=517,tx=518,nx=519,Gu=35044,Ai=35048;var xd="300 es",Gi=2e3,rl=2001,_s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=1234567,zo=Math.PI/180,$r=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function _n(i,e,t){return Math.max(e,Math.min(t,i))}function Nh(i,e){return(i%e+e)%e}function ix(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sx(i,e,t){return i!==e?(t-i)/(e-i):0}function ko(i,e,t){return(1-t)*i+t*e}function rx(i,e,t,n){return ko(i,e,1-Math.exp(-t*n))}function ox(i,e=1){return e-Math.abs(Nh(i,e*2)-e)}function ax(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ux(i,e){return i+Math.random()*(e-i)}function hx(i){return i*(.5-Math.random())}function fx(i){i!==void 0&&(vd=i);let e=vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dx(i){return i*zo}function px(i){return i*$r}function mx(i){return(i&i-1)===0&&i!==0}function gx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vp={DEG2RAD:zo,RAD2DEG:$r,generateUUID:mi,clamp:_n,euclideanModulo:Nh,mapLinear:ix,inverseLerp:sx,lerp:ko,damp:rx,pingpong:ox,smoothstep:ax,smootherstep:lx,randInt:cx,randFloat:ux,randFloatSpread:hx,seededRandom:fx,degToRad:dx,radToDeg:px,isPowerOfTwo:mx,ceilPowerOfTwo:gx,floorPowerOfTwo:xx,setQuaternionFromProperEuler:vx,normalize:wt,denormalize:di},$e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],y=s[4],v=s[7],E=s[2],T=s[5],_=s[8];return r[0]=o*x+a*S+l*E,r[3]=o*m+a*y+l*T,r[6]=o*p+a*v+l*_,r[1]=c*x+h*S+u*E,r[4]=c*m+h*y+u*T,r[7]=c*p+h*v+u*_,r[2]=f*x+d*S+g*E,r[5]=f*m+d*y+g*T,r[8]=f*p+d*v+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new ut;function Gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _x(){let i=Xo("canvas");return i.style.display="block",i}var _d={};function Fo(i){i in _d||(_d[i]=!0,console.warn(i))}function yx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Mx(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sx(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var pt={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(i.r=kr(i.r),i.g=kr(i.g),i.b=kr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ds?Nl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yd=[.64,.33,.3,.6,.15,.06],Md=[.2126,.7152,.0722],Sd=[.3127,.329],bd=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[Sn]:{primaries:yd,whitePoint:Sd,transfer:Nl,toXYZ:bd,fromXYZ:Td,luminanceCoefficients:Md,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:yd,whitePoint:Sd,transfer:Tt,toXYZ:bd,fromXYZ:Td,luminanceCoefficients:Md,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var vr,Wu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=Xo("canvas")),vr.width=e.width,vr.height=e.height;let n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bx=0,ol=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pc(s[o].image)):r.push(Pc(s[o]))}else r=Pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tx=0,ln=class i extends _s{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vi,s=Vi,r=Fn,o=ei,a=On,l=gi,c=i.DEFAULT_ANISOTROPY,h=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=mi(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Pp;ln.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(d+1)/2,E=(p+1)/2,T=(h+f)/4,_=(u+x)/4,w=(g+m)/4;return y>v&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=_/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=w/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=_/r,s=w/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xu=class extends _s{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Xu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},al=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qu=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let E=Math.sqrt(y),T=Math.atan2(E,p*S);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}let v=a*S;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new k,Ed=new nn,ti=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Ea.subVectors(this.max,Eo),_r.subVectors(e.a,Eo),yr.subVectors(e.b,Eo),Mr.subVectors(e.c,Eo),as.subVectors(yr,_r),ls.subVectors(Mr,yr),Gs.subVectors(_r,Mr);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Gs.z,Gs.y,as.z,0,-as.x,ls.z,0,-ls.x,Gs.z,0,-Gs.x,-as.y,as.x,0,-ls.y,ls.x,0,-Gs.y,Gs.x,0];return!Lc(t,_r,yr,Mr,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,_r,yr,Mr,Ea))?!1:(wa.crossVectors(as,ls),t=[wa.x,wa.y,wa.z],Lc(t,_r,yr,Mr,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ui=[new k,new k,new k,new k,new k,new k,new k,new k],ci=new k,Ta=new ti,_r=new k,yr=new k,Mr=new k,as=new k,ls=new k,Gs=new k,Eo=new k,Ea=new k,wa=new k,Ws=new k;function Lc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ws.fromArray(i,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),h=n.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ex=new ti,wo=new k,Dc=new k,Xn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ex.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);let t=wo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(Dc)),this.expandByPoint(wo.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new k,Nc=new k,Aa=new k,cs=new k,Uc=new k,Ra=new k,Fc=new k,Zr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Aa),a=cs.dot(this.direction),l=-cs.dot(Aa),c=cs.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nc).addScaledVector(Aa,f),d}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){Uc.subVectors(t,e),Ra.subVectors(n,e),Fc.crossVectors(Uc,Ra);let o=this.direction.dot(Fc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);let l=a*this.direction.dot(Ra.crossVectors(cs,Ra));if(l<0)return null;let c=a*this.direction.dot(Uc.cross(cs));if(c<0||l+c>o)return null;let h=-a*cs.dot(Fc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Ax)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),us.crossVectors(n,Gn),us.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),us.crossVectors(n,Gn)),us.normalize(),Ca.crossVectors(Gn,us),s[0]=us.x,s[4]=Ca.x,s[8]=Gn.x,s[1]=us.y,s[5]=Ca.y,s[9]=Gn.y,s[2]=us.z,s[6]=Ca.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],y=n[7],v=n[11],E=n[15],T=s[0],_=s[4],w=s[8],M=s[12],b=s[1],R=s[5],U=s[9],H=s[13],P=s[2],F=s[6],O=s[10],Y=s[14],G=s[3],J=s[7],re=s[11],me=s[15];return r[0]=o*T+a*b+l*P+c*G,r[4]=o*_+a*R+l*F+c*J,r[8]=o*w+a*U+l*O+c*re,r[12]=o*M+a*H+l*Y+c*me,r[1]=h*T+u*b+f*P+d*G,r[5]=h*_+u*R+f*F+d*J,r[9]=h*w+u*U+f*O+d*re,r[13]=h*M+u*H+f*Y+d*me,r[2]=g*T+x*b+m*P+p*G,r[6]=g*_+x*R+m*F+p*J,r[10]=g*w+x*U+m*O+p*re,r[14]=g*M+x*H+m*Y+p*me,r[3]=S*T+y*b+v*P+E*G,r[7]=S*_+y*R+v*F+E*J,r[11]=S*w+y*U+v*O+E*re,r[15]=S*M+y*H+v*Y+E*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,E=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,T=t*S+n*y+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/T;return e[0]=S*_,e[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*_,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*_,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*_,e[4]=y*_,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*_,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*_,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*_,e[8]=v*_,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*p-t*u*p)*_,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*_,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*_,e[12]=E*_,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*_,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*_,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*_,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,S=l*c,y=l*h,v=l*u,E=n.x,T=n.y,_=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+v)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+y)*_,s[9]=(m-S)*_,s[10]=(1-(f+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Sr.set(s[0],s[1],s[2]).length(),o=Sr.set(s[4],s[5],s[6]).length(),a=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ui.copy(this);let c=1/r,h=1/o,u=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===Gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===rl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,d=(n+s)*h,g,x;if(a===Gi)g=(o+r)*u,x=-2*u;else if(a===rl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new k,ui=new je,wx=new k(0,0,0),Ax=new k(1,1,1),us=new k,Ca=new k,Gn=new k,wd=new je,Ad=new nn,xi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var ll=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rx=0,Rd=new k,br=new nn,Oi=new je,Pa=new k,Ao=new k,Cx=new k,Px=new nn,Cd=new k(1,0,0),Pd=new k(0,1,0),Id=new k(0,0,1),Ld={type:"added"},Ix={type:"removed"},Tr={type:"childadded",child:null},Oc={type:"childremoved",child:null},Ft=class i extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new xi,n=new nn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ut}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Pd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Pd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ao,Pa,this.up):Oi.lookAt(Pa,Ao,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),br.setFromRotationMatrix(Oi),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ix),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new k(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=new k,Bi=new k,Bc=new k,zi=new k,Er=new k,wr=new k,Dd=new k,zc=new k,kc=new k,Hc=new k,Vc=new yt,Gc=new yt,Wc=new yt,ps=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Bi.subVectors(n,t),Bc.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(Bi),l=hi.dot(Bc),c=Bi.dot(Bi),h=Bi.dot(Bc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Vc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Gc,r.y),o.addScaledVector(Wc,r.z),o}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Bi.subVectors(e,t),hi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Er.subVectors(s,n),wr.subVectors(r,n),zc.subVectors(e,n);let l=Er.dot(zc),c=wr.dot(zc);if(l<=0&&c<=0)return t.copy(n);kc.subVectors(e,s);let h=Er.dot(kc),u=wr.dot(kc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Er,o);Hc.subVectors(e,r);let d=Er.dot(Hc),g=wr.dot(Hc);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(wr,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Dd.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Dd,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Er,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Nh(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xc(o,r,e+1/3),this.g=Xc(o,r,e),this.b=Xc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return pt.fromWorkingColorSpace(vn.copy(this),e),Math.round(_n(vn.r*255,0,255))*65536+Math.round(_n(vn.g*255,0,255))*256+Math.round(_n(vn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Rt){pt.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Ia);let n=ko(hs.h,Ia.h,t),s=ko(hs.s,Ia.s,t),r=ko(hs.l,Ia.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Re;Re.NAMES=Wp;var Lx=0,yn=class extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=mi(),this.name="",this.blending=Br,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=Vo,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==au&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends yn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new k,La=new $e,mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gu&&(e.usage=this.usage),e}};var cl=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ul=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dx=0,Qn=new je,qc=new Ft,Ar=new k,Wn=new ti,Ro=new ti,an=new k,gt=class i extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?ul:cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Wn.min,Ro.min),Wn.expandByPoint(an),an.addVectors(Wn.max,Ro.max),Wn.expandByPoint(an)):(Wn.expandByPoint(Ro.min),Wn.expandByPoint(Ro.max))}Wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),an.add(Ar)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new k,l[w]=new k;let c=new k,h=new k,u=new k,f=new $e,d=new $e,g=new $e,x=new k,m=new k;function p(w,M,b){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[w].add(x),a[M].add(x),a[b].add(x),l[w].add(m),l[M].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,M=S.length;w<M;++w){let b=S[w],R=b.start,U=b.count;for(let H=R,P=R+U;H<P;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let y=new k,v=new k,E=new k,T=new k;function _(w){E.fromBufferAttribute(s,w),T.copy(E);let M=a[w];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),v.crossVectors(T,M);let R=v.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,R)}for(let w=0,M=S.length;w<M;++w){let b=S[w],R=b.start,U=b.count;for(let H=R,P=R+U;H<P;H+=3)_(e.getX(H+0)),_(e.getX(H+1)),_(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new mt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nd=new je,Xs=new Zr,Da=new Xn,Ud=new k,Na=new k,Ua=new k,Fa=new k,Yc=new k,Oa=new k,Fd=new k,Ba=new k,ot=class extends Ft{constructor(e=new gt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Yc.fromBufferAttribute(u,e),o?Oa.addScaledVector(Yc,h):Oa.addScaledVector(Yc.sub(t),h))}t.add(Oa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Da.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Da,Ud)===null||Xs.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Nd.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Nd),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=y;v<E;v+=3){let T=a.getX(v),_=a.getX(v+1),w=a.getX(v+2);s=za(this,p,e,n,c,h,u,T,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=za(this,o,e,n,c,h,u,S,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=y;v<E;v+=3){let T=v,_=v+1,w=v+2;s=za(this,p,e,n,c,h,u,T,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=m,y=m+1,v=m+2;s=za(this,o,e,n,c,h,u,S,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Nx(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ei,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Na),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Fa);let h=Nx(i,e,t,n,Na,Ua,Fa,Fd);if(h){let u=new k;ps.getBarycoord(Fd,Na,Ua,Fa,u),s&&(h.uv=ps.getInterpolatedAttribute(s,a,l,c,u,new $e)),r&&(h.uv1=ps.getInterpolatedAttribute(r,a,l,c,u,new $e)),o&&(h.normal=ps.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};ps.getNormal(Na,Ua,Fa,f.normal),h.face=f,h.barycoord=u}return h}var cn=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(x,m,p,S,y,v,E,T,_,w,M){let b=v/_,R=E/w,U=v/2,H=E/2,P=T/2,F=_+1,O=w+1,Y=0,G=0,J=new k;for(let re=0;re<O;re++){let me=re*R-H;for(let _e=0;_e<F;_e++){let ce=_e*b-U;J[x]=ce*S,J[m]=me*y,J[p]=P,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(_e/_),u.push(1-re/w),Y+=1}}for(let re=0;re<w;re++)for(let me=0;me<_;me++){let _e=f+me+F*re,ce=f+me+F*(re+1),ie=f+(me+1)+F*(re+1),Q=f+(me+1)+F*re;l.push(_e,ce,Q),l.push(ce,ie,Q),G+=6}a.addGroup(d,G,M),d+=G,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Kr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=Kr(i[t]);for(let s in n)e[s]=n[s]}return e}function Ux(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var bn={clone:Kr,merge:Rn},Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends yn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},hl=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fs=new k,Od=new $e,Bd=new $e,Zt=class extends hl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Od,Bd),t.subVectors(Bd,Od)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rr=-90,Cr=1,Yu=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Rr,Cr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Rr,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fl=class extends ln{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$u=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:tn});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=Fn),new Yu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},$c=new k,Bx=new k,zx=new ut,fi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$c.subVectors(n,t).cross(Bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zx.getNormalMatrix(e),s=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new Xn,ka=new k,qo=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+S).normalize(),n[3].setComponents(l-o,f-h,m-g,v-S).normalize(),n[4].setComponents(l-a,f-u,m-x,v-y).normalize(),t===Gi)n[5].setComponents(l+a,f+u,m+x,v+y).normalize();else if(t===rl)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bn=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let S=p*f-o;for(let y=0;y<c;y++){let v=y*u-r;g.push(v,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let y=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),T=S+1+c*p;d.push(y,v,T),d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vx=`#ifdef USE_ALPHAHASH
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
#endif`,Gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,$x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ev=`#ifdef USE_IRIDESCENCE
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
#endif`,tv=`#ifdef USE_BUMPMAP
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uv=`#define PI 3.141592653589793
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
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fv=`vec3 transformedNormal = objectNormal;
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
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xv="gl_FragColor = linearToOutputTexel( gl_FragColor );",vv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lv=`uniform bool receiveShadow;
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
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bv=`PhysicalMaterial material;
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
#endif`,zv=`struct PhysicalMaterial {
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
}`,kv=`
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
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
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,__=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E_=`float getShadowMask() {
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
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
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
}`,Y_=`#if DEPTH_PACKING == 3200
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
}`,$_=`#define DISTANCE
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
}`,Z_=`#define DISTANCE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define LAMBERT
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
}`,sy=`#define MATCAP
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
}`,ry=`#define MATCAP
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
}`,oy=`#define NORMAL
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
}`,ay=`#define NORMAL
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
}`,ly=`#define PHONG
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
}`,cy=`#define PHONG
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
}`,uy=`#define STANDARD
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
}`,hy=`#define STANDARD
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
}`,fy=`#define TOON
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
}`,dy=`#define TOON
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
}`,py=`uniform float size;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,xy=`uniform vec3 color;
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
}`,vy=`uniform float rotation;
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
}`,_y=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Hx,alphahash_pars_fragment:Vx,alphamap_fragment:Gx,alphamap_pars_fragment:Wx,alphatest_fragment:Xx,alphatest_pars_fragment:qx,aomap_fragment:Yx,aomap_pars_fragment:$x,batching_pars_vertex:Zx,batching_vertex:Kx,begin_vertex:jx,beginnormal_vertex:Jx,bsdfs:Qx,iridescence_fragment:ev,bumpmap_pars_fragment:tv,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:rv,color_fragment:ov,color_pars_fragment:av,color_pars_vertex:lv,color_vertex:cv,common:uv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:fv,displacementmap_pars_vertex:dv,displacementmap_vertex:pv,emissivemap_fragment:mv,emissivemap_pars_fragment:gv,colorspace_fragment:xv,colorspace_pars_fragment:vv,envmap_fragment:_v,envmap_common_pars_fragment:yv,envmap_pars_fragment:Mv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Dv,envmap_vertex:bv,fog_vertex:Tv,fog_pars_vertex:Ev,fog_fragment:wv,fog_pars_fragment:Av,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Cv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Iv,lights_pars_begin:Lv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Uv,lights_phong_fragment:Fv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Bv,lights_physical_pars_fragment:zv,lights_fragment_begin:kv,lights_fragment_maps:Hv,lights_fragment_end:Vv,logdepthbuf_fragment:Gv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:qv,map_fragment:Yv,map_pars_fragment:$v,map_particle_fragment:Zv,map_particle_pars_fragment:Kv,metalnessmap_fragment:jv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:Qv,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:s_,normal_fragment_maps:r_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:d_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:x_,dithering_fragment:v_,dithering_pars_fragment:__,roughnessmap_fragment:y_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:b_,shadowmap_vertex:T_,shadowmask_pars_fragment:E_,skinbase_vertex:w_,skinning_pars_vertex:A_,skinning_vertex:R_,skinnormal_vertex:C_,specularmap_fragment:P_,specularmap_pars_fragment:I_,tonemapping_fragment:L_,tonemapping_pars_fragment:D_,transmission_fragment:N_,transmission_pars_fragment:U_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:B_,worldpos_vertex:z_,background_vert:k_,background_frag:H_,backgroundCube_vert:V_,backgroundCube_frag:G_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distanceRGBA_vert:$_,distanceRGBA_frag:Z_,equirect_vert:K_,equirect_frag:j_,linedashed_vert:J_,linedashed_frag:Q_,meshbasic_vert:ey,meshbasic_frag:ty,meshlambert_vert:ny,meshlambert_frag:iy,meshmatcap_vert:sy,meshmatcap_frag:ry,meshnormal_vert:oy,meshnormal_frag:ay,meshphong_vert:ly,meshphong_frag:cy,meshphysical_vert:uy,meshphysical_frag:hy,meshtoon_vert:fy,meshtoon_frag:dy,points_vert:py,points_frag:my,shadow_vert:gy,shadow_frag:xy,sprite_vert:vy,sprite_frag:_y},We={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Rn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Rn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Rn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Rn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Re(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Rn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Rn([We.points,We.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Rn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Rn([We.common,We.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Rn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Rn([We.sprite,We.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Rn([We.common,We.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Rn([We.lights,We.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Ha={r:0,b:0,g:0},Ys=new xi,yy=new je;function My(i,e,t,n,s,r,o){let a=new Re(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function x(S){let y=!1,v=g(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Il)?(h===void 0&&(h=new ot(new cn(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Kr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ys.copy(y.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(Ys)),h.material.toneMapped=pt.getTransfer(v.colorSpace)!==Tt,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ot(new Bn(2,2),new vt({name:"BackgroundMaterial",uniforms:Kr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==Tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Ha,Xp(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:m}}function Sy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,R,U,H,P){let F=!1,O=u(H,U,R);r!==O&&(r=O,c(r.object)),F=d(b,H,U,P),F&&g(b,H,U,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(b,R,U,H),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,R,U){let H=U.wireframe===!0,P=n[b.id];P===void 0&&(P={},n[b.id]=P);let F=P[R.id];F===void 0&&(F={},P[R.id]=F);let O=F[H];return O===void 0&&(O=f(l()),F[H]=O),O}function f(b){let R=[],U=[],H=[];for(let P=0;P<t;P++)R[P]=0,U[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:H,object:b,attributes:{},index:null}}function d(b,R,U,H){let P=r.attributes,F=R.attributes,O=0,Y=U.getAttributes();for(let G in Y)if(Y[G].location>=0){let re=P[G],me=F[G];if(me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function g(b,R,U,H){let P={},F=R.attributes,O=0,Y=U.getAttributes();for(let G in Y)if(Y[G].location>=0){let re=F[G];re===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));let me={};me.attribute=re,re&&re.data&&(me.data=re.data),P[G]=me,O++}r.attributes=P,r.attributesNum=O,r.index=H}function x(){let b=r.newAttributes;for(let R=0,U=b.length;R<U;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){let U=r.newAttributes,H=r.enabledAttributes,P=r.attributeDivisors;U[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),P[b]!==R&&(i.vertexAttribDivisor(b,R),P[b]=R)}function S(){let b=r.newAttributes,R=r.enabledAttributes;for(let U=0,H=R.length;U<H;U++)R[U]!==b[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function y(b,R,U,H,P,F,O){O===!0?i.vertexAttribIPointer(b,R,U,P,F):i.vertexAttribPointer(b,R,U,H,P,F)}function v(b,R,U,H){x();let P=H.attributes,F=U.getAttributes(),O=R.defaultAttributeValues;for(let Y in F){let G=F[Y];if(G.location>=0){let J=P[Y];if(J===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),J!==void 0){let re=J.normalized,me=J.itemSize,_e=e.get(J);if(_e===void 0)continue;let ce=_e.buffer,ie=_e.type,Q=_e.bytesPerElement,ee=ie===i.INT||ie===i.UNSIGNED_INT||J.gpuType===Ah;if(J.isInterleavedBufferAttribute){let L=J.data,B=L.stride,X=J.offset;if(L.isInstancedInterleavedBuffer){for(let $=0;$<G.locationSize;$++)p(G.location+$,L.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let $=0;$<G.locationSize;$++)y(G.location+$,me/G.locationSize,ie,re,B*Q,(X+me/G.locationSize*$)*Q,ee)}else{if(J.isInstancedBufferAttribute){for(let L=0;L<G.locationSize;L++)p(G.location+L,J.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let L=0;L<G.locationSize;L++)m(G.location+L);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let L=0;L<G.locationSize;L++)y(G.location+L,me/G.locationSize,ie,re,me*Q,me/G.locationSize*L*Q,ee)}}else if(O!==void 0){let re=O[Y];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(G.location,re);break;case 3:i.vertexAttrib3fv(G.location,re);break;case 4:i.vertexAttrib4fv(G.location,re);break;default:i.vertexAttrib1fv(G.location,re)}}}}S()}function E(){w();for(let b in n){let R=n[b];for(let U in R){let H=R[U];for(let P in H)h(H[P].object),delete H[P];delete R[U]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let R=n[b.id];for(let U in R){let H=R[U];for(let P in H)h(H[P].object),delete H[P];delete R[U]}delete n[b.id]}function _(b){for(let R in n){let U=n[R];if(U[b.id]===void 0)continue;let H=U[b.id];for(let P in H)h(H[P].object),delete H[P];delete U[b.id]}}function w(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function by(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ty(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==On&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let w=_===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==gi&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==pi&&!w)}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function Ey(i){let e=this,t=null,n=0,s=!1,r=!1,o=new fi,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,y=S*4,v=p.clippingState||null;l.value=v,v=h(g,f,y,d);for(let E=0;E!==y;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function wy(i){let e=new WeakMap;function t(o,a){return a===mu?o.mapping=Wr:a===gu&&(o.mapping=Xr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===mu||a===gu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $u(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ys=class extends hl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Or=4,zd=[.125,.215,.35,.446,.526,.582],Ks=20,Zc=new ys,kd=new Re,Kc=null,jc=0,Jc=0,Qc=!1,Zs=(1+Math.sqrt(5))/2,Pr=1/Zs,Hd=[new k(-Zs,Pr,0),new k(Zs,Pr,0),new k(-Pr,0,Zs),new k(Pr,0,Zs),new k(0,Zs,-Pr),new k(0,Zs,Pr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],jr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,jc,Jc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:un,format:On,colorSpace:Sn,depthBuffer:!1},s=Vd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ay(r)),this._blurMaterial=Ry(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Zc)}_sceneToCubeUV(e,t,n,s){let a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(kd),h.toneMapping=gs,h.autoClear=!1;let d=new Yt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new ot(new cn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(kd),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Va(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wr||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hd[(s-r-1)%Hd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ot(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ks-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ks;m>Ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);let p=[],S=0;for(let _=0;_<Ks;++_){let w=_/x,M=Math.exp(-w*w/2);p.push(M),_===0?S+=M:_<m&&(S+=2*M)}for(let _=0;_<p.length;_++)p[_]=p[_]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let v=this._sizeLods[s],E=3*v*(s>y-Or?s-y+Or:0),T=4*(this._cubeSize-v);Va(t,E,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Zc)}};function Ay(i){let e=[],t=[],n=[],s=i,r=i-Or+1+zd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Or?l=zd[o-i+Or-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){let _=T%3*2/3-1,w=T>2?0:-1,M=[_,w,0,_+2/3,w,0,_+2/3,w+1,0,_,w,0,_+2/3,w+1,0,_,w+1,0];S.set(M,x*g*T),y.set(f,m*g*T);let b=[T,T,T,T,T,T];v.set(b,p*g*T)}let E=new gt;E.setAttribute("position",new mt(S,x)),E.setAttribute("uv",new mt(y,m)),E.setAttribute("faceIndex",new mt(v,p)),e.push(E),s>Or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vd(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=Il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ry(i,e,t){let n=new Float32Array(Ks),s=new k(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Gd(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Wd(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function Cy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===mu||l===gu,h=l===Wr||l===Xr;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jr(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new jr(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Py(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Iy(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let S=d.array;x=d.version;for(let y=0,v=S.length;y<v;y+=3){let E=S[y+0],T=S[y+1],_=S[y+2];f.push(E,T,T,_,_,E)}}else if(g!==void 0){let S=g.array;x=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){let E=y+0,T=y+1,_=y+2;f.push(E,T,T,_,_,E)}}else return;let m=new(Gp(f)?ul:cl)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ly(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ny(i,e,t){let n=new WeakMap,s=new yt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*u),_=new al(T,v,E,u);_.type=pi,_.needsUpdate=!0;let w=y*4;for(let b=0;b<u;b++){let R=m[b],U=p[b],H=S[b],P=v*E*4*b;for(let F=0;F<R.count;F++){let O=F*w;d===!0&&(s.fromBufferAttribute(R,F),T[P+O+0]=s.x,T[P+O+1]=s.y,T[P+O+2]=s.z,T[P+O+3]=0),g===!0&&(s.fromBufferAttribute(U,F),T[P+O+4]=s.x,T[P+O+5]=s.y,T[P+O+6]=s.z,T[P+O+7]=0),x===!0&&(s.fromBufferAttribute(H,F),T[P+O+8]=s.x,T[P+O+9]=s.y,T[P+O+10]=s.z,T[P+O+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new $e(v,E)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Uy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Jr=class extends ln{constructor(e,t,n,s,r,o,a,l,c,h=zr){if(h!==zr&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zr&&(n=js),n===void 0&&h===vs&&(n=xs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yp=new ln,Xd=new Jr(1,1),$p=new al,Zp=new qu,Kp=new fl,qd=[],Yd=[],$d=new Float32Array(16),Zd=new Float32Array(9),Kd=new Float32Array(4);function oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qd[s];if(r===void 0&&(r=new Float32Array(s),qd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ul(i,e){let t=Yd[e];t===void 0&&(t=new Int32Array(e),Yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Kd.set(n),i.uniformMatrix2fv(this.addr,!1,Kd),rn(t,n)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Zd.set(n),i.uniformMatrix3fv(this.addr,!1,Zd),rn(t,n)}}function Vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;$d.set(n),i.uniformMatrix4fv(this.addr,!1,$d),rn(t,n)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xd.compareFunction=Hp,r=Xd):r=Yp,t.setTexture2D(e||r,s)}function Jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zp,s)}function Qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kp,s)}function e1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$p,s)}function t1(i){switch(i){case 5126:return Fy;case 35664:return Oy;case 35665:return By;case 35666:return zy;case 35674:return ky;case 35675:return Hy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return $y;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return e1}}function n1(i,e){i.uniform1fv(this.addr,e)}function i1(i,e){let t=oo(e,this.size,2);i.uniform2fv(this.addr,t)}function s1(i,e){let t=oo(e,this.size,3);i.uniform3fv(this.addr,t)}function r1(i,e){let t=oo(e,this.size,4);i.uniform4fv(this.addr,t)}function o1(i,e){let t=oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function a1(i,e){let t=oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function l1(i,e){let t=oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function c1(i,e){i.uniform1iv(this.addr,e)}function u1(i,e){i.uniform2iv(this.addr,e)}function h1(i,e){i.uniform3iv(this.addr,e)}function f1(i,e){i.uniform4iv(this.addr,e)}function d1(i,e){i.uniform1uiv(this.addr,e)}function p1(i,e){i.uniform2uiv(this.addr,e)}function m1(i,e){i.uniform3uiv(this.addr,e)}function g1(i,e){i.uniform4uiv(this.addr,e)}function x1(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yp,r[o])}function v1(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zp,r[o])}function _1(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kp,r[o])}function y1(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$p,r[o])}function M1(i){switch(i){case 5126:return n1;case 35664:return i1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return a1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return h1;case 35669:case 35673:return f1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return y1}}var Zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t1(t.type)}},Ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M1(t.type)}},ju=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},eu=/(\w+)(\])?(\[|\.)?/g;function jd(i,e){i.seq.push(e),i.map[e.id]=e}function S1(i,e,t){let n=i.name,s=n.length;for(eu.lastIndex=0;;){let r=eu.exec(n),o=eu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jd(t,c===void 0?new Zu(a,i,e):new Ku(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ju(a),jd(t,u)),t=u}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);S1(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Jd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var b1=37297,T1=0;function E1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Qd=new ut;function w1(i){pt._getMatrix(Qd,pt.workingColorSpace,i);let e=`mat3( ${Qd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Nl:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ep(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+E1(i.getShaderSource(e),o)}else return s}function A1(i,e){let t=w1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function R1(i,e){let t;switch(e){case Mh:t="Linear";break;case Sh:t="Reinhard";break;case bh:t="Cineon";break;case Qo:t="ACESFilmic";break;case Th:t="AgX";break;case Eh:t="Neutral";break;case Wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ga=new k;function C1(){pt.getLuminanceCoefficients(Ga);let i=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function I1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Oo(i){return i!==""}function tp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function np(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(D1,U1)}var N1=new Map;function U1(i,e){let t=ft[e];if(t===void 0){let n=N1.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ju(t)}var F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ip(i){return i.replace(F1,O1)}function O1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function B1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function z1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xr&&(e="ENVMAP_MODE_REFRACTION"),e}function H1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case Vg:e="ENVMAP_BLENDING_MIX";break;case Gg:e="ENVMAP_BLENDING_ADD";break}return e}function V1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function G1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=B1(t),c=z1(t),h=k1(t),u=H1(t),f=V1(t),d=P1(t),g=I1(r),x=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),p.length>0&&(p+=`
`)):(m=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),p=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?ft.tonemapping_pars_fragment:"",t.toneMapping!==gs?R1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,A1("linearToOutputTexel",t.outputColorSpace),C1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),o=Ju(o),o=tp(o,t),o=np(o,t),a=Ju(a),a=tp(a,t),a=np(a,t),o=ip(o),a=ip(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+o,v=S+p+a,E=Jd(s,s.VERTEX_SHADER,y),T=Jd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function _(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(E).trim(),P=s.getShaderInfoLog(T).trim(),F=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let Y=ep(s,E,"vertex"),G=ep(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Y+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||P==="")&&(O=!1);O&&(R.diagnostics={runnable:F,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:P,prefix:p}})}s.deleteShader(E),s.deleteShader(T),w=new Hr(s,x),M=L1(s,x)}let w;this.getUniforms=function(){return w===void 0&&_(this),w};let M;this.getAttributes=function(){return M===void 0&&_(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,b1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var W1=0,Qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eh(e),t.set(e,n)),n}},eh=class{constructor(e){this.id=W1++,this.code=e,this.usedTimes=0}};function X1(i,e,t,n,s,r,o){let a=new ll,l=new Qu,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,R,U,H){let P=U.fog,F=H.geometry,O=M.isMeshStandardMaterial?U.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),G=Y&&Y.mapping===Il?Y.image.height:null,J=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,me=re!==void 0?re.length:0,_e=0;F.morphAttributes.position!==void 0&&(_e=1),F.morphAttributes.normal!==void 0&&(_e=2),F.morphAttributes.color!==void 0&&(_e=3);let ce,ie,Q,ee;if(J){let Ge=Ti[J];ce=Ge.vertexShader,ie=Ge.fragmentShader}else ce=M.vertexShader,ie=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),ee=l.getFragmentShaderID(M);let L=i.getRenderTarget(),B=i.state.buffers.depth.getReversed(),X=H.isInstancedMesh===!0,$=H.isBatchedMesh===!0,de=!!M.map,we=!!M.matcap,Ae=!!Y,V=!!M.aoMap,Ve=!!M.lightMap,ze=!!M.bumpMap,Be=!!M.normalMap,Ie=!!M.displacementMap,qe=!!M.emissiveMap,Fe=!!M.metalnessMap,D=!!M.roughnessMap,A=M.anisotropy>0,j=M.clearcoat>0,xe=M.dispersion>0,ye=M.iridescence>0,he=M.sheen>0,Ce=M.transmission>0,Le=A&&!!M.anisotropyMap,Ne=j&&!!M.clearcoatMap,ke=j&&!!M.clearcoatNormalMap,Ee=j&&!!M.clearcoatRoughnessMap,Ue=ye&&!!M.iridescenceMap,se=ye&&!!M.iridescenceThicknessMap,Se=he&&!!M.sheenColorMap,ne=he&&!!M.sheenRoughnessMap,Me=!!M.specularMap,fe=!!M.specularColorMap,ge=!!M.specularIntensityMap,W=Ce&&!!M.transmissionMap,Te=Ce&&!!M.thicknessMap,C=!!M.gradientMap,N=!!M.alphaMap,z=M.alphaTest>0,Z=!!M.alphaHash,ae=!!M.extensions,Pe=gs;M.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let He={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:ie,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:$,batchingColor:$&&H._colorsTexture!==null,instancing:X,instancingColor:X&&H.instanceColor!==null,instancingMorph:X&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Sn,alphaToCoverage:!!M.alphaToCoverage,map:de,matcap:we,envMap:Ae,envMapMode:Ae&&Y.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:Ve,bumpMap:ze,normalMap:Be,displacementMap:f&&Ie,emissiveMap:qe,normalMapObjectSpace:Be&&M.normalMapType===Zg,normalMapTangentSpace:Be&&M.normalMapType===Dl,metalnessMap:Fe,roughnessMap:D,anisotropy:A,anisotropyMap:Le,clearcoat:j,clearcoatMap:Ne,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ee,dispersion:xe,iridescence:ye,iridescenceMap:Ue,iridescenceThicknessMap:se,sheen:he,sheenColorMap:Se,sheenRoughnessMap:ne,specularMap:Me,specularColorMap:fe,specularIntensityMap:ge,transmission:Ce,transmissionMap:W,thicknessMap:Te,gradientMap:C,opaque:M.transparent===!1&&M.blending===Br&&M.alphaToCoverage===!1,alphaMap:N,alphaTest:z,alphaHash:Z,combine:M.combine,mapUv:de&&x(M.map.channel),aoMapUv:V&&x(M.aoMap.channel),lightMapUv:Ve&&x(M.lightMap.channel),bumpMapUv:ze&&x(M.bumpMap.channel),normalMapUv:Be&&x(M.normalMap.channel),displacementMapUv:Ie&&x(M.displacementMap.channel),emissiveMapUv:qe&&x(M.emissiveMap.channel),metalnessMapUv:Fe&&x(M.metalnessMap.channel),roughnessMapUv:D&&x(M.roughnessMap.channel),anisotropyMapUv:Le&&x(M.anisotropyMap.channel),clearcoatMapUv:Ne&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ne&&x(M.sheenRoughnessMap.channel),specularMapUv:Me&&x(M.specularMap.channel),specularColorMapUv:fe&&x(M.specularColorMap.channel),specularIntensityMapUv:ge&&x(M.specularIntensityMap.channel),transmissionMapUv:W&&x(M.transmissionMap.channel),thicknessMapUv:Te&&x(M.thicknessMap.channel),alphaMapUv:N&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Be||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(de||N),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:B,skinning:H.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:_e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===Tt,decodeVideoTextureEmissive:qe&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ct,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&M.extensions.multiDraw===!0||$)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)b.push(R),b.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(b,M),y(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let b=g[M.type],R;if(b){let U=Ti[b];R=bn.clone(U.uniforms)}else R=M.uniforms;return R}function E(M,b){let R;for(let U=0,H=h.length;U<H;U++){let P=h[U];if(P.cacheKey===b){R=P,++R.usedTimes;break}}return R===void 0&&(R=new G1(i,b,M,r),h.push(R)),R}function T(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function _(M){l.remove(M)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:_,programs:h,dispose:w}}function q1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Y1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function op(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Y1),n.length>1&&n.sort(f||rp),s.length>1&&s.sort(f||rp)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function $1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new op,i.set(n,[o])):s>=r.length?(o=new op,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Z1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Re};break;case"SpotLight":t={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function K1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var j1=0;function J1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q1(i){let e=new Z1,t=K1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new je,o=new je;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,y=0,v=0,E=0,T=0,_=0;c.sort(J1);for(let M=0,b=c.length;M<b;M++){let R=c[M],U=R.color,H=R.intensity,P=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*H,u+=U.g*H,f+=U.b*H;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],H);_++}else if(R.isDirectionalLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=R.shadow.matrix,S++}n.directional[d]=O,d++}else if(R.isSpotLight){let O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(U).multiplyScalar(H),O.distance=P,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[x]=O;let Y=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,Y.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[x]=Y.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=F,v++}x++}else if(R.isRectAreaLight){let O=e.get(R);O.color.copy(U).multiplyScalar(H),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=O,m++}else if(R.isPointLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let Y=R.shadow,G=t.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=O,g++}else if(R.isHemisphereLight){let O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(H),O.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==S||w.numPointShadows!==y||w.numSpotShadows!==v||w.numSpotMaps!==E||w.numLightProbes!==_)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=_,w.directionalLength=d,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=S,w.numPointShadows=y,w.numSpotShadows=v,w.numSpotMaps=E,w.numLightProbes=_,n.version=j1++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let y=c[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ap(i){let e=new Q1(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ap(i),e.set(s,[a])):r>=o.length?(a=new ap(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var th=class extends yn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nh=class extends yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
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
}`;function iM(i,e,t){let n=new qo,s=new $e,r=new $e,o=new yt,a=new th({depthPacking:$g}),l=new nh,c={},h=t.maxTextureSize,u={[Ei]:Qt,[Qt]:Ei,[Ct]:Ct},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let p=this.type;this.render=function(T,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(tn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=p!==Hi&&this.type===Hi,P=p===Hi&&this.type!==Hi;for(let F=0,O=T.length;F<O;F++){let Y=T[F],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let J=G.getFrameExtents();if(s.multiply(J),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,G.mapSize.y=r.y)),G.map===null||H===!0||P===!0){let me=this.type!==Hi?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new qt(s.x,s.y,me),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let re=G.getViewportCount();for(let me=0;me<re;me++){let _e=G.getViewport(me);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),U.viewport(o),G.updateMatrices(Y,me),n=G.getFrustum(),v(_,w,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Hi&&S(G,w),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,R)};function S(T,_){let w=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,w,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,w,d,x,null)}function y(T,_,w,M){let b=null,R=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)b=R;else if(b=w.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let U=b.uuid,H=_.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let F=P[H];F===void 0&&(F=b.clone(),P[H]=F,_.addEventListener("dispose",E)),b=F}if(b.visible=_.visible,b.wireframe=_.wireframe,M===Hi?b.side=_.shadowSide!==null?_.shadowSide:_.side:b.side=_.shadowSide!==null?_.shadowSide:u[_.side],b.alphaMap=_.alphaMap,b.alphaTest=_.alphaTest,b.map=_.map,b.clipShadows=_.clipShadows,b.clippingPlanes=_.clippingPlanes,b.clipIntersection=_.clipIntersection,b.displacementMap=_.displacementMap,b.displacementScale=_.displacementScale,b.displacementBias=_.displacementBias,b.wireframeLinewidth=_.wireframeLinewidth,b.linewidth=_.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=i.properties.get(b);U.light=w}return b}function v(T,_,w,M,b){if(T.visible===!1)return;if(T.layers.test(_.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let H=e.update(T),P=T.material;if(Array.isArray(P)){let F=H.groups;for(let O=0,Y=F.length;O<Y;O++){let G=F[O],J=P[G.materialIndex];if(J&&J.visible){let re=y(T,J,M,b);T.onBeforeShadow(i,T,_,w,H,re,G),i.renderBufferDirect(w,null,H,re,T,G),T.onAfterShadow(i,T,_,w,H,re,G)}}}else if(P.visible){let F=y(T,P,M,b);T.onBeforeShadow(i,T,_,w,H,F,null),i.renderBufferDirect(w,null,H,F,T,null),T.onAfterShadow(i,T,_,w,H,F,null)}}let U=T.children;for(let H=0,P=U.length;H<P;H++)v(U[H],_,w,M,b)}function E(T){T.target.removeEventListener("dispose",E);for(let w in c){let M=c[w],b=T.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var sM={[lu]:cu,[uu]:du,[hu]:pu,[Gr]:fu,[cu]:lu,[du]:uu,[pu]:hu,[fu]:Gr};function rM(i,e){function t(){let W=!1,Te=new yt,C=null,N=new yt(0,0,0,0);return{setMask:function(z){C!==z&&!W&&(i.colorMask(z,z,z,z),C=z)},setLocked:function(z){W=z},setClear:function(z,Z,ae,Pe,He){He===!0&&(z*=Pe,Z*=Pe,ae*=Pe),Te.set(z,Z,ae,Pe),N.equals(Te)===!1&&(i.clearColor(z,Z,ae,Pe),N.copy(Te))},reset:function(){W=!1,C=null,N.set(-1,0,0,0)}}}function n(){let W=!1,Te=!1,C=null,N=null,z=null;return{setReversed:function(Z){if(Te!==Z){let ae=e.get("EXT_clip_control");Te?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let Pe=z;z=null,this.setClear(Pe)}Te=Z},getReversed:function(){return Te},setTest:function(Z){Z?L(i.DEPTH_TEST):B(i.DEPTH_TEST)},setMask:function(Z){C!==Z&&!W&&(i.depthMask(Z),C=Z)},setFunc:function(Z){if(Te&&(Z=sM[Z]),N!==Z){switch(Z){case lu:i.depthFunc(i.NEVER);break;case cu:i.depthFunc(i.ALWAYS);break;case uu:i.depthFunc(i.LESS);break;case Gr:i.depthFunc(i.LEQUAL);break;case hu:i.depthFunc(i.EQUAL);break;case fu:i.depthFunc(i.GEQUAL);break;case du:i.depthFunc(i.GREATER);break;case pu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}N=Z}},setLocked:function(Z){W=Z},setClear:function(Z){z!==Z&&(Te&&(Z=1-Z),i.clearDepth(Z),z=Z)},reset:function(){W=!1,C=null,N=null,z=null,Te=!1}}}function s(){let W=!1,Te=null,C=null,N=null,z=null,Z=null,ae=null,Pe=null,He=null;return{setTest:function(Ge){W||(Ge?L(i.STENCIL_TEST):B(i.STENCIL_TEST))},setMask:function(Ge){Te!==Ge&&!W&&(i.stencilMask(Ge),Te=Ge)},setFunc:function(Ge,q,oe){(C!==Ge||N!==q||z!==oe)&&(i.stencilFunc(Ge,q,oe),C=Ge,N=q,z=oe)},setOp:function(Ge,q,oe){(Z!==Ge||ae!==q||Pe!==oe)&&(i.stencilOp(Ge,q,oe),Z=Ge,ae=q,Pe=oe)},setLocked:function(Ge){W=Ge},setClear:function(Ge){He!==Ge&&(i.clearStencil(Ge),He=Ge)},reset:function(){W=!1,Te=null,C=null,N=null,z=null,Z=null,ae=null,Pe=null,He=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,y=null,v=null,E=null,T=null,_=new Re(0,0,0),w=0,M=!1,b=null,R=null,U=null,H=null,P=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=Y>=2);let J=null,re={},me=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),ce=new yt().fromArray(me),ie=new yt().fromArray(_e);function Q(W,Te,C,N){let z=new Uint8Array(4),Z=i.createTexture();i.bindTexture(W,Z),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<C;ae++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,N,0,i.RGBA,i.UNSIGNED_BYTE,z):i.texImage2D(Te+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,z);return Z}let ee={};ee[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(i.DEPTH_TEST),o.setFunc(Gr),ze(!1),Be(cd),L(i.CULL_FACE),V(tn);function L(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function B(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function X(W,Te){return u[W]!==Te?(i.bindFramebuffer(W,Te),u[W]=Te,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Te),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function $(W,Te){let C=d,N=!1;if(W){C=f.get(Te),C===void 0&&(C=[],f.set(Te,C));let z=W.textures;if(C.length!==z.length||C[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ae=z.length;Z<ae;Z++)C[Z]=i.COLOR_ATTACHMENT0+Z;C.length=z.length,N=!0}}else C[0]!==i.BACK&&(C[0]=i.BACK,N=!0);N&&i.drawBuffers(C)}function de(W){return g!==W?(i.useProgram(W),g=W,!0):!1}let we={[Un]:i.FUNC_ADD,[Cg]:i.FUNC_SUBTRACT,[Pg]:i.FUNC_REVERSE_SUBTRACT};we[Ig]=i.MIN,we[Lg]=i.MAX;let Ae={[ro]:i.ZERO,[_h]:i.ONE,[Dg]:i.SRC_COLOR,[au]:i.SRC_ALPHA,[Og]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Ng]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[Fg]:i.ONE_MINUS_DST_COLOR,[Ug]:i.ONE_MINUS_DST_ALPHA,[Bg]:i.CONSTANT_COLOR,[zg]:i.ONE_MINUS_CONSTANT_COLOR,[kg]:i.CONSTANT_ALPHA,[Hg]:i.ONE_MINUS_CONSTANT_ALPHA};function V(W,Te,C,N,z,Z,ae,Pe,He,Ge){if(W===tn){x===!0&&(B(i.BLEND),x=!1);return}if(x===!1&&(L(i.BLEND),x=!0),W!==Jo){if(W!==m||Ge!==M){if((p!==Un||v!==Un)&&(i.blendEquation(i.FUNC_ADD),p=Un,v=Un),Ge)switch(W){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.ONE,i.ONE);break;case ud:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ud:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}S=null,y=null,E=null,T=null,_.set(0,0,0),w=0,m=W,M=Ge}return}z=z||Te,Z=Z||C,ae=ae||N,(Te!==p||z!==v)&&(i.blendEquationSeparate(we[Te],we[z]),p=Te,v=z),(C!==S||N!==y||Z!==E||ae!==T)&&(i.blendFuncSeparate(Ae[C],Ae[N],Ae[Z],Ae[ae]),S=C,y=N,E=Z,T=ae),(Pe.equals(_)===!1||He!==w)&&(i.blendColor(Pe.r,Pe.g,Pe.b,He),_.copy(Pe),w=He),m=W,M=!1}function Ve(W,Te){W.side===Ct?B(i.CULL_FACE):L(i.CULL_FACE);let C=W.side===Qt;Te&&(C=!C),ze(C),W.blending===Br&&W.transparent===!1?V(tn):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let N=W.stencilWrite;a.setTest(N),N&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):B(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(W){b!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),b=W)}function Be(W){W!==wg?(L(i.CULL_FACE),W!==R&&(W===cd?i.cullFace(i.BACK):W===Ag?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):B(i.CULL_FACE),R=W}function Ie(W){W!==U&&(O&&i.lineWidth(W),U=W)}function qe(W,Te,C){W?(L(i.POLYGON_OFFSET_FILL),(H!==Te||P!==C)&&(i.polygonOffset(Te,C),H=Te,P=C)):B(i.POLYGON_OFFSET_FILL)}function Fe(W){W?L(i.SCISSOR_TEST):B(i.SCISSOR_TEST)}function D(W){W===void 0&&(W=i.TEXTURE0+F-1),J!==W&&(i.activeTexture(W),J=W)}function A(W,Te,C){C===void 0&&(J===null?C=i.TEXTURE0+F-1:C=J);let N=re[C];N===void 0&&(N={type:void 0,texture:void 0},re[C]=N),(N.type!==W||N.texture!==Te)&&(J!==C&&(i.activeTexture(C),J=C),i.bindTexture(W,Te||ee[W]),N.type=W,N.texture=Te)}function j(){let W=re[J];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(W){ce.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function ne(W){ie.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ie.copy(W))}function Me(W,Te){let C=c.get(Te);C===void 0&&(C=new WeakMap,c.set(Te,C));let N=C.get(W);N===void 0&&(N=i.getUniformBlockIndex(Te,W.name),C.set(W,N))}function fe(W,Te){let N=c.get(Te).get(W);l.get(Te)!==N&&(i.uniformBlockBinding(Te,N,W.__bindingPointIndex),l.set(Te,N))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,re={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,y=null,v=null,E=null,T=null,_=new Re(0,0,0),w=0,M=!1,b=null,R=null,U=null,H=null,P=null,ce.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:B,bindFramebuffer:X,drawBuffers:$,useProgram:de,setBlending:V,setMaterial:Ve,setFlipSided:ze,setCullFace:Be,setLineWidth:Ie,setPolygonOffset:qe,setScissorTest:Fe,activeTexture:D,bindTexture:A,unbindTexture:j,compressedTexImage2D:xe,compressedTexImage3D:ye,texImage2D:Ue,texImage3D:se,updateUBOMapping:Me,uniformBlockBinding:fe,texStorage2D:ke,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:Ce,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ne,scissor:Se,viewport:ne,reset:ge}}function lp(i,e,t,n){let s=oM(n);switch(t){case Np:return i*e;case Fp:return i*e;case Op:return i*e*2;case Ph:return i*e/s.components*s.byteLength;case Ih:return i*e/s.components*s.byteLength;case Bp:return i*e*2/s.components*s.byteLength;case Lh:return i*e*2/s.components*s.byteLength;case Up:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Dh:return i*e*4/s.components*s.byteLength;case el:case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vu:case yu:return Math.max(i,16)*Math.max(e,8)/4;case xu:case _u:return Math.max(i,8)*Math.max(e,8)/2;case Mu:case Su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sl:case Bu:case zu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zp:case ku:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hu:case Vu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oM(i){switch(i){case gi:case Ip:return{byteLength:1,components:1};case Wo:case Lp:case un:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case js:case Ah:case pi:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function aM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return d?new OffscreenCanvas(D,A):Xo("canvas")}function x(D,A,j){let xe=1,ye=Fe(D);if((ye.width>j||ye.height>j)&&(xe=j/Math.max(ye.width,ye.height)),xe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let he=Math.floor(xe*ye.width),Ce=Math.floor(xe*ye.height);u===void 0&&(u=g(he,Ce));let Le=A?g(he,Ce):u;return Le.width=he,Le.height=Ce,Le.getContext("2d").drawImage(D,0,0,he,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+Ce+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,A,j,xe,ye=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=A;if(A===i.RED&&(j===i.FLOAT&&(he=i.R32F),j===i.HALF_FLOAT&&(he=i.R16F),j===i.UNSIGNED_BYTE&&(he=i.R8)),A===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.R8UI),j===i.UNSIGNED_SHORT&&(he=i.R16UI),j===i.UNSIGNED_INT&&(he=i.R32UI),j===i.BYTE&&(he=i.R8I),j===i.SHORT&&(he=i.R16I),j===i.INT&&(he=i.R32I)),A===i.RG&&(j===i.FLOAT&&(he=i.RG32F),j===i.HALF_FLOAT&&(he=i.RG16F),j===i.UNSIGNED_BYTE&&(he=i.RG8)),A===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.RG8UI),j===i.UNSIGNED_SHORT&&(he=i.RG16UI),j===i.UNSIGNED_INT&&(he=i.RG32UI),j===i.BYTE&&(he=i.RG8I),j===i.SHORT&&(he=i.RG16I),j===i.INT&&(he=i.RG32I)),A===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.RGB8UI),j===i.UNSIGNED_SHORT&&(he=i.RGB16UI),j===i.UNSIGNED_INT&&(he=i.RGB32UI),j===i.BYTE&&(he=i.RGB8I),j===i.SHORT&&(he=i.RGB16I),j===i.INT&&(he=i.RGB32I)),A===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),j===i.UNSIGNED_INT&&(he=i.RGBA32UI),j===i.BYTE&&(he=i.RGBA8I),j===i.SHORT&&(he=i.RGBA16I),j===i.INT&&(he=i.RGBA32I)),A===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),A===i.RGBA){let Ce=ye?Nl:pt.getTransfer(xe);j===i.FLOAT&&(he=i.RGBA32F),j===i.HALF_FLOAT&&(he=i.RGBA16F),j===i.UNSIGNED_BYTE&&(he=Ce===Tt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function v(D,A){let j;return D?A===null||A===js||A===xs?j=i.DEPTH24_STENCIL8:A===pi?j=i.DEPTH32F_STENCIL8:A===Wo&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===js||A===xs?j=i.DEPTH_COMPONENT24:A===pi?j=i.DEPTH_COMPONENT32F:A===Wo&&(j=i.DEPTH_COMPONENT16),j}function E(D,A){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Kt&&D.minFilter!==Fn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){let A=D.target;A.removeEventListener("dispose",T),w(A),A.isVideoTexture&&h.delete(A)}function _(D){let A=D.target;A.removeEventListener("dispose",_),b(A)}function w(D){let A=n.get(D);if(A.__webglInit===void 0)return;let j=D.source,xe=f.get(j);if(xe){let ye=xe[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&M(D),Object.keys(xe).length===0&&f.delete(j)}n.remove(D)}function M(D){let A=n.get(D);i.deleteTexture(A.__webglTexture);let j=D.source,xe=f.get(j);delete xe[A.__cacheKey],o.memory.textures--}function b(D){let A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let ye=0;ye<A.__webglFramebuffer[xe].length;ye++)i.deleteFramebuffer(A.__webglFramebuffer[xe][ye]);else i.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)i.deleteFramebuffer(A.__webglFramebuffer[xe]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let j=D.textures;for(let xe=0,ye=j.length;xe<ye;xe++){let he=n.get(j[xe]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(j[xe])}n.remove(D)}let R=0;function U(){R=0}function H(){let D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function P(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function F(D,A){let j=n.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){let xe=D.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(j,D,A);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+A)}function O(D,A){let j=n.get(D);if(D.version>0&&j.__version!==D.version){ie(j,D,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+A)}function Y(D,A){let j=n.get(D);if(D.version>0&&j.__version!==D.version){ie(j,D,A);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+A)}function G(D,A){let j=n.get(D);if(D.version>0&&j.__version!==D.version){Q(j,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+A)}let J={[Cn]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},re={[Kt]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},me={[Kg]:i.NEVER,[nx]:i.ALWAYS,[jg]:i.LESS,[Hp]:i.LEQUAL,[Jg]:i.EQUAL,[tx]:i.GEQUAL,[Qg]:i.GREATER,[ex]:i.NOTEQUAL};function _e(D,A){if(A.type===pi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Fn||A.magFilter===Bo||A.magFilter===Fr||A.magFilter===ei||A.minFilter===Fn||A.minFilter===Bo||A.minFilter===Fr||A.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,J[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,J[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,J[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,re[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Kt||A.minFilter!==Fr&&A.minFilter!==ei||A.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ce(D,A){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));let xe=A.source,ye=f.get(xe);ye===void 0&&(ye={},f.set(xe,ye));let he=P(A);if(he!==D.__cacheKey){ye[he]===void 0&&(ye[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ye[he].usedTimes++;let Ce=ye[D.__cacheKey];Ce!==void 0&&(ye[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(A)),D.__cacheKey=he,D.__webglTexture=ye[he].texture}return j}function ie(D,A,j){let xe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=i.TEXTURE_3D);let ye=ce(D,A),he=A.source;t.bindTexture(xe,D.__webglTexture,i.TEXTURE0+j);let Ce=n.get(he);if(he.version!==Ce.__version||ye===!0){t.activeTexture(i.TEXTURE0+j);let Le=pt.getPrimaries(pt.workingColorSpace),Ne=A.colorSpace===ds?null:pt.getPrimaries(A.colorSpace),ke=A.colorSpace===ds||Le===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ee=x(A.image,!1,s.maxTextureSize);Ee=qe(A,Ee);let Ue=r.convert(A.format,A.colorSpace),se=r.convert(A.type),Se=y(A.internalFormat,Ue,se,A.colorSpace,A.isVideoTexture);_e(xe,A);let ne,Me=A.mipmaps,fe=A.isVideoTexture!==!0,ge=Ce.__version===void 0||ye===!0,W=he.dataReady,Te=E(A,Ee);if(A.isDepthTexture)Se=v(A.format===vs,A.type),ge&&(fe?t.texStorage2D(i.TEXTURE_2D,1,Se,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,Se,Ee.width,Ee.height,0,Ue,se,null));else if(A.isDataTexture)if(Me.length>0){fe&&ge&&t.texStorage2D(i.TEXTURE_2D,Te,Se,Me[0].width,Me[0].height);for(let C=0,N=Me.length;C<N;C++)ne=Me[C],fe?W&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,se,ne.data):t.texImage2D(i.TEXTURE_2D,C,Se,ne.width,ne.height,0,Ue,se,ne.data);A.generateMipmaps=!1}else fe?(ge&&t.texStorage2D(i.TEXTURE_2D,Te,Se,Ee.width,Ee.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,se,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,Se,Ee.width,Ee.height,0,Ue,se,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){fe&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Se,Me[0].width,Me[0].height,Ee.depth);for(let C=0,N=Me.length;C<N;C++)if(ne=Me[C],A.format!==On)if(Ue!==null)if(fe){if(W)if(A.layerUpdates.size>0){let z=lp(ne.width,ne.height,A.format,A.type);for(let Z of A.layerUpdates){let ae=ne.data.subarray(Z*z/ne.data.BYTES_PER_ELEMENT,(Z+1)*z/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,Z,ne.width,ne.height,1,Ue,ae)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ne.width,ne.height,Ee.depth,Ue,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,Se,ne.width,ne.height,Ee.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ne.width,ne.height,Ee.depth,Ue,se,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,C,Se,ne.width,ne.height,Ee.depth,0,Ue,se,ne.data)}else{fe&&ge&&t.texStorage2D(i.TEXTURE_2D,Te,Se,Me[0].width,Me[0].height);for(let C=0,N=Me.length;C<N;C++)ne=Me[C],A.format!==On?Ue!==null?fe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,C,Se,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?W&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,ne.width,ne.height,Ue,se,ne.data):t.texImage2D(i.TEXTURE_2D,C,Se,ne.width,ne.height,0,Ue,se,ne.data)}else if(A.isDataArrayTexture)if(fe){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Se,Ee.width,Ee.height,Ee.depth),W)if(A.layerUpdates.size>0){let C=lp(Ee.width,Ee.height,A.format,A.type);for(let N of A.layerUpdates){let z=Ee.data.subarray(N*C/Ee.data.BYTES_PER_ELEMENT,(N+1)*C/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,N,Ee.width,Ee.height,1,Ue,se,z)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,se,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,Ee.width,Ee.height,Ee.depth,0,Ue,se,Ee.data);else if(A.isData3DTexture)fe?(ge&&t.texStorage3D(i.TEXTURE_3D,Te,Se,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,se,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,Se,Ee.width,Ee.height,Ee.depth,0,Ue,se,Ee.data);else if(A.isFramebufferTexture){if(ge)if(fe)t.texStorage2D(i.TEXTURE_2D,Te,Se,Ee.width,Ee.height);else{let C=Ee.width,N=Ee.height;for(let z=0;z<Te;z++)t.texImage2D(i.TEXTURE_2D,z,Se,C,N,0,Ue,se,null),C>>=1,N>>=1}}else if(Me.length>0){if(fe&&ge){let C=Fe(Me[0]);t.texStorage2D(i.TEXTURE_2D,Te,Se,C.width,C.height)}for(let C=0,N=Me.length;C<N;C++)ne=Me[C],fe?W&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,Ue,se,ne):t.texImage2D(i.TEXTURE_2D,C,Se,Ue,se,ne);A.generateMipmaps=!1}else if(fe){if(ge){let C=Fe(Ee);t.texStorage2D(i.TEXTURE_2D,Te,Se,C.width,C.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,se,Ee)}else t.texImage2D(i.TEXTURE_2D,0,Se,Ue,se,Ee);m(A)&&p(xe),Ce.__version=he.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Q(D,A,j){if(A.image.length!==6)return;let xe=ce(D,A),ye=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+j);let he=n.get(ye);if(ye.version!==he.__version||xe===!0){t.activeTexture(i.TEXTURE0+j);let Ce=pt.getPrimaries(pt.workingColorSpace),Le=A.colorSpace===ds?null:pt.getPrimaries(A.colorSpace),Ne=A.colorSpace===ds||Ce===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let N=0;N<6;N++)!ke&&!Ee?Ue[N]=x(A.image[N],!0,s.maxCubemapSize):Ue[N]=Ee?A.image[N].image:A.image[N],Ue[N]=qe(A,Ue[N]);let se=Ue[0],Se=r.convert(A.format,A.colorSpace),ne=r.convert(A.type),Me=y(A.internalFormat,Se,ne,A.colorSpace),fe=A.isVideoTexture!==!0,ge=he.__version===void 0||xe===!0,W=ye.dataReady,Te=E(A,se);_e(i.TEXTURE_CUBE_MAP,A);let C;if(ke){fe&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Me,se.width,se.height);for(let N=0;N<6;N++){C=Ue[N].mipmaps;for(let z=0;z<C.length;z++){let Z=C[z];A.format!==On?Se!==null?fe?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,0,0,Z.width,Z.height,Se,Z.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,Me,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,0,0,Z.width,Z.height,Se,ne,Z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z,Me,Z.width,Z.height,0,Se,ne,Z.data)}}}else{if(C=A.mipmaps,fe&&ge){C.length>0&&Te++;let N=Fe(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Me,N.width,N.height)}for(let N=0;N<6;N++)if(Ee){fe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ue[N].width,Ue[N].height,Se,ne,Ue[N].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Me,Ue[N].width,Ue[N].height,0,Se,ne,Ue[N].data);for(let z=0;z<C.length;z++){let ae=C[z].image[N].image;fe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,0,0,ae.width,ae.height,Se,ne,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,Me,ae.width,ae.height,0,Se,ne,ae.data)}}else{fe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Se,ne,Ue[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Me,Se,ne,Ue[N]);for(let z=0;z<C.length;z++){let Z=C[z];fe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,0,0,Se,ne,Z.image[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,z+1,Me,Se,ne,Z.image[N])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),he.__version=ye.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ee(D,A,j,xe,ye,he){let Ce=r.convert(j.format,j.colorSpace),Le=r.convert(j.type),Ne=y(j.internalFormat,Ce,Le,j.colorSpace),ke=n.get(A),Ee=n.get(j);if(Ee.__renderTarget=A,!ke.__hasExternalTextures){let Ue=Math.max(1,A.width>>he),se=Math.max(1,A.height>>he);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,he,Ne,Ue,se,A.depth,0,Ce,Le,null):t.texImage2D(ye,he,Ne,Ue,se,0,Ce,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Be(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ye,Ee.__webglTexture,0,ze(A)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,ye,Ee.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function L(D,A,j){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){let xe=A.depthTexture,ye=xe&&xe.isDepthTexture?xe.type:null,he=v(A.stencilBuffer,ye),Ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=ze(A);Be(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,he,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,he,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,D)}else{let xe=A.textures;for(let ye=0;ye<xe.length;ye++){let he=xe[ye],Ce=r.convert(he.format,he.colorSpace),Le=r.convert(he.type),Ne=y(he.internalFormat,Ce,Le,he.colorSpace),ke=ze(A);j&&Be(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ne,A.width,A.height):Be(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Ne,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let xe=n.get(A.depthTexture);xe.__renderTarget=A,(!xe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let ye=xe.__webglTexture,he=ze(A);if(A.depthTexture.format===zr)Be(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(A.depthTexture.format===vs)Be(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function X(D){let A=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let xe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){let ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",ye)};xe.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=xe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");B(A.__webglFramebuffer,D)}else if(j){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=i.createRenderbuffer(),L(A.__webglDepthbuffer[xe],D,!1);else{let ye=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,he)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),L(A.__webglDepthbuffer,D,!1);else{let xe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $(D,A,j){let xe=n.get(D);A!==void 0&&ee(xe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&X(D)}function de(D){let A=D.texture,j=n.get(D),xe=n.get(A);D.addEventListener("dispose",_);let ye=D.textures,he=D.isWebGLCubeRenderTarget===!0,Ce=ye.length>1;if(Ce||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=A.version,o.memory.textures++),he){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)j.__webglFramebuffer[Le][Ne]=i.createFramebuffer()}else j.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<A.mipmaps.length;Le++)j.__webglFramebuffer[Le]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let Le=0,Ne=ye.length;Le<Ne;Le++){let ke=n.get(ye[Le]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Be(D)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){let Ne=ye[Le];j.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Le]);let ke=r.convert(Ne.format,Ne.colorSpace),Ee=r.convert(Ne.type),Ue=y(Ne.internalFormat,ke,Ee,Ne.colorSpace,D.isXRRenderTarget===!0),se=ze(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Ue,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,j.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),L(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),_e(i.TEXTURE_CUBE_MAP,A);for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee(j.__webglFramebuffer[Le][Ne],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ne);else ee(j.__webglFramebuffer[Le],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Le=0,Ne=ye.length;Le<Ne;Le++){let ke=ye[Le],Ee=n.get(ke);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),_e(i.TEXTURE_2D,ke),ee(j.__webglFramebuffer,D,ke,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),m(ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,xe.__webglTexture),_e(Le,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee(j.__webglFramebuffer[Ne],D,A,i.COLOR_ATTACHMENT0,Le,Ne);else ee(j.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,Le,0);m(A)&&p(Le),t.unbindTexture()}D.depthBuffer&&X(D)}function we(D){let A=D.textures;for(let j=0,xe=A.length;j<xe;j++){let ye=A[j];if(m(ye)){let he=S(D),Ce=n.get(ye).__webglTexture;t.bindTexture(he,Ce),p(he),t.unbindTexture()}}}let Ae=[],V=[];function Ve(D){if(D.samples>0){if(Be(D)===!1){let A=D.textures,j=D.width,xe=D.height,ye=i.COLOR_BUFFER_BIT,he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(D),Le=A.length>1;if(Le)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=n.get(A[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,j,xe,0,0,j,xe,ye,i.NEAREST),l===!0&&(Ae.length=0,V.length=0,Ae.push(i.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ae.push(he),V.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let ke=n.get(A[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ze(D){return Math.min(s.maxSamples,D.samples)}function Be(D){let A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ie(D){let A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function qe(D,A){let j=D.colorSpace,xe=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Sn&&j!==ds&&(pt.getTransfer(j)===Tt?(xe!==On||ye!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=$,this.setupRenderTarget=de,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Be}function lM(i,e){function t(n,s=ds){let r,o=pt.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===Rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ip)return i.BYTE;if(n===Lp)return i.SHORT;if(n===Wo)return i.UNSIGNED_SHORT;if(n===Ah)return i.INT;if(n===js)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Np)return i.ALPHA;if(n===Up)return i.RGB;if(n===On)return i.RGBA;if(n===Fp)return i.LUMINANCE;if(n===Op)return i.LUMINANCE_ALPHA;if(n===zr)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===Ih)return i.RED_INTEGER;if(n===Bp)return i.RG;if(n===Lh)return i.RG_INTEGER;if(n===Dh)return i.RGBA_INTEGER;if(n===el||n===tl||n===nl||n===il)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xu||n===vu||n===_u||n===yu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mu||n===Su||n===bu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mu||n===Su)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tu||n===Eu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu||n===Fu||n===Ou)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Au)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Du)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ou)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===Bu||n===zu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zp||n===ku||n===Hu||n===Vu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ih=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},cM={type:"move"},Ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},uM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vt({vertexShader:uM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends _s{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new sh,m=t.getContextAttributes(),p=null,S=null,y=[],v=[],E=new $e,T=null,_=new Zt;_.viewport=new yt;let w=new Zt;w.viewport=new yt;let M=[_,w],b=new ih,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Q=y[ie];return Q===void 0&&(Q=new Ho,y[ie]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(ie){let Q=y[ie];return Q===void 0&&(Q=new Ho,y[ie]=Q),Q.getGripSpace()},this.getHand=function(ie){let Q=y[ie];return Q===void 0&&(Q=new Ho,y[ie]=Q),Q.getHandSpace()};function H(ie){let Q=v.indexOf(ie.inputSource);if(Q===-1)return;let ee=y[Q];ee!==void 0&&(ee.update(ie.inputSource,ie.frame,c||o),ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",F);for(let ie=0;ie<y.length;ie++){let Q=v[ie];Q!==null&&(v[ie]=null,y[ie].disconnect(Q))}R=null,U=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,S=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",P),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new qt(d.framebufferWidth,d.framebufferHeight,{format:On,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ee=null,L=null;m.depth&&(L=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?vs:zr,ee=m.stencil?xs:js);let B={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(B),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:On,type:gi,depthTexture:new Jr(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(ie){for(let Q=0;Q<ie.removed.length;Q++){let ee=ie.removed[Q],L=v.indexOf(ee);L>=0&&(v[L]=null,y[L].disconnect(ee))}for(let Q=0;Q<ie.added.length;Q++){let ee=ie.added[Q],L=v.indexOf(ee);if(L===-1){for(let X=0;X<y.length;X++)if(X>=v.length){v.push(ee),L=X;break}else if(v[X]===null){v[X]=ee,L=X;break}if(L===-1)break}let B=y[L];B&&B.connect(ee)}}let O=new k,Y=new k;function G(ie,Q,ee){O.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);let L=O.distanceTo(Y),B=Q.projectionMatrix.elements,X=ee.projectionMatrix.elements,$=B[14]/(B[10]-1),de=B[14]/(B[10]+1),we=(B[9]+1)/B[5],Ae=(B[9]-1)/B[5],V=(B[8]-1)/B[0],Ve=(X[8]+1)/X[0],ze=$*V,Be=$*Ve,Ie=L/(-V+Ve),qe=Ie*-V;if(Q.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(qe),ie.translateZ(Ie),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),B[10]===-1)ie.projectionMatrix.copy(Q.projectionMatrix),ie.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Fe=$+Ie,D=de+Ie,A=ze-qe,j=Be+(L-qe),xe=we*de/D*Fe,ye=Ae*de/D*Fe;ie.projectionMatrix.makePerspective(A,j,xe,ye,Fe,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function J(ie,Q){Q===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Q.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let Q=ie.near,ee=ie.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ee=x.depthFar)),b.near=w.near=_.near=Q,b.far=w.far=_.far=ee,(R!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,U=b.far),_.layers.mask=ie.layers.mask|2,w.layers.mask=ie.layers.mask|4,b.layers.mask=_.layers.mask|w.layers.mask;let L=ie.parent,B=b.cameras;J(b,L);for(let X=0;X<B.length;X++)J(B[X],L);B.length===2?G(b,_,w):b.projectionMatrix.copy(_.projectionMatrix),re(ie,b,L)};function re(ie,Q,ee){ee===null?ie.matrix.copy(Q.matrixWorld):(ie.matrix.copy(ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Q.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Q.projectionMatrix),ie.projectionMatrixInverse.copy(Q.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=$r*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let me=null;function _e(ie,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let L=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,L=!0);for(let X=0;X<ee.length;X++){let $=ee[X],de=null;if(d!==null)de=d.getViewport($);else{let Ae=u.getViewSubImage(f,$);de=Ae.viewport,X===0&&(e.setRenderTargetTextures(S,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(S))}let we=M[X];we===void 0&&(we=new Zt,we.layers.enable(X),we.viewport=new yt,M[X]=we),we.matrix.fromArray($.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray($.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(de.x,de.y,de.width,de.height),X===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),L===!0&&b.cameras.push(we)}let B=s.enabledFeatures;if(B&&B.includes("depth-sensing")){let X=u.getDepthInformation(ee[0]);X&&X.isValid&&X.texture&&x.init(e,X,s.renderState)}}for(let ee=0;ee<y.length;ee++){let L=v[ee],B=y[ee];L!==null&&B!==void 0&&B.update(L,Q,c||o)}me&&me(ie,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ce=new qp;ce.setAnimationLoop(_e),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}},$s=new xi,fM=new je;function dM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,$s.copy(v),$s.x*=-1,$s.y*=-1,$s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),m.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler($s)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",m));let E=y.program;n.updateUBOMapping(S,E);let T=e.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let y=u();S.__bindingPointIndex=y;let v=i.createBuffer(),E=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let y=s[S.id],v=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,_=v.length;T<_;T++){let w=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,b=w.length;M<b;M++){let R=w[M];if(d(R,T,M,E)===!0){let U=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],P=0;for(let F=0;F<H.length;F++){let O=H[F],Y=x(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,U+P,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,v,E){let T=S.value,_=y+"_"+v;if(E[_]===void 0)return typeof T=="number"||typeof T=="boolean"?E[_]=T:E[_]=T.clone(),!0;{let w=E[_];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return E[_]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function g(S){let y=S.uniforms,v=0,E=16;for(let _=0,w=y.length;_<w;_++){let M=Array.isArray(y[_])?y[_]:[y[_]];for(let b=0,R=M.length;b<R;b++){let U=M[b],H=Array.isArray(U.value)?U.value:[U.value];for(let P=0,F=H.length;P<F;P++){let O=H[P],Y=x(O),G=v%E,J=G%Y.boundary,re=G+J;v+=J,re!==0&&E-re<Y.storage&&(v+=E-re),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}let T=v%E;return T>0&&(v+=E-T),S.__size=v,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var dl=class{constructor(e={}){let{canvas:t=_x(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=gs,this.toneMappingExposure=1;let v=this,E=!1,T=0,_=0,w=null,M=-1,b=null,R=new yt,U=new yt,H=null,P=new Re(0),F=0,O=t.width,Y=t.height,G=1,J=null,re=null,me=new yt(0,0,O,Y),_e=new yt(0,0,O,Y),ce=!1,ie=new qo,Q=!1,ee=!1,L=new je,B=new je,X=new k,$=new yt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ae(){return w===null?G:1}let V=n;function Ve(I,K){return t.getContext(I,K)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Z,!1),V===null){let K="webgl2";if(V=Ve(K,I),V===null)throw Ve(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ze,Be,Ie,qe,Fe,D,A,j,xe,ye,he,Ce,Le,Ne,ke,Ee,Ue,se,Se,ne,Me,fe,ge,W;function Te(){ze=new Py(V),ze.init(),fe=new lM(V,ze),Be=new Ty(V,ze,e,fe),Ie=new rM(V,ze),Be.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),qe=new Dy(V),Fe=new q1,D=new aM(V,ze,Ie,Fe,Be,fe,qe),A=new wy(v),j=new Cy(v),xe=new kx(V),ge=new Sy(V,xe),ye=new Iy(V,xe,qe,ge),he=new Uy(V,ye,xe,qe),Se=new Ny(V,Be,D),Ee=new Ey(Fe),Ce=new X1(v,A,j,ze,Be,ge,Ee),Le=new dM(v,Fe),Ne=new $1,ke=new eM(ze),se=new My(v,A,j,Ie,he,d,l),Ue=new iM(v,he,Be),W=new pM(V,qe,Be,Ie),ne=new by(V,ze,qe),Me=new Ly(V,ze,qe),qe.programs=Ce.programs,v.capabilities=Be,v.extensions=ze,v.properties=Fe,v.renderLists=Ne,v.shadowMap=Ue,v.state=Ie,v.info=qe}Te();let C=new rh(v,V);this.xr=C,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let I=ze.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ze.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(O,Y,!1))},this.getSize=function(I){return I.set(O,Y)},this.setSize=function(I,K,le=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,Y=K,t.width=Math.floor(I*G),t.height=Math.floor(K*G),le===!0&&(t.style.width=I+"px",t.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(O*G,Y*G).floor()},this.setDrawingBufferSize=function(I,K,le){O=I,Y=K,G=le,t.width=Math.floor(I*le),t.height=Math.floor(K*le),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(me)},this.setViewport=function(I,K,le,ue){I.isVector4?me.set(I.x,I.y,I.z,I.w):me.set(I,K,le,ue),Ie.viewport(R.copy(me).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(_e)},this.setScissor=function(I,K,le,ue){I.isVector4?_e.set(I.x,I.y,I.z,I.w):_e.set(I,K,le,ue),Ie.scissor(U.copy(_e).multiplyScalar(G).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(I){Ie.setScissorTest(ce=I)},this.setOpaqueSort=function(I){J=I},this.setTransparentSort=function(I){re=I},this.getClearColor=function(I){return I.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(I=!0,K=!0,le=!0){let ue=0;if(I){let te=!1;if(w!==null){let Oe=w.texture.format;te=Oe===Dh||Oe===Lh||Oe===Ih}if(te){let Oe=w.texture.type,Ye=Oe===gi||Oe===js||Oe===Wo||Oe===xs||Oe===Rh||Oe===Ch,Je=se.getClearColor(),Qe=se.getClearAlpha(),at=Je.r,ct=Je.g,et=Je.b;Ye?(g[0]=at,g[1]=ct,g[2]=et,g[3]=Qe,V.clearBufferuiv(V.COLOR,0,g)):(x[0]=at,x[1]=ct,x[2]=et,x[3]=Qe,V.clearBufferiv(V.COLOR,0,x))}else ue|=V.COLOR_BUFFER_BIT}K&&(ue|=V.DEPTH_BUFFER_BIT),le&&(ue|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ne.dispose(),ke.dispose(),Fe.dispose(),A.dispose(),j.dispose(),he.dispose(),ge.dispose(),W.dispose(),Ce.dispose(),C.dispose(),C.removeEventListener("sessionstart",pe),C.removeEventListener("sessionend",ve),be.stop()};function N(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let I=qe.autoReset,K=Ue.enabled,le=Ue.autoUpdate,ue=Ue.needsUpdate,te=Ue.type;Te(),qe.autoReset=I,Ue.enabled=K,Ue.autoUpdate=le,Ue.needsUpdate=ue,Ue.type=te}function Z(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ae(I){let K=I.target;K.removeEventListener("dispose",ae),Pe(K)}function Pe(I){He(I),Fe.remove(I)}function He(I){let K=Fe.get(I).programs;K!==void 0&&(K.forEach(function(le){Ce.releaseProgram(le)}),I.isShaderMaterial&&Ce.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,le,ue,te,Oe){K===null&&(K=de);let Ye=te.isMesh&&te.matrixWorld.determinant()<0,Je=Vt(I,K,le,ue,te);Ie.setMaterial(ue,Ye);let Qe=le.index,at=1;if(ue.wireframe===!0){if(Qe=ye.getWireframeAttribute(le),Qe===void 0)return;at=2}let ct=le.drawRange,et=le.attributes.position,Mt=ct.start*at,Nt=(ct.start+ct.count)*at;Oe!==null&&(Mt=Math.max(Mt,Oe.start*at),Nt=Math.min(Nt,(Oe.start+Oe.count)*at)),Qe!==null?(Mt=Math.max(Mt,0),Nt=Math.min(Nt,Qe.count)):et!=null&&(Mt=Math.max(Mt,0),Nt=Math.min(Nt,et.count));let Ot=Nt-Mt;if(Ot<0||Ot===1/0)return;ge.setup(te,ue,Je,le,Qe);let Nn,St=ne;if(Qe!==null&&(Nn=xe.get(Qe),St=Me,St.setIndex(Nn)),te.isMesh)ue.wireframe===!0?(Ie.setLineWidth(ue.wireframeLinewidth*Ae()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(te.isLine){let nt=ue.linewidth;nt===void 0&&(nt=1),Ie.setLineWidth(nt*Ae()),te.isLineSegments?St.setMode(V.LINES):te.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else te.isPoints?St.setMode(V.POINTS):te.isSprite&&St.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)St.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))St.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let nt=te._multiDrawStarts,Ni=te._multiDrawCounts,bt=te._multiDrawCount,li=Qe?xe.get(Qe).bytesPerElement:1,gr=Fe.get(ue).currentProgram.getUniforms();for(let Vn=0;Vn<bt;Vn++)gr.setValue(V,"_gl_DrawID",Vn),St.render(nt[Vn]/li,Ni[Vn])}else if(te.isInstancedMesh)St.renderInstances(Mt,Ot,te.count);else if(le.isInstancedBufferGeometry){let nt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ni=Math.min(le.instanceCount,nt);St.renderInstances(Mt,Ot,Ni)}else St.render(Mt,Ot)};function Ge(I,K,le){I.transparent===!0&&I.side===Ct&&I.forceSinglePass===!1?(I.side=Qt,I.needsUpdate=!0,Et(I,K,le),I.side=Ei,I.needsUpdate=!0,Et(I,K,le),I.side=Ct):Et(I,K,le)}this.compile=function(I,K,le=null){le===null&&(le=I),p=ke.get(le),p.init(K),y.push(p),le.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),I!==le&&I.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();let ue=new Set;return I.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let Ye=0;Ye<Oe.length;Ye++){let Je=Oe[Ye];Ge(Je,le,te),ue.add(Je)}else Ge(Oe,le,te),ue.add(Oe)}),y.pop(),p=null,ue},this.compileAsync=function(I,K,le=null){let ue=this.compile(I,K,le);return new Promise(te=>{function Oe(){if(ue.forEach(function(Ye){Fe.get(Ye).currentProgram.isReady()&&ue.delete(Ye)}),ue.size===0){te(I);return}setTimeout(Oe,10)}ze.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let q=null;function oe(I){q&&q(I)}function pe(){be.stop()}function ve(){be.start()}let be=new qp;be.setAnimationLoop(oe),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(I){q=I,C.setAnimationLoop(I),I===null?be.stop():be.start()},C.addEventListener("sessionstart",pe),C.addEventListener("sessionend",ve),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(K),K=C.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,K,w),p=ke.get(I,y.length),p.init(K),y.push(p),B.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ie.setFromProjectionMatrix(B),ee=this.localClippingEnabled,Q=Ee.init(this.clippingPlanes,ee),m=Ne.get(I,S.length),m.init(),S.push(m),C.enabled===!0&&C.isPresenting===!0){let Oe=v.xr.getDepthSensingMesh();Oe!==null&&De(Oe,K,-1/0,v.sortObjects)}De(I,K,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,re),we=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,we&&se.addToRenderList(m,I),this.info.render.frame++,Q===!0&&Ee.beginShadows();let le=p.state.shadowsArray;Ue.render(le,I,K),Q===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=m.opaque,te=m.transmissive;if(p.setupLights(),K.isArrayCamera){let Oe=K.cameras;if(te.length>0)for(let Ye=0,Je=Oe.length;Ye<Je;Ye++){let Qe=Oe[Ye];Ke(ue,te,I,Qe)}we&&se.render(I);for(let Ye=0,Je=Oe.length;Ye<Je;Ye++){let Qe=Oe[Ye];Ze(m,I,Qe,Qe.viewport)}}else te.length>0&&Ke(ue,te,I,K),we&&se.render(I),Ze(m,I,K);w!==null&&(D.updateMultisampleRenderTarget(w),D.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(v,I,K),ge.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&Ee.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function De(I,K,le,ue){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)le=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ie.intersectsSprite(I)){ue&&$.setFromMatrixPosition(I.matrixWorld).applyMatrix4(B);let Ye=he.update(I),Je=I.material;Je.visible&&m.push(I,Ye,Je,le,$.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ie.intersectsObject(I))){let Ye=he.update(I),Je=I.material;if(ue&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),$.copy(I.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),$.copy(Ye.boundingSphere.center)),$.applyMatrix4(I.matrixWorld).applyMatrix4(B)),Array.isArray(Je)){let Qe=Ye.groups;for(let at=0,ct=Qe.length;at<ct;at++){let et=Qe[at],Mt=Je[et.materialIndex];Mt&&Mt.visible&&m.push(I,Ye,Mt,le,$.z,et)}}else Je.visible&&m.push(I,Ye,Je,le,$.z,null)}}let Oe=I.children;for(let Ye=0,Je=Oe.length;Ye<Je;Ye++)De(Oe[Ye],K,le,ue)}function Ze(I,K,le,ue){let te=I.opaque,Oe=I.transmissive,Ye=I.transparent;p.setupLightsView(le),Q===!0&&Ee.setGlobalState(v.clippingPlanes,le),ue&&Ie.viewport(R.copy(ue)),te.length>0&&it(te,K,le),Oe.length>0&&it(Oe,K,le),Ye.length>0&&it(Ye,K,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Ke(I,K,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new qt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?un:gi,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Oe=p.state.transmissionRenderTarget[ue.id],Ye=ue.viewport||R;Oe.setSize(Ye.z,Ye.w);let Je=v.getRenderTarget();v.setRenderTarget(Oe),v.getClearColor(P),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),we&&se.render(le);let Qe=v.toneMapping;v.toneMapping=gs;let at=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),Q===!0&&Ee.setGlobalState(v.clippingPlanes,ue),it(I,le,ue),D.updateMultisampleRenderTarget(Oe),D.updateRenderTargetMipmap(Oe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let et=0,Mt=K.length;et<Mt;et++){let Nt=K[et],Ot=Nt.object,Nn=Nt.geometry,St=Nt.material,nt=Nt.group;if(St.side===Ct&&Ot.layers.test(ue.layers)){let Ni=St.side;St.side=Qt,St.needsUpdate=!0,rt(Ot,le,ue,Nn,St,nt),St.side=Ni,St.needsUpdate=!0,ct=!0}}ct===!0&&(D.updateMultisampleRenderTarget(Oe),D.updateRenderTargetMipmap(Oe))}v.setRenderTarget(Je),v.setClearColor(P,F),at!==void 0&&(ue.viewport=at),v.toneMapping=Qe}function it(I,K,le){let ue=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Oe=I.length;te<Oe;te++){let Ye=I[te],Je=Ye.object,Qe=Ye.geometry,at=ue===null?Ye.material:ue,ct=Ye.group;Je.layers.test(le.layers)&&rt(Je,K,le,Qe,at,ct)}}function rt(I,K,le,ue,te,Oe){I.onBeforeRender(v,K,le,ue,te,Oe),I.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),te.onBeforeRender(v,K,le,ue,I,Oe),te.transparent===!0&&te.side===Ct&&te.forceSinglePass===!1?(te.side=Qt,te.needsUpdate=!0,v.renderBufferDirect(le,K,ue,te,I,Oe),te.side=Ei,te.needsUpdate=!0,v.renderBufferDirect(le,K,ue,te,I,Oe),te.side=Ct):v.renderBufferDirect(le,K,ue,te,I,Oe),I.onAfterRender(v,K,le,ue,te,Oe)}function Et(I,K,le){K.isScene!==!0&&(K=de);let ue=Fe.get(I),te=p.state.lights,Oe=p.state.shadowsArray,Ye=te.state.version,Je=Ce.getParameters(I,te.state,Oe,K,le),Qe=Ce.getProgramCacheKey(Je),at=ue.programs;ue.environment=I.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(I.isMeshStandardMaterial?j:A).get(I.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,at===void 0&&(I.addEventListener("dispose",ae),at=new Map,ue.programs=at);let ct=at.get(Qe);if(ct!==void 0){if(ue.currentProgram===ct&&ue.lightsStateVersion===Ye)return Dt(I,Je),ct}else Je.uniforms=Ce.getUniforms(I),I.onBeforeCompile(Je,v),ct=Ce.acquireProgram(Je,Qe),at.set(Qe,ct),ue.uniforms=Je.uniforms;let et=ue.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(et.clippingPlanes=Ee.uniform),Dt(I,Je),ue.needsLights=mn(I),ue.lightsStateVersion=Ye,ue.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMap.value=te.state.directionalShadowMap,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotShadowMap.value=te.state.spotShadowMap,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMap.value=te.state.pointShadowMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),ue.currentProgram=ct,ue.uniformsList=null,ct}function Ht(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=Hr.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function Dt(I,K){let le=Fe.get(I);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Vt(I,K,le,ue,te){K.isScene!==!0&&(K=de),D.resetTextureUnits();let Oe=K.fog,Ye=ue.isMeshStandardMaterial?K.environment:null,Je=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Sn,Qe=(ue.isMeshStandardMaterial?j:A).get(ue.envMap||Ye),at=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ct=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),et=!!le.morphAttributes.position,Mt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color,Ot=gs;ue.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=v.toneMapping);let Nn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,St=Nn!==void 0?Nn.length:0,nt=Fe.get(ue),Ni=p.state.lights;if(Q===!0&&(ee===!0||I!==b)){let Jn=I===b&&ue.id===M;Ee.setState(ue,I,Jn)}let bt=!1;ue.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ni.state.version||nt.outputColorSpace!==Je||te.isBatchedMesh&&nt.batching===!1||!te.isBatchedMesh&&nt.batching===!0||te.isBatchedMesh&&nt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&nt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&nt.instancing===!1||!te.isInstancedMesh&&nt.instancing===!0||te.isSkinnedMesh&&nt.skinning===!1||!te.isSkinnedMesh&&nt.skinning===!0||te.isInstancedMesh&&nt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&nt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&nt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&nt.instancingMorph===!1&&te.morphTexture!==null||nt.envMap!==Qe||ue.fog===!0&&nt.fog!==Oe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==at||nt.vertexTangents!==ct||nt.morphTargets!==et||nt.morphNormals!==Mt||nt.morphColors!==Nt||nt.toneMapping!==Ot||nt.morphTargetsCount!==St)&&(bt=!0):(bt=!0,nt.__version=ue.version);let li=nt.currentProgram;bt===!0&&(li=Et(ue,K,te));let gr=!1,Vn=!1,bo=!1,Bt=li.getUniforms(),bi=nt.uniforms;if(Ie.useProgram(li.program)&&(gr=!0,Vn=!0,bo=!0),ue.id!==M&&(M=ue.id,Vn=!0),gr||b!==I){Ie.buffers.depth.getReversed()?(L.copy(I.projectionMatrix),Mx(L),Sx(L),Bt.setValue(V,"projectionMatrix",L)):Bt.setValue(V,"projectionMatrix",I.projectionMatrix),Bt.setValue(V,"viewMatrix",I.matrixWorldInverse);let rs=Bt.map.cameraPosition;rs!==void 0&&rs.setValue(V,X.setFromMatrixPosition(I.matrixWorld)),Be.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,Vn=!0,bo=!0)}if(te.isSkinnedMesh){Bt.setOptional(V,te,"bindMatrix"),Bt.setOptional(V,te,"bindMatrixInverse");let Jn=te.skeleton;Jn&&(Jn.boneTexture===null&&Jn.computeBoneTexture(),Bt.setValue(V,"boneTexture",Jn.boneTexture,D))}te.isBatchedMesh&&(Bt.setOptional(V,te,"batchingTexture"),Bt.setValue(V,"batchingTexture",te._matricesTexture,D),Bt.setOptional(V,te,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",te._indirectTexture,D),Bt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",te._colorsTexture,D));let To=le.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0)&&Se.update(te,le,li),(Vn||nt.receiveShadow!==te.receiveShadow)&&(nt.receiveShadow=te.receiveShadow,Bt.setValue(V,"receiveShadow",te.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(bi.envMap.value=Qe,bi.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(bi.envMapIntensity.value=K.environmentIntensity),Vn&&(Bt.setValue(V,"toneMappingExposure",v.toneMappingExposure),nt.needsLights&&Xt(bi,bo),Oe&&ue.fog===!0&&Le.refreshFogUniforms(bi,Oe),Le.refreshMaterialUniforms(bi,ue,G,Y,p.state.transmissionRenderTarget[I.id]),Hr.upload(V,Ht(nt),bi,D)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Hr.upload(V,Ht(nt),bi,D),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Bt.setValue(V,"center",te.center),Bt.setValue(V,"modelViewMatrix",te.modelViewMatrix),Bt.setValue(V,"normalMatrix",te.normalMatrix),Bt.setValue(V,"modelMatrix",te.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let Jn=ue.uniformsGroups;for(let rs=0,os=Jn.length;rs<os;rs++){let ld=Jn[rs];W.update(ld,li),W.bind(ld,li)}}return li}function Xt(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function mn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,K,le){Fe.get(I.texture).__webglTexture=K,Fe.get(I.depthTexture).__webglTexture=le;let ue=Fe.get(I);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,K){let le=Fe.get(I);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,le=0){w=I,T=K,_=le;let ue=!0,te=null,Oe=!1,Ye=!1;if(I){let Qe=Fe.get(I);if(Qe.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(V.FRAMEBUFFER,null),ue=!1;else if(Qe.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if(Qe.__hasExternalTextures)D.rebindTextures(I,Fe.get(I.texture).__webglTexture,Fe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let et=I.depthTexture;if(Qe.__boundDepthTexture!==et){if(et!==null&&Fe.has(et)&&(I.width!==et.image.width||I.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}let at=I.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ye=!0);let ct=Fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[K])?te=ct[K][le]:te=ct[K],Oe=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?te=Fe.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?te=ct[le]:te=ct,R.copy(I.viewport),U.copy(I.scissor),H=I.scissorTest}else R.copy(me).multiplyScalar(G).floor(),U.copy(_e).multiplyScalar(G).floor(),H=ce;if(Ie.bindFramebuffer(V.FRAMEBUFFER,te)&&ue&&Ie.drawBuffers(I,te),Ie.viewport(R),Ie.scissor(U),Ie.setScissorTest(H),Oe){let Qe=Fe.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qe.__webglTexture,le)}else if(Ye){let Qe=Fe.get(I.texture),at=K||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qe.__webglTexture,le||0,at)}M=-1},this.readRenderTargetPixels=function(I,K,le,ue,te,Oe,Ye){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ye!==void 0&&(Je=Je[Ye]),Je){Ie.bindFramebuffer(V.FRAMEBUFFER,Je);try{let Qe=I.texture,at=Qe.format,ct=Qe.type;if(!Be.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-ue&&le>=0&&le<=I.height-te&&V.readPixels(K,le,ue,te,fe.convert(at),fe.convert(ct),Oe)}finally{let Qe=w!==null?Fe.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(I,K,le,ue,te,Oe,Ye){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ye!==void 0&&(Je=Je[Ye]),Je){let Qe=I.texture,at=Qe.format,ct=Qe.type;if(!Be.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=I.width-ue&&le>=0&&le<=I.height-te){Ie.bindFramebuffer(V.FRAMEBUFFER,Je);let et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),V.readPixels(K,le,ue,te,fe.convert(at),fe.convert(ct),0);let Mt=w!==null?Fe.get(w).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,Mt);let Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await yx(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.deleteBuffer(et),V.deleteSync(Nt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,K=null,le=0){I.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,I=arguments[1]);let ue=Math.pow(2,-le),te=Math.floor(I.image.width*ue),Oe=Math.floor(I.image.height*ue),Ye=K!==null?K.x:0,Je=K!==null?K.y:0;D.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Ye,Je,te,Oe),Ie.unbindTexture()},this.copyTextureToTexture=function(I,K,le=null,ue=null,te=0){I.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,I=arguments[1],K=arguments[2],te=arguments[3]||0,le=null);let Oe,Ye,Je,Qe,at,ct,et,Mt,Nt,Ot=I.isCompressedTexture?I.mipmaps[te]:I.image;le!==null?(Oe=le.max.x-le.min.x,Ye=le.max.y-le.min.y,Je=le.isBox3?le.max.z-le.min.z:1,Qe=le.min.x,at=le.min.y,ct=le.isBox3?le.min.z:0):(Oe=Ot.width,Ye=Ot.height,Je=Ot.depth||1,Qe=0,at=0,ct=0),ue!==null?(et=ue.x,Mt=ue.y,Nt=ue.z):(et=0,Mt=0,Nt=0);let Nn=fe.convert(K.format),St=fe.convert(K.type),nt;K.isData3DTexture?(D.setTexture3D(K,0),nt=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),nt=V.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),nt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);let Ni=V.getParameter(V.UNPACK_ROW_LENGTH),bt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),li=V.getParameter(V.UNPACK_SKIP_PIXELS),gr=V.getParameter(V.UNPACK_SKIP_ROWS),Vn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ot.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,at),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);let bo=I.isDataArrayTexture||I.isData3DTexture,Bt=K.isDataArrayTexture||K.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let bi=Fe.get(I),To=Fe.get(K),Jn=Fe.get(bi.__renderTarget),rs=Fe.get(To.__renderTarget);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,Jn.__webglFramebuffer),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let os=0;os<Je;os++)bo&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(I).__webglTexture,te,ct+os),I.isDepthTexture?(Bt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(K).__webglTexture,te,Nt+os),V.blitFramebuffer(Qe,at,Oe,Ye,et,Mt,Oe,Ye,V.DEPTH_BUFFER_BIT,V.NEAREST)):Bt?V.copyTexSubImage3D(nt,te,et,Mt,Nt+os,Qe,at,Oe,Ye):V.copyTexSubImage2D(nt,te,et,Mt,Nt+os,Qe,at,Oe,Ye);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Bt?I.isDataTexture||I.isData3DTexture?V.texSubImage3D(nt,te,et,Mt,Nt,Oe,Ye,Je,Nn,St,Ot.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,te,et,Mt,Nt,Oe,Ye,Je,Nn,Ot.data):V.texSubImage3D(nt,te,et,Mt,Nt,Oe,Ye,Je,Nn,St,Ot):I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,te,et,Mt,Oe,Ye,Nn,St,Ot.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,te,et,Mt,Ot.width,Ot.height,Nn,Ot.data):V.texSubImage2D(V.TEXTURE_2D,te,et,Mt,Oe,Ye,Nn,St,Ot);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ni),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,li),V.pixelStorei(V.UNPACK_SKIP_ROWS,gr),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Vn),te===0&&K.generateMipmaps&&V.generateMipmap(nt),Ie.unbindTexture()},this.copyTextureToTexture3D=function(I,K,le=null,ue=null,te=0){return I.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,I=arguments[2],K=arguments[3],te=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,K,le,ue,te)},this.initRenderTarget=function(I){Fe.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),Ie.unbindTexture()},this.resetState=function(){T=0,_=0,w=null,Ie.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},Qr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yo=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gu,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new k,Js=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$o=class extends yn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ir,Co=new k,Lr=new k,Dr=new k,Nr=new $e,Po=new $e,jp=new je,Wa=new k,Io=new k,Xa=new k,cp=new $e,tu=new $e,up=new $e,pl=class extends Ft{constructor(e=new $o){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eo(t,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new Js(n,3,0,!1)),Ir.setAttribute("uv",new Js(n,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),jp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Dr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;qa(Wa.set(-.5,-.5,0),Dr,o,Lr,s,r),qa(Io.set(.5,-.5,0),Dr,o,Lr,s,r),qa(Xa.set(.5,.5,0),Dr,o,Lr,s,r),cp.set(0,0),tu.set(1,0),up.set(1,1);let a=e.ray.intersectTriangle(Wa,Io,Xa,!1,Co);if(a===null&&(qa(Io.set(-.5,.5,0),Dr,o,Lr,s,r),tu.set(0,1),a=e.ray.intersectTriangle(Wa,Xa,Io,!1,Co),a===null))return;let l=e.ray.origin.distanceTo(Co);l<e.near||l>e.far||t.push({distance:l,point:Co.clone(),uv:ps.getInterpolation(Co,Wa,Io,Xa,cp,tu,up,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qa(i,e,t,n,s,r){Nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Po.x=r*Nr.x-s*Nr.y,Po.y=s*Nr.x+r*Nr.y):Po.copy(Nr),i.copy(e),i.x+=Po.x,i.y+=Po.y,i.applyMatrix4(jp)}var hp=new k,fp=new yt,dp=new yt,mM=new k,pp=new je,Ya=new k,nu=new Xn,mp=new je,iu=new Zr,ml=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fd,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingBox.expandByPoint(Ya)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingSphere.expandByPoint(Ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nu.copy(this.boundingSphere),nu.applyMatrix4(s),e.ray.intersectsSphere(nu)!==!1&&(mp.copy(s).invert(),iu.copy(e.ray).applyMatrix4(mp),!(this.boundingBox!==null&&iu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,iu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;fp.fromBufferAttribute(s.attributes.skinIndex,e),dp.fromBufferAttribute(s.attributes.skinWeight,e),hp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=dp.getComponent(r);if(o!==0){let a=fp.getComponent(r);pp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(mM.copy(hp).applyMatrix4(pp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Zo=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ms=class extends ln{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Kt,h=Kt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gp=new je,gM=new je,gl=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:gM;gp.multiplyMatrices(a,t[r]),gp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ms(t,e,e,On,pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Qs=class extends mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ur=new je,xp=new je,$a=[],vp=new ti,xM=new je,Lo=new ot,Do=new Xn,Mn=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),vp.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(vp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Do.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ur),xp.multiplyMatrices(n,Ur),Lo.matrixWorld=xp,Lo.raycast(e,$a);for(let o=0,a=$a.length;o<a;o++){let l=$a[o];l.instanceId=r,l.object=this,t.push(l)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ms(new Float32Array(s*this.count),s,this.count,Ph,pi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ss=class extends yn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new k,vl=new k,_p=new je,No=new Zr,Za=new Xn,su=new k,yp=new k,to=class extends Ft{constructor(e=new gt,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xl.fromBufferAttribute(t,s-1),vl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xl.distanceTo(vl);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;_p.copy(s).invert(),No.copy(e.ray).applyMatrix4(_p);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),S=h.getX(x+1),y=Ka(this,e,No,l,p,S);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Ka(this,e,No,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Ka(this,e,No,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ka(this,e,No,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ka(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(xl.fromBufferAttribute(o,s),vl.fromBufferAttribute(o,r),t.distanceSqToSegment(xl,vl,su,yp)>n)return;su.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(su);if(!(l<e.near||l>e.far))return{distance:l,point:yp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Mp=new k,Sp=new k,er=class extends to{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Mp.fromBufferAttribute(t,s),Sp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mp.distanceTo(Sp);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_l=class extends to{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},tr=class extends yn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bp=new je,oh=new Zr,ja=new Xn,Ja=new k,bs=class extends Ft{constructor(e=new gt,t=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;bp.copy(s).invert(),oh.copy(e.ray).applyMatrix4(bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Ja.fromBufferAttribute(u,m),Tp(Ja,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Ja.fromBufferAttribute(u,g),Tp(Ja,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tp(i,e,t,n,s,r,o){let a=oh.distanceSqToPoint(i);if(a<t){let l=new k;oh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var vi=class extends ln{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pn=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function S(){let v=new k,E=new k,T=0,_=(t-e)/n;for(let w=0;w<=r;w++){let M=[],b=w/r,R=b*(t-e)+e;for(let U=0;U<=s;U++){let H=U/s,P=H*l+a,F=Math.sin(P),O=Math.cos(P);E.x=R*F,E.y=-b*n+m,E.z=R*O,u.push(E.x,E.y,E.z),v.set(F,_,O).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-b),M.push(g++)}x.push(M)}for(let w=0;w<s;w++)for(let M=0;M<r;M++){let b=x[M][w],R=x[M+1][w],U=x[M+1][w+1],H=x[M][w+1];(e>0||M!==0)&&(h.push(b,R,H),T+=3),(t>0||M!==r-1)&&(h.push(R,U,H),T+=3)}c.addGroup(p,T,0),p+=T}function y(v){let E=g,T=new $e,_=new k,w=0,M=v===!0?e:t,b=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let R=g;for(let U=0;U<=s;U++){let P=U/s*l+a,F=Math.cos(P),O=Math.sin(P);_.x=M*O,_.y=m*b,_.z=M*F,u.push(_.x,_.y,_.z),f.push(0,b,0),T.x=F*.5+.5,T.y=O*.5*b+.5,d.push(T.x,T.y),g++}for(let U=0;U<s;U++){let H=E+U,P=R+U;v===!0?h.push(P,P+1,H):h.push(P+1,P,H),w+=3}c.addGroup(p,w,v===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nr=class i extends Pn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ah=class i extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let y=new k,v=new k,E=new k;for(let T=0;T<t.length;T+=3)d(t[T+0],y),d(t[T+1],v),d(t[T+2],E),l(y,v,E,S)}function l(S,y,v,E){let T=E+1,_=[];for(let w=0;w<=T;w++){_[w]=[];let M=S.clone().lerp(v,w/T),b=y.clone().lerp(v,w/T),R=T-w;for(let U=0;U<=R;U++)U===0&&w===T?_[w][U]=M:_[w][U]=M.clone().lerp(b,U/R)}for(let w=0;w<T;w++)for(let M=0;M<2*(T-w)-1;M++){let b=Math.floor(M/2);M%2===0?(f(_[w][b+1]),f(_[w+1][b]),f(_[w][b])):(f(_[w][b+1]),f(_[w+1][b+1]),f(_[w+1][b]))}}function c(S){let y=new k;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(S),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let S=new k;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;o.push(v,1-E)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let y=o[S+0],v=o[S+2],E=o[S+4],T=Math.max(y,v,E),_=Math.min(y,v,E);T>.9&&_<.1&&(y<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,y){let v=S*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){let S=new k,y=new k,v=new k,E=new k,T=new $e,_=new $e,w=new $e;for(let M=0,b=0;M<r.length;M+=9,b+=6){S.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),T.set(o[b+0],o[b+1]),_.set(o[b+2],o[b+3]),w.set(o[b+4],o[b+5]),E.copy(S).add(y).add(v).divideScalar(3);let R=m(E);x(T,b+0,S,R),x(_,b+2,y,R),x(w,b+4,v,R)}}function x(S,y,v,E){E<0&&S.x===1&&(o[y]=S.x-1),v.x===0&&v.z===0&&(o[y]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ir=class i extends ah{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ts=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,f=new k,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let S=[],y=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let T=E/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+v,1-y),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let y=h[p][S+1],v=h[p][S],E=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&d.push(y,v,T),(p!==n-1||l<Math.PI)&&d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yl=class extends vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},st=class extends yn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends st{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ml=class extends yn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ni=class extends yn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Qa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _M(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ep(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Jp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lh=class extends Es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dd,endingEnd:dd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:r=e,a=2*t-n;break;case md:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:o=e,l=2*n-t;break;case md:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+S*o[c+E]+y*o[l+E]+v*o[u+E];return r}},ch=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},uh=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ii=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&vM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Yr;var ws=class extends ii{constructor(e,t,n){super(e,t,n)}};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=qr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends ii{};Sl.prototype.ValueTypeName="color";var Xi=class extends ii{};Xi.prototype.ValueTypeName="number";var hh=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},qi=class extends ii{InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};qi.prototype.ValueTypeName="quaternion";qi.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends ii{constructor(e,t,n){super(e,t,n)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=qr;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends ii{};Yi.prototype.ValueTypeName="vector";var bl=class{constructor(e="",t=-1,n=[],s=qg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(MM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ii.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=_M(l);l=Ep(l,1,h),c=Ep(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Xi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let m=[],p=[];Jp(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){let y=f[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Xi(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Yi,d+".position",f,"pos",s),n(qi,d+".quaternion",f,"rot",s),n(Yi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function yM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return Sl;case"quaternion":return qi;case"bool":case"boolean":return ws;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function MM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yM(i.type);if(i.times===void 0){let t=[],n=[];Jp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},fh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},SM=new fh,$i=class{constructor(e){this.manager=e!==void 0?e:SM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},dh=class extends Error{constructor(e,t){super(e),this.response=t}},Ko=class extends $i{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ms.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:s});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ki[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){S();function S(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,_=h.length;T<_;T++){let w=h[T];w.onProgress&&w.onProgress(E)}p.enqueue(v),S()}},y=>{p.error(y)})}}});return new Response(m)}else throw new dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ms.add(e,c);let h=ki[e];delete ki[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ph=class extends $i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ms.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Xo("img");function l(){h(),ms.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Tl=class extends $i{constructor(e){super(e)}load(e,t,n,s){let r=new ln,o=new ph(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},no=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},io=class extends no{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ru=new je,wp=new k,Ap=new k,jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(wp),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),ru.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mh=class extends jo{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=$r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},so=class extends no{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rp=new je,Uo=new k,ou=new k,gh=class extends jo{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Uo),ou.copy(n.position),ou.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ou),n.updateMatrixWorld(),s.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rp)}},El=class extends no{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xh=class extends jo{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Rs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wl=class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ms.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ms.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ms.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ms.add(e,l),r.manager.itemStart(e)}};var Al=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cp(){return performance.now()}var Fh="\\[\\]\\.:\\/",bM=new RegExp("["+Fh+"]","g"),Oh="[^"+Fh+"]",TM="[^"+Fh.replace("\\.","")+"]",EM=/((?:WC+[\/:])*)/.source.replace("WC",Oh),wM=/(WCOD+)?/.source.replace("WCOD",TM),AM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),RM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),CM=new RegExp("^"+EM+wM+AM+RM+"$"),PM=["material","materials","bones","map"],vh=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bM,"")}static parseTrackName(e){let t=CM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);PM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=vh;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ta=class i extends ot{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Zt;let n=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new fi,u=new k,f=new k,d=new k,g=new je,x=new k(0,0,-1),m=new yt,p=new k,S=new k,y=new yt,v=new je,E=this.camera,T=new qt(r,o,{samples:c,type:un}),_=new vt({name:l.name!==void 0?l.name:"unspecified",uniforms:bn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});_.uniforms.tDiffuse.value=T.texture,_.uniforms.color.value=s,_.uniforms.textureMatrix.value=v,this.material=_,this.onBeforeRender=function(w,M,b){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),g.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),S.subVectors(f,x),S.reflect(u).negate(),S.add(f),E.position.copy(p),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(u),E.lookAt(S),E.far=b.far,E.updateMatrixWorld(),E.projectionMatrix.copy(b.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(E.projectionMatrix),v.multiply(E.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(E.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let R=E.projectionMatrix;y.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],y.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],y.z=-1,y.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(y)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-a,R.elements[14]=m.w,n.visible=!1;let U=w.getRenderTarget(),H=w.xr.enabled,P=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(T),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(M,E),w.xr.enabled=H,w.shadowMap.autoUpdate=P,w.setRenderTarget(U);let F=b.viewport;F!==void 0&&w.state.viewport(F),n.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};ta.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Fl=[25,18,15,12,10,8,6,4],sr={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ri={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function na(i){let e=String(i),t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function zn(i){let e=(typeof i=="number"?i>>>0:na(i))||1,t=e,n=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:n,range:(s,r)=>s+(r-s)*n(),int:(s,r)=>s+Math.floor(n()*(r-s+1)),pick:s=>s[Math.floor(n()*s.length)],chance:s=>n()<s,sign:()=>n()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(n()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>zn(na(t+":"+s))}}var Ol=Math.PI*2,IM=2,Qp=2800,em=4200,LM=34,tm=8,nm=60,DM=.12,NM=.1,im=28,UM=150,Bh=52,Vh=.0025,sm=1/150,FM=10,rm=5,om=250,am=38,lm=75,Bl=150,kh=120,fm=10,OM=80,BM=40,zM=20,kM=30,HM=95,zh=18,cm=22,VM=60,Hh=(i,e,t)=>i<e?e:i>t?t:i;function GM(i){let e=i.int(10,14),t=i.range(440,520),n=[];for(let s=0;s<e;s++){let r=i.range(-.3,.3)*(Ol/e),o=s/e*Ol+r,a=Hh(t*i.range(.62,1.25),380,620);n.push([a*Math.cos(o),a*Math.sin(o)])}return n}function WM(i,e,t,n,s,r,o,a,l){let c=(x,m,p,S)=>{let y=(l-p)/(S-p);return[x[0]+(m[0]-x[0])*y,x[1]+(m[1]-x[1])*y]},h=c(i,e,s,r),u=c(e,t,r,o),f=c(t,n,o,a),d=c(h,u,s,o),g=c(u,f,r,a);return c(d,g,r,o)}function XM(i,e){let t=i.length,n=[];for(let s=0;s<t;s++){let r=i[(s-1+t)%t],o=i[s],a=i[(s+1)%t],l=i[(s+2)%t],c=0,h=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),u=h+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=u+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let d=0;d<e;d++){let g=h+(u-h)*(d/e);n.push(WM(r,o,a,l,c,h,u,f,g))}}return n}function qM(i){let e=i.length,t=new Float64Array(e+1);for(let c=0;c<e;c++){let h=i[c],u=i[(c+1)%e];t[c+1]=t[c]+Math.hypot(u[0]-h[0],u[1]-h[1])}let n=t[e],s=Math.max(1,Math.round(n/IM)),r=n/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let h=c*r;for(;l<e-1&&t[l+1]<=h;)l++;let u=i[l],f=i[(l+1)%e],d=t[l+1]-t[l],g=d>0?(h-t[l])/d:0;o[c]=u[0]+(f[0]-u[0])*g,a[c]=u[1]+(f[1]-u[1])*g}return{xs:o,zs:a,count:s,step:r}}function um(i,e){let t=i.length,n=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=i[(o+t)%t];for(let o=0;o<t;o++)n[o]=r/s,r+=i[(o+1+e)%t]-i[((o-e)%t+t)%t];return n}function YM(i,e,t){let n=i.length,s=new Float64Array(n),r=new Float64Array(n);for(let a=0;a<n;a++){let l=(a-1+n)%n,c=(a+1)%n,h=i[c]-i[l],u=e[c]-e[l],f=Math.hypot(h,u)||1;s[a]=h/f,r[a]=u/f}let o=new Float64Array(n);for(let a=0;a<n;a++){let l=(a-1+n)%n,c=(a+1)%n,h=(s[c]-s[l])/(2*t),u=(r[c]-r[l])/(2*t);o[a]=s[a]*u-r[a]*h}return o}function $M(i,e){let t=i.length;for(let n=0;n<50;n++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,l=Math.sqrt(i[a]*i[a]+2*BM*e);i[o]>l+1e-9&&(i[o]=l,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,l=Math.sqrt(i[o]*i[o]+2*zM*e);i[a]>l+1e-9&&(i[a]=l,s=!0)}if(!s)break}}function hm(i){let e=i.length,t=-1;for(let r=0;r<e;r++)if(i[r]!==i[(r-1+e)%e]){t=r;break}if(t<0)return i[0]!==0?[{start:0,len:e,key:i[0]}]:[];let n=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=i[o];s&&a===s.key?s.len++:(s&&s.key!==0&&n.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&n.push(s),n}function dm(i,e){let t=i.length,n=0;for(let s=0;s<t;s++){let r=i[s].vmax,o=i[(s+1)%t].vmax;n+=e/Math.max(1,.5*(r+o))}return n}function Gh(i,e){let t=i.length,n=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let c=0;c<t;c++){let h=i[c].curv,u=Math.abs(h);u>n&&(n=u);let f=Math.abs(i[c].slope);f>s&&(s=f),r[c]=h>sm?1:h<-sm?-1:0,o[c]=u<Vh?1:0}let a=0;for(let c of hm(r))c.len*e>=FM&&a++;let l={start:0,len:0};for(let c of hm(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:n>0?1/n:1/0,maxSlope:s,corners:a,longestStraight:l.len*e,longestStraightStart:l.start}}function ZM(i,e){let t=i.length,n=Bh,s=(c,h)=>(c+4096)*8192+(h+4096),r=new Map,o=new Array(t);for(let c=0;c<t;c++){let h=Math.floor(i[c].x/n),u=Math.floor(i[c].z/n);o[c]=[h,u];let f=s(h,u),d=r.get(f);d||(d=[],r.set(f,d)),d.push(c)}let a=0,l=Bh*Bh;for(let c=0;c<t;c++){let[h,u]=o[c];for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let g=r.get(s(h+f,u+d));if(g)for(let x of g){if(x<=c)continue;let m=Math.abs(c-x);if(Math.min(m,t-m)*e<=UM)continue;let S=i[c].x-i[x].x,y=i[c].z-i[x].z;S*S+y*y<l&&a++}}}return a}function KM(i){let e=GM(i),t=XM(e,160),{xs:n,zs:s,count:r,step:o}=qM(t),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((_,w)=>({k:_,a:i.range(a[w][0],a[w][1]),p:i.range(0,Ol)})),c=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let _=0;_<r;_++){let w=(_-1+r)%r,M=(_+1)%r,b=n[M]-n[w],R=s[M]-s[w];u[_]=Math.hypot(b,R)||1e-9,c[_]=b/u[_],h[_]=R/u[_]}let f=new Float64Array(r),d=new Float64Array(r),g=1;for(let _=0;_<40;_++){for(let M=0;M<r;M++){let b=0;for(let R of l)b+=R.a*g*Math.sin(Ol*R.k*M/r+R.p);f[M]=LM+b}let w=0;for(let M=0;M<r;M++){let b=(M-1+r)%r,R=(M+1)%r;d[M]=(f[R]-f[b])/u[M],Math.abs(d[M])>w&&(w=Math.abs(d[M]))}if(w<=NM)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),p=new Float64Array(r);for(let _=0;_<r;_++){let w=(_-1+r)%r,M=(_+1)%r,b=n[M]-n[w],R=f[M]-f[w],U=s[M]-s[w],H=Math.hypot(b,R,U)||1e-9;x[_]=b/H,m[_]=R/H,p[_]=U/H}let S=YM(n,s,o),y=um(S,2),v=new Float64Array(r);for(let _=0;_<r;_++){let w=Hh((Math.abs(y[_])-.016666666666666666)/.023333333333333334,0,1);v[_]=zh+(cm-zh)*w}let E=um(v,10);for(let _=0;_<r;_++)E[_]=Hh(E[_],zh,cm);let T=new Float64Array(r);for(let _=0;_<r;_++)T[_]=Math.min(HM,Math.sqrt(kM/Math.max(Math.abs(y[_]),1e-9)));return $M(T,o),{xs:n,ys:f,zs:s,count:r,step:o,fx:c,fz:h,tx:x,ty:m,tz:p,slope:d,curv:y,width:E,vmax:T}}function jM(i){let{xs:e,ys:t,zs:n,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:h,slope:u,curv:f,width:d,vmax:g}=i,x=[];for(let y=0;y<s;y++)x.push({curv:f[y],slope:u[y],vmax:g[y],x:e[y],z:n[y]});let m=Gh(x,r),p=m.longestStraight>0?(m.longestStraightStart+Math.round(OM/r))%s:0,S=new Array(s);for(let y=0;y<s;y++){let v=(p+y)%s;S[y]={s:y*r,x:e[v],y:t[v],z:n[v],tx:l[v],ty:c[v],tz:h[v],rx:-a[v],rz:o[v],width:d[v],curv:f[v],vmax:g[v],slope:u[v]}}return S}function JM(i,e,t){let n=i.length,s=new Int32Array(n+1);for(let m=0;m<n;m++)s[m+1]=s[m]+(Math.abs(i[m].curv)>=Vh?1:0);let r=(m,p)=>s[p+1]-s[m]===0,o=Math.ceil(Bl/e),a=Math.floor((n*e-Bl)/e),l=Math.ceil(fm/e),c=[],h=[],u=(m,p)=>c.every(([S,y])=>p<S||m>y),f=(m,p,S,y)=>{for(let v=0;v<400;v++){let E=Math.round(t.range(m,p)/e),T=Math.ceil(S/e),_=E+T;if(a-_<o)return null;let w=t.int(o,a-_),M=w+E;if(y&&!r(w,M+T))continue;let b=w-l,R=M+T+l;if(!(b<0||R>n-1||!u(b,R)))return c.push([b,R]),{a:w,b:M}}return null},d=t.int(2,3);for(let m=0;m<d;m++){let p=f(12,16,kh,!0);p&&h.push({type:"ramp",s0:p.a*e,s1:p.b*e,height:t.range(1.2,2.2)})}let g=t.int(2,3);for(let m=0;m<g;m++){let p=f(10,10,0,!1);p&&h.push({type:"boost",s0:p.a*e,s1:p.b*e})}let x=t.int(1,2);for(let m=0;m<x;m++){let p=f(60,140,0,!1);p&&h.push({type:"tunnel",s0:p.a*e,s1:p.b*e})}return h.sort((m,p)=>m.s0-p.s0),h}function QM(i,e,t){let n=KM(i),s=jM(n),{count:r,step:o}=n,a=r*o,l=JM(s,o,i),c=Gh(s,o),h=1/0,u=-1/0,f=1/0,d=-1/0;for(let g of s)g.x<h&&(h=g.x),g.x>u&&(u=g.x),g.z<f&&(f=g.z),g.z>d&&(d=g.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:h,maxX:u,minZ:f,maxZ:d},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:dm(s,o),corners:c.corners}}}function eS(i){let e=[],{pts:t,count:n,step:s,length:r}=i;if(!Array.isArray(t)||t.length!==n||!(n>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=Qp&&r<=em||e.push(`longueur ${r.toFixed(0)} m hors [${Qp}, ${em}]`),Math.abs(n*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let p of t)p.y<o&&(o=p.y),p.y>a&&(a=p.y);(o<tm||a>nm)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${tm}, ${nm}]`);let l=Gh(t,s);l.minRadius>=im||e.push(`rayon min ${l.minRadius.toFixed(1)} m < ${im}`),l.maxSlope>DM&&e.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<rm&&e.push(`${l.corners} virages < ${rm}`),l.longestStraight<om&&e.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${om}`);let c=ZM(t,s);c>0&&e.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let h=dm(t,s);h>=am&&h<=lm||e.push(`temps au tour ${h.toFixed(1)} s hors [${am}, ${lm}]`);let u=i.features||[],f=u.filter(p=>p.type==="ramp").length,d=u.filter(p=>p.type==="boost").length,g=u.filter(p=>p.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),d<2&&e.push(`${d} boost(s) < 2`),g<1&&e.push("aucun tunnel");let x=p=>Math.round((p%r+r)%r/s)%n;for(let p of u)if((p.s0<Bl||p.s1>r-Bl)&&e.push(`feature ${p.type} trop proche du d\xE9part`),p.type==="ramp"){let S=p.s1-p.s0;(S<11.5||S>16.5)&&e.push(`tremplin de ${S.toFixed(1)} m hors 12..16`),p.height>=1.2&&p.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let y=x(p.s0),v=x(p.s1+kh),E=!0;for(let T=y;T!==(v+1)%n;T=(T+1)%n)if(Math.abs(t[T].curv)>=Vh){E=!1;break}E||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=u.slice().sort((p,S)=>p.s0-S.s0);for(let p=0;p+1<m.length;p++){let S=m[p],y=m[p+1],v=S.s1+(S.type==="ramp"?kh:0);y.s0<v+fm-1e-6&&e.push(`features ${S.type} et ${y.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function pm(i,e={}){let t=e.maxAttempts??VM,n=zn(i),s=null,r=1/0;for(let o=0;o<t;o++){let a=n.fork("try"+o),l=QM(a,i,o+1),c=eS(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=t,s}function Wh(i,e){let t=i.length;if(i.open)return e<0?0:Math.min(e,(i.count-1.001)*i.step);let n=e%t;return n<0&&(n+=t),n>=t&&(n-=t),n}var tS=(i,e)=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function Ki(i,e,t={}){let n=i.count,s=i.step,r=Wh(i,e),o=r/s,a=Math.floor(o),l=a%n,c=(l+1)%n,h=o-a,u=i.pts[l],f=i.pts[c],d=(v,E)=>v+(E-v)*h,g=d(u.tx,f.tx),x=d(u.ty,f.ty),m=d(u.tz,f.tz),p=Math.hypot(g,x,m)||1,[S,y]=tS(d(u.rx,f.rx),d(u.rz,f.rz));if(t.s=r,t.x=d(u.x,f.x),t.y=d(u.y,f.y),t.z=d(u.z,f.z),i.open&&e!==r){let v=e-r;t.x+=g/p*v,t.z+=m/p*v}return t.tx=g/p,t.ty=x/p,t.tz=m/p,t.rx=S,t.rz=y,t.width=d(u.width,f.width),t.curv=d(u.curv,f.curv),t.vmax=d(u.vmax,f.vmax),t.slope=d(u.slope,f.slope),t.i=l,t}var Zi={};function Pt(i,e,t,n={}){return Ki(i,e,Zi),n.x=Zi.x+t*Zi.rx,n.y=Zi.y,n.z=Zi.z+t*Zi.rz,n.heading=Math.atan2(Zi.tx,Zi.tz),n.slope=Zi.slope,n}function mm(i,e){let t=Wh(i,e);for(let n of i.features)if(n.type==="ramp"&&t>=n.s0&&t<n.s1)return n.height*(t-n.s0)/(n.s1-n.s0);return 0}function Cs(i,e,t){let n=Wh(i,e);for(let s of i.features)if((t===void 0||s.type===t)&&n>=s.s0&&n<=s.s1)return s;return null}var sS=1/30,gm=.5,xm=.4,rS=.6,ia=[.2,.36,.52,.68,.84],vm=ia.length+1,oS=.2,aS=.1,lS=.34,cS=4,uS=4,hS=.2,fS=4.9,dS=5.5,pS=5,mS=6,gS=1.8,xS=.03,vS=1.6,_S=.5,yS=2,MS=.785,SS=4.7,bS=2.5,ao=.196,TS=.098,ES=.5,wS=.27,AS=16,RS=11,CS=.72,PS=5,IS=.5,_m=.35,LS=.42,DS=60,NS=.3,US=5,FS=1.6,OS=3,BS=14,zS=.004,kS=1.2,HS=2,VS=.5,GS=22,ym=.25,WS=6,XS=1.8,Mm=1,qS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],$t=(i,e,t)=>i<e?e:i>t?t:i,Ci=(i,e=0)=>Number.isFinite(i)?i:e,YS=(i,e)=>{let t=i%e;return t<0?t+e:t},$S=(i,e,t)=>i<e?Math.min(e,i+t):Math.max(e,i-t);function Sm({s:i=0,d:e=0}={}){return{s:i,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:sr.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function bm(i,e,t,n,s,r,o){let a=i.events,l=e||{},c=s||{},h=!!l.boost&&!i._prevBoost;if(i._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,sS):0,i._init||(i._init=!0,i.boostCharges=n.boostCharges),r===0)return i;let u=t.length,f=n.maxSpeed,d=$t(Ci(l.throttle),0,1),g=$t(Ci(l.brake),0,1),x=$t(Ci(l.steer),-1,1),m=i.stun>0;m&&(i.stun=Math.max(0,i.stun-r),d=0,g=0,x=0);let p=ke=>t.open?ke:YS(ke,u),S=p(i.s),y=Ki(t,S),v=!i.airborne;if(h&&!m&&i.boostCharges>0&&i.boostT<=0&&(i.boostCharges-=1,i.boostT=n.boostDuration,a.push("boost")),v){let ke=Cs(t,S,"boost");if(ke){let Ee=Math.floor(i.s/u)+":"+ke.s0;i._padKey!==Ee&&(i._padKey=Ee,i.boostT=Math.max(i.boostT,kS),a.push("pad"))}}g>.5&&i.boostT>0&&(i.boostT=0);let E=i.boostT>0;E&&(d=1);let T=v&&!m&&Math.abs(x)>.3&&i.speed>HS&&(!!l.drift||g>.3),_=i.speed,w=_/f;i._shiftT>0?i._shiftT-=r:i.gear<vm&&w>ia[i.gear-1]&&!(g>0&&_>3)?(i.gear+=1,i._shiftT=oS):i.gear>1&&_<ia[i.gear-2]*f-2&&(i.gear-=1,i._shiftT=aS);let M=i.gear>1?ia[i.gear-2]:0,b=i.gear<vm?ia[i.gear-1]:1;i.rpm=$t(.35+.65*((w-M)/(b-M)),.1,1.05);let R=v&&Math.abs(i.d)>y.width*.5,U=rS*f,H=R?U:f*(E?n.boostPower:1),P=cS/(f*f),F=0;if(v){if(R&&_>U&&(F-=2*n.offroadDrag*(_-U)),d>0&&i._shiftT<=0&&_<H){let ke=lS*f,Ee=.8+.2*Math.sin(Math.PI*$t(i.rpm,0,1)),Ue=n.accel*d*Ee*Math.min(1,ke/Math.max(_,1));E&&(Ue*=yS),F+=Math.min(Ue,n.accel*1.15*(E?1.3:1))}g>0&&(F-=n.brake*g*(T?.35:1)),F-=_*(.2-.03*(i.gear-1))*(1-d),F-=hS,F-=fS*y.slope,F-=P*_*_}else F-=P*uS*_*_;i.speed=Math.max(0,_+F*r),v&&i.speed>H&&!R&&(i.speed=Math.max(H,i.speed-10*r));let O=$t(i.speed/f,0,1),Y=1+(n.wetGrip-1)*ZS(c),G=$t(n.grip*Ci(c.grip,1)*Y,.05,1.5),J=i.speed<.6?0:x,me=Math.abs(J)>Math.abs(i.steer)||J*i.steer<0?dS:pS*$t(Math.abs(F)/6,1,2.5);i.steer=$S(i.steer,J,me*r);let _e=i.yaw-i.vdir,ce=i.speed*Math.sin(_e),ie=Math.min(vS,1+xS*Math.abs(ce));T&&(ie=n.driftBonus),E&&v&&(ie*=_S);let Q=1-(1-n.steerHighSpeed)*O,ee=Math.min(1,i.speed/6),L=v?1:n.airControl,B=i.steer*n.steerRate*Q*ie*ee*L*(.6+.4*Math.min(1,G)),X=Math.min(i.speed/US,DS*Math.min(1.2,G)*(T?1.5:1)/Math.max(i.speed,1)),$=$t(B,-X,X);v&&Math.abs(x)<=.15&&(i.yaw*=Math.exp(-FS*r)),o&&n.steerNoise>0&&!m&&v&&(i.yaw+=n.steerNoise*d*(o.next()*2-1)*r);let de=Math.max(.3,1-i.d*y.curv),we=i.speed*Math.cos(i.vdir)/de*r,Ae=i.speed*Math.sin(i.vdir)*r,V=y.curv*we,Ve=i.vdir,ze=V*(v?1-NS:1);if(i.yaw+=$*r-ze,i.vdir-=ze,v){let ke=(T?gS:mS)*G,Ee=1-Math.exp(-ke*r);i.vdir+=(i.yaw-i.vdir)*Ee,i.speed*=1-(1-Math.cos(_e))*Ee}else{let ke=3*$t(n.airStability,0,2);i.yaw+=(i.vdir-i.yaw)*(1-Math.exp(-ke*r)),n.airStability<1&&(i.yaw+=(i.yaw>=i.vdir?1:-1)*(1-n.airStability)*.6*r)}i.vdir=$t(Ci(i.vdir),-gm,gm),i.yaw=$t(Ci(i.yaw),i.vdir-xm,i.vdir+xm),i._t+=r,Ae+=Ci(c.wind)*(1.2*Math.sin(i._t*.37)+.4*Math.sin(i._t*1.13+1))*r*(v?1:.5),i.s+=we,i.d+=Ae;let Be=v?$t((Math.abs(i.yaw-i.vdir)-.04)/.22,0,1)*ee:0;i.drift+=(Be-i.drift)*Math.min(1,8*r);let Ie=Ki(t,p(i.s));i.onRoad=Math.abs(i.d)<=Ie.width*.5;let qe=Ie.width*.5+6-.4;if(Math.abs(i.d)>=qe-.02){let ke=i.d>=0?1:-1,Ee=i.vdir*ke>0,Ue=Ee?Math.abs(Math.sin(i.vdir)):0;if(i.d=ke*qe,Ee&&(i.vdir=-ke*.04,i.yaw=i.yaw*.4-ke*.04),i._wallHit)i.speed*=Math.max(0,1-.8*r);else{let se=i.boostT>0,Se=o?o.next():1;se&&i.speed>WS||Ue>VS&&i.speed>GS&&Se<ym||i.airborne&&Se<ym?(i.speed*=.3,i.stun=XS,a.push("crash")):i.speed*=1-$t(n.wallLoss*1.3*(.5+Ue),0,.9),a.push("wall")}i.boostT=0,i._wallT=_m,i._wallHit=!0}else i._wallHit=!1;i.stun>0&&v&&(i.speed*=Math.exp(-2.2*r)),S=p(i.s);let Fe=Ci(mm(t,S)),D=(Fe-i._g)/r;if(i.airborne||(Fe<i.yRel-.05?(i.airborne=!0,i._apex=i.yRel-Fe,i.vy=i._vyG,i.vy>OS&&a.push("jump")):(i.yRel=Fe,i.vy=$t(D,-80,80),i._vyG=i.vy)),i.airborne&&(i.vy-=26*r,i.yRel+=i.vy*r,i._apex=Math.max(i._apex,i.yRel-Fe),i.vy<=0&&i.yRel<=Fe)){let ke=-i.vy,Ee=Math.abs(i.yaw-i.vdir),Ue=ke>BS/Math.max(.3,n.landing)||Ee>.35;i.airborne=!1,i.yRel=Fe,i.vy=0,i._vyG=0,i._springA=$t(i._springA+.35*i._apex+.03*ke,0,1),i._springP=Math.PI/2;let se=zS*ke+(Ue?.08:0);i.speed*=1-$t(se/Math.max(.2,n.landing),0,.45),a.push(Ue?"hardLand":"land")}i._g=Fe,v=!i.airborne,i.speed=$t(Ci(i.speed),0,1.5*f),i._wallT=Math.max(0,i._wallT-r);let A=Math.max(0,1-i.speed/4,i._wallT/_m),j=v?(V+(i.vdir-Ve))/r:0;i._turnF+=(j-i._turnF)*Math.min(1,6*r);let xe=i.speed*i._turnF,ye=Math.sign(xe)*Math.max(0,Math.abs(xe)-PS),he=i.steer*LS*Math.min(1,i.speed/10),Ce=$t((1-A)*(Math.atan(ye/RS)*CS+IS*(i.yaw-i.vdir)+he),-Mm,Mm);i.stun>0&&(Ce=(i.lean>=0?1:-1)*1.35),i.lean+=(Ce-i.lean)*Math.min(1,9*r),i._dive=g>.1&&v?Math.min(ao,i._dive+ao*r):Math.max(0,i._dive-.25*r);let Le=$t(F*TS,-ao,ao)-i._dive;i._pitchF+=(Le-i._pitchF)*Math.min(1,r/ES);let Ne=$t(Le-i._pitchF,-ao,ao);i.wheelie=i.boostT>0&&v?Math.min(Math.PI/2,i.wheelie+SS*r):Math.max(0,i.wheelie-bS*r),Ne+=Math.sin(i.wheelie)*MS,v||(Ne=Math.atan2(i.vy,Math.max(8,i.speed))),i.pitch=Ne,i._springA*=Math.exp(-r/wS),i._springP+=AS*r,i.compress=Math.sin(i._springP)*i._springA,i.wheelSpin+=i.speed/.32*r,i.boostT=Math.max(0,i.boostT-r);for(let ke of qS)Number.isFinite(i[ke])||(i[ke]=0);return i.speed<0&&(i.speed=0),i}function ZS(i){return $t(Ci(i.wet),0,1)}var KS=8,jS=25,JS=150,QS=3,eb=35,tb=2,nb=14,ib=30,sb=12,rb=2,ob={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},hn=(i,e,t)=>i<e?e:i>t?t:i,zl=(i,e,t)=>i+(e-i)*t,ab=(i,e)=>i-e*Math.round(i/e);function lb(i,e){let t=i.length,n=i.features,s=null,r=1/0;for(let o=0;o<n.length;o++){let a=n[o];if(a.type!=="ramp")continue;let l=((a.s0-e)%t+t)%t;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function cb(i,e){for(let t=0;t<=JS;t+=jS)if(Math.abs(Ki(i,e+t).curv)>.004)return!1;return!0}function kl(i,e){let t=i||ob,n={persona:t,rng:e,skill:hn(t.skill??.5,0,1),aggression:hn(t.aggression??.5,0,1),jumpSkill:hn(t.jumpSkill??.5,0,1),lineSkill:hn(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return n.nextMistake=e.range(8,20)+(1-n.skill)*15,n}function Hl(i,e,t,n,s,r){let o=i.input,a=t.length,l=i.rng,c=i.aggression,h=i.skill,u=i.jumpSkill,f=e.speed,d=e.s,g=Ki(t,d),x=Math.max(.8,g.width*.5-1.2);i.wanderT-=r,i.wanderT<=0&&(i.wanderT=l.range(.9,1.8),i.wanderGoal=l.range(-1,1)*(1-i.lineSkill)*.5*x),i.wander+=(i.wanderGoal-i.wander)*Math.min(1,r*1.5),i.nextMistake-=r,i.mistakeT-=r,i.mistakeT<=0&&i.nextMistake<=0&&(i.mistakeT=l.range(.5,1.2),i.mistakeSide=l.sign(),i.nextMistake=l.range(8,20)+(1-h)*15);let m=i.mistakeT>0;i.boostLock-=r;let p=zl(1.4,.6,c),S=Math.max(20,f*p),y=Math.max(S,hn(f*1.6+20,40,110)),v=1/0,E=0,T=0,_=0;for(let ee=0;ee<=y;ee+=KS){let L=ee===0?g:Ki(t,d+ee);if(ee<=S&&L.vmax<v&&(v=L.vmax),ee>=8){let B=Math.abs(L.curv);B>E&&(E=B,T=Math.sign(L.curv),_=ee)}}let w=hn(E/.02,0,1),M=0;if(T!==0&&w>0){let ee=hn((_-10)/30,0,1),L=zl(1,-.8,ee);M=T*x*i.lineSkill*w*L}M+=i.wander,m&&(M+=i.mistakeSide*1.2);let b=lb(t,d),R=b?b.dist:1/0,U=Cs(t,d,"ramp")!==null,H=R<ib;(U||H)&&u>.5&&(M*=1-hn((u-.4)/.6,0,1));let P=!U&&R>=QS&&R<=eb&&u<.5;for(let ee=0;ee<s.length;ee++){let L=s[ee];if(L===e)continue;let B=ab(L.s-d,a);if(B<=0||B>=sb)continue;let X=L.d-e.d;if(!(Math.abs(X)>=rb)){if(c>.55){let $=X!==0?Math.sign(X):e.d<0?1:-1;M+=$*(.6+.8*c)}else{let $=X!==0?-Math.sign(X):e.d<0?1:-1;Math.abs(e.d+$*2)>x&&($=-$),M+=$*2*(1-c)}break}}let F=i.obstacles;if(F){let ee=35+f*1.7,L=null,B=1/0;for(let X=0;X<F.length;X++){let $=F[X],de=$.s-d;de>-$.type.len&&de<ee&&de<B&&Math.abs($.d-M)<$.type.w/2+1.5&&$.speed<f-3&&(L=$,B=de)}if(L){let X=L.type.w/2+2,$=[L.d-X,L.d+X].filter(Ae=>Math.abs(Ae)<=x),de=$.filter(Ae=>!F.some(V=>V!==L&&Math.abs(V.s-L.s)<30&&Math.abs(V.d-Ae)<V.type.w/2+1.2)),we=de.length?de:$;we.length&&(M=we.reduce((Ae,V)=>Math.abs(V-e.d)<Math.abs(Ae-e.d)?V:Ae))}}M=hn(M,-x,x),i.dGoal+=(M-i.dGoal)*Math.min(1,r*(F?4.5:2.5));let O=hn(i.dGoal,-x,x),Y;if(e.airborne)Y=hn(-e.yaw*2,-.3,.3);else{let ee=O-e.d,L=hn(ee*.12,-.25,.25),B=Ki(t,d+hn(f*.25,4,20)).curv,X=n.steerRate*zl(1,n.steerHighSpeed,hn(f/n.maxSpeed,0,1));Y=(B*f+(L-e.yaw)*3)/X}Y=hn(Y,-1,1),Number.isFinite(Y)||(Y=0);let G=hn(-i.playerGap/150,-1,1)*.06,J=zl(.86,1,h)+c*.04;m&&(J*=.85);let re=v*J*(1+G),me=n.maxSpeed,_e=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&i.boostLock<=0){if(u>.6&&R>=tb&&R<=nb)_e=!0;else if(f>20&&cb(t,d)){let ee=i.playerGap<-20,L=.25+.5*c+(ee?.3:0);_e=l.chance(L)}i.boostLock=_e?1:.4}o.boost=_e;let ce=E<.003;if(e.boostT>0){let ee=me*n.boostPower;re=ce?ee*.98:Math.min(re,ee)}else re=Math.min(re,me);let ie=0,Q=0;if(e.airborne)ie=1;else{let ee=re-f;ee>-1.5?ie=P?0:hn(.5+ee*.25,0,1):Q=hn((-ee-1.5)*.15,0,1)}return o.throttle=ie,o.brake=Q,o.steer=Y,o.drift=!e.airborne&&c>.75&&E>.025&&f>40&&_<20,o}var ub=7,hb=3,fb=.3,db=3,pb=25,mb=1.5,gb=1.2,xb=1.8,Tm=.9,vb={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Vl=(i,e,t)=>i<e?e:i>t?t:i,Xh=(i,e)=>i-e*Math.round(i/e);function qh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function Em({track:i,laps:e,env:t,rng:n,riders:s,final:r=!0,carry:o=null}){let a=i.length,l=i.raceEnd??a,c=e*l,u=s.filter(E=>!E.isPlayer).concat(s.filter(E=>E.isPlayer)).map((E,T)=>{let _=Math.floor(T/2),w=T%2,M=-ub*(_+1),b=w===0?-2.5:2.5,R=o?.states.get(E.id),U=R||Sm({s:M,d:b});return{id:E.id,name:E.name,color:E.color,accent:E.accent,isPlayer:!!E.isPlayer,stats:E.stats,persona:E.persona||null,state:U,ai:E.isPlayer?null:kl(E.persona||vb,n.fork("ai:"+E.id)),rng:n.fork("rider:"+E.id),others:null,input:qh(),coast:qh(),frameEvents:[],startS:R?R.s:M,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:T+1}});for(let E of u)E.others=u.filter(T=>T!==E).map(T=>T.state);let f=u.find(E=>E.isPlayer)||null,d=u.slice(),g=u.length,x=new Uint8Array(g*g);function m(E,T,_,w,M){if(_===T)return;let b=Math.floor(T/l),R=Math.min(Math.floor(_/l),e);for(let U=Math.max(b+1,1);U<=R;U++){let H=Vl((U*l-T)/(_-T),0,1),P=w+H*M,F=P-E.lapStartT;E.lapTimes.push(F),(E.bestLap===null||F<E.bestLap)&&(E.bestLap=F),E.lapStartT=P}if(r&&_>=c){let U=Vl((c-T)/(_-T),0,1);E.finished=!0,E.finishTime=w+U*M}}function p(E){let T=E.state,_=E.coast;return _.throttle=fb,_.brake=0,_.steer=Vl(-T.yaw*2-T.d*.05,-.5,.5),_.boost=!1,_.drift=!1,_}function S(E,T){let _=E.state;for(let w=0;w<g;w++){let M=u[w];if(M===E)continue;let b=Xh(M.state.s-_.s,a);if(b>db&&b<pb&&Math.abs(M.state.d-_.d)<mb){_.speed=Math.min(_.speed+gb*E.stats.slipstream*T,E.stats.maxSpeed*1.05);return}}}function y(){for(let E=0;E<g;E++)for(let T=E+1;T<g;T++){let _=u[E],w=u[T],M=Xh(w.state.s-_.state.s,a),b=w.state.d-_.state.d,R=E*g+T;if(Math.abs(M)<xb&&Math.abs(b)<Tm){let U=b!==0?Math.sign(b):n.sign(),H=(Tm-Math.abs(b))/2+.05;if(_.state.d-=U*H,w.state.d+=U*H,!x[R]){x[R]=1;let P=(_.state.speed+w.state.speed)/2;_.state.speed+=(P-_.state.speed)*.2,w.state.speed+=(P-w.state.speed)*.2;let F=M>=0?_:w;F.state.speed*=.96}}else x[R]=0}}let v={phase:o?"racing":"countdown",countdown:o?0:hb,time:o?o.time:0,final:r,laps:e,track:i,riders:u,player:f,update(E,T){if(v.phase==="countdown"){v.countdown=Math.max(0,v.countdown-E),v.countdown<=0&&(v.phase="racing");return}let _=v.time;v.time+=E;for(let w=0;w<g;w++){let M=u[w];M.finished?M.input=p(M):M.isPlayer?M.input=T||qh():(f&&(M.ai.playerGap=Xh(M.state.s-f.state.s,a)),M.input=Hl(M.ai,M.state,i,M.stats,M.others,E))}for(let w=0;w<g;w++){let M=u[w],b=M.state,R=M.finished,U=b.s;if(bm(b,M.input,i,M.stats,t,E,M.rng),R||(m(M,U,b.s,_,E),M.finished||S(M,E)),M.lap=M.finished?e:Vl(Math.floor(b.s/l)+1,1,e),!M.isPlayer){M.frameEvents.length=0;for(let H=0;H<b.events.length;H++)M.frameEvents.push(b.events[H]);b.events.length=0}}y(),d.sort((w,M)=>w.finished!==M.finished?w.finished?-1:1:w.finished?w.finishTime-M.finishTime:M.state.s-w.state.s);for(let w=0;w<g;w++)d[w].position=w+1;r?(f?f.finished:u.every(w=>w.finished))&&(v.phase="finished"):(f||d[0]).state.s>=l&&(v.phase="relay")},results(){let E=u.map(T=>{let _;if(T.finished)_=T.finishTime;else{let w=Math.max(0,T.state.s-T.startS),M=v.time>1?Math.max(5,w/v.time):40,b=Math.max(0,c-T.state.s);_=v.time+b/M}return{id:T.id,name:T.name,position:T.position,time:_,bestLap:T.bestLap,isPlayer:T.isPlayer}});return E.sort((T,_)=>T.position-_.position),E}};return v}var Qh={};Eg(Qh,{PLAYER:()=>Pi,RIVALS:()=>Wl,UPGRADES:()=>rr,applyUpgrade:()=>$l,computeStats:()=>or,createRun:()=>Xl,dailySeed:()=>Zl,isRunOver:()=>sa,loadMeta:()=>Kh,offerUpgrades:()=>Yl,randomSeed:()=>yb,recordResult:()=>$h,runRiders:()=>ql,saveMeta:()=>jh,standings:()=>lo,updateMeta:()=>Jh});var wm="polygon-rush-meta",_b=Object.keys(Ri).filter(i=>i!=="sicily"),Pi={id:"player",name:"Vous",color:14885934,accent:2312392},rr=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(i){i.accel*=1.35,i.maxSpeed*=1.04,i.steerNoise+=.35,i.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(i){i.landing*=1.8,i.offroadDrag*=.6,i.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(i){i.maxSpeed*=1.07,i.airStability*=.6,i.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(i){i.wetGrip*=1.35,i.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(i){i.boostCharges+=2,i.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(i){i.brake*=1.4,i.steerRate*=1.08,i.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(i){i.airControl*=1.5,i.airStability*=1.25,i.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(i){i.grip*=1.12,i.wetGrip*=.7,i.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(i){i.slipstream*=1.6,i.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(i){i.wallLoss*=.5,i.accel*=.92,i.maxSpeed*=.97}}],Wl=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Am=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Yh=Am.length;function Rm(i){return rr.find(e=>e.id===i)||null}function Cm(i,e){let t=0;for(let n of i.upgrades)n===e&&t++;return t}function Xl(i){let e=String(i),t=zn(na(e+"|run")),n=[];for(let o=0;o<Yh;o++)if(o===0)n.push("sunset");else if(o===Yh-1)n.push("rain");else{let a=n[o-1],l=_b.filter(c=>c!==a&&!(o===Yh-2&&c==="rain"));n.push(t.pick(l))}let s=Am.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:n[a],laps:a<2?2:3})),r={[Pi.id]:0};for(let o of Wl)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function ql(i){let e=Math.max(0,i.stageIndex),t=[{id:Pi.id,name:Pi.name,color:Pi.color,accent:Pi.accent,isPlayer:!0,persona:null,stats:or(i)}];for(let n of Wl){let s=Math.min(.99,Math.round((n.skill+.01*e)*100)/100);t.push({id:n.id,name:n.name,color:n.color,accent:n.accent,isPlayer:!1,persona:{...n,skill:s},stats:{...sr}})}return t}function or(i){let e={...sr};for(let t of i.upgrades){let n=Rm(t);n&&n.apply(e)}return e}function Yl(i){let e=zn(na(`${i.seed}|offer|${i.stageIndex}`)),t=rr.filter(n=>Cm(i,n.id)<n.maxStacks);return e.shuffle(t).slice(0,3)}function $l(i,e){let t=Rm(e);return!t||Cm(i,e)>=t.maxStacks?!1:(i.upgrades.push(e),!0)}function Pm(i){if(i===Pi.id)return Pi.name;let e=Wl.find(t=>t.id===i);return e?e.name:i}function $h(i,e){if(sa(i))return i;let t=e.slice().sort((r,o)=>r.position-o.position),n=i.stages[i.stageIndex],s={stage:i.stageIndex,name:n.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,l=Fl[a-1]??0;i.points[r.id]=(i.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||Pm(r.id),position:a,points:l,isPlayer:r.id===Pi.id})}),i.history.push(s),i.stageIndex+=1,i}function lo(i){let e={};for(let t of i.history)for(let n of t.results)e[n.id]=Math.min(e[n.id]??1/0,n.position);return Object.keys(i.points).map(t=>({id:t,name:Pm(t),points:i.points[t],isPlayer:t===Pi.id,_best:e[t]??1/0})).sort((t,n)=>n.points-t.points||t._best-n._best).map(({_best:t,...n})=>n)}function sa(i){return i.stageIndex>=i.stages.length}function Zl(i=new Date){let e=i instanceof Date?i:new Date(i),t=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${n}-${s}`}function yb(){let i="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=i[Math.floor(Math.random()*i.length)];return e}function Gl(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function Zh(i){let e=Gl();if(!i||typeof i!="object")return e;let t=n=>Number.isFinite(n)&&n>=0?Math.floor(n):0;return{runs:t(i.runs),wins:t(i.wins),bestPoints:t(i.bestPoints),unlocked:Array.isArray(i.unlocked)?i.unlocked.filter(n=>typeof n=="string"):e.unlocked}}function Im(){try{return globalThis.localStorage??null}catch{return null}}function Kh(){try{let i=Im();if(!i)return Gl();let e=i.getItem(wm);return e?Zh(JSON.parse(e)):Gl()}catch{return Gl()}}function jh(i){try{let e=Im();return e?(e.setItem(wm,JSON.stringify(Zh(i))),!0):!1}catch{return!1}}function Jh(i,e){let t=Zh(i),n=lo(e),s=n.find(o=>o.isPlayer),r=n.length>0&&n[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var si=.9,Lm=.3,Kl=8,ef=3,Dm=6+.8,ra=3,Mb=4.5,Sb=.015,bb=.004,Nm=60,_t={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},jl=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Um=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Tb=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Tn=(i,e,t)=>i+(e-i)*t,kn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,n,s){let[r,o,a,l]=e,c=Um(jl(o,r),jl(a,r)),h=Um(jl(a,r),jl(l,r)),u=[c[0]+h[0],c[1]+h[1],c[2]+h[2]];if(!(Math.hypot(u[0],u[1],u[2])>1e-12))return;let f=Tb(u,n)<0,d=this.n;for(let g=0;g<4;g++){let x=e[g];this.pos.push(x[0],x[1],x[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(d,d+2,d+1,d,d+3,d+2):this.idx.push(d,d+1,d+2,d,d+2,d+3)}};function oa(i,e,t,n,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,u])=>{let f=[0,0,0];return f[r]=l,f[o]=h,f[a]=u,[0,1,2].map(d=>e[d]+t[0][d]*f[0]*n[0]+t[1][d]*f[1]*n[1]+t[2][d]*f[2]*n[2])});i.quad(c,s,t[r].map(h=>h*l),null)}}}function tf(i,e,t){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new vi(n);return s.colorSpace=Rt,s.anisotropy=4,s}function Fm(i,e,t,n){i.beginPath(),e.forEach(([s,r],o)=>o?i.lineTo(s*t,r*n):i.moveTo(s*t,r*n)),i.closePath(),i.fill()}var Eb=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function nf(i,e,t){let n=t??zn(i.seed??1),s=i.pts,r=s.length,o=i.step??i.length/r,a=i.length??r*o,l=i.features??[],c=l.filter(C=>C.type==="ramp"),h=l.filter(C=>C.type==="boost"),u=l.filter(C=>C.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),d=!!e.night,g=new ht;g.name="road";let x=[],m=[],p=[],S=C=>(m.push(C),C),y=tf(128,128,(C,N,z)=>{C.fillStyle="#f3efe6",C.fillRect(0,0,N,z),C.fillStyle="#d6202a",Fm(C,Eb,N,z)}),v=tf(256,128,(C,N,z)=>{C.fillStyle="#04141a",C.fillRect(0,0,N,z),C.fillStyle="#37f3ff",Fm(C,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],N,z)}),E=tf(1024,256,(C,N,z)=>{C.fillStyle="#0b0e16",C.fillRect(0,0,N,z),C.strokeStyle="#ffd21f",C.lineWidth=10,C.strokeRect(12,12,N-24,z-24),C.fillStyle="#ffd21f",C.font="bold 150px Arial, Helvetica, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("POLYGON RUSH",N/2,z/2+8)});for(let C of[y,v,E])C&&p.push(C);v&&(v.wrapS=Cn);let T=S(new st({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),_=S(new Yt({vertexColors:!0})),w=S(new st({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),M=S(new st({vertexColors:!0,flatShading:!0,roughness:1})),b=S(new st({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),R=S(new Yt({vertexColors:!0})),U=S(new st({color:y?16777215:16762906,map:y,emissive:y?16777215:16762906,emissiveMap:y,emissiveIntensity:.5,flatShading:!0})),H=S(new st({color:207411,emissive:3666943,emissiveMap:v,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),P=S(new st({vertexColors:!0,flatShading:!0,side:Ct,roughness:.9})),F=S(new Yt({vertexColors:!0})),O=S(new st({vertexColors:!0,flatShading:!0,roughness:.6})),Y=S(new st({color:E?16777215:16765471,map:E,emissive:E?16777215:16756736,emissiveMap:E,emissiveIntensity:.7,flatShading:!0})),G=S(new st({color:2830138,flatShading:!0,roughness:.7})),J=S(new st({color:16773570,emissive:16765562,emissiveIntensity:d?2.5:.8,flatShading:!0})),re=C=>{for(let N of c)if(C>=N.s0&&C<N.s1)return N.height*(C-N.s0)/(N.s1-N.s0);return 0},me=C=>c.some(N=>C>=N.s0&&C<N.s1),_e=C=>u.some(N=>C>=N.s0&&C<=N.s1),ce=C=>{let N=C/o,z=Math.floor(N),Z=N-z;z=i.open?Math.max(0,Math.min(r-2,z)):(z%r+r)%r;let ae=s[z],Pe=s[(z+1)%r],He=Tn(ae.rx,Pe.rx,Z),Ge=Tn(ae.rz,Pe.rz,Z),q=Math.hypot(He,Ge)||1,oe=Tn(ae.tx,Pe.tx,Z),pe=Tn(ae.tz,Pe.tz,Z),ve=Math.hypot(oe,pe)||1,be=Tn(ae.y,Pe.y,Z);return{s:C,x:Tn(ae.x,Pe.x,Z),z:Tn(ae.z,Pe.z,Z),yb:be,y:be,h:0,rx:He/q,rz:Ge/q,tx:oe/ve,tz:pe/ve,w:Tn(ae.width,Pe.width,Z),curv:Tn(ae.curv,Pe.curv,Z),sample:!1}},ie=(C,N,z)=>({x:Tn(C.x,N.x,z),y:Tn(C.y,N.y,z),yb:Tn(C.yb,N.yb,z),z:Tn(C.z,N.z,z),rx:Tn(C.rx,N.rx,z),rz:Tn(C.rz,N.rz,z),w:Tn(C.w,N.w,z)}),Q=(C,N,z=0)=>[C.x+C.rx*N,C.y+z,C.z+C.rz*N],ee=(C,N,z=0)=>[C.x+C.rx*N,C.yb+z,C.z+C.rz*N],L=[];for(let C of c)L.push({s:C.s0,h:0},{s:C.s1,h:C.height},{s:C.s1,h:0});L.sort((C,N)=>C.s-N.s);let B=[],X=0,$=(C,N,z)=>{let Z=B[B.length-1];if(Z&&Math.abs(Z.s-C)<1e-9&&Math.abs(Z.h-N)<1e-9){Z.sample=Z.sample||z;return}let ae=ce(C);ae.h=N,ae.y=ae.yb+N,ae.sample=z,B.push(ae)};for(let C=0;C<r;C++){let N=C*o;for(;X<L.length&&L[X].s<=N+1e-9;)$(L[X].s,L[X].h,!1),X++;$(N,re(N),!0)}for(;X<L.length;)$(L[X].s,L[X].h,!1),X++;let de=B.length,we=[];for(let C=0;C<de&&!(i.open&&C===de-1);C++){let N=B[C],z=B[(C+1)%de],Z=N.s,ae=C+1<de?B[C+1].s:a,Pe=Math.abs(ae-Z)<1e-9,He=(Z+ae)/2;we.push({a:N,b:z,sa:Z,sb:ae,drop:Pe,mid:He,ramp:!Pe&&me(He)})}let Ae=new kn,V=new kn,Ve=new kn,ze=new kn,Be=new kn,Ie=new kn,qe=new kn,Fe=new kn,D=new kn,A=new kn,j=new kn,xe=new kn,ye=C=>C.w/2+6-Lm/2,he=C=>C.w/2+6+Lm/2;for(let C of we){let{a:N,b:z,sa:Z,sb:ae,mid:Pe}=C;if(C.drop){Ae.quad([Q(N,-N.w/2),Q(N,N.w/2),Q(z,z.w/2),Q(z,-z.w/2)],_t.rampDark,[N.tx,0,N.tz]);continue}let He=N.w/2,Ge=z.w/2;if(C.ramp)V.quad([Q(N,-He),Q(N,He),Q(z,Ge),Q(z,-Ge)],Math.floor(Pe/2)%2===0?_t.yellow:_t.black,[0,1,0]),Ae.quad([Q(N,-He),Q(z,-Ge),ee(z,-Ge),ee(N,-He)],_t.rampDark,[-N.rx,0,-N.rz]),Ae.quad([Q(N,He),ee(N,He),ee(z,Ge),Q(z,Ge)],_t.rampDark,[N.rx,0,N.rz]);else{Ae.quad([Q(N,-He),Q(N,He),Q(z,Ge),Q(z,-Ge)],i.open?Math.floor(Pe/8)%2?_t.motorwayB:_t.motorwayA:Math.floor(Pe/8)%2?_t.asphaltB:_t.asphaltA,[0,1,0]);for(let be of[-1,1])Ve.quad([Q(N,be*(He-.25),.02),Q(N,be*(He-.45),.02),Q(z,be*(Ge-.45),.02),Q(z,be*(Ge-.25),.02)],_t.white,[0,1,0]);let q=9,oe=3;for(let be=Math.floor(Z/q);be*q<ae;be++){let De=Math.max(Z,be*q),Ze=Math.min(ae,be*q+oe);if(Ze-De<1e-6)continue;let Ke=ie(N,z,(De-Z)/(ae-Z)),it=ie(N,z,(Ze-Z)/(ae-Z));Ve.quad([Q(Ke,-.08,.02),Q(Ke,.08,.02),Q(it,.08,.02),Q(it,-.08,.02)],_t.white,[0,1,0])}let pe=Math.abs((N.curv+z.curv)/2)>bb?1.2:.5,ve=Math.floor(Pe/2)%2?_t.red:_t.railA;for(let be of i.open?[]:[-1,1])Ve.quad([Q(N,be*He,.025),Q(N,be*(He+pe),.025),Q(z,be*(Ge+pe),.025),Q(z,be*Ge,.025)],ve,[0,1,0])}for(let q of[-1,1]){ze.quad([ee(N,q*He),ee(N,q*ye(N)),ee(z,q*ye(z)),ee(z,q*Ge)],i.open?_t.lane:_t.sand,[0,1,0]);let oe=Kl/2,pe=-ef/2,ve=-ef,be=[q*N.rx*.6,.8,q*N.rz*.6];ze.quad([ee(N,q*he(N),0),ee(N,q*(he(N)+oe),pe),ee(z,q*(he(z)+oe),pe),ee(z,q*he(z),0)],_t.gravel,be),ze.quad([ee(N,q*(he(N)+oe),pe),ee(N,q*(he(N)+Kl),ve),ee(z,q*(he(z)+Kl),ve),ee(z,q*(he(z)+oe),pe)],_t.gravel,be);let De=Math.floor(Pe/6)%2?_t.railB:_t.railA,Ze=q*ye(N),Ke=q*ye(z),it=q*he(N),rt=q*he(z);!i.open&&(q<0||d||e.openRight===!1)&&(Be.quad([ee(N,Ze,0),ee(N,Ze,si),ee(z,Ke,si),ee(z,Ke,0)],De,[-q*N.rx,0,-q*N.rz]),Be.quad([ee(N,it,0),ee(N,it,si),ee(z,rt,si),ee(z,rt,0)],De,[q*N.rx,0,q*N.rz]),Be.quad([ee(N,Ze,si),ee(N,it,si),ee(z,rt,si),ee(z,Ke,si)],De,[0,1,0])),d&&Ie.quad([ee(N,Ze,si+.02),ee(N,it,si+.02),ee(z,rt,si+.02),ee(z,Ke,si+.02)],q<0?_t.neonCyan:_t.neonMag,[0,1,0])}}for(let C of B){if(!C.sample||Math.abs(C.curv)<=Sb||Math.round(C.s/o)%8!==0||_e(C.s)||me(C.s))continue;let z=-Math.sign(C.curv)*(C.w/2+6+.6),ae=C.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];qe.quad([ee(C,z-.6,1),ee(C,z+.6,1),ee(C,z+.6,2),ee(C,z-.6,2)],[1,1,1],[-C.tx,0,-C.tz],ae),oa(j,[C.x+C.rx*z,C.yb+.35,C.z+C.rz*z],[[C.tx,0,C.tz],[C.rx,0,C.rz],[0,1,0]],[.08,.12,.65],_t.post)}let Ce=ce(0),Le=Math.max(4,Math.round(Ce.w)),Ne=Ce.w/Le;for(let C=0;C<3;C++){let N=ce(-2+C),z=ce(-1+C);for(let Z=0;Z<Le;Z++){let ae=-Ce.w/2+Z*Ne,Pe=ae+Ne;Ve.quad([Q(N,ae,.03),Q(N,Pe,.03),Q(z,Pe,.03),Q(z,ae,.03)],(C+Z)%2?_t.checkB:_t.checkW,[0,1,0])}}let ke=Ce.w/2+6+.5,Ee=[[Ce.tx,0,Ce.tz],[Ce.rx,0,Ce.rz],[0,1,0]];for(let C of[-1,1])oa(j,[Ce.x+Ce.rx*C*ke,Ce.yb+4,Ce.z+Ce.rz*C*ke],Ee,[.3,.3,4],_t.post);oa(j,[Ce.x,Ce.yb+7.5,Ce.z],Ee,[.5,ke,.5],_t.beam);let Ue=(C,N,z)=>[Ce.x+Ce.tx*C+Ce.rx*N,Ce.yb+z,Ce.z+Ce.tz*C+Ce.rz*N];xe.quad([Ue(-.55,-ke,5.2),Ue(-.55,ke,5.2),Ue(-.55,ke,6.8),Ue(-.55,-ke,6.8)],[1,1,1],[-Ce.tx,0,-Ce.tz],[[0,0],[1,0],[1,1],[0,1]]),xe.quad([Ue(.55,-ke,5.2),Ue(.55,ke,5.2),Ue(.55,ke,6.8),Ue(.55,-ke,6.8)],[1,1,1],[Ce.tx,0,Ce.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let C of h){let N=[];for(let Z=C.s0;Z<C.s1;Z+=2)N.push(Z);N.push(C.s1);let z=N.map(ce);for(let Z=0;Z+1<z.length;Z++){let ae=z[Z],Pe=z[Z+1],He=(ae.s-C.s0)/4,Ge=(Pe.s-C.s0)/4;Fe.quad([Q(ae,-ae.w/2,.04),Q(ae,ae.w/2,.04),Q(Pe,Pe.w/2,.04),Q(Pe,-Pe.w/2,.04)],[1,1,1],[0,1,0],[[He,0],[He,1],[Ge,1],[Ge,0]])}}let se=C=>{let N=C.w/2+Dm,z=[[-N,0],[-N,ra]];for(let Z=1;Z<=7;Z++){let ae=Math.PI-Z*Math.PI/8;z.push([N*Math.cos(ae),ra+Mb*Math.sin(ae)])}return z.push([N,ra],[N,0]),z},Se=(C,N,z,Z=0)=>[C.x+C.rx*N+C.tx*Z,C.yb+z,C.z+C.rz*N+C.tz*Z],ne=(C,N,z)=>{let Z=-N,ae=ra-z,Pe=Math.hypot(Z,ae)||1;return[C.rx*Z/Pe,ae/Pe,C.rz*Z/Pe]},Me=([C,N])=>{let z=-C,Z=ra-N,ae=Math.hypot(z,Z)||1;return[C+z/ae*.45,N+Z/ae*.45]};for(let C of u){let N=[];for(let Z=C.s0;Z<C.s1;Z+=2)N.push(Z);N.push(C.s1);let z=N.map(ce);for(let Z=0;Z+1<z.length;Z++){let ae=z[Z],Pe=z[Z+1],He=se(ae),Ge=se(Pe);for(let q=0;q<He.length-1;q++){let oe=(He[q][0]+He[q+1][0])/2,pe=(He[q][1]+He[q+1][1])/2;D.quad([Se(ae,He[q][0],He[q][1]),Se(ae,He[q+1][0],He[q+1][1]),Se(Pe,Ge[q+1][0],Ge[q+1][1]),Se(Pe,Ge[q][0],Ge[q][1])],i.open?q%2?_t.tunOchreA:_t.tunOchreB:q%2?_t.tunA:_t.tunB,ne(ae,oe,pe))}if(Math.round((ae.s-C.s0)/2)%6===0)for(let q=1;q<=8;q++){let oe=Me(He[q]),pe=Me(He[q+1]),ve=(oe[0]+pe[0])/2,be=(oe[1]+pe[1])/2;A.quad([Se(ae,oe[0],oe[1]),Se(ae,pe[0],pe[1]),Se(ae,pe[0],pe[1],.6),Se(ae,oe[0],oe[1],.6)],i.open?_t.sodium:q%2?_t.neonCyan:_t.neonMag,ne(ae,ve,be))}}for(let Z of[z[0],z[z.length-1]]){let ae=Z.w/2+Dm,Pe=[[Z.tx,0,Z.tz],[Z.rx,0,Z.rz],[0,1,0]];for(let He of[-1,1])oa(D,[Z.x+Z.rx*He*(ae+1.2),Z.yb+5,Z.z+Z.rz*He*(ae+1.2)],Pe,[2,1.1,5],_t.concrete);oa(D,[Z.x,Z.yb+10.5,Z.z],Pe,[2,ae+3.5,1.5],_t.concreteB)}}let fe=(C,N,z,Z=!1)=>{if(!C.idx.length)return null;let ae=new gt;ae.setAttribute("position",new lt(C.pos,3)),ae.setAttribute("color",new lt(C.col,3)),ae.setAttribute("uv",new lt(C.uv,2)),ae.setIndex(C.idx),ae.computeVertexNormals(),x.push(ae);let Pe=new ot(ae,N);return Pe.name=z,Pe.receiveShadow=Z,g.add(Pe),Pe};fe(Ae,T,"road-asphalt",!0),fe(V,_,"road-ramp-top"),fe(Ve,w,"road-paint"),fe(ze,M,"road-shoulder-talus"),fe(Be,b,"road-barriers"),d&&fe(Ie,R,"road-barrier-neon"),fe(qe,U,"road-chevrons"),fe(Fe,H,"road-boost"),fe(D,P,"road-tunnels"),fe(A,F,"road-tunnel-neon"),fe(j,O,"road-props"),fe(xe,Y,"road-start-sign");let ge=[];for(let C=1;C*Nm<a-5;C++){let N=C*Nm;if(u.some(Ge=>N>=Ge.s0-15&&N<=Ge.s1+15))continue;let z=ce(N),Z=C%2?1:-1,ae=Z*(z.w/2+6+2.6),Pe=z.yb-ef*Math.min(1,2.45/Kl),He=n.range(8.5,9.5);ge.push({x:z.x+z.rx*ae,z:z.z+z.rz*ae,y:Pe,h:He,hx:z.x+z.rx*(ae-Z*.6),hz:z.z+z.rz*(ae-Z*.6)})}if(ge.length){let C=new Pn(.18,.26,9,6,1),N=new ir(.55,0);x.push(C,N);let z=new Mn(C,G,ge.length),Z=new Mn(N,J,ge.length);z.name="road-lamp-masts",Z.name="road-lamp-heads";let ae=new je,Pe=new nn,He=new k,Ge=new k;ge.forEach((q,oe)=>{Ge.set(q.x,q.y+q.h/2,q.z),He.set(1,q.h/9,1),ae.compose(Ge,Pe,He),z.setMatrixAt(oe,ae),Ge.set(q.hx,q.y+q.h+.2,q.hz),He.set(1,1,1),ae.compose(Ge,Pe,He),Z.setMatrixAt(oe,ae)}),z.instanceMatrix.needsUpdate=!0,Z.instanceMatrix.needsUpdate=!0,g.add(z,Z)}return{group:g,update:(C,N)=>{v&&(v.offset.x=-(N*.9%1)),H.emissiveIntensity=2.2+.5*Math.sin(N*5)},dispose:()=>{g.removeFromParent();for(let C of x)C.dispose();for(let C of m)C.dispose();for(let C of p)C.dispose()}}}function Bm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new gt,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Om(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Om(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Om(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new mt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function sf(i,e){if(e===kp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ea||e===Ll){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ea)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function ar(i,e=.5,t=1){if(!i||i.userData.voxel||!(i.isMeshStandardMaterial||i.isMeshLambertMaterial))return i;i.userData.voxel=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"voxel-"+e+"-"+t,i.needsUpdate=!0,i}var wb=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function rf(i,e){i.traverse(t=>{if(!t.isMesh||wb.test(t.name))return;let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||ar(s,e(t),1)})}function zm(i,e,t=46){let n=[];for(let l=0;l<t;l++){let c=e.range(0,Math.PI*2),h=e.range(700,4200),u=Math.cos(c)*h,f=Math.sin(c)*h,d=e.range(260,520),g=e.range(26,46),x=e.int(5,11);for(let m=0;m<x;m++)n.push([u+Math.round(e.range(-3.5,3.5))*g,d+Math.round(e.range(0,1.4))*g*.6,f+Math.round(e.range(-2,2))*g,g*e.int(1,3),g*.6*e.int(1,2),g*e.int(1,2)])}let s=new cn(1,1,1),r=new ni({color:i.night?2765648:16777215,fog:!1,emissive:i.night?329487:new Re(16777215).lerp(new Re(i.skyHorizon),.35).multiplyScalar(.5)}),o=new Mn(s,r,n.length),a=new je;return n.forEach((l,c)=>{a.makeScale(l[3],l[4],l[5]),a.setPosition(l[0],l[1],l[2]),o.setMatrixAt(c,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function km(i,e,t,n,s,r,o,a,l,c){let h=e+s,u=t+r,f=n+o,d,g,x,m,p,S;s?(d=0,g=l?1:-1,x=0,m=0,p=0,S=c?1:-1):r?(d=a?1:-1,g=0,x=0,m=0,p=0,S=c?1:-1):(d=a?1:-1,g=0,x=0,m=0,p=l?1:-1,S=0);let y=i(h+d,u+g,f+x)?1:0,v=i(h+m,u+p,f+S)?1:0,E=i(h+d+m,u+g+p,f+x+S)?1:0;return .5+.1667*(y&&v?0:3-(y+v+E))}function Ps(i,e){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,s=t.attributes.color,r=512,o=(m,p,S)=>m+r+(p+r)*1024+(S+r)*1048576,a=new Map,l=(m,p,S,y,v,E)=>{let T=Math.floor(m/e),_=Math.floor(p/e),w=Math.floor(S/e),M=o(T,_,w);a.has(M)||a.set(M,[T,_,w,y,v,E])};for(let m=0;m<n.count;m+=3){let p=n.getX(m),S=n.getY(m),y=n.getZ(m),v=n.getX(m+1),E=n.getY(m+1),T=n.getZ(m+1),_=n.getX(m+2),w=n.getY(m+2),M=n.getZ(m+2),b=.6,R=.6,U=.6;s&&(b=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,R=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,U=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let H=Math.max(Math.hypot(v-p,E-S,T-y),Math.hypot(_-p,w-S,M-y),Math.hypot(_-v,w-E,M-T)),P=Math.max(1,Math.ceil(H/e*2));for(let F=0;F<=P;F++)for(let O=0;O<=P-F;O++){let Y=F/P,G=O/P;l(p+(v-p)*Y+(_-p)*G,S+(E-S)*Y+(w-S)*G,y+(T-y)*Y+(M-y)*G,b,R,U)}}let c=new Map;for(let m of a.values()){let p=m[0]+r+(m[2]+r)*1024,S=c.get(p);S||c.set(p,S=[]),S.push(m)}for(let m of c.values()){m.sort((p,S)=>p[1]-S[1]);for(let p=0;p<m.length-1;p++)for(let S=m[p][1]+1;S<m[p+1][1];S++)a.set(o(m[p][0],S,m[p][2]),[m[p][0],S,m[p][2],m[p][3],m[p][4],m[p][5]])}let h=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],u=[],f=[],d=[],g=(m,p,S)=>a.has(o(m,p,S));for(let m of a.values()){let[p,S,y,v,E,T]=m,_=Math.sin(p*12.9898+S*78.233+y*37.719)*43758.5453,w=.86+.24*(_-Math.floor(_));for(let[M,b,R,U]of h)if(!a.has(o(p+M,S+b,y+R)))for(let H of[0,1,2,0,2,3]){let P=U[H*3],F=U[H*3+1],O=U[H*3+2],Y=w*km(g,p,S,y,M,b,R,P,F,O);u.push((p+P)*e,(S+F)*e,(y+O)*e),f.push(M,b,R),d.push(v*Y,E*Y,T*Y)}}let x=new gt;return x.setAttribute("position",new lt(u,3)),x.setAttribute("normal",new lt(f,3)),x.setAttribute("color",new lt(d,3)),x.computeBoundingSphere(),x}function Yn(i,e,t,n,s,r=.2){let o=new Array(i*e*t),a=(x,m,p)=>x<0||m<0||p<0||x>=i||m>=e||p>=t?null:o[x+i*(m+e*p)];for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let p=0;p<i;p++)o[p+i*(m+e*x)]=s(p,m,x)||null;let l=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],c=[],h=[],u=[],f=-i/2,d=-t/2;for(let x=0;x<t;x++)for(let m=0;m<e;m++)for(let p=0;p<i;p++){let S=o[p+i*(m+e*x)];if(!S)continue;let y=Math.sin(p*12.9898+m*78.233+x*37.719)*43758.5453,v=1-r/2+r*(y-Math.floor(y));for(let[E,T,_,w]of l)if(!a(p+E,m+T,x+_)&&!(T<0&&m===0))for(let M of[0,1,2,0,2,3]){let b=w[M*3],R=w[M*3+1],U=w[M*3+2],H=v*km(a,p,m,x,E,T,_,b,R,U);c.push((p+f+b)*n,(m+R)*n,(x+d+U)*n),h.push(E,T,_),u.push(S[0]*H,S[1]*H,S[2]*H)}}let g=new gt;return g.setAttribute("position",new lt(c,3)),g.setAttribute("normal",new lt(h,3)),g.setAttribute("color",new lt(u,3)),g.computeBoundingSphere(),g}function Hm(i,e=1,t=null){if(!i||i.userData.wetRoad)return i;i.userData.wetRoad=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new je},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),i.needsUpdate=!0,i}function Vm(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<i.length;f+=4)t=Math.min(t,i[f]),n=Math.max(n,i[f]),s=Math.min(s,i[f+1]),r=Math.max(r,i[f+1]),o=Math.min(o,i[f+2]),a=Math.max(a,i[f+2]);let l=n-t+1,c=r-s+1,h=a-o+1,u=new Map;for(let f=0;f<i.length;f+=4){let d=i[f+3];u.set(i[f]-t+l*(i[f+1]-s+c*(i[f+2]-o)),[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255])}return Yn(l,c,h,e,(f,d,g)=>u.get(f+l*(d+c*g))||null,.12)}function Gm(i,e=3.1,t=2.6){if(!i||!i.userData.voxel||i.userData.windows)return i;i.userData.windows=!0;let n=i.onBeforeCompile;i.onBeforeCompile=(r,o)=>{n?.call(i,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=i.customProgramCacheKey?.()||"";return i.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,i.needsUpdate=!0,i}function Wm(i){let e={value:0};return i.onBeforeCompile=t=>{t.uniforms.uSeaTime=e,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"sea-waves",i.needsUpdate=!0,e}var fn=5,Xm=1,Is=450,$n=40,qm=12e3,Ym=32,$m=4e3,Zn=Math.PI*2,aa=new Ft,uo=new Re,Zm=new je,Km=new je,Ab=new k(0,1,0),jm=i=>i<0?0:i>1?1:i,Ii=(i,e,t)=>i<e?e:i>t?t:i,lr=(i,e,t)=>{let n=jm((t-i)/(e-i));return n*n*(3-2*n)};function Rb(i){let e=(n,s)=>{let r=Math.imul(n|0,374761393)+Math.imul(s|0,668265263)+i|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(n,s)=>{let r=Math.floor(n),o=Math.floor(s),a=n-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=e(r,o),f=e(r+1,o),d=e(r,o+1),g=e(r+1,o+1);return u+(f-u)*c+(d-u)*h+(u-f-d+g)*c*h};return(n,s)=>(t(n,s)*.5+t(n*2+17.3,s*2-9.1)*.25+t(n*4-3.7,s*4+11.2)*.125)/.875}var co=i=>{let e=new Re(i);return[e.r,e.g,e.b]},Ls={sand:co(14271631),dry:co(7317050),garrigue:co(5212718),rock:co(12169890),pale:co(13617336),snow:co(15855076)},Cb=[16513264,15853260,14725754,16052195],Pb=[9075302,7236192,11047018,8023646],Ib=[3407871,16727250,16757051],Jl=0,Ql=0,ec=0,la=(i,e)=>{Jl+=(i[0]-Jl)*e,Ql+=(i[1]-Ql)*e,ec+=(i[2]-ec)*e};function Lb(i,e,t,n,s,r){Jl=Ls.sand[0],Ql=Ls.sand[1],ec=Ls.sand[2],la(Ls.dry,lr(2.5,7,i)),la(Ls.garrigue,lr(25,75,i)*.55),la(Ls.rock,lr(.4,.65,e)),la(Ls.pale,lr(95,120,i)*.8),la(Ls.snow,lr(125,150,i));let o=Jl*t,a=Ql*t,l=ec*t;n&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function ri(i,e){let t=i.index?i.toNonIndexed():i;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let n=t.attributes.position.count,s=new Float32Array(n*3);uo.setHex(e);for(let r=0;r<n;r++)s[r*3]=uo.r,s[r*3+1]=uo.g,s[r*3+2]=uo.b;return t.setAttribute("color",new mt(s,3)),t}var ca=i=>Bm(i,!1);function Db(i,e,t){let n=Math.sin(i*12.9898+e*78.233+t*37.719)*43758.5453;return n-Math.floor(n)}function Nb(){let i=new ir(1,0),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*Db(n,s,r);e.setXYZ(t,n*o,s*o,r*o)}return i.computeVertexNormals(),i}function Ub(){return ca([ri(new Pn(.35,.5,6,6).translate(0,3,0),7162931),ri(new ir(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function Fb(){return ca([ri(new Pn(.25,.35,1.2,5).translate(0,.6,0),7162931),ri(new nr(1.1,10,6).translate(0,6,0),3037756)])}function Ob(){let i=[ri(new Pn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new nr(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*Zn/7);i.push(ri(t,5214010))}return ca(i)}function Bb(){return ca([ri(new Pn(1.6,2.3,13,8).translate(0,6.5,0),16052712),ri(new Pn(2,2,2.2,8).translate(0,6.5,0),12727595),ri(new Pn(1.3,1.3,1.8,8).translate(0,14,0),16771488),ri(new nr(1.7,1.2,8).translate(0,15.4,0),3812906)])}function zb(){return ca([ri(new cn(2.2,.9,6).translate(0,.45,0),15986662),ri(new nr(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function yi(i,e,t,n=!0){let s=new Mn(i,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];aa.position.set(o.x,o.y,o.z),aa.rotation.set(0,o.ry??0,0),aa.scale.set(o.sx??1,o.sy??1,o.sz??1),aa.updateMatrix(),s.setMatrixAt(r,aa.matrix),o.col!==void 0&&(uo.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,uo))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=n,s}var kb=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Hb=`
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
}`;function Jm(i,e,t,n){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,l=Rb(n.int(1,1073741808)),c=o.minX-Is-$n,h=o.minZ-Is-$n,u=Math.ceil((o.maxX-o.minX+2*Is)/$n)+3,f=Math.ceil((o.maxZ-o.minZ+2*Is)/$n)+3,d=Array.from({length:u*f},()=>[]);for(let q=0;q<r;q++){let oe=Ii(Math.floor((s[q].x-c)/$n),0,u-1),pe=Ii(Math.floor((s[q].z-h)/$n),0,f-1);d[pe*u+oe].push(q)}let g=0;function x(q,oe){let pe=Math.floor((q-c)/$n),ve=Math.floor((oe-h)/$n),be=Math.max(u,f),De=1/0,Ze=0;for(let Ke=0;Ke<=be;Ke++){for(let rt=ve-Ke;rt<=ve+Ke;rt++){if(rt<0||rt>=f)continue;let Ht=rt===ve-Ke||rt===ve+Ke?1:2*Ke;for(let Dt=pe-Ke;Dt<=pe+Ke;Dt+=Ht){if(Dt<0||Dt>=u)continue;let Vt=d[rt*u+Dt];for(let Xt=0;Xt<Vt.length;Xt++){let mn=Vt[Xt],I=s[mn],K=I.x-q,le=I.z-oe,ue=K*K+le*le;ue<De&&(De=ue,Ze=mn)}}}let it=Ke*$n;if(De<=it*it)break}return g=Math.sqrt(De),Ze}function m(q,oe,pe){let ve=pe*pe,be=1/0,De=Ii(Math.floor((q-pe-c)/$n),0,u-1),Ze=Ii(Math.floor((q+pe-c)/$n),0,u-1),Ke=Ii(Math.floor((oe-pe-h)/$n),0,f-1),it=Ii(Math.floor((oe+pe-h)/$n),0,f-1);for(let rt=Ke;rt<=it;rt++)for(let Et=De;Et<=Ze;Et++){let Ht=d[rt*u+Et];for(let Dt=0;Dt<Ht.length;Dt++){let Vt=s[Ht[Dt]],Xt=Vt.x-q,mn=Vt.z-oe;Xt*Xt+mn*mn<=ve&&Vt.y<be&&(be=Vt.y)}}return be}let p=Math.ceil(r/4),S=new Float64Array(p*2);for(let q=0;q<p;q++)S[2*q]=s[q*4%r].x,S[2*q+1]=s[q*4%r].z;function y(q,oe){let pe=!1;for(let ve=0,be=p-1;ve<p;be=ve++){let De=S[2*ve],Ze=S[2*ve+1],Ke=S[2*be],it=S[2*be+1];Ze>oe!=it>oe&&q<(Ke-De)*(oe-Ze)/(it-Ze)+De&&(pe=!pe)}return pe}let v=o.minX-Is,E=o.minZ-Is,T=Math.ceil((o.maxX-o.minX+2*Is)/fn)+1,_=Math.ceil((o.maxZ-o.minZ+2*Is)/fn)+1,w=new Float32Array(T*_);for(let q=0;q<_;q++)for(let oe=0;oe<T;oe++){let pe=v+oe*fn,ve=E+q*fn,be=x(pe,ve),De=g,Ze=s[be],Ke=Ze.width*.5,it=Ze.y;if(De<40){let K=m(pe,ve,24);K<it&&(it=K)}let rt=1;if(!y(pe,ve)){let K=De-Ke+(l(pe/140+31.7,ve/140-8.2)-.5)*70;rt=1-lr(110,200,K)}let Et=l(pe/260,ve/260),Dt=-15+(10+130*Math.pow(jm((Et-.42)/.5),1.5)+6*Et+15)*rt;if(rt>=1){let K=l(pe/90+11.3,ve/90-4.1);Dt=Math.max(Dt,it+6+38*K)}let Vt=lr(Ke+6+12,Ke+6+62,De),Xt=it-.6,mn=Xt+(Dt-Xt)*Vt,I=it+Math.max(0,De-Ke-6-12)*1.2;mn>I&&(mn=I),w[q*T+oe]=mn}let M=null;function b(q,oe){if(M)return M(q,oe);let pe=(q-v)/fn,ve=(oe-E)/fn;pe=Ii(pe,0,T-1.000001),ve=Ii(ve,0,_-1.000001);let be=Math.floor(pe),De=Math.floor(ve),Ze=pe-be,Ke=ve-De,it=w[De*T+be],rt=w[De*T+be+1],Et=w[(De+1)*T+be],Ht=w[(De+1)*T+be+1],Dt=it+(rt-it)*Ze,Vt=Et+(Ht-Et)*Ze;return Dt+(Vt-Dt)*Ke}let R=(q,oe)=>Math.max(Math.abs(b(q+4,oe)-b(q-4,oe)),Math.abs(b(q,oe+4)-b(q,oe-4)))/8,U=(q,oe,pe)=>{let ve=x(q,oe);return g>=s[ve].width*.5+6+4+pe},H=[],P=[],F=new Float32Array(9),O=(q,oe,pe,ve,be,De,Ze,Ke,it)=>{let rt=ve-q,Et=be-oe,Ht=De-pe,Dt=Ze-q,Vt=Ke-oe,Xt=it-pe,mn=Et*Xt-Ht*Vt,I=Ht*Dt-rt*Xt,K=rt*Vt-Et*Dt,le=Math.hypot(mn,I,K)||1,ue=1-Math.abs(I)/le;H.push(q,oe,pe,ve,be,De,Ze,Ke,it),Lb((oe+be+Ke)/3,ue,.9+.2*n.next(),a,F,0);for(let te=0;te<9;te++)P.push(F[te])},Y=T-1,G=_-1,J=new Float32Array(Y*G);for(let q=0;q<G;q++)for(let oe=0;oe<Y;oe++){let pe=q*T+oe,ve=(w[pe]+w[pe+1]+w[pe+T]+w[pe+T+1])/4;J[q*Y+oe]=Math.floor(ve/Xm)*Xm}let re=-4;for(let q=0;q<G;q++)for(let oe=0;oe<Y;oe++){let pe=J[q*Y+oe],ve=v+oe*fn,be=E+q*fn,De=ve+fn,Ze=be+fn;if(pe>re&&(O(ve,pe,be,ve,pe,Ze,De,pe,be),O(De,pe,be,ve,pe,Ze,De,pe,Ze)),oe+1<Y){let Ke=J[q*Y+oe+1],it=Math.min(pe,Ke),rt=Math.max(pe,Ke);rt>it&&rt>re&&(O(De,it,be,De,rt,be,De,rt,Ze),O(De,it,be,De,rt,Ze,De,it,Ze))}if(q+1<G){let Ke=J[(q+1)*Y+oe],it=Math.min(pe,Ke),rt=Math.max(pe,Ke);rt>it&&rt>re&&(O(ve,it,Ze,ve,rt,Ze,De,rt,Ze),O(ve,it,Ze,De,rt,Ze,De,it,Ze))}}M=(q,oe)=>{let pe=Ii(Math.floor((q-v)/fn),0,Y-1),ve=Ii(Math.floor((oe-E)/fn),0,G-1);return J[ve*Y+pe]};let me=new gt;me.setAttribute("position",new lt(H,3)),me.setAttribute("color",new lt(P,3)),me.computeVertexNormals(),me.computeBoundingSphere();let _e=new ot(me,new st({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:Ct}));_e.receiveShadow=!0;let ce=new ht;ce.name="environment",ce.add(_e);let ie=(o.minX+o.maxX)/2,Q=(o.minZ+o.maxZ)/2,ee=new Bn(qm,qm,Ym,Ym);ee.rotateX(-Math.PI/2);let L=ee.attributes.position,B=L.count,X=new Float32Array(B),$=new Float32Array(B);for(let q=0;q<B;q++)X[q]=L.getX(q),$[q]=L.getZ(q);let de=new ot(ee,new st({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));de.position.set(ie,0,Q),ce.add(de);let we=new k(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Ae=new ht,V=new vt({uniforms:{topColor:{value:new Re(t.skyTop)},horizonColor:{value:new Re(t.skyHorizon)},sunColor:{value:new Re(t.sunColor)},sunDir:{value:we},night:{value:a?1:0}},vertexShader:kb,fragmentShader:Hb,side:Qt,depthWrite:!1,fog:!1}),Ve=new ot(new Ts($m,32,16),V);if(Ve.renderOrder=-10,Ve.frustumCulled=!1,Ae.add(Ve),a){let oe=new Float32Array(1500);for(let be=0;be<500;be++){let De=n.range(0,Zn),Ze=Math.asin(n.range(.05,.98)),Ke=$m*.97;oe[be*3]=Ke*Math.cos(Ze)*Math.cos(De),oe[be*3+1]=Ke*Math.sin(Ze),oe[be*3+2]=Ke*Math.cos(Ze)*Math.sin(De)}let pe=new gt;pe.setAttribute("position",new mt(oe,3));let ve=new bs(pe,new tr({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));ve.frustumCulled=!1,Ae.add(ve)}ce.add(Ae);let ze=new io(t.hemiSky,t.hemiGround,t.hemiIntensity),Be=new wi(t.sunColor,t.sunIntensity);Be.castShadow=!0,Be.shadow.mapSize.set(2048,2048);let Ie=Be.shadow.camera;Ie.left=-90,Ie.right=90,Ie.top=90,Ie.bottom=-90,Ie.near=1,Ie.far=600,Ie.updateProjectionMatrix(),Be.shadow.bias=-5e-4,ce.add(ze,Be,Be.target);let qe=i.fog,Fe=i.background,D=new Qr(t.fogColor,t.fogDensity),A=new Re(t.skyHorizon);i.fog=D,i.background=A;let j=v+(T-1)*fn,xe=E+(_-1)*fn,ye=()=>n.range(v+30,j-30),he=()=>n.range(E+30,xe-30),Ce=(q,oe,pe)=>{let ve=[];for(let be=0;be<oe&&ve.length<q;be++){let De=pe(ye(),he());De&&ve.push(De)}return ve},Le=Ce(320,4e4,(q,oe)=>{let pe=b(q,oe);if(pe<4||pe>95||!U(q,oe,2)||R(q,oe)>.6)return null;let ve=n.range(.8,1.45);return{x:q,y:pe-.3,z:oe,sx:ve,sy:ve*n.range(.9,1.3),sz:ve,ry:n.range(0,Zn),col:16777215,v:n.range(.85,1.15)}}),Ne=Ce(170,4e4,(q,oe)=>{let pe=b(q,oe);if(pe<6||pe>70||!U(q,oe,1.5)||R(q,oe)>.6)return null;let ve=n.range(.8,1.3);return{x:q,y:pe-.3,z:oe,sx:ve,sy:ve*n.range(.9,1.25),sz:ve,ry:n.range(0,Zn),col:16777215,v:n.range(.85,1.15)}}),ke=Ce(110,4e4,(q,oe)=>{let pe=b(q,oe);if(pe<1.8||pe>14||!U(q,oe,2)||R(q,oe)>.5)return null;let ve=n.range(.85,1.25);return{x:q,y:pe-.3,z:oe,sx:ve,sy:ve,sz:ve,ry:n.range(0,Zn),col:16777215,v:n.range(.9,1.1)}});ce.add(yi(Ps(Ub(),.8),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Le)),ce.add(yi(Ps(Fb(),.7),new st({vertexColors:!0,flatShading:!0,roughness:.9}),Ne)),ce.add(yi(Ps(Ob(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.9}),ke));let Ee=Ce(300,3e4,(q,oe)=>{let pe=b(q,oe);if(pe<1.5)return null;let ve=n.range(1.2,4.5);return U(q,oe,ve*.6)?{x:q,y:pe+ve*.15,z:oe,sx:ve,sy:ve*n.range(.55,.9),sz:ve,ry:n.range(0,Zn),col:n.pick(Pb),v:n.range(.85,1.15)}:null}),Ue=Ce(3,3e4,(q,oe)=>{if(b(q,oe)>-4)return null;let pe=x(q,oe);if(g<s[pe].width*.5+200||g>800)return null;let ve=n.range(25,45);return{x:q,y:.1*ve,z:oe,sx:ve,sy:ve*.45,sz:ve,ry:n.range(0,Zn),col:10260344,v:1}});ce.add(yi(Ps(Nb(),.42),new st({color:16777215,flatShading:!0,roughness:.95}),Ee.concat(Ue)));let se=[],Se=[],ne=[],Me=n.int(3,5),fe=0;for(let q=0;q<4e3&&fe<Me;q++){let oe=ye(),pe=he(),ve=x(oe,pe),be=s[ve].width*.5;if(g<be+25||g>be+80)continue;let De=b(oe,pe);if(De<6||De>40||R(oe,pe)>.35)continue;fe++;let Ze=n.int(7,12);for(let Ke=0;Ke<Ze;Ke++){let it=n.range(0,Zn),rt=Math.sqrt(n.next())*18,Et=oe+Math.cos(it)*rt,Ht=pe+Math.sin(it)*rt,Dt=x(Et,Ht);if(g<s[Dt].width*.5+6+4+4)continue;let Vt=b(Et,Ht);if(Vt<3)continue;let Xt=n.range(4,6.5),mn=n.range(3.5,6),I=n.range(4,6.5),K=n.pick([0,Math.PI/2])+n.range(-.15,.15),le=Vt-1;if(se.push({x:Et,y:le,z:Ht,ry:K,sx:Xt,sy:mn,sz:I,col:n.pick(Cb),v:1}),Se.push({x:Et,y:le+mn,z:Ht,ry:K,sx:Xt*1.08,sy:n.range(1.8,2.6),sz:I*1.08}),a)for(let ue of[-1,1]){let te=ue*Xt*.28,Oe=I/2+.03;ne.push({x:Et+te*Math.cos(K)+Oe*Math.sin(K),y:le+mn*.55,z:Ht-te*Math.sin(K)+Oe*Math.cos(K),ry:K})}}}let ge=new st({color:16777215,flatShading:!0,roughness:.85}),W=new st({color:11818298,flatShading:!0,roughness:.8});if(se.length){let q=new cn(1,1,1).translate(0,.5,0),oe=Ps(new Pn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);ce.add(yi(q,ge,se),yi(oe,W,Se))}if(a&&ne.length){let q=new cn(1.2,1.1,.12);ce.add(yi(q,new Yt({color:16761466}),ne,!1))}if(a){let q=0,oe=0,pe=!1;for(let ve=0;ve<4e3&&!pe;ve++){let be=ye(),De=he(),Ze=x(be,De),Ke=s[Ze].width*.5;if(g<Ke+220||g>Ke+420)continue;let it=b(be,De);it<6||it>30||(q=be,oe=De,pe=!0)}if(pe){let ve=[],be=[],De=n.int(9,13);for(let Ze=0;Ze<De;Ze++){let Ke=q+n.range(-110,110),it=oe+n.range(-110,110),rt=b(Ke,it);if(rt<2)continue;let Et=n.range(6,10),Ht=n.range(30,70);ve.push({x:Ke,y:rt,z:it,sx:Et,sy:Ht,sz:Et,col:1777720,v:n.range(.8,1.2)});let Dt=n.pick(Ib);for(let Vt=0;Vt<3;Vt++){let Xt=Vt*Zn/3+n.range(0,.5);be.push({x:Ke+Math.cos(Xt)*Et*.88,y:rt+Ht*.05,z:it+Math.sin(Xt)*Et*.88,ry:-Xt,sy:Ht*.9,col:Dt,v:1})}}ce.add(yi(new Pn(.72,1,1,6).translate(0,.5,0),new st({color:16777215,flatShading:!0,roughness:.7}),ve),yi(new cn(.5,1,.25).translate(0,.5,0),new Yt({color:16777215}),be,!1))}}{let q=[],oe=[];for(let ve=1;ve<_-1;ve++)for(let be=1;be<T-1;be++){let De=ve*T+be,Ze=w[De];if(Ze<2||Ze>30)continue;let Ke=x(v+be*fn,E+ve*fn);if(g<s[Ke].width*.5+60)continue;(w[De-1]<0||w[De+1]<0||w[De-T]<0||w[De+T]<0?q:oe).push(De)}let pe=q.length?q:oe;if(pe.length){let ve=n.pick(pe),be=ve%T,De=(ve-be)/T,Ze=new ot(Ps(Bb(),.6),new st({vertexColors:!0,flatShading:!0,roughness:.6}));Ze.position.set(v+be*fn,w[ve]-.5,E+De*fn),Ze.castShadow=!0,ce.add(Ze)}}let Te=Ce(4,2e4,(q,oe)=>{if(b(q,oe)>-3)return null;let pe=x(q,oe);return g<s[pe].width*.5+250||g>900?null:{x:q,y:-.2,z:oe,ry:n.range(0,Zn),col:16777215,v:1}});Te.length&&ce.add(yi(Ps(zb(),.5),new st({vertexColors:!0,flatShading:!0,roughness:.6}),Te));let C=[],N=[];for(let q=0;q<2e4&&C.length<3;q++){let oe=ye(),pe=he(),ve=x(oe,pe);if(g<s[ve].width*.5+60)continue;let be=b(oe,pe);be<55||C.some(De=>Math.hypot(De.x-oe,De.z-pe)<200)||C.push({x:oe,y:be,z:pe,ry:n.range(0,Zn),speed:n.range(.9,1.5),phase:n.range(0,Zn)})}let z=new cn(.7,14,.22).translate(0,7,0),Z=new st({color:15659507,flatShading:!0,roughness:.6}),ae=null;if(C.length){ce.add(yi(new Pn(.8,.35,30,6).translate(0,15,0),Z,C));for(let q of C)N.push(new je().compose(new k(q.x,q.y+30,q.z),new nn().setFromAxisAngle(Ab,q.ry),new k(1,1,1)));ae=new Mn(z,Z,C.length*3),ae.castShadow=!0,ce.add(ae)}function Pe(q){if(ae){for(let oe=0;oe<C.length;oe++){let pe=q*C[oe].speed+C[oe].phase;for(let ve=0;ve<3;ve++)Km.makeRotationZ(pe+ve*Zn/3),Zm.multiplyMatrices(N[oe],Km),ae.setMatrixAt(oe*3+ve,Zm)}ae.instanceMatrix.needsUpdate=!0}}Pe(0);function He(q,oe,pe){Be.position.set(pe.x+we.x*200,pe.y+we.y*200,pe.z+we.z*200),Be.target.position.set(pe.x,pe.y,pe.z),Ae.position.set(pe.x,0,pe.z);for(let ve=0;ve<B;ve++)L.setY(ve,.35*Math.sin(X[ve]*.02+oe*.8)+.25*Math.cos($[ve]*.017-oe*.6));L.needsUpdate=!0,Pe(oe)}function Ge(){i.remove(ce),ce.traverse(q=>{if(q.geometry&&q.geometry.dispose(),q.material){let oe=Array.isArray(q.material)?q.material:[q.material];for(let pe of oe)pe.dispose()}}),Be.shadow.map&&Be.shadow.map.dispose(),ce.clear(),i.fog===D&&(i.fog=qe??null),i.background===A&&(i.background=Fe??null)}return i.add(ce),{group:ce,sun:Be,update:He,dispose:Ge,heightAt:b}}var nc=[.62,.6,.55],Ds=[.5,.49,.45],af=[.72,.3,.18],e0=[.6,.24,.15],lf=[.16,.2,.28],Vb=[.2,.38,.3],t0=[.36,.25,.16],ho=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],ur=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],gn=(i,e,t)=>{let n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function tc(i,e,t,n){let s=n*3+1,r=Math.ceil(t/2);return Yn(e+2,s+r+1,t+2,1,(o,a,l)=>{let c=o-1,h=l-1;if(a<s){if(c<0||h<0||c>=e||h>=t)return null;if(!(c===0||h===0||c===e-1||h===t-1))return a===s-1?i:null;let d=c===0||c===e-1?h:c,g=c===0||c===e-1?t:e;return a%3===2&&d%3===1&&d<g-1?lf:a%3===2&&d%3===2&&d<g-1&&gn(c,a,h)>.45?Vb:a===0?Ds:i}let u=a-s;return h>=u-1&&h<=t-u&&u<=r?(c+u)%2?af:e0:null},.14)}function Gb(i){return Yn(7,23,7,1,(n,s,r)=>{let o=n-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?lf:s===0?Ds:i:s===16?i:null;let l=s-17;return n>=l&&n<=6-l&&r>=l&&r<=6-l?(n+r)%2?af:e0:null},.14)}function Wb(i){let r=[];for(let o=0;o<6;o++)r.push([11+(gn(i,o,1)-.5)*9,13+gn(i,o,2)*6,11+(gn(i,o,3)-.5)*9,3.6+gn(i,o,4)*2.4]);return Yn(22,24,22,.7,(o,a,l)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(l-11+.5)<1.3)return t0;for(let c of r){let h=o-c[0],u=(a-c[1])*1.25,f=l-c[2];if(h*h+u*u+f*f<c[3]*c[3])return ho[Math.floor(gn(o,a,l)*ho.length)]}return null},.22)}function Xb(){return Yn(14,16,8,.5,(i,e,t)=>{let s=5+Math.floor((i-1)/2)*1.6;return i===0?e<5?(e+t)%3?nc:Ds:null:i>=1&&i<13&&e<s?e>=s-1?[.42,.42,.44]:Ds:i===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function of(i,e){let r=e-3-9;return Yn(i,e+2,5,1,(o,a,l)=>{let c=o%22,h=a>=e&&(l===0||l===4);if(a>=e)return h?Ds:null;if(a>=e-2)return(o+a+l)%3?nc:Ds;if(c<4)return(o+a+l)%4?nc:Ds;if(a<r)return null;let u=c-4-9+.5,f=a-r;return u*u+f*f>81?(o+a+l)%3?nc:Ds:null},.14)}function qb(i){return Yn(6,4,6,.5,(t,n,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(n-.8)*1.5,l=2.5+(gn(t+i,n,s)-.5)*1.2;return r*r+a*a+o*o<l*l?ho[Math.floor(gn(t,n+i,s)*ho.length)]:null},.22)}function Yb(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Yn(6,20,6,.6,(n,s,r)=>{let o=n-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?t0:null;let l=(s-2)/18,c=2.6*Math.sin(Math.PI*Math.min(1,.18+l*.82))**.7*(1-l*.55)+.3;return o*o+a*a<c*c?t[Math.floor(gn(n,s,r)*3)]:null},.2)}function Qm(i){let r=(a,l)=>{let c=(a-15+.5)/15,h=(l-15+.5)/(30/2),u=Math.hypot(c,h)+(gn(Math.floor(a/3)+i,0,Math.floor(l/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-u)/.16)),d=14+Math.floor(gn(Math.floor(a/5),i,Math.floor(l/5))*3)*2;return Math.floor(d*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let l=Math.floor(15+(gn(i,a,1)-.5)*14),c=Math.floor(15+(gn(i,a,2)-.5)*14);o.push([l,c,r(l,c),ur[Math.floor(gn(i,a,3)*ur.length)],a===0?7:3])}return Yn(30,26,30,1.6,(a,l,c)=>{let h=r(a,c);for(let[d,g,x,m,p]of o){let S=Math.abs(a-d),y=Math.abs(c-g),v=p>3?1:2;if(S<=v&&y<=1&&l>=x&&l<x+p)return l===x+p-2&&S!==v&&y===1?lf:m;if(S<=v&&y<=1-(l-x-p)&&l>=x+p&&l<x+p+2)return af}if(l>=h)return null;if(l===h-1)return gn(a,5,c)>.75?ho[0]:[.36,.56,.2];let u=l%5===0?.86:1,f=.93+.14*gn(Math.floor(a/2),l,Math.floor(c/2));return gn(a,l,c)>.965?ho[2]:[.74*u*f,.71*u*f,.64*u*f]},.1)}function cr(i,e,t){let n=new Mn(i,e,t.length),s=new je,r=new nn,o=new k,a=new k,l=new k(0,1,0);return t.forEach((c,h)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??c.s??1,c.sy??c.s??1,c.sz??c.s??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),n.setMatrixAt(h,s),c.color&&n.setColorAt(h,c.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n}function $b(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=1024,i.height=192;let e=i.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let n of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(n+s*72,192),e.lineTo(n+s*72+36,192),e.lineTo(n+s*72+108,0),e.lineTo(n+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new vi(i);return t.colorSpace=Rt,t.anisotropy=8,t}function n0(i,e,t,n){let s=new ht;s.name="scenery";let r=[],o=()=>{let P=new st({vertexColors:!0,roughness:.9,metalness:0});return r.push(P),P},a=(P,F)=>{F.length&&(r.push(P),s.add(cr(P,o(),F)))},l={x:0,y:0,z:0,heading:0},c=i.length,h=P=>!!Cs(i,(P%c+c)%c,"tunnel"),u=P=>i.pts[Math.floor((P%c+c)%c/i.step)%i.pts.length].width,f=(P,F)=>{let O=1/0;for(let Y=0;Y<i.pts.length;Y+=3){let G=i.pts[Y],J=(G.x-P)*(G.x-P)+(G.z-F)*(G.z-F);J<O&&(O=J)}return Math.sqrt(O)},d=(P,F)=>{let O=Math.floor(P/i.step);for(let Y=0;Y<F/i.step;Y+=4)if(Math.abs(i.pts[(O+Y)%i.pts.length].curv)>.004)return!1;return!h(P)&&!h(P+F/2)&&!h(P+F)},g=[[24,22,-1]];for(let P=380;P<c-220&&g.length<4;P+=70)d(P-10,80)&&(g.push([P,14,t.sign()]),P+=420);let x=[],m=[],p=[],S=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],y=P=>g.some(([F,O])=>P>F-12&&P<F+O*4+12);for(let[P,F,O]of g)for(let Y=0;Y<F;Y++){let G=P+Y*4,J=O*(u(G)/2+6+.6);Pt(i,G,J,l);let re=l.heading+O*Math.PI/2,me=Math.sin(l.heading),_e=Math.cos(l.heading),ce=-O*_e,ie=O*me;x.push({x:l.x+ce*3.5,y:l.y-.3,z:l.z+ie*3.5,ry:re});for(let Q=0;Q<6;Q++)for(let ee=0;ee<4;ee++){if(t.next()<.18)continue;let L=-1.6+ee*1.05+t.range(-.15,.15),B=1+Q*1,X=l.x+ce*B+me*L,$=l.z+ie*B+_e*L,de=l.y-.3+2.5+Q*.8,we=new Re(t.pick(S));m.push({x:X,y:de+.4,z:$,ry:l.heading,sx:.5,sy:.8,sz:.36,color:we}),p.push({x:X,y:de+1,z:$,ry:l.heading,sx:.36,sy:.36,sz:.36,color:new Re(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:X-ce*.12,y:de-.1,z:$-ie*.12,ry:l.heading,sx:.46,sy:.3,sz:.5,color:new Re(t.pick([2042436,2829099,3820138,5916210]))}),p.push({x:X,y:de+1.22,z:$,ry:l.heading,sx:.4,sy:.12,sz:.4,color:new Re(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:X+me*.32,y:de+1.05,z:$+_e*.32,ry:l.heading,sx:.14,sy:.6,sz:.14,color:we})}}if(a(Xb(),x),m.length){let P=new cn(1,1,1);r.push(P);let F=new st({roughness:.85});r.push(F),s.add(cr(P,F,m),cr(P,F,p));let O=x.map(Y=>({x:Y.x,y:Y.y+8.2,z:Y.z,ry:Y.ry,sx:8,sy:.4,sz:4.05,color:new Re(2303534)}));s.add(cr(P,F,O))}let v=$b(),E=new st({map:v,color:v?16777215:15921128,roughness:.7,side:Ct});r.push(E),v&&r.push(v);let T=new Bn(1,1);r.push(T);let _=[],w=(P,F)=>{if(h(P))return;let O=F*(u(P)/2+6-.22);Pt(i,P,O,l),_.push({x:l.x,y:l.y+.52,z:l.z,ry:l.heading+(F<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let P=120;P<240;P+=13)w(P,-1);for(let P=30;P<110;P+=13)w(P,1);for(let P=400;P<c-80;P+=260)w(P,-1),w(P+13,-1),w(P+120,1);if(_.length){let P=cr(T,E,_);P.castShadow=!1,s.add(P)}let M=[[],[],[]];for(let P=130;P<c-20;P+=t.range(13,28)){if(y(P)||h(P)||h(P+12)||h(P-12))continue;let O=(t.next()<.82?-1:1)*(u(P)/2+6+t.range(3.4,6.5));Pt(i,P,O,l);let Y=n?n(l.x,l.z):l.y;Y<1.5||M[t.int(0,2)].push({x:l.x,y:Y-.2,z:l.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(M.forEach((P,F)=>a(Wb(11+F*7),P)),n){let P=[];for(let J=200;J<c-100;J+=45)for(let re of[-1,1]){let me=re*t.range(70,150);Pt(i,J,me,l);let _e=n(l.x,l.z);_e>l.y+6&&_e>6&&f(l.x,l.z)>55&&P.push({x:l.x,z:l.z,y:_e,score:_e-l.y+t.range(0,4)})}P.sort((J,re)=>re.score-J.score);let F=[];for(let J of P){if(F.length>=4)break;F.every(re=>Math.hypot(re.x-J.x,re.z-J.z)>220)&&F.push(J)}let O=[{geo:tc(ur[0],8,7,2),items:[]},{geo:tc(ur[1],10,7,3),items:[]},{geo:tc(ur[2],7,6,2),items:[]},{geo:tc(ur[3],9,8,3),items:[]}],Y=[],G=[];for(let J of F){for(let re=0;re<2;re++){let me=J.x+t.range(-12,12),_e=J.z+t.range(-12,12);f(me,_e)<45||(Y.push({x:me,y:n(me,_e)-.5,z:_e,ry:t.int(0,3)*Math.PI/2}),G.push([me,_e]))}for(let re=0;re<60&&O.reduce((me,_e)=>me+_e.items.length,0)<F.length*22;re++){let me=t.range(0,6.28),_e=t.range(8,60),ce=J.x+Math.cos(me)*_e,ie=J.z+Math.sin(me)*_e,Q=n(ce,ie);Q<3||f(ce,ie)<42||G.some(ee=>Math.hypot(ee[0]-ce,ee[1]-ie)<12)||(G.push([ce,ie]),t.pick(O).items.push({x:ce,y:Q-.5,z:ie,ry:t.int(0,3)*Math.PI/2}))}}for(let J of O)a(J.geo,J.items);a(Gb(ur[2]),Y)}let b=[[],[]];for(let P=115;P<c-10;P+=t.range(4.5,9))if(!h(P)){if(t.next()<.3){P+=t.range(20,60);continue}for(let F of[-1,1]){if(t.next()<.35)continue;let O=F*(u(P)/2+6+t.range(1.4,2.6));Pt(i,P,O,l),b[t.int(0,1)].push({x:l.x,y:l.y-.5,z:l.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}b.forEach((P,F)=>a(qb(3+F*5),P));let R=[];for(let P=160;P<c-60;P+=t.range(120,220)){let F=t.sign(),O=t.int(5,9);for(let Y=0;Y<O;Y++){let G=P+Y*4.2;if(h(G))continue;Pt(i,G,F*(u(G)/2+6+4.2),l);let J=n?n(l.x,l.z):l.y;J<1.5||R.push({x:l.x,y:J-.2,z:l.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(Yb(),R),n){let P=[[],[],[]],F=[];for(let O=150;O<c-50;O+=t.range(120,220))for(let Y of[-1,1]){if(t.next()<.3)continue;Pt(i,O,Y*t.range(72,125),l);let G=n(l.x,l.z);G<1||f(l.x,l.z)<56||F.some(J=>Math.hypot(J[0]-l.x,J[1]-l.z)<70)||(F.push([l.x,l.z]),P[t.int(0,2)].push({x:l.x,y:G-3,z:l.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}P.forEach((O,Y)=>a(Qm(17+Y*13),O))}{let P=[],F=[],O=new Re(12172998),Y=new Re(7172730);for(let G=0;G<c;G+=4){if(h(G)||y(G))continue;let J=u(G)/2+6-.75;Pt(i,G,J,l);let re=l.x,me=l.y,_e=l.z,ce=l.heading;P.push({x:re,y:me+.4,z:_e,ry:ce,sx:.12,sy:.8,sz:.12,color:Y}),Pt(i,G+4,u(G+4)/2+6-.75,l);let ie=(re+l.x)/2,Q=(me+l.y)/2,ee=(_e+l.z)/2,L=Math.hypot(l.x-re,l.z-_e)+.05,B=Math.atan2(l.x-re,l.z-_e);for(let X of[.42,.72])F.push({x:ie,y:Q+X,z:ee,ry:B,sx:.07,sy:.2,sz:L,color:O})}if(P.length){let G=new cn(1,1,1),J=new st({roughness:.35,metalness:.85});r.push(G,J),s.add(cr(G,J,P),cr(G,J,F))}}if(n){let P=[];for(let G=0;G<400&&P.length<16;G++){let J=t.range(i.bounds.minX-420,i.bounds.maxX+420),re=t.range(i.bounds.minZ-420,i.bounds.maxZ+420),me=f(J,re);n(J,re)>-3||me<90||me>520||P.some(_e=>Math.hypot(_e.x-J,_e.z-re)<60)||P.push({x:J,y:-.3,z:re,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let F=[.93,.93,.9],O=[.98,.97,.93],Y=[.55,.36,.2];a(Yn(5,18,14,.7,(G,J,re)=>{let me=Math.abs(re-6.5),_e=Math.abs(G-2);return J<2?_e<=2-(J===0?1:0)-(me>5?1:0)&&me<7-(J===0?1:0)?J===1&&_e<2?Y:F:null:G===2&&re===7?[.3,.26,.22]:G===2&&re>7&&re<13&&J<17-(re-7)*2.6||G===2&&re<7&&re>1&&J<14-(7-re)*2.4?O:null},.06),P)}{Pt(i,0,0,l);let P=l.x,F=l.y,O=l.z,Y=l.heading,G=Math.sin(Y),J=Math.cos(Y),re=-J,me=G,_e=(ie,Q,ee)=>f(ie,Q)>ee,ce=!1;for(let ie of[430,500,380,580,660]){for(let Q of[70,130,0,-70,190,-140]){if(ce)break;let ee=P+G*ie+re*Q,L=O+J*ie+me*Q;if(!_e(ee,L,85))continue;let B=n?Math.max(-2,n(ee,L)):F;a(Qm(101),[{x:ee,y:B-3,z:L,ry:Y+.6,s:2.3}]);let X=ee-G*95-re*30,$=L-J*95-me*30;if(_e(X,$,45)&&_e(X+re*90,$+me*90,40)&&_e(X-re*90,$-me*90,40)){let de=n?Math.max(-1,n(X,$)):F;a(of(198,24),[{x:X,y:Math.min(de,F)-5,z:$,ry:Y}])}ce=!0}if(ce)break}}for(let P of[1,-1]){let F=!0;for(let Y of[210,270,330,390])Pt(i,Y,P*62,l),f(l.x,l.z)<46&&(F=!1);if(!F||P<0)continue;Pt(i,300,P*62,l);let O=n?n(l.x,l.z):l.y;a(of(198,22),[{x:l.x,y:O-4,z:l.z,ry:l.heading-Math.PI/2}]);break}let U=-1,H=-1/0;for(let P=300;P<c-300;P+=40){let F=Math.floor(P/i.step),O=0;for(let G=0;G<60;G+=6)O+=Math.abs(i.pts[(F+G)%i.pts.length].curv);let Y=-O*400+t.range(0,1)-(h(P)||h(P+100)?100:0);Y>H&&(H=Y,U=P)}if(U>0)for(let P of[1,-1]){Pt(i,U+90,P*95,l);let F=n?n(l.x,l.z):l.y;if(F<2)continue;a(of(198,20),[{x:l.x,y:Math.min(F,l.y)-4,z:l.z,ry:l.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let P of r)P.dispose?.()}}}function Zb(i,e){let t=i.length,n=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=i[a],o++;n[r]=s/o}return n}function cf(i){let e=i.x.length,t=i.step,n=i.x,s=i.y,r=i.z,o=new Float64Array(e),a=new Float64Array(e),l=new Float64Array(e);for(let _=0;_<e;_++){let w=Math.max(0,_-1),M=Math.min(e-1,_+1),b=n[M]-n[w],R=r[M]-r[w],U=Math.hypot(b,R)||1e-9;o[_]=b/U,a[_]=R/U,l[_]=(s[M]-s[w])/U}let c=new Float64Array(e);for(let _=1;_<e-1;_++){let w=-a[_],M=o[_];c[_]=((o[_+1]-o[_-1])*w+(a[_+1]-a[_-1])*M)/(2*t)}c[0]=c[1],c[e-1]=c[e-2];let h=Zb(c,12),u=new Float64Array(e);for(let _=0;_<e;_++)u[_]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(h[_]))));for(let _=e-2;_>=0;_--)u[_]=Math.min(u[_],Math.sqrt(u[_+1]**2+80*t));for(let _=1;_<e;_++)u[_]=Math.min(u[_],Math.sqrt(u[_-1]**2+40*t));let f=new Array(e),d=1/0,g=-1/0,x=1/0,m=-1/0,p=1/0,S=0;for(let _=0;_<e;_++){let w=Math.hypot(1,l[_]);f[_]={s:_*t,x:n[_],y:s[_],z:r[_],tx:o[_]/w,ty:l[_]/w,tz:a[_]/w,rx:-a[_],rz:o[_],width:i.width,curv:h[_],vmax:u[_],slope:l[_]},n[_]<d&&(d=n[_]),n[_]>g&&(g=n[_]),r[_]<x&&(x=r[_]),r[_]>m&&(m=r[_]);let M=1/Math.max(1e-9,Math.abs(h[_]));M<p&&(p=M),Math.abs(l[_])>S&&(S=Math.abs(l[_]))}let y=[],v=[];for(let _ of i.features)_.type==="tunnel"?y.push({type:"tunnel",s0:_.s0,s1:_.s1,name:_.name}):v.push({s0:_.s0,s1:_.s1,name:_.name});let E=(e-1)*t,T=0;for(let _=0;_<e;_++)T+=t/Math.max(5,u[_]);return{seed:"REAL:"+i.id,attempts:1,open:!0,real:i,raceStart:i.raceStart||0,raceEnd:Math.min(i.raceEnd||E,E),length:E,step:t,count:e,pts:f,features:y,bridges:v,bounds:{minX:d,maxX:g,minZ:x,maxZ:m},stats:{minRadius:p,maxSlope:S,lapTimeEstimate:T,corners:0}}}var i0=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function Kb(i,e,t){let n=[],s=i.length,r=c=>{let h=1/0,u=0;for(let f=0;f<i.count;f+=5){let d=i.pts[f],g=(d.x-c.x)**2+(d.z-c.z)**2;g<h&&(h=g,u=f)}return{dist:Math.sqrt(h),q:i.pts[u]}},o={},a=(c,h)=>(o[c]=(o[c]||0)+1)<=h,l=e.places.map(c=>({p:c,n:r(c)})).filter(c=>c.n.dist<1600&&c.n.q.s>150&&c.n.q.s<s-150).sort((c,h)=>c.n.dist-h.n.dist);for(let{p:c,n:h}of l)n.some(u=>u.x!==void 0&&Math.hypot(u.x-c.x,u.z-c.z)<250)||(c.kind==="castle"?/^torre/i.test(c.name)?a("torre",2)&&n.push({prop:"torre",x:c.x,z:c.z,height:48,label:c.name}):/castel|rocca|forte|fort/i.test(c.name)&&a("castello",3)&&n.push({prop:"castello",x:c.x,z:c.z,width:170,label:c.name}):c.kind==="place"&&(c.rank==="village"||c.rank==="town"||c.rank===void 0)&&(t(c.x,c.z)-h.q.y>120&&h.dist>250?a("borgo",3)&&n.push({prop:"borgo",x:c.x,z:c.z,width:300}):h.dist>90&&h.dist<450&&a("chiesa",3)&&n.push({prop:"chiesa",x:c.x,z:c.z,width:46})));for(let c=900,h=0;c<s-600;c+=1300,h++){let u=i.pts[Math.round(c/i.step)];for(let f of[1,-1]){let d=f*560;if(t(u.x+u.rx*d,u.z+u.rz*d)<=0&&t(u.x+u.rx*d*1.3,u.z+u.rz*d*1.3)<=0)h%2===0&&n.push({prop:"peschereccio",s:c,d:d+h%3*40*f,width:34,sea:!0});else if(h%2===1){let g=f*78,x=t(u.x+u.rx*g,u.z+u.rz*g);x>1&&Math.abs(x-u.y)<14&&n.push({prop:"agrumeto",s:c,d:g,width:70})}}}return n}function s0({track:i,data:e,baked:t,heightAt:n,clearance:s}){let r=new ht;r.name="real-props";let o=[],a=[];if(!t)return{group:r,placed:o,skipped:a,dispose(){}};let l=new ni({vertexColors:!0}),c=new Map,h=i.length,u=(f,d)=>{let g=1/0,x=0;for(let m=0;m<i.count;m+=2){let p=i.pts[m],S=(p.x-f)**2+(p.z-d)**2;S<g&&(g=S,x=m)}return{q:i.pts[x],dist:Math.sqrt(g)}};for(let f of Kb(i,e,n)){let d=t[f.prop];if(!d?.cells?.length)continue;let g=d._ext;if(!g){let w=[1/0,1/0,1/0],M=[-1/0,-1/0,-1/0];for(let b=0;b<d.cells.length;b+=4)for(let R=0;R<3;R++)w[R]=Math.min(w[R],d.cells[b+R]),M[R]=Math.max(M[R],d.cells[b+R]+1);g=d._ext=[M[0]-w[0],M[1]-w[1],M[2]-w[2]]}let x=f.height?f.height/g[1]:f.width/Math.max(g[0],g[2]),m=Math.hypot(g[0],g[2])*x/2,p,S;if(f.x!==void 0)p=f.x,S=f.z;else{let w=i.pts[Math.max(0,Math.min(i.count-1,Math.round(f.s/i.step)))];p=w.x+w.rx*f.d,S=w.z+w.rz*f.d}let y=u(p,S);if(y.dist-m<s){if(f.x===void 0||y.dist<1){a.push(f.prop+" : trop pr\xE8s de la route");continue}let w=(m+s+2)/y.dist;if(p=y.q.x+(p-y.q.x)*w,S=y.q.z+(S-y.q.z)*w,y=u(p,S),y.dist-m<s){a.push(f.prop+" : trop pr\xE8s de la route");continue}}let v;if(f.sea){if(n(p,S)>0){a.push(f.prop+" : pas en mer");continue}v=-.12*x*g[1]}else{v=1/0;for(let[w,M]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])v=Math.min(v,n(p+w*m*.6,S+M*m*.6));v=Math.max(v,.2)-.5}let E=f.prop+"@"+x.toFixed(3),T=c.get(E);T||c.set(E,T=Vm(d.cells,x));let _=new ot(T,l);_.name="prop-"+f.prop,_.position.set(p,v,S),_.rotation.y=Math.atan2(y.q.x-p,y.q.z-S),_.updateMatrix(),_.matrixAutoUpdate=!1,r.add(_),o.push({prop:f.prop,label:f.label||null,s:y.q.s,dist:y.dist,x:p,y:v,z:S,size:x})}return{group:r,placed:o,skipped:a,dispose(){l.dispose();for(let f of c.values())f.dispose()}}}var uf=.12,jb=8200,Jb=(i,e,t=1.08,n=1.45)=>{let s=(i>>16&255)/255,r=(i>>8&255)/255,o=(i&255)/255,a=.3*s+.59*r+.11*o,l=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=l,r*=l,o*=l,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*n)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*n)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*n)*t)),e[0]=s,e[1]=r,e[2]=o};function ua(i,e,{seaCut:t=.25,yOffset:n=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:l,c}=i,h=o.length,u=1/0,f=-1/0,d=1/0,g=-1/0;for(let O=0;O<h;O++)o[O]<u&&(u=o[O]),o[O]>f&&(f=o[O]),a[O]<d&&(d=a[O]),a[O]>g&&(g=a[O]);let x=h?g-d+1:0,m=new Float32Array(h?(f-u+1)*x:0).fill(NaN),p=(O,Y)=>O<u||O>f||Y<d||Y>g?-1:(O-u)*x+(Y-d),S={get(O){if(O<0)return;let Y=m[O];return Y===Y?Y:void 0}},y=new Float32Array(h);for(let O=0;O<h;O++)y[O]=Math.floor(l[O]/10/e)*e,m[(o[O]-u)*x+(a[O]-d)]=y[O];let v=[1,-1,0,0],E=[0,0,1,-1],T=new Float32Array(h*4),_=new Uint8Array(h),w=0;for(let O=0;O<h;O++)if(!(l[O]/10<=t)){_[O]=1,w++;for(let Y=0;Y<4;Y++){let G=S.get(p(o[O]+v[Y],a[O]+E[Y]));G!==void 0&&G<y[O]?(T[O*4+Y]=G,w++):T[O*4+Y]=NaN}}let M=new Float32Array(w*18),b=new Float32Array(w*18),R=new Float32Array(w*18),U=0,H=[0,0,0],P=(O,Y,G,J,re,me,_e,ce,ie,Q,ee,L,B,X,$,de,we,Ae)=>{M[U]=O,M[U+1]=Y,M[U+2]=G,M[U+3]=J,M[U+4]=re,M[U+5]=me,M[U+6]=_e,M[U+7]=ce,M[U+8]=ie,M[U+9]=O,M[U+10]=Y,M[U+11]=G,M[U+12]=_e,M[U+13]=ce,M[U+14]=ie,M[U+15]=Q,M[U+16]=ee,M[U+17]=L;for(let V=0;V<18;V+=3)b[U+V]=B,b[U+V+1]=X,b[U+V+2]=$,R[U+V]=de,R[U+V+1]=we,R[U+V+2]=Ae;U+=18};for(let O=0;O<h;O++){if(!_[O])continue;let Y=y[O];Jb(c[O],H),s&&s(H,(o[O]+.5)*r,(a[O]+.5)*r,Y);let G=.92+.16*((o[O]*73856093^a[O]*19349663)>>>0)/4294967295,J=H[0]*G,re=H[1]*G,me=H[2]*G,_e=o[O]*r,ce=a[O]*r,ie=_e+r,Q=ce+r,ee=Y+n;P(_e,ee,ce,_e,ee,Q,ie,ee,Q,ie,ee,ce,0,1,0,J,re,me);let L=.2+.45*J,B=.19+.42*re,X=.17+.38*me,$=T[O*4];$===$&&P(ie,$+n,Q,ie,ee,Q,ie,ee,ce,ie,$+n,ce,1,0,0,L,B,X),$=T[O*4+1],$===$&&P(_e,$+n,ce,_e,ee,ce,_e,ee,Q,_e,$+n,Q,-1,0,0,L,B,X),$=T[O*4+2],$===$&&P(_e,$+n,Q,_e,ee,Q,ie,ee,Q,ie,$+n,Q,0,0,1,L,B,X),$=T[O*4+3],$===$&&P(ie,$+n,ce,ie,ee,ce,_e,ee,ce,_e,$+n,ce,0,0,-1,L,B,X)}let F=new gt;return F.setAttribute("position",new mt(M,3)),F.setAttribute("normal",new mt(b,3)),F.setAttribute("color",new mt(R,3)),F.computeBoundingSphere(),{geo:F,heights:S,key:p,q:y}}function ji(i,e,t){let n=new Mn(i,e,t.length),s=new je,r=new nn,o=new k,a=new k,l=new k(0,1,0);return t.forEach((c,h)=>{r.setFromAxisAngle(l,c.ry||0),o.set(c.sx??1,c.sy??1,c.sz??1),a.set(c.x,c.y,c.z),s.compose(a,r,o),n.setMatrixAt(h,s),c.color&&n.setColorAt(h,c.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.frustumCulled=!1,n}function Qb(i){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(i[0],256,i[1]?70:96,470),i[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(i[1],256,136,470));let n=new vi(e);return n.colorSpace=Rt,n.anisotropy=8,n}function r0(i,e){e==="near"?i._near=i._near||ua(i.near,1):e==="mid"&&(i._mid=i._mid||ua(i.mid,4,{yOffset:-3}))}function o0(i,e,t,n){let s=e.real,r=new ht;r.name="environment";let o=[],a=se=>(o.push(se),se),l=!!t.night,c=()=>ar(a(new st({vertexColors:!0,roughness:.95,metalness:0,side:Ct})),1,1),h=s._near||ua(s.near,1);s._near=null;let u=new ot(a(h.geo),c());u.receiveShadow=!0,u.name="real-terrain-near";let f=s._mid||ua(s.mid,4,{yOffset:-3});s._mid=null;let d=new ot(a(f.geo),ar(a(new st({vertexColors:!0,roughness:1,side:Ct})),8,.7));d.name="real-terrain-mid";let g=new Re(t.skyHorizon),x=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,p=ua(s.far,60,{tint:(se,Se,ne,Me)=>{let fe=Math.hypot(Se-x,ne-m),ge=Math.min(.82,1-Math.exp(-fe/3e4)),W=Me>2300?.5:0;se[0]=(se[0]+(1-se[0])*W)*(1-ge)+g.r*ge,se[1]=(se[1]+(1-se[1])*W)*(1-ge)+g.g*ge,se[2]=(se[2]+(1-se[2])*W)*(1-ge)+g.b*ge}}),S=new ot(a(p.geo),a(new Yt({vertexColors:!0,fog:!1,side:Ct})));S.name="real-terrain-far",S.scale.setScalar(uf),S.frustumCulled=!1,S.renderOrder=-5,r.add(u,d,S);let y=(se,Se)=>{let ne=s.near.cell,Me=h.heights.get(h.key(Math.floor(se/ne),Math.floor(Se/ne)));if(Me!==void 0)return Me;let fe=s.mid.cell,ge=f.heights.get(f.key(Math.floor(se/fe),Math.floor(Se/fe)));return ge!==void 0?ge-3:-5},v=new ot(a(new Bn(6e4,6e4)),a(new st({color:t.seaColor,roughness:.16,metalness:.1}))),E=Wm(v.material);v.rotation.x=-Math.PI/2,v.position.y=.05,v.name="real-sea",r.add(v);let T=new k(...t.sunDir).normalize(),_=a(new vt({side:Qt,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Re(t.skyTop)},uHor:{value:new Re(t.skyHorizon)},uSun:{value:new Re(t.sunColor)},uSunDir:{value:T}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),w=new ot(a(new Ts(jb,32,16)),_);w.renderOrder=-10,w.frustumCulled=!1,r.add(w);let M=i.fog,b=i.background;i.fog=new Qr(t.fogColor,(t.fogDensity||5e-4)*.3),i.background=new Re(t.skyHorizon);let R=new io(t.hemiSky,t.hemiGround,t.hemiIntensity),U=new wi(t.sunColor,t.sunIntensity);U.castShadow=!0,U.shadow.mapSize.set(2048,2048);let H=U.shadow.camera;H.left=-90,H.right=90,H.top=90,H.bottom=-90,H.near=1,H.far=500,U.shadow.bias=-5e-4,r.add(R,U,U.target);let P=s.buildings,F=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],O=[11884346,11030070,14275268,13222064,9390646],Y=[],G=[],J=60,re=new Map;for(let se=0;se<e.count;se+=3){let Se=e.pts[se],ne=Math.floor(Se.x/J)+","+Math.floor(Se.z/J),Me=re.get(ne);Me||re.set(ne,Me=[]),Me.push(Se)}let me=s.width/2+6+2,_e=(se,Se,ne,Me)=>{let fe=null,ge=Math.max(ne,Me)+me;for(let W=Math.floor((se-ge)/J);W<=Math.floor((se+ge)/J);W++)for(let Te=Math.floor((Se-ge)/J);Te<=Math.floor((Se+ge)/J);Te++){let C=re.get(W+","+Te);if(C)for(let N of C){let z=Math.max(0,Math.abs(N.x-se)-ne),Z=Math.max(0,Math.abs(N.z-Se)-Me);z*z+Z*Z<me*me&&(fe===null||N.y<fe)&&(fe=N.y)}}return fe},ce=0,ie=0;for(let se=0;se<P.x.length;se++){let ne=(P.l[se]>0?Math.min(P.l[se],9):1+Math.floor(n.next()*3)+(P.w[se]*P.d[se]>300?1:0))*3.1,Me=Math.max(y(P.x[se],P.z[se]),.3),fe=_e(P.x[se],P.z[se],P.w[se]/2+.3,P.d[se]/2+.3);if(fe!==null){let ge=fe-3.2-Me;if(ge<3){ce++;continue}ne>ge&&(ne=ge,ie++)}Y.push({x:P.x[se],y:Me+ne/2-.5,z:P.z[se],sx:P.w[se],sy:ne+1,sz:P.d[se],color:new Re(n.pick(F))}),G.push({x:P.x[se],y:Me+ne+.35,z:P.z[se],sx:P.w[se]+.6,sy:.7,sz:P.d[se]+.6,color:new Re(n.pick(O))})}let Q=a(new cn(1,1,1));if(Y.length){let se=Gm(ar(a(new st({roughness:.9})),1.5,.8)),Se=a(new st({roughness:.85})),ne=ji(Q,se,Y),Me=ji(Q,Se,G);ne.name="real-buildings",ne.castShadow=!0,r.add(ne,Me)}let ee=s.trees,L=0;if(ee&&ee.x.length){let se=[],Se=[],ne=new Re(7031346),Me=new Re;for(let ge=0;ge<ee.x.length;ge++){let W=ee.x[ge],Te=ee.z[ge];if(_e(W,Te,2.5,2.5)!==null)continue;let C=Math.sin(W*12.9898+Te*78.233)*43758.5453,N=ee.r?ee.r[ge]/1e3:C-Math.floor(C),z=ee.y[ge],Z=.75+.5*N;if(ee.k[ge])if(N<.55){let ae=7+6*N;Se.push({x:W,y:z+ae/2+.6,z:Te,sx:1.7,sy:ae,sz:1.7,color:Me.setRGB(.1*Z,.26*Z,.13*Z).clone()})}else{let ae=6+5*N;se.push({x:W,y:z+ae/2,z:Te,sx:.7,sy:ae,sz:.7,color:ne}),Se.push({x:W,y:z+ae+.9,z:Te,sx:6.5,sy:2.2,sz:6.5,color:Me.setRGB(.14*Z,.34*Z,.16*Z).clone()})}else{let ae=3+2.4*N;se.push({x:W,y:z+.9,z:Te,sx:.6,sy:1.8,sz:.6,color:ne}),Se.push({x:W,y:z+1.6+ae/2,z:Te,sx:ae,sy:ae*.85,sz:ae,color:Me.setRGB(.3*Z,.44*Z,.2*Z).clone()})}}L=Se.length;let fe=ar(a(new ni),1.1,.9);if(se.length){let ge=ji(Q,a(new ni),se);ge.name="real-trunks",r.add(ge)}if(Se.length){let ge=ji(Q,fe,Se);ge.name="real-trees",r.add(ge)}}let B={x:0,y:0,z:0,heading:0},X=s.width/2,$=new Re(12170925),de=new Re(10131343),we=[],Ae=[];for(let se of e.bridges){for(let Se=se.s0+6;Se<se.s1-2;Se+=34){Pt(e,Se,0,B);let ne=y(B.x,B.z),Me=B.y-1.6-ne;Me<3||(we.push({x:B.x,y:ne+Me/2,z:B.z,ry:B.heading,sx:X*1.5,sy:Me,sz:2.4,color:de}),we.push({x:B.x,y:B.y-1.2,z:B.z,ry:B.heading,sx:X*2+5,sy:1.2,sz:3.6,color:$}))}for(let Se=se.s0;Se<se.s1;Se+=8){for(let ne of[-1,1])Pt(e,Se+4,ne*(X+6+.4),B),Ae.push({x:B.x,y:B.y-.9,z:B.z,ry:B.heading,sx:.9,sy:1.8,sz:8.3,color:$});Pt(e,Se+4,0,B),Ae.push({x:B.x,y:B.y-1.25,z:B.z,ry:B.heading,sx:X*2+12,sy:.9,sz:8.3,color:de})}}let V=ar(a(new st({roughness:.9})),.8,.6);if(we.length){let se=ji(Q,V,we);se.castShadow=!0,se.name="real-piers",r.add(se)}Ae.length&&r.add(ji(Q,V,Ae));let Ve=e.length,ze=se=>!!Cs(e,Math.max(0,Math.min(Ve-1,se)),"tunnel"),Be=[],Ie=[],qe=new Re(12764876),Fe=new Re(8225160),D={x:0,y:0,z:0,heading:0};for(let se=0;se<Ve-4;se+=4)if(!ze(se))for(let Se of[-1,1]){let ne=Se*(X+6-.7);Pt(e,se,ne,B),Pt(e,se+4,ne,D),Be.push({x:B.x,y:B.y+.4,z:B.z,ry:B.heading,sx:.12,sy:.8,sz:.12,color:Fe});let Me=Math.hypot(D.x-B.x,D.z-B.z)+.05,fe=Math.atan2(D.x-B.x,D.z-B.z);for(let ge of[.42,.72])Ie.push({x:(B.x+D.x)/2,y:(B.y+D.y)/2+ge,z:(B.z+D.z)/2,ry:fe,sx:.07,sy:.2,sz:Me,color:qe})}let A=a(new st({roughness:.35,metalness:.85}));Be.length&&r.add(ji(Q,A,Be),ji(Q,A,Ie));let j=s0({track:e,data:s,baked:s.props,heightAt:y,clearance:me});r.add(j.group),o.push(j);let xe=[];for(let se of s.places){if(se.kind!=="place")continue;let Se=1/0,ne=0;for(let fe=0;fe<e.count;fe+=10){let ge=e.pts[fe],W=(ge.x-se.x)**2+(ge.z-se.z)**2;W<Se&&(Se=W,ne=fe)}let Me=Math.sqrt(Se);Me<2600&&xe.push({name:se.name,s:ne*e.step,dist:Me})}xe.sort((se,Se)=>se.s-Se.s);let ye=a(new Bn(1,1)),he=[];for(let se of xe){if(he.some(ge=>Math.abs(ge.s-se.s)<500)||se.s<120||se.s>Ve-150||ze(se.s)||ze(se.s-60))continue;he.push(se);let Se=Qb([se.name,se.dist>600?`${(se.dist/1e3).toFixed(1).replace(".",",")} km`:""]),ne=a(new Yt({map:Se,color:Se?16777215:817731,side:Ct}));Se&&a(Se),Pt(e,se.s,X+6+2.2,B);let Me=new ot(ye,ne);Me.scale.set(7.5,2.8,1),Me.position.set(B.x,B.y+5.2,B.z),Me.rotation.y=B.heading+Math.PI,r.add(Me);let fe=new ot(Q,A);fe.scale.set(.3,5.2,.3),fe.position.set(B.x,B.y+2.2,B.z),r.add(fe)}let Ce=(se,Se,ne)=>{let Me=Math.sin(se*127.1+Se*311.7+ne*74.7)*43758.5453;return Me-Math.floor(Me)},Le=Yn(5,5,5,.5,(se,Se,ne)=>{let Me=se-2,fe=ne-2,ge=(Se-1.6)*1.2;if(Me*Me+ge*ge+fe*fe>5.4+Ce(se,Se,ne))return null;let W=Ce(se+3,Se,ne+7);return W>.72?[.92,.42,.6]:W>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Le);let Ne=[];for(let se=60;se<Ve-20;se+=n.range(5,11)){if(ze(se)||e.bridges.some(ne=>se>ne.s0-4&&se<ne.s1+4))continue;if(n.next()<.25){se+=n.range(15,50);continue}let Se=n.next()<.5?-1:1;Pt(e,se,Se*(X+6+n.range(1.2,2.4)),B),Ne.push({x:B.x,y:B.y-.5,z:B.z,ry:n.range(0,6.28),sx:n.range(.8,1.3),sy:n.range(.8,1.3),sz:n.range(.8,1.3)})}if(Ne.length){let se=ji(Le,a(new st({vertexColors:!0,roughness:.9})),Ne);se.castShadow=!0,se.name="real-oleanders",r.add(se)}i.add(r);let ke=new k;function Ee(se,Se,ne){w.position.set(ne.x,0,ne.z),v.position.x=ne.x,v.position.z=ne.z,E.value=Se,U.position.copy(ne).addScaledVector(T,200),U.target.position.copy(ne),ke.copy(ne),S.position.set(ke.x*(1-uf),-2,ke.z*(1-uf))}function Ue(){i.remove(r),i.fog&&i.fog!==M&&(i.fog=M||null),i.background=b||null;for(let se of o)se.dispose?.()}return{group:r,sun:U,update:Ee,dispose:Ue,heightAt:y,places:he,allPlaces:xe,buildingStats:{kept:Y.length,dropped:ce,lowered:ie},treeCount:L,props:j.placed,propsSkipped:j.skipped}}var eT=[-5,0,5],ic=[{id:"car",len:4.4,w:1.9,h:1.45,v:[31,37],lanes:[0,1,2]},{id:"van",len:5.8,w:2.1,h:2.35,v:[28,32],lanes:[1,2]},{id:"bus",len:11.5,w:2.5,h:3.3,v:[25,28],lanes:[2]},{id:"truck",len:13.5,w:2.5,h:3.8,v:[22,25],lanes:[2]}],a0=[0,0,0,0,0,1,1,2,3,3],tT=.45,nT=1,iT=1.5,sT=12,rT=5,oT=3,aT=5;function l0({rng:i,count:e=22,density:t=1}={}){let n=[];for(let u=0;u<e;u++)n.push({id:u,type:ic[0],lane:1,s:-1e9,d:0,speed:30,cruise:30,color:0,passed:!0,hitT:0});let s={vehicles:n,combo:0,comboT:0,meter:0,nearMisses:0,hits:0,events:[],density:t},r=!1;function o(u,f,d=30,g=30){let x=0;for(let m of n)m!==f&&m.s>u-d&&m.s<u+g&&(x|=1<<m.lane);return x}function a(u,f){let d=ic[a0[i.int(0,a0.length-1)]],g=o(f,u,45,45),x=d.lanes.filter(p=>!(g&1<<p));return([0,1,2].filter(p=>g&1<<p).length>=2||!x.length)&&(f+=60,x=d.lanes),u.type=d,u.lane=x[i.int(0,x.length-1)],u.d=eT[u.lane]+i.range(-.35,.35),u.cruise=u.speed=i.range(d.v[0],d.v[1]),u.color=i.int(0,7),u.s=f,u.passed=!1,u.hitT=0,f}function l(u,f=350){let d=u+f;for(let g of n)d=a(g,d)+i.range(70,190)/t;r=!0}function c(u,f,d){s.events.length=0,r||l(f.s);let g=-1/0;for(let x of n)x.s>g&&(g=x.s);for(let x of n){let m=x.cruise,p=0,S=1/0;for(let y of n){if(y===x||y.lane===x.lane)continue;let v=y.s-x.s;v>-8&&v<45&&(p|=1<<y.lane,y.speed<S&&(S=y.speed))}p===(7&~(1<<x.lane))&&(m=Math.min(m,S-.5));for(let y of n){if(y===x||y.lane!==x.lane)continue;let v=y.s-x.s-(y.type.len+x.type.len)/2;v>0&&v<25&&(m=Math.min(m,y.speed))}x.speed+=(m-x.speed)*Math.min(1,u*1.5),x.s+=x.speed*u,x.hitT>0&&(x.hitT-=u),x.s<f.s-70&&(g=a(x,Math.max(g+i.range(70,190)/t,f.s+650)))}for(let x of d){let m=x.state;for(let p of n){let S=m.s-p.s,y=m.d-p.d,v=p.type.len/2+nT,E=p.type.w/2+tT;if(Math.abs(S)<v&&Math.abs(y)<E){if(p.hitT<=0||x.isPlayer){let T=y!==0?Math.sign(y):m.d<p.d?-1:1;m.d=p.d+T*(E+.05),m.speed>p.speed*.95&&(m.speed=Math.max(p.speed*.9,m.speed*.5),m.boostT=0,p.hitT<=0&&(m.events?.push("hit"),x.isPlayer&&(s.hits++,s.combo=0,s.meter=0,s.events.push({type:"hit",vehicle:p})))),p.hitT=1.2}x.isPlayer&&(p.passed=!0)}else if(x.isPlayer&&!p.passed&&S>v&&(p.passed=!0,Math.abs(y)<E+iT&&m.speed-p.speed>sT)){s.nearMisses++,s.combo++,s.comboT=rT,s.meter++;let T=!1;s.meter>=oT&&(s.meter=0,m.boostCharges<aT&&(m.boostCharges+=1,T=!0)),s.events.push({type:"near",vehicle:p,combo:s.combo,boost:T})}}}s.comboT>0&&(s.comboT-=u,s.comboT<=0&&(s.combo=0))}function h(u){for(let f of n)f.s+=u}return Object.assign(s,{update:c,reset:l,shift:h})}var lT=[14212578,12067627,2051996,3093304,15788504,9080726,1928010,14722347];function Ns(i){let e=[],t=[],n=[],s=[[1,0,0,[1,-1,-1,1,1,-1,1,1,1,1,-1,1]],[-1,0,0,[-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1]],[0,1,0,[-1,1,1,1,1,1,1,1,-1,-1,1,-1]],[0,-1,0,[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1]],[0,0,1,[1,-1,1,1,1,1,-1,1,1,-1,-1,1]],[0,0,-1,[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1]]];for(let[o,a,l,c,h,u,f=1,d=1,g=1]of i)for(let[x,m,p,S]of s)for(let y of[0,1,2,0,2,3])e.push(o+S[y*3]*c/2,a+S[y*3+1]*h/2,l+S[y*3+2]*u/2),t.push(x,m,p),n.push(f,d,g);let r=new gt;return r.setAttribute("position",new lt(e,3)),r.setAttribute("normal",new lt(t,3)),r.setAttribute("color",new lt(n,3)),r}var sc=[.12,.16,.22],cT=[.07,.07,.08],rc=[.95,.08,.06],oc=[1,.95,.75],uT=[.86,.87,.88],hT=[.2,.21,.23];function ac(i,e,t,n){let s=[];for(let r of n)for(let o of[-1,1])s.push([o*(i/2-.12),t,r,.3,t*2,t*2,...cT]);return s}function fT(i){let{len:e,w:t,h:n}=i,s=-e/2,r=e/2,o=[[-t/2+.3,.75,s-.02,.4,.22,.08,...rc],[t/2-.3,.75,s-.02,.4,.22,.08,...rc],[-t/2+.3,.7,r+.02,.4,.2,.08,...oc],[t/2-.3,.7,r+.02,.4,.2,.08,...oc]];if(i.id==="car")return[Ns([[0,.62,0,t,.64,e],[0,1.37,-.25,t*.86,.14,e*.5]]),Ns([[0,1.1,-.25,t*.88,.42,e*.52,...sc],...ac(t,e,.32,[e*.3,-e*.3]),...o])];if(i.id==="van")return[Ns([[0,1.25,-.5,t,1.9,e-1.2],[0,.85,r-.55,t,1.1,1.1]]),Ns([[0,1.75,r-.62,t*.92,.7,1,...sc],...ac(t,e,.36,[e*.32,-e*.3]),...o])];if(i.id==="bus")return[Ns([[0,1,0,t,1.3,e],[0,3.05,0,t,.5,e]]),Ns([[0,2.2,0,t*1.01,1.15,e*.985,...sc],...ac(t,e,.5,[e*.33,-e*.3]),...o])];let a=2.5;return[Ns([[0,1.75,r-a/2,t,2.5,a]]),Ns([[0,2.25,s+(e-a-.5)/2,t,3.1,e-a-.5,...uT],[0,.75,s+(e-a)/2,t*.5,.3,e-a,...hT],[0,2.35,r-.4,t*.92,.85,.85,...sc],...ac(t,e,.52,[r-1.2,s+1.4,s+2.7,s+4]),[-t/2+.3,1,s-.02,.4,.25,.08,...rc],[t/2-.3,1,s-.02,.4,.25,.08,...rc],[-t/2+.3,.9,r+.02,.4,.2,.08,...oc],[t/2-.3,.9,r+.02,.4,.2,.08,...oc]])]}function c0(i,e){let t=new ht;t.name="traffic";let n=new Map(ic.map(u=>[u.id,fT(u)])),s=lT.map(u=>new ni({color:u})),r=new ni({vertexColors:!0}),o=[];for(let u=0;u<e;u++){let f=new ht,d=new ot(n.get("car")[0],s[0]),g=new ot(n.get("car")[1],r);d.castShadow=!0,g.castShadow=!0,f.add(d,g),f.visible=!1,t.add(f),o.push({g:f,body:d,detail:g,type:null,color:-1})}i.add(t);let a={};function l(u,f,d){for(let g=0;g<o.length;g++){let x=o[g],m=u.vehicles[g],p=m?m.s-d:1e9;if(!m||p<-120||p>1400){x.g.visible=!1;continue}if(x.type!==m.type.id){x.type=m.type.id;let[S,y]=n.get(m.type.id);x.body.geometry=S,x.detail.geometry=y}x.color!==m.color&&(x.color=m.color,x.body.material=s[m.color%s.length]),Pt(f,m.s,m.d,a),x.g.position.set(a.x,a.y,a.z),x.g.rotation.set(-Math.atan(a.slope||0),a.heading,0,"YXZ"),x.g.visible=!0}}function c(){for(let u of o)u.g.visible=!1}function h(){i.remove(t);for(let[u,f]of n.values())u.dispose(),f.dispose();for(let u of s)u.dispose();r.dispose()}return{group:t,update:l,hide:c,dispose:h}}var u0="polygon-rush-v3-records",dT=new Set(["rally","rain"]);function h0(){try{let i=globalThis.localStorage?.getItem(u0),e=i?JSON.parse(i):null;if(e&&typeof e=="object")return{splits:e.splits||{},total:e.total??null,runs:e.runs||0,finishes:e.finishes||0}}catch{}return{splits:{},total:null,runs:0,finishes:0}}function lc(i){try{return globalThis.localStorage?.setItem(u0,JSON.stringify(i)),!0}catch{return!1}}function hf(i){if(!Number.isFinite(i))return"\u2013";let e=Math.floor(i/60),t=i-e*60;return`${e}'${String(Math.floor(t)).padStart(2,"0")}"${Math.floor(t*10%10)}`}function f0(i){let e=Math.abs(i);return`${i<0?"\u2212":"+"}${e>=60?hf(e):e.toFixed(1).replace(".",'"')}`}function d0(i,e,t){let n=i.splits[e]??null,s=n===null||t<n;return s&&(i.splits[e]=Math.round(t*1e3)/1e3),{time:t,best:n,delta:n===null?null:t-n,record:s}}function p0(i,e){let t=i.total,n=t===null||e<t;return n&&(i.total=Math.round(e*1e3)/1e3),{time:e,best:t,delta:t===null?null:e-t,record:n}}function m0(i){return i.filter(e=>!dT.has(e.id))}function g0(i=document.body){let e=document.createElement("div");e.style.cssText="position:fixed;left:50%;top:13vmin;transform:translateX(-50%);display:none;gap:1.2vmin;z-index:35;font-family:Arial,Helvetica,sans-serif;pointer-events:auto;align-items:stretch";let t=document.createElement("div");t.style.cssText="position:fixed;left:50%;top:11.6vmin;transform:translateX(-50%);width:54vmin;height:0.7vmin;display:none;background:rgba(255,255,255,.18);z-index:35;border-radius:1vmin;overflow:hidden";let n=document.createElement("div");n.style.cssText="height:100%;width:100%;background:#ffd23f;transform-origin:left center",t.appendChild(n),i.append(t,e);let s=[],r=null,o=0,a=0;function l(){e.style.display="none",t.style.display="none",s=[],r=null}function c(f){if(!s.length)return!1;let d=s[Math.max(0,Math.min(s.length-1,f))],g=r;return l(),g?.(d),!0}function h(f,d,g=9){l(),f.length&&(s=f.slice(0,3),r=d,o=a=g,e.textContent="",s.forEach((x,m)=>{let p=document.createElement("button");p.type="button",p.style.cssText=`all:unset;cursor:pointer;width:27vmin;padding:1.1vmin 1.4vmin;border-radius:1vmin;color:#fff;background:rgba(12,18,34,.82);border:0.3vmin solid ${m===0?"#ffd23f":"rgba(255,255,255,.28)"};box-sizing:border-box`;let S=y=>String(y).replace(/[&<>]/g,v=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[v]);p.innerHTML=`<div style="font:bold 2.1vmin Arial;display:flex;gap:1vmin;align-items:center"><span style="background:#ffd23f;color:#111;border-radius:.6vmin;padding:.1vmin .9vmin">${m+1}</span><span>${S(x.icon||"")} ${S(x.name)}</span></div><div style="font:1.55vmin Arial;color:#8ef0a8;margin-top:.7vmin">\u25B2 ${S(x.pro)}</div><div style="font:1.55vmin Arial;color:#ff9a8a;margin-top:.3vmin">\u25BC ${S(x.con)}</div>`,p.addEventListener("click",()=>c(m)),e.appendChild(p)}),e.style.display="flex",t.style.display="block")}function u(f){s.length&&(o-=f,n.style.transform=`scaleX(${Math.max(0,o/a)})`,o<=0&&c(0))}return{show:h,pick:c,update:u,hide:l,get active(){return s.length>0},dispose(){e.remove(),t.remove()}}}var cc=class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Lf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Rs.extractUrlBase(e);o=Rs.resolveURL(c,this.path)}else o=Rs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ko(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===M0){try{o[xt.KHR_BINARY_GLTF]=new Df(e)}catch(u){s&&s(u);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new kf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case xt.KHR_MATERIALS_UNLIT:o[u]=new gf;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Nf(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[u]=new Uf;break;case xt.KHR_MESH_QUANTIZATION:o[u]=new Ff;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function pT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},mf=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new El(h),c.distance=u;break;case"spot":c=new so(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},gf=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},xf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},vf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},yf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Mf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Sf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Sn),Promise.all(r)}},Tf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ef=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Af=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Rf=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Cf=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Pf=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},If=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Lf=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==oi.TRIANGLES&&c.mode!==oi.TRIANGLE_STRIP&&c.mode!==oi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new je,m=new k,p=new nn,S=new k(1,1,1),y=new Mn(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&S.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,x.compose(m,p,S));for(let v in l)if(v==="_COLOR_0"){let E=l[v];y.instanceColor=new Qs(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Ft.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},M0="glTF",ha=12,x0={JSON:1313821514,BIN:5130562},Df=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==M0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ha,r=new DataView(e,ha),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===x0.JSON){let c=new Uint8Array(e,ha+o,a);this.content=n.decode(c)}else if(l===x0.BIN){let c=ha+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Bf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Bf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=fo[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(d)},a,c,Sn,f)})})}},Uf=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ff=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},uc=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,S=1-m,y=p-f+u;for(let v=0;v!==a;v++){let E=o[x+v+a],T=o[x+v+l]*h,_=o[g+v+a],w=o[g+v]*h;r[v]=S*E+y*T+m*_+p*w}return r}},mT=new nn,Of=class extends uc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return mT.fromArray(r).normalize().toArray(r),r}},oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},v0={9728:Kt,9729:Fn,9984:wh,9985:Bo,9986:Fr,9987:ei},_0={33071:Vi,33648:Go,10497:Cn},ff={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gT={CUBICSPLINE:void 0,LINEAR:Yr,STEP:qr},df={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function hr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function _T(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yT(i){let e,t=i.extensions&&i.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pf(t.attributes):e=i.indices+":"+pf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+pf(i.targets[n]);return e}function pf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ST=new je,kf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Tl(this.options.manager):this.textureLoader=new wl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ko(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return hr(r,a,s),Ji(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Rs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ff[s.type],a=fo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new mt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=ff[s.type],c=fo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(S);y||(x=new c(a,p*d,s.count*d/h),y=new eo(x,d/h),t.cache.add(S,y)),m=new Js(y,l,f%d/h,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new mt(x,l,g);if(s.sparse!==void 0){let p=ff.SCALAR,S=fo[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new S(o[1],y,s.sparse.count*p),T=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,w=E.length;_<w;_++){let M=E[_];if(m.setX(M,T[_*l]),l>=2&&m.setY(M,T[_*l+1]),l>=3&&m.setZ(M,T[_*l+2]),l>=4&&m.setW(M,T[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=v0[f.magFilter]||Fn,h.minFilter=v0[f.minFilter]||ei,h.wrapS=_0[f.wrapS]||Cn,h.wrapT=_0[f.wrapT]||Cn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Kt&&h.minFilter!==Fn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new ln(x);m.needsUpdate=!0,f(m)}),t.load(Rs.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ji(u,o),u.userData.mimeType=o.mimeType||MT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new tr,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ss,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return st}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){let u=s[xt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);let h=r.alphaMode||df.OPAQUE;if(h===df.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===df.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Yt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],Sn)}return r.emissiveTexture!==void 0&&o!==Yt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&hr(s,u,r),u})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return y0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=yT(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=y0(new gt,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?xT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,S=c[d];if(m.mode===oi.TRIANGLES||m.mode===oi.TRIANGLE_STRIP||m.mode===oi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ml(x,S):new ot(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===oi.TRIANGLE_STRIP?p.geometry=sf(p.geometry,Ll):m.mode===oi.TRIANGLE_FAN&&(p.geometry=sf(p.geometry,ea));else if(m.mode===oi.LINES)p=new er(x,S);else if(m.mode===oi.LINE_STRIP)p=new to(x,S);else if(m.mode===oi.LINE_LOOP)p=new _l(x,S);else if(m.mode===oi.POINTS)p=new bs(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_T(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ji(p,r),m.extensions&&hr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&hr(s,u[0],r),u[0];let f=new ht;r.extensions&&hr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Vp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gl(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let S=0,y=f.length;S<y;S++){let v=f[S],E=d[S],T=g[S],_=x[S],w=m[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let M=n._createAnimationTracks(v,E,T,_,w);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new bl(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ST)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Zo:c.length>1?h=new ht:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ji(h,r),r.extensions&&hr(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ht;n.name&&(r.name=s.createUniqueName(n.name)),Ji(r,n),n.extensions&&hr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof yn||f instanceof ln)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Us[r.path]===Us.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Us[r.path]){case Us.weights:c=Xi;break;case Us.rotation:c=qi;break;case Us.position:case Us.scale:c=Yi;break;default:n.itemSize===1?c=Xi:c=Yi;break}let h=s.interpolation!==void 0?gT[s.interpolation]:Yr,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Us[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof qi?Of:uc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bT(i,e,t){let n=e.attributes,s=new ti;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){let h=zf(fo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new k,l=new k;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=zf(fo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function y0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Bf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return pt.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Ji(i,e),bT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?vT(i,e.targets,t):i})}var Fs={hi:null,lo:null},TT=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function Hf(i,e){let t=await i.loadAsync(e),n={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),n[a.name]=a,a.traverse(l=>{l.isMesh&&l.material?.name&&(s[l.material.name]=l.material)});let r=TT.filter(a=>!n[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return n.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:n,mats:s,armLength:o>.1?o/1.01:1}}async function S0(i="assets/"){if(Fs.lo)return Fs;let e=new cc;return Fs.lo=await Hf(e,i+"bike_voxel.glb").catch(()=>Hf(e,i+"bike.glb")),Fs.hi=await Hf(e,i+"bike_voxel_hi.glb").catch(()=>Fs.lo),Fs}function b0(i="lo"){return Fs[i]||Fs.lo}var jt=0,dn=1,es=2,dc=.32,fc=-.7,P0=.7,Qi=[0,-dc,-fc],I0=[0,-dc,-P0],T0=.62,ET=.35,Os=Math.PI*2,jn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,n,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],l=e[2]+r[2],c=t[0]+r[0],h=t[1]+r[1],u=t[2]+r[2],f=n[0]+r[0],d=n[1]+r[1],g=n[2]+r[2],x=c-o,m=h-a,p=u-l,S=f-o,y=d-a,v=g-l,E=m*v-p*y,T=p*S-x*v,_=x*y-m*S,w=(o+c+f)/3-(s[0]+r[0]),M=(a+h+d)/3-(s[1]+r[1]),b=(l+u+g)/3-(s[2]+r[2]),R=this.pos;E*w+T*M+_*b>=0?R.push(o,a,l,c,h,u,f,d,g):R.push(o,a,l,f,d,g,c,h,u)}quad(e,t,n,s,r){this.tri(e,t,n,r),this.tri(e,n,s,r)}build(){this.closeGroup();let e=new gt;e.setAttribute("position",new lt(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function wT(i){let e=0,t=0,n=0;for(let r of i)e+=r[0],t+=r[1],n+=r[2];let s=i.length;return[e/s,t/s,n/s]}function AT(i,e){return[(i[0]+e[0])/2,(i[1]+e[1])/2,(i[2]+e[2])/2]}function E0(i,e,t,n){let s=e.length;for(let r=0;r<s;r++)i.tri(t,e[r],e[(r+1)%s],n)}function Bs(i,e,t,n,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,l=e.map(wT);for(let c=0;c<o-1;c++){let h=e[c],u=e[c+1],f=AT(l[c],l[c+1]);for(let d=0;d<a;d++){let g=(d+1)%a;i.setSlot(r(c,d)),i.quad(h[d],h[g],u[g],u[d],f)}}i.setSlot(n),E0(i,e[0],l[0],l[1]),i.setSlot(s),E0(i,e[o-1],l[o-1],l[o-2])}function Kn(i,e,t,n,s,r,o){let a=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=Math.hypot(a,l,c)||1,u=[a/h,l/h,c/h],f=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],d=[u[1]*f[2]-u[2]*f[1],u[2]*f[0]-u[0]*f[2],u[0]*f[1]-u[1]*f[0]],g=Math.hypot(d[0],d[1],d[2]);d=[d[0]/g,d[1]/g,d[2]/g];let x=[d[1]*u[2]-d[2]*u[1],d[2]*u[0]-d[0]*u[2],d[0]*u[1]-d[1]*u[0]],m=(p,S)=>{let y=[];for(let v=0;v<r;v++){let E=Os*v/r,T=Math.cos(E)*S,_=Math.sin(E)*S;y.push([p[0]+T*d[0]+_*x[0],p[1]+T*d[1]+_*x[1],p[2]+T*d[2]+_*x[2]])}return y};Bs(i,[m(e,n),m(t,s)],o,o,o)}function dr(i,e,t,n){i.setSlot(n);let s=(a,l,c)=>[e[0]+a*t[0],e[1]+l*t[1],e[2]+c*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)i.tri(r[a[0]],r[a[1]],r[a[2]],e),i.tri(r[a[0]],r[a[2]],r[a[3]],e)}var pc=3,da=4;function RT(i,e,t,n,s,r,o,a,l){return[[0,e,i],[o,t,i],[a,n,i],[l,s,i],[0,r,i],[-l,s,i],[-a,n,i],[-o,t,i]]}function CT(){let i=new jn(Qi),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(n=>RT(...n));Bs(i,t,(n,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?n===7||n===8?dn:jt:o?n>=9?pc:jt:a?n>=2&&n<=5?pc:n>=7&&n<=8?dn:jt:n>=3&&n<=6?es:dn},jt,jt);for(let n of[-1,1])Kn(i,[.11*n,.46,-.26],[.1*n,.32,-.7],.04,.03,5,da),Kn(i,[.14*n,.44,-.3],[.22*n,.42,-.32],.018,.018,4,dn),Kn(i,[.1*n,.95,.42],[.27*n,.93,.35],.02,.02,4,dn);return Kn(i,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,da),Kn(i,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,da),Kn(i,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,dn),dr(i,[0,.685,-.74],[.06,.012,.16],dn),i.build()}function PT(){let i=new jn(Qi),e=(t,n,s,r)=>[[0,n,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Bs(i,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],jt,jt,jt),i.build()}function IT(){let i=new jn(Qi);return dr(i,[0,.985,-1.085],[.04,.02,.014],jt),i.build()}function LT(){let i=new jn;return Kn(i,[0,0,0],[0,0,-.45],.05,.004,6,jt),i.build()}function DT(){let i=new jn(Qi);for(let e of[-1,1]){let t=[.062*e,.795,.905];i.setSlot(jt);let n=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];i.quad(n[0],n[1],n[2],n[3],[t[0],t[1],t[2]-.2])}return i.build()}function NT(){let i=new jn(I0);for(let n of[-1,1])Kn(i,[.085*n,.32,.7],[.085*n,.56,.615],.032,.032,5,dn),Kn(i,[.085*n,.56,.615],[.085*n,.88,.5],.024,.024,5,es),dr(i,[.1*n,.33,.74],[.012,.05,.035],da);let e=.34,t=[];for(let n of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(n),r=.7+Math.sin(n),o=(a,l)=>[a,.32+l*Math.cos(n),.7+l*Math.sin(n)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Bs(i,t,jt,jt,jt),i.build()}function w0(i,e){let t=new jn,n=14,s=(o,a)=>{let l=[];for(let c=0;c<n;c++){let h=Os*c/n;l.push([o,a*Math.cos(h),a*Math.sin(h)])}return l};Bs(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*i,a)),dn,dn,dn);for(let o of[-1,1]){let a=o*(.62*i+.004),l=[a,0,0],c=[0,0,0],h=10;for(let u=0;u<h;u++){let f=Os*u/h,d=Os*(u+1)/h;t.setSlot(u%2?dn:es),t.tri(l,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(d),.215*Math.sin(d)],c)}if(e){let u=o*(.62*i+.012);t.setSlot(da);for(let f=0;f<h;f++){let d=Os*f/h,g=Os*(f+1)/h;t.quad([u,.09*Math.cos(d),.09*Math.sin(d)],[u,.16*Math.cos(d),.16*Math.sin(d)],[u,.16*Math.cos(g),.16*Math.sin(g)],[u,.09*Math.cos(g),.09*Math.sin(g)],c)}}}return t.build()}function UT(){let i=new jn,e=[0,.11,.015],t=[.125,.135,.155],n=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,l=Math.cos(a),c=[];for(let h=0;h<n;h++){let u=Os*(h+.5)/n;c.push([e[0]+t[0]*l*Math.cos(u),e[1]+t[1]*Math.sin(a),e[2]+t[2]*l*Math.sin(u)])}r.push(c)}return Bs(i,r,(o,a)=>{let l=Os*(a+1)/n;return Math.sin(l)>.45&&(o===1||o===2)?dn:Math.abs(Math.cos(l))<.35?es:jt},dn,jt),i.build()}function fa(i,e,t,n){return[[e,i,0],[e*.55,i,t],[-e*.55,i,t],[-e,i,0],[-e*.55,i,-n],[e*.55,i,-n]]}function FT(){let i=new jn,e=[fa(-.08,.13,.09,.1),fa(.04,.145,.1,.1),fa(.22,.185,.11,.11),fa(.38,.205,.1,.1),fa(.45,.09,.06,.07)];return Bs(i,e,(t,n)=>t===0?es:t===2&&(n===0||n===2||n===3||n===5)?pc:jt,dn,dn),Bs(i,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],es,es,es),i.build()}function A0(i){let e=new jn,t=[.09*i,-.09,.5];return Kn(e,[0,0,0],t,.058,.048,5,jt),Kn(e,t,[0,0,.93],.046,.038,5,jt),dr(e,[0,0,.97],[.042,.04,.05],dn),dr(e,[0,.015,.02],[.052,.04,.05],pc),e.build()}function R0(i){let e=new jn,t=[.11*i,-.19,.42],n=[.085*i,-.47,.05];return Kn(e,[0,0,0],t,.082,.066,6,jt),Kn(e,t,n,.062,.05,5,jt),dr(e,[t[0]+.035*i,t[1]-.02,t[2]+.02],[.025,.05,.045],es),dr(e,[n[0],n[1]-.04,n[2]+.04],[.045,.05,.115],dn),e.build()}var Vf=null;function OT(){return Vf||(Vf={body:CT(),bubble:PT(),tail:IT(),flame:LT(),fork:NT(),headlight:DT(),wheelRear:w0(.1,!1),wheelFront:w0(.068,!0),helmet:UT(),torso:FT(),armR:A0(-1),armL:A0(1),legR:R0(-1),legL:R0(1)}),Vf}var Mi=(i,e,t)=>i<e?e:i>t?t:i,L0=i=>Mi(i,0,1),fr=i=>Number.isFinite(i)?i:0,hc=i=>typeof i=="boolean"?i?1:0:L0(fr(i));function ai(i,e){return i.name=e,i}function C0(i,e,t,n){let s=new ot(i,e);return s.name=t,s.castShadow=n,s.receiveShadow=!1,s}function D0({color:i=14034984,accent:e=16761395,isPlayer:t=!1,detail:n="lo"}={}){let s=OT(),r=Ae=>new st({flatShading:!0,side:Ct,...Ae}),o=r({color:new Re(i),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),l=r({color:new Re(e),metalness:.45,roughness:.35}),c=r({color:15856108,metalness:.15,roughness:.45}),h=r({color:11120312,metalness:.9,roughness:.32}),u=[o,a,l,c,h],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),d=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),g=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),x=b0(n),m=null;if(x){let Ae=(V,Ve)=>{let ze=x.mats[V].clone();return ze.color.set(Ve),ze};m={Paint:Ae("Paint",i),Suit:Ae("Suit",i),Accent:Ae("Accent",e),Tail:x.mats.Tail.clone()}}function p(Ae,V,Ve,ze,Be){if(!x)return C0(V,Ve,Ae,ze);let Ie=x.parts[Ae].clone(!0);return Ie.name=Ae,Be&&Ie.position.set(Be[0],Be[1],Be[2]),Ie.traverse(qe=>{qe.isMesh&&(qe.material=m[qe.material.name]||qe.material,qe.castShadow=ze)}),Ie}let S=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),y=ai(new ht,"bike"),v=ai(new ht,"leanPivot"),E=ai(new ht,"pitchPivot");E.position.set(0,dc,fc);let T=ai(new ht,"rearWheel");T.add(p("wheelRear",s.wheelRear,u,!0));let _=ai(new ht,"chassis"),w=p("body",s.body,u,!0,Qi),M=p("bubble",s.bubble,f,!1,Qi),b=p("tail",s.tail,g,!1,Qi),R=p("headlight",s.headlight,d,!1,Qi),U=C0(s.flame,S,"flame",!1);U.position.set(.205,.215,-.26),U.rotation.x=-.42,U.scale.z=.02,U.visible=!1;let H=ai(new ht,"hips");H.position.set(0,T0,ET);let P=ai(new ht,"torso"),F=ai(new ht,"head");F.position.set(0,.45,.01),F.add(p("helmet",s.helmet,u,!0)),P.add(p("torso",s.torso,u,!0),F);let O=p("armR",s.armR,u,!0),Y=p("armL",s.armL,u,!0),G=ai(new ht,"legR");G.position.set(-.12,-.02,0),G.add(p("legR",s.legR,u,!0));let J=ai(new ht,"legL");J.position.set(.12,-.02,0),J.add(p("legL",s.legL,u,!0)),H.add(P,O,Y,G,J),_.add(w,M,b,R,U,H),x&&_.add(p("frame",null,null,!0,Qi));let re=ai(new ht,"steerPivot");re.position.set(0,0,P0-fc);let me=p("fork",s.fork,u,!0,I0),_e=ai(new ht,"frontWheel");if(_e.add(p("wheelFront",s.wheelFront,u,!0)),re.add(me,_e),E.add(T,_,re),v.add(E),y.add(v),t){let Ae=new so(16773590,60,60,.5,.6,2);Ae.name="headSpot",Ae.castShadow=!1,Ae.position.set(0,1,.9),Ae.target.position.set(0,.2,30),Ae.target.name="headSpotTarget",y.add(Ae,Ae.target)}let ce={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ie=.2,Q=.37,ee=.02,L=[.25,.93-dc,.36-fc],B=new k,X=new k,$=new k(0,0,1);function de(Ae,V){B.set(ie*V,Q,ee).applyEuler(P.rotation),X.set(L[0]*V-H.position.x,L[1]-H.position.y,L[2]-H.position.z);let Ve=Math.cos(-H.rotation.z),ze=Math.sin(-H.rotation.z),Be=X.x*Ve-X.y*ze,Ie=X.x*ze+X.y*Ve;X.x=Be,X.y=Ie,Ae.position.copy(B),X.sub(B);let qe=X.length()||1;Ae.scale.z=qe/(x?x.armLength:1),Ae.quaternion.setFromUnitVectors($,X.multiplyScalar(1/qe))}function we(Ae,V){let Ve=Ae||{},ze=Number.isFinite(V)?Mi(V,0,.1):1/60,Be=1-Math.exp(-ze*14),Ie=1-Math.exp(-ze*5);ce.lean+=(Mi(fr(Ve.lean),-1.5,1.5)-ce.lean)*Be,ce.steer+=(Mi(fr(Ve.steer),-1,1)-ce.steer)*Be,ce.pitch+=(Mi(fr(Ve.pitch),-.9,.9)-ce.pitch)*Be,ce.compress+=(Mi(fr(Ve.compress),-1,1)-ce.compress)*Be,ce.sr+=(L0(fr(Ve.speedRatio))-ce.sr)*Ie,ce.brake+=(hc(Ve.braking)-ce.brake)*Ie,ce.air+=(hc(Ve.airborne)-ce.air)*Ie,ce.drift+=(hc(Ve.drift)-ce.drift)*Ie,ce.boost+=(hc(Ve.boost)-ce.boost)*Ie;let qe=ce.lean,Fe=(Number.isFinite(Ve.speed)?Ve.speed:ce.sr*80)*3.6;v.rotation.z=qe,E.rotation.x=-ce.pitch,re.rotation.y=-.45*ce.steer*Mi(1-2*ce.sr,0,1),_.position.y=-.07*ce.compress;let D=Mi((Fe-20)/100,0,1),A=Mi(Math.abs(qe)*2.27,0,1),j=qe>=0?1:-1,xe=A*(1-Mi((Fe-30)/30,0,1));H.position.x=-.17*A*j,H.position.y=T0+.1*ce.air,H.rotation.z=-.2*A*j,P.rotation.x=Mi(.45+.55*D-.2*ce.brake-.25*ce.air+.1*ce.boost,.2,1.05),P.rotation.z=-.1*A*j,F.rotation.x=-.35*D+.1*ce.air,F.rotation.y=-.35*A*j,F.rotation.z=-.4*qe;let ye=.55*A+.3*xe;G.rotation.y=j>0?-ye:0,J.rotation.y=j<0?ye:0,de(O,-1),de(Y,1),(m?m.Tail:g).emissiveIntensity=(m?2:.8)+(m?6:2.2)*ce.brake,U.visible=ce.boost>.03,U.scale.z=.02+1.3*ce.boost,S.emissiveIntensity=1.5+2*ce.boost;let he=fr(Ve.wheelSpin);T.rotation.x=he,_e.rotation.x=he}return we({},0),{group:y,update:we}}var N0=Math.PI*2,en=6e3,po=2200,U0=60,F0=30,O0=60,BT=3,pa=2e3,pr=170,Xf=1.5,zT=13,B0=zT-Xf,Gf=120,kT={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},HT=new Re(16777215),VT=new Re(8386303);function Hn(i,e){return i+(e-i)*Math.random()}function ma(i,e,t){return i<e?e:i>t?t:i}function zs(i,e=0){return Number.isFinite(i)?i:e}function GT(i){return Number.isFinite(i)?ma(i,0,.1):0}function Wf(i,e){return i-e*Math.floor(i/e+.5)}function WT(){let i=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return i*e}var XT=`
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
}`,qT=`
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
}`,YT=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,$T=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function z0(i,e){let t=e||{},n=zs(t.rain,0),s=zs(t.wind,0),r=new Float32Array(en*3),o=new Float32Array(en*3),a=new Float32Array(en*3),l=new Float32Array(en*3),c=new Float32Array(en*3),h=new Float32Array(en),u=new Float32Array(en),f=new Float32Array(en),d=new Float32Array(en),g=new Float32Array(en),x=new Float32Array(en),m=new Float32Array(en),p=new Float32Array(en),S=new Float32Array(en),y=new Float32Array(en),v=new Float32Array(en),E=new Uint8Array(en),T=0,_=!1,w=new gt,M=new mt(r,3).setUsage(Ai),b=new mt(c,3).setUsage(Ai),R=new mt(h,1).setUsage(Ai),U=new mt(u,1).setUsage(Ai),H=new mt(f,1).setUsage(Ai);w.setAttribute("position",M),w.setAttribute("aColor",b),w.setAttribute("aSize",R),w.setAttribute("aAlpha",U),w.setAttribute("aMode",H);let P=new vt({uniforms:{uScale:{value:700}},vertexShader:XT,fragmentShader:qT,transparent:!0,depthWrite:!1,blending:Jo,blendSrc:_h,blendDst:Vo,blendEquation:Un}),F=new bs(w,P);F.frustumCulled=!1,i.add(F);function O(ne,Me,fe,ge,W,Te,C,N=1){let z=kT[ne];if(!z||!Number.isFinite(Me)||!Number.isFinite(fe)||!Number.isFinite(ge))return;let Z=zs(W),ae=zs(Te),Pe=zs(C),He=Math.min(en,Math.max(0,Math.floor(zs(N,1))));for(let Ge=0;Ge<He;Ge++){let q=T;T=(T+1)%en;let oe,pe,ve;if(z.ring){let De=(He>1?Ge/He:Math.random())*N0+Math.random()*.2,Ze=Hn(3.5,5.5);oe=Math.cos(De)*Ze+Z*.3,ve=Math.sin(De)*Ze+Pe*.3,pe=Hn(z.lift[0],z.lift[1])+ae*.3}else oe=Z+Hn(-z.spread,z.spread),ve=Pe+Hn(-z.spread,z.spread),pe=ae+Hn(z.lift[0],z.lift[1]);let be=q*3;r[be]=Me+Hn(-.1,.1),r[be+1]=fe,r[be+2]=ge+Hn(-.1,.1),o[be]=oe,o[be+1]=pe,o[be+2]=ve,d[q]=0,g[q]=z.life*Hn(.85,1.15),x[q]=z.drag,m[q]=z.grav,p[q]=z.s0*Hn(.85,1.2),S[q]=z.s1*Hn(.85,1.2),y[q]=z.a0,v[q]=fe,E[q]=z.bounce?1:0,f[q]=z.add?1:0,a[be]=z.c0[0],a[be+1]=z.c0[1],a[be+2]=z.c0[2],l[be]=z.c1[0],l[be+1]=z.c1[1],l[be+2]=z.c1[2]}He>0&&(_=!0)}function Y(ne){let Me=!1;for(let fe=0;fe<en;fe++){if(g[fe]<=0)continue;if(Me=!0,d[fe]+=ne,d[fe]>=g[fe]){g[fe]=0,u[fe]=0,h[fe]=0;continue}let ge=fe*3,W=Math.max(0,1-x[fe]*ne),Te=o[ge]*W,C=o[ge+1]*W-m[fe]*ne,N=o[ge+2]*W,z=r[ge]+Te*ne,Z=r[ge+1]+C*ne,ae=r[ge+2]+N*ne;E[fe]&&Z<v[fe]&&C<0&&(Z=v[fe],C=-C*.35,Te*=.6,N*=.6,E[fe]=0),o[ge]=Te,o[ge+1]=C,o[ge+2]=N,r[ge]=z,r[ge+1]=Z,r[ge+2]=ae;let Pe=d[fe]/g[fe];h[fe]=p[fe]+(S[fe]-p[fe])*Pe,u[fe]=y[fe]*(1-Pe*Pe),c[ge]=a[ge]+(l[ge]-a[ge])*Pe,c[ge+1]=a[ge+1]+(l[ge+1]-a[ge+1])*Pe,c[ge+2]=a[ge+2]+(l[ge+2]-a[ge+2])*Pe}return Me}let G=null;if(n>0){let ne=new gt,Me=new Float32Array(po*6),fe=new mt(Me,3).setUsage(Ai);ne.setAttribute("position",fe);let ge=new Float32Array(po*3),W=new Float32Array(po),Te=new Float32Array(po);for(let z=0;z<po;z++)ge[z*3]=(Math.random()-.5)*U0,ge[z*3+1]=-12+Math.random()*F0,ge[z*3+2]=(Math.random()-.5)*O0,W[z]=Hn(22,30),Te[z]=Hn(.8,1.2);let C=new Ss({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),N=new er(ne,C);N.frustumCulled=!1,i.add(N),G={geo:ne,mat:C,lines:N,attr:fe,pa:Me,head:ge,fall:W,len:Te,windX:5.5*s,windZ:2*s}}function J(ne,Me,fe){let ge=G,W=ge.pa,Te=ge.head,C=ge.windX,N=ge.windZ,z=Me.x,Z=Me.y+BT,ae=Me.z;for(let Pe=0;Pe<po;Pe++){let He=Pe*3,Ge=z+Wf(Te[He]-z,U0),q=Z+Wf(Te[He+1]-Z,F0),oe=ae+Wf(Te[He+2]-ae,O0),pe=ge.fall[Pe],ve=C-fe.x,be=-pe-fe.y,De=N-fe.z,Ze=.05*ge.len[Pe],Ke=Pe*6;W[Ke]=Ge-ve*Ze,W[Ke+1]=q-be*Ze,W[Ke+2]=oe-De*Ze,W[Ke+3]=Ge,W[Ke+4]=q,W[Ke+5]=oe,Te[He]=Ge+C*ne,Te[He+1]=q-pe*ne,Te[He+2]=oe+N*ne}ge.attr.needsUpdate=!0}let re=new Float32Array(pa*4*3),me=new Float32Array(pa*4),_e=new Uint16Array(pa*6);for(let ne=0;ne<pa;ne++){let Me=ne*4;_e.set([Me,Me+1,Me+2,Me,Me+2,Me+3],ne*6)}let ce=new gt,ie=new mt(re,3).setUsage(Ai),Q=new mt(me,1).setUsage(Ai);ce.setAttribute("position",ie),ce.setAttribute("aAlpha",Q),ce.setIndex(new mt(_e,1));let ee=new vt({uniforms:{uColor:{value:new Re(1315086)}},vertexShader:YT,fragmentShader:$T,transparent:!0,depthWrite:!1,side:Ct,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),L=new ot(ce,ee);L.frustumCulled=!1,i.add(L);let B=0,X=1/0,$=-1;function de(ne,Me,fe,ge,W,Te,C=.3,N=.5){if(![ne,Me,fe,ge,W,Te,C,N].every(Number.isFinite))return;let z=ge-ne,Z=Te-fe,ae=Math.hypot(z,Z);if(ae<1e-4)return;let Pe=C*.5,He=-Z/ae*Pe,Ge=z/ae*Pe,q=ma(N,0,1),oe=Me+.03,pe=W+.03,ve=B*4;B=(B+1)%pa;let be=re,De=ve*3;be[De]=ne+He,be[De+1]=oe,be[De+2]=fe+Ge,be[De+3]=ne-He,be[De+4]=oe,be[De+5]=fe-Ge,be[De+6]=ge-He,be[De+7]=pe,be[De+8]=Te-Ge,be[De+9]=ge+He,be[De+10]=pe,be[De+11]=Te+Ge,me[ve]=q,me[ve+1]=q,me[ve+2]=q,me[ve+3]=q,ve<X&&(X=ve),ve+3>$&&($=ve+3)}function we(){if($<0)return;let ne=X,Me=$-X+1;ie.clearUpdateRanges(),ie.addUpdateRange(ne*3,Me*3),ie.needsUpdate=!0,Q.clearUpdateRanges(),Q.addUpdateRange(ne,Me),Q.needsUpdate=!0,X=1/0,$=-1}let Ae=new ht;Ae.matrixAutoUpdate=!1,i.add(Ae);let V=new Float32Array(pr*6),Ve=new mt(V,3).setUsage(Ai),ze=new gt;ze.setAttribute("position",Ve);let Be=new Float32Array(pr),Ie=new Float32Array(pr),qe=new Float32Array(pr),Fe=new Float32Array(pr);for(let ne=0;ne<pr;ne++){let Me=Math.random()*N0,fe=Hn(.8,1.5);Be[ne]=Math.cos(Me)*fe,Ie[ne]=Math.sin(Me)*fe,qe[ne]=-Xf-Math.random()*B0,Fe[ne]=Hn(.5,1.2)}let D=new Ss({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new er(ze,D);A.frustumCulled=!1,A.visible=!1,Ae.add(A);let j=0,xe=0,ye=0,he=0;function Ce(ne,Me){ye+=(j-ye)*(1-Math.exp(-6*ne)),he+=(xe-he)*(1-Math.exp(-8*ne)),Me.updateMatrixWorld(),Ae.matrix.copy(Me.matrixWorld),Ae.matrixWorld.copy(Me.matrixWorld);let fe=ma((ye-.55)/.45,0,1),ge=Math.min(1,.55*fe*fe*(3-2*fe)+.6*he),W=Math.floor(ge*pr);if(W<=0){A.visible=!1;return}A.visible=!0,ze.setDrawRange(0,W*2),D.color.copy(HT).lerp(VT,he),D.opacity=.05+.24*ge;let Te=(60+110*ge)*ne,C=1.5+5*ge,N=V;for(let z=0;z<W;z++){let Z=qe[z]+Te;Z>-Xf&&(Z-=B0),qe[z]=Z;let ae=-Z,Pe=Be[z]*ae*.9,He=Ie[z]*ae*.5,Ge=C*Fe[z],q=z*6;N[q]=Pe,N[q+1]=He,N[q+2]=Z,N[q+3]=Pe,N[q+4]=He,N[q+5]=Z-Ge}Ve.needsUpdate=!0}let Le=new k,Ne=new k,ke=!1,Ee=!1;function Ue(ne,Me){if(Ee)return;ne=GT(ne);let fe=Me.position;ke?ne>0&&(Ne.subVectors(fe,Le).divideScalar(ne),Ne.lengthSq()>Gf*Gf&&Ne.setLength(Gf),Le.copy(fe)):(Le.copy(fe),Ne.set(0,0,0),ke=!0);let ge=zs(Me.fov,60);P.uniforms.uScale.value=WT()/(2*Math.tan(ge*Math.PI/360)),(Y(ne)||_)&&(M.needsUpdate=!0,b.needsUpdate=!0,R.needsUpdate=!0,U.needsUpdate=!0,H.needsUpdate=!0,_=!1),G&&ne>0&&J(ne,fe,Ne),Ce(ne,Me),we()}function se(ne,Me){let fe=ma(zs(ne,0),0,1.5);j=ma((fe-.7)/.3,0,1),xe=Me?1:0}function Se(){Ee||(Ee=!0,i.remove(F,L,Ae),G&&i.remove(G.lines),w.dispose(),P.dispose(),ce.dispose(),ee.dispose(),ze.dispose(),D.dispose(),G&&(G.geo.dispose(),G.mat.dispose()))}return{emit:O,addSkid:de,setSpeed:se,update:Ue,dispose:Se}}var ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ZT=new ys(-1,1,1,-1,0,1),qf=class extends gt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},KT=new qf,Li=class{constructor(e){this._mesh=new ot(KT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ZT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var mo=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bn.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ga=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},mc=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var gc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mo(ks),this.copyPass.material.blending=tn,this.clock=new Al}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ga!==void 0&&(o instanceof ga?n=!0:o instanceof mc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xc=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var k0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var go=class i extends In{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new qt(r,o,{type:un});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new qt(r,o,{type:un});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=k0;this.highPassUniforms=bn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ks;this.copyUniforms=bn.clone(h.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Vr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};go.BlurDirectionX=new $e(1,0);go.BlurDirectionY=new $e(0,1);var H0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var vc=class extends In{constructor(){super();let e=H0;this.uniforms=bn.clone(e.uniforms),this.material=new yl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new k(-1,-1,-1)},sceneBoxMax:{value:new k(1,1,1)}},vertexShader:`

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
		}`},va={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},_c={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function V0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=jT(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new k(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ms(s,e,e);return r.wrapS=Cn,r.wrapT=Cn,r.needsUpdate=!0,r}function jT(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var _a={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Yf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $e},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Yf(i,e,t){let n=JT(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function JT(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new k(Math.cos(r),Math.sin(r),o))}return n}var yc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let S=g-m+h,y=x-p+h,v=g-1+2*h,E=x-1+2*h,T=l&255,_=c&255,w=this.perm[T+this.perm[_]]%12,M=this.perm[T+m+this.perm[_+p]]%12,b=this.perm[T+1+this.perm[_+1]]%12,R=.5-g*g-x*x;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[w],g,x));let U=.5-S*S-y*y;U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[M],S,y));let H=.5-v*v-E*E;return H<0?r=0:(H*=H,r=H*H*this.dot(this.grad3[b],v,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,x=h-g,m=u-g,p=f-g,S=e-x,y=t-m,v=n-p,E,T,_,w,M,b;S>=y?y>=v?(E=1,T=0,_=0,w=1,M=1,b=0):S>=v?(E=1,T=0,_=0,w=1,M=0,b=1):(E=0,T=0,_=1,w=1,M=0,b=1):y<v?(E=0,T=0,_=1,w=0,M=1,b=1):S<v?(E=0,T=1,_=0,w=0,M=1,b=1):(E=0,T=1,_=0,w=1,M=1,b=0);let R=S-E+d,U=y-T+d,H=v-_+d,P=S-w+2*d,F=y-M+2*d,O=v-b+2*d,Y=S-1+3*d,G=y-1+3*d,J=v-1+3*d,re=h&255,me=u&255,_e=f&255,ce=this.perm[re+this.perm[me+this.perm[_e]]]%12,ie=this.perm[re+E+this.perm[me+T+this.perm[_e+_]]]%12,Q=this.perm[re+w+this.perm[me+M+this.perm[_e+b]]]%12,ee=this.perm[re+1+this.perm[me+1+this.perm[_e+1]]]%12,L=.6-S*S-y*y-v*v;L<0?s=0:(L*=L,s=L*L*this.dot3(this.grad3[ce],S,y,v));let B=.6-R*R-U*U-H*H;B<0?r=0:(B*=B,r=B*B*this.dot3(this.grad3[ie],R,U,H));let X=.6-P*P-F*F-O*O;X<0?o=0:(X*=X,o=X*X*this.dot3(this.grad3[Q],P,F,O));let $=.6-Y*Y-G*G-J*J;return $<0?a=0:($*=$,a=$*$*this.dot3(this.grad3[ee],Y,G,J)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,x=(e+t+n+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),S=Math.floor(n+x),y=Math.floor(s+x),v=(m+p+S+y)*c,E=m-v,T=p-v,_=S-v,w=y-v,M=e-E,b=t-T,R=n-_,U=s-w,H=M>b?32:0,P=M>R?16:0,F=b>R?8:0,O=M>U?4:0,Y=b>U?2:0,G=R>U?1:0,J=H+P+F+O+Y+G,re=o[J][0]>=3?1:0,me=o[J][1]>=3?1:0,_e=o[J][2]>=3?1:0,ce=o[J][3]>=3?1:0,ie=o[J][0]>=2?1:0,Q=o[J][1]>=2?1:0,ee=o[J][2]>=2?1:0,L=o[J][3]>=2?1:0,B=o[J][0]>=1?1:0,X=o[J][1]>=1?1:0,$=o[J][2]>=1?1:0,de=o[J][3]>=1?1:0,we=M-re+c,Ae=b-me+c,V=R-_e+c,Ve=U-ce+c,ze=M-ie+2*c,Be=b-Q+2*c,Ie=R-ee+2*c,qe=U-L+2*c,Fe=M-B+3*c,D=b-X+3*c,A=R-$+3*c,j=U-de+3*c,xe=M-1+4*c,ye=b-1+4*c,he=R-1+4*c,Ce=U-1+4*c,Le=m&255,Ne=p&255,ke=S&255,Ee=y&255,Ue=a[Le+a[Ne+a[ke+a[Ee]]]]%32,se=a[Le+re+a[Ne+me+a[ke+_e+a[Ee+ce]]]]%32,Se=a[Le+ie+a[Ne+Q+a[ke+ee+a[Ee+L]]]]%32,ne=a[Le+B+a[Ne+X+a[ke+$+a[Ee+de]]]]%32,Me=a[Le+1+a[Ne+1+a[ke+1+a[Ee+1]]]]%32,fe=.6-M*M-b*b-R*R-U*U;fe<0?h=0:(fe*=fe,h=fe*fe*this.dot4(r[Ue],M,b,R,U));let ge=.6-we*we-Ae*Ae-V*V-Ve*Ve;ge<0?u=0:(ge*=ge,u=ge*ge*this.dot4(r[se],we,Ae,V,Ve));let W=.6-ze*ze-Be*Be-Ie*Ie-qe*qe;W<0?f=0:(W*=W,f=W*W*this.dot4(r[Se],ze,Be,Ie,qe));let Te=.6-Fe*Fe-D*D-A*A-j*j;Te<0?d=0:(Te*=Te,d=Te*Te*this.dot4(r[ne],Fe,D,A,j));let C=.6-xe*xe-ye*ye-he*he-Ce*Ce;return C<0?g=0:(C*=C,g=C*C*this.dot4(r[Me],xe,ye,he,Ce)),27*(h+u+f+d+g)}};var ya=class i extends In{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=V0(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},xa.defines),uniforms:bn.clone(xa.uniforms),vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ml,this.normalMaterial.blending=tn,this.pdMaterial=new vt({defines:Object.assign({},_a.defines),uniforms:bn.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},va.defines),uniforms:bn.clone(va.uniforms),vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:bn.clone(ks.uniforms),vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Pl,blendDst:ro,blendEquation:Un,blendSrcAlpha:Cl,blendDstAlpha:ro,blendEquationAlpha:Un}),this.blendMaterial=new vt({uniforms:bn.clone(_c.uniforms),vertexShader:_c.vertexShader,fragmentShader:_c.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Jo,blendSrc:Pl,blendDst:ro,blendEquation:Un,blendSrcAlpha:Cl,blendDstAlpha:ro,blendEquationAlpha:Un}),this.fsQuad=new Li(null),this.originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Jr,this.depthTexture.format=vs,this.depthTexture.type=xs,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Kt,magFilter:Kt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Yf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new yc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ms(s,e,e,On,gi);return r.wrapS=Cn,r.wrapT=Cn,r.needsUpdate=!0,r}};ya.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var G0=58,QT=82,W0=94,eE=9,tE=20,X0=4.7,nE=1.95,iE=3,sE=4,rE=5,Mc=.6;function Hs(i,e,t){return i<e?e:i>t?t:i}function Lt(i,e=0){return Number.isFinite(i)?i:e}function oE(i,e,t){return i+(e-i)*t}function xo(i,e){return 1-Math.exp(-i*e)}function aE(i){return Number.isFinite(i)?Hs(i,0,.1):0}function q0(i){let e=new k,t=new k,n=new k,s=new k,r={x:1,z:0},o=!1,a=0,l=0,c=0,h=G0,u=X0,f=0,d=0,g=0;function x(E,T){let _=Lt(E.x),w=Lt(E.y),M=Lt(E.z),b=Lt(E.heading)+Lt(E.yaw),R=Math.sin(b),U=Math.cos(b),H=-U,P=R;r.x=H,r.z=P;let F=E.airborne?1:0,O=T*T,Y=X0-.3*O+.9*F,G=nE-.15*O+.7*F;u=Y;let J=Hs(Lt(E.slope),-.15,.15),re=Hs(Lt(E.lean),-1.5,1.5),me=0;e.set(_-R*Y+H*me,w+G-J*Y,M-U*Y+P*me),e.y<w+Mc&&(e.y=w+Mc),t.set(_+R*8.5,w+.55+J*4-1.5*F,M+U*8)}function m(E){return oE(G0,QT,Math.pow(E,1.6))}function p(E,T,_,w){i.position.set(n.x+r.x*T,Math.max(n.y+_,w),n.z+r.z*T),i.lookAt(s),i.rotateZ(E)}function S(E,T){if(E=aE(E),!o){y(T);return}a+=E;let _=Hs(Lt(T.speedRatio),0,1);x(T,_);let w=Lt(T.x)-f,M=Lt(T.y)-d,b=Lt(T.z)-g;w*w+M*M+b*b<400&&(n.x+=w,n.y+=M,n.z+=b,s.x+=w,s.y+=M,s.z+=b),f=Lt(T.x),d=Lt(T.y),g=Lt(T.z),n.lerp(e,xo(eE,E));let R=n.x-Lt(T.x),U=n.z-Lt(T.z),H=Math.hypot(R,U);H>.001&&(n.x=Lt(T.x)+R/H*u,n.z=Lt(T.z)+U/H*u),s.lerp(t,xo(tE,E));let P=Lt(T.y)+Mc;n.y<P&&(n.y=P),c*=Math.exp(-rE*E);let F=_*_*_*2.2,O=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,Y=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,G=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,J=c*.35+F*.01,re=O*J,me=Y*J,_e=G*(c*.03+F*.002);l+=((T.boosting?1:0)-l)*xo(sE,E);let ce=m(_),ie=ce+(W0-ce)*l;h+=(ie-h)*xo(iE,E),Math.abs(i.fov-h)>1e-4&&(i.fov=h,i.updateProjectionMatrix()),p(_e,re,me,P)}function y(E){let T=Hs(Lt(E.speedRatio),0,1);x(E,T),n.copy(e),s.copy(t),f=Lt(E.x),d=Lt(E.y),g=Lt(E.z),o=!0,a=0,c=0,l=E.boosting?1:0,h=m(T)+(W0-m(T))*l,i.fov=h,i.updateProjectionMatrix(),p(0,0,0,Lt(E.y)+Mc)}function v(E){c=Hs(c+Lt(E),0,1.5)}return{update:S,shake:v,snap:y}}var lE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,cE=`
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
}`;function Y0(i,e,t,n,s={}){let r=n||{},o=Lt(r.bloom,.5),a=null,l=null,c=null,h=null,u=0,f=0,d=0,g=0,x=0,m=Math.min(globalThis.devicePixelRatio||1,2);try{let T=i.getSize(new $e),_=new qt(Math.max(1,T.x),Math.max(1,T.y),{type:un,samples:4});a=new gc(i,_),a.setPixelRatio(m),a.addPass(new xc(e,t)),s.ao&&!r.night&&(h=new ya(e,t,Math.max(1,T.x),Math.max(1,T.y)),h.updateGtaoMaterial({radius:3.2,distanceExponent:1.4,thickness:4,scale:1.15,samples:12,screenSpaceRadius:!1}),h.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),h.blendIntensity=.6,a.addPass(h)),l=new go(new $e(512,512),o*.8,.75,.9),a.addPass(l),c=new mo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:lE,fragmentShader:cE}),a.addPass(c),a.addPass(new vc)}catch(T){console.warn("Post-traitement indisponible, rendu direct :",T),a=null,l=null,c=null}function p(T,_){!Number.isFinite(T)||!Number.isFinite(_)||T<=0||_<=0||(m=Math.min(globalThis.devicePixelRatio||1,2),i.setPixelRatio(m),i.setSize(T,_),a&&(a.setPixelRatio(m),a.setSize(T,_)))}function S(T,_){u=Hs(Lt(T,0),0,1),f=_?1:0}function y(T){if(T=Number.isFinite(T)?Hs(T,0,.1):0,x+=T,d+=(u-d)*xo(8,T),g+=(f-g)*xo(8,T),c&&(c.uniforms.uSpeed.value=d,c.uniforms.uBoost.value=g,c.uniforms.uTime.value=x),a)try{a.render(T);return}catch(_){console.warn("\xC9chec du post-traitement, rendu direct :",_),a=null}i.render(e,t)}function v(T){h&&(h.enabled=!!T)}function E(){h&&h.dispose&&h.dispose(),a&&a.dispose(),l&&l.dispose&&l.dispose(),c&&c.dispose&&c.dispose(),a=null}return{render:y,setSize:p,setSpeed:S,dispose:E,setAO:v,get hasAO(){return!!h},get aoOn(){return!!h&&h.enabled}}}function $0(i){if(!Number.isFinite(i))return`--'--"---`;let e=Math.floor(i/60),t=Math.floor(i%60),n=Math.floor(i*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(n).padStart(3,"0")}`}var Gt=(i,e,t,n)=>{let s=document.createElement(i);return e&&(s.className=e),n!=null&&(s.textContent=n),t?.appendChild(s),s};function Z0(i){let e=Gt("div","h2-root",i);e.hidden=!0;let t=Gt("div","h2-pos",e),n=Gt("span","h2-pos-num",t,"1"),s=Gt("span","h2-pos-tot",t,"/8");Gt("span","h2-pos-lbl",t,"POS");let r=Gt("div","h2-right",e),o=Gt("div","h2-pill h2-lap",r),a=Gt("span","h2-lap-lbl",o,"TOUR"),l=Gt("span","h2-lap-num",o,"1"),c=Gt("span","h2-lap-tot",o,"/3"),h=Gt("div","h2-pill h2-time",r,`00'00"000`),u=Gt("div","h2-best",r,""),f=Gt("canvas","h2-map",e),d=220;f.width=f.height=d;let g=f.getContext("2d"),x=document.createElement("canvas");x.width=x.height=d;let m=null,p=1,S=0,y=0,v=Gt("div","h2-dial",e),E=Gt("canvas","h2-dial-canvas",v),T=300;E.width=E.height=T;let _=E.getContext("2d"),w=Gt("div","h2-gear",v,"1"),M=Gt("div","h2-speed",v,"0");Gt("div","h2-unit",v,"km/h");let b=Gt("div","h2-boost",v),R=[],U=Gt("div","h2-count",e,""),H=Gt("div","h2-flash",e,""),P=Gt("div","h2-wrong",e,"CONTRESENS");P.hidden=!0;let F={},O=(L,B,X)=>{F[L]!==X&&(F[L]=X,B.textContent=X)},Y=Math.PI*.75,G=Math.PI*2.25,J=-1;function re(L){let B=Math.round(L*120)/120;if(B===J)return;J=B;let X=T/2,$=T*.44;_.clearRect(0,0,T,T),_.lineCap="butt",_.beginPath(),_.arc(X,X,$*1.05,0,Math.PI*2),_.fillStyle="rgba(8, 10, 16, 0.42)",_.fill();let de=(V,Ve,ze,Be)=>{_.beginPath(),_.arc(X,X,$,V,Ve),_.strokeStyle=ze,_.lineWidth=Be,_.stroke()},we=Y+(G-Y)*.86;de(Y,we,"rgba(255,255,255,0.28)",T*.05),de(we,G,"rgba(226,40,48,0.55)",T*.05);let Ae=Y+(G-Y)*Math.min(1,Math.max(0,B));de(Y,Math.min(Ae,we),"#ffffff",T*.05),Ae>we&&de(we,Ae,"#e8242e",T*.05);for(let V=0;V<=8;V++){let Ve=Y+(G-Y)*V/8;_.beginPath(),_.moveTo(X+Math.cos(Ve)*$*.8,X+Math.sin(Ve)*$*.8),_.lineTo(X+Math.cos(Ve)*$*.9,X+Math.sin(Ve)*$*.9),_.strokeStyle=V>=7?"#e8242e":"rgba(255,255,255,0.75)",_.lineWidth=3,_.stroke()}_.beginPath(),_.moveTo(X+Math.cos(Ae)*$*.3,X+Math.sin(Ae)*$*.3),_.lineTo(X+Math.cos(Ae)*$*.98,X+Math.sin(Ae)*$*.98),_.strokeStyle="#ffffff",_.lineWidth=4,_.stroke()}re(0);function me(L){m=L;let B=L.bounds,X=B.maxX-B.minX,$=B.maxZ-B.minZ;p=(d-36)/Math.max(X,$),S=(d-X*p)/2-B.minX*p,y=(d-$*p)/2-B.minZ*p;let de=x.getContext("2d");de.clearRect(0,0,d,d);let we=()=>{de.beginPath(),L.pts.forEach((Ae,V)=>{let Ve=Ae.x*p+S,ze=Ae.z*p+y;V?de.lineTo(Ve,ze):de.moveTo(Ve,ze)}),L.open||de.closePath()};de.lineJoin="round",we(),de.strokeStyle="rgba(0,0,0,0.45)",de.lineWidth=9,de.stroke(),we(),de.strokeStyle="#ffffff",de.lineWidth=5,de.stroke(),we(),de.strokeStyle="rgba(20,24,34,0.9)",de.lineWidth=2,de.stroke(),g.clearRect(0,0,d,d),g.drawImage(x,0,0)}function _e(L){if(!m)return;g.clearRect(0,0,d,d),g.drawImage(x,0,0);let B=m.pts.length,X=($,de)=>{let we=Math.floor(($.s%m.length+m.length)%m.length/m.step);we>=B&&(we=B-1);let Ae=m.pts[we],V=Ae.x*p+S,Ve=Ae.z*p+y;g.beginPath(),g.arc(V,Ve,de?6:3.6,0,Math.PI*2),g.fillStyle=de?"#e8242e":"#ffffff",g.fill(),g.lineWidth=1.5,g.strokeStyle="rgba(0,0,0,0.6)",g.stroke()};for(let $ of L)$.isPlayer||X($,!1);for(let $ of L)$.isPlayer&&X($,!0)}let ce=null;function ie(L){O("pos",n,String(L.position)),O("tot",s,"/"+L.total),O("lap",l,String(L.lap)),O("laps",c,"/"+L.laps),O("time",h,$0(L.time)),O("best",u,L.bestLap?"MEILLEUR "+$0(L.bestLap):""),O("speed",M,String(Math.round(L.speedKmh))),O("gear",w,String(L.gear||1)),re(L.rpm??Math.min(1,L.speedKmh/290));let B=L.boostCharges|0,X=L.boostT>0?1:0,$=B+":"+X;if(F.boost!==$){for(F.boost=$;R.length<B+X;)R.push(Gt("span","h2-boost-dot",b));R.forEach((de,we)=>{de.hidden=we>=B+X,de.classList.toggle("h2-on",X&&we===B)})}if(L.countdown===null||L.countdown===void 0)ce===null&&F.count!==""&&(F.count="",U.textContent="",U.classList.remove("h2-show"));else if(L.countdown>0){let de=String(Math.ceil(L.countdown));F.count!==de&&(F.count=de,U.textContent=de,U.classList.remove("h2-show"),U.offsetWidth,U.classList.add("h2-show"))}else F.count!=="GO !"&&(F.count="GO !",U.textContent="GO !",U.classList.remove("h2-show"),U.offsetWidth,U.classList.add("h2-show"),clearTimeout(ce),ce=setTimeout(()=>{ce=null},800));P.hidden===!!L.wrongWay&&(P.hidden=!L.wrongWay)}let Q=null;function ee(L,B=900){H.textContent=L,H.classList.remove("h2-show"),H.offsetWidth,H.classList.add("h2-show"),clearTimeout(Q),Q=setTimeout(()=>H.classList.remove("h2-show"),B)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:ie,setTrack:me,updateMinimap:_e,flash:ee,setLapLabel(L){a.textContent!==L&&(a.textContent=L)},dispose(){e.remove()}}}var PA=sr.maxSpeed*3.6;var K0=360;var j0=i=>(i<10?"0":"")+i;function $f(i){if(i==null||!Number.isFinite(i))return"--:--.--";let e=Math.max(0,Math.floor(i*100+1e-6)),t=Math.floor(e/6e3),n=Math.floor(e/100)%60;return`${t}:${j0(n)}.${j0(e%100)}`}var IA=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${K0}" height="${K0}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var J0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Q0=0;function Zf(){Q0++;let i=zn((Date.now()^Math.imul(Q0,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=J0[i.int(0,J0.length-1)];return e}var dt=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function eg(i){return i?typeof i=="string"?Ri[i]?.name||i:i.name||Ri[i.id]?.name||"":""}function uE(i){return i&&typeof i=="object"?i:rr.find(e=>e.id===i)||{id:String(i),name:String(i),icon:"\u2022"}}function Kf(i){let e=new Map;for(let n of i||[]){let s=uE(n),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:n,n:s}of e.values())t+=`<span class="pr-own">${dt(n.icon)} ${dt(n.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function jf(i){return(i||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${dt(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function tg(i){let e=document.createElement("div");e.className="pr-menu pr-off",i.appendChild(e);let t=null,n=null;function s(y){try{t&&typeof t.play=="function"&&t.play(y)}catch{}}function r(y,v){let E=n;if(!E||!E.items.length)return;let T=E.items.length,_=(y%T+T)%T,w=_!==E.index;E.index=_,E.focused=!0;for(let M=0;M<T;M++)E.items[M].classList.toggle("pr-sel",M===_);try{E.items[_].focus({preventScroll:!0})}catch{}w&&v&&s("select")}function o(y){let v=n;v&&(n=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),v.resolve(y))}function a(y){return n=null,e.innerHTML=y.html,e.classList.remove("pr-off"),new Promise(v=>{n={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:y.actions||{},resolve:v},y.onMount&&y.onMount(e,o),r(y.initial||0,!1)})}e.addEventListener("click",y=>{let v=n;if(!v||!(y.target instanceof Element))return;let E=y.target.closest("[data-act]");if(!E||!e.contains(E)||E.disabled)return;let T=v.items.indexOf(E);T>=0&&T!==v.index&&r(T,!1);let _=v.actions[E.dataset.act];_&&_(E,o)}),e.addEventListener("mouseover",y=>{let v=n;if(!v||!(y.target instanceof Element))return;let E=y.target.closest("[data-nav]");if(!E)return;let T=v.items.indexOf(E);T>=0&&T!==v.index&&r(T,!0)}),window.addEventListener("keydown",y=>{let v=n;if(!v)return;let E=y.target,T=!!E&&E.tagName==="INPUT",_=y.key||"",w=_.toLowerCase();if(_==="ArrowUp"||!T&&(_==="ArrowLeft"||w==="z"||w==="q")){y.preventDefault(),r(v.index-1,!0);return}if(_==="ArrowDown"||!T&&(_==="ArrowRight"||w==="s"||w==="d")){y.preventDefault(),r(v.index+1,!0);return}if(T){if(_==="Enter"){y.preventDefault();let M=e.querySelector("[data-main]");M&&M.click()}return}if(_.length===1){let M=v.items.find(b=>b.dataset.key===_);M&&(y.preventDefault(),M.click())}});function l({dailySeed:y,meta:v,route:E=null,records:T=null}={}){let _=v||{};if(E)return f(E,_,T||{});let w=String(y||"RUSH-DAILY").toUpperCase(),M=Zf();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${dt(M)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${dt(w)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${_.runs??0}</b><span>runs</span></div>
    <div><b>${_.wins??0}</b><span>victoires</span></div>
    <div><b>${_.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:b=>{let R=b.closest(".pr-screen").querySelector("[data-seed]");R&&(R.value=Zf())},launch:(b,R)=>{let U=b.closest(".pr-screen").querySelector("[data-seed]"),H=(U?U.value:"").trim().toUpperCase();H||(H=Zf()),R({seed:H})},daily:(b,R)=>R({seed:w})}})}let c=y=>`${Math.floor(y/60)}'${String(Math.floor(y%60)).padStart(2,"0")}"`,h=y=>y==null?"":` <small>${y<0?"\u2212":"+"}${Math.abs(y).toFixed(1)} s</small>`;function u(y){if(!y)return"";let v='<li style="display:flex;justify-content:space-between;gap:1.5em">',E=y.splits.map((_,w)=>`${v}<span>${w+1} \xB7 ${dt(_.name.split(" \xB7 ")[0])}</span><b>${dt(c(_.time))}${h(_.delta)}${_.record&&_.best!==null?" \u2605":""}</b></li>`).join(""),T;return y.total?y.total.best===null?T=`Temps total <b>${dt(c(y.time))}</b> \xB7 premier chrono enregistr\xE9`:y.total.record?T=`Temps total <b>${dt(c(y.time))}</b> \xB7 <b>nouveau record</b>${h(y.total.delta)}`:T=`Temps total <b>${dt(c(y.time))}</b> \xB7 record ${dt(c(y.total.best))}${h(y.total.delta)}`:T=`Temps <b>${dt(c(y.time))}</b> \xB7 le record de l'itin\xE9raire ne compte que depuis Catane`,`<p class="pr-sub">${T}</p><ul style="list-style:none;margin:.6em 0;padding:0;display:grid;gap:.25em;font-size:.82em;text-align:left">${E}</ul>`}function f(y,v,E){let T=Object.keys(E.splits||{}).length,_=(y.stages.reduce((M,b)=>M+b.length,0)/1e3).toFixed(0),w=y.stages.map((M,b)=>`<option value="${b+1}">${b+1} \xB7 ${dt(M.subtitle)}</option>`).join("");return a({initial:1,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">${dt(y.title)} \xB7 ${dt(y.roads)} \xB7 ${_} km d'une traite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-from-in">D\xE9part</label>
    <div class="pr-seedbox">
      <select id="pr-from-in" class="pr-input" data-nav data-from style="width:min(86vw,34em);font-size:2.3vmin;letter-spacing:0.04em;text-align:left;text-transform:none">${w}</select>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Prendre la route</button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${E.total?dt(c(E.total)):"\u2013"}</b><span>record Catania \u2192 Falcone</span></div>
    <div><b>${E.finishes??0}</b><span>arriv\xE9es</span></div>
    <div><b>${T}</b><span>chronos de tron\xE7on</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage \xB7 1 2 3 am\xE9lioration aux relais</p>
</section>`,actions:{launch:(M,b)=>{let R=M.closest(".pr-screen").querySelector("[data-from]");b({seed:"A18-A20",stage:Number(R?R.value:1)||1})}}})}function d({stage:y={},index:v=1,total:E=1,standings:T=[],weather:_}={}){let w=eg(_)||eg(y.weather),M=y.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">${y.real?"Itin\xE9raire r\xE9el":`\xC9tape ${dt(v)}/${dt(E)}`}</div>
    <h2 class="pr-h2">${dt(y.name)}</h2>
    <p class="pr-sub">${dt(y.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${dt(w)}</dd></div>
      ${y.real?`<div><dt>Tron\xE7ons</dt><dd>${y.real.length} encha\xEEn\xE9s sans arr\xEAt</dd></div>
      <div><dt>D\xE9part</dt><dd>${dt(y.real[0].subtitle.split(" \xB7 ")[0])}</dd></div>`:`<div><dt>Tours</dt><dd>${dt(M)} ${M>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${dt(y.trackSeed)}</dd></div>`}
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${jf(T)}</ol>
  </div></div>
</section>`,actions:{go:(b,R)=>R(void 0)}})}function g({results:y=[],standings:v=[],stage:E={}}={}){let _=[...y].sort((w,M)=>(w.position??99)-(M.position??99)).map((w,M)=>{let b=Fl[(w.position??0)-1]??0;return`<tr class="pr-tr${w.isPlayer?" pr-me":""}" style="--i:${M}"><td class="pr-c-pos">${dt(w.position??"")}</td><td class="pr-c-name">${dt(w.name)}</td><td class="pr-c-tm">${w.time==null?"Abandon":$f(w.time)}</td><td class="pr-c-best">${w.bestLap==null?"\u2014":$f(w.bestLap)}</td><td class="pr-c-pts">${b>0?"+"+b:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${dt(E.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${_}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${jf(v)}</ol>
  </div></div>
</section>`,actions:{next:(w,M)=>M(void 0)}})}function x({choices:y=[],index:v=1,total:E=1,owned:T=[]}={}){let _=y.map((w,M)=>`<button type="button" class="pr-card pr-slide" style="--i:${M}" data-nav data-key="${M+1}" data-act="pick" data-id="${dt(w.id)}"><span class="pr-card-in"><span class="pr-card-key">${M+1}</span><span class="pr-card-ico" aria-hidden="true">${dt(w.icon)}</span><span class="pr-card-name">${dt(w.name)}</span><span class="pr-card-tag">${dt(w.tagline)}</span><span class="pr-card-pro">\u25B2 ${dt(w.pro)}</span><span class="pr-card-con">\u25BC ${dt(w.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${dt(v)}/${dt(E)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${_}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Kf(T)}</div>
</section>`,actions:{pick:(w,M)=>M(w.dataset.id)}})}function m({standings:y=[],playerPosition:v,run:E={},meta:T}={}){let _=T||{},w=v??y.findIndex(R=>R.isPlayer)+1,M=w===1,b=E.real?M?"Victoire !":`${dt(w)}e \xE0 l'arriv\xE9e`:M?"Champion !":`${dt(w)}e au championnat`;return a({initial:E.real?0:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${M?" pr-gold":""}">${b}</div>
    <ol class="pr-slist pr-slist-big">${jf(y)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    ${E.real?`<h3 class="pr-h3">${dt(E.stages[0].name)}</h3>
    <p class="pr-sub">${dt(E.stages[0].subtitle)}</p>${u(E.summary)}
    <h3 class="pr-h3">Am\xE9liorations prises</h3>
    <div class="pr-owned-list">${Kf(E.upgrades)}</div>`:`<h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Kf(E.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${dt(E.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>`}
    ${E.real?"":`<p class="pr-cmds">Runs : ${_.runs??0} \xB7 Victoires : ${_.wins??0} \xB7 Record : ${_.bestPoints??0} pts</p>`}
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">${E.real?"Repartir":"Nouveau run"}</button>
  </div></div>
</section>`,actions:{copy:R=>{let U="Copier la seed",H;try{H=navigator.clipboard.writeText(String(E.seed??""))}catch(F){H=Promise.reject(F)}let P=F=>{R.textContent=F,setTimeout(()=>{R.isConnected&&(R.textContent=U)},1500)};H.then(()=>P("Copi\xE9e !"),()=>P("Copie impossible"))},again:(R,U)=>U(void 0)}})}function p(y){t=y||null}function S(){n=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:l,showStageIntro:d,showResults:g,showUpgradeChoice:x,showRunEnd:m,hideAll:S,setAudio:p}}var ng=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,ig=.6,hE=.3,Jf=6,mr=55,fE=.1,dE=25,sg=60/128/4,pE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],vo=i=>Number.isFinite(i)?i<0?0:i>1?1:i:0,rg=i=>440*Math.pow(2,(i-69)/12);function mE(i){let t=new Float32Array(1024);for(let n=0;n<1024;n++){let s=n*2/1023-1;t[n]=(1+i)*s/(1+i*Math.abs(s))}return t}function og(){let i=null,e=!1,t=null,n=null,s=null,r=null,o=null,a=null,l=null,c=!1,h=!1,u=null,f=0,d=0,g=-1,x=0,m=0,p=0;function S(L){let B=Math.round(2*L),X=Math.round(.1*L),$=new Float32Array(B+X),de=0,we=0,Ae=0,V=0,Ve=0,ze=0,Be=0;for(let A=0;A<B+X;A++){let j=Math.random()*2-1;de=.99886*de+j*.0555179,we=.99332*we+j*.0750759,Ae=.969*Ae+j*.153852,V=.8665*V+j*.3104856,Ve=.55*Ve+j*.5329522,ze=-.7616*ze-j*.016898,$[A]=(de+we+Ae+V+Ve+ze+Be+j*.5362)*.11,Be=j*.115926}let Ie=i.createBuffer(1,B,L),qe=Ie.getChannelData(0),Fe=0;for(let A=0;A<B;A++){let j=A<X?$[A]*(A/X)+$[B+A]*(1-A/X):$[A];qe[A]=j;let xe=Math.abs(j);xe>Fe&&(Fe=xe)}let D=Fe>0?1/Fe:1;for(let A=0;A<B;A++)qe[A]*=D;return Ie}function y(L){let B=i.createBufferSource();return B.buffer=n,B.loop=!0,B.connect(L),B.start(0,Math.random()*1.5),B}function v(L){let B=i.createGain();return B.gain.value=L,B}function E(L,B,X){let $=i.createBiquadFilter();return $.type=L,$.frequency.value=B,$.Q.value=X,$}function T(){n=S(i.sampleRate),t=v(c?0:ig);let L=i.createDynamicsCompressor();L.threshold.value=-16,L.knee.value=12,L.ratio.value=4,L.attack.value=.005,L.release.value=.2,t.connect(L),L.connect(i.destination);let B=i.createOscillator();B.type="sawtooth",B.frequency.value=mr,B.detune.value=-6;let X=i.createOscillator();X.type="sawtooth",X.frequency.value=mr,X.detune.value=6;let $=i.createOscillator();$.type="square",$.frequency.value=mr/2;let de=v(1);B.connect(v(.28)).connect(de),X.connect(v(.28)).connect(de),$.connect(v(.22)).connect(de);let we=E("bandpass",mr*4,1.2),Ae=v(.04);y(we),we.connect(Ae).connect(de);let V=i.createWaveShaper();V.curve=mE(4),V.oversample="2x",de.connect(V);let Ve=E("lowpass",300,1.3);V.connect(Ve);let ze=v(0);Ve.connect(ze).connect(t),B.start(),X.start(),$.start(),s={osc1:B,osc2:X,osc3:$,nBp:we,nGain:Ae,lp:Ve,gain:ze};let Be=E("bandpass",300,.7),Ie=v(0);y(Be),Be.connect(Ie).connect(t),r={filter:Be,gain:Ie};let qe=E("bandpass",1100,4),Fe=v(3),D=v(0);y(qe),qe.connect(Fe).connect(D).connect(t),o={filter:qe,gain:D};let A=E("highpass",900,.5),j=v(3),xe=v(0);y(A),A.connect(j).connect(xe).connect(t),a={gain:xe},l=v(0),l.connect(t),e=!0}function _(L,B,X){let $=i.currentTime;L.cancelScheduledValues($),L.setTargetAtTime(B,$,X)}function w(L){let B=L.t0,X=L.dur,$=i.createOscillator();$.type=L.type||"sine",$.frequency.setValueAtTime(L.f0,B),L.f1&&$.frequency.exponentialRampToValueAtTime(L.f1,B+X);let de=i.createGain();de.gain.setValueAtTime(1e-4,B),de.gain.linearRampToValueAtTime(L.vol,B+(L.attack||.004)),de.gain.exponentialRampToValueAtTime(1e-4,B+X);let we=$;if(L.lp){let Ae=E("lowpass",L.lp,.7);$.connect(Ae),we=Ae}we.connect(de),de.connect(t),$.start(B),$.stop(B+X+.02)}function M(L){let B=L.t0,X=L.dur,$=i.createBufferSource();$.buffer=n;let de=E(L.type,L.f0,L.q||1);L.f1&&de.frequency.exponentialRampToValueAtTime(L.f1,B+X),de.frequency.setValueAtTime(L.f0,B);let we=i.createGain();we.gain.setValueAtTime(1e-4,B),we.gain.linearRampToValueAtTime(L.vol,B+.004),we.gain.exponentialRampToValueAtTime(1e-4,B+X),$.connect(de),de.connect(we),we.connect(t),$.start(B,Math.random()*1.5,X+.02)}function b(L,B){let X=i.createBufferSource();X.buffer=n;let $=E("bandpass",700+Math.random()*900,1.2),de=i.createGain();de.gain.setValueAtTime(0,L),de.gain.linearRampToValueAtTime(B,L+.003),de.gain.linearRampToValueAtTime(0,L+.03),X.connect($),$.connect(de),de.connect(t),X.start(L,Math.random()*1.5,.05)}let R={beep(L){w({type:"square",f0:440,t0:L,dur:.12,vol:.12,lp:2400})},go(L){w({type:"sawtooth",f0:880,t0:L,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:L,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:L+.02,dur:.25,vol:.04}),M({t0:L,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(L){M({t0:L,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:L,dur:.6,vol:.1,lp:1500,attack:.02})},jump(L){M({t0:L,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(L){w({type:"sine",f0:90,f1:50,t0:L,dur:.2,vol:.6,attack:.002}),M({t0:L,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(L){M({t0:L,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let B=340,X=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[$,de,we]of X)w({type:"sine",f0:B*$,t0:L,dur:we,vol:de,attack:.001})},select(L){w({type:"sine",f0:2400,t0:L,dur:.03,vol:.15,attack:.002})},confirm(L){w({type:"triangle",f0:660,t0:L,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:L+.09,dur:.18,vol:.2})},win(L){[523,659,784,1047,1319].forEach((X,$)=>{let de=$<4?.13:.5,we=L+$*.11;w({type:"square",f0:X,t0:we,dur:de,vol:.1,lp:2500}),w({type:"triangle",f0:X,t0:we,dur:de,vol:.12})})},lose(L){[392,330,262].forEach((B,X)=>{w({type:"triangle",f0:B,t0:L+X*.22,dur:.3,vol:.25,attack:.01})})},pad(L){w({type:"sawtooth",f0:300,f1:1500,t0:L,dur:.15,vol:.12,lp:4e3})},lap(L){w({type:"sine",f0:1e3,t0:L,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:L+.15,dur:.08,vol:.2})}};function U(L){let B=i.createOscillator();B.type="sine",B.frequency.setValueAtTime(150,L),B.frequency.exponentialRampToValueAtTime(45,L+.12);let X=i.createGain();X.gain.setValueAtTime(.5,L),X.gain.exponentialRampToValueAtTime(.001,L+.3),B.connect(X),X.connect(l),B.start(L),B.stop(L+.32)}function H(L,B){let X=i.createBufferSource();X.buffer=n;let $=E("highpass",7e3,.7),de=i.createGain();de.gain.setValueAtTime(B,L),de.gain.exponentialRampToValueAtTime(.001,L+.04),X.connect($),$.connect(de),de.connect(l),X.start(L,Math.random()*1.5,.05)}function P(L,B,X){let $=i.createOscillator();$.type="sawtooth",$.frequency.value=B;let de=E("lowpass",1e3,6);de.frequency.setValueAtTime(1e3,L),de.frequency.exponentialRampToValueAtTime(180,L+X);let we=i.createGain();we.gain.setValueAtTime(1e-4,L),we.gain.linearRampToValueAtTime(.16,L+.01),we.gain.exponentialRampToValueAtTime(1e-4,L+X),$.connect(de),de.connect(we),we.connect(l),$.start(L),$.stop(L+X+.02)}function F(L,B){let X=i.createOscillator();X.type="triangle",X.frequency.value=B;let $=i.createGain();$.gain.setValueAtTime(1e-4,L),$.gain.linearRampToValueAtTime(.035,L+.005),$.gain.exponentialRampToValueAtTime(1e-4,L+.11),X.connect($),$.connect(l),X.start(L),X.stop(L+.13)}function O(L,B){let X=L&15,$=pE[L>>4&3];if(X%4===0&&U(B),X%2===1&&H(B,X%4===2?.1:.05),X%2===0){let de=X===6||X===14?12:0;P(B,rg($.root+de),sg*1.8);let we=[0,$.iv[0],$.iv[1],12];F(B,rg($.root+24+we[X>>1&3]))}}function Y(){if(!e||!h)return;let L=i.currentTime;f<L&&(f=L+.02);let B=L+fE;for(;f<B;)O(d,f),f+=sg,d++}function G(){if(!e){if(!ng)return;try{i=new ng,T()}catch{i=null,e=!1;return}}if(i.state==="suspended")try{let L=i.resume();L&&L.catch&&L.catch(()=>{})}catch{}}function J(L,B){if(!e)return;L=vo(L),B=vo(B);let X=i.currentTime,$=L*Jf,de=Math.min(Jf-1,Math.floor($)),Ae=.45+.55*Math.min(1,$-de),V=vo(L/.08),Ve=mr+(mr*Math.pow(Jf,Ae)-mr)*V,ze=.5*L+.5*B,Be=260+3200*Math.pow(ze,1.3),Ie=.07+.2*L*(.35+.65*B)+.03*B;if(_(s.osc1.frequency,Ve,.04),_(s.osc2.frequency,Ve,.04),_(s.osc3.frequency,Ve*.5,.04),_(s.nBp.frequency,Ve*4,.05),_(s.nGain.gain,.04+.22*B,.05),_(s.lp.frequency,Be,.05),g!==-1&&de!==g){let qe=s.gain.gain;qe.cancelScheduledValues(X),qe.setTargetAtTime(Ie*.35,X,.004),qe.setTargetAtTime(Ie,X+.06,.03),x=X+.12}if(g=de,X>=x&&_(s.gain.gain,Ie,.05),B>=m)m=B;else if(m-B>.3){if(L>.6&&X>=p){let qe=.12+.2*L;for(let Fe=0;Fe<3;Fe++)b(X+Fe*.05+Math.random()*.02,qe*(1-Fe*.2));p=X+.4}m=B}}function re(L){if(!e)return;let B=vo(L),X=B*B;_(r.filter.frequency,250+1600*X,.2),_(r.gain.gain,.03+.35*X,.15)}function me(L){if(!e)return;let B=vo(L);_(o.filter.frequency,900+500*B,.05),_(o.gain.gain,B,.03)}function _e(L){e&&_(a.gain.gain,vo(L)*.25,.1)}function ce(L){e&&Object.prototype.hasOwnProperty.call(R,L)&&R[L](i.currentTime+.01)}function ie(L){c=!!L,e&&_(t.gain,c?0:ig,.015)}function Q(){e&&(h||(h=!0,d=0,f=i.currentTime+.05),_(l.gain,hE,.05),u||(u=setInterval(Y,dE)),Y())}function ee(){h=!1,u&&(clearInterval(u),u=null),e&&_(l.gain,0,.05)}return{resume:G,setEngine:J,setWind:re,setSkid:me,setRain:_e,play:ce,setMuted:ie,startMusic:Q,stopMusic:ee}}var Qf=1/120,Ln=new URLSearchParams(location.search),gE=document.getElementById("game"),Si=new dl({canvas:gE,antialias:!0,powerPreference:"high-performance"});Si.setPixelRatio(Math.min(window.devicePixelRatio,2));Si.shadowMap.enabled=!0;Si.shadowMap.type=Rl;Si.toneMapping=Qo;Si.toneMappingExposure=1.05;Si.outputColorSpace=Rt;var zt=new Yo,Dn=new Zt(70,1,.3,6e3);zt.add(Dn);var is=q0(Dn),pg=document.getElementById("ui"),on=Z0(pg),ts=tg(pg),kt=og();ts.setAudio?.(kt);var wc=new Set,pn={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var xE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement)){if(wc.add(i.code),Wt==="race"&&xE.includes(i.code)&&i.preventDefault(),Vs?.active){let e=["Digit1","Digit2","Digit3","Numpad1","Numpad2","Numpad3"].indexOf(i.code);e>=0&&Vs.pick(e%3)}i.code==="KeyM"&&(bc=!bc,kt.setMuted(bc)),(i.code==="KeyP"||i.code==="Escape")&&Wt==="race"&&(id=!id)}});addEventListener("keyup",i=>wc.delete(i.code));addEventListener("blur",()=>wc.clear());addEventListener("pointerdown",()=>kt.resume(),{once:!1});var bc=Ln.has("mute");bc&&kt.setMuted(!0);var id=!1;function vE(i){let e=(...s)=>s.some(r=>wc.has(r));pn.throttle=e("ArrowUp","KeyW")?1:0,pn.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);pn.steer=t,pn.boost=e("Space"),pn.drift=e("ShiftLeft","ShiftRight","KeyX");let n=navigator.getGamepads?.()[0];if(n){let s=n.axes[0]||0;Math.abs(s)>.12&&(pn.steer=s),pn.throttle=Math.max(pn.throttle,n.buttons[7]?.value||0,n.buttons[0]?.pressed?1:0),pn.brake=Math.max(pn.brake,n.buttons[6]?.value||0),pn.boost=pn.boost||!!n.buttons[2]?.pressed,pn.drift=pn.drift||!!n.buttons[1]?.pressed||!!n.buttons[5]?.pressed}return pn}function _E(i){let e=new Yo,t=new Ts(50,32,16),n=new k(...i.sunDir).normalize(),s=new vt({side:Qt,uniforms:{uTop:{value:new Re(i.skyTop)},uHor:{value:new Re(i.skyHorizon)},uGround:{value:new Re(i.hemiGround)},uSun:{value:new Re(i.sunColor).multiplyScalar(i.sunIntensity)},uSunDir:{value:n}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new ot(t,s));let r=new jr(Si),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var ag=new Map;function lg(i,e="#f4f2ec",t="#16181d"){let n=i+e+t,s=ag.get(n);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(i),20,15),s=new vi(o),s.colorSpace=Rt,s.magFilter=Kt,s.minFilter=ei,ag.set(n,s)}let r=new ot(new Bn(1,1),new st({map:s,roughness:.5,side:Ct,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var Ma=null;function yE(){if(Ma)return Ma;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ma=new vi(i),Ma.colorSpace=Rt,Ma}function ed(i,e,t){let n=new pl(new $o({map:yE(),color:i,transparent:!0,opacity:t,blending:Vr,depthWrite:!1,fog:!1}));return n.scale.setScalar(e),n}var ns={ao:Ln.get("fx")!=="low",slow:0,frames:0,checked:!1},Xe=null,Wt="boot",sd=0,rd=0,od=0,Mo=99;function ME(){if(Xe){for(let i of Xe.bikes)zt.remove(i.model.group);zt.remove(Xe.road.group),Xe.road.dispose?.(),Xe.env.dispose?.(),Xe.env.group?.parent&&Xe.env.group.parent.remove(Xe.env.group),Xe.fx.dispose?.(),Xe.post.dispose?.(),Xe.envMap?.dispose(),zt.environment=null,Xe.mirror&&(zt.remove(Xe.mirror),Xe.mirror.dispose()),Xe.fill&&zt.remove(Xe.fill),Xe.scenery&&(zt.remove(Xe.scenery.group),Xe.scenery.dispose()),Xe.clouds&&(zt.remove(Xe.clouds),Xe.clouds.geometry.dispose(),Xe.clouds.material.dispose()),Xe.sunGlow&&(zt.remove(Xe.sunGlow),Xe.sunGlow.material.dispose()),Xe=null}}var wn=null,mg={},_o=new Map,Ec=new Map;function ba(i){if(!_o.has(i.id)){_o.set(i.id,fetch("assets/v3/"+i.file).then(e=>{if(!e.ok)throw new Error("\xE9tape indisponible : "+i.id);return e.json()}).then(e=>(e.props=mg,Ec.set(i.id,e),e)));for(let e of _o.keys()){if(_o.size<=2)break;e!==i.id&&(_o.delete(e),Ec.delete(e))}}return _o.get(i.id)}function ad({trackSeed:i,weatherId:e,laps:t,riders:n,autopilot:s,realData:r=null,final:o=!0,carry:a=null,keepClouds:l=null}){let c=[performance.now()],h=P=>{c.push(P,Math.round(performance.now()-c[0]))};ME(),h("dispose");let u=zn(i),f=!!r,d=f?r._track||cf(r):pm(i);f&&(r._track=null),h("track");let g=Ri[e]||Ri.sunset;Dn.far=f?9500:6e3,Dn.updateProjectionMatrix();let x=f?o0(zt,d,g,u.fork("env")):Jm(zt,d,g,u.fork("env"));h("env");let m=_E(g);zt.environment=m.texture,zt.environmentIntensity=g.night?.55:.5,Si.toneMappingExposure=g.night?1.5:.82;let p=ed(g.sunColor,g.night?900:2200,g.night?.35:.75);p.userData.dir=new k(...g.sunDir).normalize(),zt.add(p);let S=new wi(g.night?3820160:13226728,g.night?.25:.45);S.position.set(-g.sunDir[0],.6,-g.sunDir[2]).multiplyScalar(100),S.name="fill-light",zt.add(S),h("envmap");let y=f&&r._road||nf(d,g,u.fork("road"));f&&(r._road=null),zt.add(y.group),h("road"),f||rf(x.group,P=>P.geometry.attributes.position.count>2e4?1:.45),rf(y.group,()=>.4);let v=f?{group:new ht,dispose(){}}:n0(d,g,u.fork("scenery"),x.heightAt);x.sun?.shadow&&(x.sun.shadow.mapSize.set(4096,4096),x.sun.shadow.radius=5,x.sun.shadow.blurSamples=16,x.sun.shadow.normalBias=.05,x.sun.shadow.map?.dispose(),x.sun.shadow.map=null),zt.add(v.group);let E=null,T=f?Math.min(.25,g.wet||.25):g.sheen??g.wet;T>.5&&!Ln.has("noreflect")&&(E=new ta(new Bn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),E.rotation.x=-Math.PI/2,E.material.colorWrite=!1,E.material.depthWrite=!1,E.material.depthTest=!1,E.frustumCulled=!1,E.renderOrder=-10,E.name="road-mirror",zt.add(E));let _=y.group.getObjectByName("road-asphalt");_&&T>.5&&(_.material.envMap=m.texture,_.material.envMapIntensity=E?.35:1.25,_.material.metalness=.3,Hm(_.material,g.sheen??g.wet,E?{texture:E.getRenderTarget().texture,matrix:E.material.uniforms.textureMatrix.value}:null)),h("voxelize");let w=l||zm(g,u.fork("clouds"));zt.add(w);let M=z0(zt,g),b=Y0(Si,zt,Dn,g,{ao:ns.ao});h("fx");let R=Em({track:d,laps:t,env:g,rng:u.fork("race"),riders:n,final:o,carry:a}),U=R.riders.map(P=>{let F=D0({color:P.color,accent:P.accent,isPlayer:!!P.isPlayer&&!!g.night,detail:P.isPlayer?"hi":"lo"});F.group.rotation.order="YXZ";let O=F.group.getObjectByName("chassis")||F.group,Y=ed(16722458,.3,.3);if(Y.position.set(0,.67,-.42),O.add(Y),g.night){let re=ed(16773840,1.3,.8);re.position.set(0,.48,1.66),O.add(re)}F.tailGlow=Y;let G=P.isPlayer?1:2+R.riders.indexOf(P)*7%97;for(let re of[-1,1]){let me=lg(G);me.scale.set(.24,.17,1),me.position.set(.105*re,.6,-.2),me.rotation.y=re*Math.PI/2,O.add(me)}let J=lg(G);return J.scale.set(.2,.14,1),J.position.set(0,.585,1.6),J.rotation.x=-.75,O.add(J),zt.add(F.group),{rider:P,model:F,pose:{},prev:new k,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),H=s?kl({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},u.fork("auto")):null;if(Xe={track:d,weather:g,env:x,road:y,fx:M,post:b,race:R,bikes:U,autoAI:H,envMap:m,sunGlow:p,clouds:w,scenery:v,mirror:E,fill:S,playerBike:U.find(P=>P.rider.isPlayer)||U[0]},h("bikes"),window.__loadTimes=c.slice(1),tt?.traffic){for(let P of R.riders)P.ai&&(P.ai.obstacles=tt.traffic.vehicles);H&&(H.obstacles=tt.traffic.vehicles)}if(f){let P=[];for(let F of d.features)F.type==="tunnel"&&F.name&&P.push({s:F.s0-90,text:F.name.toUpperCase()});for(let F of d.bridges)F.name&&F.s1-F.s0>150&&P.push({s:F.s0-40,text:F.name.toUpperCase()});for(let F of x.places||[])P.push({s:F.s-20,text:F.name.toUpperCase()});for(let F of x.props||[])F.label&&F.dist<700&&P.push({s:Math.max(0,F.s-500),text:F.label.toUpperCase()});P.sort((F,O)=>F.s-O.s),Xe.announce=P.filter(F=>F.s>=(d.raceStart||0)-60&&F.s<=d.raceEnd),Xe.announceIdx=0}return on.setTrack(d),Sg(),xg(.016),is.snap(Ac()),rd=R.player?.position||n.length,od=1,Mo=99,window.__game={stage:Xe,renderer:Si,scene:zt,camera:Dn,RL:Qh},window.__tick=yg,Xe}var Di={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Ac(){let i=Xe.playerBike,e=i.rider.state;return Di.x=i.w.x,Di.y=i.w.y,Di.z=i.w.z,Di.heading=i.w.heading,Di.yaw=-gg(e),Di.speedRatio=Math.min(1.3,e.speed/i.rider.stats.maxSpeed),Di.airborne=e.airborne,Di.boosting=e.boostT>0,Di.slope=i.w.slope||0,Di}var SE=.8,cg=.7;function gg(i){let e=i.vdir??i.yaw;return e+SE*(i.yaw-e)}function xg(i){let{track:e,fx:t,weather:n}=Xe;for(let s of Xe.bikes){let r=s.rider.state;Pt(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-gg(r),l=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=cg*(Math.sin(a)-Math.sin(l)),o.position.z+=cg*(Math.cos(a)-Math.cos(l)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let c=s.pose;if(c.lean=r.lean,c.steer=r.steer,c.pitch=r.pitch,c.compress=r.compress,c.wheelSpin=r.wheelSpin,c.speedRatio=r.speed/s.rider.stats.maxSpeed,c.speed=r.speed,c.airborne=r.airborne,c.drift=r.drift,c.boost=r.boostT>0,c.braking=s.rider.isPlayer?pn.brake>.1:!!s.rider.braking,s.model.update(c,i),s.model.tailGlow){let y=c.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*y-s.model.tailGlow.material.opacity)*Math.min(1,i*12),s.model.tailGlow.scale.setScalar(.3+.55*y)}let h=o.rotation.y,u=Math.sin(h),f=Math.cos(h),d=s.w.x-u*.7,g=s.w.z-f*.7,x=s.w.y+.05,m=u*r.speed,p=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",d,x,g,m*.2,1.2,p*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,d,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",d,x,g,m*.25,1.5,p*.25,2),n.wet>.2&&r.speed>20&&Math.random()<n.wet*.8&&t.emit("spray",d,x,g,m*.35,2.5,p*.35,2)),r.boostT>0&&t.emit("boost",d-u*.4,x+.45,g-f*.4,m*.9,.2,p*.9,1),s.prev.set(d,x,g),s.has=!r.airborne;let S=s.rider.isPlayer?null:s.rider.frameEvents;S&&S.length&&vg(s,S,!1)}}function vg(i,e,t){let{fx:n}=Xe,s=i.rider.state,r=i.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of e)l==="land"||l==="hardLand"?(n.emit("land",i.w.x,i.w.y+.1,i.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),t&&(kt.play("land"),is.shake(l==="hardLand"?.9:.45))):l==="wall"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,3,a*.5,26),t&&(kt.play("hit"),is.shake(.7))):l==="crash"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,4,a*.5,40),n.emit("dust",i.w.x,i.w.y+.2,i.w.z,o*.3,2,a*.3,30),t&&(is.shake(1.4),on.flash("CHUTE !",1400))):l==="jump"?t&&kt.play("jump"):l==="boost"?t&&(kt.play("boost"),is.shake(.3),on.flash("BOOST !",600)):l==="pad"&&t&&(kt.play("pad"),is.shake(.2))}function bE(i){let{race:e,autoAI:t,track:n}=Xe,s=e.player,r=pn;if(t||Wt==="finish")if(t){let a=e.riders.filter(l=>l!==s).map(l=>l.state);r=Hl(t,s.state,n,s.stats,a,i)}else r=TE;if(e.update(i,r),tt?.traffic&&e.phase!=="countdown"){tt.traffic.update(i,s.state,e.riders);for(let a of tt.traffic.events)a.type==="near"&&!t?(on.flash(a.boost?`FR\xD4LEMENT \xD7${a.combo} \xB7 BOOST +1`:`FR\xD4LEMENT \xD7${a.combo}`,900),kt.play(a.boost?"boost":"pad")):a.type==="hit"&&!t&&on.flash("ACCROCHAGE",900)}let o=s.state.events;o.length&&(vg(Xe.playerBike,o,!t),o.length=0)}var TE={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},En={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},td=[],ug=new k,nd=performance.now(),Sc=0,Tc=0;function _g(i){requestAnimationFrame(_g);let e=Math.min(.05,(i-nd)/1e3);ns.ao&&!ns.checked&&Wt==="race"&&Xe?.race.phase==="racing"&&(ns.frames++,i-nd>25&&ns.slow++,ns.frames>=240&&(ns.checked=!0,ns.slow>96&&(ns.ao=!1,Xe.post.setAO(!1),console.info("Occlusion ambiante coup\xE9e : affichage trop lent.")))),nd=i,yg(e)}function yg(i){if(!Xe)return;if(id){Xe.post.render(0);return}Tc+=i,sd+=i,Wt==="race"&&Vs?.update(i);let{race:e}=Xe,t=Wt==="race"||Wt==="attract"||Wt==="finish";if(t){Wt==="race"&&vE(i),Sc+=i;let a=0;for(;Sc>=Qf&&a++<8;)bE(Qf),Sc-=Qf;a>=8&&(Sc=0)}xg(i);let n=e.player,s=n.state,r=Math.min(1.3,s.speed/n.stats.maxSpeed),o=Ac();Wt==="intro"||Wt==="menu"||Wt==="finish"&&sd>1.2?EE(o,i):is.update(i,o),ug.set(o.x,o.y,o.z),Xe.env.update(i,Tc,ug),Xe.mirror&&Xe.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Xe.sunGlow.position.copy(Dn.position).addScaledVector(Xe.sunGlow.userData.dir,3200),Xe.road.update(i,Tc),Xe.fx.setSpeed(t?r:0,s.boostT>0),Xe.fx.update(i,Dn),So&&(tt?.traffic&&Wt!=="attract"?So.update(tt.traffic,Xe.track,s.s):So.hide()),Xe.post.setSpeed(t?r:0,s.boostT>0),Xe.post.render(i),(Wt==="race"||Wt==="finish")&&(kt.setEngine(Math.min(1,r),Wt==="race"?pn.throttle:.3),kt.setWind(Math.min(1,r)),kt.setSkid(s.airborne?0:Math.min(1,s.drift))),Wt==="race"&&wE(e,n,s)}var hg=new k;function EE(i,e){let t=Tc*.35+i.heading;hg.set(i.x+Math.sin(t)*7.5,i.y+2.6,i.z+Math.cos(t)*7.5),Dn.position.lerp(hg,Math.min(1,e*2.5)),Dn.fov+=(55-Dn.fov)*Math.min(1,e*3),Dn.updateProjectionMatrix(),Dn.lookAt(i.x,i.y+.9,i.z)}function wE(i,e,t){En.speedKmh=t.speed*3.6,En.position=e.position,En.total=i.riders.length,En.lap=Math.min(i.laps,Math.max(1,e.lap)),En.laps=i.laps,tt&&Wt!=="attract"&&(En.lap=tt.index+1,En.laps=tt.metas.length),on.setLapLabel?.(tt&&Wt!=="attract"?"TRON\xC7ON":"TOUR"),En.time=i.time,En.bestLap=e.bestLap??null,En.boostCharges=t.boostCharges,En.boostT=t.boostT,En.gear=t.gear,En.rpm=t.rpm,En.countdown=i.phase==="countdown"?i.countdown:i.time<.9?0:null,En.wrongWay=Math.abs(t.yaw)>1.4,on.update(En),td.length=0;for(let n of i.riders)td.push({s:n.state.s,d:n.state.d,isPlayer:!!n.isPlayer,color:n.color});if(on.updateMinimap(td),i.phase==="countdown"){let n=Math.ceil(i.countdown);n!==Mo&&(Mo=n,n>0&&kt.play("beep"))}else Mo!==0&&(Mo=0,kt.play("go"),kt.startMusic?.());if(i.phase==="racing"){let n=Xe.announce;if(n)for(;Xe.announceIdx<n.length&&n[Xe.announceIdx].s<=t.s;)on.flash(n[Xe.announceIdx].text,2e3),Xe.announceIdx++;e.position<rd&&!(n&&Xe.announceIdx>0&&t.s-n[Xe.announceIdx-1].s<120)&&on.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),rd=e.position,e.lap!==od&&e.lap<=i.laps&&(od=e.lap,kt.play("lap"),e.lap===i.laps&&on.flash("DERNIER TOUR",1400))}tt&&Wt==="race"&&i.phase==="racing"&&AE(t.s),i.phase==="relay"&&Wt==="race"&&CE(),i.phase==="finished"&&Wt==="race"&&PE()}var tt=null,fg=["track","near","mid","road"];function AE(i){let e=tt.metas[tt.index+1];if(!e||i<Xe.track.raceEnd*.35)return;let t=Ec.get(e.id);if(!t||(tt.prepFor!==e.id&&(tt.prepFor=e.id,tt.prepStep=0,tt.prepWait=0),tt.prepStep>=fg.length||tt.prepWait-- >0))return;let n=fg[tt.prepStep++];tt.prepWait=20,n==="track"?t._track=cf(t):n==="road"?t._road=nf(t._track,Ri[tt.weatherId]||Ri.sunset,zn("REAL:"+e.id).fork("road")):r0(t,n)}var So=null,ss=h0(),Vs=null;function Mg(i){let e=tt.metas[tt.splits.length],t=tt.splits.length===0,n=d0(ss,e.id+(t?":g":":r"),i-tt.splitStart);return tt.splitStart=i,tt.splits.push({name:e.subtitle,...n}),lc(ss),n}function RE(){if(!It)return;let i=m0(Yl({...It,stageIndex:tt.index}));if(!i.length)return;let e=t=>{if(!$l(It,t.id))return;let n=tt.riders.find(s=>s.isPlayer);n&&Object.assign(n.stats,or(It)),on.flash(`${t.icon||""} ${t.name.toUpperCase()}`,1800),kt.play("lap")};if(tt.autopilot&&!Ln.has("pick")){e(i[0]);return}Vs=Vs||g0(),Vs.show(i,e,9)}function CE(){let i=tt&&tt.metas[tt.index+1];if(!i)return;let e=Ec.get(i.id);if(!e){tt.waiting||(tt.waiting=!0,on.flash("CHARGEMENT\u2026",1500),ba(i).catch(()=>{}));return}let t=Xe.race,n=t.player||t.riders[0],s=Pt(t.track,n.state.s,n.state.d,{}),r=Xe.clouds;Xe.clouds=null,r&&zt.remove(r);let o=(e.raceStart||0)-(t.track.raceEnd??t.track.length),a=new Map;for(let u of t.riders)u.state.s+=o,u.state._padKey=null,a.set(u.id,u.state);tt.traffic?.shift(o),tt.index+=1,tt.waiting=!1;let l=performance.now();if(ad({trackSeed:"REAL:"+i.id,weatherId:tt.weatherId,laps:1,riders:tt.riders,autopilot:tt.autopilot,realData:e,final:tt.index===tt.metas.length-1,carry:{time:t.time,states:a},keepClouds:r}),r){let u=Pt(Xe.track,n.state.s,n.state.d,{});r.position.x+=u.x-s.x,r.position.z+=u.z-s.z}Mo=0,is.snap(Ac()),tt.hitch=Math.max(tt.hitch||0,performance.now()-l),window.__relay={index:tt.index,ms:Math.round(performance.now()-l)};let c=Mg(t.time);on.flash(`TRON\xC7ON ${hf(c.time)}${c.delta===null?"":" ("+f0(c.delta)+")"}${c.record&&c.best!==null?" \xB7 RECORD":""} \u2014 ${i.subtitle.split(" \xB7 ")[0].toUpperCase()}`,3200),RE();let h=tt.metas[tt.index+1];h&&setTimeout(()=>ba(h).catch(()=>{}),3e3)}function Sg(){let i=innerWidth,e=innerHeight;Si.setSize(i,e,!1),Dn.aspect=i/e,Dn.updateProjectionMatrix(),Xe?.post.setSize(i,e)}addEventListener("resize",Sg);function Sa(i){Wt=i,sd=0}var It=null,yo=Kh(),bg=null;function PE(){if(Sa("finish"),Vs?.hide(),tt&&It){let i=Xe.race.player.finishTime??Xe.race.time,e=Mg(i),t=!!wn&&tt.metas.length===wn.stages.length,n=t?p0(ss,i):null;ss.finishes+=1,lc(ss),It.summary={splits:tt.splits,total:n,time:i,full:t,last:e}}on.flash(`ARRIV\xC9E \u2014 ${Xe.race.player.position}${Xe.race.player.position===1?"er":"e"}`,2200),kt.play(Xe.race.player.position<=3?"win":"lose"),kt.stopMusic?.(),setTimeout(()=>bg?.(),3200)}async function dg(){tt=null,So?.hide(),Vs?.hide();let i=ql(Xl("ATTRACT"));for(let n of i)n.stats=or({upgrades:[]});let e=wn?wn.stages[Math.min(3,wn.stages.length-1)]:null,t=e?await ba(e).catch(()=>null):null;ad({trackSeed:t?"REAL:"+t.id:"ATTRACT-"+Zl(),weatherId:t?"sicily":"sunset",laps:t?1:99,riders:i,autopilot:!0,realData:t}),on.hide(),Sa("attract")}async function IE(){if(await S0().catch(i=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",i)),!Ln.has("noreal")&&(wn=await fetch("assets/v3/route.json").then(i=>i.ok?i.json():null).catch(()=>null),wn&&!wn.stages?.length&&(wn=null),wn)){let i=await fetch("assets/v3/props/index.json").then(t=>t.ok?t.json():[]).catch(()=>[]);await Promise.all(i0.filter(t=>i.includes(t)).map(t=>fetch(`assets/v3/props/${t}.json`).then(n=>n.ok?n.json():null).then(n=>{n&&(mg[t]=n)}).catch(()=>{})));let e=document.createElement("div");e.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",e.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(e)}for(await dg(),document.getElementById("boot").remove(),requestAnimationFrame(_g);;){let i=Ln.get("seed"),e=Number(Ln.get("stage"))||0;if(!i){let s=await ts.showTitle({dailySeed:Zl(),meta:yo,route:wn,records:ss});i=s.seed,s.stage&&(e=s.stage)}if(kt.resume(),It=Xl(i),wn){let s=Math.floor(e)-1;It.real=!0,s>0&&s<wn.stages.length||(s=0);let r=wn.stages.slice(s),o=r.reduce((a,l)=>a+l.length,0)/1e3;It.stages=[{name:wn.title,subtitle:`${wn.roads} \xB7 ${o.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+r[0].id,weather:"sicily",laps:1,real:r}]}for(;!sa(It);){let s=It.stages[It.stageIndex],r=or(It),o=ql(It).map(c=>({...c,stats:c.isPlayer?r:or({upgrades:[]})}));ts.hideAll();let a=null;tt=null,s.real&&(on.flash?.("CHARGEMENT\u2026"),a=await ba(s.real[0]),tt={metas:s.real,index:0,riders:o,autopilot:Ln.has("auto"),weatherId:Ln.get("weather")||s.weather,splits:[],splitStart:0},ss.runs+=1,lc(ss),Ln.has("notraffic")||(tt.traffic=l0({rng:zn("trafic|"+i+"|"+ss.runs),count:40,density:2.6}),So=So||c0(zt,40)),s.real[1]&&setTimeout(()=>ba(s.real[1]).catch(()=>{}),4e3)),ad({trackSeed:s.trackSeed,weatherId:Ln.get("weather")||s.weather,laps:s.laps,riders:o,autopilot:Ln.has("auto"),realData:a,final:!s.real||s.real.length===1}),Sa("intro"),kt.setRain(Xe.weather.rain||0),Ln.has("auto")||await ts.showStageIntro({stage:s,index:It.stageIndex+1,total:It.stages.length,standings:lo(It),weather:Xe.weather}),ts.hideAll(),is.snap(Ac()),on.show(),Sa("race"),await new Promise(c=>{bg=c}),on.hide(),kt.setEngine(.1,0),kt.setWind(0),kt.setSkid(0);let l=Xe.race.results();if($h(It,l),await ts.showResults({results:l,standings:lo(It),stage:s}),!sa(It)){let c=Yl(It),h=It.upgrades.map(f=>rr.find(d=>d.id===f)).filter(Boolean),u=await ts.showUpgradeChoice({choices:c,index:It.stageIndex,total:It.stages.length,owned:h});$l(It,u)}}let t=lo(It),n=t.findIndex(s=>s.isPlayer)+1;yo=Jh(yo,It)||yo,jh(yo),Sa("menu"),await ts.showRunEnd({standings:t,playerPosition:n,run:It,meta:yo}),ts.hideAll(),Ln.delete("seed"),Ln.delete("stage"),await dg()}}IE().catch(i=>{console.error(i);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(i?.stack||i)});
