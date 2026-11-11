var Yd=Object.defineProperty;var Zd=(n,t)=>{for(var e in t)Yd(n,e,{get:t[e],enumerable:!0})};var $d=0,Dh=1,Jd=2;var Gu=1,Sc=2,ii=3,Pi=0,qe=1,ze=2,Xn=0,As=1,vo=2,Uh=3,Nh=4,bc=5,ri=100,Kd=101,jd=102,Qd=103,tp=104,ep=200,Ec=201,np=202,ip=203,ol=204,mr=205,sp=206,rp=207,op=208,ap=209,lp=210,cp=211,hp=212,up=213,fp=214,al=0,ll=1,cl=2,Ps=3,hl=4,ul=5,fl=6,dl=7,Wu=0,dp=1,pp=2,Ii=0,wc=1,Tc=2,Ac=3,Er=4,mp=5,Rc=6,Cc=7;var Xu=300,Ls=301,Ds=302,pl=303,ml=304,Yo=306,gr=1e3,Ki=1001,gl=1002,fn=1003,gp=1004;var kr=1005;var Gn=1006,Ra=1007;var ji=1008;var li=1009,qu=1010,Yu=1011,xr=1012,Ic=1013,Qi=1014,Wn=1015,Fn=1016,Pc=1017,Lc=1018,Us=1020,Zu=35902,$u=1021,Ju=1022,Dn=1023,Ku=1024,ju=1025,Rs=1026,Ns=1027,Dc=1028,Uc=1029,Qu=1030,Nc=1031;var Fc=1033,po=33776,mo=33777,go=33778,xo=33779,xl=35840,_l=35841,vl=35842,yl=35843,Ml=36196,Sl=37492,bl=37496,El=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Il=37814,Pl=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,_o=36492,Bl=36494,zl=36495,tf=36283,kl=36284,Hl=36285,Vl=36286;var yo=2300,Gl=2301,Ca=2302,Fh=2400,Oh=2401,Bh=2402;var xp=3200,_p=3201;var ef=0,vp=1,Ci="",We="srgb",Vs="srgb-linear",Zo="linear",de="srgb";var us=7680;var zh=519,yp=512,Mp=513,Sp=514,nf=515,bp=516,Ep=517,wp=518,Tp=519,kh=35044,Yn=35048;var Hh="300 es",oi=2e3,Mo=2001,Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ia=Math.PI/180,So=180/Math.PI;function wr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function on(n,t,e){return Math.max(t,Math.min(e,n))}function Ap(n,t){return(n%t+t)%t}function Pa(n,t,e){return(1-e)*n+e*t}function sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(on(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],x=i[8],_=s[0],m=s[3],f=s[6],y=s[1],v=s[4],g=s[7],A=s[2],w=s[5],E=s[8];return r[0]=o*_+a*y+l*A,r[3]=o*m+a*v+l*w,r[6]=o*f+a*g+l*E,r[1]=c*_+h*y+u*A,r[4]=c*m+h*v+u*w,r[7]=c*f+h*g+u*E,r[2]=d*_+p*y+x*A,r[5]=d*m+p*v+x*w,r[8]=d*f+p*g+x*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,x=e*u+i*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(La.makeScale(t,e)),this}rotate(t){return this.premultiply(La.makeRotation(-t)),this}translate(t,e){return this.premultiply(La.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},La=new ee;function sf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rp(){let n=bo("canvas");return n.style.display="block",n}var Vh={};function fr(n){n in Vh||(Vh[n]=!0,console.warn(n))}function Cp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ip(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var re={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=ai(n.r),n.g=ai(n.g),n.b=ai(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=Cs(n.r),n.g=Cs(n.g),n.b=Cs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ci?Zo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gh=[.64,.33,.3,.6,.15,.06],Wh=[.2126,.7152,.0722],Xh=[.3127,.329],qh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Vs]:{primaries:Gh,whitePoint:Xh,transfer:Zo,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:Gh,whitePoint:Xh,transfer:de,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});var fs,Wl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=bo("canvas")),fs.width=t.width,fs.height=t.height;let i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=bo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ai(e[i]/255)*255):e[i]=ai(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lp=0,Eo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=wr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Da(s[o].image)):r.push(Da(s[o]))}else r=Da(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dp=0,an=class n extends Li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ki,s=Ki,r=Gn,o=ji,a=Dn,l=li,c=n.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=wr(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Xu;an.DEFAULT_ANISOTROPY=1;var Re=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,g=(p+1)/2,A=(f+1)/2,w=(h+d)/4,E=(u+_)/4,C=(x+m)/4;return v>g&&v>A?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=E/i):g>A?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=w/s,r=C/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=C/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends Li{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new an(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Xl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},wo=class extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==x){let m=1-a,f=l*d+c*p+h*x+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let A=Math.sqrt(v),w=Math.atan2(A,f*y);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}let g=a*y;if(l=l*m+d*g,c=c*m+p*g,h=h*m+x*g,u=u*m+_*g,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*p-c*d,t[e+1]=l*x+h*d+c*u-a*p,t[e+2]=c*x+h*p+a*d-l*u,t[e+3]=h*x-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(on(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ua=new k,Zh=new Mn,ci=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Vr.subVectors(this.max,rr),ds.subVectors(t.a,rr),ps.subVectors(t.b,rr),ms.subVectors(t.c,rr),bi.subVectors(ps,ds),Ei.subVectors(ms,ps),Vi.subVectors(ds,ms);let e=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Vi.z,Vi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Vi.z,0,-Vi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Vi.y,Vi.x,0];return!Na(e,ds,ps,ms,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,ds,ps,ms,Vr))?!1:(Gr.crossVectors(bi,Ei),e=[Gr.x,Gr.y,Gr.z],Na(e,ds,ps,ms,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new k,new k,new k,new k,new k,new k,new k,new k],In=new k,Hr=new ci,ds=new k,ps=new k,ms=new k,bi=new k,Ei=new k,Vi=new k,rr=new k,Vr=new k,Gr=new k,Gi=new k;function Na(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Gi.fromArray(n,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=i.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Up=new ci,or=new k,Fa=new k,hi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Up.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);let e=or.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(or,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Fa)),this.expandByPoint(or.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new k,Oa=new k,Wr=new k,wi=new k,Ba=new k,Xr=new k,za=new k,_r=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Oa.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Oa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=wi.dot(this.direction),l=-wi.dot(Wr),c=wi.lengthSq(),h=Math.abs(1-o*o),u,d,p,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oa).addScaledVector(Wr,d),p}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,s,r){Ba.subVectors(e,t),Xr.subVectors(i,t),za.crossVectors(Ba,Xr);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);let l=a*this.direction.dot(Xr.crossVectors(wi,Xr));if(l<0)return null;let c=a*this.direction.dot(Ba.cross(wi));if(c<0||l+c>o)return null;let h=-a*wi.dot(za);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,p,x,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,p,x,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,p,x,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,x=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,x=c*h,_=c*u;e[0]=d+_*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,x=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,x=a*h,_=a*u;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,x=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+x,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,p=o*c,x=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Fp)}lookAt(t,e,i){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ti.crossVectors(i,hn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ti.crossVectors(i,hn)),Ti.normalize(),qr.crossVectors(hn,Ti),s[0]=Ti.x,s[4]=qr.x,s[8]=hn.x,s[1]=Ti.y,s[5]=qr.y,s[9]=hn.y,s[2]=Ti.z,s[6]=qr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],x=i[2],_=i[6],m=i[10],f=i[14],y=i[3],v=i[7],g=i[11],A=i[15],w=s[0],E=s[4],C=s[8],M=s[12],S=s[1],L=s[5],Z=s[9],V=s[13],et=s[2],at=s[6],H=s[10],mt=s[14],Q=s[3],ut=s[7],Mt=s[11],At=s[15];return r[0]=o*w+a*S+l*et+c*Q,r[4]=o*E+a*L+l*at+c*ut,r[8]=o*C+a*Z+l*H+c*Mt,r[12]=o*M+a*V+l*mt+c*At,r[1]=h*w+u*S+d*et+p*Q,r[5]=h*E+u*L+d*at+p*ut,r[9]=h*C+u*Z+d*H+p*Mt,r[13]=h*M+u*V+d*mt+p*At,r[2]=x*w+_*S+m*et+f*Q,r[6]=x*E+_*L+m*at+f*ut,r[10]=x*C+_*Z+m*H+f*Mt,r[14]=x*M+_*V+m*mt+f*At,r[3]=y*w+v*S+g*et+A*Q,r[7]=y*E+v*L+g*at+A*ut,r[11]=y*C+v*Z+g*H+A*Mt,r[15]=y*M+v*V+g*mt+A*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],_=t[7],m=t[11],f=t[15];return x*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],_=t[13],m=t[14],f=t[15],y=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=x*d*c-h*m*c-x*l*p+o*m*p+h*l*f-o*d*f,g=h*_*c-x*u*c+x*a*p-o*_*p-h*a*f+o*u*f,A=x*u*l-h*_*l-x*a*d+o*_*d+h*a*m-o*u*m,w=e*y+i*v+s*g+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=y*E,t[1]=(_*d*r-u*m*r-_*s*p+i*m*p+u*s*f-i*d*f)*E,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*E,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*E,t[4]=v*E,t[5]=(h*m*r-x*d*r+x*s*p-e*m*p-h*s*f+e*d*f)*E,t[6]=(x*l*r-o*m*r-x*s*c+e*m*c+o*s*f-e*l*f)*E,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*E,t[8]=g*E,t[9]=(x*u*r-h*_*r-x*i*p+e*_*p+h*i*f-e*u*f)*E,t[10]=(o*_*r-x*a*r+x*i*c-e*_*c-o*i*f+e*a*f)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*E,t[12]=A*E,t[13]=(h*_*s-x*u*s+x*i*d-e*_*d-h*i*m+e*u*m)*E,t[14]=(x*a*s-o*_*s-x*i*l+e*_*l+o*i*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,x=r*u,_=o*h,m=o*u,f=a*u,y=l*c,v=l*h,g=l*u,A=i.x,w=i.y,E=i.z;return s[0]=(1-(_+f))*A,s[1]=(p+g)*A,s[2]=(x-v)*A,s[3]=0,s[4]=(p-g)*w,s[5]=(1-(d+f))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(x+v)*E,s[9]=(m-y)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);let c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=oi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,x;if(a===oi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Mo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=oi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,p=(i+s)*h,x,_;if(a===oi)x=(o+r)*u,_=-2*u;else if(a===Mo)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},gs=new k,Pn=new ce,Np=new k(0,0,0),Fp=new k(1,1,1),Ti=new k,qr=new k,hn=new k,$h=new ce,Jh=new Mn,qn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $h.makeRotationFromQuaternion(t),this.setFromRotationMatrix($h,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Op=0,Kh=new k,xs=new Mn,ti=new ce,Yr=new k,ar=new k,Bp=new k,zp=new Mn,jh=new k(1,0,0),Qh=new k(0,1,0),tu=new k(0,0,1),eu={type:"added"},kp={type:"removed"},_s={type:"childadded",child:null},ka={type:"childremoved",child:null},Ie=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,e=new qn,i=new Mn,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new ee}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yr.copy(t):Yr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ar,Yr,this.up):ti.lookAt(Yr,ar,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ti),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eu),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kp),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new k(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new k,ei=new k,Ha=new k,ni=new k,vs=new k,ys=new k,nu=new k,Va=new k,Ga=new k,Wa=new k,Xa=new Re,qa=new Re,Ya=new Re,$i=class n{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ei.subVectors(i,e),Ha.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ei),l=Ln.dot(Ha),c=ei.dot(ei),h=ei.dot(Ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,i),Ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xa,r.x),o.addScaledVector(qa,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ei.subVectors(t,e),Ln.cross(ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Ln.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,i),ys.subVectors(r,i),Va.subVectors(t,i);let l=vs.dot(Va),c=ys.dot(Va);if(l<=0&&c<=0)return e.copy(i);Ga.subVectors(t,s);let h=vs.dot(Ga),u=ys.dot(Ga);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(vs,o);Wa.subVectors(t,r);let p=vs.dot(Wa),x=ys.dot(Wa);if(x>=0&&p<=x)return e.copy(r);let _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(ys,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return nu.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(nu,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(vs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Za(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=Ap(t,1),e=on(e,0,1),i=on(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let i=rf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return re.fromWorkingColorSpace(Ge.copy(this),t),Math.round(on(Ge.r*255,0,255))*65536+Math.round(on(Ge.g*255,0,255))*256+Math.round(on(Ge.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ge.copy(this),e);let i=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=We){re.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,i=Ge.g,s=Ge.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Zr);let i=Pa(Ai.h,Zr.h,e),s=Pa(Ai.s,Zr.s,e),r=Pa(Ai.l,Zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Ht;Ht.NAMES=rf;var Hp=0,ui=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=wr(),this.name="",this.blending=As,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=mr,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==mr&&(i.blendDst=this.blendDst),this.blendEquation!==ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},dn=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new k,$r=new Jt,he=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kh,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kh&&(t.usage=this.usage),t}};var Ao=class extends he{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ro=class extends he{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends he{constructor(t,e,i){super(new Float32Array(t),e,i)}},Vp=0,yn=new ce,$a=new Ie,Ms=new k,un=new ci,lr=new ci,Be=new k,xe=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?Ro:Ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(un.min,lr.min),un.expandByPoint(Be),Be.addVectors(un.max,lr.max),un.expandByPoint(Be)):(un.expandByPoint(lr.min),un.expandByPoint(lr.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Be.add(Ms)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new k,l[C]=new k;let c=new k,h=new k,u=new k,d=new Jt,p=new Jt,x=new Jt,_=new k,m=new k;function f(C,M,S){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),x.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),x.sub(d);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(L),a[C].add(_),a[M].add(_),a[S].add(_),l[C].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){let S=y[C],L=S.start,Z=S.count;for(let V=L,et=L+Z;V<et;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let v=new k,g=new k,A=new k,w=new k;function E(C){A.fromBufferAttribute(s,C),w.copy(A);let M=a[C];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),g.crossVectors(w,M);let L=g.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,L)}for(let C=0,M=y.length;C<M;++C){let S=y[C],L=S.start,Z=S.count;for(let V=L,et=L+Z;V<et;V+=3)E(t.getX(V+0)),E(t.getX(V+1)),E(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){let x=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new he(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},iu=new ce,Wi=new _r,Jr=new hi,su=new k,Kr=new k,jr=new k,Qr=new k,Ja=new k,to=new k,ru=new k,eo=new k,ve=class extends Ie{constructor(t=new xe,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ja.fromBufferAttribute(u,t),o?to.addScaledVector(Ja,h):to.addScaledVector(Ja.sub(e),h))}e.add(to)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Jr.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Jr,su)===null||Wi.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(iu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){let m=d[x],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=v;g<A;g+=3){let w=a.getX(g),E=a.getX(g+1),C=a.getX(g+2);s=no(this,f,t,i,c,h,u,w,E,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){let y=a.getX(m),v=a.getX(m+1),g=a.getX(m+2);s=no(this,o,t,i,c,h,u,y,v,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){let m=d[x],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=v;g<A;g+=3){let w=g,E=g+1,C=g+2;s=no(this,f,t,i,c,h,u,w,E,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){let y=m,v=m+1,g=m+2;s=no(this,o,t,i,c,h,u,y,v,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Gp(n,t,e,i,s,r,o,a){let l;if(t.side===qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Pi,a),l===null)return null;eo.copy(a),eo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:n}}function no(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Kr),n.getVertexPosition(l,jr),n.getVertexPosition(c,Qr);let h=Gp(n,t,e,i,Kr,jr,Qr,ru);if(h){let u=new k;$i.getBarycoord(ru,Kr,jr,Qr,u),s&&(h.uv=$i.getInterpolatedAttribute(s,a,l,c,u,new Jt)),r&&(h.uv1=$i.getInterpolatedAttribute(r,a,l,c,u,new Jt)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};$i.getNormal(Kr,jr,Qr,d.normal),h.face=d,h.barycoord=u}return h}var Un=class n extends xe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function x(_,m,f,y,v,g,A,w,E,C,M){let S=g/E,L=A/C,Z=g/2,V=A/2,et=w/2,at=E+1,H=C+1,mt=0,Q=0,ut=new k;for(let Mt=0;Mt<H;Mt++){let At=Mt*L-V;for(let lt=0;lt<at;lt++){let _t=lt*S-Z;ut[_]=_t*y,ut[m]=At*v,ut[f]=et,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[f]=w>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(lt/E),u.push(1-Mt/C),mt+=1}}for(let Mt=0;Mt<C;Mt++)for(let At=0;At<E;At++){let lt=d+At+at*Mt,_t=d+At+at*(Mt+1),J=d+(At+1)+at*(Mt+1),z=d+(At+1)+at*Mt;l.push(lt,_t,z),l.push(_t,J,z),Q+=6}a.addGroup(p,Q,M),p+=Q,d+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function je(n){let t={};for(let e=0;e<n.length;e++){let i=Fs(n[e]);for(let s in i)t[s]=i[s]}return t}function Wp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function of(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Ui={clone:Fs,merge:je},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Co=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ri=new k,ou=new Jt,au=new Jt,Xe=class extends Co{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,ou,au),e.subVectors(au,ou)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,bs=1,Yl=class extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(Ss,bs,t,e);s.layers=this.layers,this.add(s);let r=new Xe(Ss,bs,t,e);r.layers=this.layers,this.add(r);let o=new Xe(Ss,bs,t,e);o.layers=this.layers,this.add(o);let a=new Xe(Ss,bs,t,e);a.layers=this.layers,this.add(a);let l=new Xe(Ss,bs,t,e);l.layers=this.layers,this.add(l);let c=new Xe(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Io=class extends an{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zl=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Io(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Xn});r.uniforms.tEquirect.value=e;let o=new ve(s,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=Gn),new Yl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ka=new k,Yp=new k,Zp=new ee,si=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ka.subVectors(i,e).cross(Yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(Ka).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new hi,io=new k,vr=class{constructor(t=new si,e=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],x=s[9],_=s[10],m=s[11],f=s[12],y=s[13],v=s[14],g=s[15];if(i[0].setComponents(l-r,d-c,m-p,g-f).normalize(),i[1].setComponents(l+r,d+c,m+p,g+f).normalize(),i[2].setComponents(l+o,d+h,m+x,g+y).normalize(),i[3].setComponents(l-o,d-h,m-x,g-y).normalize(),i[4].setComponents(l-a,d-u,m-_,g-v).normalize(),e===oi)i[5].setComponents(l+a,d+u,m+_,g+v).normalize();else if(e===Mo)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function af(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $p(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<u.length;p++){let x=u[d],_=u[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,x=u.length;p<x;p++){let _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Os=class n extends xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],x=[],_=[],m=[];for(let f=0;f<h;f++){let y=f*d-o;for(let v=0;v<c;v++){let g=v*u-r;x.push(g,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let v=y+c*f,g=y+c*(f+1),A=y+1+c*(f+1),w=y+1+c*f;p.push(v,g,w),p.push(g,A,w)}this.setIndex(p),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vm=`#define PI 3.141592653589793
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
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
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
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
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
#endif`,Zm=`struct PhysicalMaterial {
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
}`,$m=`
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Jp,alphahash_pars_fragment:Kp,alphamap_fragment:jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:om,beginnormal_vertex:am,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:xm,color_vertex:_m,common:vm,cube_uv_reflection_fragment:ym,defaultnormal_vertex:Mm,displacementmap_pars_vertex:Sm,displacementmap_vertex:bm,emissivemap_fragment:Em,emissivemap_pars_fragment:wm,colorspace_fragment:Tm,colorspace_pars_fragment:Am,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Im,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Vm,envmap_vertex:Lm,fog_vertex:Dm,fog_pars_vertex:Um,fog_fragment:Nm,fog_pars_fragment:Fm,gradientmap_pars_fragment:Om,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:km,lights_pars_begin:Hm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:Zm,lights_fragment_begin:$m,lights_fragment_maps:Jm,lights_fragment_end:Km,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:f0,normal_fragment_begin:d0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:x0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:S0,opaque_fragment:b0,packing:E0,premultiplied_alpha_fragment:w0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:k0,tonemapping_fragment:H0,tonemapping_pars_fragment:V0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:Z0,background_vert:$0,background_frag:J0,backgroundCube_vert:K0,backgroundCube_frag:j0,cube_vert:Q0,cube_frag:tg,depth_vert:eg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:fg,meshmatcap_vert:dg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:xg,meshphong_frag:_g,meshphysical_vert:vg,meshphysical_frag:yg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:bg,points_frag:Eg,shadow_vert:wg,shadow_frag:Tg,sprite_vert:Ag,sprite_frag:Rg},Dt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Vn={basic:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:je([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:je([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:je([Dt.points,Dt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:je([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:je([Dt.common,Dt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:je([Dt.sprite,Dt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:je([Dt.common,Dt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:je([Dt.lights,Dt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Vn.physical={uniforms:je([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var so={r:0,b:0,g:0},qi=new qn,Cg=new ce;function Ig(n,t,e,i,s,r,o){let a=new Ht(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function x(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1,g=x(y);g===null?f(a,l):g&&g.isColor&&(f(g,1),v=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){let g=x(v);g&&(g.isCubeTexture||g.mapping===Yo)?(h===void 0&&(h=new ve(new Un(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Fs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(v.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(qi)),h.material.toneMapped=re.getTransfer(g.colorSpace)!==de,(u!==g||d!==g.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=g,d=g.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ve(new Os(2,2),new Ae({name:"BackgroundMaterial",uniforms:Fs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=re.getTransfer(g.colorSpace)!==de,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||d!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=g,d=g.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(so,of(n)),i.buffers.color.setClear(so.r,so.g,so.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:m}}function Pg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(S,L,Z,V,et){let at=!1,H=u(V,Z,L);r!==H&&(r=H,c(r.object)),at=p(S,V,Z,et),at&&x(S,V,Z,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,g(S,L,Z,V),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,L,Z){let V=Z.wireframe===!0,et=i[S.id];et===void 0&&(et={},i[S.id]=et);let at=et[L.id];at===void 0&&(at={},et[L.id]=at);let H=at[V];return H===void 0&&(H=d(l()),at[V]=H),H}function d(S){let L=[],Z=[],V=[];for(let et=0;et<e;et++)L[et]=0,Z[et]=0,V[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Z,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,L,Z,V){let et=r.attributes,at=L.attributes,H=0,mt=Z.getAttributes();for(let Q in mt)if(mt[Q].location>=0){let Mt=et[Q],At=at[Q];if(At===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),Mt===void 0||Mt.attribute!==At||At&&Mt.data!==At.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function x(S,L,Z,V){let et={},at=L.attributes,H=0,mt=Z.getAttributes();for(let Q in mt)if(mt[Q].location>=0){let Mt=at[Q];Mt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor));let At={};At.attribute=Mt,Mt&&Mt.data&&(At.data=Mt.data),et[Q]=At,H++}r.attributes=et,r.attributesNum=H,r.index=V}function _(){let S=r.newAttributes;for(let L=0,Z=S.length;L<Z;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){let Z=r.newAttributes,V=r.enabledAttributes,et=r.attributeDivisors;Z[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),et[S]!==L&&(n.vertexAttribDivisor(S,L),et[S]=L)}function y(){let S=r.newAttributes,L=r.enabledAttributes;for(let Z=0,V=L.length;Z<V;Z++)L[Z]!==S[Z]&&(n.disableVertexAttribArray(Z),L[Z]=0)}function v(S,L,Z,V,et,at,H){H===!0?n.vertexAttribIPointer(S,L,Z,et,at):n.vertexAttribPointer(S,L,Z,V,et,at)}function g(S,L,Z,V){_();let et=V.attributes,at=Z.getAttributes(),H=L.defaultAttributeValues;for(let mt in at){let Q=at[mt];if(Q.location>=0){let ut=et[mt];if(ut===void 0&&(mt==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),mt==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){let Mt=ut.normalized,At=ut.itemSize,lt=t.get(ut);if(lt===void 0)continue;let _t=lt.buffer,J=lt.type,z=lt.bytesPerElement,st=J===n.INT||J===n.UNSIGNED_INT||ut.gpuType===Ic;if(ut.isInterleavedBufferAttribute){let D=ut.data,$=D.stride,j=ut.offset;if(D.isInstancedInterleavedBuffer){for(let rt=0;rt<Q.locationSize;rt++)f(Q.location+rt,D.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let rt=0;rt<Q.locationSize;rt++)m(Q.location+rt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let rt=0;rt<Q.locationSize;rt++)v(Q.location+rt,At/Q.locationSize,J,Mt,$*z,(j+At/Q.locationSize*rt)*z,st)}else{if(ut.isInstancedBufferAttribute){for(let D=0;D<Q.locationSize;D++)f(Q.location+D,ut.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let D=0;D<Q.locationSize;D++)m(Q.location+D);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let D=0;D<Q.locationSize;D++)v(Q.location+D,At/Q.locationSize,J,Mt,At*z,At/Q.locationSize*D*z,st)}}else if(H!==void 0){let Mt=H[mt];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(Q.location,Mt);break;case 3:n.vertexAttrib3fv(Q.location,Mt);break;case 4:n.vertexAttrib4fv(Q.location,Mt);break;default:n.vertexAttrib1fv(Q.location,Mt)}}}}y()}function A(){C();for(let S in i){let L=i[S];for(let Z in L){let V=L[Z];for(let et in V)h(V[et].object),delete V[et];delete L[Z]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;let L=i[S.id];for(let Z in L){let V=L[Z];for(let et in V)h(V[et].object),delete V[et];delete L[Z]}delete i[S.id]}function E(S){for(let L in i){let Z=i[L];if(Z[S.id]===void 0)continue;let V=Z[S.id];for(let et in V)h(V[et].object),delete V[et];delete Z[S.id]}}function C(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Lg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*d[_];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Dn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==li&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Wn&&!C)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:A,maxSamples:w}}function Ug(n){let t=this,e=null,i=0,s=!1,r=!1,o=new si,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,v=y*4,g=f.clippingState||null;l.value=g,g=h(x,d,v,p);for(let A=0;A!==v;++A)g[A]=e[A];f.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,x){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,x!==!0||m===null){let f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,g=p;v!==_;++v,g+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ng(n){let t=new WeakMap;function e(o,a){return a===pl?o.mapping=Ls:a===ml&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===pl||a===ml)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zl(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Bs=class extends Co{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ts=4,lu=[.125,.215,.35,.446,.526,.582],Ji=20,ja=new Bs,cu=new Ht,Qa=null,tl=0,el=0,nl=!1,Zi=(1+Math.sqrt(5))/2,Es=1/Zi,hu=[new k(-Zi,Es,0),new k(Zi,Es,0),new k(-Es,0,Zi),new k(Es,0,Zi),new k(0,Zi,-Es),new k(0,Zi,Es),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tl,el),this._renderer.xr.enabled=nl,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Fn,format:Dn,colorSpace:Vs,depthBuffer:!1},s=uu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Og(r,t,e)}return s}_compileMaterial(t){let e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,i,s){let a=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cu),h.toneMapping=Ii,h.autoClear=!1;let p=new dn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),x=new ve(new Un,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(cu),_=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;ro(s,y*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ja)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(s-r-1)%hu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ve(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let f=[],y=0;for(let E=0;E<Ji;++E){let C=E/_,M=Math.exp(-C*C/2);f.push(M),E===0?y+=M:E<m&&(y+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;let g=this._sizeLods[s],A=3*g*(s>v-Ts?s-v+Ts:0),w=4*(this._cubeSize-g);ro(e,A,w,3*g,2*g),l.setRenderTarget(e),l.render(u,ja)}};function Fg(n){let t=[],e=[],i=[],s=n,r=n-Ts+1+lu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ts?l=lu[o-n+Ts-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,f=1,y=new Float32Array(_*x*p),v=new Float32Array(m*x*p),g=new Float32Array(f*x*p);for(let w=0;w<p;w++){let E=w%3*2/3-1,C=w>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(M,_*x*w),v.set(d,m*x*w);let S=[w,w,w,w,w,w];g.set(S,f*x*w)}let A=new xe;A.setAttribute("position",new he(y,_)),A.setAttribute("uv",new he(v,m)),A.setAttribute("faceIndex",new he(g,f)),t.push(A),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function uu(n,t,e){let i=new Qe(n,t,e);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Og(n,t,e){let i=new Float32Array(Ji),s=new k(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fu(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function du(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function Bg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===pl||l===ml,h=l===Ls||l===Ds;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Po(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Po(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kg(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let _=d.morphAttributes[x];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let _=p[x];for(let m=0,f=_.length;m<f;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,x=u.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let v=0,g=y.length;v<g;v+=3){let A=y[v+0],w=y[v+1],E=y[v+2];d.push(A,w,w,E,E,A)}}else if(x!==void 0){let y=x.array;_=x.version;for(let v=0,g=y.length/3-1;v<g;v+=3){let A=v+0,w=v+1,E=v+2;d.push(A,w,w,E,E,A)}}else return;let m=new(sf(d)?Ro:Ao)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,x){x!==0&&(n.drawElementsInstanced(i,p,r,d*o,x),e.update(p,i,x))}function h(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];e.update(m,i,1)}function u(d,p,x,_){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,x);let f=0;for(let y=0;y<x;y++)f+=p[y]*_[y];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gg(n,t,e){let i=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let M=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let g=a.attributes.position.count*v,A=1;g>t.maxTextureSize&&(A=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let w=new Float32Array(g*A*4*u),E=new wo(w,g,A,u);E.type=Wn,E.needsUpdate=!0;let C=v*4;for(let S=0;S<u;S++){let L=m[S],Z=f[S],V=y[S],et=g*A*4*S;for(let at=0;at<L.count;at++){let H=at*C;p===!0&&(s.fromBufferAttribute(L,at),w[et+H+0]=s.x,w[et+H+1]=s.y,w[et+H+2]=s.z,w[et+H+3]=0),x===!0&&(s.fromBufferAttribute(Z,at),w[et+H+4]=s.x,w[et+H+5]=s.y,w[et+H+6]=s.z,w[et+H+7]=0),_===!0&&(s.fromBufferAttribute(V,at),w[et+H+8]=s.x,w[et+H+9]=s.y,w[et+H+10]=s.z,w[et+H+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Jt(g,A)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Wg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Lo=class extends an{constructor(t,e,i,s,r,o,a,l,c,h=Rs){if(h!==Rs&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Rs&&(i=Qi),i===void 0&&h===Ns&&(i=Us),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lf=new an,pu=new Lo(1,1),cf=new wo,hf=new ql,uf=new Io,mu=[],gu=[],xu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function Gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $o(n,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function $g(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;vu.set(i),n.uniformMatrix2fv(this.addr,!1,vu),Fe(e,i)}}function Jg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;_u.set(i),n.uniformMatrix3fv(this.addr,!1,_u),Fe(e,i)}}function Kg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),Fe(e,i)}}function jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function nx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function ox(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pu.compareFunction=nf,r=pu):r=lf,e.setTexture2D(t||r,s)}function ax(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hf,s)}function lx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||uf,s)}function cx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cf,s)}function hx(n){switch(n){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return $g;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function ux(n,t){n.uniform1fv(this.addr,t)}function fx(n,t){let e=Gs(t,this.size,2);n.uniform2fv(this.addr,e)}function dx(n,t){let e=Gs(t,this.size,3);n.uniform3fv(this.addr,e)}function px(n,t){let e=Gs(t,this.size,4);n.uniform4fv(this.addr,e)}function mx(n,t){let e=Gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gx(n,t){let e=Gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function xx(n,t){let e=Gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _x(n,t){n.uniform1iv(this.addr,t)}function vx(n,t){n.uniform2iv(this.addr,t)}function yx(n,t){n.uniform3iv(this.addr,t)}function Mx(n,t){n.uniform4iv(this.addr,t)}function Sx(n,t){n.uniform1uiv(this.addr,t)}function bx(n,t){n.uniform2uiv(this.addr,t)}function Ex(n,t){n.uniform3uiv(this.addr,t)}function wx(n,t){n.uniform4uiv(this.addr,t)}function Tx(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lf,r[o])}function Ax(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hf,r[o])}function Rx(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||uf,r[o])}function Cx(n,t,e){let i=this.cache,s=t.length,r=$o(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cf,r[o])}function Ix(n){switch(n){case 5126:return ux;case 35664:return fx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return bx;case 36295:return Ex;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}var $l=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hx(e.type)}},Jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}},Kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},il=/(\w+)(\])?(\[|\.)?/g;function yu(n,t){n.seq.push(t),n.map[t.id]=t}function Px(n,t,e){let i=n.name,s=i.length;for(il.lastIndex=0;;){let r=il.exec(i),o=il.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yu(e,c===void 0?new $l(a,n,t):new Jl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Kl(a),yu(e,u)),e=u}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Px(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Mu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Lx=37297,Dx=0;function Ux(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Su=new ee;function Nx(n){re._getMatrix(Su,re.workingColorSpace,n);let t=`mat3( ${Su.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Zo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ux(n.getShaderSource(t),o)}else return s}function Fx(n,t){let e=Nx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ox(n,t){let e;switch(t){case wc:e="Linear";break;case Tc:e="Reinhard";break;case Ac:e="Cineon";break;case Er:e="ACESFilmic";break;case Rc:e="AgX";break;case Cc:e="Neutral";break;case mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oo=new k;function Bx(){re.getLuminanceCoefficients(oo);let n=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function kx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function dr(n){return n!==""}function Eu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(Vx,Wx)}var Gx=new Map;function Wx(n,t){let e=ne[t];if(e===void 0){let i=Gx.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}var Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace(Xx,qx)}function qx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Yx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function Zx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $x(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ds&&(t="ENVMAP_MODE_REFRACTION"),t}function Jx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wu:t="ENVMAP_BLENDING_MULTIPLY";break;case dp:t="ENVMAP_BLENDING_MIX";break;case pp:t="ENVMAP_BLENDING_ADD";break}return t}function Kx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function jx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Yx(e),c=Zx(e),h=$x(e),u=Jx(e),d=Kx(e),p=zx(e),x=kx(r),_=s.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(m=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ii?Ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Fx("linearToOutputTexel",e.outputColorSpace),Bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=jl(o),o=Eu(o,e),o=wu(o,e),a=jl(a),a=Eu(a,e),a=wu(a,e),o=Tu(o),a=Tu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+o,g=y+f+a,A=Mu(s,s.VERTEX_SHADER,v),w=Mu(s,s.FRAGMENT_SHADER,g);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(L){if(n.debug.checkShaderErrors){let Z=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(A).trim(),et=s.getShaderInfoLog(w).trim(),at=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,w);else{let mt=bu(s,A,"vertex"),Q=bu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Z+`
`+mt+`
`+Q)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(V===""||et==="")&&(H=!1);H&&(L.diagnostics={runnable:at,programLog:Z,vertexShader:{log:V,prefix:m},fragmentShader:{log:et,prefix:f}})}s.deleteShader(A),s.deleteShader(w),C=new Is(s,_),M=Hx(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Lx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var Qx=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new tc(t),e.set(t,i)),i}},tc=class{constructor(t){this.id=Qx++,this.code=t,this.usedTimes=0}};function t_(n,t,e,i,s,r,o){let a=new To,l=new Ql,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,Z,V){let et=Z.fog,at=V.geometry,H=M.isMeshStandardMaterial?Z.environment:null,mt=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),Q=mt&&mt.mapping===Yo?mt.image.height:null,ut=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Mt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,At=Mt!==void 0?Mt.length:0,lt=0;at.morphAttributes.position!==void 0&&(lt=1),at.morphAttributes.normal!==void 0&&(lt=2),at.morphAttributes.color!==void 0&&(lt=3);let _t,J,z,st;if(ut){let K=Vn[ut];_t=K.vertexShader,J=K.fragmentShader}else _t=M.vertexShader,J=M.fragmentShader,l.update(M),z=l.getVertexShaderID(M),st=l.getFragmentShaderID(M);let D=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),j=V.isInstancedMesh===!0,rt=V.isBatchedMesh===!0,gt=!!M.map,pt=!!M.matcap,Tt=!!mt,F=!!M.aoMap,Qt=!!M.lightMap,Bt=!!M.bumpMap,zt=!!M.normalMap,Nt=!!M.displacementMap,$t=!!M.emissiveMap,Ft=!!M.metalnessMap,P=!!M.roughnessMap,b=M.anisotropy>0,W=M.clearcoat>0,ct=M.dispersion>0,dt=M.iridescence>0,ot=M.sheen>0,bt=M.transmission>0,Rt=b&&!!M.anisotropyMap,Ct=W&&!!M.clearcoatMap,Zt=W&&!!M.clearcoatNormalMap,vt=W&&!!M.clearcoatRoughnessMap,It=dt&&!!M.iridescenceMap,qt=dt&&!!M.iridescenceThicknessMap,Vt=ot&&!!M.sheenColorMap,ht=ot&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,ft=!!M.specularColorMap,Et=!!M.specularIntensityMap,O=bt&&!!M.transmissionMap,xt=bt&&!!M.thicknessMap,T=!!M.gradientMap,I=!!M.alphaMap,N=M.alphaTest>0,X=!!M.alphaHash,U=!!M.extensions,B=Ii;M.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(B=n.toneMapping);let q={shaderID:ut,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:J,defines:M.defines,customVertexShaderID:z,customFragmentShaderID:st,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:rt,batchingColor:rt&&V._colorsTexture!==null,instancing:j,instancingColor:j&&V.instanceColor!==null,instancingMorph:j&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vs,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:pt,envMap:Tt,envMapMode:Tt&&mt.mapping,envMapCubeUVHeight:Q,aoMap:F,lightMap:Qt,bumpMap:Bt,normalMap:zt,displacementMap:d&&Nt,emissiveMap:$t,normalMapObjectSpace:zt&&M.normalMapType===vp,normalMapTangentSpace:zt&&M.normalMapType===ef,metalnessMap:Ft,roughnessMap:P,anisotropy:b,anisotropyMap:Rt,clearcoat:W,clearcoatMap:Ct,clearcoatNormalMap:Zt,clearcoatRoughnessMap:vt,dispersion:ct,iridescence:dt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:ot,sheenColorMap:Vt,sheenRoughnessMap:ht,specularMap:Pt,specularColorMap:ft,specularIntensityMap:Et,transmission:bt,transmissionMap:O,thicknessMap:xt,gradientMap:T,opaque:M.transparent===!1&&M.blending===As&&M.alphaToCoverage===!1,alphaMap:I,alphaTest:N,alphaHash:X,combine:M.combine,mapUv:gt&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:Qt&&_(M.lightMap.channel),bumpMapUv:Bt&&_(M.bumpMap.channel),normalMapUv:zt&&_(M.normalMap.channel),displacementMapUv:Nt&&_(M.displacementMap.channel),emissiveMapUv:$t&&_(M.emissiveMap.channel),metalnessMapUv:Ft&&_(M.metalnessMap.channel),roughnessMapUv:P&&_(M.roughnessMap.channel),anisotropyMapUv:Rt&&_(M.anisotropyMap.channel),clearcoatMapUv:Ct&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(M.sheenRoughnessMap.channel),specularMapUv:Pt&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:Et&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:xt&&_(M.thicknessMap.channel),alphaMapUv:I&&_(M.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(zt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!at.attributes.uv&&(gt||I),fog:!!et,useFog:M.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:$,skinning:V.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:B,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:$t&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ze,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:U&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(U&&M.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return q.vertexUv1s=c.has(1),q.vertexUv2s=c.has(2),q.vertexUv3s=c.has(3),c.clear(),q}function f(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function g(M){let S=x[M.type],L;if(S){let Z=Vn[S];L=Ui.clone(Z.uniforms)}else L=M.uniforms;return L}function A(M,S){let L;for(let Z=0,V=h.length;Z<V;Z++){let et=h[Z];if(et.cacheKey===S){L=et,++L.usedTimes;break}}return L===void 0&&(L=new jx(n,S,M,r),h.push(L)),L}function w(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:g,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:C}}function e_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function n_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ru(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,x,_,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,x,_,m){let f=o(u,d,p,x,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,x,_,m){let f=o(u,d,p,x,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||n_),i.length>1&&i.sort(d||Ru),s.length>1&&s.sort(d||Ru)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function i_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Cu,n.set(i,[o])):s>=r.length?(o=new Cu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function s_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Ht};break;case"SpotLight":e={position:new k,direction:new k,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function r_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var o_=0;function a_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function l_(n){let t=new s_,e=r_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,x=0,_=0,m=0,f=0,y=0,v=0,g=0,A=0,w=0,E=0;c.sort(a_);for(let M=0,S=c.length;M<S;M++){let L=c[M],Z=L.color,V=L.intensity,et=L.distance,at=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Z.r*V,u+=Z.g*V,d+=Z.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],V);E++}else if(L.isDirectionalLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let mt=L.shadow,Q=e.get(L);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=at,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=H,p++}else if(L.isSpotLight){let H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(Z).multiplyScalar(V),H.distance=et,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;let mt=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,mt.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=mt.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=at,g++}_++}else if(L.isRectAreaLight){let H=t.get(L);H.color.copy(Z).multiplyScalar(V),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){let H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let mt=L.shadow,Q=e.get(L);Q.shadowIntensity=mt.intensity,Q.shadowBias=mt.bias,Q.shadowNormalBias=mt.normalBias,Q.shadowRadius=mt.radius,Q.shadowMapSize=mt.mapSize,Q.shadowCameraNear=mt.camera.near,Q.shadowCameraFar=mt.camera.far,i.pointShadow[x]=Q,i.pointShadowMap[x]=at,i.pointShadowMatrix[x]=L.shadow.matrix,v++}i.point[x]=H,x++}else if(L.isHemisphereLight){let H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==p||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==g||C.numSpotMaps!==A||C.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=g+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,C.directionalLength=p,C.pointLength=x,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=g,C.numSpotMaps=A,C.numLightProbes=E,i.version=o_++)}function l(c,h){let u=0,d=0,p=0,x=0,_=0,m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let v=c[f];if(v.isDirectionalLight){let g=i.directional[u];g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),u++}else if(v.isSpotLight){let g=i.spot[p];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let g=i.rectArea[x];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(v.width*.5,0,0),g.halfHeight.set(0,v.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let g=i.point[d];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let g=i.hemi[_];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Iu(n){let t=new l_(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function c_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Iu(n),t.set(s,[a])):r>=o.length?(a=new Iu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ec=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nc=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function f_(n,t,e){let i=new vr,s=new Jt,r=new Jt,o=new Re,a=new ec({depthPacking:_p}),l=new nc,c={},h=e.maxTextureSize,u={[Pi]:qe,[qe]:Pi,[ze]:ze},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new xe;x.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ve(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let f=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Xn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let V=f!==ii&&this.type===ii,et=f===ii&&this.type!==ii;for(let at=0,H=w.length;at<H;at++){let mt=w[at],Q=mt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let ut=Q.getFrameExtents();if(s.multiply(ut),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,Q.mapSize.y=r.y)),Q.map===null||V===!0||et===!0){let At=this.type!==ii?{minFilter:fn,magFilter:fn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Qe(s.x,s.y,At),Q.map.texture.name=mt.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let Mt=Q.getViewportCount();for(let At=0;At<Mt;At++){let lt=Q.getViewport(At);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),Z.viewport(o),Q.updateMatrices(mt,At),i=Q.getFrustum(),g(E,C,Q.camera,mt,this.type)}Q.isPointLightShadow!==!0&&this.type===ii&&y(Q,C),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function y(w,E){let C=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qe(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,C,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,C,p,_,null)}function v(w,E,C,M){let S=null,L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let Z=S.uuid,V=E.uuid,et=c[Z];et===void 0&&(et={},c[Z]=et);let at=et[V];at===void 0&&(at=S.clone(),et[V]=at,E.addEventListener("dispose",A)),S=at}if(S.visible=E.visible,S.wireframe=E.wireframe,M===ii?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Z=n.properties.get(S);Z.light=C}return S}function g(w,E,C,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let V=t.update(w),et=w.material;if(Array.isArray(et)){let at=V.groups;for(let H=0,mt=at.length;H<mt;H++){let Q=at[H],ut=et[Q.materialIndex];if(ut&&ut.visible){let Mt=v(w,ut,M,S);w.onBeforeShadow(n,w,E,C,V,Mt,Q),n.renderBufferDirect(C,null,V,Mt,w,Q),w.onAfterShadow(n,w,E,C,V,Mt,Q)}}}else if(et.visible){let at=v(w,et,M,S);w.onBeforeShadow(n,w,E,C,V,at,null),n.renderBufferDirect(C,null,V,at,w,null),w.onAfterShadow(n,w,E,C,V,at,null)}}let Z=w.children;for(let V=0,et=Z.length;V<et;V++)g(Z[V],E,C,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(let C in c){let M=c[C],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var d_={[al]:ll,[cl]:fl,[hl]:dl,[Ps]:ul,[ll]:al,[fl]:cl,[dl]:hl,[ul]:Ps};function p_(n,t){function e(){let O=!1,xt=new Re,T=null,I=new Re(0,0,0,0);return{setMask:function(N){T!==N&&!O&&(n.colorMask(N,N,N,N),T=N)},setLocked:function(N){O=N},setClear:function(N,X,U,B,q){q===!0&&(N*=B,X*=B,U*=B),xt.set(N,X,U,B),I.equals(xt)===!1&&(n.clearColor(N,X,U,B),I.copy(xt))},reset:function(){O=!1,T=null,I.set(-1,0,0,0)}}}function i(){let O=!1,xt=!1,T=null,I=null,N=null;return{setReversed:function(X){if(xt!==X){let U=t.get("EXT_clip_control");xt?U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT):U.clipControlEXT(U.LOWER_LEFT_EXT,U.NEGATIVE_ONE_TO_ONE_EXT);let B=N;N=null,this.setClear(B)}xt=X},getReversed:function(){return xt},setTest:function(X){X?D(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(X){T!==X&&!O&&(n.depthMask(X),T=X)},setFunc:function(X){if(xt&&(X=d_[X]),I!==X){switch(X){case al:n.depthFunc(n.NEVER);break;case ll:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case hl:n.depthFunc(n.EQUAL);break;case ul:n.depthFunc(n.GEQUAL);break;case fl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}I=X}},setLocked:function(X){O=X},setClear:function(X){N!==X&&(xt&&(X=1-X),n.clearDepth(X),N=X)},reset:function(){O=!1,T=null,I=null,N=null,xt=!1}}}function s(){let O=!1,xt=null,T=null,I=null,N=null,X=null,U=null,B=null,q=null;return{setTest:function(K){O||(K?D(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(K){xt!==K&&!O&&(n.stencilMask(K),xt=K)},setFunc:function(K,tt,yt){(T!==K||I!==tt||N!==yt)&&(n.stencilFunc(K,tt,yt),T=K,I=tt,N=yt)},setOp:function(K,tt,yt){(X!==K||U!==tt||B!==yt)&&(n.stencilOp(K,tt,yt),X=K,U=tt,B=yt)},setLocked:function(K){O=K},setClear:function(K){q!==K&&(n.clearStencil(K),q=K)},reset:function(){O=!1,xt=null,T=null,I=null,N=null,X=null,U=null,B=null,q=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],x=null,_=!1,m=null,f=null,y=null,v=null,g=null,A=null,w=null,E=new Ht(0,0,0),C=0,M=!1,S=null,L=null,Z=null,V=null,et=null,at=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,mt=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=mt>=1):Q.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=mt>=2);let ut=null,Mt={},At=n.getParameter(n.SCISSOR_BOX),lt=n.getParameter(n.VIEWPORT),_t=new Re().fromArray(At),J=new Re().fromArray(lt);function z(O,xt,T,I){let N=new Uint8Array(4),X=n.createTexture();n.bindTexture(O,X),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let U=0;U<T;U++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,I,0,n.RGBA,n.UNSIGNED_BYTE,N):n.texImage2D(xt+U,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,N);return X}let st={};st[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(n.DEPTH_TEST),o.setFunc(Ps),Bt(!1),zt(Dh),D(n.CULL_FACE),F(Xn);function D(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function $(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function j(O,xt){return u[O]!==xt?(n.bindFramebuffer(O,xt),u[O]=xt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=xt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function rt(O,xt){let T=p,I=!1;if(O){T=d.get(xt),T===void 0&&(T=[],d.set(xt,T));let N=O.textures;if(T.length!==N.length||T[0]!==n.COLOR_ATTACHMENT0){for(let X=0,U=N.length;X<U;X++)T[X]=n.COLOR_ATTACHMENT0+X;T.length=N.length,I=!0}}else T[0]!==n.BACK&&(T[0]=n.BACK,I=!0);I&&n.drawBuffers(T)}function gt(O){return x!==O?(n.useProgram(O),x=O,!0):!1}let pt={[ri]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[jd]:n.FUNC_REVERSE_SUBTRACT};pt[Qd]=n.MIN,pt[tp]=n.MAX;let Tt={[ep]:n.ZERO,[Ec]:n.ONE,[np]:n.SRC_COLOR,[ol]:n.SRC_ALPHA,[lp]:n.SRC_ALPHA_SATURATE,[op]:n.DST_COLOR,[sp]:n.DST_ALPHA,[ip]:n.ONE_MINUS_SRC_COLOR,[mr]:n.ONE_MINUS_SRC_ALPHA,[ap]:n.ONE_MINUS_DST_COLOR,[rp]:n.ONE_MINUS_DST_ALPHA,[cp]:n.CONSTANT_COLOR,[hp]:n.ONE_MINUS_CONSTANT_COLOR,[up]:n.CONSTANT_ALPHA,[fp]:n.ONE_MINUS_CONSTANT_ALPHA};function F(O,xt,T,I,N,X,U,B,q,K){if(O===Xn){_===!0&&($(n.BLEND),_=!1);return}if(_===!1&&(D(n.BLEND),_=!0),O!==bc){if(O!==m||K!==M){if((f!==ri||g!==ri)&&(n.blendEquation(n.FUNC_ADD),f=ri,g=ri),K)switch(O){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vo:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,A=null,w=null,E.set(0,0,0),C=0,m=O,M=K}return}N=N||xt,X=X||T,U=U||I,(xt!==f||N!==g)&&(n.blendEquationSeparate(pt[xt],pt[N]),f=xt,g=N),(T!==y||I!==v||X!==A||U!==w)&&(n.blendFuncSeparate(Tt[T],Tt[I],Tt[X],Tt[U]),y=T,v=I,A=X,w=U),(B.equals(E)===!1||q!==C)&&(n.blendColor(B.r,B.g,B.b,q),E.copy(B),C=q),m=O,M=!1}function Qt(O,xt){O.side===ze?$(n.CULL_FACE):D(n.CULL_FACE);let T=O.side===qe;xt&&(T=!T),Bt(T),O.blending===As&&O.transparent===!1?F(Xn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let I=O.stencilWrite;a.setTest(I),I&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function zt(O){O!==$d?(D(n.CULL_FACE),O!==L&&(O===Dh?n.cullFace(n.BACK):O===Jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),L=O}function Nt(O){O!==Z&&(H&&n.lineWidth(O),Z=O)}function $t(O,xt,T){O?(D(n.POLYGON_OFFSET_FILL),(V!==xt||et!==T)&&(n.polygonOffset(xt,T),V=xt,et=T)):$(n.POLYGON_OFFSET_FILL)}function Ft(O){O?D(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function P(O){O===void 0&&(O=n.TEXTURE0+at-1),ut!==O&&(n.activeTexture(O),ut=O)}function b(O,xt,T){T===void 0&&(ut===null?T=n.TEXTURE0+at-1:T=ut);let I=Mt[T];I===void 0&&(I={type:void 0,texture:void 0},Mt[T]=I),(I.type!==O||I.texture!==xt)&&(ut!==T&&(n.activeTexture(T),ut=T),n.bindTexture(O,xt||st[O]),I.type=O,I.texture=xt)}function W(){let O=Mt[ut];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ct(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(O){_t.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),_t.copy(O))}function ht(O){J.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Pt(O,xt){let T=c.get(xt);T===void 0&&(T=new WeakMap,c.set(xt,T));let I=T.get(O);I===void 0&&(I=n.getUniformBlockIndex(xt,O.name),T.set(O,I))}function ft(O,xt){let I=c.get(xt).get(O);l.get(xt)!==I&&(n.uniformBlockBinding(xt,I,O.__bindingPointIndex),l.set(xt,I))}function Et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ut=null,Mt={},u={},d=new WeakMap,p=[],x=null,_=!1,m=null,f=null,y=null,v=null,g=null,A=null,w=null,E=new Ht(0,0,0),C=0,M=!1,S=null,L=null,Z=null,V=null,et=null,_t.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:$,bindFramebuffer:j,drawBuffers:rt,useProgram:gt,setBlending:F,setMaterial:Qt,setFlipSided:Bt,setCullFace:zt,setLineWidth:Nt,setPolygonOffset:$t,setScissorTest:Ft,activeTexture:P,bindTexture:b,unbindTexture:W,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:It,texImage3D:qt,updateUBOMapping:Pt,uniformBlockBinding:ft,texStorage2D:Zt,texStorage3D:vt,texSubImage2D:ot,texSubImage3D:bt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ct,scissor:Vt,viewport:ht,reset:Et}}function Pu(n,t,e,i){let s=m_(i);switch(e){case $u:return n*t;case Ku:return n*t;case ju:return n*t*2;case Dc:return n*t/s.components*s.byteLength;case Uc:return n*t/s.components*s.byteLength;case Qu:return n*t*2/s.components*s.byteLength;case Nc:return n*t*2/s.components*s.byteLength;case Ju:return n*t*3/s.components*s.byteLength;case Dn:return n*t*4/s.components*s.byteLength;case Fc:return n*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case go:case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:case yl:return Math.max(n,16)*Math.max(t,8)/4;case xl:case vl:return Math.max(n,8)*Math.max(t,8)/2;case Ml:case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _o:case Bl:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tf:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Hl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(n){switch(n){case li:case qu:return{byteLength:1,components:1};case xr:case Yu:case Fn:return{byteLength:2,components:1};case Pc:case Lc:return{byteLength:2,components:4};case Qi:case Ic:case Wn:return{byteLength:4,components:1};case Zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function g_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return p?new OffscreenCanvas(P,b):bo("canvas")}function _(P,b,W){let ct=1,dt=Ft(P);if((dt.width>W||dt.height>W)&&(ct=W/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ot=Math.floor(ct*dt.width),bt=Math.floor(ct*dt.height);u===void 0&&(u=x(ot,bt));let Rt=b?x(ot,bt):u;return Rt.width=ot,Rt.height=bt,Rt.getContext("2d").drawImage(P,0,0,ot,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+bt+")."),Rt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,b,W,ct,dt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot=b;if(b===n.RED&&(W===n.FLOAT&&(ot=n.R32F),W===n.HALF_FLOAT&&(ot=n.R16F),W===n.UNSIGNED_BYTE&&(ot=n.R8)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ot=n.R8UI),W===n.UNSIGNED_SHORT&&(ot=n.R16UI),W===n.UNSIGNED_INT&&(ot=n.R32UI),W===n.BYTE&&(ot=n.R8I),W===n.SHORT&&(ot=n.R16I),W===n.INT&&(ot=n.R32I)),b===n.RG&&(W===n.FLOAT&&(ot=n.RG32F),W===n.HALF_FLOAT&&(ot=n.RG16F),W===n.UNSIGNED_BYTE&&(ot=n.RG8)),b===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ot=n.RG8UI),W===n.UNSIGNED_SHORT&&(ot=n.RG16UI),W===n.UNSIGNED_INT&&(ot=n.RG32UI),W===n.BYTE&&(ot=n.RG8I),W===n.SHORT&&(ot=n.RG16I),W===n.INT&&(ot=n.RG32I)),b===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),W===n.UNSIGNED_INT&&(ot=n.RGB32UI),W===n.BYTE&&(ot=n.RGB8I),W===n.SHORT&&(ot=n.RGB16I),W===n.INT&&(ot=n.RGB32I)),b===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),W===n.UNSIGNED_INT&&(ot=n.RGBA32UI),W===n.BYTE&&(ot=n.RGBA8I),W===n.SHORT&&(ot=n.RGBA16I),W===n.INT&&(ot=n.RGBA32I)),b===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),b===n.RGBA){let bt=dt?Zo:re.getTransfer(ct);W===n.FLOAT&&(ot=n.RGBA32F),W===n.HALF_FLOAT&&(ot=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ot=bt===de?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function g(P,b){let W;return P?b===null||b===Qi||b===Us?W=n.DEPTH24_STENCIL8:b===Wn?W=n.DEPTH32F_STENCIL8:b===xr&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===Us?W=n.DEPTH_COMPONENT24:b===Wn?W=n.DEPTH_COMPONENT32F:b===xr&&(W=n.DEPTH_COMPONENT16),W}function A(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){let b=P.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&h.delete(b)}function E(P){let b=P.target;b.removeEventListener("dispose",E),S(b)}function C(P){let b=i.get(P);if(b.__webglInit===void 0)return;let W=P.source,ct=d.get(W);if(ct){let dt=ct[b.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&M(P),Object.keys(ct).length===0&&d.delete(W)}i.remove(P)}function M(P){let b=i.get(P);n.deleteTexture(b.__webglTexture);let W=P.source,ct=d.get(W);delete ct[b.__cacheKey],o.memory.textures--}function S(P){let b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(b.__webglFramebuffer[ct]))for(let dt=0;dt<b.__webglFramebuffer[ct].length;dt++)n.deleteFramebuffer(b.__webglFramebuffer[ct][dt]);else n.deleteFramebuffer(b.__webglFramebuffer[ct]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ct])}else{if(Array.isArray(b.__webglFramebuffer))for(let ct=0;ct<b.__webglFramebuffer.length;ct++)n.deleteFramebuffer(b.__webglFramebuffer[ct]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ct=0;ct<b.__webglColorRenderbuffer.length;ct++)b.__webglColorRenderbuffer[ct]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ct]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=P.textures;for(let ct=0,dt=W.length;ct<dt;ct++){let ot=i.get(W[ct]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(W[ct])}i.remove(P)}let L=0;function Z(){L=0}function V(){let P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function et(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function at(P,b){let W=i.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){let ct=P.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,P,b);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function H(P,b){let W=i.get(P);if(P.version>0&&W.__version!==P.version){J(W,P,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function mt(P,b){let W=i.get(P);if(P.version>0&&W.__version!==P.version){J(W,P,b);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function Q(P,b){let W=i.get(P);if(P.version>0&&W.__version!==P.version){z(W,P,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}let ut={[gr]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},Mt={[fn]:n.NEAREST,[gp]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[Ra]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},At={[yp]:n.NEVER,[Tp]:n.ALWAYS,[Mp]:n.LESS,[nf]:n.LEQUAL,[Sp]:n.EQUAL,[wp]:n.GEQUAL,[bp]:n.GREATER,[Ep]:n.NOTEQUAL};function lt(P,b){if(b.type===Wn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===Ra||b.magFilter===kr||b.magFilter===ji||b.minFilter===Gn||b.minFilter===Ra||b.minFilter===kr||b.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ut[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ut[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ut[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Mt[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,At[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==kr&&b.minFilter!==ji||b.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function _t(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));let ct=b.source,dt=d.get(ct);dt===void 0&&(dt={},d.set(ct,dt));let ot=et(b);if(ot!==P.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),dt[ot].usedTimes++;let bt=dt[P.__cacheKey];bt!==void 0&&(dt[P.__cacheKey].usedTimes--,bt.usedTimes===0&&M(b)),P.__cacheKey=ot,P.__webglTexture=dt[ot].texture}return W}function J(P,b,W){let ct=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=n.TEXTURE_3D);let dt=_t(P,b),ot=b.source;e.bindTexture(ct,P.__webglTexture,n.TEXTURE0+W);let bt=i.get(ot);if(ot.version!==bt.__version||dt===!0){e.activeTexture(n.TEXTURE0+W);let Rt=re.getPrimaries(re.workingColorSpace),Ct=b.colorSpace===Ci?null:re.getPrimaries(b.colorSpace),Zt=b.colorSpace===Ci||Rt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let vt=_(b.image,!1,s.maxTextureSize);vt=$t(b,vt);let It=r.convert(b.format,b.colorSpace),qt=r.convert(b.type),Vt=v(b.internalFormat,It,qt,b.colorSpace,b.isVideoTexture);lt(ct,b);let ht,Pt=b.mipmaps,ft=b.isVideoTexture!==!0,Et=bt.__version===void 0||dt===!0,O=ot.dataReady,xt=A(b,vt);if(b.isDepthTexture)Vt=g(b.format===Ns,b.type),Et&&(ft?e.texStorage2D(n.TEXTURE_2D,1,Vt,vt.width,vt.height):e.texImage2D(n.TEXTURE_2D,0,Vt,vt.width,vt.height,0,It,qt,null));else if(b.isDataTexture)if(Pt.length>0){ft&&Et&&e.texStorage2D(n.TEXTURE_2D,xt,Vt,Pt[0].width,Pt[0].height);for(let T=0,I=Pt.length;T<I;T++)ht=Pt[T],ft?O&&e.texSubImage2D(n.TEXTURE_2D,T,0,0,ht.width,ht.height,It,qt,ht.data):e.texImage2D(n.TEXTURE_2D,T,Vt,ht.width,ht.height,0,It,qt,ht.data);b.generateMipmaps=!1}else ft?(Et&&e.texStorage2D(n.TEXTURE_2D,xt,Vt,vt.width,vt.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt.width,vt.height,It,qt,vt.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,vt.width,vt.height,0,It,qt,vt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ft&&Et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Vt,Pt[0].width,Pt[0].height,vt.depth);for(let T=0,I=Pt.length;T<I;T++)if(ht=Pt[T],b.format!==Dn)if(It!==null)if(ft){if(O)if(b.layerUpdates.size>0){let N=Pu(ht.width,ht.height,b.format,b.type);for(let X of b.layerUpdates){let U=ht.data.subarray(X*N/ht.data.BYTES_PER_ELEMENT,(X+1)*N/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,T,0,0,X,ht.width,ht.height,1,It,U)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,T,0,0,0,ht.width,ht.height,vt.depth,It,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,T,Vt,ht.width,ht.height,vt.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,T,0,0,0,ht.width,ht.height,vt.depth,It,qt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,T,Vt,ht.width,ht.height,vt.depth,0,It,qt,ht.data)}else{ft&&Et&&e.texStorage2D(n.TEXTURE_2D,xt,Vt,Pt[0].width,Pt[0].height);for(let T=0,I=Pt.length;T<I;T++)ht=Pt[T],b.format!==Dn?It!==null?ft?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,T,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,T,Vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?O&&e.texSubImage2D(n.TEXTURE_2D,T,0,0,ht.width,ht.height,It,qt,ht.data):e.texImage2D(n.TEXTURE_2D,T,Vt,ht.width,ht.height,0,It,qt,ht.data)}else if(b.isDataArrayTexture)if(ft){if(Et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Vt,vt.width,vt.height,vt.depth),O)if(b.layerUpdates.size>0){let T=Pu(vt.width,vt.height,b.format,b.type);for(let I of b.layerUpdates){let N=vt.data.subarray(I*T/vt.data.BYTES_PER_ELEMENT,(I+1)*T/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,I,vt.width,vt.height,1,It,qt,N)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,It,qt,vt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,vt.width,vt.height,vt.depth,0,It,qt,vt.data);else if(b.isData3DTexture)ft?(Et&&e.texStorage3D(n.TEXTURE_3D,xt,Vt,vt.width,vt.height,vt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,It,qt,vt.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,vt.width,vt.height,vt.depth,0,It,qt,vt.data);else if(b.isFramebufferTexture){if(Et)if(ft)e.texStorage2D(n.TEXTURE_2D,xt,Vt,vt.width,vt.height);else{let T=vt.width,I=vt.height;for(let N=0;N<xt;N++)e.texImage2D(n.TEXTURE_2D,N,Vt,T,I,0,It,qt,null),T>>=1,I>>=1}}else if(Pt.length>0){if(ft&&Et){let T=Ft(Pt[0]);e.texStorage2D(n.TEXTURE_2D,xt,Vt,T.width,T.height)}for(let T=0,I=Pt.length;T<I;T++)ht=Pt[T],ft?O&&e.texSubImage2D(n.TEXTURE_2D,T,0,0,It,qt,ht):e.texImage2D(n.TEXTURE_2D,T,Vt,It,qt,ht);b.generateMipmaps=!1}else if(ft){if(Et){let T=Ft(vt);e.texStorage2D(n.TEXTURE_2D,xt,Vt,T.width,T.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,qt,vt)}else e.texImage2D(n.TEXTURE_2D,0,Vt,It,qt,vt);m(b)&&f(ct),bt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function z(P,b,W){if(b.image.length!==6)return;let ct=_t(P,b),dt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);let ot=i.get(dt);if(dt.version!==ot.__version||ct===!0){e.activeTexture(n.TEXTURE0+W);let bt=re.getPrimaries(re.workingColorSpace),Rt=b.colorSpace===Ci?null:re.getPrimaries(b.colorSpace),Ct=b.colorSpace===Ci||bt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,vt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let I=0;I<6;I++)!Zt&&!vt?It[I]=_(b.image[I],!0,s.maxCubemapSize):It[I]=vt?b.image[I].image:b.image[I],It[I]=$t(b,It[I]);let qt=It[0],Vt=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),Pt=v(b.internalFormat,Vt,ht,b.colorSpace),ft=b.isVideoTexture!==!0,Et=ot.__version===void 0||ct===!0,O=dt.dataReady,xt=A(b,qt);lt(n.TEXTURE_CUBE_MAP,b);let T;if(Zt){ft&&Et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Pt,qt.width,qt.height);for(let I=0;I<6;I++){T=It[I].mipmaps;for(let N=0;N<T.length;N++){let X=T[N];b.format!==Dn?Vt!==null?ft?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,0,0,X.width,X.height,Vt,X.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,Pt,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,0,0,X.width,X.height,Vt,ht,X.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,Pt,X.width,X.height,0,Vt,ht,X.data)}}}else{if(T=b.mipmaps,ft&&Et){T.length>0&&xt++;let I=Ft(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Pt,I.width,I.height)}for(let I=0;I<6;I++)if(vt){ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,It[I].width,It[I].height,Vt,ht,It[I].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Pt,It[I].width,It[I].height,0,Vt,ht,It[I].data);for(let N=0;N<T.length;N++){let U=T[N].image[I].image;ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,0,0,U.width,U.height,Vt,ht,U.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,Pt,U.width,U.height,0,Vt,ht,U.data)}}else{ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Vt,ht,It[I]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Pt,Vt,ht,It[I]);for(let N=0;N<T.length;N++){let X=T[N];ft?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,0,0,Vt,ht,X.image[I]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,Pt,Vt,ht,X.image[I])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),ot.__version=dt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function st(P,b,W,ct,dt,ot){let bt=r.convert(W.format,W.colorSpace),Rt=r.convert(W.type),Ct=v(W.internalFormat,bt,Rt,W.colorSpace),Zt=i.get(b),vt=i.get(W);if(vt.__renderTarget=b,!Zt.__hasExternalTextures){let It=Math.max(1,b.width>>ot),qt=Math.max(1,b.height>>ot);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,ot,Ct,It,qt,b.depth,0,bt,Rt,null):e.texImage2D(dt,ot,Ct,It,qt,0,bt,Rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),zt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,dt,vt.__webglTexture,0,Bt(b)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,dt,vt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function D(P,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){let ct=b.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,ot=g(b.stencilBuffer,dt),bt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=Bt(b);zt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,ot,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,ot,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ot,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,P)}else{let ct=b.textures;for(let dt=0;dt<ct.length;dt++){let ot=ct[dt],bt=r.convert(ot.format,ot.colorSpace),Rt=r.convert(ot.type),Ct=v(ot.internalFormat,bt,Rt,ot.colorSpace),Zt=Bt(b);W&&zt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,Ct,b.width,b.height):zt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,Ct,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ct,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=i.get(b.depthTexture);ct.__renderTarget=b,(!ct.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at(b.depthTexture,0);let dt=ct.__webglTexture,ot=Bt(b);if(b.depthTexture.format===Rs)zt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0);else if(b.depthTexture.format===Ns)zt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function j(P){let b=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let ct=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ct){let dt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),b.__depthDisposeCallback=dt}b.__boundDepthTexture=ct}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$(b.__webglFramebuffer,P)}else if(W){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]===void 0)b.__webglDepthbuffer[ct]=n.createRenderbuffer(),D(b.__webglDepthbuffer[ct],P,!1);else{let dt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[ct];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),D(b.__webglDepthbuffer,P,!1);else{let ct=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,dt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(P,b,W){let ct=i.get(P);b!==void 0&&st(ct.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&j(P)}function gt(P){let b=P.texture,W=i.get(P),ct=i.get(b);P.addEventListener("dispose",E);let dt=P.textures,ot=P.isWebGLCubeRenderTarget===!0,bt=dt.length>1;if(bt||(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=b.version,o.memory.textures++),ot){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)W.__webglFramebuffer[Rt][Ct]=n.createFramebuffer()}else W.__webglFramebuffer[Rt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(bt)for(let Rt=0,Ct=dt.length;Rt<Ct;Rt++){let Zt=i.get(dt[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&zt(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<dt.length;Rt++){let Ct=dt[Rt];W.__webglColorRenderbuffer[Rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);let Zt=r.convert(Ct.format,Ct.colorSpace),vt=r.convert(Ct.type),It=v(Ct.internalFormat,Zt,vt,Ct.colorSpace,P.isXRRenderTarget===!0),qt=Bt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,It,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),D(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),lt(n.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)st(W.__webglFramebuffer[Rt][Ct],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ct);else st(W.__webglFramebuffer[Rt],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);m(b)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let Rt=0,Ct=dt.length;Rt<Ct;Rt++){let Zt=dt[Rt],vt=i.get(Zt);e.bindTexture(n.TEXTURE_2D,vt.__webglTexture),lt(n.TEXTURE_2D,Zt),st(W.__webglFramebuffer,P,Zt,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,0),m(Zt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let Rt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Rt,ct.__webglTexture),lt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)st(W.__webglFramebuffer[Ct],P,b,n.COLOR_ATTACHMENT0,Rt,Ct);else st(W.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,Rt,0);m(b)&&f(Rt),e.unbindTexture()}P.depthBuffer&&j(P)}function pt(P){let b=P.textures;for(let W=0,ct=b.length;W<ct;W++){let dt=b[W];if(m(dt)){let ot=y(P),bt=i.get(dt).__webglTexture;e.bindTexture(ot,bt),f(ot),e.unbindTexture()}}}let Tt=[],F=[];function Qt(P){if(P.samples>0){if(zt(P)===!1){let b=P.textures,W=P.width,ct=P.height,dt=n.COLOR_BUFFER_BIT,ot=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(P),Rt=b.length>1;if(Rt)for(let Ct=0;Ct<b.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),Rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Ct]);let Zt=i.get(b[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,W,ct,0,0,W,ct,dt,n.NEAREST),l===!0&&(Tt.length=0,F.length=0,Tt.push(n.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Tt.push(ot),F.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Rt)for(let Ct=0;Ct<b.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Ct]);let Zt=i.get(b[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Bt(P){return Math.min(s.maxSamples,P.samples)}function zt(P){let b=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function $t(P,b){let W=P.colorSpace,ct=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Vs&&W!==Ci&&(re.getTransfer(W)===de?(ct!==Dn||dt!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=at,this.setTexture2DArray=H,this.setTexture3D=mt,this.setTextureCube=Q,this.rebindTextures=rt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=st,this.useMultisampledRTT=zt}function x_(n,t){function e(i,s=Ci){let r,o=re.getTransfer(s);if(i===li)return n.UNSIGNED_BYTE;if(i===Pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qu)return n.BYTE;if(i===Yu)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===Ic)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===$u)return n.ALPHA;if(i===Ju)return n.RGB;if(i===Dn)return n.RGBA;if(i===Ku)return n.LUMINANCE;if(i===ju)return n.LUMINANCE_ALPHA;if(i===Rs)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===Dc)return n.RED;if(i===Uc)return n.RED_INTEGER;if(i===Qu)return n.RG;if(i===Nc)return n.RG_INTEGER;if(i===Fc)return n.RGBA_INTEGER;if(i===po||i===mo||i===go||i===xo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xl||i===_l||i===vl||i===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===Sl||i===bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ml||i===Sl)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===El||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Il||i===Pl||i===Ll||i===Dl||i===Ul||i===Nl||i===Fl||i===Ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===El)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Al)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Il)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_o||i===Bl||i===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_o)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tf||i===kl||i===Hl||i===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ic=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ye=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},__={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(__)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ae({vertexShader:v_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new Os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends Li{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null,_=new sc,m=e.getContextAttributes(),f=null,y=null,v=[],g=[],A=new Jt,w=null,E=new Xe;E.viewport=new Re;let C=new Xe;C.viewport=new Re;let M=[E,C],S=new ic,L=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let z=v[J];return z===void 0&&(z=new pr,v[J]=z),z.getTargetRaySpace()},this.getControllerGrip=function(J){let z=v[J];return z===void 0&&(z=new pr,v[J]=z),z.getGripSpace()},this.getHand=function(J){let z=v[J];return z===void 0&&(z=new pr,v[J]=z),z.getHandSpace()};function V(J){let z=g.indexOf(J.inputSource);if(z===-1)return;let st=v[z];st!==void 0&&(st.update(J.inputSource,J.frame,c||o),st.dispatchEvent({type:J.type,data:J.inputSource}))}function et(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",at);for(let J=0;J<v.length;J++){let z=g[J];z!==null&&(g[J]=null,v[J].disconnect(z))}L=null,Z=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,y=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",et),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Qe(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let z=null,st=null,D=null;m.depth&&(D=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=m.stencil?Ns:Rs,st=m.stencil?Us:Qi);let $={colorFormat:e.RGBA8,depthFormat:D,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer($),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Qe(d.textureWidth,d.textureHeight,{format:Dn,type:li,depthTexture:new Lo(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(J){for(let z=0;z<J.removed.length;z++){let st=J.removed[z],D=g.indexOf(st);D>=0&&(g[D]=null,v[D].disconnect(st))}for(let z=0;z<J.added.length;z++){let st=J.added[z],D=g.indexOf(st);if(D===-1){for(let j=0;j<v.length;j++)if(j>=g.length){g.push(st),D=j;break}else if(g[j]===null){g[j]=st,D=j;break}if(D===-1)break}let $=v[D];$&&$.connect(st)}}let H=new k,mt=new k;function Q(J,z,st){H.setFromMatrixPosition(z.matrixWorld),mt.setFromMatrixPosition(st.matrixWorld);let D=H.distanceTo(mt),$=z.projectionMatrix.elements,j=st.projectionMatrix.elements,rt=$[14]/($[10]-1),gt=$[14]/($[10]+1),pt=($[9]+1)/$[5],Tt=($[9]-1)/$[5],F=($[8]-1)/$[0],Qt=(j[8]+1)/j[0],Bt=rt*F,zt=rt*Qt,Nt=D/(-F+Qt),$t=Nt*-F;if(z.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($t),J.translateZ(Nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),$[10]===-1)J.projectionMatrix.copy(z.projectionMatrix),J.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let Ft=rt+Nt,P=gt+Nt,b=Bt-$t,W=zt+(D-$t),ct=pt*gt/P*Ft,dt=Tt*gt/P*Ft;J.projectionMatrix.makePerspective(b,W,ct,dt,Ft,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,z){z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let z=J.near,st=J.far;_.texture!==null&&(_.depthNear>0&&(z=_.depthNear),_.depthFar>0&&(st=_.depthFar)),S.near=C.near=E.near=z,S.far=C.far=E.far=st,(L!==S.near||Z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,Z=S.far),E.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,S.layers.mask=E.layers.mask|C.layers.mask;let D=J.parent,$=S.cameras;ut(S,D);for(let j=0;j<$.length;j++)ut($[j],D);$.length===2?Q(S,E,C):S.projectionMatrix.copy(E.projectionMatrix),Mt(J,S,D)};function Mt(J,z,st){st===null?J.matrix.copy(z.matrixWorld):(J.matrix.copy(st.matrixWorld),J.matrix.invert(),J.matrix.multiply(z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(z.projectionMatrix),J.projectionMatrixInverse.copy(z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=So*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let At=null;function lt(J,z){if(h=z.getViewerPose(c||o),x=z,h!==null){let st=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let D=!1;st.length!==S.cameras.length&&(S.cameras.length=0,D=!0);for(let j=0;j<st.length;j++){let rt=st[j],gt=null;if(p!==null)gt=p.getViewport(rt);else{let Tt=u.getViewSubImage(d,rt);gt=Tt.viewport,j===0&&(t.setRenderTargetTextures(y,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(y))}let pt=M[j];pt===void 0&&(pt=new Xe,pt.layers.enable(j),pt.viewport=new Re,M[j]=pt),pt.matrix.fromArray(rt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(rt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(gt.x,gt.y,gt.width,gt.height),j===0&&(S.matrix.copy(pt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),D===!0&&S.cameras.push(pt)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")){let j=u.getDepthInformation(st[0]);j&&j.isValid&&j.texture&&_.init(t,j,s.renderState)}}for(let st=0;st<v.length;st++){let D=g[st],$=v[st];D!==null&&$!==void 0&&$.update(D,z,c||o)}At&&At(J,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),x=null}let _t=new af;_t.setAnimationLoop(lt),this.setAnimationLoop=function(J){At=J},this.dispose=function(){}}},Yi=new qn,M_=new ce;function S_(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,of(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),v=y.envMap,g=y.envMapRotation;v&&(m.envMap.value=v,Yi.copy(g),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(Yi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function b_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let g=v.program;i.uniformBlockBinding(y,g)}function c(y,v){let g=s[y.id];g===void 0&&(x(y),g=h(y),s[y.id]=g,y.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(y,A);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let v=u();y.__bindingPointIndex=v;let g=n.createBuffer(),A=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,g),g}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],g=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,E=g.length;w<E;w++){let C=Array.isArray(g[w])?g[w]:[g[w]];for(let M=0,S=C.length;M<S;M++){let L=C[M];if(p(L,w,M,A)===!0){let Z=L.__offset,V=Array.isArray(L.value)?L.value:[L.value],et=0;for(let at=0;at<V.length;at++){let H=V[at],mt=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,Z+et,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,et),et+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,g,A){let w=y.value,E=v+"_"+g;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{let C=A[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function x(y){let v=y.uniforms,g=0,A=16;for(let E=0,C=v.length;E<C;E++){let M=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,L=M.length;S<L;S++){let Z=M[S],V=Array.isArray(Z.value)?Z.value:[Z.value];for(let et=0,at=V.length;et<at;et++){let H=V[et],mt=_(H),Q=g%A,ut=Q%mt.boundary,Mt=Q+ut;g+=ut,Mt!==0&&A-Mt<mt.storage&&(g+=A-Mt),Z.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=g,g+=mt.storage}}}let w=g%A;return w>0&&(g+=A-w),y.__size=g,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let g=o.indexOf(v.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Do=class{constructor(t={}){let{canvas:e=Rp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Ii,this.toneMappingExposure=1;let g=this,A=!1,w=0,E=0,C=null,M=-1,S=null,L=new Re,Z=new Re,V=null,et=new Ht(0),at=0,H=e.width,mt=e.height,Q=1,ut=null,Mt=null,At=new Re(0,0,H,mt),lt=new Re(0,0,H,mt),_t=!1,J=new vr,z=!1,st=!1,D=new ce,$=new ce,j=new k,rt=new Re,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function Tt(){return C===null?Q:1}let F=i;function Qt(R,G){return e.getContext(R,G)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",X,!1),F===null){let G="webgl2";if(F=Qt(G,R),F===null)throw Qt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Bt,zt,Nt,$t,Ft,P,b,W,ct,dt,ot,bt,Rt,Ct,Zt,vt,It,qt,Vt,ht,Pt,ft,Et,O;function xt(){Bt=new zg(F),Bt.init(),ft=new x_(F,Bt),zt=new Dg(F,Bt,t,ft),Nt=new p_(F,Bt),zt.reverseDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),$t=new Vg(F),Ft=new e_,P=new g_(F,Bt,Nt,Ft,zt,ft,$t),b=new Ng(g),W=new Bg(g),ct=new $p(F),Et=new Pg(F,ct),dt=new kg(F,ct,$t,Et),ot=new Wg(F,dt,ct,$t),Vt=new Gg(F,zt,P),vt=new Ug(Ft),bt=new t_(g,b,W,Bt,zt,Et,vt),Rt=new S_(g,Ft),Ct=new i_,Zt=new c_(Bt),qt=new Ig(g,b,W,Nt,ot,p,l),It=new f_(g,ot,zt),O=new b_(F,$t,zt,Nt),ht=new Lg(F,Bt,$t),Pt=new Hg(F,Bt,$t),$t.programs=bt.programs,g.capabilities=zt,g.extensions=Bt,g.properties=Ft,g.renderLists=Ct,g.shadowMap=It,g.state=Nt,g.info=$t}xt();let T=new rc(g,F);this.xr=T,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=Bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(H,mt,!1))},this.getSize=function(R){return R.set(H,mt)},this.setSize=function(R,G,nt=!0){if(T.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,mt=G,e.width=Math.floor(R*Q),e.height=Math.floor(G*Q),nt===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(H*Q,mt*Q).floor()},this.setDrawingBufferSize=function(R,G,nt){H=R,mt=G,Q=nt,e.width=Math.floor(R*nt),e.height=Math.floor(G*nt),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(At)},this.setViewport=function(R,G,nt,it){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,G,nt,it),Nt.viewport(L.copy(At).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,G,nt,it){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,G,nt,it),Nt.scissor(Z.copy(lt).multiplyScalar(Q).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){Nt.setScissorTest(_t=R)},this.setOpaqueSort=function(R){ut=R},this.setTransparentSort=function(R){Mt=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(R=!0,G=!0,nt=!0){let it=0;if(R){let Y=!1;if(C!==null){let wt=C.texture.format;Y=wt===Fc||wt===Nc||wt===Uc}if(Y){let wt=C.texture.type,Ot=wt===li||wt===Qi||wt===xr||wt===Us||wt===Pc||wt===Lc,Gt=qt.getClearColor(),Wt=qt.getClearAlpha(),Kt=Gt.r,te=Gt.g,Xt=Gt.b;Ot?(x[0]=Kt,x[1]=te,x[2]=Xt,x[3]=Wt,F.clearBufferuiv(F.COLOR,0,x)):(_[0]=Kt,_[1]=te,_[2]=Xt,_[3]=Wt,F.clearBufferiv(F.COLOR,0,_))}else it|=F.COLOR_BUFFER_BIT}G&&(it|=F.DEPTH_BUFFER_BIT),nt&&(it|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",X,!1),Ct.dispose(),Zt.dispose(),Ft.dispose(),b.dispose(),W.dispose(),ot.dispose(),Et.dispose(),O.dispose(),bt.dispose(),T.dispose(),T.removeEventListener("sessionstart",Ut),T.removeEventListener("sessionend",Lt),St.stop()};function I(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let R=$t.autoReset,G=It.enabled,nt=It.autoUpdate,it=It.needsUpdate,Y=It.type;xt(),$t.autoReset=R,It.enabled=G,It.autoUpdate=nt,It.needsUpdate=it,It.type=Y}function X(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function U(R){let G=R.target;G.removeEventListener("dispose",U),B(G)}function B(R){q(R),Ft.remove(R)}function q(R){let G=Ft.get(R).programs;G!==void 0&&(G.forEach(function(nt){bt.releaseProgram(nt)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,nt,it,Y,wt){G===null&&(G=gt);let Ot=Y.isMesh&&Y.matrixWorld.determinant()<0,Gt=Ue(R,G,nt,it,Y);Nt.setMaterial(it,Ot);let Wt=nt.index,Kt=1;if(it.wireframe===!0){if(Wt=dt.getWireframeAttribute(nt),Wt===void 0)return;Kt=2}let te=nt.drawRange,Xt=nt.attributes.position,le=te.start*Kt,_e=(te.start+te.count)*Kt;wt!==null&&(le=Math.max(le,wt.start*Kt),_e=Math.min(_e,(wt.start+wt.count)*Kt)),Wt!==null?(le=Math.max(le,0),_e=Math.min(_e,Wt.count)):Xt!=null&&(le=Math.max(le,0),_e=Math.min(_e,Xt.count));let Se=_e-le;if(Se<0||Se===1/0)return;Et.setup(Y,it,Gt,nt,Wt);let sn,ue=ht;if(Wt!==null&&(sn=ct.get(Wt),ue=Pt,ue.setIndex(sn)),Y.isMesh)it.wireframe===!0?(Nt.setLineWidth(it.wireframeLinewidth*Tt()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(Y.isLine){let Yt=it.linewidth;Yt===void 0&&(Yt=1),Nt.setLineWidth(Yt*Tt()),Y.isLineSegments?ue.setMode(F.LINES):Y.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else Y.isPoints?ue.setMode(F.POINTS):Y.isSprite&&ue.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ue.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ue.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Yt=Y._multiDrawStarts,Kn=Y._multiDrawCounts,fe=Y._multiDrawCount,Cn=Wt?ct.get(Wt).bytesPerElement:1,hs=Ft.get(it).currentProgram.getUniforms();for(let cn=0;cn<fe;cn++)hs.setValue(F,"_gl_DrawID",cn),ue.render(Yt[cn]/Cn,Kn[cn])}else if(Y.isInstancedMesh)ue.renderInstances(le,Se,Y.count);else if(nt.isInstancedBufferGeometry){let Yt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Kn=Math.min(nt.instanceCount,Yt);ue.renderInstances(le,Se,Kn)}else ue.render(le,Se)};function K(R,G,nt){R.transparent===!0&&R.side===ze&&R.forceSinglePass===!1?(R.side=qe,R.needsUpdate=!0,Me(R,G,nt),R.side=Pi,R.needsUpdate=!0,Me(R,G,nt),R.side=ze):Me(R,G,nt)}this.compile=function(R,G,nt=null){nt===null&&(nt=R),f=Zt.get(nt),f.init(G),v.push(f),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),R!==nt&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights();let it=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let wt=Y.material;if(wt)if(Array.isArray(wt))for(let Ot=0;Ot<wt.length;Ot++){let Gt=wt[Ot];K(Gt,nt,Y),it.add(Gt)}else K(wt,nt,Y),it.add(wt)}),v.pop(),f=null,it},this.compileAsync=function(R,G,nt=null){let it=this.compile(R,G,nt);return new Promise(Y=>{function wt(){if(it.forEach(function(Ot){Ft.get(Ot).currentProgram.isReady()&&it.delete(Ot)}),it.size===0){Y(R);return}setTimeout(wt,10)}Bt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let tt=null;function yt(R){tt&&tt(R)}function Ut(){St.stop()}function Lt(){St.start()}let St=new af;St.setAnimationLoop(yt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(R){tt=R,T.setAnimationLoop(R),R===null?St.stop():St.start()},T.addEventListener("sessionstart",Ut),T.addEventListener("sessionend",Lt),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(T.cameraAutoUpdate===!0&&T.updateCamera(G),G=T.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,G,C),f=Zt.get(R,v.length),f.init(G),v.push(f),$.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix($),st=this.localClippingEnabled,z=vt.init(this.clippingPlanes,st),m=Ct.get(R,y.length),m.init(),y.push(m),T.enabled===!0&&T.isPresenting===!0){let wt=g.xr.getDepthSensingMesh();wt!==null&&kt(wt,G,-1/0,g.sortObjects)}kt(R,G,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ut,Mt),pt=T.enabled===!1||T.isPresenting===!1||T.hasDepthSensing()===!1,pt&&qt.addToRenderList(m,R),this.info.render.frame++,z===!0&&vt.beginShadows();let nt=f.state.shadowsArray;It.render(nt,R,G),z===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=m.opaque,Y=m.transmissive;if(f.setupLights(),G.isArrayCamera){let wt=G.cameras;if(Y.length>0)for(let Ot=0,Gt=wt.length;Ot<Gt;Ot++){let Wt=wt[Ot];ie(it,Y,R,Wt)}pt&&qt.render(R);for(let Ot=0,Gt=wt.length;Ot<Gt;Ot++){let Wt=wt[Ot];jt(m,R,Wt,Wt.viewport)}}else Y.length>0&&ie(it,Y,R,G),pt&&qt.render(R),jt(m,R,G);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(g,R,G),Et.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(f=v[v.length-1],z===!0&&vt.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function kt(R,G,nt,it){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){it&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);let Ot=ot.update(R),Gt=R.material;Gt.visible&&m.push(R,Ot,Gt,nt,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){let Ot=ot.update(R),Gt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),rt.copy(Ot.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4($)),Array.isArray(Gt)){let Wt=Ot.groups;for(let Kt=0,te=Wt.length;Kt<te;Kt++){let Xt=Wt[Kt],le=Gt[Xt.materialIndex];le&&le.visible&&m.push(R,Ot,le,nt,rt.z,Xt)}}else Gt.visible&&m.push(R,Ot,Gt,nt,rt.z,null)}}let wt=R.children;for(let Ot=0,Gt=wt.length;Ot<Gt;Ot++)kt(wt[Ot],G,nt,it)}function jt(R,G,nt,it){let Y=R.opaque,wt=R.transmissive,Ot=R.transparent;f.setupLightsView(nt),z===!0&&vt.setGlobalState(g.clippingPlanes,nt),it&&Nt.viewport(L.copy(it)),Y.length>0&&ae(Y,G,nt),wt.length>0&&ae(wt,G,nt),Ot.length>0&&ae(Ot,G,nt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ie(R,G,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[it.id]===void 0&&(f.state.transmissionRenderTarget[it.id]=new Qe(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Fn:li,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let wt=f.state.transmissionRenderTarget[it.id],Ot=it.viewport||L;wt.setSize(Ot.z,Ot.w);let Gt=g.getRenderTarget();g.setRenderTarget(wt),g.getClearColor(et),at=g.getClearAlpha(),at<1&&g.setClearColor(16777215,.5),g.clear(),pt&&qt.render(nt);let Wt=g.toneMapping;g.toneMapping=Ii;let Kt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),f.setupLightsView(it),z===!0&&vt.setGlobalState(g.clippingPlanes,it),ae(R,nt,it),P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Xt=0,le=G.length;Xt<le;Xt++){let _e=G[Xt],Se=_e.object,sn=_e.geometry,ue=_e.material,Yt=_e.group;if(ue.side===ze&&Se.layers.test(it.layers)){let Kn=ue.side;ue.side=qe,ue.needsUpdate=!0,me(Se,nt,it,sn,ue,Yt),ue.side=Kn,ue.needsUpdate=!0,te=!0}}te===!0&&(P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt))}g.setRenderTarget(Gt),g.setClearColor(et,at),Kt!==void 0&&(it.viewport=Kt),g.toneMapping=Wt}function ae(R,G,nt){let it=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,wt=R.length;Y<wt;Y++){let Ot=R[Y],Gt=Ot.object,Wt=Ot.geometry,Kt=it===null?Ot.material:it,te=Ot.group;Gt.layers.test(nt.layers)&&me(Gt,G,nt,Wt,Kt,te)}}function me(R,G,nt,it,Y,wt){R.onBeforeRender(g,G,nt,it,Y,wt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(g,G,nt,it,R,wt),Y.transparent===!0&&Y.side===ze&&Y.forceSinglePass===!1?(Y.side=qe,Y.needsUpdate=!0,g.renderBufferDirect(nt,G,it,Y,R,wt),Y.side=Pi,Y.needsUpdate=!0,g.renderBufferDirect(nt,G,it,Y,R,wt),Y.side=ze):g.renderBufferDirect(nt,G,it,Y,R,wt),R.onAfterRender(g,G,nt,it,Y,wt)}function Me(R,G,nt){G.isScene!==!0&&(G=gt);let it=Ft.get(R),Y=f.state.lights,wt=f.state.shadowsArray,Ot=Y.state.version,Gt=bt.getParameters(R,Y.state,wt,G,nt),Wt=bt.getProgramCacheKey(Gt),Kt=it.programs;it.environment=R.isMeshStandardMaterial?G.environment:null,it.fog=G.fog,it.envMap=(R.isMeshStandardMaterial?W:b).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",U),Kt=new Map,it.programs=Kt);let te=Kt.get(Wt);if(te!==void 0){if(it.currentProgram===te&&it.lightsStateVersion===Ot)return Ke(R,Gt),te}else Gt.uniforms=bt.getUniforms(R),R.onBeforeCompile(Gt,g),te=bt.acquireProgram(Gt,Wt),Kt.set(Wt,te),it.uniforms=Gt.uniforms;let Xt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=vt.uniform),Ke(R,Gt),it.needsLights=yi(R),it.lightsStateVersion=Ot,it.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),it.currentProgram=te,it.uniformsList=null,te}function Oe(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=Is.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Ke(R,G){let nt=Ft.get(R);nt.outputColorSpace=G.outputColorSpace,nt.batching=G.batching,nt.batchingColor=G.batchingColor,nt.instancing=G.instancing,nt.instancingColor=G.instancingColor,nt.instancingMorph=G.instancingMorph,nt.skinning=G.skinning,nt.morphTargets=G.morphTargets,nt.morphNormals=G.morphNormals,nt.morphColors=G.morphColors,nt.morphTargetsCount=G.morphTargetsCount,nt.numClippingPlanes=G.numClippingPlanes,nt.numIntersection=G.numClipIntersection,nt.vertexAlphas=G.vertexAlphas,nt.vertexTangents=G.vertexTangents,nt.toneMapping=G.toneMapping}function Ue(R,G,nt,it,Y){G.isScene!==!0&&(G=gt),P.resetTextureUnits();let wt=G.fog,Ot=it.isMeshStandardMaterial?G.environment:null,Gt=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vs,Wt=(it.isMeshStandardMaterial?W:b).get(it.envMap||Ot),Kt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,te=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Xt=!!nt.morphAttributes.position,le=!!nt.morphAttributes.normal,_e=!!nt.morphAttributes.color,Se=Ii;it.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=g.toneMapping);let sn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ue=sn!==void 0?sn.length:0,Yt=Ft.get(it),Kn=f.state.lights;if(z===!0&&(st===!0||R!==S)){let vn=R===S&&it.id===M;vt.setState(it,R,vn)}let fe=!1;it.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Kn.state.version||Yt.outputColorSpace!==Gt||Y.isBatchedMesh&&Yt.batching===!1||!Y.isBatchedMesh&&Yt.batching===!0||Y.isBatchedMesh&&Yt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Yt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Yt.instancing===!1||!Y.isInstancedMesh&&Yt.instancing===!0||Y.isSkinnedMesh&&Yt.skinning===!1||!Y.isSkinnedMesh&&Yt.skinning===!0||Y.isInstancedMesh&&Yt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Yt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Yt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Yt.instancingMorph===!1&&Y.morphTexture!==null||Yt.envMap!==Wt||it.fog===!0&&Yt.fog!==wt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==vt.numPlanes||Yt.numIntersection!==vt.numIntersection)||Yt.vertexAlphas!==Kt||Yt.vertexTangents!==te||Yt.morphTargets!==Xt||Yt.morphNormals!==le||Yt.morphColors!==_e||Yt.toneMapping!==Se||Yt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Yt.__version=it.version);let Cn=Yt.currentProgram;fe===!0&&(Cn=Me(it,G,Y));let hs=!1,cn=!1,nr=!1,be=Cn.getUniforms(),Hn=Yt.uniforms;if(Nt.useProgram(Cn.program)&&(hs=!0,cn=!0,nr=!0),it.id!==M&&(M=it.id,cn=!0),hs||S!==R){Nt.buffers.depth.getReversed()?(D.copy(R.projectionMatrix),Ip(D),Pp(D),be.setValue(F,"projectionMatrix",D)):be.setValue(F,"projectionMatrix",R.projectionMatrix),be.setValue(F,"viewMatrix",R.matrixWorldInverse);let Mi=be.map.cameraPosition;Mi!==void 0&&Mi.setValue(F,j.setFromMatrixPosition(R.matrixWorld)),zt.logarithmicDepthBuffer&&be.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&be.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,cn=!0,nr=!0)}if(Y.isSkinnedMesh){be.setOptional(F,Y,"bindMatrix"),be.setOptional(F,Y,"bindMatrixInverse");let vn=Y.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),be.setValue(F,"boneTexture",vn.boneTexture,P))}Y.isBatchedMesh&&(be.setOptional(F,Y,"batchingTexture"),be.setValue(F,"batchingTexture",Y._matricesTexture,P),be.setOptional(F,Y,"batchingIdTexture"),be.setValue(F,"batchingIdTexture",Y._indirectTexture,P),be.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&be.setValue(F,"batchingColorTexture",Y._colorsTexture,P));let ir=nt.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&Vt.update(Y,nt,Cn),(cn||Yt.receiveShadow!==Y.receiveShadow)&&(Yt.receiveShadow=Y.receiveShadow,be.setValue(F,"receiveShadow",Y.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Hn.envMap.value=Wt,Hn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&G.environment!==null&&(Hn.envMapIntensity.value=G.environmentIntensity),cn&&(be.setValue(F,"toneMappingExposure",g.toneMappingExposure),Yt.needsLights&&kn(Hn,nr),wt&&it.fog===!0&&Rt.refreshFogUniforms(Hn,wt),Rt.refreshMaterialUniforms(Hn,it,Q,mt,f.state.transmissionRenderTarget[R.id]),Is.upload(F,Oe(Yt),Hn,P)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Is.upload(F,Oe(Yt),Hn,P),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&be.setValue(F,"center",Y.center),be.setValue(F,"modelViewMatrix",Y.modelViewMatrix),be.setValue(F,"normalMatrix",Y.normalMatrix),be.setValue(F,"modelMatrix",Y.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let vn=it.uniformsGroups;for(let Mi=0,Si=vn.length;Mi<Si;Mi++){let Lh=vn[Mi];O.update(Lh,Cn),O.bind(Lh,Cn)}}return Cn}function kn(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function yi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,G,nt){Ft.get(R.texture).__webglTexture=G,Ft.get(R.depthTexture).__webglTexture=nt;let it=Ft.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){let nt=Ft.get(R);nt.__webglFramebuffer=G,nt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,nt=0){C=R,w=G,E=nt;let it=!0,Y=null,wt=!1,Ot=!1;if(R){let Wt=Ft.get(R);if(Wt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(F.FRAMEBUFFER,null),it=!1;else if(Wt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Wt.__hasExternalTextures)P.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Xt=R.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&Ft.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ot=!0);let te=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[G])?Y=te[G][nt]:Y=te[G],wt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?Y=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[nt]:Y=te,L.copy(R.viewport),Z.copy(R.scissor),V=R.scissorTest}else L.copy(At).multiplyScalar(Q).floor(),Z.copy(lt).multiplyScalar(Q).floor(),V=_t;if(Nt.bindFramebuffer(F.FRAMEBUFFER,Y)&&it&&Nt.drawBuffers(R,Y),Nt.viewport(L),Nt.scissor(Z),Nt.setScissorTest(V),wt){let Wt=Ft.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Wt.__webglTexture,nt)}else if(Ot){let Wt=Ft.get(R.texture),Kt=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,nt||0,Kt)}M=-1},this.readRenderTargetPixels=function(R,G,nt,it,Y,wt,Ot){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt){Nt.bindFramebuffer(F.FRAMEBUFFER,Gt);try{let Wt=R.texture,Kt=Wt.format,te=Wt.type;if(!zt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-it&&nt>=0&&nt<=R.height-Y&&F.readPixels(G,nt,it,Y,ft.convert(Kt),ft.convert(te),wt)}finally{let Wt=C!==null?Ft.get(C).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,G,nt,it,Y,wt,Ot){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt){let Wt=R.texture,Kt=Wt.format,te=Wt.type;if(!zt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-it&&nt>=0&&nt<=R.height-Y){Nt.bindFramebuffer(F.FRAMEBUFFER,Gt);let Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels(G,nt,it,Y,ft.convert(Kt),ft.convert(te),0);let le=C!==null?Ft.get(C).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,le);let _e=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Cp(F,_e,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.deleteBuffer(Xt),F.deleteSync(_e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,nt=0){R.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);let it=Math.pow(2,-nt),Y=Math.floor(R.image.width*it),wt=Math.floor(R.image.height*it),Ot=G!==null?G.x:0,Gt=G!==null?G.y:0;P.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,nt,0,0,Ot,Gt,Y,wt),Nt.unbindTexture()},this.copyTextureToTexture=function(R,G,nt=null,it=null,Y=0){R.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],G=arguments[2],Y=arguments[3]||0,nt=null);let wt,Ot,Gt,Wt,Kt,te,Xt,le,_e,Se=R.isCompressedTexture?R.mipmaps[Y]:R.image;nt!==null?(wt=nt.max.x-nt.min.x,Ot=nt.max.y-nt.min.y,Gt=nt.isBox3?nt.max.z-nt.min.z:1,Wt=nt.min.x,Kt=nt.min.y,te=nt.isBox3?nt.min.z:0):(wt=Se.width,Ot=Se.height,Gt=Se.depth||1,Wt=0,Kt=0,te=0),it!==null?(Xt=it.x,le=it.y,_e=it.z):(Xt=0,le=0,_e=0);let sn=ft.convert(G.format),ue=ft.convert(G.type),Yt;G.isData3DTexture?(P.setTexture3D(G,0),Yt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),Yt=F.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),Yt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let Kn=F.getParameter(F.UNPACK_ROW_LENGTH),fe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=F.getParameter(F.UNPACK_SKIP_PIXELS),hs=F.getParameter(F.UNPACK_SKIP_ROWS),cn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let nr=R.isDataArrayTexture||R.isData3DTexture,be=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Hn=Ft.get(R),ir=Ft.get(G),vn=Ft.get(Hn.__renderTarget),Mi=Ft.get(ir.__renderTarget);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,vn.__webglFramebuffer),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Si=0;Si<Gt;Si++)nr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Y,te+Si),R.isDepthTexture?(be&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(G).__webglTexture,Y,_e+Si),F.blitFramebuffer(Wt,Kt,wt,Ot,Xt,le,wt,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST)):be?F.copyTexSubImage3D(Yt,Y,Xt,le,_e+Si,Wt,Kt,wt,Ot):F.copyTexSubImage2D(Yt,Y,Xt,le,_e+Si,Wt,Kt,wt,Ot);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else be?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Yt,Y,Xt,le,_e,wt,Ot,Gt,sn,ue,Se.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Yt,Y,Xt,le,_e,wt,Ot,Gt,sn,Se.data):F.texSubImage3D(Yt,Y,Xt,le,_e,wt,Ot,Gt,sn,ue,Se):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,Xt,le,wt,Ot,sn,ue,Se.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,Xt,le,Se.width,Se.height,sn,Se.data):F.texSubImage2D(F.TEXTURE_2D,Y,Xt,le,wt,Ot,sn,ue,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Kn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),F.pixelStorei(F.UNPACK_SKIP_ROWS,hs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,cn),Y===0&&G.generateMipmaps&&F.generateMipmap(Yt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(R,G,nt=null,it=null,Y=0){return R.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,R=arguments[2],G=arguments[3],Y=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,nt,it,Y)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Nt.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,Nt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}},Uo=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var No=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var oc=class extends an{constructor(t=null,e=1,i=1,s,r,o,a,l,c=fn,h=fn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yr=class extends he{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new ce,Lu=new ce,ao=[],Du=new ci,E_=new ce,cr=new ve,hr=new hi,Di=class extends ve{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,E_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),Du.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),hr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Lu.multiplyMatrices(i,ws),cr.matrixWorld=Lu,cr.raycast(t,ao);for(let o=0,a=ao.length;o<a;o++){let l=ao[o];l.instanceId=r,l.object=this,e.push(l)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(s*this.count),s,this.count,Dc,Wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zs=class extends ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fo=new k,Oo=new k,Uu=new ce,ur=new _r,lo=new hi,sl=new k,Nu=new k,ac=class extends Ie{constructor(t=new xe,e=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Fo.fromBufferAttribute(e,s-1),Oo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Fo.distanceTo(Oo);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;Uu.copy(s).invert(),ur.copy(t.ray).applyMatrix4(Uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){let f=h.getX(_),y=h.getX(_+1),v=co(this,t,ur,l,f,y);v&&e.push(v)}if(this.isLineLoop){let _=h.getX(x-1),m=h.getX(p),f=co(this,t,ur,l,_,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=c){let f=co(this,t,ur,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=co(this,t,ur,l,x-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function co(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Fo.fromBufferAttribute(o,s),Oo.fromBufferAttribute(o,r),e.distanceSqToSegment(Fo,Oo,sl,Nu)>i)return;sl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(sl);if(!(l<t.near||l>t.far))return{distance:l,point:Nu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Fu=new k,Ou=new k,Mr=class extends ac{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Fu.fromBufferAttribute(e,s),Ou.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fu.distanceTo(Ou);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sr=class extends ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bu=new ce,lc=new _r,ho=new hi,uo=new k,ks=class extends Ie{constructor(t=new xe,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;Bu.copy(s).invert(),lc.copy(t.ray).applyMatrix4(Bu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=d,_=p;x<_;x++){let m=c.getX(x);uo.fromBufferAttribute(u,m),zu(uo,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,_=p;x<_;x++)uo.fromBufferAttribute(u,x),zu(uo,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zu(n,t,e,i,s,r,o){let a=lc.distanceSqToPoint(n);if(a<e){let l=new k;lc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Bo=class extends an{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var tn=class n extends xe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],x=0,_=[],m=i/2,f=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function y(){let g=new k,A=new k,w=0,E=(e-t)/i;for(let C=0;C<=r;C++){let M=[],S=C/r,L=S*(e-t)+t;for(let Z=0;Z<=s;Z++){let V=Z/s,et=V*l+a,at=Math.sin(et),H=Math.cos(et);A.x=L*at,A.y=-S*i+m,A.z=L*H,u.push(A.x,A.y,A.z),g.set(at,E,H).normalize(),d.push(g.x,g.y,g.z),p.push(V,1-S),M.push(x++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let S=_[M][C],L=_[M+1][C],Z=_[M+1][C+1],V=_[M][C+1];(t>0||M!==0)&&(h.push(S,L,V),w+=3),(e>0||M!==r-1)&&(h.push(L,Z,V),w+=3)}c.addGroup(f,w,0),f+=w}function v(g){let A=x,w=new Jt,E=new k,C=0,M=g===!0?t:e,S=g===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),x++;let L=x;for(let Z=0;Z<=s;Z++){let et=Z/s*l+a,at=Math.cos(et),H=Math.sin(et);E.x=M*H,E.y=m*S,E.z=M*at,u.push(E.x,E.y,E.z),d.push(0,S,0),w.x=at*.5+.5,w.y=H*.5*S+.5,p.push(w.x,w.y),x++}for(let Z=0;Z<s;Z++){let V=A+Z,et=L+Z;g===!0?h.push(et,et+1,V):h.push(et+1,et,V),C+=3}c.addGroup(f,C,g===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ts=class n extends tn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cc=class n extends xe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new k,g=new k,A=new k;for(let w=0;w<e.length;w+=3)p(e[w+0],v),p(e[w+1],g),p(e[w+2],A),l(v,g,A,y)}function l(y,v,g,A){let w=A+1,E=[];for(let C=0;C<=w;C++){E[C]=[];let M=y.clone().lerp(g,C/w),S=v.clone().lerp(g,C/w),L=w-C;for(let Z=0;Z<=L;Z++)Z===0&&C===w?E[C][Z]=M:E[C][Z]=M.clone().lerp(S,Z/L)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){let S=Math.floor(M/2);M%2===0?(d(E[C][S+1]),d(E[C+1][S]),d(E[C][S])):(d(E[C][S+1]),d(E[C+1][S+1]),d(E[C+1][S]))}}function c(y){let v=new k;for(let g=0;g<r.length;g+=3)v.x=r[g+0],v.y=r[g+1],v.z=r[g+2],v.normalize().multiplyScalar(y),r[g+0]=v.x,r[g+1]=v.y,r[g+2]=v.z}function h(){let y=new k;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let g=m(y)/2/Math.PI+.5,A=f(y)/Math.PI+.5;o.push(g,1-A)}x(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],g=o[y+2],A=o[y+4],w=Math.max(v,g,A),E=Math.min(v,g,A);w>.9&&E<.1&&(v<.2&&(o[y+0]+=1),g<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,v){let g=y*3;v.x=t[g+0],v.y=t[g+1],v.z=t[g+2]}function x(){let y=new k,v=new k,g=new k,A=new k,w=new Jt,E=new Jt,C=new Jt;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),w.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),A.copy(y).add(v).add(g).divideScalar(3);let L=m(A);_(w,S+0,y,L),_(E,S+2,v,L),_(C,S+4,g,L)}}function _(y,v,g,A){A<0&&y.x===1&&(o[v]=y.x-1),g.x===0&&g.z===0&&(o[v]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var es=class n extends cc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var zo=class n extends xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,d=new k,p=[],x=[],_=[],m=[];for(let f=0;f<=i;f++){let y=[],v=f/i,g=0;f===0&&o===0?g=.5/e:f===i&&l===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){let w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+g,1-v),y.push(c++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){let v=h[f][y+1],g=h[f][y],A=h[f+1][y],w=h[f+1][y+1];(f!==0||o>0)&&p.push(v,g,w),(f!==i-1||l<Math.PI)&&p.push(g,A,w)}this.setIndex(p),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ko=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},oe=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function fo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function w_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Hs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends Hs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oh:r=t,a=2*e-i;break;case Bh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oh:o=t,l=2*i-e;break;case Bh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),_=x*x,m=_*x,f=-d*m+2*d*_-d*x,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*x+1,v=(-1-p)*m+(1.5+p)*_+.5*x,g=p*m-p*_;for(let A=0;A!==a;++A)r[A]=f*o[h+A]+y*o[c+A]+v*o[l+A]+g*o[u+A];return r}},uc=class extends Hs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},fc=class extends Hs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yo:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&w_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let x=0;x!==i;++x){let _=e[u+x];if(_!==e[d+x]||_!==e[p+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Gl;var ns=class extends Nn{constructor(t,e,i){super(t,e,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=yo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Nn{};dc.prototype.ValueTypeName="color";var pc=class extends Nn{};pc.prototype.ValueTypeName="number";var mc=class extends Hs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ho=class extends Nn{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Nn{constructor(t,e,i){super(t,e,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=yo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends Nn{};gc.prototype.ValueTypeName="vector";var xc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},T_=new xc,_c=class{constructor(t){this.manager=t!==void 0?t:T_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};_c.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Vo=class extends br{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new ce,ku=new k,Hu=new k,Go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hu),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},vc=class extends Go{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=So*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Wo=class extends br{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var yc=class extends Go{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xo=class extends br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new yc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Vu(){return performance.now()}var Bc="\\[\\]\\.:\\/",A_=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",R_="[^"+Bc.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",zc),I_=/(WCOD+)?/.source.replace("WCOD",R_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),D_=new RegExp("^"+C_+I_+P_+L_+"$"),U_=["material","materials","bones","map"],Mc=class{constructor(t,e,i){let s=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(t){let e=D_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);U_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Mc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Jo=[25,18,15,12,10,8,6,4],Ni={maxSpeed:82,accel:26,brake:48,steerRate:1.9,steerHighSpeed:.55,grip:1,wetGrip:.78,driftBonus:1.35,airControl:.35,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Fi={sunset:{id:"sunset",name:"Coucher de soleil",grip:1,wet:0,rain:0,wind:0,skyTop:2828907,skyHorizon:16747084,fogColor:15900784,fogDensity:.0011,sunColor:16756848,sunIntensity:2.6,sunDir:[-.55,.28,-.6],hemiSky:9076688,hemiGround:5913136,hemiIntensity:.9,seaColor:2060175,night:!1,bloom:.55},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function Tr(n){let t=String(n),e=2166136261;for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function Sn(n){let t=(typeof n=="number"?n>>>0:Tr(n))||1,e=t,i=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:i,range:(s,r)=>s+(r-s)*i(),int:(s,r)=>s+Math.floor(i()*(r-s+1)),pick:s=>s[Math.floor(i()*s.length)],chance:s=>i()<s,sign:()=>i()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(i()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Sn(Tr(e+":"+s))}}var Ko=Math.PI*2,N_=2,ff=2800,df=4200,F_=34,pf=8,mf=60,O_=.12,B_=.1,gf=28,z_=60,kc=45,Wc=.0025,xf=1/150,k_=10,_f=5,vf=250,yf=38,Mf=75,jo=150,Vc=120,wf=10,H_=80,V_=40,G_=20,W_=30,X_=95,Hc=13,Sf=17,q_=60,Gc=(n,t,e)=>n<t?t:n>e?e:n;function Y_(n){let t=n.int(10,14),e=n.range(440,520),i=[];for(let s=0;s<t;s++){let r=n.range(-.3,.3)*(Ko/t),o=s/t*Ko+r,a=Gc(e*n.range(.62,1.25),380,620);i.push([a*Math.cos(o),a*Math.sin(o)])}return i}function Z_(n,t,e,i,s,r,o,a,l){let c=(_,m,f,y)=>{let v=(l-f)/(y-f);return[_[0]+(m[0]-_[0])*v,_[1]+(m[1]-_[1])*v]},h=c(n,t,s,r),u=c(t,e,r,o),d=c(e,i,o,a),p=c(h,u,s,o),x=c(u,d,r,a);return c(p,x,r,o)}function $_(n,t){let e=n.length,i=[];for(let s=0;s<e;s++){let r=n[(s-1+e)%e],o=n[s],a=n[(s+1)%e],l=n[(s+2)%e],c=0,h=c+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),u=h+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),d=u+Math.sqrt(Math.hypot(l[0]-a[0],l[1]-a[1]));for(let p=0;p<t;p++){let x=h+(u-h)*(p/t);i.push(Z_(r,o,a,l,c,h,u,d,x))}}return i}function J_(n){let t=n.length,e=new Float64Array(t+1);for(let c=0;c<t;c++){let h=n[c],u=n[(c+1)%t];e[c+1]=e[c]+Math.hypot(u[0]-h[0],u[1]-h[1])}let i=e[t],s=Math.max(1,Math.round(i/N_)),r=i/s,o=new Float64Array(s),a=new Float64Array(s),l=0;for(let c=0;c<s;c++){let h=c*r;for(;l<t-1&&e[l+1]<=h;)l++;let u=n[l],d=n[(l+1)%t],p=e[l+1]-e[l],x=p>0?(h-e[l])/p:0;o[c]=u[0]+(d[0]-u[0])*x,a[c]=u[1]+(d[1]-u[1])*x}return{xs:o,zs:a,count:s,step:r}}function bf(n,t){let e=n.length,i=new Float64Array(e),s=2*t+1,r=0;for(let o=-t;o<=t;o++)r+=n[(o+e)%e];for(let o=0;o<e;o++)i[o]=r/s,r+=n[(o+1+t)%e]-n[((o-t)%e+e)%e];return i}function K_(n,t,e){let i=n.length,s=new Float64Array(i),r=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,h=n[c]-n[l],u=t[c]-t[l],d=Math.hypot(h,u)||1;s[a]=h/d,r[a]=u/d}let o=new Float64Array(i);for(let a=0;a<i;a++){let l=(a-1+i)%i,c=(a+1)%i,h=(s[c]-s[l])/(2*e),u=(r[c]-r[l])/(2*e);o[a]=s[a]*u-r[a]*h}return o}function j_(n,t){let e=n.length;for(let i=0;i<50;i++){let s=!1;for(let r=2*e-1;r>=0;r--){let o=r%e,a=(o+1)%e,l=Math.sqrt(n[a]*n[a]+2*V_*t);n[o]>l+1e-9&&(n[o]=l,s=!0)}for(let r=0;r<2*e;r++){let o=r%e,a=(o+1)%e,l=Math.sqrt(n[o]*n[o]+2*G_*t);n[a]>l+1e-9&&(n[a]=l,s=!0)}if(!s)break}}function Ef(n){let t=n.length,e=-1;for(let r=0;r<t;r++)if(n[r]!==n[(r-1+t)%t]){e=r;break}if(e<0)return n[0]!==0?[{start:0,len:t,key:n[0]}]:[];let i=[],s=null;for(let r=0;r<t;r++){let o=(e+r)%t,a=n[o];s&&a===s.key?s.len++:(s&&s.key!==0&&i.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&i.push(s),i}function Tf(n,t){let e=n.length,i=0;for(let s=0;s<e;s++){let r=n[s].vmax,o=n[(s+1)%e].vmax;i+=t/Math.max(1,.5*(r+o))}return i}function Xc(n,t){let e=n.length,i=0,s=0,r=new Int8Array(e),o=new Int8Array(e);for(let c=0;c<e;c++){let h=n[c].curv,u=Math.abs(h);u>i&&(i=u);let d=Math.abs(n[c].slope);d>s&&(s=d),r[c]=h>xf?1:h<-xf?-1:0,o[c]=u<Wc?1:0}let a=0;for(let c of Ef(r))c.len*t>=k_&&a++;let l={start:0,len:0};for(let c of Ef(o))c.key===1&&c.len>l.len&&(l=c);return{minRadius:i>0?1/i:1/0,maxSlope:s,corners:a,longestStraight:l.len*t,longestStraightStart:l.start}}function Q_(n,t){let e=n.length,i=kc,s=(c,h)=>(c+4096)*8192+(h+4096),r=new Map,o=new Array(e);for(let c=0;c<e;c++){let h=Math.floor(n[c].x/i),u=Math.floor(n[c].z/i);o[c]=[h,u];let d=s(h,u),p=r.get(d);p||(p=[],r.set(d,p)),p.push(c)}let a=0,l=kc*kc;for(let c=0;c<e;c++){let[h,u]=o[c];for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){let x=r.get(s(h+d,u+p));if(x)for(let _ of x){if(_<=c)continue;let m=Math.abs(c-_);if(Math.min(m,e-m)*t<=z_)continue;let y=n[c].x-n[_].x,v=n[c].z-n[_].z;y*y+v*v<l&&a++}}}return a}function tv(n){let t=Y_(n),e=$_(t,160),{xs:i,zs:s,count:r,step:o}=J_(e),a=[[8,12],[4,7],[2,4],[1,2]],l=[1,2,4,7].map((E,C)=>({k:E,a:n.range(a[C][0],a[C][1]),p:n.range(0,Ko)})),c=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let E=0;E<r;E++){let C=(E-1+r)%r,M=(E+1)%r,S=i[M]-i[C],L=s[M]-s[C];u[E]=Math.hypot(S,L)||1e-9,c[E]=S/u[E],h[E]=L/u[E]}let d=new Float64Array(r),p=new Float64Array(r),x=1;for(let E=0;E<40;E++){for(let M=0;M<r;M++){let S=0;for(let L of l)S+=L.a*x*Math.sin(Ko*L.k*M/r+L.p);d[M]=F_+S}let C=0;for(let M=0;M<r;M++){let S=(M-1+r)%r,L=(M+1)%r;p[M]=(d[L]-d[S])/u[M],Math.abs(p[M])>C&&(C=Math.abs(p[M]))}if(C<=B_)break;x*=.9}let _=new Float64Array(r),m=new Float64Array(r),f=new Float64Array(r);for(let E=0;E<r;E++){let C=(E-1+r)%r,M=(E+1)%r,S=i[M]-i[C],L=d[M]-d[C],Z=s[M]-s[C],V=Math.hypot(S,L,Z)||1e-9;_[E]=S/V,m[E]=L/V,f[E]=Z/V}let y=K_(i,s,o),v=bf(y,2),g=new Float64Array(r);for(let E=0;E<r;E++){let C=Gc((Math.abs(v[E])-.016666666666666666)/.023333333333333334,0,1);g[E]=Hc+(Sf-Hc)*C}let A=bf(g,10);for(let E=0;E<r;E++)A[E]=Gc(A[E],Hc,Sf);let w=new Float64Array(r);for(let E=0;E<r;E++)w[E]=Math.min(X_,Math.sqrt(W_/Math.max(Math.abs(v[E]),1e-9)));return j_(w,o),{xs:i,ys:d,zs:s,count:r,step:o,fx:c,fz:h,tx:_,ty:m,tz:f,slope:p,curv:v,width:A,vmax:w}}function ev(n){let{xs:t,ys:e,zs:i,count:s,step:r,fx:o,fz:a,tx:l,ty:c,tz:h,slope:u,curv:d,width:p,vmax:x}=n,_=[];for(let v=0;v<s;v++)_.push({curv:d[v],slope:u[v],vmax:x[v],x:t[v],z:i[v]});let m=Xc(_,r),f=m.longestStraight>0?(m.longestStraightStart+Math.round(H_/r))%s:0,y=new Array(s);for(let v=0;v<s;v++){let g=(f+v)%s;y[v]={s:v*r,x:t[g],y:e[g],z:i[g],tx:l[g],ty:c[g],tz:h[g],rx:-a[g],rz:o[g],width:p[g],curv:d[g],vmax:x[g],slope:u[g]}}return y}function nv(n,t,e){let i=n.length,s=new Int32Array(i+1);for(let m=0;m<i;m++)s[m+1]=s[m]+(Math.abs(n[m].curv)>=Wc?1:0);let r=(m,f)=>s[f+1]-s[m]===0,o=Math.ceil(jo/t),a=Math.floor((i*t-jo)/t),l=Math.ceil(wf/t),c=[],h=[],u=(m,f)=>c.every(([y,v])=>f<y||m>v),d=(m,f,y,v)=>{for(let g=0;g<400;g++){let A=Math.round(e.range(m,f)/t),w=Math.ceil(y/t),E=A+w;if(a-E<o)return null;let C=e.int(o,a-E),M=C+A;if(v&&!r(C,M+w))continue;let S=C-l,L=M+w+l;if(!(S<0||L>i-1||!u(S,L)))return c.push([S,L]),{a:C,b:M}}return null},p=e.int(2,3);for(let m=0;m<p;m++){let f=d(12,16,Vc,!0);f&&h.push({type:"ramp",s0:f.a*t,s1:f.b*t,height:e.range(1.2,2.2)})}let x=e.int(2,3);for(let m=0;m<x;m++){let f=d(10,10,0,!1);f&&h.push({type:"boost",s0:f.a*t,s1:f.b*t})}let _=e.int(1,2);for(let m=0;m<_;m++){let f=d(60,140,0,!1);f&&h.push({type:"tunnel",s0:f.a*t,s1:f.b*t})}return h.sort((m,f)=>m.s0-f.s0),h}function iv(n,t,e){let i=tv(n),s=ev(i),{count:r,step:o}=i,a=r*o,l=nv(s,o,n),c=Xc(s,o),h=1/0,u=-1/0,d=1/0,p=-1/0;for(let x of s)x.x<h&&(h=x.x),x.x>u&&(u=x.x),x.z<d&&(d=x.z),x.z>p&&(p=x.z);return{seed:t,attempts:e,length:a,step:o,count:r,pts:s,features:l,bounds:{minX:h,maxX:u,minZ:d,maxZ:p},stats:{minRadius:c.minRadius,maxSlope:c.maxSlope,lapTimeEstimate:Tf(s,o),corners:c.corners}}}function sv(n){let t=[],{pts:e,count:i,step:s,length:r}=n;if(!Array.isArray(e)||e.length!==i||!(i>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=ff&&r<=df||t.push(`longueur ${r.toFixed(0)} m hors [${ff}, ${df}]`),Math.abs(i*s-r)>1e-6&&t.push("count * step != length");let o=1/0,a=-1/0;for(let f of e)f.y<o&&(o=f.y),f.y>a&&(a=f.y);(o<pf||a>mf)&&t.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${pf}, ${mf}]`);let l=Xc(e,s);l.minRadius>=gf||t.push(`rayon min ${l.minRadius.toFixed(1)} m < ${gf}`),l.maxSlope>O_&&t.push(`pente max ${(l.maxSlope*100).toFixed(1)} % > 12 %`),l.corners<_f&&t.push(`${l.corners} virages < ${_f}`),l.longestStraight<vf&&t.push(`ligne droite max ${l.longestStraight.toFixed(0)} m < ${vf}`);let c=Q_(e,s);c>0&&t.push(`${c} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let h=Tf(e,s);h>=yf&&h<=Mf||t.push(`temps au tour ${h.toFixed(1)} s hors [${yf}, ${Mf}]`);let u=n.features||[],d=u.filter(f=>f.type==="ramp").length,p=u.filter(f=>f.type==="boost").length,x=u.filter(f=>f.type==="tunnel").length;d<2&&t.push(`${d} tremplin(s) < 2`),p<2&&t.push(`${p} boost(s) < 2`),x<1&&t.push("aucun tunnel");let _=f=>Math.round((f%r+r)%r/s)%i;for(let f of u)if((f.s0<jo||f.s1>r-jo)&&t.push(`feature ${f.type} trop proche du d\xE9part`),f.type==="ramp"){let y=f.s1-f.s0;(y<11.5||y>16.5)&&t.push(`tremplin de ${y.toFixed(1)} m hors 12..16`),f.height>=1.2&&f.height<=2.2||t.push("hauteur de tremplin hors 1.2..2.2");let v=_(f.s0),g=_(f.s1+Vc),A=!0;for(let w=v;w!==(g+1)%i;w=(w+1)%i)if(Math.abs(e[w].curv)>=Wc){A=!1;break}A||t.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=u.slice().sort((f,y)=>f.s0-y.s0);for(let f=0;f+1<m.length;f++){let y=m[f],v=m[f+1],g=y.s1+(y.type==="ramp"?Vc:0);v.s0<g+wf-1e-6&&t.push(`features ${y.type} et ${v.type} se chevauchent`)}return{ok:t.length===0,reasons:t}}function Af(n,t={}){let e=t.maxAttempts??q_,i=Sn(n),s=null,r=1/0;for(let o=0;o<e;o++){let a=i.fork("try"+o),l=iv(a,n,o+1),c=sv(l);if(c.ok)return l;c.reasons.length<r&&(r=c.reasons.length,s=l)}return s.attempts=e,s}function qc(n,t){let e=n.length,i=t%e;return i<0&&(i+=e),i>=e&&(i-=e),i}var rv=(n,t)=>{let e=Math.hypot(n,t)||1;return[n/e,t/e]};function di(n,t,e={}){let i=n.count,s=n.step,r=qc(n,t),o=r/s,a=Math.floor(o),l=a%i,c=(l+1)%i,h=o-a,u=n.pts[l],d=n.pts[c],p=(g,A)=>g+(A-g)*h,x=p(u.tx,d.tx),_=p(u.ty,d.ty),m=p(u.tz,d.tz),f=Math.hypot(x,_,m)||1,[y,v]=rv(p(u.rx,d.rx),p(u.rz,d.rz));return e.s=r,e.x=p(u.x,d.x),e.y=p(u.y,d.y),e.z=p(u.z,d.z),e.tx=x/f,e.ty=_/f,e.tz=m/f,e.rx=y,e.rz=v,e.width=p(u.width,d.width),e.curv=p(u.curv,d.curv),e.vmax=p(u.vmax,d.vmax),e.slope=p(u.slope,d.slope),e.i=l,e}var fi={};function Rf(n,t,e,i={}){return di(n,t,fi),i.x=fi.x+e*fi.rx,i.y=fi.y,i.z=fi.z+e*fi.rz,i.heading=Math.atan2(fi.tx,fi.tz),i.slope=fi.slope,i}function Cf(n,t){let e=qc(n,t);for(let i of n.features)if(i.type==="ramp"&&e>=i.s0&&e<i.s1)return i.height*(e-i.s0)/(i.s1-i.s0);return 0}function Qo(n,t,e){let i=qc(n,t);for(let s of n.features)if((e===void 0||s.type===e)&&i>=s.s0&&i<=s.s1)return s;return null}var av=1/30,Yc=.6,lv=.45,cv=25e-5,hv=3,uv=.3,fv=32,dv=3,pv=14,mv=1.2,gv=12,xv=1,_v=6,vv=40,yv=.4,Mv=["s","d","yaw","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","_g","_vyG","_driftAcc","_t"],en=(n,t,e)=>n<t?t:n>e?e:n,pi=(n,t=0)=>Number.isFinite(n)?n:t,Zc=(n,t)=>{let e=n%t;return e<0?e+t:e};function Pf({s:n=0,d:t=0}={}){return{s:n,d:t,yaw:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:Ni.boostCharges,onRoad:!0,wheelSpin:0,stun:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_driftAcc:0,_wallHit:!1,_t:0}}function Lf(n,t,e,i,s,r,o){let a=n.events,l=t||{},c=s||{},h=!!l.boost&&!n._prevBoost;if(n._prevBoost=!!l.boost,r=Number.isFinite(r)&&r>0?Math.min(r,av):0,n._init||(n._init=!0,n.boostCharges=i.boostCharges),r===0)return n;let u=e.length,d=i.maxSpeed,p=en(pi(l.throttle),0,1),x=en(pi(l.brake),0,1),_=en(pi(l.steer),-1,1),m=n.stun>0;m&&(n.stun=Math.max(0,n.stun-r),p=0,_=0);let f=Zc(n.s,u),y=di(e,f),v=!n.airborne;if(h&&n.boostCharges>0&&n.boostT<=0&&(n.boostCharges-=1,n.boostT=i.boostDuration,a.push("boost")),v){let gt=Qo(e,f,"boost");if(gt){let pt=Math.floor(n.s/u)+":"+gt.s0;n._padKey!==pt&&(n._padKey=pt,n.boostT=Math.max(n.boostT,mv),a.push("pad"))}}n.steer+=(_-n.steer)*Math.min(1,10*r);let g=n.boostT>0,A=v&&Math.abs(n.d)>y.width*.5,w=lv*d,E=n.speed,C=0;if(v){A&&E>w&&(C-=2*i.offroadDrag*(E-w));let gt=A?w:d*(g?i.boostPower:1),pt=E/gt;p>0&&pt<1&&(C+=i.accel*p*(1-pt*pt)),x>0&&(C-=i.brake*x),C-=hv*(1-p),C-=26*uv*y.slope}C-=cv*E*E,n.speed=Math.max(0,E+C*r);let M=en(n.speed/d,0,1),S=1+(i.wetGrip-1)*Sv(c),L=Math.max(.05,i.grip*pi(c.grip,1)*S),Z=n.speed*n.speed*Math.abs(y.curv),V=v?en(Z/(fv*L)-1,0,1):0,et=l.drift&&Math.abs(n.steer)>.25&&n.speed>gv&&v?1:0,at=Math.max(et,V);n.drift+=(at-n.drift)*Math.min(1,(at>n.drift?4:2)*r),n.drift>.05&&v&&(n.speed=Math.max(0,n.speed-3*n.drift*r)),n.drift>.5?n._driftAcc+=r:n.drift<.2&&n._driftAcc>0&&(n._driftAcc>=xv&&(n.speed+=Math.min(8,n._driftAcc*2)),n._driftAcc=0);let H=1+(i.driftBonus-1)*n.drift,mt=v?1:i.airControl,Q=n.steer*i.steerRate*(1+(i.steerHighSpeed-1)*M)*L*H*mt;Math.abs(_)<=.15&&(n.yaw*=Math.exp(-1.5*r)),!v&&i.airStability<1&&(n.yaw+=(n.yaw>=0?1:-1)*(1-i.airStability)*.8*r),o&&i.steerNoise>0&&!m&&(n.yaw+=i.steerNoise*p*(o.next()*2-1)*r);let ut=Math.cos(n.yaw),Mt=Math.sin(n.yaw),At=Math.max(.3,1-n.d*y.curv),lt=n.speed*ut/At*r,_t=n.speed*Mt*r;n.yaw+=Q*r-y.curv*lt,n.yaw=en(pi(n.yaw),-Yc,Yc),n._t+=r,_t+=pi(c.wind)*(1.2*Math.sin(n._t*.37)+.4*Math.sin(n._t*1.13+1))*r*(v?1:.5),V>0&&(_t+=-Math.sign(y.curv)*V*3*r),n.s+=lt,n.d+=_t;let J=di(e,Zc(n.s,u));n.onRoad=Math.abs(n.d)<=J.width*.5;let z=J.width*.5+1.5-.4;if(Math.abs(n.d)>=z-.02){let gt=n.d>=0?1:-1,pt=n.yaw*gt>0,Tt=en(Math.abs(Math.sin(n.yaw))*1.5+.1,.1,1);if(n.d=gt*z,pt&&(n.yaw=-gt*Math.min(Yc,Math.abs(n.yaw)*.4+.05)),n._wallHit)n.speed*=Math.max(0,1-.8*r);else{let F=n.speed*Tt;n.speed*=1-en(i.wallLoss*Tt,0,.9),a.push("wall"),F>vv&&(n.stun=Math.max(n.stun,yv))}n._wallHit=!0}else n._wallHit=!1;f=Zc(n.s,u);let st=pi(Cf(e,f)),D=(st-n._g)/r;if(n.airborne||(st<n.yRel-.05?(n.airborne=!0,n.vy=n._vyG,n.vy>dv&&a.push("jump")):(n.yRel=st,n.vy=en(D,-80,80),n._vyG=n.vy)),n.compress*=Math.exp(-_v*r),n.airborne&&(n.vy-=26*r,n.yRel+=n.vy*r,n.vy<=0&&n.yRel<=st)){let gt=-n.vy,pt=gt>pv||Math.abs(n.yaw)>.5;n.airborne=!1,n.yRel=st,n.vy=0,n._vyG=0,n.compress=1,n.speed*=1-en(.012*gt/Math.max(.2,i.landing),0,.45),a.push(pt?"hardLand":"land")}n._g=st,v=!n.airborne,n.speed=en(pi(n.speed),0,1.5*d);let $=.35+.65*M,j=en(Math.atan(n.speed*n.speed*y.curv/30)+n.steer*.3*$,-.9,.9);n.lean+=(j-n.lean)*Math.min(1,6*r);let rt=en(C*.004,-.25,.25)+(v?0:en(n.vy*.03,-.5,.6));n.pitch+=(rt-n.pitch)*Math.min(1,5*r),n.wheelSpin+=n.speed/.32*r,n.boostT=Math.max(0,n.boostT-r);for(let gt of Mv)Number.isFinite(n[gt])||(n[gt]=0);return n.speed<0&&(n.speed=0),n}function Sv(n){return en(pi(n.wet),0,1)}var bv=8,Ev=25,wv=150,Tv=3,Av=35,Rv=2,Cv=14,Iv=30,Pv=12,Lv=2,Dv={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},ke=(n,t,e)=>n<t?t:n>e?e:n,ta=(n,t,e)=>n+(t-n)*e,Uv=(n,t)=>n-t*Math.round(n/t);function Nv(n,t){let e=n.length,i=n.features,s=null,r=1/0;for(let o=0;o<i.length;o++){let a=i[o];if(a.type!=="ramp")continue;let l=((a.s0-t)%e+e)%e;l<r&&(r=l,s=a)}return s?{f:s,dist:r}:null}function Fv(n,t){for(let e=0;e<=wv;e+=Ev)if(Math.abs(di(n,t+e).curv)>.004)return!1;return!0}function ea(n,t){let e=n||Dv,i={persona:e,rng:t,skill:ke(e.skill??.5,0,1),aggression:ke(e.aggression??.5,0,1),jumpSkill:ke(e.jumpSkill??.5,0,1),lineSkill:ke(e.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return i.nextMistake=t.range(8,20)+(1-i.skill)*15,i}function na(n,t,e,i,s,r){let o=n.input,a=e.length,l=n.rng,c=n.aggression,h=n.skill,u=n.jumpSkill,d=t.speed,p=t.s,x=di(e,p),_=Math.max(.8,x.width*.5-1.2);n.wanderT-=r,n.wanderT<=0&&(n.wanderT=l.range(.9,1.8),n.wanderGoal=l.range(-1,1)*(1-n.lineSkill)*.5*_),n.wander+=(n.wanderGoal-n.wander)*Math.min(1,r*1.5),n.nextMistake-=r,n.mistakeT-=r,n.mistakeT<=0&&n.nextMistake<=0&&(n.mistakeT=l.range(.5,1.2),n.mistakeSide=l.sign(),n.nextMistake=l.range(8,20)+(1-h)*15);let m=n.mistakeT>0;n.boostLock-=r;let f=ta(1.4,.6,c),y=Math.max(20,d*f),v=Math.max(y,ke(d*1.6+20,40,110)),g=1/0,A=0,w=0,E=0;for(let z=0;z<=v;z+=bv){let st=z===0?x:di(e,p+z);if(z<=y&&st.vmax<g&&(g=st.vmax),z>=8){let D=Math.abs(st.curv);D>A&&(A=D,w=Math.sign(st.curv),E=z)}}let C=ke(A/.02,0,1),M=0;if(w!==0&&C>0){let z=ke((E-10)/30,0,1),st=ta(1,-.8,z);M=w*_*n.lineSkill*C*st}M+=n.wander,m&&(M+=n.mistakeSide*1.2);let S=Nv(e,p),L=S?S.dist:1/0,Z=Qo(e,p,"ramp")!==null,V=L<Iv;(Z||V)&&u>.5&&(M*=1-ke((u-.4)/.6,0,1));let et=!Z&&L>=Tv&&L<=Av&&u<.5;for(let z=0;z<s.length;z++){let st=s[z];if(st===t)continue;let D=Uv(st.s-p,a);if(D<=0||D>=Pv)continue;let $=st.d-t.d;if(!(Math.abs($)>=Lv)){if(c>.55){let j=$!==0?Math.sign($):t.d<0?1:-1;M+=j*(.6+.8*c)}else{let j=$!==0?-Math.sign($):t.d<0?1:-1;Math.abs(t.d+j*2)>_&&(j=-j),M+=j*2*(1-c)}break}}M=ke(M,-_,_),n.dGoal+=(M-n.dGoal)*Math.min(1,r*2.5);let at=ke(n.dGoal,-_,_),H;if(t.airborne)H=ke(-t.yaw*2,-.3,.3);else{let z=at-t.d,st=ke(z*.12,-.25,.25),D=di(e,p+ke(d*.25,4,20)).curv,$=i.steerRate*ta(1,i.steerHighSpeed,ke(d/i.maxSpeed,0,1));H=(D*d+(st-t.yaw)*3)/$}H=ke(H,-1,1),Number.isFinite(H)||(H=0);let mt=ke(-n.playerGap/150,-1,1)*.06,Q=ta(.86,1,h)+c*.04;m&&(Q*=.85);let ut=g*Q*(1+mt),Mt=i.maxSpeed,At=!1;if(!t.airborne&&t.boostCharges>0&&t.boostT<=0&&n.boostLock<=0){if(u>.6&&L>=Rv&&L<=Cv)At=!0;else if(d>20&&Fv(e,p)){let z=n.playerGap<-20,st=.25+.5*c+(z?.3:0);At=l.chance(st)}n.boostLock=At?1:.4}o.boost=At;let lt=A<.003;if(t.boostT>0){let z=Mt*i.boostPower;ut=lt?z*.98:Math.min(ut,z)}else ut=Math.min(ut,Mt);let _t=0,J=0;if(t.airborne)_t=1;else{let z=ut-d;z>-1.5?_t=et?0:ke(.5+z*.25,0,1):J=ke((-z-1.5)*.15,0,1)}return o.throttle=_t,o.brake=J,o.steer=H,o.drift=!t.airborne&&c>.75&&A>.025&&d>40&&E<20,o}var Ov=7,Bv=3,zv=.3,kv=3,Hv=25,Vv=1.5,Gv=1.2,Wv=1.8,Df=.9,Xv={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},ia=(n,t,e)=>n<t?t:n>e?e:n,$c=(n,t)=>n-t*Math.round(n/t);function Jc(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function Uf({track:n,laps:t,env:e,rng:i,riders:s}){let r=n.length,o=t*r,l=s.filter(y=>!y.isPlayer).concat(s.filter(y=>y.isPlayer)).map((y,v)=>{let g=Math.floor(v/2),A=v%2,w=-Ov*(g+1),C=Pf({s:w,d:A===0?-2.5:2.5});return{id:y.id,name:y.name,color:y.color,accent:y.accent,isPlayer:!!y.isPlayer,stats:y.stats,persona:y.persona||null,state:C,ai:y.isPlayer?null:ea(y.persona||Xv,i.fork("ai:"+y.id)),rng:i.fork("rider:"+y.id),others:null,input:Jc(),coast:Jc(),frameEvents:[],startS:w,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:v+1}});for(let y of l)y.others=l.filter(v=>v!==y).map(v=>v.state);let c=l.find(y=>y.isPlayer)||null,h=l.slice(),u=l.length,d=new Uint8Array(u*u);function p(y,v,g,A,w){if(g===v)return;let E=Math.floor(v/r),C=Math.min(Math.floor(g/r),t);for(let M=Math.max(E+1,1);M<=C;M++){let S=ia((M*r-v)/(g-v),0,1),L=A+S*w,Z=L-y.lapStartT;y.lapTimes.push(Z),(y.bestLap===null||Z<y.bestLap)&&(y.bestLap=Z),y.lapStartT=L}if(g>=o){let M=ia((o-v)/(g-v),0,1);y.finished=!0,y.finishTime=A+M*w}}function x(y){let v=y.state,g=y.coast;return g.throttle=zv,g.brake=0,g.steer=ia(-v.yaw*2-v.d*.05,-.5,.5),g.boost=!1,g.drift=!1,g}function _(y,v){let g=y.state;for(let A=0;A<u;A++){let w=l[A];if(w===y)continue;let E=$c(w.state.s-g.s,r);if(E>kv&&E<Hv&&Math.abs(w.state.d-g.d)<Vv){g.speed=Math.min(g.speed+Gv*y.stats.slipstream*v,y.stats.maxSpeed*1.05);return}}}function m(){for(let y=0;y<u;y++)for(let v=y+1;v<u;v++){let g=l[y],A=l[v],w=$c(A.state.s-g.state.s,r),E=A.state.d-g.state.d,C=y*u+v;if(Math.abs(w)<Wv&&Math.abs(E)<Df){let M=E!==0?Math.sign(E):i.sign(),S=(Df-Math.abs(E))/2+.05;if(g.state.d-=M*S,A.state.d+=M*S,!d[C]){d[C]=1;let L=(g.state.speed+A.state.speed)/2;g.state.speed+=(L-g.state.speed)*.2,A.state.speed+=(L-A.state.speed)*.2;let Z=w>=0?g:A;Z.state.speed*=.96}}else d[C]=0}}let f={phase:"countdown",countdown:Bv,time:0,laps:t,track:n,riders:l,player:c,update(y,v){if(f.phase==="countdown"){f.countdown=Math.max(0,f.countdown-y),f.countdown<=0&&(f.phase="racing");return}let g=f.time;f.time+=y;for(let A=0;A<u;A++){let w=l[A];w.finished?w.input=x(w):w.isPlayer?w.input=v||Jc():(c&&(w.ai.playerGap=$c(w.state.s-c.state.s,r)),w.input=na(w.ai,w.state,n,w.stats,w.others,y))}for(let A=0;A<u;A++){let w=l[A],E=w.state,C=w.finished,M=E.s;if(Lf(E,w.input,n,w.stats,e,y,w.rng),C||(p(w,M,E.s,g,y),w.finished||_(w,y)),w.lap=w.finished?t:ia(Math.floor(E.s/r)+1,1,t),!w.isPlayer){w.frameEvents.length=0;for(let S=0;S<E.events.length;S++)w.frameEvents.push(E.events[S]);E.events.length=0}}m(),h.sort((A,w)=>A.finished!==w.finished?A.finished?-1:1:A.finished?A.finishTime-w.finishTime:w.state.s-A.state.s);for(let A=0;A<u;A++)h[A].position=A+1;(c?c.finished:l.every(A=>A.finished))&&(f.phase="finished")},results(){let y=l.map(v=>{let g;if(v.finished)g=v.finishTime;else{let A=Math.max(0,v.state.s-v.startS),w=f.time>1?Math.max(5,A/f.time):40,E=Math.max(0,o-v.state.s);g=f.time+E/w}return{id:v.id,name:v.name,position:v.position,time:g,bestLap:v.bestLap,isPlayer:v.isPlayer}});return y.sort((v,g)=>v.position-g.position),y}};return f}var rh={};Zd(rh,{PLAYER:()=>Zn,RIVALS:()=>ra,UPGRADES:()=>ss,applyUpgrade:()=>Qc,computeStats:()=>Xs,createRun:()=>oa,dailySeed:()=>la,isRunOver:()=>Ar,loadMeta:()=>nh,offerUpgrades:()=>jc,randomSeed:()=>Yv,recordResult:()=>th,runRiders:()=>aa,saveMeta:()=>ih,standings:()=>qs,updateMeta:()=>sh});var Nf="polygon-rush-meta",qv=Object.keys(Fi),Zn={id:"player",name:"Vous",color:16722511,accent:16777215},ss=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(n){n.accel*=1.35,n.maxSpeed*=1.04,n.steerNoise+=.35,n.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(n){n.landing*=1.8,n.offroadDrag*=.6,n.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(n){n.maxSpeed*=1.07,n.airStability*=.6,n.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(n){n.wetGrip*=1.35,n.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(n){n.boostCharges+=2,n.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(n){n.brake*=1.4,n.steerRate*=1.08,n.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(n){n.airControl*=1.5,n.airStability*=1.25,n.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(n){n.grip*=1.12,n.wetGrip*=.7,n.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(n){n.slipstream*=1.6,n.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(n){n.wallLoss*=.5,n.accel*=.92,n.maxSpeed*=.97}}],ra=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],Ff=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Kc=Ff.length;function Of(n){return ss.find(t=>t.id===n)||null}function Bf(n,t){let e=0;for(let i of n.upgrades)i===t&&e++;return e}function oa(n){let t=String(n),e=Sn(Tr(t+"|run")),i=[];for(let o=0;o<Kc;o++)if(o===0)i.push("sunset");else if(o===Kc-1)i.push("rain");else{let a=i[o-1],l=qv.filter(c=>c!==a&&!(o===Kc-2&&c==="rain"));i.push(e.pick(l))}let s=Ff.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${t}-${a}`,weather:i[a],laps:a<2?2:3})),r={[Zn.id]:0};for(let o of ra)r[o.id]=0;return{seed:t,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function aa(n){let t=Math.max(0,n.stageIndex),e=[{id:Zn.id,name:Zn.name,color:Zn.color,accent:Zn.accent,isPlayer:!0,persona:null,stats:Xs(n)}];for(let i of ra){let s=Math.min(.99,Math.round((i.skill+.01*t)*100)/100);e.push({id:i.id,name:i.name,color:i.color,accent:i.accent,isPlayer:!1,persona:{...i,skill:s},stats:{...Ni}})}return e}function Xs(n){let t={...Ni};for(let e of n.upgrades){let i=Of(e);i&&i.apply(t)}return t}function jc(n){let t=Sn(Tr(`${n.seed}|offer|${n.stageIndex}`)),e=ss.filter(i=>Bf(n,i.id)<i.maxStacks);return t.shuffle(e).slice(0,3)}function Qc(n,t){let e=Of(t);return!e||Bf(n,t)>=e.maxStacks?!1:(n.upgrades.push(t),!0)}function zf(n){if(n===Zn.id)return Zn.name;let t=ra.find(e=>e.id===n);return t?t.name:n}function th(n,t){if(Ar(n))return n;let e=t.slice().sort((r,o)=>r.position-o.position),i=n.stages[n.stageIndex],s={stage:n.stageIndex,name:i.name,results:[]};return e.forEach((r,o)=>{let a=r.position??o+1,l=Jo[a-1]??0;n.points[r.id]=(n.points[r.id]||0)+l,s.results.push({id:r.id,name:r.name||zf(r.id),position:a,points:l,isPlayer:r.id===Zn.id})}),n.history.push(s),n.stageIndex+=1,n}function qs(n){let t={};for(let e of n.history)for(let i of e.results)t[i.id]=Math.min(t[i.id]??1/0,i.position);return Object.keys(n.points).map(e=>({id:e,name:zf(e),points:n.points[e],isPlayer:e===Zn.id,_best:t[e]??1/0})).sort((e,i)=>i.points-e.points||e._best-i._best).map(({_best:e,...i})=>i)}function Ar(n){return n.stageIndex>=n.stages.length}function la(n=new Date){let t=n instanceof Date?n:new Date(n),e=t.getUTCFullYear(),i=String(t.getUTCMonth()+1).padStart(2,"0"),s=String(t.getUTCDate()).padStart(2,"0");return`DAILY-${e}-${i}-${s}`}function Yv(){let n="ABCDEFGHJKMNPQRSTUVWXYZ23456789",t="RUSH-";for(let e=0;e<4;e++)t+=n[Math.floor(Math.random()*n.length)];return t}function sa(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function eh(n){let t=sa();if(!n||typeof n!="object")return t;let e=i=>Number.isFinite(i)&&i>=0?Math.floor(i):0;return{runs:e(n.runs),wins:e(n.wins),bestPoints:e(n.bestPoints),unlocked:Array.isArray(n.unlocked)?n.unlocked.filter(i=>typeof i=="string"):t.unlocked}}function kf(){try{return globalThis.localStorage??null}catch{return null}}function nh(){try{let n=kf();if(!n)return sa();let t=n.getItem(Nf);return t?eh(JSON.parse(t)):sa()}catch{return sa()}}function ih(n){try{let t=kf();return t?(t.setItem(Nf,JSON.stringify(eh(n))),!0):!1}catch{return!1}}function sh(n,t){let e=eh(n),i=qs(t),s=i.find(o=>o.isPlayer),r=i.length>0&&i[0].isPlayer;return{runs:e.runs+1,wins:e.wins+(r?1:0),bestPoints:Math.max(e.bestPoints,s?s.points:0),unlocked:e.unlocked.slice()}}var bn=.9,Hf=.3,ca=8,oh=3,Vf=2.5,Rr=3,Zv=4.5,$v=.015,Jv=.004,Gf=60,ge={asphaltA:[.16,.165,.18],asphaltB:[.19,.195,.21],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.91,.85],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.72,.64,.47],gravel:[.5,.44,.34],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},ha=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Wf=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Kv=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Ye=(n,t,e)=>n+(t-n)*e,ln=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(t,e,i,s){let[r,o,a,l]=t,c=Wf(ha(o,r),ha(a,r)),h=Wf(ha(a,r),ha(l,r)),u=[c[0]+h[0],c[1]+h[1],c[2]+h[2]];if(!(Math.hypot(u[0],u[1],u[2])>1e-12))return;let d=Kv(u,i)<0,p=this.n;for(let x=0;x<4;x++){let _=t[x];this.pos.push(_[0],_[1],_[2]),this.col.push(e[0],e[1],e[2]);let m=s?s[x]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,d?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function Cr(n,t,e,i,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let l of[-1,1]){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,u])=>{let d=[0,0,0];return d[r]=l,d[o]=h,d[a]=u,[0,1,2].map(p=>t[p]+e[0][p]*d[0]*i[0]+e[1][p]*d[1]*i[1]+e[2][p]*d[2]*i[2])});n.quad(c,s,e[r].map(h=>h*l),null)}}}function ah(n,t,e){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Bo(i);return s.colorSpace=We,s.anisotropy=4,s}function Xf(n,t,e,i){n.beginPath(),t.forEach(([s,r],o)=>o?n.lineTo(s*e,r*i):n.moveTo(s*e,r*i)),n.closePath(),n.fill()}var jv=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function qf(n,t,e){let i=e??Sn(n.seed??1),s=n.pts,r=s.length,o=n.step??n.length/r,a=n.length??r*o,l=n.features??[],c=l.filter(T=>T.type==="ramp"),h=l.filter(T=>T.type==="boost"),u=l.filter(T=>T.type==="tunnel"),d=Math.max(0,Math.min(1,t.wet??0)),p=!!t.night,x=new ye;x.name="road";let _=[],m=[],f=[],y=T=>(m.push(T),T),v=ah(128,128,(T,I,N)=>{T.fillStyle="#0d0d0d",T.fillRect(0,0,I,N),T.fillStyle="#ffc81a",Xf(T,jv,I,N)}),g=ah(256,128,(T,I,N)=>{T.fillStyle="#04141a",T.fillRect(0,0,I,N),T.fillStyle="#37f3ff",Xf(T,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],I,N)}),A=ah(1024,256,(T,I,N)=>{T.fillStyle="#0b0e16",T.fillRect(0,0,I,N),T.strokeStyle="#ffd21f",T.lineWidth=10,T.strokeRect(12,12,I-24,N-24),T.fillStyle="#ffd21f",T.font="bold 150px Arial, Helvetica, sans-serif",T.textAlign="center",T.textBaseline="middle",T.fillText("POLYGON RUSH",I/2,N/2+8)});for(let T of[v,g,A])T&&f.push(T);g&&(g.wrapS=gr);let w=y(new oe({vertexColors:!0,flatShading:!0,roughness:.85-.6*d,metalness:d>0?.2:.02})),E=y(new dn({vertexColors:!0})),C=y(new oe({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),M=y(new oe({vertexColors:!0,flatShading:!0,roughness:1})),S=y(new oe({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),L=y(new dn({vertexColors:!0})),Z=y(new oe({color:v?16777215:16762906,map:v,emissive:v?16777215:16762906,emissiveMap:v,emissiveIntensity:.5,flatShading:!0})),V=y(new oe({color:207411,emissive:3666943,emissiveMap:g,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),et=y(new oe({vertexColors:!0,flatShading:!0,side:ze,roughness:.9})),at=y(new dn({vertexColors:!0})),H=y(new oe({vertexColors:!0,flatShading:!0,roughness:.6})),mt=y(new oe({color:A?16777215:16765471,map:A,emissive:A?16777215:16756736,emissiveMap:A,emissiveIntensity:.7,flatShading:!0})),Q=y(new oe({color:2830138,flatShading:!0,roughness:.7})),ut=y(new oe({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),Mt=T=>{for(let I of c)if(T>=I.s0&&T<I.s1)return I.height*(T-I.s0)/(I.s1-I.s0);return 0},At=T=>c.some(I=>T>=I.s0&&T<I.s1),lt=T=>u.some(I=>T>=I.s0&&T<=I.s1),_t=T=>{let I=T/o,N=Math.floor(I),X=I-N;N=(N%r+r)%r;let U=s[N],B=s[(N+1)%r],q=Ye(U.rx,B.rx,X),K=Ye(U.rz,B.rz,X),tt=Math.hypot(q,K)||1,yt=Ye(U.tx,B.tx,X),Ut=Ye(U.tz,B.tz,X),Lt=Math.hypot(yt,Ut)||1,St=Ye(U.y,B.y,X);return{s:T,x:Ye(U.x,B.x,X),z:Ye(U.z,B.z,X),yb:St,y:St,h:0,rx:q/tt,rz:K/tt,tx:yt/Lt,tz:Ut/Lt,w:Ye(U.width,B.width,X),curv:Ye(U.curv,B.curv,X),sample:!1}},J=(T,I,N)=>({x:Ye(T.x,I.x,N),y:Ye(T.y,I.y,N),yb:Ye(T.yb,I.yb,N),z:Ye(T.z,I.z,N),rx:Ye(T.rx,I.rx,N),rz:Ye(T.rz,I.rz,N),w:Ye(T.w,I.w,N)}),z=(T,I,N=0)=>[T.x+T.rx*I,T.y+N,T.z+T.rz*I],st=(T,I,N=0)=>[T.x+T.rx*I,T.yb+N,T.z+T.rz*I],D=[];for(let T of c)D.push({s:T.s0,h:0},{s:T.s1,h:T.height},{s:T.s1,h:0});D.sort((T,I)=>T.s-I.s);let $=[],j=0,rt=(T,I,N)=>{let X=$[$.length-1];if(X&&Math.abs(X.s-T)<1e-9&&Math.abs(X.h-I)<1e-9){X.sample=X.sample||N;return}let U=_t(T);U.h=I,U.y=U.yb+I,U.sample=N,$.push(U)};for(let T=0;T<r;T++){let I=T*o;for(;j<D.length&&D[j].s<=I+1e-9;)rt(D[j].s,D[j].h,!1),j++;rt(I,Mt(I),!0)}for(;j<D.length;)rt(D[j].s,D[j].h,!1),j++;let gt=$.length,pt=[];for(let T=0;T<gt;T++){let I=$[T],N=$[(T+1)%gt],X=I.s,U=T+1<gt?$[T+1].s:a,B=Math.abs(U-X)<1e-9,q=(X+U)/2;pt.push({a:I,b:N,sa:X,sb:U,drop:B,mid:q,ramp:!B&&At(q)})}let Tt=new ln,F=new ln,Qt=new ln,Bt=new ln,zt=new ln,Nt=new ln,$t=new ln,Ft=new ln,P=new ln,b=new ln,W=new ln,ct=new ln,dt=T=>T.w/2+1.5-Hf/2,ot=T=>T.w/2+1.5+Hf/2;for(let T of pt){let{a:I,b:N,sa:X,sb:U,mid:B}=T;if(T.drop){Tt.quad([z(I,-I.w/2),z(I,I.w/2),z(N,N.w/2),z(N,-N.w/2)],ge.rampDark,[I.tx,0,I.tz]);continue}let q=I.w/2,K=N.w/2;if(T.ramp)F.quad([z(I,-q),z(I,q),z(N,K),z(N,-K)],Math.floor(B/2)%2===0?ge.yellow:ge.black,[0,1,0]),Tt.quad([z(I,-q),z(N,-K),st(N,-K),st(I,-q)],ge.rampDark,[-I.rx,0,-I.rz]),Tt.quad([z(I,q),st(I,q),st(N,K),z(N,K)],ge.rampDark,[I.rx,0,I.rz]);else{Tt.quad([z(I,-q),z(I,q),z(N,K),z(N,-K)],Math.floor(B/8)%2?ge.asphaltB:ge.asphaltA,[0,1,0]);for(let St of[-1,1])Qt.quad([z(I,St*(q-.25),.02),z(I,St*(q-.45),.02),z(N,St*(K-.45),.02),z(N,St*(K-.25),.02)],ge.white,[0,1,0]);let tt=9,yt=3;for(let St=Math.floor(X/tt);St*tt<U;St++){let kt=Math.max(X,St*tt),jt=Math.min(U,St*tt+yt);if(jt-kt<1e-6)continue;let ie=J(I,N,(kt-X)/(U-X)),ae=J(I,N,(jt-X)/(U-X));Qt.quad([z(ie,-.08,.02),z(ie,.08,.02),z(ae,.08,.02),z(ae,-.08,.02)],ge.white,[0,1,0])}let Ut=Math.abs((I.curv+N.curv)/2)>Jv?1.2:.5,Lt=Math.floor(B/2)%2?ge.red:ge.railA;for(let St of[-1,1])Qt.quad([z(I,St*q,.025),z(I,St*(q+Ut),.025),z(N,St*(K+Ut),.025),z(N,St*K,.025)],Lt,[0,1,0])}for(let tt of[-1,1]){Bt.quad([st(I,tt*q),st(I,tt*dt(I)),st(N,tt*dt(N)),st(N,tt*K)],ge.sand,[0,1,0]);let yt=ca/2,Ut=-oh/2,Lt=-oh,St=[tt*I.rx*.6,.8,tt*I.rz*.6];Bt.quad([st(I,tt*ot(I),0),st(I,tt*(ot(I)+yt),Ut),st(N,tt*(ot(N)+yt),Ut),st(N,tt*ot(N),0)],ge.gravel,St),Bt.quad([st(I,tt*(ot(I)+yt),Ut),st(I,tt*(ot(I)+ca),Lt),st(N,tt*(ot(N)+ca),Lt),st(N,tt*(ot(N)+yt),Ut)],ge.gravel,St);let kt=Math.floor(B/6)%2?ge.railB:ge.railA,jt=tt*dt(I),ie=tt*dt(N),ae=tt*ot(I),me=tt*ot(N);zt.quad([st(I,jt,0),st(I,jt,bn),st(N,ie,bn),st(N,ie,0)],kt,[-tt*I.rx,0,-tt*I.rz]),zt.quad([st(I,ae,0),st(I,ae,bn),st(N,me,bn),st(N,me,0)],kt,[tt*I.rx,0,tt*I.rz]),zt.quad([st(I,jt,bn),st(I,ae,bn),st(N,me,bn),st(N,ie,bn)],kt,[0,1,0]),p&&Nt.quad([st(I,jt,bn+.02),st(I,ae,bn+.02),st(N,me,bn+.02),st(N,ie,bn+.02)],tt<0?ge.neonCyan:ge.neonMag,[0,1,0])}}for(let T of $){if(!T.sample||Math.abs(T.curv)<=$v||Math.round(T.s/o)%8!==0||lt(T.s)||At(T.s))continue;let N=-Math.sign(T.curv)*(T.w/2+1.5+.6),U=T.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];$t.quad([st(T,N-.6,1),st(T,N+.6,1),st(T,N+.6,2),st(T,N-.6,2)],[1,1,1],[-T.tx,0,-T.tz],U),Cr(W,[T.x+T.rx*N,T.yb+.35,T.z+T.rz*N],[[T.tx,0,T.tz],[T.rx,0,T.rz],[0,1,0]],[.08,.12,.65],ge.post)}let bt=_t(0),Rt=Math.max(4,Math.round(bt.w)),Ct=bt.w/Rt;for(let T=0;T<3;T++){let I=_t(-2+T),N=_t(-1+T);for(let X=0;X<Rt;X++){let U=-bt.w/2+X*Ct,B=U+Ct;Qt.quad([z(I,U,.03),z(I,B,.03),z(N,B,.03),z(N,U,.03)],(T+X)%2?ge.checkB:ge.checkW,[0,1,0])}}let Zt=bt.w/2+.8,vt=[[bt.tx,0,bt.tz],[bt.rx,0,bt.rz],[0,1,0]];for(let T of[-1,1])Cr(W,[bt.x+bt.rx*T*Zt,bt.yb+4,bt.z+bt.rz*T*Zt],vt,[.3,.3,4],ge.post);Cr(W,[bt.x,bt.yb+7.5,bt.z],vt,[.5,Zt,.5],ge.beam);let It=(T,I,N)=>[bt.x+bt.tx*T+bt.rx*I,bt.yb+N,bt.z+bt.tz*T+bt.rz*I];ct.quad([It(-.55,-Zt,5.2),It(-.55,Zt,5.2),It(-.55,Zt,6.8),It(-.55,-Zt,6.8)],[1,1,1],[-bt.tx,0,-bt.tz],[[0,0],[1,0],[1,1],[0,1]]),ct.quad([It(.55,-Zt,5.2),It(.55,Zt,5.2),It(.55,Zt,6.8),It(.55,-Zt,6.8)],[1,1,1],[bt.tx,0,bt.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let T of h){let I=[];for(let X=T.s0;X<T.s1;X+=2)I.push(X);I.push(T.s1);let N=I.map(_t);for(let X=0;X+1<N.length;X++){let U=N[X],B=N[X+1],q=(U.s-T.s0)/4,K=(B.s-T.s0)/4;Ft.quad([z(U,-U.w/2,.04),z(U,U.w/2,.04),z(B,B.w/2,.04),z(B,-B.w/2,.04)],[1,1,1],[0,1,0],[[q,0],[q,1],[K,1],[K,0]])}}let qt=T=>{let I=T.w/2+Vf,N=[[-I,0],[-I,Rr]];for(let X=1;X<=7;X++){let U=Math.PI-X*Math.PI/8;N.push([I*Math.cos(U),Rr+Zv*Math.sin(U)])}return N.push([I,Rr],[I,0]),N},Vt=(T,I,N,X=0)=>[T.x+T.rx*I+T.tx*X,T.yb+N,T.z+T.rz*I+T.tz*X],ht=(T,I,N)=>{let X=-I,U=Rr-N,B=Math.hypot(X,U)||1;return[T.rx*X/B,U/B,T.rz*X/B]},Pt=([T,I])=>{let N=-T,X=Rr-I,U=Math.hypot(N,X)||1;return[T+N/U*.45,I+X/U*.45]};for(let T of u){let I=[];for(let X=T.s0;X<T.s1;X+=2)I.push(X);I.push(T.s1);let N=I.map(_t);for(let X=0;X+1<N.length;X++){let U=N[X],B=N[X+1],q=qt(U),K=qt(B);for(let tt=0;tt<q.length-1;tt++){let yt=(q[tt][0]+q[tt+1][0])/2,Ut=(q[tt][1]+q[tt+1][1])/2;P.quad([Vt(U,q[tt][0],q[tt][1]),Vt(U,q[tt+1][0],q[tt+1][1]),Vt(B,K[tt+1][0],K[tt+1][1]),Vt(B,K[tt][0],K[tt][1])],tt%2?ge.tunA:ge.tunB,ht(U,yt,Ut))}if(Math.round((U.s-T.s0)/2)%6===0)for(let tt=1;tt<=8;tt++){let yt=Pt(q[tt]),Ut=Pt(q[tt+1]),Lt=(yt[0]+Ut[0])/2,St=(yt[1]+Ut[1])/2;b.quad([Vt(U,yt[0],yt[1]),Vt(U,Ut[0],Ut[1]),Vt(U,Ut[0],Ut[1],.6),Vt(U,yt[0],yt[1],.6)],tt%2?ge.neonCyan:ge.neonMag,ht(U,Lt,St))}}for(let X of[N[0],N[N.length-1]]){let U=X.w/2+Vf,B=[[X.tx,0,X.tz],[X.rx,0,X.rz],[0,1,0]];for(let q of[-1,1])Cr(P,[X.x+X.rx*q*(U+1.2),X.yb+5,X.z+X.rz*q*(U+1.2)],B,[2,1.1,5],ge.concrete);Cr(P,[X.x,X.yb+10.5,X.z],B,[2,U+3.5,1.5],ge.concreteB)}}let ft=(T,I,N,X=!1)=>{if(!T.idx.length)return null;let U=new xe;U.setAttribute("position",new pe(T.pos,3)),U.setAttribute("color",new pe(T.col,3)),U.setAttribute("uv",new pe(T.uv,2)),U.setIndex(T.idx),U.computeVertexNormals(),_.push(U);let B=new ve(U,I);return B.name=N,B.receiveShadow=X,x.add(B),B};ft(Tt,w,"road-asphalt",!0),ft(F,E,"road-ramp-top"),ft(Qt,C,"road-paint"),ft(Bt,M,"road-shoulder-talus"),ft(zt,S,"road-barriers"),p&&ft(Nt,L,"road-barrier-neon"),ft($t,Z,"road-chevrons"),ft(Ft,V,"road-boost"),ft(P,et,"road-tunnels"),ft(b,at,"road-tunnel-neon"),ft(W,H,"road-props"),ft(ct,mt,"road-start-sign");let Et=[];for(let T=1;T*Gf<a-5;T++){let I=T*Gf;if(u.some(K=>I>=K.s0-15&&I<=K.s1+15))continue;let N=_t(I),X=T%2?1:-1,U=X*(N.w/2+1.5+2.6),B=N.yb-oh*Math.min(1,2.45/ca),q=i.range(8.5,9.5);Et.push({x:N.x+N.rx*U,z:N.z+N.rz*U,y:B,h:q,hx:N.x+N.rx*(U-X*.6),hz:N.z+N.rz*(U-X*.6)})}if(Et.length){let T=new tn(.18,.26,9,6,1),I=new es(.55,0);_.push(T,I);let N=new Di(T,Q,Et.length),X=new Di(I,ut,Et.length);N.name="road-lamp-masts",X.name="road-lamp-heads";let U=new ce,B=new Mn,q=new k,K=new k;Et.forEach((tt,yt)=>{K.set(tt.x,tt.y+tt.h/2,tt.z),q.set(1,tt.h/9,1),U.compose(K,B,q),N.setMatrixAt(yt,U),K.set(tt.hx,tt.y+tt.h+.2,tt.hz),q.set(1,1,1),U.compose(K,B,q),X.setMatrixAt(yt,U)}),N.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,x.add(N,X)}return{group:x,update:(T,I)=>{g&&(g.offset.x=-(I*.9%1)),V.emissiveIntensity=2.2+.5*Math.sin(I*5)},dispose:()=>{x.removeFromParent();for(let T of _)T.dispose();for(let T of m)T.dispose();for(let T of f)T.dispose()}}}function Zf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new xe,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Yf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);let x=Yf(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Yf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new he(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<e;x++){let _=h.getComponent(d,x);a.setComponent(d+u,x,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ze=10,Oi=450,pn=40,$f=12e3,Jf=32,Kf=4e3,mn=Math.PI*2,Ir=new Ie,Zs=new Ht,jf=new ce,Qf=new ce,Qv=new k(0,1,0),td=n=>n<0?0:n>1?1:n,Bi=(n,t,e)=>n<t?t:n>e?e:n,rs=(n,t,e)=>{let i=td((e-n)/(t-n));return i*i*(3-2*i)};function ty(n){let t=(i,s)=>{let r=Math.imul(i|0,374761393)+Math.imul(s|0,668265263)+n|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},e=(i,s)=>{let r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=a*a*(3-2*a),h=l*l*(3-2*l),u=t(r,o),d=t(r+1,o),p=t(r,o+1),x=t(r+1,o+1);return u+(d-u)*c+(p-u)*h+(u-d-p+x)*c*h};return(i,s)=>(e(i,s)*.5+e(i*2+17.3,s*2-9.1)*.25+e(i*4-3.7,s*4+11.2)*.125)/.875}var Ys=n=>{let t=new Ht(n);return[t.r,t.g,t.b]},zi={sand:Ys(14271631),dry:Ys(10134118),garrigue:Ys(7309902),rock:Ys(11038533),pale:Ys(13352870),snow:Ys(15855076)},ey=[16513264,15853260,14725754,16052195],ny=[9075302,7236192,11047018,8023646],iy=[3407871,16727250,16757051],ua=0,fa=0,da=0,Pr=(n,t)=>{ua+=(n[0]-ua)*t,fa+=(n[1]-fa)*t,da+=(n[2]-da)*t};function sy(n,t,e,i,s,r){ua=zi.sand[0],fa=zi.sand[1],da=zi.sand[2],Pr(zi.dry,rs(2.5,7,n)),Pr(zi.garrigue,rs(25,75,n)*.55),Pr(zi.rock,rs(.4,.65,t)),Pr(zi.pale,rs(95,120,n)*.8),Pr(zi.snow,rs(125,150,n));let o=ua*e,a=fa*e,l=da*e;i&&(o=o*.45+.02,a=a*.5+.03,l=l*.75+.09);for(let c=0;c<9;c+=3)s[r+c]=o,s[r+c+1]=a,s[r+c+2]=l}function En(n,t){let e=n.index?n.toNonIndexed():n;e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.normal||e.computeVertexNormals();let i=e.attributes.position.count,s=new Float32Array(i*3);Zs.setHex(t);for(let r=0;r<i;r++)s[r*3]=Zs.r,s[r*3+1]=Zs.g,s[r*3+2]=Zs.b;return e.setAttribute("color",new he(s,3)),e}var Lr=n=>Zf(n,!1);function ry(n,t,e){let i=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return i-Math.floor(i)}function oy(){let n=new es(1,0),t=n.attributes.position;for(let e=0;e<t.count;e++){let i=t.getX(e),s=t.getY(e),r=t.getZ(e),o=.8+.4*ry(i,s,r);t.setXYZ(e,i*o,s*o,r*o)}return n.computeVertexNormals(),n}function ay(){return Lr([En(new tn(.35,.5,6,6).translate(0,3,0),7162931),En(new es(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function ly(){return Lr([En(new tn(.25,.35,1.2,5).translate(0,.6,0),7162931),En(new ts(1.1,10,6).translate(0,6,0),3037756)])}function cy(){let n=[En(new tn(.22,.35,8,5).translate(0,4,0),9071178)];for(let t=0;t<7;t++){let e=new ts(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(t*mn/7);n.push(En(e,5214010))}return Lr(n)}function hy(){return Lr([En(new tn(1.6,2.3,13,8).translate(0,6.5,0),16052712),En(new tn(2,2,2.2,8).translate(0,6.5,0),12727595),En(new tn(1.3,1.3,1.8,8).translate(0,14,0),16771488),En(new ts(1.7,1.2,8).translate(0,15.4,0),3812906)])}function uy(){return Lr([En(new Un(2.2,.9,6).translate(0,.45,0),15986662),En(new ts(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function On(n,t,e,i=!0){let s=new Di(n,t,e.length);for(let r=0;r<e.length;r++){let o=e[r];Ir.position.set(o.x,o.y,o.z),Ir.rotation.set(0,o.ry??0,0),Ir.scale.set(o.sx??1,o.sy??1,o.sz??1),Ir.updateMatrix(),s.setMatrixAt(r,Ir.matrix),o.col!==void 0&&(Zs.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,Zs))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=i,s}var fy=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,dy=`
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
}`;function ed(n,t,e,i){let s=t.pts,r=s.length,o=t.bounds,a=!!e.night,l=ty(i.int(1,1073741808)),c=o.minX-Oi-pn,h=o.minZ-Oi-pn,u=Math.ceil((o.maxX-o.minX+2*Oi)/pn)+3,d=Math.ceil((o.maxZ-o.minZ+2*Oi)/pn)+3,p=Array.from({length:u*d},()=>[]);for(let U=0;U<r;U++){let B=Bi(Math.floor((s[U].x-c)/pn),0,u-1),q=Bi(Math.floor((s[U].z-h)/pn),0,d-1);p[q*u+B].push(U)}let x=0;function _(U,B){let q=Math.floor((U-c)/pn),K=Math.floor((B-h)/pn),tt=Math.max(u,d),yt=1/0,Ut=0;for(let Lt=0;Lt<=tt;Lt++){for(let kt=K-Lt;kt<=K+Lt;kt++){if(kt<0||kt>=d)continue;let ie=kt===K-Lt||kt===K+Lt?1:2*Lt;for(let ae=q-Lt;ae<=q+Lt;ae+=ie){if(ae<0||ae>=u)continue;let me=p[kt*u+ae];for(let Me=0;Me<me.length;Me++){let Oe=me[Me],Ke=s[Oe],Ue=Ke.x-U,kn=Ke.z-B,yi=Ue*Ue+kn*kn;yi<yt&&(yt=yi,Ut=Oe)}}}let St=Lt*pn;if(yt<=St*St)break}return x=Math.sqrt(yt),Ut}function m(U,B,q){let K=q*q,tt=1/0,yt=Bi(Math.floor((U-q-c)/pn),0,u-1),Ut=Bi(Math.floor((U+q-c)/pn),0,u-1),Lt=Bi(Math.floor((B-q-h)/pn),0,d-1),St=Bi(Math.floor((B+q-h)/pn),0,d-1);for(let kt=Lt;kt<=St;kt++)for(let jt=yt;jt<=Ut;jt++){let ie=p[kt*u+jt];for(let ae=0;ae<ie.length;ae++){let me=s[ie[ae]],Me=me.x-U,Oe=me.z-B;Me*Me+Oe*Oe<=K&&me.y<tt&&(tt=me.y)}}return tt}let f=Math.ceil(r/4),y=new Float64Array(f*2);for(let U=0;U<f;U++)y[2*U]=s[U*4%r].x,y[2*U+1]=s[U*4%r].z;function v(U,B){let q=!1;for(let K=0,tt=f-1;K<f;tt=K++){let yt=y[2*K],Ut=y[2*K+1],Lt=y[2*tt],St=y[2*tt+1];Ut>B!=St>B&&U<(Lt-yt)*(B-Ut)/(St-Ut)+yt&&(q=!q)}return q}let g=o.minX-Oi,A=o.minZ-Oi,w=Math.ceil((o.maxX-o.minX+2*Oi)/Ze)+1,E=Math.ceil((o.maxZ-o.minZ+2*Oi)/Ze)+1,C=new Float32Array(w*E);for(let U=0;U<E;U++)for(let B=0;B<w;B++){let q=g+B*Ze,K=A+U*Ze,tt=_(q,K),yt=x,Ut=s[tt],Lt=Ut.width*.5,St=Ut.y;if(yt<40){let Ue=m(q,K,24);Ue<St&&(St=Ue)}let kt=1;if(!v(q,K)){let Ue=yt-Lt+(l(q/140+31.7,K/140-8.2)-.5)*70;kt=1-rs(110,200,Ue)}let jt=l(q/260,K/260),ae=-15+(10+130*Math.pow(td((jt-.42)/.5),1.5)+6*jt+15)*kt,me=rs(Lt+14,Lt+84,yt),Me=St-.6,Oe=Me+(ae-Me)*me,Ke=St+Math.max(0,yt-Lt-14)*.9;Oe>Ke&&(Oe=Ke),C[U*w+B]=Oe}function M(U,B){let q=(U-g)/Ze,K=(B-A)/Ze;q=Bi(q,0,w-1.000001),K=Bi(K,0,E-1.000001);let tt=Math.floor(q),yt=Math.floor(K),Ut=q-tt,Lt=K-yt,St=C[yt*w+tt],kt=C[yt*w+tt+1],jt=C[(yt+1)*w+tt],ie=C[(yt+1)*w+tt+1],ae=St+(kt-St)*Ut,me=jt+(ie-jt)*Ut;return ae+(me-ae)*Lt}let S=(U,B)=>Math.max(Math.abs(M(U+4,B)-M(U-4,B)),Math.abs(M(U,B+4)-M(U,B-4)))/8,L=(U,B,q)=>{let K=_(U,B);return x>=s[K].width*.5+1.5+4+q},Z=2*(w-1)*(E-1),V=new Float32Array(Z*9),et=new Float32Array(Z*9),at=0,H=(U,B,q,K,tt,yt,Ut,Lt,St)=>{let kt=K-U,jt=tt-B,ie=yt-q,ae=Ut-U,me=Lt-B,Me=St-q,Oe=jt*Me-ie*me,Ke=ie*ae-kt*Me,Ue=kt*me-jt*ae,kn=Math.hypot(Oe,Ke,Ue)||1,yi=1-Math.abs(Ke)/kn,R=at*9;V[R]=U,V[R+1]=B,V[R+2]=q,V[R+3]=K,V[R+4]=tt,V[R+5]=yt,V[R+6]=Ut,V[R+7]=Lt,V[R+8]=St,sy((B+tt+Lt)/3,yi,.9+.2*i.next(),a,et,R),at++};for(let U=0;U<E-1;U++)for(let B=0;B<w-1;B++){let q=U*w+B,K=q+1,tt=q+w,yt=tt+1,Ut=g+B*Ze,Lt=A+U*Ze,St=Ut+Ze,kt=Lt+Ze;H(Ut,C[q],Lt,Ut,C[tt],kt,St,C[K],Lt),H(St,C[K],Lt,Ut,C[tt],kt,St,C[yt],kt)}let mt=new xe;mt.setAttribute("position",new he(V,3)),mt.setAttribute("color",new he(et,3)),mt.computeVertexNormals(),mt.computeBoundingSphere();let Q=new ve(mt,new oe({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0}));Q.receiveShadow=!0;let ut=new ye;ut.name="environment",ut.add(Q);let Mt=(o.minX+o.maxX)/2,At=(o.minZ+o.maxZ)/2,lt=new Os($f,$f,Jf,Jf);lt.rotateX(-Math.PI/2);let _t=lt.attributes.position,J=_t.count,z=new Float32Array(J),st=new Float32Array(J);for(let U=0;U<J;U++)z[U]=_t.getX(U),st[U]=_t.getZ(U);let D=new ve(lt,new oe({color:e.seaColor,roughness:.25,metalness:.05,flatShading:!0}));D.position.set(Mt,0,At),ut.add(D);let $=new k(e.sunDir[0],e.sunDir[1],e.sunDir[2]).normalize(),j=new ye,rt=new Ae({uniforms:{topColor:{value:new Ht(e.skyTop)},horizonColor:{value:new Ht(e.skyHorizon)},sunColor:{value:new Ht(e.sunColor)},sunDir:{value:$},night:{value:a?1:0}},vertexShader:fy,fragmentShader:dy,side:qe,depthWrite:!1,fog:!1}),gt=new ve(new zo(Kf,32,16),rt);if(gt.renderOrder=-10,gt.frustumCulled=!1,j.add(gt),a){let B=new Float32Array(1500);for(let tt=0;tt<500;tt++){let yt=i.range(0,mn),Ut=Math.asin(i.range(.05,.98)),Lt=Kf*.97;B[tt*3]=Lt*Math.cos(Ut)*Math.cos(yt),B[tt*3+1]=Lt*Math.sin(Ut),B[tt*3+2]=Lt*Math.cos(Ut)*Math.sin(yt)}let q=new xe;q.setAttribute("position",new he(B,3));let K=new ks(q,new Sr({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));K.frustumCulled=!1,j.add(K)}ut.add(j);let pt=new Vo(e.hemiSky,e.hemiGround,e.hemiIntensity),Tt=new Xo(e.sunColor,e.sunIntensity);Tt.castShadow=!0,Tt.shadow.mapSize.set(2048,2048);let F=Tt.shadow.camera;F.left=-90,F.right=90,F.top=90,F.bottom=-90,F.near=1,F.far=600,F.updateProjectionMatrix(),Tt.shadow.bias=-5e-4,ut.add(pt,Tt,Tt.target);let Qt=n.fog,Bt=n.background,zt=new Uo(e.fogColor,e.fogDensity),Nt=new Ht(e.skyHorizon);n.fog=zt,n.background=Nt;let $t=g+(w-1)*Ze,Ft=A+(E-1)*Ze,P=()=>i.range(g+30,$t-30),b=()=>i.range(A+30,Ft-30),W=(U,B,q)=>{let K=[];for(let tt=0;tt<B&&K.length<U;tt++){let yt=q(P(),b());yt&&K.push(yt)}return K},ct=W(320,4e4,(U,B)=>{let q=M(U,B);if(q<4||q>95||!L(U,B,2)||S(U,B)>.6)return null;let K=i.range(.8,1.45);return{x:U,y:q-.3,z:B,sx:K,sy:K*i.range(.9,1.3),sz:K,ry:i.range(0,mn),col:16777215,v:i.range(.85,1.15)}}),dt=W(170,4e4,(U,B)=>{let q=M(U,B);if(q<6||q>70||!L(U,B,1.5)||S(U,B)>.6)return null;let K=i.range(.8,1.3);return{x:U,y:q-.3,z:B,sx:K,sy:K*i.range(.9,1.25),sz:K,ry:i.range(0,mn),col:16777215,v:i.range(.85,1.15)}}),ot=W(110,4e4,(U,B)=>{let q=M(U,B);if(q<1.8||q>14||!L(U,B,2)||S(U,B)>.5)return null;let K=i.range(.85,1.25);return{x:U,y:q-.3,z:B,sx:K,sy:K,sz:K,ry:i.range(0,mn),col:16777215,v:i.range(.9,1.1)}});ut.add(On(ay(),new oe({vertexColors:!0,flatShading:!0,roughness:.9}),ct)),ut.add(On(ly(),new oe({vertexColors:!0,flatShading:!0,roughness:.9}),dt)),ut.add(On(cy(),new oe({vertexColors:!0,flatShading:!0,roughness:.9}),ot));let bt=W(300,3e4,(U,B)=>{let q=M(U,B);if(q<1.5)return null;let K=i.range(1.2,4.5);return L(U,B,K*.6)?{x:U,y:q+K*.15,z:B,sx:K,sy:K*i.range(.55,.9),sz:K,ry:i.range(0,mn),col:i.pick(ny),v:i.range(.85,1.15)}:null}),Rt=W(3,3e4,(U,B)=>{if(M(U,B)>-4)return null;let q=_(U,B);if(x<s[q].width*.5+200||x>800)return null;let K=i.range(25,45);return{x:U,y:.1*K,z:B,sx:K,sy:K*.45,sz:K,ry:i.range(0,mn),col:10260344,v:1}});ut.add(On(oy(),new oe({color:16777215,flatShading:!0,roughness:.95}),bt.concat(Rt)));let Ct=[],Zt=[],vt=[],It=i.int(3,5),qt=0;for(let U=0;U<4e3&&qt<It;U++){let B=P(),q=b(),K=_(B,q),tt=s[K].width*.5;if(x<tt+25||x>tt+80)continue;let yt=M(B,q);if(yt<6||yt>40||S(B,q)>.35)continue;qt++;let Ut=i.int(7,12);for(let Lt=0;Lt<Ut;Lt++){let St=i.range(0,mn),kt=Math.sqrt(i.next())*18,jt=B+Math.cos(St)*kt,ie=q+Math.sin(St)*kt,ae=_(jt,ie);if(x<s[ae].width*.5+1.5+4+4)continue;let me=M(jt,ie);if(me<3)continue;let Me=i.range(4,6.5),Oe=i.range(3.5,6),Ke=i.range(4,6.5),Ue=i.pick([0,Math.PI/2])+i.range(-.15,.15),kn=me-1;if(Ct.push({x:jt,y:kn,z:ie,ry:Ue,sx:Me,sy:Oe,sz:Ke,col:i.pick(ey),v:1}),Zt.push({x:jt,y:kn+Oe,z:ie,ry:Ue,sx:Me*1.08,sy:i.range(1.8,2.6),sz:Ke*1.08}),a)for(let yi of[-1,1]){let R=yi*Me*.28,G=Ke/2+.03;vt.push({x:jt+R*Math.cos(Ue)+G*Math.sin(Ue),y:kn+Oe*.55,z:ie-R*Math.sin(Ue)+G*Math.cos(Ue),ry:Ue})}}}let Vt=new oe({color:16777215,flatShading:!0,roughness:.85}),ht=new oe({color:11818298,flatShading:!0,roughness:.8});if(Ct.length){let U=new Un(1,1,1).translate(0,.5,0),B=new tn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0);ut.add(On(U,Vt,Ct),On(B,ht,Zt))}if(a&&vt.length){let U=new Un(1.2,1.1,.12);ut.add(On(U,new dn({color:16761466}),vt,!1))}if(a){let U=0,B=0,q=!1;for(let K=0;K<4e3&&!q;K++){let tt=P(),yt=b(),Ut=_(tt,yt),Lt=s[Ut].width*.5;if(x<Lt+220||x>Lt+420)continue;let St=M(tt,yt);St<6||St>30||(U=tt,B=yt,q=!0)}if(q){let K=[],tt=[],yt=i.int(9,13);for(let Ut=0;Ut<yt;Ut++){let Lt=U+i.range(-110,110),St=B+i.range(-110,110),kt=M(Lt,St);if(kt<2)continue;let jt=i.range(6,10),ie=i.range(30,70);K.push({x:Lt,y:kt,z:St,sx:jt,sy:ie,sz:jt,col:1777720,v:i.range(.8,1.2)});let ae=i.pick(iy);for(let me=0;me<3;me++){let Me=me*mn/3+i.range(0,.5);tt.push({x:Lt+Math.cos(Me)*jt*.88,y:kt+ie*.05,z:St+Math.sin(Me)*jt*.88,ry:-Me,sy:ie*.9,col:ae,v:1})}}ut.add(On(new tn(.72,1,1,6).translate(0,.5,0),new oe({color:16777215,flatShading:!0,roughness:.7}),K),On(new Un(.5,1,.25).translate(0,.5,0),new dn({color:16777215}),tt,!1))}}{let U=[],B=[];for(let K=1;K<E-1;K++)for(let tt=1;tt<w-1;tt++){let yt=K*w+tt,Ut=C[yt];if(Ut<2||Ut>30)continue;let Lt=_(g+tt*Ze,A+K*Ze);if(x<s[Lt].width*.5+60)continue;(C[yt-1]<0||C[yt+1]<0||C[yt-w]<0||C[yt+w]<0?U:B).push(yt)}let q=U.length?U:B;if(q.length){let K=i.pick(q),tt=K%w,yt=(K-tt)/w,Ut=new ve(hy(),new oe({vertexColors:!0,flatShading:!0,roughness:.6}));Ut.position.set(g+tt*Ze,C[K]-.5,A+yt*Ze),Ut.castShadow=!0,ut.add(Ut)}}let Pt=W(4,2e4,(U,B)=>{if(M(U,B)>-3)return null;let q=_(U,B);return x<s[q].width*.5+250||x>900?null:{x:U,y:-.2,z:B,ry:i.range(0,mn),col:16777215,v:1}});Pt.length&&ut.add(On(uy(),new oe({vertexColors:!0,flatShading:!0,roughness:.6}),Pt));let ft=[],Et=[];for(let U=0;U<2e4&&ft.length<3;U++){let B=P(),q=b(),K=_(B,q);if(x<s[K].width*.5+60)continue;let tt=M(B,q);tt<55||ft.some(yt=>Math.hypot(yt.x-B,yt.z-q)<200)||ft.push({x:B,y:tt,z:q,ry:i.range(0,mn),speed:i.range(.9,1.5),phase:i.range(0,mn)})}let O=new Un(.7,14,.22).translate(0,7,0),xt=new oe({color:15659507,flatShading:!0,roughness:.6}),T=null;if(ft.length){ut.add(On(new tn(.8,.35,30,6).translate(0,15,0),xt,ft));for(let U of ft)Et.push(new ce().compose(new k(U.x,U.y+30,U.z),new Mn().setFromAxisAngle(Qv,U.ry),new k(1,1,1)));T=new Di(O,xt,ft.length*3),T.castShadow=!0,ut.add(T)}function I(U){if(T){for(let B=0;B<ft.length;B++){let q=U*ft[B].speed+ft[B].phase;for(let K=0;K<3;K++)Qf.makeRotationZ(q+K*mn/3),jf.multiplyMatrices(Et[B],Qf),T.setMatrixAt(B*3+K,jf)}T.instanceMatrix.needsUpdate=!0}}I(0);function N(U,B,q){Tt.position.set(q.x+$.x*200,q.y+$.y*200,q.z+$.z*200),Tt.target.position.set(q.x,q.y,q.z),j.position.set(q.x,0,q.z);for(let K=0;K<J;K++)_t.setY(K,.35*Math.sin(z[K]*.02+B*.8)+.25*Math.cos(st[K]*.017-B*.6));_t.needsUpdate=!0,I(B)}function X(){n.remove(ut),ut.traverse(U=>{if(U.geometry&&U.geometry.dispose(),U.material){let B=Array.isArray(U.material)?U.material:[U.material];for(let q of B)q.dispose()}}),Tt.shadow.map&&Tt.shadow.map.dispose(),ut.clear(),n.fog===zt&&(n.fog=Qt??null),n.background===Nt&&(n.background=Bt??null)}return n.add(ut),{group:ut,sun:Tt,update:N,dispose:X,heightAt:M}}var $e=0,Bn=1,rd=2,uh=.32,ch=-.7,od=.7,fh=[0,-uh,-ch],ad=[0,-uh,-od],nd=.62,py=.35,ld=Math.PI*2,xn=class{constructor(t){this.off=t||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(t){t!==this.slot&&(this.closeGroup(),this.slot=t)}closeGroup(){let t=this.pos.length/3;this.slot>=0&&t>this.gStart&&this.groups.push({start:this.gStart,count:t-this.gStart,materialIndex:this.slot}),this.gStart=t}tri(t,e,i,s){let r=this.off,o=t[0]+r[0],a=t[1]+r[1],l=t[2]+r[2],c=e[0]+r[0],h=e[1]+r[1],u=e[2]+r[2],d=i[0]+r[0],p=i[1]+r[1],x=i[2]+r[2],_=c-o,m=h-a,f=u-l,y=d-o,v=p-a,g=x-l,A=m*g-f*v,w=f*y-_*g,E=_*v-m*y,C=(o+c+d)/3-(s[0]+r[0]),M=(a+h+p)/3-(s[1]+r[1]),S=(l+u+x)/3-(s[2]+r[2]),L=this.pos;A*C+w*M+E*S>=0?L.push(o,a,l,c,h,u,d,p,x):L.push(o,a,l,d,p,x,c,h,u)}quad(t,e,i,s,r){this.tri(t,e,i,r),this.tri(t,i,s,r)}build(){this.closeGroup();let t=new xe;t.setAttribute("position",new pe(this.pos,3)),t.computeVertexNormals();for(let e of this.groups)t.addGroup(e.start,e.count,e.materialIndex);return t}};function my(n){let t=0,e=0,i=0;for(let r of n)t+=r[0],e+=r[1],i+=r[2];let s=n.length;return[t/s,e/s,i/s]}function gy(n,t){return[(n[0]+t[0])/2,(n[1]+t[1])/2,(n[2]+t[2])/2]}function id(n,t,e,i){let s=t.length;for(let r=0;r<s;r++)n.tri(e,t[r],t[(r+1)%s],i)}function Dr(n,t,e,i,s){let r=typeof e=="function"?e:()=>e,o=t.length,a=t[0].length,l=t.map(my);for(let c=0;c<o-1;c++){let h=t[c],u=t[c+1],d=gy(l[c],l[c+1]);for(let p=0;p<a;p++){let x=(p+1)%a;n.setSlot(r(c,p)),n.quad(h[p],h[x],u[x],u[p],d)}}n.setSlot(i),id(n,t[0],l[0],l[1]),n.setSlot(s),id(n,t[o-1],l[o-1],l[o-2])}function Tn(n,t,e,i,s,r,o){let a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=Math.hypot(a,l,c)||1,u=[a/h,l/h,c/h],d=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],p=[u[1]*d[2]-u[2]*d[1],u[2]*d[0]-u[0]*d[2],u[0]*d[1]-u[1]*d[0]],x=Math.hypot(p[0],p[1],p[2]);p=[p[0]/x,p[1]/x,p[2]/x];let _=[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],m=(f,y)=>{let v=[];for(let g=0;g<r;g++){let A=ld*g/r,w=Math.cos(A)*y,E=Math.sin(A)*y;v.push([f[0]+w*p[0]+E*_[0],f[1]+w*p[1]+E*_[1],f[2]+w*p[2]+E*_[2]])}return v};Dr(n,[m(t,i),m(e,s)],o,o,o)}function xa(n,t,e,i){n.setSlot(i);let s=(a,l,c)=>[t[0]+a*e[0],t[1]+l*e[1],t[2]+c*e[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)n.tri(r[a[0]],r[a[1]],r[a[2]],t),n.tri(r[a[0]],r[a[2]],r[a[3]],t)}function cd(n,t,e,i,s,r){let o=[];for(let a=1;a<s;a++){let l=-Math.PI/2+Math.PI*a/s,c=t[1]+e[1]*Math.sin(l),h=Math.cos(l),u=[];for(let d=0;d<i;d++){let p=ld*d/i;u.push([t[0]+e[0]*h*Math.cos(p),c,t[2]+e[2]*h*Math.sin(p)])}o.push(u)}Dr(n,o,r,r,r)}function ga(n,t,e,i){return[[0,t+i,n],[e,t+.1*i,n],[.8*e,t-i,n],[0,t-.8*i,n],[-.8*e,t-i,n],[-e,t+.1*i,n]]}function pa(n,t,e){let i=[];for(let s=0;s<6;s++){let r=Math.PI/3*s;i.push([t*Math.cos(r),n,e*Math.sin(r)])}return i}function xy(){let n=new xn(fh),e=[[1,.6,.01,.03],[.85,.6,.1,.1],[.5,.7,.19,.15],[.1,.82,.2,.15],[-.25,.8,.19,.14],[-.6,.8,.12,.1],[-.9,.84,.07,.07],[-1.06,.9,.02,.03]].map(([i,s,r,o])=>ga(i,s,r,o));return Dr(n,e,(i,s)=>s===2||s===3?Bn:$e,$e,$e),xa(n,[0,.5,-.15],[.13,.13,.3],Bn),Tn(n,[.16,.36,-.3],[.16,.3,-.98],.05,.035,6,Bn),Tn(n,[.1,.5,-.25],[.08,.32,-.7],.03,.025,5,Bn),Tn(n,[-.1,.5,-.25],[-.08,.32,-.7],.03,.025,5,Bn),Tn(n,[-.2,1.02,.42],[.2,1.02,.42],.018,.018,5,Bn),n.build()}function _y(){let n=new xn(fh),t=[ga(.45,.95,.15,.08),ga(.15,1.08,.17,.1),ga(-.05,1.05,.15,.07)];return Dr(n,t,$e,$e,$e),n.build()}function vy(){let n=new xn(fh);return xa(n,[0,.9,-1.07],[.045,.022,.012],$e),n.build()}function yy(){let n=new xn;return Tn(n,[0,0,0],[0,0,-.4],.045,.004,6,$e),n.build()}function My(){let n=new xn(ad);for(let t of[-1,1])Tn(n,[.09*t,.32,.7],[.09*t,.84,.76],.026,.022,5,Bn);return xa(n,[0,.84,.78],[.11,.025,.07],$e),n.build()}function Sy(){let n=new xn(ad);return cd(n,[0,.66,.93],[.07,.05,.05],6,4,$e),n.build()}function by(){let n=new xn;return Tn(n,[-.08,0,0],[.08,0,0],.32,.32,8,Bn),Tn(n,[-.085,0,0],[.085,0,0],.2,.2,8,rd),n.build()}function Ey(){let n=new xn;return cd(n,[0,.12,0],[.12,.13,.13],8,4,$e),xa(n,[0,.14,.12],[.1,.035,.02],Bn),n.build()}function wy(){let n=new xn,t=[pa(-.1,.12,.08),pa(.02,.15,.1),pa(.22,.17,.11),pa(.4,.14,.1)];return Dr(n,t,e=>e===0?rd:$e,Bn,$e),n.build()}function Ty(){let n=new xn;for(let t of[-1,1])Tn(n,[.16*t,.34,0],[.25*t,.22,.26],.05,.04,5,$e),Tn(n,[.25*t,.22,.26],[.14*t,.44,.63],.04,.035,5,$e);return n.build()}function sd(n){let t=new xn,e=[.08*n,-.22,.4],i=[.01*n,-.62,.45];return Tn(t,[0,0,0],e,.07,.06,5,$e),Tn(t,e,i,.05,.04,5,Bn),t.build()}var lh=null;function Ay(){return lh||(lh={body:xy(),bubble:_y(),tail:vy(),flame:yy(),fork:My(),headlight:Sy(),wheel:by(),helmet:Ey(),torso:wy(),arms:Ty(),legR:sd(-1),legL:sd(1)}),lh}var $s=(n,t,e)=>n<t?t:n>e?e:n,hh=n=>$s(n,0,1),os=n=>Number.isFinite(n)?n:0,ma=n=>typeof n=="boolean"?n?1:0:hh(os(n));function wn(n,t){return n.name=t,n}function gn(n,t,e,i){let s=new ve(n,t);return s.name=e,s.castShadow=i,s.receiveShadow=!1,s}function hd({color:n=14034984,accent:t=16761395,isPlayer:e=!1}={}){let i=Ay(),s=new oe({color:new Ht(n),metalness:.45,roughness:.28,flatShading:!0,side:ze}),r=new oe({color:1842983,metalness:.5,roughness:.45,flatShading:!0,side:ze}),o=new oe({color:new Ht(t),metalness:.5,roughness:.3,flatShading:!0,side:ze}),a=[s,r,o],l=new oe({color:new Ht(t),metalness:.1,roughness:.1,transparent:!0,opacity:.42,flatShading:!0,side:ze,depthWrite:!1}),c=new oe({color:16777215,emissive:16777215,emissiveIntensity:2.2,flatShading:!0}),h=new oe({color:3342336,emissive:16718362,emissiveIntensity:.8,flatShading:!0}),u=new oe({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,flatShading:!0,depthWrite:!1}),d=wn(new ye,"bike"),p=wn(new ye,"leanPivot"),x=wn(new ye,"pitchPivot");x.position.set(0,uh,ch);let _=wn(new ye,"rearWheel");_.add(gn(i.wheel,a,"rearWheelMesh",!0));let m=wn(new ye,"chassis"),f=gn(i.body,a,"body",!0),y=gn(i.bubble,l,"bubble",!1),v=gn(i.tail,h,"tail",!1),g=gn(i.flame,u,"flame",!1);g.position.set(.16,-.02,-.28),g.scale.z=.02,g.visible=!1;let A=wn(new ye,"hips");A.position.set(0,nd,py);let w=wn(new ye,"torso"),E=gn(i.torso,a,"torsoMesh",!0),C=gn(i.arms,a,"arms",!0),M=wn(new ye,"head");M.position.set(0,.42,0),M.add(gn(i.helmet,a,"helmet",!0)),w.add(E,C,M);let S=wn(new ye,"legR");S.position.set(-.12,-.02,0),S.add(gn(i.legR,a,"legRMesh",!0));let L=wn(new ye,"legL");L.position.set(.12,-.02,0),L.add(gn(i.legL,a,"legLMesh",!0)),A.add(w,S,L),m.add(f,y,v,g,A);let Z=wn(new ye,"steerPivot");Z.position.set(0,0,od-ch);let V=gn(i.fork,a,"fork",!0),et=gn(i.headlight,c,"headlight",!1),at=wn(new ye,"frontWheel");if(at.add(gn(i.wheel,a,"frontWheelMesh",!0)),Z.add(V,et,at),x.add(_,m,Z),p.add(x),d.add(p),e){let Q=new Wo(16773590,60,60,.5,.6,2);Q.name="headSpot",Q.castShadow=!1,Q.position.set(0,1,.9),Q.target.position.set(0,.2,30),Q.target.name="headSpotTarget",d.add(Q,Q.target)}let H={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0};function mt(Q,ut){let Mt=Q||{},At=Number.isFinite(ut)?$s(ut,0,.1):1/60,lt=1-Math.exp(-At*14),_t=1-Math.exp(-At*7),J=1-Math.exp(-At*5);H.lean+=($s(os(Mt.lean),-1.2,1.2)-H.lean)*_t,H.steer+=($s(os(Mt.steer),-1,1)-H.steer)*lt,H.pitch+=($s(os(Mt.pitch),-.8,.8)-H.pitch)*_t,H.compress+=(hh(os(Mt.compress))-H.compress)*lt,H.sr+=(hh(os(Mt.speedRatio))-H.sr)*J,H.brake+=(ma(Mt.braking)-H.brake)*J,H.air+=(ma(Mt.airborne)-H.air)*J,H.drift+=(ma(Mt.drift)-H.drift)*J,H.boost+=(ma(Mt.boost)-H.boost)*J;let z=H.lean,st=z>.01?1:z<-.01?-1:0;p.rotation.z=z,x.rotation.x=-H.pitch,Z.rotation.y=-.35*H.steer,m.position.y=-.08*H.compress,A.position.x=-.15*z,A.position.y=nd+.1*H.air,A.rotation.z=-.25*z,w.rotation.x=$s(.5+.4*H.sr-.25*H.brake-.3*H.air,.05,1.05),w.rotation.z=-.15*H.drift*st,M.rotation.y=-.4*z,M.rotation.z=-.5*z,M.rotation.x=.25*H.sr-.15*H.air,C.rotation.x=-.3*H.air;let D=.35*Math.abs(z)+.25*H.drift;S.rotation.z=z>=0?-D:0,L.rotation.z=z<0?D:0,h.emissiveIntensity=.8+2.2*H.brake,g.visible=H.boost>.03,g.scale.z=.02+1.3*H.boost,u.emissiveIntensity=1.5+2*H.boost;let $=os(Mt.wheelSpin);_.rotation.x=$,at.rotation.x=$}return{group:d,update:mt}}var Ry=Math.PI*2,Le=6e3,Js=2200,ud=60,fd=30,dd=60,Cy=3,Ur=2e3,as=90,mh=1.5,Iy=40,pd=Iy-mh,dh=120,Py={dust:{life:.8,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.18,s1:.7,a0:.5,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.6,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.4,s1:1.2,a0:.45,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.5,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.12,s1:.04,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.5,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.1,s1:.06,a0:.75,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.25,grav:-3,drag:3,spread:1.3,lift:[0,.8],s0:.3,s1:.08,a0:.7,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.6,grav:0,drag:4,spread:0,lift:[.4,1],s0:.3,s1:1,a0:.6,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},Ly=new Ht(16777215),Dy=new Ht(8386303);function nn(n,t){return n+(t-n)*Math.random()}function _a(n,t,e){return n<t?t:n>e?e:n}function ki(n,t=0){return Number.isFinite(n)?n:t}function Uy(n){return Number.isFinite(n)?_a(n,0,.1):0}function ph(n,t){return n-t*Math.floor(n/t+.5)}function Ny(){let n=globalThis.innerHeight||900,t=Math.min(globalThis.devicePixelRatio||1,2);return n*t}var Fy=`
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
}`,Oy=`
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
}`,By=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,zy=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function md(n,t){let e=t||{},i=ki(e.rain,0),s=ki(e.wind,0),r=new Float32Array(Le*3),o=new Float32Array(Le*3),a=new Float32Array(Le*3),l=new Float32Array(Le*3),c=new Float32Array(Le*3),h=new Float32Array(Le),u=new Float32Array(Le),d=new Float32Array(Le),p=new Float32Array(Le),x=new Float32Array(Le),_=new Float32Array(Le),m=new Float32Array(Le),f=new Float32Array(Le),y=new Float32Array(Le),v=new Float32Array(Le),g=new Float32Array(Le),A=new Uint8Array(Le),w=0,E=!1,C=new xe,M=new he(r,3).setUsage(Yn),S=new he(c,3).setUsage(Yn),L=new he(h,1).setUsage(Yn),Z=new he(u,1).setUsage(Yn),V=new he(d,1).setUsage(Yn);C.setAttribute("position",M),C.setAttribute("aColor",S),C.setAttribute("aSize",L),C.setAttribute("aAlpha",Z),C.setAttribute("aMode",V);let et=new Ae({uniforms:{uScale:{value:700}},vertexShader:Fy,fragmentShader:Oy,transparent:!0,depthWrite:!1,blending:bc,blendSrc:Ec,blendDst:mr,blendEquation:ri}),at=new ks(C,et);at.frustumCulled=!1,n.add(at);function H(ht,Pt,ft,Et,O,xt,T,I=1){let N=Py[ht];if(!N||!Number.isFinite(Pt)||!Number.isFinite(ft)||!Number.isFinite(Et))return;let X=ki(O),U=ki(xt),B=ki(T),q=Math.min(Le,Math.max(0,Math.floor(ki(I,1))));for(let K=0;K<q;K++){let tt=w;w=(w+1)%Le;let yt,Ut,Lt;if(N.ring){let kt=(q>1?K/q:Math.random())*Ry+Math.random()*.2,jt=nn(3.5,5.5);yt=Math.cos(kt)*jt+X*.3,Lt=Math.sin(kt)*jt+B*.3,Ut=nn(N.lift[0],N.lift[1])+U*.3}else yt=X+nn(-N.spread,N.spread),Lt=B+nn(-N.spread,N.spread),Ut=U+nn(N.lift[0],N.lift[1]);let St=tt*3;r[St]=Pt+nn(-.1,.1),r[St+1]=ft,r[St+2]=Et+nn(-.1,.1),o[St]=yt,o[St+1]=Ut,o[St+2]=Lt,p[tt]=0,x[tt]=N.life*nn(.85,1.15),_[tt]=N.drag,m[tt]=N.grav,f[tt]=N.s0*nn(.85,1.2),y[tt]=N.s1*nn(.85,1.2),v[tt]=N.a0,g[tt]=ft,A[tt]=N.bounce?1:0,d[tt]=N.add?1:0,a[St]=N.c0[0],a[St+1]=N.c0[1],a[St+2]=N.c0[2],l[St]=N.c1[0],l[St+1]=N.c1[1],l[St+2]=N.c1[2]}q>0&&(E=!0)}function mt(ht){let Pt=!1;for(let ft=0;ft<Le;ft++){if(x[ft]<=0)continue;if(Pt=!0,p[ft]+=ht,p[ft]>=x[ft]){x[ft]=0,u[ft]=0,h[ft]=0;continue}let Et=ft*3,O=Math.max(0,1-_[ft]*ht),xt=o[Et]*O,T=o[Et+1]*O-m[ft]*ht,I=o[Et+2]*O,N=r[Et]+xt*ht,X=r[Et+1]+T*ht,U=r[Et+2]+I*ht;A[ft]&&X<g[ft]&&T<0&&(X=g[ft],T=-T*.35,xt*=.6,I*=.6,A[ft]=0),o[Et]=xt,o[Et+1]=T,o[Et+2]=I,r[Et]=N,r[Et+1]=X,r[Et+2]=U;let B=p[ft]/x[ft];h[ft]=f[ft]+(y[ft]-f[ft])*B,u[ft]=v[ft]*(1-B*B),c[Et]=a[Et]+(l[Et]-a[Et])*B,c[Et+1]=a[Et+1]+(l[Et+1]-a[Et+1])*B,c[Et+2]=a[Et+2]+(l[Et+2]-a[Et+2])*B}return Pt}let Q=null;if(i>0){let ht=new xe,Pt=new Float32Array(Js*6),ft=new he(Pt,3).setUsage(Yn);ht.setAttribute("position",ft);let Et=new Float32Array(Js*3),O=new Float32Array(Js),xt=new Float32Array(Js);for(let N=0;N<Js;N++)Et[N*3]=(Math.random()-.5)*ud,Et[N*3+1]=-12+Math.random()*fd,Et[N*3+2]=(Math.random()-.5)*dd,O[N]=nn(22,30),xt[N]=nn(.8,1.2);let T=new zs({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),I=new Mr(ht,T);I.frustumCulled=!1,n.add(I),Q={geo:ht,mat:T,lines:I,attr:ft,pa:Pt,head:Et,fall:O,len:xt,windX:5.5*s,windZ:2*s}}function ut(ht,Pt,ft){let Et=Q,O=Et.pa,xt=Et.head,T=Et.windX,I=Et.windZ,N=Pt.x,X=Pt.y+Cy,U=Pt.z;for(let B=0;B<Js;B++){let q=B*3,K=N+ph(xt[q]-N,ud),tt=X+ph(xt[q+1]-X,fd),yt=U+ph(xt[q+2]-U,dd),Ut=Et.fall[B],Lt=T-ft.x,St=-Ut-ft.y,kt=I-ft.z,jt=.05*Et.len[B],ie=B*6;O[ie]=K-Lt*jt,O[ie+1]=tt-St*jt,O[ie+2]=yt-kt*jt,O[ie+3]=K,O[ie+4]=tt,O[ie+5]=yt,xt[q]=K+T*ht,xt[q+1]=tt-Ut*ht,xt[q+2]=yt+I*ht}Et.attr.needsUpdate=!0}let Mt=new Float32Array(Ur*4*3),At=new Float32Array(Ur*4),lt=new Uint16Array(Ur*6);for(let ht=0;ht<Ur;ht++){let Pt=ht*4;lt.set([Pt,Pt+1,Pt+2,Pt,Pt+2,Pt+3],ht*6)}let _t=new xe,J=new he(Mt,3).setUsage(Yn),z=new he(At,1).setUsage(Yn);_t.setAttribute("position",J),_t.setAttribute("aAlpha",z),_t.setIndex(new he(lt,1));let st=new Ae({uniforms:{uColor:{value:new Ht(1315086)}},vertexShader:By,fragmentShader:zy,transparent:!0,depthWrite:!1,side:ze,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),D=new ve(_t,st);D.frustumCulled=!1,n.add(D);let $=0,j=1/0,rt=-1;function gt(ht,Pt,ft,Et,O,xt,T=.3,I=.5){if(![ht,Pt,ft,Et,O,xt,T,I].every(Number.isFinite))return;let N=Et-ht,X=xt-ft,U=Math.hypot(N,X);if(U<1e-4)return;let B=T*.5,q=-X/U*B,K=N/U*B,tt=_a(I,0,1),yt=Pt+.03,Ut=O+.03,Lt=$*4;$=($+1)%Ur;let St=Mt,kt=Lt*3;St[kt]=ht+q,St[kt+1]=yt,St[kt+2]=ft+K,St[kt+3]=ht-q,St[kt+4]=yt,St[kt+5]=ft-K,St[kt+6]=Et-q,St[kt+7]=Ut,St[kt+8]=xt-K,St[kt+9]=Et+q,St[kt+10]=Ut,St[kt+11]=xt+K,At[Lt]=tt,At[Lt+1]=tt,At[Lt+2]=tt,At[Lt+3]=tt,Lt<j&&(j=Lt),Lt+3>rt&&(rt=Lt+3)}function pt(){if(rt<0)return;let ht=j,Pt=rt-j+1;J.clearUpdateRanges(),J.addUpdateRange(ht*3,Pt*3),J.needsUpdate=!0,z.clearUpdateRanges(),z.addUpdateRange(ht,Pt),z.needsUpdate=!0,j=1/0,rt=-1}let Tt=new ye;Tt.matrixAutoUpdate=!1,n.add(Tt);let F=new Float32Array(as*6),Qt=new he(F,3).setUsage(Yn),Bt=new xe;Bt.setAttribute("position",Qt);let zt=new Float32Array(as),Nt=new Float32Array(as),$t=new Float32Array(as),Ft=new Float32Array(as);for(let ht=0;ht<as;ht++)zt[ht]=nn(-1,1),Nt[ht]=nn(-1,1),$t[ht]=-mh-Math.random()*pd,Ft[ht]=nn(.5,1.2);let P=new zs({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),b=new Mr(Bt,P);b.frustumCulled=!1,b.visible=!1,Tt.add(b);let W=0,ct=0,dt=0,ot=0;function bt(ht,Pt){dt+=(W-dt)*(1-Math.exp(-6*ht)),ot+=(ct-ot)*(1-Math.exp(-8*ht)),Pt.updateMatrixWorld(),Tt.matrix.copy(Pt.matrixWorld),Tt.matrixWorld.copy(Pt.matrixWorld);let ft=Math.floor(dt*as);if(ft<=0){b.visible=!1;return}b.visible=!0,Bt.setDrawRange(0,ft*2),P.color.copy(Ly).lerp(Dy,ot),P.opacity=.05+.22*dt;let Et=(30+50*dt)*ht,O=1+7*dt,xt=F;for(let T=0;T<ft;T++){let I=$t[T]+Et;I>-mh&&(I-=pd),$t[T]=I;let N=-I,X=zt[T]*N*.9,U=Nt[T]*N*.5,B=O*Ft[T],q=T*6;xt[q]=X,xt[q+1]=U,xt[q+2]=I,xt[q+3]=X,xt[q+4]=U,xt[q+5]=I-B}Qt.needsUpdate=!0}let Rt=new k,Ct=new k,Zt=!1,vt=!1;function It(ht,Pt){if(vt)return;ht=Uy(ht);let ft=Pt.position;Zt?ht>0&&(Ct.subVectors(ft,Rt).divideScalar(ht),Ct.lengthSq()>dh*dh&&Ct.setLength(dh),Rt.copy(ft)):(Rt.copy(ft),Ct.set(0,0,0),Zt=!0);let Et=ki(Pt.fov,60);et.uniforms.uScale.value=Ny()/(2*Math.tan(Et*Math.PI/360)),(mt(ht)||E)&&(M.needsUpdate=!0,S.needsUpdate=!0,L.needsUpdate=!0,Z.needsUpdate=!0,V.needsUpdate=!0,E=!1),Q&&ht>0&&ut(ht,ft,Ct),bt(ht,Pt),pt()}function qt(ht,Pt){let ft=_a(ki(ht,0),0,1.5);W=_a((ft-.7)/.3,0,1),ct=Pt?1:0}function Vt(){vt||(vt=!0,n.remove(at,D,Tt),Q&&n.remove(Q.lines),C.dispose(),et.dispose(),_t.dispose(),st.dispose(),Bt.dispose(),P.dispose(),Q&&(Q.geo.dispose(),Q.mat.dispose()))}return{emit:H,addSkid:gt,setSpeed:qt,update:It,dispose:Vt}}var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ky=new Bs(-1,1,1,-1,0,1),gh=class extends xe{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}},Hy=new gh,Hi=class{constructor(t){this._mesh=new ve(Hy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ky)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ks=class extends _n{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ui.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Nr=class extends _n{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ya=class extends _n{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ma=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Jt);this._width=i.width,this._height=i.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ks(va),this.copyPass.material.blending=Xn,this.clock=new qo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nr!==void 0&&(o instanceof Nr?i=!0:o instanceof ya&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Jt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sa=class extends _n{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var gd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var js=class n extends _n{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Jt(t.x,t.y):new Jt(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,o,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qe(r,o,{type:Fn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Qe(r,o,{type:Fn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=gd;this.highPassUniforms=Ui.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Jt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=va;this.copyUniforms=Ui.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:vo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new dn,this.fsQuad=new Hi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Jt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Jt(.5,.5)},direction:{value:new Jt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};js.BlurDirectionX=new Jt(1,0);js.BlurDirectionY=new Jt(0,1);var xd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ba=class extends _n{constructor(){super();let t=xd;this.uniforms=Ui.clone(t.uniforms),this.material=new ko({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _d=62,Vy=84,vd=96,Gy=6,Wy=10,Xy=3,qy=4,Yy=5,Ea=.6;function $n(n,t,e){return n<t?t:n>e?e:n}function Ee(n,t=0){return Number.isFinite(n)?n:t}function xh(n,t,e){return n+(t-n)*e}function Qs(n,t){return 1-Math.exp(-n*t)}function Zy(n){return Number.isFinite(n)?$n(n,0,.1):0}function yd(n){let t=new k,e=new k,i=new k,s=new k,r={x:1,z:0},o=!1,a=0,l=0,c=0,h=_d,u=0,d=0,p=0;function x(g,A){let w=Ee(g.x),E=Ee(g.y),C=Ee(g.z),M=Ee(g.heading)+Ee(g.yaw)*.5,S=Math.sin(M),L=Math.cos(M),Z=-L,V=S;r.x=Z,r.z=V;let et=g.airborne?1:0,at=xh(6.2,4.8,A)+.9*et,H=xh(2.4,1.9,A)+.7*et,mt=$n(Ee(g.slope),-.15,.15),ut=-$n(Ee(g.lean),-1.5,1.5)*.3;t.set(w-S*at+Z*ut,E+H-mt*at,C-L*at+V*ut),t.y<E+Ea&&(t.y=E+Ea),e.set(w+S*8,E+1.2+mt*4-1.5*et,C+L*8)}function _(g){return xh(_d,Vy,g)}function m(g,A,w,E){n.position.set(i.x+r.x*A,Math.max(i.y+w,E),i.z+r.z*A),n.lookAt(s),n.rotateZ(g)}function f(g,A){if(g=Zy(g),!o){y(A);return}a+=g;let w=$n(Ee(A.speedRatio),0,1);x(A,w);let E=Ee(A.x)-u,C=Ee(A.y)-d,M=Ee(A.z)-p;E*E+C*C+M*M<400&&(i.x+=E,i.y+=C,i.z+=M,s.x+=E,s.y+=C,s.z+=M),u=Ee(A.x),d=Ee(A.y),p=Ee(A.z),i.lerp(t,Qs(Gy,g)),s.lerp(e,Qs(Wy,g));let S=Ee(A.y)+Ea;i.y<S&&(i.y=S),c*=Math.exp(-Yy*g);let L=w*w,Z=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,V=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,et=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,at=c*.35+L*.01,H=Z*at,mt=V*at,Q=et*(c*.03+L*.002);l+=((A.boosting?1:0)-l)*Qs(qy,g);let ut=_(w),Mt=ut+(vd-ut)*l;h+=(Mt-h)*Qs(Xy,g),Math.abs(n.fov-h)>1e-4&&(n.fov=h,n.updateProjectionMatrix());let At=-$n(Ee(A.lean),-1.5,1.5)*.13+Q;m(At,H,mt,S)}function y(g){let A=$n(Ee(g.speedRatio),0,1);x(g,A),i.copy(t),s.copy(e),u=Ee(g.x),d=Ee(g.y),p=Ee(g.z),o=!0,a=0,c=0,l=g.boosting?1:0,h=_(A)+(vd-_(A))*l,n.fov=h,n.updateProjectionMatrix();let w=-$n(Ee(g.lean),-1.5,1.5)*.13;m(w,0,0,Ee(g.y)+Ea)}function v(g){c=$n(c+Ee(g),0,1.5)}return{update:f,shake:v,snap:y}}var $y=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Jy=`
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
}`;function Md(n,t,e,i){let r=Ee((i||{}).bloom,.5),o=null,a=null,l=null,c=0,h=0,u=0,d=0,p=0,x=Math.min(globalThis.devicePixelRatio||1,2);try{o=new Ma(n),o.setPixelRatio(x),o.addPass(new Sa(t,e)),a=new js(new Jt(256,256),r,.6,.82),o.addPass(a),l=new Ks({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:$y,fragmentShader:Jy}),o.addPass(l),o.addPass(new ba)}catch(v){console.warn("Post-traitement indisponible, rendu direct :",v),o=null,a=null,l=null}function _(v,g){!Number.isFinite(v)||!Number.isFinite(g)||v<=0||g<=0||(x=Math.min(globalThis.devicePixelRatio||1,2),n.setPixelRatio(x),n.setSize(v,g),o&&(o.setPixelRatio(x),o.setSize(v,g)))}function m(v,g){c=$n(Ee(v,0),0,1),h=g?1:0}function f(v){if(v=Number.isFinite(v)?$n(v,0,.1):0,p+=v,u+=(c-u)*Qs(8,v),d+=(h-d)*Qs(8,v),l&&(l.uniforms.uSpeed.value=u,l.uniforms.uBoost.value=d,l.uniforms.uTime.value=p),o)try{o.render(v);return}catch(g){console.warn("\xC9chec du post-traitement, rendu direct :",g),o=null}n.render(t,e)}function y(){o&&o.dispose(),a&&a.dispose&&a.dispose(),l&&l.dispose&&l.dispose(),o=null}return{render:f,setSize:_,setSpeed:m,dispose:y}}var Ky=Ni.maxSpeed*3.6,_h=20,jy=.85,Qy=800,gi=360,tM=24,eM=3,Sd=(n,t,e)=>n<t?t:n>e?e:n,bd=n=>(n<10?"0":"")+n,Ed=()=>typeof performance<"u"?performance.now():Date.now();function Fr(n){if(n==null||!Number.isFinite(n))return"--:--.--";let t=Math.max(0,Math.floor(n*100+1e-6)),e=Math.floor(t/6e3),i=Math.floor(t/100)%60;return`${e}:${bd(i)}.${bd(t%100)}`}function nM(n){return typeof n=="number"?"#"+(n&16777215).toString(16).padStart(6,"0"):typeof n=="string"&&n?n:"#ffffff"}function vh(n,t){n.classList.remove(t),n.offsetWidth,n.classList.add(t)}var iM=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${gi}" height="${gi}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;function wd(n){let t=document.createElement("div");t.className="pr-hud pr-off",t.innerHTML=iM,n.appendChild(t);let e=lt=>t.querySelector(lt),i={pos:e(".pr-pos"),posCur:e(".pr-pos-cur"),posTot:e(".pr-pos-tot"),wrong:e(".pr-wrong"),lap:e(".pr-lap"),time:e(".pr-time"),best:e(".pr-best-v"),dias:e(".pr-dias"),mm:e(".pr-minimap"),speed:e(".pr-speed-num"),bar:e(".pr-bar"),count:e(".pr-count"),flash:e(".pr-flash")},s=[];for(let lt=0;lt<_h;lt++){let _t=document.createElement("span");_t.className="pr-seg",i.bar.appendChild(_t),s.push(_t)}let r=Object.create(null),o=(lt,_t,J)=>r[lt]===J?!1:(r[lt]=J,_t.textContent=J,!0),a=!1,l=-1,c=!1,h=!1,u=!1,d=!1,p=0,x=0,_=[],m="";function f(lt){for(;_.length<lt;){let _t=document.createElement("div");_t.className="pr-dia";let J=document.createElement("div");J.className="pr-dia-fill",_t.appendChild(J),i.dias.appendChild(_t),_.push({d:_t,f:J,t:""})}}function y(lt,_t){let J=Math.max(0,Math.floor(lt||0)),z=_t>0,st=z?Sd(_t/Ni.boostDuration,0,1):0,D=Math.max(eM,J+(z?1:0));f(D);let $=J+"|"+(z?1:0)+"|"+st.toFixed(2)+"|"+D;if($!==m){m=$;for(let j=0;j<_.length;j++){let rt=_[j],gt=0,pt=!1;j<J?gt=1:z&&j===J&&(gt=st,pt=!0),rt.d.hidden=j>=D,rt.d.classList.toggle("pr-use",pt);let Tt="scaleY("+gt.toFixed(3)+")";rt.t!==Tt&&(rt.t=Tt,rt.f.style.transform=Tt)}}}function v(lt){let _t=Math.round(Sd(lt,0,1)*_h),J=lt>jy;if(!(_t===l&&J===c)){l=_t,c=J;for(let z=0;z<_h;z++)s[z].classList.toggle("pr-on",z<_t);i.bar.classList.toggle("pr-hot",J)}}function g(lt,_t){let J=u,z=o("cd",i.count,lt);i.count.classList.toggle("pr-go",_t),J||(i.count.classList.add("pr-vis"),u=!0),(!J||z)&&vh(i.count,"pr-kick")}function A(){u&&(u=!1,i.count.classList.remove("pr-vis"),r.cd="")}function w(lt){if(lt==null){d=!1,p=0,A();return}if(lt>0){d=!1,g(String(Math.ceil(lt)),!1);return}d||(d=!0,p=Ed()),Ed()-p<Qy?g("GO !",!0):A()}let E=null;try{E=i.mm.getContext("2d")}catch{E=null}let C=null,M=null,S=1,L=0,Z=0,V=new Map;function et(lt){let _t=V.get(lt);return _t===void 0&&(_t=nM(lt),V.set(lt,_t)),_t}function at(lt){if(M=null,C=null,!lt||!lt.pts||!lt.pts.length)return;let _t=lt.pts,J=1/0,z=-1/0,st=1/0,D=-1/0;for(let Tt=0;Tt<_t.length;Tt++){let F=_t[Tt];F.x<J&&(J=F.x),F.x>z&&(z=F.x),F.z<st&&(st=F.z),F.z>D&&(D=F.z)}let $=z-J||1,j=D-st||1,rt=(gi-2*tM)/Math.max($,j);S=rt,L=(gi-$*rt)/2-J*rt,Z=(gi-j*rt)/2-st*rt,M=lt;let gt=document.createElement("canvas");gt.width=gi,gt.height=gi;let pt=gt.getContext("2d");if(pt){pt.lineJoin="round",pt.lineCap="round",pt.beginPath();for(let zt=0;zt<_t.length;zt++){let Nt=_t[zt].x*rt+L,$t=_t[zt].z*rt+Z;zt===0?pt.moveTo(Nt,$t):pt.lineTo(Nt,$t)}pt.closePath(),pt.strokeStyle="rgba(11, 14, 31, 0.9)",pt.lineWidth=10,pt.stroke(),pt.strokeStyle="rgba(230, 240, 255, 0.85)",pt.lineWidth=4,pt.stroke();let Tt=_t[0],F=(Tt.width||14)/2*rt,Qt=Tt.x*rt+L,Bt=Tt.z*rt+Z;pt.beginPath(),pt.moveTo(Qt-Tt.rx*F,Bt-Tt.rz*F),pt.lineTo(Qt+Tt.rx*F,Bt+Tt.rz*F),pt.strokeStyle="#ffd23f",pt.lineWidth=4,pt.stroke()}C=gt}function H(lt){if(!E||(E.clearRect(0,0,gi,gi),C&&E.drawImage(C,0,0),!M||!lt))return;let _t=M.pts,J=_t.length;if(!J)return;let z=M.length||J*M.step,st=M.step||z/J;for(let D=0;D<2;D++)for(let $=0;$<lt.length;$++){let j=lt[$],rt=!!j.isPlayer;if(rt!==(D===1))continue;let gt=(j.s||0)%z;gt<0&&(gt+=z);let pt=Math.floor(gt/st);pt>=J&&(pt=J-1),pt<0&&(pt=0);let Tt=_t[pt],F=j.d||0,Qt=(Tt.x+Tt.rx*F)*S+L,Bt=(Tt.z+Tt.rz*F)*S+Z;E.beginPath(),E.arc(Qt,Bt,rt?10:6.5,0,Math.PI*2),E.fillStyle=et(j.color),E.fill(),E.lineWidth=rt?3.5:2,E.strokeStyle=rt?"#ffffff":"rgba(11, 14, 31, 0.95)",E.stroke()}}function mt(lt,_t=1100){i.flash.textContent=String(lt),i.flash.classList.add("pr-vis"),vh(i.flash,"pr-kick"),clearTimeout(x),x=setTimeout(()=>i.flash.classList.remove("pr-vis"),_t)}function Q(lt){if(lt){if(lt.speedKmh!=null&&(o("spd",i.speed,String(Math.max(0,Math.round(lt.speedKmh)))),v(lt.speedKmh/Ky)),lt.position!=null||lt.total!=null){let _t=lt.position!=null?String(lt.position):"-",J=lt.total!=null?String(lt.total):"-";o("posc",i.posCur,_t)&&a&&vh(i.pos,"pr-pop"),o("post",i.posTot,J)}if(lt.lap!=null&&o("lap",i.lap,"Tour "+lt.lap+(lt.laps!=null?"/"+lt.laps:"")),lt.time!=null&&o("time",i.time,Fr(lt.time)),lt.bestLap!==void 0&&o("best",i.best,Fr(lt.bestLap)),lt.wrongWay!==void 0){let _t=!!lt.wrongWay;_t!==h&&(h=_t,i.wrong.classList.toggle("pr-vis",_t))}(lt.boostCharges!=null||lt.boostT!=null)&&y(lt.boostCharges,lt.boostT||0),lt.countdown!==void 0&&w(lt.countdown)}}function ut(){a=!0,t.classList.remove("pr-off")}function Mt(){a=!1,t.classList.add("pr-off")}function At(){clearTimeout(x),V.clear(),t.remove()}return{show:ut,hide:Mt,update:Q,setTrack:at,updateMinimap:H,flash:mt,dispose:At}}var Td="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Ad=0;function yh(){Ad++;let n=Sn((Date.now()^Math.imul(Ad,2654435761))>>>0),t="RUSH-";for(let e=0;e<4;e++)t+=Td[n.int(0,Td.length-1)];return t}var we=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Rd(n){return n?typeof n=="string"?Fi[n]?.name||n:n.name||Fi[n.id]?.name||"":""}function sM(n){return n&&typeof n=="object"?n:ss.find(t=>t.id===n)||{id:String(n),name:String(n),icon:"\u2022"}}function Cd(n){let t=new Map;for(let i of n||[]){let s=sM(i),r=t.get(s.id);r?r.n++:t.set(s.id,{info:s,n:1})}if(!t.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let e="";for(let{info:i,n:s}of t.values())e+=`<span class="pr-own">${we(i.icon)} ${we(i.name)}${s>1?` \xD7${s}`:""}</span>`;return e}function Mh(n){return(n||[]).map((t,e)=>`<li class="pr-srow${t.isPlayer?" pr-me":""}" style="--i:${e}"><span class="pr-rk">${e+1}</span><span class="pr-rn">${we(t.name)}</span><span class="pr-rp">${t.points??0}<small> pts</small></span></li>`).join("")}function Id(n){let t=document.createElement("div");t.className="pr-menu pr-off",n.appendChild(t);let e=null,i=null;function s(_){try{e&&typeof e.play=="function"&&e.play(_)}catch{}}function r(_,m){let f=i;if(!f||!f.items.length)return;let y=f.items.length,v=(_%y+y)%y,g=v!==f.index;f.index=v,f.focused=!0;for(let A=0;A<y;A++)f.items[A].classList.toggle("pr-sel",A===v);try{f.items[v].focus({preventScroll:!0})}catch{}g&&m&&s("select")}function o(_){let m=i;m&&(i=null,t.innerHTML="",t.classList.add("pr-off"),s("confirm"),m.resolve(_))}function a(_){return i=null,t.innerHTML=_.html,t.classList.remove("pr-off"),new Promise(m=>{i={items:Array.from(t.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:_.actions||{},resolve:m},_.onMount&&_.onMount(t,o),r(_.initial||0,!1)})}t.addEventListener("click",_=>{let m=i;if(!m||!(_.target instanceof Element))return;let f=_.target.closest("[data-act]");if(!f||!t.contains(f)||f.disabled)return;let y=m.items.indexOf(f);y>=0&&y!==m.index&&r(y,!1);let v=m.actions[f.dataset.act];v&&v(f,o)}),t.addEventListener("mouseover",_=>{let m=i;if(!m||!(_.target instanceof Element))return;let f=_.target.closest("[data-nav]");if(!f)return;let y=m.items.indexOf(f);y>=0&&y!==m.index&&r(y,!0)}),window.addEventListener("keydown",_=>{let m=i;if(!m)return;let f=_.target,y=!!f&&f.tagName==="INPUT",v=_.key||"",g=v.toLowerCase();if(v==="ArrowUp"||!y&&(v==="ArrowLeft"||g==="z"||g==="q")){_.preventDefault(),r(m.index-1,!0);return}if(v==="ArrowDown"||!y&&(v==="ArrowRight"||g==="s"||g==="d")){_.preventDefault(),r(m.index+1,!0);return}if(y){if(v==="Enter"){_.preventDefault();let A=t.querySelector("[data-main]");A&&A.click()}return}if(v.length===1){let A=m.items.find(w=>w.dataset.key===v);A&&(_.preventDefault(),A.click())}});function l({dailySeed:_,meta:m}={}){let f=m||{},y=String(_||"RUSH-DAILY").toUpperCase(),v=yh();return a({initial:2,html:`
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
</section>`,actions:{dice:g=>{let A=g.closest(".pr-screen").querySelector("[data-seed]");A&&(A.value=yh())},launch:(g,A)=>{let w=g.closest(".pr-screen").querySelector("[data-seed]"),E=(w?w.value:"").trim().toUpperCase();E||(E=yh()),A({seed:E})},daily:(g,A)=>A({seed:y})}})}function c({stage:_={},index:m=1,total:f=1,standings:y=[],weather:v}={}){let g=Rd(v)||Rd(_.weather),A=_.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">\xC9tape ${we(m)}/${we(f)}</div>
    <h2 class="pr-h2">${we(_.name)}</h2>
    <p class="pr-sub">${we(_.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${we(g)}</dd></div>
      <div><dt>Tours</dt><dd>${we(A)} ${A>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${we(_.trackSeed)}</dd></div>
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Mh(y)}</ol>
  </div></div>
</section>`,actions:{go:(w,E)=>E(void 0)}})}function h({results:_=[],standings:m=[],stage:f={}}={}){let v=[..._].sort((g,A)=>(g.position??99)-(A.position??99)).map((g,A)=>{let w=Jo[(g.position??0)-1]??0;return`<tr class="pr-tr${g.isPlayer?" pr-me":""}" style="--i:${A}"><td class="pr-c-pos">${we(g.position??"")}</td><td class="pr-c-name">${we(g.name)}</td><td class="pr-c-tm">${g.time==null?"Abandon":Fr(g.time)}</td><td class="pr-c-best">${g.bestLap==null?"\u2014":Fr(g.bestLap)}</td><td class="pr-c-pts">${w>0?"+"+w:"0"}</td></tr>`}).join("");return a({initial:0,html:`
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
    <ol class="pr-slist">${Mh(m)}</ol>
  </div></div>
</section>`,actions:{next:(g,A)=>A(void 0)}})}function u({choices:_=[],index:m=1,total:f=1,owned:y=[]}={}){let v=_.map((g,A)=>`<button type="button" class="pr-card pr-slide" style="--i:${A}" data-nav data-key="${A+1}" data-act="pick" data-id="${we(g.id)}"><span class="pr-card-in"><span class="pr-card-key">${A+1}</span><span class="pr-card-ico" aria-hidden="true">${we(g.icon)}</span><span class="pr-card-name">${we(g.name)}</span><span class="pr-card-tag">${we(g.tagline)}</span><span class="pr-card-pro">\u25B2 ${we(g.pro)}</span><span class="pr-card-con">\u25BC ${we(g.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${we(m)}/${we(f)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${Cd(y)}</div>
</section>`,actions:{pick:(g,A)=>A(g.dataset.id)}})}function d({standings:_=[],playerPosition:m,run:f={},meta:y}={}){let v=y||{},g=m??_.findIndex(E=>E.isPlayer)+1,A=g===1,w=A?"Champion !":`${we(g)}e au championnat`;return a({initial:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${A?" pr-gold":""}">${w}</div>
    <ol class="pr-slist pr-slist-big">${Mh(_)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${Cd(f.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${we(f.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>
    <p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">Nouveau run</button>
  </div></div>
</section>`,actions:{copy:E=>{let C="Copier la seed",M;try{M=navigator.clipboard.writeText(String(f.seed??""))}catch(L){M=Promise.reject(L)}let S=L=>{E.textContent=L,setTimeout(()=>{E.isConnected&&(E.textContent=C)},1500)};M.then(()=>S("Copi\xE9e !"),()=>S("Copie impossible"))},again:(E,C)=>C(void 0)}})}function p(_){e=_||null}function x(){i=null,t.innerHTML="",t.classList.add("pr-off")}return{showTitle:l,showStageIntro:c,showResults:h,showUpgradeChoice:u,showRunEnd:d,hideAll:x,setAudio:p}}var Pd=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,Ld=.6,rM=.3,Sh=6,ls=55,oM=.1,aM=25,Dd=60/128/4,lM=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],tr=n=>Number.isFinite(n)?n<0?0:n>1?1:n:0,Ud=n=>440*Math.pow(2,(n-69)/12);function cM(n){let e=new Float32Array(1024);for(let i=0;i<1024;i++){let s=i*2/1023-1;e[i]=(1+n)*s/(1+n*Math.abs(s))}return e}function Nd(){let n=null,t=!1,e=null,i=null,s=null,r=null,o=null,a=null,l=null,c=!1,h=!1,u=null,d=0,p=0,x=-1,_=0,m=0,f=0;function y(D){let $=Math.round(2*D),j=Math.round(.1*D),rt=new Float32Array($+j),gt=0,pt=0,Tt=0,F=0,Qt=0,Bt=0,zt=0;for(let b=0;b<$+j;b++){let W=Math.random()*2-1;gt=.99886*gt+W*.0555179,pt=.99332*pt+W*.0750759,Tt=.969*Tt+W*.153852,F=.8665*F+W*.3104856,Qt=.55*Qt+W*.5329522,Bt=-.7616*Bt-W*.016898,rt[b]=(gt+pt+Tt+F+Qt+Bt+zt+W*.5362)*.11,zt=W*.115926}let Nt=n.createBuffer(1,$,D),$t=Nt.getChannelData(0),Ft=0;for(let b=0;b<$;b++){let W=b<j?rt[b]*(b/j)+rt[$+b]*(1-b/j):rt[b];$t[b]=W;let ct=Math.abs(W);ct>Ft&&(Ft=ct)}let P=Ft>0?1/Ft:1;for(let b=0;b<$;b++)$t[b]*=P;return Nt}function v(D){let $=n.createBufferSource();return $.buffer=i,$.loop=!0,$.connect(D),$.start(0,Math.random()*1.5),$}function g(D){let $=n.createGain();return $.gain.value=D,$}function A(D,$,j){let rt=n.createBiquadFilter();return rt.type=D,rt.frequency.value=$,rt.Q.value=j,rt}function w(){i=y(n.sampleRate),e=g(c?0:Ld);let D=n.createDynamicsCompressor();D.threshold.value=-16,D.knee.value=12,D.ratio.value=4,D.attack.value=.005,D.release.value=.2,e.connect(D),D.connect(n.destination);let $=n.createOscillator();$.type="sawtooth",$.frequency.value=ls,$.detune.value=-6;let j=n.createOscillator();j.type="sawtooth",j.frequency.value=ls,j.detune.value=6;let rt=n.createOscillator();rt.type="square",rt.frequency.value=ls/2;let gt=g(1);$.connect(g(.28)).connect(gt),j.connect(g(.28)).connect(gt),rt.connect(g(.22)).connect(gt);let pt=A("bandpass",ls*4,1.2),Tt=g(.04);v(pt),pt.connect(Tt).connect(gt);let F=n.createWaveShaper();F.curve=cM(4),F.oversample="2x",gt.connect(F);let Qt=A("lowpass",300,1.3);F.connect(Qt);let Bt=g(0);Qt.connect(Bt).connect(e),$.start(),j.start(),rt.start(),s={osc1:$,osc2:j,osc3:rt,nBp:pt,nGain:Tt,lp:Qt,gain:Bt};let zt=A("bandpass",300,.7),Nt=g(0);v(zt),zt.connect(Nt).connect(e),r={filter:zt,gain:Nt};let $t=A("bandpass",1100,4),Ft=g(3),P=g(0);v($t),$t.connect(Ft).connect(P).connect(e),o={filter:$t,gain:P};let b=A("highpass",900,.5),W=g(3),ct=g(0);v(b),b.connect(W).connect(ct).connect(e),a={gain:ct},l=g(0),l.connect(e),t=!0}function E(D,$,j){let rt=n.currentTime;D.cancelScheduledValues(rt),D.setTargetAtTime($,rt,j)}function C(D){let $=D.t0,j=D.dur,rt=n.createOscillator();rt.type=D.type||"sine",rt.frequency.setValueAtTime(D.f0,$),D.f1&&rt.frequency.exponentialRampToValueAtTime(D.f1,$+j);let gt=n.createGain();gt.gain.setValueAtTime(1e-4,$),gt.gain.linearRampToValueAtTime(D.vol,$+(D.attack||.004)),gt.gain.exponentialRampToValueAtTime(1e-4,$+j);let pt=rt;if(D.lp){let Tt=A("lowpass",D.lp,.7);rt.connect(Tt),pt=Tt}pt.connect(gt),gt.connect(e),rt.start($),rt.stop($+j+.02)}function M(D){let $=D.t0,j=D.dur,rt=n.createBufferSource();rt.buffer=i;let gt=A(D.type,D.f0,D.q||1);D.f1&&gt.frequency.exponentialRampToValueAtTime(D.f1,$+j),gt.frequency.setValueAtTime(D.f0,$);let pt=n.createGain();pt.gain.setValueAtTime(1e-4,$),pt.gain.linearRampToValueAtTime(D.vol,$+.004),pt.gain.exponentialRampToValueAtTime(1e-4,$+j),rt.connect(gt),gt.connect(pt),pt.connect(e),rt.start($,Math.random()*1.5,j+.02)}function S(D,$){let j=n.createBufferSource();j.buffer=i;let rt=A("bandpass",700+Math.random()*900,1.2),gt=n.createGain();gt.gain.setValueAtTime(0,D),gt.gain.linearRampToValueAtTime($,D+.003),gt.gain.linearRampToValueAtTime(0,D+.03),j.connect(rt),rt.connect(gt),gt.connect(e),j.start(D,Math.random()*1.5,.05)}let L={beep(D){C({type:"square",f0:440,t0:D,dur:.12,vol:.12,lp:2400})},go(D){C({type:"sawtooth",f0:880,t0:D,dur:.4,vol:.12,lp:3e3}),C({type:"sine",f0:1320,t0:D,dur:.4,vol:.06}),C({type:"sine",f0:1760,t0:D+.02,dur:.25,vol:.04}),M({t0:D,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(D){M({t0:D,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),C({type:"sawtooth",f0:150,f1:600,t0:D,dur:.6,vol:.1,lp:1500,attack:.02})},jump(D){M({t0:D,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(D){C({type:"sine",f0:90,f1:50,t0:D,dur:.2,vol:.6,attack:.002}),M({t0:D,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(D){M({t0:D,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let $=340,j=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[rt,gt,pt]of j)C({type:"sine",f0:$*rt,t0:D,dur:pt,vol:gt,attack:.001})},select(D){C({type:"sine",f0:2400,t0:D,dur:.03,vol:.15,attack:.002})},confirm(D){C({type:"triangle",f0:660,t0:D,dur:.12,vol:.2}),C({type:"triangle",f0:990,t0:D+.09,dur:.18,vol:.2})},win(D){[523,659,784,1047,1319].forEach((j,rt)=>{let gt=rt<4?.13:.5,pt=D+rt*.11;C({type:"square",f0:j,t0:pt,dur:gt,vol:.1,lp:2500}),C({type:"triangle",f0:j,t0:pt,dur:gt,vol:.12})})},lose(D){[392,330,262].forEach(($,j)=>{C({type:"triangle",f0:$,t0:D+j*.22,dur:.3,vol:.25,attack:.01})})},pad(D){C({type:"sawtooth",f0:300,f1:1500,t0:D,dur:.15,vol:.12,lp:4e3})},lap(D){C({type:"sine",f0:1e3,t0:D,dur:.08,vol:.2}),C({type:"sine",f0:1e3,t0:D+.15,dur:.08,vol:.2})}};function Z(D){let $=n.createOscillator();$.type="sine",$.frequency.setValueAtTime(150,D),$.frequency.exponentialRampToValueAtTime(45,D+.12);let j=n.createGain();j.gain.setValueAtTime(.5,D),j.gain.exponentialRampToValueAtTime(.001,D+.3),$.connect(j),j.connect(l),$.start(D),$.stop(D+.32)}function V(D,$){let j=n.createBufferSource();j.buffer=i;let rt=A("highpass",7e3,.7),gt=n.createGain();gt.gain.setValueAtTime($,D),gt.gain.exponentialRampToValueAtTime(.001,D+.04),j.connect(rt),rt.connect(gt),gt.connect(l),j.start(D,Math.random()*1.5,.05)}function et(D,$,j){let rt=n.createOscillator();rt.type="sawtooth",rt.frequency.value=$;let gt=A("lowpass",1e3,6);gt.frequency.setValueAtTime(1e3,D),gt.frequency.exponentialRampToValueAtTime(180,D+j);let pt=n.createGain();pt.gain.setValueAtTime(1e-4,D),pt.gain.linearRampToValueAtTime(.16,D+.01),pt.gain.exponentialRampToValueAtTime(1e-4,D+j),rt.connect(gt),gt.connect(pt),pt.connect(l),rt.start(D),rt.stop(D+j+.02)}function at(D,$){let j=n.createOscillator();j.type="triangle",j.frequency.value=$;let rt=n.createGain();rt.gain.setValueAtTime(1e-4,D),rt.gain.linearRampToValueAtTime(.035,D+.005),rt.gain.exponentialRampToValueAtTime(1e-4,D+.11),j.connect(rt),rt.connect(l),j.start(D),j.stop(D+.13)}function H(D,$){let j=D&15,rt=lM[D>>4&3];if(j%4===0&&Z($),j%2===1&&V($,j%4===2?.1:.05),j%2===0){let gt=j===6||j===14?12:0;et($,Ud(rt.root+gt),Dd*1.8);let pt=[0,rt.iv[0],rt.iv[1],12];at($,Ud(rt.root+24+pt[j>>1&3]))}}function mt(){if(!t||!h)return;let D=n.currentTime;d<D&&(d=D+.02);let $=D+oM;for(;d<$;)H(p,d),d+=Dd,p++}function Q(){if(!t){if(!Pd)return;try{n=new Pd,w()}catch{n=null,t=!1;return}}if(n.state==="suspended")try{let D=n.resume();D&&D.catch&&D.catch(()=>{})}catch{}}function ut(D,$){if(!t)return;D=tr(D),$=tr($);let j=n.currentTime,rt=D*Sh,gt=Math.min(Sh-1,Math.floor(rt)),Tt=.45+.55*Math.min(1,rt-gt),F=tr(D/.08),Qt=ls+(ls*Math.pow(Sh,Tt)-ls)*F,Bt=.5*D+.5*$,zt=260+3200*Math.pow(Bt,1.3),Nt=.07+.2*D*(.35+.65*$)+.03*$;if(E(s.osc1.frequency,Qt,.04),E(s.osc2.frequency,Qt,.04),E(s.osc3.frequency,Qt*.5,.04),E(s.nBp.frequency,Qt*4,.05),E(s.nGain.gain,.04+.22*$,.05),E(s.lp.frequency,zt,.05),x!==-1&&gt!==x){let $t=s.gain.gain;$t.cancelScheduledValues(j),$t.setTargetAtTime(Nt*.35,j,.004),$t.setTargetAtTime(Nt,j+.06,.03),_=j+.12}if(x=gt,j>=_&&E(s.gain.gain,Nt,.05),$>=m)m=$;else if(m-$>.3){if(D>.6&&j>=f){let $t=.12+.2*D;for(let Ft=0;Ft<3;Ft++)S(j+Ft*.05+Math.random()*.02,$t*(1-Ft*.2));f=j+.4}m=$}}function Mt(D){if(!t)return;let $=tr(D),j=$*$;E(r.filter.frequency,250+1600*j,.2),E(r.gain.gain,.03+.35*j,.15)}function At(D){if(!t)return;let $=tr(D);E(o.filter.frequency,900+500*$,.05),E(o.gain.gain,$,.03)}function lt(D){t&&E(a.gain.gain,tr(D)*.25,.1)}function _t(D){t&&Object.prototype.hasOwnProperty.call(L,D)&&L[D](n.currentTime+.01)}function J(D){c=!!D,t&&E(e.gain,c?0:Ld,.015)}function z(){t&&(h||(h=!0,p=0,d=n.currentTime+.05),E(l.gain,rM,.05),u||(u=setInterval(mt,aM)),mt())}function st(){h=!1,u&&(clearInterval(u),u=null),t&&E(l.gain,0,.05)}return{resume:Q,setEngine:ut,setWind:Mt,setSkid:At,setRain:lt,play:_t,setMuted:J,startMusic:z,stopMusic:st}}var bh=1/120,Or=new URLSearchParams(location.search),hM=document.getElementById("game"),vi=new Do({canvas:hM,antialias:!0,powerPreference:"high-performance"});vi.setPixelRatio(Math.min(window.devicePixelRatio,2));vi.shadowMap.enabled=!0;vi.shadowMap.type=Sc;vi.toneMapping=Er;vi.toneMappingExposure=1.05;vi.outputColorSpace=We;var _i=new No,Rn=new Xe(70,1,.3,6e3);_i.add(Rn);var cs=yd(Rn),kd=document.getElementById("ui"),Jn=wd(kd),xi=Id(kd),Ce=Nd();xi.setAudio?.(Ce);var Aa=new Set,He={throttle:0,brake:0,steer:0,boost:!1,drift:!1},Eh=0,uM=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",n=>{n.target instanceof HTMLInputElement||(Aa.add(n.code),Je==="race"&&uM.includes(n.code)&&n.preventDefault(),n.code==="KeyM"&&(wh=!wh,Ce.setMuted(wh)),(n.code==="KeyP"||n.code==="Escape")&&Je==="race"&&(Ah=!Ah))});addEventListener("keyup",n=>Aa.delete(n.code));addEventListener("blur",()=>Aa.clear());addEventListener("pointerdown",()=>Ce.resume(),{once:!1});var wh=!1,Ah=!1;function fM(n){let t=(...s)=>s.some(r=>Aa.has(r));He.throttle=t("ArrowUp","KeyW")?1:0,He.brake=t("ArrowDown","KeyS")?1:0;let e=(t("ArrowRight","KeyD")?1:0)-(t("ArrowLeft","KeyA")?1:0);Eh+=(e-Eh)*Math.min(1,n*14),He.steer=Eh,He.boost=t("Space"),He.drift=t("ShiftLeft","ShiftRight","KeyX");let i=navigator.getGamepads?.()[0];if(i){let s=i.axes[0]||0;Math.abs(s)>.12&&(He.steer=s),He.throttle=Math.max(He.throttle,i.buttons[7]?.value||0,i.buttons[0]?.pressed?1:0),He.brake=Math.max(He.brake,i.buttons[6]?.value||0),He.boost=He.boost||!!i.buttons[2]?.pressed,He.drift=He.drift||!!i.buttons[1]?.pressed||!!i.buttons[5]?.pressed}return He}var se=null,Je="boot",Rh=0,Ch=0,Ih=0,Br=99;function dM(){if(se){for(let n of se.bikes)_i.remove(n.model.group);_i.remove(se.road.group),se.road.dispose?.(),se.env.dispose?.(),se.env.group?.parent&&se.env.group.parent.remove(se.env.group),se.fx.dispose?.(),se.post.dispose?.(),se=null}}function Hd({trackSeed:n,weatherId:t,laps:e,riders:i,autopilot:s}){dM();let r=Sn(n),o=Af(n),a=Fi[t]||Fi.sunset,l=ed(_i,o,a,r.fork("env")),c=qf(o,a,r.fork("road"));_i.add(c.group);let h=md(_i,a),u=Md(vi,_i,Rn,a),d=Uf({track:o,laps:e,env:a,rng:r.fork("race"),riders:i}),p=d.riders.map(_=>{let m=hd({color:_.color,accent:_.accent,isPlayer:!!_.isPlayer&&!!a.night});return m.group.rotation.order="YXZ",_i.add(m.group),{rider:_,model:m,pose:{},prev:new k,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),x=s?ea({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},r.fork("auto")):null;return se={track:o,weather:a,env:l,road:c,fx:h,post:u,race:d,bikes:p,autoAI:x,playerBike:p.find(_=>_.rider.isPlayer)||p[0]},Jn.setTrack(o),Xd(),Vd(.016),cs.snap(Ph()),Ch=d.player?.position||i.length,Ih=1,Br=99,window.__game={stage:se,renderer:vi,scene:_i,camera:Rn,RL:rh},se}var zn={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function Ph(){let n=se.playerBike,t=n.rider.state;return zn.x=n.w.x,zn.y=n.w.y,zn.z=n.w.z,zn.heading=n.w.heading,zn.yaw=t.yaw,zn.lean=t.lean,zn.speedRatio=Math.min(1.3,t.speed/n.rider.stats.maxSpeed),zn.airborne=t.airborne,zn.boosting=t.boostT>0,zn.slope=n.w.slope||0,zn}function Vd(n){let{track:t,fx:e,weather:i}=se;for(let s of se.bikes){let r=s.rider.state;Rf(t,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z),o.rotation.y=s.w.heading+r.yaw,o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let a=s.pose;a.lean=r.lean,a.steer=r.steer,a.pitch=r.pitch,a.compress=r.compress,a.wheelSpin=r.wheelSpin,a.speedRatio=r.speed/s.rider.stats.maxSpeed,a.airborne=r.airborne,a.drift=r.drift,a.boost=r.boostT>0,a.braking=s.rider.isPlayer?He.brake>.1:!!s.rider.braking,s.model.update(a,n);let l=o.rotation.y,c=Math.sin(l),h=Math.cos(l),u=s.w.x-c*.7,d=s.w.z-h*.7,p=s.w.y+.05,x=c*r.speed,_=h*r.speed;!r.airborne&&r.speed>8&&(r.drift>.35&&(Math.random()<r.drift*.9&&e.emit("smoke",u,p,d,x*.2,1.2,_*.2,1),s.has&&e.addSkid(s.prev.x,s.prev.y,s.prev.z,u,p,d,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&e.emit("dust",u,p,d,x*.25,1.5,_*.25,2),i.wet>.2&&r.speed>20&&Math.random()<i.wet*.8&&e.emit("spray",u,p,d,x*.35,2.5,_*.35,2)),r.boostT>0&&e.emit("boost",u-c*.4,p+.45,d-h*.4,x*.9,.2,_*.9,1),s.prev.set(u,p,d),s.has=!r.airborne;let m=s.rider.isPlayer?null:s.rider.frameEvents;m&&m.length&&Gd(s,m,!1)}}function Gd(n,t,e){let{fx:i}=se,s=n.rider.state,r=n.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let l of t)l==="land"||l==="hardLand"?(i.emit("land",n.w.x,n.w.y+.1,n.w.z,o*.3,1,a*.3,l==="hardLand"?40:22),e&&(Ce.play("land"),cs.shake(l==="hardLand"?.9:.45))):l==="wall"?(i.emit("spark",n.w.x,n.w.y+.5,n.w.z,o*.5,3,a*.5,26),e&&(Ce.play("hit"),cs.shake(.7))):l==="jump"?e&&Ce.play("jump"):l==="boost"?e&&(Ce.play("boost"),cs.shake(.3),Jn.flash("BOOST !",600)):l==="pad"&&e&&(Ce.play("pad"),cs.shake(.2))}function pM(n){let{race:t,autoAI:e,track:i}=se,s=t.player,r=He;if(e||Je==="finish")if(e){let a=t.riders.filter(l=>l!==s).map(l=>l.state);r=na(e,s.state,i,s.stats,a,n)}else r=mM;t.update(n,r);let o=s.state.events;o.length&&(Gd(se.playerBike,o,!e),o.length=0)}var mM={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},An={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Th=[],Fd=new k,Od=performance.now(),wa=0,Ta=0;function Wd(n){requestAnimationFrame(Wd);let t=Math.min(.05,(n-Od)/1e3);if(Od=n,!se)return;if(Ah){se.post.render(0);return}Ta+=t,Rh+=t;let{race:e}=se,i=Je==="race"||Je==="attract"||Je==="finish";if(i){Je==="race"&&fM(t),wa+=t;let l=0;for(;wa>=bh&&l++<8;)pM(bh),wa-=bh;l>=8&&(wa=0)}Vd(t);let s=e.player,r=s.state,o=Math.min(1.3,r.speed/s.stats.maxSpeed),a=Ph();Je==="intro"||Je==="menu"||Je==="finish"&&Rh>1.2?gM(a,t):cs.update(t,a),Fd.set(a.x,a.y,a.z),se.env.update(t,Ta,Fd),se.road.update(t,Ta),se.fx.setSpeed(i?o:0,r.boostT>0),se.fx.update(t,Rn),se.post.setSpeed(i?o:0,r.boostT>0),se.post.render(t),(Je==="race"||Je==="finish")&&(Ce.setEngine(Math.min(1,o),Je==="race"?He.throttle:.3),Ce.setWind(Math.min(1,o)),Ce.setSkid(r.airborne?0:Math.min(1,r.drift))),Je==="race"&&xM(e,s,r)}var Bd=new k;function gM(n,t){let e=Ta*.35+n.heading;Bd.set(n.x+Math.sin(e)*7.5,n.y+2.6,n.z+Math.cos(e)*7.5),Rn.position.lerp(Bd,Math.min(1,t*2.5)),Rn.fov+=(55-Rn.fov)*Math.min(1,t*3),Rn.updateProjectionMatrix(),Rn.lookAt(n.x,n.y+.9,n.z)}function xM(n,t,e){An.speedKmh=e.speed*3.6,An.position=t.position,An.total=n.riders.length,An.lap=Math.min(n.laps,Math.max(1,t.lap)),An.laps=n.laps,An.time=n.time,An.bestLap=t.bestLap??null,An.boostCharges=e.boostCharges,An.boostT=e.boostT,An.countdown=n.phase==="countdown"?n.countdown:n.time<.9?0:null,An.wrongWay=Math.abs(e.yaw)>1.4,Jn.update(An),Th.length=0;for(let i of n.riders)Th.push({s:i.state.s,d:i.state.d,isPlayer:!!i.isPlayer,color:i.color});if(Jn.updateMinimap(Th),n.phase==="countdown"){let i=Math.ceil(n.countdown);i!==Br&&(Br=i,i>0&&Ce.play("beep"))}else Br!==0&&(Br=0,Ce.play("go"),Ce.startMusic?.());n.phase==="racing"&&(t.position<Ch&&Jn.flash(t.position===1?"EN T\xCATE !":"+1 PLACE",700),Ch=t.position,t.lap!==Ih&&t.lap<=n.laps&&(Ih=t.lap,Ce.play("lap"),t.lap===n.laps&&Jn.flash("DERNIER TOUR",1400))),n.phase==="finished"&&Je==="race"&&_M()}function Xd(){let n=innerWidth,t=innerHeight;vi.setSize(n,t,!1),Rn.aspect=n/t,Rn.updateProjectionMatrix(),se?.post.setSize(n,t)}addEventListener("resize",Xd);function zr(n){Je=n,Rh=0}var De=null,er=nh(),qd=null;function _M(){zr("finish"),Jn.flash(`ARRIV\xC9E \u2014 ${se.race.player.position}${se.race.player.position===1?"er":"e"}`,2200),Ce.play(se.race.player.position<=3?"win":"lose"),Ce.stopMusic?.(),setTimeout(()=>qd?.(),3200)}function zd(){let n=aa(oa("ATTRACT"));for(let t of n)t.stats=Xs({upgrades:[]});Hd({trackSeed:"ATTRACT-"+la(),weatherId:"sunset",laps:99,riders:n,autopilot:!0}),Jn.hide(),zr("attract")}async function vM(){for(zd(),document.getElementById("boot").remove(),requestAnimationFrame(Wd);;){let n=Or.get("seed");for(n||({seed:n}=await xi.showTitle({dailySeed:la(),meta:er})),Ce.resume(),De=oa(n);!Ar(De);){let i=De.stages[De.stageIndex],s=Xs(De),r=aa(De).map(a=>({...a,stats:a.isPlayer?s:Xs({upgrades:[]})}));xi.hideAll(),Hd({trackSeed:i.trackSeed,weatherId:Or.get("weather")||i.weather,laps:i.laps,riders:r,autopilot:Or.has("auto")}),zr("intro"),Ce.setRain(se.weather.rain||0),Or.has("auto")||await xi.showStageIntro({stage:i,index:De.stageIndex+1,total:De.stages.length,standings:qs(De),weather:se.weather}),xi.hideAll(),cs.snap(Ph()),Jn.show(),zr("race"),await new Promise(a=>{qd=a}),Jn.hide(),Ce.setEngine(.1,0),Ce.setWind(0),Ce.setSkid(0);let o=se.race.results();if(th(De,o),await xi.showResults({results:o,standings:qs(De),stage:i}),!Ar(De)){let a=jc(De),l=De.upgrades.map(h=>ss.find(u=>u.id===h)).filter(Boolean),c=await xi.showUpgradeChoice({choices:a,index:De.stageIndex,total:De.stages.length,owned:l});Qc(De,c)}}let t=qs(De),e=t.findIndex(i=>i.isPlayer)+1;er=sh(er,De)||er,ih(er),zr("menu"),await xi.showRunEnd({standings:t,playerPosition:e,run:De,meta:er}),xi.hideAll(),Or.delete("seed"),zd()}}vM().catch(n=>{console.error(n);let t=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));t.className="err",t.textContent=`Erreur de d\xE9marrage :
`+(n?.stack||n)});
