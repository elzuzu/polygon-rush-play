var ep=Object.defineProperty;var np=(n,t)=>{for(var e in t)ep(n,e,{get:t[e],enumerable:!0})};var ip=0,Uh=1,sp=2;var Wu=1,Il=2,ri=3,Li=0,Ze=1,tn=2,Yn=0,Ls=1,To=2,Nh=3,Fh=4,Pl=5,ai=100,rp=101,op=102,ap=103,cp=104,lp=200,Ll=201,hp=202,up=203,pc=204,yr=205,fp=206,dp=207,pp=208,mp=209,gp=210,_p=211,xp=212,vp=213,yp=214,mc=0,gc=1,_c=2,Fs=3,xc=4,vc=5,yc=6,Mc=7,Xu=0,Mp=1,Sp=2,Pi=0,Dl=1,Ul=2,Nl=3,Cr=4,bp=5,Fl=6,Ol=7;var qu=300,Os=301,Bs=302,Sc=303,bc=304,ta=306,Mr=1e3,ns=1001,Ec=1002,mn=1003,Ep=1004;var Yr=1005;var Xn=1006,Fa=1007;var is=1008;var hi=1009,Yu=1010,Zu=1011,Sr=1012,Bl=1013,ss=1014,qn=1015,Bn=1016,zl=1017,kl=1018,zs=1020,$u=35902,Ju=1021,Ku=1022,Nn=1023,ju=1024,Qu=1025,Ds=1026,ks=1027,Hl=1028,Vl=1029,tf=1030,Gl=1031;var Wl=1033,Mo=33776,So=33777,bo=33778,Eo=33779,wc=35840,Tc=35841,Ac=35842,Rc=35843,Cc=36196,Ic=37492,Pc=37496,Lc=37808,Dc=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,Bc=37814,zc=37815,kc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,wo=36492,qc=36494,Yc=36495,ef=36283,Zc=36284,$c=36285,Jc=36286;var Ao=2300,Kc=2301,Oa=2302,Oh=2400,Bh=2401,zh=2402;var wp=3200,Tp=3201;var nf=0,Ap=1,Ii="",qe="srgb",Ys="srgb-linear",ea="linear",fe="srgb";var gs=7680;var kh=519,Rp=512,Cp=513,Ip=514,sf=515,Pp=516,Lp=517,Dp=518,Up=519,Hh=35044,$n=35048;var Vh="300 es",ci=2e3,Ro=2001,Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ba=Math.PI/180,Co=180/Math.PI;function Ir(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function Np(n,t){return(n%t+t)%t}function za(n,t,e){return(1-e)*n+e*t}function lr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Kt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],y=s[1],v=s[4],_=s[7],T=s[2],E=s[5],w=s[8];return r[0]=o*x+a*y+c*T,r[3]=o*m+a*v+c*E,r[6]=o*f+a*_+c*w,r[1]=l*x+h*y+u*T,r[4]=l*m+h*v+u*E,r[7]=l*f+h*_+u*w,r[2]=d*x+p*y+g*T,r[5]=d*m+p*v+g*E,r[8]=d*f+p*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new ee;function rf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fp(){let n=Io("canvas");return n.style.display="block",n}var Gh={};function _r(n){n in Gh||(Gh[n]=!0,console.warn(n))}function Op(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Bp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var re={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(n.r=li(n.r),n.g=li(n.g),n.b=li(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(n.r=Us(n.r),n.g=Us(n.g),n.b=Us(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?ea:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wh=[.64,.33,.3,.6,.15,.06],Xh=[.2126,.7152,.0722],qh=[.3127,.329],Yh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Ys]:{primaries:Wh,whitePoint:qh,transfer:ea,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:Xh,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:Wh,whitePoint:qh,transfer:fe,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:Xh,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});var _s,jc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Io("canvas")),_s.width=t.width,_s.height=t.height;let i=_s.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Io("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kp=0,Po=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ir(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hp=0,cn=class n extends Di{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ns,s=ns,r=Xn,o=is,a=Nn,c=hi,l=n.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ir(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=qu;cn.DEFAULT_ANISOTROPY=1;var Re=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(p+1)/2,T=(f+1)/2,E=(h+d)/4,w=(u+x)/4,C=(g+m)/4;return v>_&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=w/i):_>T?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=C/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=C/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends Di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Po(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Qc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Lo=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tl=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*x,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let T=Math.sqrt(v),E=Math.atan2(T,f*y);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let _=a*y;if(c=c*m+d*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new z,$h=new En,ui=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),$r.subVectors(this.max,hr),xs.subVectors(t.a,hr),vs.subVectors(t.b,hr),ys.subVectors(t.c,hr),Ei.subVectors(vs,xs),wi.subVectors(ys,vs),Yi.subVectors(xs,ys);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Yi.z,Yi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Yi.z,0,-Yi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Yi.y,Yi.x,0];return!Ga(e,xs,vs,ys,$r)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,xs,vs,ys,$r))?!1:(Jr.crossVectors(Ei,wi),e=[Jr.x,Jr.y,Jr.z],Ga(e,xs,vs,ys,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ti=[new z,new z,new z,new z,new z,new z,new z,new z],Ln=new z,Zr=new ui,xs=new z,vs=new z,ys=new z,Ei=new z,wi=new z,Yi=new z,hr=new z,$r=new z,Jr=new z,Zi=new z;function Ga(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);let a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),c=t.dot(Zi),l=e.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Vp=new ui,ur=new z,Wa=new z,fi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Vp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Wa)),this.expandByPoint(ur.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new z,Xa=new z,Kr=new z,Ti=new z,qa=new z,jr=new z,Ya=new z,br=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xa.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Xa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=Ti.dot(this.direction),c=-Ti.dot(Kr),l=Ti.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xa).addScaledVector(Kr,d),p}intersectSphere(t,e){ei.subVectors(t.center,this.origin);let i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,s,r){qa.subVectors(e,t),jr.subVectors(i,t),Ya.crossVectors(qa,jr);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);let c=a*this.direction.dot(jr.crossVectors(Ti,jr));if(c<0)return null;let l=a*this.direction.dot(qa.cross(Ti));if(l<0||c+l>o)return null;let h=-a*Ti.dot(Ya);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gp,t,Wp)}lookAt(t,e,i){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ai.crossVectors(i,dn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ai.crossVectors(i,dn)),Ai.normalize(),Qr.crossVectors(dn,Ai),s[0]=Ai.x,s[4]=Qr.x,s[8]=dn.x,s[1]=Ai.y,s[5]=Qr.y,s[9]=dn.y,s[2]=Ai.z,s[6]=Qr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],y=i[3],v=i[7],_=i[11],T=i[15],E=s[0],w=s[4],C=s[8],M=s[12],S=s[1],L=s[5],q=s[9],H=s[13],j=s[2],ct=s[6],tt=s[10],mt=s[14],Q=s[3],nt=s[7],wt=s[11],It=s[15];return r[0]=o*E+a*S+c*j+l*Q,r[4]=o*w+a*L+c*ct+l*nt,r[8]=o*C+a*q+c*tt+l*wt,r[12]=o*M+a*H+c*mt+l*It,r[1]=h*E+u*S+d*j+p*Q,r[5]=h*w+u*L+d*ct+p*nt,r[9]=h*C+u*q+d*tt+p*wt,r[13]=h*M+u*H+d*mt+p*It,r[2]=g*E+x*S+m*j+f*Q,r[6]=g*w+x*L+m*ct+f*nt,r[10]=g*C+x*q+m*tt+f*wt,r[14]=g*M+x*H+m*mt+f*It,r[3]=y*E+v*S+_*j+T*Q,r[7]=y*w+v*L+_*ct+T*nt,r[11]=y*C+v*q+_*tt+T*wt,r[15]=y*M+v*H+_*mt+T*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],y=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,v=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,_=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,T=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,E=e*y+i*v+s*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=y*w,t[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*w,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*f+i*c*f)*w,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*w,t[4]=v*w,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*w,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*w,t[8]=_*w,t[9]=(g*u*r-h*x*r-g*i*p+e*x*p+h*i*f-e*u*f)*w,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*f+e*a*f)*w,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*p-e*a*p)*w,t[12]=T*w,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*w,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,y=c*l,v=c*h,_=c*u,T=i.x,E=i.y,w=i.z;return s[0]=(1-(x+f))*T,s[1]=(p+_)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(d+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+v)*w,s[9]=(m-y)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);let l=1/r,h=1/o,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ci){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,g;if(a===ci)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ro)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ci){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*l,p=(i+s)*h,g,x;if(a===ci)g=(o+r)*u,x=-2*u;else if(a===Ro)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ms=new z,Dn=new ce,Gp=new z(0,0,0),Wp=new z(1,1,1),Ai=new z,Qr=new z,dn=new z,Jh=new ce,Kh=new En,Zn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xp=0,jh=new z,Ss=new En,ni=new ce,to=new z,fr=new z,qp=new z,Yp=new En,Qh=new z(1,0,0),tu=new z(0,1,0),eu=new z(0,0,1),nu={type:"added"},Zp={type:"removed"},bs={type:"childadded",child:null},Za={type:"childremoved",child:null},Pe=class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new Zn,i=new En,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new ee}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(fr,to,this.up):ni.lookAt(to,fr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ni),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zp),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new z(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new z,ii=new z,$a=new z,si=new z,Es=new z,ws=new z,iu=new z,Ja=new z,Ka=new z,ja=new z,Qa=new Re,tc=new Re,ec=new Re,ts=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Un.subVectors(s,e),ii.subVectors(i,e),$a.subVectors(t,e);let o=Un.dot(Un),a=Un.dot(ii),c=Un.dot($a),l=ii.dot(ii),h=ii.dot($a),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Qa.setScalar(0),tc.setScalar(0),ec.setScalar(0),Qa.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,i),ec.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qa,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(t,e,i,s){return Un.subVectors(i,e),ii.subVectors(t,e),Un.cross(ii).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Un.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,i),ws.subVectors(r,i),Ja.subVectors(t,i);let c=Es.dot(Ja),l=ws.dot(Ja);if(c<=0&&l<=0)return e.copy(i);Ka.subVectors(t,s);let h=Es.dot(Ka),u=ws.dot(Ka);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Es,o);ja.subVectors(t,r);let p=Es.dot(ja),g=ws.dot(ja);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ws,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return iu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(iu,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},eo={h:0,s:0,l:0};function nc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=Np(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=of[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return re.fromWorkingColorSpace(Xe.copy(this),t),Math.round(an(Xe.r*255,0,255))*65536+Math.round(an(Xe.g*255,0,255))*256+Math.round(an(Xe.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Xe.copy(this),e);let i=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=qe){re.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,i=Xe.g,s=Xe.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(eo);let i=za(Ri.h,eo.h,e),s=za(Ri.s,eo.s,e),r=za(Ri.l,eo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Zt;Zt.NAMES=of;var $p=0,di=class extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ir(),this.name="",this.blending=Ls,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=yr,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pc&&(i.blendSrc=this.blendSrc),this.blendDst!==yr&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gn=class extends di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new z,no=new Kt,le=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=on(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hh&&(t.usage=this.usage),t}};var Uo=class extends le{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var No=class extends le{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends le{constructor(t,e,i){super(new Float32Array(t),e,i)}},Jp=0,bn=new ce,ic=new Pe,Ts=new z,pn=new ui,dr=new ui,ke=new z,_e=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rf(t)?No:Uo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(pn.min,dr.min),pn.expandByPoint(ke),ke.addVectors(pn.max,dr.max),pn.expandByPoint(ke)):(pn.expandByPoint(dr.min),pn.expandByPoint(dr.max))}pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(Ts.fromBufferAttribute(t,l),ke.add(Ts)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new z,c[C]=new z;let l=new z,h=new z,u=new z,d=new Kt,p=new Kt,g=new Kt,x=new z,m=new z;function f(C,M,S){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[C].add(x),a[M].add(x),a[S].add(x),c[C].add(m),c[M].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){let S=y[C],L=S.start,q=S.count;for(let H=L,j=L+q;H<j;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let v=new z,_=new z,T=new z,E=new z;function w(C){T.fromBufferAttribute(s,C),E.copy(T);let M=a[C];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),_.crossVectors(E,M);let L=_.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,L)}for(let C=0,M=y.length;C<M;++C){let S=y[C],L=S.start,q=S.count;for(let H=L,j=L+q;H<j;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=new ce,$i=new br,io=new fi,ru=new z,so=new z,ro=new z,oo=new z,sc=new z,ao=new z,ou=new z,co=new z,ye=class extends Pe{constructor(t=new _e,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(sc.fromBufferAttribute(u,t),o?ao.addScaledVector(sc,h):ao.addScaledVector(sc.sub(e),h))}e.add(ao)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(io.containsPoint($i.origin)===!1&&($i.intersectSphere(io,ru)===null||$i.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),$i.copy(t.ray).applyMatrix4(su),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=v;_<T;_+=3){let E=a.getX(_),w=a.getX(_+1),C=a.getX(_+2);s=lo(this,f,t,i,l,h,u,E,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=lo(this,o,t,i,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=v;_<T;_+=3){let E=_,w=_+1,C=_+2;s=lo(this,f,t,i,l,h,u,E,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=m,v=m+1,_=m+2;s=lo(this,o,t,i,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Kp(n,t,e,i,s,r,o,a){let c;if(t.side===Ze?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Li,a),c===null)return null;co.copy(a),co.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(co);return l<e.near||l>e.far?null:{distance:l,point:co.clone(),object:n}}function lo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,so),n.getVertexPosition(c,ro),n.getVertexPosition(l,oo);let h=Kp(n,t,e,i,so,ro,oo,ou);if(h){let u=new z;ts.getBarycoord(ou,so,ro,oo,u),s&&(h.uv=ts.getInterpolatedAttribute(s,a,c,l,u,new Kt)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,c,l,u,new Kt)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,c,l,u,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new z,materialIndex:0};ts.getNormal(so,ro,oo,d.normal),h.face=d,h.barycoord=u}return h}var Fn=class n extends _e{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(x,m,f,y,v,_,T,E,w,C,M){let S=_/w,L=T/C,q=_/2,H=T/2,j=E/2,ct=w+1,tt=C+1,mt=0,Q=0,nt=new z;for(let wt=0;wt<tt;wt++){let It=wt*L-H;for(let ht=0;ht<ct;ht++){let _t=ht*S-q;nt[x]=_t*y,nt[m]=It*v,nt[f]=j,l.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[f]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(ht/w),u.push(1-wt/C),mt+=1}}for(let wt=0;wt<C;wt++)for(let It=0;It<w;It++){let ht=d+It+ct*wt,_t=d+It+ct*(wt+1),J=d+(It+1)+ct*(wt+1),k=d+(It+1)+ct*wt;c.push(ht,_t,k),c.push(_t,J,k),Q+=6}a.addGroup(p,Q,M),p+=Q,d+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Qe(n){let t={};for(let e=0;e<n.length;e++){let i=Hs(n[e]);for(let s in i)t[s]=i[s]}return t}function jp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function af(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Ni={clone:Hs,merge:Qe},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Fo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new z,au=new Kt,cu=new Kt,Ye=class extends Fo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,au,cu),e.subVectors(cu,au)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=-90,Rs=1,el=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Ye(As,Rs,t,e);r.layers=this.layers,this.add(r);let o=new Ye(As,Rs,t,e);o.layers=this.layers,this.add(o);let a=new Ye(As,Rs,t,e);a.layers=this.layers,this.add(a);let c=new Ye(As,Rs,t,e);c.layers=this.layers,this.add(c);let l=new Ye(As,Rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Oo=class extends cn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Oo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Yn});r.uniforms.tEquirect.value=e;let o=new ye(s,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=Xn),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},rc=new z,em=new z,nm=new ee,oi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=rc.subVectors(i,e).cross(em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(rc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||nm.getNormalMatrix(t),s=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new fi,ho=new z,Er=class{constructor(t=new oi,e=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],y=s[13],v=s[14],_=s[15];if(i[0].setComponents(c-r,d-l,m-p,_-f).normalize(),i[1].setComponents(c+r,d+l,m+p,_+f).normalize(),i[2].setComponents(c+o,d+h,m+g,_+y).normalize(),i[3].setComponents(c-o,d-h,m-g,_-y).normalize(),i[4].setComponents(c-a,d-u,m-x,_-v).normalize(),e===ci)i[5].setComponents(c+a,d+u,m+x,_+v).normalize();else if(e===Ro)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function im(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Vs=class n extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let y=f*d-o;for(let v=0;v<l;v++){let _=v*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){let v=y+l*f,_=y+l*(f+1),T=y+1+l*(f+1),E=y+1+l*f;p.push(v,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Pg=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:om,alphamap_pars_fragment:am,alphatest_fragment:cm,alphatest_pars_fragment:lm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:fm,batching_vertex:dm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:xm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:bm,color_pars_fragment:Em,color_pars_vertex:wm,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Im,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Um,colorspace_pars_fragment:Nm,envmap_fragment:Fm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Bm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Jm,envmap_vertex:km,fog_vertex:Hm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Zm,lights_pars_begin:$m,lights_toon_fragment:Km,lights_toon_pars_fragment:jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:c0,logdepthbuf_vertex:l0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:f0,map_particle_pars_fragment:d0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:x0,morphtarget_pars_vertex:v0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:b0,normal_pars_vertex:E0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:I0,opaque_fragment:P0,packing:L0,premultiplied_alpha_fragment:D0,project_vertex:U0,dithering_fragment:N0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:k0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:Z0,tonemapping_fragment:$0,tonemapping_pars_fragment:J0,transmission_fragment:K0,transmission_pars_fragment:j0,uv_pars_fragment:Q0,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:ag,cube_frag:cg,depth_vert:lg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:fg,equirect_vert:dg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:bg,meshnormal_frag:Eg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Ig,points_vert:Pg,points_frag:Lg,shadow_vert:Dg,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Fg},Ut={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Wn={basic:{uniforms:Qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Qe([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Qe([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Qe([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Qe([Ut.points,Ut.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Qe([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Qe([Ut.common,Ut.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Qe([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Qe([Ut.sprite,Ut.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Qe([Ut.common,Ut.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Qe([Ut.lights,Ut.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Wn.physical={uniforms:Qe([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var uo={r:0,b:0,g:0},Ki=new Zn,Og=new ce;function Bg(n,t,e,i,s,r,o){let a=new Zt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,_=g(y);_===null?f(a,c):_&&_.isColor&&(f(_,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===ta)?(h===void 0&&(h=new ye(new Fn(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Hs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(v.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ki)),h.material.toneMapped=re.getTransfer(_.colorSpace)!==fe,(u!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ye(new Vs(2,2),new Ae({name:"BackgroundMaterial",uniforms:Hs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,v){y.getRGB(uo,af(n)),i.buffers.color.setClear(uo.r,uo.g,uo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:x,addToRenderList:m}}function zg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(S,L,q,H,j){let ct=!1,tt=u(H,q,L);r!==tt&&(r=tt,l(r.object)),ct=p(S,H,q,j),ct&&g(S,H,q,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,_(S,L,q,H),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,L,q){let H=q.wireframe===!0,j=i[S.id];j===void 0&&(j={},i[S.id]=j);let ct=j[L.id];ct===void 0&&(ct={},j[L.id]=ct);let tt=ct[H];return tt===void 0&&(tt=d(c()),ct[H]=tt),tt}function d(S){let L=[],q=[],H=[];for(let j=0;j<e;j++)L[j]=0,q[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,L,q,H){let j=r.attributes,ct=L.attributes,tt=0,mt=q.getAttributes();for(let Q in mt)if(mt[Q].location>=0){let wt=j[Q],It=ct[Q];if(It===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(It=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(It=S.instanceColor)),wt===void 0||wt.attribute!==It||It&&wt.data!==It.data)return!0;tt++}return r.attributesNum!==tt||r.index!==H}function g(S,L,q,H){let j={},ct=L.attributes,tt=0,mt=q.getAttributes();for(let Q in mt)if(mt[Q].location>=0){let wt=ct[Q];wt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor));let It={};It.attribute=wt,wt&&wt.data&&(It.data=wt.data),j[Q]=It,tt++}r.attributes=j,r.attributesNum=tt,r.index=H}function x(){let S=r.newAttributes;for(let L=0,q=S.length;L<q;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){let q=r.newAttributes,H=r.enabledAttributes,j=r.attributeDivisors;q[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),j[S]!==L&&(n.vertexAttribDivisor(S,L),j[S]=L)}function y(){let S=r.newAttributes,L=r.enabledAttributes;for(let q=0,H=L.length;q<H;q++)L[q]!==S[q]&&(n.disableVertexAttribArray(q),L[q]=0)}function v(S,L,q,H,j,ct,tt){tt===!0?n.vertexAttribIPointer(S,L,q,j,ct):n.vertexAttribPointer(S,L,q,H,j,ct)}function _(S,L,q,H){x();let j=H.attributes,ct=q.getAttributes(),tt=L.defaultAttributeValues;for(let mt in ct){let Q=ct[mt];if(Q.location>=0){let nt=j[mt];if(nt===void 0&&(mt==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),mt==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),nt!==void 0){let wt=nt.normalized,It=nt.itemSize,ht=t.get(nt);if(ht===void 0)continue;let _t=ht.buffer,J=ht.type,k=ht.bytesPerElement,at=J===n.INT||J===n.UNSIGNED_INT||nt.gpuType===Bl;if(nt.isInterleavedBufferAttribute){let D=nt.data,Z=D.stride,W=nt.offset;if(D.isInstancedInterleavedBuffer){for(let st=0;st<Q.locationSize;st++)f(Q.location+st,D.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let st=0;st<Q.locationSize;st++)m(Q.location+st);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let st=0;st<Q.locationSize;st++)v(Q.location+st,It/Q.locationSize,J,wt,Z*k,(W+It/Q.locationSize*st)*k,at)}else{if(nt.isInstancedBufferAttribute){for(let D=0;D<Q.locationSize;D++)f(Q.location+D,nt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let D=0;D<Q.locationSize;D++)m(Q.location+D);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let D=0;D<Q.locationSize;D++)v(Q.location+D,It/Q.locationSize,J,wt,It*k,It/Q.locationSize*D*k,at)}}else if(tt!==void 0){let wt=tt[mt];if(wt!==void 0)switch(wt.length){case 2:n.vertexAttrib2fv(Q.location,wt);break;case 3:n.vertexAttrib3fv(Q.location,wt);break;case 4:n.vertexAttrib4fv(Q.location,wt);break;default:n.vertexAttrib1fv(Q.location,wt)}}}}y()}function T(){C();for(let S in i){let L=i[S];for(let q in L){let H=L[q];for(let j in H)h(H[j].object),delete H[j];delete L[q]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let L=i[S.id];for(let q in L){let H=L[q];for(let j in H)h(H[j].object),delete H[j];delete L[q]}delete i[S.id]}function w(S){for(let L in i){let q=i[L];if(q[S.id]===void 0)continue;let H=q[S.id];for(let j in H)h(H[j].object),delete H[j];delete q[S.id]}}function C(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function kg(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==qn&&!C)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function Vg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new oi,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:i,v=y*4,_=f.clippingState||null;c.value=_,_=h(g,d,v,p);for(let T=0;T!==v;++T)_[T]=e[T];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Gg(n){let t=new WeakMap;function e(o,a){return a===Sc?o.mapping=Os:a===bc&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sc||a===bc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nl(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Gs=class extends Fo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ps=4,lu=[.125,.215,.35,.446,.526,.582],es=20,oc=new Gs,hu=new Zt,ac=null,cc=0,lc=0,hc=!1,Qi=(1+Math.sqrt(5))/2,Cs=1/Qi,uu=[new z(-Qi,Cs,0),new z(Qi,Cs,0),new z(-Cs,0,Qi),new z(Cs,0,Qi),new z(0,Qi,-Cs),new z(0,Qi,Cs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Bo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ac=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,cc,lc),this._renderer.xr.enabled=hc,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Bn,format:Nn,colorSpace:Ys,depthBuffer:!1},s=fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,t,e)}return s}_compileMaterial(t){let e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,oc)}_sceneToCubeUV(t,e,i,s){let a=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hu),h.toneMapping=Pi,h.autoClear=!1;let p=new gn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new ye(new Fn,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(hu),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let v=this._cubeSize;fo(s,y*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Os||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;fo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,oc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uu[(s-r-1)%uu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ye(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let f=[],y=0;for(let w=0;w<es;++w){let C=w/x,M=Math.exp(-C*C/2);f.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let _=this._sizeLods[s],T=3*_*(s>v-Ps?s-v+Ps:0),E=4*(this._cubeSize-_);fo(e,T,E,3*_,2*_),c.setRenderTarget(e),c.render(u,oc)}};function Wg(n){let t=[],e=[],i=[],s=n,r=n-Ps+1+lu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Ps?c=lu[o-n+Ps-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let E=0;E<p;E++){let w=E%3*2/3-1,C=E>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(M,x*g*E),v.set(d,m*g*E);let S=[E,E,E,E,E,E];_.set(S,f*g*E)}let T=new _e;T.setAttribute("position",new le(y,x)),T.setAttribute("uv",new le(v,m)),T.setAttribute("faceIndex",new le(_,f)),t.push(T),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fu(n,t,e){let i=new en(n,t,e);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Xg(n,t,e){let i=new Float32Array(es),s=new z(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function du(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function pu(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function qg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Sc||c===bc,h=c===Os||c===Bs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bo(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Bo(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Yg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zg(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let v=0,_=y.length;v<_;v+=3){let T=y[v+0],E=y[v+1],w=y[v+2];d.push(T,E,E,w,w,T)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let T=v+0,E=v+1,w=v+2;d.push(T,E,E,w,w,T)}}else return;let m=new(rf(d)?No:Uo)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $g(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*x[y];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Kg(n,t,e){let i=new WeakMap,s=new Re;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let M=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*T*4*u),w=new Lo(E,_,T,u);w.type=qn,w.needsUpdate=!0;let C=v*4;for(let S=0;S<u;S++){let L=m[S],q=f[S],H=y[S],j=_*T*4*S;for(let ct=0;ct<L.count;ct++){let tt=ct*C;p===!0&&(s.fromBufferAttribute(L,ct),E[j+tt+0]=s.x,E[j+tt+1]=s.y,E[j+tt+2]=s.z,E[j+tt+3]=0),g===!0&&(s.fromBufferAttribute(q,ct),E[j+tt+4]=s.x,E[j+tt+5]=s.y,E[j+tt+6]=s.z,E[j+tt+7]=0),x===!0&&(s.fromBufferAttribute(H,ct),E[j+tt+8]=s.x,E[j+tt+9]=s.y,E[j+tt+10]=s.z,E[j+tt+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Kt(_,T)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function jg(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var zo=class extends cn{constructor(t,e,i,s,r,o,a,c,l,h=Ds){if(h!==Ds&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ds&&(i=ss),i===void 0&&h===ks&&(i=zs),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lf=new cn,mu=new zo(1,1),hf=new Lo,uf=new tl,ff=new Oo,gu=[],_u=[],xu=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function Zs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function na(n,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function i_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),Be(e,i)}}function s_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;vu.set(i),n.uniformMatrix3fv(this.addr,!1,vu),Be(e,i)}}function r_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),Be(e,i)}}function o_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function h_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function p_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=sf,r=mu):r=lf,e.setTexture2D(t||r,s)}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||uf,s)}function g_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ff,s)}function __(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hf,s)}function x_(n){switch(n){case 5126:return Qg;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return h_;case 36294:return u_;case 36295:return f_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}function v_(n,t){n.uniform1fv(this.addr,t)}function y_(n,t){let e=Zs(t,this.size,2);n.uniform2fv(this.addr,e)}function M_(n,t){let e=Zs(t,this.size,3);n.uniform3fv(this.addr,e)}function S_(n,t){let e=Zs(t,this.size,4);n.uniform4fv(this.addr,e)}function b_(n,t){let e=Zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function E_(n,t){let e=Zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function w_(n,t){let e=Zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function T_(n,t){n.uniform1iv(this.addr,t)}function A_(n,t){n.uniform2iv(this.addr,t)}function R_(n,t){n.uniform3iv(this.addr,t)}function C_(n,t){n.uniform4iv(this.addr,t)}function I_(n,t){n.uniform1uiv(this.addr,t)}function P_(n,t){n.uniform2uiv(this.addr,t)}function L_(n,t){n.uniform3uiv(this.addr,t)}function D_(n,t){n.uniform4uiv(this.addr,t)}function U_(n,t,e){let i=this.cache,s=t.length,r=na(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lf,r[o])}function N_(n,t,e){let i=this.cache,s=t.length,r=na(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uf,r[o])}function F_(n,t,e){let i=this.cache,s=t.length,r=na(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ff,r[o])}function O_(n,t,e){let i=this.cache,s=t.length,r=na(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hf,r[o])}function B_(n){switch(n){case 5126:return v_;case 35664:return y_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return E_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return I_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}var il=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=x_(e.type)}},sl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B_(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},uc=/(\w+)(\])?(\[|\.)?/g;function Mu(n,t){n.seq.push(t),n.map[t.id]=t}function z_(n,t,e){let i=n.name,s=i.length;for(uc.lastIndex=0;;){let r=uc.exec(i),o=uc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mu(e,l===void 0?new il(a,n,t):new sl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),Mu(e,u)),e=u}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);z_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Su(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var k_=37297,H_=0;function V_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var bu=new ee;function G_(n){re._getMatrix(bu,re.workingColorSpace,n);let t=`mat3( ${bu.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case ea:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+V_(n.getShaderSource(t),o)}else return s}function W_(n,t){let e=G_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X_(n,t){let e;switch(t){case Dl:e="Linear";break;case Ul:e="Reinhard";break;case Nl:e="Cineon";break;case Cr:e="ACESFilmic";break;case Fl:e="AgX";break;case Ol:e="Neutral";break;case bp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var po=new z;function q_(){re.getLuminanceCoefficients(po);let n=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Z_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xr(n){return n!==""}function wu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(J_,j_)}var K_=new Map;function j_(n,t){let e=ne[t];if(e===void 0){let i=K_.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(n){return n.replace(Q_,tx)}function tx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ex(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function nx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Os:case Bs:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ix(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Bs&&(t="ENVMAP_MODE_REFRACTION"),t}function sx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xu:t="ENVMAP_BLENDING_MULTIPLY";break;case Mp:t="ENVMAP_BLENDING_MIX";break;case Sp:t="ENVMAP_BLENDING_ADD";break}return t}function rx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ox(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ex(e),l=nx(e),h=ix(e),u=sx(e),d=rx(e),p=Y_(e),g=Z_(r),x=s.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),f=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Pi?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,W_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=ol(o),o=wu(o,e),o=Tu(o,e),a=ol(a),a=wu(a,e),a=Tu(a,e),o=Au(o),a=Au(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+o,_=y+f+a,T=Su(s,s.VERTEX_SHADER,v),E=Su(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(L){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(T).trim(),j=s.getShaderInfoLog(E).trim(),ct=!0,tt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ct=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,E);else{let mt=Eu(s,T,"vertex"),Q=Eu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+mt+`
`+Q)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||j==="")&&(tt=!1);tt&&(L.diagnostics={runnable:ct,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:f}})}s.deleteShader(T),s.deleteShader(E),C=new Ns(s,x),M=$_(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,k_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var ax=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new cl(t),e.set(t,i)),i}},cl=class{constructor(t){this.id=ax++,this.code=t,this.usedTimes=0}};function cx(n,t,e,i,s,r,o){let a=new Do,c=new al,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,q,H){let j=q.fog,ct=H.geometry,tt=M.isMeshStandardMaterial?q.environment:null,mt=(M.isMeshStandardMaterial?e:t).get(M.envMap||tt),Q=mt&&mt.mapping===ta?mt.image.height:null,nt=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let wt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,It=wt!==void 0?wt.length:0,ht=0;ct.morphAttributes.position!==void 0&&(ht=1),ct.morphAttributes.normal!==void 0&&(ht=2),ct.morphAttributes.color!==void 0&&(ht=3);let _t,J,k,at;if(nt){let K=Wn[nt];_t=K.vertexShader,J=K.fragmentShader}else _t=M.vertexShader,J=M.fragmentShader,c.update(M),k=c.getVertexShaderID(M),at=c.getFragmentShaderID(M);let D=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),W=H.isInstancedMesh===!0,st=H.isBatchedMesh===!0,pt=!!M.map,gt=!!M.matcap,Et=!!mt,F=!!M.aoMap,Jt=!!M.lightMap,kt=!!M.bumpMap,Bt=!!M.normalMap,Ct=!!M.displacementMap,zt=!!M.emissiveMap,Nt=!!M.metalnessMap,I=!!M.roughnessMap,b=M.anisotropy>0,V=M.clearcoat>0,lt=M.dispersion>0,dt=M.iridescence>0,ot=M.sheen>0,bt=M.transmission>0,Rt=b&&!!M.anisotropyMap,yt=V&&!!M.clearcoatMap,Ht=V&&!!M.clearcoatNormalMap,xt=V&&!!M.clearcoatRoughnessMap,Pt=dt&&!!M.iridescenceMap,Vt=dt&&!!M.iridescenceThicknessMap,Gt=ot&&!!M.sheenColorMap,ut=ot&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,ft=!!M.specularColorMap,Tt=!!M.specularIntensityMap,O=bt&&!!M.transmissionMap,vt=bt&&!!M.thicknessMap,A=!!M.gradientMap,P=!!M.alphaMap,N=M.alphaTest>0,X=!!M.alphaHash,U=!!M.extensions,B=Pi;M.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(B=n.toneMapping);let Y={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:J,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:st,batchingColor:st&&H._colorsTexture!==null,instancing:W,instancingColor:W&&H.instanceColor!==null,instancingMorph:W&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ys,alphaToCoverage:!!M.alphaToCoverage,map:pt,matcap:gt,envMap:Et,envMapMode:Et&&mt.mapping,envMapCubeUVHeight:Q,aoMap:F,lightMap:Jt,bumpMap:kt,normalMap:Bt,displacementMap:d&&Ct,emissiveMap:zt,normalMapObjectSpace:Bt&&M.normalMapType===Ap,normalMapTangentSpace:Bt&&M.normalMapType===nf,metalnessMap:Nt,roughnessMap:I,anisotropy:b,anisotropyMap:Rt,clearcoat:V,clearcoatMap:yt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:xt,dispersion:lt,iridescence:dt,iridescenceMap:Pt,iridescenceThicknessMap:Vt,sheen:ot,sheenColorMap:Gt,sheenRoughnessMap:ut,specularMap:Lt,specularColorMap:ft,specularIntensityMap:Tt,transmission:bt,transmissionMap:O,thicknessMap:vt,gradientMap:A,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:P,alphaTest:N,alphaHash:X,combine:M.combine,mapUv:pt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:Jt&&x(M.lightMap.channel),bumpMapUv:kt&&x(M.bumpMap.channel),normalMapUv:Bt&&x(M.normalMap.channel),displacementMapUv:Ct&&x(M.displacementMap.channel),emissiveMapUv:zt&&x(M.emissiveMap.channel),metalnessMapUv:Nt&&x(M.metalnessMap.channel),roughnessMapUv:I&&x(M.roughnessMap.channel),anisotropyMapUv:Rt&&x(M.anisotropyMap.channel),clearcoatMapUv:yt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ut&&x(M.sheenRoughnessMap.channel),specularMapUv:Lt&&x(M.specularMap.channel),specularColorMapUv:ft&&x(M.specularColorMap.channel),specularIntensityMapUv:Tt&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:vt&&x(M.thicknessMap.channel),alphaMapUv:P&&x(M.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Bt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ct.attributes.uv&&(pt||P),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Z,skinning:H.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:ht,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:B,decodeVideoTexture:pt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:zt&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===Ze,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:U&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(U&&M.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Y.vertexUv1s=l.has(1),Y.vertexUv2s=l.has(2),Y.vertexUv3s=l.has(3),l.clear(),Y}function f(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let S=g[M.type],L;if(S){let q=Wn[S];L=Ni.clone(q.uniforms)}else L=M.uniforms;return L}function T(M,S){let L;for(let q=0,H=h.length;q<H;q++){let j=h[q];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new ox(n,S,M,r),h.push(L)),L}function E(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function lx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function hx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Iu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||hx),i.length>1&&i.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ux(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Iu,n.set(i,[o])):s>=r.length?(o=new Iu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Zt};break;case"SpotLight":e={position:new z,direction:new z,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function dx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var px=0;function mx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function gx(n){let t=new fx,e=dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);let s=new z,r=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,y=0,v=0,_=0,T=0,E=0,w=0;l.sort(mx);for(let M=0,S=l.length;M<S;M++){let L=l[M],q=L.color,H=L.intensity,j=L.distance,ct=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=q.r*H,u+=q.g*H,d+=q.b*H;else if(L.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(L.sh.coefficients[tt],H);w++}else if(L.isDirectionalLight){let tt=t.get(L);if(tt.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let mt=L.shadow,Q=e.get(L);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=ct,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=tt,p++}else if(L.isSpotLight){let tt=t.get(L);tt.position.setFromMatrixPosition(L.matrixWorld),tt.color.copy(q).multiplyScalar(H),tt.distance=j,tt.coneCos=Math.cos(L.angle),tt.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),tt.decay=L.decay,i.spot[x]=tt;let mt=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,mt.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[x]=mt.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,i.spotShadow[x]=Q,i.spotShadowMap[x]=ct,_++}x++}else if(L.isRectAreaLight){let tt=t.get(L);tt.color.copy(q).multiplyScalar(H),tt.halfWidth.set(L.width*.5,0,0),tt.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=tt,m++}else if(L.isPointLight){let tt=t.get(L);if(tt.color.copy(L.color).multiplyScalar(L.intensity),tt.distance=L.distance,tt.decay=L.decay,L.castShadow){let mt=L.shadow,Q=e.get(L);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,Q.shadowCameraNear=mt.camera.near,Q.shadowCameraFar=mt.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=ct,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=tt,g++}else if(L.isHemisphereLight){let tt=t.get(L);tt.skyColor.copy(L.color).multiplyScalar(H),tt.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[f]=tt,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==T||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=T,C.numLightProbes=w,i.version=px++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let v=l[f];if(v.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Pu(n){let t=new gx(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _x(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Pu(n),t.set(s,[a])):r>=o.length?(a=new Pu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ll=class extends di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`;function yx(n,t,e){let i=new Er,s=new Kt,r=new Kt,o=new Re,a=new ll({depthPacking:Tp}),c=new hl,l={},h=e.maxTextureSize,u={[Li]:Ze,[Ze]:Li,[tn]:tn},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:xx,fragmentShader:vx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let f=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Yn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let H=f!==ri&&this.type===ri,j=f===ri&&this.type!==ri;for(let ct=0,tt=E.length;ct<tt;ct++){let mt=E[ct],Q=mt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let nt=Q.getFrameExtents();if(s.multiply(nt),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,Q.mapSize.y=r.y)),Q.map===null||H===!0||j===!0){let It=this.type!==ri?{minFilter:mn,magFilter:mn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new en(s.x,s.y,It),Q.map.texture.name=mt.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let wt=Q.getViewportCount();for(let It=0;It<wt;It++){let ht=Q.getViewport(It);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),q.viewport(o),Q.updateMatrices(mt,It),i=Q.getFrustum(),_(w,C,Q.camera,mt,this.type)}Q.isPointLightShadow!==!0&&this.type===ri&&y(Q,C),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function y(E,w){let C=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new en(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,C,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,C,p,x,null)}function v(E,w,C,M){let S=null,L=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=S.uuid,H=w.uuid,j=l[q];j===void 0&&(j={},l[q]=j);let ct=j[H];ct===void 0&&(ct=S.clone(),j[H]=ct,w.addEventListener("dispose",T)),S=ct}if(S.visible=w.visible,S.wireframe=w.wireframe,M===ri?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=n.properties.get(S);q.light=C}return S}function _(E,w,C,M,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let H=t.update(E),j=E.material;if(Array.isArray(j)){let ct=H.groups;for(let tt=0,mt=ct.length;tt<mt;tt++){let Q=ct[tt],nt=j[Q.materialIndex];if(nt&&nt.visible){let wt=v(E,nt,M,S);E.onBeforeShadow(n,E,w,C,H,wt,Q),n.renderBufferDirect(C,null,H,wt,E,Q),E.onAfterShadow(n,E,w,C,H,wt,Q)}}}else if(j.visible){let ct=v(E,j,M,S);E.onBeforeShadow(n,E,w,C,H,ct,null),n.renderBufferDirect(C,null,H,ct,E,null),E.onAfterShadow(n,E,w,C,H,ct,null)}}let q=E.children;for(let H=0,j=q.length;H<j;H++)_(q[H],w,C,M,S)}function T(E){E.target.removeEventListener("dispose",T);for(let C in l){let M=l[C],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var Mx={[mc]:gc,[_c]:yc,[xc]:Mc,[Fs]:vc,[gc]:mc,[yc]:_c,[Mc]:xc,[vc]:Fs};function Sx(n,t){function e(){let O=!1,vt=new Re,A=null,P=new Re(0,0,0,0);return{setMask:function(N){A!==N&&!O&&(n.colorMask(N,N,N,N),A=N)},setLocked:function(N){O=N},setClear:function(N,X,U,B,Y){Y===!0&&(N*=B,X*=B,U*=B),vt.set(N,X,U,B),P.equals(vt)===!1&&(n.clearColor(N,X,U,B),P.copy(vt))},reset:function(){O=!1,A=null,P.set(-1,0,0,0)}}}function i(){let O=!1,vt=!1,A=null,P=null,N=null;return{setReversed:function(X){if(vt!==X){let U=t.get("EXT_clip_control");vt?U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT):U.clipControlEXT(U.LOWER_LEFT_EXT,U.NEGATIVE_ONE_TO_ONE_EXT);let B=N;N=null,this.setClear(B)}vt=X},getReversed:function(){return vt},setTest:function(X){X?D(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(X){A!==X&&!O&&(n.depthMask(X),A=X)},setFunc:function(X){if(vt&&(X=Mx[X]),P!==X){switch(X){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case _c:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case xc:n.depthFunc(n.EQUAL);break;case vc:n.depthFunc(n.GEQUAL);break;case yc:n.depthFunc(n.GREATER);break;case Mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}P=X}},setLocked:function(X){O=X},setClear:function(X){N!==X&&(vt&&(X=1-X),n.clearDepth(X),N=X)},reset:function(){O=!1,A=null,P=null,N=null,vt=!1}}}function s(){let O=!1,vt=null,A=null,P=null,N=null,X=null,U=null,B=null,Y=null;return{setTest:function(K){O||(K?D(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(K){vt!==K&&!O&&(n.stencilMask(K),vt=K)},setFunc:function(K,et,Mt){(A!==K||P!==et||N!==Mt)&&(n.stencilFunc(K,et,Mt),A=K,P=et,N=Mt)},setOp:function(K,et,Mt){(X!==K||U!==et||B!==Mt)&&(n.stencilOp(K,et,Mt),X=K,U=et,B=Mt)},setLocked:function(K){O=K},setClear:function(K){Y!==K&&(n.clearStencil(K),Y=K)},reset:function(){O=!1,vt=null,A=null,P=null,N=null,X=null,U=null,B=null,Y=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,v=null,_=null,T=null,E=null,w=new Zt(0,0,0),C=0,M=!1,S=null,L=null,q=null,H=null,j=null,ct=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,mt=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),tt=mt>=1):Q.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),tt=mt>=2);let nt=null,wt={},It=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),_t=new Re().fromArray(It),J=new Re().fromArray(ht);function k(O,vt,A,P){let N=new Uint8Array(4),X=n.createTexture();n.bindTexture(O,X),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let U=0;U<A;U++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,P,0,n.RGBA,n.UNSIGNED_BYTE,N):n.texImage2D(vt+U,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,N);return X}let at={};at[n.TEXTURE_2D]=k(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=k(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=k(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=k(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(n.DEPTH_TEST),o.setFunc(Fs),kt(!1),Bt(Uh),D(n.CULL_FACE),F(Yn);function D(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Z(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function W(O,vt){return u[O]!==vt?(n.bindFramebuffer(O,vt),u[O]=vt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=vt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function st(O,vt){let A=p,P=!1;if(O){A=d.get(vt),A===void 0&&(A=[],d.set(vt,A));let N=O.textures;if(A.length!==N.length||A[0]!==n.COLOR_ATTACHMENT0){for(let X=0,U=N.length;X<U;X++)A[X]=n.COLOR_ATTACHMENT0+X;A.length=N.length,P=!0}}else A[0]!==n.BACK&&(A[0]=n.BACK,P=!0);P&&n.drawBuffers(A)}function pt(O){return g!==O?(n.useProgram(O),g=O,!0):!1}let gt={[ai]:n.FUNC_ADD,[rp]:n.FUNC_SUBTRACT,[op]:n.FUNC_REVERSE_SUBTRACT};gt[ap]=n.MIN,gt[cp]=n.MAX;let Et={[lp]:n.ZERO,[Ll]:n.ONE,[hp]:n.SRC_COLOR,[pc]:n.SRC_ALPHA,[gp]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[fp]:n.DST_ALPHA,[up]:n.ONE_MINUS_SRC_COLOR,[yr]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[dp]:n.ONE_MINUS_DST_ALPHA,[_p]:n.CONSTANT_COLOR,[xp]:n.ONE_MINUS_CONSTANT_COLOR,[vp]:n.CONSTANT_ALPHA,[yp]:n.ONE_MINUS_CONSTANT_ALPHA};function F(O,vt,A,P,N,X,U,B,Y,K){if(O===Yn){x===!0&&(Z(n.BLEND),x=!1);return}if(x===!1&&(D(n.BLEND),x=!0),O!==Pl){if(O!==m||K!==M){if((f!==ai||_!==ai)&&(n.blendEquation(n.FUNC_ADD),f=ai,_=ai),K)switch(O){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,T=null,E=null,w.set(0,0,0),C=0,m=O,M=K}return}N=N||vt,X=X||A,U=U||P,(vt!==f||N!==_)&&(n.blendEquationSeparate(gt[vt],gt[N]),f=vt,_=N),(A!==y||P!==v||X!==T||U!==E)&&(n.blendFuncSeparate(Et[A],Et[P],Et[X],Et[U]),y=A,v=P,T=X,E=U),(B.equals(w)===!1||Y!==C)&&(n.blendColor(B.r,B.g,B.b,Y),w.copy(B),C=Y),m=O,M=!1}function Jt(O,vt){O.side===tn?Z(n.CULL_FACE):D(n.CULL_FACE);let A=O.side===Ze;vt&&(A=!A),kt(A),O.blending===Ls&&O.transparent===!1?F(Yn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let P=O.stencilWrite;a.setTest(P),P&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function Bt(O){O!==ip?(D(n.CULL_FACE),O!==L&&(O===Uh?n.cullFace(n.BACK):O===sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),L=O}function Ct(O){O!==q&&(tt&&n.lineWidth(O),q=O)}function zt(O,vt,A){O?(D(n.POLYGON_OFFSET_FILL),(H!==vt||j!==A)&&(n.polygonOffset(vt,A),H=vt,j=A)):Z(n.POLYGON_OFFSET_FILL)}function Nt(O){O?D(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function I(O){O===void 0&&(O=n.TEXTURE0+ct-1),nt!==O&&(n.activeTexture(O),nt=O)}function b(O,vt,A){A===void 0&&(nt===null?A=n.TEXTURE0+ct-1:A=nt);let P=wt[A];P===void 0&&(P={type:void 0,texture:void 0},wt[A]=P),(P.type!==O||P.texture!==vt)&&(nt!==A&&(n.activeTexture(A),nt=A),n.bindTexture(O,vt||at[O]),P.type=O,P.texture=vt)}function V(){let O=wt[nt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function lt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(O){_t.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),_t.copy(O))}function ut(O){J.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Lt(O,vt){let A=l.get(vt);A===void 0&&(A=new WeakMap,l.set(vt,A));let P=A.get(O);P===void 0&&(P=n.getUniformBlockIndex(vt,O.name),A.set(O,P))}function ft(O,vt){let P=l.get(vt).get(O);c.get(vt)!==P&&(n.uniformBlockBinding(vt,P,O.__bindingPointIndex),c.set(vt,P))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},nt=null,wt={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,y=null,v=null,_=null,T=null,E=null,w=new Zt(0,0,0),C=0,M=!1,S=null,L=null,q=null,H=null,j=null,_t.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:Z,bindFramebuffer:W,drawBuffers:st,useProgram:pt,setBlending:F,setMaterial:Jt,setFlipSided:kt,setCullFace:Bt,setLineWidth:Ct,setPolygonOffset:zt,setScissorTest:Nt,activeTexture:I,bindTexture:b,unbindTexture:V,compressedTexImage2D:lt,compressedTexImage3D:dt,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:Lt,uniformBlockBinding:ft,texStorage2D:Ht,texStorage3D:xt,texSubImage2D:ot,texSubImage3D:bt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:yt,scissor:Gt,viewport:ut,reset:Tt}}function Lu(n,t,e,i){let s=bx(i);switch(e){case Ju:return n*t;case ju:return n*t;case Qu:return n*t*2;case Hl:return n*t/s.components*s.byteLength;case Vl:return n*t/s.components*s.byteLength;case tf:return n*t*2/s.components*s.byteLength;case Gl:return n*t*2/s.components*s.byteLength;case Ku:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case Wl:return n*t*4/s.components*s.byteLength;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bo:case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Rc:return Math.max(n,16)*Math.max(t,8)/4;case wc:case Ac:return Math.max(n,8)*Math.max(t,8)/2;case Cc:case Ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case wo:case qc:case Yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ef:case Zc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $c:case Jc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bx(n){switch(n){case hi:case Yu:return{byteLength:1,components:1};case Sr:case Zu:case Bn:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case ss:case Bl:case qn:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ex(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return p?new OffscreenCanvas(I,b):Io("canvas")}function x(I,b,V){let lt=1,dt=Nt(I);if((dt.width>V||dt.height>V)&&(lt=V/Math.max(dt.width,dt.height)),lt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ot=Math.floor(lt*dt.width),bt=Math.floor(lt*dt.height);u===void 0&&(u=g(ot,bt));let Rt=b?g(ot,bt):u;return Rt.width=ot,Rt.height=bt,Rt.getContext("2d").drawImage(I,0,0,ot,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+bt+")."),Rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function m(I){return I.generateMipmaps}function f(I){n.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,b,V,lt,dt=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ot=b;if(b===n.RED&&(V===n.FLOAT&&(ot=n.R32F),V===n.HALF_FLOAT&&(ot=n.R16F),V===n.UNSIGNED_BYTE&&(ot=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ot=n.R8UI),V===n.UNSIGNED_SHORT&&(ot=n.R16UI),V===n.UNSIGNED_INT&&(ot=n.R32UI),V===n.BYTE&&(ot=n.R8I),V===n.SHORT&&(ot=n.R16I),V===n.INT&&(ot=n.R32I)),b===n.RG&&(V===n.FLOAT&&(ot=n.RG32F),V===n.HALF_FLOAT&&(ot=n.RG16F),V===n.UNSIGNED_BYTE&&(ot=n.RG8)),b===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(ot=n.RG8UI),V===n.UNSIGNED_SHORT&&(ot=n.RG16UI),V===n.UNSIGNED_INT&&(ot=n.RG32UI),V===n.BYTE&&(ot=n.RG8I),V===n.SHORT&&(ot=n.RG16I),V===n.INT&&(ot=n.RG32I)),b===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),V===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),V===n.UNSIGNED_INT&&(ot=n.RGB32UI),V===n.BYTE&&(ot=n.RGB8I),V===n.SHORT&&(ot=n.RGB16I),V===n.INT&&(ot=n.RGB32I)),b===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),V===n.UNSIGNED_INT&&(ot=n.RGBA32UI),V===n.BYTE&&(ot=n.RGBA8I),V===n.SHORT&&(ot=n.RGBA16I),V===n.INT&&(ot=n.RGBA32I)),b===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),b===n.RGBA){let bt=dt?ea:re.getTransfer(lt);V===n.FLOAT&&(ot=n.RGBA32F),V===n.HALF_FLOAT&&(ot=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ot=bt===fe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(I,b){let V;return I?b===null||b===ss||b===zs?V=n.DEPTH24_STENCIL8:b===qn?V=n.DEPTH32F_STENCIL8:b===Sr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===zs?V=n.DEPTH_COMPONENT24:b===qn?V=n.DEPTH_COMPONENT32F:b===Sr&&(V=n.DEPTH_COMPONENT16),V}function T(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==mn&&I.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function E(I){let b=I.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&h.delete(b)}function w(I){let b=I.target;b.removeEventListener("dispose",w),S(b)}function C(I){let b=i.get(I);if(b.__webglInit===void 0)return;let V=I.source,lt=d.get(V);if(lt){let dt=lt[b.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&M(I),Object.keys(lt).length===0&&d.delete(V)}i.remove(I)}function M(I){let b=i.get(I);n.deleteTexture(b.__webglTexture);let V=I.source,lt=d.get(V);delete lt[b.__cacheKey],o.memory.textures--}function S(I){let b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(b.__webglFramebuffer[lt]))for(let dt=0;dt<b.__webglFramebuffer[lt].length;dt++)n.deleteFramebuffer(b.__webglFramebuffer[lt][dt]);else n.deleteFramebuffer(b.__webglFramebuffer[lt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[lt])}else{if(Array.isArray(b.__webglFramebuffer))for(let lt=0;lt<b.__webglFramebuffer.length;lt++)n.deleteFramebuffer(b.__webglFramebuffer[lt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let lt=0;lt<b.__webglColorRenderbuffer.length;lt++)b.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[lt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let V=I.textures;for(let lt=0,dt=V.length;lt<dt;lt++){let ot=i.get(V[lt]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(V[lt])}i.remove(I)}let L=0;function q(){L=0}function H(){let I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function j(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ct(I,b){let V=i.get(I);if(I.isVideoTexture&&Ct(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){let lt=I.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,I,b);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function tt(I,b){let V=i.get(I);if(I.version>0&&V.__version!==I.version){J(V,I,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function mt(I,b){let V=i.get(I);if(I.version>0&&V.__version!==I.version){J(V,I,b);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function Q(I,b){let V=i.get(I);if(I.version>0&&V.__version!==I.version){k(V,I,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}let nt={[Mr]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},wt={[mn]:n.NEAREST,[Ep]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},It={[Rp]:n.NEVER,[Up]:n.ALWAYS,[Cp]:n.LESS,[sf]:n.LEQUAL,[Ip]:n.EQUAL,[Dp]:n.GEQUAL,[Pp]:n.GREATER,[Lp]:n.NOTEQUAL};function ht(I,b){if(b.type===qn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Xn||b.magFilter===Fa||b.magFilter===Yr||b.magFilter===is||b.minFilter===Xn||b.minFilter===Fa||b.minFilter===Yr||b.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,nt[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,nt[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,nt[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,wt[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,It[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mn||b.minFilter!==Yr&&b.minFilter!==is||b.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function _t(I,b){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",E));let lt=b.source,dt=d.get(lt);dt===void 0&&(dt={},d.set(lt,dt));let ot=j(b);if(ot!==I.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),dt[ot].usedTimes++;let bt=dt[I.__cacheKey];bt!==void 0&&(dt[I.__cacheKey].usedTimes--,bt.usedTimes===0&&M(b)),I.__cacheKey=ot,I.__webglTexture=dt[ot].texture}return V}function J(I,b,V){let lt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(lt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(lt=n.TEXTURE_3D);let dt=_t(I,b),ot=b.source;e.bindTexture(lt,I.__webglTexture,n.TEXTURE0+V);let bt=i.get(ot);if(ot.version!==bt.__version||dt===!0){e.activeTexture(n.TEXTURE0+V);let Rt=re.getPrimaries(re.workingColorSpace),yt=b.colorSpace===Ii?null:re.getPrimaries(b.colorSpace),Ht=b.colorSpace===Ii||Rt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let xt=x(b.image,!1,s.maxTextureSize);xt=zt(b,xt);let Pt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type),Gt=v(b.internalFormat,Pt,Vt,b.colorSpace,b.isVideoTexture);ht(lt,b);let ut,Lt=b.mipmaps,ft=b.isVideoTexture!==!0,Tt=bt.__version===void 0||dt===!0,O=ot.dataReady,vt=T(b,xt);if(b.isDepthTexture)Gt=_(b.format===ks,b.type),Tt&&(ft?e.texStorage2D(n.TEXTURE_2D,1,Gt,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,Gt,xt.width,xt.height,0,Pt,Vt,null));else if(b.isDataTexture)if(Lt.length>0){ft&&Tt&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,Lt[0].width,Lt[0].height);for(let A=0,P=Lt.length;A<P;A++)ut=Lt[A],ft?O&&e.texSubImage2D(n.TEXTURE_2D,A,0,0,ut.width,ut.height,Pt,Vt,ut.data):e.texImage2D(n.TEXTURE_2D,A,Gt,ut.width,ut.height,0,Pt,Vt,ut.data);b.generateMipmaps=!1}else ft?(Tt&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,xt.width,xt.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt.width,xt.height,Pt,Vt,xt.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,xt.width,xt.height,0,Pt,Vt,xt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ft&&Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,Lt[0].width,Lt[0].height,xt.depth);for(let A=0,P=Lt.length;A<P;A++)if(ut=Lt[A],b.format!==Nn)if(Pt!==null)if(ft){if(O)if(b.layerUpdates.size>0){let N=Lu(ut.width,ut.height,b.format,b.type);for(let X of b.layerUpdates){let U=ut.data.subarray(X*N/ut.data.BYTES_PER_ELEMENT,(X+1)*N/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,A,0,0,X,ut.width,ut.height,1,Pt,U)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,A,0,0,0,ut.width,ut.height,xt.depth,Pt,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,A,Gt,ut.width,ut.height,xt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,A,0,0,0,ut.width,ut.height,xt.depth,Pt,Vt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,A,Gt,ut.width,ut.height,xt.depth,0,Pt,Vt,ut.data)}else{ft&&Tt&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,Lt[0].width,Lt[0].height);for(let A=0,P=Lt.length;A<P;A++)ut=Lt[A],b.format!==Nn?Pt!==null?ft?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,A,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,A,Gt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?O&&e.texSubImage2D(n.TEXTURE_2D,A,0,0,ut.width,ut.height,Pt,Vt,ut.data):e.texImage2D(n.TEXTURE_2D,A,Gt,ut.width,ut.height,0,Pt,Vt,ut.data)}else if(b.isDataArrayTexture)if(ft){if(Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,xt.width,xt.height,xt.depth),O)if(b.layerUpdates.size>0){let A=Lu(xt.width,xt.height,b.format,b.type);for(let P of b.layerUpdates){let N=xt.data.subarray(P*A/xt.data.BYTES_PER_ELEMENT,(P+1)*A/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,P,xt.width,xt.height,1,Pt,Vt,N)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(b.isData3DTexture)ft?(Tt&&e.texStorage3D(n.TEXTURE_3D,vt,Gt,xt.width,xt.height,xt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(b.isFramebufferTexture){if(Tt)if(ft)e.texStorage2D(n.TEXTURE_2D,vt,Gt,xt.width,xt.height);else{let A=xt.width,P=xt.height;for(let N=0;N<vt;N++)e.texImage2D(n.TEXTURE_2D,N,Gt,A,P,0,Pt,Vt,null),A>>=1,P>>=1}}else if(Lt.length>0){if(ft&&Tt){let A=Nt(Lt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Gt,A.width,A.height)}for(let A=0,P=Lt.length;A<P;A++)ut=Lt[A],ft?O&&e.texSubImage2D(n.TEXTURE_2D,A,0,0,Pt,Vt,ut):e.texImage2D(n.TEXTURE_2D,A,Gt,Pt,Vt,ut);b.generateMipmaps=!1}else if(ft){if(Tt){let A=Nt(xt);e.texStorage2D(n.TEXTURE_2D,vt,Gt,A.width,A.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Vt,xt)}else e.texImage2D(n.TEXTURE_2D,0,Gt,Pt,Vt,xt);m(b)&&f(lt),bt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function k(I,b,V){if(b.image.length!==6)return;let lt=_t(I,b),dt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+V);let ot=i.get(dt);if(dt.version!==ot.__version||lt===!0){e.activeTexture(n.TEXTURE0+V);let bt=re.getPrimaries(re.workingColorSpace),Rt=b.colorSpace===Ii?null:re.getPrimaries(b.colorSpace),yt=b.colorSpace===Ii||bt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ht=b.isCompressedTexture||b.image[0].isCompressedTexture,xt=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let P=0;P<6;P++)!Ht&&!xt?Pt[P]=x(b.image[P],!0,s.maxCubemapSize):Pt[P]=xt?b.image[P].image:b.image[P],Pt[P]=zt(b,Pt[P]);let Vt=Pt[0],Gt=r.convert(b.format,b.colorSpace),ut=r.convert(b.type),Lt=v(b.internalFormat,Gt,ut,b.colorSpace),ft=b.isVideoTexture!==!0,Tt=ot.__version===void 0||lt===!0,O=dt.dataReady,vt=T(b,Vt);ht(n.TEXTURE_CUBE_MAP,b);let A;if(Ht){ft&&Tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Lt,Vt.width,Vt.height);for(let P=0;P<6;P++){A=Pt[P].mipmaps;for(let N=0;N<A.length;N++){let X=A[N];b.format!==Nn?Gt!==null?ft?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N,0,0,X.width,X.height,Gt,X.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N,Lt,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N,0,0,X.width,X.height,Gt,ut,X.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N,Lt,X.width,X.height,0,Gt,ut,X.data)}}}else{if(A=b.mipmaps,ft&&Tt){A.length>0&&vt++;let P=Nt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Lt,P.width,P.height)}for(let P=0;P<6;P++)if(xt){ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Pt[P].width,Pt[P].height,Gt,ut,Pt[P].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Lt,Pt[P].width,Pt[P].height,0,Gt,ut,Pt[P].data);for(let N=0;N<A.length;N++){let U=A[N].image[P].image;ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N+1,0,0,U.width,U.height,Gt,ut,U.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N+1,Lt,U.width,U.height,0,Gt,ut,U.data)}}else{ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Gt,ut,Pt[P]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Lt,Gt,ut,Pt[P]);for(let N=0;N<A.length;N++){let X=A[N];ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N+1,0,0,Gt,ut,X.image[P]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,N+1,Lt,Gt,ut,X.image[P])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),ot.__version=dt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function at(I,b,V,lt,dt,ot){let bt=r.convert(V.format,V.colorSpace),Rt=r.convert(V.type),yt=v(V.internalFormat,bt,Rt,V.colorSpace),Ht=i.get(b),xt=i.get(V);if(xt.__renderTarget=b,!Ht.__hasExternalTextures){let Pt=Math.max(1,b.width>>ot),Vt=Math.max(1,b.height>>ot);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,ot,yt,Pt,Vt,b.depth,0,bt,Rt,null):e.texImage2D(dt,ot,yt,Pt,Vt,0,bt,Rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Bt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,dt,xt.__webglTexture,0,kt(b)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,lt,dt,xt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function D(I,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){let lt=b.depthTexture,dt=lt&&lt.isDepthTexture?lt.type:null,ot=_(b.stencilBuffer,dt),bt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=kt(b);Bt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,ot,b.width,b.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,ot,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ot,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,I)}else{let lt=b.textures;for(let dt=0;dt<lt.length;dt++){let ot=lt[dt],bt=r.convert(ot.format,ot.colorSpace),Rt=r.convert(ot.type),yt=v(ot.internalFormat,bt,Rt,ot.colorSpace),Ht=kt(b);V&&Bt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,yt,b.width,b.height):Bt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht,yt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,yt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=i.get(b.depthTexture);lt.__renderTarget=b,(!lt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);let dt=lt.__webglTexture,ot=kt(b);if(b.depthTexture.format===Ds)Bt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0);else if(b.depthTexture.format===ks)Bt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function W(I){let b=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let lt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),lt){let dt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,lt.removeEventListener("dispose",dt)};lt.addEventListener("dispose",dt),b.__depthDisposeCallback=dt}b.__boundDepthTexture=lt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,I)}else if(V){b.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[lt]),b.__webglDepthbuffer[lt]===void 0)b.__webglDepthbuffer[lt]=n.createRenderbuffer(),D(b.__webglDepthbuffer[lt],I,!1);else{let dt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[lt];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),D(b.__webglDepthbuffer,I,!1);else{let lt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,dt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(I,b,V){let lt=i.get(I);b!==void 0&&at(lt.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&W(I)}function pt(I){let b=I.texture,V=i.get(I),lt=i.get(b);I.addEventListener("dispose",w);let dt=I.textures,ot=I.isWebGLCubeRenderTarget===!0,bt=dt.length>1;if(bt||(lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture()),lt.__version=b.version,o.memory.textures++),ot){V.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[Rt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)V.__webglFramebuffer[Rt][yt]=n.createFramebuffer()}else V.__webglFramebuffer[Rt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)V.__webglFramebuffer[Rt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(bt)for(let Rt=0,yt=dt.length;Rt<yt;Rt++){let Ht=i.get(dt[Rt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Bt(I)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Rt=0;Rt<dt.length;Rt++){let yt=dt[Rt];V.__webglColorRenderbuffer[Rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Rt]);let Ht=r.convert(yt.format,yt.colorSpace),xt=r.convert(yt.type),Pt=v(yt.internalFormat,Ht,xt,yt.colorSpace,I.isXRRenderTarget===!0),Vt=kt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Pt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,V.__webglColorRenderbuffer[Rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),D(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),ht(n.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)at(V.__webglFramebuffer[Rt][yt],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,yt);else at(V.__webglFramebuffer[Rt],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);m(b)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let Rt=0,yt=dt.length;Rt<yt;Rt++){let Ht=dt[Rt],xt=i.get(Ht);e.bindTexture(n.TEXTURE_2D,xt.__webglTexture),ht(n.TEXTURE_2D,Ht),at(V.__webglFramebuffer,I,Ht,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,0),m(Ht)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let Rt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Rt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Rt,lt.__webglTexture),ht(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)at(V.__webglFramebuffer[yt],I,b,n.COLOR_ATTACHMENT0,Rt,yt);else at(V.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,Rt,0);m(b)&&f(Rt),e.unbindTexture()}I.depthBuffer&&W(I)}function gt(I){let b=I.textures;for(let V=0,lt=b.length;V<lt;V++){let dt=b[V];if(m(dt)){let ot=y(I),bt=i.get(dt).__webglTexture;e.bindTexture(ot,bt),f(ot),e.unbindTexture()}}}let Et=[],F=[];function Jt(I){if(I.samples>0){if(Bt(I)===!1){let b=I.textures,V=I.width,lt=I.height,dt=n.COLOR_BUFFER_BIT,ot=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(I),Rt=b.length>1;if(Rt)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),Rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let Ht=i.get(b[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ht,0)}n.blitFramebuffer(0,0,V,lt,0,0,V,lt,dt,n.NEAREST),c===!0&&(Et.length=0,F.length=0,Et.push(n.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Et.push(ot),F.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Rt)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let Ht=i.get(b[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function kt(I){return Math.min(s.maxSamples,I.samples)}function Bt(I){let b=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(I){let b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function zt(I,b){let V=I.colorSpace,lt=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Ys&&V!==Ii&&(re.getTransfer(V)===fe?(lt!==Nn||dt!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Nt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=ct,this.setTexture2DArray=tt,this.setTexture3D=mt,this.setTextureCube=Q,this.rebindTextures=st,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Bt}function wx(n,t){function e(i,s=Ii){let r,o=re.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$u)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yu)return n.BYTE;if(i===Zu)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===Bl)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===Bn)return n.HALF_FLOAT;if(i===Ju)return n.ALPHA;if(i===Ku)return n.RGB;if(i===Nn)return n.RGBA;if(i===ju)return n.LUMINANCE;if(i===Qu)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===ks)return n.DEPTH_STENCIL;if(i===Hl)return n.RED;if(i===Vl)return n.RED_INTEGER;if(i===tf)return n.RG;if(i===Gl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===Mo||i===So||i===bo||i===Eo)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Tc||i===Ac||i===Rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Ic||i===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cc||i===Ic)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===kc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wo||i===qc||i===Yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wo)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ef||i===Zc||i===$c||i===Jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ul=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Me=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tx={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`,fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ae({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends Di{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=new fl,m=e.getContextAttributes(),f=null,y=null,v=[],_=[],T=new Kt,E=null,w=new Ye;w.viewport=new Re;let C=new Ye;C.viewport=new Re;let M=[w,C],S=new ul,L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let k=v[J];return k===void 0&&(k=new vr,v[J]=k),k.getTargetRaySpace()},this.getControllerGrip=function(J){let k=v[J];return k===void 0&&(k=new vr,v[J]=k),k.getGripSpace()},this.getHand=function(J){let k=v[J];return k===void 0&&(k=new vr,v[J]=k),k.getHandSpace()};function H(J){let k=_.indexOf(J.inputSource);if(k===-1)return;let at=v[k];at!==void 0&&(at.update(J.inputSource,J.frame,l||o),at.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ct);for(let J=0;J<v.length;J++){let k=_[J];k!==null&&(_[J]=null,v[J].disconnect(k))}L=null,q=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,y=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ct),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new en(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,at=null,D=null;m.depth&&(D=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?ks:Ds,at=m.stencil?zs:ss);let Z={colorFormat:e.RGBA8,depthFormat:D,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Z),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new en(d.textureWidth,d.textureHeight,{format:Nn,type:hi,depthTexture:new zo(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ct(J){for(let k=0;k<J.removed.length;k++){let at=J.removed[k],D=_.indexOf(at);D>=0&&(_[D]=null,v[D].disconnect(at))}for(let k=0;k<J.added.length;k++){let at=J.added[k],D=_.indexOf(at);if(D===-1){for(let W=0;W<v.length;W++)if(W>=_.length){_.push(at),D=W;break}else if(_[W]===null){_[W]=at,D=W;break}if(D===-1)break}let Z=v[D];Z&&Z.connect(at)}}let tt=new z,mt=new z;function Q(J,k,at){tt.setFromMatrixPosition(k.matrixWorld),mt.setFromMatrixPosition(at.matrixWorld);let D=tt.distanceTo(mt),Z=k.projectionMatrix.elements,W=at.projectionMatrix.elements,st=Z[14]/(Z[10]-1),pt=Z[14]/(Z[10]+1),gt=(Z[9]+1)/Z[5],Et=(Z[9]-1)/Z[5],F=(Z[8]-1)/Z[0],Jt=(W[8]+1)/W[0],kt=st*F,Bt=st*Jt,Ct=D/(-F+Jt),zt=Ct*-F;if(k.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Z[10]===-1)J.projectionMatrix.copy(k.projectionMatrix),J.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let Nt=st+Ct,I=pt+Ct,b=kt-zt,V=Bt+(D-zt),lt=gt*pt/I*Nt,dt=Et*pt/I*Nt;J.projectionMatrix.makePerspective(b,V,lt,dt,Nt,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function nt(J,k){k===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(k.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let k=J.near,at=J.far;x.texture!==null&&(x.depthNear>0&&(k=x.depthNear),x.depthFar>0&&(at=x.depthFar)),S.near=C.near=w.near=k,S.far=C.far=w.far=at,(L!==S.near||q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,q=S.far),w.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;let D=J.parent,Z=S.cameras;nt(S,D);for(let W=0;W<Z.length;W++)nt(Z[W],D);Z.length===2?Q(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),wt(J,S,D)};function wt(J,k,at){at===null?J.matrix.copy(k.matrixWorld):(J.matrix.copy(at.matrixWorld),J.matrix.invert(),J.matrix.multiply(k.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(k.projectionMatrix),J.projectionMatrixInverse.copy(k.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Co*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let It=null;function ht(J,k){if(h=k.getViewerPose(l||o),g=k,h!==null){let at=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let D=!1;at.length!==S.cameras.length&&(S.cameras.length=0,D=!0);for(let W=0;W<at.length;W++){let st=at[W],pt=null;if(p!==null)pt=p.getViewport(st);else{let Et=u.getViewSubImage(d,st);pt=Et.viewport,W===0&&(t.setRenderTargetTextures(y,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(y))}let gt=M[W];gt===void 0&&(gt=new Ye,gt.layers.enable(W),gt.viewport=new Re,M[W]=gt),gt.matrix.fromArray(st.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(st.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(pt.x,pt.y,pt.width,pt.height),W===0&&(S.matrix.copy(gt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),D===!0&&S.cameras.push(gt)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let W=u.getDepthInformation(at[0]);W&&W.isValid&&W.texture&&x.init(t,W,s.renderState)}}for(let at=0;at<v.length;at++){let D=_[at],Z=v[at];D!==null&&Z!==void 0&&Z.update(D,k,l||o)}It&&It(J,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}let _t=new cf;_t.setAnimationLoop(ht),this.setAnimationLoop=function(J){It=J},this.dispose=function(){}}},ji=new Zn,Cx=new ce;function Ix(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,af(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,ji.copy(_),ji.x*=-1,ji.y*=-1,ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(ji)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Px(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;i.uniformBlockBinding(y,_)}function l(y,v){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let T=v.program;i.updateUBOMapping(y,T);let E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){let v=u();y.__bindingPointIndex=v;let _=n.createBuffer(),T=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],_=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,w=_.length;E<w;E++){let C=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,S=C.length;M<S;M++){let L=C[M];if(p(L,E,M,T)===!0){let q=L.__offset,H=Array.isArray(L.value)?L.value:[L.value],j=0;for(let ct=0;ct<H.length;ct++){let tt=H[ct],mt=x(tt);typeof tt=="number"||typeof tt=="boolean"?(L.__data[0]=tt,n.bufferSubData(n.UNIFORM_BUFFER,q+j,L.__data)):tt.isMatrix3?(L.__data[0]=tt.elements[0],L.__data[1]=tt.elements[1],L.__data[2]=tt.elements[2],L.__data[3]=0,L.__data[4]=tt.elements[3],L.__data[5]=tt.elements[4],L.__data[6]=tt.elements[5],L.__data[7]=0,L.__data[8]=tt.elements[6],L.__data[9]=tt.elements[7],L.__data[10]=tt.elements[8],L.__data[11]=0):(tt.toArray(L.__data,j),j+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,_,T){let E=y.value,w=v+"_"+_;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{let C=T[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){let v=y.uniforms,_=0,T=16;for(let w=0,C=v.length;w<C;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,L=M.length;S<L;S++){let q=M[S],H=Array.isArray(q.value)?q.value:[q.value];for(let j=0,ct=H.length;j<ct;j++){let tt=H[j],mt=x(tt),Q=_%T,nt=Q%mt.boundary,wt=Q+nt;_+=nt,wt!==0&&T-wt<mt.storage&&(_+=T-wt),q.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=mt.storage}}}let E=_%T;return E>0&&(_+=T-E),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ko=class{constructor(t={}){let{canvas:e=Fp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Pi,this.toneMappingExposure=1;let _=this,T=!1,E=0,w=0,C=null,M=-1,S=null,L=new Re,q=new Re,H=null,j=new Zt(0),ct=0,tt=e.width,mt=e.height,Q=1,nt=null,wt=null,It=new Re(0,0,tt,mt),ht=new Re(0,0,tt,mt),_t=!1,J=new Er,k=!1,at=!1,D=new ce,Z=new ce,W=new z,st=new Re,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Et(){return C===null?Q:1}let F=i;function Jt(R,G){return e.getContext(R,G)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",X,!1),F===null){let G="webgl2";if(F=Jt(G,R),F===null)throw Jt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let kt,Bt,Ct,zt,Nt,I,b,V,lt,dt,ot,bt,Rt,yt,Ht,xt,Pt,Vt,Gt,ut,Lt,ft,Tt,O;function vt(){kt=new Yg(F),kt.init(),ft=new wx(F,kt),Bt=new Hg(F,kt,t,ft),Ct=new Sx(F,kt),Bt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),zt=new Jg(F),Nt=new lx,I=new Ex(F,kt,Ct,Nt,Bt,ft,zt),b=new Gg(_),V=new qg(_),lt=new im(F),Tt=new zg(F,lt),dt=new Zg(F,lt,zt,Tt),ot=new jg(F,dt,lt,zt),Gt=new Kg(F,Bt,I),xt=new Vg(Nt),bt=new cx(_,b,V,kt,Bt,Tt,xt),Rt=new Ix(_,Nt),yt=new ux,Ht=new _x(kt),Vt=new Bg(_,b,V,Ct,ot,p,c),Pt=new yx(_,ot,Bt),O=new Px(F,zt,Bt,Ct),ut=new kg(F,kt,zt),Lt=new $g(F,kt,zt),zt.programs=bt.programs,_.capabilities=Bt,_.extensions=kt,_.properties=Nt,_.renderLists=yt,_.shadowMap=Pt,_.state=Ct,_.info=zt}vt();let A=new dl(_,F);this.xr=A,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(tt,mt,!1))},this.getSize=function(R){return R.set(tt,mt)},this.setSize=function(R,G,it=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,mt=G,e.width=Math.floor(R*Q),e.height=Math.floor(G*Q),it===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(tt*Q,mt*Q).floor()},this.setDrawingBufferSize=function(R,G,it){tt=R,mt=G,Q=it,e.width=Math.floor(R*it),e.height=Math.floor(G*it),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(It)},this.setViewport=function(R,G,it,rt){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,G,it,rt),Ct.viewport(L.copy(It).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,G,it,rt){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,G,it,rt),Ct.scissor(q.copy(ht).multiplyScalar(Q).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){Ct.setScissorTest(_t=R)},this.setOpaqueSort=function(R){nt=R},this.setTransparentSort=function(R){wt=R},this.getClearColor=function(R){return R.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(R=!0,G=!0,it=!0){let rt=0;if(R){let $=!1;if(C!==null){let At=C.texture.format;$=At===Wl||At===Gl||At===Vl}if($){let At=C.texture.type,Ot=At===hi||At===ss||At===Sr||At===zs||At===zl||At===kl,Xt=Vt.getClearColor(),qt=Vt.getClearAlpha(),jt=Xt.r,te=Xt.g,Yt=Xt.b;Ot?(g[0]=jt,g[1]=te,g[2]=Yt,g[3]=qt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=jt,x[1]=te,x[2]=Yt,x[3]=qt,F.clearBufferiv(F.COLOR,0,x))}else rt|=F.COLOR_BUFFER_BIT}G&&(rt|=F.DEPTH_BUFFER_BIT),it&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",X,!1),yt.dispose(),Ht.dispose(),Nt.dispose(),b.dispose(),V.dispose(),ot.dispose(),Tt.dispose(),O.dispose(),bt.dispose(),A.dispose(),A.removeEventListener("sessionstart",Ft),A.removeEventListener("sessionend",Dt),St.stop()};function P(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=zt.autoReset,G=Pt.enabled,it=Pt.autoUpdate,rt=Pt.needsUpdate,$=Pt.type;vt(),zt.autoReset=R,Pt.enabled=G,Pt.autoUpdate=it,Pt.needsUpdate=rt,Pt.type=$}function X(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function U(R){let G=R.target;G.removeEventListener("dispose",U),B(G)}function B(R){Y(R),Nt.remove(R)}function Y(R){let G=Nt.get(R).programs;G!==void 0&&(G.forEach(function(it){bt.releaseProgram(it)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,it,rt,$,At){G===null&&(G=pt);let Ot=$.isMesh&&$.matrixWorld.determinant()<0,Xt=Fe(R,G,it,rt,$);Ct.setMaterial(rt,Ot);let qt=it.index,jt=1;if(rt.wireframe===!0){if(qt=dt.getWireframeAttribute(it),qt===void 0)return;jt=2}let te=it.drawRange,Yt=it.attributes.position,ae=te.start*jt,ve=(te.start+te.count)*jt;At!==null&&(ae=Math.max(ae,At.start*jt),ve=Math.min(ve,(At.start+At.count)*jt)),qt!==null?(ae=Math.max(ae,0),ve=Math.min(ve,qt.count)):Yt!=null&&(ae=Math.max(ae,0),ve=Math.min(ve,Yt.count));let be=ve-ae;if(be<0||be===1/0)return;Tt.setup($,rt,Xt,it,qt);let rn,he=ut;if(qt!==null&&(rn=lt.get(qt),he=Lt,he.setIndex(rn)),$.isMesh)rt.wireframe===!0?(Ct.setLineWidth(rt.wireframeLinewidth*Et()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if($.isLine){let $t=rt.linewidth;$t===void 0&&($t=1),Ct.setLineWidth($t*Et()),$.isLineSegments?he.setMode(F.LINES):$.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else $.isPoints?he.setMode(F.POINTS):$.isSprite&&he.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)he.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))he.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let $t=$._multiDrawStarts,Qn=$._multiDrawCounts,ue=$._multiDrawCount,Pn=qt?lt.get(qt).bytesPerElement:1,ms=Nt.get(rt).currentProgram.getUniforms();for(let fn=0;fn<ue;fn++)ms.setValue(F,"_gl_DrawID",fn),he.render($t[fn]/Pn,Qn[fn])}else if($.isInstancedMesh)he.renderInstances(ae,be,$.count);else if(it.isInstancedBufferGeometry){let $t=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Qn=Math.min(it.instanceCount,$t);he.renderInstances(ae,be,Qn)}else he.render(ae,be)};function K(R,G,it){R.transparent===!0&&R.side===tn&&R.forceSinglePass===!1?(R.side=Ze,R.needsUpdate=!0,Se(R,G,it),R.side=Li,R.needsUpdate=!0,Se(R,G,it),R.side=tn):Se(R,G,it)}this.compile=function(R,G,it=null){it===null&&(it=R),f=Ht.get(it),f.init(G),v.push(f),it.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),R!==it&&R.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();let rt=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let At=$.material;if(At)if(Array.isArray(At))for(let Ot=0;Ot<At.length;Ot++){let Xt=At[Ot];K(Xt,it,$),rt.add(Xt)}else K(At,it,$),rt.add(At)}),v.pop(),f=null,rt},this.compileAsync=function(R,G,it=null){let rt=this.compile(R,G,it);return new Promise($=>{function At(){if(rt.forEach(function(Ot){Nt.get(Ot).currentProgram.isReady()&&rt.delete(Ot)}),rt.size===0){$(R);return}setTimeout(At,10)}kt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let et=null;function Mt(R){et&&et(R)}function Ft(){St.stop()}function Dt(){St.start()}let St=new cf;St.setAnimationLoop(Mt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(R){et=R,A.setAnimationLoop(R),R===null?St.stop():St.start()},A.addEventListener("sessionstart",Ft),A.addEventListener("sessionend",Dt),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(G),G=A.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,G,C),f=Ht.get(R,v.length),f.init(G),v.push(f),Z.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(Z),at=this.localClippingEnabled,k=xt.init(this.clippingPlanes,at),m=yt.get(R,y.length),m.init(),y.push(m),A.enabled===!0&&A.isPresenting===!0){let At=_.xr.getDepthSensingMesh();At!==null&&Wt(At,G,-1/0,_.sortObjects)}Wt(R,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,wt),gt=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,gt&&Vt.addToRenderList(m,R),this.info.render.frame++,k===!0&&xt.beginShadows();let it=f.state.shadowsArray;Pt.render(it,R,G),k===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();let rt=m.opaque,$=m.transmissive;if(f.setupLights(),G.isArrayCamera){let At=G.cameras;if($.length>0)for(let Ot=0,Xt=At.length;Ot<Xt;Ot++){let qt=At[Ot];ie(rt,$,R,qt)}gt&&Vt.render(R);for(let Ot=0,Xt=At.length;Ot<Xt;Ot++){let qt=At[Ot];Qt(m,R,qt,qt.viewport)}}else $.length>0&&ie(rt,$,R,G),gt&&Vt.render(R),Qt(m,R,G);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,G),Tt.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(f=v[v.length-1],k===!0&&xt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Wt(R,G,it,rt){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){rt&&st.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);let Ot=ot.update(R),Xt=R.material;Xt.visible&&m.push(R,Ot,Xt,it,st.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){let Ot=ot.update(R),Xt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),st.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),st.copy(Ot.boundingSphere.center)),st.applyMatrix4(R.matrixWorld).applyMatrix4(Z)),Array.isArray(Xt)){let qt=Ot.groups;for(let jt=0,te=qt.length;jt<te;jt++){let Yt=qt[jt],ae=Xt[Yt.materialIndex];ae&&ae.visible&&m.push(R,Ot,ae,it,st.z,Yt)}}else Xt.visible&&m.push(R,Ot,Xt,it,st.z,null)}}let At=R.children;for(let Ot=0,Xt=At.length;Ot<Xt;Ot++)Wt(At[Ot],G,it,rt)}function Qt(R,G,it,rt){let $=R.opaque,At=R.transmissive,Ot=R.transparent;f.setupLightsView(it),k===!0&&xt.setGlobalState(_.clippingPlanes,it),rt&&Ct.viewport(L.copy(rt)),$.length>0&&oe($,G,it),At.length>0&&oe(At,G,it),Ot.length>0&&oe(Ot,G,it),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ie(R,G,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[rt.id]===void 0&&(f.state.transmissionRenderTarget[rt.id]=new en(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Bn:hi,minFilter:is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let At=f.state.transmissionRenderTarget[rt.id],Ot=rt.viewport||L;At.setSize(Ot.z,Ot.w);let Xt=_.getRenderTarget();_.setRenderTarget(At),_.getClearColor(j),ct=_.getClearAlpha(),ct<1&&_.setClearColor(16777215,.5),_.clear(),gt&&Vt.render(it);let qt=_.toneMapping;_.toneMapping=Pi;let jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),f.setupLightsView(rt),k===!0&&xt.setGlobalState(_.clippingPlanes,rt),oe(R,it,rt),I.updateMultisampleRenderTarget(At),I.updateRenderTargetMipmap(At),kt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,ae=G.length;Yt<ae;Yt++){let ve=G[Yt],be=ve.object,rn=ve.geometry,he=ve.material,$t=ve.group;if(he.side===tn&&be.layers.test(rt.layers)){let Qn=he.side;he.side=Ze,he.needsUpdate=!0,pe(be,it,rt,rn,he,$t),he.side=Qn,he.needsUpdate=!0,te=!0}}te===!0&&(I.updateMultisampleRenderTarget(At),I.updateRenderTargetMipmap(At))}_.setRenderTarget(Xt),_.setClearColor(j,ct),jt!==void 0&&(rt.viewport=jt),_.toneMapping=qt}function oe(R,G,it){let rt=G.isScene===!0?G.overrideMaterial:null;for(let $=0,At=R.length;$<At;$++){let Ot=R[$],Xt=Ot.object,qt=Ot.geometry,jt=rt===null?Ot.material:rt,te=Ot.group;Xt.layers.test(it.layers)&&pe(Xt,G,it,qt,jt,te)}}function pe(R,G,it,rt,$,At){R.onBeforeRender(_,G,it,rt,$,At),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(_,G,it,rt,R,At),$.transparent===!0&&$.side===tn&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,_.renderBufferDirect(it,G,rt,$,R,At),$.side=Li,$.needsUpdate=!0,_.renderBufferDirect(it,G,rt,$,R,At),$.side=tn):_.renderBufferDirect(it,G,rt,$,R,At),R.onAfterRender(_,G,it,rt,$,At)}function Se(R,G,it){G.isScene!==!0&&(G=pt);let rt=Nt.get(R),$=f.state.lights,At=f.state.shadowsArray,Ot=$.state.version,Xt=bt.getParameters(R,$.state,At,G,it),qt=bt.getProgramCacheKey(Xt),jt=rt.programs;rt.environment=R.isMeshStandardMaterial?G.environment:null,rt.fog=G.fog,rt.envMap=(R.isMeshStandardMaterial?V:b).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",U),jt=new Map,rt.programs=jt);let te=jt.get(qt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ot)return je(R,Xt),te}else Xt.uniforms=bt.getUniforms(R),R.onBeforeCompile(Xt,_),te=bt.acquireProgram(Xt,qt),jt.set(qt,te),rt.uniforms=Xt.uniforms;let Yt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=xt.uniform),je(R,Xt),rt.needsLights=Mi(R),rt.lightsStateVersion=Ot,rt.needsLights&&(Yt.ambientLightColor.value=$.state.ambient,Yt.lightProbe.value=$.state.probe,Yt.directionalLights.value=$.state.directional,Yt.directionalLightShadows.value=$.state.directionalShadow,Yt.spotLights.value=$.state.spot,Yt.spotLightShadows.value=$.state.spotShadow,Yt.rectAreaLights.value=$.state.rectArea,Yt.ltc_1.value=$.state.rectAreaLTC1,Yt.ltc_2.value=$.state.rectAreaLTC2,Yt.pointLights.value=$.state.point,Yt.pointLightShadows.value=$.state.pointShadow,Yt.hemisphereLights.value=$.state.hemi,Yt.directionalShadowMap.value=$.state.directionalShadowMap,Yt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Yt.spotShadowMap.value=$.state.spotShadowMap,Yt.spotLightMatrix.value=$.state.spotLightMatrix,Yt.spotLightMap.value=$.state.spotLightMap,Yt.pointShadowMap.value=$.state.pointShadowMap,Yt.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function ze(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=Ns.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function je(R,G){let it=Nt.get(R);it.outputColorSpace=G.outputColorSpace,it.batching=G.batching,it.batchingColor=G.batchingColor,it.instancing=G.instancing,it.instancingColor=G.instancingColor,it.instancingMorph=G.instancingMorph,it.skinning=G.skinning,it.morphTargets=G.morphTargets,it.morphNormals=G.morphNormals,it.morphColors=G.morphColors,it.morphTargetsCount=G.morphTargetsCount,it.numClippingPlanes=G.numClippingPlanes,it.numIntersection=G.numClipIntersection,it.vertexAlphas=G.vertexAlphas,it.vertexTangents=G.vertexTangents,it.toneMapping=G.toneMapping}function Fe(R,G,it,rt,$){G.isScene!==!0&&(G=pt),I.resetTextureUnits();let At=G.fog,Ot=rt.isMeshStandardMaterial?G.environment:null,Xt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ys,qt=(rt.isMeshStandardMaterial?V:b).get(rt.envMap||Ot),jt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Yt=!!it.morphAttributes.position,ae=!!it.morphAttributes.normal,ve=!!it.morphAttributes.color,be=Pi;rt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=_.toneMapping);let rn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,he=rn!==void 0?rn.length:0,$t=Nt.get(rt),Qn=f.state.lights;if(k===!0&&(at===!0||R!==S)){let Sn=R===S&&rt.id===M;xt.setState(rt,R,Sn)}let ue=!1;rt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Qn.state.version||$t.outputColorSpace!==Xt||$.isBatchedMesh&&$t.batching===!1||!$.isBatchedMesh&&$t.batching===!0||$.isBatchedMesh&&$t.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$t.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$t.instancing===!1||!$.isInstancedMesh&&$t.instancing===!0||$.isSkinnedMesh&&$t.skinning===!1||!$.isSkinnedMesh&&$t.skinning===!0||$.isInstancedMesh&&$t.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$t.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$t.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$t.instancingMorph===!1&&$.morphTexture!==null||$t.envMap!==qt||rt.fog===!0&&$t.fog!==At||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==xt.numPlanes||$t.numIntersection!==xt.numIntersection)||$t.vertexAlphas!==jt||$t.vertexTangents!==te||$t.morphTargets!==Yt||$t.morphNormals!==ae||$t.morphColors!==ve||$t.toneMapping!==be||$t.morphTargetsCount!==he)&&(ue=!0):(ue=!0,$t.__version=rt.version);let Pn=$t.currentProgram;ue===!0&&(Pn=Se(rt,G,$));let ms=!1,fn=!1,ar=!1,Ee=Pn.getUniforms(),Gn=$t.uniforms;if(Ct.useProgram(Pn.program)&&(ms=!0,fn=!0,ar=!0),rt.id!==M&&(M=rt.id,fn=!0),ms||S!==R){Ct.buffers.depth.getReversed()?(D.copy(R.projectionMatrix),Bp(D),zp(D),Ee.setValue(F,"projectionMatrix",D)):Ee.setValue(F,"projectionMatrix",R.projectionMatrix),Ee.setValue(F,"viewMatrix",R.matrixWorldInverse);let Si=Ee.map.cameraPosition;Si!==void 0&&Si.setValue(F,W.setFromMatrixPosition(R.matrixWorld)),Bt.logarithmicDepthBuffer&&Ee.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ee.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,fn=!0,ar=!0)}if($.isSkinnedMesh){Ee.setOptional(F,$,"bindMatrix"),Ee.setOptional(F,$,"bindMatrixInverse");let Sn=$.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ee.setValue(F,"boneTexture",Sn.boneTexture,I))}$.isBatchedMesh&&(Ee.setOptional(F,$,"batchingTexture"),Ee.setValue(F,"batchingTexture",$._matricesTexture,I),Ee.setOptional(F,$,"batchingIdTexture"),Ee.setValue(F,"batchingIdTexture",$._indirectTexture,I),Ee.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&Ee.setValue(F,"batchingColorTexture",$._colorsTexture,I));let cr=it.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Gt.update($,it,Pn),(fn||$t.receiveShadow!==$.receiveShadow)&&($t.receiveShadow=$.receiveShadow,Ee.setValue(F,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Gn.envMap.value=qt,Gn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&G.environment!==null&&(Gn.envMapIntensity.value=G.environmentIntensity),fn&&(Ee.setValue(F,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&Vn(Gn,ar),At&&rt.fog===!0&&Rt.refreshFogUniforms(Gn,At),Rt.refreshMaterialUniforms(Gn,rt,Q,mt,f.state.transmissionRenderTarget[R.id]),Ns.upload(F,ze($t),Gn,I)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ns.upload(F,ze($t),Gn,I),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ee.setValue(F,"center",$.center),Ee.setValue(F,"modelViewMatrix",$.modelViewMatrix),Ee.setValue(F,"normalMatrix",$.normalMatrix),Ee.setValue(F,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let Sn=rt.uniformsGroups;for(let Si=0,bi=Sn.length;Si<bi;Si++){let Dh=Sn[Si];O.update(Dh,Pn),O.bind(Dh,Pn)}}return Pn}function Vn(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Mi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,G,it){Nt.get(R.texture).__webglTexture=G,Nt.get(R.depthTexture).__webglTexture=it;let rt=Nt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){let it=Nt.get(R);it.__webglFramebuffer=G,it.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,it=0){C=R,E=G,w=it;let rt=!0,$=null,At=!1,Ot=!1;if(R){let qt=Nt.get(R);if(qt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(qt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(qt.__hasExternalTextures)I.rebindTextures(R,Nt.get(R.texture).__webglTexture,Nt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Yt=R.depthTexture;if(qt.__boundDepthTexture!==Yt){if(Yt!==null&&Nt.has(Yt)&&(R.width!==Yt.image.width||R.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ot=!0);let te=Nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[G])?$=te[G][it]:$=te[G],At=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?$=Nt.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?$=te[it]:$=te,L.copy(R.viewport),q.copy(R.scissor),H=R.scissorTest}else L.copy(It).multiplyScalar(Q).floor(),q.copy(ht).multiplyScalar(Q).floor(),H=_t;if(Ct.bindFramebuffer(F.FRAMEBUFFER,$)&&rt&&Ct.drawBuffers(R,$),Ct.viewport(L),Ct.scissor(q),Ct.setScissorTest(H),At){let qt=Nt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,qt.__webglTexture,it)}else if(Ot){let qt=Nt.get(R.texture),jt=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,it||0,jt)}M=-1},this.readRenderTargetPixels=function(R,G,it,rt,$,At,Ot){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Xt=Xt[Ot]),Xt){Ct.bindFramebuffer(F.FRAMEBUFFER,Xt);try{let qt=R.texture,jt=qt.format,te=qt.type;if(!Bt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-rt&&it>=0&&it<=R.height-$&&F.readPixels(G,it,rt,$,ft.convert(jt),ft.convert(te),At)}finally{let qt=C!==null?Nt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,G,it,rt,$,At,Ot){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Xt=Xt[Ot]),Xt){let qt=R.texture,jt=qt.format,te=qt.type;if(!Bt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-rt&&it>=0&&it<=R.height-$){Ct.bindFramebuffer(F.FRAMEBUFFER,Xt);let Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),F.readPixels(G,it,rt,$,ft.convert(jt),ft.convert(te),0);let ae=C!==null?Nt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,ae);let ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Op(F,ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(Yt),F.deleteSync(ve),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,it=0){R.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);let rt=Math.pow(2,-it),$=Math.floor(R.image.width*rt),At=Math.floor(R.image.height*rt),Ot=G!==null?G.x:0,Xt=G!==null?G.y:0;I.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,it,0,0,Ot,Xt,$,At),Ct.unbindTexture()},this.copyTextureToTexture=function(R,G,it=null,rt=null,$=0){R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],G=arguments[2],$=arguments[3]||0,it=null);let At,Ot,Xt,qt,jt,te,Yt,ae,ve,be=R.isCompressedTexture?R.mipmaps[$]:R.image;it!==null?(At=it.max.x-it.min.x,Ot=it.max.y-it.min.y,Xt=it.isBox3?it.max.z-it.min.z:1,qt=it.min.x,jt=it.min.y,te=it.isBox3?it.min.z:0):(At=be.width,Ot=be.height,Xt=be.depth||1,qt=0,jt=0,te=0),rt!==null?(Yt=rt.x,ae=rt.y,ve=rt.z):(Yt=0,ae=0,ve=0);let rn=ft.convert(G.format),he=ft.convert(G.type),$t;G.isData3DTexture?(I.setTexture3D(G,0),$t=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(I.setTexture2DArray(G,0),$t=F.TEXTURE_2D_ARRAY):(I.setTexture2D(G,0),$t=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let Qn=F.getParameter(F.UNPACK_ROW_LENGTH),ue=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Pn=F.getParameter(F.UNPACK_SKIP_PIXELS),ms=F.getParameter(F.UNPACK_SKIP_ROWS),fn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let ar=R.isDataArrayTexture||R.isData3DTexture,Ee=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Gn=Nt.get(R),cr=Nt.get(G),Sn=Nt.get(Gn.__renderTarget),Si=Nt.get(cr.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let bi=0;bi<Xt;bi++)ar&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(R).__webglTexture,$,te+bi),R.isDepthTexture?(Ee&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(G).__webglTexture,$,ve+bi),F.blitFramebuffer(qt,jt,At,Ot,Yt,ae,At,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ee?F.copyTexSubImage3D($t,$,Yt,ae,ve+bi,qt,jt,At,Ot):F.copyTexSubImage2D($t,$,Yt,ae,ve+bi,qt,jt,At,Ot);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ee?R.isDataTexture||R.isData3DTexture?F.texSubImage3D($t,$,Yt,ae,ve,At,Ot,Xt,rn,he,be.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D($t,$,Yt,ae,ve,At,Ot,Xt,rn,be.data):F.texSubImage3D($t,$,Yt,ae,ve,At,Ot,Xt,rn,he,be):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,$,Yt,ae,At,Ot,rn,he,be.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,$,Yt,ae,be.width,be.height,rn,be.data):F.texSubImage2D(F.TEXTURE_2D,$,Yt,ae,At,Ot,rn,he,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,Qn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ms),F.pixelStorei(F.UNPACK_SKIP_IMAGES,fn),$===0&&G.generateMipmaps&&F.generateMipmap($t),Ct.unbindTexture()},this.copyTextureToTexture3D=function(R,G,it=null,rt=null,$=0){return R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],G=arguments[3],$=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,it,rt,$)},this.initRenderTarget=function(R){Nt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Ct.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}},Ho=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vo=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var pl=class extends cn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=mn,h=mn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends le{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Is=new ce,Du=new ce,mo=[],Uu=new ui,Lx=new ce,pr=new ye,mr=new fi,Ui=class extends ye{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Lx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Is),Uu.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Is),mr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(i),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Du.multiplyMatrices(i,Is),pr.matrixWorld=Du,pr.raycast(t,mo);for(let o=0,a=mo.length;o<a;o++){let c=mo[o];c.instanceId=r,c.object=this,e.push(c)}mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pl(new Float32Array(s*this.count),s,this.count,Hl,qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ws=class extends di{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Go=new z,Wo=new z,Nu=new ce,gr=new br,go=new fi,fc=new z,Fu=new z,ml=class extends Pe{constructor(t=new _e,e=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Go.fromBufferAttribute(e,s-1),Wo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Go.distanceTo(Wo);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;Nu.copy(s).invert(),gr.copy(t.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=h.getX(x),y=h.getX(x+1),v=_o(this,t,gr,c,f,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=_o(this,t,gr,c,x,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=_o(this,t,gr,c,x,x+1);f&&e.push(f)}if(this.isLineLoop){let x=_o(this,t,gr,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _o(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Go.fromBufferAttribute(o,s),Wo.fromBufferAttribute(o,r),e.distanceSqToSegment(Go,Wo,fc,Fu)>i)return;fc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fc);if(!(c<t.near||c>t.far))return{distance:c,point:Fu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Ou=new z,Bu=new z,Tr=class extends ml{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ou.fromBufferAttribute(e,s),Bu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ou.distanceTo(Bu);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ar=class extends di{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zu=new ce,gl=new br,xo=new fi,vo=new z,Xs=class extends Pe{constructor(t=new _e,e=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;zu.copy(s).invert(),gl.copy(t.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=l.getX(g);vo.fromBufferAttribute(u,m),ku(vo,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)vo.fromBufferAttribute(u,g),ku(vo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ku(n,t,e,i,s,r,o){let a=gl.distanceSqToPoint(n);if(a<e){let c=new z;gl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Xo=class extends cn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var nn=class n extends _e{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=i/2,f=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function y(){let _=new z,T=new z,E=0,w=(e-t)/i;for(let C=0;C<=r;C++){let M=[],S=C/r,L=S*(e-t)+t;for(let q=0;q<=s;q++){let H=q/s,j=H*c+a,ct=Math.sin(j),tt=Math.cos(j);T.x=L*ct,T.y=-S*i+m,T.z=L*tt,u.push(T.x,T.y,T.z),_.set(ct,w,tt).normalize(),d.push(_.x,_.y,_.z),p.push(H,1-S),M.push(g++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let S=x[M][C],L=x[M+1][C],q=x[M+1][C+1],H=x[M][C+1];(t>0||M!==0)&&(h.push(S,L,H),E+=3),(e>0||M!==r-1)&&(h.push(L,q,H),E+=3)}l.addGroup(f,E,0),f+=E}function v(_){let T=g,E=new Kt,w=new z,C=0,M=_===!0?t:e,S=_===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let L=g;for(let q=0;q<=s;q++){let j=q/s*c+a,ct=Math.cos(j),tt=Math.sin(j);w.x=M*tt,w.y=m*S,w.z=M*ct,u.push(w.x,w.y,w.z),d.push(0,S,0),E.x=ct*.5+.5,E.y=tt*.5*S+.5,p.push(E.x,E.y),g++}for(let q=0;q<s;q++){let H=T+q,j=L+q;_===!0?h.push(j,j+1,H):h.push(j+1,j,H),C+=3}l.addGroup(f,C,_===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rs=class n extends nn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_l=class n extends _e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new z,_=new z,T=new z;for(let E=0;E<e.length;E+=3)p(e[E+0],v),p(e[E+1],_),p(e[E+2],T),c(v,_,T,y)}function c(y,v,_,T){let E=T+1,w=[];for(let C=0;C<=E;C++){w[C]=[];let M=y.clone().lerp(_,C/E),S=v.clone().lerp(_,C/E),L=E-C;for(let q=0;q<=L;q++)q===0&&C===E?w[C][q]=M:w[C][q]=M.clone().lerp(S,q/L)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){let S=Math.floor(M/2);M%2===0?(d(w[C][S+1]),d(w[C+1][S]),d(w[C][S])):(d(w[C][S+1]),d(w[C+1][S+1]),d(w[C+1][S]))}}function l(y){let v=new z;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new z;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,T=f(y)/Math.PI+.5;o.push(_,1-T)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],T=o[y+4],E=Math.max(v,_,T),w=Math.min(v,_,T);E>.9&&w<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let y=new z,v=new z,_=new z,T=new z,E=new Kt,w=new Kt,C=new Kt;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),T.copy(y).add(v).add(_).divideScalar(3);let L=m(T);x(E,S+0,y,L),x(w,S+2,v,L),x(C,S+4,_,L)}}function x(y,v,_,T){T<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var os=class n extends _l{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var qo=class n extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new z,d=new z,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){let y=[],v=f/i,_=0;f===0&&o===0?_=.5/e:f===i&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){let E=T/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+_,1-v),y.push(l++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){let v=h[f][y+1],_=h[f][y],T=h[f+1][y],E=h[f+1][y+1];(f!==0||o>0)&&p.push(v,_,E),(f!==i-1||c<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Yo=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},me=class extends di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Dx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var qs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xl=class extends qs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:r=t,a=2*e-i;break;case zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Bh:o=t,c=2*i-e;break;case zh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+y*o[l+T]+v*o[c+T]+_*o[u+T];return r}},vl=class extends qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},yl=class extends qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},On=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yo(e,this.TimeBufferType),this.values=yo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yo(t.times,Array),values:yo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ao:e=this.InterpolantFactoryMethodDiscrete;break;case Kc:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Dx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Kc;var as=class extends On{constructor(t,e,i){super(t,e,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ao;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends On{};Ml.prototype.ValueTypeName="color";var Sl=class extends On{};Sl.prototype.ValueTypeName="number";var bl=class extends qs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)En.slerpFlat(r,0,o,l-a,o,l,c);return r}},Zo=class extends On{InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends On{constructor(t,e,i){super(t,e,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ao;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends On{};El.prototype.ValueTypeName="vector";var wl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Ux=new wl,Tl=class{constructor(t){this.manager=t!==void 0?t:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$o=class extends Rr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dc=new ce,Hu=new z,Vu=new z,Jo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Al=class extends Jo{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Co*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ko=class extends Rr{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Al}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Rl=class extends Jo{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Rl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Qo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Gu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Gu(){return performance.now()}var ql="\\[\\]\\.:\\/",Nx=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Fx="[^"+ql.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Bx=/(WCOD+)?/.source.replace("WCOD",Fx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Hx=new RegExp("^"+Ox+Bx+zx+kx+"$"),Vx=["material","materials","bones","map"],Cl=class{constructor(t,e,i){let s=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Cl;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ia=[25,18,15,12,10,8,6,4],Fi={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Oi={sunset:{id:"sunset",name:"Coucher de soleil",grip:1,wet:0,rain:0,wind:0,skyTop:2828907,skyHorizon:16747084,fogColor:15900784,fogDensity:.0011,sunColor:16756848,sunIntensity:2.6,sunDir:[-.55,.28,-.6],hemiSky:9076688,hemiGround:5913136,hemiIntensity:.9,seaColor:2060175,night:!1,bloom:.55},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function Pr(n){let t=String(n),e=2166136261;for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function wn(n){let t=(typeof n=="number"?n>>>0:Pr(n))||1,e=t,i=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>wn(Pr(e+":"+s))}}var sa=Math.PI*2,Gx=2,df=2800,pf=4200,Wx=34,mf=8,gf=60,Xx=.12,qx=.1,_f=28,Yx=150,Zl=52,jl=.0025,xf=1/150,Zx=10,vf=5,yf=250,Mf=38,Sf=75,ra=150,Jl=120,Tf=10,$x=80,Jx=40,Kx=20,jx=30,Qx=95,$l=18,bf=22,tv=60,Kl=(n,t,e)=>n<t?t:n>e?e:n;function ev(n){let t=n.int(10,14),e=n.range(440,520),i=[];for(let s=0;s<t;s++){let r=n.range(-.3,.3)*(sa/t),o=s/t*sa+r,a=Kl(e*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function nv(n,t,e,i,s,r,o,a,c){let l=(x,m,f,y)=>{let v=(c-f)/(y-f);return[x[0]+(m[0]-x[0])*v,x[1]+(m[1]-x[1])*v]},h=l(n,t,s,r),u=l(t,e,r,o),d=l(e,i,o,a),p=l(h,u,s,o),g=l(u,d,r,a);return l(p,g,r,o)}function iv(n,t){let e=n.length,i=[];for(let s=0;s<e;s++){let r=n[(s-1+e)%e],o=n[s],a=n[(s+1)%e],c=n[(s+2)%e],l=0,h=l+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),u=h+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),d=u+Math.sqrt(Math.hypot(c[0]-a[0],c[1]-a[1]));for(let p=0;p<t;p++){let g=h+(u-h)*(p/t);i.push(nv(r,o,a,c,l,h,u,d,g))}}return i}function sv(n){let t=n.length,e=new Float64Array(t+1);for(let l=0;l<t;l++){let h=n[l],u=n[(l+1)%t];e[l+1]=e[l]+Math.hypot(u[0]-h[0],u[1]-h[1])}let i=e[t],s=Math.max(1,Math.round(i/Gx)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),c=0;for(let l=0;l<s;l++){let h=l*r;for(;c<t-1&&e[c+1]<=h;)c++;let u=n[c],d=n[(c+1)%t],p=e[c+1]-e[c],g=p>0?(h-e[c])/p:0;o[l]=u[0]+(d[0]-u[0])*g,a[l]=u[1]+(d[1]-u[1])*g}return{xs:o,zs:a,count:s,step:r}}function Ef(n,t){let e=n.length,i=new Float64Array(e),s=2*t+1,r=0;for(let o=-t;o<=t;o++)r+=n[(o+e)%e];for(let o=0;o<e;o++)i[o]=r/s,r+=n[(o+1+t)%e]-n[((o-t)%e+e)%e];return i}function rv(n,t,e){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let c=(a-1+i)%i,l=(a+1)%i,h=n[l]-n[c],u=t[l]-t[c],d=Math.hypot(h,u)||1;s[a]=h/d,r[a]=u/d}let o=new Float64Array(i);for(let a=0;a<i;a++){let c=(a-1+i)%i,l=(a+1)%i,h=(s[l]-s[c])/(2*e),u=(r[l]-r[c])/(2*e);o[a]=s[a]*u-r[a]*h}return o}function ov(n,t){let e=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*e-1;r>=0;r--){let o=r%e,a=(o+1)%e,c=Math.sqrt(n[a]*n[a]+2*Jx*t);n[o]>c+1e-9&&(n[o]=c,s=!0)}for(let r=0;r<2*e;r++){let o=r%e,a=(o+1)%e,c=Math.sqrt(n[o]*n[o]+2*Kx*t);n[a]>c+1e-9&&(n[a]=c,s=!0)}if(!s)break}}function wf(n){let t=n.length,e=-1;for(let r=0;r<t;r++)if(n[r]!==n[(r-1+t)%t]){e=r;break}if(e<0)return n[0]!==0?[{start:0,len:t,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<t;r++){let o=(e+r)%t,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function Af(n,t){let e=n.length,i=0;for(let s=0;s<e;s++){let r=n[s].vmax,o=n[(s+1)%e].vmax;i+=t/Math.max(1,.5*(r+o))}return i}function Ql(n,t){let e=n.length,i=0,s=0,r=new Int8Array(e),o=new Int8Array(e);for(let l=0;l<e;l++){let h=n[l].curv,u=Math.abs(h);u>i&&(i=u);let d=Math.abs(n[l].slope);d>s&&(s=d),r[l]=h>xf?1:h<-xf?-1:0,o[l]=u<jl?1:0}let a=0;for(let l of wf(r))l.len*t>=Zx&&a++;let c={start:0,len:0};for(let l of wf(o))l.key===1&&l.len>c.len&&(c=l);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:c.len*t,longestStraightStart:c.start}}function av(n,t){let e=n.length,i=Zl,s=(l,h)=>(l+4096)*8192+(h+4096),r=new Map,o=new Array(e);for(let l=0;l<e;l++){let h=Math.floor(n[l].x/i),u=Math.floor(n[l].z/i);o[l]=[h,u];let d=s(h,u),p=r.get(d);p||(p=[],r.set(d,p)),p.push(l)}let a=0,c=Zl*Zl;for(let l=0;l<e;l++){let[h,u]=o[l];for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){let g=r.get(s(h+d,u+p));if(g)for(let x of g){if(x<=l)continue;let m=Math.abs(l-x);if(Math.min(m,e-m)*t<=Yx)continue;let y=n[l].x-n[x].x,v=n[l].z-n[x].z;y*y+v*v<c&&a++}}}return a}function cv(n){let t=ev(n),e=iv(t,160),{xs:i,zs:s,count:r,step:o}=sv(e),a=[[8,12],[4,7],[2,4],[1,2]],c=[1,2,4,7].map((w,C)=>({k:w,a:n.range(a[C][0],a[C][1]),p:n.range(0,sa)})),l=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let w=0;w<r;w++){let C=(w-1+r)%r,M=(w+1)%r,S=i[M]-i[C],L=s[M]-s[C];u[w]=Math.hypot(S,L)||1e-9,l[w]=S/u[w],h[w]=L/u[w]}let d=new Float64Array(r),p=new Float64Array(r),g=1;for(let w=0;w<40;w++){for(let M=0;M<r;M++){let S=0;for(let L of c)S+=L.a*g*Math.sin(sa*L.k*M/r+L.p);d[M]=Wx+S}let C=0;for(let M=0;M<r;M++){let S=(M-1+r)%r,L=(M+1)%r;p[M]=(d[L]-d[S])/u[M],Math.abs(p[M])>C&&(C=Math.abs(p[M]))}if(C<=qx)break;g*=.9}let x=new Float64Array(r),m=new Float64Array(r),f=new Float64Array(r);for(let w=0;w<r;w++){let C=(w-1+r)%r,M=(w+1)%r,S=i[M]-i[C],L=d[M]-d[C],q=s[M]-s[C],H=Math.hypot(S,L,q)||1e-9;x[w]=S/H,m[w]=L/H,f[w]=q/H}let y=rv(i,s,o),v=Ef(y,2),_=new Float64Array(r);for(let w=0;w<r;w++){let C=Kl((Math.abs(v[w])-.016666666666666666)/.023333333333333334,0,1);_[w]=$l+(bf-$l)*C}let T=Ef(_,10);for(let w=0;w<r;w++)T[w]=Kl(T[w],$l,bf);let E=new Float64Array(r);for(let w=0;w<r;w++)E[w]=Math.min(Qx,Math.sqrt(jx/Math.max(Math.abs(v[w]),1e-9)));return ov(E,o),{xs:i,ys:d,zs:s,count:r,step:o,fx:l,fz:h,tx:x,ty:m,tz:f,slope:p,curv:v,width:T,vmax:E}}function lv(n){let{xs:t,ys:e,zs:i,count:s,step:r,fx:o,fz:a,tx:c,ty:l,tz:h,slope:u,curv:d,width:p,vmax:g}=n,x=[];for(let v=0;v<s;v++)x.push({curv:d[v],slope:u[v],vmax:g[v],x:t[v],z:i[v]});let m=Ql(x,r),f=m.longestStraight>0?(m.longestStraightStart+Math.round($x/r))%s:0,y=new Array(s);for(let v=0;v<s;v++){let _=(f+v)%s;y[v]={s:v*r,x:t[_],y:e[_],z:i[_],tx:c[_],ty:l[_],tz:h[_],rx:-a[_],rz:o[_],width:p[_],curv:d[_],vmax:g[_],slope:u[_]}}return y}function hv(n,t,e){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=jl?1:0);let r=(m,f)=>s[f+1]-s[m]===0,o=Math.ceil(ra/t),a=Math.floor((i*t-ra)/t),c=Math.ceil(Tf/t),l=[],h=[],u=(m,f)=>l.every(([y,v])=>f<y||m>v),d=(m,f,y,v)=>{for(let _=0;_<400;_++){let T=Math.round(e.range(m,f)/t),E=Math.ceil(y/t),w=T+E;if(a-w<o)return null;let C=e.int(o,a-w),M=C+T;if(v&&!r(C,M+E))continue;let S=C-c,L=M+E+c;if(!(S<0||L>i-1||!u(S,L)))return l.push([S,L]),{a:C,b:M}}return null},p=e.int(2,3);for(let m=0;m<p;m++){let f=d(12,16,Jl,!0);f&&h.push({type:"ramp",s0:f.a*t,s1:f.b*t,height:e.range(1.2,2.2)})}let g=e.int(2,3);for(let m=0;m<g;m++){let f=d(10,10,0,!1);f&&h.push({type:"boost",s0:f.a*t,s1:f.b*t})}let x=e.int(1,2);for(let m=0;m<x;m++){let f=d(60,140,0,!1);f&&h.push({type:"tunnel",s0:f.a*t,s1:f.b*t})}return h.sort((m,f)=>m.s0-f.s0),h}function uv(n,t,e){let i=cv(n),s=lv(i),{count:r,step:o}=i,a=r*o,c=hv(s,o,n),l=Ql(s,o),h=1/0,u=-1/0,d=1/0,p=-1/0;for(let g of s)g.x<h&&(h=g.x),g.x>u&&(u=g.x),g.z<d&&(d=g.z),g.z>p&&(p=g.z);return{seed:t,attempts:e,length:a,step:o,count:r,pts:s,features:c,bounds:{minX:h,maxX:u,minZ:d,maxZ:p},stats:{minRadius:l.minRadius,maxSlope:l.maxSlope,lapTimeEstimate:Af(s,o),corners:l.corners}}}function fv(n){let t=[],{pts:e,count:i,step:s,length:r}=n;if(!Array.isArray(e)||e.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=df&&r<=pf||t.push(`longueur ${r.toFixed(0)} m hors [${df}, ${pf}]`),Math.abs(i*s-r)>1e-6&&t.push("count * step != length");let o=1/0,a=-1/0;for(let f of e)f.y<o&&(o=f.y),f.y>a&&(a=f.y);(o<mf||a>gf)&&t.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${mf}, ${gf}]`);let c=Ql(e,s);c.minRadius>=_f||t.push(`rayon min ${c.minRadius.toFixed(1)} m < ${_f}`),c.maxSlope>Xx&&t.push(`pente max ${(c.maxSlope*100).toFixed(1)} % > 12 %`),c.corners<vf&&t.push(`${c.corners} virages < ${vf}`),c.longestStraight<yf&&t.push(`ligne droite max ${c.longestStraight.toFixed(0)} m < ${yf}`);let l=av(e,s);l>0&&t.push(`${l} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let h=Af(e,s);h>=Mf&&h<=Sf||t.push(`temps au tour ${h.toFixed(1)} s hors [${Mf}, ${Sf}]`);let u=n.features||[],d=u.filter(f=>f.type==="ramp").length,p=u.filter(f=>f.type==="boost").length,g=u.filter(f=>f.type==="tunnel").length;d<2&&t.push(`${d} tremplin(s) < 2`),p<2&&t.push(`${p} boost(s) < 2`),g<1&&t.push("aucun tunnel");let x=f=>Math.round((f%r+r)%r/s)%i;for(let f of u)if((f.s0<ra||f.s1>r-ra)&&t.push(`feature ${f.type} trop proche du d\xE9part`),f.type==="ramp"){let y=f.s1-f.s0;(y<11.5||y>16.5)&&t.push(`tremplin de ${y.toFixed(1)} m hors 12..16`),f.height>=1.2&&f.height<=2.2||t.push("hauteur de tremplin hors 1.2..2.2");let v=x(f.s0),_=x(f.s1+Jl),T=!0;for(let E=v;E!==(_+1)%i;E=(E+1)%i)if(Math.abs(e[E].curv)>=jl){T=!1;break}T||t.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=u.slice().sort((f,y)=>f.s0-y.s0);for(let f=0;f+1<m.length;f++){let y=m[f],v=m[f+1],_=y.s1+(y.type==="ramp"?Jl:0);v.s0<_+Tf-1e-6&&t.push(`features ${y.type} et ${v.type} se chevauchent`)}return{ok:t.length===0,reasons:t}}function Rf(n,t={}){let e=t.maxAttempts??tv,i=wn(n),s=null,r=1/0;for(let o=0;o<e;o++){let a=i.fork("try"+o),c=uv(a,n,o+1),l=fv(c);if(l.ok)return c;l.reasons.length<r&&(r=l.reasons.length,s=c)}return s.attempts=e,s}function th(n,t){let e=n.length,i=t%e;return i<0&&(i+=e),i>=e&&(i-=e),i}var dv=(n,t)=>{let e=Math.hypot(n,t)||1;return[n/e,t/e]};function mi(n,t,e={}){let i=n.count,s=n.step,r=th(n,t),o=r/s,a=Math.floor(o),c=a%i,l=(c+1)%i,h=o-a,u=n.pts[c],d=n.pts[l],p=(_,T)=>_+(T-_)*h,g=p(u.tx,d.tx),x=p(u.ty,d.ty),m=p(u.tz,d.tz),f=Math.hypot(g,x,m)||1,[y,v]=dv(p(u.rx,d.rx),p(u.rz,d.rz));return e.s=r,e.x=p(u.x,d.x),e.y=p(u.y,d.y),e.z=p(u.z,d.z),e.tx=g/f,e.ty=x/f,e.tz=m/f,e.rx=y,e.rz=v,e.width=p(u.width,d.width),e.curv=p(u.curv,d.curv),e.vmax=p(u.vmax,d.vmax),e.slope=p(u.slope,d.slope),e.i=c,e}var pi={};function Cf(n,t,e,i={}){return mi(n,t,pi),i.x=pi.x+e*pi.rx,i.y=pi.y,i.z=pi.z+e*pi.rz,i.heading=Math.atan2(pi.tx,pi.tz),i.slope=pi.slope,i}function If(n,t){let e=th(n,t);for(let i of n.features)if(i.type==="ramp"&&e>=i.s0&&e<i.s1)return i.height*(e-i.s0)/(i.s1-i.s0);return 0}function oa(n,t,e){let i=th(n,t);for(let s of n.features)if((e===void 0||s.type===e)&&i>=s.s0&&i<=s.s1)return s;return null}var gv=1/30,Pf=.5,Lf=.4,_v=.6,Lr=[.2,.36,.52,.68,.84],Df=Lr.length+1,xv=.2,vv=.1,yv=.34,Mv=4,Sv=4,bv=.2,Ev=4.9,wv=5.5,Tv=5,Av=6,Rv=1.8,Cv=.03,Iv=1.6,Pv=.5,Lv=2,Dv=.785,Uv=4.7,Nv=2.5,Js=.196,Fv=.098,Ov=.5,Bv=.27,zv=16,kv=11,Hv=.72,Vv=5,Gv=.5,Uf=.35,Wv=.42,Xv=60,qv=.3,Yv=5,Zv=1.6,$v=3,Jv=14,Kv=.004,jv=1.2,Qv=2,ty=.5,ey=22,Nf=.25,ny=6,iy=1.8,Ff=1,sy=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],Ce=(n,t,e)=>n<t?t:n>e?e:n,Jn=(n,t=0)=>Number.isFinite(n)?n:t,eh=(n,t)=>{let e=n%t;return e<0?e+t:e},ry=(n,t,e)=>n<t?Math.min(t,n+e):Math.max(t,n-e);function Of({s:n=0,d:t=0}={}){return{s:n,d:t,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:Fi.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function Bf(n,t,e,i,s,r,o){let a=n.events,c=t||{},l=s||{},h=!!c.boost&&!n._prevBoost;if(n._prevBoost=!!c.boost,r=Number.isFinite(r)&&r>0?Math.min(r,gv):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let u=e.length,d=i.maxSpeed,p=Ce(Jn(c.throttle),0,1),g=Ce(Jn(c.brake),0,1),x=Ce(Jn(c.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,g=0,x=0);let f=eh(n.s,u),y=mi(e,f),v=!n.airborne;if(h&&!m&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),v){let yt=oa(e,f,"boost");if(yt){let Ht=Math.floor(n.s/u)+":"+yt.s0;n._padKey!==Ht&&(n._padKey=Ht,n.boostT=Math.max(n.boostT,jv),a.push("pad"))}}g>.5&&n.boostT>0&&(n.boostT=0);let _=n.boostT>0;_&&(p=1);let T=v&&!m&&Math.abs(x)>.3&&n.speed>Qv&&(!!c.drift||g>.3),E=n.speed,w=E/d;n._shiftT>0?n._shiftT-=r:n.gear<Df&&w>Lr[n.gear-1]&&!(g>0&&E>3)?(n.gear+=1,n._shiftT=xv):n.gear>1&&E<Lr[n.gear-2]*d-2&&(n.gear-=1,n._shiftT=vv);let C=n.gear>1?Lr[n.gear-2]:0,M=n.gear<Df?Lr[n.gear-1]:1;n.rpm=Ce(.35+.65*((w-C)/(M-C)),.1,1.05);let S=v&&Math.abs(n.d)>y.width*.5,L=_v*d,q=S?L:d*(_?i.boostPower:1),H=Mv/(d*d),j=0;if(v){if(S&&E>L&&(j-=2*i.offroadDrag*(E-L)),p>0&&n._shiftT<=0&&E<q){let yt=yv*d,Ht=.8+.2*Math.sin(Math.PI*Ce(n.rpm,0,1)),xt=i.accel*p*Ht*Math.min(1,yt/Math.max(E,1));_&&(xt*=Lv),j+=Math.min(xt,i.accel*1.15*(_?1.3:1))}g>0&&(j-=i.brake*g*(T?.35:1)),j-=E*(.2-.03*(n.gear-1))*(1-p),j-=bv,j-=Ev*y.slope,j-=H*E*E}else j-=H*Sv*E*E;n.speed=Math.max(0,E+j*r),v&&n.speed>q&&!S&&(n.speed=Math.max(q,n.speed-10*r));let ct=Ce(n.speed/d,0,1),tt=1+(i.wetGrip-1)*oy(l),mt=Ce(i.grip*Jn(l.grip,1)*tt,.05,1.5),Q=n.speed<.6?0:x,wt=Math.abs(Q)>Math.abs(n.steer)||Q*n.steer<0?wv:Tv*Ce(Math.abs(j)/6,1,2.5);n.steer=ry(n.steer,Q,wt*r);let It=n.yaw-n.vdir,ht=n.speed*Math.sin(It),_t=Math.min(Iv,1+Cv*Math.abs(ht));T&&(_t=i.driftBonus),_&&v&&(_t*=Pv);let J=1-(1-i.steerHighSpeed)*ct,k=Math.min(1,n.speed/6),at=v?1:i.airControl,D=n.steer*i.steerRate*J*_t*k*at*(.6+.4*Math.min(1,mt)),Z=Math.min(n.speed/Yv,Xv*Math.min(1.2,mt)*(T?1.5:1)/Math.max(n.speed,1)),W=Ce(D,-Z,Z);v&&Math.abs(x)<=.15&&(n.yaw*=Math.exp(-Zv*r)),o&&i.steerNoise>0&&!m&&v&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let st=Math.max(.3,1-n.d*y.curv),pt=n.speed*Math.cos(n.vdir)/st*r,gt=n.speed*Math.sin(n.vdir)*r,Et=y.curv*pt,F=n.vdir,Jt=Et*(v?1-qv:1);if(n.yaw+=W*r-Jt,n.vdir-=Jt,v){let yt=(T?Rv:Av)*mt,Ht=1-Math.exp(-yt*r);n.vdir+=(n.yaw-n.vdir)*Ht,n.speed*=1-(1-Math.cos(It))*Ht}else{let yt=3*Ce(i.airStability,0,2);n.yaw+=(n.vdir-n.yaw)*(1-Math.exp(-yt*r)),i.airStability<1&&(n.yaw+=(n.yaw>=n.vdir?1:-1)*(1-i.airStability)*.6*r)}n.vdir=Ce(Jn(n.vdir),-Pf,Pf),n.yaw=Ce(Jn(n.yaw),n.vdir-Lf,n.vdir+Lf),n._t+=r,gt+=Jn(l.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(v?1:.5),n.s+=pt,n.d+=gt;let kt=v?Ce((Math.abs(n.yaw-n.vdir)-.04)/.22,0,1)*k:0;n.drift+=(kt-n.drift)*Math.min(1,8*r);let Bt=mi(e,eh(n.s,u));n.onRoad=Math.abs(n.d)<=Bt.width*.5;let Ct=Bt.width*.5+6-.4;if(Math.abs(n.d)>=Ct-.02){let yt=n.d>=0?1:-1,Ht=n.vdir*yt>0,xt=Ht?Math.abs(Math.sin(n.vdir)):0;if(n.d=yt*Ct,Ht&&(n.vdir=-yt*.04,n.yaw=n.yaw*.4-yt*.04),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let Pt=n.boostT>0,Vt=o?o.next():1;Pt&&n.speed>ny||xt>ty&&n.speed>ey&&Vt<Nf||n.airborne&&Vt<Nf?(n.speed*=.3,n.stun=iy,a.push("crash")):n.speed*=1-Ce(i.wallLoss*1.3*(.5+xt),0,.9),a.push("wall")}n.boostT=0,n._wallT=Uf,n._wallHit=!0}else n._wallHit=!1;n.stun>0&&v&&(n.speed*=Math.exp(-2.2*r)),f=eh(n.s,u);let zt=Jn(If(e,f)),Nt=(zt-n._g)/r;if(n.airborne||(zt<n.yRel-.05?(n.airborne=!0,n._apex=n.yRel-zt,n.vy=n._vyG,n.vy>$v&&a.push("jump")):(n.yRel=zt,n.vy=Ce(Nt,-80,80),n._vyG=n.vy)),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n._apex=Math.max(n._apex,n.yRel-zt),n.vy<=0&&n.yRel<=zt)){let yt=-n.vy,Ht=Math.abs(n.yaw-n.vdir),xt=yt>Jv/Math.max(.3,i.landing)||Ht>.35;n.airborne=!1,n.yRel=zt,n.vy=0,n._vyG=0,n._springA=Ce(n._springA+.35*n._apex+.03*yt,0,1),n._springP=Math.PI/2;let Pt=Kv*yt+(xt?.08:0);n.speed*=1-Ce(Pt/Math.max(.2,i.landing),0,.45),a.push(xt?"hardLand":"land")}n._g=zt,v=!n.airborne,n.speed=Ce(Jn(n.speed),0,1.5*d),n._wallT=Math.max(0,n._wallT-r);let I=Math.max(0,1-n.speed/4,n._wallT/Uf),b=v?(Et+(n.vdir-F))/r:0;n._turnF+=(b-n._turnF)*Math.min(1,6*r);let V=n.speed*n._turnF,lt=Math.sign(V)*Math.max(0,Math.abs(V)-Vv),dt=n.steer*Wv*Math.min(1,n.speed/10),ot=Ce((1-I)*(Math.atan(lt/kv)*Hv+Gv*(n.yaw-n.vdir)+dt),-Ff,Ff);n.stun>0&&(ot=(n.lean>=0?1:-1)*1.35),n.lean+=(ot-n.lean)*Math.min(1,9*r),n._dive=g>.1&&v?Math.min(Js,n._dive+Js*r):Math.max(0,n._dive-.25*r);let bt=Ce(j*Fv,-Js,Js)-n._dive;n._pitchF+=(bt-n._pitchF)*Math.min(1,r/Ov);let Rt=Ce(bt-n._pitchF,-Js,Js);n.wheelie=n.boostT>0&&v?Math.min(Math.PI/2,n.wheelie+Uv*r):Math.max(0,n.wheelie-Nv*r),Rt+=Math.sin(n.wheelie)*Dv,v||(Rt=Math.atan2(n.vy,Math.max(8,n.speed))),n.pitch=Rt,n._springA*=Math.exp(-r/Bv),n._springP+=zv*r,n.compress=Math.sin(n._springP)*n._springA,n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let yt of sy)Number.isFinite(n[yt])||(n[yt]=0);return n.speed<0&&(n.speed=0),n}function oy(n){return Ce(Jn(n.wet),0,1)}var ay=8,cy=25,ly=150,hy=3,uy=35,fy=2,dy=14,py=30,my=12,gy=2,_y={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},He=(n,t,e)=>n<t?t:n>e?e:n,aa=(n,t,e)=>n+(t-n)*e,xy=(n,t)=>n-t*Math.round(n/t);function vy(n,t){let e=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let c=((a.s0-t)%e+e)%e;c<r&&(r=c,s=a)}return s?{f:s,dist:r}:null}function yy(n,t){for(let e=0;e<=ly;e+=cy)if(Math.abs(mi(n,t+e).curv)>.004)return!1;return!0}function ca(n,t){let e=n||_y,i={persona:e,rng:t,skill:He(e.skill??.5,0,1),aggression:He(e.aggression??.5,0,1),jumpSkill:He(e.jumpSkill??.5,0,1),lineSkill:He(e.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=t.range(8,20)+(1-i.skill)*15,i}function la(n,t,e,i,s,r){let o=n.input,a=e.length,c=n.rng,l=n.aggression,h=n.skill,u=n.jumpSkill,d=t.speed,p=t.s,g=mi(e,p),x=Math.max(.8,g.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=c.range(.9,1.8),n.wanderGoal=c.range(-1,1)*(1-n.lineSkill)*.5*x),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=c.range(.5,1.2),n.mistakeSide=c.sign(),n.nextMistake=c.range(8,20)+(1-h)*15);let m=n.mistakeT>0;n.boostLock-=r;let f=aa(1.4,.6,l),y=Math.max(20,d*f),v=Math.max(y,He(d*1.6+20,40,110)),_=1/0,T=0,E=0,w=0;for(let k=0;k<=v;k+=ay){let at=k===0?g:mi(e,p+k);if(k<=y&&at.vmax<_&&(_=at.vmax),k>=8){let D=Math.abs(at.curv);D>T&&(T=D,E=Math.sign(at.curv),w=k)}}let C=He(T/.02,0,1),M=0;if(E!==0&&C>0){let k=He((w-10)/30,0,1),at=aa(1,-.8,k);M=E*x*n.lineSkill*C*at}M+=n.wander,m&&(M+=n.mistakeSide*1.2);let S=vy(e,p),L=S?S.dist:1/0,q=oa(e,p,"ramp")!==null,H=L<py;(q||H)&&u>.5&&(M*=1-He((u-.4)/.6,0,1));let j=!q&&L>=hy&&L<=uy&&u<.5;for(let k=0;k<s.length;k++){let at=s[k];if(at===t)continue;let D=xy(at.s-p,a);if(D<=0||D>=my)continue;let Z=at.d-t.d;if(!(Math.abs(Z)>=gy)){if(l>.55){let W=Z!==0?Math.sign(Z):t.d<0?1:-1;M+=W*(.6+.8*l)}else{let W=Z!==0?-Math.sign(Z):t.d<0?1:-1;Math.abs(t.d+W*2)>x&&(W=-W),M+=W*2*(1-l)}break}}M=He(M,-x,x),n.dGoal+=(M-n.dGoal)*Math.min(1,r*2.5);let ct=He(n.dGoal,-x,x),tt;if(t.airborne)tt=He(-t.yaw*2,-.3,.3);else{let k=ct-t.d,at=He(k*.12,-.25,.25),D=mi(e,p+He(d*.25,4,20)).curv,Z=i.steerRate*aa(1,i.steerHighSpeed,He(d/i.maxSpeed,0,1));tt=(D*d+(at-t.yaw)*3)/Z}tt=He(tt,-1,1),Number.isFinite(tt)||(tt=0);let mt=He(-n.playerGap/150,-1,1)*.06,Q=aa(.86,1,h)+l*.04;m&&(Q*=.85);let nt=_*Q*(1+mt),wt=i.maxSpeed,It=!1;if(!t.airborne&&t.boostCharges>0&&t.boostT<=0&&n.boostLock<=0){if(u>.6&&L>=fy&&L<=dy)It=!0;else if(d>20&&yy(e,p)){let k=n.playerGap<-20,at=.25+.5*l+(k?.3:0);It=c.chance(at)}n.boostLock=It?1:.4}o.boost=It;let ht=T<.003;if(t.boostT>0){let k=wt*i.boostPower;nt=ht?k*.98:Math.min(nt,k)}else nt=Math.min(nt,wt);let _t=0,J=0;if(t.airborne)_t=1;else{let k=nt-d;k>-1.5?_t=j?0:He(.5+k*.25,0,1):J=He((-k-1.5)*.15,0,1)}return o.throttle=_t,o.brake=J,o.steer=tt,o.drift=!t.airborne&&l>.75&&T>.025&&d>40&&w<20,o}var My=7,Sy=3,by=.3,Ey=3,wy=25,Ty=1.5,Ay=1.2,Ry=1.8,zf=.9,Cy={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},ha=(n,t,e)=>n<t?t:n>e?e:n,nh=(n,t)=>n-t*Math.round(n/t);function ih(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function kf({track:n,laps:t,env:e,rng:i,riders:s}){let r=n.length,o=t*r,c=s.filter(y=>!y.isPlayer).concat(s.filter(y=>y.isPlayer)).map((y,v)=>{let _=Math.floor(v/2),T=v%2,E=-My*(_+1),C=Of({s:E,d:T===0?-2.5:2.5});return{id:y.id,name:y.name,color:y.color,accent:y.accent,isPlayer:!!y.isPlayer,stats:y.stats,persona:y.persona||null,state:C,ai:y.isPlayer?null:ca(y.persona||Cy,i.fork("ai:"+y.id)),rng:i.fork("rider:"+y.id),others:null,input:ih(),coast:ih(),frameEvents:[],startS:E,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:v+1}});for(let y of c)y.others=c.filter(v=>v!==y).map(v=>v.state);let l=c.find(y=>y.isPlayer)||null,h=c.slice(),u=c.length,d=new Uint8Array(u*u);function p(y,v,_,T,E){if(_===v)return;let w=Math.floor(v/r),C=Math.min(Math.floor(_/r),t);for(let M=Math.max(w+1,1);M<=C;M++){let S=ha((M*r-v)/(_-v),0,1),L=T+S*E,q=L-y.lapStartT;y.lapTimes.push(q),(y.bestLap===null||q<y.bestLap)&&(y.bestLap=q),y.lapStartT=L}if(_>=o){let M=ha((o-v)/(_-v),0,1);y.finished=!0,y.finishTime=T+M*E}}function g(y){let v=y.state,_=y.coast;return _.throttle=by,_.brake=0,_.steer=ha(-v.yaw*2-v.d*.05,-.5,.5),_.boost=!1,_.drift=!1,_}function x(y,v){let _=y.state;for(let T=0;T<u;T++){let E=c[T];if(E===y)continue;let w=nh(E.state.s-_.s,r);if(w>Ey&&w<wy&&Math.abs(E.state.d-_.d)<Ty){_.speed=Math.min(_.speed+Ay*y.stats.slipstream*v,y.stats.maxSpeed*1.05);return}}}function m(){for(let y=0;y<u;y++)for(let v=y+1;v<u;v++){let _=c[y],T=c[v],E=nh(T.state.s-_.state.s,r),w=T.state.d-_.state.d,C=y*u+v;if(Math.abs(E)<Ry&&Math.abs(w)<zf){let M=w!==0?Math.sign(w):i.sign(),S=(zf-Math.abs(w))/2+.05;if(_.state.d-=M*S,T.state.d+=M*S,!d[C]){d[C]=1;let L=(_.state.speed+T.state.speed)/2;_.state.speed+=(L-_.state.speed)*.2,T.state.speed+=(L-T.state.speed)*.2;let q=E>=0?_:T;q.state.speed*=.96}}else d[C]=0}}let f={phase:"countdown",countdown:Sy,time:0,laps:t,track:n,riders:c,player:l,update(y,v){if(f.phase==="countdown"){f.countdown=Math.max(0,f.countdown-y),f.countdown<=0&&(f.phase="racing");return}let _=f.time;f.time+=y;for(let T=0;T<u;T++){let E=c[T];E.finished?E.input=g(E):E.isPlayer?E.input=v||ih():(l&&(E.ai.playerGap=nh(E.state.s-l.state.s,r)),E.input=la(E.ai,E.state,n,E.stats,E.others,y))}for(let T=0;T<u;T++){let E=c[T],w=E.state,C=E.finished,M=w.s;if(Bf(w,E.input,n,E.stats,e,y,E.rng),C||(p(E,M,w.s,_,y),E.finished||x(E,y)),E.lap=E.finished?t:ha(Math.floor(w.s/r)+1,1,t),!E.isPlayer){E.frameEvents.length=0;for(let S=0;S<w.events.length;S++)E.frameEvents.push(w.events[S]);w.events.length=0}}m(),h.sort((T,E)=>T.finished!==E.finished?T.finished?-1:1:T.finished?T.finishTime-E.finishTime:E.state.s-T.state.s);for(let T=0;T<u;T++)h[T].position=T+1;(l?l.finished:c.every(T=>T.finished))&&(f.phase="finished")},results(){let y=c.map(v=>{let _;if(v.finished)_=v.finishTime;else{let T=Math.max(0,v.state.s-v.startS),E=f.time>1?Math.max(5,T/f.time):40,w=Math.max(0,o-v.state.s);_=f.time+w/E}return{id:v.id,name:v.name,position:v.position,time:_,bestLap:v.bestLap,isPlayer:v.isPlayer}});return y.sort((v,_)=>v.position-_.position),y}};return f}var fh={};np(fh,{PLAYER:()=>Kn,RIVALS:()=>fa,UPGRADES:()=>ls,applyUpgrade:()=>oh,computeStats:()=>Ks,createRun:()=>da,dailySeed:()=>ma,isRunOver:()=>Dr,loadMeta:()=>lh,offerUpgrades:()=>rh,randomSeed:()=>Py,recordResult:()=>ah,runRiders:()=>pa,saveMeta:()=>hh,standings:()=>js,updateMeta:()=>uh});var Hf="polygon-rush-meta",Iy=Object.keys(Oi),Kn={id:"player",name:"Vous",color:16722511,accent:16777215},ls=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],fa=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Vf=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],sh=Vf.length;function Gf(n){return ls.find(t=>t.id===n)||null}function Wf(n,t){let e=0;for(let i of n.upgrades)i===t&&e++;return e}function da(n){let t=String(n),e=wn(Pr(t+"|run")),i=[];for(let o=0;o<sh;o++)if(o===0)i.push("sunset");else if(o===sh-1)i.push("rain");else{let a=i[o-1],c=Iy.filter(l=>l!==a&&!(o===sh-2&&l==="rain"));i.push(e.pick(c))}let s=Vf.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${t}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Kn.id]:0};for(let o of fa)r[o.id]=0;return{seed:t,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function pa(n){let t=Math.max(0,n.stageIndex),e=[{id:Kn.id,name:Kn.name,color:Kn.color,accent:Kn.accent,isPlayer:!0,persona:null,stats:Ks(n)}];for(let i of fa){let s=Math.min(.99,Math.round((i.skill+.01*t)*100)/100);e.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...Fi}})}return e}function Ks(n){let t={...Fi};for(let e of n.upgrades){let i=Gf(e);i&&i.apply(t)}return t}function rh(n){let t=wn(Pr(`${n.seed}|offer|${n.stageIndex}`)),e=ls.filter(i=>Wf(n,i.id)<i.maxStacks);return t.shuffle(e).slice(0,3)}function oh(n,t){let e=Gf(t);return!e||Wf(n,t)>=e.maxStacks?!1:(n.upgrades.push(t),!0)}function Xf(n){if(n===Kn.id)return Kn.name;let t=fa.find(e=>e.id===n);return t?t.name:n}function ah(n,t){if(Dr(n))return n;let e=t.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return e.forEach((r,o)=>{let a=r.position??o+1,c=ia[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+c,s.results.push({id:r.id,name:r.name||Xf(r.id),position:a,points:c,isPlayer:r.id===Kn.id})}),n.history.push(s),n.stageIndex+=1,n}function js(n){let t={};for(let e of n.history)for(let i of e.results)t[i.id]=Math.min(t[i.id]??1/0,i.position);return Object.keys(n.points).map(e=>({id:e,name:Xf(e),points:n.points[e],isPlayer:e===Kn.id,_best:t[e]??1/0})).sort((e,i)=>i.points-e.points||e._best-i._best).map(({_best:e,...i})=>i)}function Dr(n){return n.stageIndex>=n.stages.length}function ma(n=new Date){let t=n instanceof Date?n:new Date(n),e=t.getUTCFullYear(),i=String(t.getUTCMonth()+1).padStart(2,"0"),s=String(t.getUTCDate()).padStart(2,"0");return`DAILY-${e}-${i}-${s}`}function Py(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",t="RUSH-";for(let e=0;e<4;e++)t+=n[Math.floor(Math.random()*n.length)];return t}function ua(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function ch(n){let t=ua();if(!n||typeof n!="object")return t;let e=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:e(n.runs),wins:e(n.wins),bestPoints:e(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):t.unlocked}}function qf(){try{return globalThis.localStorage??null}catch{return null}}function lh(){try{let n=qf();if(!n)return ua();let t=n.getItem(Hf);return t?ch(JSON.parse(t)):ua()}catch{return ua()}}function hh(n){try{let t=qf();return t?(t.setItem(Hf,JSON.stringify(ch(n))),!0):!1}catch{return!1}}function uh(n,t){let e=ch(n),i=js(t),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:e.runs+1,wins:e.wins+(r?1:0),bestPoints:Math.max(e.bestPoints,s?s.points:0),unlocked:e.unlocked.slice()}}var Tn=.9,Yf=.3,ga=8,dh=3,Zf=6+.8,Ur=3,Ly=4.5,Dy=.015,Uy=.004,$f=60,ge={asphaltA:[.16,.165,.18],asphaltB:[.19,.195,.21],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.91,.85],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.72,.64,.47],gravel:[.5,.44,.34],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},_a=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Jf=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Ny=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],$e=(n,t,e)=>n+(t-n)*e,hn=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(t,e,i,s){let[r,o,a,c]=t,l=Jf(_a(o,r),_a(a,r)),h=Jf(_a(a,r),_a(c,r)),u=[l[0]+h[0],l[1]+h[1],l[2]+h[2]];if(!(Math.hypot(u[0],u[1],u[2])>1e-12))return;let d=Ny(u,i)<0,p=this.n;for(let g=0;g<4;g++){let x=t[g];this.pos.push(x[0],x[1],x[2]),this.col.push(e[0],e[1],e[2]);let m=s?s[g]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,d?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function Nr(n,t,e,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let c of[-1,1]){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,u])=>{let d=[0,0,0];return d[r]=c,d[o]=h,d[a]=u,[0,1,2].map(p=>t[p]+e[0][p]*d[0]*i[0]+e[1][p]*d[1]*i[1]+e[2][p]*d[2]*i[2])});n.quad(l,s,e[r].map(h=>h*c),null)}}}function ph(n,t,e){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Xo(i);return s.colorSpace=qe,s.anisotropy=4,s}function Kf(n,t,e,i){n.beginPath(),t.forEach(([s,r],o)=>o?n.lineTo(s*e,r*i):n.moveTo(s*e,r*i)),n.closePath(),n.fill()}var Fy=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function jf(n,t,e){let i=e??wn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,c=n.features??[],l=c.filter(A=>A.type==="ramp"),h=c.filter(A=>A.type==="boost"),u=c.filter(A=>A.type==="tunnel"),d=Math.max(0,Math.min(1,t.wet??0)),p=!!t.night,g=new Me;g.name="road";let x=[],m=[],f=[],y=A=>(m.push(A),A),v=ph(128,128,(A,P,N)=>{A.fillStyle="#0d0d0d",A.fillRect(0,0,P,N),A.fillStyle="#ffc81a",Kf(A,Fy,P,N)}),_=ph(256,128,(A,P,N)=>{A.fillStyle="#04141a",A.fillRect(0,0,P,N),A.fillStyle="#37f3ff",Kf(A,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],P,N)}),T=ph(1024,256,(A,P,N)=>{A.fillStyle="#0b0e16",A.fillRect(0,0,P,N),A.strokeStyle="#ffd21f",A.lineWidth=10,A.strokeRect(12,12,P-24,N-24),A.fillStyle="#ffd21f",A.font="bold 150px Arial, Helvetica, sans-serif",A.textAlign="center",A.textBaseline="middle",A.fillText("POLYGON RUSH",P/2,N/2+8)});for(let A of[v,_,T])A&&f.push(A);_&&(_.wrapS=Mr);let E=y(new me({vertexColors:!0,flatShading:!0,roughness:.85-.6*d,metalness:d>0?.2:.02})),w=y(new gn({vertexColors:!0})),C=y(new me({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),M=y(new me({vertexColors:!0,flatShading:!0,roughness:1})),S=y(new me({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),L=y(new gn({vertexColors:!0})),q=y(new me({color:v?16777215:16762906,map:v,emissive:v?16777215:16762906,emissiveMap:v,emissiveIntensity:.5,flatShading:!0})),H=y(new me({color:207411,emissive:3666943,emissiveMap:_,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),j=y(new me({vertexColors:!0,flatShading:!0,side:tn,roughness:.9})),ct=y(new gn({vertexColors:!0})),tt=y(new me({vertexColors:!0,flatShading:!0,roughness:.6})),mt=y(new me({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),Q=y(new me({color:2830138,flatShading:!0,roughness:.7})),nt=y(new me({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),wt=A=>{for(let P of l)if(A>=P.s0&&A<P.s1)return P.height*(A-P.s0)/(P.s1-P.s0);return 0},It=A=>l.some(P=>A>=P.s0&&A<P.s1),ht=A=>u.some(P=>A>=P.s0&&A<=P.s1),_t=A=>{let P=A/o,N=Math.floor(P),X=P-N;N=(N%r+r)%r;let U=s[N],B=s[(N+1)%r],Y=$e(U.rx,B.rx,X),K=$e(U.rz,B.rz,X),et=Math.hypot(Y,K)||1,Mt=$e(U.tx,B.tx,X),Ft=$e(U.tz,B.tz,X),Dt=Math.hypot(Mt,Ft)||1,St=$e(U.y,B.y,X);return{s:A,x:$e(U.x,B.x,X),z:$e(U.z,B.z,X),yb:St,y:St,h:0,rx:Y/et,rz:K/et,tx:Mt/Dt,tz:Ft/Dt,w:$e(U.width,B.width,X),curv:$e(U.curv,B.curv,X),sample:!1}},J=(A,P,N)=>({x:$e(A.x,P.x,N),y:$e(A.y,P.y,N),yb:$e(A.yb,P.yb,N),z:$e(A.z,P.z,N),rx:$e(A.rx,P.rx,N),rz:$e(A.rz,P.rz,N),w:$e(A.w,P.w,N)}),k=(A,P,N=0)=>[A.x+A.rx*P,A.y+N,A.z+A.rz*P],at=(A,P,N=0)=>[A.x+A.rx*P,A.yb+N,A.z+A.rz*P],D=[];for(let A of l)D.push({s:A.s0,h:0},{s:A.s1,h:A.height},{s:A.s1,h:0});D.sort((A,P)=>A.s-P.s);let Z=[],W=0,st=(A,P,N)=>{let X=Z[Z.length-1];if(X&&Math.abs(X.s-A)<1e-9&&Math.abs(X.h-P)<1e-9){X.sample=X.sample||N;return}let U=_t(A);U.h=P,U.y=U.yb+P,U.sample=N,Z.push(U)};for(let A=0;A<r;A++){let P=A*o;for(;W<D.length&&D[W].s<=P+1e-9;)st(D[W].s,D[W].h,!1),W++;st(P,wt(P),!0)}for(;W<D.length;)st(D[W].s,D[W].h,!1),W++;let pt=Z.length,gt=[];for(let A=0;A<pt;A++){let P=Z[A],N=Z[(A+1)%pt],X=P.s,U=A+1<pt?Z[A+1].s:a,B=Math.abs(U-X)<1e-9,Y=(X+U)/2;gt.push({a:P,b:N,sa:X,sb:U,drop:B,mid:Y,ramp:!B&&It(Y)})}let Et=new hn,F=new hn,Jt=new hn,kt=new hn,Bt=new hn,Ct=new hn,zt=new hn,Nt=new hn,I=new hn,b=new hn,V=new hn,lt=new hn,dt=A=>A.w/2+6-Yf/2,ot=A=>A.w/2+6+Yf/2;for(let A of gt){let{a:P,b:N,sa:X,sb:U,mid:B}=A;if(A.drop){Et.quad([k(P,-P.w/2),k(P,P.w/2),k(N,N.w/2),k(N,-N.w/2)],ge.rampDark,[P.tx,0,P.tz]);continue}let Y=P.w/2,K=N.w/2;if(A.ramp)F.quad([k(P,-Y),k(P,Y),k(N,K),k(N,-K)],Math.floor(B/2)%2===0?ge.yellow:ge.black,[0,1,0]),Et.quad([k(P,-Y),k(N,-K),at(N,-K),at(P,-Y)],ge.rampDark,[-P.rx,0,-P.rz]),Et.quad([k(P,Y),at(P,Y),at(N,K),k(N,K)],ge.rampDark,[P.rx,0,P.rz]);else{Et.quad([k(P,-Y),k(P,Y),k(N,K),k(N,-K)],Math.floor(B/8)%2?ge.asphaltB:ge.asphaltA,[0,1,0]);for(let St of[-1,1])Jt.quad([k(P,St*(Y-.25),.02),k(P,St*(Y-.45),.02),k(N,St*(K-.45),.02),k(N,St*(K-.25),.02)],ge.white,[0,1,0]);let et=9,Mt=3;for(let St=Math.floor(X/et);St*et<U;St++){let Wt=Math.max(X,St*et),Qt=Math.min(U,St*et+Mt);if(Qt-Wt<1e-6)continue;let ie=J(P,N,(Wt-X)/(U-X)),oe=J(P,N,(Qt-X)/(U-X));Jt.quad([k(ie,-.08,.02),k(ie,.08,.02),k(oe,.08,.02),k(oe,-.08,.02)],ge.white,[0,1,0])}let Ft=Math.abs((P.curv+N.curv)/2)>Uy?1.2:.5,Dt=Math.floor(B/2)%2?ge.red:ge.railA;for(let St of[-1,1])Jt.quad([k(P,St*Y,.025),k(P,St*(Y+Ft),.025),k(N,St*(K+Ft),.025),k(N,St*K,.025)],Dt,[0,1,0])}for(let et of[-1,1]){kt.quad([at(P,et*Y),at(P,et*dt(P)),at(N,et*dt(N)),at(N,et*K)],ge.sand,[0,1,0]);let Mt=ga/2,Ft=-dh/2,Dt=-dh,St=[et*P.rx*.6,.8,et*P.rz*.6];kt.quad([at(P,et*ot(P),0),at(P,et*(ot(P)+Mt),Ft),at(N,et*(ot(N)+Mt),Ft),at(N,et*ot(N),0)],ge.gravel,St),kt.quad([at(P,et*(ot(P)+Mt),Ft),at(P,et*(ot(P)+ga),Dt),at(N,et*(ot(N)+ga),Dt),at(N,et*(ot(N)+Mt),Ft)],ge.gravel,St);let Wt=Math.floor(B/6)%2?ge.railB:ge.railA,Qt=et*dt(P),ie=et*dt(N),oe=et*ot(P),pe=et*ot(N);Bt.quad([at(P,Qt,0),at(P,Qt,Tn),at(N,ie,Tn),at(N,ie,0)],Wt,[-et*P.rx,0,-et*P.rz]),Bt.quad([at(P,oe,0),at(P,oe,Tn),at(N,pe,Tn),at(N,pe,0)],Wt,[et*P.rx,0,et*P.rz]),Bt.quad([at(P,Qt,Tn),at(P,oe,Tn),at(N,pe,Tn),at(N,ie,Tn)],Wt,[0,1,0]),p&&Ct.quad([at(P,Qt,Tn+.02),at(P,oe,Tn+.02),at(N,pe,Tn+.02),at(N,ie,Tn+.02)],et<0?ge.neonCyan:ge.neonMag,[0,1,0])}}for(let A of Z){if(!A.sample||Math.abs(A.curv)<=Dy||Math.round(A.s/o)%8!==0||ht(A.s)||It(A.s))continue;let N=-Math.sign(A.curv)*(A.w/2+6+.6),U=A.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];zt.quad([at(A,N-.6,1),at(A,N+.6,1),at(A,N+.6,2),at(A,N-.6,2)],[1,1,1],[-A.tx,0,-A.tz],U),Nr(V,[A.x+A.rx*N,A.yb+.35,A.z+A.rz*N],[[A.tx,0,A.tz],[A.rx,0,A.rz],[0,1,0]],[.08,.12,.65],ge.post)}let bt=_t(0),Rt=Math.max(4,Math.round(bt.w)),yt=bt.w/Rt;for(let A=0;A<3;A++){let P=_t(-2+A),N=_t(-1+A);for(let X=0;X<Rt;X++){let U=-bt.w/2+X*yt,B=U+yt;Jt.quad([k(P,U,.03),k(P,B,.03),k(N,B,.03),k(N,U,.03)],(A+X)%2?ge.checkB:ge.checkW,[0,1,0])}}let Ht=bt.w/2+6+.5,xt=[[bt.tx,0,bt.tz],[bt.rx,0,bt.rz],[0,1,0]];for(let A of[-1,1])Nr(V,[bt.x+bt.rx*A*Ht,bt.yb+4,bt.z+bt.rz*A*Ht],xt,[.3,.3,4],ge.post);Nr(V,[bt.x,bt.yb+7.5,bt.z],xt,[.5,Ht,.5],ge.beam);let Pt=(A,P,N)=>[bt.x+bt.tx*A+bt.rx*P,bt.yb+N,bt.z+bt.tz*A+bt.rz*P];lt.quad([Pt(-.55,-Ht,5.2),Pt(-.55,Ht,5.2),Pt(-.55,Ht,6.8),Pt(-.55,-Ht,6.8)],[1,1,1],[-bt.tx,0,-bt.tz],[[0,0],[1,0],[1,1],[0,1]]),lt.quad([Pt(.55,-Ht,5.2),Pt(.55,Ht,5.2),Pt(.55,Ht,6.8),Pt(.55,-Ht,6.8)],[1,1,1],[bt.tx,0,bt.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let A of h){let P=[];for(let X=A.s0;X<A.s1;X+=2)P.push(X);P.push(A.s1);let N=P.map(_t);for(let X=0;X+1<N.length;X++){let U=N[X],B=N[X+1],Y=(U.s-A.s0)/4,K=(B.s-A.s0)/4;Nt.quad([k(U,-U.w/2,.04),k(U,U.w/2,.04),k(B,B.w/2,.04),k(B,-B.w/2,.04)],[1,1,1],[0,1,0],[[Y,0],[Y,1],[K,1],[K,0]])}}let Vt=A=>{let P=A.w/2+Zf,N=[[-P,0],[-P,Ur]];for(let X=1;X<=7;X++){let U=Math.PI-X*Math.PI/8;N.push([P*Math.cos(U),Ur+Ly*Math.sin(U)])}return N.push([P,Ur],[P,0]),N},Gt=(A,P,N,X=0)=>[A.x+A.rx*P+A.tx*X,A.yb+N,A.z+A.rz*P+A.tz*X],ut=(A,P,N)=>{let X=-P,U=Ur-N,B=Math.hypot(X,U)||1;return[A.rx*X/B,U/B,A.rz*X/B]},Lt=([A,P])=>{let N=-A,X=Ur-P,U=Math.hypot(N,X)||1;return[A+N/U*.45,P+X/U*.45]};for(let A of u){let P=[];for(let X=A.s0;X<A.s1;X+=2)P.push(X);P.push(A.s1);let N=P.map(_t);for(let X=0;X+1<N.length;X++){let U=N[X],B=N[X+1],Y=Vt(U),K=Vt(B);for(let et=0;et<Y.length-1;et++){let Mt=(Y[et][0]+Y[et+1][0])/2,Ft=(Y[et][1]+Y[et+1][1])/2;I.quad([Gt(U,Y[et][0],Y[et][1]),Gt(U,Y[et+1][0],Y[et+1][1]),Gt(B,K[et+1][0],K[et+1][1]),Gt(B,K[et][0],K[et][1])],et%2?ge.tunA:ge.tunB,ut(U,Mt,Ft))}if(Math.round((U.s-A.s0)/2)%6===0)for(let et=1;et<=8;et++){let Mt=Lt(Y[et]),Ft=Lt(Y[et+1]),Dt=(Mt[0]+Ft[0])/2,St=(Mt[1]+Ft[1])/2;b.quad([Gt(U,Mt[0],Mt[1]),Gt(U,Ft[0],Ft[1]),Gt(U,Ft[0],Ft[1],.6),Gt(U,Mt[0],Mt[1],.6)],et%2?ge.neonCyan:ge.neonMag,ut(U,Dt,St))}}for(let X of[N[0],N[N.length-1]]){let U=X.w/2+Zf,B=[[X.tx,0,X.tz],[X.rx,0,X.rz],[0,1,0]];for(let Y of[-1,1])Nr(I,[X.x+X.rx*Y*(U+1.2),X.yb+5,X.z+X.rz*Y*(U+1.2)],B,[2,1.1,5],ge.concrete);Nr(I,[X.x,X.yb+10.5,X.z],B,[2,U+3.5,1.5],ge.concreteB)}}let ft=(A,P,N,X=!1)=>{if(!A.idx.length)return null;let U=new _e;U.setAttribute("position",new de(A.pos,3)),U.setAttribute("color",new de(A.col,3)),U.setAttribute("uv",new de(A.uv,2)),U.setIndex(A.idx),U.computeVertexNormals(),x.push(U);let B=new ye(U,P);return B.name=N,B.receiveShadow=X,g.add(B),B};ft(Et,E,"road-asphalt",!0),ft(F,w,"road-ramp-top"),ft(Jt,C,"road-paint"),ft(kt,M,"road-shoulder-talus"),ft(Bt,S,"road-barriers"),p&&ft(Ct,L,"road-barrier-neon"),ft(zt,q,"road-chevrons"),ft(Nt,H,"road-boost"),ft(I,j,"road-tunnels"),ft(b,ct,"road-tunnel-neon"),ft(V,tt,"road-props"),ft(lt,mt,"road-start-sign");let Tt=[];for(let A=1;A*$f<a-5;A++){let P=A*$f;if(u.some(K=>P>=K.s0-15&&P<=K.s1+15))continue;let N=_t(P),X=A%2?1:-1,U=X*(N.w/2+6+2.6),B=N.yb-dh*Math.min(1,2.45/ga),Y=i.range(8.5,9.5);Tt.push({x:N.x+N.rx*U,z:N.z+N.rz*U,y:B,h:Y,hx:N.x+N.rx*(U-X*.6),hz:N.z+N.rz*(U-X*.6)})}if(Tt.length){let A=new nn(.18,.26,9,6,1),P=new os(.55,0);x.push(A,P);let N=new Ui(A,Q,Tt.length),X=new Ui(P,nt,Tt.length);N.name="road-lamp-masts",X.name="road-lamp-heads";let U=new ce,B=new En,Y=new z,K=new z;Tt.forEach((et,Mt)=>{K.set(et.x,et.y+et.h/2,et.z),Y.set(1,et.h/9,1),U.compose(K,B,Y),N.setMatrixAt(Mt,U),K.set(et.hx,et.y+et.h+.2,et.hz),Y.set(1,1,1),U.compose(K,B,Y),X.setMatrixAt(Mt,U)}),N.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,g.add(N,X)}return{group:g,update:(A,P)=>{_&&(_.offset.x=-(P*.9%1)),H.emissiveIntensity=2.2+.5*Math.sin(P*5)},dispose:()=>{g.removeFromParent();for(let A of x)A.dispose();for(let A of m)A.dispose();for(let A of f)A.dispose()}}}function td(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new _e,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Qf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let g=Qf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Qf(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new le(o,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Je=10,Bi=450,_n=40,ed=12e3,nd=32,id=4e3,xn=Math.PI*2,Fr=new Pe,tr=new Zt,sd=new ce,rd=new ce,Oy=new z(0,1,0),od=n=>n<0?0:n>1?1:n,zi=(n,t,e)=>n<t?t:n>e?e:n,hs=(n,t,e)=>{let i=od((e-n)/(t-n));return i*i*(3-2*i)};function By(n){let t=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},e=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,c=s-o,l=a*a*(3-2*a),h=c*c*(3-2*c),u=t(r,o),d=t(r+1,o),p=t(r,o+1),g=t(r+1,o+1);return u+(d-u)*l+(p-u)*h+(u-d-p+g)*l*h};return(i,s)=>(e(i,s)*.5+e(i*2+17.3,s*2-9.1)*.25+e(i*4-3.7,s*4+11.2)*.125)/.875}var Qs=n=>{let t=new Zt(n);return[t.r,t.g,t.b]},ki={sand:Qs(14271631),dry:Qs(10134118),garrigue:Qs(7309902),rock:Qs(11038533),pale:Qs(13352870),snow:Qs(15855076)},zy=[16513264,15853260,14725754,16052195],ky=[9075302,7236192,11047018,8023646],Hy=[3407871,16727250,16757051],xa=0,va=0,ya=0,Or=(n,t)=>{xa+=(n[0]-xa)*t,va+=(n[1]-va)*t,ya+=(n[2]-ya)*t};function Vy(n,t,e,i,s,r){xa=ki.sand[0],va=ki.sand[1],ya=ki.sand[2],Or(ki.dry,hs(2.5,7,n)),Or(ki.garrigue,hs(25,75,n)*.55),Or(ki.rock,hs(.4,.65,t)),Or(ki.pale,hs(95,120,n)*.8),Or(ki.snow,hs(125,150,n));let o=xa*e,a=va*e,c=ya*e;i&&(o=o*.45+.02,a=a*.5+.03,c=c*.75+.09);for(let l=0;l<9;l+=3)s[r+l]=o,s[r+l+1]=a,s[r+l+2]=c}function An(n,t){let e=n.index?n.toNonIndexed():n;e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.normal||e.computeVertexNormals();let i=e.attributes.position.count,s=new Float32Array(i*3);tr.setHex(t);for(let r=0;r<i;r++)s[r*3]=tr.r,s[r*3+1]=tr.g,s[r*3+2]=tr.b;return e.setAttribute("color",new le(s,3)),e}var Br=n=>td(n,!1);function Gy(n,t,e){let i=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return i-Math.floor(i)}function Wy(){let n=new os(1,0),t=n.attributes.position;for(let e=0;e<t.count;e++){let i=t.getX(e),s=t.getY(e),r=t.getZ(e),o=.8+.4*Gy(i,s,r);t.setXYZ(e,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function Xy(){return Br([An(new nn(.35,.5,6,6).translate(0,3,0),7162931),An(new os(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function qy(){return Br([An(new nn(.25,.35,1.2,5).translate(0,.6,0),7162931),An(new rs(1.1,10,6).translate(0,6,0),3037756)])}function Yy(){let n=[An(new nn(.22,.35,8,5).translate(0,4,0),9071178)];for(let t=0;t<7;t++){let e=new rs(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(t*xn/7);n.push(An(e,5214010))}return Br(n)}function Zy(){return Br([An(new nn(1.6,2.3,13,8).translate(0,6.5,0),16052712),An(new nn(2,2,2.2,8).translate(0,6.5,0),12727595),An(new nn(1.3,1.3,1.8,8).translate(0,14,0),16771488),An(new rs(1.7,1.2,8).translate(0,15.4,0),3812906)])}function $y(){return Br([An(new Fn(2.2,.9,6).translate(0,.45,0),15986662),An(new rs(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function zn(n,t,e,i=!0){let s=new Ui(n,t,e.length);for(let r=0;r<e.length;r++){let o=e[r];Fr.position.set(o.x,o.y,o.z),Fr.rotation.set(0,o.ry??0,0),Fr.scale.set(o.sx??1,o.sy??1,o.sz??1),Fr.updateMatrix(),s.setMatrixAt(r,Fr.matrix),o.col!==void 0&&(tr.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,tr))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var Jy=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ky=`
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
}`;function ad(n,t,e,i){let s=t.pts,r=s.length,o=t.bounds,a=!!e.night,c=By(i.int(1,1073741808)),l=o.minX-Bi-_n,h=o.minZ-Bi-_n,u=Math.ceil((o.maxX-o.minX+2*Bi)/_n)+3,d=Math.ceil((o.maxZ-o.minZ+2*Bi)/_n)+3,p=Array.from({length:u*d},()=>[]);for(let U=0;U<r;U++){let B=zi(Math.floor((s[U].x-l)/_n),0,u-1),Y=zi(Math.floor((s[U].z-h)/_n),0,d-1);p[Y*u+B].push(U)}let g=0;function x(U,B){let Y=Math.floor((U-l)/_n),K=Math.floor((B-h)/_n),et=Math.max(u,d),Mt=1/0,Ft=0;for(let Dt=0;Dt<=et;Dt++){for(let Wt=K-Dt;Wt<=K+Dt;Wt++){if(Wt<0||Wt>=d)continue;let ie=Wt===K-Dt||Wt===K+Dt?1:2*Dt;for(let oe=Y-Dt;oe<=Y+Dt;oe+=ie){if(oe<0||oe>=u)continue;let pe=p[Wt*u+oe];for(let Se=0;Se<pe.length;Se++){let ze=pe[Se],je=s[ze],Fe=je.x-U,Vn=je.z-B,Mi=Fe*Fe+Vn*Vn;Mi<Mt&&(Mt=Mi,Ft=ze)}}}let St=Dt*_n;if(Mt<=St*St)break}return g=Math.sqrt(Mt),Ft}function m(U,B,Y){let K=Y*Y,et=1/0,Mt=zi(Math.floor((U-Y-l)/_n),0,u-1),Ft=zi(Math.floor((U+Y-l)/_n),0,u-1),Dt=zi(Math.floor((B-Y-h)/_n),0,d-1),St=zi(Math.floor((B+Y-h)/_n),0,d-1);for(let Wt=Dt;Wt<=St;Wt++)for(let Qt=Mt;Qt<=Ft;Qt++){let ie=p[Wt*u+Qt];for(let oe=0;oe<ie.length;oe++){let pe=s[ie[oe]],Se=pe.x-U,ze=pe.z-B;Se*Se+ze*ze<=K&&pe.y<et&&(et=pe.y)}}return et}let f=Math.ceil(r/4),y=new Float64Array(f*2);for(let U=0;U<f;U++)y[2*U]=s[U*4%r].x,y[2*U+1]=s[U*4%r].z;function v(U,B){let Y=!1;for(let K=0,et=f-1;K<f;et=K++){let Mt=y[2*K],Ft=y[2*K+1],Dt=y[2*et],St=y[2*et+1];Ft>B!=St>B&&U<(Dt-Mt)*(B-Ft)/(St-Ft)+Mt&&(Y=!Y)}return Y}let _=o.minX-Bi,T=o.minZ-Bi,E=Math.ceil((o.maxX-o.minX+2*Bi)/Je)+1,w=Math.ceil((o.maxZ-o.minZ+2*Bi)/Je)+1,C=new Float32Array(E*w);for(let U=0;U<w;U++)for(let B=0;B<E;B++){let Y=_+B*Je,K=T+U*Je,et=x(Y,K),Mt=g,Ft=s[et],Dt=Ft.width*.5,St=Ft.y;if(Mt<40){let Fe=m(Y,K,24);Fe<St&&(St=Fe)}let Wt=1;if(!v(Y,K)){let Fe=Mt-Dt+(c(Y/140+31.7,K/140-8.2)-.5)*70;Wt=1-hs(110,200,Fe)}let Qt=c(Y/260,K/260),oe=-15+(10+130*Math.pow(od((Qt-.42)/.5),1.5)+6*Qt+15)*Wt,pe=hs(Dt+6+12,Dt+6+82,Mt),Se=St-.6,ze=Se+(oe-Se)*pe,je=St+Math.max(0,Mt-Dt-6-12)*.9;ze>je&&(ze=je),C[U*E+B]=ze}function M(U,B){let Y=(U-_)/Je,K=(B-T)/Je;Y=zi(Y,0,E-1.000001),K=zi(K,0,w-1.000001);let et=Math.floor(Y),Mt=Math.floor(K),Ft=Y-et,Dt=K-Mt,St=C[Mt*E+et],Wt=C[Mt*E+et+1],Qt=C[(Mt+1)*E+et],ie=C[(Mt+1)*E+et+1],oe=St+(Wt-St)*Ft,pe=Qt+(ie-Qt)*Ft;return oe+(pe-oe)*Dt}let S=(U,B)=>Math.max(Math.abs(M(U+4,B)-M(U-4,B)),Math.abs(M(U,B+4)-M(U,B-4)))/8,L=(U,B,Y)=>{let K=x(U,B);return g>=s[K].width*.5+6+4+Y},q=2*(E-1)*(w-1),H=new Float32Array(q*9),j=new Float32Array(q*9),ct=0,tt=(U,B,Y,K,et,Mt,Ft,Dt,St)=>{let Wt=K-U,Qt=et-B,ie=Mt-Y,oe=Ft-U,pe=Dt-B,Se=St-Y,ze=Qt*Se-ie*pe,je=ie*oe-Wt*Se,Fe=Wt*pe-Qt*oe,Vn=Math.hypot(ze,je,Fe)||1,Mi=1-Math.abs(je)/Vn,R=ct*9;H[R]=U,H[R+1]=B,H[R+2]=Y,H[R+3]=K,H[R+4]=et,H[R+5]=Mt,H[R+6]=Ft,H[R+7]=Dt,H[R+8]=St,Vy((B+et+Dt)/3,Mi,.9+.2*i.next(),a,j,R),ct++};for(let U=0;U<w-1;U++)for(let B=0;B<E-1;B++){let Y=U*E+B,K=Y+1,et=Y+E,Mt=et+1,Ft=_+B*Je,Dt=T+U*Je,St=Ft+Je,Wt=Dt+Je;tt(Ft,C[Y],Dt,Ft,C[et],Wt,St,C[K],Dt),tt(St,C[K],Dt,Ft,C[et],Wt,St,C[Mt],Wt)}let mt=new _e;mt.setAttribute("position",new le(H,3)),mt.setAttribute("color",new le(j,3)),mt.computeVertexNormals(),mt.computeBoundingSphere();let Q=new ye(mt,new me({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0}));Q.receiveShadow=!0;let nt=new Me;nt.name="environment",nt.add(Q);let wt=(o.minX+o.maxX)/2,It=(o.minZ+o.maxZ)/2,ht=new Vs(ed,ed,nd,nd);ht.rotateX(-Math.PI/2);let _t=ht.attributes.position,J=_t.count,k=new Float32Array(J),at=new Float32Array(J);for(let U=0;U<J;U++)k[U]=_t.getX(U),at[U]=_t.getZ(U);let D=new ye(ht,new me({color:e.seaColor,roughness:.25,metalness:.05,flatShading:!0}));D.position.set(wt,0,It),nt.add(D);let Z=new z(e.sunDir[0],e.sunDir[1],e.sunDir[2]).normalize(),W=new Me,st=new Ae({uniforms:{topColor:{value:new Zt(e.skyTop)},horizonColor:{value:new Zt(e.skyHorizon)},sunColor:{value:new Zt(e.sunColor)},sunDir:{value:Z},night:{value:a?1:0}},vertexShader:Jy,fragmentShader:Ky,side:Ze,depthWrite:!1,fog:!1}),pt=new ye(new qo(id,32,16),st);if(pt.renderOrder=-10,pt.frustumCulled=!1,W.add(pt),a){let B=new Float32Array(1500);for(let et=0;et<500;et++){let Mt=i.range(0,xn),Ft=Math.asin(i.range(.05,.98)),Dt=id*.97;B[et*3]=Dt*Math.cos(Ft)*Math.cos(Mt),B[et*3+1]=Dt*Math.sin(Ft),B[et*3+2]=Dt*Math.cos(Ft)*Math.sin(Mt)}let Y=new _e;Y.setAttribute("position",new le(B,3));let K=new Xs(Y,new Ar({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));K.frustumCulled=!1,W.add(K)}nt.add(W);let gt=new $o(e.hemiSky,e.hemiGround,e.hemiIntensity),Et=new jo(e.sunColor,e.sunIntensity);Et.castShadow=!0,Et.shadow.mapSize.set(2048,2048);let F=Et.shadow.camera;F.left=-90,F.right=90,F.top=90,F.bottom=-90,F.near=1,F.far=600,F.updateProjectionMatrix(),Et.shadow.bias=-5e-4,nt.add(gt,Et,Et.target);let Jt=n.fog,kt=n.background,Bt=new Ho(e.fogColor,e.fogDensity),Ct=new Zt(e.skyHorizon);n.fog=Bt,n.background=Ct;let zt=_+(E-1)*Je,Nt=T+(w-1)*Je,I=()=>i.range(_+30,zt-30),b=()=>i.range(T+30,Nt-30),V=(U,B,Y)=>{let K=[];for(let et=0;et<B&&K.length<U;et++){let Mt=Y(I(),b());Mt&&K.push(Mt)}return K},lt=V(320,4e4,(U,B)=>{let Y=M(U,B);if(Y<4||Y>95||!L(U,B,2)||S(U,B)>.6)return null;let K=i.range(.8,1.45);return{x:U,y:Y-.3,z:B,sx:K,sy:K*i.range(.9,1.3),sz:K,ry:i.range(0,xn),col:16777215,v:i.range(.85,1.15)}}),dt=V(170,4e4,(U,B)=>{let Y=M(U,B);if(Y<6||Y>70||!L(U,B,1.5)||S(U,B)>.6)return null;let K=i.range(.8,1.3);return{x:U,y:Y-.3,z:B,sx:K,sy:K*i.range(.9,1.25),sz:K,ry:i.range(0,xn),col:16777215,v:i.range(.85,1.15)}}),ot=V(110,4e4,(U,B)=>{let Y=M(U,B);if(Y<1.8||Y>14||!L(U,B,2)||S(U,B)>.5)return null;let K=i.range(.85,1.25);return{x:U,y:Y-.3,z:B,sx:K,sy:K,sz:K,ry:i.range(0,xn),col:16777215,v:i.range(.9,1.1)}});nt.add(zn(Xy(),new me({vertexColors:!0,flatShading:!0,roughness:.9}),lt)),nt.add(zn(qy(),new me({vertexColors:!0,flatShading:!0,roughness:.9}),dt)),nt.add(zn(Yy(),new me({vertexColors:!0,flatShading:!0,roughness:.9}),ot));let bt=V(300,3e4,(U,B)=>{let Y=M(U,B);if(Y<1.5)return null;let K=i.range(1.2,4.5);return L(U,B,K*.6)?{x:U,y:Y+K*.15,z:B,sx:K,sy:K*i.range(.55,.9),sz:K,ry:i.range(0,xn),col:i.pick(ky),v:i.range(.85,1.15)}:null}),Rt=V(3,3e4,(U,B)=>{if(M(U,B)>-4)return null;let Y=x(U,B);if(g<s[Y].width*.5+200||g>800)return null;let K=i.range(25,45);return{x:U,y:.1*K,z:B,sx:K,sy:K*.45,sz:K,ry:i.range(0,xn),col:10260344,v:1}});nt.add(zn(Wy(),new me({color:16777215,flatShading:!0,roughness:.95}),bt.concat(Rt)));let yt=[],Ht=[],xt=[],Pt=i.int(3,5),Vt=0;for(let U=0;U<4e3&&Vt<Pt;U++){let B=I(),Y=b(),K=x(B,Y),et=s[K].width*.5;if(g<et+25||g>et+80)continue;let Mt=M(B,Y);if(Mt<6||Mt>40||S(B,Y)>.35)continue;Vt++;let Ft=i.int(7,12);for(let Dt=0;Dt<Ft;Dt++){let St=i.range(0,xn),Wt=Math.sqrt(i.next())*18,Qt=B+Math.cos(St)*Wt,ie=Y+Math.sin(St)*Wt,oe=x(Qt,ie);if(g<s[oe].width*.5+6+4+4)continue;let pe=M(Qt,ie);if(pe<3)continue;let Se=i.range(4,6.5),ze=i.range(3.5,6),je=i.range(4,6.5),Fe=i.pick([0,Math.PI/2])+i.range(-.15,.15),Vn=pe-1;if(yt.push({x:Qt,y:Vn,z:ie,ry:Fe,sx:Se,sy:ze,sz:je,col:i.pick(zy),v:1}),Ht.push({x:Qt,y:Vn+ze,z:ie,ry:Fe,sx:Se*1.08,sy:i.range(1.8,2.6),sz:je*1.08}),a)for(let Mi of[-1,1]){let R=Mi*Se*.28,G=je/2+.03;xt.push({x:Qt+R*Math.cos(Fe)+G*Math.sin(Fe),y:Vn+ze*.55,z:ie-R*Math.sin(Fe)+G*Math.cos(Fe),ry:Fe})}}}let Gt=new me({color:16777215,flatShading:!0,roughness:.85}),ut=new me({color:11818298,flatShading:!0,roughness:.8});if(yt.length){let U=new Fn(1,1,1).translate(0,.5,0),B=new nn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0);nt.add(zn(U,Gt,yt),zn(B,ut,Ht))}if(a&&xt.length){let U=new Fn(1.2,1.1,.12);nt.add(zn(U,new gn({color:16761466}),xt,!1))}if(a){let U=0,B=0,Y=!1;for(let K=0;K<4e3&&!Y;K++){let et=I(),Mt=b(),Ft=x(et,Mt),Dt=s[Ft].width*.5;if(g<Dt+220||g>Dt+420)continue;let St=M(et,Mt);St<6||St>30||(U=et,B=Mt,Y=!0)}if(Y){let K=[],et=[],Mt=i.int(9,13);for(let Ft=0;Ft<Mt;Ft++){let Dt=U+i.range(-110,110),St=B+i.range(-110,110),Wt=M(Dt,St);if(Wt<2)continue;let Qt=i.range(6,10),ie=i.range(30,70);K.push({x:Dt,y:Wt,z:St,sx:Qt,sy:ie,sz:Qt,col:1777720,v:i.range(.8,1.2)});let oe=i.pick(Hy);for(let pe=0;pe<3;pe++){let Se=pe*xn/3+i.range(0,.5);et.push({x:Dt+Math.cos(Se)*Qt*.88,y:Wt+ie*.05,z:St+Math.sin(Se)*Qt*.88,ry:-Se,sy:ie*.9,col:oe,v:1})}}nt.add(zn(new nn(.72,1,1,6).translate(0,.5,0),new me({color:16777215,flatShading:!0,roughness:.7}),K),zn(new Fn(.5,1,.25).translate(0,.5,0),new gn({color:16777215}),et,!1))}}{let U=[],B=[];for(let K=1;K<w-1;K++)for(let et=1;et<E-1;et++){let Mt=K*E+et,Ft=C[Mt];if(Ft<2||Ft>30)continue;let Dt=x(_+et*Je,T+K*Je);if(g<s[Dt].width*.5+60)continue;(C[Mt-1]<0||C[Mt+1]<0||C[Mt-E]<0||C[Mt+E]<0?U:B).push(Mt)}let Y=U.length?U:B;if(Y.length){let K=i.pick(Y),et=K%E,Mt=(K-et)/E,Ft=new ye(Zy(),new me({vertexColors:!0,flatShading:!0,roughness:.6}));Ft.position.set(_+et*Je,C[K]-.5,T+Mt*Je),Ft.castShadow=!0,nt.add(Ft)}}let Lt=V(4,2e4,(U,B)=>{if(M(U,B)>-3)return null;let Y=x(U,B);return g<s[Y].width*.5+250||g>900?null:{x:U,y:-.2,z:B,ry:i.range(0,xn),col:16777215,v:1}});Lt.length&&nt.add(zn($y(),new me({vertexColors:!0,flatShading:!0,roughness:.6}),Lt));let ft=[],Tt=[];for(let U=0;U<2e4&&ft.length<3;U++){let B=I(),Y=b(),K=x(B,Y);if(g<s[K].width*.5+60)continue;let et=M(B,Y);et<55||ft.some(Mt=>Math.hypot(Mt.x-B,Mt.z-Y)<200)||ft.push({x:B,y:et,z:Y,ry:i.range(0,xn),speed:i.range(.9,1.5),phase:i.range(0,xn)})}let O=new Fn(.7,14,.22).translate(0,7,0),vt=new me({color:15659507,flatShading:!0,roughness:.6}),A=null;if(ft.length){nt.add(zn(new nn(.8,.35,30,6).translate(0,15,0),vt,ft));for(let U of ft)Tt.push(new ce().compose(new z(U.x,U.y+30,U.z),new En().setFromAxisAngle(Oy,U.ry),new z(1,1,1)));A=new Ui(O,vt,ft.length*3),A.castShadow=!0,nt.add(A)}function P(U){if(A){for(let B=0;B<ft.length;B++){let Y=U*ft[B].speed+ft[B].phase;for(let K=0;K<3;K++)rd.makeRotationZ(Y+K*xn/3),sd.multiplyMatrices(Tt[B],rd),A.setMatrixAt(B*3+K,sd)}A.instanceMatrix.needsUpdate=!0}}P(0);function N(U,B,Y){Et.position.set(Y.x+Z.x*200,Y.y+Z.y*200,Y.z+Z.z*200),Et.target.position.set(Y.x,Y.y,Y.z),W.position.set(Y.x,0,Y.z);for(let K=0;K<J;K++)_t.setY(K,.35*Math.sin(k[K]*.02+B*.8)+.25*Math.cos(at[K]*.017-B*.6));_t.needsUpdate=!0,P(B)}function X(){n.remove(nt),nt.traverse(U=>{if(U.geometry&&U.geometry.dispose(),U.material){let B=Array.isArray(U.material)?U.material:[U.material];for(let Y of B)Y.dispose()}}),Et.shadow.map&&Et.shadow.map.dispose(),nt.clear(),n.fog===Bt&&(n.fog=Jt??null),n.background===Ct&&(n.background=kt??null)}return n.add(nt),{group:nt,sun:Et,update:N,dispose:X,heightAt:M}}var Le=0,Ve=1,gi=2,ba=.32,Sa=-.7,dd=.7,wa=[0,-ba,-Sa],jy=[0,-ba,-dd],cd=.62,Qy=.35,Hi=Math.PI*2,yn=class{constructor(t){this.off=t||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(t){t!==this.slot&&(this.closeGroup(),this.slot=t)}closeGroup(){let t=this.pos.length/3;this.slot>=0&&t>this.gStart&&this.groups.push({start:this.gStart,count:t-this.gStart,materialIndex:this.slot}),this.gStart=t}tri(t,e,i,s){let r=this.off,o=t[0]+r[0],a=t[1]+r[1],c=t[2]+r[2],l=e[0]+r[0],h=e[1]+r[1],u=e[2]+r[2],d=i[0]+r[0],p=i[1]+r[1],g=i[2]+r[2],x=l-o,m=h-a,f=u-c,y=d-o,v=p-a,_=g-c,T=m*_-f*v,E=f*y-x*_,w=x*v-m*y,C=(o+l+d)/3-(s[0]+r[0]),M=(a+h+p)/3-(s[1]+r[1]),S=(c+u+g)/3-(s[2]+r[2]),L=this.pos;T*C+E*M+w*S>=0?L.push(o,a,c,l,h,u,d,p,g):L.push(o,a,c,d,p,g,l,h,u)}quad(t,e,i,s,r){this.tri(t,e,i,r),this.tri(t,i,s,r)}build(){this.closeGroup();let t=new _e;t.setAttribute("position",new de(this.pos,3)),t.computeVertexNormals();for(let e of this.groups)t.addGroup(e.start,e.count,e.materialIndex);return t}};function tM(n){let t=0,e=0,i=0;for(let r of n)t+=r[0],e+=r[1],i+=r[2];let s=n.length;return[t/s,e/s,i/s]}function eM(n,t){return[(n[0]+t[0])/2,(n[1]+t[1])/2,(n[2]+t[2])/2]}function ld(n,t,e,i){let s=t.length;for(let r=0;r<s;r++)n.tri(e,t[r],t[(r+1)%s],i)}function Vi(n,t,e,i,s){let r=typeof e=="function"?e:()=>e,o=t.length,a=t[0].length,c=t.map(tM);for(let l=0;l<o-1;l++){let h=t[l],u=t[l+1],d=eM(c[l],c[l+1]);for(let p=0;p<a;p++){let g=(p+1)%a;n.setSlot(r(l,p)),n.quad(h[p],h[g],u[g],u[p],d)}}n.setSlot(i),ld(n,t[0],c[0],c[1]),n.setSlot(s),ld(n,t[o-1],c[o-1],c[o-2])}function vn(n,t,e,i,s,r,o){let a=e[0]-t[0],c=e[1]-t[1],l=e[2]-t[2],h=Math.hypot(a,c,l)||1,u=[a/h,c/h,l/h],d=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],p=[u[1]*d[2]-u[2]*d[1],u[2]*d[0]-u[0]*d[2],u[0]*d[1]-u[1]*d[0]],g=Math.hypot(p[0],p[1],p[2]);p=[p[0]/g,p[1]/g,p[2]/g];let x=[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],m=(f,y)=>{let v=[];for(let _=0;_<r;_++){let T=Hi*_/r,E=Math.cos(T)*y,w=Math.sin(T)*y;v.push([f[0]+E*p[0]+w*x[0],f[1]+E*p[1]+w*x[1],f[2]+E*p[2]+w*x[2]])}return v};Vi(n,[m(t,i),m(e,s)],o,o,o)}function fs(n,t,e,i){n.setSlot(i);let s=(a,c,l)=>[t[0]+a*e[0],t[1]+c*e[1],t[2]+l*e[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],t),n.tri(r[a[0]],r[a[2]],r[a[3]],t)}var Ea=3,kr=4;function nM(n,t,e,i,s,r,o,a,c){return[[0,t,n],[o,e,n],[a,i,n],[c,s,n],[0,r,n],[-c,s,n],[-a,i,n],[-o,e,n]]}function iM(){let n=new yn(wa),e=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(i=>nM(...i));Vi(n,e,(i,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?i===7||i===8?Ve:Le:o?i>=9?Ea:Le:a?i>=2&&i<=5?Ea:i>=7&&i<=8?Ve:Le:i>=3&&i<=6?gi:Ve},Le,Le);for(let i of[-1,1])vn(n,[.11*i,.46,-.26],[.1*i,.32,-.7],.04,.03,5,kr),vn(n,[.14*i,.44,-.3],[.22*i,.42,-.32],.018,.018,4,Ve),vn(n,[.1*i,.95,.42],[.27*i,.93,.35],.02,.02,4,Ve);return vn(n,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,kr),vn(n,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,kr),vn(n,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,Ve),fs(n,[0,.685,-.74],[.06,.012,.16],Ve),n.build()}function sM(){let n=new yn(wa),t=(e,i,s,r)=>[[0,i,e],[r,s,e],[0,s-.02,e],[-r,s,e]];return Vi(n,[t(.76,.925,.91,.07),t(.58,1.06,.94,.12),t(.42,1.13,.97,.11)],Le,Le,Le),n.build()}function rM(){let n=new yn(wa);return fs(n,[0,.985,-1.085],[.04,.02,.014],Le),n.build()}function oM(){let n=new yn;return vn(n,[0,0,0],[0,0,-.45],.05,.004,6,Le),n.build()}function aM(){let n=new yn(wa);for(let t of[-1,1]){let e=[.062*t,.795,.905];n.setSlot(Le);let i=[[e[0]-.035,e[1]-.012,e[2]+.012],[e[0]+.035,e[1]+.004*t,e[2]-.02],[e[0]+.03,e[1]+.022,e[2]-.03],[e[0]-.03,e[1]+.02,e[2]-.004]];n.quad(i[0],i[1],i[2],i[3],[e[0],e[1],e[2]-.2])}return n.build()}function cM(){let n=new yn(jy);for(let i of[-1,1])vn(n,[.085*i,.32,.7],[.085*i,.56,.615],.032,.032,5,Ve),vn(n,[.085*i,.56,.615],[.085*i,.88,.5],.024,.024,5,gi),fs(n,[.1*i,.33,.74],[.012,.05,.035],kr);let t=.34,e=[];for(let i of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(i),r=.7+Math.sin(i),o=(a,c)=>[a,.32+c*Math.cos(i),.7+c*Math.sin(i)];e.push([o(-.075,t-.005),o(-.04,t+.03),o(.04,t+.03),o(.075,t-.005)])}return Vi(n,e,Le,Le,Le),n.build()}function hd(n,t){let e=new yn,i=14,s=(o,a)=>{let c=[];for(let l=0;l<i;l++){let h=Hi*l/i;c.push([o,a*Math.cos(h),a*Math.sin(h)])}return c};Vi(e,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*n,a)),Ve,Ve,Ve);for(let o of[-1,1]){let a=o*(.62*n+.004),c=[a,0,0],l=[0,0,0],h=10;for(let u=0;u<h;u++){let d=Hi*u/h,p=Hi*(u+1)/h;e.setSlot(u%2?Ve:gi),e.tri(c,[a,.215*Math.cos(d),.215*Math.sin(d)],[a,.215*Math.cos(p),.215*Math.sin(p)],l)}if(t){let u=o*(.62*n+.012);e.setSlot(kr);for(let d=0;d<h;d++){let p=Hi*d/h,g=Hi*(d+1)/h;e.quad([u,.09*Math.cos(p),.09*Math.sin(p)],[u,.16*Math.cos(p),.16*Math.sin(p)],[u,.16*Math.cos(g),.16*Math.sin(g)],[u,.09*Math.cos(g),.09*Math.sin(g)],l)}}}return e.build()}function lM(){let n=new yn,t=[0,.11,.015],e=[.125,.135,.155],i=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,c=Math.cos(a),l=[];for(let h=0;h<i;h++){let u=Hi*(h+.5)/i;l.push([t[0]+e[0]*c*Math.cos(u),t[1]+e[1]*Math.sin(a),t[2]+e[2]*c*Math.sin(u)])}r.push(l)}return Vi(n,r,(o,a)=>{let c=Hi*(a+1)/i;return Math.sin(c)>.45&&(o===1||o===2)?Ve:Math.abs(Math.cos(c))<.35?gi:Le},Ve,Le),n.build()}function zr(n,t,e,i){return[[t,n,0],[t*.55,n,e],[-t*.55,n,e],[-t,n,0],[-t*.55,n,-i],[t*.55,n,-i]]}function hM(){let n=new yn,t=[zr(-.08,.13,.09,.1),zr(.04,.145,.1,.1),zr(.22,.185,.11,.11),zr(.38,.205,.1,.1),zr(.45,.09,.06,.07)];return Vi(n,t,(e,i)=>e===0?gi:e===2&&(i===0||i===2||i===3||i===5)?Ea:Le,Ve,Ve),Vi(n,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],gi,gi,gi),n.build()}function ud(n){let t=new yn,e=[.09*n,-.09,.5];return vn(t,[0,0,0],e,.058,.048,5,Le),vn(t,e,[0,0,.93],.046,.038,5,Le),fs(t,[0,0,.97],[.042,.04,.05],Ve),fs(t,[0,.015,.02],[.052,.04,.05],Ea),t.build()}function fd(n){let t=new yn,e=[.11*n,-.19,.42],i=[.085*n,-.47,.05];return vn(t,[0,0,0],e,.082,.066,6,Le),vn(t,e,i,.062,.05,5,Le),fs(t,[e[0]+.035*n,e[1]-.02,e[2]+.02],[.025,.05,.045],gi),fs(t,[i[0],i[1]-.04,i[2]+.04],[.045,.05,.115],Ve),t.build()}var mh=null;function uM(){return mh||(mh={body:iM(),bubble:sM(),tail:rM(),flame:oM(),fork:cM(),headlight:aM(),wheelRear:hd(.1,!1),wheelFront:hd(.068,!0),helmet:lM(),torso:hM(),armR:ud(-1),armL:ud(1),legR:fd(-1),legL:fd(1)}),mh}var kn=(n,t,e)=>n<t?t:n>e?e:n,pd=n=>kn(n,0,1),us=n=>Number.isFinite(n)?n:0,Ma=n=>typeof n=="boolean"?n?1:0:pd(us(n));function Rn(n,t){return n.name=t,n}function un(n,t,e,i){let s=new ye(n,t);return s.name=e,s.castShadow=i,s.receiveShadow=!1,s}function md({color:n=14034984,accent:t=16761395,isPlayer:e=!1}={}){let i=uM(),s=W=>new me({flatShading:!0,side:tn,...W}),r=s({color:new Zt(n),metalness:.35,roughness:.3}),o=s({color:1382173,metalness:.2,roughness:.7}),a=s({color:new Zt(t),metalness:.45,roughness:.35}),c=s({color:15856108,metalness:.15,roughness:.45}),l=s({color:11120312,metalness:.9,roughness:.32}),h=[r,o,a,c,l],u=s({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),d=s({color:16777215,emissive:16774358,emissiveIntensity:2.4}),p=s({color:3342336,emissive:16718362,emissiveIntensity:.8}),g=s({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),x=Rn(new Me,"bike"),m=Rn(new Me,"leanPivot"),f=Rn(new Me,"pitchPivot");f.position.set(0,ba,Sa);let y=Rn(new Me,"rearWheel");y.add(un(i.wheelRear,h,"rearWheelMesh",!0));let v=Rn(new Me,"chassis"),_=un(i.body,h,"body",!0),T=un(i.bubble,u,"bubble",!1),E=un(i.tail,p,"tail",!1),w=un(i.headlight,d,"headlight",!1),C=un(i.flame,g,"flame",!1);C.position.set(.205,.215,-.26),C.rotation.x=-.42,C.scale.z=.02,C.visible=!1;let M=Rn(new Me,"hips");M.position.set(0,cd,Qy);let S=Rn(new Me,"torso"),L=Rn(new Me,"head");L.position.set(0,.45,.01),L.add(un(i.helmet,h,"helmet",!0)),S.add(un(i.torso,h,"torsoMesh",!0),L);let q=un(i.armR,h,"armR",!0),H=un(i.armL,h,"armL",!0),j=Rn(new Me,"legR");j.position.set(-.12,-.02,0),j.add(un(i.legR,h,"legRMesh",!0));let ct=Rn(new Me,"legL");ct.position.set(.12,-.02,0),ct.add(un(i.legL,h,"legLMesh",!0)),M.add(S,q,H,j,ct),v.add(_,T,E,w,C,M);let tt=Rn(new Me,"steerPivot");tt.position.set(0,0,dd-Sa);let mt=un(i.fork,h,"fork",!0),Q=Rn(new Me,"frontWheel");if(Q.add(un(i.wheelFront,h,"frontWheelMesh",!0)),tt.add(mt,Q),f.add(y,v,tt),m.add(f),x.add(m),e){let W=new Ko(16773590,60,60,.5,.6,2);W.name="headSpot",W.castShadow=!1,W.position.set(0,1,.9),W.target.position.set(0,.2,30),W.target.name="headSpotTarget",x.add(W,W.target)}let nt={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},wt=.2,It=.37,ht=.02,_t=[.25,.93-ba,.36-Sa],J=new z,k=new z,at=new z(0,0,1);function D(W,st){J.set(wt*st,It,ht).applyEuler(S.rotation),k.set(_t[0]*st-M.position.x,_t[1]-M.position.y,_t[2]-M.position.z);let pt=Math.cos(-M.rotation.z),gt=Math.sin(-M.rotation.z),Et=k.x*pt-k.y*gt,F=k.x*gt+k.y*pt;k.x=Et,k.y=F,W.position.copy(J),k.sub(J);let Jt=k.length()||1;W.scale.z=Jt,W.quaternion.setFromUnitVectors(at,k.multiplyScalar(1/Jt))}function Z(W,st){let pt=W||{},gt=Number.isFinite(st)?kn(st,0,.1):1/60,Et=1-Math.exp(-gt*14),F=1-Math.exp(-gt*5);nt.lean+=(kn(us(pt.lean),-1.5,1.5)-nt.lean)*Et,nt.steer+=(kn(us(pt.steer),-1,1)-nt.steer)*Et,nt.pitch+=(kn(us(pt.pitch),-.9,.9)-nt.pitch)*Et,nt.compress+=(kn(us(pt.compress),-1,1)-nt.compress)*Et,nt.sr+=(pd(us(pt.speedRatio))-nt.sr)*F,nt.brake+=(Ma(pt.braking)-nt.brake)*F,nt.air+=(Ma(pt.airborne)-nt.air)*F,nt.drift+=(Ma(pt.drift)-nt.drift)*F,nt.boost+=(Ma(pt.boost)-nt.boost)*F;let Jt=nt.lean,kt=(Number.isFinite(pt.speed)?pt.speed:nt.sr*80)*3.6;m.rotation.z=Jt,f.rotation.x=-nt.pitch,tt.rotation.y=-.45*nt.steer*kn(1-2*nt.sr,0,1),v.position.y=-.07*nt.compress;let Bt=kn((kt-20)/100,0,1),Ct=kn(Math.abs(Jt)*2.27,0,1),zt=Jt>=0?1:-1,Nt=Ct*(1-kn((kt-30)/30,0,1));M.position.x=-.17*Ct*zt,M.position.y=cd+.1*nt.air,M.rotation.z=-.2*Ct*zt,S.rotation.x=kn(.45+.55*Bt-.2*nt.brake-.25*nt.air+.1*nt.boost,.2,1.05),S.rotation.z=-.1*Ct*zt,L.rotation.x=-.35*Bt+.1*nt.air,L.rotation.y=-.35*Ct*zt,L.rotation.z=-.4*Jt;let I=.55*Ct+.3*Nt;j.rotation.y=zt>0?-I:0,ct.rotation.y=zt<0?I:0,D(q,-1),D(H,1),p.emissiveIntensity=.8+2.2*nt.brake,C.visible=nt.boost>.03,C.scale.z=.02+1.3*nt.boost,g.emissiveIntensity=1.5+2*nt.boost;let b=us(pt.wheelSpin);y.rotation.x=b,Q.rotation.x=b}return Z({},0),{group:x,update:Z}}var fM=Math.PI*2,Ue=6e3,er=2200,gd=60,_d=30,xd=60,dM=3,Hr=2e3,ds=90,xh=1.5,pM=40,vd=pM-xh,gh=120,mM={dust:{life:.8,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.18,s1:.7,a0:.5,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.6,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.4,s1:1.2,a0:.45,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.5,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.12,s1:.04,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.5,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.1,s1:.06,a0:.75,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.25,grav:-3,drag:3,spread:1.3,lift:[0,.8],s0:.3,s1:.08,a0:.7,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.6,grav:0,drag:4,spread:0,lift:[.4,1],s0:.3,s1:1,a0:.6,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},gM=new Zt(16777215),_M=new Zt(8386303);function sn(n,t){return n+(t-n)*Math.random()}function Ta(n,t,e){return n<t?t:n>e?e:n}function Gi(n,t=0){return Number.isFinite(n)?n:t}function xM(n){return Number.isFinite(n)?Ta(n,0,.1):0}function _h(n,t){return n-t*Math.floor(n/t+.5)}function vM(){let n=globalThis.innerHeight||900,t=Math.min(globalThis.devicePixelRatio||1,2);return n*t}var yM=`
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
}`,MM=`
varying vec3 vColor;
varying float vAlpha;
varying float vMode;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  if (vMode > 0.5) {
    if (abs(p.x) + abs(p.y) > 0.5) discard;
  } else {
    if (max(abs(p.x), abs(p.y)) > 0.5) discard;
  }
  gl_FragColor = vec4(vColor * vAlpha, vMode > 0.5 ? 0.0 : vAlpha);
}`,SM=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,bM=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function yd(n,t){let e=t||{},i=Gi(e.rain,0),s=Gi(e.wind,0),r=new Float32Array(Ue*3),o=new Float32Array(Ue*3),a=new Float32Array(Ue*3),c=new Float32Array(Ue*3),l=new Float32Array(Ue*3),h=new Float32Array(Ue),u=new Float32Array(Ue),d=new Float32Array(Ue),p=new Float32Array(Ue),g=new Float32Array(Ue),x=new Float32Array(Ue),m=new Float32Array(Ue),f=new Float32Array(Ue),y=new Float32Array(Ue),v=new Float32Array(Ue),_=new Float32Array(Ue),T=new Uint8Array(Ue),E=0,w=!1,C=new _e,M=new le(r,3).setUsage($n),S=new le(l,3).setUsage($n),L=new le(h,1).setUsage($n),q=new le(u,1).setUsage($n),H=new le(d,1).setUsage($n);C.setAttribute("position",M),C.setAttribute("aColor",S),C.setAttribute("aSize",L),C.setAttribute("aAlpha",q),C.setAttribute("aMode",H);let j=new Ae({uniforms:{uScale:{value:700}},vertexShader:yM,fragmentShader:MM,transparent:!0,depthWrite:!1,blending:Pl,blendSrc:Ll,blendDst:yr,blendEquation:ai}),ct=new Xs(C,j);ct.frustumCulled=!1,n.add(ct);function tt(ut,Lt,ft,Tt,O,vt,A,P=1){let N=mM[ut];if(!N||!Number.isFinite(Lt)||!Number.isFinite(ft)||!Number.isFinite(Tt))return;let X=Gi(O),U=Gi(vt),B=Gi(A),Y=Math.min(Ue,Math.max(0,Math.floor(Gi(P,1))));for(let K=0;K<Y;K++){let et=E;E=(E+1)%Ue;let Mt,Ft,Dt;if(N.ring){let Wt=(Y>1?K/Y:Math.random())*fM+Math.random()*.2,Qt=sn(3.5,5.5);Mt=Math.cos(Wt)*Qt+X*.3,Dt=Math.sin(Wt)*Qt+B*.3,Ft=sn(N.lift[0],N.lift[1])+U*.3}else Mt=X+sn(-N.spread,N.spread),Dt=B+sn(-N.spread,N.spread),Ft=U+sn(N.lift[0],N.lift[1]);let St=et*3;r[St]=Lt+sn(-.1,.1),r[St+1]=ft,r[St+2]=Tt+sn(-.1,.1),o[St]=Mt,o[St+1]=Ft,o[St+2]=Dt,p[et]=0,g[et]=N.life*sn(.85,1.15),x[et]=N.drag,m[et]=N.grav,f[et]=N.s0*sn(.85,1.2),y[et]=N.s1*sn(.85,1.2),v[et]=N.a0,_[et]=ft,T[et]=N.bounce?1:0,d[et]=N.add?1:0,a[St]=N.c0[0],a[St+1]=N.c0[1],a[St+2]=N.c0[2],c[St]=N.c1[0],c[St+1]=N.c1[1],c[St+2]=N.c1[2]}Y>0&&(w=!0)}function mt(ut){let Lt=!1;for(let ft=0;ft<Ue;ft++){if(g[ft]<=0)continue;if(Lt=!0,p[ft]+=ut,p[ft]>=g[ft]){g[ft]=0,u[ft]=0,h[ft]=0;continue}let Tt=ft*3,O=Math.max(0,1-x[ft]*ut),vt=o[Tt]*O,A=o[Tt+1]*O-m[ft]*ut,P=o[Tt+2]*O,N=r[Tt]+vt*ut,X=r[Tt+1]+A*ut,U=r[Tt+2]+P*ut;T[ft]&&X<_[ft]&&A<0&&(X=_[ft],A=-A*.35,vt*=.6,P*=.6,T[ft]=0),o[Tt]=vt,o[Tt+1]=A,o[Tt+2]=P,r[Tt]=N,r[Tt+1]=X,r[Tt+2]=U;let B=p[ft]/g[ft];h[ft]=f[ft]+(y[ft]-f[ft])*B,u[ft]=v[ft]*(1-B*B),l[Tt]=a[Tt]+(c[Tt]-a[Tt])*B,l[Tt+1]=a[Tt+1]+(c[Tt+1]-a[Tt+1])*B,l[Tt+2]=a[Tt+2]+(c[Tt+2]-a[Tt+2])*B}return Lt}let Q=null;if(i>0){let ut=new _e,Lt=new Float32Array(er*6),ft=new le(Lt,3).setUsage($n);ut.setAttribute("position",ft);let Tt=new Float32Array(er*3),O=new Float32Array(er),vt=new Float32Array(er);for(let N=0;N<er;N++)Tt[N*3]=(Math.random()-.5)*gd,Tt[N*3+1]=-12+Math.random()*_d,Tt[N*3+2]=(Math.random()-.5)*xd,O[N]=sn(22,30),vt[N]=sn(.8,1.2);let A=new Ws({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),P=new Tr(ut,A);P.frustumCulled=!1,n.add(P),Q={geo:ut,mat:A,lines:P,attr:ft,pa:Lt,head:Tt,fall:O,len:vt,windX:5.5*s,windZ:2*s}}function nt(ut,Lt,ft){let Tt=Q,O=Tt.pa,vt=Tt.head,A=Tt.windX,P=Tt.windZ,N=Lt.x,X=Lt.y+dM,U=Lt.z;for(let B=0;B<er;B++){let Y=B*3,K=N+_h(vt[Y]-N,gd),et=X+_h(vt[Y+1]-X,_d),Mt=U+_h(vt[Y+2]-U,xd),Ft=Tt.fall[B],Dt=A-ft.x,St=-Ft-ft.y,Wt=P-ft.z,Qt=.05*Tt.len[B],ie=B*6;O[ie]=K-Dt*Qt,O[ie+1]=et-St*Qt,O[ie+2]=Mt-Wt*Qt,O[ie+3]=K,O[ie+4]=et,O[ie+5]=Mt,vt[Y]=K+A*ut,vt[Y+1]=et-Ft*ut,vt[Y+2]=Mt+P*ut}Tt.attr.needsUpdate=!0}let wt=new Float32Array(Hr*4*3),It=new Float32Array(Hr*4),ht=new Uint16Array(Hr*6);for(let ut=0;ut<Hr;ut++){let Lt=ut*4;ht.set([Lt,Lt+1,Lt+2,Lt,Lt+2,Lt+3],ut*6)}let _t=new _e,J=new le(wt,3).setUsage($n),k=new le(It,1).setUsage($n);_t.setAttribute("position",J),_t.setAttribute("aAlpha",k),_t.setIndex(new le(ht,1));let at=new Ae({uniforms:{uColor:{value:new Zt(1315086)}},vertexShader:SM,fragmentShader:bM,transparent:!0,depthWrite:!1,side:tn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),D=new ye(_t,at);D.frustumCulled=!1,n.add(D);let Z=0,W=1/0,st=-1;function pt(ut,Lt,ft,Tt,O,vt,A=.3,P=.5){if(![ut,Lt,ft,Tt,O,vt,A,P].every(Number.isFinite))return;let N=Tt-ut,X=vt-ft,U=Math.hypot(N,X);if(U<1e-4)return;let B=A*.5,Y=-X/U*B,K=N/U*B,et=Ta(P,0,1),Mt=Lt+.03,Ft=O+.03,Dt=Z*4;Z=(Z+1)%Hr;let St=wt,Wt=Dt*3;St[Wt]=ut+Y,St[Wt+1]=Mt,St[Wt+2]=ft+K,St[Wt+3]=ut-Y,St[Wt+4]=Mt,St[Wt+5]=ft-K,St[Wt+6]=Tt-Y,St[Wt+7]=Ft,St[Wt+8]=vt-K,St[Wt+9]=Tt+Y,St[Wt+10]=Ft,St[Wt+11]=vt+K,It[Dt]=et,It[Dt+1]=et,It[Dt+2]=et,It[Dt+3]=et,Dt<W&&(W=Dt),Dt+3>st&&(st=Dt+3)}function gt(){if(st<0)return;let ut=W,Lt=st-W+1;J.clearUpdateRanges(),J.addUpdateRange(ut*3,Lt*3),J.needsUpdate=!0,k.clearUpdateRanges(),k.addUpdateRange(ut,Lt),k.needsUpdate=!0,W=1/0,st=-1}let Et=new Me;Et.matrixAutoUpdate=!1,n.add(Et);let F=new Float32Array(ds*6),Jt=new le(F,3).setUsage($n),kt=new _e;kt.setAttribute("position",Jt);let Bt=new Float32Array(ds),Ct=new Float32Array(ds),zt=new Float32Array(ds),Nt=new Float32Array(ds);for(let ut=0;ut<ds;ut++)Bt[ut]=sn(-1,1),Ct[ut]=sn(-1,1),zt[ut]=-xh-Math.random()*vd,Nt[ut]=sn(.5,1.2);let I=new Ws({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),b=new Tr(kt,I);b.frustumCulled=!1,b.visible=!1,Et.add(b);let V=0,lt=0,dt=0,ot=0;function bt(ut,Lt){dt+=(V-dt)*(1-Math.exp(-6*ut)),ot+=(lt-ot)*(1-Math.exp(-8*ut)),Lt.updateMatrixWorld(),Et.matrix.copy(Lt.matrixWorld),Et.matrixWorld.copy(Lt.matrixWorld);let ft=Math.floor(dt*ds);if(ft<=0){b.visible=!1;return}b.visible=!0,kt.setDrawRange(0,ft*2),I.color.copy(gM).lerp(_M,ot),I.opacity=.05+.22*dt;let Tt=(30+50*dt)*ut,O=1+7*dt,vt=F;for(let A=0;A<ft;A++){let P=zt[A]+Tt;P>-xh&&(P-=vd),zt[A]=P;let N=-P,X=Bt[A]*N*.9,U=Ct[A]*N*.5,B=O*Nt[A],Y=A*6;vt[Y]=X,vt[Y+1]=U,vt[Y+2]=P,vt[Y+3]=X,vt[Y+4]=U,vt[Y+5]=P-B}Jt.needsUpdate=!0}let Rt=new z,yt=new z,Ht=!1,xt=!1;function Pt(ut,Lt){if(xt)return;ut=xM(ut);let ft=Lt.position;Ht?ut>0&&(yt.subVectors(ft,Rt).divideScalar(ut),yt.lengthSq()>gh*gh&&yt.setLength(gh),Rt.copy(ft)):(Rt.copy(ft),yt.set(0,0,0),Ht=!0);let Tt=Gi(Lt.fov,60);j.uniforms.uScale.value=vM()/(2*Math.tan(Tt*Math.PI/360)),(mt(ut)||w)&&(M.needsUpdate=!0,S.needsUpdate=!0,L.needsUpdate=!0,q.needsUpdate=!0,H.needsUpdate=!0,w=!1),Q&&ut>0&&nt(ut,ft,yt),bt(ut,Lt),gt()}function Vt(ut,Lt){let ft=Ta(Gi(ut,0),0,1.5);V=Ta((ft-.7)/.3,0,1),lt=Lt?1:0}function Gt(){xt||(xt=!0,n.remove(ct,D,Et),Q&&n.remove(Q.lines),C.dispose(),j.dispose(),_t.dispose(),at.dispose(),kt.dispose(),I.dispose(),Q&&(Q.geo.dispose(),Q.mat.dispose()))}return{emit:tt,addSkid:pt,setSpeed:Vt,update:Pt,dispose:Gt}}var Aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},EM=new Gs(-1,1,1,-1,0,1),vh=class extends _e{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}},wM=new vh,Wi=class{constructor(t){this._mesh=new ye(wM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,EM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var nr=class extends Mn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ni.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Wi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vr=class extends Mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ra=class extends Mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ca=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Kt);this._width=i.width,this._height=i.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nr(Aa),this.copyPass.material.blending=Yn,this.clock=new Qo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vr!==void 0&&(o instanceof Vr?i=!0:o instanceof Ra&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ia=class extends Mn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Zt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Md={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ir=class n extends Mn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Kt(t.x,t.y):new Kt(256,256),this.clearColor=new Zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new en(r,o,{type:Bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new en(r,o,{type:Bn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Md;this.highPassUniforms=Ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Kt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Aa;this.copyUniforms=Ni.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:To,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Zt,this.oldClearAlpha=1,this.basic=new gn,this.fsQuad=new Wi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Kt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Kt(.5,.5)},direction:{value:new Kt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ir.BlurDirectionX=new Kt(1,0);ir.BlurDirectionY=new Kt(0,1);var Sd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pa=class extends Mn{constructor(){super();let t=Sd;this.uniforms=Ni.clone(t.uniforms),this.material=new Yo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ol&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bd=62,TM=74,Ed=86,AM=9,RM=20,wd=3.7,CM=1.45,IM=3,PM=4,LM=5,La=.6;function Xi(n,t,e){return n<t?t:n>e?e:n}function xe(n,t=0){return Number.isFinite(n)?n:t}function DM(n,t,e){return n+(t-n)*e}function sr(n,t){return 1-Math.exp(-n*t)}function UM(n){return Number.isFinite(n)?Xi(n,0,.1):0}function Td(n){let t=new z,e=new z,i=new z,s=new z,r={x:1,z:0},o=!1,a=0,c=0,l=0,h=bd,u=wd,d=0,p=0,g=0;function x(T,E){let w=xe(T.x),C=xe(T.y),M=xe(T.z),S=xe(T.heading)+xe(T.yaw),L=Math.sin(S),q=Math.cos(S),H=-q,j=L;r.x=H,r.z=j;let ct=T.airborne?1:0,tt=wd+.9*ct,mt=CM+.7*ct;u=tt;let Q=Xi(xe(T.slope),-.15,.15),wt=Xi(xe(T.lean),-1.5,1.5)*0;t.set(w-L*tt+H*wt,C+mt-Q*tt,M-q*tt+j*wt),t.y<C+La&&(t.y=C+La),e.set(w+L*7,C+1+Q*4-1.5*ct,M+q*8)}function m(T){return DM(bd,TM,T)}function f(T,E,w,C){n.position.set(i.x+r.x*E,Math.max(i.y+w,C),i.z+r.z*E),n.lookAt(s),n.rotateZ(T)}function y(T,E){if(T=UM(T),!o){v(E);return}a+=T;let w=Xi(xe(E.speedRatio),0,1);x(E,w);let C=xe(E.x)-d,M=xe(E.y)-p,S=xe(E.z)-g;C*C+M*M+S*S<400&&(i.x+=C,i.y+=M,i.z+=S,s.x+=C,s.y+=M,s.z+=S),d=xe(E.x),p=xe(E.y),g=xe(E.z),i.lerp(t,sr(AM,T));let L=i.x-xe(E.x),q=i.z-xe(E.z),H=Math.hypot(L,q);H>.001&&(i.x=xe(E.x)+L/H*u,i.z=xe(E.z)+q/H*u),s.lerp(e,sr(RM,T));let j=xe(E.y)+La;i.y<j&&(i.y=j),l*=Math.exp(-LM*T);let ct=w*w,tt=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,mt=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,Q=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,nt=l*.35+ct*.01,wt=tt*nt,It=mt*nt,ht=Q*(l*.03+ct*.002);c+=((E.boosting?1:0)-c)*sr(PM,T);let _t=m(w),J=_t+(Ed-_t)*c;h+=(J-h)*sr(IM,T),Math.abs(n.fov-h)>1e-4&&(n.fov=h,n.updateProjectionMatrix()),f(ht,wt,It,j)}function v(T){let E=Xi(xe(T.speedRatio),0,1);x(T,E),i.copy(t),s.copy(e),d=xe(T.x),p=xe(T.y),g=xe(T.z),o=!0,a=0,l=0,c=T.boosting?1:0,h=m(E)+(Ed-m(E))*c,n.fov=h,n.updateProjectionMatrix(),f(0,0,0,xe(T.y)+La)}function _(T){l=Xi(l+xe(T),0,1.5)}return{update:y,shake:_,snap:v}}var NM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,FM=`
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

  vec2 off = c * (0.004 + 0.012 * amt) * (0.5 + r);
  vec3 col;
  col.r = texture2D(tDiffuse, vUv + off).r;
  col.g = texture2D(tDiffuse, vUv).g;
  col.b = texture2D(tDiffuse, vUv - off).b;

  float blur = 0.018 * uSpeed + 0.02 * uBoost;
  vec3 acc = col;
  for (int i = 1; i <= 4; i++) {
    float f = float(i) / 4.0;
    acc += texture2D(tDiffuse, vUv - c * blur * f).rgb;
  }
  col = mix(col, acc / 5.0, smoothstep(0.0, 0.5, amt));

  float vig = smoothstep(0.25, 0.85, r * 1.3);
  col *= 1.0 - vig * 0.6;

  col += vec3(0.0, 0.03, 0.05) * uBoost;

  float g = hash(vUv * vec2(1920.0, 1080.0) + fract(uTime) * 97.0) - 0.5;
  col += g * 0.035;

  gl_FragColor = vec4(col, 1.0);
}`;function Ad(n,t,e,i){let r=xe((i||{}).bloom,.5),o=null,a=null,c=null,l=0,h=0,u=0,d=0,p=0,g=Math.min(globalThis.devicePixelRatio||1,2);try{o=new Ca(n),o.setPixelRatio(g),o.addPass(new Ia(t,e)),a=new ir(new Kt(256,256),r,.6,.82),o.addPass(a),c=new nr({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:NM,fragmentShader:FM}),o.addPass(c),o.addPass(new Pa)}catch(v){console.warn("Post-traitement indisponible, rendu direct :",v),o=null,a=null,c=null}function x(v,_){!Number.isFinite(v)||!Number.isFinite(_)||v<=0||_<=0||(g=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(g),n.setSize(v,_),o&&(o.setPixelRatio(g),o.setSize(v,_)))}function m(v,_){l=Xi(xe(v,0),0,1),h=_?1:0}function f(v){if(v=Number.isFinite(v)?Xi(v,0,.1):0,p+=v,u+=(l-u)*sr(8,v),d+=(h-d)*sr(8,v),c&&(c.uniforms.uSpeed.value=u,c.uniforms.uBoost.value=d,c.uniforms.uTime.value=p),o)try{o.render(v);return}catch(_){console.warn("\xC9chec du post-traitement, rendu direct :",_),o=null}n.render(t,e)}function y(){o&&o.dispose(),a&&a.dispose&&a.dispose(),c&&c.dispose&&c.dispose(),o=null}return{render:f,setSize:x,setSpeed:m,dispose:y}}var OM=Fi.maxSpeed*3.6,yh=20,BM=.85,zM=800,_i=360,kM=24,HM=3,Rd=(n,t,e)=>n<t?t:n>e?e:n,Cd=n=>(n<10?"0":"")+n,Id=()=>typeof performance<"u"?performance.now():Date.now();function Gr(n){if(n==null||!Number.isFinite(n))return"--:--.--";let t=Math.max(0,Math.floor(n*100+1e-6)),e=Math.floor(t/6e3),i=Math.floor(t/100)%60;return`${e}:${Cd(i)}.${Cd(t%100)}`}function VM(n){return typeof n=="number"?"#"+(n&16777215).toString(16).padStart(6,"0"):typeof n=="string"&&n?n:"#ffffff"}function Mh(n,t){n.classList.remove(t),n.offsetWidth,n.classList.add(t)}var GM=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${_i}" height="${_i}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;function Pd(n){let t=document.createElement("div");t.className="pr-hud pr-off",t.innerHTML=GM,n.appendChild(t);let e=ht=>t.querySelector(ht),i={pos:e(".pr-pos"),posCur:e(".pr-pos-cur"),posTot:e(".pr-pos-tot"),wrong:e(".pr-wrong"),lap:e(".pr-lap"),time:e(".pr-time"),best:e(".pr-best-v"),dias:e(".pr-dias"),mm:e(".pr-minimap"),speed:e(".pr-speed-num"),bar:e(".pr-bar"),count:e(".pr-count"),flash:e(".pr-flash")},s=[];for(let ht=0;ht<yh;ht++){let _t=document.createElement("span");_t.className="pr-seg",i.bar.appendChild(_t),s.push(_t)}let r=Object.create(null),o=(ht,_t,J)=>r[ht]===J?!1:(r[ht]=J,_t.textContent=J,!0),a=!1,c=-1,l=!1,h=!1,u=!1,d=!1,p=0,g=0,x=[],m="";function f(ht){for(;x.length<ht;){let _t=document.createElement("div");_t.className="pr-dia";let J=document.createElement("div");J.className="pr-dia-fill",_t.appendChild(J),i.dias.appendChild(_t),x.push({d:_t,f:J,t:""})}}function y(ht,_t){let J=Math.max(0,Math.floor(ht||0)),k=_t>0,at=k?Rd(_t/Fi.boostDuration,0,1):0,D=Math.max(HM,J+(k?1:0));f(D);let Z=J+"|"+(k?1:0)+"|"+at.toFixed(2)+"|"+D;if(Z!==m){m=Z;for(let W=0;W<x.length;W++){let st=x[W],pt=0,gt=!1;W<J?pt=1:k&&W===J&&(pt=at,gt=!0),st.d.hidden=W>=D,st.d.classList.toggle("pr-use",gt);let Et="scaleY("+pt.toFixed(3)+")";st.t!==Et&&(st.t=Et,st.f.style.transform=Et)}}}function v(ht){let _t=Math.round(Rd(ht,0,1)*yh),J=ht>BM;if(!(_t===c&&J===l)){c=_t,l=J;for(let k=0;k<yh;k++)s[k].classList.toggle("pr-on",k<_t);i.bar.classList.toggle("pr-hot",J)}}function _(ht,_t){let J=u,k=o("cd",i.count,ht);i.count.classList.toggle("pr-go",_t),J||(i.count.classList.add("pr-vis"),u=!0),(!J||k)&&Mh(i.count,"pr-kick")}function T(){u&&(u=!1,i.count.classList.remove("pr-vis"),r.cd="")}function E(ht){if(ht==null){d=!1,p=0,T();return}if(ht>0){d=!1,_(String(Math.ceil(ht)),!1);return}d||(d=!0,p=Id()),Id()-p<zM?_("GO !",!0):T()}let w=null;try{w=i.mm.getContext("2d")}catch{w=null}let C=null,M=null,S=1,L=0,q=0,H=new Map;function j(ht){let _t=H.get(ht);return _t===void 0&&(_t=VM(ht),H.set(ht,_t)),_t}function ct(ht){if(M=null,C=null,!ht||!ht.pts||!ht.pts.length)return;let _t=ht.pts,J=1/0,k=-1/0,at=1/0,D=-1/0;for(let Et=0;Et<_t.length;Et++){let F=_t[Et];F.x<J&&(J=F.x),F.x>k&&(k=F.x),F.z<at&&(at=F.z),F.z>D&&(D=F.z)}let Z=k-J||1,W=D-at||1,st=(_i-2*kM)/Math.max(Z,W);S=st,L=(_i-Z*st)/2-J*st,q=(_i-W*st)/2-at*st,M=ht;let pt=document.createElement("canvas");pt.width=_i,pt.height=_i;let gt=pt.getContext("2d");if(gt){gt.lineJoin="round",gt.lineCap="round",gt.beginPath();for(let Bt=0;Bt<_t.length;Bt++){let Ct=_t[Bt].x*st+L,zt=_t[Bt].z*st+q;Bt===0?gt.moveTo(Ct,zt):gt.lineTo(Ct,zt)}gt.closePath(),gt.strokeStyle="rgba(11, 14, 31, 0.9)",gt.lineWidth=10,gt.stroke(),gt.strokeStyle="rgba(230, 240, 255, 0.85)",gt.lineWidth=4,gt.stroke();let Et=_t[0],F=(Et.width||14)/2*st,Jt=Et.x*st+L,kt=Et.z*st+q;gt.beginPath(),gt.moveTo(Jt-Et.rx*F,kt-Et.rz*F),gt.lineTo(Jt+Et.rx*F,kt+Et.rz*F),gt.strokeStyle="#ffd23f",gt.lineWidth=4,gt.stroke()}C=pt}function tt(ht){if(!w||(w.clearRect(0,0,_i,_i),C&&w.drawImage(C,0,0),!M||!ht))return;let _t=M.pts,J=_t.length;if(!J)return;let k=M.length||J*M.step,at=M.step||k/J;for(let D=0;D<2;D++)for(let Z=0;Z<ht.length;Z++){let W=ht[Z],st=!!W.isPlayer;if(st!==(D===1))continue;let pt=(W.s||0)%k;pt<0&&(pt+=k);let gt=Math.floor(pt/at);gt>=J&&(gt=J-1),gt<0&&(gt=0);let Et=_t[gt],F=W.d||0,Jt=(Et.x+Et.rx*F)*S+L,kt=(Et.z+Et.rz*F)*S+q;w.beginPath(),w.arc(Jt,kt,st?10:6.5,0,Math.PI*2),w.fillStyle=j(W.color),w.fill(),w.lineWidth=st?3.5:2,w.strokeStyle=st?"#ffffff":"rgba(11, 14, 31, 0.95)",w.stroke()}}function mt(ht,_t=1100){i.flash.textContent=String(ht),i.flash.classList.add("pr-vis"),Mh(i.flash,"pr-kick"),clearTimeout(g),g=setTimeout(()=>i.flash.classList.remove("pr-vis"),_t)}function Q(ht){if(ht){if(ht.speedKmh!=null&&(o("spd",i.speed,String(Math.max(0,Math.round(ht.speedKmh)))),v(ht.speedKmh/OM)),ht.position!=null||ht.total!=null){let _t=ht.position!=null?String(ht.position):"-",J=ht.total!=null?String(ht.total):"-";o("posc",i.posCur,_t)&&a&&Mh(i.pos,"pr-pop"),o("post",i.posTot,J)}if(ht.lap!=null&&o("lap",i.lap,"Tour "+ht.lap+(ht.laps!=null?"/"+ht.laps:"")),ht.time!=null&&o("time",i.time,Gr(ht.time)),ht.bestLap!==void 0&&o("best",i.best,Gr(ht.bestLap)),ht.wrongWay!==void 0){let _t=!!ht.wrongWay;_t!==h&&(h=_t,i.wrong.classList.toggle("pr-vis",_t))}(ht.boostCharges!=null||ht.boostT!=null)&&y(ht.boostCharges,ht.boostT||0),ht.countdown!==void 0&&E(ht.countdown)}}function nt(){a=!0,t.classList.remove("pr-off")}function wt(){a=!1,t.classList.add("pr-off")}function It(){clearTimeout(g),H.clear(),t.remove()}return{show:nt,hide:wt,update:Q,setTrack:ct,updateMinimap:tt,flash:mt,dispose:It}}var Ld="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Dd=0;function Sh(){Dd++;let n=wn((Date.now()^Math.imul(Dd,2654435761))>>>0),t="RUSH-";for(let e=0;e<4;e++)t+=Ld[n.int(0,Ld.length-1)];return t}var we=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Ud(n){return n?typeof n=="string"?Oi[n]?.name||n:n.name||Oi[n.id]?.name||"":""}function WM(n){return n&&typeof n=="object"?n:ls.find(t=>t.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function Nd(n){let t=new Map;for(let i of n||[]){let s=WM(i),r=t.get(s.id);r?r.n++:t.set(s.id,{info:s,n:1})}if(!t.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let e="";for(let{info:i,n:s}of t.values())e+=`<span class="pr-own">${we(i.icon)} ${we(i.name)}${s>1?` \xD7${s}`:""}</span>`;return e}function bh(n){return(n||[]).map((t,e)=>`<li class="pr-srow${t.isPlayer?" pr-me":""}" style="--i:${e}"><span class="pr-rk">${e+1}</span><span class="pr-rn">${we(t.name)}</span><span class="pr-rp">${t.points??0}<small> pts</small></span></li>`).join("")}function Fd(n){let t=document.createElement("div");t.className="pr-menu pr-off",n.appendChild(t);let e=null,i=null;function s(x){try{e&&typeof e.play=="function"&&e.play(x)}catch{}}function r(x,m){let f=i;if(!f||!f.items.length)return;let y=f.items.length,v=(x%y+y)%y,_=v!==f.index;f.index=v,f.focused=!0;for(let T=0;T<y;T++)f.items[T].classList.toggle("pr-sel",T===v);try{f.items[v].focus({preventScroll:!0})}catch{}_&&m&&s("select")}function o(x){let m=i;m&&(i=null,t.innerHTML="",t.classList.add("pr-off"),s("confirm"),m.resolve(x))}function a(x){return i=null,t.innerHTML=x.html,t.classList.remove("pr-off"),new Promise(m=>{i={items:Array.from(t.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:x.actions||{},resolve:m},x.onMount&&x.onMount(t,o),r(x.initial||0,!1)})}t.addEventListener("click",x=>{let m=i;if(!m||!(x.target instanceof Element))return;let f=x.target.closest("[data-act]");if(!f||!t.contains(f)||f.disabled)return;let y=m.items.indexOf(f);y>=0&&y!==m.index&&r(y,!1);let v=m.actions[f.dataset.act];v&&v(f,o)}),t.addEventListener("mouseover",x=>{let m=i;if(!m||!(x.target instanceof Element))return;let f=x.target.closest("[data-nav]");if(!f)return;let y=m.items.indexOf(f);y>=0&&y!==m.index&&r(y,!0)}),window.addEventListener("keydown",x=>{let m=i;if(!m)return;let f=x.target,y=!!f&&f.tagName==="INPUT",v=x.key||"",_=v.toLowerCase();if(v==="ArrowUp"||!y&&(v==="ArrowLeft"||_==="z"||_==="q")){x.preventDefault(),r(m.index-1,!0);return}if(v==="ArrowDown"||!y&&(v==="ArrowRight"||_==="s"||_==="d")){x.preventDefault(),r(m.index+1,!0);return}if(y){if(v==="Enter"){x.preventDefault();let T=t.querySelector("[data-main]");T&&T.click()}return}if(v.length===1){let T=m.items.find(E=>E.dataset.key===v);T&&(x.preventDefault(),T.click())}});function c({dailySeed:x,meta:m}={}){let f=m||{},y=String(x||"RUSH-DAILY").toUpperCase(),v=Sh();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${we(v)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${we(y)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${f.runs??0}</b><span>runs</span></div>
    <div><b>${f.wins??0}</b><span>victoires</span></div>
    <div><b>${f.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:_=>{let T=_.closest(".pr-screen").querySelector("[data-seed]");T&&(T.value=Sh())},launch:(_,T)=>{let E=_.closest(".pr-screen").querySelector("[data-seed]"),w=(E?E.value:"").trim().toUpperCase();w||(w=Sh()),T({seed:w})},daily:(_,T)=>T({seed:y})}})}function l({stage:x={},index:m=1,total:f=1,standings:y=[],weather:v}={}){let _=Ud(v)||Ud(x.weather),T=x.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">\xC9tape ${we(m)}/${we(f)}</div>
    <h2 class="pr-h2">${we(x.name)}</h2>
    <p class="pr-sub">${we(x.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${we(_)}</dd></div>
      <div><dt>Tours</dt><dd>${we(T)} ${T>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${we(x.trackSeed)}</dd></div>
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${bh(y)}</ol>
  </div></div>
</section>`,actions:{go:(E,w)=>w(void 0)}})}function h({results:x=[],standings:m=[],stage:f={}}={}){let v=[...x].sort((_,T)=>(_.position??99)-(T.position??99)).map((_,T)=>{let E=ia[(_.position??0)-1]??0;return`<tr class="pr-tr${_.isPlayer?" pr-me":""}" style="--i:${T}"><td class="pr-c-pos">${we(_.position??"")}</td><td class="pr-c-name">${we(_.name)}</td><td class="pr-c-tm">${_.time==null?"Abandon":Gr(_.time)}</td><td class="pr-c-best">${_.bestLap==null?"\u2014":Gr(_.bestLap)}</td><td class="pr-c-pts">${E>0?"+"+E:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${we(f.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${bh(m)}</ol>
  </div></div>
</section>`,actions:{next:(_,T)=>T(void 0)}})}function u({choices:x=[],index:m=1,total:f=1,owned:y=[]}={}){let v=x.map((_,T)=>`<button type="button" class="pr-card pr-slide" style="--i:${T}" data-nav data-key="${T+1}" data-act="pick" data-id="${we(_.id)}"><span class="pr-card-in"><span class="pr-card-key">${T+1}</span><span class="pr-card-ico" aria-hidden="true">${we(_.icon)}</span><span class="pr-card-name">${we(_.name)}</span><span class="pr-card-tag">${we(_.tagline)}</span><span class="pr-card-pro">\u25B2 ${we(_.pro)}</span><span class="pr-card-con">\u25BC ${we(_.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${we(m)}/${we(f)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Nd(y)}</div>
</section>`,actions:{pick:(_,T)=>T(_.dataset.id)}})}function d({standings:x=[],playerPosition:m,run:f={},meta:y}={}){let v=y||{},_=m??x.findIndex(w=>w.isPlayer)+1,T=_===1,E=T?"Champion !":`${we(_)}e au championnat`;return a({initial:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${T?" pr-gold":""}">${E}</div>
    <ol class="pr-slist pr-slist-big">${bh(x)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Nd(f.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${we(f.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>
    <p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">Nouveau run</button>
  </div></div>
</section>`,actions:{copy:w=>{let C="Copier la seed",M;try{M=navigator.clipboard.writeText(String(f.seed??""))}catch(L){M=Promise.reject(L)}let S=L=>{w.textContent=L,setTimeout(()=>{w.isConnected&&(w.textContent=C)},1500)};M.then(()=>S("Copi\xE9e !"),()=>S("Copie impossible"))},again:(w,C)=>C(void 0)}})}function p(x){e=x||null}function g(){i=null,t.innerHTML="",t.classList.add("pr-off")}return{showTitle:c,showStageIntro:l,showResults:h,showUpgradeChoice:u,showRunEnd:d,hideAll:g,setAudio:p}}var Od=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Bd=.6,XM=.3,Eh=6,ps=55,qM=.1,YM=25,zd=60/128/4,ZM=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],rr=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,kd=n=>440*Math.pow(2,(n-69)/12);function $M(n){let e=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;e[i]=(1+n)*s/(1+n*Math.abs(s))}return e}function Hd(){let n=null,t=!1,e=null,i=null,s=null,r=null,o=null,a=null,c=null,l=!1,h=!1,u=null,d=0,p=0,g=-1,x=0,m=0,f=0;function y(D){let Z=Math.round(2*D),W=Math.round(.1*D),st=new Float32Array(Z+W),pt=0,gt=0,Et=0,F=0,Jt=0,kt=0,Bt=0;for(let b=0;b<Z+W;b++){let V=Math.random()*2-1;pt=.99886*pt+V*.0555179,gt=.99332*gt+V*.0750759,Et=.969*Et+V*.153852,F=.8665*F+V*.3104856,Jt=.55*Jt+V*.5329522,kt=-.7616*kt-V*.016898,st[b]=(pt+gt+Et+F+Jt+kt+Bt+V*.5362)*.11,Bt=V*.115926}let Ct=n.createBuffer(1,Z,D),zt=Ct.getChannelData(0),Nt=0;for(let b=0;b<Z;b++){let V=b<W?st[b]*(b/W)+st[Z+b]*(1-b/W):st[b];zt[b]=V;let lt=Math.abs(V);lt>Nt&&(Nt=lt)}let I=Nt>0?1/Nt:1;for(let b=0;b<Z;b++)zt[b]*=I;return Ct}function v(D){let Z=n.createBufferSource();return Z.buffer=i,Z.loop=!0,Z.connect(D),Z.start(0,Math.random()*1.5),Z}function _(D){let Z=n.createGain();return Z.gain.value=D,Z}function T(D,Z,W){let st=n.createBiquadFilter();return st.type=D,st.frequency.value=Z,st.Q.value=W,st}function E(){i=y(n.sampleRate),e=_(l?0:Bd);let D=n.createDynamicsCompressor();D.threshold.value=-16,D.knee.value=12,D.ratio.value=4,D.attack.value=.005,D.release.value=.2,e.connect(D),D.connect(n.destination);let Z=n.createOscillator();Z.type="sawtooth",Z.frequency.value=ps,Z.detune.value=-6;let W=n.createOscillator();W.type="sawtooth",W.frequency.value=ps,W.detune.value=6;let st=n.createOscillator();st.type="square",st.frequency.value=ps/2;let pt=_(1);Z.connect(_(.28)).connect(pt),W.connect(_(.28)).connect(pt),st.connect(_(.22)).connect(pt);let gt=T("bandpass",ps*4,1.2),Et=_(.04);v(gt),gt.connect(Et).connect(pt);let F=n.createWaveShaper();F.curve=$M(4),F.oversample="2x",pt.connect(F);let Jt=T("lowpass",300,1.3);F.connect(Jt);let kt=_(0);Jt.connect(kt).connect(e),Z.start(),W.start(),st.start(),s={osc1:Z,osc2:W,osc3:st,nBp:gt,nGain:Et,lp:Jt,gain:kt};let Bt=T("bandpass",300,.7),Ct=_(0);v(Bt),Bt.connect(Ct).connect(e),r={filter:Bt,gain:Ct};let zt=T("bandpass",1100,4),Nt=_(3),I=_(0);v(zt),zt.connect(Nt).connect(I).connect(e),o={filter:zt,gain:I};let b=T("highpass",900,.5),V=_(3),lt=_(0);v(b),b.connect(V).connect(lt).connect(e),a={gain:lt},c=_(0),c.connect(e),t=!0}function w(D,Z,W){let st=n.currentTime;D.cancelScheduledValues(st),D.setTargetAtTime(Z,st,W)}function C(D){let Z=D.t0,W=D.dur,st=n.createOscillator();st.type=D.type||"sine",st.frequency.setValueAtTime(D.f0,Z),D.f1&&st.frequency.exponentialRampToValueAtTime(D.f1,Z+W);let pt=n.createGain();pt.gain.setValueAtTime(1e-4,Z),pt.gain.linearRampToValueAtTime(D.vol,Z+(D.attack||.004)),pt.gain.exponentialRampToValueAtTime(1e-4,Z+W);let gt=st;if(D.lp){let Et=T("lowpass",D.lp,.7);st.connect(Et),gt=Et}gt.connect(pt),pt.connect(e),st.start(Z),st.stop(Z+W+.02)}function M(D){let Z=D.t0,W=D.dur,st=n.createBufferSource();st.buffer=i;let pt=T(D.type,D.f0,D.q||1);D.f1&&pt.frequency.exponentialRampToValueAtTime(D.f1,Z+W),pt.frequency.setValueAtTime(D.f0,Z);let gt=n.createGain();gt.gain.setValueAtTime(1e-4,Z),gt.gain.linearRampToValueAtTime(D.vol,Z+.004),gt.gain.exponentialRampToValueAtTime(1e-4,Z+W),st.connect(pt),pt.connect(gt),gt.connect(e),st.start(Z,Math.random()*1.5,W+.02)}function S(D,Z){let W=n.createBufferSource();W.buffer=i;let st=T("bandpass",700+Math.random()*900,1.2),pt=n.createGain();pt.gain.setValueAtTime(0,D),pt.gain.linearRampToValueAtTime(Z,D+.003),pt.gain.linearRampToValueAtTime(0,D+.03),W.connect(st),st.connect(pt),pt.connect(e),W.start(D,Math.random()*1.5,.05)}let L={beep(D){C({type:"square",f0:440,t0:D,dur:.12,vol:.12,lp:2400})},go(D){C({type:"sawtooth",f0:880,t0:D,dur:.4,vol:.12,lp:3e3}),C({type:"sine",f0:1320,t0:D,dur:.4,vol:.06}),C({type:"sine",f0:1760,t0:D+.02,dur:.25,vol:.04}),M({t0:D,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(D){M({t0:D,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),C({type:"sawtooth",f0:150,f1:600,t0:D,dur:.6,vol:.1,lp:1500,attack:.02})},jump(D){M({t0:D,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(D){C({type:"sine",f0:90,f1:50,t0:D,dur:.2,vol:.6,attack:.002}),M({t0:D,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(D){M({t0:D,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let Z=340,W=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[st,pt,gt]of W)C({type:"sine",f0:Z*st,t0:D,dur:gt,vol:pt,attack:.001})},select(D){C({type:"sine",f0:2400,t0:D,dur:.03,vol:.15,attack:.002})},confirm(D){C({type:"triangle",f0:660,t0:D,dur:.12,vol:.2}),C({type:"triangle",f0:990,t0:D+.09,dur:.18,vol:.2})},win(D){[523,659,784,1047,1319].forEach((W,st)=>{let pt=st<4?.13:.5,gt=D+st*.11;C({type:"square",f0:W,t0:gt,dur:pt,vol:.1,lp:2500}),C({type:"triangle",f0:W,t0:gt,dur:pt,vol:.12})})},lose(D){[392,330,262].forEach((Z,W)=>{C({type:"triangle",f0:Z,t0:D+W*.22,dur:.3,vol:.25,attack:.01})})},pad(D){C({type:"sawtooth",f0:300,f1:1500,t0:D,dur:.15,vol:.12,lp:4e3})},lap(D){C({type:"sine",f0:1e3,t0:D,dur:.08,vol:.2}),C({type:"sine",f0:1e3,t0:D+.15,dur:.08,vol:.2})}};function q(D){let Z=n.createOscillator();Z.type="sine",Z.frequency.setValueAtTime(150,D),Z.frequency.exponentialRampToValueAtTime(45,D+.12);let W=n.createGain();W.gain.setValueAtTime(.5,D),W.gain.exponentialRampToValueAtTime(.001,D+.3),Z.connect(W),W.connect(c),Z.start(D),Z.stop(D+.32)}function H(D,Z){let W=n.createBufferSource();W.buffer=i;let st=T("highpass",7e3,.7),pt=n.createGain();pt.gain.setValueAtTime(Z,D),pt.gain.exponentialRampToValueAtTime(.001,D+.04),W.connect(st),st.connect(pt),pt.connect(c),W.start(D,Math.random()*1.5,.05)}function j(D,Z,W){let st=n.createOscillator();st.type="sawtooth",st.frequency.value=Z;let pt=T("lowpass",1e3,6);pt.frequency.setValueAtTime(1e3,D),pt.frequency.exponentialRampToValueAtTime(180,D+W);let gt=n.createGain();gt.gain.setValueAtTime(1e-4,D),gt.gain.linearRampToValueAtTime(.16,D+.01),gt.gain.exponentialRampToValueAtTime(1e-4,D+W),st.connect(pt),pt.connect(gt),gt.connect(c),st.start(D),st.stop(D+W+.02)}function ct(D,Z){let W=n.createOscillator();W.type="triangle",W.frequency.value=Z;let st=n.createGain();st.gain.setValueAtTime(1e-4,D),st.gain.linearRampToValueAtTime(.035,D+.005),st.gain.exponentialRampToValueAtTime(1e-4,D+.11),W.connect(st),st.connect(c),W.start(D),W.stop(D+.13)}function tt(D,Z){let W=D&15,st=ZM[D>>4&3];if(W%4===0&&q(Z),W%2===1&&H(Z,W%4===2?.1:.05),W%2===0){let pt=W===6||W===14?12:0;j(Z,kd(st.root+pt),zd*1.8);let gt=[0,st.iv[0],st.iv[1],12];ct(Z,kd(st.root+24+gt[W>>1&3]))}}function mt(){if(!t||!h)return;let D=n.currentTime;d<D&&(d=D+.02);let Z=D+qM;for(;d<Z;)tt(p,d),d+=zd,p++}function Q(){if(!t){if(!Od)return;try{n=new Od,E()}catch{n=null,t=!1;return}}if(n.state==="suspended")try{let D=n.resume();D&&D.catch&&D.catch(()=>{})}catch{}}function nt(D,Z){if(!t)return;D=rr(D),Z=rr(Z);let W=n.currentTime,st=D*Eh,pt=Math.min(Eh-1,Math.floor(st)),Et=.45+.55*Math.min(1,st-pt),F=rr(D/.08),Jt=ps+(ps*Math.pow(Eh,Et)-ps)*F,kt=.5*D+.5*Z,Bt=260+3200*Math.pow(kt,1.3),Ct=.07+.2*D*(.35+.65*Z)+.03*Z;if(w(s.osc1.frequency,Jt,.04),w(s.osc2.frequency,Jt,.04),w(s.osc3.frequency,Jt*.5,.04),w(s.nBp.frequency,Jt*4,.05),w(s.nGain.gain,.04+.22*Z,.05),w(s.lp.frequency,Bt,.05),g!==-1&&pt!==g){let zt=s.gain.gain;zt.cancelScheduledValues(W),zt.setTargetAtTime(Ct*.35,W,.004),zt.setTargetAtTime(Ct,W+.06,.03),x=W+.12}if(g=pt,W>=x&&w(s.gain.gain,Ct,.05),Z>=m)m=Z;else if(m-Z>.3){if(D>.6&&W>=f){let zt=.12+.2*D;for(let Nt=0;Nt<3;Nt++)S(W+Nt*.05+Math.random()*.02,zt*(1-Nt*.2));f=W+.4}m=Z}}function wt(D){if(!t)return;let Z=rr(D),W=Z*Z;w(r.filter.frequency,250+1600*W,.2),w(r.gain.gain,.03+.35*W,.15)}function It(D){if(!t)return;let Z=rr(D);w(o.filter.frequency,900+500*Z,.05),w(o.gain.gain,Z,.03)}function ht(D){t&&w(a.gain.gain,rr(D)*.25,.1)}function _t(D){t&&Object.prototype.hasOwnProperty.call(L,D)&&L[D](n.currentTime+.01)}function J(D){l=!!D,t&&w(e.gain,l?0:Bd,.015)}function k(){t&&(h||(h=!0,p=0,d=n.currentTime+.05),w(c.gain,XM,.05),u||(u=setInterval(mt,YM)),mt())}function at(){h=!1,u&&(clearInterval(u),u=null),t&&w(c.gain,0,.05)}return{resume:Q,setEngine:nt,setWind:wt,setSkid:It,setRain:ht,play:_t,setMuted:J,startMusic:k,stopMusic:at}}var wh=1/120,Wr=new URLSearchParams(location.search),JM=document.getElementById("game"),yi=new ko({canvas:JM,antialias:!0,powerPreference:"high-performance"});yi.setPixelRatio(Math.min(window.devicePixelRatio,2));yi.shadowMap.enabled=!0;yi.shadowMap.type=Il;yi.toneMapping=Cr;yi.toneMappingExposure=1.05;yi.outputColorSpace=qe;var vi=new Vo,In=new Ye(70,1,.3,6e3);vi.add(In);var qi=Td(In),Yd=document.getElementById("ui"),Hn=Pd(Yd),xi=Fd(Yd),Ie=Hd();xi.setAudio?.(Ie);var Na=new Set,Ge={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var KM=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{n.target instanceof HTMLInputElement||(Na.add(n.code),Ke==="race"&&KM.includes(n.code)&&n.preventDefault(),n.code==="KeyM"&&(Th=!Th,Ie.setMuted(Th)),(n.code==="KeyP"||n.code==="Escape")&&Ke==="race"&&(Rh=!Rh))});addEventListener("keyup",n=>Na.delete(n.code));addEventListener("blur",()=>Na.clear());addEventListener("pointerdown",()=>Ie.resume(),{once:!1});var Th=!1,Rh=!1;function jM(n){let t=(...s)=>s.some(r=>Na.has(r));Ge.throttle=t("ArrowUp","KeyW")?1:0,Ge.brake=t("ArrowDown","KeyS")?1:0;let e=(t("ArrowRight","KeyD")?1:0)-(t("ArrowLeft","KeyA")?1:0);Ge.steer=e,Ge.boost=t("Space"),Ge.drift=t("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(Ge.steer=s),Ge.throttle=Math.max(Ge.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),Ge.brake=Math.max(Ge.brake,i.buttons[6]?.value||0),Ge.boost=Ge.boost||!!i.buttons[2]?.pressed,Ge.drift=Ge.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return Ge}var se=null,Ke="boot",Ch=0,Ih=0,Ph=0,Xr=99;function QM(){if(se){for(let n of se.bikes)vi.remove(n.model.group);vi.remove(se.road.group),se.road.dispose?.(),se.env.dispose?.(),se.env.group?.parent&&se.env.group.parent.remove(se.env.group),se.fx.dispose?.(),se.post.dispose?.(),se=null}}function Zd({trackSeed:n,weatherId:t,laps:e,riders:i,autopilot:s}){QM();let r=wn(n),o=Rf(n),a=Oi[t]||Oi.sunset,c=ad(vi,o,a,r.fork("env")),l=jf(o,a,r.fork("road"));vi.add(l.group);let h=yd(vi,a),u=Ad(yi,vi,In,a),d=kf({track:o,laps:e,env:a,rng:r.fork("race"),riders:i}),p=d.riders.map(x=>{let m=md({color:x.color,accent:x.accent,isPlayer:!!x.isPlayer&&!!a.night});return m.group.rotation.order="YXZ",vi.add(m.group),{rider:x,model:m,pose:{},prev:new z,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),g=s?ca({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},r.fork("auto")):null;return se={track:o,weather:a,env:c,road:l,fx:h,post:u,race:d,bikes:p,autoAI:g,playerBike:p.find(x=>x.rider.isPlayer)||p[0]},Hn.setTrack(o),Qd(),Jd(.016),qi.snap(Lh()),Ih=d.player?.position||i.length,Ph=1,Xr=99,window.__game={stage:se,renderer:yi,scene:vi,camera:In,RL:fh},se}var jn={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Lh(){let n=se.playerBike,t=n.rider.state;return jn.x=n.w.x,jn.y=n.w.y,jn.z=n.w.z,jn.heading=n.w.heading,jn.yaw=-$d(t),jn.speedRatio=Math.min(1.3,t.speed/n.rider.stats.maxSpeed),jn.airborne=t.airborne,jn.boosting=t.boostT>0,jn.slope=n.w.slope||0,jn}var t1=.8,Vd=.7;function $d(n){let t=n.vdir??n.yaw;return t+t1*(n.yaw-t)}function Jd(n){let{track:t,fx:e,weather:i}=se;for(let s of se.bikes){let r=s.rider.state;Cf(t,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-$d(r),c=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=Vd*(Math.sin(a)-Math.sin(c)),o.position.z+=Vd*(Math.cos(a)-Math.cos(c)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let l=s.pose;l.lean=r.lean,l.steer=r.steer,l.pitch=r.pitch,l.compress=r.compress,l.wheelSpin=r.wheelSpin,l.speedRatio=r.speed/s.rider.stats.maxSpeed,l.speed=r.speed,l.airborne=r.airborne,l.drift=r.drift,l.boost=r.boostT>0,l.braking=s.rider.isPlayer?Ge.brake>.1:!!s.rider.braking,s.model.update(l,n);let h=o.rotation.y,u=Math.sin(h),d=Math.cos(h),p=s.w.x-u*.7,g=s.w.z-d*.7,x=s.w.y+.05,m=u*r.speed,f=d*r.speed;!r.airborne&&r.speed>8&&(r.drift>.35&&(Math.random()<r.drift*.9&&e.emit("smoke",p,x,g,m*.2,1.2,f*.2,1),s.has&&e.addSkid(s.prev.x,s.prev.y,s.prev.z,p,x,g,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&e.emit("dust",p,x,g,m*.25,1.5,f*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&e.emit("spray",p,x,g,m*.35,2.5,f*.35,2)),r.boostT>0&&e.emit("boost",p-u*.4,x+.45,g-d*.4,m*.9,.2,f*.9,1),s.prev.set(p,x,g),s.has=!r.airborne;let y=s.rider.isPlayer?null:s.rider.frameEvents;y&&y.length&&Kd(s,y,!1)}}function Kd(n,t,e){let{fx:i}=se,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let c of t)c==="land"||c==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,c==="hardLand"?40:22),e&&(Ie.play("land"),qi.shake(c==="hardLand"?.9:.45))):c==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),e&&(Ie.play("hit"),qi.shake(.7))):c==="crash"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,4,a*.5,40),i.emit("dust",n.w.x,n.w.y+.2,n.w.z,o*.3,2,a*.3,30),e&&(qi.shake(1.4),Hn.flash("CHUTE !",1400))):c==="jump"?e&&Ie.play("jump"):c==="boost"?e&&(Ie.play("boost"),qi.shake(.3),Hn.flash("BOOST !",600)):c==="pad"&&e&&(Ie.play("pad"),qi.shake(.2))}function e1(n){let{race:t,autoAI:e,track:i}=se,s=t.player,r=Ge;if(e||Ke==="finish")if(e){let a=t.riders.filter(c=>c!==s).map(c=>c.state);r=la(e,s.state,i,s.stats,a,n)}else r=n1;t.update(n,r);let o=s.state.events;o.length&&(Kd(se.playerBike,o,!e),o.length=0)}var n1={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},Cn={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Ah=[],Gd=new z,Wd=performance.now(),Da=0,Ua=0;function jd(n){requestAnimationFrame(jd);let t=Math.min(.05,(n-Wd)/1e3);if(Wd=n,!se)return;if(Rh){se.post.render(0);return}Ua+=t,Ch+=t;let{race:e}=se,i=Ke==="race"||Ke==="attract"||Ke==="finish";if(i){Ke==="race"&&jM(t),Da+=t;let c=0;for(;Da>=wh&&c++<8;)e1(wh),Da-=wh;c>=8&&(Da=0)}Jd(t);let s=e.player,r=s.state,o=Math.min(1.3,r.speed/s.stats.maxSpeed),a=Lh();Ke==="intro"||Ke==="menu"||Ke==="finish"&&Ch>1.2?i1(a,t):qi.update(t,a),Gd.set(a.x,a.y,a.z),se.env.update(t,Ua,Gd),se.road.update(t,Ua),se.fx.setSpeed(i?o:0,r.boostT>0),se.fx.update(t,In),se.post.setSpeed(i?o:0,r.boostT>0),se.post.render(t),(Ke==="race"||Ke==="finish")&&(Ie.setEngine(Math.min(1,o),Ke==="race"?Ge.throttle:.3),Ie.setWind(Math.min(1,o)),Ie.setSkid(r.airborne?0:Math.min(1,r.drift))),Ke==="race"&&s1(e,s,r)}var Xd=new z;function i1(n,t){let e=Ua*.35+n.heading;Xd.set(n.x+Math.sin(e)*7.5,n.y+2.6,n.z+Math.cos(e)*7.5),In.position.lerp(Xd,Math.min(1,t*2.5)),In.fov+=(55-In.fov)*Math.min(1,t*3),In.updateProjectionMatrix(),In.lookAt(n.x,n.y+.9,n.z)}function s1(n,t,e){Cn.speedKmh=e.speed*3.6,Cn.position=t.position,Cn.total=n.riders.length,Cn.lap=Math.min(n.laps,Math.max(1,t.lap)),Cn.laps=n.laps,Cn.time=n.time,Cn.bestLap=t.bestLap??null,Cn.boostCharges=e.boostCharges,Cn.boostT=e.boostT,Cn.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,Cn.wrongWay=Math.abs(e.yaw)>1.4,Hn.update(Cn),Ah.length=0;for(let i of n.riders)Ah.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(Hn.updateMinimap(Ah),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==Xr&&(Xr=i,i>0&&Ie.play("beep"))}else Xr!==0&&(Xr=0,Ie.play("go"),Ie.startMusic?.());n.phase==="racing"&&(t.position<Ih&&Hn.flash(t.position===1?"EN T\xCATE !":"+1 PLACE",700),Ih=t.position,t.lap!==Ph&&t.lap<=n.laps&&(Ph=t.lap,Ie.play("lap"),t.lap===n.laps&&Hn.flash("DERNIER TOUR",1400))),n.phase==="finished"&&Ke==="race"&&r1()}function Qd(){let n=innerWidth,t=innerHeight;yi.setSize(n,t,!1),In.aspect=n/t,In.updateProjectionMatrix(),se?.post.setSize(n,t)}addEventListener("resize",Qd);function qr(n){Ke=n,Ch=0}var Ne=null,or=lh(),tp=null;function r1(){qr("finish"),Hn.flash(`ARRIV\xC9E \u2014 ${se.race.player.position}${se.race.player.position===1?"er":"e"}`,2200),Ie.play(se.race.player.position<=3?"win":"lose"),Ie.stopMusic?.(),setTimeout(()=>tp?.(),3200)}function qd(){let n=pa(da("ATTRACT"));for(let t of n)t.stats=Ks({upgrades:[]});Zd({trackSeed:"ATTRACT-"+ma(),weatherId:"sunset",laps:99,riders:n,autopilot:!0}),Hn.hide(),qr("attract")}async function o1(){for(qd(),document.getElementById("boot").remove(),requestAnimationFrame(jd);;){let n=Wr.get("seed");for(n||({seed:n}=await xi.showTitle({dailySeed:ma(),meta:or})),Ie.resume(),Ne=da(n);!Dr(Ne);){let i=Ne.stages[Ne.stageIndex],s=Ks(Ne),r=pa(Ne).map(a=>({...a,stats:a.isPlayer?s:Ks({upgrades:[]})}));xi.hideAll(),Zd({trackSeed:i.trackSeed,weatherId:Wr.get("weather")||i.weather,laps:i.laps,riders:r,autopilot:Wr.has("auto")}),qr("intro"),Ie.setRain(se.weather.rain||0),Wr.has("auto")||await xi.showStageIntro({stage:i,index:Ne.stageIndex+1,total:Ne.stages.length,standings:js(Ne),weather:se.weather}),xi.hideAll(),qi.snap(Lh()),Hn.show(),qr("race"),await new Promise(a=>{tp=a}),Hn.hide(),Ie.setEngine(.1,0),Ie.setWind(0),Ie.setSkid(0);let o=se.race.results();if(ah(Ne,o),await xi.showResults({results:o,standings:js(Ne),stage:i}),!Dr(Ne)){let a=rh(Ne),c=Ne.upgrades.map(h=>ls.find(u=>u.id===h)).filter(Boolean),l=await xi.showUpgradeChoice({choices:a,index:Ne.stageIndex,total:Ne.stages.length,owned:c});oh(Ne,l)}}let t=js(Ne),e=t.findIndex(i=>i.isPlayer)+1;or=uh(or,Ne)||or,hh(or),qr("menu"),await xi.showRunEnd({standings:t,playerPosition:e,run:Ne,meta:or}),xi.hideAll(),Wr.delete("seed"),qd()}}o1().catch(n=>{console.error(n);let t=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));t.className="err",t.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
